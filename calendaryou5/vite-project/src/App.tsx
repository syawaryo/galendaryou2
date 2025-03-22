import './App.css'
import { DesktopLayout } from './components/DesktopLayout.tsx'
import { ContentFrame } from './components/ContentFrame.tsx'
import { SearchBar } from './components/SearchBar.tsx'
import { SearchIcon } from './components/SearchIcon.tsx'
import { SearchInputField } from './components/SearchInputField.tsx'
import { SearchActionButton } from './components/SearchActionButton.tsx'
import { SearchCriteriaSelector } from './components/SearchCriteriaSelector.tsx'
import { PeriodFrame } from './components/Period.tsx'
import { DataContentFrame } from './components/Dataframe.tsx'

function App() {
  return (
    <DesktopLayout>
      <ContentFrame>
        <SearchBar>
          <SearchIcon></SearchIcon>
          <SearchInputField></SearchInputField>
          <SearchActionButton></SearchActionButton>
        </SearchBar>
        <SearchCriteriaSelector></SearchCriteriaSelector>
        <PeriodFrame></PeriodFrame>
        <DataContentFrame></DataContentFrame>
      </ContentFrame>
    </DesktopLayout>
  )
}

export default App
