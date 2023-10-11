import React from 'react';
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInsuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';

const OAuth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleGoogleClick = async () => {
        try {
            const provider = new GoogleAuthProvider()
            const auth = getAuth(app);

            const result = await signInWithPopup(auth,provider)

        const res = await fetch('/Api/auth/google',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name:result.user.displayName, email:result.user.email,
            photo:result.user.photoURL}),
        });
        const data = await res.json()
        dispatch(signInsuccess(data));
        navigate('/');
        } catch (error) {
            console.log('could not sign in with google',error);
        }
    }
  return (
    <button type='button' onClick={handleGoogleClick} className='bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95'>
      continue with google
    </button>
  )
}

export default OAuth
