import React from 'react'
import './Landingpage.css'
const Landingpage = (props) => {
  return (
    <div className='landing_page'>
            <div className='landing_page_info'>
                <h1>Fusce sem magna </h1>
                <h1>phareta cursus</h1>
                <p>Lorem ipsum dolorsit amet consectetur, adipisicing elit. Excepturi sit eaque, exercitationem praesentium ad nulla quasi ratione distinctio repellat, omnis debitis veritatis neque dolorem officia ut aliquip ex ea commodo consequat.</p>
                <span className='landing_page_info_btn' onClick={()=>{props.onselect()}}> Enter <i class="fa-solid fa-arrow-right"></i></span>
            </div>
            
    </div>
  )
}

export default Landingpage