
import klarConfig from './config.json';
import Hero from "./blocks/hero.js";
import Team from "./blocks/team";

const klarComponents = {
  Hero: Hero,
  Team: Team,
};

window.klarComponents = klarComponents;
window.klarComponentsConfig = klarConfig;
console.log(window.klarComponents);

// const blocks = klarConfig.data_defaults.blocks;

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