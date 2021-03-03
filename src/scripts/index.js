import toggleMenu from './modules/menu';
import debounce from './modules/debounce';
import matchHeights from './modules/match-heights';
import fadeUp from './modules/fade-up';

window.addEventListener('DOMContentLoaded', () => {
  toggleMenu();
  matchHeights();
  fadeUp();
  window.addEventListener("resize", debounce(matchHeights, 100, false), false);
});
