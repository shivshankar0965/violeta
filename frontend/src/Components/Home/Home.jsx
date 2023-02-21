import { Box, Image } from "@chakra-ui/react";
import React from "react";
import Carousel from "./Carousel";
import { brandDiscounts, brandImages, brandImages2, brandImages3, brandImages4, brandImages5, brandImages6, categoryImages, comboDeals, discountCarousel, discountedProducts, dummy, lipsticks, midBanner, products, topBanner } from "./data";
import ImageGrid from "./ImageGrid";
import ProductCarousel from "./ProductCarousel";

const Home = () => {
  return (
    <Box w="65%" m="auto">
      <Box mt="50px">
        <Carousel dataArray={topBanner} />
      </Box>
      <Box mt="50px">
        <Image src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1676895644_sale-is-live_web_ticker.gif" />
      </Box>
      <ProductCarousel dataArray={dummy} heading="FEATURED" />
      <Box mt="50px">
        <Carousel dataArray={midBanner} />
      </Box>
      <Box mt="50px">
        <Image src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1676907448_unmissable-_web.jpg" />
      </Box>
      <ProductCarousel dataArray={discountedProducts} />
      <Box mt="50px">
        <Image src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1676959301_revised-deal-of-the-day-web.gif" />
      </Box>
      <ImageGrid dataArray={brandImages} />
      <ProductCarousel dataArray={categoryImages} heading="CATEGORY STORES" />
      <Box mt="50px">
        <Image src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1676636827_reminder-1280x100.gif" />
      </Box>
      <ImageGrid dataArray={brandImages2} />
      <ProductCarousel dataArray={dummy} heading="JUST ARRIVED" />
      <ProductCarousel dataArray={lipsticks} />
      <ImageGrid dataArray={brandImages3} />
      <Carousel dataArray={discountCarousel} />
      <ProductCarousel dataArray={dummy} heading="FEATURED" />
      <ImageGrid dataArray={brandImages4} />
      <Box>
        <Image src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1676639088_free-gift-strip-web.jpg" />
      </Box>
      <ProductCarousel dataArray={brandDiscounts} />
      <ProductCarousel dataArray={dummy} heading="FEATURED" />
      <ImageGrid dataArray={brandImages5} />
      <Box>
        <Image src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1676639022_flat-discounts-web.jpg" />
      </Box>
      <ProductCarousel dataArray={products} />
      <ProductCarousel dataArray={dummy} heading="MOST LOVED PRODUCTS" />
      <ImageGrid dataArray={brandImages6} />
      <ProductCarousel dataArray={dummy} heading="FEATURED" />
      <ImageGrid dataArray={comboDeals} />
    </Box>
  );
};

export default Home;
