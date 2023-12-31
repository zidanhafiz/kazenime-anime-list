import Header from '@/components/header';
import './globals.css';
import type { Metadata } from 'next';
import { Inter, Monoton } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });
export const monoton = Monoton({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kazenime',
  description: 'Anime and Manga List',
  openGraph: {
    title: 'Kazenime',
    description: 'Anime and Manga List',
    url: 'kazenime.vercel.app',
    siteName: 'Kazenime',
    images: [
      {
        url: '/opengraph-image.png',
        width: 800,
        height: 600,
      },
      {
        url: '/opengraph-image.png',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} bg-gradient-to-tr from-biru via-background to-biru`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <div className='mx-[5%] md:mx-auto md:px-12 max-w-[1600px]'>
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
