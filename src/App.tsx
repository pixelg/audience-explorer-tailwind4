import './App.css'
import logo from "@/assets/sand-logo.svg";
import {GroupCard} from "@/components/GroupCard.tsx";

const App = () => {
  return (
    <div className='@container bg-light-blue-5 text-dark-gray-20 dark:bg-dark-cyan-3 dark:text-light-gray-2'>
      <div className='flex justify-center flex-col gap-8 items-center h-screen'>
        <div className='flex items-center justify-center'>
          <div>
            <img
              className="size-9 mr-2"
              src={logo}
              alt="Audience Explorer Logo"
            />
          </div>
          <div className='font-bold'>
            <div className='mr-2 inline-block'>Sparrow TV</div> | <div className='ml-2 inline-block'>Audience Explorer</div>
          </div>
          {/*<h1 className='text-2xl font-bold inline-block'>Sparrow TV | Audience Explorer</h1>*/}
        </div>

          <GroupCard title={'24-35 Males'} />


      </div>
    </div>
  )
}

export default App