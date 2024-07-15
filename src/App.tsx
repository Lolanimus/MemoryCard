import { createContext, useState } from 'react'
import styles from './App.module.scss'
import GameInfo from './components/GameInfo/GameInfo'
import GameDesc from './components/GameDesc/GameDesc'
import Cards from "./components/Cards/Cards"

export const UserContext = createContext(null);

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  return (
    <UserContext.Provider value={{scoreState: [score, setScore], bestScoreState: [bestScore, setBestScore]}}>
      <div className={styles.app}>
        <div className={styles.gameInfo}>
          <GameDesc />
          <GameInfo />
        </div>
        <Cards />
      </div>
    </UserContext.Provider>
  )
}

export default App