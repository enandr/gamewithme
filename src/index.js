import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Route, Routes } from "react-router-dom";
import './index.css';
import {LandingPage, AboutPage,WaitlistPage,AdminPage} from './pages'
import reportWebVitals from './reportWebVitals';
import Navbar from "./library/Navbar";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Navbar/>
        <h1 className={'landing-title'} style={{textAlign: 'center'}}>
            <span className={'landing-blue'}>game</span>
            <span className={'landing-orange'}>with</span>
            <span className={'landing-blue'}>me</span>
        </h1>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="waitlist" element={<WaitlistPage />} />
            <Route path="admin" element={<AdminPage />} />
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
