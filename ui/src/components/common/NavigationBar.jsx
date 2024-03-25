import React, {useState} from 'react';

import {IoLogoAppleAr} from 'react-icons/io5';
import {VscAccount} from 'react-icons/vsc';
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

import '../../css/navbar.css'

export const NavigationBar = () => {
    const [isOpen,
        setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar sticky-top navbar-expand-md">
            <div className="container-fluid ">
                <a className="navbar-brand fs-2 my-auto" href="/">
                    <IoLogoAppleAr className="mx-2 brand-icon" size={30}/>
                    BlumeKart
                </a>
                <button className="navbar-toggler" type="button" onClick={toggle}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className={`collapse navbar-collapse ${isOpen
                    ? 'show'
                    : ''}`}>
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link fs-3" href="/product">
                                Product
                            </a>
                        </li>
                        <li className="nav-item fs-3">
                            <a className="nav-link" href="/order">
                                Orders
                            </a>
                        </li>
                    </ul>
                    <form className="d-flex ms-auto me-3" role="search">
                        <input
                            className="form-control custom-input fs-5 me-2"
                            type="search"
                            placeholder="search..."
                            aria-label="Search"/>
                        <button className="btn custom-btn fs-5" type="submit">
                            Search
                        </button>
                    </form>
                    <div className="nav-item dropdown ms-5">
                            <button
                                className="nav-link me-3"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <VscAccount size={30} className='nav-icon'/>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end mt-4 custom-dropdown">
                                <li className='d-flex p-1'>
                                  <span className='ms-2 my-auto'>
                                    <MdOutlineAccountBalanceWallet size={20} className='nav-icon'/>
                                  </span>
                                    <a className="dropdown-item fs-4" href="/auth">
                                        My account
                                    </a>
                                </li>
                                <hr className="dropdown-divider custom-divider "/>
                                <li className='d-flex p-1'>
                                  <span className='ms-2 my-auto'>
                                    < IoSettingsOutline size={20} className='nav-icon'/>
                                  </span>
                                    <a className="dropdown-item fs-4" href="/settings">
                                        Settings
                                    </a>
                                </li>
                            </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};
