import React from 'react'
import styled from 'styled-components'
import AnandTube from '../img/logo.png'
import {AiFillHome, AiOutlineFlag, AiFillSetting} from 'react-icons/ai'
import { BsNewspaper, BsLightbulb} from 'react-icons/bs'
import { MdLibraryMusic, MdOutlineLocalMovies, MdOutlineVideoLibrary, 
           MdSportsBasketball, MdOutlineExplore, MdSubscriptions, MdOutlineLiveTv
} from 'react-icons/md'
import {FaHistory, FaUserCircle} from 'react-icons/fa'
import { BiHelpCircle} from 'react-icons/bi'
import { TbDeviceGamepad2 } from 'react-icons/tb'
import {Link} from "react-router-dom"


const Container = styled.div`
 flex : 1;
 background-color : ${({theme})=> theme.bgLighter};
 height: 100vh;
 color: ${({theme}) => theme.text};
 font-size: 14px;
 position: sticky;
 top: 0;
`

const Wrapper = styled.div`
 padding: 8px 20px;
`
const Logo = styled.div`
 display: flex;
 align-items: center;
 gap: 5px;
 font-weight: bold;
 margin-bottom: 25px;
`
const Img = styled.img`
    height: 25px;
`
const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    padding: 6px 0px;

    &:hover{
        background-color: ${({theme})=> theme.soft};
    }
`
const Hr = styled.hr`
    margin: 5px 0px;
    border: 0.5px solid ${({theme})=> theme.soft};
    `

const Login = styled.div``;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Title = styled.h2`
    font-size: 14px;
    font-weight: 500;
    color: #aaaaaa;
    margin-bottom: 5px;
`
const Menu = ({darkMode, setDarkMode}) => {
  return (
    <Container>
        <Wrapper>
        <Link to="/" style={{textDecoration : "none", color: "inherit"}}>
            <Logo>
                <Img src={AnandTube}/>
                AnandTuber
            </Logo>
            </Link>
            <Item>
                <AiFillHome/>
                Home
            </Item>
            <Item>
                <MdOutlineExplore/>
                Explore
            </Item>
            <Item>
                <MdSubscriptions/>
                Subscriptions
            </Item>
            <Hr/>
            <Item>
                <MdOutlineVideoLibrary/>
                Library
            </Item>
            <Item>
                <FaHistory/>
                History
            </Item>

            <Hr/>
            <Login>
                Sign in to like videos, comment, and subscribe
                <Link to="signin" style={{textDecoration : "none"}}>
                <Button>
                    <FaUserCircle/> 
                    Sign In
                </Button>
                </Link>
            </Login>
        
            <Hr/>
            <Title>BEST OF LAMATUBE</Title>
            <Item>
                <MdLibraryMusic/>
                Music
            </Item>
            <Item>
                <MdSportsBasketball/>
                Sports
            </Item>
            <Item>
                <TbDeviceGamepad2/>
                Gaming
            </Item>
            <Item>
                <MdOutlineLocalMovies/>
                Movies
            </Item>
            <Item>
                <BsNewspaper/>
                News
            </Item>
            <Item>
                <MdOutlineLiveTv/>
                Live
            </Item>
            <Hr/>
            <Item>
                <BsNewspaper/>
                News
            </Item>
            <Item>
                <AiFillSetting/>
                Setting
            </Item>
            <Item>
                <AiOutlineFlag/>
                Report
            </Item>
            <Item>
                <BiHelpCircle/>
                Help
            </Item>
            <Item onClick={()=>{
                setDarkMode(!darkMode)
            }}>
                <BsLightbulb/>
                Light Mode
            </Item>
        </Wrapper>
    </Container>
  )
}

export default Menu