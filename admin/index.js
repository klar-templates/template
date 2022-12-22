const iframe = document.querySelector('.js-iframe');
const desktop = document.querySelector('.js-desktop');
const ipad = document.querySelector('.js-ipad');
const mobile = document.querySelector('.js-mobile');

function clearBreakpoints() {
  iframe.classList.remove('desktop');
  iframe.classList.remove('ipad');
  iframe.classList.remove('mobile');
  desktop.classList.remove('active');
  ipad.classList.remove('active');
  mobile.classList.remove('active');
}

desktop.addEventListener('click', (e) => {if((window.innerWidth - 260) < 1280) {clearBreakpoints();return};if(iframe.classList.contains('desktop')) {clearBreakpoints();} else {clearBreakpoints();iframe.classList.add('desktop');e.target.classList.add('active');}});
ipad.addEventListener('click', (e) => {if((window.innerWidth - 260) < 1024) {clearBreakpoints();return};if(iframe.classList.contains('ipad')) {clearBreakpoints();} else {clearBreakpoints();iframe.classList.add('ipad');e.target.classList.add('active');}});
mobile.addEventListener('click', (e) => {if((window.innerWidth - 260) < 768) {clearBreakpoints();return};if(iframe.classList.contains('mobile')) {clearBreakpoints();} else {clearBreakpoints();iframe.classList.add('mobile');e.target.classList.add('active');}});