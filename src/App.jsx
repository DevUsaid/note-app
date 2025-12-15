import React, { useEffect, useState } from 'react'



// useState
const App = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [task, setTask] = useState([])

  
  // useEffect

  // local storage
  // Load tasks from localStorage on mount
  useEffect(() => {
    const storage = localStorage.getItem("copyObject")
    if (storage) {
      setTask(JSON.parse(storage))
    }
  }, [])

  // Save tasks to localStorage whenever task changes//
  useEffect(() => {
    localStorage.setItem("copyObject", JSON.stringify(task))
  }, [task])



  const stopFormload = (e) => {
    e.preventDefault()
    setTask([...task, { title, description }])
    setTitle('')
    setDescription('')
  }

  const deletNote = (indx) => {
    setTask(task.filter((_, i) => i !== indx))
  }

  return (
    <div className="flex m-10 gap-56 overflow-hidden">

      {/* FORM */}
      <form className="flex flex-col gap-3 w-96 ml-36" onSubmit={stopFormload}>
        <h2 className="font-bold text-5xl text-white pb-3">Add Note</h2>

        <input
          className="p-4 w-96 outline-none"
          type="text"
          placeholder="enter a title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="p-4 h-52 outline-none"
          placeholder="write any description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button className="bg-slate-400 p-3">Add Note</button>
      </form>

      {/* NOTES */}
      <div className="border-l-2 p-4">
        <div className="flex flex-row flex-wrap gap-4">

          {task.map((elem, indx) => (
            <div
              key={indx}
              style={{
                backgroundImage:
                  "url(https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png)"
              }}
              className="
                flex flex-col w-40 pt-9 pb-4 px-4 rounded-xl
                bg-cover text-black cursor-pointer
              "
            >
              <h2 className="text-xl font-bold">{elem.title}</h2>
              <p>{elem.description}</p>

              <button
                onClick={() => deletNote(indx)}
                className="bg-red-500 px-2 py-1 mt-3 rounded-md text-white"
              >
                Delete
              </button>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default App


// note app
