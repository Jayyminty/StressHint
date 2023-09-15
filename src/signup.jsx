import React, { useState, useRef } from 'react';
import { Button, Navbar, NavLink } from 'reactstrap';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  return (
    <>
      <nav class="navbar" aria-label="First navbar example">
        <div class="container-fluid">
          <img src="/Image/logomain.jpg" width={150} />
    
          <ul class="nav">
            <li class="nav-item"><a href="#" class="nav-link">หน้าหลัก</a></li>
            <li class="nav-item"><a href="#" class="nav-link active" aria-current="page"> | ห้องสนทนา | </a></li>
            <li class="nav-item"><a href="#" class="nav-link">เกี่ยวกับ</a></li>
          </ul>
        </div>
      </nav>



      <div class="chat">
      <h6 class="chatroomheader">ช่องสนทนา</h6>
        <div class="devi">
            <div class="d-flex text-body-secondary pt-3">
              <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
              <p class="pb-3 mb-0 small lh-sm border-bottom">
                <strong class="d-block text-gray-dark">StressHint</strong>
                สวัสดี! มีอะไรให้ช่วยหรือเปล่า?
              </p>
            </div>
            <div class="d-flex text-body-secondary pt-3">
              <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#e83e8c"></rect><text x="50%" y="50%" fill="#e83e8c" dy=".3em">32x32</text></svg>
              <p class="pb-3 mb-0 small lh-sm border-bottom">
                <strong class="d-block text-gray-dark">User</strong>
                เย็นนี้กินอะไรดี?
              </p>
            </div>  
            <div class="d-flex text-body-secondary pt-3">
              <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
              <p class="pb-3 mb-0 small lh-sm border-bottom">
                <strong class="d-block text-gray-dark">StressHint</strong>
                <h6>เราขอแนะนำเป็นเมนูเหล่านี้! :</h6>
                <p>1. ข้าวต้ม: ข้าวต้มเป็นเลือกที่ง่ายและเบา คุณสามารถเพิ่มน้ำมันหรือเนยลงไปเพื่อเพี่มรสชาติ.</p>
                <p>2. ปลานึ่ง: ปลานึ่งเป็นการเตรียมอาหารที่สุขภาพดี และเมนูง่าย สามารถเพิ่มสมุนไพรเพื่อเพิ่มรสชาติได้.</p>
                <p>3. โจ๊ก: โจ๊กเป็นอาหารน้ำที่ละลายง่ายในทางท้อง คุณสามารถเพิ่มเนื้อหมูหรือไก่ลงไปในโจ๊ก.</p>
                <p>4. สุกี้น้ำ: สุกี้น้ำเป็นเมนูที่เลือกในการรับประทานเวลาท้องทุ่ง คุณสามารถเลือกเนื้อปลาหรือเนื้อไก่ได้.</p>
              </p>
            </div>
            <div className='Column'>
              <input type="Text" class="form-control" id="floatingInput" placeholder="..."></input>
            </div>
          </div>
      </div>
    </>
  );
};

export default App;
