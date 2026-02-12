"use client";

import { useEffect, useState, useRef } from "react";

export default function Slider() {
    const [logos, setLogos] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const sliderRef = useRef<HTMLDivElement>(null);
    const [sliderWidth, setSliderWidth] = useState(0);

    useEffect(() => {
        const fetchLogos = async () => {
            try {
                const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
                const imageBaseUrl = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;

                if (!baseUrl || !imageBaseUrl) {
                    throw new Error("Missing environment variables");
                }

                const res = await fetch(`${baseUrl}/company-logo`, {
                    cache: "no-store",
                });

                if (!res.ok) throw new Error(`HTTP ${res.status}`);

                const json = await res.json();

                if (!Array.isArray(json.data)) {
                    throw new Error("API response 'data' is not an array");
                }

                const validLogos = json.data
                    .map((item: any) => item?.image && `${imageBaseUrl}${item.image}`)
                    .filter(Boolean) as string[];

                if (validLogos.length === 0) {
                    throw new Error("No logos found");
                }

                setLogos(validLogos);
            } catch (err: any) {
                console.error("Failed to load logos:", err);
                setError(err.message || "Failed to load partner logos");
            } finally {
                setLoading(false);
            }
        };

        fetchLogos();
    }, []);

    // Duplicate logos for infinite scroll
    const duplicatedLogos = [...logos, ...logos];

    // Smooth speed based on logo count
    const scrollDuration = Math.max(15, logos.length * 0.6);

    // Update slider width after render
    useEffect(() => {
        if (sliderRef.current) {
            setSliderWidth(sliderRef.current.scrollWidth / 2);
        }
    }, [logos]);

    if (loading) {
        return (
            <section className="flex justify-center items-center py-16 text-gray-400">
                Loading partner logos...
            </section>
        );
    }

    if (error) {
        return (
            <section className="flex justify-center items-center py-16 text-red-500">
                Error loading logos. Please try again later.
            </section>
        );
    }

    if (logos.length === 0) {
        return (
            <section className="flex justify-center items-center py-16 text-gray-400">
                No logos available.
            </section>
        );
    }

    return (
        <section className="w-full bg-white font-poppins mb-[100px] md:mb-[140px]">
            <div className="relative w-full px-4 overflow-hidden py-20">
                {/* Heading */} <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-[36px] font-semibold text-black mb-2"> 40+ AMCs to choose from </h2>
                <p className="text-black/70 text-sm sm:text-base md:text-[18px]"> All the leading AMCs in one place </p>
                </div>

                {/* Animation */}
                <style
                    dangerouslySetInnerHTML={{
                        __html: `
              @keyframes scrollLogosRTL {
                from { transform: translateX(0); }
                to { transform: translateX(-${sliderWidth}px); }
              }
            `,
                    }}
                />

                {/* Slider */}
                <div
                    ref={sliderRef}
                    className="flex gap-6 whitespace-nowrap items-center"
                    style={{
                        animation: `scrollLogosRTL ${scrollDuration}s linear infinite`,
                        willChange: "transform",
                    }}
                    onMouseEnter={(e) =>
                        (e.currentTarget.style.animationPlayState = "paused")
                    }
                    onMouseLeave={(e) =>
                        (e.currentTarget.style.animationPlayState = "running")
                    }
                >
                    {duplicatedLogos.map((logo, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 flex items-center justify-center"
                        >
                            <img
                                src={logo}
                                alt={`Company logo ${index + 1}`}
                                className="h-[90px] w-[220px] object-contain"
                                loading="lazy"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.style.opacity = "0.4";
                                    target.style.filter = "grayscale(1)";
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
