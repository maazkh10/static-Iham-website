import React from 'react'
import Profile from '../../components/About/Profile'
import Vision from '../../components/About/Vision'
import Mission from '../../components/About/Mission'
import VisionSection from '../../components/About/new-vison'

function About() {
  return (
    <div>
        <Profile />
        {/* <Vision /> */}

<VisionSection />

        <Mission />
    </div>
  )
}

export default About