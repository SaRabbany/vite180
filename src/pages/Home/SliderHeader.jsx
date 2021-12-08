import React, { useEffect, useState } from "react";
import Navbar from "../../Components/navbar/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { FreeMode,Autoplay, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import SLIDER_IMG_ONE from "../../Images/section-image-pic.png";
import SLIDER_IMG_TWO from "../../Images/slider-pic-2.jpg";
import SLIDER_IMG_THREE from "../../Images/slider-pic-3.jpg";
// import SLIDER_IMG_FOUR from "../../Images/section-image-pic.png";
import { InlineIcon } from "@iconify/react";
import Tilt from "react-vanilla-tilt";

// install Swiper modules
SwiperCore.use([FreeMode, Navigation,Autoplay, Thumbs]);

const SliderHeader = () => {
    const sliderData = [
        {
            id: "ADKNDMD__DIED",
            title: "Welcome to Bulk Alliance",
            text: "Bulk alliance is a service, in the format of a whatsapp group chat, offering sought after pairs of mainly Jordans, Dunks or Yeezys in bulk, or single, under market price allowing high profit margins to upgrade your reselling game",
            img: SLIDER_IMG_ONE,
        },
        {
            id: "sha512-mYZEvshBRHG",
            title: "No need for bots!",
             text: "Bulk alliance can provide you bulk of any quantity that you require for you reselling business, store or for personals.",
            img: SLIDER_IMG_TWO,
        },
        {
            id: "sIAiyH5PzCFTCfbWfoYbO",
             title: "Support at its best",
             text: "Bulk alliance staff will help you step by step from when you place your order to when it is delivered to your doorstep.",
            img: SLIDER_IMG_THREE,
        },     
      
    ];
    const [sliderPreviewData, setSliderPreviewData] = useState({ ...sliderData[0] });


    return (
        <header id="sliderHeader">
            <Navbar />
            <div className="slider-header-carousel row m-0 w-100">
                <div className="carousel-side col-12 p-0 col-lg-12">
                    <div className="slider-preview d-flex d-md-block flex-column justify-content-center" style={{ backgroundImage: `url(${sliderPreviewData?.img})` }}>
                        <div className="mt-auto preview__text">
                            <h1 className="text-center text-md-start">{sliderPreviewData?.title}</h1>
                            <p className="col-12 col-sm-10 col-md-9 col-lg-7">{sliderPreviewData?.text}</p>
                            <button className="btn bg-red text-white btn-lg">Join now</button>
                        </div>
                        <div className="slider-area">
                            <Swiper
                                breakpoints={{
                                    992: {
                                        spaceBetween: 20,
                                        slidesPerView: 1.5,
                                    },
                                    300: {
                                        spaceBetween: 20,
                                        slidesPerView: 2,
                                    },
                                }}
                                autoplay={{
                                    delay:1000*60
                                }}
                                loop={true}
                                className={"header-swiper"}>
                                {sliderData.map((e, i) => (
                                    <SwiperSlide>
                                        {({ isActive }) => {
                                            useEffect(()=> {
                                                if(isActive){
                                                    setSliderPreviewData(e)
                                                    
                                                }

                                            },[isActive])
                                            return (
                                                <Tilt className="p-0 m-0 w-100 bg-transparent">
                                                    <div style={{ backgroundImage: `url(${e?.img})` }} className="header_slider-card d-flex align-items-center">
                                                        <h6>{e?.title}</h6>
                                                    </div>
                                                </Tilt>
                                            );
                                        }}
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
                {/* <div className="advantage-text col-12 col-lg-3">
                    <div className="text-center py-5">
                        <h1>The Ultimate Advantage</h1>
                        <p className="text-blue-grey fw-500">Providing our members with the highest quality information, reselling tools, and more. Learn how to capitalize on the resell market.</p>
                        <button className="btn text-red ">
                            Become A member <InlineIcon icon="codicon:arrow-right" className="" />{" "}
                        </button>
                    </div>
                </div> */}
            </div>
        </header>
    );
};

export default SliderHeader;
