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
function HeroTemplate(props) {
  const {
    Section,
    Container,
    Button,
    Link
  } = props.ui;
  const {
    _id,
    _type,
    show_button,
    show_subtitle,
    show_title,
    title,
    subtitle,
    link,
    link_text,
    style,
    image
  } = props.block;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    id: _id,
    className: `${_type} section-padding-y klar-outline`,
    "data-field-string-file": "image",
    "data-placement": "top",
    "data-offset-top": "210",
    "data-hide-arrow": "true",
    "data-wrapper": "true",
    "no-data-inset": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container-fluid container-padding-x mx-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "intro-text py-32 md:py-[130px] lg:py-[170px]"
  }, show_subtitle && /*#__PURE__*/React.createElement("div", {
    className: "intro-lead-in mb-4 md:mb-6 text-2xl lg:text-4xl lg:text-[40px]",
    "data-field-string": "subtitle",
    "data-placeholder": "Text f\xF6r lead-in"
  }, subtitle), show_title && /*#__PURE__*/React.createElement("div", {
    className: "intro-heading mb-8 md:mb-12 text-4xl sm:text-5xl lg:text-7xl lg:text-[75px] text-neutral-0 text-neutral-1 text-neutral-2 text-neutral-3 text-neutral-4 text-neutral-5 text-neutral-6 text-neutral-7 text-neutral-8 text-neutral-9 text-white",
    style: {
      color: 'white'
    },
    "data-field-string": "title"
  }, title), show_button && /*#__PURE__*/React.createElement(Link, {
    to: "/",
    className: "button text-on-primary bg-primary dark:bg-primary-dark",
    "data-field-string": "link_text",
    "data-field-string-format-uri": "link",
    "data-placement": "bottom"
  }, link_text))), /*#__PURE__*/React.createElement("div", {
    className: "background"
  })), /*#__PURE__*/React.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: `
        <style>
          #${_id} {
            background-image: url('${image}');
            background-position: 0 0px;
            background-size: cover;
            position: relative;
            margin-top: 0;
            height: 100vh;
            text-align: center;
          }
          #${_id} .container-auto {
            
          }
          #${_id} .intro-text {
            align-items: center;
            color: #fff;
            text-align: center;
            position: relative;
            z-index: 1;
          }
          #${_id} .intro-lead-in {
            font-family: "Droid Serif", "Helvetica Neue", Helvetica, Arial, sans-serif;
            font-style: italic;
          }
          #${_id} .intro-heading {
            font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;
            text-transform: uppercase;
            font-weight: 700;
        
          }
          #${_id} .button {
            display: inline-block;
            margin-bottom: 0;
            line-height: 1.42857143;
            text-align: center;
            white-space: nowrap;
            vertical-align: middle;
            -ms-touch-action: manipulation;
            touch-action: manipulation;
            cursor: pointer;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            background-image: none;
            border: 1px solid transparent;
            font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;
            text-transform: uppercase;
            font-weight: 700;
            border-radius: 3px;
            font-size: 18px;
            padding: 20px 40px;
            ackground-color: #e02e3d;
            order-color: #e02e3d;
            olor: #ffffff;
          }
          #${_id} .background {
            background-color: rgba(0, 0, 0, 0.4);
            inset: 0;
            position: absolute;
          }
        </style>`
    }
  }));
}
function FooterTemplate(props) {
  const {
    Section,
    Container,
    Button,
    Link
  } = props.ui;
  const {
    _id,
    _type,
    copyright_text,
    social_links,
    quick_links,
    style,
    image
  } = props.block;
  return /*#__PURE__*/React.createElement("footer", {
    className: "text-center lg:text-left"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "copyright",
    "data-field-string": "copyright_text",
    dangerouslySetInnerHTML: {
      __html: copyright_text
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "social-buttons-wrapper lg:text-center"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "social-buttons"
  }, social_links.map((item, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    href: item.link,
    "data-field-string-ui-widget-icon": `social_links[${i}].icon`,
    "data-field-string-format-uri": `social_links[${i}].link`,
    "data-placement": "bottom"
  }, /*#__PURE__*/React.createElement("i", {
    className: `fa fa-${item.icon}`
  })))))), /*#__PURE__*/React.createElement("div", {
    className: "lg:text-right"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "quicklinks font-display"
  }, quick_links.map((item, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    href: item.link,
    "data-field-string": `quick_links[${i}].title`,
    "data-field-string-format-uri": `quick_links[${i}].link`,
    "data-placement": "bottom"
  }, item.title))))))), /*#__PURE__*/React.createElement(Style, {
    id: _id,
    type: _type,
    style: style,
    image: image
  }));
  function Style({
    id,
    style
  }) {
    const themeStyle = `
      <!-- Theme CSS -->
      <style>
      footer {
        padding: 25px 0;
      }
      footer .copyright {
        line-height: 40px;
        font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;
        text-transform: uppercase;
        text-transform: none;
      }
      footer .social-buttons-wrapper {
        min-height: 1px;
      }
      footer ul.social-buttons {
        display: flex;
        list-style: none;
        justify-content: center;
        gap: 10px;
      }
      footer ul.social-buttons li {
        
      }
      footer ul.social-buttons li a {
        display: block;
        background-color: #222222;
        height: 40px;
        width: 40px;
        border-radius: 100%;
        font-size: 20px;
        line-height: 40px;
        color: white;
        outline: none;
        -webkit-transition: all 0.3s;
        -moz-transition: all 0.3s;
        transition: all 0.3s;
      }
      footer ul.social-buttons li a:hover,
      footer ul.social-buttons li a:focus,
      footer ul.social-buttons li a:active {
        background-color: #fed136;
      }
      footer ul.quicklinks {
        margin-bottom: 0;
        line-height: 40px;
        text-transform: uppercase;
        text-transform: none;
      }
      footer ul.quicklinks li {
        display: inline-block;
        padding-right: 5px;
        padding-left: 5px;
      }
      </style>

      <!-- Style CSS -->
      <style>
      footer {
        background-color: ${style.block.bg_color};
        padding-top: ${style.block.padding_top}px;
        padding-bottom: ${style.block.padding_bottom}px;
      }
      footer .social-buttons li a:hover,
      footer .social-buttons li a:focus,
      footer .social-buttons li a:active {
        background-color: ${style.social_links_hover_bg_color};
      }
      </style>`;
    return /*#__PURE__*/React.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: themeStyle
      }
    });
  }
}
const templateComponents = {
  TemplateHero: TemplateHero,
  FooterTemplate: FooterTemplate,
  HeroTemplate: HeroTemplate
};
window.templateComponents = templateComponents;
window.templateNunjucksBlocks = {"services-template":"<section id=\"{{block._id}}\" class=\"dark:bg-neutral-900 section-padding-y\">\n  <div class=\"container-fluid container-padding-x mx-auto\">\n    <div class=\"text-center\">\n      <h2 class=\"section-heading uppercase text-neutral-900 dark:text-neutral-100\" data-field-string=\"heading\">{{block.heading}}</h2>\n      <h3 class=\"section-subheading text-neutral-500 dark:text-neutral-200\" data-field-string=\"sub_heading\">{{block.sub_heading}}</h3>\n    </div>\n    <div class=\"grid grid-gap grid-cols-1 md:grid-cols-3 mt-12\" data-field-array=\"items\">\n    {% for item in block.items %}\n    <div class=\"mb-2 sm:mb-0\">\n      <div class=\"text-center\" data-field-array-item>\n        <span\n          class=\"fa-stack fa-4x\"\n          data-field-string-ui-widget-icon=\"items[{{loop.index0}}].icon\"\n          data-placement=\"center\"\n        >\n          <i class=\"fa fa-circle fa-stack-2x text-primary\"></i>\n          <i class=\"fa fa-{{ item.icon }} fa-stack-1x fa-inverse\"></i>\n        </span>\n        <h4\n          class=\"text-2xl font-bold mt-2 text-neutral-900 dark:text-neutral-100\"\n          data-field-string=\"items[{{loop.index0}}].heading\"\n        >{{ item.heading }}</h4>\n        <p\n          class=\"mt-4 leading-7 text-neutral-500 dark:text-neutral-200\"\n          data-field-string=\"items[{{loop.index0}}].text\"\n          data-toolbar-buttons=\"['bold', 'italic', 'underline', 'anchor']\"\n        >{{ item.text }}</p>\n      </div>\n    </div>\n    {% endfor %}\n    </div>\n  </div>\n</section>","team-template":"<section id=\"{{block._id}}\" class=\"section-padding-y bg-neutral-100 dark:bg-neutral-800\">\n  <div class=\"container-fluid container-padding-x mx-auto\">\n    <div class=\"text-center\">\n      <h2 class=\"section-heading uppercase text-neutral-900 dark:text-neutral-100\" data-field-string=\"heading\">{{block.heading}}</h2>\n      <h3 class=\"section-subheading text-neutral-500 dark:text-neutral-200\" data-field-string=\"sub_heading\">{{block.sub_heading}}</h3>\n    </div>\n    <div class=\"grid grid-gap grid-cols-1 md:grid-cols-3 mt-2\" data-field-array=\"team\">\n    {% for item in block.team %}\n      <div class=\"mb-2 mt-10 sm:mb-0\">\n        <div class=\"text-center\" data-field-array-item>\n          <img class=\"border-8 border-neutral-200 w-48 h-48 lg:w-56 lg:h-56 mx-auto rounded-full\" src=\"{{ item.image }}\" data-field-string-file=\"team[{{loop.index0}}].image\" no-data-placement=\"top\" no-data-inset=\"true\" alt=\"{{ item.heading }}\" />\n          <h4 class=\"text-2xl font-bold mt-4 text-neutral-900 dark:text-neutral-100\" data-field-string=\"team[{{loop.index0}}].heading\">{{ item.heading }}</h4>\n          <p class=\"text-neutral-500 dark:text-neutral-200\" data-field-string=\"team[{{loop.index0}}].text\" data-toolbar-buttons=\"['bold', 'italic', 'underline', 'anchor']\">{{ item.text }}</p>\n          <ul class=\"flex gap-4 justify-center mt-4\">\n            {% set parent_index_0 = loop.index0 %}\n            {% for link_item in item.social_links %}\n              <li>\n                <a\n                  class=\"btn btn-filled-dark btn-icon\"\n                  href=\"{{ link_item.link }}\"\n                  data-href=\"{{ link_item.link }}\"\n                  data-field-string-ui-widget-icon=\"team[{{parent_index_0}}].social_links[{{loop.index0}}].icon\"\n                  data-field-string-format-uri=\"team[{{parent_index_0}}].social_links[{{loop.index0}}].link\"\n                  data-placement=\"bottom\">\n                    <span class=\"fa fa-{{ link_item.icon }}\"></span>\n                  </a>\n              </li>\n            {% endfor %}\n          </ul>\n        </div>\n      </div>\n    {% endfor %}\n    </div>\n    <div class=\"mx-auto text-center max-w-2xl mt-12\">\n      <p class=\"large text-muted text-neutral-700 dark:text-neutral-200\" data-field-text=\"text\" data-toolbar-buttons=\"['bold', 'italic', 'underline', 'anchor']\">{{ block.text }}</p>\n    </div>\n  </div>\n</section>","portfolio-template":"<section id=\"{{block._id}}\" class=\"section-padding-y g-neutral-100 dark:bg-neutral-800\">\n  <div class=\"container-fluid container-padding-x mx-auto\">\n    <div class=\"text-center\">\n      <h2 class=\"section-heading uppercase text-neutral-900 dark:text-neutral-100\" data-field-string=\"heading\">{{block.heading}}</h2>\n      <h3 class=\"section-subheading text-neutral-500 dark:text-neutral-200\" data-field-string=\"sub_heading\">{{block.sub_heading}}</h3>\n    </div>\n    <div class=\"grid grid-gap grid-cols-1 md:grid-cols-3 mt-8\" data-field-array=\"items\">\n    {% for item in block.items %}\n      <div class=\"mb-2 mt-4 sm:mb-0\" x-data=\"{ showModal: false }\" x-on:keydown.window.escape=\"showModal = false\" data-field-array-item>\n        <!-- Item -->\n        <a href=\"#{{block._id}}\" x-on:click=\"showModal = !showModal\" x-on:click.prevent class=\"portfolio-link relative group\" onclick=\"showModal(event, {{loop.index0}});\">\n          <div class=\"absolute inset-0 flex justify-center items-center transition uration-300 bg-primary/0 text-neutral-100/0 group-hover:bg-primary/75 hover:text-neutral-100/100\">\n            <div class=\"portfolio-hover-content\">\n              <i class=\"fa fa-plus fa-3x\"></i>\n            </div>\n          </div>\n          <img src=\"{{ item.image }}\" class=\"img-responsive\" alt=\"\" />\n        </a>\n        <div class=\"portfolio-caption text-center\">\n          <h4\n            class=\"mt-4 text-lg lg:text-xl\"\n            data-field-string=\"items[{{loop.index0}}].client\"\n          >{{ item.client }}</h4>\n          <p\n            data-field-string=\"items[{{loop.index0}}].category\"\n            data-toolbar-buttons=\"['bold']\"\n          >{{ item.category }}</p>\n        </div>\n        <!-- Modal -->\n        <div x-show=\"showModal\" x-transition.opacity class=\"fixed inset-0 bg-slate-900/75 z-[1000] modal-{{loop.index0}} {{ \"show-modal\" if data.index == loop.index0 }}\" style=\"display: none;\" onclick=\"closeModal()\"></div>\n        <div x-show=\"showModal\" x-transition class=\"fixed inset-0 z-[1000] flex items-center justify-center max-w-4xl mx-auto {{ \"show-modal\" if data.index == loop.index0 }}\" style=\"display: none;\">\n          <div x-on:click.away=\"showModal = false\" class=\"relative mx-auto bg-white rounded-lg h-96\" style=\"width: calc(100vw - 100px);height: calc(100vh - 100px)\">\n            <div class=\"p-12 h-full container-padding-x\">\n              <div class=\"text-center container-padding-x\">\n                <h2 class=\"text-4xl uppercase text-neutral-900 dark:text-neutral-100\" data-field-string=\"items[{{loop.index0}}].title\">{{item.title}}</h2>\n                <h3 class=\"text-base font-medium italic mt-3 text-neutral-500 dark:text-neutral-200\" data-field-string=\"items[{{loop.index0}}].summary\">{{item.summary}}</h3>\n              </div>\n              <div class=\"mt-6 flex justify-center\">\n                <img\n                  class=\"text-center img-responsive mg-centered\"\n                  data-field-string-file=\"items[{{loop.index0}}].image\"\n                  src=\"{{ item.image }}\"\n                  alt=\"\" />\n              </div>\n              <div class=\"text-center mt-6 mx-auto leading-6 max-w-2xl\" data-field-text=\"items[{{loop.index0}}].body\">{{ item.body }}</div>\n              <ul class=\"text-center mt-6\">\n                <li><strong>Date</strong>: {{ item.date }}</li>\n                <li><strong>Client</strong>: {{ item.client }}</li>\n                <li><strong>Category</strong>: {{ item.category }}</li>\n              </ul>\n              <div class=\"text-center absolute bottom-10 left-0 w-full\">\n                <button x-on:click=\"showModal = !showModal\" type=\"button\" class=\"btn btn-filled btn-extended-start\" onclick=\"closeModal()\">\n                  <i class=\"fa fa-times\"></i> Close Project\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    {% endfor %}\n    </div>\n  </div>\n</section>\n<style>.show-modal {display: flex !important;}</style>\n<script>\n  if (typeof parent.frames.window.klar !== 'undefined') {\n    (function () {\n      const setState = nunjucksSetState['{{block._id}}'];\n      function showModal(e, i) {\n        e.preventDefault();\n        setTimeout(() => setState({show: true, index: i}), 100);\n        setTimeout(() => { if (parent.frames.window.reactPageIsLoaded) { parent.frames.window.reactPageIsLoaded() } }, 200);\n      }\n      function closeModal() {\n        setState(false);\n        setTimeout(() => { if (parent.frames.window.reactPageIsLoaded) { parent.frames.window.reactPageIsLoaded() } }, 200);\n      }\n      window.showModal = showModal;\n      window.closeModal = closeModal;\n    })();\n  } else {\n    window.showModal = function() {};\n    window.closeModal = function() {};\n  }\n<\/script>","portfolio-1":"<section id=\"{{block._id}}\" class=\"section-padding-y g-neutral-100 dark:bg-neutral-800\">\n  <div class=\"container-fluid container-padding-x mx-auto\">\n    <div class=\"text-center\">\n      <h2 class=\"section-heading uppercase text-neutral-900 dark:text-neutral-100\" data-field-string=\"heading\">{{block.heading}}</h2>\n      <h3 class=\"section-subheading text-neutral-500 dark:text-neutral-200\" data-field-string=\"sub_heading\">{{block.sub_heading}}</h3>\n    </div>\n    <div class=\"grid grid-gap grid-cols-1 md:grid-cols-3 mt-8\" data-field-array=\"items\">\n    {% for item in block.items %}\n      <div class=\"mb-2 mt-4 sm:mb-0\" data-field-array-item>\n        <!-- Item -->\n        <a href=\"#{{block._id}}\" class=\"portfolio-link relative group\" onclick=\"showModal(event, {{loop.index0}});\">\n          <div class=\"absolute inset-0 flex justify-center items-center transition uration-300 bg-primary/0 text-neutral-100/0 group-hover:bg-primary/75 hover:text-neutral-100/100\">\n            <div class=\"portfolio-hover-content\">\n              <i class=\"fa fa-plus fa-3x\"></i>\n            </div>\n          </div>\n          <img src=\"{{ item.image }}\" class=\"img-responsive\" alt=\"\" />\n        </a>\n        <div class=\"portfolio-caption text-center\">\n          <h4\n            class=\"mt-4 text-lg lg:text-xl\"\n            data-field-string=\"items[{{loop.index0}}].client\"\n          >{{ item.client }}</h4>\n          <p\n            data-field-string=\"items[{{loop.index0}}].category\"\n            data-toolbar-buttons=\"['bold']\"\n          >{{ item.category }}</p>\n        </div>\n        <!-- Modal -->\n        <div class=\"effect fixed inset-0 bg-neutral-900/75 z-[1000] modal-{{loop.index0}} {{ \"show-modal\" if state.index == loop.index0 }}\" style=\"display: none;\"></div>\n        <div class=\"fixed inset-0 z-[1000] flex items-center justify-center max-w-4xl mx-auto {{ \"show-modal\" if state.index == loop.index0 }}\" style=\"display: none;\">\n          <div class=\"effect-1 dialog relative mx-auto bg-white rounded-lg h-96\" style=\"width: calc(100vw - 100px);height: calc(100vh - 100px)\">\n            <div class=\"p-12 h-full container-padding-x\">\n              <div class=\"text-center container-padding-x\">\n                <h2 class=\"text-4xl uppercase text-neutral-900 dark:text-neutral-100\" data-field-string=\"items[{{loop.index0}}].title\">{{item.title}}</h2>\n                <h3 class=\"text-base font-medium italic mt-3 text-neutral-500 dark:text-neutral-200\" data-field-string=\"items[{{loop.index0}}].summary\">{{item.summary}}</h3>\n              </div>\n              <div class=\"mt-6 flex justify-center\">\n                <img\n                  class=\"text-center img-responsive mg-centered\"\n                  data-field-string-file=\"items[{{loop.index0}}].image\"\n                  src=\"{{ item.image }}\"\n                  alt=\"\" />\n              </div>\n              <div class=\"text-center mt-6 mx-auto leading-6 max-w-2xl\" data-field-text=\"items[{{loop.index0}}].body\">{{ item.body }}</div>\n              <ul class=\"text-center mt-6\">\n                <li><strong>Date</strong>: {{ item.date }}</li>\n                <li><strong>Client</strong>: {{ item.client }}</li>\n                <li><strong>Category</strong>: {{ item.category }}</li>\n              </ul>\n              <div class=\"text-center absolute bottom-10 left-0 w-full\">\n                <button type=\"button\" class=\"btn btn-filled btn-extended-start\" onclick=\"closeModal()\">\n                  <i class=\"fa fa-times\"></i> Close Project\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    {% endfor %}\n    </div>\n  </div>\n</section>\n<style>\n  .show-modal {display: flex !important;}\n  .effect {animation: effect 150ms;}\n  .effect-1 {animation: effect-1 150ms;}\n  @keyframes effect {\n    from {\n      background-color: rgb(var(--neutral-900) / 0.25);\n    }\n    to {\n      background-color: rgb(var(--neutral-900) / 0.75);\n    }\n  }\n  @keyframes effect-1 {\n    from {\n      overflow: hidden;\n      transform: scale(0.90);\n      ackground-color: rgba(255, 255, 255, 0.25);\n      \n      idth: calc(100vw - 200px);\n      eight: calc(100vh - 200px)\n    }\n    to {\n      transform: scale(1);\n      background-color: rgba(255, 255, 255, 1);\n      idth: calc(100vw - 100px);\n      eight: calc(100vh - 100px)\n    }\n    \n  }\n</style>\n<script>\n(function () {\n  const setState = nunjucksSetState['{{block._id}}'];\n  function showModal(e, i) {\n    e.preventDefault();\n    setTimeout(() => setState({show: true, index: i}), 100);\n    setTimeout(() => { if (parent.frames.window.reactPageIsLoaded) { parent.frames.window.reactPageIsLoaded() } }, 200);\n  }\n  function closeModal() {\n    setState(false);\n    setTimeout(() => { if (parent.frames.window.reactPageIsLoaded) { parent.frames.window.reactPageIsLoaded() } }, 200);\n  }\n  function clickOutsideEvents() {\n    document.addEventListener('click', (evt) => {\n      const dialogs = [...document.querySelectorAll('.dialog')];\n      let targetEl = evt.target;\n      do {\n        if(dialogs.includes(targetEl)) {\n          return;\n        }\n        targetEl = targetEl.parentNode;\n      } while (targetEl);\n      closeModal();\n    });\n  }\n  clickOutsideEvents();\n  window.showModal = showModal;\n  window.closeModal = closeModal;\n})();\n</script>"};
})();