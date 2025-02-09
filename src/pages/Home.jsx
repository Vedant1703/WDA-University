import React from 'react';

function Home() {
  return (
    <div className="min-h-screen">
      <div className="bg-blue-800 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Modern Land Consolidation With ChakMandli</h1>
          <p className="text-xl mb-8">The process of chakbandi is now made easy</p>
          <button className="bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 mx-10 relative after:content-['→'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-xl px-4">
            Get Started  
          </button>
          <button className="bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100">
            Learn More
          </button>
        </div>
      </div>

      <div class="flex space-x-2">
        <input type="text" id="search" class="p-2 w-120 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 my-10 ml-100" placeholder="Search your land records..."/>
        <button class="px-4 py-2 my-10 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" onclick="performSearch()">Search</button>
    </div>
    


    
    <div class="p-6 max-w-7xl mx-auto">

   
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

         
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <h1 class="text-4xl font-semibold flex items-center space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 2C8.134 2 5 5.134 5 9c0 4.418 5 10 7 12 2-2 7-7.582 7-12 0-3.866-3.134-7-7-7z"></path>
                    </svg>
                    <span>Land Mapping</span>
                </h1>
                <h3 class="text-xl font-bold mb-4">Faster Processing</h3>
                <p>Precise mapping and survey of land parcels</p>
            </div>

      
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <h1 class="text-4xl font-semibold flex items-center space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 7a5 5 0 1 0 0 10A5 5 0 0 0 12 7z"></path>
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    </svg>
                    <span>Owner Title</span>
                </h1>
                <h3 class="text-xl font-bold mb-4">Faster Processing</h3>
                <p>Precise mapping and survey of land parcels</p>
            </div>

         
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <h1 class="text-4xl font-semibold flex items-center space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6V1l6 6z"></path>
                    </svg>
                    <span>Documentation</span>
                </h1>
                <h3 class="text-xl font-bold mb-4">Faster Processing</h3>
                <p>Precise mapping and survey of land parcels</p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-lg">
                <h1 class="text-4xl font-semibold flex items-center space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M23 4v6h-6M1 4v6h6M17 10a7 7 0 1 1-7 7A7 7 0 0 1 17 10z"></path>
                    </svg>
                    <span>Real-Time Updates</span>
                </h1>
                <h3 class="text-xl font-bold mb-4">Faster Processing</h3>
                <p>Precise mapping and survey of land parcels</p>
            </div>

        </div>
    </div>




      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h1 className ="text-xl font-extrabold">80%</h1>
            <h3 className="text-xl font-bold mb-4">Faster Processing</h3>
            <p>Reduction in processing Time</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className ="text-xl font-extrabold">99.9%</h1>
            <h3 className="text-xl font-bold mb-4">Accuracy</h3>
            <p>In Land measurement</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className ="text-xl font-extrabold">95%</h1>
            <h3 className="text-xl font-bold mb-4">Satisfaction</h3>
            <p>Farmer Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;