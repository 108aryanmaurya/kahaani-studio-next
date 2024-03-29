import "./globals.css";
import Navbar from "./_components/common/Navbar";
import Footer from "./_components/common/Footer";
import ScrollProgress from "./_components/common/ScrollProgress";
import ScrollToTop from "./_components/common/ScrollToTop";

export const metadata = {
  title: {
    default: "Kahaani Studio",
    template: "%s | Kahaani Studio",
  },
  description: "dynamic description",
  openGraph: {
    title: "Opengraph",
    description: "Opengraph DEscription",
  },
  image: "https://nextjs.org/imgs/sticker.png",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className=" container">
          <Navbar />
          <ScrollProgress />
          <ScrollToTop />

          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
