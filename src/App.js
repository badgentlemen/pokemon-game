import './App.css';
import Header from './Components/Header';
import Layout from './Components/Layout';
import Footer from './Components/Footer';
import FirstLayoutBG from './Assets/bg2.jpg';
import ThirdLayoutBG from './Assets/bg1.jpg';

function App() {
  return (
    <div className="App">
      <Header title="Pokemon Game" descr="react marathon!"/>
      <Layout id={1} title="Первый Layout" descr="Описание для первого layout!" urlBg={FirstLayoutBG}/>
      <Layout id={2} title="Второй Layout" descr="Описание для второго layout!" colorBg="purple"/>
      <Layout id={3} title="Третий Layout" descr="Описание для третьего layout!" urlBg={ThirdLayoutBG}/>
      <Footer />
    </div>
  );
}

export default App;
