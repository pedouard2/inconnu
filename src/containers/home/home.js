// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Constellation from "../../components/constellation/constellation";
const App = () => {
    const width = window.innerWidth
    const height= window.innerHeight
    const constellationData =
        {
          name: "Orion",
          points: [
            { x: width/2, y: height/2 },
            { x: width/4, y: height/4 },
            { x: width/2, y: height/6 },
            // { x: 150, y: 100 }
          ]
   
        }
      
    return (
        <div>
            <Constellation constellationData={constellationData}  />
        </div>

        // <BrowserRouter>
        //   <Routes>
        //     <Route path="/" element={<Constellation />} />
        //     <Route path="/star/:starId" element={<StarPage />} />
        //   </Routes>
        // </BrowserRouter>
    );
  };

export default App