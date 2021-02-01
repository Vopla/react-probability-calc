import './App.css';
import React, { useState } from 'react'
import Killcount from './components/killcount'
import DropChance from './components/dropchance'


function App() {
  const [dropRate, setDropRate] = useState(0)
  const [kills, setKills] = useState(0)
  const [dropChance, setDropChance] = useState(0.0)
  const [killAmount, setKillAmount] = useState(0)
  const [dropAmount, setDropAmount] = useState(0)
  const [calculateState, setCalculateState] = useState(false)

  return (
    <div className="MainDiv">
      <h1 className= "Text">Drop Rate Calculator</h1>

      <form className="Form" onSubmit={e =>
          e.preventDefault() 
          | 
          setKillAmount(Killcount(dropRate, kills, dropAmount))
          |
          setDropChance(DropChance(dropRate, kills, setCalculateState))}>
          
        <label className="Text">Drop rate 1/x</label>
        <input 
          required
          type="number"
          min="1" 
          className="input" 
          name="rate" 
          placeholder="Drop rate" 
          value={dropRate} 
          onChange={e => setDropRate(e.target.value)}>
        </input>        

        <label className="Text">Amount of kills</label>
        <input 
          required
          type="number"
          min="1" 
          className="input" 
          name="kill" 
          value={kills} 
          onChange={e => setKills(e.target.value)}>
        </input>  

        <label className="Text">How many drops would you like to receive</label>
        <input 
          required
          type="number"
          min="1" 
          className="input" 
          name="dropamount" 
          value={dropAmount} 
          onChange={e => setDropAmount(e.target.value)}>
        </input>  
        <div className="ButtonDiv">
          <input className="CalculationButton" 
          type="submit" 
          value="Calulate">
          </input>

          <button className="Reset" onClick={e =>
            e.preventDefault()|
            setDropRate(0)|
            setKills(0)|
            setKillAmount(0)|
            setDropAmount(0)|
            setCalculateState(false)
          }>Reset</button>    
        </div>
      </form>

      {calculateState ?
      <> 
      <h1 className="Text">{dropChance} %</h1>
      {
      !dropAmount ?
        null 
      :
        dropAmount === 1 ?
        <h2 className="Text">Took you {killAmount} kills to get {dropAmount} drop</h2>
      :
        <h2 className="Text">Took you {killAmount} kills to get {dropAmount} drops</h2>
      }  
      
      </>
      :

      null
      }

    </div>
  );
}

export default App;
