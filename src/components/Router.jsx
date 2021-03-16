import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PathRouter from './pathRouter';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        {PathRouter.map((route, idx) => (
          <Route 
            exact 
            key={idx} 
            path={route.path} 
            component={route.component} 
          />
        ))}
      </Switch>
    </BrowserRouter>
  )
}
