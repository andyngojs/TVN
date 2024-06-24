import Layout from "@/components/Layout";
import Image from "next/image";

export default function NotFoundCatchAll() {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center bg-white py-10">
        <Image
          src={"/icons/under_construction.svg"}
          alt="This page is constructing"
          width={500}
          height={500}
        />

        <h2 className="text-xl font-bold mt-10 mb-12">
          Trang này đang trong quá trình phát triển. Chúng tôi sẽ sớm hoàn thiện
          và cập nhật đầy đủ nội dung. Xin lỗi vì sự bất tiện này!
        </h2>
      </div>
    </Layout>
  );
}
