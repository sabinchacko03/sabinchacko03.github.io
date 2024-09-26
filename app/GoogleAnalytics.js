import Script from "next/script";

const GoogleAnalytics = () => {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-XR3SK6KJ85"
      />

      <Script id="googleTag" strategy="lazyOnload">
        {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-XR3SK6KJ85');`}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
