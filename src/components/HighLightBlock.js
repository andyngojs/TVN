import Link from "next/link";
import clsx from "clsx";
import { dancing_script } from "@/app/fonts";
import styles from "@/styles/components/highLightBlock.module.scss";

function HighLightBlock({
  subTitle,
  title,
  descriptions = [],
  titleCTAButton,
  linkCTAButton,
  titleClassName,
  containerClassName,
}) {
  function renderDescription() {
    return descriptions.map((description, index) => {
      return (
        <p className="mt-7" key={index}>
          {description}
        </p>
      );
    });
  }

  return (
    <div
      className={clsx(
        "flex flex-col flex-1 justify-center relative z-1 lg:px-50",
        containerClassName
      )}
    >
      <p className={clsx(dancing_script.className, "textScript")}>{subTitle}</p>
      <h3 className={clsx("uppercase mt-4", titleClassName)}>{title}</h3>

      <div className={clsx(styles.highLightDescription)}>
        {renderDescription()}
      </div>

      {titleCTAButton && (
        <Link href={linkCTAButton} className={clsx("btn self-start mt-10")}>
          {titleCTAButton}
        </Link>
      )}
    </div>
  );
}

export default HighLightBlock;
