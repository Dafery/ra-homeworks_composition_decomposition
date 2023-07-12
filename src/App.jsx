import './App.css';
import { AdditionalInformation } from './components/AdditionalInformation/AdditionalInformation';
import { Banner } from './components/Banner/Banner';
import { LookAtYandex } from './components/LookAtYandex/LookAtYandex';
import { Menu } from './components/Menu/Menu';
import { NewsBlock } from './components/NewsBlock/NewsBlock';
import { Search } from './components/Search/Search';

function App() {
  return (
    <div className="App">
      <div className="wrap-top">
        <NewsBlock />
        <LookAtYandex />
      </div>
      <Menu />
      <Search />
      <Banner />
      <AdditionalInformation />
    </div>
  );
}

export default App;
