import Document, { Head, Main, NextScript, Html } from "next/document";

class MyDocuments extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta
            name="Description"
            content="A site for my programing portfolio"
          />
          <meta charSet="utf-8" />
          <meta name="robots" content="noindex, nofollow" />
          <meta name="viewPort" content="width=device-width" />
          <link rel="stylesheet" href="/static/nprogressstyle.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocuments;
