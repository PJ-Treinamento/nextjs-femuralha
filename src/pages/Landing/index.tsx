import React, { FormEvent, useContext, useState} from 'react';
import Input from '../../components/input/index';
import { Wrapper, OutWrapEsq, OutWrapDir, Div_Input, Div_Label, Wrapper_Button, Logo } from './styles';
import api from '../../services/api';
import {setCookie} from 'nookies'
import AuthContext from '../../context/AuthContext';


function Landing() {

	const {setUserData} = useContext(AuthContext);
	const [values, setValues] = useState<{ user: string, password: string }>({ user: '', password: '' })

	function onChange(event: React.ChangeEvent<HTMLInputElement>) {
		const { value, name } = event.target;
		setValues({
			...values,
			[name]: value,
		})

	}

	const handleLogin = async (event: FormEvent) => {

		event.preventDefault()
		const response = await api.post('/sessions/login',
		 { email: values.user, password: values.password })
		const { token, user } = response.data
		setCookie(undefined,"@PiuPiuwer:token", token, {
			maxAge: 60 * 60 //1 hora
		})
	  setUserData({user: user, token: token})
		console.log(token, user)
	};

	return (
		<Wrapper>
			<OutWrapEsq>
					<Logo/>
			</OutWrapEsq>
			<OutWrapDir>
				<Div_Input>
					<Logo/>
					<form >
						<Div_Label>
							<label htmlFor="User"> User</label>
							<Input
								id='user'
								name='user'
								label='User'
								onChange={onChange}
								value={values.user}
							/>
						</Div_Label>
						<Div_Label>
							<label htmlFor="password"> Senha</label>
							<Input
							type='password'
								id='password'
								name='password'
								label='password'
								onChange={onChange}
								value={values.password}
							/>
						</Div_Label>
						<Wrapper_Button>
							<button  onClick={handleLogin}>Entrar</button>
							<button>Resgistro</button>
						</Wrapper_Button>
					</form>
				</Div_Input>
			</OutWrapDir>
		</Wrapper>
	)

}

export default Landing