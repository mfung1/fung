import config from './config';
import toggleMenu from './modules/menu';
import debounce from './modules/debounce';
import matchHeights from './modules/match-heights';
import observeItems from './modules/observeItems';
import toggleDarkMode from './modules/dark-mode';
import Swup from 'swup';

window.addEventListener('DOMContentLoaded', () => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)"),
        menuButton = document.querySelector(config.menu.buttonSelector),
        submenu = document.querySelector(config.menu.submenuSelector),
        toggle = document.querySelector(config.darkmode.toggle);
  if (!reducedMotion.matches) {
    const swup = new Swup();
    toggleMenu(menuButton, submenu);
    toggleDarkMode(toggle, document.documentElement);
    matchHeights();
    observeItems();
    swup.on('pageView', () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
      toggleMenu(menuButton, submenu);
      toggleDarkMode(toggle, document.documentElement);
      matchHeights();
      observeItems();
    });
    window.addEventListener("resize", debounce(matchHeights, 100, false), false);
  }
});
