// ==============================
// PONTO DO ALUMÍNIO — Components
// Injects shared nav + footer
// ==============================

(function () {

  const LOGO_SVG = `<svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="7" height="7" rx="1"/>
    <rect x="10" y="1" width="7" height="7" rx="1"/>
    <rect x="1" y="10" width="7" height="7" rx="1"/>
    <rect x="10" y="10" width="7" height="7" rx="1"/>
  </svg>`;

  const WA_SVG = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M11.996 2.003C6.476 2.003 2 6.48 2 12.001c0 1.822.487 3.53 1.337 5.009L2 22l5.133-1.318A9.952 9.952 0 0012 22c5.522 0 10-4.478 10-9.999S17.518 2.003 11.996 2.003zm.004 18.358a8.313 8.313 0 01-4.235-1.157l-.303-.18-3.147.808.831-3.065-.197-.315A8.36 8.36 0 013.64 12c0-4.617 3.744-8.358 8.36-8.358 4.618 0 8.362 3.741 8.362 8.358 0 4.618-3.744 8.361-8.362 8.361z" fill-rule="evenodd" clip-rule="evenodd"/>
  </svg>`;

  // Inject nav
  const navPlaceholder = document.getElementById('site-nav');
  if (navPlaceholder) {
    navPlaceholder.outerHTML = `
<nav class="site-nav" id="site-nav">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo">
      <div class="nav-logo-mark">${LOGO_SVG}</div>
      Ponto do Alumínio
    </a>
    <ul class="nav-links">
      <li><a href="index.html">Início</a></li>
      <li><a href="produtos.html">Produtos</a></li>
      <li><a href="promocao.html">Promoção</a></li>
    </ul>
    <a href="#contato" class="nav-cta btn">Orçamento</a>
    <button class="nav-hamburger" id="hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
<div class="nav-mobile" id="mobileNav">
  <a href="index.html">Início</a>
  <a href="produtos.html">Produtos</a>
  <a href="promocao.html">🏷️ Promoção</a>
  <a href="index.html#contato" class="nav-cta btn btn-primary">Solicitar Orçamento</a>
</div>`;
  }

  // Inject footer
  const footerPlaceholder = document.getElementById('site-footer');
  if (footerPlaceholder) {
    footerPlaceholder.outerHTML = `
<footer class="site-footer" id="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <div class="footer-logo">
          <div class="footer-logo-mark">${LOGO_SVG}</div>
          Ponto do Alumínio
        </div>
        <p class="footer-desc">Especialistas em esquadrias, portas, janelas e estruturas de alumínio desde 2005. Qualidade, pontualidade e garantia em cada projeto.</p>
        <div class="footer-socials">
          <a href="#" class="social-link" aria-label="Instagram">ig</a>
          <a href="#" class="social-link" aria-label="Facebook">fb</a>
          <a href="#" class="social-link" aria-label="YouTube">yt</a>
        </div>
      </div>
      <div>
        <p class="footer-col-title">Navegação</p>
        <ul class="footer-links">
          <li><a href="index.html">Início</a></li>
          <li><a href="produtos.html">Produtos</a></li>
          <li><a href="promocao.html">Promoção</a></li>
          <li><a href="index.html#quem-somos">Quem Somos</a></li>
          <li><a href="index.html#como-comprar">Como Comprar</a></li>
        </ul>
      </div>
      <div>
        <p class="footer-col-title">Produtos</p>
        <ul class="footer-links">
          <li><a href="produtos.html#linha-aluminio">Linha Alumínio</a></li>
          <li><a href="produtos.html#linha-branca">Linha Branca</a></li>
          <li><a href="promocao.html">Ofertas</a></li>
        </ul>
      </div>
      <div>
        <p class="footer-col-title">Contato</p>
        <ul class="footer-contact">
          <li>📞 (11) 9 0000-0000</li>
          <li>✉️ contato@pontodoaluminio.com.br</li>
          <li>📍 Rua do Alumínio, 123 — São Paulo, SP</li>
          <li>🕐 Seg–Sex 8h–18h · Sáb 8h–13h</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="container" style="width:100%; display:flex; justify-content:space-between; flex-wrap:wrap; gap:.5rem;">
      <span>© 2025 Ponto do Alumínio — Todos os direitos reservados</span>
      <span>CNPJ: 00.000.000/0001-00</span>
    </div>
  </div>
</footer>
<a href="https://wa.me/5511900000000" class="whatsapp-float" target="_blank" rel="noopener" aria-label="WhatsApp">${WA_SVG}</a>`;
  }

})();
