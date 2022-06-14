import { Html, Head, Main, NextScript } from "next/document";
import Navbar from "../components/navbar/Navbar";

export default function Document() {
  return (
    <Html lang="en">
      <link href="https://css.gg/instagram.css" rel="stylesheet" />
      <link href="https://css.gg/twitter.css" rel="stylesheet"></link>
      <link href="https://css.gg/code-slash.css" rel="stylesheet"></link>
      <Head />
      <body>
        <Navbar />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
