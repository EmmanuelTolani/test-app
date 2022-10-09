import Head from "next/head";
import { Fragment, useEffect } from "react";
const MainLayout = ({ children }) => {
  return (
    <Fragment>
      <Head>
        <title>Anki | Online Quizzes</title>
        <meta charset="UTF-8" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="author" content="Ikna Online Quizzes" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <div>{children}</div>
    </Fragment>
  );
};
export default MainLayout;
