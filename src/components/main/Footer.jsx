import { Link } from 'react-router-dom';

function Footer() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="bg-dark text-light py-4">
            <div className="container">
                <div className="row">
                <div className="col-md-4 mb-3 mb-md-0 text-center">
                    <div className=" mb-2">
                        <h3 className='fs-5 fw-bold mb-4'>GAMMER GEAR</h3>
                    </div>
                    <ul className="list-unstyled mb-0">
                        <li className="mb-3">
                            <Link to="/" className="text-warning">Home</Link>
                        </li>
                        <li className="mb-3">
                            <Link to="/about" className="text-warning">About Us</Link>
                        </li>
                        <li className="mb-3">
                            <Link to="/location" className="text-warning">Location</Link>
                        </li>
                        <li className="mb-3">
                            <Link to="/contact" className="text-warning">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-4 mb-3 mb-md-0 d-flex flex-column justify-content-between align-items-center">
                    <div className="mt-2">
                        <img src="https://firebasestorage.googleapis.com/v0/b/eshopreactcoder2.appspot.com/o/icons%2Femail.png?alt=media&token=4c6c0e22-3188-4aad-87d7-2a13439a487a" alt="" style={{ maxHeight: '40px' }}/> info@gamergear.com.ar
                    </div>
                    <div className="mt-2">
                        <img src="https://firebasestorage.googleapis.com/v0/b/eshopreactcoder2.appspot.com/o/icons%2Fperiscope.png?alt=media&token=800608c1-cbf3-4f5b-b3e0-39024e48e7fc" alt="" style={{ maxHeight: '40px' }}/> Av. Nazca 1043, BA
                    </div>

                    <div className="mt-2 ">
                        <img src="https://firebasestorage.googleapis.com/v0/b/eshopreactcoder2.appspot.com/o/icons%2Fwhatsapp.png?alt=media&token=c34adcc5-7c6b-4cbd-a3ef-2b4c560c1da6" alt="" style={{ maxHeight: '40px' }}/> 1160438888
                    </div>

                </div>
                <div className="col-md-4 d-flex justify-content-end align-items-center  ">
                    <div className="d-flex flex-column align-items-center ">
                        <h3 className='fw-bold fs-5 mb-4'>SOCIAL NETWORKS</h3>
                        <a href="URL_RED_SOCIAL_IG" className="text-light mb-3 me-3" target="_blank" rel="noopener noreferrer">
                        <img src="https://firebasestorage.googleapis.com/v0/b/eshopreactcoder2.appspot.com/o/icons%2Finstagram.png?alt=media&token=69c8f866-2d5b-41fc-ac6e-ac263ab41606" alt="" style={{ maxHeight: '40px' }}/>
                            INSTAGRAM
                        </a>
                        <a href="URL_RED_SOCIAL_FB" className="text-light mb-3 me-3" target="_blank" rel="noopener noreferrer">
                        <img src="https://firebasestorage.googleapis.com/v0/b/eshopreactcoder2.appspot.com/o/icons%2Ffacebook.png?alt=media&token=58f7babd-12c6-4398-9088-a3d8ab23302f" alt="" style={{ maxHeight: '40px' }}/>
                            FACEBOOK
                        </a>
                        <a href="URL_RED_SOCIAL_TW" className="text-light mb-3 me-3" target="_blank" rel="noopener noreferrer">
                            <img src="https://firebasestorage.googleapis.com/v0/b/eshopreactcoder2.appspot.com/o/icons%2Ftwitter.png?alt=media&token=e6f05307-0223-45d0-b687-7b253d53eed5" alt="" style={{ maxHeight: '40px' }}/>  TWITTER                      
                        </a>
                    </div>
                    
                </div>
                </div>

                <div className="row mt-5 border border-warning">
                    <div className="col-12 d-flex  justify-content-center">
                        <Link to='/' onClick={scrollToTop}>
                            <img className='mb-5 mt-5' src="https://firebasestorage.googleapis.com/v0/b/eshopreactcoder2.appspot.com/o/cifrado.png?alt=media&token=d067a5e5-357e-4fca-86ab-ab4d71683a92" alt="Logo" style={{ maxHeight: '100px' }} />
                        </Link>
                    </div>
                </div>
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