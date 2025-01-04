
import DataPicker from './calender.tsx';
import './App.css';
import { Desktop } from './components/desktop.tsx';
import { Frame9 } from './components/frame9.tsx';
import { Frame5 } from './components/frame5.tsx'
import { SearchBar } from './components/searchicon.tsx';

function App() {
  return (
    <div>
      <Desktop>
        <Frame9>
          <Frame5> {/* ←検索バー含めた全体部 */}
            <SearchBar></SearchBar>
          </Frame5>
          <DataPicker/>
        </Frame9>
      </Desktop>
    </div>
  )
}

export default App;
