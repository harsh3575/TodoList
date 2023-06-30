"use client";
import { ContextUse } from '@/store/Todos';
import React, { FormEvent, useState } from 'react'

export default function AddTodoList() {
    const [Todo, setTodo] = useState("");
    const { TodoList, hanleAddTodo } = ContextUse()

    const hanleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        hanleAddTodo(Todo)
        setTodo("");
    }
    return (
        <>
            <form onSubmit={hanleFormSubmit}>
                <div className='flex justify-center gap-14 my-10 '>
                    <input type="text" placeholder='Write Todo' className='outline-none p-2 text-2xl bg-slate-50 border-b-2 border-black' value={Todo} onChange={(e) => setTodo(e.target.value)} />
                    < button type="submit" className='bg-white  px-10 py-2 rounded-lg shadow-lg  text-lg hover:bg-black hover:text-white hover:shadow-none'>Add</button>
                </div>
            </form>
        </>
    )
}
