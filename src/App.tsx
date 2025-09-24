import './App.css'
import "tailwindcss";
import SideBar from './components/SideBar';
import SongList from './components/SongList';

function App() {


  return (
    <>
      <body className='flex flex-col bg-[#121415]'>
        <div className='text-2xl'>
          <h1 className='pt-1 text-[#FFF6DF]'>TUNESDAY</h1>
        </div>
        <SideBar />
        <SongList />
        <SongList />
        <SongList />
      </body>


    </>
  )
}

export default App
