import AliceCarousel from "react-alice-carousel";
import { images } from "../constants/carousel-images";
import Container from "./Container";

const Carousels = () => {
  return (
    <div id="carousel" className="py-[3rem]">
      <Container>
        <AliceCarousel
          mouseTracking
          items={images}
          autoPlay={true}
          infinite={true}
          paddingRight={20}
          paddingLeft={5}
          autoPlayInterval={2000}
          disableSlideInfo={false}
          disableButtonsControls={true}
          responsive={{
            0: {
              items: 1,              
            },
            768: {
              items: 2,
            },
            1444: {
              items: 3,
              itemsFit: 'contain'
            },
          }}
        />
      </Container>
    </div>
  );
};

export default Carousels;
