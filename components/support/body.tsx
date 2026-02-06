"use client";

import React, { useState } from "react";
import supportImg from "../../public/Support-Video.gif"
import Image from "next/image";
import { useToast } from "@/components/ui/use-toast";
import './video.css'
import SignUpCard from "./sign-up";


export default function SupportBody() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    })
    const { toast } = useToast();
    const [loading, setLoading] = useState(false);
    const [successMsg, setSuccessMsg] = useState("");
    const [errorMsg, setErrorMsg] = useState("");


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
            const response = await fetch(`${API_BASE_URL}/support-request`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(formData),
            })

            const data = await response.json()

            if (response.ok) {
                // toast({
                //   title: "✅ Success!",
                //   description: "Thank you for reaching out! Your message has been \n" +
                //       "received, and our support team will get back to you shortly.",
                //   duration: 3000,
                // });
                setSuccessMsg(
                    "Thank you for reaching out! Your message has been \n" +
                    "received, and our support team will get back to you shortly."
                );



                // Reset form
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                })
            } else {
                // Handle Laravel validation errors
                if (data.errors) {
                    toast({
                        title: "❌ Error",
                        description:  "Something went wrong.",
                        variant: "destructive",
                        duration: 3000,
                    });
                } else {
                    toast({
                        title: "❌ Error",
                        description:  "Something went wrong.",
                        variant: "destructive",
                        duration: 3000,
                    });
                }

            }
        } catch (error) {

            alert("Network error. Please try again.")
        }
    }

    return (
        <section className="relative w-full font-poppins bg-black text-white py-8 lg:py-20 px-6 overflow-hidden ">
            <div className="max-w-7xl mx-auto flex flex-col gap-20">
                {/* ---------------- First Row ---------------- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start lg:items-center">
                    {/* Left Section */}
                    {/* Left Section */}
                    <div className="flex flex-col space-y-6 text-center lg:text-left items-center lg:items-start">

                        {/* Title */}
                        <h2
                            style={{

                                fontWeight: 600,

                                color: "#FFFFFF",
                                lineHeight: "1.2",
                            }}
                            className="text-xl  md:text-[48px]"
                        >
                            Not sure where to start  <br />  with Mutual Fund?
                        </h2>

                        {/* Subtitle */}
                        <p
                            style={{

                                fontWeight: 400,

                                color: "#957AE4",
                            }}
                            className="text-md  hidden lg:flex md:text-[36px]"
                        >
                            We’re here to help!
                        </p>

                        {/* Tri-Color Border Wrapper for GIF */}
                        <div
                            className="inline-block p-[2px] rounded-xl"
                            style={{
                                background: "linear-gradient(90deg, #00C6FF, #7B2FF7, #FF5F6D)",
                            }}
                        >
                            <div className="bg-black rounded-xl overflow-hidden flex justify-center">
                                <img
                                    src="/Support-Video.gif"
                                    alt="Support GIF"
                                    className="block w-full h-auto  md:w-[390px]
    md:h-[355px] object-cover rounded-lg"
                                />
                            </div>
                        </div>



                        {/* Content */}
                        <p
                            style={{
                                fontFamily: "Poppins",
                                fontWeight: 400,

                                color: "#FFFFFF",

                                lineHeight: "1.6",
                            }}
                            className="text-sm md:text-[18px] "
                        >
                            We have a team of experts available to answer your questions. We’ll assign a financial wizard to learn about your goals and aspirations. Ojus One can manage your domains entirely — think of it as your own personal finance consultation
                        </p>
                    </div>


                    {/* Right Section — Form */}
                    <div >


                        <SignUpCard formData={formData} onChange={handleChange} successMsg={successMsg} onSubmit={handleSubmit} />
                        {successMsg && (
                            <p className="text-[#957AE4] text-sm mt-4 text-center" style={{ whiteSpace: 'pre-line' }}>
                                {successMsg}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
