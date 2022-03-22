import React from 'react'
import { Row, Col } from 'react-bootstrap'
import art from './Articles.module.scss'

function Articles( {articles, findArticle}) {

    return ( <div className={ art.articles }>
        <Row>
            {
                articles.map(item => {
                    return <Col key={item.id} md={4}>
                    <div onClick={ () => findArticle(item.id) } className={art.articles__evets}>
                  
                                    <img src={item.imageUrl} alt='article-img'/>
                                
                                <div className={art.articles__maininfo}>
                                    <h2>{item.title}</h2>
                                <p>https://www.reuters.com/article</p>
                            </div>
                    </div>
                    </Col>
                })
            }


        </Row>
            
            
    </div> )
}

export default Articles