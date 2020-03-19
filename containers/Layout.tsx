import React from 'react';
import Head from 'next/head';

const Layout = (props) => {
  const { children } = props;

  return (
    <React.Fragment>
      <Head>
        <title>Weather</title>
      </Head>

      {children}
      
      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div,
        div#__next > div > div {
          height: 100%;
        }
        
        body {
          margin: 0;
          font-family: Arial
        }
      `}</style>
    </React.Fragment>
  )
}

export default Layout;
