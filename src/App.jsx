import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex justify-between bg-gray-100 px-10 py-4 '>
      <div>
         <h1 className='text-4xl text-sky-400 font-bold font-serif'>Online Voting System</h1>
      </div>
      <div>
        <button className='bg-sky-500 rounded-full px-2 py-2 text-white font-bold hover:bg-sky-700 '>signup/login</button>
      </div>
    </div>
    <div className='place-items-center space-y-7'>
    <h1 class="text-4xl font-bold text-center mt-10">Welcome to the Online Voting System</h1>
<p class="text-center mt-4 text-lg">Vote securely and anonymously from anywhere.</p>
   <button className='text-white-200 text-center bg-sky-400 px-3 py-3 text-3xl rounded-full border border-slate-300 hover:border-slate-400 '> Vote now</button>
   <section className='mt-12 px-7 '>
   <h1 className='text-2xl font-semibold '>Upcoming Election </h1> 
    <ul className='space-y-4 mt-4'>
      <li className='bg-gray-100 p-4 rounded-md'>
        <h3 className='text-xl font-bold'>Maharashtra VidhanSabha Election 20-nov-2024</h3>
        <p>It consists of 288 members directly elected from single-seat constituencies. The Assembly meets at Vidhan Bhavan in Mumbai, though the winter session is held in Nagpur. Along with the Maharashtra Legislative Council, it comprises the legislature of Maharashtra. The presiding officer of the Assembly is the Speaker.</p>
      </li>
    </ul>
    <ul className='space-y-4 mt-4'>
      <li className='bg-gray-100 p-4 rounded-md'>
        <h3 className='text-xl font-bold'>Maharashtra VidhanSabha Election 20-nov-2024</h3>
        <p>It consists of 288 members directly elected from single-seat constituencies. The Assembly meets at Vidhan Bhavan in Mumbai, though the winter session is held in Nagpur. Along with the Maharashtra Legislative Council, it comprises the legislature of Maharashtra. The presiding officer of the Assembly is the Speaker.</p>
      </li>
    </ul><ul className='space-y-4 mt-4'>
      <li className='bg-gray-100 p-4 rounded-md'>
        <h3 className='text-xl font-bold'>Maharashtra VidhanSabha Election 20-nov-2024</h3>
        <p>It consists of 288 members directly elected from single-seat constituencies. The Assembly meets at Vidhan Bhavan in Mumbai, though the winter session is held in Nagpur. Along with the Maharashtra Legislative Council, it comprises the legislature of Maharashtra. The presiding officer of the Assembly is the Speaker.</p>
      </li>
    </ul><ul className='space-y-4 mt-4'>
      <li className='bg-gray-100 p-4 rounded-md'>
        <h3 className='text-xl font-bold'>Maharashtra VidhanSabha Election 20-nov-2024</h3>
        <p>It consists of 288 members directly elected from single-seat constituencies. The Assembly meets at Vidhan Bhavan in Mumbai, though the winter session is held in Nagpur. Along with the Maharashtra Legislative Council, it comprises the legislature of Maharashtra. The presiding officer of the Assembly is the Speaker.</p>
      </li>
    </ul>
    </section> 
    
    
    </div>
    </>
  )
}

export default App
