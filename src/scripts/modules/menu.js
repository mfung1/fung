import config from '../config';

const setAttributes = (menu, submenu) => {
  if (menu.getAttribute('aria-expanded') === 'false') {
    menu.setAttribute('aria-expanded', "true");
    menu.setAttribute('aria-open', "true");
    submenu.setAttribute('data-open', "true");
  } else {
    menu.setAttribute('aria-expanded', "false");
    menu.setAttribute('aria-open', "false");
    submenu.setAttribute('data-open', "false");
  }
}
const toggleMenu = () => {
  const menu = document.querySelector(config.menu.buttonSelector);
  const submenu = document.querySelector(config.menu.submenuSelector);

  menu.addEventListener('click', () => {setAttributes(menu, submenu)});
  menu.addEventListener('keydown', (e) => {
    if (e.key === 'enter') {
      setAttributes(menu, submenu)
    }
  });
  
}

export default toggleMenu;