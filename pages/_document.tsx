import NextDocument, {
  Html,
  Head,
  DocumentContext,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(ctx);

    return {
      ...initialProps,
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <link href="https://rsms.me/inter/inter.css" rel="stylesheet"></link>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
            rel="stylesheet"
          ></link>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
          ></link>
        </Head>
        <Main />
        <NextScript />
      </Html>
    );
  }
}

export default MyDocument;
