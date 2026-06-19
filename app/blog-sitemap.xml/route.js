// Separate sitemap for blog articles: /blog-sitemap.xml. Generated at build
// time (static export). Listed alongside the main sitemap in robots.txt.
export const dynamic = 'force-static';

const SITE = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.makemydocuments.com').replace(/\/$/, '');
const API = process.env.NEXT_PUBLIC_API_URL || 'https://api.makemydocuments.com';

const xmlEscape = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export async function GET() {
  const now = new Date().toISOString();
  let entries = [];
  try {
    const res = await fetch(`${API}/api/blogs?status=published`);
    const json = await res.json();
    if (json && Array.isArray(json.data)) {
      entries = json.data
        .filter((b) => b && b.slug)
        .map((b) => ({
          loc: `${SITE}/blogs/${b.slug}`,
          lastmod: b.updatedAt ? new Date(b.updatedAt).toISOString() : now,
        }));
    }
  } catch {
    // Build continues with whatever we have (possibly empty).
  }

  const body = entries
    .map(
      (e) =>
        `  <url>\n    <loc>${xmlEscape(e.loc)}</loc>\n    <lastmod>${e.lastmod}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.6</priority>\n  </url>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
