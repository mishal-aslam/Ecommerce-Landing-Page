import './App.css';
import Footer from './Components/Footer';
import JewelryType from './Components/JewelryType';
import LatestJewelry from './Components/LatestJewelry';
import Navbar from './Components/Navbar';
import OurCommitment from './Components/OurCommitment';
import OurServices from './Components/OurServices';
import Testimonials from './Components/Testimonials'
import Hero from './Components/Hero'
function App() {
  return (
    <>
   <Navbar />
   <Hero />
   <JewelryType />
   <OurCommitment />
   <LatestJewelry />
   <Testimonials />
   <OurServices />
   <Footer />
    </>
  );
}

export default App;
