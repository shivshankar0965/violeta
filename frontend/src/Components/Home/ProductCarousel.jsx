import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ProductCard from "./ProductCard";
import { Box, Text } from "@chakra-ui/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { useMediaQuery } from "./useMediaQuery";

export default function ProductCarousel({ dataArray, heading }) {
  const isMd = useMediaQuery(960);
  return (
    <Box mt="50px">
      <Text fontSize="lg" color="#2c414c">
        <b>{heading}</b>
      </Text>
      <Swiper
        spaceBetween={50}
        slidesPerView={isMd ? 3 : 5}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{ clickable: true }}
      >
        {dataArray.map((item) => (
          <SwiperSlide>
            <ProductCard
              name={item.name}
              price={item.price}
              image={item.image || item.img}
              discount={item.discount}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
