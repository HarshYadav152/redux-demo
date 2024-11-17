import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import {actionCreator} from "../state/index"

export default function Shop() {
    const dispatch =  useDispatch();
    const {removeMoney,addMoney} = bindActionCreators(actionCreator,dispatch)
    return (
        <div>
            <div>
                <div className="card text-center bshadow">
                    <div className="card-header">
                        First time in INDIA
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">welcome bonus</h5>
                        <p className="card-text">click the button below and try your luck.</p>
                        <a href="#" className="btn btn-warning">Get it</a>
                    </div>
                    <div className="card-footer text-body-secondary">
                        Heist ends in few days
                    </div>
                </div>
            </div>
            <div className='my-3'>
                <h5 className='text-center my-4 text-bold border'>Its time to spend some money</h5>
                <div className="row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                        <div className="card bshadow">
                            <div className="card-body">
                                <h5 className="card-title text-center">Add item to cart</h5>
                                <p className="card-text text-center">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btn-primary" onClick={()=>{removeMoney(100)}}>Add</a>
                                {/* <a href="#" className="btn btn-primary" onClick={()=>{dispatch(actionCreator.removeMoney(100))}}>Add</a> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card bshadow">
                            <div className="card-body">
                                <h5 className="card-title text-center">Remove item from cart</h5>
                                <p className="card-text text-center">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btn-primary mx-auto" onClick={()=>{addMoney(100)}}>Remove</a>
                                {/* <a href="#" className="btn btn-primary mx-auto" onClick={()=>{dispatch(actionCreator.addMoney(100))}}>Remove</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}
