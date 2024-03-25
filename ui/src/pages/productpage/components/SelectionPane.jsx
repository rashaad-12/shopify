import React, { useState } from 'react';
import {FilterPane} from './FilterPane';
import {SortPane} from './SortPane'; 

import '../../../css/product-page.css'

export const SelectionPane = ({products}) => {
  const [activeTab, setActiveTab] = useState('filter'); 

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="card h-100 p-4 selection-card">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item header-item">
              <a
                className={`nav-link fs-4 ${activeTab === 'filter' ? 'active-tab' : ''}`}
                onClick={() => handleTabClick('filter')}
              >
                Filter
              </a>
            </li>
            <li className="nav-item header-item">
              <a
                className={`nav-link fs-4 ${activeTab === 'sort' ? 'active-tab' : ''}`}
                onClick={() => handleTabClick('sort')}
              >
                Sort
              </a>
            </li>
          </ul>
        </div>
        <div>
          {activeTab === 'filter' && <FilterPane products={products} />}
          {activeTab === 'sort' && <SortPane />}
        </div>
        < div className = "d-flex justify-content-between" > 
          <button className='btn custom-btn fs-5'>Apply</button>
          <button className='btn btn-danger fs-5'>Clear</button>
        </div>
      </div>
    </>
  );
};
