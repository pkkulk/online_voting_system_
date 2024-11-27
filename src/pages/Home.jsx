

import {Link} from 'react-router-dom'
function Home(){
return(
    <>
    <div className='flex justify-between bg-gray-100 px-10 py-4 '>
      <div>
        <h1 className='text-4xl text-sky-400 font-bold font-serif'>Online Voting System</h1>
      </div>
      <div>
        <Link to='/Log'>
        <button className='bg-sky-500 rounded-full px-2 py-2 text-white font-bold hover:bg-sky-700 '>signup/login</button>
      </Link></div>
    </div>
    <div className=' place-items-center space-y-14  bg-4 bg-bg2 h-96 w-full bg-cover'>
    <h1 className="text-4xl font-bold text-center py-12 tracking-wide bg-gradient-to-r from-orange-500 via-white to-green-700 text-transparent bg-clip-text mt-0">Welcome to the Online Voting System</h1>
    <p class="text-center mt-4 text-lg text-white leading-relaxed">Vote securely and anonymously from anywhere.</p>
   <button className='text-white-200 text-center bg-sky-400 px-3 py-3 text-3xl rounded-full border border-slate-300 hover:border-slate-400 '> Vote now</button>
</div>
   <section className='mt-12 px-7 shadow-lg bg-slate-50'>
   <h1 className='text-2xl font-semibold '>Upcoming Election </h1> 
   <div className='container mx-auto grid grid-cols-3 gap-5'>
    <div className=' bg-white shadow-lg rounded-lg p-4'>
<h3 className='text-xl mb-2 font-semibold text-blue-500'>Lok sabha Election 2024</h3>
   <p className='text-gray-600 mb-2'>
   Electing members for the 18th Lok Sabha. Nationwide participation expected.
 </p>
 <p class="text-gray-800 font-semibold mb-2">
      Voting Date: <span class="text-blue-600">April-May 2024</span>
    </p>
    <p class="text-gray-500 mb-4">Open for all registered voters in India.</p>
    <button class="bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-600">
      Vote Now
    </button>
   
    </div>
    <div className=' bg-white p-4 shadow-lg rounded-lg '>
    <h1>hello</h1>
</div>
<div className=' bg-white p-4 shadow-lg rounded-lg '>
    <h1>hello</h1>
</div>  <div className=' bg-white p-4 shadow-lg rounded-lg '>
    <h1>hello</h1>
</div>  <div className=' bg-white p-4 shadow-lg rounded-lg '>
    <h1>hello</h1>
</div>  <div className=' bg-white p-4 shadow-lg rounded-lg '>
    <h1>hello</h1>
</div>  <div className=' bg-white p-4 shadow-lg rounded-lg '>
    <h1>hello</h1>
</div>  <div className=' bg-white p-4 shadow-lg rounded-lg '>
    <h1>hello</h1>
</div>  <div className=' bg-white p-4 shadow-lg rounded-lg '>
    <h1>hello</h1>
</div>
 </div>





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
    
    </>
)
}

export default Home;