import React from 'react';


const HomeStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#393e46',
    width: '100%',
    height: '70vh',
    padding: '2rem',
    boxSizing: 'border-box'
}

const Home = () => {
    return (
        <>
            <div style={HomeStyle}> 
                <span style={{fontSize: '5rem', textAlign: 'center'}}>World'S largest product store, Get your product here !</span>
            </div>
        </>
    )
}

export default Home;