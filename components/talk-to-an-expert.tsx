"use client"

import { useState } from "react";
import { MultiStepFormModal } from "./multiStepForm/multi-step-form";
import Image from "next/image";
import whiteButtonImage from "../public/white button.png"
const TalkToExpert = () => {
      const [isOpen, setIsOpen] = useState(false)
    return (
        <div className=" text-left">
     


{/*  <button*/}
{/*  type="button"*/}
{/*  onClick={() => setIsOpen(true)}*/}
{/*  className="btn btn-lg p-0 border-0 bg-transparent cursor-pointer position-relative"*/}
{/*>*/}
{/* */}

{/*  <span className="relative flex items-center justify-center">*/}
{/*                <Image*/}
{/*                    src={whiteButtonImage}*/}
{/*                    alt="Get Started Button"*/}
{/*                    width={55}*/}
{/*                    height={55}*/}
{/*                    className="h-[55px] w-auto object-contain"*/}
{/*                />*/}

{/*                <span*/}
{/*                    className="absolute font-poppins mr-4 top-1/2 -translate-y-1/2*/}
{/*                             text-black text-[18px] font-medium whitespace-nowrap"*/}
{/*                >*/}
{/*                  Talk to an Expert*/}
{/*                </span>*/}
{/*              </span>*/}
{/*</button>*/}



            <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="relative p-0 border-0 bg-transparent cursor-pointer"
            >
              <span className="relative flex items-center justify-center">
                <Image
                    src={whiteButtonImage}
                    alt="Get Started Button"
                    width={55}
                    height={55}
                    className="h-[55px] w-auto object-contain"
                />

                <span
                    className="absolute font-poppins mr-4 top-1/2 -translate-y-1/2
                             text-black text-[18px] font-medium whitespace-nowrap"
                >
                  Talk to an Expert
                </span>
              </span>
            </button>

          <MultiStepFormModal open={isOpen} onOpenChange={setIsOpen} />
        </div>
    );
};

export default TalkToExpert;