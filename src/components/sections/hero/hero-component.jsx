import React, { useState, useEffect } from "react";
import "./hero-component-styles.scss";
import { FaGift, FaTimes } from "react-icons/fa";
import Human from "../../../../public/Blood donation-amico.svg";
import { FaCreditCard, FaTint,   FaBlackTie , FaTag,FaAngleDoubleRight } from "react-icons/fa";
import { GiTargetPrize } from "react-icons/gi";

const HeroComponent = ({ subheadingText, headingText, classHint }) => {
    const [isModalOpen, setIsModalOpen] = useState(false); 

    const handleButtonClick = () => {
        setIsModalOpen(true); 
    };

    const handleCloseModal = () => {
        setIsModalOpen(false); 
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            handleCloseModal();
        }
    };

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden'; 
        } else {
            document.body.style.overflow = 'unset'; 
        }

        return () => {
            document.body.style.overflow = 'unset'; 
        };
    }, [isModalOpen]);

    return (
        <section className={`main-wrapper ${classHint}`}>
            <div className="main-container">
                <div className="text-wrapper sm:w-[650px] flex flex-col justify-center items-center">
                    <h3 className="subheading relative font-bold sm:text-[20px] leading-[2em] text-center tracking-[0.3em] uppercase text-off_white">
                        {subheadingText}
                    </h3>
                    <h1 className="font-bold text-[35px] sm:text-[60px] leading-tight text-center capitalize text-white">
                        {headingText}
                    </h1>
                    <button
                        className="donor-rewards-button mt-4 flex items-center bg-pure_red rounded-rsm text-white py-2 px-4 rounded"
                        onClick={handleButtonClick}
                        style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}
                    >
                        <FaGift className="mr-2" /> Donor Rewards
                    </button>
                </div>
            </div>

            {isModalOpen && (
                <div className="modal-overlay mt-[10rem] sm:mt-[6rem] fixed inset-0 bg-[#000000] bg-opacity-50 flex items-center justify-center ml-4 mr-4 lg:ml-0 lg:mr-0 z-50 " onClick={handleOverlayClick}>
                    <div className="modal-content flex bg-[#fbcaca] rounded shadow-lg relative max-w-6xl w-full p-5 h-auto sm:h-[80vh] overflow-hidden">
                        <button
                            className="absolute top-2 right-2 text-3xl text-[#ff0000]"
                            onClick={handleCloseModal}
                        >
                            <FaTimes />
                        </button>

                        <div className="flex-1 pr-6 h-full sm:max-h-full overflow-hidden md:overflow-auto">
                            <h2 className="text-4xl font-bold text-[#ff0000] mb-4">Join the Movement!</h2>
                            
                            <div className="h-[60vh] md:h-auto overflow-y-auto">
                                <p className="text-md text-gray-800 mb-2">
                                    Your selfless act of donating blood not only saves lives but also opens doors to a range of exciting rewards and benefits for you as a donor.
                                </p>
                                <p className="text-md text-green-700 mb-2">
                                    By donating, you become a vital part of a compassionate community, where your contributions are recognized and celebrated.
                                </p>

                                <p className="text-2xl font-bold text-[#ff0000] flex ">
                                    <FaAngleDoubleRight /><span className="ml-2">Here are some rewards for our valued donors</span>
                                </p>

                                <ul className="list-disc list-inside m-4 text-md bg-[#f9e9bb] p-4 rounded-rlg" style={{ boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px' }}>
                                    <li className="text-gray-700 flex items-center mb-2">
                                        <FaCreditCard className="mr-2 text-4xl -mt-11" /> Get a "Blood-Donor-Card" after three donations for a complimentary bottle of blood for you and your family
                                    </li>
                                    <li className="text-gray-700 flex items-center mb-2">
                                        <FaTint className="mr-2" /> Customized Water Bottle after two donations
                                    </li>
                                    <li className="text-gray-700 flex items-center mb-2">
                                        <FaBlackTie className="mr-2" /> Personalized Jacket after two donations
                                    </li>
                                    <li className="text-gray-700 flex items-center mb-2">
                                        <FaTag className="mr-2" /> Exclusive Discounts on Health Services for Each Donation 
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="hidden md:flex flex-1 justify-center items-center">
                            <img
                                src={Human} 
                                alt="Donor Rewards"
                                className="w-full h-auto rounded"
                            />
                        </div>
                    </div>
                </div>
            )}



        </section>
    );
};

export default HeroComponent;
