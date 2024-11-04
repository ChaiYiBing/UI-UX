import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './homepage'; // Make sure this path is correct
import RoomPage from './roompage'; // Make sure this path is correct
import RoomDetailPage from './booking'; // Import the new RoomDetailPage
import Member from './member';
import NotificationPage from './notification';
import ProfilePage from './profile';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/room" element={<RoomPage />} />
                <Route path="/room/001" element={<RoomDetailPage />} />
                <Route path="/member" element={<Member />} /> 
                <Route path="/notification" element={<NotificationPage />} />
                <Route path='/profile' element={<ProfilePage/>}/>
            </Routes>
        </Router>
    );
}

export default App;
