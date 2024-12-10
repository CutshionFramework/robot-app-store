import './App.css';
import Header from './components/Header';
import Category from './components/Category';
import AppList from './components/AppList';
import AppBundle from './components/AppBundle';
import GomCookApp from './components/GomCook';
import PalletizingApp from './components/Palletizing';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/** App Basic Structure
       * 1. Header - app store title / searchbar / help link / user profile
       * 2. Top Section - category
       * 3. Center Section - app_section / app_list_section
       * 4. Bottom Section
       * 5. Footer
       */}

      <section className="header_section">
        <Header />
      </section>

      <section className="top_section">
        <Category />
      </section>

      <section className="center_section">
        <div className="app_section">
          <GomCookApp />
          <PalletizingApp />
        </div>
        <div className="app_list_section">
          <div className="app_list">
            <AppList />
          </div>
          <div className="app_bundle">
            <AppBundle />
          </div>
        </div>
      </section>

      <section className="footer_section">
        <Footer />
      </section>
    </>
  );
}

export default App;
