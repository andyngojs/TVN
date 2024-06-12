import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import Layout from "@/components/Layout";
import HeroBlock from "@/components/HeroBlock";
import HighLightBlock from "@/components/HighLightBlock";
import Card from "@/components/Card";
import styles from "@/styles/pages/home.module.scss";

const dataAboutDescription = [
  "Tự hào là một trong những đơn vị cung cấp truss nhôm nhập khẩu hàng đầu Việt Nam, được rất nhiều Quý khách hàng ở nhiều tỉnh thành trên cả nước tin tưởng sử dụng sản phẩm, Công ty Cổ phần Thương mại Truss Việt Nam đã và đang ngày càng mở rộng quy mô phát triển",
  "Tự hào là một trong những đơn vị cung cấp truss nhôm nhập khẩu hàng đầu Việt Nam, được rất nhiều Quý khách hàng ở nhiều tỉnh thành trên cả nước tin tưởng sử dụng sản phẩm, Công ty Cổ phần Thương mại Truss Việt Nam đã và đang ngày càng mở rộng quy mô phát triển.",
];

const DATA_FEATURE = [
  {
    icon: "/images/badge.png",
    title: "Sản phẩm vượt trội",
    description:
      "Những sản phẩm do TVN phân phối được nghiên cứu, sản xuất bởi các kỹ sư tay nghề cao, trên dây chuyền công nghệ hiện đại đảm bảo đa dạng về mẫu mã, đồng bộ về kết cấu, chi tiết tỉ mỉ trong từng mối hàn, vết cắt, khâu ráp nối đạt chất lượng ưu việt nhất.",
  },
  {
    icon: "/images/badge.png",
    title: "HỢP ĐỒNG RÕ RÀNG",
    description:
      "Những sản phẩm do TVN phân phối được nghiên cứu, sản xuất bởi các kỹ sư tay nghề cao, trên dây chuyền công nghệ hiện đại đảm bảo đa dạng về mẫu mã, đồng bộ về kết cấu, chi tiết tỉ mỉ trong từng mối hàn, vết cắt, khâu ráp nối đạt chất lượng ưu việt nhất.",
  },
  {
    icon: "/images/badge.png",
    title: "Sản phẩm vượt trội",
    description:
      "Những sản phẩm do TVN phân phối được nghiên cứu, sản xuất bởi các kỹ sư tay nghề cao, trên dây chuyền công nghệ hiện đại đảm bảo đa dạng về mẫu mã, đồng bộ về kết cấu, chi tiết tỉ mỉ trong từng mối hàn, vết cắt, khâu ráp nối đạt chất lượng ưu việt nhất.",
  },
  {
    icon: "/images/badge.png",
    title: "Sản phẩm vượt trội",
    description:
      "Những sản phẩm do TVN phân phối được nghiên cứu, sản xuất bởi các kỹ sư tay nghề cao, trên dây chuyền công nghệ hiện đại đảm bảo đa dạng về mẫu mã, đồng bộ về kết cấu, chi tiết tỉ mỉ trong từng mối hàn, vết cắt, khâu ráp nối đạt chất lượng ưu việt nhất.",
  },
];

const DATA_IMAGE_PRODUCT = [
  [
    "/images/anh-san-pham.jpg",
    "/images/anh-san-pham.jpg",
    "/images/anh-san-pham.jpg",
  ],
  [
    "/images/anh-san-pham.jpg",
    "/images/anh-san-pham.jpg",
    "/images/anh-san-pham.jpg",
  ],
];

export default function Home() {
  function renderCardFeature(dataFeatures = DATA_FEATURE) {
    return dataFeatures.map((item, index) => (
      <Card
        key={index}
        title={item.title}
        description={item.description}
        iconFeature={item.icon}
      />
    ));
  }

  function renderImageProduct(dataImage) {
    if (!dataImage) {
      return null;
    }

    return dataImage.map((image, index) => (
      <div key={index} className={clsx("floatFlex", styles.cardWrapper)}>
        <Card type="image" imageUrl={image} />
      </div>
    ));
  }

  function renderRowCardImageProduct(dataRowImage = DATA_IMAGE_PRODUCT) {
    if (dataRowImage.length === 0) {
      return <p>Không có ảnh sản phẩm nào</p>;
    }

    return dataRowImage.map((images, index) => (
      <div
        key={index}
        className={clsx(
          "flexContainer items-stretch pl-0 pr-0 gap-x-4",
          styles.productCardRowContainer
        )}
      >
        {renderImageProduct(images)}
      </div>
    ));
  }

  return (
    <Layout>
      <HeroBlock
        containerClassName={styles.highLightFirst}
        imgBackgroundUrl={"/images/bg.png"}
        imgBackgroundUrlPreview={"/images/bg.png"}
      >
        <h1 className="mb-5">
          Truss Việt Nam - Đơn vị cung cấp truss nhôm nhập khẩu hàng đầu Việt
          Nam
        </h1>
        <Link href={"/contact"}>
          <p className={clsx("btn")}>Đăng ký ngay nhận báo giá</p>
        </Link>
      </HeroBlock>

      <div className="relative bg-white">
        <section className="flexContainer max-w-app-width m-0-auto">
          <div className="floatFlex">
            <Image
              priority
              className="z-10"
              src={"/images/logo.png"}
              alt="logo"
              width={500}
              height={500}
            />
          </div>

          <HighLightBlock
            subTitle={"Một chút về chúng tôi"}
            title={"Giới thiệu về TVN"}
            descriptions={dataAboutDescription}
            titleCTAButton={"Đọc thêm về chúng tôi"}
            linkCTAButton={"/about"}
          />
        </section>
      </div>

      <HeroBlock
        imgBackgroundUrl={"/images/bg.png"}
        imgBackgroundUrlPreview={"/images/bg.png"}
        imgBackgroundClassName={"!blur-[2px]"}
      >
        <HighLightBlock
          subTitle={"Thế mạnh của chúng tôi"}
          title={"Vì sao chọn TVN?"}
          titleClassName={"text-white"}
        />

        <div className={clsx("flexContainer gap-6")}>{renderCardFeature()}</div>
      </HeroBlock>

      <div className="relative bg-white">
        <section className="flexContainer max-w-app-width m-0-auto">
          <HighLightBlock
            subTitle={"Những dịch vụ của TVN"}
            title={"Dịch vụ của chúng tôi"}
            descriptions={[
              "Hãy cùng khám phá những dịch vụ tổ chức Sự Kiện Chuyên Nghiệp Tại Hải Dương, Công Ty Cổ Phần Thương Mại Và Dịch Vụ Giải Trí Sắc Việt",
              "- Tổ Chức Lễ Khai Trương",
              "- Tổ Chức Lễ Khánh Thành",
              "- Tổ Chức Đám Cưới,...",
            ]}
            titleCTAButton={"Xem chi tiết dịch vụ"}
            linkCTAButton={"/service"}
          />

          <div className="floatFlex">
            <Image
              priority
              className="z-10"
              src={"/images/logo.png"}
              alt="logo"
              width={500}
              height={500}
            />
          </div>
        </section>
      </div>

      <div className="relative bg-white">
        <section className="max-w-app-width m-0-auto py-4">
          <HighLightBlock
            containerClassName={"items-center"}
            subTitle={"Hãy cùng khám phá"}
            title={"Ảnh sản phẩm của TVN"}
          />

          <div className="mt-8">
            {renderRowCardImageProduct()}
          </div>
        </section>
      </div>

      <div className="relative bg-white">
        <section className="max-w-app-width m-0-auto py-4">
          <HighLightBlock
            containerClassName={"items-center"}
            subTitle={"Hãy cùng xem"}
            title={"Khách hàng của TVN"}
          />

          <div className="mt-8">
            
          </div>
        </section>
      </div>
    </Layout>
  );
}
