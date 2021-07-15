import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";
import Router from 'next/router'
import {parseCookies, setCookie} from 'nookies'

interface AuthContextData {
  signed: boolean;
  user: User;
  token: string;
  setUserData:React.Dispatch<React.SetStateAction<IUserData>>;
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

interface Piu {
  id: string;
  user: User;
  likes: PiuLike[];
  text: string;
  created_at: Date;
  updated_at: Date;
}

interface PiuLike {
  id: string;
  user: User;
  piu: Piu;
}
interface IUserData{
  user: User;
  token: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);


export const AuthProvider: React.FC = ({ children }) => {
  const [userData, setUserData] = useState<IUserData>({} as IUserData)

    useEffect (()=>{
      const { '@PiuPiuwer:token': token } = parseCookies()
      async function loadUsers() {
        if (token){
          api.defaults.headers.Authorization = `Bearer ${token}`
          console.log('CARALHO MANO DEU CERTO')
          Router.push('/Feed')
        }
      }
      loadUsers()
    }, [])
  
  return (
    <AuthContext.Provider value={{ 
      setUserData,
      signed: Boolean(userData.token),
      token: userData.token,
      user: userData.user
    }}>

      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

export default AuthContext
