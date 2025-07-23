import { calculateInvestmentResults, formatter } from "../util/investment";

export default function TableResults({input}) {
    const resutlsData = calculateInvestmentResults(input);
    const initialInvestment = resutlsData[0].valueEndOfYear - resutlsData[0].interest - resutlsData[0].annualInvestment;
    return(
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interes</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {
                    resutlsData.map((item)=>{
                        const totalInterest = item.valueEndOfYear - item.annualInvestment * item.year - initialInvestment;
                        const totalAmountInvested = item.valueEndOfYear - totalInterest;
                        return(
                            <tr key={item.year} >
                                <td>{item.year}</td>
                                <td>{formatter.format(item.valueEndOfYear)}</td>
                                <td>{formatter.format(item.interest)}</td>
                                <td>{formatter.format(totalInterest)}</td>
                                <td>{formatter.format(totalAmountInvested)}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
}