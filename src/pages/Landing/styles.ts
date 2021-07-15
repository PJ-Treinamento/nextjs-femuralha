import styled from "styled-components";
import fundoLoginEsq from '../../assets/images/esq-login_r.svg'
import fundoLoginDir from '../../assets/images/dir-login.svg'
import logoGalinha from '../../assets/images/Galinha.svg'
import Image from 'next/Image'

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: row;
	background-color: #FFB703;                              
						
`
export const WrapEsq = styled(Image)`
	height: 100%;
	width: 50%;
	background-color: #FFB703;
	@media (max-width:80%){
								display: none;
	}
`
export const OutWrapEsq = styled.div`
	background-image: url(${fundoLoginEsq.src});
	display: flex;
	align-items: center;
	justify-content: center;
	height: 1024px;
	width: 50%;
	max-height: 1400px;
	max-width: 720px;
	background-color: #FFB703;
	@media (max-width:1024px){
								display: none;
	}
`
export const OutWrapDir = styled.div`
	background-image: url(${fundoLoginDir.src}) ;
	position: relative;
	height: 1024px;
	padding-right: 50px;
	max-height: 1024px;
	min-width: 560px;
`
export const WrapDir = styled(Image)`
//							 background:url(${fundoLoginDir});
	position: fixed;
	object-fit: cover;
  object-position: center;
	height: 1024px;
	padding-right: 50px;
	max-height: 1024px;
	min-width: 560px;
`
export const Div_Input = styled.div`

	height: 1024px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	@media (max-width:1024px){
								margin-top: 50px;
	}
`
export const Div_Label = styled.div`
 z-index: 1;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
`
export const Wrapper_Button = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 64px;
	align-items: center;
	flex-direction: column;
							 
`
export const Logo = styled.div`
							 background: url(${logoGalinha.src});
							 background-size: 50px 50px;
							 margin-top: 20px;
							 display: none;
							 height: 50px;
							 width: 50px;
							 @media (max-width:1024px){
															display: flex;
							 }
							 animation: rotation 5s infinite linear;
							@keyframes rotation {
							from {
								transform: rotate3d(0,1,0,0deg);
							}
							to {
								transform: rotate3d(0,1,0,359deg);
							}}
`
export const Logo_gigante = styled.div`
//							 background: url(${logoGalinha});
							 background-size: 400px 400px;
							 margin-top: 20px;
							 display: flex;
							 height: 400px;
							 width: 400px;							
`
