import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

type SliderBannerProps = {
  image01: string;
  image02: string;
  Message01: string;
  Message02: string;
};

export function SliderBanner({
  image01,
  image02,
  Message01,
  Message02,
}: SliderBannerProps) {
  return (
    <Container fluid className="Slider p-0">
      <Carousel fade>
        <Carousel.Item>
          <img src={image01} alt={Message01} />
          <Carousel.Caption>
            <h1>{Message01}</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={image02} alt={Message02} />
          <Carousel.Caption>
            <h2>{Message02}</h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}
