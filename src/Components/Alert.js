import React from 'react'
import { useState } from 'react'
// const AlertItems = () =>{
//   {}
// }

// let AlertItem = ['Fire Alert', 'Water Alert', 'Safty Alert']
export const Alert = ({alertItem, sound, type }) => {
  // let AlertItem = ['Fire Alert', 'Water Alert', 'Safty Alert']
  // const [alertItem, setAlertItem] =  useState([ {type: 'type 1', sound: 'Fire Alert'}, 
  // {type: 'type 2', sound: 'Water Alert'}, {type: 'type 3', sound: 'Safety Alert'}]) 
  // const sound = props.sound
  // const type = props.type
  // const alertItem = props.alertItem
  return (
    <div > 
      {alertItem.map((item) => (
        <div onClick={() => console.log({item: item.type})}> {item.type} </div> 
      )
      )}
    </div>
  )
}
