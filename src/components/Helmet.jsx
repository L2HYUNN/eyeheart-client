import { Helmet, HelmetProvider } from "react-helmet-async";

function HelmetComponent() {
  return (
    <HelmetProvider>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Gamja+Flower&family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
    </HelmetProvider>
  );
}

export default HelmetComponent;
