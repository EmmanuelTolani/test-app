import Head from "next/head";
import { Fragment, useEffect } from "react";
const MainLayout = ({ children }) => {


  return (
    <Fragment>
      <Head>
        <title>Anki | Online Quizzes</title>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content=""
        />
        <meta
          name="keywords"
          content=""
        />
        <meta name="author" content="Ikna Online Quizzes" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        {/* <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicon_io/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon_io/favicon-16x16.png"
        />
        <link rel="manifest" href="favicon_io/site.webmanifest" /> */}
      </Head>
      <div>
        {children}
      </div>
    </Fragment>
  );
};
export default MainLayout;
