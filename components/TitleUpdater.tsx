"use client";

import { useEffect } from "react";
import { fetchApi } from "@/lib/api";

export default function TitleUpdater() {
  useEffect(() => {
    async function loadSettings() {
      const res = await fetchApi("setting");

      if (res?.data) {
        // Set the page title
        if (res.data.site_name) {
          document.title = res.data.site_name;
        }

        // Set favicon
        if (res.data.favicon) {
          let link: HTMLLinkElement | null = document.querySelector("link[rel*='icon']");
          
          if (!link) {
            link = document.createElement("link");
            link.rel = "icon";
            document.head.appendChild(link);
          }
        
          // Construct full URL using environment variable
          link.href = `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${res.data.favicon}`;
        }
        
      }
    }

    loadSettings();
  }, []);

  return null; // This component has no visible UI
}
