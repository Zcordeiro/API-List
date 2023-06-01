"use client";

import { useParams } from "next/navigation";
import ApiCard from "@/components/ApiCard";

const singleCategory = async () => {
  const params = useParams();
  const categoryName = decodeURIComponent(
    params.categoryName.replace(/-/g, " ")
  );
  const res = await fetch("https://api.publicapis.org/entries");
  const data = await res.json();

  const apiList = data.entries;
  const displayList = apiList.filter((api) => api.Category === categoryName);

  return (
    <>
      <div>
        <h2 className="text-5xl font-bold text-blue-900 text-center mt-16 mb-4 underline">
          {categoryName}
        </h2>
        <div className="flex flex-wrap align-center justify-evenly">
          {displayList.map((api) => (
            <div className="m-3" key={api.API}>
              <ApiCard
                apiName={api.API}
                apiDescription={api.Description}
                apiAuth={api.Auth}
                apiHttps={api.HTTPS}
                apiCors={api.Cors}
                apiLink={api.Link}
                apiCategory={api.Category}
              />
          </div>
          ))}
          </div>
      </div>
    </>
  );
};

export default singleCategory;
