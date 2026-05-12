(function () {
  'use strict';

  /** Número WhatsApp (código país sin +). Ejemplo Ecuador: 593991234567 */
  var WHATSAPP_NUMBER = '593962217054';

  /** Enlaces redes (edita con tus perfiles reales) */
  var SOCIAL_INSTAGRAM = 'https://www.instagram.com/aura.apparel_ec?igsh=MTBqOXFoeGJ1OGJxNQ==';
  var SOCIAL_TIKTOK = 'https://www.tiktok.com/@aura.vestidoss?_r=1&_t=ZS-95DSkkeij24';

  var monthNames = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];

  function toTitleCase(s) {
    return String(s || '')
      .trim()
      .replace(/\s+/g, ' ')
      .split(' ')
      .map(function (w) {
        return w ? w.charAt(0).toUpperCase() + w.slice(1) : w;
      })
      .join(' ');
  }

  /**
   * Catálogo + ficha producto: edita nombre, imagen, precio, categoría, descripción y tallas.
   * Los ids se usan en ?id= de producto.html. (Opcional: piezas 14–30 comentadas abajo.)
   */
  function vestidoSlot(id, title, price, image, category, description, sizes, images) {
    var o = {
      id: id,
      title: title,
      price: price,
      image: image,
      category: category,
      description: description,
      sizes: sizes && sizes.length ? sizes : ['XS', 'S', 'M', 'L'],
    };
    if (images && images.length) o.images = images;
    return o;
  }

  var VESTIDOS_CATALOGO = [
    vestidoSlot(
      'verde-esmeralda',
      'Verde Esmeralda',
      '$60',
      'Images_Catalogo/modeloInicio2.png',
      'Vestidos',
      'Corte satinado con caída fluida, ideal para destacar en eventos de gala nocturnos.',
      ['34', '36', '38', '40'],
    ),
    vestidoSlot(
      'lentejuelas-noir',
      'Lentejuelas Noir',
      '$75',
      'Images_Catalogo/lentejuelas.png',
      'Conjuntos',
      'Brillo sofisticado en dos piezas que definen la silueta con elegancia y audacia.',
      ['XS', 'S', 'M', 'L'],
    ),
    vestidoSlot(
      'silver-night',
      'Silver Night',
      '$60',
      'Images_Catalogo/azulito.png',
      'Noche',
      'Destellos plateados en un diseño de espalda abierta para una presencia inolvidable.',
      ['XS', 'S', 'M', 'L', 'XL'],
    ),
    vestidoSlot(
      'rose-velvet',
      'Rose Velvet',
      '$85',
      'Images_Catalogo/roseVelvet.png',
      'Gala',
      'Textura de terciopelo premium en tono rosa viejo, equilibrio perfecto entre dulce y fatal.',
      ['S', 'M', 'L'],
    ),
    vestidoSlot(
      'midnight-blue',
      'Midnight Blue',
      '$70',
      'Images_Catalogo/midnightBlue.png',
      'Noche',
      'Azul profundo en seda natural. Una pieza clásica que exhala lujo silencioso.',
      ['XS', 'S', 'M', 'L'],
    ),
    vestidoSlot(
      'gold-satin',
      'Gold Satin',
      '$95',
      'Images_Catalogo/gold.png',
      'Luxury',
      'El resplandor del oro en un corte sirena que abraza cada curva con delicadeza.',
      ['S', 'M', 'L', 'XL'],
    ),
    vestidoSlot(
      'pearl-white',
      'Pearl White',
      '$65',
      'Images_Catalogo/white.png',
      'Evento',
      'Minimalismo puro. Blanco perlado con escote estructurado para un look pulcro y moderno.',
      ['XS', 'S', 'M'],
    ),
    vestidoSlot(
      'crimson-red',
      'Crimson Red',
      '$80',
      'Images_Catalogo/crimsonRed.png',
      'Gala',
      'Rojo carmesí vibrante. Diseñado para ser el centro de atención en cualquier salón.',
      ['S', 'M', 'L', 'XL'],
    ),
    vestidoSlot(
      'onyx-sparkle',
      'Onyx Sparkle',
      '$75',
      'Images_Catalogo/onix.png',
      'Noche',
      'Negro absoluto con micro-cristales que simulan un cielo estrellado en movimiento.',
      ['XS', 'S', 'M', 'L'],
    ),
    vestidoSlot(
      'champagne-glow',
      'Champagne Glow',
      '$110',
      'Images_Catalogo/champagne1.png',
      'Luxury',
      'Tono champaña con detalles en encaje francés. Exclusividad en cada costura.',
      ['S', 'M', 'L'],
    ),
    vestidoSlot(
      'violet-dream',
      'Violet Dream',
      '$55',
      'Images_Catalogo/violet.png',
      'Evento',
      'Gasa ligera en tono violeta pastel, ideal para cócteles al aire libre o eventos de día.',
      ['XS', 'S', 'M', 'L'],
    ),
    vestidoSlot(
      'forest-green',
      'Forest Green',
      '$68',
      'Images_Catalogo/verdeEsmeralda.png',
      'Noche',
      'Verde bosque profundo en terciopelo elástico para un ajuste cómodo y escultural.',
      ['S', 'M', 'L', 'XL'],
    ),
    vestidoSlot(
      'sky-blue-silk',
      'Sky Blue Silk',
      '$90',
      'Images_Catalogo/rafahermosa.png',
      'Gala',
      'Seda celestial con una cola sutil que aporta drama y elegancia a tu caminar.',
      ['XS', 'S', 'M', 'L'],
    ),
  ];

  /* Piezas showroom 14–30 (placeholders). Descomenta este bloque cuando quieras volver a 30 ítems.
  (function appendSlots14to30() {
    var poolImg = [
      'heather.jpg',
      'marlucas.jpg',
      'heather5.jpg',
      'modelo1.jpg',
      'modelo2.jpg',
      'modelo3.jpeg',
      'heather3.jpg',
      'heather2.jpg',
      'heather1.jpg',
    ];
    var n0 = VESTIDOS_CATALOGO.length;
    for (var i = n0; i < 30; i++) {
      var num = i + 1;
      var idNum = num < 10 ? '0' + num : String(num);
      var img = poolImg[i % poolImg.length];
      VESTIDOS_CATALOGO.push(
        vestidoSlot(
          'aura-' + idNum,
          'Pieza showroom ' + num,
          '$80',
          img,
          'Showroom',
          'Edita esta entrada en VESTIDOS_CATALOGO (índice ' +
            i +
            '): title, price, image, category, description, sizes.',
          ['XS', 'S', 'M', 'L', 'XL'],
        ),
      );
    }
  })();
  */

  var PRODUCTOS = {};
  VESTIDOS_CATALOGO.forEach(function (v) {
    PRODUCTOS[v.id] = {
      title: v.title,
      price: v.price,
      image: v.image,
      description: v.description,
      category: v.category,
      sizes: v.sizes,
      images: v.images && v.images.length ? v.images.slice() : [v.image],
    };
  });

  function renderCatalogSlides() {
    var track = document.getElementById('carouselTrack');
    if (!track) return;

    track.innerHTML = '';
    VESTIDOS_CATALOGO.forEach(function (v, idx) {
      var slide = document.createElement('div');
      slide.className = 'carousel-slide';
      slide.style.setProperty('--cat-i', String(idx));

      var wrap = document.createElement('div');
      wrap.className = 'card-aura-wrapper';

      var a = document.createElement('a');
      a.href = 'producto.html?id=' + encodeURIComponent(v.id);
      a.className = 'card-aura';

      var imgWrap = document.createElement('div');
      imgWrap.className = 'card-img-wrap';
      var img = document.createElement('img');
      img.src = v.image;
      img.alt = v.title;
      img.loading = idx < 5 ? 'eager' : 'lazy';
      imgWrap.appendChild(img);

      var info = document.createElement('div');
      info.className = 'card-info-minimal';

      var cat = document.createElement('span');
      cat.className = 'category';
      cat.textContent = v.category;

      var h4 = document.createElement('h4');
      h4.textContent = v.title;

      var desc = document.createElement('p');
      desc.className = 'product-desc';
      desc.textContent = v.description;

      var tallas = document.createElement('p');
      tallas.className = 'card-sizes-line';
      tallas.textContent = 'Tallas: ' + (v.sizes || []).join(' · ');

      var price = document.createElement('span');
      price.className = 'price';
      price.textContent = v.price;

      info.appendChild(cat);
      info.appendChild(h4);
      info.appendChild(desc);
      info.appendChild(tallas);
      info.appendChild(price);

      a.appendChild(imgWrap);
      a.appendChild(info);
      wrap.appendChild(a);
      slide.appendChild(wrap);
      track.appendChild(slide);
    });
  }

  function getPageId() {
    var b = document.body;
    return b && b.getAttribute('data-page') ? b.getAttribute('data-page') : '';
  }

  function initNavbar() {
    var navbar = document.getElementById('navbar');
    if (!navbar) return;
    function syncScroll() {
      navbar.classList.toggle('scrolled', window.scrollY > 80);
    }
    window.addEventListener('scroll', syncScroll);
    window.addEventListener('load', syncScroll);
    syncScroll();
  }

  function initExperienciaNavigation() {
    var btn = document.getElementById('btnLaExperiencia');
    if (!btn) return;
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var target = document.getElementById('experiencia');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  function initHeroParallax() {
    var titles = document.querySelectorAll('#page-home [data-parallax-title]');
    if (!titles.length) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var ticking = false;
    window.addEventListener(
      'scroll',
      function () {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(function () {
          var y = window.scrollY;
          titles.forEach(function (el) {
            el.style.transform = 'translate(-50%, calc(-50% + ' + y * 0.22 + 'px))';
          });
          ticking = false;
        });
      },
      { passive: true },
    );
  }

  function initHeroStagger() {
    var wraps = document.querySelectorAll('.hero-img-wrap');
    if (!wraps.length) return;
    setTimeout(function () {
      wraps.forEach(function (el, i) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.8s ease ' + i * 0.15 + 's, transform 0.8s ease ' + i * 0.15 + 's';
        requestAnimationFrame(function () {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        });
      });
    }, 100);
  }

  function initHeroGridSlideshow() {
    var wraps = document.querySelectorAll('#landing .hero-img-wrap img');
    if (!wraps.length) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    function swapOne(imgEl, src) {
      if (!imgEl) return;
      imgEl.style.transition = 'opacity 0.6s ease, transform 1.2s var(--ease-out-expo)';
      imgEl.style.opacity = '0';
      imgEl.style.transform = 'scale(1.03)';
      window.setTimeout(function () {
        imgEl.src = src;
        imgEl.style.opacity = '1';
        imgEl.style.transform = '';
      }, 350);
    }

    var srcs = Array.prototype.map.call(wraps, function (imgEl) {
      return imgEl.getAttribute('src') || '';
    });
    if (srcs.length < 2) return;

    function tick() {
      srcs.unshift(srcs.pop());
      wraps.forEach(function (imgEl, i) {
        var next = srcs[i];
        if (!next) return;
        if (imgEl.getAttribute('src') === next) return;
        swapOne(imgEl, next);
      });
    }

    window.setInterval(tick, 15000);
  }

  function initLandingScrollDescend() {
    var landing = document.getElementById('landing');
    if (!landing) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var ticking = false;
    function sync() {
      landing.classList.toggle('landing--descend', window.scrollY > 40);
      ticking = false;
    }
    window.addEventListener(
      'scroll',
      function () {
        if (!ticking) {
          window.requestAnimationFrame(sync);
          ticking = true;
        }
      },
      { passive: true },
    );
    sync();
  }

  function initStatementHeroVideo() {
    var v = document.getElementById('statementHeroVideo');
    var card = document.getElementById('auraEditorialCard');
    if (!v || !card) return;

    function tryPlay() {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      var p = v.play();
      if (p && typeof p.catch === 'function') p.catch(function () {});
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      v.pause();
      return;
    }

    function onCardRevealed() {
      if (!card.classList.contains('is-visible')) return;
      tryPlay();
      if (v.readyState < 2) {
        v.addEventListener('loadeddata', tryPlay, { once: true });
      }
      mo.disconnect();
    }

    var mo = new MutationObserver(onCardRevealed);
    mo.observe(card, { attributes: true, attributeFilter: ['class'] });
    onCardRevealed();
  }

  function initStatementCarousel() {
    var slides = document.querySelectorAll('#statementSlides .statement-slide');
    var prev = document.getElementById('statementPrev');
    var next = document.getElementById('statementNext');
    if (!slides.length) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var idx = 0;
    var timer = null;
    function go(dir) {
      slides[idx].classList.remove('is-active');
      idx = (idx + dir + slides.length) % slides.length;
      slides[idx].classList.add('is-active');
    }
    function start() {
      if (timer) window.clearInterval(timer);
      timer = window.setInterval(function () {
        go(1);
      }, 1000);
    }
    function stop() {
      if (timer) window.clearInterval(timer);
      timer = null;
    }
    if (prev)
      prev.addEventListener('click', function () {
        go(-1);
        start();
      });
    if (next)
      next.addEventListener('click', function () {
        go(1);
        start();
      });
    var wrap = document.getElementById('statementCarousel');
    if (wrap) {
      wrap.addEventListener('mouseenter', stop);
      wrap.addEventListener('mouseleave', start);
      wrap.addEventListener(
        'touchstart',
        function () {
          stop();
        },
        { passive: true },
      );
      wrap.addEventListener(
        'touchend',
        function () {
          start();
        },
        { passive: true },
      );
    }
    start();
  }

  function initStatementParallax() {
    var card = document.getElementById('statementCard');
    var section = document.getElementById('statement');
    if (!card || !section) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var raf = 0;
    section.addEventListener('mousemove', function (e) {
      var rect = e.currentTarget.getBoundingClientRect();
      var cx = rect.left + rect.width / 2;
      var cy = rect.top + rect.height / 2;
      var dx = (e.clientX - cx) / rect.width;
      var dy = (e.clientY - cy) / rect.height;
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(function () {
        card.style.transform =
          'perspective(1200px) rotateY(' + dx * 3 + 'deg) rotateX(' + -dy * 2 + 'deg) translateZ(10px)';
      });
    });
    section.addEventListener('mouseleave', function () {
      card.style.transform = '';
    });
  }

  function initScrollAnimations() {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.15 },
    );
    document.querySelectorAll('.fade-up, .timeline-item, #personalMsg, .home-cta-editorial').forEach(function (el) {
      observer.observe(el);
    });
  }

  function initCatalogReveal() {
    var grid = document.getElementById('catGrid');
    if (!grid) return;
    var items = grid.querySelectorAll('.cat-grid-item');
    if (!items.length) return;
    var obs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('reveal-visible');
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.06, rootMargin: '0px 0px -4% 0px' },
    );
    items.forEach(function (el, i) {
      el.style.transitionDelay = Math.min(i, 12) * 0.035 + 's';
      obs.observe(el);
    });
  }

  function initCatalogFilters() {
    var wrap = document.getElementById('catFilters');
    var grid = document.getElementById('catGrid');
    if (!wrap || !grid) return;
    var buttons = wrap.querySelectorAll('[data-filter]');
    var items = grid.querySelectorAll('.cat-grid-item');
    if (!buttons.length || !items.length) return;

    function apply(filter) {
      buttons.forEach(function (b) {
        var on = b.getAttribute('data-filter') === filter;
        b.classList.toggle('is-active', on);
        b.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      items.forEach(function (it) {
        var cat = (it.getAttribute('data-cat') || '').toLowerCase();
        var show = filter === 'all' || cat === filter;
        it.classList.toggle('is-filtered-out', !show);
        if (show) it.classList.add('reveal-visible');
      });
    }

    buttons.forEach(function (b) {
      b.addEventListener('click', function () {
        apply(b.getAttribute('data-filter') || 'all');
      });
    });

    apply('all');
  }

  function initFooterParallax() {
    var big = document.querySelector('.footer-big');
    var wrap = document.querySelector('.footer-big-wrap');
    if (!big || !wrap) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    window.addEventListener(
      'scroll',
      function () {
        var r = wrap.getBoundingClientRect();
        var vh = window.innerHeight;
        if (r.top < vh && r.bottom > 0) {
          var t = (vh - r.top) / (vh + r.height * 0.5);
          t = Math.max(0, Math.min(1, t));
          big.style.transform = 'translateY(' + (t - 0.5) * 20 + 'px)';
        }
      },
      { passive: true },
    );
  }

  // ─── ABOUT: CORRECCIÓN DE LA LÍNEA DE TIEMPO ───
  // ─── ABOUT: CORRECCIÓN DE LA LÍNEA DE TIEMPO ───
  function initTimelineLine() {
    const line = document.getElementById('timelineLine');
    const timeline = document.querySelector('.timeline');
    if (!line || !timeline) return;

    function updateLine() {
      const items = timeline.querySelectorAll('.timeline-item');
      if (items.length === 0) return;

      const lastItem = items[items.length - 1];
      const lastDotInner = lastItem.querySelector('.tl-dot-inner');
      if (!lastDotInner) return;

      // Calcular centro exacto del punto final
      const timelineTopDoc = timeline.getBoundingClientRect().top + window.scrollY;
      const dotTopDoc = lastDotInner.getBoundingClientRect().top + window.scrollY;
      const stopAtCenterOfDot = dotTopDoc - timelineTopDoc + lastDotInner.offsetHeight / 2;

      // Progreso del scroll
      const triggerPoint = window.innerHeight / 2;
      const timelineRect = timeline.getBoundingClientRect();
      const currentProgress = triggerPoint - timelineRect.top;

      let finalHeight = Math.max(0, Math.min(currentProgress, stopAtCenterOfDot));
      line.style.height = finalHeight + 'px';
    }

    window.addEventListener('scroll', updateLine);
    window.addEventListener('resize', updateLine);
    // Pequeño timeout inicial para asegurar que las imágenes cargaron y tienen tamaño final
    setTimeout(updateLine, 100);
  }

  window.setView = function (mode) {
    var grid = document.getElementById('catGrid');
    var carousel = document.getElementById('catCarousel');
    var btnG = document.getElementById('btnGrilla');
    var btnC = document.getElementById('btnCarrusel');

    if (!carousel || !btnG || !btnC) return;
    if (!grid) {
      carousel.classList.add('active');
      btnC.classList.add('active');
      btnG.classList.remove('active');
      return;
    }

    if (mode === 'grilla') {
      carousel.classList.remove('active');
      grid.classList.add('active');
      grid.classList.remove('hidden');
      btnG.classList.add('active');
      btnC.classList.remove('active');
      window.scrollTo({ top: grid.offsetTop - 100, behavior: 'smooth' });
    } else {
      grid.classList.remove('active');
      grid.classList.add('hidden');
      carousel.classList.add('active');
      btnC.classList.add('active');
      btnG.classList.remove('active');
      window.scrollTo({ top: carousel.offsetTop - 100, behavior: 'smooth' });
    }
  };

  var carouselState = {
    track: null,
    slides: [],
    dots: [],
    currentIndex: 0,
    autoplayTimer: null,
    touchStartX: 0,
    touchEndX: 0,
    isDragging: false,
  };

  function initCatalogShowcaseReveal() {
    var outer = document.querySelector('#page-catalogo .catalog-showcase-outer');
    if (!outer) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      outer.classList.add('catalog-carousel-revealed');
      return;
    }
    var fired = false;
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting || fired) return;
          fired = true;
          outer.classList.add('catalog-carousel-revealed');
          io.disconnect();
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' },
    );
    io.observe(outer);
  }

  function initImprovedCarousel() {
    var track = document.getElementById('carouselTrack');
    var dotsContainer = document.getElementById('carouselDots');
    var prevBtn = document.getElementById('carouselPrev');
    var nextBtn = document.getElementById('carouselNext');

    if (!track) return;

    carouselState.track = track;
    carouselState.slides = Array.from(track.querySelectorAll('.carousel-slide'));

    if (!carouselState.slides.length) return;

    if (dotsContainer) {
      carouselState.slides.forEach(function (_, i) {
        var dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'carousel-dot' + (i === 0 ? ' is-active' : '');
        dot.setAttribute('aria-label', 'Ir a slide ' + (i + 1));
        dot.addEventListener('click', function () {
          goToSlide(i);
        });
        dotsContainer.appendChild(dot);
        carouselState.dots.push(dot);
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        moveCarousel(-1);
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        moveCarousel(1);
      });
    }

    track.addEventListener('touchstart', handleTouchStart, { passive: true });
    track.addEventListener('touchmove', handleTouchMove, { passive: true });
    track.addEventListener('touchend', handleTouchEnd);

    track.setAttribute('tabindex', '0');
    track.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        moveCarousel(-1);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        moveCarousel(1);
      }
    });

    startAutoplay();

    track.addEventListener('mouseenter', stopAutoplay);
    track.addEventListener('mouseleave', startAutoplay);

    window.addEventListener('resize', function () {
      goToSlide(carouselState.currentIndex);
    });
  }

  function handleTouchStart(e) {
    carouselState.touchStartX = e.changedTouches[0].screenX;
    carouselState.isDragging = true;
    stopAutoplay();
  }

  function handleTouchMove(e) {
    if (!carouselState.isDragging) return;
    carouselState.touchEndX = e.changedTouches[0].screenX;
  }

  function handleTouchEnd() {
    if (!carouselState.isDragging) return;
    carouselState.isDragging = false;

    var diff = carouselState.touchStartX - carouselState.touchEndX;
    var threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        moveCarousel(1);
      } else {
        moveCarousel(-1);
      }
    }

    startAutoplay();
  }

  function goToSlide(index) {
    if (!carouselState.track || !carouselState.slides.length) return;

    var slidesCount = carouselState.slides.length;
    carouselState.currentIndex = ((index % slidesCount) + slidesCount) % slidesCount;

    var slideWidth = carouselState.slides[0].offsetWidth + 4;
    carouselState.track.scrollTo({
      left: carouselState.currentIndex * slideWidth,
      behavior: 'smooth',
    });

    updateDots();
  }

  window.moveCarousel = function (dir) {
    goToSlide(carouselState.currentIndex + dir);
  };

  function updateDots() {
    carouselState.dots.forEach(function (dot, i) {
      dot.classList.toggle('is-active', i === carouselState.currentIndex);
    });
  }

  function startAutoplay() {
    stopAutoplay();
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    carouselState.autoplayTimer = setInterval(function () {
      moveCarousel(1);
    }, 5000);
  }

  function stopAutoplay() {
    if (carouselState.autoplayTimer) {
      clearInterval(carouselState.autoplayTimer);
      carouselState.autoplayTimer = null;
    }
  }

  var selectedItems = [];

  function loadSelections() {
    try {
      var saved = localStorage.getItem('aura_selections');
      if (saved) {
        selectedItems = JSON.parse(saved);
        syncSelectionsToUI();
      }
    } catch (e) {
      selectedItems = [];
    }
  }

  function saveSelections() {
    try {
      localStorage.setItem('aura_selections', JSON.stringify(selectedItems));
    } catch (e) {}
  }

  function syncSelectionsToUI() {
    selectedItems.forEach(function (item) {
      var elements = document.querySelectorAll('[data-id="' + item.id + '"]');
      elements.forEach(function (el) {
        el.classList.add('is-selected');
      });
    });
    updateCart();
  }

  window.toggleSelection = function (element) {
    if (!element) return;

    var id = element.getAttribute('data-id');
    var name = element.getAttribute('data-name');
    var price = element.getAttribute('data-price');
    var img = element.getAttribute('data-img');

    if (!id) return;

    var index = selectedItems.findIndex(function (item) {
      return item.id === id;
    });

    if (index > -1) {
      selectedItems.splice(index, 1);
      document.querySelectorAll('[data-id="' + id + '"]').forEach(function (el) {
        el.classList.remove('is-selected');
      });
    } else {
      selectedItems.push({ id: id, name: name, price: price, img: img });
      document.querySelectorAll('[data-id="' + id + '"]').forEach(function (el) {
        el.classList.add('is-selected');
      });
    }

    saveSelections();
    updateCart();

    var cartToggle = document.getElementById('cartToggle');
    if (cartToggle && selectedItems.length > 0) {
      cartToggle.style.transform = 'scale(1.15)';
      setTimeout(function () {
        cartToggle.style.transform = '';
      }, 200);
    }
  };

  function updateCart() {
    var countEl = document.getElementById('cartCount');
    var itemsEl = document.getElementById('cartItems');
    var whatsappBtn = document.getElementById('btnWhatsApp');

    if (countEl) {
      countEl.textContent = selectedItems.length;
      countEl.classList.toggle('has-items', selectedItems.length > 0);
    }

    if (whatsappBtn) {
      whatsappBtn.disabled = selectedItems.length === 0;
    }

    if (itemsEl) {
      if (selectedItems.length === 0) {
        itemsEl.innerHTML = '<p class="cart-empty">No has seleccionado ninguna pieza aun.</p>';
      } else {
        itemsEl.innerHTML = selectedItems
          .map(function (item) {
            return (
              '<div class="cart-item" data-cart-id="' +
              item.id +
              '">' +
              '<img class="cart-item-img" src="' +
              item.img +
              '" alt="' +
              item.name +
              '">' +
              '<div class="cart-item-info">' +
              '<p class="cart-item-name">' +
              item.name +
              '</p>' +
              '<span class="cart-item-price">' +
              item.price +
              '</span>' +
              '</div>' +
              '<button type="button" class="cart-item-remove" onclick="removeFromCart(\'' +
              item.id +
              '\')" aria-label="Eliminar">' +
              '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">' +
              '<line x1="18" y1="6" x2="6" y2="18"></line>' +
              '<line x1="6" y1="6" x2="18" y2="18"></line>' +
              '</svg>' +
              '</button>' +
              '</div>'
            );
          })
          .join('');
      }
    }
  }

  window.removeFromCart = function (id) {
    var index = selectedItems.findIndex(function (item) {
      return item.id === id;
    });

    if (index > -1) {
      selectedItems.splice(index, 1);
      document.querySelectorAll('[data-id="' + id + '"]').forEach(function (el) {
        el.classList.remove('is-selected');
      });
      saveSelections();
      updateCart();
    }
  };

  function initCartUI() {
    var toggle = document.getElementById('cartToggle');
    var panel = document.getElementById('cartPanel');
    var closeBtn = document.getElementById('cartClose');
    var clearBtn = document.getElementById('btnClearAll');
    var whatsappBtn = document.getElementById('btnWhatsApp');

    if (toggle && panel) {
      toggle.addEventListener('click', function () {
        var isOpen = panel.classList.contains('is-open');
        panel.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', !isOpen);
      });
    }

    if (closeBtn && panel) {
      closeBtn.addEventListener('click', function () {
        panel.classList.remove('is-open');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener('click', function () {
        selectedItems.forEach(function (item) {
          document.querySelectorAll('[data-id="' + item.id + '"]').forEach(function (el) {
            el.classList.remove('is-selected');
          });
        });
        selectedItems = [];
        saveSelections();
        updateCart();
      });
    }

    if (whatsappBtn) {
      whatsappBtn.addEventListener('click', function () {
        if (selectedItems.length === 0) return;

        var msg = 'Hola Aura Apparel,\n\nMe interesan las siguientes piezas:\n\n';
        selectedItems.forEach(function (item, i) {
          msg += i + 1 + '. ' + item.name + ' - ' + item.price + '\n';
        });
        msg += '\nMe gustaria recibir mas informacion. Gracias!';

        var url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(msg);
        window.open(url, '_blank');
      });
    }

    document.addEventListener('click', function (e) {
      if (!panel || !toggle) return;
      if (!panel.contains(e.target) && !toggle.contains(e.target)) {
        panel.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });

    loadSelections();
  }

  function setGridItemIndices() {
    var items = document.querySelectorAll('.cat-grid-item');
    items.forEach(function (item, i) {
      item.style.setProperty('--item-index', i);
    });
  }

  function initEnhancedScrollAnimations() {
    var animatedElements = document.querySelectorAll('.scroll-reveal, .scale-reveal, .slide-left, .slide-right');
    if (!animatedElements.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      animatedElements.forEach(function (el) {
        el.classList.add('is-visible');
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var delay = entry.target.getAttribute('data-delay') || 0;
            setTimeout(function () {
              entry.target.classList.add('is-visible');
            }, parseInt(delay));
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      },
    );

    animatedElements.forEach(function (el) {
      observer.observe(el);
    });
  }

  function initParallaxEffects() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var parallaxElements = document.querySelectorAll('[data-parallax]');
    if (!parallaxElements.length) return;

    var ticking = false;

    function updateParallax() {
      var scrollY = window.scrollY;
      var windowHeight = window.innerHeight;

      parallaxElements.forEach(function (el) {
        var rect = el.getBoundingClientRect();
        var speed = parseFloat(el.getAttribute('data-parallax')) || 0.1;

        if (rect.top < windowHeight && rect.bottom > 0) {
          var yPos = (scrollY - el.offsetTop + windowHeight) * speed;
          el.style.transform = 'translateY(' + yPos + 'px)';
        }
      });

      ticking = false;
    }

    window.addEventListener(
      'scroll',
      function () {
        if (!ticking) {
          requestAnimationFrame(updateParallax);
          ticking = true;
        }
      },
      { passive: true },
    );
  }

  function resetBodyAfterPageTransition() {
    document.body.style.removeProperty('opacity');
    document.body.style.removeProperty('transform');
    document.body.style.removeProperty('transition');
  }

  /** Rutas HTML internas (evita href^="about" que falla con ./about.html o /about.html). */
  function isInternalAuraPageHref(href) {
    if (!href || href.charAt(0) === '#') return false;
    if (/^(?:https?:|mailto:|tel:)/i.test(href)) return false;
    var pathOnly = href.split('#')[0].split('?')[0];
    var file = pathOnly.replace(/^\.\//, '').split('/').pop() || '';
    return /^(index|about|catalogo|experiencia|reserva|producto)\.html$/i.test(file);
  }

  function initSmoothPageTransitions() {
    document.addEventListener('click', function (e) {
      if (e.defaultPrevented) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if (e.button !== 0) return;
      var link = e.target.closest('a');
      if (!link) return;
      var href = link.getAttribute('href');
      if (!isInternalAuraPageHref(href)) return;

      e.preventDefault();
      document.body.style.opacity = '0';
      document.body.style.transform = 'translateY(-10px)';
      document.body.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

      window.setTimeout(function () {
        window.location.href = href;
      }, 300);
    });
  }

  window.toggleFaq = function (item) {
    if (!item) return;
    var wasOpen = item.classList.contains('open');
    var root = item.closest('.faq-list');
    if (root) {
      root.querySelectorAll('.faq-item').forEach(function (i) {
        i.classList.remove('open');
      });
    }
    if (!wasOpen) item.classList.add('open');
  };

  var calYear = 2026;
  var calMonth = 3;
  var selectedDay = null;
  var selectedTime = null;

  var TIME_SLOTS = [
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
    '18:00',
  ];

  function updateSlotSummary() {
    var el = document.getElementById('selectedSlotSummary');
    if (!el) return;
    var dateStr = selectedDay != null ? selectedDay + ' ' + monthNames[calMonth].substring(0, 3) + ' ' + calYear : null;
    if (dateStr && selectedTime) {
      el.textContent = dateStr + ' · ' + selectedTime;
    } else if (dateStr) {
      el.textContent = dateStr + ' · elige hora';
    } else if (selectedTime) {
      el.textContent = 'Elige día · ' + selectedTime;
    } else {
      el.textContent = 'Elige día y hora';
    }
  }

  function renderTimeSlots() {
    var wrap = document.getElementById('timeSlots');
    if (!wrap) return;
    wrap.innerHTML = '';
    TIME_SLOTS.forEach(function (t) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'time-slot' + (selectedTime === t ? ' is-selected' : '');
      b.textContent = t;
      b.setAttribute('role', 'option');
      b.setAttribute('aria-selected', selectedTime === t ? 'true' : 'false');
      b.addEventListener('click', function () {
        selectedTime = t;
        renderTimeSlots();
        updateSlotSummary();
      });
      wrap.appendChild(b);
    });
  }

  function renderCalendar() {
    var grid = document.getElementById('calGrid');
    var label = document.getElementById('calMonthLabel');
    if (!grid || !label) return;
    label.textContent = monthNames[calMonth] + ', ' + calYear;
    grid.innerHTML = '';
    var daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
    var today = new Date();
    for (var d = 1; d <= daysInMonth; d++) {
      var el = document.createElement('div');
      el.className = 'cal-day';
      if (d === today.getDate() && calMonth === today.getMonth() && calYear === today.getFullYear()) {
        el.classList.add('today');
      }
      if (d === selectedDay) el.classList.add('selected');
      el.textContent = String(d);
      el.addEventListener(
        'click',
        (function (day) {
          return function () {
            selectedDay = day;
            renderCalendar();
            updateSlotSummary();
          };
        })(d),
      );
      grid.appendChild(el);
    }
    updateSlotSummary();
  }

  window.changeMonth = function (dir) {
    calMonth += dir;
    if (calMonth > 11) {
      calMonth = 0;
      calYear++;
    }
    if (calMonth < 0) {
      calMonth = 11;
      calYear--;
    }
    selectedDay = null;
    renderCalendar();
  };

  window.agendarCita = function () {
    var nombreEl = document.getElementById('rNombre');
    var apellidoEl = document.getElementById('rApellido');
    var emailEl = document.getElementById('rEmail');
    var notasEl = document.getElementById('rNotas');
    if (!nombreEl) return;

    var nombre = nombreEl.value.trim();
    var apellido = apellidoEl ? apellidoEl.value.trim() : '';
    var email = emailEl ? emailEl.value.trim() : '';
    var notas = notasEl ? notasEl.value.trim() : '';
    var fecha = selectedDay != null ? selectedDay + ' de ' + monthNames[calMonth] + ' de ' + calYear : 'Por confirmar';
    var hora = selectedTime || 'Por confirmar (la acordamos por WhatsApp)';

    if (!nombre || !apellido || !email) {
      alert('Por favor completa tu nombre, apellido y email.');
      return;
    }

    if (selectedDay == null || !selectedTime) {
      alert('Por favor elige un día y una hora para la cita.');
      return;
    }

    var msg =
      'Hola Aura Apparel,\n\n' +
      'Quiero reservar una cita en el showroom:\n\n' +
      'Nombre: ' +
      nombre +
      '\n' +
      'Apellido: ' +
      (apellido || '—') +
      '\n' +
      'Email: ' +
      (email || '—') +
      '\n' +
      'Fecha preferida: ' +
      fecha +
      '\n' +
      'Hora preferida: ' +
      hora +
      '\n' +
      'Notas: ' +
      (notas || '—') +
      '\n\n' +
      '¡Gracias!';

    var url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(msg);
    window.open(url, '_blank');
  };

  function initProductoPage() {
    var imgEl = document.getElementById('productImg') || document.getElementById('mainProductImg');
    var nameEl = document.getElementById('productName') || document.getElementById('productTitle');
    var priceEl = document.getElementById('productPrice');
    var leadEl = document.getElementById('productLead') || document.getElementById('productDescription');
    var catEl = document.getElementById('productCategory');
    var highlightsEl = document.getElementById('productHighlights');
    var sizesEl = document.getElementById('productSizes');
    var prevImg = document.getElementById('productImgPrev');
    var nextImg = document.getElementById('productImgNext');

    if (!imgEl || !nameEl || !priceEl) return;

    var params = new URLSearchParams(window.location.search || '');
    var id = (params.get('id') || '').trim();
    var p = PRODUCTOS[id];

    if (!p) {
      nameEl.textContent = 'Producto no encontrado';
      imgEl.src = 'heather.jpg';
      return;
    }

    var imgs = p.images && Array.isArray(p.images) && p.images.length ? p.images.slice() : [p.image || 'heather.jpg'];
    var gIdx = 0;

    function syncGalleryNav() {
      var multi = imgs.length > 1;
      if (prevImg) prevImg.style.display = multi ? '' : 'none';
      if (nextImg) nextImg.style.display = multi ? '' : 'none';
    }

    function showGalleryIndex(i) {
      gIdx = ((i % imgs.length) + imgs.length) % imgs.length;
      imgEl.src = imgs[gIdx];
      imgEl.classList.remove('is-img-enter');
      void imgEl.offsetWidth;
      imgEl.classList.add('is-img-enter');
      syncGalleryNav();
    }

    document.title = 'Aura Apparel — ' + p.title;
    nameEl.textContent = p.title;
    priceEl.textContent = p.price;
    showGalleryIndex(0);
    if (leadEl) leadEl.textContent = p.description;
    if (catEl) catEl.textContent = p.category || 'Colección Aura';

    if (highlightsEl) {
      highlightsEl.innerHTML = '';
      var items = p.highlights || ['Showroom bajo cita', 'Prueba de fit personalizada', 'Asesoría de imagen'];
      items.forEach(function (txt) {
        var pill = document.createElement('div');
        pill.className = 'product-pill';
        pill.innerHTML = '<strong>•</strong><span>' + txt + '</span>';
        highlightsEl.appendChild(pill);
      });
    }

    if (sizesEl) {
      sizesEl.innerHTML = '';
      var label = document.createElement('p');
      label.className = 'product-sizes-kicker';
      label.textContent = 'Talla showroom';
      sizesEl.appendChild(label);
      var row = document.createElement('div');
      row.className = 'product-sizes-row';
      var sizes = p.sizes || ['XS', 'S', 'M', 'L'];
      sizes.forEach(function (sz, si) {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'product-size-btn' + (si === 0 ? ' is-active' : '');
        b.setAttribute('data-size', sz);
        b.textContent = sz;
        b.addEventListener('click', function () {
          row.querySelectorAll('.product-size-btn').forEach(function (x) {
            x.classList.remove('is-active');
          });
          b.classList.add('is-active');
          updateGlobalReserveLink(p);
        });
        row.appendChild(b);
      });
      sizesEl.appendChild(row);
    }

    if (prevImg) {
      prevImg.addEventListener('click', function (e) {
        e.preventDefault();
        showGalleryIndex(gIdx - 1);
      });
    }
    if (nextImg) {
      nextImg.addEventListener('click', function (e) {
        e.preventDefault();
        showGalleryIndex(gIdx + 1);
      });
    }

    syncGalleryNav();
    checkSelectionStatus(id, p);
    updateGlobalReserveLink(p);
  }

  function initReservaPrefillFromProducto() {
    var notasEl = document.getElementById('rNotas');
    if (!notasEl) return;
    var params = new URLSearchParams(window.location.search || '');
    var producto = (params.get('producto') || '').trim();
    if (!producto) return;
    if (notasEl.value && notasEl.value.trim()) return;
    notasEl.value = producto;
  }

  function initExperiencia() {
    var triggers = document.querySelectorAll('.exp-trigger');
    var stage = document.getElementById('expStage');
    var panelM = document.getElementById('expPanelManifiesto');
    var panelF = document.getElementById('expPanelFaq');
    var panelMarcas = document.getElementById('expPanelMarcas');
    var showroomFs = document.getElementById('showroomFullscreen');
    if (!triggers.length || !stage) return;
    var showroomTimer = null;
    var showroomIdx = 0;
    var slides = showroomFs ? showroomFs.querySelectorAll('.showroom-slide') : [];
    var activeKey = 'manifiesto';
    var showroomViewportBound = false;

    /** Solo actualiza tamaño útil del viewport (móvil / barra del navegador). No usar offsetTop/Left en position:fixed: al hacer scroll desplazaban el modal fuera de pantalla. */
    function syncShowroomOverlayBox() {
      if (!showroomFs || !showroomFs.classList.contains('is-active')) return;
      var vv = window.visualViewport;
      var w;
      var h;
      if (vv) {
        w = Math.round(vv.width);
        h = Math.round(vv.height);
      } else {
        w = window.innerWidth;
        h = window.innerHeight;
      }
      w = Math.max(1, w);
      h = Math.max(1, h);
      showroomFs.style.setProperty('--showroom-vw', w + 'px');
      showroomFs.style.setProperty('--showroom-vh', h + 'px');
    }

    function clearShowroomOverlayBox() {
      if (!showroomFs) return;
      showroomFs.style.removeProperty('--showroom-vw');
      showroomFs.style.removeProperty('--showroom-vh');
    }

    function bindShowroomViewportListeners() {
      if (showroomViewportBound || !showroomFs) return;
      showroomViewportBound = true;
      window.addEventListener('resize', syncShowroomOverlayBox);
      if (window.visualViewport) {
        window.visualViewport.addEventListener('resize', syncShowroomOverlayBox);
      }
    }

    function unbindShowroomViewportListeners() {
      if (!showroomViewportBound) return;
      showroomViewportBound = false;
      window.removeEventListener('resize', syncShowroomOverlayBox);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', syncShowroomOverlayBox);
      }
      clearShowroomOverlayBox();
    }

    function updateShowroomCaption(idx) {
      var line = document.getElementById('showroomCaptionLine');
      if (!line || !slides[idx]) return;
      var text = slides[idx].getAttribute('data-caption') || '';
      line.classList.add('is-changing');
      window.setTimeout(function () {
        line.textContent = text;
        line.classList.remove('is-changing');
      }, 160);
    }

    function applyShowroomSlide(idx) {
      showroomIdx = ((idx % slides.length) + slides.length) % slides.length;
      slides.forEach(function (s, i) {
        s.classList.toggle('is-on', i === showroomIdx);
      });
      updateShowroomCaption(showroomIdx);
      var dots = document.querySelectorAll('#showroomDots .showroom-dot');
      dots.forEach(function (d, i) {
        d.classList.toggle('is-on', i === showroomIdx);
      });
    }

    function restartShowroomAutoplay() {
      if (showroomTimer) {
        clearInterval(showroomTimer);
        showroomTimer = null;
      }
      if (!showroomFs || !showroomFs.classList.contains('is-active')) return;
      showroomTimer = window.setInterval(function () {
        applyShowroomSlide(showroomIdx + 1);
      }, 4000);
    }

    function showroomStep(dir) {
      applyShowroomSlide(showroomIdx + dir);
      restartShowroomAutoplay();
    }

    function stopShowroom() {
      if (showroomTimer) {
        clearInterval(showroomTimer);
        showroomTimer = null;
      }
      unbindShowroomViewportListeners();
      if (showroomFs) {
        showroomFs.classList.remove('is-active');
        showroomFs.setAttribute('aria-hidden', 'true');
      }
      document.body.classList.remove('showroom-lock', 'showroom-active');
      document.documentElement.classList.remove('showroom-lock');
      slides.forEach(function (s) {
        s.classList.remove('is-on');
      });
      document.querySelectorAll('#showroomDots .showroom-dot').forEach(function (d, i) {
        d.classList.toggle('is-on', i === 0);
      });
      var line = document.getElementById('showroomCaptionLine');
      if (line && slides[0]) {
        line.textContent = slides[0].getAttribute('data-caption') || '';
        line.classList.remove('is-changing');
      }
    }

    function startShowroom() {
      if (!showroomFs) return;
      slides = showroomFs.querySelectorAll('.showroom-slide');
      if (!slides.length) return;
      if (showroomTimer) {
        clearInterval(showroomTimer);
        showroomTimer = null;
      }
      document.body.style.removeProperty('transform');
      document.body.style.removeProperty('opacity');
      document.body.style.removeProperty('transition');
      showroomFs.classList.add('is-active');
      showroomFs.setAttribute('aria-hidden', 'false');
      document.body.classList.add('showroom-lock', 'showroom-active');
      document.documentElement.classList.add('showroom-lock');
      bindShowroomViewportListeners();
      window.requestAnimationFrame(function () {
        window.requestAnimationFrame(function () {
          syncShowroomOverlayBox();
        });
      });
      applyShowroomSlide(0);
      restartShowroomAutoplay();
    }

    function closeShowroomUi() {
      stopShowroom();
      triggers.forEach(function (t) {
        t.classList.remove('is-hot');
      });
      if (activeKey === 'showroom') activate('manifiesto');
    }

    var showroomPrev = document.getElementById('showroomPrev');
    var showroomNext = document.getElementById('showroomNext');
    if (showroomPrev) {
      showroomPrev.addEventListener('click', function (e) {
        e.stopPropagation();
        if (showroomFs && showroomFs.classList.contains('is-active')) showroomStep(-1);
      });
    }
    if (showroomNext) {
      showroomNext.addEventListener('click', function (e) {
        e.stopPropagation();
        if (showroomFs && showroomFs.classList.contains('is-active')) showroomStep(1);
      });
    }

    var showroomClose = document.getElementById('showroomClose');
    if (showroomClose) {
      showroomClose.addEventListener('click', function (e) {
        e.stopPropagation();
        closeShowroomUi();
      });
    }

    var showroomBackdrop = document.getElementById('showroomBackdrop');
    if (showroomBackdrop) {
      showroomBackdrop.addEventListener('click', function () {
        closeShowroomUi();
      });
    }

    if (showroomFs) {
      var touchStartX = null;
      var swipeTarget = showroomFs.querySelector('.showroom-atelier-viewport') || showroomFs;
      swipeTarget.addEventListener(
        'touchstart',
        function (e) {
          if (!showroomFs.classList.contains('is-active')) return;
          touchStartX = e.changedTouches[0].screenX;
        },
        { passive: true },
      );
      swipeTarget.addEventListener(
        'touchend',
        function (e) {
          if (touchStartX == null || !showroomFs.classList.contains('is-active')) return;
          var dx = e.changedTouches[0].screenX - touchStartX;
          touchStartX = null;
          if (Math.abs(dx) < 48) return;
          if (dx < 0) showroomStep(1);
          else showroomStep(-1);
        },
        { passive: true },
      );
    }

    bindExpPanelTextReveal(panelM);
    bindExpPanelTextReveal(panelMarcas);

    function activate(key) {
      activeKey = key;
      if (panelM) panelM.classList.toggle('is-visible', key === 'manifiesto');
      if (panelF) panelF.classList.toggle('is-visible', key === 'faq');
      if (panelMarcas) panelMarcas.classList.toggle('is-visible', key === 'marcas');
      triggers.forEach(function (t) {
        t.classList.toggle('is-hot', t.getAttribute('data-panel') === key);
      });
      if (key === 'showroom') {
        startShowroom();
      } else {
        stopShowroom();
      }
    }

    triggers.forEach(function (btn) {
      var key = btn.getAttribute('data-panel');
      if (!key) return;
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        activate(key);
      });
    });

    activate(activeKey);

    document.addEventListener('keydown', function (e) {
      if (showroomFs && showroomFs.classList.contains('is-active')) {
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          showroomStep(-1);
          return;
        }
        if (e.key === 'ArrowRight') {
          e.preventDefault();
          showroomStep(1);
          return;
        }
      }
      if (e.key === 'Escape') {
        if (showroomFs && showroomFs.classList.contains('is-active')) {
          e.preventDefault();
          closeShowroomUi();
        }
      }
    });
  }

  function initTextReveals() {
    var all = document.querySelectorAll('[data-reveal]');
    var nodes = Array.prototype.filter.call(all, function (el) {
      return !el.closest('#expPanelManifiesto') && !el.closest('#expPanelMarcas');
    });
    if (!nodes.length) return;
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    nodes.forEach(function (el) {
      if (reduce) el.classList.add('is-revealed');
    });
    if (reduce) return;
    var obs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -6% 0px' },
    );
    nodes.forEach(function (el) {
      obs.observe(el);
    });
  }

  function bindExpPanelTextReveal(panelEl) {
    if (!panelEl) return;
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var mo = new MutationObserver(function () {
      var vis = panelEl.classList.contains('is-visible');
      var revealed = panelEl.querySelectorAll('[data-reveal]');
      if (vis) {
        revealed.forEach(function (el, i) {
          if (reduce) {
            el.classList.add('is-revealed');
            return;
          }
          el.style.transitionDelay = i * 0.1 + 's';
          window.setTimeout(function () {
            el.classList.add('is-revealed');
          }, 40);
        });
      } else if (!reduce) {
        revealed.forEach(function (el) {
          el.classList.remove('is-revealed');
        });
      }
    });
    mo.observe(panelEl, { attributes: true, attributeFilter: ['class'] });
  }

  function initMarcasInteractive() {
    var tiles = document.querySelectorAll('#marcasTiles .marca-tile');
    var img = document.getElementById('marcasHeroImg');
    var capName = document.querySelector('.marcas-caption-name');
    var capTag = document.querySelector('.marcas-caption-tag');
    var frame = document.querySelector('.marcas-frame');
    if (!tiles.length || !img) return;
    tiles.forEach(function (tile) {
      tile.addEventListener('click', function () {
        tiles.forEach(function (t) {
          t.classList.remove('is-active');
          t.setAttribute('aria-selected', 'false');
        });
        tile.classList.add('is-active');
        tile.setAttribute('aria-selected', 'true');
        var focus = tile.getAttribute('data-focus') || '50% 50%';
        img.style.objectPosition = focus;
        var logo = (tile.getAttribute('data-logo') || '').trim();
        if (logo) {
          // --- NUEVO: Glitch Effect en el cambio ---
          img.classList.add('is-switching');
          setTimeout(() => img.classList.remove('is-switching'), 400);
          img.src = logo;
        }
        if (capName) capName.textContent = tile.getAttribute('data-marca') || '';
        if (capTag) capTag.textContent = tile.getAttribute('data-tag') || '';
        if (frame) {
          frame.classList.remove('is-pulse');
          void frame.offsetWidth;
          frame.classList.add('is-pulse');
        }
      });
    });
  }

  function initReservaSlideshow() {
    var img = document.getElementById('reservaSlideImg');
    if (!img) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var slides = ['heather3.jpg', 'heather.jpg', 'modelo2.jpg'];
    var idx = 0;
    window.setInterval(function () {
      img.classList.add('is-fading');
      window.setTimeout(function () {
        idx = (idx + 1) % slides.length;
        img.src = slides[idx];
        img.classList.remove('is-fading');
      }, 520);
    }, 10000);
  }

  function initSocialLinks() {
    document.querySelectorAll('a[data-social="instagram"]').forEach((a) => {
      a.href = 'https://www.instagram.com/aura.apparel_ec';
      a.target = '_blank';
    });
    document.querySelectorAll('a[data-social="whatsapp"]').forEach((a) => {
      a.href = 'https://wa.me/593962217054';
      a.target = '_blank';
    });
    document.querySelectorAll('a[data-social="tiktok"]').forEach((a) => {
      a.href = 'https://www.tiktok.com/@aura.vestidoss';
      a.target = '_blank';
    });
  }

  function initMagneticButtons() {
    /* Sin .btn-outline: el efecto magnético rompe el layout/animaciones (p. ej. About + fade-up). */
    const magnets = document.querySelectorAll('.cart-toggle, .btn-aura-pill');

    magnets.forEach((btn) => {
      btn.addEventListener('mousemove', function (e) {
        const position = btn.getBoundingClientRect();
        const x = e.pageX - position.left - position.width / 2;
        const y = e.pageY - position.top - position.height / 2;

        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.4}px)`;
        btn.classList.add('magnetic-btn');
      });

      btn.addEventListener('mouseout', function () {
        btn.style.transform = 'translate(0px, 0px)';
        setTimeout(() => btn.classList.remove('magnetic-btn'), 100);
      });
    });
  }

  // Cursor Inmersivo (Totalmente Negro y Sin Glitches)
  // Cursor Inmersivo (Versión Definitiva Anti-Fallos)
  // Cursor Inmersivo (Motor de Alto Rendimiento - Cero Glitches)

  // Tilt 3D en Catálogo
  function initCatalogTilt() {
    const items = document.querySelectorAll('.cat-grid-item');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    items.forEach((item) => {
      item.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const xRot = 10 * ((y - rect.height / 2) / rect.height);
        const yRot = -10 * ((x - rect.width / 2) / rect.width);

        item.style.transform = `perspective(800px) scale(1.02) rotateX(${xRot}deg) rotateY(${yRot}deg)`;
        item.style.zIndex = '10';
      });

      item.addEventListener('mouseleave', () => {
        item.style.transform = '';
        item.style.zIndex = '1';
      });
    });
  }

  /* ─── INICIALIZACIÓN ─── */
  window.addEventListener('pageshow', function () {
    resetBodyAfterPageTransition();
  });

  document.addEventListener('DOMContentLoaded', function () {
    resetBodyAfterPageTransition();
    initSocialLinks();
    initNavbar();
    initTextReveals();
    initEnhancedScrollAnimations();
    initParallaxEffects();
    initSmoothPageTransitions();

    // Solo llamamos las interacciones estables
    initMagneticButtons();
    initCatalogTilt();

    var page = getPageId();

    if (page === 'home') {
      initLandingScrollDescend();
      initHeroParallax();
      initHeroStagger();
      initStatementHeroVideo();
      initStatementCarousel();
      initStatementParallax();
      initScrollAnimations();
      initFooterParallax();
    }

    initHeroGridSlideshow();

    if (page === 'about') {
      initScrollAnimations();
      initTimelineLine();
      initFooterParallax();
    }

    if (page === 'catalogo') {
      initScrollAnimations();
      renderCatalogSlides();
      initCatalogShowcaseReveal();
      initCatalogReveal();
      initCatalogFilters();
      initImprovedCarousel();
      initCartUI();
      setGridItemIndices();
      initFooterParallax();
    }

    if (page === 'experiencia') {
      initHeroStagger();
      initExperienciaNavigation();
      initExperiencia();
      initMarcasInteractive();
      initFooterParallax();
    }

    if (page === 'reserva') {
      var now = new Date();
      calYear = now.getFullYear();
      calMonth = now.getMonth();
      selectedDay = null;
      selectedTime = null;
      renderCalendar();
      renderTimeSlots();
      updateSlotSummary();
      initReservaPrefillFromProducto();
      initReservaSlideshow();
      initFooterParallax();
      initTypewriter();
    }

    if (page === 'producto') {
      initProductoPage();
      initScrollAnimations();
      initFooterParallax();
    }
  });

  // 1. Array global para guardar lo seleccionado
  // 1. Array de selección persistente usando LocalStorage
  // 1. Cargar selección previa del navegador
  var seleccionGlobal = JSON.parse(localStorage.getItem('aura_selection')) || [];

  window.handleProductSelection = function () {
    var params = new URLSearchParams(window.location.search);
    var id = params.get('id');
    var p = PRODUCTOS[id];
    if (!p) return;

    var index = seleccionGlobal.findIndex((item) => item.id === id);
    var btn = document.getElementById('addToSelectionBtn');

    if (index > -1) {
      seleccionGlobal.splice(index, 1);
      btn.textContent = 'AÑADIR A MI SELECCIÓN';
      btn.classList.remove('selected-active');
    } else {
      seleccionGlobal.push({ id: id, title: p.title, price: p.price });
      btn.textContent = '✓ VESTIDO AÑADIDO';
      btn.classList.add('selected-active');
    }

    localStorage.setItem('aura_selection', JSON.stringify(seleccionGlobal));
    updateGlobalReserveLink(p);
  };

  function updateGlobalReserveLink(currentProduct) {
    var reserveBtn = document.getElementById('productReserveBtn');
    if (!reserveBtn) return;

    function activeTallaText() {
      var active = document.querySelector('#productSizes .product-size-btn.is-active');
      return active ? ' Talla: ' + active.getAttribute('data-size') + '.' : '';
    }

    if (seleccionGlobal.length > 0) {
      var nombres = seleccionGlobal.map((i) => i.title).join(', ');
      var msg = 'Hola Aura Apparel, quiero una cita para probarme estos vestidos: ' + nombres;
      reserveBtn.href = 'reserva.html?producto=' + encodeURIComponent(msg);

      if (seleccionGlobal.length > 1) {
        reserveBtn.textContent = 'RESERVAR CITA (' + seleccionGlobal.length + ' VESTIDOS)';
      } else {
        reserveBtn.textContent = 'AGENDAR CITA AHORA';
      }
    } else {
      var nota = 'Quiero reservar: ' + currentProduct.title + ' (' + currentProduct.price + ').' + activeTallaText();
      reserveBtn.href = 'reserva.html?producto=' + encodeURIComponent(nota);
      reserveBtn.textContent = 'AGENDAR CITA AHORA';
    }
  }

  function checkSelectionStatus(id, p) {
    var btn = document.getElementById('addToSelectionBtn');
    if (!btn) return;

    if (seleccionGlobal.some((item) => item.id === id)) {
      btn.textContent = '✓ VESTIDO AÑADIDO';
      btn.classList.add('selected-active');
    }
    updateGlobalReserveLink(p);
  }

  function initTypewriter() {
    const textElement = document.getElementById('manifestoText');
    if (!textElement) return;

    const textToType =
      'Para sentirte tú, no seguimos tendencias. Elegimos lo que permanece y te hace destacar sin decir una sola palabra.';
    let index = 0;
    const speed = 50; // Velocidad en milisegundos

    function type() {
      if (index < textToType.length) {
        textElement.innerHTML += textToType.charAt(index);
        index++;
        setTimeout(type, speed);
      } else {
        // Opcional: Ocultar el cursor al terminar
        const cursor = document.querySelector('.cursor');
        if (cursor) cursor.style.display = 'none';
      }
    }

    // Iniciar la animación con un pequeño delay para que el usuario ya esté mirando
    setTimeout(type, 1000);
  }

  // Asegúrate de llamar a esta función en tu DOMContentLoaded
  // Dentro de: if (page === 'reserva') { initTypewriter(); ... }
})();
