import Head from "next/head";
import { useRouter } from "next/router";

import Footer from "./Footer";
import Navbar from "./Navbar";
import Prefooter from "./Prefooter";

const Layout = (props: any) => {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: "Raffa Parabola",
    description: `Layanan Pemasangan Antena TV Digital & Parabola. Dan Jual Antena Digital UHF, Parabola, Receiver, Set Top Box, LNB dan Parts lainnya.`,
    image: "https://saeblog.github.io/raffa/images/seo/raffaparabola.webp",
    type: "website",
    ...customMeta,
  };
  return (
    <div className="min-w-[350px] overflow-x-hidden">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <link href="https://saeblog.github.io/raffa/favicon.ico" rel="shortcut icon" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://web.parabola.id${router.asPath}`}
        />
          <meta property="og:type" content="website" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({

  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Raffa Parabola",
  "image": "https://saeblog.github.io/raffa/images/seo/raffaparabola.webp",
  "@id": "https://www.parabola.id",
  "url": "https://web.parabola.id",
  "telephone": "0811-222-1721",
  "priceRange": "250.000,- s/d 3.000.000,-",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Kopo",
    "addressLocality": "Bandung",
    "postalCode": "40233",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -6.9423179,
    "longitude": 107.5881214
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "06:00",
    "closes": "21:00"
  },
  "sameAs": [
    "https://www.facebook.com/raffaparabola/",
    "https://www.instagram.com/raffa_parabola/",
    "https://www.linkedin.com/in/raffaparabola/"
  ] 

  })
 }}
/>
      </Head>

      <main id="skip" className="bg-white dark:bg-neutral-900">
        <Navbar />
        {children}
        <Prefooter />
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
