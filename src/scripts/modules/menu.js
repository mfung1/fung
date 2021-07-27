import config from "../config";

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

const toggleMenu = (button, submenu) => {
  button.addEventListener('click', () => {
    setAttributes(button, submenu)
  });
  button.addEventListener('keydown', (e) => {
    if (e.key === 'enter') {
      setAttributes(button, submenu)
    }
  }); 
}

export default toggleMenu;