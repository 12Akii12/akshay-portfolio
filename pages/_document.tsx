import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      {/* favicon */}
      <link
        rel="icon"
        type="image/x-icon"
        href="https://img.icons8.com/fluency/48/portfolio.png"
      ></link>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
