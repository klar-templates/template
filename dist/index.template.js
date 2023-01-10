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
window.templateNunjucksBlocks = eyJzZXJ2aWNlcy10ZW1wbGF0ZSI6IjxzZWN0aW9uIGlkPVwie3tibG9jay5faWR9fVwiIGNsYXNzPVwiZGFyazpiZy1uZXV0cmFsLTkwMCBzZWN0aW9uLXBhZGRpbmcteVwiPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkIGNvbnRhaW5lci1wYWRkaW5nLXggbXgtYXV0b1wiPlxuICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgPGgyIGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIHVwcGVyY2FzZSB0ZXh0LW5ldXRyYWwtOTAwIGRhcms6dGV4dC1uZXV0cmFsLTEwMFwiIGRhdGEtZmllbGQtc3RyaW5nPVwiaGVhZGluZ1wiPnt7YmxvY2suaGVhZGluZ319PC9oMj5cbiAgICAgIDxoMyBjbGFzcz1cInNlY3Rpb24tc3ViaGVhZGluZyB0ZXh0LW5ldXRyYWwtNTAwIGRhcms6dGV4dC1uZXV0cmFsLTIwMFwiIGRhdGEtZmllbGQtc3RyaW5nPVwic3ViX2hlYWRpbmdcIj57e2Jsb2NrLnN1Yl9oZWFkaW5nfX08L2gzPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJncmlkIGdyaWQtZ2FwIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0zIG10LTEyXCIgZGF0YS1maWVsZC1hcnJheT1cIml0ZW1zXCI+XG4gICAgeyUgZm9yIGl0ZW0gaW4gYmxvY2suaXRlbXMgJX1cbiAgICA8ZGl2IGNsYXNzPVwibWItMiBzbTptYi0wXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXJcIiBkYXRhLWZpZWxkLWFycmF5LWl0ZW0+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgY2xhc3M9XCJmYS1zdGFjayBmYS00eFwiXG4gICAgICAgICAgZGF0YS1maWVsZC1zdHJpbmctdWktd2lkZ2V0LWljb249XCJpdGVtc1t7e2xvb3AuaW5kZXgwfX1dLmljb25cIlxuICAgICAgICAgIGRhdGEtcGxhY2VtZW50PVwiY2VudGVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2lyY2xlIGZhLXN0YWNrLTJ4IHRleHQtcHJpbWFyeVwiPjwvaT5cbiAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXt7IGl0ZW0uaWNvbiB9fSBmYS1zdGFjay0xeCBmYS1pbnZlcnNlXCI+PC9pPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxoNFxuICAgICAgICAgIGNsYXNzPVwidGV4dC0yeGwgZm9udC1ib2xkIG10LTIgdGV4dC1uZXV0cmFsLTkwMCBkYXJrOnRleHQtbmV1dHJhbC0xMDBcIlxuICAgICAgICAgIGRhdGEtZmllbGQtc3RyaW5nPVwiaXRlbXNbe3tsb29wLmluZGV4MH19XS5oZWFkaW5nXCJcbiAgICAgICAgPnt7IGl0ZW0uaGVhZGluZyB9fTwvaDQ+XG4gICAgICAgIDxwXG4gICAgICAgICAgY2xhc3M9XCJtdC00IGxlYWRpbmctNyB0ZXh0LW5ldXRyYWwtNTAwIGRhcms6dGV4dC1uZXV0cmFsLTIwMFwiXG4gICAgICAgICAgZGF0YS1maWVsZC1zdHJpbmc9XCJpdGVtc1t7e2xvb3AuaW5kZXgwfX1dLnRleHRcIlxuICAgICAgICAgIGRhdGEtdG9vbGJhci1idXR0b25zPVwiWydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnLCAnYW5jaG9yJ11cIlxuICAgICAgICA+e3sgaXRlbS50ZXh0IH19PC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgeyUgZW5kZm9yICV9XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9zZWN0aW9uPiIsInRlYW0tdGVtcGxhdGUiOiI8c2VjdGlvbiBpZD1cInt7YmxvY2suX2lkfX1cIiBjbGFzcz1cInNlY3Rpb24tcGFkZGluZy15IGJnLW5ldXRyYWwtMTAwIGRhcms6YmctbmV1dHJhbC04MDBcIj5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZCBjb250YWluZXItcGFkZGluZy14IG14LWF1dG9cIj5cbiAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgIDxoMiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyB1cHBlcmNhc2UgdGV4dC1uZXV0cmFsLTkwMCBkYXJrOnRleHQtbmV1dHJhbC0xMDBcIiBkYXRhLWZpZWxkLXN0cmluZz1cImhlYWRpbmdcIj5EZXQgaORyIORyIHZlcnNpb246IHYwLjAuMS48L2gyPlxuICAgICAgPGgzIGNsYXNzPVwic2VjdGlvbi1zdWJoZWFkaW5nIHRleHQtbmV1dHJhbC01MDAgZGFyazp0ZXh0LW5ldXRyYWwtMjAwXCIgZGF0YS1maWVsZC1zdHJpbmc9XCJzdWJfaGVhZGluZ1wiPnt7YmxvY2suc3ViX2hlYWRpbmd9fTwvaDM+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImdyaWQgZ3JpZC1nYXAgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTMgbXQtMlwiIGRhdGEtZmllbGQtYXJyYXk9XCJ0ZWFtXCI+XG4gICAgeyUgZm9yIGl0ZW0gaW4gYmxvY2sudGVhbSAlfVxuICAgICAgPGRpdiBjbGFzcz1cIm1iLTIgbXQtMTAgc206bWItMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXJcIiBkYXRhLWZpZWxkLWFycmF5LWl0ZW0+XG4gICAgICAgICAgPGltZyBjbGFzcz1cImJvcmRlci04IGJvcmRlci1uZXV0cmFsLTIwMCB3LTQ4IGgtNDggbGc6dy01NiBsZzpoLTU2IG14LWF1dG8gcm91bmRlZC1mdWxsXCIgc3JjPVwie3sgaXRlbS5pbWFnZSB9fVwiIGRhdGEtZmllbGQtc3RyaW5nLWZpbGU9XCJ0ZWFtW3t7bG9vcC5pbmRleDB9fV0uaW1hZ2VcIiBuby1kYXRhLXBsYWNlbWVudD1cInRvcFwiIG5vLWRhdGEtaW5zZXQ9XCJ0cnVlXCIgYWx0PVwie3sgaXRlbS5oZWFkaW5nIH19XCIgLz5cbiAgICAgICAgICA8aDQgY2xhc3M9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbXQtNCB0ZXh0LW5ldXRyYWwtOTAwIGRhcms6dGV4dC1uZXV0cmFsLTEwMFwiIGRhdGEtZmllbGQtc3RyaW5nPVwidGVhbVt7e2xvb3AuaW5kZXgwfX1dLmhlYWRpbmdcIj57eyBpdGVtLmhlYWRpbmcgfX08L2g0PlxuICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1uZXV0cmFsLTUwMCBkYXJrOnRleHQtbmV1dHJhbC0yMDBcIiBkYXRhLWZpZWxkLXN0cmluZz1cInRlYW1be3tsb29wLmluZGV4MH19XS50ZXh0XCIgZGF0YS10b29sYmFyLWJ1dHRvbnM9XCJbJ2JvbGQnLCAnaXRhbGljJywgJ3VuZGVybGluZScsICdhbmNob3InXVwiPnt7IGl0ZW0udGV4dCB9fTwvcD5cbiAgICAgICAgICA8dWwgY2xhc3M9XCJmbGV4IGdhcC00IGp1c3RpZnktY2VudGVyIG10LTRcIj5cbiAgICAgICAgICAgIHslIHNldCBwYXJlbnRfaW5kZXhfMCA9IGxvb3AuaW5kZXgwICV9XG4gICAgICAgICAgICB7JSBmb3IgbGlua19pdGVtIGluIGl0ZW0uc29jaWFsX2xpbmtzICV9XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWZpbGxlZC1kYXJrIGJ0bi1pY29uXCJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJ7eyBsaW5rX2l0ZW0ubGluayB9fVwiXG4gICAgICAgICAgICAgICAgICBkYXRhLWhyZWY9XCJ7eyBsaW5rX2l0ZW0ubGluayB9fVwiXG4gICAgICAgICAgICAgICAgICBkYXRhLWZpZWxkLXN0cmluZy11aS13aWRnZXQtaWNvbj1cInRlYW1be3twYXJlbnRfaW5kZXhfMH19XS5zb2NpYWxfbGlua3Nbe3tsb29wLmluZGV4MH19XS5pY29uXCJcbiAgICAgICAgICAgICAgICAgIGRhdGEtZmllbGQtc3RyaW5nLWZvcm1hdC11cmk9XCJ0ZWFtW3t7cGFyZW50X2luZGV4XzB9fV0uc29jaWFsX2xpbmtzW3t7bG9vcC5pbmRleDB9fV0ubGlua1wiXG4gICAgICAgICAgICAgICAgICBkYXRhLXBsYWNlbWVudD1cImJvdHRvbVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXt7IGxpbmtfaXRlbS5pY29uIH19XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgeyUgZW5kZm9yICV9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICB7JSBlbmRmb3IgJX1cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibXgtYXV0byB0ZXh0LWNlbnRlciBtYXgtdy0yeGwgbXQtMTJcIj5cbiAgICAgIDxwIGNsYXNzPVwibGFyZ2UgdGV4dC1tdXRlZCB0ZXh0LW5ldXRyYWwtNzAwIGRhcms6dGV4dC1uZXV0cmFsLTIwMFwiIGRhdGEtZmllbGQtdGV4dD1cInRleHRcIiBkYXRhLXRvb2xiYXItYnV0dG9ucz1cIlsnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJywgJ2FuY2hvciddXCI+e3sgYmxvY2sudGV4dCB9fTwvcD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3NlY3Rpb24+IiwicG9ydGZvbGlvLXRlbXBsYXRlIjoiPHNlY3Rpb24gaWQ9XCJ7e2Jsb2NrLl9pZH19XCIgY2xhc3M9XCJzZWN0aW9uLXBhZGRpbmcteSBnLW5ldXRyYWwtMTAwIGRhcms6YmctbmV1dHJhbC04MDBcIj5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZCBjb250YWluZXItcGFkZGluZy14IG14LWF1dG9cIj5cbiAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgIDxoMiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyB1cHBlcmNhc2UgdGV4dC1uZXV0cmFsLTkwMCBkYXJrOnRleHQtbmV1dHJhbC0xMDBcIiBkYXRhLWZpZWxkLXN0cmluZz1cImhlYWRpbmdcIj57e2Jsb2NrLmhlYWRpbmd9fTwvaDI+XG4gICAgICA8aDMgY2xhc3M9XCJzZWN0aW9uLXN1YmhlYWRpbmcgdGV4dC1uZXV0cmFsLTUwMCBkYXJrOnRleHQtbmV1dHJhbC0yMDBcIiBkYXRhLWZpZWxkLXN0cmluZz1cInN1Yl9oZWFkaW5nXCI+e3tibG9jay5zdWJfaGVhZGluZ319PC9oMz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZ3JpZCBncmlkLWdhcCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMyBtdC04XCIgZGF0YS1maWVsZC1hcnJheT1cIml0ZW1zXCI+XG4gICAgeyUgZm9yIGl0ZW0gaW4gYmxvY2suaXRlbXMgJX1cbiAgICAgIDxkaXYgY2xhc3M9XCJtYi0yIG10LTQgc206bWItMFwiIHgtZGF0YT1cInsgc2hvd01vZGFsOiBmYWxzZSB9XCIgeC1vbjprZXlkb3duLndpbmRvdy5lc2NhcGU9XCJzaG93TW9kYWwgPSBmYWxzZVwiIGRhdGEtZmllbGQtYXJyYXktaXRlbT5cbiAgICAgICAgPCEtLSBJdGVtIC0tPlxuICAgICAgICA8YSBocmVmPVwiI3t7YmxvY2suX2lkfX1cIiB4LW9uOmNsaWNrPVwic2hvd01vZGFsID0gIXNob3dNb2RhbFwiIGNsYXNzPVwicG9ydGZvbGlvLWxpbmsgcmVsYXRpdmUgZ3JvdXBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWJzb2x1dGUgaW5zZXQtMCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0cmFuc2l0aW9uIHVyYXRpb24tMzAwIGJnLXByaW1hcnkvMCB0ZXh0LW5ldXRyYWwtMTAwLzAgZ3JvdXAtaG92ZXI6YmctcHJpbWFyeS83NSBob3Zlcjp0ZXh0LW5ldXRyYWwtMTAwLzEwMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcnRmb2xpby1ob3Zlci1jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtcGx1cyBmYS0zeFwiPjwvaT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxpbWcgc3JjPVwie3sgaXRlbS5pbWFnZSB9fVwiIGNsYXNzPVwiaW1nLXJlc3BvbnNpdmVcIiBhbHQ9XCJcIiAvPlxuICAgICAgICA8L2E+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwb3J0Zm9saW8tY2FwdGlvbiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxoNFxuICAgICAgICAgICAgY2xhc3M9XCJtdC00IHRleHQtbGcgbGc6dGV4dC14bFwiXG4gICAgICAgICAgICBkYXRhLWZpZWxkLXN0cmluZz1cIml0ZW1zW3t7bG9vcC5pbmRleDB9fV0uY2xpZW50XCJcbiAgICAgICAgICA+e3sgaXRlbS5jbGllbnQgfX08L2g0PlxuICAgICAgICAgIDxwXG4gICAgICAgICAgICBkYXRhLWZpZWxkLXN0cmluZz1cIml0ZW1zW3t7bG9vcC5pbmRleDB9fV0uY2F0ZWdvcnlcIlxuICAgICAgICAgICAgZGF0YS10b29sYmFyLWJ1dHRvbnM9XCJbJ2JvbGQnXVwiXG4gICAgICAgICAgPnt7IGl0ZW0uY2F0ZWdvcnkgfX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8IS0tIE1vZGFsIC0tPlxuICAgICAgICA8ZGl2IHgtc2hvdz1cInNob3dNb2RhbFwiIHgtdHJhbnNpdGlvbi5vcGFjaXR5IGNsYXNzPVwiZml4ZWQgaW5zZXQtMCBiZy1zbGF0ZS05MDAvNzUgei01MFwiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj48L2Rpdj5cbiAgICAgICAgPGRpdiB4LXNob3c9XCJzaG93TW9kYWxcIiB4LXRyYW5zaXRpb24gY2xhc3M9XCJmaXhlZCBpbnNldC0wIHotNTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWF4LXctNHhsIG14LWF1dG9cIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+XG4gICAgICAgICAgPGRpdiB4LW9uOmNsaWNrLmF3YXk9XCJzaG93TW9kYWwgPSBmYWxzZVwiIGNsYXNzPVwicmVsYXRpdmUgbXgtYXV0byBiZy13aGl0ZSByb3VuZGVkLWxnIGgtOTZcIiBzdHlsZT1cIndpZHRoOiBjYWxjKDEwMHZ3IC0gMTAwcHgpO2hlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4KVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtMTIgaC1mdWxsIGNvbnRhaW5lci1wYWRkaW5nLXhcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIGNvbnRhaW5lci1wYWRkaW5nLXhcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJ0ZXh0LTR4bCB1cHBlcmNhc2UgdGV4dC1uZXV0cmFsLTkwMCBkYXJrOnRleHQtbmV1dHJhbC0xMDBcIiBkYXRhLWZpZWxkLXN0cmluZz1cImhlYWRpbmdcIj57e2l0ZW0udGl0bGV9fTwvaDI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwidGV4dC1iYXNlIGZvbnQtbWVkaXVtIGl0YWxpYyBtdC0zIHRleHQtbmV1dHJhbC01MDAgZGFyazp0ZXh0LW5ldXRyYWwtMjAwXCIgZGF0YS1maWVsZC1zdHJpbmc9XCJzdWJfaGVhZGluZ1wiPnt7aXRlbS5zdW1tYXJ5fX08L2gzPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10LTYgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1jZW50ZXIgaW1nLXJlc3BvbnNpdmUgbWctY2VudGVyZWRcIlxuICAgICAgICAgICAgICAgICAgZGF0YS1maWVsZC1zdHJpbmctZmlsZT1cIml0ZW1zW3t7bG9vcC5pbmRleDB9fV0uaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgc3JjPVwie3sgaXRlbS5pbWFnZSB9fVwiXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIG10LTYgbXgtYXV0byBsZWFkaW5nLTYgbWF4LXctMnhsXCIgZGF0YS1maWVsZC10ZXh0PVwiaXRlbXNbe3tsb29wLmluZGV4MH19XS5ib2R5XCI+e3sgaXRlbS5ib2R5IH19PC9kaXY+XG4gICAgICAgICAgICAgIDx1bCBjbGFzcz1cInRleHQtY2VudGVyIG10LTZcIj5cbiAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz5EYXRlPC9zdHJvbmc+OiB7eyBpdGVtLmRhdGUgfX08L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPkNsaWVudDwvc3Ryb25nPjoge3sgaXRlbS5jbGllbnQgfX08L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPkNhdGVnb3J5PC9zdHJvbmc+OiB7eyBpdGVtLmNhdGVnb3J5IH19PC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIGFic29sdXRlIGJvdHRvbS0xMCBsZWZ0LTAgdy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB4LW9uOmNsaWNrPVwic2hvd01vZGFsID0gIXNob3dNb2RhbFwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZmlsbGVkIGJ0bi1leHRlbmRlZC1zdGFydFwiPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS10aW1lc1wiPjwvaT4gQ2xvc2UgUHJvamVjdFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PiAgXG4gICAgeyUgZW5kZm9yICV9XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1sZy04IG14LWF1dG8gdGV4dC1jZW50ZXIgbWF4LXctMnhsIG10LTEyXCI+XG4gICAgICA8cCBjbGFzcz1cImxhcmdlIHRleHQtbXV0ZWQgdGV4dC1uZXV0cmFsLTcwMCBkYXJrOnRleHQtbmV1dHJhbC0yMDBcIiBkYXRhLWZpZWxkLXRleHQ9XCJ0ZXh0XCIgZGF0YS10b29sYmFyLWJ1dHRvbnM9XCJbJ2JvbGQnLCAnaXRhbGljJywgJ3VuZGVybGluZScsICdhbmNob3InXVwiPnt7IGJsb2NrLnRleHQgfX08L3A+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9zZWN0aW9uPlxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG48IS0tIDxkaXYgeC1kYXRhPVwieyBzaG93TW9kYWw6IGZhbHNlIH1cIiB4LW9uOmtleWRvd24ud2luZG93LmVzY2FwZT1cInNob3dNb2RhbCA9IGZhbHNlXCI+XG4gIDxidXR0b24geC1vbjpjbGljaz1cInNob3dNb2RhbCA9ICFzaG93TW9kYWxcIiBjbGFzcz1cImJ0biBidG4tZmlsbGVkIGJnLWJsdWUtNzAwIGhvdmVyOmJnLWJsdWUtODAwXCI+XG4gICAgVG9nZ2xlIE1vZGFsXG4gIDwvYnV0dG9uPlxuXG4gIDxkaXYgeC1zaG93PVwic2hvd01vZGFsXCIgeC10cmFuc2l0aW9uLm9wYWNpdHkgY2xhc3M9XCJmaXhlZCBpbnNldC0wIGJnLXNsYXRlLTkwMC83NSB6LTUwXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPjwvZGl2PlxuICA8ZGl2IHgtc2hvdz1cInNob3dNb2RhbFwiIHgtdHJhbnNpdGlvbiBjbGFzcz1cImZpeGVkIGluc2V0LTAgei01MCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj5cbiAgICA8ZGl2IHgtb246Y2xpY2suYXdheT1cInNob3dNb2RhbCA9IGZhbHNlXCIgY2xhc3M9XCJteC1hdXRvIGJnLXdoaXRlIHJvdW5kZWQtbGcgaC05NlwiIHN0eWxlPVwid2lkdGg6IGNhbGMoMTAwdncgLSAyMDBweCk7aGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjAwcHgpXCI+PC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+IC0tPiJ9;
})();