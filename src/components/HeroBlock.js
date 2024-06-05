"use client";
import clsx from "clsx";
import dynamic from "next/dynamic";
import styles from "@/styles/components/heroBlock.module.scss";

const LazyStaticImage = dynamic(() => import("./LazyStaticImage"));

export default function HeroBlock({
  children,
  containerClassName,
  contentWrapperClassName,
  imgBackgroundClassName,
  contentClassName,

  imgBackgroundUrlPreview,
  imgBackgroundUrl,
}) {
  return (
    <div className={clsx("w-full", containerClassName)}>
      <div
        className={clsx(
          styles.imageBackgroundDimmed,
          imgBackgroundUrl && styles.cover,
          contentWrapperClassName
        )}
      >
        {!!imgBackgroundUrl && (
        
          <LazyStaticImage
            src={imgBackgroundUrl}
            previewSrc={imgBackgroundUrlPreview}
            className={imgBackgroundClassName}
          />
        )}
        <div
          className={clsx(
            "max-w-app-width flex flex-col items-center",
            contentClassName
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
