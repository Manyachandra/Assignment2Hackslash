import React from 'react';
import './content.css';
import { MDBBtn } from 'mdb-react-ui-kit';


export default function Content() {

  return (
    <div className='body'>
        <div className='first'>
            <h1> Experience the Fusion <br/> of Technology and <br/> Culture</h1>
        </div>
        <div className='second'>
            <h6> Join us for an unforgettable celebration of innovation and creativity.</h6>
        </div>
        <MDBBtn outline color='light'>Learn More</MDBBtn>

    </div>
  );
}