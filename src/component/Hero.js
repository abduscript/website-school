import {Carousel} from 'react-bootstrap';
import hero1 from './../component/assets/pramuka3.jpg';
import hero2 from './../component/assets/sekolah1.jpg';
import hero3 from './../component/assets/sekolah5.jpg';
const Hero = ()=> {
    return (
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={hero1}
                alt="First slide"
            />
            <Carousel.Caption>
                <h5>Kegiatan Ekstra Kurikuler</h5>
                <p>mencetak generasi yang terampil dan memiliki skill yang tinggi</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={hero2}
                alt="Second slide"
            />
            <Carousel.Caption>
                <h5>Briefing Sebelum Belajar</h5>
                <p variant="light">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={hero3}
                alt="Third slide"
            />
            <Carousel.Caption>
                <h5>Mencetak Generasi Mandiri dan Kreatif</h5>
                <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
};

export default Hero;