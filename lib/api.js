export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function fetchApi(endpoint, options = {}) {
  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("API Fetch Error:", error);
    return { success: false, message: "Failed to fetch data" };
  }
}
