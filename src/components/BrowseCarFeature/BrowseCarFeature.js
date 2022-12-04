import React from 'react'
import Button from 'react-bootstrap/Button';

function BrowseCarFeature(props) {
  return (
    <div className='d-flex flex-row justify-content-center flex-wrap'>
        <div className='px-2 mx-2'>
            <img src={props.imgSrc} alt="featured pic" style={{width: "389px", height: "266px"}}/>
        </div>
        <div style={{padding:"10px 40px", width:"400px", textAlign:"left"}}>
            <h3>Find the perfect car <span style={{color:"#593cfb"}}>{props.label}</span></h3>
            <p>{props.para}</p>
            <Button variant="primary">Browse Cars</Button>
        </div>
    </div>
  )
}

export default BrowseCarFeature