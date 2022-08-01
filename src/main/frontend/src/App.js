import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Search from "./pages/Search";
import MyPage from "./pages/MyPage";
import SignUp from "./pages/SignUp";
import Menu from "./pages/Menu";

import Nav from "./components/Nav";
import SliderPost from "./components/SliderPost";
import "./styles/common/App.css";

//import axios from 'axios';
//
//function App() {
//   const [hello, setHello] = useState('')
//
//    useEffect(() => {
//        axios.get('/api/hello')
//        .then(response => setHello(response.data))
//        .catch(error => console.log(error))
//    }, []);
//
//    return (
//        <div>
//            백엔드에서 가져온 데이터입니다 : {hello}
//        </div>
//    );
//}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <SliderPost />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/search" element={<Search />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    );
  }
}

export default App;
