import './App.css'
import {GroupCard} from "@/components/GroupCard.tsx";

const App = () => {
  return (
    <div className='@container bg-light-blue-5 text-dark-gray-20 dark:bg-dark-cyan-3 dark:text-light-gray-2'>
      <div className='flex justify-center flex-col items-center h-screen gap-6'>
        <h1 className='text-2xl font-bold inline-block'>Welcome | Home</h1>
        <GroupCard title={'24-35 Males'} />
      </div>
    </div>
  )
}

export default App