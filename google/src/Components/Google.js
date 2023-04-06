import React from 'react'
import google from '../Images/google.png'
import "../style/google-app.css"

export default function Picture() {
  return (
    <div class= "GoogleImage">
      <img src={google} alt="google" style={{ height: "80px" }} />
    </div>
  )
}