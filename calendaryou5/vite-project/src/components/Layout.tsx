// Layout.tsx
import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { DesktopLayout } from '../components/DesktopLayout'
import { ContentFrame } from '../components/ContentFrame'
import { SearchBar } from '../components/SearchBar'
import { SearchIcon } from '../components/SearchIcon'
import { SearchInputField } from '../components/SearchInputField'
import { SearchActionButton } from '../components/SearchActionButton'
import { SearchCriteriaSelector } from '../components/SearchCriteriaSelector'
import { PeriodFrame } from '../components/Period'

export const Layout: FC = () => {
  return (
    <DesktopLayout>
      <ContentFrame>
        <SearchBar>
          <SearchIcon />
          <SearchInputField />
          <SearchActionButton />
        </SearchBar>
        <SearchCriteriaSelector />
        <PeriodFrame />
        <Outlet />
      </ContentFrame>
    </DesktopLayout>
  )
}
