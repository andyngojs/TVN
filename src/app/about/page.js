import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { dancing_script } from "../fonts";
import config from "../../../app.config.json";
import HighLightBlock from "@/components/HighLightBlock";
import Layout from "@/components/Layout";
import HeroBlock from "@/components/HeroBlock";
import Card from "@/components/Card";
import styles from "@/styles/pages/about.module.scss";

import data from "../../../data/about.json";
import { getDriveImageUrl } from "@/services/dataHandler";

const DATA_CONTACT = [
  {
    methodName: "Hotline",
    detailMethod: `Liên hệ hotline ${config.hotline_formatted} để được tư vấn`,
    phone: config.hotline,
    icon: "/icons/phone.svg",
    CTAName: "Gọi ngay",
  },
  {
    methodName: "Facebook",
    detailMethod: "Inbox Facebook chúng tôi ở Fanpage",
    link: config.facebookLink,
    icon: "/icons/facebook.svg",
    CTAName: "Gửi tin nhắn",
  },
];

export default function About() {
  const imageIntro = getDriveImageUrl(data.image_intro);

  function renderCardContactMethod() {
    return DATA_CONTACT.map((item, index) => (
      <HighLightBlock.Item key={index} className={styles.cardWrapper}>
        <Card>
          <div className={styles.cardIconContainer}>
            <img src={item.icon} />
          </div>

          <h5 className="mt-8 font-bold text-xl">{item.methodName}</h5>
          <p className="text-center mt-5">{item.detailMethod}</p>

          {item.link && (
            <Link target="_blank" href={item.link}>
              {item.link}
            </Link>
          )}

          {item.CTAName && (
            <Link
              href={item.phone ? `tel:${item.phone}` : item.link}
              className={clsx("text-xl text-red-600 font-bold mt-8")}
            >
              {item.CTAName}
            </Link>
          )}
        </Card>
      </HighLightBlock.Item>
    ));
  }

  return (
    <Layout>
      <HighLightBlock
        imageBackgroundUrl={"/images/bg-page.png"}
        imgBackgroundUrlPreview={"/images/bg-page.png"}
        contentClassName={"!flex-col"}
      >
        <div className={clsx("relative w-full pb-[50%] ")}>
          <Image
            className="blur-up lazyloaded"
            src={imageIntro}
            fill
            alt="bg-1"
          />
        </div>

        <div className={clsx("flexContainer", styles.brandStory_Heading)}>
          <h3>Giới thiệu về</h3>
          <h1>{config.fullNameCompany}</h1>
        </div>

        <div className={clsx("relative w-full", styles.brandStory_Content)}>
          {data.description_about_intro.map((item, index) => {
            return (
              <p key={index} className={index === 0 ? "" : "mt-3"}>
                {item}
              </p>
            );
          })}

          <h3 className="mt-3">Tầm nhìn</h3>
          <p className="mb-1">{data.vision_content}</p>

          <h3 className="mt-3">Sứ mệnh</h3>
          <ul className="mt-1">
            {data.mission_content.map((item, index) => (
              <li key={index} className={index === 0 ? "" : "mt-2"}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </HighLightBlock>

      <HighLightBlock contentClassName={clsx(styles.coreValueWrapper)}>
        <HighLightBlock.Item>
          <HeroBlock
            imgBackgroundUrl={"/images/bg.png"}
            imgBackgroundUrlPreview={"/images/bg.png"}
            imgBackgroundClassName={"!blur-[2px]"}
          >
            <p
              className={clsx(
                dancing_script.className,
                "textScript text-center"
              )}
            >
              Giá trị cốt lõi
            </p>
            <h3 className={clsx("uppercase mt-4 text-center text-white")}>
              {data.core_value}
            </h3>
          </HeroBlock>
        </HighLightBlock.Item>
      </HighLightBlock>

      <HeroBlock
        imgBackgroundUrl={"/images/bg.png"}
        imgBackgroundUrlPreview={"/images/bg.png"}
        imgBackgroundClassName={"!blur-[2px]"}
      >
        <h3 className={clsx("uppercase mt-4 text-center text-white")}>
          Bạn muốn trở thành đối tác tiếp theo của Sắc Việt Entertainment?
        </h3>
        <h3 className={clsx("mt-3 text-center text-white ")}>
          Hãy liên hệ ngay với chúng tôi
        </h3>

        <div
          className={clsx(
            "flexContainer !items-stretch pl-0 pr-0",
            styles.groupCardContainer
          )}
        >
          {renderCardContactMethod()}
        </div>
      </HeroBlock>
    </Layout>
  );
}
