import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home/Home'
import Catalogue from "./pages/catalogue/Catalogue";
import Contactus from "./pages/contactus/Contactus";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HeaderMenu from "./components/HeaderComponent/index.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
          <HeaderMenu/>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalogue" element={<Catalogue />} />
              <Route path="/catalogue/:catalogueId" element={<Catalogue />} />
              <Route path="/contactus" element={<Contactus />} />
              <Route path="*" element={<ErrorPage />} />
          </Routes>

      </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
