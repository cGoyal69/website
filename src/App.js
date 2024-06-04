// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PdfViewer from './components/PdfViewer';
import MyApp from './components/MyApp';

const App = () => {
    return (
            <Routes>
                <Route path="/" element={<MyApp />} />
                <Route path="/resume" element={<PdfViewer fileUrl={`${process.env.PUBLIC_URL}/resume.pdf`} />} />
            </Routes>
    );
};

export default App;
