
import templateConfig from '../config.json';
import Hero from "./hero";
import Team from "./team";

const templateComponents = {
  Hero: Hero,
  Team: Team,
};

window.templateComponents = templateComponents;
window.templateConfig = templateConfig;
// console.log(window.klarComponents);

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