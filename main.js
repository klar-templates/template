
import klarConfig from './config.json';
import Hero from "./blocks/hero.js";
import Team from "./blocks/team";

const klarComponents = {
  Hero: Hero,
  Team: Team,
};

window.klarComponents = klarComponents;
console.log(window.klarComponents);

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


// window.klarComponentsConfig = klarConfig;

// const blocks = klarConfig.data_defaults.blocks;

// export default function App() {
//   return (
//     <Hero
//       {...{
//         block: { ...blocks.hero3, _id: 'hero-123456', _type: 'hero' },
//       }}
//     />
//   );
// }
