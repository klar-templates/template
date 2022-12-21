
import klarConfig from '../config.json';
import BestHero from "./hero";
import Team from "./team";

const klarComponents = {
  BestHero: BestHero,
  // Team: Team,
};

window.klarComponents = klarComponents;
window.klarComponentsConfig = klarConfig;
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