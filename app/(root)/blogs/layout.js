export const metadata = {
  title: {
    template: "%s | Blogs",
  },
  description: "This is the BlogPage Description",
  image: "https://nextjs.org/imgs/sticker.png",

  openGraph: {
    title: {
      template: "%s | Blogs",
    },
    description: "This is the BlogPage of Kahaani Studio Description",
  },
  twitter: {
    card: "summary_large_image",
  },
};
export default function RootLayout({ children }) {
  return <main>{children}</main>;
}
