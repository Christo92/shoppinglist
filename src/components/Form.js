import React, { Component } from 'react';

class Form extends Component {

    state = {
        name: '',
        quantity: 0
    };

    handlesubmit = (event) => {
        event.preventDefault();
        console.log('inside handle')
        this.props.addArticle(this.state);
    };

    render () {
        return (
            <div>
                <h3>{ this.props.formTitle }</h3>
                <form onSubmit={ this.handlesubmit }>
                    <input 
                        type="number" 
                        placeholder="quantité" 
                        value={ this.state.quantity } 
                        onChange={(event) => this.setState({ quantity: event.target.value })}
                    />
                    <input 
                        type="text" 
                        placeholder="article" 
                        value={ this.state.name }
                        onChange={(event) => this.setState({ name: event.target.value })}
                    />
                    <button type="submit">Ajouter</button>
                </form>
            </div>
        );
    }
};

export default Form;