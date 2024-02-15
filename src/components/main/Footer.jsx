import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-dark text-light py-4">
            <div className="container">
                <div className="row">
                <div className="col-md-4 mb-3 mb-md-0 text-center">
                    <div className="fw-bold mb-2">
                        GAMMER GEAR
                    </div>
                    <ul className="list-unstyled mb-0">
                        <li className="mb-2">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/about">About Us</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/location">Location</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-4 mb-3 mb-md-0 d-flex flex-column justify-content-between align-items-center">
                    <div className="mb-2">
                        <i className="bi bi-envelope-fill me-2"></i> info@gamergear.com.ar
                    </div>
                    <div className="mb-2">
                        <i className="bi bi-telephone-fill me-2"></i> 1146454545
                    </div>
                    <div className="mb-2">
                        <i className="bi bi-whatsapp me-2"></i> 1146454545
                    </div>
                    <div className="mb-2">
                        <i className="bi bi-geo-alt-fill me-2"></i> Av. Nazca 1043, Buenos Aires
                    </div>
                </div>
                <div className="col-md-4 d-flex justify-content-end align-items-center  ">
                    <div className="d-flex flex-column align-items-center ">
                        <a href="URL_RED_SOCIAL_IG" className="text-light mb-3 me-3" target="_blank" rel="noopener noreferrer">INSTAGRAM
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a href="URL_RED_SOCIAL_FB" className="text-light mb-3 me-3" target="_blank" rel="noopener noreferrer">FACEBOOK
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a href="URL_RED_SOCIAL_TW" className="text-light mb-3 me-3" target="_blank" rel="noopener noreferrer">TWITTER
                            <i className="bi bi-twitter"></i>
                        </a>
                    </div>
                </div>
                </div>

                <div className="row mt-5 ">
                    <div className="col-12 d-flex  justify-content-center">
                        <img className='mb-5' src="../../../public/icons/cifrado.png" alt="Logo" style={{ maxHeight: '100px' }} />
                    </div>
                </div>
<hr />
                <div className="row">
                    <div className="col-12 text-center mt-3">
                        <p>Web Master Studio ® | Copyright 2024 © - Todos los Derechos Reservados</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;




// import { Link } from 'react-router-dom';

// function Footer() {
//     return (
//         <footer className="bg-dark text-light py-4">
//             <div className="container">
//                 <div className="row ">
//                     <div className="col-md-6 mb-3 mb-md-0 text-center">
//                         <div className="fw-bold mb-2">GAMMER GEAR</div>
//                             <ul className="list-unstyled mb-0">
//                                 <li className="mb-2">
//                                     <Link to="/">Home</Link>
//                                 </li>
//                                 <li className="mb-2">
//                                     <Link to="/about">About Us</Link>
//                                 </li>
//                                 <li className="mb-2">
//                                     <Link to="/location">Location</Link>
//                                 </li>
//                                 <li className="mb-2">
//                                     <Link to="/contact">Contact</Link>
//                                 </li>
//                             </ul>
//                     </div>
//                     <div className="col-md-6 d-flex flex-column justify-content-between">
//                         <div>
//                             <div className="mb-2">
//                                 <i  className="bi bi-envelope-fill me-2"></i> info@gamergear.com.ar
//                             </div>
//                             <div className="mb-2">
//                                 <i className="bi bi-telephone-fill me-2"></i> 1146454545
//                             </div>
//                             <div className="mb-2">
//                                 <i className="bi bi-whatsapp me-2"></i> 1146454545
//                             </div>
//                             <div className="mb-2">
//                                 <i className="bi bi-geo-alt-fill me-2"></i> Av. Nazca 1043, Buenos Aires
//                             </div>
//                         </div>
                        
//                     </div>
//                 </div>
//                 <div className="row mt-3">
//                     <div className="col-12 d-flex justify-content-center">
//                         <img src="../../../public/icons/cifrado.png" alt="Logo" style={{ maxHeight: '100px' }} />
//                     </div>
//                 </div>
//             </div>
//             <p className='text-center mt-3'>Web Master Studio ® | Copyright 2024 © - Todos los Derechos Reservados</p>
//         </footer>
//     );
// }

// export default Footer;