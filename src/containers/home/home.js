// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Constellation from "../../components/constellation/constellation";
const App = () => {
    return (
        <div>
            <Constellation />
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