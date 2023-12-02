import { Route, Routes } from 'react-router';
import Navbar from '../components/Navbar/Navbar'

import { Home } from './Home';
import Team from './Team/Team';
const Mroutes = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}>
                </Route>
                <Route path="/team" element={<Team />}>
                </Route>
            </Routes>
        </>
    )
}

export default Mroutes