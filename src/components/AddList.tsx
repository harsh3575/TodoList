"use client";
import { ContextUse, todo } from '@/store/Todos';
import { useSearchParams } from 'next/navigation';
import React from 'react'

export default function AddList() {
    const { TodoList, todoChageComplete, handleDeleteTodo } = ContextUse()
    const search = useSearchParams()
    const getData = search.get("todos")
    let FilterData = TodoList
    if (getData == "active") {
        FilterData = FilterData.filter((val: todo) => !val.complete)
    }
    else if (getData == "completed") {
        FilterData = FilterData.filter((val: todo) => val.complete)

    }
    return (

        <div>
            <ul className='flex flex-col w-full gap-[1px] '>
                {FilterData.map(({ id, val, complete }: any) => {
                    return (
                        <li key={id} className='flex  items-baseline justify-stretch gap-5 border-y-2  px-44 text-xl hover:bg-gray-200 py-4 showoff' >
                            <input type="checkbox" name="" id={`todo-${id}`} checked={complete} onChange={() => { todoChageComplete(id) }} />
                            <label htmlFor={`todo-${id}`} className={`${complete ? 'line-through' : null}`}>{val}</label>
                            {
                                complete && (
                                    <span className='bg-red-500 px-4  border-2 text-white rounded-lg myhover' onClick={() => handleDeleteTodo(id)}>Delete</span>
                                )
                            }
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

