import { useState } from 'react'
import './App.css'
import GameFieldElement from './compornents/GameFieldElement'
import { FieldSet } from './utils/FieldSet'
import { GameMaster } from './utils/GameMaster'

function App() {
  const [fieldSet, setFieldSet] = useState<FieldSet>(GameMaster.DummyFieldSet())

  return (
    <>
      <GameFieldElement
        fieldSet={fieldSet}
      />
    </>
  )
}

export default App
