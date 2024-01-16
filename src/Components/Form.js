import React, { useState } from 'react';

function Form( props ) {
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <form>
                        <div className="formGroup">
                            <div className="row">
                                <div className="col-md-4 offset-md-4">
                                    <label htmlFor='price'>Price : </label>
                                    <input id="price" name="price" type="number" value={props.price} onChange={props.onHandlePriceChange} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 offset-md-4">
                                    <div className="radio">
                                        <label htmlFor='ordinaryVehicle'>
                                            <input type="radio" id="ordinaryVehicle" name="vehicle" value="1" checked={props.type == 1} onChange={props.onHandleTypeChange} />
                                            Ordinary vehicle
                                        </label>
                                    </div>
                                    <div className="radio">
                                        <label htmlFor='luxuryVehicle'>
                                            <input type="radio" id="luxuryVehicle" name="vehicle" value="2" checked={props.type == 2} onChange={props.handleTypeChange} />
                                            Luxury vehicle
                                        </label>
                                    </div>  
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 offset-md-4"> 
                                    <label htmlFor='userFees'>User fees : </label>
                                    <input type='text' id='userFees' disabled value={props.userFees} />
                                </div>
                            </div>  
                            <div className="row">
                                <div className="col-md-4 offset-md-4"> 
                                    <label htmlFor='specialFees'>Special fees : </label>
                                    <input type='text' id='specialFees' disabled value={props.specialFees} />
                                </div>
                            </div>  
                            <div className="row">
                                <div className="col-md-4 offset-md-4"> 
                                    <label htmlFor='associationFees'>Association fees : </label>
                                    <input type='text' id='associationFees' disabled value={props.associationFees} />
                                </div>
                            </div>  
                            <div className="row">
                                <div className="col-md-4 offset-md-4"> 
                                    <label htmlFor='storageCosts'>Storage Costs : </label>
                                    <input type='text' id='storageCosts' disabled value={props.storageCosts} />
                                </div>
                            </div> 
                            <div className="row">
                                <div className="col-md-4 offset-md-4"> 
                                    <label htmlFor='totalPrice'>Total price : </label>
                                    <input type='text' id='totalPrice' disabled value={props.totalPrice} />
                                </div>
                            </div>   
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form;