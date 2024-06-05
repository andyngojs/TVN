import Layout from "@/components/Layout";
import clsx from "clsx";
import styles from "@/styles/pages/home.module.scss";
import Image from "next/image";
import HeroBlock from "@/components/HeroBlock";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <HeroBlock
        className={styles.highLightFirst}
        imgBackgroundUrl={"/images/bg.png"}
        imgBackgroundUrlPreview={"/images/bg.png"}
      >
        <h1 className='mb-5' >Truss Việt Nam - Đơn vị cung cấp truss nhôm nhập khẩu hàng đầu Việt Nam</h1>
        <Link href={'/'}>
          <p className={clsx('btn')}>Liên hệ ngay</p>
        </Link>
      </HeroBlock>
    </Layout>
  );
}
