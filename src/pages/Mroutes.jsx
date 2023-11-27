import { Route, Routes } from 'react-router';
import Navbar from '../components/Navbar/Navbar'

import { Home } from './Home';
const Mroutes = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}>
                </Route>
            </Routes>
        </>
    )
}

export default Mroutes