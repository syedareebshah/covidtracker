import './App.css';
import Cards from './comp/cards/Cards';
import NativeSelects from './comp/Chart/BarChart';
import BarChart from './comp/Chart/chart';
import NewCom from './Pie';
import Prec from './Prec';

function App() {
  return (
    <div className="body">
      {/* <Cards /> */}
      <NativeSelects />
      {/* <Prec /> */}
      {/* <BarChart /> */}
      <NewCom />
    </div>
  );
}

export default App;
