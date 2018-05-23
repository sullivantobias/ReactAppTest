import  React, {Component} from 'react'

const Texting = ({text, el, onClick}) => (
   <p onClick = {() => onClick(el)}>{text}</p>
)

export default Texting
