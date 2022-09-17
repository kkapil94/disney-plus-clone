import React from 'react'
import styled from 'styled-components'
import { auth,provider } from '../firebase'
import { selectUserName,selectUserPhoto,setUserLogin,setSignOut } from '../features/user/userSlice'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
export default function Header() {
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const signIn = ()=>{
        auth.signInWithPopup(provider)
        .then((result)=>{
            let user = result.user;
            dispatch(setUserLogin({
                name:user.displayName,
                email:user.email,
                photo:user.photoURL
                
            }))
            navigate("/")
        })
    }
    const signOut = ()=>{
        auth.signOut().
        then(()=>{
            dispatch(setSignOut());
            navigate("/login");
        })
    }

  return (
    
    <Nav>
        <Logo src="../images/logo.svg"/>
    {!userName?(
    <LoginContainer>
    <Login onClick={signIn}>login</Login>
    </LoginContainer>
    ):
    <>
    
      <Navmenu>
        <a>
            <img src="../images/home-icon.svg"/>
            <span>HOME</span>
        </a>
        <a>
            <img src="../images/search-icon.svg"/>
            <span>SEARCH</span>
        </a>
        <a>
            <img src="../images/watchlist-icon.svg"/>
            <span>WATCHLIST</span>
        </a>
        <a>
            <img src="../images/original-icon.svg"/>
            <span>ORIGINALS</span>
        </a>
        <a>
            <img src="../images/movie-icon.svg"/>
            <span>MOVIES</span>
        </a>
        <a>
            <img src="../images/series-icon.svg"/>
            <span>SERIES</span>
        </a>
        </Navmenu> 
        <Userimg onClick={signOut} src={userPhoto}/> 
   
    </>
  } </Nav>
  )
}
const Nav = styled.nav`
    height:70px;
    background:#090b13;
    display:flex;
    align-items:center;
    padding:0 .5rem;
    overflow:hidden;
    position:stick
`
const Logo = styled.img`
    width:80px;
`
const Navmenu = styled.div`
    display:flex;
    flex:1;
    margin-left:25px;
    cursor:pointer;
    a{
        display:flex;
        align-items:center;
        padding:0 12px;
        img{
            height:20px;
        }
        span{
            position:relative;
            font-size:13px;
            letter-spacing:1.42px;
            
            &:after{
                content:"";
                height:2px;
                background:white;
                position:absolute;
                left:0;
                right:0;
                bottom:-6px;
                opacity:0;
                transform-origin:left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform:scaleX(0);
            }
        }
        &:hover{
            span:after{
                transform:scaleX(1);
                opacity:1;
            }
        }
    }
`
const Userimg = styled.img`
    height:48px;
    width:48px;
    border-radius:50%;
    margin:10px;
    cursor:pointer;
`
const Login = styled.div`
    border:2px solid #f9f9f9;
    padding:8px 16px;
    border-radius:4px;
    letter-spacing:1.5px;
    text-transform:uppercase;
    background-color:rgb(0,0,0, 0.6);
    cursor:pointer;
    transition:all 0.2s ease 0s;
    &:hover{
        background-color:#f9f9f9;
        color:#000;
        border-color:transparent;
    }

`
const LoginContainer = styled.div`
    flex:1;
    display:flex;
    justify-content:flex-end;
`