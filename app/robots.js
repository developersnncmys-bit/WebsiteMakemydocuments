// Generates /robots.txt at build time (works with `output: 'export'`).
export const dynamic = 'force-static';

const SITE = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.makemydocuments.com').replace(/\/$/, '');

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Don't index transactional/outcome pages or form steps.
        disallow: ['/request_success', '/failure', '/affidavit/'],
      },
    ],
    sitemap: [`${SITE}/sitemap.xml`, `${SITE}/blog-sitemap.xml`],
    host: SITE,
  };
}
