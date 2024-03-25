import React, {useState} from 'react';

export const FilterPane = ({products}) => {
    // Get unique categories and brands from the products
    const uniqueCategories = [...new Set(products.map(product => product.category))];
    const uniqueBrands = [...new Set(products.map(product => product.brand))];

    const priceRange = [0, 2_00_000];

    const [filteredRange, setFilteredRange] = useState([0, priceRange[1]/2])

    const handlePriceRangeChange = (event) => {
      const value = parseInt(event.target.value);
      console.log('Selected value:', value);
      setFilteredRange([0, value]);
    };
        

    return (
      <>
        <ul className="my-4 list-group">
            <li className="list-group-item">
                <label className="form-check-label heading-label ">Category</label>
                {uniqueCategories.map(category => (
                    <div key={category} className="form-check my-3">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id={`category-${category}`}
                            value={category}/>
                        <label className="form-check-label" htmlFor={`category-${category}`}>{category}</label>
                    </div>
                ))}
            </li>
            <li className="list-group-item">
                <label className="form-check-label heading-label">Brand</label>
                {uniqueBrands.map(brand => (
                    <div key={brand} className="form-check my-3">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id={`brand-${brand}`}
                            value={brand}/>
                        <label className="form-check-label" htmlFor={`brand-${brand}`}>{brand}</label>
                    </div>
                ))}
            </li>
            <li className="list-group-item">
                <label htmlFor="customRange3" className="form-label my-2 ">
                    Price
                </label>
                <p className='form-range-value'>Upto <strong>&#8377;{filteredRange[1]}</strong>
                </p>
                <input
                  type="range"
                  className="form-range mt-3"
                  min={priceRange[0]}
                  max={priceRange[1]}
                  step="1000"
                  id="customRange3"
                  value={filteredRange[1]} // Change this to represent the correct value in the range
                  onChange={handlePriceRangeChange}
                />
                <div className="d-flex justify-content-between">
                    <span className='form-range-value'>&#8377;{priceRange[0]}</span>
                    <span className='form-range-value'>&#8377;{priceRange[1]}</span>
                </div>
            </li>
        </ul>
    </>
    );
};
