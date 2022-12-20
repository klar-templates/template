
// import klarConfig from './config.json';
// import Hero from "./blocks/Hero";

const klarComponents = {
  Hero: Hero,
};

window.klarComponents = klarComponents;
console.log(window.klarComponents);
window.klarComponents['Hero']();


// ReactDOM.createRoot(
//   document.getElementById('root'),
// ).render(
//   <React.StrictMode>
//     <Hero />
//   </React.StrictMode>,
// );


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
