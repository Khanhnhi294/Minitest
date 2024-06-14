import pn_logo from "./assets/pn_logo.png";
import Header from "./components/Header";
import Score from "./components/Scores";
function App() {
  return (
    <>
    <Header/>
    <Scores courseName="HTML" courseResults={HTML_RESULTS}> </Scores>
    <Scores courseName="JAVA" courseResults={JAVA_RESULTS}> </Scores>
    <Scores courseName="PYTHON" courseResults={PYTHON_RESULTS}> </Scores>
    <Scores courseName="ENGLISH" courseResults={ENGLISH_RESULTS}> </Scores>
     
    </>
  );
}

export default App;
