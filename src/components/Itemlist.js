import React from 'react';

const Itemlist = (props) => {

    return (
        <div>
            <h3>Votre liste de course</h3>
            <div>
                {
                    props.articles.map(article => <div key={article.id}>{article.quantity} : {article.name} </div> )
                }
            </div>
        </div>
    )
}

export default Itemlist;