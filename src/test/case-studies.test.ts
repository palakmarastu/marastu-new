import { describe, expect, it } from "vitest";
import { caseStudies, caseStudyBySlug, caseStudySlug, caseStudySections, digitalMarketingGraphs, digitalMarketingJourney } from "@/lib/site";

describe("Original published case-study collection", () => {
  it("includes all six original case-study addresses", () => {
    expect(caseStudies.map((c) => new URL(c.href).pathname).sort()).toEqual([
      "/case-study/enclave-dental-ai-seo/",
      "/case-study/enclave-dental-digital-marketing/",
      "/case-study/enclave-dental-google-ads-sem/",
      "/case-study/enclave-dental-local-seo/",
      "/case-study/enclave-dental-seo/",
      "/case-study/enclave-dental-social-media/",
    ]);
  });
  it("provides original detail content for every case study", () => {
    for (const study of caseStudies) {
      expect(caseStudyBySlug(caseStudySlug(study))).toBe(study);
      expect(caseStudySections(caseStudySlug(study)).length).toBeGreaterThan(4);
      expect(study.img).toMatch(/^https:\/\/www\.marastu\.com\/wp-content\/uploads\//);
      expect(caseStudySections(caseStudySlug(study)).every((section) => !section.html.includes("/__l5e/"))).toBe(true);
    }
  });
  it("does not show an unrelated project for unknown slugs", () => {
    expect(caseStudyBySlug("unknown-case-study")).toBeUndefined();
  });
  it("keeps published SEO growth and keyword counts", () => {
    expect(digitalMarketingGraphs["seo-impact"].rows.map((row) => row.value)).toEqual([100, 160]);
    expect(digitalMarketingGraphs["seo-impact"].metrics.map((metric) => metric.value)).toEqual(["68+", "90+"]);
  });
  it("keeps the published six-month paid-search growth", () => {
    expect(digitalMarketingGraphs["sem-impact"].rows.map((row) => row.value)).toEqual([182, 125, 267]);
  });
  it("keeps the published social totals without inventing monthly values", () => {
    expect(digitalMarketingGraphs["smm-impact"].rows.map((row) => row.value)).toEqual([462800, 81800]);
    expect(digitalMarketingGraphs["smm-impact"].metrics[0].value).toBe("786");
  });
  it("connects all five journey channels to existing local case studies", () => {
    expect(digitalMarketingJourney.map((step) => step.channel)).toEqual(["SEO", "Local SEO", "AI SEO", "SEM", "Social Media"]);
    for (const step of digitalMarketingJourney) expect(caseStudyBySlug(step.slug)).toBeDefined();
  });
});