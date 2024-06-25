import { nunito } from "./fonts";
import config from "../../app.config.json";
import "@/styles/globals.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const metadata = {
  title: config.name,
  description: config.description,
  openGraph: {
    title: config.name,
    description: config.description,
    images: [
      {
        url: "https://scontent.fhph3-1.fna.fbcdn.net/v/t39.30808-6/448832309_1466691570656177_4912477175063162029_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=3Mxm990YDv0Q7kNvgEitXjr&_nc_ht=scontent.fhph3-1.fna&oh=00_AYB9Zwo_ZAZdbTs65UPOVi_21xn7nOhePPiUqCf91EVqzw&oe=667F65BA",
        alt: "TVN - Sắc Việt Entertainment",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  applicationName: config.name,
  referrer: "origin-when-cross-origin",
  keywords: [
    "Sắc Việt Entertainment",
    "SV Entertainment",
    "Công ty CP thương mại và dịch vụ giải trí Sắc Việt",
    "Sắc Việt",
    "TVN",
    "Truss Việt Nam",
  ],
  authors: [{ name: "Dong Ngo", url: "https://fb.com/nBaDong" }],
  creator: "Dong Ngo - andyngojs",
  publisher: "Dong Ngo - andyngojs",
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: config.description,
    title: config.name,
    description: config.description,
    images: [
      "https://scontent.fhph3-1.fna.fbcdn.net/v/t39.30808-6/448832309_1466691570656177_4912477175063162029_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=3Mxm990YDv0Q7kNvgEitXjr&_nc_ht=scontent.fhph3-1.fna&oh=00_AYB9Zwo_ZAZdbTs65UPOVi_21xn7nOhePPiUqCf91EVqzw&oe=667F65BA",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
