// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="back_phone">
      <div className="column">
        <a><h3>У меня есть</h3></a>
        <div className="column_button">
          <button value="RUB">RUB</button>
          <button value="RUB">USD</button>
          <button value="RUB">EUR</button>
          <button value="RUB">GBP</button>
        </div>
        <div className="box"></div>
      </div>
      <div className="column">
        <h3>Хочу приобрести</h3>
        <div className="column_button">
          <button value="RUB">RUB</button>
          <button value="RUB">USD</button>
          <button value="RUB">EUR</button>
          <button value="RUB">GBP</button>
        </div>
        <div className="box">
          <textarea></textarea>
        </div>
      </div>
    </div>
  );
}

export default App;
