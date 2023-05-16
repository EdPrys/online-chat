import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

import "@/styles/globals.scss";
import { icomoon } from "@/common/utils/fonts";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-inter: ${inter.style.fontFamily};
            --font-icomoon: ${icomoon.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}
