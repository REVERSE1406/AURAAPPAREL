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

  var PRODUCTOS = {
    'vestido-verde-esmeralda': {
      id: 'vestido-verde-esmeralda',
      nombre: 'Vestido Verde Esmeralda',
      precio: '$60',
      categoria: 'Vestidos',
      img: 'heather.jpg',
      lead: 'Luce sofisticada con un tono joya que ilumina la piel. Ideal para eventos, fotos y noches especiales.',
      highlights: ['Showroom bajo cita', 'Prueba de fit y caída', 'Asesoría para combinar accesorios'],
    },
    'vestido-plateado-lentejuelas': {
      id: 'vestido-plateado-lentejuelas',
      nombre: 'Vestido Plateado con Lentejuelas',
      precio: '$60',
      categoria: 'Vestidos',
      img: 'heather5.jpg',
      lead: 'Brilla sin esfuerzo. Lentejuelas y silueta elegante para robar miradas desde que llegas.',
      highlights: ['Perfecto para fiesta', 'Se ve increíble en cámara', 'Reserva y pruébalo en showroom'],
    },
    'vestido-rosado-plisado': {
      id: 'vestido-rosado-plisado',
      nombre: 'Vestido Rosado Plisado',
      precio: '$55',
      categoria: 'Vestidos',
      img: 'heather2.jpg',
      lead: 'Plisado que estiliza y movimiento que se siente ligero. Un clásico romántico, moderno y femenino.',
      highlights: ['Caída fluida', 'Ideal para día o noche', 'Te ayudamos a elegir accesorios'],
    },
    'cartera-cadena': {
      id: 'cartera-cadena',
      nombre: 'Cartera Cadena',
      precio: '$45',
      categoria: 'Carteras',
      img: 'heather4.jpg',
      lead: 'El toque final que eleva cualquier look. Minimal, elegante y lista para una salida perfecta.',
      highlights: ['Detalle de cadena', 'Combina con todo', 'Disponible en showroom'],
    },
    'traje-azul-marino': {
      id: 'traje-azul-marino',
      nombre: 'Traje Azul Marino',
      precio: '$80',
      categoria: 'Conjuntos',
      img: 'heather1.jpg',
      lead: 'Poder y elegancia en una sola pieza. Ideal para ocasiones donde quieres verte impecable.',
      highlights: ['Silueta estructurada', 'Versátil', 'Asesoría en showroom'],
    },
    'vestido-teal-plisado': {
      id: 'vestido-teal-plisado',
      nombre: 'Vestido Teal Plisado',
      precio: '$65',
      categoria: 'Vestidos',
      img: 'heather3.jpg',
      lead: 'Un color distinto, elegante y con presencia. Plisado para estilizar y moverte con seguridad.',
      highlights: ['Color protagonista', 'Movimiento fluido', 'Showroom bajo cita'],
    },
    'vestido-gris-encaje': {
      id: 'vestido-gris-encaje',
      nombre: 'Vestido Gris Encaje',
      precio: '$70',
      categoria: 'Vestidos',
      img: 'modelo2.jpg',
      lead: 'Encaje con un aire fino y sofisticado. Perfecto para un evento especial con estilo sutil.',
      highlights: ['Detalle en encaje', 'Elegancia atemporal', 'Pruébalo antes de comprar'],
    },
    'vestido-falda-corta-cafe': {
      id: 'vestido-falda-corta-cafe',
      nombre: 'Vestido de Falda Corta Café',
      precio: '$60',
      categoria: 'Vestidos',
      img: 'modelo1.jpg',
      lead: 'Corto, chic y con actitud. Una opción ideal para verte arreglada sin verte “demasiado”.',
      highlights: ['Look moderno', 'Fácil de combinar', 'Reserva tu cita'],
    },
    'conjunto-lentejuelas': {
      id: 'conjunto-lentejuelas',
      nombre: 'Conjunto Lentejuelas',
      precio: '$75',
      categoria: 'Conjuntos',
      img: 'marlucas.jpg',
      lead: 'Dos piezas, mil posibilidades. Un statement que brilla y se adapta a tu estilo.',
      highlights: ['Dos piezas', 'Alto impacto', 'Ideal para fiesta'],
    },
    'vestido-plisado-plateado': {
      id: 'vestido-plisado-plateado',
      nombre: 'Vestido Plisado Plateado',
      precio: '$45',
      categoria: 'Vestidos',
      img: 'modelo2.jpg',
      lead: 'Plisado con brillo sutil: elegante, favorecedor y perfecto para una noche especial.',
      highlights: ['Brillo sutil', 'Silueta favorecedora', 'Showroom bajo cita'],
    },
    'conjunto-azul-noche': {
      id: 'conjunto-azul-noche',
      nombre: 'Conjunto Azul Noche',
      precio: '$90',
      categoria: 'Conjuntos',
      img: 'modelo1.jpg',
      lead: 'Azul profundo, presencia total. Un conjunto que se ve caro y te hace sentir segura.',
      highlights: ['Tono premium', 'Elegante', 'Pruébalo en showroom'],
    },
    'top-azul-tejido': {
      id: 'top-azul-tejido',
      nombre: 'Top Azul Tejido',
      precio: '$35',
      categoria: 'Tops',
      img: 'modelo2.jpg',
      lead: 'Textura tejida y color que resalta. Un básico elevado para armar outfits con intención.',
      highlights: ['Textura', 'Versátil', 'Ideal para layering'],
    },
    'vestido-crema-casual': {
      id: 'vestido-crema-casual',
      nombre: 'Vestido Crema Casual',
      precio: '$50',
      categoria: 'Vestidos',
      img: 'modelo1.jpg',
      lead: 'Crema minimal y elegante. Perfecto para un look limpio, fresco y fácil de combinar.',
      highlights: ['Minimal', 'Combina con todo', 'Ideal para día'],
    },
    'pantalon-camel': {
      id: 'pantalon-camel',
      nombre: 'Pantalón Camel',
      precio: '$55',
      categoria: 'Pantalones',
      img: 'modelo3.jpeg',
      lead: 'Camel: el neutro perfecto. Un pantalón que eleva cualquier top y te estiliza al instante.',
      highlights: ['Neutro premium', 'Fácil de combinar', 'Look de oficina o salida'],
    },
    'conjunto-blusa-falda': {
      id: 'conjunto-blusa-falda',
      nombre: 'Conjunto Blusa + Falda',
      precio: '$65',
      categoria: 'Conjuntos',
      img: 'heather1.jpg',
      lead: 'Femenino y elegante. Un conjunto pensado para verte lista sin complicarte.',
      highlights: ['Dos piezas', 'Romántico', 'Ideal para eventos'],
    },
    'vestido-az-shoulder': {
      id: 'vestido-az-shoulder',
      nombre: 'Vestido AZ Shoulder',
      precio: '$60',
      categoria: 'Vestidos',
      img: 'modelo3.jpeg',
      lead: 'Diseño con personalidad y un fit que marca presencia. Ideal para una noche especial.',
      highlights: ['Silueta protagonista', 'Perfecto para fiesta', 'Reserva tu cita'],
    },
  };

  function getPageId() {
    var b = document.body;
    return b && b.getAttribute('data-page') ? b.getAttribute('data-page') : '';
  }

  function initNavbar() {
    var navbar = document.getElementById('navbar');
    if (!navbar) return;
    window.addEventListener('scroll', function () {
      navbar.classList.toggle('scrolled', window.scrollY > 80);
    });
  }

  /** Experiencia: nav oculta en hero rojo; al bajar o al pulsar «La experiencia» solo texto, sin fondo. */
  function initExperienciaNavigation() {
    var nav = document.getElementById('navbar');
    var landing = document.getElementById('landing');
    var btn = document.getElementById('btnLaExperiencia');
    if (!nav || !landing) return;

    function syncNav() {
      var threshold = Math.max(0, landing.offsetHeight - 40);
      var past = window.scrollY >= threshold;
      if (past) {
        nav.classList.add('exp-nav-visible', 'nav-text-only');
      } else {
        nav.classList.remove('exp-nav-visible', 'nav-text-only');
      }
    }

    if (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        var target = document.getElementById('exp-content');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        nav.classList.add('exp-nav-visible', 'nav-text-only');
      });
    }

    window.addEventListener('scroll', syncNav);
    window.addEventListener('resize', syncNav);

    if (window.location.hash === '#exp-content') {
      nav.classList.add('exp-nav-visible', 'nav-text-only');
    }
    syncNav();
    window.addEventListener('load', syncNav);
  }

  function initHeroParallax() {
    var titles = document.querySelectorAll('[data-parallax-title]');
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
      // Rota las 3 imágenes entre sí (mismo efecto en index y experiencia).
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

  function initTimelineLine() {
    var tl = document.querySelector('.timeline');
    var tlLine = document.getElementById('timelineLine');
    if (!tl || !tlLine) return;
    window.addEventListener('scroll', function () {
      var rect = tl.getBoundingClientRect();
      var viewH = window.innerHeight;
      if (rect.top < viewH && rect.bottom > 0) {
        var progress = Math.max(0, Math.min(1, (viewH - rect.top) / (viewH + rect.height)));
        tlLine.style.height = progress * 100 + '%';
      }
    });
  }

  window.setView = function (mode) {
    var grid = document.getElementById('catGrid');
    var carousel = document.getElementById('catCarousel');
    var btnG = document.getElementById('btnGrilla');
    var btnC = document.getElementById('btnCarrusel');
    if (!grid || !carousel) return;
    if (mode === 'grilla') {
      grid.classList.add('active');
      grid.classList.remove('hidden');
      carousel.classList.remove('active');
      if (btnG) btnG.classList.add('active');
      if (btnC) btnC.classList.remove('active');
    } else {
      grid.classList.remove('active');
      grid.classList.add('hidden');
      carousel.classList.add('active');
      if (btnC) btnC.classList.add('active');
      if (btnG) btnG.classList.remove('active');
    }
  };

  /* ─── IMPROVED CAROUSEL ─── */
  var carouselState = {
    track: null,
    slides: [],
    dots: [],
    currentIndex: 0,
    autoplayTimer: null,
    touchStartX: 0,
    touchEndX: 0,
    isDragging: false
  };

  function initImprovedCarousel() {
    var track = document.getElementById('carouselTrack');
    var dotsContainer = document.getElementById('carouselDots');
    var prevBtn = document.getElementById('carouselPrev');
    var nextBtn = document.getElementById('carouselNext');
    
    if (!track) return;
    
    carouselState.track = track;
    carouselState.slides = Array.from(track.querySelectorAll('.carousel-slide'));
    
    if (!carouselState.slides.length) return;
    
    // Create dots
    if (dotsContainer) {
      carouselState.slides.forEach(function(_, i) {
        var dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'carousel-dot' + (i === 0 ? ' is-active' : '');
        dot.setAttribute('aria-label', 'Ir a slide ' + (i + 1));
        dot.addEventListener('click', function() {
          goToSlide(i);
        });
        dotsContainer.appendChild(dot);
        carouselState.dots.push(dot);
      });
    }
    
    // Button events
    if (prevBtn) {
      prevBtn.addEventListener('click', function() {
        moveCarousel(-1);
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', function() {
        moveCarousel(1);
      });
    }
    
    // Touch/swipe support
    track.addEventListener('touchstart', handleTouchStart, { passive: true });
    track.addEventListener('touchmove', handleTouchMove, { passive: true });
    track.addEventListener('touchend', handleTouchEnd);
    
    // Keyboard navigation
    track.setAttribute('tabindex', '0');
    track.addEventListener('keydown', function(e) {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        moveCarousel(-1);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        moveCarousel(1);
      }
    });
    
    // Auto-play
    startAutoplay();
    
    // Pause on hover
    track.addEventListener('mouseenter', stopAutoplay);
    track.addEventListener('mouseleave', startAutoplay);
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
    
    var slideWidth = carouselState.slides[0].offsetWidth + 4; // 4px gap
    carouselState.track.scrollTo({
      left: carouselState.currentIndex * slideWidth,
      behavior: 'smooth'
    });
    
    updateDots();
  }
  
  window.moveCarousel = function(dir) {
    goToSlide(carouselState.currentIndex + dir);
  };
  
  function updateDots() {
    carouselState.dots.forEach(function(dot, i) {
      dot.classList.toggle('is-active', i === carouselState.currentIndex);
    });
  }
  
  function startAutoplay() {
    stopAutoplay();
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    carouselState.autoplayTimer = setInterval(function() {
      moveCarousel(1);
    }, 5000);
  }
  
  function stopAutoplay() {
    if (carouselState.autoplayTimer) {
      clearInterval(carouselState.autoplayTimer);
      carouselState.autoplayTimer = null;
    }
  }

  /* ─── SELECTION & CART SYSTEM ─── */
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
    selectedItems.forEach(function(item) {
      var elements = document.querySelectorAll('[data-id="' + item.id + '"]');
      elements.forEach(function(el) {
        el.classList.add('is-selected');
      });
    });
    updateCart();
  }
  
  window.toggleSelection = function(element) {
    if (!element) return;
    
    var id = element.getAttribute('data-id');
    var name = element.getAttribute('data-name');
    var price = element.getAttribute('data-price');
    var img = element.getAttribute('data-img');
    
    if (!id) return;
    
    var index = selectedItems.findIndex(function(item) {
      return item.id === id;
    });
    
    if (index > -1) {
      // Remove from selection
      selectedItems.splice(index, 1);
      document.querySelectorAll('[data-id="' + id + '"]').forEach(function(el) {
        el.classList.remove('is-selected');
      });
    } else {
      // Add to selection
      selectedItems.push({ id: id, name: name, price: price, img: img });
      document.querySelectorAll('[data-id="' + id + '"]').forEach(function(el) {
        el.classList.add('is-selected');
      });
    }
    
    saveSelections();
    updateCart();
    
    // Pulse animation on cart
    var cartToggle = document.getElementById('cartToggle');
    if (cartToggle && selectedItems.length > 0) {
      cartToggle.style.transform = 'scale(1.15)';
      setTimeout(function() {
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
        itemsEl.innerHTML = selectedItems.map(function(item) {
          return '<div class="cart-item" data-cart-id="' + item.id + '">' +
            '<img class="cart-item-img" src="' + item.img + '" alt="' + item.name + '">' +
            '<div class="cart-item-info">' +
              '<p class="cart-item-name">' + item.name + '</p>' +
              '<span class="cart-item-price">' + item.price + '</span>' +
            '</div>' +
            '<button type="button" class="cart-item-remove" onclick="removeFromCart(\'' + item.id + '\')" aria-label="Eliminar">' +
              '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">' +
                '<line x1="18" y1="6" x2="6" y2="18"></line>' +
                '<line x1="6" y1="6" x2="18" y2="18"></line>' +
              '</svg>' +
            '</button>' +
          '</div>';
        }).join('');
      }
    }
  }
  
  window.removeFromCart = function(id) {
    var index = selectedItems.findIndex(function(item) {
      return item.id === id;
    });
    
    if (index > -1) {
      selectedItems.splice(index, 1);
      document.querySelectorAll('[data-id="' + id + '"]').forEach(function(el) {
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
      toggle.addEventListener('click', function() {
        var isOpen = panel.classList.contains('is-open');
        panel.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', !isOpen);
      });
    }
    
    if (closeBtn && panel) {
      closeBtn.addEventListener('click', function() {
        panel.classList.remove('is-open');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
      });
    }
    
    if (clearBtn) {
      clearBtn.addEventListener('click', function() {
        selectedItems.forEach(function(item) {
          document.querySelectorAll('[data-id="' + item.id + '"]').forEach(function(el) {
            el.classList.remove('is-selected');
          });
        });
        selectedItems = [];
        saveSelections();
        updateCart();
      });
    }
    
    if (whatsappBtn) {
      whatsappBtn.addEventListener('click', function() {
        if (selectedItems.length === 0) return;
        
        var msg = 'Hola Aura Apparel,\n\nMe interesan las siguientes piezas:\n\n';
        selectedItems.forEach(function(item, i) {
          msg += (i + 1) + '. ' + item.name + ' - ' + item.price + '\n';
        });
        msg += '\nMe gustaria recibir mas informacion. Gracias!';
        
        var url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(msg);
        window.open(url, '_blank');
      });
    }
    
    // Close cart when clicking outside
    document.addEventListener('click', function(e) {
      if (!panel || !toggle) return;
      if (!panel.contains(e.target) && !toggle.contains(e.target)) {
        panel.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
    
    loadSelections();
  }
  
  // Set stagger animation index for grid items
  function setGridItemIndices() {
    var items = document.querySelectorAll('.cat-grid-item');
    items.forEach(function(item, i) {
      item.style.setProperty('--item-index', i);
    });
  }

  /* ─── ENHANCED SCROLL ANIMATIONS ─── */
  function initEnhancedScrollAnimations() {
    var animatedElements = document.querySelectorAll('.scroll-reveal, .scale-reveal, .slide-left, .slide-right');
    if (!animatedElements.length) return;
    
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      animatedElements.forEach(function(el) {
        el.classList.add('is-visible');
      });
      return;
    }
    
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          // Add stagger delay based on data attribute or default
          var delay = entry.target.getAttribute('data-delay') || 0;
          setTimeout(function() {
            entry.target.classList.add('is-visible');
          }, parseInt(delay));
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(function(el) {
      observer.observe(el);
    });
  }

  /* ─── PARALLAX SCROLL EFFECTS ─── */
  function initParallaxEffects() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    
    var parallaxElements = document.querySelectorAll('[data-parallax]');
    if (!parallaxElements.length) return;
    
    var ticking = false;
    
    function updateParallax() {
      var scrollY = window.scrollY;
      var windowHeight = window.innerHeight;
      
      parallaxElements.forEach(function(el) {
        var rect = el.getBoundingClientRect();
        var speed = parseFloat(el.getAttribute('data-parallax')) || 0.1;
        
        if (rect.top < windowHeight && rect.bottom > 0) {
          var yPos = (scrollY - el.offsetTop + windowHeight) * speed;
          el.style.transform = 'translateY(' + yPos + 'px)';
        }
      });
      
      ticking = false;
    }
    
    window.addEventListener('scroll', function() {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }, { passive: true });
  }

  /* ─── SMOOTH LINK TRANSITIONS ─── */
  function initSmoothPageTransitions() {
    var links = document.querySelectorAll('a[href^="index"], a[href^="about"], a[href^="catalogo"], a[href^="experiencia"], a[href^="reserva"], a[href^="producto"]');
    
    links.forEach(function(link) {
      link.addEventListener('click', function(e) {
        var href = this.getAttribute('href');
        if (!href || href.startsWith('#') || href.startsWith('http')) return;
        
        e.preventDefault();
        document.body.style.opacity = '0';
        document.body.style.transform = 'translateY(-10px)';
        document.body.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        
        setTimeout(function() {
          window.location.href = href;
        }, 300);
      });
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

  /* ─── Calendario + Reserva ─── */
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
    var imgEl = document.getElementById('productImg');
    var nameEl = document.getElementById('productName');
    var priceEl = document.getElementById('productPrice');
    var catEl = document.getElementById('productCategory');
    var leadEl = document.getElementById('productLead');
    var highlightsEl = document.getElementById('productHighlights');
    var reserveBtn = document.getElementById('productReserveBtn');

    if (!imgEl || !nameEl || !priceEl || !reserveBtn) return;

    var params = new URLSearchParams(window.location.search || '');
    var id = (params.get('id') || '').trim();
    var p = id && PRODUCTOS[id] ? PRODUCTOS[id] : null;

    if (!p) {
      document.title = 'Aura Apparel — Producto';
      nameEl.textContent = 'Producto no encontrado';
      priceEl.textContent = '';
      if (catEl) catEl.textContent = 'Catálogo';
      if (leadEl) leadEl.textContent = 'Vuelve al catálogo y elige tu pieza favorita.';
      imgEl.src = 'heather.jpg';
      imgEl.alt = 'Aura Apparel — producto';
      reserveBtn.textContent = 'Ir a catálogo';
      reserveBtn.href = 'catalogo.html';
      if (highlightsEl) highlightsEl.innerHTML = '';
      return;
    }

    document.title = 'Aura Apparel — ' + p.nombre;
    nameEl.textContent = p.nombre;
    priceEl.textContent = p.precio || '';
    if (catEl) catEl.textContent = toTitleCase(p.categoria || 'Colección Aura');
    if (leadEl) leadEl.textContent = p.lead || leadEl.textContent;
    imgEl.src = p.img;
    imgEl.alt = p.nombre;

    if (highlightsEl) {
      highlightsEl.innerHTML = '';
      (p.highlights || []).forEach(function (txt) {
        var pill = document.createElement('div');
        pill.className = 'product-pill';
        pill.innerHTML = '<strong>•</strong><span>' + String(txt) + '</span>';
        highlightsEl.appendChild(pill);
      });
    }

    var nota = 'Quiero reservar: ' + p.nombre + ' (' + (p.precio || '') + ').';
    reserveBtn.href = 'reserva.html?producto=' + encodeURIComponent(nota);
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

  /* ─── Experiencia: tabs por click + showroom autoplay ─── */
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
    }

    function restartShowroomAutoplay() {
      if (showroomTimer) {
        clearInterval(showroomTimer);
        showroomTimer = null;
      }
      if (!showroomFs || !showroomFs.classList.contains('is-active')) return;
      showroomTimer = window.setInterval(function () {
        applyShowroomSlide(showroomIdx + 1);
      }, 2000);
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
      if (showroomFs) {
        showroomFs.classList.remove('is-active');
        showroomFs.setAttribute('aria-hidden', 'true');
      }
      document.body.classList.remove('showroom-lock', 'showroom-active');
      slides.forEach(function (s) {
        s.classList.remove('is-on');
      });
      var line = document.getElementById('showroomCaptionLine');
      if (line && slides[0]) {
        line.textContent = slides[0].getAttribute('data-caption') || '';
        line.classList.remove('is-changing');
      }
    }

    function startShowroom() {
      if (!showroomFs || !slides.length) return;
      if (showroomTimer) {
        clearInterval(showroomTimer);
        showroomTimer = null;
      }
      showroomFs.classList.add('is-active');
      showroomFs.setAttribute('aria-hidden', 'false');
      document.body.classList.add('showroom-lock', 'showroom-active');
      applyShowroomSlide(0);
      restartShowroomAutoplay();
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
        stopShowroom();
      });
    }

    if (showroomFs) {
      var touchStartX = null;
      showroomFs.addEventListener(
        'touchstart',
        function (e) {
          if (!showroomFs.classList.contains('is-active')) return;
          touchStartX = e.changedTouches[0].screenX;
        },
        { passive: true },
      );
      showroomFs.addEventListener(
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

    function setTriggerHot(key, on) {
      triggers.forEach(function (t) {
        if (t.getAttribute('data-panel') === key) {
          t.classList.toggle('is-hot', on);
        }
      });
    }

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
        stopShowroom();
        triggers.forEach(function (t) {
          t.classList.remove('is-hot');
        });
        if (activeKey === 'showroom') activate('manifiesto');
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
    var wa = 'https://wa.me/' + WHATSAPP_NUMBER;
    document.querySelectorAll('a[data-social="whatsapp"]').forEach(function (a) {
      a.href = wa;
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener noreferrer');
    });
    document.querySelectorAll('a[data-social="instagram"]').forEach(function (a) {
      a.href = SOCIAL_INSTAGRAM;
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener noreferrer');
    });
    document.querySelectorAll('a[data-social="tiktok"]').forEach(function (a) {
      a.href = SOCIAL_TIKTOK;
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener noreferrer');
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initSocialLinks();
    initNavbar();
    initTextReveals();
    initEnhancedScrollAnimations();
    initParallaxEffects();
    initSmoothPageTransitions();
    var page = getPageId();

    if (page === 'home') {
      initHeroParallax();
      initHeroStagger();
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
      initCatalogReveal();
      initCatalogFilters();
      initImprovedCarousel();
      initCartUI();
      setGridItemIndices();
      initFooterParallax();
    }

    if (page === 'experiencia') {
      initHeroParallax();
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
    }

    if (page === 'producto') {
      initProductoPage();
      initScrollAnimations();
      initFooterParallax();
    }
  });
})();
