import Image from "next/image";
import clsx from "clsx";

function Card({
  iconFeature,
  title,
  description,
  imageUrl,
  type,
  imageContainerClassName,
}) {
  if (type === "image") {
    return (
      <div
        className={clsx(
          "rounded-3xl w-[390px] h-[290px] overflow-hidden",
          imageContainerClassName
        )}
      >
        <Image src={imageUrl} fill alt="anh-san-pham" className="overflow-hidden" />;
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl flex flex-col flex-1 justify-center items-center py-10 px-6 hover:lg:-translate-y-5 hover:lg:transition-all">
      <div className="border-0">
        <Image priority src={iconFeature} alt="icon-1" width={58} height={58} />
      </div>

      <h5 className="mt-8 font-bold text-xl">{title}</h5>
      <p className="text-center mt-5">{description}</p>
    </div>
  );
}

export default Card;
