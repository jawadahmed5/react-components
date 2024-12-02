import { Icon } from '@iconify/react';
import ThirdImg from "./imgs/bg-3.png"
// import BlackImg from "./imgs/blck bg.png"
import RectangularBar from "./imgs/Rectangle 2.1.png"
import CardOne from "./imgs/card-1.png"
import CardTwo from "./imgs/card-2.png"
import CardThree from "./imgs/card-3.png"

const ThirdSection = () => {
    return <>
        <div className="">

            <img className="third-section img-fluid " src={ThirdImg} alt="" />

        </div>


        <div className="content-section">
            <div className="container">
                <div className='row section'>
                <div className="section-number">01</div>

                    <div className='p-3 d-flex flex-column justify-content-center text-lg-start text-md-start text-center col-lg-6 col-md-6 col-sm-12 col-12 section-content'>
                        <div >
                            <img className='w-25 mb-1' src={RectangularBar} alt="" />
                            <span className='fs-5 fw-bolder text-warning ms-3'>GET STARTED</span>
                        </div>

                        <h2 className="mb-3 mt-3 text-white">What level of  hiker are you?</h2>

                        <p className="fs-6  mt-3 text-white">Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? </p>

                        <p className="fs-5 fw-semibold text-warning mt-3">read more<Icon className='ms-2 fs-5 fw-semibold' icon="line-md:arrow-right" />


                        </p>

                    </div >


                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-center d-flex flex-column justify-content-center align-content-center align-items-center">
                        <img className="img-fluid w-75  p-sm-4 " src={CardOne} alt="" />
                    </div>




                </div>
            </div>





            <div className="container mt-5">
                <div className='row section'>


                    <div className="section-number text-center">02</div>




                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-center d-flex flex-column justify-content-center align-content-center align-items-center">
                        <img className="img-fluid w-75  p-sm-4 " src={CardTwo} alt="" />
                    </div>





                    <div className='p-3 d-flex flex-column justify-content-center text-lg-start text-md-start text-center col-lg-6 col-md-6 col-sm-12 col-12 section-content'>
                        <div >
                            <img className='w-25 mb-1' src={RectangularBar} alt="" />
                            <span className='fs-5 fw-bolder text-warning ms-3'>Hiking Essentials</span>
                        </div>

                        <h2 className="mb-3 mt-3 text-white">Picking the right Hiking Gear!</h2>

                        <p className="fs-6  mt-3 text-white ">The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have.
                            Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet. </p>

                        <p className="fs-5 fw-semibold text-warning mt-3">read more<Icon className='ms-2 fs-5 fw-semibold' icon="line-md:arrow-right" />


                        </p>

                    </div >







                </div>
            </div>










            <div className="container mt-5">
                <div className='row section'>
                    <div className="section-number">03</div>
                    <div className='p-3 d-flex flex-column justify-content-center text-lg-start text-md-start text-center col-lg-6 col-md-6 col-sm-12 col-12 section-content'>
                        <div >
                            <img className='w-25 mb-1' src={RectangularBar} alt="" />
                            <span className='fs-5 fw-bolder text-warning ms-3'>where you go is the key</span>
                        </div>

                        <h2 className="mb-3 mt-3 text-white">Understand Your Map & Timing</h2>

                        <p className="fs-6  mt-3 text-white">To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction.. </p>

                        <p className="fs-5 fw-semibold text-warning mt-3">read more<Icon className='ms-2 fs-5 fw-semibold' icon="line-md:arrow-right" />


                        </p>

                    </div >


                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-center d-flex flex-column justify-content-center align-content-center align-items-center">
                        <img className="img-fluid w-75  p-sm-4 " src={CardThree} alt="" />
                    </div>


                </div>
            </div>

        </div>
    </>

}

export default ThirdSection;
