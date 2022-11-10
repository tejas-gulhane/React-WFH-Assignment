import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Searchpage.css";
import {dummydata} from '../../dummydata/dummydata'


const Searchpage = () => {
  const navigate = useNavigate();
  const inputref = useRef();
  
  const gotomodule = () => {
    navigate("/modules");
  };

  console.log(dummydata);
  const [module , updatemodule] = useState([])

  const searchmodules = () => {
    let inputnane = inputref.current.value;
     let fdata = dummydata.filter((post) => {
        if (post.title.includes(inputnane)) {
          return post;
        }
      })
      updatemodule(fdata)
    console.log(module);
  };

  const checkenterkey = (e) => {
    e.preventDefault();
    console.log(e);
    searchmodules();
  };

  const gotomodules = () =>{
    navigate('/modules')
  }
  return (
    <>
      <div className="base-four">
        <div className="container-fluid">
          <div className="row">
            <div className="searchHead">
              <div className="topHeadMenu">
                <div className="topHeadLeft">
                  <h1>Type here to search</h1>
                </div>
                <div className="topHeadRight">
                  <i className="fa-solid fa-house" onClick={gotomodules}></i>
                </div>
              </div>
              <div className="input-group">
                <form onSubmit={checkenterkey}>
                  <input
                    type="text"
                    id="searchModule"
                    name="searchModule"
                    placeholder="type text and press enter..."
                    className="searchInput form-control"
                    ref={inputref}
                  />
                </form>
              </div>
            </div>
            <div className="results">
              {
                  module.length ?  module.map((post,index)=>{
                    return (
                      <div class="" id={index}>
                        <div class="listGroupList">
                          <div class="listGroupList_img">
                            <img src={post.img}/>
                          </div>
                          <div class="">
                            <h5 class="">{post.title}</h5>
                            <p class="">{post.desc}</p>
                          </div>
                        </div>
                      </div>
                    )
                  }) : 
                  <div className="results">
                    <h1>0 results ... </h1>
                  </div>
                 
              }
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Searchpage;
