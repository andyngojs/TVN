import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { dancing_script } from "@/app/fonts";
import Layout from "@/components/Layout";
import HeroBlock from "@/components/HeroBlock";
import HighLightBlock from "@/components/HighLightBlock";
import Card from "@/components/Card";
import Carousel from "@/components/Carousel";
import styles from "@/styles/pages/home.module.scss";

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
      "Những sản phẩm do TVN phân phối được nghiên cứu, sản xuất bởi các kỹ",
  },
];

const DATA_IMAGE_PRODUCT = [
  "/images/anh-san-pham.jpg",
  "/images/anh-san-pham.jpg",
  "/images/anh-san-pham.jpg",
  "/images/anh-san-pham.jpg",
  "/images/anh-san-pham.jpg",
  "/images/anh-san-pham.jpg",
];

const CARD_FEEDBACK_DATA = [
  {
    icon: "/icons/quote.svg",
    image: "/images/avatar1.jpeg",
    title: "Khach hang 1",
    description:
      "Tôi rất hài lòng với dịch vụ của Sắc Việt Entertainment. Đội ngũ nhân viên rất chuyên nghiệp và tận tâm. Họ luôn lắng nghe và đáp ứng mọi yêu cầu của khách hàng. Cảm ơn Sắc Việt đã mang đến cho chúng tôi một sự kiện tuyệt vời!",
  },
  {
    icon: "/icons/quote.svg",
    image: "/images/avatar1.jpeg",
    title: "Khach hang 2",
    description:
      "Chất lượng âm thanh và ánh sáng tại sự kiện do Sắc Việt Entertainment tổ chức thật xuất sắc. Mọi thứ được chuẩn bị kỹ lưỡng và chuyên nghiệp. Chắc chắn tôi sẽ tiếp tục sử dụng dịch vụ của các bạn trong những sự kiện sắp tới.",
  },
  {
    icon: "/icons/quote.svg",
    image: "/images/avatar1.jpeg",
    title: "Khach hang 3",
    description:
      "Sắc Việt Entertainment đã mang đến cho chúng tôi một chương trình vô cùng sáng tạo và độc đáo. Từ khâu ý tưởng cho đến khâu thực hiện, mọi thứ đều được chăm chút tỉ mỉ. Sự kiện diễn ra suôn sẻ và để lại ấn tượng sâu sắc cho tất cả khách mời.",
  },
];

export default function Home() {
  function renderCardCustomerFeedback() {
    return CARD_FEEDBACK_DATA.map((feedback, index) => (
      <div key={index}>
        <Card className={clsx("bg-white", styles.cardFeedbackContainer)}>
          <div className={clsx(styles.contentCardFeedback)}>
            <img src={feedback.icon} />
            <p className={clsx("")}>{feedback.description}</p>
          </div>

          <div className={clsx("flex justify-center items-center")}>
            <img className={styles.cardFeedbackAvatar} src={feedback.image} />
            <h5 className="ml-4 text-xl font-bold">{feedback.title}</h5>
          </div>
        </Card>
      </div>
    ));
  }

  function renderCardFeature(dataFeatures = DATA_FEATURE) {
    return dataFeatures.map((item, index) => (
      <HighLightBlock.Item
        key={index}
        className={clsx(styles.cardWrapper_Highlight)}
      >
        <Card
          key={index}
          className={"hover:lg:-translate-y-5 hover:lg:transition-all"}
        >
          <Image priority src={item.icon} alt="icon-1" width={58} height={58} />

          <h5 className="mt-8 font-bold text-xl text-center">{item.title}</h5>
          <p className="text-center mt-5">{item.description}</p>
        </Card>
      </HighLightBlock.Item>
    ));
  }

  function renderRowCardImageProduct(dataRowImage = DATA_IMAGE_PRODUCT) {
    let temp = [],
      productImages = [];

    dataRowImage.forEach((image, index) => {
      temp.push(
        <div key={index} className={clsx("floatFlex", styles.cardWrapper)}>
          <Card
            key={index}
            className={clsx(
              "w-[390px] h-[290px] overflow-hidden",
              styles.productCardContainer
            )}
          >
            <img className={styles.productImg} src={image} />
          </Card>
        </div>
      );

      if ((index + 1) % 3 === 0) {
        productImages.push(
          <div
            key={index}
            className={clsx(
              "flexContainer items-stretch pl-0 pr-0 gap-x-4",
              styles.productCardRowContainer
            )}
          >
            {temp}
          </div>
        );

        temp = [];
      }
    });

    return productImages;
  }

  return (
    <Layout>
      <HeroBlock
        containerClassName={styles.highLightFirst}
        imgBackgroundUrl={"/images/bg.png"}
        imgBackgroundUrlPreview={"/images/bg.png"}
      >
        <h1 className="mb-5">
          SẮC VIỆT ENTERTAINMENT - Tổ chức sự kiện chuyên nghiệp và sáng tạo
          hàng đầu Việt Nam
        </h1>
        <Link href={"/contact"}>
          <p className={clsx("btn")}>Liên hệ ngay</p>
        </Link>
      </HeroBlock>

      <HighLightBlock
        imageBackgroundUrl={"/images/bg-page-1.png"}
        imgBackgroundUrlPreview={"/images/bg-page-1.png"}
      >
        <HighLightBlock.Item>
          <Image
            priority
            className="z-10"
            src={"/images/logo.png"}
            alt="logo"
            width={500}
            height={500}
          />
        </HighLightBlock.Item>

        <HighLightBlock.Item>
          <div className={clsx("flex flex-col justify-center lg:px-50")}>
            <p className={clsx(dancing_script.className, "textScript")}>
              Một chút về chúng tôi
            </p>
            <h3 className={clsx("uppercase mt-4")}>
              Giới thiệu về Sắc Việt Entertainment
            </h3>

            <div className={clsx(styles.highLightDescription)}>
              <p className="mt-7">
                Tự hào là một trong những đơn vị cung cấp truss nhôm nhập khẩu
                hàng đầu Việt Nam, được rất nhiều Quý khách hàng ở nhiều tỉnh
                thành trên cả nước tin tưởng sử dụng sản phẩm, Công ty Cổ phần
                Thương mại Truss Việt Nam đã và đang ngày càng mở rộng quy mô
                phát triển
              </p>
              <p className="mt-7">
                Tự hào là một trong những đơn vị cung cấp truss nhôm nhập khẩu
                hàng đầu Việt Nam, được rất nhiều Quý khách hàng ở nhiều tỉnh
                thành trên cả nước tin tưởng sử dụng sản phẩm, Công ty Cổ phần
                Thương mại Truss Việt Nam đã và đang ngày càng mở rộng quy mô
                phát triển
              </p>
            </div>

            <Link href={"/about"} className={clsx("btn self-start mt-10")}>
              Đọc thêm về chúng tôi
            </Link>
          </div>
        </HighLightBlock.Item>
      </HighLightBlock>

      <HeroBlock
        imgBackgroundUrl={"/images/bg.png"}
        imgBackgroundUrlPreview={"/images/bg.png"}
        imgBackgroundClassName={"!blur-[2px]"}
      >
        <p className={clsx(dancing_script.className, "textScript text-center")}>
          Thế mạnh của chúng tôi
        </p>
        <h3 className={clsx("uppercase mt-4")}>
          Vì sao chọn Sắc Việt Entertainment?
        </h3>

        <div
          className={clsx(
            "flexContainer !items-stretch pl-0 pr-0",
            styles.groupCardContainer
          )}
        >
          {renderCardFeature()}
        </div>
      </HeroBlock>

      <HighLightBlock
        imageBackgroundUrl={"/images/bg-page-1.png"}
        imgBackgroundUrlPreview={"/images/bg-page-1.png"}
      >
        <HighLightBlock.Item>
          <div className={clsx("flex flex-col justify-center lg:px-50")}>
            <p className={clsx(dancing_script.className, "textScript")}>
              Những dịch vụ của Sắc Việt Entertainment
            </p>
            <h3 className={clsx("uppercase mt-4")}>Dịch vụ của chúng tôi</h3>

            <div className={clsx(styles.highLightDescription)}>
              <p className="mt-7">
                Hãy cùng khám phá những dịch vụ tổ chức Sự Kiện Chuyên Nghiệp
                Tại Hải Dương, Công Ty Cổ Phần Thương Mại Và Dịch Vụ Giải Trí
                Sắc Việt
              </p>
              <ul>
                <li>Tổ Chức Lễ Khai Trương</li>
                <li>Tổ Chức Lễ Khai Trương</li>
                <li>Tổ Chức Lễ Khai Trương</li>
              </ul>
            </div>

            <Link href={"/service"} className={clsx("btn self-start mt-10")}>
              Xem chi tiết dịch vụ
            </Link>
          </div>
        </HighLightBlock.Item>

        <HighLightBlock.Item>
          <Image
            priority
            className="z-10"
            src={"/images/logo.png"}
            alt="logo"
            width={500}
            height={500}
          />
        </HighLightBlock.Item>
      </HighLightBlock>

      <HighLightBlock containerClassName={"bg-white"}>
        <HighLightBlock.Item>
          <div
            className={clsx(
              "flex flex-col justify-center items-center lg:px-50"
            )}
          >
            <p className={clsx(dancing_script.className, "textScript")}>
              Hãy cùng khám phá
            </p>
            <h3 className={clsx("uppercase mt-4")}>
              Dự án của Sắc Việt Entertainment
            </h3>

            <div className="mt-8">{renderRowCardImageProduct()}</div>
          </div>
        </HighLightBlock.Item>
      </HighLightBlock>

      <HeroBlock
        contentClassName={styles.contentFeedbackContainer}
        contentWrapperClassName={styles.contentFeedbackWrapper}
        imgBackgroundUrl={"/images/bg.png"}
        imgBackgroundUrlPreview={"/images/bg.png"}
      >
        <p className={clsx(dancing_script.className, "textScript")}>
          Hãy cùng xem
        </p>
        <h3 className={clsx("uppercase mt-4 text-white")}>Khách hàng nói gì</h3>

        <Carousel
          setting={{ dotsClass: styles.slickDots }}
          className={clsx("flex", styles.feedbackCarousel)}
        >
          {renderCardCustomerFeedback()}
        </Carousel>
      </HeroBlock>
    </Layout>
  );
}
