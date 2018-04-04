import React, { Component } from 'react';

// Import Component
import Form from './Form';
import ItemList from './Itemlist';

class App extends Component {

    addArticle = (article) => {
        console.log('article vu par le parent App', article);
    }

    render () {
        return (
            <div>
                <h3>Liste de courses</h3>
                <Form formTitle="Ajouter un article" addArticle={this.addArticle}/>
                <ItemList/>
            </div>
        );
    }
}

export default App;