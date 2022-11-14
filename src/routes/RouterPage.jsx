import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PlaceToStayPage from '../pages/PlaceToStayPage';

const RouterPage = () => (
  <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/place-to-stay" element={<PlaceToStayPage />} />
      <Route path="/nfts" element={<PlaceToStayPage />} />
      <Route path="/community" element={<PlaceToStayPage />} />
    </Routes>
  </>
);

export default RouterPage;
