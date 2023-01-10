<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <link rel="icon" href="#" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Template</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style type="text/tailwindcss">
      @tailwind base;
      @tailwind components;
      @tailwind utilities;

      @layer base {
        html {
          font-family: var(--font-body), system-ui, -apple-system, BlinkMacSystemFont,
            'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
            'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
            'Noto Color Emoji';
        }

        body {
          background-color: var(--bg-color);
          color: rgb(var(--neutral-900));
          font-size: var(--text-base-size)px;
        }

        .dark body {
          color: rgb(var(--neutral-50));
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          @apply font-bold;
          font-family: var(--font-display), system-ui, -apple-system,
            BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
            'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
            'Segoe UI Symbol', 'Noto Color Emoji';
        }
      }

      @layer components {
        /* Block */
        .section-padding-y {
          @apply py-16 sm:py-24;
        }

        .section-heading {
          @apply text-4xl;
        }

        .section-subheading {
          @apply text-base font-medium italic mt-3;
        }

        .container-fluid {
          @apply max-w-7xl;
        }

        /* Spacing */
        .container-padding-x {
          @apply px-4 sm:px-6 xl:px-8;
        }

        .grid-gap {
          @apply gap-4 md:gap-6;
        }

        .flex-gap {
          @apply gap-2 md:gap-4;
        }

        /* Button */
        .btn {
          @apply pl-6 px-6 h-10 font-normal text-base rounded-lg leading-[1.313rem] inline-flex items-center relative overflow-hidden transition duration-[400ms] transition-[background];
        }

        .btn-text {
          @apply text-primary-500 dark:text-neutral-100 hover:bg-transparent dark:hover:bg-transparent;
        }

        .btn-filled {
          @apply bg-primary-500 text-white hover:bg-primary-700 dark:bg-primary-100 dark:text-primary-800;
        }

        .btn-filled-dark {
          @apply bg-slate-900 hover:bg-slate-700 text-white dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200 dark:hover:text-slate-900;
        }

        .btn-tonal {
          @apply bg-primary-100 text-primary-900 hover:bg-primary-200 dark:bg-primary-800 dark:text-primary-100 dark:hover:bg-primary-700;
        }

        .btn-outlined {
          @apply text-primary-500 border border-neutral-900/10 hover:border-neutral-900/20 dark:text-neutral-100 dark:border-neutral-100/10 dark:hover:border-neutral-100/20;
        }

        .btn-elevated {
          @apply text-primary-500 shadow shadow-black/10 hover:shadow-black/20 dark:text-neutral-100;
          /* shadow-[0_0_0.5rem_rgba(0,0,0,0.3)] */
        }

        .btn:disabled {
          @apply opacity-[0.38];
        }

        /* Extended buttons */
        .btn-extended-start {
          @apply pl-4 px-6;
        }

        .btn-extended-start [class^='material-icons'],
        .btn-extended-start .fa {
          @apply mr-2 text-xl leading-5 w-5 h-5;
        }

        .btn-extended-end {
          @apply pl-6 px-4;
        }

        .btn-extended-end [class^='material-icons'],
        .btn-extended-end .fa {
          @apply ml-2 text-xl leading-5 w-5 h-5;
        }

        /* Icon buttons */
        .btn-icon {
          @apply p-0 w-10 h-10 justify-center rounded-full text-xl;
        }

        .btn-icon [class^='material-icons'],
        .btn-icon .fa {
          @apply m-0;
        }

        .btn-sm {
          @apply px-4 h-8 text-xs font-semibold;
        }

        .btn-lg {
          @apply px-8 h-12 text-lg leading-5;
        }

        .btn-xl {
          @apply px-10 h-14 text-base;
        }

        /* State buttons */
        .btn-filled.btn-color-success {
          @apply bg-green-600 hover:bg-green-700 focus:bg-green-800 dark:bg-green-100;
        }

        .btn-filled.btn-color-error {
          @apply bg-red-500 hover:bg-red-600 focus:bg-red-700 dark:bg-red-100;
        }

        .btn-filled.btn-color-danger {
          @apply bg-orange-500 hover:bg-orange-600 focus:bg-orange-700 dark:bg-orange-100;
        }

        .btn-filled.btn-color-info {
          @apply bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 dark:bg-blue-100;
        }

        .btn-filled.btn-color-link {
          @apply bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 dark:bg-blue-100;
        }

        /* Ripple */
        .btn .ripple {
          @apply absolute rounded-[50%] animate-[ripple_600ms_linear] bg-white/[0.7];
        }

        .btn-text .ripple,
        .btn-link .ripple,
        .btn-elevated .ripple,
        .btn-outlined .ripple {
          @apply bg-black/[0.1] dark:bg-white/[0.1];
        }

        .btn-filled .ripple {
          @apply dark:bg-black/[0.1];
        }

        .btn-text .ripple,
        .btn-link .ripple,
        .btn-outlined .ripple {
          @apply bg-primary/[0.3] dark:bg-primary-100/[0.3];
        }

        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      }
    </style>
  </head>
  <body class="m-0">
    <div id="root"></div>
    <script src="http://localhost:5501/site/index.js"></script>
    <!-- <script src="https://cdn.jsdelivr.net/gh/klar-templates/template-editor@latest/site/index.js"></script> -->
  <!-- Code injected by live-server -->
<script>
	// <![CDATA[  <-- For SVG support
	if ('WebSocket' in window) {
		(function () {
			function refreshCSS() {
				var sheets = [].slice.call(document.getElementsByTagName("link"));
				var head = document.getElementsByTagName("head")[0];
				for (var i = 0; i < sheets.length; ++i) {
					var elem = sheets[i];
					var parent = elem.parentElement || head;
					parent.removeChild(elem);
					var rel = elem.rel;
					if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
						var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
						elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
					}
					parent.appendChild(elem);
				}
			}
			var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
			var address = protocol + window.location.host + window.location.pathname + '/ws';
			var socket = new WebSocket(address);
			socket.onmessage = function (msg) {
				if (msg.data == 'reload') window.location.reload();
				else if (msg.data == 'refreshcss') refreshCSS();
			};
			if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
				console.log('Live reload enabled.');
				sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
			}
		})();
	}
	else {
		console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
	}
	// ]]>
</script>
</body>
</html>

