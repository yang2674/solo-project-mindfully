import * as React from 'react';
import { useHistory } from 'react-router-dom';
import '../Navbar/Navbar.css';

//mui
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';

export default function Navbar() {
    const history = useHistory();

    return (
        <div className="navbar">
            <button
                onClick={() => {
                    history.push('/dashboard');
                }}
            >
                <HomeIcon style={{ fontSize: 60 }} />
            </button>
            <button
                onClick={() => {
                    history.push('/practices');
                }}
            >
                <PsychologyIcon style={{ fontSize: 60 }} />
            </button>
            <button
                onClick={() => {
                    history.push('/profile');
                }}
            >
                <AccountCircleIcon style={{ fontSize: 60 }} />
            </button>
            <button
                onClick={() => {
                    history.push('/checkins/feeling');
                }}
            >
                <FormatListBulletedIcon style={{ fontSize: 60 }} />
            </button>
        </div>
    );
}
