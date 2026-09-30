import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name : "cart",
     initialState : {
        //cart : []
    cart :localStorage.getItem("CART") ? JSON.parse(localStorage.getItem("CART")) :[]
   },
    reducers : {
        addToCart : (state,reqData) => {
            //console.log(reqData.payload)
            let cartObj = reqData.payload;
            state.cart =[cartObj,...state.cart]
            localStorage.setItem("CART",JSON.stringify(state.cart ))
        },
        deleteCart : (state,reqData) => {
            let id = reqData.payload;
            state.cart =  state.cart.filter((obj) => obj.id != id)
            localStorage.setItem("CART",JSON.stringify(state.cart ))
        },
        changeQuantity:(state,reqData) => {
              let {id,finalQty} = reqData.payload;
              state.cart =  state.cart.filter((obj) =>{
                if(obj.id == id) {
                    obj['qty'] = finalQty
                }
                return obj
              })
              localStorage.setItem("CART",JSON.stringify(state.cart ))
        }

    }
})

export const {addToCart,deleteCart,changeQuantity} = cartSlice.actions

export default cartSlice.reducer