import React from "react";
import styled from "styled-components";
export default function Login() {
  return (
    <Container>
      <CTA>
        <CtaLogoOne src="./images/cta-logo-one.svg"></CtaLogoOne>
        <Signup>Get all there</Signup>
        <Description>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit sint
          praesentium necessitatibus totam optio error sed, similique rerum
        </Description>
        <CtaLogoTwo src="./images/cta-logo-two.png"></CtaLogoTwo>
      </CTA>
    </Container>
  );
}
const Container = styled.div`
  background-position: top;
  background-size: cover;
  position: relative;
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
  &:before {
    position: absolute;
    content: "";
    background: url("./images/login-background.jpg") center center / cover
      no-repeat fixed;
    opacity:0.7;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: -1;
  }
`;
const CTA = styled.div`
  width: 70%;
  max-width: 650px;
  padding: 80px 40px;
  display: flex;
  flex-direction: column;
  align-items:center;
`;
const CtaLogoOne = styled.img``;
const Signup = styled.a`
  background: #0063e5;
  width: 100%;
  text-align: center;
  font-weight: bold;
  padding: 17px 0;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  margin: 8px 0 12px 0;
  letter-spacing: 1.5px;
  &:hover {
    background: #0483ee;
  }
`;
const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  line-height: 1.5;
  text-align:center;
`;
const CtaLogoTwo = styled.img`
width:90%;
`
