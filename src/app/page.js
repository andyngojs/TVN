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
import { getDriveImageUrl } from "@/services/dataHandler";

import dataHome from "../../data/home.json";

export default async function Home() {
  function renderCardCustomerFeedback() {
    return dataHome.card_feedback_client.map((feedback, index) => (
      <div key={index}>
        <Card className={clsx(styles.cardFeedbackContainer)}>
          <div className={clsx(styles.contentCardFeedback)}>
            <img src={feedback.icon} />
            <p>{feedback.description}</p>
          </div>

          <div className={clsx("flex justify-center items-center")}>
            <img className={styles.cardFeedbackAvatar} src={feedback.image} />
            <h5 className="ml-4 text-xl font-bold mt-3">{feedback.title}</h5>
          </div>
        </Card>
      </div>
    ));
  }

  function renderCardFeature() {
    return dataHome.card_feature_highligh.map((item, index) => (
      <HighLightBlock.Item
        key={index}
        className={clsx(styles.cardWrapper_Highlight)}
      >
        <Card
          key={index}
          className={
            "py-[40px] px-[25px] hover:lg:-translate-y-5 hover:lg:transition-all"
          }
        >
          <Image
            priority
            src={item.icon}
            alt={`${item.title}`}
            width={60}
            height={60}
          />

          <h5 className="mt-8 font-bold text-xl text-center">{item.title}</h5>
          <p className="text-center mt-5">{item.description}</p>
        </Card>
      </HighLightBlock.Item>
    ));
  }

  function renderRowCardImageProduct() {
    let temp = [],
      productImages = [];

    dataHome.projects_highligh.forEach((image, index) => {
      const imageUrl = getDriveImageUrl(image);

      temp.push(
        <div key={index} className={clsx("floatFlex", styles.cardWrapper)}>
          <Card key={index} className={clsx(styles.productCardContainer)}>
            <img
              loading="lazy"
              className={clsx(styles.productImg)}
              src={imageUrl}
            />
          </Card>
        </div>
      );

      if ((index + 1) % 3 === 0) {
        productImages.push(
          <div
            key={index}
            className={clsx(
              "flexContainer items-stretch pl-0 pr-0",
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
        imgBackgroundUrl={dataHome.bg_banner_highligh}
        imgBackgroundUrlPreview={dataHome.bg_banner_highligh}
      >
        <h1 className="mb-5">{dataHome.text_greeting}</h1>
        <Link href={"/contact"}>
          <p className={clsx("btn")}>{dataHome.title_CTA || "Liên hệ ngay"}</p>
        </Link>
      </HeroBlock>

      <HighLightBlock
        imgBackgroundUrl={"/images/bg-page.png"}
        imgBackgroundUrlPreview={"/images/bg-page.png"}
      >
        <HighLightBlock.Item>
          <Image
            className="z-10"
            src={"/images/logo-1.png"}
            alt="logo"
            width={900}
            height={900}
          />
        </HighLightBlock.Item>

        <HighLightBlock.Item className="lg:px-50">
          <div className={clsx("flex flex-col justify-center lg:px-50")}>
            <p className={clsx(dancing_script.className, "textScript")}>
              Một chút về chúng tôi
            </p>
            <h3 className={clsx(styles.highlightHeading)}>
              Giới thiệu về Sắc Việt Entertainment
            </h3>

            <div className={clsx(styles.highLightDescription)}>
              {dataHome.description_highligh_1.map((desc, index) => (
                <p key={index}>{desc}</p>
              ))}
            </div>

            <Link href={"/about"} className={clsx("btn self-start mt-10")}>
              {dataHome.title_see_more_btn || "Đọc thêm về chúng tôi"}
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
        <h3 className={clsx(styles.highlightHeading, "text-white text-center")}>
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
        contentClassName={"lg:flex-row-reverse"}
        imgBackgroundUrl={"/images/bg-page.png"}
        imgBackgroundUrlPreview={"/images/bg-page.png"}
      >
        <HighLightBlock.Item>
          <Image
            className="z-10"
            src={"/images/logo-1.png"}
            alt="logo"
            width={900}
            height={900}
          />
        </HighLightBlock.Item>

        <HighLightBlock.Item className={clsx("lg:px-50 lg:pr-10")}>
          <div className={clsx(styles.serviceContainer)}>
            <p className={clsx(dancing_script.className, "textScript")}>
              Những dịch vụ của Sắc Việt Entertainment
            </p>
            <h3 className={clsx(styles.highlightHeading)}>Dịch vụ của chúng tôi</h3>

            <div
              className={clsx(
                styles.highLightDescription,
                styles.highlightDescriptionSecond
              )}
            >
              {dataHome.description_service_highligh.map((item, index) => {
                return <p key={index}>{item}</p>;
              })}
            </div>

            <Link href={"/service"} className={clsx("btn self-start mt-10")}>
              Xem chi tiết dịch vụ
            </Link>
          </div>
        </HighLightBlock.Item>
      </HighLightBlock>

      <HighLightBlock>
        <HighLightBlock.Item>
          <div
            className={clsx(
              "flex flex-col justify-center items-center lg:px-50"
            )}
          >
            <p className={clsx(dancing_script.className, "textScript")}>
              Hãy cùng khám phá
            </p>
            <h3 className={clsx(styles.highlightHeading, 'text-center')}>
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
        <h3 className={clsx(styles.highlightHeading, "text-white text-center")}>Khách hàng nói gì</h3>

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
