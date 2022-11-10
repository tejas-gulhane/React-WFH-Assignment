import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Modulepage.css'
const Modulepage = (props) => {

    const navigate = useNavigate();
     
    const gotomodule1 = ()=>{
      navigate('/module1')
      props.onselect();
    }
    const gotomodule2 = ()=>{
      navigate('/module2')  
    }
    const gotomodule3 = ()=>{
      navigate('/module3')
    }
    const gotomodule4 = ()=>{
      navigate('/module4')
    }
    const gotomodule5 = ()=>{
      navigate('/module5')
    }

  return (
    <>
        <div className='module_info'>
            <div className='module_info_list'>
                <h6 onClick={gotomodule1}>Module One</h6>
                <h6 onClick={gotomodule2}>Module Two</h6>
                <h6 onClick={gotomodule3}>Module Three</h6>
                <h6 onClick={gotomodule4}>Module Four</h6>
                <h6 onClick={gotomodule5}>Module Five</h6>
                <span className='module_page_info_btn'> Select Module <i class="fa-solid fa-arrow-right"></i></span>
            </div>
        </div>
    </>
  )
}

export default Modulepage