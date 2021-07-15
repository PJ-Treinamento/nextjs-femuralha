import styled from "styled-components";
import Image from "next/Image";
import logoGalinha from '../../assets/images/Galinha.svg'

export const Wrap = styled.div`
  margin: 0 auto;
  min-width: 500px;
  display: flex;
  justify-content: space-around;
`
export const ProfPic = styled(Image)`
  height: 35px;
  width: 35px;
  display: flex;
`
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  background-color: #FFFFFF;  
  height:80px;
  min-width: 400px;
`
export const Wrapper_right = styled.div`
  display: flex;
  align-items: center;
`
export const Galinha = styled.div`
  background: url(${logoGalinha});
  background-size: 60px 60px;
  display: flex;
  height: 60px;
  width: 60px;
  animation: rotation 5s infinite linear;
  @keyframes rotation {
  from {
    transform: rotate3d(0,0,0,0deg);
  }
  to {
    transform: rotate3d(0,1,0,359deg);
  }}
`
export const Button_feed = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFB703;
  border-radius: 40px;
  width: 120px;
  height: 30px;
  border: none;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
`

export const Wrapper_down = styled.div`
  display: flex;
`
export const Aside = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 400px;
  margin-top: 20px;
  margin-right: 15px;
  min-width: 100px;
  margin-right: 16px;
  @media (max-width:1024px){
    display: none;
               }
`
export const Timeline = styled.div`
  display: block;
  width: 624px;
  min-height: 100px;
  background-color: #ffffff;
  min-width: 400px;
  margin-top: 13px;
  background: #fff;
  border-radius: 12px;
  
`
export const  PiuPost = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 72px;
  border-bottom: 1px solid black;
               
`
export const PostPiu = styled.button` 
  width: 90px;
  height: 30px;
  margin-left: 8px;
  font: 700 16px Montserrat;
  border: 0px;
  `
export const CountParagraph = styled.p`
  margin-left: 10px;
`
export const H2_busca = styled.h2`
margin-left:3px;`

export const Search_input = styled.input`
display: flex;
align-items: center;
justify-content: center;
border: 1px solid #e6ecf0;
width: 55%;
min-width: 380px;		
height: 40px;
padding: 5px;
font-size: 16px;
color:#667581;
border-radius: 16px;
margin-left: 5px;
`