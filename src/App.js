
import './App.css'
import Body2 from './Components/Body2/Body2';
import Body3 from './Components/Body3/Body3';
import Body4 from './Components/Body4/Body4';
import SideBar from './Components/SideBar/SideBar';
// const useStyles = makeStyles((theme) => ({
//   right: {
//     display: "block",
//     [theme.breakpoints.down("sm")]: { display: "none" }
//   },
// }));

function App() {

  return (
    <div className='App'>
      <SideBar/>
      <Body2/>
      <Body3/>
      <Body4/>
     
    </div>
  );
}

export default App;