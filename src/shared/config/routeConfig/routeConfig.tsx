import { CardDetail } from 'pages/CardDetail'
// import { CardDetail } from 'pages/CardDetail/ui/CardDetail'
import { MainPage } from 'pages/MainPage'
import { RouteProps } from 'react-router-dom'

export enum AppRoutes {
  MAIN = 'main',
  CARDDETAIL = 'carddetail',
}

export const routePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.CARDDETAIL]: '/movies/:id',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: routePaths.main,
    element: <MainPage />,
  },
  [AppRoutes.CARDDETAIL]: {
    path: routePaths.carddetail,
    element: <CardDetail />,
  },
}
