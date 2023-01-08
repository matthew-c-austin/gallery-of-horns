import React from "react";
import HornedBeasts from "./HornedBeasts";
import data from "./data.json";

class Main extends React.Component {
  render() {
    return(
      data.map((beast) => (
        <>
        <HornedBeasts image_url={beast.image_url} title={beast.title} description={beast.description}/>
        </>
      ))
    );
  }
}

export default Main