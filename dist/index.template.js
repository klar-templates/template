(function () {
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
function TemplateTeam() {
  return /*#__PURE__*/React.createElement("h1", null, "Hehe hehe");
}
const templateComponents = {
  TemplateHero: TemplateHero,
  TemplateTeam: TemplateTeam
};
window.templateComponents = templateComponents;
window.templateNunjucksBlocks = {"temp-team":"<section id=\"{{block_id}}\" class=\"section bg-neutral-50 dark:bg-neutral-800\">\n  <div class=\"container-fluid container-padding-x mx-auto\">\n    <div class=\"text-center\">\n      <h2 class=\"section-heading uppercase text-neutral-900 dark:text-neutral-100\" data-field-string=\"heading\">{{block.heading}}</h2>\n      <h3 class=\"section-subheading text-neutral-500 dark:text-neutral-300\" data-field-string=\"sub_heading\">{{block.sub_heading}}</h3>\n    </div>\n    <div class=\"grid grid-gap grid-cols-1 md:grid-cols-3 mt-12\" data-field-array=\"team\">\n    {% for item in block.team %}\n      <div class=\"mb-2 sm:mb-0\">\n        <div class=\"text-center\" data-field-array-item>\n          <img class=\"border-8 border-neutral-200 w-48 h-48 lg:w-56 lg:h-56 mx-auto rounded-full\" src=\"{{ item.image }}\" data-field-string-file=\"team[{{loop.index0}}].image\" no-data-placement=\"top\" no-data-inset=\"true\" alt=\"{{ item.heading }}\" />\n          <h4 class=\"text-2xl font-bold mt-4 text-neutral-900 dark:text-neutral-100\" data-field-string=\"team[{{loop.index0}}].heading\">{{ item.heading }}</h4>\n          <p class=\"text-muted text-neutral-500 dark:text-neutral-300\" data-field-string=\"team[{{loop.index0}}].text\" data-toolbar-buttons=\"['bold', 'italic', 'underline', 'anchor']\">{{ item.text }}</p>\n          <ul class=\"flex gap-4 justify-center mt-4\">\n            {% set parent_index_0 = loop.index0 %}\n            {% for link_item in item.social_links %}\n              <li><a class=\"dark:bg-neutral-900 focus:ring focus:ring-neutral-400 w-10 h-10 text-xl inline-flex bg-black/95 text-white items-center justify-center rounded-full\" href=\"{{ link_item.link }}\" data-field-string-ui-widget-icon=\"team[{{parent_index_0}}].social_links[{{loop.index0}}].icon\" data-field-string-format-uri=\"team[{{parent_index_0}}].social_links[{{loop.index0}}].link\" data-placement=\"bottom\"><i class=\"fa fa-{{ link_item.icon }}\"></i></a></li>\n            {% endfor %}\n          </ul>\n        </div>\n      </div>\n    {% endfor %}\n    </div>\n    <div class=\"col-lg-8 mx-auto text-center max-w-2xl mt-12\">\n      <p class=\"large text-muted text-neutral-5 dark:text-neutral-300\" data-field-text=\"text\" data-toolbar-buttons=\"['bold', 'italic', 'underline', 'anchor']\">{{ block.text }}</p>\n    </div>\n  </div>\n</section>"};
})();