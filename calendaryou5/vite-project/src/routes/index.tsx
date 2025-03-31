import { RouteObject } from 'react-router-dom'
import { DataContentFrame } from '../components/Dataframe.tsx'
import { Layout } from '../components/Layout.tsx'

export const AppRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <DataContentFrame /> },
      { path: ':id', element: <DataContentFrame /> },
    ],
  },
]
