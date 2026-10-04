import React from 'react' 
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import auth from '../../config/firebase'

function Navbar() {
    const navigate = useNavigate()
    const [log, setLog] = React.useState(false)

    useEffect(() => {
       auth.onAuthStateChanged((user) => {
            if (user) {
              setLog(true)
                // User is signed in, you can access user information here
                console.log('User is signed in:', user);    
            } else {
              setLog(false)
                // User is signed out, handle accordingly
                console.log('User is signed out.');
            } });
    }, []);


    
  return (
    <div className='py-5 flex justify-between items-center'>
        <h2 className='text-2xl font-bold'>Personal</h2>
        <div className='flex items-center'>
            <Link className='list-none px-5' to={"/home"}>Home</Link>
            <Link className='list-none px-5' to={"/blogs"}>Blogs</Link>
            <Link className='list-none px-5'>About</Link>
            {log ? (
                <button className='button-style hidden md:block' onClick={() => {
                    auth.signOut();
                }}>
                    Logout
                </button>
            ) : (
                <button className='button-style hidden md:block' onClick={() => navigate("/login")}>
                    Login
                </button>
            )}
        </div>
    </div>
  )
}

export default Navbar