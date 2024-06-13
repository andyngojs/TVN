import Link from "next/link";
import clsx from "clsx";
import config from "../../../app.config.json";

import Layout from "@/components/Layout";
import HighLightBlock from "@/components/HighLightBlock";
import styles from "@/styles/pages/contact.module.scss";

export default function Contact() {
  return (
    <Layout>
      <div className={clsx(styles.mapContainer)}>
        <iframe
          src={config.googleMapLink}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          aria-hidden="false"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="lazyloaded blur-up"
        ></iframe>
      </div>
      <HighLightBlock
        containerClassName={"bg-white"}
        contentClassName={styles.contentContainer}
      >
        <HighLightBlock.Item className={clsx(styles.formContainer, "w-full")}>
          <div className="flex flex-col lg:flex-row">
            <div className={clsx("flex-1", styles.inputContainer)}>
              <h6>Tên</h6>
              <input className="input" placeholder="Nhập tên của bạn ..." />
            </div>
            <div className={clsx("flex-1", styles.inputContainer)}>
              <h6>Email</h6>
              <input className="input" placeholder="Nhập Email của bạn ..." />
            </div>
          </div>

          <div className={styles.inputContainer}>
            <h6>Nội dung</h6>
            <textarea
              rows="4"
              className="input"
              placeholder="Nhập tin nhắn của bạn ..."
            />
          </div>

          <button className="btn">Gửi tin nhắn</button>
        </HighLightBlock.Item>

        <div className={styles.contactInfoContainer}>
          <p>SDT: {config.hotline_formatted}</p>
          <p>Email: {config.email}</p>
          <p>Địa chỉ: {config.address}</p>
          <p>
            Facebook:{" "}
            <Link
              className="link text-p"
              target="_blank"
              href={config.facebookLink}
            >
              {config.facebookLink}
            </Link>
          </p>
        </div>
      </HighLightBlock>
    </Layout>
  );
}
