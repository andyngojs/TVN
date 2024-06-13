import { nunito } from "./fonts";
import config from '../../app.config.json'
import "@/styles/globals.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const metadata = {
  title: config.name,
  description:
    "TVN - Truss Việt Nam là một trong những công ty đi đầu trong lĩnh vực nhập khẩu thiết bị ngành sân khấu, sự kiện. Hotline: 02206.585.666",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
