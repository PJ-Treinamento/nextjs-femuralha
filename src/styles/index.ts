import { createGlobalStyle } from 'styled-components';

export const color = {
	primary: 'black',
	secondary: 'green'
}
export const GlobalStyle = createGlobalStyle`
*{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
}
html{
    font-size: 62.5%;// Isso existe para que 1rem seja igual a 10px, caso não tiver usando rem pode apagar;
}
body{
		margin: 0;
		padding: 0;
		background: #ffffff;
		font-family: Montserrat;
		background-color: #FFB703;
}
label{
		margin-top: 2px;
		margin-bottom: 2px;
		margin-left: 7px;
		font:  400 16px Montserrat;
}
h2{
	font:600 16px Montserrat;;
}
button {
		width: 240px;
		height: 56px;
		border-radius: 40px;
		margin-right: 1.6rem;
		margin-bottom: 8px;
		font:  600 20px Montserrat;
		border: 1px solid #667581;
		display: flex;
		align-items: center;
		justify-content: center;
		color: black;
		text-decoration: none;
		background-color: #FFB703;
		transition: all 0.5s;
		}
button:hover{
		transform: scale(1.1) perspective(1px);
		cursor: pointer;
}

ul{
	list-style: none;
	display: flex;
	align-items: center;
}
li{
	display: flex;
	align-items: center;
	font-size: 15px;
	margin-right: 20px;
	font-weight: bold;
}
a{
	cursor: pointer;
	text-decoration: none;
}
`