import dynamic from "next/dynamic";
import clsx from "clsx";
import styles from "@/styles/components/highLightBlock.module.scss";

const LazyStaticImage = dynamic(() => import("./LazyStaticImage"));

function HighLightBlock({
  imageBackgroundUrl,
  imgBackgroundUrlPreview,
  imgBackgroundClassName,
  containerClassName,
  contentClassName,
  children,
}) {
  return (
    <section className={clsx("relative", containerClassName)}>
      {!!imageBackgroundUrl && (
        <div className={clsx(styles.imageBackground)}>
          <LazyStaticImage
            src={imageBackgroundUrl}
            previewSrc={imgBackgroundUrlPreview}
            className={imgBackgroundClassName}
          />
        </div>
      )}

      <div
        className={clsx(
          "flexContainer max-w-app-width m-0-auto",
          contentClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}

export default HighLightBlock;

function Item({ children, className, ...props }) {
  return (
    <div className={clsx("floatFlex", className)} {...props}>
      {children}
    </div>
  );
}

HighLightBlock.Item = Item;
