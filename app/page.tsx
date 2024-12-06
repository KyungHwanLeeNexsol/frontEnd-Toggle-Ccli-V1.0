"use client";
import { useMediaQuery } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function MainPage() {
  const [mounted, setMounted] = useState<boolean>(false);
  const scrollTopRef = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLElement>(null);
  const lg = useMediaQuery("(min-width:1024px)");
  const md = useMediaQuery("(min-width:768px)");
  const sm = useMediaQuery("(min-width:640px)");

  const goToSection4 = () => {
    window.scrollTo({
      top: (section4Ref.current?.offsetTop ?? 0) - 14,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <div className="layout pt-[96px] sm:pt-[134px]">
        <div ref={scrollTopRef} />
        <header className="w-full fixed top-0 z-[100] bg-white ">
          <div className="inner flex justify-between py-8 px-4 sm:px-[60px] sm:pr-[50px] sm:pb-7 sm:pt-[50px]">
            <div className="flex items-start gap-[40px]">
              <Link href="https://openyourplan.com" target="_blank">
                <Image
                  src="./images/logo_toggle.svg"
                  alt="토글"
                  width={100}
                  height={32}
                />
              </Link>
              <Link
                href=""
                className="font-bold hidden lg:block leading-[22.4px] tracking-normal py-[5px]"
              >
                회사소개
              </Link>
              <button
                type="button"
                className="flex items-center gap-1 bg-[rgba(97,81,243,0.1)] py-0.5 pl-2 pr-3 rounded-[8px] hidden lg:flex"
                onClick={() => goToSection4()}
              >
                <Image
                  src="./images/logo_icon.svg"
                  alt="중대재해보험에 대해 자세히 알아보세요"
                  width={28}
                  height={28}
                />
                <p className="text-primary100 font-bold leading-[22.4px] tracking-[-0.3px]">
                  중대재해보험에 대해 자세히 알아보세요
                </p>
              </button>
            </div>

            <Link
              href="https://ccali.zeropay-mall.insboon.com/"
              target="_blank"
              className="flex items-center gap-4  bg-primary rounded-[16px] py-4 pl-6 pr-8 hidden sm:flex"
              style={{
                boxShadow:
                  "0px 0px 8px 0px #00000014, 0px 8px 16px 0px #00000014,  0px 16px 20px 0px #0000001F",
              }}
            >
              <Image
                src="./images/icon_phone.svg"
                alt="우리 회사에 도입하기"
                width={20}
                height={20}
              />
              <p className="text-white text-[16px] font-bold leading-[22.4px] tracking-[-0.2px]">
                우리 회사에 도입하기
              </p>
            </Link>

            <Image
              src="./images/icon_menu.svg"
              alt="메뉴"
              width={24}
              height={24}
              className="block sm:hidden"
            />
          </div>
        </header>

        <div
          id="mainVisual"
          className="inner px-4 pb-[60px] sm:pt-[60px] sm:px-[60px]"
        >
          <div
            className="rounded-[20px] px-4 pt-[40px] pb-[195px] lg:py-[80px] lg:px-[60px] mb-6 sm:mb-10"
            style={{
              backgroundColor: "#505866",
              backgroundImage: " url(./images/img_buildings.svg)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: sm ? "right bottom" : "center bottom",
              backgroundSize: sm ? "auto 380px" : "343px auto",
            }}
          >
            <p className="text-white text-[56px] leading-[78.4px] tracking-[-1.0px] font-extrabold hidden lg:block">
              예상치 못한 중대재해의 위험,
              <br />
              여러분의 기업은 대비하고 있습니까?
            </p>

            <p className="text-white text-[32px] leading-[41.6px] tracking-[-1.05px] font-extrabold block lg:hidden">
              예상치 못한
              <br />
              중대재해의 위험,
              <br />
              여러분의 기업은
              <br /> 대비하고 있습니까?
            </p>
          </div>

          <div className="text-center">
            <p className="leading-[20.8px] sm:text-[24px] sm:font-bold sm:leading-[31.2px] mb-6 sm:mb-4">
              지금 중대재해보험으로 대비하지 않으면,
              <br />
              당신의 기업과 경영자가 고소·고발 대상이 될 수 있습니다!
            </p>
            <p className="text-[12px] tracking-[-0.3px] sm:text-[16px] text-[#8D94A0] leading-[15.12px] sm:leading-[20.8px] mb-[38px] sm:mb-[38px]">
              중대재해처벌법: 2024.01부 기업(5인 이상의 모든 사업장)으로 확대
              시행
            </p>
            <button
              type="button"
              className="text-primary font-bold leading-[22.4px] py-[15px] px-[29.5px] rounded-[16px] border-[2px] border-solid border-primary"
              onClick={() => goToSection4()}
            >
              중대재해보험에 대해 자세히 알아보세요
            </button>
          </div>
        </div>
        {/* #mainVisual */}

        <div id="container" className="inner">
          <section className="section1">
            <h2>중대재해처벌법이란?</h2>
            <div className="flex flex-col gap-5 sm:gap-6 mb-5 sm:mb-6">
              <dl>
                <dt className="tracking-[-0.35px]">법 시행 배경</dt>
                <dd>
                  <ul className="flex-col">
                    <li>
                      <Image
                        src="./images/icon_circle_check.svg"
                        alt=""
                        width={sm ? 24 : 16}
                        height={sm ? 24 : 16}
                      />
                      <p className="tracking-[-0.4px]">
                        반복적으로 발생하는 산업 현장과 공공시설의 안전사고로
                        인한 인명 피해를 방지하고, 기업의 안전 책임을 강화하기
                        위해 도입
                      </p>
                    </li>
                    <li>
                      <Image
                        src="./images/icon_circle_check.svg"
                        alt=""
                        width={sm ? 24 : 16}
                        height={sm ? 24 : 16}
                      />
                      <p className="tracking-[-0.4px]">
                        경영책임자가 안전 확보 의무를 소홀히 했을 때 처벌을
                        명확히 규정하여, 사고 예방과 책임 경영을 실현하려는 목적
                      </p>
                    </li>
                  </ul>
                </dd>
              </dl>

              <dl>
                <dt className="tracking-[-0.35px]">적용범위</dt>
                <dd>
                  <ul className="flex-col md:flex-row">
                    <li style={{ gap: 11 }}>
                      <span>01</span>
                      <p className="tracking-[-0.35px]">
                        상시 근로자 5인 이상인 개인사업주 또는 법인
                      </p>
                    </li>
                    <li style={{ gap: 11 }}>
                      <span>02</span>
                      <p className="tracking-[-0.35px]">
                        중대산업재해·시민재해로 인한 사망/부상/질병
                      </p>
                    </li>
                  </ul>
                </dd>
              </dl>

              <dl>
                <dt className="tracking-[-0.35px]">처벌규정</dt>
                <dd>
                  <ul className="flex-col lg:flex-row">
                    <li style={{ flexDirection: "column" }}>
                      <span className="tracking-normal">사업자/경영책임자</span>
                      <p className="tracking-[-0.35px]">
                        징역 7년 또는 벌금 최대 10억원{" "}
                      </p>
                    </li>
                    <li style={{ flexDirection: "column" }}>
                      <span className="tracking-normal">법인</span>
                      <p className="tracking-[-0.35px]">
                        최대 50억원 +징벌적 손해배상 책임
                      </p>
                    </li>
                    <li style={{ flexDirection: "column" }}>
                      <span className="tracking-normal">피해 보상</span>
                      <p className="tracking-[-0.35px]">
                        손해액의 최대 5배까지 배상 책임
                      </p>
                    </li>
                  </ul>
                </dd>
              </dl>
            </div>

            <p className="text-[12px] sm:text-[16px] text-[#6B7583] font-normal leading-[15.12px] tracking-[-0.25px] sm:leading-[20.8px]">
              * 기존50인이상에서‘24. 1. 부5인이상으로확대시행
            </p>
          </section>

          <section className="section2">
            <h2 className="tracking-[-0.4px]">최근 사고 사례</h2>

            <div className="flex justify-between flex-col lg:flex-row gap-5 mb-6 sm:mb-[64px]">
              <div className="box-wrap">
                <h3 className="tracking-[-0.6px]">열사병 · 화재 사고</h3>

                <div className="flex flex-col gap-2  mb-[36px] sm:mb-[36px]">
                  <dl>
                    <dt className="tracking-[-0.2px]">
                      하청업체 근로자 건설현장 열사명 사망
                    </dt>
                    <dd>
                      <Image
                        src="./images/icon_arrow_right_white.svg"
                        alt="화살표"
                        width={15}
                        height={21}
                      />
                      <span className="tracking-[-0.35px]">
                        원청업체 대표이사 기소
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dt className="tracking-[-0.2px]">
                      공장 내 화재로 다수 근로자 사망
                    </dt>
                    <dd>
                      <Image
                        src="./images/icon_arrow_right_white.svg"
                        alt="화살표"
                        width={15}
                        height={21}
                      />
                      <span className="tracking-[-0.35px]">
                        대표이사 구속 기소
                      </span>
                    </dd>
                  </dl>
                </div>

                <div className="w-full sm:max-w-max mx-auto">
                  <Image
                    src="./images/img_article1.svg"
                    alt="열사병 · 화재 사고 기사 이미지"
                    width={454}
                    height={327}
                    className="w-full"
                  />
                  <p className="w-full sm:w-auto text-[12px] text-[#D2D6DB] text-right tracking-[-0.4px] leading-[15.12px] mt-[11px] sm:mt-[11px] mr-[13px]">
                    * 자료출처: 연합뉴스
                  </p>
                </div>
              </div>
              {/* .box-wrap */}

              <div className="box-wrap">
                <h3 className="tracking-[-0.6px]">
                  주택관리업 · 시민재해 사고
                </h3>

                <div className="flex flex-col gap-2 mb-[36px] sm:mb-[36px]">
                  <dl>
                    <dt className="tracking-[-0.2px]">
                      아파트 단지 내 관리업체 근로자 사망
                    </dt>
                    <dd>
                      <Image
                        src="./images/icon_arrow_right_white.svg"
                        alt="화살표"
                        width={15}
                        height={21}
                      />
                      <span className="tracking-[-0.35px]">
                        관리업체 대표 검찰 송치
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dt className="tracking-[-0.2px]">
                      LPG 충전소 폭발 사고로 인한 사망
                    </dt>
                    <dd>
                      <Image
                        src="./images/icon_arrow_right_white.svg"
                        alt="화살표"
                        width={15}
                        height={21}
                      />
                      <span className="tracking-[-0.35px]">
                        충전소 대표 검찰 송치
                      </span>
                    </dd>
                  </dl>
                </div>

                <div className="w-full sm:max-w-max mx-auto">
                  <Image
                    src="./images/img_article2.svg"
                    alt="주택관리업 · 시민재해 사고 기사 이미지"
                    width={480}
                    height={312}
                    className="w-full"
                  />
                  <p className="w-full sm:w-auto text-[12px] text-[#D2D6DB] text-right leading-[15.12px] mt-[3px] mr-[13px] tracking-[-0.35px] sm:mt-[3px]">
                    * 자료출처: 연합뉴스
                  </p>
                </div>
              </div>
              {/* .box-wrap */}
            </div>

            <p className="flex items-start gap-[10px] sm:gap-[10px] text-[16px] sm:text-[20px] tracking-[-0.4px] leading-[20.8px] sm:leading-[30px] ml-[3.5px]">
              <Image
                src="./images/icon_exclamation_circle_white.svg"
                alt="느낌표"
                width={sm ? 20 : 16}
                height={sm ? 30 : 24}
                className="mt-0 sm:mt-0.5 sm:my-[2px]"
              />
              사업장 규모와 업종을 불문하고 다양한 유형의 사고가 원인이 되어
              기소된 23건 모든 사건에서 형사책임이 적용되어 경영책임자가 처벌됨
              (2024년9월20일기준)
            </p>
          </section>

          <section className="section3">
            <h2>최근 판결 동향 및 시사점</h2>
            <div className="flex justify-between flex-col md:flex-row gap-5">
              <div className="box-wrap">
                <h3>주요 위반 혐의</h3>

                <table>
                  <colgroup>
                    <col style={{ width: "75%" }} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>내용</th>
                      <th>건수(비율)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>사업장 특성에 맞는 유해・위험요인 확인 및 개선</td>
                      <td>
                        <span>54건</span> (87.1%)
                      </td>
                    </tr>
                    <tr>
                      <td>안전관리자에 권한・예산 부여 및 평가</td>
                      <td>
                        <span>42건</span> (67.7%)
                      </td>
                    </tr>
                    <tr>
                      <td>
                        중대재해 발생 및 발생 위험에 대비한 매뉴얼 수립・이행
                      </td>
                      <td>
                        <span>19건</span> (30.6%)
                      </td>
                    </tr>
                    <tr>
                      <td>
                        사업장 안전보건 관련 종사자 의견 청취 절차 수립・이행
                      </td>
                      <td>
                        <span>17건</span> (27.4%)
                      </td>
                    </tr>
                    <tr>
                      <td>
                        하청업체 산재예방 조치능력・관리비용 기준 수립・이행
                      </td>
                      <td>
                        <span>15건</span> (24.2%)
                      </td>
                    </tr>
                    <tr>
                      <td>사업장 안전보건 목표 및 경영 방침 설정</td>
                      <td>
                        <span>15건</span> (24.2%)
                      </td>
                    </tr>
                  </tbody>
                </table>

                <p className="text-[#6B7583] text-[12px] leading-[15.12px] tracking-[-0.2px] ml-[2px] mt-4">
                  * 자료출처: 국회의원 박지원 의원실 (2024.10)
                </p>
              </div>
              {/* .box-wrap */}

              <div className="box-wrap">
                <h3>시사점</h3>

                <div className="flex flex-col gap-4">
                  <dl>
                    <dt className="tracking-[-0.4px]">엄정한 법 집행</dt>
                    <dd className="tracking-[-0.4px]">
                      중대재해처벌법 시행 이후 1심 판결 모두 유죄 선고
                      (2024.09기준)
                    </dd>
                  </dl>

                  <dl>
                    <dt className="tracking-[-0.4px]">
                      형량 감경·가중요소 확인
                    </dt>
                    <dd className="tracking-[-0.4px]">
                      <ul className="pl-[3.5px]">
                        <li className="tracking-[-0.35px]">
                          감경요소: 유족과의 합의 및 처벌불원의사확인,
                          재발방지의지
                        </li>
                        <li className="tracking-[-0.35px]">
                          가중요소: 형식적인매뉴얼 마련, 안전보건경영체계구축
                          미흡
                        </li>
                      </ul>
                    </dd>
                  </dl>

                  <dl>
                    <dt className="tracking-[-0.4px]">
                      변호사와 노무사를 통한 법적 대응 필수
                    </dt>
                    <dd className="tracking-[-0.4px]">
                      손해액의 최대 5배까지 배상 책임
                    </dd>
                  </dl>
                </div>
              </div>
              {/* .box-wrap */}
            </div>
          </section>

          <section className="section4" ref={section4Ref}>
            <h2 className="tracking-[-0.55px]">
              왜 우리 기업에 {!md && <br />} 토글중대재해보험이 필요한가요?
            </h2>

            <div className="bg-[rgba(88,134,254,0.1)] border-[1px] border-solid border-[#5886FE] rounded-[20px]">
              <div className="flex justify-between flex-col md:flex-row md:gap-5 mb-5">
                <div className="icon-wrap">
                  <Image
                    src="./images/icon_balance.svg"
                    alt="법적 리스크 방어"
                    width={md ? 120 : 100}
                    height={md ? 120 : 100}
                  />
                  <dl>
                    <dt className="tracking-[-0.4px]">법적 리스크 방어</dt>
                    <dd className="tracking-[-0.4px] ml-[5.5px]">
                      고소·고발의 위험에서
                      <br />
                      기업과 경영자를 보호
                    </dd>
                  </dl>
                </div>
                {/* .icon-wrap */}

                <div className="icon-wrap">
                  <Image
                    src="./images/icon_id_card.svg"
                    alt="재정적 손실 최소화"
                    width={md ? 120 : 100}
                    height={md ? 120 : 100}
                  />
                  <dl>
                    <dt className="tracking-[-0.4px]">재정적 손실 최소화</dt>
                    <dd className="tracking-[-0.4px]">
                      사고 발생 시 형사 방어비용,
                      <br />
                      피해자 합의금, 위기관리 비용 등 지원
                    </dd>
                  </dl>
                </div>
                {/* .icon-wrap */}

                <div className="icon-wrap">
                  <Image
                    src="./images/icon_building.svg"
                    alt="기업 신뢰도 유지"
                    width={md ? 120 : 100}
                    height={md ? 120 : 100}
                  />
                  <dl>
                    <dt className="tracking-[-0.4px]">기업 신뢰도 유지</dt>
                    <dd className="tracking-[-0.4px]">
                      신속한 위기관리로
                      <br />
                      기업 이미지 보호
                    </dd>
                  </dl>
                </div>
                {/* .icon-wrap */}
              </div>

              <div className="md:p-10 md:pt-5">
                <div className="bg-primary rounded-[20px] p-4 pt-[30px] md:px-[40px] md:py-[60px]">
                  <p className="max-w-max text-[20px] md:text-[24px] text-[#2250C3] font-bold leading-[26px] md:leading-[31.2px] bg-white mx-auto mb-8 md:mb-[60px] py-1.5 px-4 rounded-[12px] tracking-[-0.35px]">
                    간편한 보험 가입 서비스
                  </p>

                  <div className="flex justify-center items-center gap-4 md:gap-[40px] mb-[60px]">
                    <div>
                      <Image
                        src="./images/img_tablet1.svg"
                        alt="사업자번호 입력 페이지"
                        width={md ? 184.7 : 117.32}
                        height={md ? 247.5 : 157.22}
                        className="mb-2"
                      />
                      <p className="text-[12px] md:text-[20px] text-white text-center md:font-bold leading-[15.12px] md:leading-[26px]">
                        사업자번호 입력
                      </p>
                    </div>

                    {md ? (
                      <Image
                        src="./images/icon_arrow_right_long_white.svg"
                        alt="화살표"
                        width={40}
                        height={22}
                      />
                    ) : (
                      <Image
                        src="./images/icon_arrow_right_white.svg"
                        alt="화살표"
                        width={13.15}
                        height={11}
                      />
                    )}

                    <div>
                      <Image
                        src="./images/img_tablet2.svg"
                        alt="보험료 확인・결제 페이지"
                        width={md ? 184.7 : 117.32}
                        height={md ? 247.5 : 157.22}
                        className="mb-2"
                      />
                      <p className="text-[12px] md:text-[20px] text-white text-center md:font-bold leading-[15.12px] md:leading-[26px]">
                        보험료 확인・결제
                      </p>
                    </div>
                  </div>

                  <div>
                    <ol>
                      <li>
                        <p className="tracking-[-0.35px]">
                          사업자 번호 입력만으로
                          {md ? <br /> : " "}
                          보험료 확인 및 가입
                        </p>
                        <ul>
                          <li className="tracking-[-0.35px]">
                            자체 구축 DB를 활용해 구축한 시스템 이용
                          </li>
                          <li className="tracking-[-0.35px]">
                            최소 정보 입력으로 간편하게 견적 확인
                          </li>
                        </ul>
                      </li>
                      <li>
                        <p className="tracking-[-0.35px]">
                          업계 최초 ONE-STOP
                          {md ? <br /> : " "}
                          실시간 가입 가능
                        </p>
                        <ul>
                          <li className="tracking-[-0.35px]">
                            소 7일 이상 소요되는 대면 가입 절차 간소화
                          </li>
                          <li className="tracking-[-0.35px]">
                            서류 제출없이 실시간 가입
                          </li>
                        </ul>
                      </li>
                      <li>
                        <p className="tracking-[-0.35px]">
                          사고접수 고객센터 및{md ? <br /> : " "}
                          카카오톡 채널 운영
                        </p>
                        <ul>
                          <li className="tracking-[-0.35px]">
                            고객센터: 사고접수와 보상문의 전용
                          </li>
                          <li className="tracking-[-0.35px]">
                            카카오톡: 가입 즉시 가입확인서와 약관 발송
                          </li>
                        </ul>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section5">
            <h2>
              알아두면 좋은 정보
              <p className="text-[16px] sm:text-[20px] font-normal leading-[20.8px] tracking-[-0.35px] sm:leading-[30px] mt-4">
                중대재해에 대해 더욱 쉽고 빠르게 이해하려면 아래의 정보를 확인해
                보세요.
              </p>
            </h2>
            <ul>
              <li>
                <dl>
                  <dt className="tracking-[-0.35px] mb6">경영책임자의 범위</dt>
                  <dd className="tracking-[-0.35px]">
                    {sm ? (
                      <>
                        CEO뿐 아니라 그룹 회장 등 고위 경영진도 고소·고발 대상
                      </>
                    ) : (
                      <>
                        CEO뿐 아니라 그룹 회장 등<br /> 고위 경영진도 고소·고발
                        대상
                      </>
                    )}
                  </dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt className="tracking-[-0.35px] mb6">
                    법적 책임과 처벌 사례
                  </dt>
                  <dd className="tracking-[-0.35px]">
                    중소기업이 대부분 처벌 대상 (23건 모두 중소기업)
                  </dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt className="tracking-[-0.35px] mb10">안전관리의 중요성</dt>
                  <dd className="tracking-[-0.35px]">
                    안전 매뉴얼 작성뿐 아니라 실행이 필수.
                    <br />
                    하청업체의 산재 예방 조치 능력도 관리해야 함.
                  </dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt className="tracking-[-0.35px] mb6">적용되는 업종</dt>
                  <dd className="tracking-[-0.35px]">
                    화재·폭발 사고나 온열질환(열사병) 사고로 인한 기소 사례가
                    많으나 전 업종으로 확대되는 추세
                  </dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt className="tracking-[-0.35px] mb6">
                    상시 근로자 수 기준
                  </dt>
                  <dd className="tracking-[-0.35px]">
                    개별 사업장 단위가 아닌 하나의 기업 전체를 기준(인접 위치할
                    필요 없음)
                  </dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt className="tracking-[-0.35px] mb6">법적 대응 준비</dt>
                  <dd className="tracking-[-0.35px] pl-[10px]">
                    •&nbsp;&nbsp;변호사 및 노무사를 통해 대응 전략 마련
                    <br /> •&nbsp;&nbsp;안전보건 경영체계 구축으로 처벌 최소화
                  </dd>
                </dl>
              </li>
            </ul>
          </section>

          <div className="px-4 sm:px-[60px] pb-[40px] sm:pb-[80px]">
            <Link
              href="https://ccali.zeropay-mall.insboon.com/"
              target="_blank"
              className="block bg-primary rounded-[20px] xl:relative pt-5 pb-[30px] xl:py-[80px] px-[26px] xl:px-0"
            >
              <div className="w-full h-full flex justify-center xl:justify-between xl:pl-[73px] xl:pr-[71.9px] xl:absolute xl:top-[0px] mb-2 xl:mb-0">
                <Image
                  src="./images/img_balance.svg"
                  alt="저울 이미지"
                  width={lg ? 200 : 60}
                  height={lg ? 200 : 60}
                />
                <Image
                  src="./images/img_shield.svg"
                  alt="방패 이미지"
                  width={lg ? 200 : 60}
                  height={lg ? 200 : 60}
                />
              </div>

              <p className="text-[24px] lg:text-[32px] tracking-[-0.4px] text-white text-center font-bold leading-[31.2px] lg:leading-[41.6px]">
                중대재해보험으로
                <br />
                형사적 · 재정적 공포에서 벗어나 기업의 안전을 지키세요.
              </p>
            </Link>
          </div>
        </div>
        {/* #container */}

        <footer className="bg-[#F9FAFB] text-[#6B7583]">
          <div className="inner flex flex-col gap-4 sm:gap-6 py-[60px] sm:py-[120px] px-4 sm:px-[60px]">
            <div className="text-[16px] sm:text-[24px] font-bold leading-[22.4px] sm:leading-[31.2px]">
              오픈플랜(주)
            </div>
            <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center gap-6 xl:gap-0 text-[12px] sm:text-[16px] leading-[15.12px] sm:leading-[20.8px]">
              <div>
                <div className="pl-[2px] tracking-[-0.02em]">
                  대표이사: 이광현 <span>/</span> 사업자등록번호: 154-87-01568
                  <span>/</span> 주소: 04797 서울특별시 성동구 아차산로11길 18
                  907호(성수동,쁘랭땅빌딩)
                </div>
                <div className="pl-[2px] tracking-[-0.2px] mt-1">
                  통신판매업번호: 제2021-서울 서초-1551호 /&nbsp;&nbsp;대표전화:
                  1661-4045
                </div>
              </div>
              <div className="flex gap-4 tracking-[-0.35px]">
                <div className="pl-[2px]">Contact us</div>
                <div>
                  1661-4045
                  <br />
                  marketing@openyourplan.com
                </div>
              </div>
            </div>
            <div className="text-[12px] sm:text-[16px] leading-[15.12px] sm:leading-[20.8px]">
              Copyright © 2024 openplan Inc. All right reserved.
            </div>
          </div>
        </footer>
      </div>
    )
  );
}

export default MainPage;
