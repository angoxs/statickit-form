import "../styles/globals.css";
import { StaticKitProvider } from "@statickit/react";

function MyApp({ Component, pageProps }) {
  return (
    <StaticKitProvider site="8cc40183445b">
      <Component {...pageProps} />
    </StaticKitProvider>
  );
}

export default MyApp;
