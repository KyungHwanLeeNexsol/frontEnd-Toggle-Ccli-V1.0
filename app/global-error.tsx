"use client";

import Image from "next/image";
import Link from "next/link";

function GlobalError({
  error,
  reset,
  message = "페이지에 오류가 있습니다.",
}: {
  error: Error;
  reset: () => void;
  message?: string;
}) {
  return (
    <div className="fixed w-screen max-w-[568px] h-screen flex flex-col justify-center items-center gap-12 left-half">
      <div className="flex justify-center items-center gap-16 flex-col">
        <Image src="/images/logo_boon.svg" alt="보온" width={250} height={47} />
        <div className="text-center font-semibold">
          <span className="block text-fs14 font-medium">{message}</span>
        </div>
      </div>

      <button
        type="button"
        className="primary w-[80%] large outline"
        onClick={() => reset()}
      >
        다시 시도하기
      </button>

      {/* <Link
        href="https://cali.mall.insboon.com"
        className="primary w-[80%] large outline"
      >
        메인으로
      </Link> */}
    </div>
  );
}

export default GlobalError;
