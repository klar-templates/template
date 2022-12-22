const iframe = document.querySelector('.js-iframe');
const desktop = document.querySelector('.js-desktop');
const ipad = document.querySelector('.js-ipad');
const mobile = document.querySelector('.js-mobile');

function clearBreakpoints() {
  iframe.classList.remove('desktop');
  iframe.classList.remove('ipad');
  iframe.classList.remove('mobile');
}

desktop.addEventListener('click', (e) => {if(iframe.classList.contains('desktop')) {clearBreakpoints();} else {clearBreakpoints();iframe.classList.add('desktop')}});
ipad.addEventListener('click', (e) => {if(iframe.classList.contains('ipad')) {clearBreakpoints();} else {clearBreakpoints();iframe.classList.add('ipad')}});
mobile.addEventListener('click', (e) => {if(iframe.classList.contains('mobile')) {clearBreakpoints();} else {clearBreakpoints();iframe.classList.add('mobile')}});