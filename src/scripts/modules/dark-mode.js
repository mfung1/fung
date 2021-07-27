const toggleDarkMode = (toggle, documentElement) => {
  toggle.addEventListener('click', () => {
    if(documentElement.getAttribute('data-dark') == 'false') {
      documentElement.setAttribute('data-dark', 'true');
      return;
    } 
    documentElement.setAttribute('data-dark', 'false');
  })
}

export default toggleDarkMode;