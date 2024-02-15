import { Container } from 'react-bootstrap';

function AboutUs() {
    return (
        <Container className="m-5">
            <h1 className="display-2 text-center m-5 text-dark fw-bold">About Us</h1>
            <div className="text-center">
                <p>
                    Welcome to our store! We are a passionate team of technology enthusiasts who have been selling computer products in Buenos Aires for over a decade.
                </p>
                <p>
                    Our journey began years ago in a small shop located in the heart of Buenos Aires. Back then, our goal was simple: to provide high-quality computer hardware and accessories to our customers.
                </p>
                <p>
                    Over the years, we have grown and expanded our product range to meet the ever-changing needs of the technology market. From cutting-edge gaming gear to professional-grade workstations, we strive to offer the latest and most innovative products to our customers.
                </p>
                <p>
                    But our commitment goes beyond just selling products. We believe in building long-lasting relationships with our customers based on trust, reliability, and exceptional service. Whether you are a seasoned gamer, a tech-savvy professional, or a casual user, we are here to help you find the perfect solution for your needs.
                </p>
                <p>
                    Thank you for choosing us as your trusted technology partner. We look forward to serving you for many more years to come!
                </p>
            </div>
        </Container>
    );
}

export default AboutUs;
