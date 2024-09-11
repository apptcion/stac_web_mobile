'use client'
import { useEffect, useState } from 'react'

import Header from './header'
import HeaderStyles from '../css/header.module.css'
import Intro from './intro'
import UserApply from './userApply'
import BrandApply from './brandApply'


export default function Home() {

  const [screen, setScreen] = useState(`${HeaderStyles.intro}`)

  const changeScreen = (newState) => {
    setScreen(newState)
  }

  return (
    <main style={{'background-color' : 'white'}}>
      <Header state={screen} setState={changeScreen}/>
      {screen === HeaderStyles.intro && <Intro />}
      {screen === HeaderStyles.costmer_apply && <UserApply />}
      {screen === HeaderStyles.brand_apply && <BrandApply />}
    </main>    
  );
}
