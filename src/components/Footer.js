import React from 'react';
import '../styles/footer.scss'

const Footer = () => {

    return (
        <div className='footer-container'>
            <footer className="footer">
                <div className="footer__addr">
                    <h1 className="footer__logo">Ecom Company</h1>
                </div>

                <ul className="footer__nav">
                    <li className="nav__item">
                        <h2 className="nav__title">Media</h2>

                        <ul className="nav__ul">
                            <li>
                                <a href="#">Online</a>
                            </li>

                            <li>
                                <a href="#">Print</a>
                            </li>

                            <li>
                                <a href="#">Alternative Ads</a>
                            </li>
                        </ul>
                    </li>

                    <li className="nav__item nav__item--extra">
                        <h2 className="nav__title">Technology</h2>

                        <ul className="nav__ul nav__ul--extra">
                            <li>
                                <a href="#">Hardware Design</a>
                            </li>

                            <li>
                                <a href="#">Software Design</a>
                            </li>

                            <li>
                                <a href="#">Digital Signage</a>
                            </li>

                        </ul>
                    </li>

                    <li className="nav__item">
                        <h2 className="nav__title">Legal</h2>

                        <ul className="nav__ul">
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>

                            <li>
                                <a href="#">Terms of Use</a>
                            </li>

                            <li>
                                <a href="#">Sitemap</a>
                            </li>
                        </ul>
                    </li>
                </ul>

                <div className="legal">
                    <p>&copy; {new Date().getFullYear()} Ecomm. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer