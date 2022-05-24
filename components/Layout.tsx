import Header from 'components/Header';
import Footer from 'components/Footer';
import Head from 'next/head';
import { ReactNode } from 'react';
import NotiBar from 'components/NotiBar';

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div id="root">
        <NotiBar text="공지" />

        <div>
          <Header />

          <main>
            {children}
          </main>

          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default Layout
