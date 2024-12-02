import { Icon } from '@iconify/react';
import RectangularBar from "./imgs/Rectangle 2.1.png"
import VerticalBar from "./imgs/Slider-BG.png"
import SecondImg from "./imgs/bg-2.png"

const HeroSection = () => {
    return <>
        <div className="header-content pt-5  ">
            <div className="container pt-5">
                <div className='row'>
                    <div className='text-dark d-flex flex-md-column flex-lg-column justify-content-center col-lg-3 col-md-3 col-12 text-black '>
                        <p className="follow fs-5 fw-semibold">Follow</p>
                        <div className="ps-3 fs-5 fw-bold">
                            <Icon icon="line-md:instagram" />
                        </div>
                        <div className="ps-3 fs-5 fw-bold">
                            <Icon icon="line-md:twitter-filled" />
                        </div>
                    </div>
                    <div className=' col-lg-6 col-md-6 col-12 text-dark d-flex flex-column justify-content-center text-lg-start text-md-start text-center '>
                        <div >
                        <img className='w-25 mb-3' src={RectangularBar} alt="" />
                        <span className='fs-5 fw-bolder text-warning ms-3'>A Hiking guide</span>
                        </div>

                            <h1 className="mb-3">Be prepared for the Mountains and beyond!</h1>

                            <p className="fs-5 fw-semibold">Scroll Down<Icon className='ms-2 fs-5 fw-semibold' icon="line-md:arrow-down" />


                            </p>
                        
                    </div >
                    <div className='col-lg-3 col-md-3 col-12 text-dark d-none d-lg-block d-md-block '>
                        <div className="d-flex justify-content-end">
                            <div className="me-3 text-end fs-5 fw-semibold d-flex flex-column justify-content-between ">
                                <p>Start</p>
                                <p>01</p>
                                <p>02</p>
                                <p>03</p>
                            </div>
                            <div className="text-white pe-4 ">
                                <img src={VerticalBar} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="third-img">

                <img className=' img-fluid mt-5 ' src={SecondImg} alt="" />

            </div>
        </div>
    </>

}

export default HeroSection;
