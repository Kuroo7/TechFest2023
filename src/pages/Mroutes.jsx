import { Route, Routes } from 'react-router';
import Navbar from '../components/Navbar/Navbar'

import { Home } from './Home';
import Team from './Team/Team';
import DayOneEvents from './DayOneEvents/DayOneEvents';
import DayTwoEvents from './DayTwoEvents/DayTwoEvents';
import DayTwoDetails from './DayTwoDetails/DayTwoDetails';
import DayOneDetails from './DayOneDetails/DayOneDetails';
const Mroutes = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}>
                </Route>
                <Route path="/team" element={<Team />}>
                </Route>
                <Route path="/Day1" element={<DayOneEvents />}>
                </Route>
                <Route path="/Day2" element={<DayTwoEvents />}>
                </Route>
                <Route path="/Day2/:id" element={<DayTwoDetails />}>
                </Route>
                <Route path="/Day1/:id" element={<DayOneDetails />}>
                </Route>
            </Routes>
        </>
    )
}

export default Mroutes