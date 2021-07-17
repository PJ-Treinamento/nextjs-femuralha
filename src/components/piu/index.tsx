import React, { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import api from "../../services/api";
import Image from "next/Image";
import Galinha from '../../assets/images/Galinha.svg'

import { Wrapper, 
  Piu_interaction,
  Piu_comments,
  Piu_content,
  ProfPic,
  Like_btn,
  Share_btn,
  Delete,
  Delete_div,
  WrapFlex
     } from "./styles";
export interface Piu {
	id: string;
	user: User;
	likes: PiuLike[];
	text: string;
	created_at?: Date;
	updated_at?: Date;
}
interface PiuLike {
	id: string;
	user: User;
	piu: Piu;
}
interface User {
	id: string;
	username: string;
	first_name: string;
	last_name: string;
	email: string;
	about: string;
	photo: string;
	pius: Piu[];
	likes: PiuLike[];
	following: User[];
	followers: User[];
	favorites: Piu[];
}
 interface PiuProps {
  id: string;
  likes?: PiuLike[];
  text: string;
  username?: string;
 }

const PiuComp: React.FC <Piu> = ({id , likes, text, user }) => {
  
  
  const {token} = useContext(AuthContext);
  const deletePiu = async () => {
      const deleteResponse = await api.delete('/pius',
      { data: {piu_id:id},
      headers: { authorization: `Bearer ${token}` }})}


  const[likeCount,setLikeCount] = useState(0)

  const piuLike = async () => {
    const likeResponse = await api.post('/pius/like',
    {'piu_id':id},
    {headers: { authorization: `Bearer ${token}` }})
    if (likeResponse.data.operation === 'like'){
      setLikeCount(likeCount + 1)
    }
    else{
      setLikeCount(likeCount - 1)
    }
  }
  
//Não tive tempo de acabar o fav :(
  
  const piuFav = async () => {
    const favResponse = await api.post('/pius/favorite',
    {'piu_id':id},
    {headers: { authorization: `Bearer ${token}` }})
  }
  let photo = user.photo
  if(photo === '.....') photo = Galinha
  return(
    <Wrapper>
      <Piu_interaction>
        <ProfPic src={photo ? photo : Galinha} width={30} height={30}/>
        <Like_btn onClick={piuLike}/>
        <p className='Count'>{likes.length + likeCount}</p>
        <Share_btn onClick={piuFav}/>
      </Piu_interaction>
      <Piu_content>
        <h2>{user.username}</h2>
        <p className='Content_piu'>{text}</p>
      </Piu_content>
      <Delete_div>
        <Delete onClick={deletePiu} id={id}>Del</Delete>
      </Delete_div>
      <Piu_comments>
        <input className='Input-Comment' placeholder='Comentários' type="text" />
      </Piu_comments>
    </Wrapper>
  )

}

export default PiuComp