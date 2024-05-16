import {Nunito} from 'next/font/google';
import '@/styles/globals.scss';

const nunito = Nunito({subsets: ['latin']});

export const metadata = {
  title: 'Khung Truss Nhập khẩu uy tín - Cty CP TM Truss Viêt Nam',
  description:
    'TVN - Truss Việt Nam là một trong những công ty đi đầu trong lĩnh vực nhập khẩu thiết bị ngành sân khấu, sự kiện. Hotline: 02206.585.666',
};

export default function RootLayout({children}) {
  return (
    <html lang="vi">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
