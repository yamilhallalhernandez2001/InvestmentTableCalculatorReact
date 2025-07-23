import { useState } from "react"
import Input from "./components/Input"
import UserInput from "./components/UserInput"
import TableResults from "./components/TableResults";

function App() {
   const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    const validInput = userInput.duration >= 1;

    const handleChangeInput = (newValue, inputIdentifier) => {
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdentifier]: +newValue
            };
        });
    };
  return (
    <>
     <UserInput userInput={userInput} onChange={handleChangeInput}/>
     {validInput && <TableResults input={userInput}/>}
     {!validInput && <p className="center">Duration is not valid, please put duration greater than 0</p>}
    </>
  )
}

export default App
