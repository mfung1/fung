import toggleMenu from './modules/menu';
import debounce from './modules/debounce';
import matchHeights from './modules/match-heights';
import fadeUp from './modules/fade-up';
import Swup from 'swup';

window.addEventListener('DOMContentLoaded', () => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (!reducedMotion.matches) {
    const swup = new Swup();
    toggleMenu();
    matchHeights();
    fadeUp();
    swup.on('pageView', () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
      toggleMenu();
      matchHeights();
      fadeUp();
      window.addEventListener("resize", debounce(matchHeights, 100, false), false);
    })
  }
});
