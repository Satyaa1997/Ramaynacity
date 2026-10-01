const fs = require('fs');

const files = [
  'about-us.html',
  'contact.html',
  'disclaimer.html',
  'gallery.html',
  'index.html',
  'news-gallery.html',
  'privacy-policy.html',
  'rera.html',
  'sitemap.html',
  'terms-conditions.html',
  'fix_offcanvas.js'
];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // 1. Footer two numbers: <a href="tel:+917084222114">+91-7084222114</a>, <a href="tel:+919559272128">+91-9559272128</a>
  content = content.replace(/<a\s+href="tel:\+917084222114">\+91-7084222114<\/a>,\s*<a\s+href="tel:\+919559272128">\+91-9559272128<\/a>/g, '<a href="tel:+918882125125">+91-8882125125</a>');

  // 2. Contact card phone numbers in contact.html
  content = content.replace(
    /<div>\+91-7084222114<\/div>\s*<div[^>]*>\+91-9559272128<\/div>/g,
    '<div>+91-8882125125</div>'
  );

  // 3. Floating Call button href and span
  content = content.replace(/href="tel:\+91-7084222114"/g, 'href="tel:+918882125125"');
  content = content.replace(/href="tel:\+917084222114"/g, 'href="tel:+918882125125"');

  // 4. WhatsApp links
  content = content.replace(/api\.whatsapp\.com\/send\?phone=7084222114/g, 'api.whatsapp.com/send?phone=918882125125');
  content = content.replace(/wa\.me\/917084222114/g, 'wa.me/918882125125');

  // 5. Meta tags / text Call +91-7084222114
  content = content.replace(/Call \+91-7084222114/g, 'Call +91-8882125125');

  // 6. Any remaining +91-7084222114
  content = content.replace(/\+91-7084222114/g, '+91-8882125125');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated: ' + file);
  } else {
    console.log('No change needed or already updated: ' + file);
  }
});

