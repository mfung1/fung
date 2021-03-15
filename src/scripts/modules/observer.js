import config from '../config';

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    let callBack = entry.target.dataset.callback;
    callBacks[callBack](entry);
  });
}, config.observerOptions);

const callBacks = {
  "fadeUpEffect": function (entry) {
    if (entry.isIntersecting) {
      entry.target.setAttribute('data-fade-up', 'visible');
      observer.unobserve(entry.target);
    }
  },
  "playAnimation": function (entry) {
    if (entry.isIntersecting) {
      entry.target.setAttribute('data-animation', 'running');
      console.log('Entry intersecting:' + entry.isIntersecting);
    } else {
      console.log('Entry intersecting:' + entry.isIntersecting);
      entry.target.setAttribute('data-animation', 'paused');
    }
  }
}


export default observer;