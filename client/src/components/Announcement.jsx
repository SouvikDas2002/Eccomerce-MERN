import React from 'react'
import styled from 'styled-components';
import Marquee from "react-fast-marquee";

const Container=styled.div`
    height:30px;
    background-color:teal;
    color:white;
    display:flex;
    align-items:center;
    font-size:14px;
    font-weight:500;
    letter-spacing:2px;
`

const Announcement = () => {
  return (
    <Container>
        <Marquee>Super Deal! Free Shipping on Orders Over $50</Marquee>
    </Container>
  )
}

export default Announcement