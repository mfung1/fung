const toggleDarkMode = (toggle, documentElement) => {
  const previouslySet = window.localStorage.getItem('darkmode');
    toggle.addEventListener('click', () => {
      if(documentElement.getAttribute('data-dark') == 'false') {
        documentElement.setAttribute('data-dark', 'true');
        window.localStorage.setItem('darkmode', 'true');
      } else {
        window.localStorage.setItem('darkmode', 'false'); 
        documentElement.setAttribute('data-dark', 'false');
      }
    });
    console.log(previouslySet);
    if (previouslySet == 'true') {
      console.log('should set');
      documentElement.setAttribute('data-dark', 'true');
    }
}

export default toggleDarkMode;