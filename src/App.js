import { useEffect, useState } from 'react';
import {  Container } from 'react-bootstrap';
import { useLocation, useHistory } from 'react-router-dom';
import { Switch, Route } from "react-router-dom";
import { getDatabase, ref, onValue } from "firebase/database";
import './App.css';

import Articles from './components/Index';
import NavBar from './components/NavBar/NavBar';
import SpecArticle from './components/SpecArticle/SpecArticle';


function App() {
  const [specArticle, setSpecArticle] = useState(null)
  const [articles, setArticles] = useState([])
  const location = useLocation()
  const history = useHistory()

  

  useEffect(() => {
    const articleId = location.pathname.split('/articles/')[1]
    if(articles) {
        const article = articles.filter(item => item.id === +articleId)
        setSpecArticle(article)
    }
  }, [location.pathname])

  useEffect(() => {
    history.push('/articles')
    const db = getDatabase()
    const starCountRef = ref(db);
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        setArticles(data)
    });

  }, [])
  
  return (
    <div className="App">
          <NavBar/>
      <Container>
          <Switch>
            <Route exact path='/articles'>
                  {
                    <Articles 
                      articles={articles}
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
