import React from "react";
import HornedBeasts from "./HornedBeasts";
import data from "../data.json";

class Main extends React.Component {
  render() {
    return(
      <main>
      {data.map((beast) => (
        <HornedBeasts key={beast._id} {...beast}/>
      ))}
      </main>
    );
  }
}

export default Main