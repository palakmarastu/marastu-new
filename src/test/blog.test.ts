import { describe, expect, it } from "vitest";
import { blogPosts, blogPostBySlug } from "@/lib/site";

describe("Published blog article addresses", () => {
  it("preserves the existing Google Ads for dentists address", () => {
    expect(blogPostBySlug("google-ads-for-dentists")?.title).toBe("Google Ads for Dentists: A Complete Guide");
  });
  it("does not substitute an article for an unknown address", () => {
    expect(blogPostBySlug("not-a-published-article")).toBeUndefined();
  });
  it("keeps a unique address for every imported article", () => {
    expect(new Set(blogPosts.map((post) => post.slug)).size).toBe(blogPosts.length);
  });
  it("uses the published Marastu CDN for article images and inline content", () => {
    for (const post of blogPosts) {
      expect(post.image).toMatch(/^https:\/\/www\.marastu\.com\/wp-content\/uploads\//);
      expect(post.content).not.toContain("/__l5e/");
    }
  });
});