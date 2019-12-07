
export function addProductToStore(product) {
    return {
      type: "ADD_PRODUCT",
      payload: product
    };
  }

  export function getProducts (data) {
    return {
        type: 'GET_PRODUCTS',
        payload: data
    }
}