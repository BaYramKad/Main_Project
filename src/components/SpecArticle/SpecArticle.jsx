import React from 'react'
import { Row, Col } from 'react-bootstrap'
import spec from './Special.module.scss'

function SpecArticle({article}) {
  return (<div>
      <Row>
      {
          article && article.map(item => {
            return <Col xl={12}  key={item.id}>
                <div className={spec.activeArticle}>
                    
                    <div>
                        <h2 className={spec.activeArticle__title}>{item.title}</h2>
                        <img className={spec.activeArticle__img} src={item.imageUrl} alt="article-img"/>
                    </div>
                    <div>
                        <p className={spec.activeArticle__description}>
                            {item.description}
                        </p>
                        <div className={spec.activeArticle__comment}>
                            <h2 className={spec.activeArticle__comment_title}>Experts Comment</h2>
                            <p>{item.expertComment}</p> 
                        </div>
                    </div>
                </div>
            </Col>
          })
      }
      </Row>
      
  </div>)
}

export default SpecArticle
