import GlobalStyle from 'components/GlobalStyle';
import GoogleAnalytics from 'components/GoogleAnalytics';
import Layout from 'components/Layout';
import Head from 'next/head';

const App = ({ Component, pageProps }) => {

  return (
    <>
      <Head>
        <GoogleAnalytics />
      </Head>

      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
