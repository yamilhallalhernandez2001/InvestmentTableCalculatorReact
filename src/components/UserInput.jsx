

export default function UserInput ({onChange,userInput}) {
   
    return(
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="">Initial Investment</label>
                    <input onChange={(event)=>{onChange(event.target.value,'initialInvestment')}} value={userInput.initialInvestment} type="number" required />
                </p>
                <p>
                    <label htmlFor="">Annual Investment</label>
                    <input onChange={(event)=>{onChange(event.target.value,'annualInvestment')}} value={userInput.annualInvestment} type="number" required />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="">Expected return</label>
                    <input onChange={(event)=>{onChange(event.target.value,'expectedReturn')}} value={userInput.expectedReturn}  type="number" required />
                </p>
                <p>
                    <label htmlFor="">Duration</label>
                    <input onChange={(event)=>{onChange(event.target.value,'duration')}} value={userInput.duration} type="number" required />
                </p>
            </div>
        </section>
    );
}