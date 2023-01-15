export default function HeroTemplate(props) {
  const {Section, Container, Button, Link} = props.ui;
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
    image,
  } = props.block;
  return (
    <>
      <section
        id={_id}
        className={`${_type} section-padding-y klar-outline md:h-screen`}
        data-field-string-file="image"
        data-placement="top"
        data-offset-top="210"
        data-hide-arrow="true"
        data-wrapper="true"
        no-data-inset="true"
      >
        <div className="container-fluid container-padding-x mx-auto">
          <div className="intro-text pb-16 pt-20 md:py-[170px] lg:py-[170px]">
            {show_subtitle && (
              <div
                className="intro-lead-in mb-4 md:mb-6 text-xl sm:text-3xl lg:text-4xl lg:text-[40px]"
                data-field-string="subtitle"
                data-placeholder="Text för lead-in"
              >
                {subtitle}
              </div>
            )}
            {show_title && (
              <div
                className="intro-heading mb-8 md:mb-12 text-4xl sm:text-6xl lg:text-7xl lg:text-[75px] text-white"
                style={{ color: 'white' }}
                data-field-string="title"
              >
                {title}
              </div>
            )}
            {show_button && (
              <Link
                to="/"
                className="button text-on-primary bg-primary dark:bg-primary-dark"
                data-field-string="link_text"
                data-field-string-format-uri="link"
                data-placement="bottom"
              >
                {link_text}
              </Link>
            )}
          </div>
        </div>
        <div className="background"></div>
      </section>
      <div dangerouslySetInnerHTML={{ __html:`
        <style>
          #${_id} {
            background-image: url('${image}');
            background-position: 0 0px;
            background-size: cover;
            position: relative;
            margin-top: 0;
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
        </style>`}} />
    </>
  )
}
