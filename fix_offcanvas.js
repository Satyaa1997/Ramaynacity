const fs = require('fs');

const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const cleanOffcanvas = `  <!--===== MOBILE OFFCANVAS =======-->
  <div class="homepage2-body">
    <div class="vl-offcanvas">
      <div class="vl-offcanvas-wrapper">
        <div class="vl-offcanvas-header d-flex justify-content-between align-items-center mb-90">
          <div class="vl-offcanvas-logo">
            <a href="index.html"><img src="assets/img/logo/logo1.png" alt="Ramayana City"></a>
          </div>
          <div class="vl-offcanvas-close">
            <button class="vl-offcanvas-close-toggle"><i class="fa-solid fa-xmark"></i></button>
          </div>
        </div>
        <div class="vl-offcanvas-menu d-lg-none mb-40">
          <nav></nav>
        </div>
        <div class="space20"></div>
        <div class="vl-offcanvas-info">
          <h3 class="vl-offcanvas-sm-title">Contact Us</h3>
          <div class="space20"></div>
          <span><a href="mailto:info@ramayanacity.com"><i class="fa-regular fa-envelope"></i> info@ramayanacity.com</a></span>
          <span><a href="tel:+917084222114"><i class="fa-solid fa-phone"></i> +91-7084222114</a></span>
          <span><a href="#"><i class="fa-solid fa-location-dot"></i> <strong>Site:</strong> NH-56B, Khatola Village, Sarojini Nagar, Lucknow, U.P.</a></span>
          <span><a href="#"><i class="fa-solid fa-building"></i> <strong>Office:</strong> 309, 3rd Floor, Felix Square, Sushant Golf City, Lucknow - 226030</a></span>
        </div>
        <div class="space20"></div>
        <div class="vl-offcanvas-social">
          <h3 class="vl-offcanvas-sm-title">Follow Us</h3>
          <div class="space20"></div>
          <a href="https://www.facebook.com/profile.php?id=61575721407051"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-youtube"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-whatsapp"></i></a>
        </div>
      </div>
    </div>
  </div>
  <div class="vl-offcanvas-overlay"></div>`;

const offcanvasRegex = /<!--===== MOBILE OFFCANVAS =======-->[\s\S]*?<div class="vl-offcanvas-overlay"><\/div>/;

htmlFiles.forEach(filename => {
  let content = fs.readFileSync(filename, 'utf8');
  if (offcanvasRegex.test(content)) {
    content = content.replace(offcanvasRegex, cleanOffcanvas);
    fs.writeFileSync(filename, content, 'utf8');
    console.log(`Cleaned offcanvas in ${filename}`);
  }
});
