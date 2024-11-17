export const addMoney = (amount)=>{
    return (dispatch)=>{
        dispatch({
            type:'add',
            payload:amount
        })
    }
}

export const removeMoney = (amount)=>{
    return (dispatch)=>{
        dispatch({
            type:'remove',
            payload:amount
        })
    }
}