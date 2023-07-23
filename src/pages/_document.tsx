import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="As an experienced full stack developer with a strong background in the MERN stack and over 2 years of industry experience, I have successfully completed over 40 orders for clients on Fiverr, earning the status of a Level One seller. With expertise in AWS and DevOps, I am now excited to showcase my skills and accomplishments through my portfolio, where I aim to deliver the best and most effective solutions for your projects."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest"></link>
      </Head>{" "}
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
