import './App.css';
import Header from './components/Header';
import Category from './components/Category';
import AppList from './components/AppList';
import AppBundle from './components/AppBundle';

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

      <header>
        <Header />
      </header>

      <section className="top_section">
        <Category />
      </section>

      <section className="center_section">
        <div className="app_section">App Section</div>
        <div className="app_list_section">
          <div className="app_list">
            <AppList />
          </div>
          <div className="app_bundle">
            <AppBundle />
          </div>
        </div>
      </section>

      <section className="bottom_section"></section>

      <footer></footer>
    </>
  );
}

export default App;
