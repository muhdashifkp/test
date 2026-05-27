import React from 'react'

export default function Noufa() {
    const books = [{
        id: 1,
        title: "the god of small things",
        author: "arundhathi Roy",
        image: ""
    }, {
        id: 2,
        title: "wings of fair",
        author: "A.P.J abdul kalam",
        image: ""
    }, {
        id: 3,
        title: "the white tiger",
        author: "aravind adiga",
        image: ""
    }]
    return (
        <div className='min-h-screen bg-gray-100 p-8'>
            <h1 className='text-3xl font-bold  text-center mb-8'>Top Selling Indian Books</h1>
            <div className='grid md:grid-cols-3 gap-6'>
                {books.map((book, index) => (
                    <div key={book.id} className='bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition'>
                        <img
                            src={book.image}
                            alt={book.title}
                            className="w-full h-60 object-cover"
                        />
                        <div className="p-5">

              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xl font-bold">
                  {index + 1}
                </h2>

                
              </div>

              <h3 className="text-lg font-semibold">
                {book.title}
              </h3>

              <p className="text-gray-600">
                Author: {book.author}
              </p>

              <p className="text-gray-600">
                Published: {book.year}
              </p>

              <div className="mt-4 flex justify-between items-center">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  Sales: {book.sales}
                </span>
                 <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
                  Details
                </button>
              </div>

            </div>
          </div>
                
                ))}

                    </div>

        </div>
            )
}
