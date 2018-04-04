import React, { Component } from 'react';

// Import Component
import Form from './Form';
import ItemList from './Itemlist';

// Import Css
import '../style.css';

class App extends Component {

    state = {
        articles: []
    }

    addArticle = (article) => {
        let oldArticles = this.state.articles;
        article.id = Date.now();
        let newArticles = [...oldArticles, article];
        this.setState({ articles: newArticles })
    }

    render () {
        return (
            <div>
                <h3>Liste de courses</h3>
                <Form formTitle="Ajouter un article" addArticle={this.addArticle}/>
                <ItemList articles={ this.state.articles }/>
            </div>
        );
    }
}

export default App;