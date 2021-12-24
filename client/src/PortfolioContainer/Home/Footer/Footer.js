import React from 'react';
import './Footer.css';
import ScrollService from "../../../utilities/ScrollService";

export default function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-parent'>
                <img src={require ('../../../assets/Home/shape-bg.png').default} alt='no internet connection'/>
            </div>
            <div className="scroll-container">
                <button
                    className="btn-scroll"
                    onClick={() => ScrollService.scrollHandler.scrollToHome()}
                    >
                    {" "}
                    <i className="fa fa-arrow-up"></i>
                </button>
            </div>
        </div>

    );
}

