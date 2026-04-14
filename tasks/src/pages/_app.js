import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
    useEffect(() => {
        import("../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js")
    }, []);
  return <>
  <Navbar />
  <Component {...pageProps} />
  </>;
}
