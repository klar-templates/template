(function () {
window.templateJs = "";

function TemplateHero(props) {
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
    className: "dark bg-slate-900"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "text-center mx-auto max-w-3xl px:4 sm:px-16 pb-32 pt-20 sm:pt-40 sm:pb-48 dark:text-neutral-50"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-4xl font-bold tracking-tight sm:text-center sm:text-6xl"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "mt-6 text-lg leading-8 sm:text-center text-neutral-700 dark:text-neutral-200"
  }, subtitle), /*#__PURE__*/React.createElement("div", {
    className: "mt-8 flex gap-x-4 sm:justify-center"
  }, /*#__PURE__*/React.createElement(Link, {
    className: "btn btn-filled-dark btn-lg",
    to: "/sida-1"
  }, "Learn more ", /*#__PURE__*/React.createElement("span", {
    class: "ml-1 leading-[1.312rem]",
    "aria-hidden": "true"
  }, " \u2192")), /*#__PURE__*/React.createElement(Link, {
    className: "btn btn-outlined btn-lg",
    to: "/kontakt"
  }, "Live demo ", /*#__PURE__*/React.createElement("span", {
    class: "ml-1 leading-[1.312rem]",
    "aria-hidden": "true"
  }, "\u2192"))))));
}
function TemplateTeam() {
  return /*#__PURE__*/React.createElement("h1", null, "Hehe hehe");
}
const templateComponents = {
  TemplateHero: TemplateHero,
  TemplateTeam: TemplateTeam
};
window.templateComponents = templateComponents;
window.templateNunjucksBlocks = {"team-template":"<section id=\"{{block._id}}\" class=\"section-padding-y bg-neutral-100 dark:bg-neutral-800\">\n  <div class=\"container-fluid container-padding-x mx-auto\">\n    <div class=\"text-center\">\n      <h2 class=\"section-heading uppercase text-neutral-900 dark:text-neutral-100\" data-field-string=\"heading\">{{block.heading}}</h2>\n      <h3 class=\"section-subheading text-neutral-500 dark:text-neutral-200\" data-field-string=\"sub_heading\">{{block.sub_heading}}</h3>\n    </div>\n    <div class=\"grid grid-gap grid-cols-1 md:grid-cols-3 mt-12\" data-field-array=\"team\">\n    {% for item in block.team %}\n      <div class=\"mb-2 sm:mb-0\">\n        <div class=\"text-center\" data-field-array-item>\n          <img class=\"border-8 border-neutral-200 w-48 h-48 lg:w-56 lg:h-56 mx-auto rounded-full\" src=\"{{ item.image }}\" data-field-string-file=\"team[{{loop.index0}}].image\" no-data-placement=\"top\" no-data-inset=\"true\" alt=\"{{ item.heading }}\" />\n          <h4 class=\"text-2xl font-bold mt-4 text-neutral-900 dark:text-neutral-100\" data-field-string=\"team[{{loop.index0}}].heading\">{{ item.heading }}</h4>\n          <p class=\"text-neutral-500 dark:text-neutral-200\" data-field-string=\"team[{{loop.index0}}].text\" data-toolbar-buttons=\"['bold', 'italic', 'underline', 'anchor']\">{{ item.text }}</p>\n          <ul class=\"flex gap-4 justify-center mt-4\">\n            {% set parent_index_0 = loop.index0 %}\n            {% for link_item in item.social_links %}\n              <li>\n                <a\n                  class=\"btn btn-filled-dark btn-icon\"\n                  href=\"{{ link_item.link }}\"\n                  data-href=\"{{ link_item.link }}\"\n                  data-field-string-ui-widget-icon=\"team[{{parent_index_0}}].social_links[{{loop.index0}}].icon\"\n                  data-field-string-format-uri=\"team[{{parent_index_0}}].social_links[{{loop.index0}}].link\"\n                  data-placement=\"bottom\">\n                    <span class=\"fa fa-{{ link_item.icon }}\"></span>\n                  </a>\n              </li>\n            {% endfor %}\n          </ul>\n        </div>\n      </div>\n    {% endfor %}\n    </div>\n    <div class=\"col-lg-8 mx-auto text-center max-w-2xl mt-12\">\n      <p class=\"large text-muted text-neutral-700 dark:text-neutral-200\" data-field-text=\"text\" data-toolbar-buttons=\"['bold', 'italic', 'underline', 'anchor']\">{{ block.text }}</p>\n    </div>\n  </div>\n</section>","services-template":"<section id=\"{{block._id}}\" class=\"dark:bg-neutral-900 section-padding-y\">\n  <div class=\"container-fluid container-padding-x mx-auto\">\n    <div class=\"text-center\">\n      <h2 class=\"section-heading uppercase text-neutral-900 dark:text-neutral-100\" data-field-string=\"heading\">{{block.heading}}</h2>\n      <h3 class=\"section-subheading text-neutral-500 dark:text-neutral-200\" data-field-string=\"sub_heading\">{{block.sub_heading}}</h3>\n    </div>\n    <div class=\"grid grid-gap grid-cols-1 md:grid-cols-3 mt-12\" data-field-array=\"items\">\n    {% for item in block.items %}\n    <div class=\"mb-2 sm:mb-0\">\n      <div class=\"text-center\" data-field-array-item>\n        <span\n          class=\"fa-stack fa-4x\"\n          data-field-string-ui-widget-icon=\"items[{{loop.index0}}].icon\"\n          data-placement=\"center\"\n        >\n          <i class=\"fa fa-circle fa-stack-2x text-primary\"></i>\n          <i class=\"fa fa-{{ item.icon }} fa-stack-1x fa-inverse\"></i>\n        </span>\n        <h4\n          class=\"text-2xl font-bold mt-2 text-neutral-900 dark:text-neutral-100\"\n          data-field-string=\"items[{{loop.index0}}].heading\"\n        >{{ item.heading }}</h4>\n        <p\n          class=\"mt-4 leading-7 text-neutral-500 dark:text-neutral-200\"\n          data-field-string=\"items[{{loop.index0}}].text\"\n          data-toolbar-buttons=\"['bold', 'italic', 'underline', 'anchor']\"\n        >{{ item.text }}</p>\n      </div>\n    </div>\n    {% endfor %}\n    </div>\n  </div>\n</section>"};
})();