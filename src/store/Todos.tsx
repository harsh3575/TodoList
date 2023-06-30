"use client";


import { ReactNode, createContext, useContext, useState } from "react";
export type todo = {
    id: String;
    val: String;
    complete: boolean;
    createAt: Date;
}

export type TodoContext = {
    TodoList: todo[];
    hanleAddTodo: (val: string) => void;
    todoChageComplete: (val: any) => void;
    handleDeleteTodo: (val: any) => void;
}
export const todosContext = createContext<TodoContext | null>(null)



export const TodosProvider = ({ children }: { children: ReactNode }) => {
    const [TodoList, setTodoList] = useState<todo[]>([])
    const hanleAddTodo = (val: string) => {
        setTodoList((prev) => {
            const newTodo: todo[] = [{
                id: Math.random().toString(),
                val,
                complete: false,
                createAt: new Date()
            }, ...prev]
            return newTodo

        })

    }
    const todoChageComplete = (id: any) => {
        setTodoList((prev) => {
            return prev.map((task: any) => {
                if (task.id === id) {
                    return { ...task, complete: !task.complete }
                }
                return task
            })
        })
    }
    const handleDeleteTodo = (Changeid: any) => {
        setTodoList((prev) => {
            return prev.filter((value) => { return value?.id !== Changeid })
        })
    }
    return <>
        <todosContext.Provider value={{ TodoList, hanleAddTodo, todoChageComplete, handleDeleteTodo }}>
            {children}
        </todosContext.Provider >
    </>
}


export const ContextUse = () => {
    const contextValue = useContext(todosContext)
    if (!contextValue)
        throw new Error("data can't reach")
    return contextValue
}