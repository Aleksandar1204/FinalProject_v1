import React from "react";
import axios from "axios";
import {
    getProducts
} from "../../redux/actions/productsAction";
import { connect } from "react-redux";
import "../assets/style.css";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: null
    };
  }


  componentDidMount() {
    axios
      .get("http://localhost:8081/api/v1/products")
      .then(response => {
        //zapisi vo redux
        
        this.props.getProducts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  



  render() {
    let productsList = null;
    if (this.props.products) {
      
        productsList = this.props.products.map(product => {
        return (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.product}</td>
            <td>{product.date}</td>
            <td>{product.price}</td>
            
            <td>
              <button
                className="btn btn-secondary"
                id="edit"
                onClick={() => this.editUser(user)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                id="delete"
                onClick={() => this.deleteUser(user)}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      });
    }
    return (
      <React.Fragment>
        <table className="table">
          {this.state.showModal}
          <thead>
            <tr>
              <th>
                <button
                  className="btn btn-success"
                  id="add"
                  onClick={this.addUser}
                >
                  
                </button>
              </th>
            </tr>
          </thead>
          <tbody>{productsList}</tbody>
        </table>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.productsReducer.products
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getProducts: data => dispatch(getProducts(data)),
   
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);