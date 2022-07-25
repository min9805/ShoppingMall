import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Recommend from "./pages/Recommend";
import Search from "./pages/Search";
import MyPage from "./pages/MyPage";
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
//
//export default App;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerMessage: "Header",
      footerMessage: "Footer",
    };
  }

  render() {
    return (
      <div className="App">
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/recommend" component={Recommend} />
          <Route path="/search" component={Search} />
          <Route path="/mypage" component={MyPage} />
        </Routes>
        <Nav />
        <SliderPost />
      </div>
    );
  }
}

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

export default App;
