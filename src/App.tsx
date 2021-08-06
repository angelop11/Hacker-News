import React from 'react';
import { Switch, Route } from "react-router-dom";

import Main from "../src/pages/main"
import Favorites from "../src/pages/favorites"

function App() {
  return (
    <Switch>
      <Route path={"/"} exact component={Main} />
      <Route path={"/favorites"} component={Favorites} />
    </Switch>
  );
}

export default App;
