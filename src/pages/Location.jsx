import { Container } from 'react-bootstrap';

function Location() {
    return (
        <Container className="mt-5">
            <h1 className="display-2 text-center m-5 text-dark fw-bold" >LOCATION</h1>
            <div className="embed-responsive embed-responsive-4by3 text-center m-5">
                <iframe 
                    className="embed-responsive-item"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.337232336756!2d-58.476409723525606!3d-34.62091727294803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc9f27a36f5f3%3A0x7208afd2a8f0a0e7!2sAv.%20Nazca%201043%2C%20C1406AJJ%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1707977217222!5m2!1ses-419!2sar" 
                    width="400" 
                    height="300" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    title="Location Map"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </Container>
    );
}

export default Location;


