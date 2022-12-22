
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
script.src = 'http://localhost:4173/assets/index.ebcd8e4e.js';
script.type = 'module';
script.crossOrigin = true;
document.querySelector('head').appendChild(script);

// const blocks = klarConfig.data_defaults.blocks;
// console.log(klarConfig)

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