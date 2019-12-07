import React from 'react'
import {
   addProductToStore
  } from "../../redux/actions/productsAction";
import {connect} from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import axios from 'axios'

class NewProduct extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
          };
    
    }



render(){
    return(
        <React.Fragment>
<div id="products">
        <div className="navigator">
             <div className="buttons-nav">
            <button className="products-button">PRODUCTS</button>
            <button className="expenses-button">EXPENSES</button>
             </div>
            <p className="img-text">Gal Gadot</p>

        </div>
        
        <h1>New Product</h1>      
                
    <div className="new-container">

           
     

        <div className="first-container">

        <div id="new-product">

        <form>

                <p className="input-container"> 
                    <label className="text-field-input" for="">Product Name</label>
                    <input type="text" className="text-field"/>
                </p>

                <p className="input-container"> 
                        <label className="text-field-input" for="">Product Description</label>
                        <input type="text" className="text-field"/>
                </p>

                <p className="input-container"> 
                    <label className="text-field-input" for="">Product Type</label>
                    <input type="text" className="text-field"/>
                </p>

                <p className="input-container"> 
                    <label className="text-field-input" for="">Purchase Date</label>
                    <input type="text" className="text-field"/>
                </p>

                <p className="input-container">
                    <label className="text-field-input" for="">Product Price</label>
                    <input type="text" className="text-field"/>
                </p>


                <button className="primary-button">CREATE PRODUCT</button>
           
                
            </form>
        </div>
        
    </div>
    <div className="second-container">
            <div className="products-add">
            <FontAwesomeIcon icon={faPlusCircle } />
            <p>You are creating a new product</p>
    </div>

    </div>
    
    </div>
       
    </div>
  
        </React.Fragment>
    )
}
}

function mapStateToProps(state) {
    return {
        products: state.productsReducer.products,
    };
  }

function mapDispatchToProps(dispatch) {
    return {
      addProductToStore: data => dispatch(addProductToStore(data)),
    };
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(NewProduct);