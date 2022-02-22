import React from "react";
import "./App.css";
import Cources from "./Components/Body/Cources";
// import UseRef from "./Components/Hooks/UseRef";
// import FetchData from "./Components/API/FetchData";
// import PostData from "./Components/API/PostData";
import MyCarousel from "./Components/Body/MyCarousel";
// import UseCallBack from "./Components/Hooks/UseCallBack/UseCallBack";
import OurMenters from "./Components/Body/OurMenters";
import Navigation from "./Components/Navigation/Navigation";
// import Testing from "./Components/Testing";
// import { ProductList } from "./Components/ProjectCRUD/ProductList";
// import FetchingDataFromRedux from "./Components/Redux/FetchingDataFromRedux";
import footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      {/* <h1>App Component</h1> */}
      <Navigation />
      <MyCarousel />
      <Cources />
      <OurMenters />
      {/* <ProductList /> */}
      {/* <PostData /> */}
      {/* <FetchData /> */}
      {/* <FetchingDataFromRedux /> */}
      {/* <UseRef /> */}
      {/* <UseCallBack /> */}
      {/* <Testing /> */}
      <footer />
    </div>
  );
}

export default App;
