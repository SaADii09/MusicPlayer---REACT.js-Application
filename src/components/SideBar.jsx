import React from 'react';
import { Home03Icon } from '@hugeicons/react';


const SideBar = () => {
    return (
        <>
            <div className="flex flex-col bg-black  min-w-[250px] w-[18%] max-w-[300px] pt-10 px-10 border-r border-main1default height-full">
                <h1 className="font-vazirmatn bg-gradient-to-r to-cyan-500 from-pink-500 bg-clip-text text-3xl font-extrabold leading-normal text-transparent">
                    WAVELY
                </h1>
                <div>
                    <h6 className="text-sm text-pink-500 font-vazirmatn">Menu</h6>
                    <ul>
                        <li>
                            <div className="flex justify-center  ">
                                {/* <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width={24}
                                    height={24}
                                    color={'#fff'}
                                    fill={'none'}>
                                    <path
                                        d="M12.0002 18L12.0002 15"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M2.35157 13.2135C1.99855 10.9162 1.82204 9.76763 2.25635 8.74938C2.69065 7.73112 3.65421 7.03443 5.58132 5.64106L7.02117 4.6C9.41847 2.86667 10.6171 2 12.0002 2C13.3832 2 14.5819 2.86667 16.9792 4.6L18.419 5.64106C20.3462 7.03443 21.3097 7.73112 21.744 8.74938C22.1783 9.76763 22.0018 10.9162 21.6488 13.2135L21.3478 15.1724C20.8473 18.4289 20.5971 20.0572 19.4292 21.0286C18.2613 22 16.5538 22 13.139 22H10.8614C7.44652 22 5.73909 22 4.57118 21.0286C3.40327 20.0572 3.15305 18.4289 2.65261 15.1724L2.35157 13.2135Z"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinejoin="round"
                                    />
                                </svg> */}
                                <Home03Icon 
      size={24} 
      color={"#ffffff"}
      variant={"stroke"}
    />
                                <h3 className="text-white font-vazirmatn text-2xl">Home</h3>
                            </div>
                        </li>
                        <li>
                            <div className="flex flex-row ">
                                <img src="https://via.placeholder.com/35x35" />
                                <h3>Home</h3>
                            </div>
                        </li>
                        <li>
                            <div className="flex flex-row ">
                                <img src="https://via.placeholder.com/35x35" />
                                <h3>Home</h3>
                            </div>
                        </li>
                        <li>
                            <div className="flex flex-row ">
                                <img src="https://via.placeholder.com/35x35" />
                                <h3>Home</h3>
                            </div>
                        </li>
                    </ul>
                </div>{' '}
                <div>
                    <h6 className="text-base font-vazirmatn">Menu</h6>
                    <ul>
                        <li>
                            <div className="flex flex-row ">
                                <img src="https://via.placeholder.com/35x35" />
                                <h3>Home</h3>
                            </div>
                        </li>
                        <li>
                            <div className="flex flex-row ">
                                <img src="https://via.placeholder.com/35x35" />
                                <h3>Home</h3>
                            </div>
                        </li>
                        <li>
                            <div className="flex flex-row ">
                                <img src="https://via.placeholder.com/35x35" />
                                <h3>Home</h3>
                            </div>
                        </li>
                        <li>
                            <div className="flex flex-row ">
                                <img src="https://via.placeholder.com/35x35" />
                                <h3>Home</h3>
                            </div>
                        </li>
                    </ul>
                </div>{' '}
                <div>
                    <h6 className="text-base font-vazirmatn">Menu</h6>
                    <ul>
                        <li>
                            <div className="flex flex-row ">
                                <img src="https://via.placeholder.com/35x35" />
                                <h3>Home</h3>
                            </div>
                        </li>
                        <li>
                            <div className="flex flex-row ">
                                <img src="https://via.placeholder.com/35x35" />
                                <h3>Home</h3>
                            </div>
                        </li>
                        <li>
                            <div className="flex flex-row ">
                                <img src="https://via.placeholder.com/35x35" />
                                <h3>Home</h3>
                            </div>
                        </li>
                        <li>
                            <div className="flex flex-row ">
                                <img src="https://via.placeholder.com/35x35" />
                                <h3>Home</h3>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default SideBar;
