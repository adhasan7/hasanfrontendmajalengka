import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PlanetListPage from "./pages/PlanetListPage";
import PlanetDetailPage from "./pages/PlanetDetailPage";
import WishlistPage from "./pages/WishlistPage";

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route path='/' exact component={PlanetListPage} />
          <Route path='/planet/:id' component={PlanetDetailPage} />
          <Route path='/wishlist' component={WishlistPage} />
        </Switch>
      </Router>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
