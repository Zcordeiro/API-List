import ApiCard from "@/components/ApiCard";

const browse = async () => {
  const res = await fetch("https://api.publicapis.org/entries");
  const data = await res.json();
  const apiList = data.entries;
  const categoriesList = data.entries.map((entry) => {
    return entry.Category;
  });

  const uniqueCategories = [...new Set(categoriesList)];

  return (
    <>
    <div>
      <h1 className="text-center text-6xl font-bold italic underline text-blue-900 m-3">
        All Api's By Category
      </h1>
    </div>

    {uniqueCategories.map((category) => (
      <div key={category}>
        <h2 className="text-5xl font-bold text-blue-900 text-center mt-16 mb-4 underline">{category}</h2>
        <div className="flex flex-wrap align-center justify-evenly">
          {apiList
            .filter((api) => api.Category === category)
            .map((api) => (
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
    ))}
  </>
  );
};

export default browse;
