import React from 'react';
import logo from '../../assets/images/home.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <div>
                <img src={logo} alt="" />
                <p>Guitare Ltd.<br />Providing reliable tech since 2022</p>
            </div>
            <div>
                <span className="footer-title">Categories</span>
                <Link className="link link-hover">Guitar</Link>
                <Link className="link link-hover">Drums</Link>
                <Link className="link link-hover">Keyboards</Link>
                <Link className="link link-hover"></Link>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <Link className="link link-hover">About us</Link>
                <Link className="link link-hover">Contact</Link>
                <Link className="link link-hover">Albums</Link>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <Link className="link link-hover">Terms of use</Link>
                <Link className="link link-hover">Privacy policy</Link>
                <Link className="link link-hover">Cookie policy</Link>
            </div>
        </footer>
    );
};

export default Footer;