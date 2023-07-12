const CategoryCard = ({ name }) => {
    return (
      <div className="mt-10">
        <div className="categoryCard hover:cursor-pointer text-center">
          <header className="categoryCard-header">
            <span className="title">{name}</span>
          </header>
          <div className="text-center text-slate-300 italic text-sm">See Available API's</div>
        </div>
      </div>
    );
  };
  
  export default CategoryCard;