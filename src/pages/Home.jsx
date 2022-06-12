import React from 'react'
import Cards from '../components/Cards'
import data from '../Resources/data'
export default function Home() {
  return (
    <>
    <h1>Top Amazon Prime MOviees for free...🎬📽</h1>
    <ul className='cards'> 
    {
        data.map((val)=>{
            return <Cards name={val} link="https://cdn.shopify.com/s/files/1/04747/3829/products/mHP0317_1024x1024.jpe?v=157444288"/>
        })
    }
    </ul>
    </>
  )
}
