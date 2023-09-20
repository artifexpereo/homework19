import React from "react";
import "./App.css";
import Main from "./main/Main";
import Post from "./post/Post";
import Contacts from "./contacts/Contacts";
import Pictures from "./pictures/Pictures";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Posts = () => {
  return (
    <>
      <Post
        avatar="https://upload.wikimedia.org/wikipedia/uk/thumb/e/e5/LNU_JURID.png/420px-LNU_JURID.png"
        nickname="law.lviv.university"
        content="https://pbs.twimg.com/media/Dcl6RMXWAAA3pz6.jpg"
        likes="5 487"
        description="fundamental human rights"
      />
      <Post
        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTZiDYVFY3pHMqANAFlTdWbwF2KpclMAbp8g&usqp=CAU"
        nickname="daryna.petrenko"
        content="https://freedomlaw.ca/wp-content/uploads/2018/08/criminal-defense.jpg"
        likes="2 752"
        description="best day of my life"
      />
      <Post
        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-JXTGHFY17JKveGhEsuP2rz0qxFMoKb6eHg&usqp=CAU"
        nickname="anzhela.shvets"
        content="https://www.calltutors.com/blog/wp-content/uploads/2021/12/Types-Of-Law-2.webp"
        likes="257"
        description="my first scientific work"
      />
      <Post
        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxxjmwKWTsX6TzQFuhk2vF3v77fIMmK2mfRg&usqp=CAU"
        nickname="saul_goodman"
        content="https://c4.wallpaperflare.com/wallpaper/1014/945/284/better-call-saul-breaking-bad-saul-goodman-googly-eyes-mirror-hd-wallpaper-thumb.jpg"
        likes="10 574"
        description="funny spy"
      />
    </>
  );
};

const photos = [
  {
    imageLink:
      "https://abrakadabra.fun/uploads/posts/2021-12/1639474015_1-abrakadabra-fun-p-femida-oboi-1.jpg",
  },
  {
    imageLink:
      "https://i.pinimg.com/736x/46/1c/50/461c50f6236a0e431e062109a2cbb6ee.jpg",
  },
  {
    imageLink:
      "https://i.pinimg.com/originals/26/04/c6/2604c609b7491e269fc8ed29def29fa2.jpg",
  },
  {
    imageLink:
      "https://danielhorwitz.com/wp-content/uploads/2020/09/qtq80-DcIEgV.jpeg",
  },
  {
    imageLink:
      "https://rainesinternational.com/wp-content/uploads/2018/01/Articles_EmploymentLawyer-e1550374232107.jpeg",
  },
  {
    imageLink:
      "https://advokatrada.cn.ua/wp-content/uploads/2021/11/1565780475.jpg",
  },
  {
    imageLink:
      "https://static.ffx.io/images/$zoom_0.322%2C$multiply_0.9735%2C$ratio_1.5%2C$width_756%2C$x_438%2C$y_67/t_crop_custom/q_86%2Cf_auto/49cc939a79ec60fcb088d5f727c2db7588fc70be",
  },
  {
    imageLink:
      "https://localist-images.azureedge.net/photos/43465022956749/huge/a7ec60769ff5585934e0630b4b064ed480274d55.jpg",
  },
  {
    imageLink:
      "https://www.quizony.com/what-type-of-lawyer-should-i-be/imageForSharing.jpg",
  },
];
function App() {
  return (
    <BrowserRouter>
      <div className="header">
        <Link to="/main" className="header_element">
          Home
        </Link>
        <Link to="/post" className="header_element">
          Post
        </Link>
        <Link to="/pictures" className="header_element">
          Pictures
        </Link>
        <Link to="/contacts" className="header_element">
          Contacts
        </Link>
      </div>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/post" element={<Posts />} />
        <Route path="/pictures" element={<Pictures photos={photos} />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
