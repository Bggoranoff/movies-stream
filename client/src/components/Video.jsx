import React from 'react';

function Video() {
    return (
        <video controls className='video-box' autoPlay={true}>
            <source src={require('../assets/test.mp4')} type='video/mp4' />
        </video>
    );
};

export default Video;