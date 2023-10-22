







import {addTodo, doTodo, filterAllTodo, filterCompeleteTodo, filterIncompeleteTodo, removeTodo} from './actionType'
import { addTodoList } from './todo-func'

const add = document.querySelector(".icon-add")
const newWork = document.querySelector(".input-new-work")
const boxTodo = document.querySelector(".box-todo")





function todoListReducer(state=[] , action){
    switch (action.type) {
        case addTodo:{
            return  [...state, action.title]
        }
        // case removeTodo:{
        //     return state
        // }
        // case doTodo:{
        //     return state
        // }
        // case filterAllTodo:{
        //     return state
        // }
        // case filterCompeleteTodo:{
        //     return state
        // }
        // case filterIncompeleteTodo:{
        //     return state
        // }

        default:{
            return state
        }
            
    }
}

const store = Redux.createStore(todoListReducer)

console.log(store);






































// import {addTodo} from './todo-func'






// const todoreducer = (state = [], action) => {
//     switch (action.type) {
//         case addTypeAction: {
//             return [...state, action.title]
//         }
//         default: {
//             return state
//         }
//     }
// }
// const store = Redux.createStore(todoreducer)





add.addEventListener("click", () => {
    const newTodoWork = newWork.value
    newWork.value =""
    store.dispatch(addTodoList(newTodoWork))
    const todoes = store.getState()
    console.log(todoes);
    generateTodo(todoes)
})


function generateTodo(e) {
    console.log(e);
    boxTodo.innerHTML = ""
    e.forEach(item => {
        boxTodo.innerHTML += `
        <div class="bg-white rounded-xl flex justify-between px-3 items-center w-1/2 m-auto mt-2 box-work ${e? "completed" : ""}">
            <p class="text-2xl">${item}</p>
            <div class="flex flex-col">
                <span class="material-symbols-outlined rounded-lg m-1 p-1 bg-red-700 cursor-pointer text-white icon-delete">delete</span>
                <span onclick={todoDone()} class="material-symbols-outlined rounded-lg m-1 p-1 bg-green-600 cursor-pointer icon-done">done</span>
            </div>
        </div>
        `
    });
   
}
// const todoDone = ()=>{
//     console.log(del);
// }
