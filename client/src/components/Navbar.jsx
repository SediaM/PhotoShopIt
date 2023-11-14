import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
// import SearchPhotos from './';
// import SeePhotos from './';

import React from "react";
// import "../style.css";
import { useNavigate } from 'react-router-dom';

// import logo from "../assets/proj3.png";
import Auth from '../utils/auth';

const logo = "logo";
export default function Game() {
    const history = useNavigate();

    const handleLogout = () => {
        Auth.logout();
        history.push('/');
    };

    const containerStyle = {
        marginTop: "10vh",
    };

    const cardStyle = {
        marginTop: "10vh",
        maxWidth: "60%",
        padding: "20px",
    };

    const buttonGroupStyle = {
        display: "flex",
        justifyContent: "center", // Align buttons horizontally in the center
    };

    const button1Style = {
        margin: "0 10px", // Add margin between buttons
        width: "180px",
        backgroundColor: '#ddd',
        border: 'none',
        color: 'black',
        padding: '10px 20px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        cursor: 'pointer',
        borderRadius: '16px'
    };

    const button2Style = {
        margin: "0 10px", // Add margin between buttons
        width: "180px",
        backgroundColor: '#ddd',
        border: 'none',
        color: 'black',
        padding: '10px 20px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        cursor: 'pointer',
        borderRadius: '16px'
    };

    const button3Style = {
        margin: "0 10px", // Add margin between buttons
        width: "180px",
        backgroundColor: '#ddd',
        border: 'none',
        color: 'black',
        padding: '10px 20px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        cursor: 'pointer',
        borderRadius: '16px'
    };

    const imageStyle = {
        width: "90px",
    };

    const getFormattedDate = () => {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();
        return mm + '/' + dd + '/' + yyyy;
    };

    const cardBottomStyle = {
        marginTop: "20px",
        textAlign: 'center', // Center align the text
        fontSize: 'smaller', // Make the text smaller
    };

    return (
        <>
            <div
                className="container-fluid d-flex h-100 justify-content-center align-items-center"
                style={containerStyle}
            >
                <div className="card text-center bg-dark text-light" style={cardStyle}>
                    <div className="card-body">
                        <div className="picture">
                            <img src={logo} alt="logo to our app" style={imageStyle} />
                        </div>
                        <h2 className="card-title">Sudoku</h2>
                        <p className="cardDescription">
                            Fill in each square, don't repeat numbers in the same box or line
                        </p>
                        <div style={buttonGroupStyle}>
                            <a
                                href="/Instructions"
                                className="btn"
                                style={button1Style}
                            >
                                How to Play
                            </a>
                            {Auth.loggedIn() ? (
                                <button
                                    className="btn" style={button2Style} onClick={handleLogout}
                                >Logout

                                </button>

                            ) : (
                                <a href="/Login" className="btn" style={button2Style}>
                                    Login
                                </a>
                            )}
                            <a href="/Game" className="btn" style={button3Style}>
                                Play
                            </a>
                        </div>
                        <div className="cardBottom" style={cardBottomStyle}>
                            {getFormattedDate()}
                        </div>
                    </div>
                </div>
            </div>
            <div className="wrap">
                <svg className="svg">
                    <text
                        x="10"
                        y="90"
                        font-family="Helvetica, Arial, sans-serif"
                        font-size="80"
                        fill="white"
                    >
                        1
                    </text>
                </svg>

                <svg className="svg">
                    <text
                        x="10"
                        y="90"
                        font-family="Helvetica, Arial, sans-serif"
                        font-size="80"
                        fill="white"
                    >
                        2
                    </text>
                </svg>

                <svg className="svg">
                    <text
                        x="10"
                        y="90"
                        font-family="Helvetica, Arial, sans-serif"
                        font-size="80"
                        fill="white"
                    >
                        3
                    </text>
                </svg>

                <svg className="svg">
                    <text
                        x="10"
                        y="90"
                        font-family="Helvetica, Arial, sans-serif"
                        font-size="80"
                        fill="white"
                    >
                        4
                    </text>
                </svg>

                <svg className="svg">
                    <text
                        x="10"
                        y="90"
                        font-family="Helvetica, Arial, sans-serif"
                        font-size="80"
                        fill="white"
                    >
                        5
                    </text>
                </svg>

                <svg className="svg">
                    <text
                        x="10"
                        y="90"
                        font-family="Helvetica, Arial, sans-serif"
                        font-size="80"
                        fill="white"
                    >
                        6
                    </text>
                </svg>

                <svg className="svg">
                    <text
                        x="10"
                        y="90"
                        font-family="Helvetica, Arial, sans-serif"
                        font-size="80"
                        fill="white"
                    >
                        7
                    </text>
                </svg>

                <svg className="svg">
                    <text
                        x="10"
                        y="90"
                        font-family="Helvetica, Arial, sans-serif"
                        font-size="80"
                        fill="white"
                    >
                        8
                    </text>
                </svg>

                <svg className="svg">
                    <text
                        x="10"
                        y="90"
                        font-family="Helvetica, Arial, sans-serif"
                        font-size="80"
                        fill="white"
                    >
                        9
                    </text>
                </svg>
            </div>
        </>
    );
}

export default AppNavbar;
