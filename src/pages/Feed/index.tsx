
import React, {FormEvent, useState, useContext, useEffect} from 'react';
import PiuComp from '../../components/piu';
import api from '../../services/api';
import AuthContext from '../../context/AuthContext';
import { Piu } from '../../components/piu';
import Image from 'next/Image';
import Input from '../../components/input';

import { 
  Button_feed,
  Galinha,
  Header,
  Wrapper_down,
  Wrapper_right, 
  Timeline, Aside,
  Wrap,
  PiuPost,
  PostPiu,
  CountParagraph,
  Search_input,
  ProfPic
  } from './styles';

function Feed() {
  const {user} = useContext(AuthContext);
  const [pius, setPius] = useState <Piu[]> ([])
  const [values, setValues] = useState<{ text: string}>({ text: '' })

  useEffect(() =>{
    console.log(user)
    const fetchData = async () => {
      const response = await api.get('/pius')
      setPius(response.data)
      }
      fetchData()
  }, [])
 

  const postPiu = async (event: FormEvent) => {
		event.preventDefault()
		const postResponse = await api.post('/pius',{
      text: values.text},)
    const {text} = postResponse.data
    window.location.reload()
	};

  
	function onChange(event: React.ChangeEvent<HTMLInputElement>) {
		const { value, name } = event.target;
		setValues({
			...values,
			[name]: value,
		})

	}

  const count = values.text.length

  const [searchTerm, setSearchTerm] = useState('')

  return (
    <>
      <Header>
    <Galinha />
    <Wrapper_right>
      <ul>
        <li>Tendências</li>
        <li>Mensagens</li>
      </ul>
      <Button_feed>Perfil</Button_feed>
    </Wrapper_right>
  </Header>
    <Wrap>
      <Wrapper_down>
        <Aside>
          <Search_input placeholder='Busca...' 
          onChange={(event) => {setSearchTerm(event.target.value)
          }}
          />
        </Aside>
        <Timeline>
          <PiuPost>
            <Input id='text'
            type='text'
                name='text'
                label='Text'
                onChange={onChange}
            />
                <CountParagraph>{count}/140</CountParagraph>
            <PostPiu onClick={postPiu}>Piu</PostPiu> 
          </PiuPost>
          {pius.map( (piu) => { if( searchTerm === '' 
          || piu.user.username.toLowerCase().includes(searchTerm.toLowerCase())
          || piu.user.first_name.toLowerCase().includes(searchTerm.toLowerCase())
          || piu.user.last_name.toLowerCase().includes(searchTerm.toLowerCase())
          || piu.text.toLowerCase().includes(searchTerm.toLowerCase())
          )
            return(
             <PiuComp {...piu}/>
            )

          } ) }
        </Timeline>
      </Wrapper_down>
    </Wrap>
  </>
  )
}


export default Feed