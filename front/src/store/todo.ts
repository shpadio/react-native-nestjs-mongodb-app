import {makeAutoObservable} from 'mobx'
import { TodoType } from '../helpers/types'

class Todo {
    todos: TodoType[] = []
    
    constructor() {
        makeAutoObservable(this)
    }

    addTodo(todo: TodoType){
         this.todos.push(todo)
    }

    removeTodo(id: number){
        this.todos.filter((el) => el.id !== id)

    }

    markAsDone(id: number){
        this.todos.map((el) => el.id === id ? {...el, done: !el.done} : el)
    }
}

export default new Todo()