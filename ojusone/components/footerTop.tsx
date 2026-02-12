"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import instgram from "../public/icons/Instagram Logo.svg";
import facebook from "../public/icons/fb.png";
import twitter from "../public/icons/x.png";
import whatsapp from "../public/icons/WhatsApp Logo.svg";
import linkedin from "../public/icons/linkedin.svg";
import google from "../public/icons/Google Logo.svg";
import { fetchApi } from "@/lib/api";
import ios from "../public/icons/ios.svg";
import android from "../public/icons/android.png";

export default function Footer() {
  const [setting, setSetting] = useState<any>(null);
  const [settingM, setSettingM] = useState<any>(null);

  useEffect(() => {
    async function getSettings() {
      const res = await fetchApi("setting");
      if (res?.data) setSetting(res.data);
    }
    getSettings();
  }, []);

  useEffect(() => {
    async function getSettingsM() {
      const res = await fetchApi("monarch/setting");
      if (res?.data) setSettingM(res.data);
    }
    getSettingsM();
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black font-poppins text-white text-sm border-t border-gray-800">
        <div className="hidden md:block w-[100%] max-w-[1575px] mx-auto px-10 py-12">

        <div className="grid grid-cols-1 md:grid-cols-7 gap-10">

          {/* --- Column 1: Logos + Contact Info --- */}
          <div className="col-span-1 md:col-span-3 flex flex-col space-y-4">
            <div className="flex items-center space-x-6">
              {settingM?.logo && (
                <div className="border-r pr-5">
                  <img
                    src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${settingM.logo}`}
                    alt={settingM?.site_name || "Royal Monarch"}
                   
                    className="h-[85px] w-[174px] object-contain !max-w-none !h-[85px] !w-[174px]"
                  />
                </div>
              )}
              {setting?.logo && (
                <img
                  src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${setting.logo}`}
                  alt={setting?.site_name || "Ojus One"}
             
                  className="h-[85px] w-[174px] object-contain !max-w-none !h-[85px] !w-[174px]"
                />
              )}
            </div>

            {/*<div className="text-gray-400 text-[11px] leading-relaxed w-[225px]">*/}
              <div className="text-gray-400 text-[11px] leading-[16px] w-[230px]">
                  <div>
                      {setting?.address || "INS - 540, Urbtech Trade Center, Sector 132, Noida - 201304"}
                  </div>

                  <div>
                      <a href={`mailto:${setting?.email}`} className="hover:underline">
                          {setting?.email || "contact@royalmonarchs.in"}
                      </a>{" "}
                      |{" "}
                      <a href={`tel:${setting?.phone}`} className="hover:underline">
                          {setting?.phone || "+91 98765 43210"}
                      </a>
                  </div>

                  <div>
                      © {currentYear} Royal Monarch. All rights reserved
                  </div>

                  <p className="text-[11px] text-[#757575]">
                      Ojus One is a Royal Monarch brand.
                  </p>
              </div>



              <div className="flex space-x-6 mt-3">

                  {setting?.androidUrl && (
                      <a href={setting.androidUrl} target="_blank" rel="noopener noreferrer">
                          <Image src={android} alt="Android" width={113} height={35} />
                      </a>
                  )}
                  {setting?.iosUrl && (
                      <a href={setting.iosUrl} target="_blank" rel="noopener noreferrer">
                          <Image src={ios} alt="IOS" width={113} height={35} />
                      </a>
                  )}
              </div>

            <div className="flex space-x-6 mt-3">
              {setting?.instgram && (
                <a href={setting.instgram} target="_blank" rel="noopener noreferrer">
                  <Image src={instgram} alt="Instagram" width={30} height={30} />
                </a>
              )}
              {setting?.linkdi && (
                <a href={setting.linkdi} target="_blank" rel="noopener noreferrer">
                  <Image src={linkedin} alt="LinkedIn" width={30} height={30} />
                </a>
              )}
              {setting?.wp && (
                <a href={setting.wp} target="_blank" rel="noopener noreferrer">
                  <Image src={whatsapp} alt="WhatsApp" width={30} height={30} />
                </a>
              )}
              {setting?.twitter && (
                <a href={setting.twitter} target="_blank" rel="noopener noreferrer">
                  <Image src={twitter} alt="Twitter" width={30} height={30} />
                </a>
              )}
              {setting?.fb && (
                <a href={setting.fb} target="_blank" rel="noopener noreferrer">
                  <Image src={facebook} alt="Facebook" width={30} height={30} />
                </a>
              )}
              {setting?.youtube && (
                <a href={setting.youtube} target="_blank" rel="noopener noreferrer">
                  <Image src={google} alt="YouTube" width={30} height={30} />
                </a>
              )}
            </div>
            
          </div>

          {/* --- Column 2: Royal Monarch + Important Links --- */}
          <div>
            <h3 className="text-[#957AE4] font-medium text-[11px] mb-4">Royal Monarch</h3>
            <ul className="space-y-2 text-white text-[11px]">
              <li><Link href="https://monarch.mitwebsolutions.com/about">About Us</Link></li>
              <li><Link href="https://monarch.mitwebsolutions.com/about/culture">Our Culture</Link></li>
              <li><Link href="https://monarch.mitwebsolutions.com/about/approach">Our Approach</Link></li>
              <li><Link href="https://monarch.mitwebsolutions.com/about/team">Our Team</Link></li>
              <li><Link href="#">Knowledge</Link></li>
              <li><Link href="https://monarch.mitwebsolutions.com/career">Career</Link></li>
              <li><Link href="https://monarch.mitwebsolutions.com/support">Support</Link></li>
              <li><Link href="/become-partner">Become a Partner</Link></li>
            </ul>

            <div className="mt-4">
              <h3 className="text-[#957AE4] font-medium text-[11px] mb-4">Important Links</h3>
              <ul className="space-y-2 text-white text-[11px]">
                <li><a href="https://www.royalmonarch.in/">Royal Monarch</a></li>
                <li><a href="https://www.sebi.gov.in/">SEBI</a></li>
                <li><a href="https://www.bseindia.com/">BSE India</a></li>
                <li><a href="https://www.nseindia.com/">NSE India</a></li>
                <li><a href="https://scores.sebi.gov.in/">SCORES</a></li>
                <li><a href="https://www.amfiindia.com/">AMFI</a></li>
                <li><a href="https://www.camsonline.com/">CAMS</a></li>
                <li><a href="https://www.kfintech.com/">KFintech</a></li>
              </ul>
            </div>
          </div>

          {/* --- Column 3: Products + Policies & Security --- */}
          <div>
            <h3 className="text-[#957AE4] font-medium text-[11px] mb-4">Products</h3>
            <ul className="space-y-2 text-white text-[11px]">
              <li>Stocks</li>
              <li>Futures & Options</li>
              <li>Mutual Funds</li>
              <li>Currency</li>
              <li>IPO</li>
              <li>ETF</li>
              <li>Pay Later (MTF)</li>
              <li>Pledged Shares</li>
            </ul>

            <div className="mt-4">
              <h3 className="text-[#957AE4] font-medium text-[11px] mb-4">Policies & Security</h3>
              <ul className="space-y-2 text-white text-[11px]">
                  <li><Link href="/policy/term-of-service" >Terms of Service</Link></li>
                  <li><Link href="/policy/copyright">Copyright</Link></li>

                  <li><Link href="/policy/policy-security">Privacy Policy</Link></li>
             
                <li><Link href="/policy/term-condition">NDNCR Terms & Conditions</Link> </li>
              </ul>
            </div>
          </div>

          {/* --- Column 4: Our Platform --- */}
          <div>
            <h3 className="text-[#957AE4] font-medium text-[11px] mb-4">Our Platform</h3>
            <ul className="space-y-2 text-white text-[11px]">
                <li>
                    <a href={setting?.iosUrl ? setting.iosUrl : "#"} target="_blank" rel="noopener noreferrer">iOS App </a>
                </li>
                <li>
                    <a href={setting?.androidUrl ?setting.androidUrl :"#"} target="_blank" rel="noopener noreferrer">Android App </a>
                </li>
                <li>
                    <a href={setting?.webUrl ? setting.webUrl : "#"} target="_blank" rel="noopener noreferrer">Web Portal </a>
                </li>
            </ul>
          </div>

          {/* --- Column 5: Financial Calculator --- */}
          <div>
            <h3 className="text-[#957AE4] font-medium text-[11px] mb-4">Financial Calculator</h3>
            <ul className="space-y-2 text-white text-[11px]">
              <li><Link href="/#sip">SIP Calculator</Link></li>
              <li><Link href="/#lumpsum">Lumpsum Calculator</Link></li>
            </ul>
          </div>

        </div>

      
      </div>

        <div className="block md:hidden max-w-full mx-auto px-4 py-10">
            <div className="grid grid-cols-1 md:grid-cols-7  gap-10">

                {/* --- Column 1: Logos + Contact Info --- */}
                <div className=" flex flex-col space-y-4">
                    <div className="grid grid-cols-2 items-center pb-4 gap-6">
                        {settingM?.logo && (
                            <div className="flex justify-center border-r pr-5">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${settingM.logo}`}
                                    alt={settingM?.site_name || "Royal Monarch"}
                                    width={110}
                                    height={85}
                                    className="object-contain"
                                />
                            </div>
                        )}

                        {setting?.logo && (
                            <div className="flex justify-center">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${setting.logo}`}
                                    alt={setting?.site_name || "Ojus One"}
                                    width={174}
                                    height={85}
                                    className="object-contain"
                                />
                            </div>
                        )}
                    </div>

                    <div className="text-gray-400 text-[11px] leading-relaxed w-[230px]">
                        {setting?.address ||
                            "INS - 540, Urbtech Trade Center, Sector 132, Noida - 201304"}
                        <br />
                        <a href={`mailto:${setting?.email}`} className="mt-5"  >
                            {setting?.email || "contact@royalmonarchs.in"}
                        </a>{" "}
                        |
                        <a href={`tel:${setting?.phone}`}  >
                            {setting?.phone || "+91 98765 43210"}
                        </a>
                        <br>
                        </br>

                    </div>


                    <div className="flex space-x-6 mt-3">

                        {setting?.androidUrl && (
                            <a href={setting.androidUrl} target="_blank" rel="noopener noreferrer">
                                <Image src={android} alt="Android" width={113} height={35} />
                            </a>
                        )}
                        {setting?.iosUrl && (
                            <a href={setting.iosUrl} target="_blank" rel="noopener noreferrer">
                                <Image src={ios} alt="IOS" width={113} height={35} />
                            </a>
                        )}
                    </div>

                    <div className="flex  space-x-6 mt-3">
                        {setting?.instgram && (
                            <a href={setting.instgram} target="_blank" rel="noopener noreferrer">
                                <Image src={instgram} alt="Instagram" width={30} height={30} />
                            </a>
                        )}
                        {setting?.linkdi && (
                            <a href={setting.linkdi} target="_blank" rel="noopener noreferrer">
                                <Image src={linkedin} alt="LinkedIn" width={30} height={30} />
                            </a>
                        )}
                        {setting?.wp && (
                            <a href={setting.wp} target="_blank" rel="noopener noreferrer">
                                <Image src={whatsapp} alt="WhatsApp" width={30} height={30} />
                            </a>
                        )}
                        {setting?.twitter && (
                            <a href={setting.twitter} target="_blank" rel="noopener noreferrer">
                                <Image src={twitter} alt="Twitter" width={30} height={30} />
                            </a>
                        )}
                        {setting?.fb && (
                            <a href={setting.fb} target="_blank" rel="noopener noreferrer">
                                <Image src={facebook} alt="Facebook" width={30} height={30} />
                            </a>
                        )}
                        {setting?.youtube && (
                            <a href={setting.youtube} target="_blank" rel="noopener noreferrer">
                                <Image src={google} alt="YouTube" width={30} height={30} />
                            </a>
                        )}
                    </div>

                </div>



            </div>

        <div className="grid grid-cols-2 md:grid-cols-7 pt-10 gap-10">

                {/* --- Column 1: Logos + Contact Info --- */}


                {/* --- Column 2: Royal Monarch + Important Links --- */}
                <div>
                    <h3 className="text-[#957AE4] font-medium text-[11px] mb-4">Royal Monarch</h3>
                    <ul className="space-y-2 text-white text-[11px]">
                        <li><Link href="https://monarch.mitwebsolutions.com/about">About Us</Link></li>
                        <li><Link href="https://monarch.mitwebsolutions.com/about/culture">Our Culture</Link></li>
                        <li><Link href="https://monarch.mitwebsolutions.com/about/approach">Our Approach</Link></li>
                        <li><Link href="https://monarch.mitwebsolutions.com/about/team">Our Team</Link></li>
                        <li><Link href="#">Knowledge</Link></li>
                        <li><Link href="https://monarch.mitwebsolutions.com/career">Career</Link></li>
                        <li><Link href="https://monarch.mitwebsolutions.com/support">Support</Link></li>
                        <li><Link href="/become-partner">Become a Partner</Link></li>
                    </ul>

                    <div className="mt-4">
                        <h3 className="text-[#957AE4] font-medium text-[11px] mb-4">Important Links</h3>
                        <ul className="space-y-2 text-white text-[11px]">
                            <li><a href="https://www.royalmonarch.in/">Royal Monarch</a></li>
                            <li><a href="https://www.sebi.gov.in/">SEBI</a></li>
                            <li><a href="https://www.bseindia.com/">BSE India</a></li>
                            <li><a href="https://www.nseindia.com/">NSE India</a></li>
                            <li><a href="https://scores.sebi.gov.in/">SCORES</a></li>
                            <li><a href="https://www.amfiindia.com/">AMFI</a></li>
                            <li><a href="https://www.camsonline.com/">CAMS</a></li>
                            <li><a href="https://www.kfintech.com/">KFintech</a></li>
                        </ul>
                    </div>
                </div>

                {/* --- Column 3: Products + Policies & Security --- */}
                <div>
                    <h3 className="text-[#957AE4] font-medium text-[11px] mb-4">Products</h3>
                    <ul className="space-y-2 text-white text-[11px]">
                        <li>Stocks</li>
                        <li>Futures & Options</li>
                        <li>Mutual Funds</li>
                        <li>Currency</li>
                        <li>IPO</li>
                        <li>ETF</li>
                        <li>Pay Later (MTF)</li>
                        <li>Pledged Shares</li>
                    </ul>

                    <div className="mt-4">
                        <h3 className="text-[#957AE4] font-medium text-[11px] mb-4">Policies & Security</h3>
                        <ul className="space-y-2 text-white text-[11px]">
                            <li><Link href="/policy/term-of-service" >Terms of Service</Link></li>
                            <li><Link href="/policy/copyright">Copyright</Link></li>

                            <li><Link href="/policy/policy-security">Privacy Policy</Link></li>

                            <li><Link href="/policy/term-condition">NDNCR Terms & Conditions</Link> </li>
                        </ul>
                    </div>
                </div>

                {/* --- Column 4: Our Platform --- */}
                <div>
                    <h3 className="text-[#957AE4] font-medium text-[11px] mb-4">Our Platform</h3>
                    <ul className="space-y-2 text-white text-[11px]">
                        <li>
                            <a href={setting?.iosUrl ? setting.iosUrl : "#"} target="_blank" rel="noopener noreferrer">iOS App </a>
                       </li>
                        <li>
                            <a href={setting?.androidUrl ?setting.androidUrl :"#"} target="_blank" rel="noopener noreferrer">Android App </a>
                     </li>
                        <li>
                            <a href={setting?.webUrl ? setting.webUrl : "#"} target="_blank" rel="noopener noreferrer">Web Portal </a>
                        </li>
                    </ul>
                </div>

                {/* --- Column 5: Financial Calculator --- */}
                <div>
                    <h3 className="text-[#957AE4] font-medium text-[11px] mb-4">Financial Calculator</h3>
                    <ul className="space-y-2 text-white text-[11px]">
                        <li><Link href="/#sip">SIP Calculator</Link></li>
                        <li><Link href="/#lumpsum">Lumpsum Calculator</Link></li>
                    </ul>
                </div>

            </div>


        </div>
    </footer>
  );
}
