import { FunctionComponent, lazy, LazyExoticComponent } from 'react'
import { RouteComponentProps, StaticContext } from 'react-router'

const Home = lazy(() => import('../containers/Home'))
const GetStarted = lazy(() => import('../containers/GetStarted'))

export type PrivateRouteObject = {
  exact: boolean
  path: string
  positionInNav: number
  breadcrumb: string
  component: LazyExoticComponent<FunctionComponent<RouteComponentProps<{}, StaticContext, any>>>
  title: string
}

const PUBLIC_ROUTES = [
  {
    exact: true,
    path: '/',
    component: Home,
    title: 'Home'
  },
  {
    exact: true,
    path: '/getting-started',
    component: GetStarted,
    title: 'Get Started'
  },
]

export { PUBLIC_ROUTES }
