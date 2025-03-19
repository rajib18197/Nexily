export async function getFAQData() {
  try {
    // Use relative URL for API calls from server components
    const response = await fetch("http://localhost:3000/api/faqs", {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch FAQ data");
    }
    const data = await response.json();
    console.log(data, 1212);
    return data;
  } catch (error) {
    console.error("Error fetching FAQ data:", error);

    // Return default data if fetch fails
    // return [
    //   {
    //     id: 1,
    //     question: "Do You Ship to countries Outside the Asia?",
    //     answer:
    //       "Yes, we do ship to countries outside Asia. Shipping costs and delivery times vary based on location.",
    //   },
    //   {
    //     id: 2,
    //     question: "Do You Ship to countries Outside the Asia?",
    //     answer:
    //       "Yes, we do ship to countries outside Asia. Shipping costs and delivery times vary based on location.",
    //   },
    //   {
    //     id: 3,
    //     question: "Do You Ship to countries Outside the Asia?",
    //     answer:
    //       "Yes, we do ship to countries outside Asia. Shipping costs and delivery times vary based on location.",
    //   },
    //   {
    //     id: 4,
    //     question: "Do You Ship to countries Outside the Asia?",
    //     answer:
    //       "Yes, we do ship to countries outside Asia. Shipping costs and delivery times vary based on location.",
    //   },
    //   // Add more questions here
    // ];
  }
}
