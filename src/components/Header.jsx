import pn_logo from "./assets/pn_logo.png"; 
function Header({ batchName }) { 
  return (
    <>
      <header id="header">
        <img src={pn_logo} alt="PN Logo" />
        <h1>Students results for {batchName}</h1>
      </header>
    </>
  );
}

export default Header;
