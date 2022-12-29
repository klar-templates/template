(function () {
function TemplateEditorHero(props) {
  const {
    title,
    subtitle
  } = props.block;
  const {
    Section,
    Container,
    Button,
    Link
  } = props.ui;
  // console.log('props', props.ui);
  // const Section = KlarComponents.Section;
  // const Container = KlarComponents.Container;
  // const Button = KlarComponents.Button;
  // const Link = KlarLink;
  // console.log(KlarComponents);
  return /*#__PURE__*/React.createElement(Section, {
    className: "bg-slate-900 text-on-background"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "text-center text-inverse-on-background mx-auto max-w-3xl px:4 sm:px-16 pb-32 pt-20 sm:pt-40 sm:pb-48"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-4xl font-bold tracking-tight sm:text-center sm:text-6xl"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "mt-6 text-lg leading-8 sm:text-center"
  }, subtitle), /*#__PURE__*/React.createElement("div", {
    className: "mt-8 flex gap-x-4 sm:justify-center"
  }, /*#__PURE__*/React.createElement(Link, {
    className: "bg-primary text-on-primary inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 shadow-sm hover:bg-primary-dark",
    to: "/sida-1"
  }, "Sida 1"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "bg-primary text-on-primary inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 shadow-sm hover:bg-primary-dark"
  }, "Learn more ", /*#__PURE__*/React.createElement("span", {
    class: "text-on-primary",
    "aria-hidden": "true"
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-neutral-200 ring-1 ring-gray-200/10 hover:ring-gray-200/20"
  }, "Live demo ", /*#__PURE__*/React.createElement("span", {
    class: "text-neutral-400",
    "aria-hidden": "true"
  }, "\u2192"))))));
}
const templateComponents = {
  TemplateEditorHero: TemplateEditorHero,
  TemplateEditorTeam: TemplateEditorTeam
};
window.templateComponents = templateComponents;
// window.templateNunjucksBlocks = templateNunjucksBlocks;

// window.templateConfig = templateConfig;
// console.log(window.templateConfig)

// fetch('../config.json')
//   .then((response) => response.json())
//   .then((data) => { 
//     window.templateComponents = templateComponents;
//     window.templateConfig = data;
//   });

// if (parent.frames.initAdmin) {
//   parent.frames.initAdmin();
// } else {
//   // Add klar-pages-app script after Babel has transpiled the JSX code
//   const script = document.createElement('script');
//   script.src = 'http://localhost:4173/assets/index.b5643cb4.js';
//   script.type = 'module';
//   script.crossOrigin = true;
//   document.querySelector('head').appendChild(script);
// }

// // Add klar-pages-app script after Babel has transpiled the JSX code
// const script = document.createElement('script');
// script.src = 'http://localhost:4173/assets/index.b5643cb4.js';
// script.type = 'module';
// script.crossOrigin = true;
// document.querySelector('head').appendChild(script);

// window.initTemplate = function (data) {

//   const startpage = data.data.pages[0];
//   const blocks = startpage.blocks;
//   const block1 = blocks[0];
//   const block2 = blocks[1];
//   // const b = {
//   //   _type: "hero1"
//   // }
//   // data.data.pages[0].blocks = [];
//   // data.data.pages[0].blocks.push({
//   //   _type: "hero1"
//   // });
//   // data.data.pages[0].blocks.push(b);
//   // data.data.pages[0].blocks.push(block2); 
//   // data.data.pages[0].blocks.push(block2);
//   // console.log(block2);
// }
window.templateNunjucksBlocks = {"team":"<section class=\"section bg-neutral-100\" id=\"team\">\n  <div class=\"container-fluid container-padding-x mx-auto\">\n    <div class=\"text-center\">\n      <h2 class=\"section-heading uppercase\">Our Amazing Team</h2>\n      <h3 class=\"section-subheading text-neutral-500\">Lorem ipsum dolor sit amet consectetur.</h3>\n    </div>\n    <div class=\"grid grid-gap grid-cols-1 md:grid-cols-3 mt-12\">\n      <div class=\"mb-2 sm:mb-0\">\n        <div class=\"text-center\">\n          <img class=\"border-8 border-neutral-200 w-48 h-48 lg:w-56 lg:h-56 mx-auto rounded-full\" src=\"https://startbootstrap.github.io/startbootstrap-agency/assets/img/team/1.jpg\" alt=\"...\">\n          <h4 class=\"text-2xl font-bold mt-4\">Parveen Anand</h4>\n          <p class=\"text-muted text-neutral-500\">Lead Designer</p>\n        </div>\n      </div>\n      <div class=\"mb-2 sm:mb-0\">\n        <div class=\"text-center\">\n          <img class=\"border-8 border-neutral-200 w-48 h-48 lg:w-56 lg:h-56 mx-auto rounded-full\" src=\"https://startbootstrap.github.io/startbootstrap-agency/assets/img/team/2.jpg\" alt=\"...\">\n          <h4 class=\"text-2xl font-bold mt-4\">Diana Petersen</h4>\n          <p class=\"text-muted text-neutral-500\">Lead Marketer</p>\n        </div>\n      </div>\n      <div class=\"mb-2 sm:mb-0\">\n        <div class=\"text-center\">\n          <img class=\"border-8 border-neutral-200 w-48 h-48 lg:w-56 lg:h-56 mx-auto rounded-full\" src=\"https://startbootstrap.github.io/startbootstrap-agency/assets/img/team/3.jpg\" alt=\"...\">\n          <h4 class=\"text-2xl font-bold mt-4\">Larry Parker</h4>\n          <p class=\"text-muted text-neutral-500\">Lead Developer</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-8 mx-auto text-center max-w-2xl mt-12\"><p class=\"large text-muted text-neutral-500\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>\n  </div>\n</section>"};
})();