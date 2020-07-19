import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row row-content align-items-center mb-4">
                    <div className="col text-center mt-3">
                        <h3>Resources</h3>
                    </div>
                </div>
                <div className="row row-content align-items-center row justify-content-center">
                    <div className="col col-1 text-center align-self-start">
                        <a className="btn btn-social-icon btn-instagram" href="https://www.instagram.com/sergey_registrr/" target="_blank"> <i className="fa fa-instagram"></i> </a>
                        <h6 className="mt-2">Sergey Kirillov</h6>
                    </div>
                    <div className="col col-1 text-center align-self-start">
                        <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/profile.php?id=100009130097486" target="_blank"> <i className="fa fa-facebook"></i> </a>
                        <h6 className="mt-2">Sergey Kirillov</h6>
                    </div>
                    <div className="col col-1 text-center align-self-start">
                        <a className="btn btn-social-icon" href="https://registrr.livejournal.com/83370.html" target="_blank"> <div className='livejournal-icon' /> </a>
                        <h6 className="mt-2">Sergey Kirillov</h6>
                    </div>
                    <div className="col col-1 text-center align-self-start">
                        <a className="btn btn-social-icon btn-google" href="https://www.youtube.com/user/kirillovsv" target="_blank"> <i className="fa fa-youtube"></i> </a>
                        <h6 className="mt-2">Sergey Kirillov</h6>
                    </div>
                    <div className="col col-1 text-center align-self-start">
                        <a className="btn btn-social-icon" href="https://breadandbread.ru/" target="_blank"> <div className='website-icon' /> </a>
                        <h6 className="mt-2">Online School</h6>
                    </div>
                    <div className="col col-1 text-center align-self-start">
                        <a className="btn btn-social-icon btn-instagram" href="https://www.instagram.com/institut_hleba/" target="_blank"> <i className="fa fa-instagram"></i> </a>
                        <h6 className="mt-2">ФГАНУ НИИХП</h6>
                    </div>
                    <div className="col col-1 text-center align-self-start">
                        <a className="btn btn-social-icon btn-instagram" href="https://www.instagram.com/niihleba_spb/" target="_blank"> <i className="fa fa-instagram"></i> </a>
                        <h6 className="mt-2">НИИ ХЛЕБА Филиал</h6>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;