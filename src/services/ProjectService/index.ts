import envConfig from "@/config/envConfig";



export const getAllProjects = async () => {
  const response = await fetch(`${envConfig.baseApi}/posts`,
    {
      cache: "no-store",
    }
  );
  const data = await response.json();

  return {
    data,
    revalidate: 10, // Optional: ISR - Revalidate every 10 seconds
  };
};