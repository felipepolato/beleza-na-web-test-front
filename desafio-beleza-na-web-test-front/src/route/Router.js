import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CartPage from '../screen/CartPage/CartPage'
// import FeedPage from "../screen/"
import PayPage from "../screen/Paypage/PayPage"

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/cart'}>
          <CartPage />
        </Route>
        {/* <Route exact path={'/feed'}>
          <FeedPage />
        </Route> */}
        <Route exact path="/paypage">
          <PayPage />
        </Route>
        <Route>
          <div>Página não encontrada</div>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
