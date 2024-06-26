import { useState } from 'react'
import styles from './App.module.scss'
import GameInfo from './components/GameInfo/GameInfo'
import GameDesc from './components/GameDesc/GameDesc'


function App() {
  return (
    <div className={styles.app}>
      <div>
        <GameInfo />
        <GameDesc />
      </div>
    </div>
  )
}

export default App
