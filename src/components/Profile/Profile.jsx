import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Profile.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function Profile() {
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const history = useHistory();

    //useEffect
    useEffect(() => {
        dispatch({ type: 'UPDATE_NAME' });
    }, [dispatch]);

    //local state
    const [edit, setEdit] = useState(false);
    const [name, setName] = useState('');

    const handleDeleteAccount = () => {
        dispatch({
            type: 'DELETE_ACCOUNT',
        });
    };

    const handleLogOut = () => {
        dispatch({ type: 'LOGOUT' });
        history.push('/');
    };

    function handleSubmitName(event) {
        event.preventDefault();
        dispatch({
            type: 'PUT_NAME',
            payload: {
                id: user.id,
                name: name,
            },
        });
        setEdit(!edit);
    }

    return (
        <>
            <p className="view-title">Profile</p>
            <div className="settings-container">
                <ul>
                    <h1 className="greeting">
                        Hello, {}
                        {edit ? (
                            <>
                                <form
                                    className="editName-form"
                                    onSubmit={handleSubmitName}
                                >
                                    <input
                                        className="edit-input"
                                        onChange={(event) =>
                                            setName(event.target.value)
                                        }
                                        placeholder={user.name}
                                        value={name}
                                    />
                                    <button
                                        className="edit-submit"
                                        onClick={handleSubmitName}
                                        type="submit"
                                    >
                                        <CheckCircleIcon
                                            style={{
                                                fontSize: 50,
                                                color: 'limegreen',
                                            }}
                                        />
                                    </button>
                                </form>
                            </>
                        ) : (
                            <>{user.name}</>
                        )}
                    </h1>
                    <li>
                        <button onClick={() => setEdit(!edit)}>
                            <span>Edit Name</span>
                        </button>
                    </li>
                    <hr className="mx-auto"></hr>
                    <li>
                        <button onClick={handleLogOut}>
                            <span>Log Out</span>
                        </button>
                    </li>
                    <hr className="mx-auto"></hr>
                    <li>
                        <button
                            className="btn-delete"
                            onClick={handleDeleteAccount}
                        >
                            <span>Delete Account</span>
                        </button>
                    </li>
                </ul>
            </div>
            <Navbar />
        </>
    );
}
