import { League_Spartan, Poppins } from 'next/font/google';
import localFont from 'next/font/local';

// If loading a variable font, you don't need to specify the font weight
export const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  display: 'swap',
})

export const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const faFont = localFont({
  src: [
    {
      path: './fontawesome/fa-thin-100.woff2',
      weight: '100',
      style: 'normal'
    },
    {
      path: './fontawesome/fa-light-300.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: './fontawesome/fa-regular-400.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fontawesome/fa-solid-900.woff2',
      weight: '900',
      style: 'normal'
    }
  ],
  variable: '--font-fa'
})
