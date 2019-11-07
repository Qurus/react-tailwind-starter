import React from 'react'
import './css/tailwind.src.css'
import './tailwind.css'
import Button from './components/Button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <nav className="flex items-center justify-between flex-wrap bg-pink-500 p-6">
  <div className="flex items-center flex-shrink-0 text-white mr-6">
    <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
    <span className="font-semibold text-xl tracking-tight">Tailwind Starter React</span>
  </div>
  <div className="block lg:hidden">
    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="text-sm lg:flex-grow">
      <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-4">
        Docs
      </a>
      <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-4">
        Examples
      </a>
      <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300">
        Blog
      </a>
    </div>
    <div>
      <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-black hover:bg-yellow-300 mt-4 lg:mt-0">Download</a>
    </div>
  </div>
</nav>
        <p className="text-center bg-orange-200 px-2 py-2 mb-2">
          Tailwind Starter.
        </p>
        <Button size="default">Button default</Button>
          <Button className="bg-purple-500" size="large">Button large</Button>
          <Button className="bg-blue-500" size="xl">Button xl</Button>
        <div className="flex justify-center bg-gray-200 mt-3">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
  <img className="h-50" src="https://images.unsplash.com/photo-1551389267-fb1d08dc6bf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" alt="Sunset in the mountains" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div className="px-6 py-4">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
  </div>

        </div>
      </div>
      </header>
    </div>
  );
}

export default App;
