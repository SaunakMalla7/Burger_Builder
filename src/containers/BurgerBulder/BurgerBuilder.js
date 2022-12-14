import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger'
import ReactAux from '../../hoc/ReactAux';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';


const INGREDIENT_PRICES  ={
  salad: 1,
  cheese: 0.5,
  meat: 2,
  bacon : 1,
}
 class BurgerBuilder extends Component {

   state = {
    ingredients: {
       salad:0,
       bacon:0,
       cheese:0,
       meat:0
     },
     totalPrice : 4
   }

   addIngredientHandler = (type) => {
      const oldCount = this.state.ingredients[type];
      const updatedCount = oldCount + 1;
      const updatedIngredient = {
        ...this.state.ingredients
      };
      updatedIngredient[type] = updatedCount;
      const priceAddition = INGREDIENT_PRICES  [type];
      const oldPrice = this.state.totalPrice;
      const newPrice = oldPrice + priceAddition;
      this.setState({totalPrice: newPrice, ingredients: updatedIngredient});

   }

   removeIngredientHandler = (type) =>{
    const oldCount = this.state.ingredients[type];
    if(oldCount <=0){
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredient = {
      ...this.state.ingredients
    };
    updatedIngredient[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES  [type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice -  priceDeduction;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredient});
   }
  render() {
    return (
        <ReactAux>
            <Burger ingredients={this.state.ingredients}/>
            <BuildControls 
             ingredientsAdded = {this.addIngredientHandler}
              ingredientsRemoved = {this.removeIngredientHandler}
              />
        </ReactAux>
      
    )
  }
}
export default BurgerBuilder;