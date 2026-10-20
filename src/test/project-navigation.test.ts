import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { JSDOM } from "jsdom";
import { afterEach, describe, expect, it, vi } from "vitest";

const read = (path: string) => readFileSync(resolve(path), "utf8");
const homepage = read("src/routes/index.tsx").match(/const html = `([\s\S]*?)`;/)?.[1];
const scripts = ["content.js", "projects.js", "app.js"]
  .map((name) => read(`public/site/${name}`)).join("\n");
const slugs = [
  "emergency-dispatcher-ai-chatbot", "wastenot",
  "designing-data-autonomy", "questions-in-data",
];
const browsers: JSDOM[] = [];

function load(hash: string) {
  if (!homepage) throw new Error("Homepage fixture is missing");
  const browser = new JSDOM(homepage, {
    url: `https://portfolio.example/${hash}`, runScripts: "outside-only",
  });
  browsers.push(browser);
  const { window } = browser;
  const frames: FrameRequestCallback[] = [];
  window.matchMedia = vi.fn().mockReturnValue({ matches: false });
  window.requestAnimationFrame = (callback) => { frames.push(callback); return frames.length; };
  window.setInterval = vi.fn().mockReturnValue(1);
  window.scrollTo = vi.fn();
  const scroll = vi.fn();
  window.HTMLElement.prototype.scrollIntoView = scroll;
  Object.assign(window, {
    IntersectionObserver: class { observe() {} unobserve() {} disconnect() {} },
  });
  window.eval(scripts);
  const flushFrame = () => frames.splice(0).forEach((callback) => callback(0));
  const navigate = (next: string) => {
    window.history.replaceState(null, "", next);
    window.dispatchEvent(new window.HashChangeEvent("hashchange"));
  };
  return { window, scroll, flushFrame, navigate };
}

afterEach(() => { browsers.splice(0).forEach((browser) => browser.window.close()); });

describe("Shared project hash navigation", () => {
  it.each(slugs)("opens %s directly and returns to Selected Work", (slug) => {
    const app = load(`#/work/${slug}`);
    expect(app.window.document.body.classList.contains("route-project")).toBe(true);
    expect(app.window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: "instant" });
    const link = app.window.document.querySelector<HTMLAnchorElement>(".pp-backlink");
    if (!link) throw new Error("Project return link is missing");
    app.navigate(new URL(link.href).hash);
    expect(app.window.document.body.classList.contains("route-project")).toBe(false);
    app.flushFrame();
    app.flushFrame();
    expect(app.scroll).toHaveBeenCalledWith({ block: "start", behavior: "smooth" });
    expect(app.scroll.mock.instances.at(-1)).toBe(app.window.document.getElementById("work"));
  });

  it("ignores an obsolete home scroll when another project is opened", () => {
    const app = load(`#/work/${slugs[0]}`);
    app.navigate("#work");
    app.navigate(`#/work/${slugs[2]}`);
    app.flushFrame();
    app.flushFrame();
    expect(app.scroll).not.toHaveBeenCalled();
    expect(app.window.document.body.classList.contains("route-project")).toBe(true);
  });
});