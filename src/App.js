import logo from './logo.svg';
import './App.css';
import ToDoList from "./components/ToDoList/ToDoList";

function App(props) {
    // debugger;

    // let images1 = [
    //     'https://wroom.ru/i/news/10675img1.jpg',
    //     'https://cdn.motor1.com/images/mgl/ybzqq/s3/2019-audi-tt-rs-coupe.jpg',
    //     'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Rolls-Royce_Wraith_Genf_2019_1Y7A5618.jpg/1200px-Rolls-Royce_Wraith_Genf_2019_1Y7A5618.jpg',
    //     'https://www.mercedes-benz.ua/passengercars/mercedes-benz-cars/models/e-class/coupe-c238/design/lines-comparison/_jcr_content/comparisonslider/par/comparisonslide_3600/exteriorImage.MQ6.12.20190816144830.jpeg'
    // ];
    //
    // let images2 = [
    //     'https://cdn.motor1.com/images/mgl/MoVM6/s3/lamborghini-sc18-alston.jpg',
    //     'https://aczpix.b-cdn.net/wp-content/uploads/2020/01/foto-mansory-carbonado-price_01.jpg',
    //     'https://img.drive.ru/i/0/5db92ffcec05c45626000003.jpg',
    //     'https://i.infocar.ua/i/6/135093/945x471.jpg',
    //     'https://newsnn.ru/attachments/bc7c96dad36c3938ef748b33e831b65f4cbbea37/store/fill/1200/630/584b8107ae976aa2ec0ad34f459dbf92c74796910657be4326a0bdc7c171/%D0%BB%D0%B0%D0%BC%D0%B1%D0%BE%D1%80%D0%B4%D0%B6%D0%B8%D0%BD%D0%B8.jpg'
    // ];

  return (
    <div className="App">
        {/*{props.a}*/}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ToDoList/>
      </header>
    </div>
  );
}

export default App;
