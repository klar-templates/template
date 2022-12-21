
import klarConfig from '../config.json';
import Hero from "./hero";
import Team from "./team";

const klarComponents = {
  Hero: Hero,
  Team: Team,
};

window.klarComponents = klarComponents;
window.klarComponentsConfig = klarConfig;
console.log(window.klarComponents);

// const blocks = klarConfig.data_defaults.blocks;
// console.log(klarConfig)

ReactDOM.createRoot(
  document.body,
).render(
  <React.StrictMode>
    <>
      <Hero />
      <Team />
    </>
  </React.StrictMode>,
);