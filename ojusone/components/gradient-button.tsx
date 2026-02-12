// import React from "react"
// import { cn } from "@/lib/utils"
// import "./button.css"
// import button from "../public/button.png"

// interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   children: React.ReactNode
// }

// export const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
//   ({ className, children, ...props }, ref) => (
//     <button
//       style={{
//         width: "139px",
//         height: "50px",
//         borderRadius: "10px",
//         borderBottomRightRadius: "35px",
//         border: "1px solid #000",
//         position: "relative",
//         clipPath: "polygon(0% 0%, 100% 0%, 84% 100%, 0% 100%)",
//         // backgroundImage: `url(${button})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//       ref={ref}
//       className={cn(
//         "relative overflow-hidden cursor-pointer px-12 !rounded-tr-2xl !rounded-br-3xl py-2 font-semibold text-white text-lg transition-all duration-300 ease-out",
//         className
//       )}
//       {...props}
//     >
//       <span className="relative z-10 tracking-wide">{children}</span>
//       {/* Shine effect overlay */}
//       <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
//     </button>
//   ),
// )

// GradientButton.displayName = "GradientButton"

// import React from "react"
// import { cn } from "@/lib/utils"
// import "./button.css"
// import buttonImage from "../public/get started button.svg"
// interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   children: React.ReactNode
// }

// export const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
//   ({ className, children, ...props }, ref) => (
//  <div className="flex justify-content-center mt-4 me-2 sm:me-3 xl:me-5" >
//     <button 
//         type="button" 
//         className="relative flex items-center justify-center h-[55px] px-8 text-white bg-cover bg-no-repeat bg-center"
//         style={{ backgroundImage: `url(${buttonImage})` }}
//     >
//         <span className="relative z-10 text-white font-medium">
//             Get Started
//         </span>
//     </button>
// </div>

//   ),
// )

// GradientButton.displayName = "GradientButton"


import React from "react"
import { cn } from "@/lib/utils"
import buttonImage from "../public/get started button.svg"
import Image from "next/image"

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, children, ...props }, ref) => (



      <a
          href="https://login.ojusone.com/Home/Login"
          target="_blank"
          className="relative inline-block w-[130px] h-[42px]"
      >
          <Image
              src={buttonImage}
              alt="Get Started Button"
              className="w-full h-full object-contain"
              width={130}
              height={42}
          />
          <span className="absolute inset-0 flex justify-center font-poppins items-center  text-white text-[18px] font-semibold">
    {children}
  </span>
      </a>



  ),
)

GradientButton.displayName = "GradientButton"