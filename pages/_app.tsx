import outputs from "@/amplify_outputs.json";
import "@/assets/css/fontawesome.min.css";
import "@/assets/css/magnific-popup.min.css";
import '@/assets/css/slick.min.css';
import "@/styles/globals.css";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import type { AppProps } from "next/app";
//import { faFont, leagueSpartan, poppins } from "@/assets/fonts";
import "@/assets/sass/globals.scss";
import { AuthProvider } from "@/Context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";

Amplify.configure(outputs);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />;
    </AuthProvider>
  )
}
