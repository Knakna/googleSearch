import Logo from './components/logo/Logo';
import Search from './components/search/Search';

import Btn from './components/btn/Btn';
import Lang from './components/lang/Lang';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './App.css';


function App() {
  return (
    <div className="app">
      <Header/>
      <div className="inner">
      <Logo/>
      <Search/>
      <div className="btns">
      <Btn text="Поиск в Google"/>
      <Btn text="Мне повезет!"/>
      </div>
      <Lang/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
