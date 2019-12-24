import React from 'react'
import {
   addProductToStore
  } from "../../redux/actions/productsAction";
import {connect} from 'react-redux'
import store from "../../redux/store.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import axios from 'axios'

class NewProduct extends React.Component{
    constructor(props){
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeProduct = this.onChangeProduct.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);

        this.state = {
            name:"" ,
            description:"" ,
            product:"" ,
            date:"" ,
            price:"" ,
          };
    
    }

    onChangeName(e) {
        this.setState({
          name: e.target.value
        })
      }
      onChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
      }
      onChangeProduct(e) {
        this.setState({
            product: e.target.value
        })
      }
      onChangeDate(e) {
        this.setState({
            date: e.target.value
        })
      }
      onChangePrice(e) {
        this.setState({
            price: e.target.value
        })
      }

      onSubmit = (e) => {
        e.preventDefault();

        const newProduct = {
            name: this.state.name,
            description: this.state.description,
            product: this.state.product,
            date: this.state.date,
            price: this.state.price,
          };

        axios.post("http://localhost:8081/api/v1/products/",newProduct)

        .then(response => {
          
        console.log(response);
        })
        
        .catch(error => {
          console.log(error);
        })
        store.dispatch(addProductToStore())
        
      }
        
    


render(){
 
    return(
        <React.Fragment>

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

        <form onSubmit={this.onSubmit}>

                <p className="input-container"> 
                    <label className="text-field-input" for="">Product Name</label>
                    <input  value={this.state.name} 
                    onChange={this.onChangeName} type="text" className="text-field" />
                </p>

                <p className="input-container"> 
                        <label className="text-field-input" for="">Product Description</label>
                        <input  value={this.state.description} 
                        onChange={this.onChangeDescription} type="text" className="text-field" />
                </p>

                <p className="input-container"> 
                    <label className="text-field-input" for="">Product Type</label>
                    <input  value={this.state.product} 
                    onChange={this.onChangeProduct} type="text" className="text-field"/>
                </p>

                <p className="input-container"> 
                    <label className="text-field-input" for="">Purchase Date</label>
                    <input  value={this.state.date} 
                    onChange={this.onChangeDate} type="text" className="text-field" />
                </p>

                <p className="input-container">
                    <label className="text-field-input" for="">Product Price</label>
                    <input  value={this.state.price} 
                    onChange={this.onChangePrice} type="text" className="text-field"/>
                </p>


                <button className="primary-button"  >CREATE PRODUCT</button>
           
                
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
      addProductToStore: product => dispatch(addProductToStore(product)),
    };
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(NewProduct);
 