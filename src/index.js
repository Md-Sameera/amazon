import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import Appbar from  './components/Appbar';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Cards from './components/Cards';

const root=ReactDOM.createRoot(document.getElementById('root'));

 const arr1=['sam', 'meera','khan'];
const Time=()=>{  
    const time=new Date().toLocaleTimeString();
    return <h1 className='time'>Time: {time} </h1>
}
root.render(  
    <>
        <Appbar/>
        <br></br>
        <h1 >Top Amazon-Free Movies🎞🔥</h1>
        
        <ul className="cards">
            {/**/}
        <Cards name='Amazing Spider man' link="https://cdn.shopify.com/s/files/1/0747/3829/products/mHP0317_1024x1024.jpeg?v=1571444288"/>
        <Cards name='The UnHoly'link="https://th.bing.com/th/id/OIP.XHSAa4XYVMeOfGA7qbFTPwHaJQ?pid=ImgDet&rs=1" />
        <Cards name='Avatar'link="https://th.bing.com/th/id/OIP.MyA449aFQA7uj3IfHnZw1AHaK9?pid=ImgDet&rs=1"/>
        <Cards name='Priraes of the caribbean' link="https://th.bing.com/th/id/OIP.Cx42eUD_dUUpepRb4Ikg9wHaKz?pid=ImgDet&rs=1"/>
        <Cards name='Avengers' link="https://i.pinimg.com/736x/cc/2e/5d/cc2e5db4e5533cfbab026bff16970e19.jpg"/>
        <Cards name='RRR' link="https://hindi.filmibeat.com/fanimg/movie/1855/rrr-photos-images-4631.jpg"/>

        </ul>    
        <ol>
            {arr1.map((val)=>(<li>{val}</li>
             ))}
        </ol>
        <div className='box1'> 
        <h1>Web app Clock</h1>
        <div className='boxy'> <Time /></div>
        </div>            
    </>        
);


           
              