import { useState } from 'react'
import styles from './App.module.scss'
import GameInfo from './components/GameInfo/GameInfo'
import GameDesc from './components/GameDesc/GameDesc'
import Cards from "./components/Cards/Cards"

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.gameInfo}>
        <GameDesc />
        <GameInfo />
      </div>
      <Cards />
    </div>
  )
}

export default App
