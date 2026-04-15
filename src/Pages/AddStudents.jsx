

const AddStudents = () => {
  return (
    <div className='borde2 m-4 bg-[#f8f8f8] rounded' >
      <h1 className="text-xl uppercase font-medium py-6 px-4">Admission Foam</h1>
      <form action="" className="grid grid-cols-4 gap-4 px-4">
        <div className="" >
          <label htmlFor="" className="font-semibold">First Name</label>
          <input className="p-2 rounded outline-none border-2 border-gray-300 w-full my-1" placeholder="Enter your email" type="text" />
        </div>
        <div>
          <label htmlFor="" className="font-semibold">Last Name</label>
          <input className="bg-white p-2 rounded outline-none border-2 border-gray-300 w-full my-1" placeholder="Enter your email" type="text" />
        </div>
        <div>
          <label htmlFor="" className="font-semibold">Date of Birth</label>
          <input className="p-2 rounded outline-none border-2 border-gray-300 w-full my-1" placeholder="Enter your email" type="date" />
        </div>
          <div className="" >
          <label htmlFor="" className="font-semibold">Gender</label>
          <input className="p-2 rounded outline-none border-2 border-gray-300 w-full my-1" placeholder="Enter your email" type="text" />
        </div>
        <div>
          <label htmlFor="phone" className="font-semibold"  >Contact no</label>
          <input className="p-2 rounded outline-none border-2 border-gray-300 w-full my-1" placeholder="+92-" type="tel" id="phone" name="phone" />
        </div>
      
        <div className="" >
          <label htmlFor="" className="font-semibold">CINC No:</label>
          <input className="p-2 rounded outline-none border-2 border-gray-300 w-full my-1" placeholder="Enter your email" type="number" />
        </div>
        <div className="" >
          <label htmlFor="" className="font-semibold">Email Address:</label>
          <input className="p-2 rounded outline-none border-2 border-gray-300 w-full my-1" placeholder="Enter your email" type="text" />
        </div>
        <div className="" >
          <label htmlFor="" className="font-semibold">Religion</label>
          <input className="p-2 rounded outline-none border-2 border-gray-300 w-full my-1" placeholder="Enter your email" type="text" />
        </div>

        <div className="" >
          <label htmlFor="" className="font-semibold">Course Name:</label>
          <input className="p-2 rounded outline-none border-2 border-gray-300 w-full my-1" placeholder="Enter your email" type="text" />
        </div>
        <div className="" >
          <label htmlFor="" className="font-semibold">Campus/Branch</label>
          <input className="p-2 rounded outline-none border-2 border-gray-300 w-full my-1" placeholder="Enter your email" type="text" />
        </div>
      
        <div className="" >
          <label htmlFor="" className="font-semibold">Current Address:</label>
          <input className="p-2 rounded outline-none border-2 border-gray-300 w-full my-1" placeholder="house.no-7" type="text" />
        </div>
        <div className="" >
          <label htmlFor="" className="font-semibold">Postal Code:</label>
          <input className="p-2 rounded outline-none border-2 border-gray-300 w-full my-1" placeholder="71000" type="number" />
        </div>




      </form>
      <button className="active:scale-95 transition-all hover:bg-blue-600 mx-4 text-white text-lg w-1/10 my-3 py-2 rounded bg-blue-500">Sumbit</button>

    </div>
  )
}

export default AddStudents