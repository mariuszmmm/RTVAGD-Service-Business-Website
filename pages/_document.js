import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import Script from 'next/script';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }



  render() {
    return (
      <Html lang='pl-PL'>
        <Head>
          {/* <Script
            id="google-tag-manager"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-P52JLLB7');`,
            }}
          /> */}

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link rel="preload" href="https://fonts.googleapis.com/css?family=Lato:200,400,400italic,600&display=swap" as="style" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:200,400,400italic,600&display=swap" media="all" />

          <link rel="icon" type="image/png" href="https://naprawaprzemysl.pl/favicon-96x96.png" sizes="96x96" />
          <link rel="icon" type="image/svg+xml" href="https://naprawaprzemysl.pl/favicon.svg" />
          <link rel="shortcut icon" href="https://naprawaprzemysl.pl/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="https://naprawaprzemysl.pl/apple-touch-icon.png" />
          <link rel="manifest" href="https://naprawaprzemysl.pl/site.webmanifest" />

          <meta name="robots" content="noindex, nofollow" />

          <meta property="fb:app_id" content="100063811592941" />
        </Head>
        <body>
          {/* <noscript dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P52JLLB7" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
          }}></noscript> */}

          <Main />
          <NextScript />
          {/* <Script
            id="google-maps"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(g => { var h, a, k, p = "The Google Maps JavaScript API", c = "google", l = "importLibrary", q = "__ib__", m = document, b = window; b = b[c] || (b[c] = {}); var d = b.maps || (b.maps = {}), r = new Set, e = new URLSearchParams, u = () => h || (h = new Promise(async (f, n) => { await (a = m.createElement("script")); e.set("libraries", [...r] + ""); for (k in g) e.set(k.replace(/[A-Z]/g, t => "_" + t[0].toLowerCase()), g[k]); e.set("callback", c + ".maps." + q); a.src = \`https://maps.\${c}apis.com/maps/api/js?\` + e; d[q] = f; a.onerror = () => h = n(Error(p + " could not load.")); a.nonce = m.querySelector("script[nonce]")?.nonce || ""; m.head.append(a) })); d[l] ? console.warn(p + " only loads once. Ignoring:", g) : d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)) })({ key: "AIzaSyBdnXnOIJ1jabs-RVE4M2IbwJQ04Ym3xKM", v: "weekly" });`,
            }}
          /> */}
        </body>
      </Html>
    );
  }
}
