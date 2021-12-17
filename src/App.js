import Card from './components/Card';
import Discount from './components/discount/Discount';
import Discount1 from './components/discount/Discount1';
import Header from './components/header/Header';
import HikingMountains from './components/HikingMountains';
import LetsGo from './components/LetsGo';
import NavBar from './components/NavBar';
import GoogleDrives from './GoogleDrives'
function App() {
  return (
    <div  >
      <NavBar/>
      <Header/>
      <LetsGo/>
      <Card/>
      {/* <Discount/>
      <Discount1/> */}
      <HikingMountains/>
      <GoogleDrives/>
    </div>
  );
}

export default App;
