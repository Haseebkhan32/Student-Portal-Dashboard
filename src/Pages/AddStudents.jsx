

const AddStudents = () => {
  return (
    <div className='borde2 m-4 bg-[#f8f8f8] rounded' >
      <h1 className="text-xl uppercase font-medium py-6 px-4">Admission Foam</h1>
      <form action="" className="grid grid-cols-4 gap-4 px-4">
        <div className="" >
          <label htmlFor="" className="font-semibold">First Name</label>
          <input required  className="p-2 rounded outline-none border-2 border-gray-300 w-full my-1" placeholder="Enter your email" type="text" />
        </div>
        <div>
          <label htmlFor="" className="font-semibold">Last Name</label>
          <input required className="bg-white p-2 rounded outline-none border-2 border-gray-300 w-full my-1" placeholder="Enter your email" type="text" />
        </div>
        <div>
          <label htmlFor="" className="font-semibold">Date of Birth</label>
          <input required className="p-2 rounded outline-none border-2 border-gray-300 w-full my-1" placeholder="Enter your email" type="date" />
        </div>
        <div className="" >
          <label htmlFor="" className="font-semibold">Gender</label>
          <input required className="p-2 rounded outline-none border-2 border-gray-300 w-full my-1" placeholder="Male/Female" type="text" />
        </div>
        <div>
          <label htmlFor="phone" className="font-semibold"  >Contact No:</label>
          <input required className="p-2 rounded outline-none border-2 border-gray-300 w-full my-1" placeholder="+92-" type="tel" id="phone" name="phone" />
        </div>

        <div className="" >
          <label htmlFor="" className="font-semibold">CINC No:</label>
          <input required className="p-2 rounded outline-none border-2 border-gray-300 w-full my-1" placeholder="41303-1586080-9" type="number" />
        </div>
        <div className="" >
          <label htmlFor="" className="font-semibold">Email Address:</label>
          <input required className="p-2 rounded outline-none border-2 border-gray-300 w-full my-1" placeholder="Enter your email" type="email" />
        </div>
        <div className="" >
          <label htmlFor="" className="font-semibold">Religion</label>
          <input required className="p-2 rounded outline-none border-2 border-gray-300 w-full my-1" placeholder="Islam" type="text" />
        </div>

        <div>
          <label className="font-semibold">Course Name:</label>

          <select className="p-2 rounded outline-none border-2 border-gray-300 w-full my-1">
            <option value="">Select Course</option>
            <option value="web">Web Development</option>
            <option value="app">App Development</option>
            <option value="graphic">Graphic Design</option>
            <option value="ai">AI / Machine Learning</option>
          </select>
        </div>
        <div>
          <label className="font-semibold">Campus/Branch</label>

          <select className="p-2 rounded outline-none border-2 border-gray-300 w-full my-1">
            <option value="">Select Campus</option>
            <option value="auto">Auto Ban</option>
            <option value="sadar">Sadar</option>
            <option value="sarfarz">Sarfarz Colony</option>
          </select>
        </div>

        <div className="" >
          <label htmlFor="" className="font-semibold">Current Address:</label>
          <input required  className="p-2 rounded outline-none border-2 border-gray-300 w-full my-1" placeholder="house.no-7" type="text" />
        </div>
        <div className="" >
          <label htmlFor="" className="font-semibold">Postal Code:</label>
          <input required className="p-2 rounded outline-none border-2 border-gray-300 w-full my-1" placeholder="71000" type="number" />
        </div>

      <button  className="active:scale-95 transition-all hover:bg-blue-600   text-white text-lg w-1/3 my-3 py-2 rounded bg-blue-500">Sumbit</button>
      </form>

    </div>
   
  )
}

export default AddStudents