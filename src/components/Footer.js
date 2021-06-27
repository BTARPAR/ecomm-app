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
                                Online
                            </li>

                            <li>
                                Print
                            </li>

                            <li>
                                Alternative Ads
                            </li>
                        </ul>
                    </li>

                    <li className="nav__item nav__item--extra">
                        <h2 className="nav__title">Technology</h2>

                        <ul className="nav__ul nav__ul--extra">
                            <li>
                                Hardware Design
                            </li>

                            <li>
                                Software Design
                            </li>

                            <li>
                                Digital Signage
                            </li>

                        </ul>
                    </li>

                    <li className="nav__item">
                        <h2 className="nav__title">Legal</h2>

                        <ul className="nav__ul">
                            <li>
                                Privacy Policy
                            </li>

                            <li>
                                Terms of Use
                            </li>

                            <li>
                                Sitemap
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