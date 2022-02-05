import {makeAutoObservable} from 'mobx'
import { Todo } from '../helpers/types'

class TodoStore {
    todos: Todo[] = []
    
    constructor() {
        makeAutoObservable(this)
    }

    addTodo(todo: Todo){
         this.todos.push(todo)
    }

    removeTodo(id: number){
        this.todos.filter((el) => el.id !== id)

    }

    markAsDone(id: number){
        this.todos.map((el) => el.id === id ? {...el, done: !el.done} : el)
    }
}

export default new TodoStore()