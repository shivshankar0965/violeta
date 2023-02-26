import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Box, Image } from "@chakra-ui/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";

export default function Carousel({ dataArray }) {
  return (
    <Box>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{ clickable: true }}
      >
        {dataArray.map((slide) => (
          <SwiperSlide>
            <Image src={slide.img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
