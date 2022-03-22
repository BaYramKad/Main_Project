import { useEffect, useState } from 'react';
import {  Container } from 'react-bootstrap';
import { useLocation, useHistory } from 'react-router-dom';
import { Switch, Route } from "react-router-dom";

import './App.css';

import Articles from './components/Index';
import NavBar from './components/NavBar/NavBar';
import SpecArticle from './components/SpecArticle/SpecArticle';

import DB from './db.json'

function App() {
  const [specArticle, setSpecArticle] = useState(null)
  const location = useLocation()
  const history = useHistory()
  
  useEffect(() => {
    const articleId = location.pathname.split('/articles/')[1]
    if(DB) {
        const article = DB.filter(item => item.id === +articleId)
        setSpecArticle(article)
    }
  }, [location.pathname])

  useEffect(() => {
    history.push('/articles')
  }, [])
  
  return (
    <div className="App">
          <NavBar/>
      <Container>
          <Switch>
            <Route exact path='/articles'>
                  {
                    <Articles 
                      articles={DB}
                      findArticle={ (id) => history.push(`/articles/${id}`) }
                    />
                  }
                
            </Route>
            <Route path="/articles/:id">
            {
                <SpecArticle 
                  article={specArticle && specArticle}
                />
            }
          </Route>
          </Switch>
      </Container>
          
    </div>
  );
}

export default App;
