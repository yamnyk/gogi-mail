import React, {useEffect, useState} from 'react';
import './App.scss';
import Loader from "./components/Loader/Loader";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./routes/AppRoutes";
import Icons from "./assets/icons/Icons";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    // componentDidMount and componentDidUpdate
    setIsLoading(false);
    return () => {
      // componentWillUnmount
    }
  }, []);

  if (isLoading) {

    return <div className="App"><Loader/></div>;
  }

  return <div className="App">
    <Header/>
    <h1>learn react</h1>
    <Icons type={'inbox'} styles={{width: "50px", height: "50px", fill: "#ffffff"}}/>
    <AppRoutes/>
    <Footer isOpenedUserCopy={isOpen} toogleUserCopy={setIsOpen}/>
  </div>
}

// axios.all([
//   this.getEmails,
//   this.getCurrentUser,
// ]).then(() => {
//   this.setState({isLoading: false})
// })

export default App;
