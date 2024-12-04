"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

function NotFound({
  message = "존재하지 않는 페이지에요",
}: {
  message?: string;
}) {
  const router = useRouter();
  return (
    <div className="fixed w-screen max-w-[568px] h-screen flex flex-col justify-center items-center gap-12 left-half">
      <div className="flex justify-center items-center gap-16 flex-col">
        <Image src="/images/logo_boon.svg" alt="보온" width={250} height={47} />
        <div className="text-center font-semibold">
          404 <span className="block text-fs14 font-medium">{message}</span>
        </div>
      </div>
      <button
        onClick={() => router.back()}
        type="button"
        className="primary w-[80%] large outline"
      >
        돌아가기
      </button>
    </div>
  );
}

export default NotFound;
