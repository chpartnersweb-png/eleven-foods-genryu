const toggle = document.querySelector<HTMLButtonElement>('.nav-toggle');
const navigation = document.querySelector<HTMLElement>('#mobile-nav');
const header = document.querySelector<HTMLElement>('.site-header');
let previousFocus: HTMLElement | null = null;

function closeNavigation(restoreFocus = false) {
  if (!toggle || !navigation) return;
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'メニューを開く');
  navigation.hidden = true;
  document.body.classList.remove('nav-is-open');
  if (restoreFocus) previousFocus?.focus();
}

toggle?.addEventListener('click', () => {
  if (!navigation) return;
  if (toggle.getAttribute('aria-expanded') === 'true') { closeNavigation(true); return; }
  previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : toggle;
  toggle.setAttribute('aria-expanded', 'true');
  toggle.setAttribute('aria-label', 'メニューを閉じる');
  navigation.hidden = false;
  document.body.classList.add('nav-is-open');
});
navigation?.querySelectorAll<HTMLAnchorElement>('a').forEach(link => link.addEventListener('click', () => closeNavigation()));
document.addEventListener('keydown', event => {
  if (!navigation || navigation.hidden || !toggle) return;
  if (event.key === 'Escape') { closeNavigation(true); return; }
  if (event.key !== 'Tab') return;
  const focusable: HTMLElement[] = [toggle, ...navigation.querySelectorAll<HTMLAnchorElement>('a[href]')];
  const activeIndex = focusable.indexOf(document.activeElement as HTMLElement);
  event.preventDefault();
  const nextIndex = event.shiftKey ? (activeIndex <= 0 ? focusable.length - 1 : activeIndex - 1) : (activeIndex + 1) % focusable.length;
  focusable[nextIndex]?.focus();
});
window.matchMedia('(min-width: 901px)').addEventListener('change', event => { if (event.matches) closeNavigation(); });
const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 24);
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

async function setupMotion() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  try {
    const [{ gsap }, { ScrollTrigger }, { default: Lenis }] = await Promise.all([import('gsap'), import('gsap/ScrollTrigger'), import('lenis')]);
    gsap.registerPlugin(ScrollTrigger);
    gsap.ticker.lagSmoothing(0);
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      let smoothScroll: InstanceType<typeof Lenis> | null = null;
      let refreshFrame = 0;
      let needsScrollResize = false;
      let active = true;
      const refresh = () => {
        if (!active || refreshFrame) return;
        refreshFrame = requestAnimationFrame(() => {
          refreshFrame = 0;
          if (needsScrollResize) {
            smoothScroll?.resize();
            needsScrollResize = false;
          }
          ScrollTrigger.refresh(true);
        });
      };
      const onMenuToggle = () => {
        needsScrollResize = true;
        refresh();
      };
      const context = gsap.context(() => {
        gsap.from('[data-hero-image]', { opacity: 0, y: 28, scale: 0.97, duration: 1.05, ease: 'power2.out', clearProps: 'opacity' });
        gsap.from('[data-hero-copy]', { opacity: 0, y: 12, duration: 0.75, stagger: 0.12, delay: 0.12, ease: 'power2.out', clearProps: 'opacity' });
        gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach(element => gsap.from(element, {
          opacity: 0, y: 22, duration: 0.65, ease: 'power2.out',
          scrollTrigger: { trigger: element, start: 'top 94%', once: true }, clearProps: 'opacity,transform',
        }));
      });
      const smoothMedia = gsap.matchMedia();
      smoothMedia.add('(min-width: 901px) and (pointer: fine)', () => {
        // Vertical scrolling uses the same controller over menu tables and the page.
        // Only horizontal table gestures are excluded through the table attribute.
        const lenis = new Lenis({ autoRaf: false, smoothWheel: true, syncTouch: false, lerp: 0.1, anchors: { offset: -108 }, prevent: node => node.classList.contains('mobile-nav') });
        smoothScroll = lenis;
        lenis.on('scroll', ScrollTrigger.update);
        const tick = (time: number) => lenis.raf(time * 1000);
        gsap.ticker.add(tick);
        const parallax = gsap.context(() => document.querySelectorAll<HTMLElement>('[data-parallax]').forEach(element => gsap.to(element, {
          y: Number(element.dataset.parallax || -24), ease: 'none', scrollTrigger: { trigger: element.parentElement, start: 'top bottom', end: 'bottom top', scrub: 0.8 },
        })));
        return () => { gsap.ticker.remove(tick); smoothScroll = null; lenis.destroy(); parallax.revert(); };
      });
      document.fonts.ready.then(refresh);
      const pendingImages = Array.from(document.querySelectorAll<HTMLImageElement>('img')).filter(img => !img.complete);
      const menus = document.querySelectorAll<HTMLDetailsElement>('details.full-menu');
      pendingImages.forEach(img => img.addEventListener('load', refresh, { once: true }));
      menus.forEach(menu => menu.addEventListener('toggle', onMenuToggle));
      return () => {
        active = false;
        cancelAnimationFrame(refreshFrame);
        pendingImages.forEach(img => img.removeEventListener('load', refresh));
        menus.forEach(menu => menu.removeEventListener('toggle', onMenuToggle));
        smoothMedia.revert();
        context.revert();
      };
    });
  } catch {
    // Native navigation and readable content remain available without animation.
  }
}
void setupMotion();
