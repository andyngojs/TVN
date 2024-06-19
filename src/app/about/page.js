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
  function renderCardContactMethod(dataFeatures = DATA_CONTACT) {
    return dataFeatures.map((item, index) => (
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
            src={"/images/bg-about-1.jpg"}
            fill
            alt="bg-1"
          />
        </div>

        <div className={clsx("flexContainer", styles.brandStory_Heading)}>
          <h3>Giới thiệu về</h3>
          <h1>{config.fullNameCompany}</h1>
        </div>

        <div className={clsx("relative w-full", styles.brandStory_Content)}>
          <p>
            Sắc Việt Entertainment là thương hiệu hàng đầu trong lĩnh vực tổ
            chức sự kiện, được thành lập vào năm 2014. Chúng tôi cung cấp đa
            dạng các dịch vụ từ lễ khởi công, lễ khánh thành, đến sự kiện kỷ
            niệm, tiệc tất niên, và đám cưới VIP. Ngoài ra, chúng tôi còn tổ
            chức các hội nghị, hội thảo, và sự kiện giáo dục như lễ khai giảng
            và tốt nghiệp. Chúng tôi cũng chuyên về sự kiện quảng bá và tiếp
            thị, bao gồm giới thiệu sản phẩm, triển lãm, và các sự kiện thời
            trang. Đối với các hoạt động thể thao và giải trí, chúng tôi tổ chức
            ngày hội thể thao, sự kiện âm nhạc, và lễ trao giải.
          </p>

          <p className="mt-3">
            Bên cạnh việc tổ chức sự kiện, Sắc Việt còn cung cấp dịch vụ cho
            thuê thiết bị sự kiện chất lượng cao, bao gồm sân khấu, thiết bị âm
            thanh ánh sáng, và nhiều hơn nữa, để đáp ứng mọi nhu cầu của khách
            hàng. Chúng tôi tự hào mang đến dịch vụ chuyên nghiệp, sáng tạo, và
            đảm bảo chất lượng cho mỗi sự kiện.
          </p>

          <h3 className="mt-3">Tầm nhìn</h3>
          <p className="mb-1">
            Xây dựng Sắc Việt Entertainment trở thành công ty tổ chức sự kiện
            chuyên nghiệp hàng đầu của khu vực Miền Bắc.
          </p>

          <h3 className="mt-3">Sứ mệnh</h3>
          <ul className="mt-1">
            <li>
              Đối với khách hàng: Sáng tạo và cung cấp những sản phẩm đạt tiêu
              chuẩn về chất lượng, giá thành, tiến độ cùng dịch vụ chuyên
              nghiệp, thỏa mãn tối đa nhu cầu và mong muốn của khách hàng.{" "}
            </li>
            <li>
              Đối với nhân sự: “Đoàn kết + Quan tâm + Chia sẻ = Cùng phát triển”
              là định hướng mà Sắc Việt cam kết mang đến cho cán bộ công nhân
              viên làm việc tại công ty.
            </li>
            <li>
              Đối với cộng đồng: Sắc Việt cam kết mang đến cho cộng đồng những
              giá trị tốt đẹp nhất bằng sự trân trọng và trách nhiệm của mình
              với cuộc sống con người và xã hội.
            </li>
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
              Trở thành biểu tượng niềm tin hàng đầu tại Việt Nam cung cấp dịch
              vụ tổ chức sự kiện và cho thuê thiết bị sự kiện
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