import React from 'react';

function Contact() {
  return (
    <body class="bg-gray-100 flex items-center justify-center min-h-screen">

    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">

        <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">Login to Your Account</h2>

   
        <form action="#" method="POST" class="space-y-4">

        
            <div>
                <label for="email-or-phone" class="block text-sm font-medium text-gray-700">Email or Phone</label>
                <input type="text" id="email-or-phone" name="email-or-phone" placeholder="Enter your email or phone number"
                    class="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
            </div>

     
            <div>
                <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter your password"
                    class="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
            </div>

          
            <div>
                <button type="submit" class="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
                    Login
                </button>
            </div>

        </form>

     
        <div class="text-center my-4">
            <span class="text-sm text-gray-600">or sign in with</span>
        </div>


        <div class="space-y-4">

      
            <a href="#" class="flex items-center justify-center w-full py-3 border border-gray-300 rounded-lg bg-white text-gray-700 font-semibold hover:bg-gray-100 transition">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" stroke="none">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 3.72 2.16 7 5.29 8.56v-6.07h-1.6v-2.49h1.6V9.42c0-2.42 1.42-3.76 3.69-3.76 1.07 0 2.19.19 2.19.19v2.4h-1.23c-1.21 0-1.59.75-1.59 1.5v1.85h2.49l-.4 2.49h-2.1v6.07C18.8 19.22 22 15.72 22 12c0-5.52-4.48-10-10-10z"></path>
                </svg>
                Google
            </a>


            <a href="#" class="flex items-center justify-center w-full py-3 border border-gray-300 rounded-lg bg-white text-gray-700 font-semibold hover:bg-gray-100 transition">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" stroke="none">
                    <path d="M22 2.01c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h12c.3 0 .58-.08.85-.23l3.57-2.14c.31-.18.58-.47.75-.79.16-.31.24-.66.24-1.03V6.19c0-.37-.1-.73-.27-1.04l-3.57-2.15c-.28-.17-.57-.24-.87-.24H4c-.3 0-.59.07-.86.24L.61 5.15C.43 5.33.34 5.6.34 5.88v14.96c0 .37.1.73.27 1.04l3.57 2.15c.28.17.58.24.87.24h12c.3 0 .59-.07.86-.24l3.57-2.15c.28-.17.47-.43.63-.74.16-.31.25-.65.25-.99V2.01zM8.5 16h-2v-7h2v7zm-1-8.25c-.65 0-1.17-.52-1.17-1.17s.52-1.17 1.17-1.17 1.17.52 1.17 1.17-.52 1.17-1.17 1.17zm9.5 8.25h-2v-3.5c0-1.04-.56-1.75-1.5-1.75s-1.5.71-1.5 1.75v3.5h-2v-7h2v.99c1.04-1.64 3-2.21 4.5-1.18v6.19z"></path>
                </svg>
                Facebook
            </a>

        </div>

   
        <div class="text-center mt-6">
            <p class="text-sm text-gray-600">Don't have an account? <a href="#" class="text-blue-600 hover:underline">Sign up</a></p>
        </div>

    </div>

</body>
  );
}

export default Contact;