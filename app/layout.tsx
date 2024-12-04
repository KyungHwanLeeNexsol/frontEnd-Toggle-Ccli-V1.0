/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { RecoilRoot } from "recoil";
import "swiper/css";
import "swiper/css/pagination";
import "./globals.css";
import "dayjs/locale/ko";
import { QueryClientProvider, QueryClient } from "react-query";
import Script from "next/script";
import { FormProvider, useForm } from "react-hook-form";
import { Suspense, useEffect } from "react";

// import { useState } from "react";

declare global {
  // Kakao 함수를 전역에서 사용할 수 있도록 선언
  interface Window {
    npPfsStartup: () => void;
    npPfsCtrl: any;
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false }, mutations: { retry: false } },
  });
  // function kakaoInit() {
  //   // 페이지가 로드되면 실행
  //   window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
  //   // console.log(window.Kakao.isInitialized());
  // }

  const methods = useForm({
    defaultValues: {},
  });

  // const [mount, setMount] = useState(false);
  return (
    <html lang="ko">
      <head>
        <meta
          name="viewport"
          content="initial-scale=1.0, user-scalable=0, maximum-scale=1, minimum-scale=1, width=device-width"
        />

        <Script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
          strategy="beforeInteractive"
        />
        <Script src="https://cdn.iamport.kr/v1/iamport.js" />
        <Script
          type="text/javascript"
          src="https://key-server.insboon.com/pluginfree/js/jquery-1.11.0.min.js"
        />
        <Script
          type="text/javascript"
          src="https://key-server.insboon.com/pluginfree/js/nppfs-1.13.0.js"
        />

        <Script
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              if (/KAKAOTALK/i.test(navigator.userAgent)) {
                let useragt = navigator.userAgent.toLowerCase();
                let target_url = location.href;

                if (useragt.match(/kakaotalk/i)) {
                  // 카카오톡 외부브라우저로 호출
                  location.href =
                    "kakaotalk://web/openExternal?url=" +
                    encodeURIComponent(target_url);
                } else if (useragt.match(/line/i)) {
                  // 라인 외부브라우저로 호출
                  if (target_url.indexOf("?") !== -1) {
                    location.href = target_url + "&openExternalBrowser=1";
                  } else {
                    location.href = target_url + "?openExternalBrowser=1";
                  }
                }else if (
                  useragt.match("/inapp|naver|snapchat|wirtschaftswoche|thunderbird|instagram|everytimeapp|whatsApp|electron|wadiz|aliapp|zumapp|iphone(.*)whale|android(.*)whale|kakaostory|band|twitter|DaumApps|DaumDevice\/mobile|FB_IAB|FB4A|FBAN|FBIOS|FBSS|SamsungBrowser\/[^1]/i")
                ) {
                  if(useragt.match(/iphone|ipad|ipod/i)){
                    // //아이폰은 강제로 사파리를 실행할 수 없다 ㅠㅠ
                  } else {
                    //안드로이드는 Chrome이 설치되어있음으로 강제로 스킴실행한다.
                    location.href = "intent://" + target_url.replace("/https?:\/\//i", "") + "#Intent;scheme=http;package=com.android.chrome;end";
                  }
                }
              }
            `,
          }}
        />

        <title>토글 - 중대재해보험</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
        <meta
          name="description"
          content={
            "기업중대사고 배상책임보험과 함께 내 사업장에서 일어날 수 있는 중대산업재해에 대비하세요."
          }
        />
        <meta property="og:title" content={`토글 - 중대재해보험`} />
        <meta
          property="og:description"
          content={
            "기업중대사고 배상책임보험과 함께 내 사업장에서 일어날 수 있는 중대산업재해에 대비하세요."
          }
        />
        {/* <Script
          src="https://developers.kakao.com/sdk/js/kakao.js"
          onLoad={kakaoInit}
        /> */}
      </head>
      <body suppressHydrationWarning={true}>
        <div id="toast" />
        <QueryClientProvider client={queryClient}>
          <RecoilRoot>
            <FormProvider {...methods}>
              <Suspense fallback={<div />}> {children}</Suspense>
            </FormProvider>
          </RecoilRoot>
        </QueryClientProvider>
      </body>
    </html>
  );
}
