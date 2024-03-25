import React from 'react';

export const FilterCheckBox = () => {
    return (
        <div className="form-check d-flex flex-column">
            <h3 className="fw-200 my-3">Brand</h3>
            <div className='mb-2'>
                <input className="form-check-input" type="checkbox" id="apple"/>
                <label className="form-check-label" htmlFor="apple">
                    Apple
                </label>
            </div>
            <div className='mb-2'>
                <input className="form-check-input" type="checkbox" id="samsung"/>
                <label className="form-check-label" htmlFor="samsung">
                    Samsung
                </label>
            </div>

            <div className='mb-2'>
                <input className="form-check-input" type="checkbox" id="oppo"/>
                <label className="form-check-label" htmlFor="oppo">
                    oppo
                </label>
            </div>

            <div className='mb-2'>
                <input className="form-check-input" type="checkbox" id="realme"/>
                <label className="form-check-label" htmlFor="realme">
                    Realme
                </label>
            </div>

            <div className='mb-2'>
                <input className="form-check-input" type="checkbox" id="redmi"/>
                <label className="form-check-label" htmlFor="redmi">
                    redmi
                </label>
            </div>

            <div className='mb-2'>
                <input className="form-check-input" type="checkbox" id="iqoo"/>
                <label className="form-check-label" htmlFor="iqoo">
                    IQOO
                </label>
            </div>
        </div>

    );
};
