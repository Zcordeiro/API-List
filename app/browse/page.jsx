
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
      {uniqueCategories.map((category) => (
        <div key={category}>
          <h2 className="text-5xl font-bold text-blue-900 text-center mt-16 mb-4 underline">
            <a href={`/categories/${category}`}>
              {category}
            </a>
          </h2>
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

      <a href="#top" className="fixed bottom-0 right-0 m-4 text-center">
      <svg viewBox="0 0 32 32" class="icon icon-arrow-top" aria-hidden="true"><path d="M17.504 26.025l.001-14.287 6.366 6.367L26 15.979 15.997 5.975 6 15.971 8.129 18.1l6.366-6.368v14.291z"/></svg>
        Back To Top
      </a>

    </>
  );
};

export default browse;
