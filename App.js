import {ExpenseItem,ExpenseItems}  from './ExpenseItem';
import Trial from './trial';
import FavoriteColor from './state';
import {Navmenu,Welcome,Garage} from './class';
import NameLists from './props';
import Mapping from './map';
import MyForm from './task';

function App() {
  const myLists = ['bruce','david','margret','bruce'];   
  const menuItems = [1, 2, 3, 4, 5];
  
  return (
    <div className="App">
    <h2> hello world</h2>
    <Trial/>
    <ExpenseItem/> 
    <ExpenseItems/>
    <FavoriteColor/>
    <Navmenu/>
    <Welcome/>
    <Garage/>
    <Mapping/>
    <NameLists/>
    <MyForm/>
    </div>
  );
}

export default App;
