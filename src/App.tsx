import './App.css'
import "tailwindcss";
import SideBar from './components/SideBar';

function App() {


  return (
    <>
      <body className='flex flex-col bg-[#121415]'>
        <div className='text-2xl'>
          <h1 className='pt-1 text-[#FFF6DF]'>TunesDay</h1>
        </div>
        <SideBar />
      </body>


    </>
  )
}

export default App
