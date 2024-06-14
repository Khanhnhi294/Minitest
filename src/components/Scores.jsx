import { HTML_RESULTS } from "./data.js";
import { JAVA_RESULTS } from "./data.js";
import { PYTHON_RESULTS } from "./data.js";
import { ENGLISH_RESULTS } from "./data.js";

function Score() {
    data = [
        HTML_RESULTS,
        JAVA_RESULTS,
        PYTHON_RESULTS,
        ENGLISH_RESULTS
    ]
  return (
    <>
        <main className="scores-container">
        <div class="scores">
        <h1>{data.map((item, index)=>{
            key={index}
          })}</h1>
          <table>
            <thead>
              <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              <tr>
              <td>{data.map(()=>{
                    {firstName}
                })} </td>
                <td>{data.map(()=>{
                    {lastName}
                })} </td>
                <td>{data.map(()=>{
                    {score}
                })}</td>
              </tr>
              <tr>
                <td>First name 2 </td>
                <td>Last name 2 </td>
                <td>45</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
      ;
    </>
  );
}
export default Score;