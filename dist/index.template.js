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
    className: "text-center text-neutral-50 mx-auto max-w-3xl px:4 sm:px-16 pb-32 pt-20 sm:pt-40 sm:pb-48"
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
function TemplateEditorTeam() {
  return /*#__PURE__*/React.createElement("h1", null, "Hehe hehe");
}
const templateComponents = {
  TemplateEditorHero: TemplateEditorHero,
  TemplateEditorTeam: TemplateEditorTeam
};

// window.templateComponents = templateComponents;
// console.log(window.templateComponents)
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
window.templateComponents = templateComponents;
window.templateNunjucksBlocks = {"team":"<section id=\"{{block_id}}\" class=\"section-padding-y bg-neutral-100 dark:bg-neutral-800\">\n  <div class=\"container-fluid container-padding-x mx-auto\">\n    <div class=\"text-center\">\n      <h2 class=\"section-heading uppercase text-neutral-900 dark:text-neutral-100\" data-field-string=\"heading\">{{block.heading}}</h2>\n      <h3 class=\"section-subheading text-neutral-500 dark:text-neutral-200\" data-field-string=\"sub_heading\">{{block.sub_heading}}</h3>\n    </div>\n    <div class=\"grid grid-gap grid-cols-1 md:grid-cols-3 mt-12\" data-field-array=\"team\">\n    {% for item in block.team %}\n      <div class=\"mb-2 sm:mb-0\">\n        <div class=\"text-center\" data-field-array-item>\n          <img class=\"border-8 border-neutral-200 w-48 h-48 lg:w-56 lg:h-56 mx-auto rounded-full\" src=\"{{ item.image }}\" data-field-string-file=\"team[{{loop.index0}}].image\" no-data-placement=\"top\" no-data-inset=\"true\" alt=\"{{ item.heading }}\" />\n          <h4 class=\"text-2xl font-bold mt-4 text-neutral-900 dark:text-neutral-100\" data-field-string=\"team[{{loop.index0}}].heading\">{{ item.heading }}</h4>\n          <p class=\"text-muted text-neutral-500 dark:text-neutral-200\" data-field-string=\"team[{{loop.index0}}].text\" data-toolbar-buttons=\"['bold', 'italic', 'underline', 'anchor']\">{{ item.text }}</p>\n          <ul class=\"flex gap-4 justify-center mt-4\">\n            {% set parent_index_0 = loop.index0 %}\n            {% for link_item in item.social_links %}\n              <li><a class=\"dark:bg-neutral-900 focus:ring focus:ring-neutral-400 outline-neutral-400 w-10 h-10 text-xl inline-flex bg-black/95 text-white items-center justify-center rounded-full\" href=\"{{ link_item.link }}\" data-field-string-ui-widget-icon=\"team[{{parent_index_0}}].social_links[{{loop.index0}}].icon\" data-field-string-format-uri=\"team[{{parent_index_0}}].social_links[{{loop.index0}}].link\" data-placement=\"bottom\"><i class=\"fa fa-{{ link_item.icon }}\"></i></a></li>\n            {% endfor %}\n          </ul>\n        </div>\n      </div>\n    {% endfor %}\n    </div>\n    <div class=\"col-lg-8 mx-auto text-center max-w-2xl mt-12\">\n      <p class=\"large text-muted text-neutral-700 dark:text-neutral-200\" data-field-text=\"text\" data-toolbar-buttons=\"['bold', 'italic', 'underline', 'anchor']\">{{ block.text }}</p>\n    </div>\n  </div>\n</section>","buttons":"<section id=\"{{block_id}}\" class=\"pt-14 pb-12\">\n  <div class=\"container-fluid container-padding-x mx-auto\">\n    <!-- <div class=\"flex flex-wrap justify-center gap-2\">\n      <button class=\"btn btn-text btn-extended\">\n        <span class=\"material-icons-outlined\">\n          brush\n        </span>\n        Enabled\n      </button>\n      <button class=\"btn btn-filled btn-extended\">\n        <span class=\"material-icons\">settings</span>\n        Enabled\n      </button>\n      <button class=\"btn btn-filled-dark btn-extended\">\n        <span class=\"material-icons\">settings</span>\n        Enabled\n      </button>\n      <button class=\"btn btn-tonal btn-extended\">\n        <span class=\"material-icons\">settings</span>\n        Enabled\n      </button>\n      <button class=\"btn btn-outlined btn-extended\">\n        <span class=\"material-icons-outlined\">home</span>\n        Enabled\n      </button>\n      <button class=\"btn btn-elevated btn-extended\">\n        <span class=\"material-icons-outlined\">feed</span>\n        Enabled\n      </button>\n      <button class=\"btn btn-extended\" disabled>\n        <span class=\"material-icons\">settings</span>\n        disabled\n      </button>\n    </div> -->\n    <div class=\"flex flex-wrap justify-center gap-2\">\n      <button class=\"btn btn-text btn-extended\">\n        <span class=\"fa fa-instagram\"></span>\n        Enabled\n      </button>\n      <button class=\"btn btn-filled btn-extended\">\n        <span class=\"fa fa-instagram\"></span>\n        Enabled\n      </button>\n      <button class=\"btn btn-filled-dark btn-extended ripple\">\n        <span class=\"fa fa-instagram\"></span>\n        Enabled\n      </button>\n      <button class=\"btn btn-tonal btn-extended\">\n        <span class=\"fa fa-instagram\"></span>\n        Enabled\n      </button>\n      <button class=\"btn btn-outlined btn-extended\">\n        <span class=\"fa fa-instagram\"></span>\n        Enabled\n      </button>\n      <button class=\"btn btn-elevated btn-extended\">\n        <span class=\"fa fa-instagram\"></span>\n        Enabled\n      </button>\n      <button class=\"btn btn-extended\" disabled>\n        <span class=\"fa fa-instagram\"></span>\n        disabled\n      </button>\n    </div>\n    <div class=\"flex flex-wrap justify-center gap-2 mt-10\">\n      <button class=\"btn btn-text btn-icon\">\n        <span class=\"fa fa-instagram\"></span>\n      </button>\n      <button class=\"btn btn-filled btn-icon\">\n        <span class=\"fa fa-image\"></span>\n      </button>\n      <button class=\"btn btn-filled-dark btn-icon\">\n        <span class=\"fa fa-facebook\"></span>\n      </button>\n      <button class=\"btn btn-tonal btn-icon\">\n        <span class=\"fa fa-file-o\"></span>\n      </button>\n      <button class=\"btn btn-outlined btn-icon\">\n        <span class=\"fa fa-instagram\"></span>\n      </button>\n      <button class=\"btn btn-elevated btn-icon\">\n        <span class=\"fa fa-group\"></span>\n      </button>\n      <button class=\"btn btn-icon\" disabled>\n        <span class=\"fa fa-instagram\"></span>\n      </button>\n    </div>\n    <!-- <div class=\"flex flex-wrap justify-center gap-2 mt-10\">\n      <button class=\"btn btn-text btn-icon\">\n        <span class=\"material-icons-outlined\">brush</span>\n      </button>\n      <button class=\"btn btn-filled btn-icon\">\n        <span class=\"material-icons\">settings</span>\n      </button>\n      <button class=\"btn btn-filled-dark btn-icon\">\n        <span class=\"material-icons\">settings</span>\n      </button>\n      <button class=\"btn btn-tonal btn-icon\">\n        <span class=\"material-icons\">settings</span>\n      </button>\n      <button class=\"btn btn-outlined btn-icon\">\n        <span class=\"material-icons-outlined\">home</span>\n      </button>\n      <button class=\"btn btn-elevated btn-icon\">\n        <span class=\"material-icons-outlined\">feed</span>\n      </button>\n      <button class=\"btn btn-icon\" disabled>\n        <span class=\"material-icons\">settings</span>\n      </button>\n    </div> -->\n    <div class=\"flex flex-wrap justify-center gap-2 mt-10\">\n      <button class=\"btn btn-text btn-lg\">\n        Enabled\n      </button>\n      <button class=\"btn btn-filled btn-lg\">\n        Enabled\n      </button>\n      <button class=\"btn btn-filled-dark btn-lg\">\n        Enabled\n      </button>\n      <button class=\"btn btn-tonal btn-lg\">\n        Enabled\n      </button>\n      <button class=\"btn btn-outlined btn-lg\">\n        Enabled\n      </button>\n      <button class=\"btn btn-elevated btn-lg\">\n        Enabled\n      </button>\n      <button class=\"btn btn-lg\" disabled>\n        disabled\n      </button>\n    </div>\n    <div class=\"flex flex-wrap justify-center gap-2 mt-10\">\n      <button class=\"btn btn-text\">\n        Enabled\n      </button>\n      <button class=\"btn btn-filled\">\n        Enabled\n      </button>\n      <button class=\"btn btn-filled-dark\">\n        Enabled\n      </button>\n      <button class=\"btn btn-tonal\">\n        Enabled\n      </button>\n      <button class=\"btn btn-outlined\">\n        Enabled\n      </button>\n      <button class=\"btn btn-elevated\">\n        Enabled\n      </button>\n      <button class=\"btn\" disabled>\n        disabled\n      </button>\n    </div>\n    <div class=\"flex flex-wrap justify-center gap-2 mt-10\">\n      <button class=\"btn btn-text btn-sm\">\n        Enabled\n      </button>\n      <button class=\"btn btn-filled btn-sm\">\n        Enabled\n      </button>\n      <button class=\"btn btn-filled-dark btn-sm\">\n        Enabled\n      </button>\n      <button class=\"btn btn-tonal btn-sm\">\n        Enabled\n      </button>\n      <button class=\"btn btn-outlined btn-sm\">\n        Enabled\n      </button>\n      <button class=\"btn btn-elevated btn-sm\">\n        Enabled\n      </button>\n      <button class=\"btn btn-sm\" disabled>\n        disabled\n      </button>\n    </div>\n    <div>\n      <button class=\"btn btn-text justify-center w-full mt-4\">\n        Enabled\n      </button>\n      <button class=\"btn btn-filled justify-center w-full mt-4\">\n        Enabled\n      </button>\n      <button class=\"btn btn-filled-dark justify-center w-full mt-4\">\n        Enabled\n      </button>\n      <button class=\"btn btn-tonal justify-center w-full mt-4\">\n        Enabled\n      </button>\n      <button class=\"btn btn-outlined justify-center w-full mt-4\">\n        Enabled\n      </button>\n      <button class=\"btn btn-elevated justify-center w-full mt-4\">\n        Enabled\n      </button>\n      <button class=\"btn w-full justify-center mt-4\" disabled>\n        Enabled\n      </button>\n    </div>\n    <div class=\"flex flex-wrap justify-center gap-2 mt-10\">\n      <button class=\"btn btn-filled btn-color-success\">\n        Success\n      </button>\n      <button class=\"btn btn-filled btn-color-error\">\n        Error\n      </button>\n      <button class=\"btn btn-filled btn-color-danger\">\n        Danger\n      </button>\n      <button class=\"btn btn-filled btn-color-info\">\n        Info\n      </button>\n      <button class=\"btn btn-filled btn-color-link\">\n        Link\n      </button>\n      <button class=\"btn btn-filled btn-color-error\" disabled>\n        Disabled\n      </button>\n    </div>\n  </div>\n</section>\n<script>\n  function createRipple(event) {\n    const el = event.currentTarget;\n\n    const circle = document.createElement('span');\n    const diameter = Math.max(el.clientWidth, el.clientHeight);\n    const radius = diameter / 2;\n\n    circle.style.width = circle.style.height = `${diameter}px`;\n    \n    circle.style.left = `${((event.clientX - el.offsetLeft) + window.pageXOffset) - radius}px`;\n    circle.style.top = `${((event.clientY - el.offsetTop) + window.pageYOffset) - radius}px`;\n    circle.style.transform = 'scale(0)';\n    circle.classList.add('ripple');\n\n    const ripple = el.querySelector('.ripple');\n\n    if (ripple) {\n      ripple.remove();\n    }\n\n    el.appendChild(circle);\n  }\n\n  (function () {\n    const elArr = document.querySelectorAll('.btn:not([data-ripple=\"false\"])');\n    for (const el of elArr) {\n      el.addEventListener('click', createRipple);\n    }\n  })();\n</script>"};
})();