import React, { Component } from 'react';

class Form extends Component {

    state = {
        name: '',
        quantity: 0
    };

    handlesubmit = (event) => {
        event.preventDefault();
        this.props.addArticle(this.state);

        // Vide le formulaire après la validation, on réinitialise le formulaire
        this.setState({ name: '', quantity: 0 })
    };

    render () {
        return (
            <div>
                <h3>{ this.props.formTitle }</h3>
                <form onSubmit={ this.handlesubmit }>
                    <input 
                        type="number" 
                        className="quantity"
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
                    <button type="submit" className="btn btn-success">Ajouter</button>
                </form>
            </div>
        );
    }
};

export default Form;