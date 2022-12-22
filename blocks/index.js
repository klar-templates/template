
import templateConfig from '../config.json';
import Hero from "./hero";
import Team from "./team";

const templateComponents = {
  Hero: Hero,
  Team: Team,
};

window.templateComponents = templateComponents;
window.templateConfig = templateConfig;

// Add Klar react app script after Babel has transpiled the JSX code
const script = document.createElement('script');
script.src = 'http://localhost:4173/assets/index.b21a2e21.js';
script.type = 'module';
script.crossOrigin = true;
document.querySelector('head').appendChild(script);

window.initTemplate = function (data) {
  console.log(data);
}































// const blocks = klarConfig.data_defaults.blocks;

// ReactDOM.createRoot(
//   document.body,
// ).render(
//   <React.StrictMode>
//     <>
//       <BestHero />
//       {/* <Team /> */}
//     </>
//   </React.StrictMode>,
// );