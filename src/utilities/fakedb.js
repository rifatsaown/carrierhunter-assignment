// use local storage to manage cart data
const addToDb = id =>{
    let shoppingCart = getStoredCart();

    // add quantity
    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = quantity;
        shoppingCart[id] = newQuantity;
    }
    else{
        shoppingCart[id] = 1;
    }
    localStorage.setItem('Job', JSON.stringify(shoppingCart));
}

const getStoredCart = () =>{
    let shoppingCart = {};
    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('Job');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

const removeFromDb = id =>{
    const storedCart = localStorage.getItem('job');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('job', JSON.stringify(shoppingCart));
        }
    }
}

const deleteShoppingCart = () =>{
    localStorage.removeItem('job');
}

export {
    addToDb, 
    removeFromDb,
    deleteShoppingCart,
    getStoredCart
}