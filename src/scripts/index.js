import toggleMenu from './modules/menu';
import debounce from './modules/debounce';
import matchHeights from './modules/match-heights';
import observeItems from './modules/observeItems';
import Swup from 'swup';

window.addEventListener('DOMContentLoaded', () => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (!reducedMotion.matches) {
    const swup = new Swup();
    toggleMenu();
    matchHeights();
    observeItems();
    swup.on('pageView', () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
      toggleMenu();
      matchHeights();
      observeItems();
      window.addEventListener("resize", debounce(matchHeights, 100, false), false);
    })
  }
});
