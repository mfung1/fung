// https://john-dugan.com/javascript-debounce/
// https://codepen.io/johndugan/pen/BNwBWL?editors=001
const debounce= (e,t,n) => {let a;return () => {let r=this,i=arguments,o=()=>{a=null,n||e.apply(r,i)},s=n&&!a;clearTimeout(a),a=setTimeout(o,t||200),s&&e.apply(r,i)}};

export default debounce;