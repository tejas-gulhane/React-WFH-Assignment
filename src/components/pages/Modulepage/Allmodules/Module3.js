import React, { useState } from 'react'
import './Module.css'
import img1 from '../../../images/m3-t1.png'
import img2 from '../../../images/m3-t2.png'
import img3 from '../../../images/m3-t3.png'
import { useNavigate } from 'react-router-dom'

const Module1 = () => {
    const [img ,updateimg] = useState(img1);
    const [title ,updatetitle] = useState("Lorem Ipsum");
    const [mgs ,updatemsg] = useState("Dolore qui aliqua ex qui est quis anim culpa. Commodo eu cupidatat aute ad. Consequat velit magna qui proident eiusmod exercitation sunt elit nostrud amet tempor excepteur. Minim ex Lorem incididunt occaecat ea ad nostrud non. Occaecat non id esse pariatur anim fugiat. Reprehenderit est amet aute qui occaecat nostrud ea quis ad aute aute esse.");

    const navigate = useNavigate();

    const tab1clicked = () =>{
        updateimg(img1)
        updatetitle("Lorem Ipsum")
        updatemsg("Dolore qui aliqua ex qui est quis anim culpa. Commodo eu cupidatat aute ad. Consequat velit magna qui proident eiusmod exercitation sunt elit nostrud amet tempor excepteur. Minim ex Lorem incididunt occaecat ea ad nostrud non. Occaecat non id esse pariatur anim fugiat. Reprehenderit est amet aute qui occaecat nostrud ea quis ad aute aute esse.")
    }
    const tab2clicked = () =>{
        updateimg(img2)
        updatetitle("Morbi arco Libro")
        updatemsg("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit")
        
    }
    const tab3clicked = () =>{
        updateimg(img3)
        updatetitle("Ut hendrit estro")
        updatemsg("Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit")

    }

    const gotomodule = () =>{
        navigate('/modules')
    }

    const opensearchpage = () =>{
        navigate('/search')
    }

  return (
    <>
        <div className='heading_module'>
            <div className='heading_module_left'>Module3</div>
            <div className='heading_module_right'>
                <i class="fa-solid fa-magnifying-glass" onClick={opensearchpage}></i>
                <i class="fa-solid fa-house" onClick={gotomodule}></i>
            </div>
        </div>
        <div className='maincontent_module'>
            <div className='maincontent_module_tabs'>
                <button onClick={tab1clicked}>Tab 1</button>
                <button onClick={tab2clicked}>Tab 2</button>
                <button onClick={tab3clicked}>Tab 3</button>
            </div>
            <div className='maincontent_module_info'>
                <div >
                    <img src={img} alt="" className='maincontent_module_info_img' />
                </div>
                <div>
                    <h4 className='maincontent_module_info_h4'> {title} </h4>
                    <p className='maincontent_module_info_p'>{mgs}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Module1