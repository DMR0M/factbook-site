/* eslint-disable react/prop-types */
import CATEGORIES from "./data/categoryList";

const CategoryFilter = ({ setCurrentCategory }) => {
  return (
    <aside>
      <ul>
        <li className="category">
          <button
            className="btn btn-all-categories"
            onClick={() => setCurrentCategory("all")}
          >
            All
          </button>
        </li>

        {CATEGORIES.map((cat) => {
          return (
            <>
              <li key={cat.name} className="category">
                <button
                  className="btn btn-category"
                  style={{ backgroundColor: cat.color }}
                  onClick={() => setCurrentCategory(cat.name)}
                >
                  {cat.name}
                </button>
              </li>
            </>
          );
        })}
      </ul>
    </aside>
  );
};

export default CategoryFilter;
