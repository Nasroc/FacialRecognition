import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {
        if (isSignedIn === 'true') {
            return(
                <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p 
                className='f3 link dim black underline pa3 pointer'
                onClick={() => onRouteChange('signin')}
                >Sign Out</p>
            </nav>
            )
            
        } else if (isSignedIn === 'false') {
            return(
            <div>
                <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <p className='f3 link dim black underline pa3 pointer' onClick={() => onRouteChange('signin')}>Sign In</p>
                    <p className='f3 link dim black underline pa3 pointer' onClick={() => onRouteChange('register')}>Register</p>
                </nav>
            </div>)
        }
    }

export default Navigation;