import {addTodo} from './actionType.js'
export function addTodoList(e){
    return {
        type: addTodo ,
        title: e
    }
}
