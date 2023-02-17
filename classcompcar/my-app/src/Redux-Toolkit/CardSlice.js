import {createSlice} from '@reduxjs/toolkit'
import dataList from '../components/dataList'

const CardSlice = createSlice({
    name:'card',
    initialState:{
            cards:dataList,
            editCard:{
                make:"",
                marketCategory:"",
                details:""
            }
    },
    reducers:{
           deleteCard:(state,action)=>{
            const deleteId = action.payload
            state.cards = state.cards.filter(e=>{
                return e.id !== deleteId
            })
           },
           addCard:(state,action)=>{
            state.cards = [...state.cards,action.payload]
           },
           editCard:(state,action)=>{
               const {details,make,marketCategory,id} = action.payload
               state.editCard.make = make
               state.editCard.marketCategory = marketCategory
               state.editCard.details = details
               state.editCard.id = id
           },
           putCardDetail:(state,action)=>{
            let editCardDetails = action.payload
            let index = state.cards.findIndex(e=>e.id == editCardDetails.id)

            state.cards[index].make = editCardDetails.make
            state.cards[index].marketCategory = editCardDetails.marketCategory
            state.cards[index].details = editCardDetails.details

           }
    }
})

export default CardSlice.reducer
export const {deleteCard,addCard,editCard,putCardDetail} = CardSlice.actions