import React from 'react';

import summaryPopData from '../assests/data.json';
import dummy from '../assests/images/pops-dummy.png';

export const AccessorySummaryPops = () => {

  const summaryPops = summaryPopData; 

  return (
    <>
      <div className="mt-4 d-flex justify-content-center ">
        {summaryPops.map((summaryPop) => (
          <div
            key={summaryPop.id}
            className=" mx-3 text-center"
          >
            <img className='circular-image mb-2' src={ dummy || summaryPop.url}
                alt={`${summaryPop.de}`} />
            <p className='fs-5'>{summaryPop.description}</p>
                {/* Log URL to the console for debugging */}
               {console.log('Image URL:', summaryPop.url)}
          </div>
        ))}
      </div>
    </>
  );
};
