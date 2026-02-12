"use client";

import { useEffect } from "react";
import { fetchApi } from "@/lib/api";

export default function PixelLoader() {

    useEffect(() => {
        async function loadPixels() {
            const res = await fetchApi("setting");
            if (!res?.data) return;

            /* -------- GOOGLE PIXEL -------- */
            if (res.data.google_pixle) {
                const googleScript = document.createElement("script");

                // Remove `{` and `}` wrapper if exists
                googleScript.innerHTML = res.data.google_pixle
                    .replace(/^\{\s*`/, "")
                    .replace(/`\s*\}$/, "");

                document.head.appendChild(googleScript);
            }

            /* -------- FACEBOOK PIXEL -------- */
            if (res.data.facebook_pixle) {
                const fbScript = document.createElement("script");

                fbScript.innerHTML = res.data.facebook_pixle
                    .replace(/^\{\s*`/, "")
                    .replace(/`\s*\}$/, "");

                document.head.appendChild(fbScript);
            }
        }

        loadPixels();
    }, []);

    return null;
}
