function LazyStaticImage({ srcSet, src, previewSrc, className }) {
  return (
    <img
      loading="lazy"
      className={`lazyloaded blur-up ${className}`}
      src={previewSrc}
      data-src={srcSet || src}
    />
  );
}

export default LazyStaticImage;
