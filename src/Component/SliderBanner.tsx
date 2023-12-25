import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";


export function SliderBanner() {
  return (
    <Container fluid className="Slider p-0">
      <Carousel fade>
        <Carousel.Item>
          <img src="../../public/Image/Slider01.jpg" alt="pic" />
          <Carousel.Caption>
            <h1>azaranweb</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="../../public/Image/Slider02.jpg" alt="pic" />
          <Carousel.Caption>
            <h1>azaranweb</h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}
