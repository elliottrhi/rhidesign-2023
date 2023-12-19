import "../styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
  <div className="font-body dark:text-stone-300 text-stone-950">
    <Component {...pageProps} />
  </div>
  );
};

export default MyApp;
