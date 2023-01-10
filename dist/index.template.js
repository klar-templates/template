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
  }, title, "\xE5\xE4\xF6"), /*#__PURE__*/React.createElement("p", {
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
window.templateNunjucksBlocks = [object Object];
})();