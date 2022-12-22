
import templateConfig from '../config.json';
import Hero from "./hero";
import Team from "./team";

const templateComponents = {
  Hero: Hero,
  Team: Team,
};

window.templateComponents = templateComponents;
window.templateConfig = templateConfig;

// Add klar-pages-app script after Babel has transpiled the JSX code
const script = document.createElement('script');
script.src = 'http://localhost:4173/assets/index.d086ce1f.js';
script.type = 'module';
script.crossOrigin = true;
document.querySelector('head').appendChild(script);

window.initTemplate = function (data) {
  const startpage = data.data.pages[0];
  const blocks = startpage.blocks;
  const hero = blocks[0];
  console.log(hero);
}