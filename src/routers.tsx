
import { Route, Switch } from "react-router";
import { HashRouter, BrowserRouter } from 'react-router-dom'
import { Page } from "./page";
import HomePage from "./homePage/homePage";
import CreationWorkflow from "./creationWorkflow/CreationWorkflow";
import Detailpage from "./detailPage/detailPage";

// need to run npm i --save-dev @types/react-router-dom to fit for typescript
// npm i @awsui/components-react to get aws ui component
// put the router into App.tsx

const Routers = () => {
  return <BrowserRouter>
    <Switch>
      <Route path={Page.NewExperience} component={CreationWorkflow} />
      <Route path={Page.ExperienceDetail} component={Detailpage} />
      <Route exact path={Page.Home} component={HomePage} />
    </Switch>
  </BrowserRouter>
}

export default Routers;
