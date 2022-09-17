import React, {useEffect,useState }from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import db from '../firebase';
export default function Detail() {
    const {id} = useParams();
    const [movie,setMovie] = useState()
    useEffect(()=>{
      db.collection("movies")
      .doc(id)
      .get()
      .then(
        (doc)=>{
          if(doc.exists){
            setMovie(doc.data())
            console.log(doc.data())
          }
          else{

          }
        }
      )
    },[])
  return (
    <Container>
      {movie&&
      (<> <Background>
        <img src={movie.backgroundImg} alt="" />
      </Background>
      <Img>
        <img src={movie.titleImg} alt="" />
      </Img>
      <Controls>
        <Playbutton>
          <img src="../images/play-icon-black.png" alt="" />
          <span>PLAY</span>
        </Playbutton>
        <Trailorbutton>
          <img src="../images/play-icon-white.png" alt="" />
          <span>TRAILOR</span>
        </Trailorbutton>
        <Addbutton>
          <span>+</span>
        </Addbutton>
        <Groupbutton>
          <img src="../images/group-icon.png" alt="" />
        </Groupbutton>
      </Controls>
      <Subtitle>
        {movie.subTitle}
        <Description>
        {movie.description}
        </Description>
      </Subtitle> </>)
        }
    </Container>
  )
}
const Container = styled.div`
  min-height:calc(100vh - 70px);
  width: 0px calc(3.5vw + 5px);
  position:relative;
  max-width:760px;
`
const Background = styled.div`
  position:fixed;
  top:60px;
  bottom:0;
  right:0;
  left:0;
  z-index:-1;
  img{
    height:100%;
    width:100%;
    object-fit:cover;
  }
`
const Img = styled.div`
height:30vh;
width:30vw;
min-height:170px;
min-width:200px;
margin-top:50px;
margin-left:40px;
 img{
  height:100%;
  width:100%;
  object-fit:cover;
 }
`
const Controls = styled.div`
display:flex;
align-items:center;
margin-top:30px;
`
const Playbutton = styled.button`
display:flex;
align-items:center;
cursor:pointer;
border-radius:4px;
margin:0px 22px 0px 40px;
font-size:15px;
padding:0 24px;
background:rgb(249,249,249);
border:none;
height:56px;
letter-spacing:1.8px;
&:hover{
  background:rgb(249,249,249, 0.8);
}
`
const Trailorbutton = styled(Playbutton)`
  margin-left:0px;
  background:rgb(0,0,0,0.8);
  border:1px solid white;
  color:rgb(249,249,249);
`
const Addbutton = styled.button`
  border-radius:50%;
  width:44px;
  height:44px;
  margin-right:16px;
  font-size:30px;
  background:rgb(0,0,0,0.6);
  color:white;
  border:2px solid white;
`
const Groupbutton = styled(Addbutton)`
display:flex;
justify-content:center;
`
const Subtitle = styled.div`
margin: 35px 0 0 35px;
`
const Description = styled.div`
margin-top:15px;
`