import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { ClipLoader } from "react-spinners";
import { useEffect, useState } from 'react';

function ContactForm() {
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        fullName: '',
        tel: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //agregar logica para enviar
        console.log(formData);
        //aca limpia
        setFormData({
            fullName: '',
            tel: '',
            email: '',
            message: ''
        });
    };


        
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
                        <Container className='m-5 '>
            <h1 className="text-center m-5 fw-bold ">CONTACT US</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="fullName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your full name"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="tel">
                    <Form.Label>Tel</Form.Label>
                    <Form.Control
                        type="tel"
                        placeholder="Enter your phone number"
                        name="tel"
                        value={formData.tel}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="Enter your message"
                        rows={3}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Button variant="success" type="submit" className="d-block mx-auto m-5 p-4 rounded-5">
                    <p className='fs-3 fw-bold'>Submit !</p>
                </Button>
            </Form>
        </Container>
                )
            }
        </div>
    );
}

export default ContactForm;



