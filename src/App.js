import './App.css';
// pages
import BasicSearchPanel from './components/BasicSearchPanel';
import TopBar from './components/TopBar';
import FeatureSection from './components/FeatureSection'
import Testimonials from './components/Testimonials'
import PromoSection from './components/PromoSection'
import PartnerSection from './components/PartnerSection'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <TopBar></TopBar>
      <BasicSearchPanel></BasicSearchPanel>
      <FeatureSection></FeatureSection>
      <Testimonials></Testimonials>
      <PromoSection></PromoSection>
      <PartnerSection></PartnerSection>
      <Footer></Footer>
    </div>
  );
}

export default App;
