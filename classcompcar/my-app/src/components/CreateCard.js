import React from "react";
import {connect} from 'react-redux'
import { addCard, editCard, putCardDetail } from "../Redux-Toolkit/CardSlice";

class CreateCard extends React.Component{
    constructor(){
        super()
        this.state={
            make:'',
            marketCategory:'',
            details:''
        }
        this.handleChange = this.handleChange.bind(this) 
        this.handleSumbit = this.handleSumbit.bind(this)
      }

      handleChange(e){
       this.setState({
          [e.target.id] : e.target.value
       })
    }


       handleSumbit(e){
        e.preventDefault();

        if(this.state.id){
         this.props.editCardPutDispatch(this.state)
        
         this.setState({
            make:"",
            marketCategory:"",
            details:""
            
        })
         this.props.editDetailsEmptyDispatch({
            make:"",
            marketCategory:"",
            details:""
         })
         this.props.history.push('/')

        }else{
        this.props.addCardDispatch({...this.state,id:Math.random()})

        this.setState({
            make:"",
            marketCategory:"",
            details:""
        })
        this.props.history.push('/')
    }
}
        handleNewCard(){
           this.props.editDetailsEmptyDispatch({
            make:"",
            marketCategory:"",
            details:"",
            id:undefined
           })
           this.setState({
            make:"",
            marketCategory:"",
            details:"",
            id:undefined
        })
        }
   

        componentDidMount(){
        const {editCard} = this.props.cardList
        if(editCard.id){
            this.setState(editCard)
        }
      }
    
    render(){
    
        const {editCard} = this.props.cardList
        
        const {make,marketCategory,details} = this.state
          return(
           <div className="container mt-5" style={{maxWidth:"700px"}} >
            {this.state.id ? (
           <div class="row">
           <div class="col">
           <h2 className="text-center">CreateForm</h2>
           </div>
            <div class="col-md-auto">
            
           </div>
           <div class="col col-lg-4">
            <button className="btn btn-primary" onClick={()=>this.handleNewCard()}>New Card</button>
          </div>
           </div>) : (<h2 className="text-center">CreateForm</h2>)}

            <label htmlFor="">make</label>
            <input type="text" id="make" value={make} onChange={this.handleChange} className="form-control"/>
            <label htmlFor="">marketCategory</label>
            <input type="text" id="marketCategory" value={marketCategory} onChange={this.handleChange} className="form-control"/>
            <label htmlFor="">details</label>
            <textarea id="details" value={details} onChange={this.handleChange} className="form-control" cols="15" rows="5"></textarea>
            <div className="text-center">
                <button className="btn btn-success mt-3" onClick={this.handleSumbit}>Sumbit</button>
            </div>
           </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return state
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addCardDispatch:(data)=>dispatch(addCard(data)),
        editCardPutDispatch:(data)=>dispatch(putCardDetail(data)),
        editDetailsEmptyDispatch:(data)=>dispatch(editCard(data))
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateCard)