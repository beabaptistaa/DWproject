import React from 'react';
import{ Route, Routes, useLocation,} from "react-router-dom";
import Obras from '../pages/Obras';
import Vida from '../pages/Vida';
import Sobre from '../pages/Sobre';
import Home from '../pages/Home';
import Navbar from './menu/Navbar';
import Poema from '../pages/Poema';

import {AnimatePresence} from 'framer-motion';

function AnimatedRoutes(){
    const location = useLocation();
    return(
        <AnimatePresence>
            {location.pathname !== '/' && <Navbar />}  
            <Routes  location={location} key={location.pathname}>
                <Route path='/' index element={<Home />} />
                <Route path='obras' element={<Obras />} />
                <Route path='vida' element={<Vida />} />
                <Route path='sobre' element={<Sobre />} />
                <Route path='poema' element={<Poema />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;