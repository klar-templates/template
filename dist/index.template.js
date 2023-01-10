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
window.templateNunjucksBlocks = %257B%2522services-template%2522%253A%2522%253Csection%2520id%253D%255C%2522%257B%257Bblock._id%257D%257D%255C%2522%2520class%253D%255C%2522dark%253Abg-neutral-900%2520section-padding-y%255C%2522%253E%255Cn%2520%2520%253Cdiv%2520class%253D%255C%2522container-fluid%2520container-padding-x%2520mx-auto%255C%2522%253E%255Cn%2520%2520%2520%2520%253Cdiv%2520class%253D%255C%2522text-center%255C%2522%253E%255Cn%2520%2520%2520%2520%2520%2520%253Ch2%2520class%253D%255C%2522section-heading%2520uppercase%2520text-neutral-900%2520dark%253Atext-neutral-100%255C%2522%2520data-field-string%253D%255C%2522heading%255C%2522%253E%257B%257Bblock.heading%257D%257D%253C%2Fh2%253E%255Cn%2520%2520%2520%2520%2520%2520%253Ch3%2520class%253D%255C%2522section-subheading%2520text-neutral-500%2520dark%253Atext-neutral-200%255C%2522%2520data-field-string%253D%255C%2522sub_heading%255C%2522%253E%257B%257Bblock.sub_heading%257D%257D%253C%2Fh3%253E%255Cn%2520%2520%2520%2520%253C%2Fdiv%253E%255Cn%2520%2520%2520%2520%253Cdiv%2520class%253D%255C%2522grid%2520grid-gap%2520grid-cols-1%2520md%253Agrid-cols-3%2520mt-12%255C%2522%2520data-field-array%253D%255C%2522items%255C%2522%253E%255Cn%2520%2520%2520%2520%257B%2525%2520for%2520item%2520in%2520block.items%2520%2525%257D%255Cn%2520%2520%2520%2520%253Cdiv%2520class%253D%255C%2522mb-2%2520sm%253Amb-0%255C%2522%253E%255Cn%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%255C%2522text-center%255C%2522%2520data-field-array-item%253E%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520class%253D%255C%2522fa-stack%2520fa-4x%255C%2522%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520data-field-string-ui-widget-icon%253D%255C%2522items%255B%257B%257Bloop.index0%257D%257D%255D.icon%255C%2522%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520data-placement%253D%255C%2522center%255C%2522%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%253E%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%255C%2522fa%2520fa-circle%2520fa-stack-2x%2520text-primary%255C%2522%253E%253C%2Fi%253E%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%255C%2522fa%2520fa-%257B%257B%2520item.icon%2520%257D%257D%2520fa-stack-1x%2520fa-inverse%255C%2522%253E%253C%2Fi%253E%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%253C%2Fspan%253E%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%253Ch4%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520class%253D%255C%2522text-2xl%2520font-bold%2520mt-2%2520text-neutral-900%2520dark%253Atext-neutral-100%255C%2522%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520data-field-string%253D%255C%2522items%255B%257B%257Bloop.index0%257D%257D%255D.heading%255C%2522%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%253E%257B%257B%2520item.heading%2520%257D%257D%253C%2Fh4%253E%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520class%253D%255C%2522mt-4%2520leading-7%2520text-neutral-500%2520dark%253Atext-neutral-200%255C%2522%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520data-field-string%253D%255C%2522items%255B%257B%257Bloop.index0%257D%257D%255D.text%255C%2522%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520data-toolbar-buttons%253D%255C%2522%255B%2527bold%2527%252C%2520%2527italic%2527%252C%2520%2527underline%2527%252C%2520%2527anchor%2527%255D%255C%2522%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%253E%257B%257B%2520item.text%2520%257D%257D%253C%2Fp%253E%255Cn%2520%2520%2520%2520%2520%2520%253C%2Fdiv%253E%255Cn%2520%2520%2520%2520%253C%2Fdiv%253E%255Cn%2520%2520%2520%2520%257B%2525%2520endfor%2520%2525%257D%255Cn%2520%2520%2520%2520%253C%2Fdiv%253E%255Cn%2520%2520%253C%2Fdiv%253E%255Cn%253C%2Fsection%253E%2522%252C%2522team-template%2522%253A%2522%253Csection%2520id%253D%255C%2522%257B%257Bblock._id%257D%257D%255C%2522%2520class%253D%255C%2522section-padding-y%2520bg-neutral-100%2520dark%253Abg-neutral-800%255C%2522%253E%255Cn%2520%2520%253Cdiv%2520class%253D%255C%2522container-fluid%2520container-padding-x%2520mx-auto%255C%2522%253E%255Cn%2520%2520%2520%2520%253Cdiv%2520class%253D%255C%2522text-center%255C%2522%253E%255Cn%2520%2520%2520%2520%2520%2520%253Ch2%2520class%253D%255C%2522section-heading%2520uppercase%2520text-neutral-900%2520dark%253Atext-neutral-100%255C%2522%2520data-field-string%253D%255C%2522heading%255C%2522%253EDet%2520h%25E4r%2520%25E4r%2520version%253A%2520v0.0.1.%253C%2Fh2%253E%255Cn%2520%2520%2520%2520%2520%2520%253Ch3%2520class%253D%255C%2522section-subheading%2520text-neutral-500%2520dark%253Atext-neutral-200%255C%2522%2520data-field-string%253D%255C%2522sub_heading%255C%2522%253E%257B%257Bblock.sub_heading%257D%257D%253C%2Fh3%253E%255Cn%2520%2520%2520%2520%253C%2Fdiv%253E%255Cn%2520%2520%2520%2520%253Cdiv%2520class%253D%255C%2522grid%2520grid-gap%2520grid-cols-1%2520md%253Agrid-cols-3%2520mt-2%255C%2522%2520data-field-array%253D%255C%2522team%255C%2522%253E%255Cn%2520%2520%2520%2520%257B%2525%2520for%2520item%2520in%2520block.team%2520%2525%257D%255Cn%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%255C%2522mb-2%2520mt-10%2520sm%253Amb-0%255C%2522%253E%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%255C%2522text-center%255C%2522%2520data-field-array-item%253E%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520class%253D%255C%2522border-8%2520border-neutral-200%2520w-48%2520h-48%2520lg%253Aw-56%2520lg%253Ah-56%2520mx-auto%2520rounded-full%255C%2522%2520src%253D%255C%2522%257B%257B%2520item.image%2520%257D%257D%255C%2522%2520data-field-string-file%253D%255C%2522team%255B%257B%257Bloop.index0%257D%257D%255D.image%255C%2522%2520no-data-placement%253D%255C%2522top%255C%2522%2520no-data-inset%253D%255C%2522true%255C%2522%2520alt%253D%255C%2522%257B%257B%2520item.heading%2520%257D%257D%255C%2522%2520%2F%253E%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch4%2520class%253D%255C%2522text-2xl%2520font-bold%2520mt-4%2520text-neutral-900%2520dark%253Atext-neutral-100%255C%2522%2520data-field-string%253D%255C%2522team%255B%257B%257Bloop.index0%257D%257D%255D.heading%255C%2522%253E%257B%257B%2520item.heading%2520%257D%257D%253C%2Fh4%253E%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%255C%2522text-neutral-500%2520dark%253Atext-neutral-200%255C%2522%2520data-field-string%253D%255C%2522team%255B%257B%257Bloop.index0%257D%257D%255D.text%255C%2522%2520data-toolbar-buttons%253D%255C%2522%255B%2527bold%2527%252C%2520%2527italic%2527%252C%2520%2527underline%2527%252C%2520%2527anchor%2527%255D%255C%2522%253E%257B%257B%2520item.text%2520%257D%257D%253C%2Fp%253E%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cul%2520class%253D%255C%2522flex%2520gap-4%2520justify-center%2520mt-4%255C%2522%253E%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257B%2525%2520set%2520parent_index_0%2520%253D%2520loop.index0%2520%2525%257D%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257B%2525%2520for%2520link_item%2520in%2520item.social_links%2520%2525%257D%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%253E%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520class%253D%255C%2522btn%2520btn-filled-dark%2520btn-icon%255C%2522%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520href%253D%255C%2522%257B%257B%2520link_item.link%2520%257D%257D%255C%2522%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520data-href%253D%255C%2522%257B%257B%2520link_item.link%2520%257D%257D%255C%2522%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520data-field-string-ui-widget-icon%253D%255C%2522team%255B%257B%257Bparent_index_0%257D%257D%255D.social_links%255B%257B%257Bloop.index0%257D%257D%255D.icon%255C%2522%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520data-field-string-format-uri%253D%255C%2522team%255B%257B%257Bparent_index_0%257D%257D%255D.social_links%255B%257B%257Bloop.index0%257D%257D%255D.link%255C%2522%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520data-placement%253D%255C%2522bottom%255C%2522%253E%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%255C%2522fa%2520fa-%257B%257B%2520link_item.icon%2520%257D%257D%255C%2522%253E%253C%2Fspan%253E%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%2Fa%253E%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%2Fli%253E%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257B%2525%2520endfor%2520%2525%257D%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%2Ful%253E%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%253C%2Fdiv%253E%255Cn%2520%2520%2520%2520%2520%2520%253C%2Fdiv%253E%255Cn%2520%2520%2520%2520%257B%2525%2520endfor%2520%2525%257D%255Cn%2520%2520%2520%2520%253C%2Fdiv%253E%255Cn%2520%2520%2520%2520%253Cdiv%2520class%253D%255C%2522mx-auto%2520text-center%2520max-w-2xl%2520mt-12%255C%2522%253E%255Cn%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%255C%2522large%2520text-muted%2520text-neutral-700%2520dark%253Atext-neutral-200%255C%2522%2520data-field-text%253D%255C%2522text%255C%2522%2520data-toolbar-buttons%253D%255C%2522%255B%2527bold%2527%252C%2520%2527italic%2527%252C%2520%2527underline%2527%252C%2520%2527anchor%2527%255D%255C%2522%253E%257B%257B%2520block.text%2520%257D%257D%253C%2Fp%253E%255Cn%2520%2520%2520%2520%253C%2Fdiv%253E%255Cn%2520%2520%253C%2Fdiv%253E%255Cn%253C%2Fsection%253E%2522%252C%2522portfolio-template%2522%253A%2522%253Csection%2520id%253D%255C%2522%257B%257Bblock._id%257D%257D%255C%2522%2520class%253D%255C%2522section-padding-y%2520g-neutral-100%2520dark%253Abg-neutral-800%255C%2522%253E%255Cn%2520%2520%253Cdiv%2520class%253D%255C%2522container-fluid%2520container-padding-x%2520mx-auto%255C%2522%253E%255Cn%2520%2520%2520%2520%253Cdiv%2520class%253D%255C%2522text-center%255C%2522%253E%255Cn%2520%2520%2520%2520%2520%2520%253Ch2%2520class%253D%255C%2522section-heading%2520uppercase%2520text-neutral-900%2520dark%253Atext-neutral-100%255C%2522%2520data-field-string%253D%255C%2522heading%255C%2522%253E%257B%257Bblock.heading%257D%257D%253C%2Fh2%253E%255Cn%2520%2520%2520%2520%2520%2520%253Ch3%2520class%253D%255C%2522section-subheading%2520text-neutral-500%2520dark%253Atext-neutral-200%255C%2522%2520data-field-string%253D%255C%2522sub_heading%255C%2522%253E%257B%257Bblock.sub_heading%257D%257D%253C%2Fh3%253E%255Cn%2520%2520%2520%2520%253C%2Fdiv%253E%255Cn%2520%2520%2520%2520%253Cdiv%2520class%253D%255C%2522grid%2520grid-gap%2520grid-cols-1%2520md%253Agrid-cols-3%2520mt-8%255C%2522%2520data-field-array%253D%255C%2522items%255C%2522%253E%255Cn%2520%2520%2520%2520%257B%2525%2520for%2520item%2520in%2520block.items%2520%2525%257D%255Cn%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%255C%2522mb-2%2520mt-4%2520sm%253Amb-0%255C%2522%2520x-data%253D%255C%2522%257B%2520showModal%253A%2520false%2520%257D%255C%2522%2520x-on%253Akeydown.window.escape%253D%255C%2522showModal%2520%253D%2520false%255C%2522%2520data-field-array-item%253E%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%253C%2521--%2520Item%2520--%253E%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%255C%2522%2523%257B%257Bblock._id%257D%257D%255C%2522%2520x-on%253Aclick%253D%255C%2522showModal%2520%253D%2520%2521showModal%255C%2522%2520class%253D%255C%2522portfolio-link%2520relative%2520group%255C%2522%253E%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%255C%2522absolute%2520inset-0%2520flex%2520justify-center%2520items-center%2520transition%2520uration-300%2520bg-primary%2F0%2520text-neutral-100%2F0%2520group-hover%253Abg-primary%2F75%2520hover%253Atext-neutral-100%2F100%255C%2522%253E%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%255C%2522portfolio-hover-content%255C%2522%253E%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%255C%2522fa%2520fa-plus%2520fa-3x%255C%2522%253E%253C%2Fi%253E%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%2Fdiv%253E%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%2Fdiv%253E%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%255C%2522%257B%257B%2520item.image%2520%257D%257D%255C%2522%2520class%253D%255C%2522img-responsive%255C%2522%2520alt%253D%255C%2522%255C%2522%2520%2F%253E%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%253C%2Fa%253E%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%255C%2522portfolio-caption%2520text-center%255C%2522%253E%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch4%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520class%253D%255C%2522mt-4%2520text-lg%2520lg%253Atext-xl%255C%2522%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520data-field-string%253D%255C%2522items%255B%257B%257Bloop.index0%257D%257D%255D.client%255C%2522%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253E%257B%257B%2520item.client%2520%257D%257D%253C%2Fh4%253E%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520data-field-string%253D%255C%2522items%255B%257B%257Bloop.index0%257D%257D%255D.category%255C%2522%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520data-toolbar-buttons%253D%255C%2522%255B%2527bold%2527%255D%255C%2522%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253E%257B%257B%2520item.category%2520%257D%257D%253C%2Fp%253E%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%253C%2Fdiv%253E%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%253C%2521--%2520Modal%2520--%253E%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520x-show%253D%255C%2522showModal%255C%2522%2520x-transition.opacity%2520class%253D%255C%2522fixed%2520inset-0%2520bg-slate-900%2F75%2520z-50%255C%2522%2520style%253D%255C%2522display%253A%2520none%253B%255C%2522%253E%253C%2Fdiv%253E%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520x-show%253D%255C%2522showModal%255C%2522%2520x-transition%2520class%253D%255C%2522fixed%2520inset-0%2520z-50%2520flex%2520items-center%2520justify-center%2520max-w-4xl%2520mx-auto%255C%2522%2520style%253D%255C%2522display%253A%2520none%253B%255C%2522%253E%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520x-on%253Aclick.away%253D%255C%2522showModal%2520%253D%2520false%255C%2522%2520class%253D%255C%2522relative%2520mx-auto%2520bg-white%2520rounded-lg%2520h-96%255C%2522%2520style%253D%255C%2522width%253A%2520calc%2528100vw%2520-%2520100px%2529%253Bheight%253A%2520calc%2528100vh%2520-%2520100px%2529%255C%2522%253E%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%255C%2522p-12%2520h-full%2520container-padding-x%255C%2522%253E%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%255C%2522text-center%2520container-padding-x%255C%2522%253E%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch2%2520class%253D%255C%2522text-4xl%2520uppercase%2520text-neutral-900%2520dark%253Atext-neutral-100%255C%2522%2520data-field-string%253D%255C%2522heading%255C%2522%253E%257B%257Bitem.title%257D%257D%253C%2Fh2%253E%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch3%2520class%253D%255C%2522text-base%2520font-medium%2520italic%2520mt-3%2520text-neutral-500%2520dark%253Atext-neutral-200%255C%2522%2520data-field-string%253D%255C%2522sub_heading%255C%2522%253E%257B%257Bitem.summary%257D%257D%253C%2Fh3%253E%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%2Fdiv%253E%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%255C%2522mt-6%2520flex%2520justify-center%255C%2522%253E%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520class%253D%255C%2522text-center%2520img-responsive%2520mg-centered%255C%2522%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520data-field-string-file%253D%255C%2522items%255B%257B%257Bloop.index0%257D%257D%255D.image%255C%2522%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%255C%2522%257B%257B%2520item.image%2520%257D%257D%255C%2522%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%255C%2522%255C%2522%2520%2F%253E%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%2Fdiv%253E%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%255C%2522text-center%2520mt-6%2520mx-auto%2520leading-6%2520max-w-2xl%255C%2522%2520data-field-text%253D%255C%2522items%255B%257B%257Bloop.index0%257D%257D%255D.body%255C%2522%253E%257B%257B%2520item.body%2520%257D%257D%253C%2Fdiv%253E%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cul%2520class%253D%255C%2522text-center%2520mt-6%255C%2522%253E%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%253E%253Cstrong%253EDate%253C%2Fstrong%253E%253A%2520%257B%257B%2520item.date%2520%257D%257D%253C%2Fli%253E%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%253E%253Cstrong%253EClient%253C%2Fstrong%253E%253A%2520%257B%257B%2520item.client%2520%257D%257D%253C%2Fli%253E%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%253E%253Cstrong%253ECategory%253C%2Fstrong%253E%253A%2520%257B%257B%2520item.category%2520%257D%257D%253C%2Fli%253E%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%2Ful%253E%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%255C%2522text-center%2520absolute%2520bottom-10%2520left-0%2520w-full%255C%2522%253E%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520x-on%253Aclick%253D%255C%2522showModal%2520%253D%2520%2521showModal%255C%2522%2520type%253D%255C%2522button%255C%2522%2520class%253D%255C%2522btn%2520btn-filled%2520btn-extended-start%255C%2522%253E%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%255C%2522fa%2520fa-times%255C%2522%253E%253C%2Fi%253E%2520Close%2520Project%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%2Fbutton%253E%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%2Fdiv%253E%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%2Fdiv%253E%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%2Fdiv%253E%255Cn%2520%2520%2520%2520%2520%2520%2520%2520%253C%2Fdiv%253E%255Cn%2520%2520%2520%2520%2520%2520%253C%2Fdiv%253E%2520%2520%255Cn%2520%2520%2520%2520%257B%2525%2520endfor%2520%2525%257D%255Cn%2520%2520%2520%2520%253C%2Fdiv%253E%255Cn%2520%2520%2520%2520%253Cdiv%2520class%253D%255C%2522col-lg-8%2520mx-auto%2520text-center%2520max-w-2xl%2520mt-12%255C%2522%253E%255Cn%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%255C%2522large%2520text-muted%2520text-neutral-700%2520dark%253Atext-neutral-200%255C%2522%2520data-field-text%253D%255C%2522text%255C%2522%2520data-toolbar-buttons%253D%255C%2522%255B%2527bold%2527%252C%2520%2527italic%2527%252C%2520%2527underline%2527%252C%2520%2527anchor%2527%255D%255C%2522%253E%257B%257B%2520block.text%2520%257D%257D%253C%2Fp%253E%255Cn%2520%2520%2520%2520%253C%2Fdiv%253E%255Cn%2520%2520%253C%2Fdiv%253E%255Cn%253C%2Fsection%253E%255Cn%255Cn%255Cn%255Cn%255Cn%255Cn%255Cn%255Cn%255Cn%255Cn%255Cn%255Cn%255Cn%255Cn%255Cn%255Cn%255Cn%255Cn%255Cn%255Cn%255Cn%255Cn%255Cn%255Cn%255Cn%255Cn%253C%2521--%2520%253Cdiv%2520x-data%253D%255C%2522%257B%2520showModal%253A%2520false%2520%257D%255C%2522%2520x-on%253Akeydown.window.escape%253D%255C%2522showModal%2520%253D%2520false%255C%2522%253E%255Cn%2520%2520%253Cbutton%2520x-on%253Aclick%253D%255C%2522showModal%2520%253D%2520%2521showModal%255C%2522%2520class%253D%255C%2522btn%2520btn-filled%2520bg-blue-700%2520hover%253Abg-blue-800%255C%2522%253E%255Cn%2520%2520%2520%2520Toggle%2520Modal%255Cn%2520%2520%253C%2Fbutton%253E%255Cn%255Cn%2520%2520%253Cdiv%2520x-show%253D%255C%2522showModal%255C%2522%2520x-transition.opacity%2520class%253D%255C%2522fixed%2520inset-0%2520bg-slate-900%2F75%2520z-50%255C%2522%2520style%253D%255C%2522display%253A%2520none%253B%255C%2522%253E%253C%2Fdiv%253E%255Cn%2520%2520%253Cdiv%2520x-show%253D%255C%2522showModal%255C%2522%2520x-transition%2520class%253D%255C%2522fixed%2520inset-0%2520z-50%2520flex%2520items-center%2520justify-center%255C%2522%2520style%253D%255C%2522display%253A%2520none%253B%255C%2522%253E%255Cn%2520%2520%2520%2520%253Cdiv%2520x-on%253Aclick.away%253D%255C%2522showModal%2520%253D%2520false%255C%2522%2520class%253D%255C%2522mx-auto%2520bg-white%2520rounded-lg%2520h-96%255C%2522%2520style%253D%255C%2522width%253A%2520calc%2528100vw%2520-%2520200px%2529%253Bheight%253A%2520calc%2528100vh%2520-%2520200px%2529%255C%2522%253E%253C%2Fdiv%253E%255Cn%2520%2520%253C%2Fdiv%253E%255Cn%253C%2Fdiv%253E%2520--%253E%2522%257D;
})();