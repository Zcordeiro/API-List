import CategoryCard from "@/components/CategoryCard";

const categories = async () => {
  const res = await fetch("https://api.publicapis.org/entries");
  const data = await res.json();
  const categoriesList = data.entries.map((entry) => {
    return entry.Category;
  });

  const uniqueCategories = [...new Set(categoriesList)];
  return (
    <>
      <div>
        
        <div className="flex flex-wrap align-center justify-evenly">
          {uniqueCategories.map((category) => {
            const categoryName = category.replace(/\s+/g, "-");
            return (
              <div className="m-2">
                <a href={`/categories/${categoryName}`}>
                <CategoryCard name={category} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default categories;
