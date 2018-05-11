import React from 'react'


const Family = [
  {id: 1, Name: 'Sully'},
  {id: 2, Name: 'Remoh'},
  {id: 3, Name: 'Cartman'},
]

const mapList = () => (
  <div className="userList">
      {Family.map(({ id, Name }) => (
        <tr>
          <td key={id}>{Name}</td>
        </tr>
      ))}
    </div>
)



export default mapList
