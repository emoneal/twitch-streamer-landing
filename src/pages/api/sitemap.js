import { create } from 'xmlbuilder2';

export default function handler(req, res) {
  // Generate your sitemap content dynamically here
  const xml = create({ version: '1.0', encoding: 'UTF-8' })
    .ele('urlset', { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' })
    .ele('url')
    .ele('loc').txt('https://www.pixelcafe.moe').up()
    .ele('loc').txt('https://www.pixelemii.com').up()
    .ele('lastmod').txt(new Date().toISOString()).up()
    .ele('changefreq').txt('daily').up()
    .ele('priority').txt('1.0').up()
    .up()
    // Add more URLs dynamically
    .end();

  res.setHeader('Content-Type', 'text/xml');
  res.write(xml);
  res.end();
}