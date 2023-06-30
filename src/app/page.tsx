import AddTodoList from '@/components/AddTodoList'
import AddList from '@/components/AddList'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <>
      <main className='flex justify-center '>
        <div className='flex flex-col  h-[80vh] w-2/6 mt-16 bg-slate-50 animation overflow-auto'>
          <h2 className='text-4xl mt-16  text-center'>Todo List</h2>
          <Navbar />
          <AddTodoList />
          <AddList />
        </div>
      </main>
    </>
  )
}
