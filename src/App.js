import { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { NavLink } from 'react-router-dom';
import productApi from './api/productApi';
import NotFound from './components/NotFound';
import AlbumFeature from './features/Album/pages';
import TodoFeature from './features/Todo';

function App() {

  useEffect(() => {
    const fetchProducts = async () => {
      const params = { 
        _limit: 5,
      };
      const productList = await productApi.getAll(params);
      console.log(productList);
    };

    fetchProducts();
  }, []);

  return (
    <div className="App">
      Header
      
      <h4>NavLink</h4>
      <p>
        <NavLink to="/todos" activeClassName="active-menu">
          Todos
        </NavLink>
      </p>
      <p>
        <NavLink to="/albums">Albums</NavLink>
      </p>
      <Switch>
        <Redirect from="/home" to="/" exact />
        <Redirect from="/post-list/:postId" to="/posts/:postId" exact />
        <Redirect from="/albums123" to="/albums" exact />

        <Route path="/" component={TodoFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />

        <Route component={NotFound} />
      </Switch>
      Footer
    </div>
  );
}

export default App;
