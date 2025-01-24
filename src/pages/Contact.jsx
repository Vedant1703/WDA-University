import React from 'react';

function Contact() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full p-3 border rounded-lg"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                className="w-full p-3 border rounded-lg"
                rows="4"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <div className="space-y-4">
            <p>
              <strong>Address:</strong><br />
              IIT Lucknow <br/>
              Chak Ganjaria, C. G. City <br/>
              Lucknow – 226002
            </p>
            <p>
              <strong>Phone:</strong><br />
              (123) 456-7890
            </p>
            <p>
              <strong>Email:</strong><br />
              contact@iiitl.ac.in
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;