// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PdfViewer from './components/pdfViewer';
import MyApp from './components/MyApp';

const App = () => {
    return (
            <Routes>
                <Route element={<MyApp/>} basename={process.env.PUBLIC_URL}/>
                <Route path="/resume" element={<PdfViewer fileUrl={`${process.env.PUBLIC_URL}/resume.pdf`} />} />
            </Routes>
    );
};

export default App;
