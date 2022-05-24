import Script from 'next/script';
import { gtagId } from 'utils/constant';

const GoogleAnalytics = () => {
  return (
    <>
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-K55Z454WYB"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${gtagId}');
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
