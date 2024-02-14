import { createContext, useState } from "react";
import { Card } from "./Card";


export const AppContextProvider = createContext()
function App() {
  const [currentImage, setCurrentImage] = useState('https://images.pexels.com/photos/5722992/pexels-photo-5722992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')

  const imgStyle = {
    backgroundImage: `url(${currentImage})`,
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat'
  }

  const values = {currentImage, setCurrentImage}
  return (
    <div style={imgStyle} className="App">
      <AppContextProvider.Provider value={values}>
      <Card/>
      </AppContextProvider.Provider>
    </div>
  );
}

export default App;
