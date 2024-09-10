'use client'
import { useEffect, useState } from 'react'

import Header from './header'
import HeaderStyles from '../css/header.module.css'
import Intro from './intro'


export default function Home() {

  const [screen, setScreen] = useState(`${HeaderStyles.intro}`)

  const changeScreen = (newState) => {
    setScreen(newState)
  }

  return (
    <main>
      <Header state={screen} setState={changeScreen}/>
      {screen === HeaderStyles.intro && <Intro />}
      {screen === HeaderStyles.costmer_apply && <></>}
      {screen === HeaderStyles.brand_apply && <></>}
    </main>    
  );
}
