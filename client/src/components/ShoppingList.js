import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { connect } from 'react-redux';
import { getItemsAct, deleteItemAct, addItemAct } from '../actions/itemActions';
import propTypes from 'prop-types'; // form validation


class ShoppingList extends Component {
    // state = {
    //     items: [
    //         { id: uuid(), name: 'Eggs'},
    //         { id: uuid(), name: 'Milk'},
    //         { id: uuid(), name: 'Steak'},
    //         { id: uuid(), name: 'Water'}
    //     ]
    // }

    // lifecycle method 
    componentDidMount() {
        this.props.getItemsAct();
    }

    onDeleteClick = (id) => {
        this.props.deleteItemAct(id);
    };

    render() {
        const { items } = this.props.itemProps; // item = entire state obj; // items = array inside the state
        return(
            <Container>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({ id, name }) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={this.onDeleteClick.bind(this, id)}
                                    >&times;</Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

// validation
ShoppingList.propTypes = {
    getItemsAct: propTypes.func.isRequired,
    itemProps: propTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    itemProps: state.itemReducer
});

// map state into a component properties
export default connect(mapStateToProps, { getItemsAct, addItemAct, deleteItemAct })(ShoppingList);