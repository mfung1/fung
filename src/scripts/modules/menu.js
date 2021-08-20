import config from "../config";
import debounce from './debounce';
const getAttributes = (menu, submenu) => {
  const menuVal = menu.getAttribute('aria-expanded'),
        submenuVal = submenu.getAttribute('aria-expanded');
  return {"menuVal": menuVal, "submenuVal": submenuVal};
}
const setAttributes = (menu, submenu) => {
  console.log('Menu is expanded:' + menu.getAttribute('aria-expanded'));
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
  let values = getAttributes(button, submenu);
  // console.log(values);
  button.addEventListener('click', debounce((e) => {
    e.preventDefault();
    setAttributes(button, submenu)
  }));
  button.addEventListener('keydown', (e) => {
    e.preventDefault();
    if (e.key === 'enter') {
      setAttributes(button, submenu)
    }
  }); 
}
export {toggleMenu, setAttributes, getAttributes};