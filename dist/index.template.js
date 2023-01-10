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
window.templateNunjucksBlocks = %7B%22services-template%22%3A%22%3Csection%20id%3D%5C%22%7B%7Bblock._id%7D%7D%5C%22%20class%3D%5C%22dark%3Abg-neutral-900%20section-padding-y%5C%22%3E%5Cn%20%20%3Cdiv%20class%3D%5C%22container-fluid%20container-padding-x%20mx-auto%5C%22%3E%5Cn%20%20%20%20%3Cdiv%20class%3D%5C%22text-center%5C%22%3E%5Cn%20%20%20%20%20%20%3Ch2%20class%3D%5C%22section-heading%20uppercase%20text-neutral-900%20dark%3Atext-neutral-100%5C%22%20data-field-string%3D%5C%22heading%5C%22%3E%7B%7Bblock.heading%7D%7D%3C/h2%3E%5Cn%20%20%20%20%20%20%3Ch3%20class%3D%5C%22section-subheading%20text-neutral-500%20dark%3Atext-neutral-200%5C%22%20data-field-string%3D%5C%22sub_heading%5C%22%3E%7B%7Bblock.sub_heading%7D%7D%3C/h3%3E%5Cn%20%20%20%20%3C/div%3E%5Cn%20%20%20%20%3Cdiv%20class%3D%5C%22grid%20grid-gap%20grid-cols-1%20md%3Agrid-cols-3%20mt-12%5C%22%20data-field-array%3D%5C%22items%5C%22%3E%5Cn%20%20%20%20%7B%25%20for%20item%20in%20block.items%20%25%7D%5Cn%20%20%20%20%3Cdiv%20class%3D%5C%22mb-2%20sm%3Amb-0%5C%22%3E%5Cn%20%20%20%20%20%20%3Cdiv%20class%3D%5C%22text-center%5C%22%20data-field-array-item%3E%5Cn%20%20%20%20%20%20%20%20%3Cspan%5Cn%20%20%20%20%20%20%20%20%20%20class%3D%5C%22fa-stack%20fa-4x%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20data-field-string-ui-widget-icon%3D%5C%22items%5B%7B%7Bloop.index0%7D%7D%5D.icon%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20data-placement%3D%5C%22center%5C%22%5Cn%20%20%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3Ci%20class%3D%5C%22fa%20fa-circle%20fa-stack-2x%20text-primary%5C%22%3E%3C/i%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3Ci%20class%3D%5C%22fa%20fa-%7B%7B%20item.icon%20%7D%7D%20fa-stack-1x%20fa-inverse%5C%22%3E%3C/i%3E%5Cn%20%20%20%20%20%20%20%20%3C/span%3E%5Cn%20%20%20%20%20%20%20%20%3Ch4%5Cn%20%20%20%20%20%20%20%20%20%20class%3D%5C%22text-2xl%20font-bold%20mt-2%20text-neutral-900%20dark%3Atext-neutral-100%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20data-field-string%3D%5C%22items%5B%7B%7Bloop.index0%7D%7D%5D.heading%5C%22%5Cn%20%20%20%20%20%20%20%20%3E%7B%7B%20item.heading%20%7D%7D%3C/h4%3E%5Cn%20%20%20%20%20%20%20%20%3Cp%5Cn%20%20%20%20%20%20%20%20%20%20class%3D%5C%22mt-4%20leading-7%20text-neutral-500%20dark%3Atext-neutral-200%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20data-field-string%3D%5C%22items%5B%7B%7Bloop.index0%7D%7D%5D.text%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20data-toolbar-buttons%3D%5C%22%5B%27bold%27%2C%20%27italic%27%2C%20%27underline%27%2C%20%27anchor%27%5D%5C%22%5Cn%20%20%20%20%20%20%20%20%3E%7B%7B%20item.text%20%7D%7D%3C/p%3E%5Cn%20%20%20%20%20%20%3C/div%3E%5Cn%20%20%20%20%3C/div%3E%5Cn%20%20%20%20%7B%25%20endfor%20%25%7D%5Cn%20%20%20%20%3C/div%3E%5Cn%20%20%3C/div%3E%5Cn%3C/section%3E%22%2C%22team-template%22%3A%22%3Csection%20id%3D%5C%22%7B%7Bblock._id%7D%7D%5C%22%20class%3D%5C%22section-padding-y%20bg-neutral-100%20dark%3Abg-neutral-800%5C%22%3E%5Cn%20%20%3Cdiv%20class%3D%5C%22container-fluid%20container-padding-x%20mx-auto%5C%22%3E%5Cn%20%20%20%20%3Cdiv%20class%3D%5C%22text-center%5C%22%3E%5Cn%20%20%20%20%20%20%3Ch2%20class%3D%5C%22section-heading%20uppercase%20text-neutral-900%20dark%3Atext-neutral-100%5C%22%20data-field-string%3D%5C%22heading%5C%22%3EDet%20h%E4r%20%E4r%20version%3A%20v0.0.1.%3C/h2%3E%5Cn%20%20%20%20%20%20%3Ch3%20class%3D%5C%22section-subheading%20text-neutral-500%20dark%3Atext-neutral-200%5C%22%20data-field-string%3D%5C%22sub_heading%5C%22%3E%7B%7Bblock.sub_heading%7D%7D%3C/h3%3E%5Cn%20%20%20%20%3C/div%3E%5Cn%20%20%20%20%3Cdiv%20class%3D%5C%22grid%20grid-gap%20grid-cols-1%20md%3Agrid-cols-3%20mt-2%5C%22%20data-field-array%3D%5C%22team%5C%22%3E%5Cn%20%20%20%20%7B%25%20for%20item%20in%20block.team%20%25%7D%5Cn%20%20%20%20%20%20%3Cdiv%20class%3D%5C%22mb-2%20mt-10%20sm%3Amb-0%5C%22%3E%5Cn%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%5C%22text-center%5C%22%20data-field-array-item%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3Cimg%20class%3D%5C%22border-8%20border-neutral-200%20w-48%20h-48%20lg%3Aw-56%20lg%3Ah-56%20mx-auto%20rounded-full%5C%22%20src%3D%5C%22%7B%7B%20item.image%20%7D%7D%5C%22%20data-field-string-file%3D%5C%22team%5B%7B%7Bloop.index0%7D%7D%5D.image%5C%22%20no-data-placement%3D%5C%22top%5C%22%20no-data-inset%3D%5C%22true%5C%22%20alt%3D%5C%22%7B%7B%20item.heading%20%7D%7D%5C%22%20/%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3Ch4%20class%3D%5C%22text-2xl%20font-bold%20mt-4%20text-neutral-900%20dark%3Atext-neutral-100%5C%22%20data-field-string%3D%5C%22team%5B%7B%7Bloop.index0%7D%7D%5D.heading%5C%22%3E%7B%7B%20item.heading%20%7D%7D%3C/h4%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3Cp%20class%3D%5C%22text-neutral-500%20dark%3Atext-neutral-200%5C%22%20data-field-string%3D%5C%22team%5B%7B%7Bloop.index0%7D%7D%5D.text%5C%22%20data-toolbar-buttons%3D%5C%22%5B%27bold%27%2C%20%27italic%27%2C%20%27underline%27%2C%20%27anchor%27%5D%5C%22%3E%7B%7B%20item.text%20%7D%7D%3C/p%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3Cul%20class%3D%5C%22flex%20gap-4%20justify-center%20mt-4%5C%22%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7B%25%20set%20parent_index_0%20%3D%20loop.index0%20%25%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7B%25%20for%20link_item%20in%20item.social_links%20%25%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cli%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ca%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20class%3D%5C%22btn%20btn-filled-dark%20btn-icon%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20href%3D%5C%22%7B%7B%20link_item.link%20%7D%7D%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20data-href%3D%5C%22%7B%7B%20link_item.link%20%7D%7D%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20data-field-string-ui-widget-icon%3D%5C%22team%5B%7B%7Bparent_index_0%7D%7D%5D.social_links%5B%7B%7Bloop.index0%7D%7D%5D.icon%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20data-field-string-format-uri%3D%5C%22team%5B%7B%7Bparent_index_0%7D%7D%5D.social_links%5B%7B%7Bloop.index0%7D%7D%5D.link%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20data-placement%3D%5C%22bottom%5C%22%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%5C%22fa%20fa-%7B%7B%20link_item.icon%20%7D%7D%5C%22%3E%3C/span%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/a%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/li%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7B%25%20endfor%20%25%7D%5Cn%20%20%20%20%20%20%20%20%20%20%3C/ul%3E%5Cn%20%20%20%20%20%20%20%20%3C/div%3E%5Cn%20%20%20%20%20%20%3C/div%3E%5Cn%20%20%20%20%7B%25%20endfor%20%25%7D%5Cn%20%20%20%20%3C/div%3E%5Cn%20%20%20%20%3Cdiv%20class%3D%5C%22mx-auto%20text-center%20max-w-2xl%20mt-12%5C%22%3E%5Cn%20%20%20%20%20%20%3Cp%20class%3D%5C%22large%20text-muted%20text-neutral-700%20dark%3Atext-neutral-200%5C%22%20data-field-text%3D%5C%22text%5C%22%20data-toolbar-buttons%3D%5C%22%5B%27bold%27%2C%20%27italic%27%2C%20%27underline%27%2C%20%27anchor%27%5D%5C%22%3E%7B%7B%20block.text%20%7D%7D%3C/p%3E%5Cn%20%20%20%20%3C/div%3E%5Cn%20%20%3C/div%3E%5Cn%3C/section%3E%22%2C%22portfolio-template%22%3A%22%3Csection%20id%3D%5C%22%7B%7Bblock._id%7D%7D%5C%22%20class%3D%5C%22section-padding-y%20g-neutral-100%20dark%3Abg-neutral-800%5C%22%3E%5Cn%20%20%3Cdiv%20class%3D%5C%22container-fluid%20container-padding-x%20mx-auto%5C%22%3E%5Cn%20%20%20%20%3Cdiv%20class%3D%5C%22text-center%5C%22%3E%5Cn%20%20%20%20%20%20%3Ch2%20class%3D%5C%22section-heading%20uppercase%20text-neutral-900%20dark%3Atext-neutral-100%5C%22%20data-field-string%3D%5C%22heading%5C%22%3E%7B%7Bblock.heading%7D%7D%3C/h2%3E%5Cn%20%20%20%20%20%20%3Ch3%20class%3D%5C%22section-subheading%20text-neutral-500%20dark%3Atext-neutral-200%5C%22%20data-field-string%3D%5C%22sub_heading%5C%22%3E%7B%7Bblock.sub_heading%7D%7D%3C/h3%3E%5Cn%20%20%20%20%3C/div%3E%5Cn%20%20%20%20%3Cdiv%20class%3D%5C%22grid%20grid-gap%20grid-cols-1%20md%3Agrid-cols-3%20mt-8%5C%22%20data-field-array%3D%5C%22items%5C%22%3E%5Cn%20%20%20%20%7B%25%20for%20item%20in%20block.items%20%25%7D%5Cn%20%20%20%20%20%20%3Cdiv%20class%3D%5C%22mb-2%20mt-4%20sm%3Amb-0%5C%22%20x-data%3D%5C%22%7B%20showModal%3A%20false%20%7D%5C%22%20x-on%3Akeydown.window.escape%3D%5C%22showModal%20%3D%20false%5C%22%20data-field-array-item%3E%5Cn%20%20%20%20%20%20%20%20%3C%21--%20Item%20--%3E%5Cn%20%20%20%20%20%20%20%20%3Ca%20href%3D%5C%22%23%7B%7Bblock._id%7D%7D%5C%22%20x-on%3Aclick%3D%5C%22showModal%20%3D%20%21showModal%5C%22%20class%3D%5C%22portfolio-link%20relative%20group%5C%22%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%5C%22absolute%20inset-0%20flex%20justify-center%20items-center%20transition%20uration-300%20bg-primary/0%20text-neutral-100/0%20group-hover%3Abg-primary/75%20hover%3Atext-neutral-100/100%5C%22%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%5C%22portfolio-hover-content%5C%22%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ci%20class%3D%5C%22fa%20fa-plus%20fa-3x%5C%22%3E%3C/i%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3C/div%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3Cimg%20src%3D%5C%22%7B%7B%20item.image%20%7D%7D%5C%22%20class%3D%5C%22img-responsive%5C%22%20alt%3D%5C%22%5C%22%20/%3E%5Cn%20%20%20%20%20%20%20%20%3C/a%3E%5Cn%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%5C%22portfolio-caption%20text-center%5C%22%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3Ch4%5Cn%20%20%20%20%20%20%20%20%20%20%20%20class%3D%5C%22mt-4%20text-lg%20lg%3Atext-xl%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%20%20data-field-string%3D%5C%22items%5B%7B%7Bloop.index0%7D%7D%5D.client%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%3E%7B%7B%20item.client%20%7D%7D%3C/h4%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3Cp%5Cn%20%20%20%20%20%20%20%20%20%20%20%20data-field-string%3D%5C%22items%5B%7B%7Bloop.index0%7D%7D%5D.category%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%20%20data-toolbar-buttons%3D%5C%22%5B%27bold%27%5D%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%3E%7B%7B%20item.category%20%7D%7D%3C/p%3E%5Cn%20%20%20%20%20%20%20%20%3C/div%3E%5Cn%20%20%20%20%20%20%20%20%3C%21--%20Modal%20--%3E%5Cn%20%20%20%20%20%20%20%20%3Cdiv%20x-show%3D%5C%22showModal%5C%22%20x-transition.opacity%20class%3D%5C%22fixed%20inset-0%20bg-slate-900/75%20z-50%5C%22%20style%3D%5C%22display%3A%20none%3B%5C%22%3E%3C/div%3E%5Cn%20%20%20%20%20%20%20%20%3Cdiv%20x-show%3D%5C%22showModal%5C%22%20x-transition%20class%3D%5C%22fixed%20inset-0%20z-50%20flex%20items-center%20justify-center%20max-w-4xl%20mx-auto%5C%22%20style%3D%5C%22display%3A%20none%3B%5C%22%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3Cdiv%20x-on%3Aclick.away%3D%5C%22showModal%20%3D%20false%5C%22%20class%3D%5C%22relative%20mx-auto%20bg-white%20rounded-lg%20h-96%5C%22%20style%3D%5C%22width%3A%20calc%28100vw%20-%20100px%29%3Bheight%3A%20calc%28100vh%20-%20100px%29%5C%22%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%5C%22p-12%20h-full%20container-padding-x%5C%22%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%5C%22text-center%20container-padding-x%5C%22%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ch2%20class%3D%5C%22text-4xl%20uppercase%20text-neutral-900%20dark%3Atext-neutral-100%5C%22%20data-field-string%3D%5C%22heading%5C%22%3E%7B%7Bitem.title%7D%7D%3C/h2%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ch3%20class%3D%5C%22text-base%20font-medium%20italic%20mt-3%20text-neutral-500%20dark%3Atext-neutral-200%5C%22%20data-field-string%3D%5C%22sub_heading%5C%22%3E%7B%7Bitem.summary%7D%7D%3C/h3%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%5C%22mt-6%20flex%20justify-center%5C%22%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cimg%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20class%3D%5C%22text-center%20img-responsive%20mg-centered%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20data-field-string-file%3D%5C%22items%5B%7B%7Bloop.index0%7D%7D%5D.image%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20src%3D%5C%22%7B%7B%20item.image%20%7D%7D%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20alt%3D%5C%22%5C%22%20/%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%5C%22text-center%20mt-6%20mx-auto%20leading-6%20max-w-2xl%5C%22%20data-field-text%3D%5C%22items%5B%7B%7Bloop.index0%7D%7D%5D.body%5C%22%3E%7B%7B%20item.body%20%7D%7D%3C/div%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cul%20class%3D%5C%22text-center%20mt-6%5C%22%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cli%3E%3Cstrong%3EDate%3C/strong%3E%3A%20%7B%7B%20item.date%20%7D%7D%3C/li%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cli%3E%3Cstrong%3EClient%3C/strong%3E%3A%20%7B%7B%20item.client%20%7D%7D%3C/li%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cli%3E%3Cstrong%3ECategory%3C/strong%3E%3A%20%7B%7B%20item.category%20%7D%7D%3C/li%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/ul%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%5C%22text-center%20absolute%20bottom-10%20left-0%20w-full%5C%22%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cbutton%20x-on%3Aclick%3D%5C%22showModal%20%3D%20%21showModal%5C%22%20type%3D%5C%22button%5C%22%20class%3D%5C%22btn%20btn-filled%20btn-extended-start%5C%22%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ci%20class%3D%5C%22fa%20fa-times%5C%22%3E%3C/i%3E%20Close%20Project%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/button%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3C/div%3E%5Cn%20%20%20%20%20%20%20%20%3C/div%3E%5Cn%20%20%20%20%20%20%3C/div%3E%20%20%5Cn%20%20%20%20%7B%25%20endfor%20%25%7D%5Cn%20%20%20%20%3C/div%3E%5Cn%20%20%20%20%3Cdiv%20class%3D%5C%22col-lg-8%20mx-auto%20text-center%20max-w-2xl%20mt-12%5C%22%3E%5Cn%20%20%20%20%20%20%3Cp%20class%3D%5C%22large%20text-muted%20text-neutral-700%20dark%3Atext-neutral-200%5C%22%20data-field-text%3D%5C%22text%5C%22%20data-toolbar-buttons%3D%5C%22%5B%27bold%27%2C%20%27italic%27%2C%20%27underline%27%2C%20%27anchor%27%5D%5C%22%3E%7B%7B%20block.text%20%7D%7D%3C/p%3E%5Cn%20%20%20%20%3C/div%3E%5Cn%20%20%3C/div%3E%5Cn%3C/section%3E%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%3C%21--%20%3Cdiv%20x-data%3D%5C%22%7B%20showModal%3A%20false%20%7D%5C%22%20x-on%3Akeydown.window.escape%3D%5C%22showModal%20%3D%20false%5C%22%3E%5Cn%20%20%3Cbutton%20x-on%3Aclick%3D%5C%22showModal%20%3D%20%21showModal%5C%22%20class%3D%5C%22btn%20btn-filled%20bg-blue-700%20hover%3Abg-blue-800%5C%22%3E%5Cn%20%20%20%20Toggle%20Modal%5Cn%20%20%3C/button%3E%5Cn%5Cn%20%20%3Cdiv%20x-show%3D%5C%22showModal%5C%22%20x-transition.opacity%20class%3D%5C%22fixed%20inset-0%20bg-slate-900/75%20z-50%5C%22%20style%3D%5C%22display%3A%20none%3B%5C%22%3E%3C/div%3E%5Cn%20%20%3Cdiv%20x-show%3D%5C%22showModal%5C%22%20x-transition%20class%3D%5C%22fixed%20inset-0%20z-50%20flex%20items-center%20justify-center%5C%22%20style%3D%5C%22display%3A%20none%3B%5C%22%3E%5Cn%20%20%20%20%3Cdiv%20x-on%3Aclick.away%3D%5C%22showModal%20%3D%20false%5C%22%20class%3D%5C%22mx-auto%20bg-white%20rounded-lg%20h-96%5C%22%20style%3D%5C%22width%3A%20calc%28100vw%20-%20200px%29%3Bheight%3A%20calc%28100vh%20-%20200px%29%5C%22%3E%3C/div%3E%5Cn%20%20%3C/div%3E%5Cn%3C/div%3E%20--%3E%22%7D;
})();