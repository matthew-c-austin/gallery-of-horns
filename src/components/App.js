import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

class App extends React.Component{
  render(){
    return(
      <>
        <Header />
        <main>
          <Main />
        </main>
        <Footer />
      </>
    )
  }
}

export default App;
