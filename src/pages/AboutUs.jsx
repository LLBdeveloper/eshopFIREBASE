import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { ClipLoader } from "react-spinners";


function AboutUs() {

    const [loading, setLoading] = useState(false)

        
    useEffect(() => {

        setLoading(true)
        console.log('spinner prendido')
        
    },[] );


    useEffect(() =>{
        setTimeout(() => {
            setLoading(false)
            console.log('spinner apagado')
        }, 800);
    },)



    return (
        
        <div className='d-flex justify-content-center align-items-center flex-column' >
            {
                loading ? (
                    <div className="loading-spinner m-5 d-flex justify-content-center align-items-center flex-column" >
                        <ClipLoader size={300} color={"#ffff00"} loading={loading} />
                        <h2 className=" m-5"> L o a d i n g  .   .   . </h2>                
                    </div>
                    ) : (
                        <Container className="m-5">
                        <h1 className="display-2 text-center m-5 text-dark fw-bold">About Us</h1>
                        <div className="text-center">
                            <img src="https://firebasestorage.googleapis.com/v0/b/eshopreactcoder2.appspot.com/o/envioHombre.jpg?alt=media&token=9ef977e2-51d9-4c1b-be40-a42656cb2c3c" alt="repartidor" style={{ maxWidth: '50vw' }} className='m-5 rounded ' />
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
                )
            }
        </div>
        
    );
}

export default AboutUs;

