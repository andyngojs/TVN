import Layout from "@/components/Layout";
import Image from "next/image";

export default function NotFoundCatchAll() {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center bg-white">
        <Image
          src={
            "https://cdn.dribbble.com/userupload/8726277/file/still-90096ae0b20436af7d475737af5b86e5.gif"
          }
          alt="404"
          width={500}
          height={500}
        />

        <h2 className="text-xl font-bold mt-10 mb-12">
          Rất tiếc! Chúng tôi không thể tìm trang bạn đang tìm kiếm.
        </h2>
      </div>
    </Layout>
  );
}
