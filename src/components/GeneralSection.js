import React from 'react'

export default function GeneralSection({generalInfo,setGeneralInfo}) {
  return (
    <div className="bg-1 info-container">
      <h2>General</h2>
      <form>
        <input type="text" placeholder='Name' value={generalInfo.name}
        onChange={(e)=> {
          setGeneralInfo({...generalInfo, name:e.target.value})}}/>
        <input type="email" placeholder='Email' value={generalInfo.email}
        onChange={(e)=> {
          setGeneralInfo({...generalInfo, email:e.target.value})}}/>
        <input type="tel" placeholder='Phone' value={generalInfo.phone}
        onChange={(e)=> {
          setGeneralInfo({...generalInfo, phone:e.target.value})}}/>
      </form>
    </div>
  )
}
