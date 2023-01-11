import React from "react";
import HornedBeasts from "./HornedBeasts";
import data from "./data.json";

class Main extends React.Component {
  render() {
    return(
      data.map((beast) => (
        <React.Fragment key={beast._id}>
        <HornedBeasts {...beast}/>
        </React.Fragment>
      ))
    );
  }
}

export default Main