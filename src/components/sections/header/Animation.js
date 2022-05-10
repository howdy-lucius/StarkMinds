import React from 'react';
import Lottie from 'lottie-react-web'
import animation from './data.json'

const Animation = () => (
    <div className="stark-logo-animation">
        <Lottie
        options={{
            animationData: animation,
            loop: false
        }}
        />
    </div>
  )
  
export default Animation;