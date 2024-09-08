import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import img41 from '../assets/img41.png'; // replace with your image paths
import img42 from '../assets/img42.png';
import img43 from '../assets/img43.png';
import arrowrightpoint from '../assets/arrowrightpoint.png';
import dot1 from '../assets/dot1.png';
import dot2 from '../assets/dot2.png';

// Initialize Swiper modules
SwiperCore.use([Autoplay, Navigation, Pagination]);

const Section3 = () => {
  return (
    <>
      <div className="section3Container">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: '.dotsContainer',
          }}
          navigation={{
            nextEl: '.arrowrightpoint',
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="sec3Row1">
              <p>
                50+ Beautiful rooms <br />
                inspiration
              </p>
              <p>
                Our designer already made a lot of beautiful prototype rooms
                that inspire you
              </p>
              <button>Explore More</button>
            </div>
            <div className="sec3Row2">
              <img src={img41} alt="img41" />
              <div className="bgWhiteContent">
                <div className="containerRoom1">
                  <div className="room1">
                    <p>01</p>
                    <img src={img41} alt="hori" />
                    <p>Bed Room</p>
                  </div>
                  <p>Inner Peace</p>
                </div>
                <div className="arrowRight">
                  <img src={arrowrightpoint} alt="Arrow" />
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="sec3MiddleTop">
              <div className="imgContainer">
                <img className="img42" src={img42} alt="Room" />
                <div className="arrowrightpoint">
                  <img src={arrowrightpoint} alt="Next" />
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <img src={img43} alt="Room" />
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="dotsContainer">
          <img src={dot1} alt="dot1" />
          <img src={dot2} alt="dot2" />
          <img src={dot2} alt="dot2" />
          <img src={dot2} alt="dot2" />
        </div>
      </div>
    </>
  );
};

export default Section3;
