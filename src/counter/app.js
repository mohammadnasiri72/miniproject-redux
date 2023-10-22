const add = document.querySelector(".icon-add")
const reset = document.querySelector(".icon-reset")
const minus = document.querySelector(".icon-minus")
const monitor = document.querySelector(".monitor")



const countReducer = (state = 0 , action)=>{
    switch (action.type) {
        case "add":{
          return  state + 1
        }
        case "reset":{
            return state - state
        }
        case "minus":{
            return state - 1
        }
            
          
    
        default: {
            return state
        }
    }
}
const store = Redux.createStore(countReducer)
add.addEventListener("click" , ()=>{
    store.dispatch({type:"add"})
    let newValue = store.getState()
    monitor.innerHTML = newValue
})
minus.addEventListener("click" , ()=>{
    store.dispatch({type:"minus"})
    let newValue = store.getState()
    monitor.innerHTML = newValue
})
reset.addEventListener("click" , ()=>{
    store.dispatch({type:"reset"})
    let newValue = store.getState()
    monitor.innerHTML = newValue
})
