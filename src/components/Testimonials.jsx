import { testimonialsItems } from "../constant/data";
import Title from "./Title";
import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";

//import motion
import { motion } from "motion/react";
import * as variants from "../motion/animation";

const Testimonials = () => {
  return (
    <section className="section">
      <motion.div
        className="container"
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* Title */}
        <Title
          title="Our Testimonials"
          text="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
          link="View All"
        />
        {/* Card wrapper */}
        <motion.div variants={variants.fadeInUp}>
          <Swiper
            className="mt-14 lg:mt-16"
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1.5,
              },
              1280: {
                slidesPerView: 2.5,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".prev-btn",
              nextEl: ".next-btn",
            }}
          >
            {testimonialsItems.map((item) => (
              // Card
              <SwiperSlide
                key={item.id}
                className="bg-white border border-white-95 p-8 lg:p-10 rounded-[10px] space-y-3"
              >
                <p>{item.text}</p>
                <div className="flex items-center justify-between flex-wrap pt-4 border-t border-t-orange-90 gap-4">
                  <div className="flex items-center gap-3">
                    {/* image */}
                    <div>
                      <img
                        src={item.img}
                        alt={item.author}
                        width={50}
                        height={50}
                      />
                    </div>
                    {/* author */}
                    <p className="font-medium">{item.author}</p>
                  </div>
                  <button className="secondary-btn">Read Full Story</button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
        {/* Navigation btns */}
        <motion.div variants={variants.fadeInUp} className="flex items-center justify-center mt-5 gap-5">
          <button className="bg-orange-70 w-12 h-12 flex items-center justify-center rounded-xl hover:bg-orange-50 transition-colors active:bg-orange-75/80 prev-btn">
            <RiArrowLeftLine size={30} />
          </button>
          <button className="bg-orange-70 w-12 h-12 flex items-center justify-center rounded-xl hover:bg-orange-50 transition-colors active:bg-orange-75/80 next-btn">
            <RiArrowRightLine size={30} />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
