import toggleMenu from './modules/menu';
import debounce from './modules/debounce';
import matchHeights from './modules/match-heights';
document.addEventListener('DOMContentLoaded', () => {
  toggleMenu();
  window.addEventListener("load", matchHeights, false);
  window.addEventListener("resize", debounce(matchHeights, 100, false), false);  
});
