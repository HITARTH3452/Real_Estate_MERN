// import React from 'react'
import { app } from '../firebase';
import { GoogleAuthProvider , getAuth , signInWithPopup } from 'firebase/auth'
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';

function OAuth() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleGoogleClick = async () => {
        try{
            const provider = new GoogleAuthProvider();
            const auth = new getAuth(app);

            const result = await signInWithPopup(auth ,provider)
            // console.log(result);
            const res = await fetch('api/auth/google' , {
                method : 'POST',
                headers : {
                    "content-type" : "application/json",
                },
                body : JSON.stringify({name : result.user.displayName , email : result.user.email , photo :result.user.photoURL})
            })

            const data = await res.json();
            dispatch(signInSuccess(data));
            navigate('/');
        }catch(error){
            console.log('could not sign in with google');
            console.log(error)
        }
    }
  return (
   <button onClick={handleGoogleClick} type='button' className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disable-95">
    Continue with Google
   </button>
  )
}

export default OAuth
