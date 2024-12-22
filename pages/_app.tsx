import outputs from "@/amplify_outputs.json";
import "@/assets/css/fontawesome.min.css";
import "@/assets/css/magnific-popup.min.css";
import '@/assets/css/slick.min.css';
import "@/assets/css/style.css";
import { faFont, leagueSpartan } from "@/assets/fonts";
import { Amplify } from "aws-amplify";
import "bootstrap/dist/css/bootstrap.min.css";
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import timezone from 'dayjs/plugin/timezone';
import type { AppProps } from "next/app";

dayjs.extend(timezone);
dayjs.locale('pt-br');

Amplify.configure(outputs as any);

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${faFont.variable} ${leagueSpartan.className} font-sans`}>
      <Component {...pageProps} />
    </div>
  )
}
