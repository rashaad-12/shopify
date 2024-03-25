import React from 'react';

export const SortPane = () => {
    return (
        <ul className="my-4 list-group">
            <li className="list-group-item">
                <div className="form-check mb-2 py-2 fs-5">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="sortType"
                        id="sort-az"/>
                    <label className="form-check-label" htmlFor="sort-az">
                        Sort (A - Z)
                    </label>
                </div>
                <div className="form-check mb-2 py-2 fs-5">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="sortType"
                        id="sort-za"/>
                    <label className="form-check-label" htmlFor="sort-za">
                        Sort (Z - A)
                    </label>
                </div>
                <div className="form-check mb-2 py-2 fs-5">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="sortType"
                        id="lowest-price"/>
                    <label className="form-check-label" htmlFor="lowest-price">
                        Lowest Price
                    </label>
                </div>
                <div className="form-check mb-2 py-2 fs-5">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="sortType"
                        id="highest-price"/>
                    <label className="form-check-label" htmlFor="highest-price">
                        Highest Price
                    </label>
                </div>

                <div className="form-check mb-2 py-2 fs-5">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="sortType"
                        id="featured"/>
                    <label className="form-check-label" htmlFor="featured">
                        Featured
                    </label>
                </div>
            </li>
        </ul>
    );
};
