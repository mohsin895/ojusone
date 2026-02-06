import Image from "next/image";
import RevenueSharing from "../../public/icons/revenue-sharing.png";
import ReferralIncentive from "../../public/icons/Referral-Incentive.png";

export default function FeaturesSection() {
  return (
    <section className=" font-poppins w-[90%] max-w-7xl mx-auto mb-[100px] md:mb-[140px]">

      {/* TITLE */}
      <h1
        className="text-[25px] md:text-[50px] font-semibold ojus-white-color text-center mb-8 md:mb-14"

      >
        Ways to earn with us
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Revenue Sharing Card */}
        <div className="flex flex-col items-start space-y-4">
          <div className="w-12 h-12">
            <Image
              src={RevenueSharing}
              alt="Revenue Sharing"
              width={48}
              height={48}
            />
          </div>

          <h3
            className="text-[18px] font-medium ojus-white-color"
           
          >
            Revenue Sharing
          </h3>

          <p
            className="text-[16px] ojus-content-color leading-relaxed"
            
          >
            Get a share of the revenue from each client you brought in.
          </p>
        </div>

        {/* Referral Incentive Card */}
        <div className="flex flex-col items-start space-y-4">
          <div className="w-12 h-12">
            <Image
              src={ReferralIncentive}
              alt="Referral Incentive"
              width={48}
              height={48}
            />
          </div>

          <h3
            className="text-[18px] font-medium ojus-white-color"
           
          >
            Referral Incentive
          </h3>

          <p
            className="text-[16px] ojus-content-color font-normal leading-relaxed"
           
          >
            Earn incentives through referrals, the more you refer the more you earn.
          </p>
        </div>
      </div>
    </section>
  );
}
