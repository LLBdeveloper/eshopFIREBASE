import { Container } from 'react-bootstrap';
import { ClipLoader } from "react-spinners";
import { useEffect, useState } from 'react';



function Location() {

    const [loading, setLoading] = useState(false)

        
    useEffect(() => {

        setLoading(true)
        console.log('spinner prendido')
        
    },[] );


    useEffect(() =>{
        setTimeout(() => {
            setLoading(false)
            console.log('spinner apagado')
        }, 1000);
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
                        <Container className="mt-5">
                            <h1 className="h1 text-center m-4 text-dark fw-bold" >LOCATION</h1>
                            <div className="mb-5 embed-responsive embed-responsive-4by3 text-center m-1">
                                <p className='fs-4 mb-5'>Located at Av. Nazca 1043, we have been serving our customers for many years. Our store is conveniently situated in the heart of the capital, offering easy access via subway stations, train stops, bus routes, and major avenues. Visit us today and discover a world of technology right at your fingertips.</p>
                                <iframe 
                                    className="embed-responsive-item"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.337232336756!2d-58.476409723525606!3d-34.62091727294803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc9f27a36f5f3%3A0x7208afd2a8f0a0e7!2sAv.%20Nazca%201043%2C%20C1406AJJ%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1707977217222!5m2!1ses-419!2sar" 
                                    width="400" 
                                    height="300" 
                                    style={{ border: 0, maxWidth:'90%' }} 
                                    allowFullScreen="" 
                                    loading="lazy" 
                                    title="Location Map"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                                </div>
                        </Container>
                )
            }
        </div>
    );
}

export default Location;


