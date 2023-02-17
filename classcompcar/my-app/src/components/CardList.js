import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class CardList extends React.Component{
    render(){
    const {cards} = this.props.cardList
    
        return(
            <div className="container mt-5" style={{maxWidth:"700px"}}>
                <h2 className = "mb-5">CarListAvailable</h2>
                { cards.map(e=>(
                    <div class="card mt-3 text-center" style = {{padding:"15px"}}>
                        <Link to ={'/card/'+e.id}>
                            <h5 class="card-title">{e.make}</h5>
                            </Link>
                      <h6 class="card-subtitle mb-2 text-muted">{e.marketCategory}</h6>
                     <div class="card-body">
                      {e.details}
                    </div>
                 </div>
              ))}
                  </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return state
}
export default connect(mapStateToProps)(CardList)