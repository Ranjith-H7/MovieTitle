// src/pages/_app.js
import '@/app/globals.css'; // ✅ Import Tailwind styles

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

