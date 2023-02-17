import React from 'react'
import {connect} from 'react-redux'
import { deleteCard,editCard } from '../Redux-Toolkit/CardSlice'


class CardDetails extends React.Component{
   constructor(){
    super()
    this.handleDelete = this.handleDelete.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
   }

   handleDelete(id){
    this.props.deleteCardDispatch(id)
    this.props.history.push('/')
   }

   handleEdit(data){
      this.props.editCardDispatch(data)
      this.props.history.push('/form')
   }

       render(){
        const {card} = this.props
        const {card_id} = this.props.match.params

        return(
            <div className="container text-center">
             <div class="card mt-5 " >
                <h5 class="card-title">{card.make}</h5>
            <div class="card-body">{card.details}</div>
            </div>
             <div class="row justify-content-md-center">
             <div class="col col-lg-2">
             <button className='btn btn-primary mt-3' onClick={()=>this.handleEdit(card)}>Edit</button>
              </div>
           <div class="col-md-auto">
           
             </div>
           <div class="col col-lg-2">
            <button className='btn btn-danger mt-3' onClick={()=>this.handleDelete(card.id)}>Delete</button>
             </div>
             </div>
             </div>
        )
    }
}

const mapStateToProps = (state,ownProps)=>{
      const {card_id} = ownProps.match.params
       return{
        card:state.cardList.cards.find(e=>e.id == card_id)
      }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        deleteCardDispatch:(id)=>dispatch(deleteCard(id)),
        editCardDispatch:(data)=>dispatch(editCard(data))

    }
}
export default connect(mapStateToProps,mapDispatchToProps) (CardDetails)