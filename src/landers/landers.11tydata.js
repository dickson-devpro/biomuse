// Landing pages: standalone HTML, managed from /admin.
//
// Each file here holds one complete HTML document in its body. Nothing from the
// blog is applied — no layout, no site CSS, no ad blocks, no rewarded gate.
// templateEngineOverride:false means Eleventy does NOT parse the body, so
// {{ }} and {% %} inside third-party scripts are safe and won't break the build.
module.exports = {
  layout: null,
  templateEngineOverride: false,
  eleventyExcludeFromCollections: true,
  eleventyComputed: {
    permalink: (data) => {
      if (data.draft) return false;
      const slug = String(data.slug || data.page.fileSlug || "")
        .trim()
        .replace(/^\/+|\/+$/g, "")
        .replace(/[^A-Za-z0-9/_-]+/g, "-")
        .replace(/-{2,}/g, "-")
        .replace(/^-+|-+$/g, "")
        .toLowerCase();
      // No usable slug: skip rather than silently overwrite the homepage.
      return slug ? `/${slug}/index.html` : false;
    }
  }
};
