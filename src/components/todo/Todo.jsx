import React, { useEffect, useState } from 'react'
// import "./todo.css"

// Get form LS

const getItem = () => {
  let list = localStorage.getItem("todo")
  // console.log(list)
  if (list) {
    return JSON.parse(localStorage.getItem("todo"));
  } else {
    return [];
  }
}



export const Todo = () => {
  const [item, setItem] = useState("");
  const [listData, setlistData] = useState(getItem())

  // Add Items

  function addItem() {
    setlistData((listData) => {
      const updateList = [...listData, item]
      console.log(updateList)
      setItem("")
      return updateList;
    })
  }

  // Remove Items

  function removeItem(ind) {
    const removeData = listData.filter((ele, id) => {
      return ind != id;
    })
    setlistData(removeData)
  }

  // Edit Items

  let list = JSON.parse(localStorage.getItem("todo"))

  function editItem(ind) {
    let newTodo = window.prompt("Enter New Todo")
    // console.log(list)
    // console.log(ind)
    list[ind] = newTodo
    localStorage.setItem("todo", JSON.stringify(list))
    setlistData(list)
  }

  // Remove All

  function removeAll() {
    setlistData([])
  }

  // Added to LS

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(listData))
  }, [listData])

  return (
    <>
      <div className='container'>
        <div className='header'> TODO LIST</div>
        <input type="text" placeholder='Add Item' value={item} onChange={(e) => setItem(e.target.value)} />
        <button onClick={addItem}>Add</button>
        <p className='list-heading'> Todo List....</p>
        {listData != [] && listData.map((data, ind) => {
          return (
            <>
              <p key={ind}>
                <div className='listData'>{data}</div>
                <div className='btn-position'>
                  <button onClick={() => editItem(ind)}>Edit</button>
                  <button onClick={() => removeItem(ind)}>Remove</button>
                </div>
              </p>
            </>
          )
        })}
        {listData.length >= 1 && <button onClick={removeAll}>Remove All</button>}
      </div>
    </>
  )
}




