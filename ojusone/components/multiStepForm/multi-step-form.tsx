"use client";

import { useEffect, useState, useRef } from "react";
import { fetchApi } from "@/lib/api";
import Link from "next/link";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { Shield, Loader2 } from "lucide-react";
import Image from "next/image";
import profile from "../../public/profile.png";
import profile1 from "../../public/profile1.png";
import profile2 from "../../public/profile2.png";

const goals = [
    "Emergency Fund",
    "College or Private School",
    "Paying off Debt",
    "New Car",
    "Marriage",
    "Vacation",
    "Family Support",
    "Charity",
    "Buying a Home",
    "Becoming an entrepreneur",
    "Savings for Retirement",
    "Something Out of the Box",
];

interface MultiStepFormModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function MultiStepFormModal({ open, onOpenChange }: MultiStepFormModalProps) {
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const modalContentRef = useRef<HTMLDivElement>(null);
    const { toast } = useToast();

    const [formData, setFormData] = useState({
        fullName: "",
        phoneNumber: "",
        email: "",
        selectedGoals: [] as string[],
    });

    const totalSteps = 3;
    /* ---------- AUTO SCROLL ON INPUT FOCUS ---------- */
    const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        setTimeout(() => {
            const input = e.target;
            const modalContent = modalContentRef.current;

            if (modalContent && input) {
                const inputRect = input.getBoundingClientRect();
                const modalRect = modalContent.getBoundingClientRect();
                const scrollTop = inputRect.top - modalRect.top - 20;

                modalContent.scrollTo({
                    top: modalContent.scrollTop + scrollTop,
                    behavior: 'smooth'
                });
            }
        }, 100);
    };
    /* ---------- BODY SCROLL LOCK (iOS FIX) ---------- */
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    useEffect(() => {
        async function getSettings() {
            const res = await fetchApi("setting");
            if (res?.data) {
                // no design impact
            }
        }
        getSettings();
    }, []);

    const isStepValid = () => {
        switch (currentStep) {
            case 1:
                return formData.fullName.trim() !== "";
            case 2:
                return (
                    formData.phoneNumber.trim() !== "" &&
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
                );
            case 3:
                return formData.selectedGoals.length > 0;
            default:
                return false;
        }
    };

    /* ---------- FIXED NEXT HANDLER (NO SCROLL ON EMPTY) ---------- */
    const handleNext = () => {
        if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur(); // iOS keyboard + scroll fix
        }

        if (!isStepValid()) return;

        currentStep < totalSteps && setCurrentStep(currentStep + 1);
    };

    const handlePrevious = () =>
        currentStep > 1 && setCurrentStep(currentStep - 1);

    const handleGoalToggle = (goal: string) => {
        setFormData((prev) => ({
            ...prev,
            selectedGoals: prev.selectedGoals.includes(goal)
                ? prev.selectedGoals.filter((g) => g !== goal)
                : [...prev.selectedGoals, goal],
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const API_BASE_URL =
                process.env.NEXT_PUBLIC_API_BASE_URL;

            const res = await fetch(`${API_BASE_URL}/lead-generation`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setIsSubmitted(true);
                setFormData({
                    fullName: "",
                    phoneNumber: "",
                    email: "",
                    selectedGoals: [],
                });
            } else {
                toast({
                    title: "❌ Error",
                    description: "Something went wrong.",
                    variant: "destructive",
                });
            }
        } catch {
            toast({
                title: "⚠️ Submission Failed",
                description: "Network or server error.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        if (!open) {
            setIsSubmitted(false);
            setCurrentStep(1);
            setIsSubmitting(false);
            setFormData({
                fullName: "",
                phoneNumber: "",
                email: "",
                selectedGoals: [],
            });
        }
    }, [open]);

    return (
        <>
            <Dialog open={open} onOpenChange={onOpenChange}>
                {open && <div className="fixed mt-[35px] inset-0 bg-black/80 backdrop-blur-sm z-[45]" />}



                    <DialogContent ref={modalContentRef} className=" !max-w-[95%] sm:!max-w-[600px] lg:!max-w-[900px] h-[90vh] md:h-auto max-h-[90vh] overflow-y-auto p-0 bg-zinc-950 border-zinc-800 gap-0">
                    <DialogTitle className="sr-only">
                        Investment Expert Consultation Form
                    </DialogTitle>
                    {isSubmitted ? (
                        <div className="p-6 bg-zinc-900 rounded-lg font-poppins border border-gray-700 text-white space-y-4 text-center">
                            <p className="font-semibold font-poppins text-lg">
                                Thank you for taking the first step toward your financial goals!
                            </p>
                            <p>
                                Your details have been received, and our team will be in touch shortly to learn more about your goals.
                            </p>
                            <p className="font-semibold font-poppins">
                                We're excited to help you start your investment journey.
                            </p>
                        </div>
                    ) : (
                        <>
                            <div className="flex flex-col lg:flex-row h-full">
                                {/* Left Sidebar */}

                                {currentStep === 1 && (
                                    <div className="hidden lg:flex lg:w-1/2 bg-black p-8 flex-col font-poppins  border-r border-zinc-800">
                                        <div className="flex-1 overflow-y-auto">
                                            <div className="flex items-center gap-3 mb-8">
                                                <div className="w-10 h-10 rounded-full overflow-hidden bg-zinc-800">
                                                    <Image src={profile} alt="Profile" width={40} height={40} className="w-full h-full object-cover" />
                                                </div>
                                                <p className="text-zinc-400 text-sm">Investment Expert</p>
                                            </div>
                                            <h1 className="text-white text-3xl font-bold mb-4 leading-snug">
                                                Your expert guide for investments
                                            </h1>
                                            <p className="text-zinc-400 text-sm mb-6 font-poppins leading-relaxed">
                                                Anywhere you are in the world, we can help you plan your investment journey efficiently.
                                            </p>
                                            <div className="space-y-4">

                                                <div className="relative rounded-xl overflow-hidden bg-zinc-900 aspect-video max-w-sm border border-gray-500">
                                                    <img
                                                        src="/multi.png"
                                                        title="Investment Expert Video"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                )}

                                {currentStep === 2 && (
                                    <div className="hidden lg:flex lg:w-1/2 bg-black p-8 font-poppins flex-col border-r border-zinc-800">
                                        <div className="flex-1 overflow-y-auto">
                                            <div className="flex items-center gap-3 mb-8">
                                                <div className="w-10 h-10 rounded-full overflow-hidden bg-zinc-800">
                                                    <Image src={profile1} alt="Profile" width={40} height={40} className="w-full h-full object-cover" />
                                                </div>

                                            </div>
                                            <h1 className="text-white font-poppins   mb-4 leading-snug">
                                                <p className="text-white text-md font-bold">1:1 with an  expert</p>
                                                <p className="text-zinc-400 text-sm font-poppins" >Free • No sales pitch • No commitment call </p>
                                            </h1>
                                            <p className="text-zinc-400 text-sm font-poppins mb-6 leading-relaxed">
                                                Don’t leave your future to chance, discover how Ojus One protects and
                                                grows your wealth.
                                            </p>
                                            <div className="space-y-4">

                                                <div className="relative rounded-xl overflow-hidden bg-zinc-900 aspect-video max-w-sm border border-gray-500">
                                                    <img
                                                        src="/1-1.png"
                                                        title="Investment Expert Video"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                )}
                                {currentStep === 3 && (
                                    <div className="hidden lg:flex lg:w-1/2 bg-black font-poppins p-8 flex-col border-r border-zinc-800">
                                        <div className="flex-1 overflow-y-auto">
                                            <div className="flex items-center gap-3 mb-8">
                                                <div className="w-10 h-10 rounded-full overflow-hidden bg-zinc-800">
                                                    <Image src={profile2} alt="Profile" width={40} height={40} className="w-full h-full object-cover" />
                                                </div>

                                            </div>
                                            <h1 className="text-white   mb-4 leading-snug">

                                                <p className="text-zinc-400 font-poppins text-sm" >"Until this call, I didn`t know that majority of my funds were  under performing benchmark." </p>
                                            </h1>
                                            <p className="text-zinc-400 font-poppins text-sm mb-6 leading-relaxed">
                                                -Karthik S. N. Microsoft –
                                                Bengaluru
                                            </p>

                                        </div>
                                    </div>
                                )}

                                {/* Right Form Section */}
                                <div className="flex-1 bg-black p-6 sm:p-8 mt-5 overflow-y-auto max-h-[90vh]">
                                    <div className="max-w-xl mx-auto space-y-6">
                                        {/* Step Progress */}

                                        {/* WhatsApp Floating Button at Top-Right */}




                                        <a
                                            href="https://wa.me/919737037374"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hidden font-poppins lg:flex fixed top-10 right-10 items-center gap-2 px-4 py-2 rounded-full font-semibold bg-[#1d1e1d] text-white shadow-lg hover:bg-[#20BD5A] hover:shadow-xl transition-all duration-300 hover:scale-105 z-50"

                                        >
                                            <img
                                                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                                                alt="WhatsApp"
                                                className="h-5 font-poppins w-5"
                                            />
                                            Help
                                        </a>



                                        <div className="mb-8 mt-8 font-poppins ">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-[#fff] text-sm font-medium">Step {currentStep} of {totalSteps}</span>
                                                <span className="text-white text-sm">{Math.round((currentStep/totalSteps)*100)}%</span>
                                            </div>
                                            <div>

                                            </div>
                                            <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                                                <div className="h-full bg-[#957AE4] transition-all duration-300" style={{width:`${(currentStep/totalSteps)*100}%`}} />
                                            </div>

                                        </div>

                                        {/* Form Steps */}
                                        {currentStep === 1 && (
                                            <div className="space-y-4 font-poppins ">
                                                <Label htmlFor="fullName">Your Full Name</Label>
                                                <Input
                                                    id="fullName"
                                                    placeholder="Enter your full name"
                                                    value={formData.fullName}
                                                    onChange={(e) => setFormData({...formData, fullName:e.target.value})}
                                                    onFocus={handleInputFocus}
                                                    className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-600 h-12 rounded-lg focus:border-emerald-400 focus:ring-emerald-400"
                                                />
                                            </div>
                                        )}

                                        {currentStep === 2 && (
                                            <div className="space-y-4 font-poppins">
                                                <Label htmlFor="phoneNumber">Phone Number</Label>
                                                <Input
                                                    id="phoneNumber"
                                                    type="tel"
                                                    placeholder="+1 (555) 000-0000"
                                                    value={formData.phoneNumber}
                                                    onChange={(e) => setFormData({...formData, phoneNumber:e.target.value})}
                                                    onFocus={handleInputFocus}
                                                    className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-600 h-12 rounded-lg focus:border-emerald-400 focus:ring-emerald-400"
                                                />
                                                <Label htmlFor="email">Email Address</Label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    placeholder="you@example.com"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({...formData, email:e.target.value})}
                                                    onFocus={handleInputFocus}
                                                    className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-600 h-12 rounded-lg focus:border-emerald-400 focus:ring-emerald-400"
                                                />
                                            </div>
                                        )}

                                        {currentStep === 3 && (
                                            <div className="space-y-4 font-poppins">
                                                <Label>Investment Goals</Label>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                    {goals.map(goal => (
                                                        <div
                                                            key={goal}
                                                            className={`flex items-start space-x-3 p-3 rounded-lg border cursor-pointer ${
                                                                formData.selectedGoals.includes(goal)
                                                                    ? "border-emerald-400 bg-emerald-400/10"
                                                                    : "border-zinc-800 bg-zinc-900/50"
                                                            }`}
                                                            onClick={() => handleGoalToggle(goal)}
                                                        >
                                                            <Checkbox
                                                                id={goal}
                                                                checked={formData.selectedGoals.includes(goal)}
                                                                onCheckedChange={() => handleGoalToggle(goal)}
                                                                className="mt-0.5 border-zinc-700 data-[state=checked]:bg-emerald-400 data-[state=checked]:border-emerald-400"
                                                            />
                                                            <Label htmlFor={goal} className="text-white cursor-pointer">{goal}</Label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                        {currentStep === 2 && (
                                            <div className="flex items-start gap-2 pt-1 ">
                                                <Shield className="w-4 h-4 text-zinc-500 mt-0.5"/>
                                                <p className="text-zinc-500 font-poppins text-xs">By proceeding,you give constent to receive communication on WhatsApp and agree to out <Link href="/policy/term-of-service" className="underline text-blue-500 hover:text-blue-700"
                                                                                                                                                                                              target="_blank" rel="noopener noreferrer" >Terms </Link> and <Link target="_blank" rel="noopener noreferrer" className="underline text-blue-500 hover:text-blue-700"
                                                                                                                                                                                                                                                                 href="/policy/policy-security">Privacy Policy</Link> </p>
                                            </div>
                                        )}
                                        {/* Navigation */}
                                        <div className="flex gap-3 pt-4 font-poppins ">
                                            {currentStep > 1 && (
                                                <Button onClick={handlePrevious} variant="outline" className="flex-1 bg-transparent h-12 text-white border-zinc-700">← Previous</Button>
                                            )}
                                            {currentStep < totalSteps ? (
                                                <Button onClick={handleNext} disabled={!isStepValid()} className="flex-1 h-12 bg-[#957AE4] text-[#fff] disabled:opacity-100 font-poppins disabled:cursor-not-allowed">Next →</Button>
                                            ) : (
                                                <Button onClick={handleSubmit} disabled={!isStepValid() || isSubmitting} className="flex-1 h-12 bg-[#957AE4] font-poppins text-[#fff] disabled:opacity-100 disabled:cursor-not-allowed">
                                                    {isSubmitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin"/>Submitting...</> : "Submit"}
                                                </Button>
                                            )}
                                        </div>

                                        {/* Privacy Notice */}

                                        <div className="flex items-start gap-2 pt-4 border-t font-poppins border-zinc-800">
                                            <Shield className="w-4 h-4 text-zinc-500 mt-0.5"/>
                                            <p className="text-zinc-500 text-xs">Your data is fully encrypted and only you have access. </p>
                                        </div>




                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </DialogContent>
            </Dialog>


        </>
    );
}