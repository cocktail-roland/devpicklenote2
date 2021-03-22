import './App.scss';
import React, {useEffect, useState, useRef} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import AOS from 'aos';
import MainImage from './img/picklenote_main.png';
import Logo from './img/pickle_logo.png';
import PickleFront1 from './img/pickle01_front1.png';
import PickleBack1 from './img/pickle01_back.png';
import PickleFront2  from './img/pickle01_front2.png';
import Pickle2Front  from './img/pickle02_front.png';
import Pickle2Back  from './img/pickle02_back.png';
import Pickle3Front  from './img/pickle03_front.png';
import Pickle3Back  from './img/pickle03_back.png';
import PickleModal  from './img/pickle_modal.png';
import { dbService } from "./fbase";
import moment from "moment";

const App=()=> {
  const [isClicked1, setIsClicked1]=useState(false);
  const [isClicked2, setIsClicked2]=useState(false);
  const [isBlurred,setIsBlurred]=useState(false);
  const [phoneNumber,setPhoneNumber]=useState("");
  const [investmentPlatform,setInvestmentPlatform]=useState("");
  const [investAmount,setInvestAmount]=useState("");

  useEffect(() => {
    AOS.init({
      duration : 2000,
      easing: 'ease-in-out'
    });
  }, []);

  const handleClick = (e)=>{
    // console.log(e.target.className);
    if(e.target.className.includes("app__block5__open-btn")){
    setIsClicked1(true);
    }
    if(!(e.target.className.includes('app__block6__pop-up')||e.target.className.includes('app__block6__pop-up__thanks-text')
    ||e.target.className.includes('app__block6__form__confirm-btn')||e.target.className.includes('app__block6__pop-up__cucumber'))){
      setIsClicked2(false);
      setIsBlurred(false);
    }
    if(e.target.className==="app__block6__pop-up__fighting-btn"){
      setIsClicked2(false);
      setIsBlurred(false);
    }
    console.log(e.target.className);
  }

  const handleChange =(e)=>{
    if(e.target.name==="phoneNumber"){
     setPhoneNumber(e.target.value);
    }else if (e.target.name==="investmentPlatform"){
      setInvestmentPlatform(e.target.value);
    }else if (e.target.name==="investAmount"){
      setInvestAmount(e.target.value);
    }
  }

  const handleSubmit=async (e)=>{
    e.preventDefault();
    await dbService.collection("userInfo").add({
      phoneNumber,
      investmentPlatform,
      investAmount,
      createdAt: moment(Date.now()).format('YYYY-MM-DD, h:mm:ss a'),
    });
    setIsClicked2(true);
    setIsBlurred(true);
  }

  return (
    <>
    <div className={isBlurred ? "app--blurred" :"app"} onClick={handleClick}>
      <div className="app__black-layer"></div>
      <div className="app__header navy">
        <span className="bold">P2P</span>투자를 기록하는 가계부, 피클노트
      </div>
      <div className="app__block1">
        <img className="app__block1__main-image" data-aos="fade-down" src={MainImage} alt="main" />
        <div className="app__block1__main-text">
          <div className="app__block1__main-text__div1">
            <span className="navy">
            투자는
            <span className="bold"> 지출,</span>
            <span>&nbsp;이자는</span>
            <span className="bold"> 수입</span>
            </span>
          </div>
          <div className="app__block1__main-text__div2">
            <span className="app__block1__main-text__div2__text-explanation">투자내역을 기록해 가계부로 정리해보세요.</span>
          </div>
        </div>
        <div className="app__block1__main-text-description">
          <span>
            다수의&nbsp;
            <span className="bold navy">P2P</span>
            플랫폼에 투자하면서 꼭 필요했던,<br></br>
            투자중인 곳의 손해와 이익을 한 눈에 관리할 수 있는<br></br>
            나만의 투자 가계부를 가장 먼저 만나보세요.
          </span>
          <div className="app__block1__main-text-description__under-yellow-bar"></div>
          <div className="app__block1__main-text-description__main-mouse">
            <div className="app__block1__main-text-description__main-mouse__dot"></div>
          </div>
        </div>
      </div>
      <div className="app__block2">
        <div className="app__block2__pickle-image-container1">
            <img className="app__block2__pickle-image-container1__pic-back" alt="" src={PickleBack1} data-aos="fade-up" data-aos-delay="300"></img>
            <img className="app__block2__pickle-image-container1__pic-front1" alt="" src={PickleFront1} data-aos-easing="ease-in-out-back" data-aos-delay="600" data-aos="zoom-in"></img>
            <img className="app__block2__pickle-image-container1__pic-front2" alt=""  src={PickleFront2} data-aos-easing="ease-in-out-back" data-aos-delay="900" data-aos="zoom-in"></img>
            <div className="app__block2__pickle-image-container1__text-div" data-aos="fade-left">
              <div className="app__block2__pickle-image-container1__text-div__under-green-bar1"></div>
              <span className="app__block2__pickle-image-container1__text-div__pickle-sub-title navy">Pickle 01</span><br></br>
              <span className="app__block2__pickle-image-container1__text-div__pickle-big-text">흩어진 <span className="bold montserrat-big">P2P</span>내역을 모아담다.</span><br></br>
              <span className="app__block2__pickle-image-container1__text-div__pickle1-subtext">다수의 플랫폼에 분산투자되어 보기 어려웠던<br></br>
              내역들을 피클로 한번에 정리해서 보세요!</span>
            </div>
        </div>
      </div>
      <div className="app__block3">
        <div className="app__block3__pickle-image-container2">
          <img className="app__block3__pickle-image-container2__pic-back" alt="" src={Pickle2Back} data-aos="fade-up" data-aos-delay="300"></img>
          <img className="app__block3__pickle-image-container2__pic-front1" alt="" src={Pickle2Front} data-aos-easing="ease-in-out-back" data-aos-delay="600" data-aos="zoom-in"></img>
          <div className="app__block3__pickle-image-container2__text-div" data-aos="fade-right">
            <div className="app__block3__pickle-image-container2__text-div__under-green-bar2"></div>
            <span className="app__block3__pickle-image-container2__text-div__pickle-sub-title navy">Pickle 02</span><br></br>
            <span className="app__block3__pickle-image-container2__text-div__pickle-big-text">투자도 <span className="bold">지출</span>이죠,</span><br></br>
            <span className="app__block3__pickle-image-container2__text-div__pickle1-subtext">내가 투자한 내역을 기록하면 돈의 흐름을 놓치지 않고<br></br>
            빠짐 없이 가계부를 정리할 수 있어요.</span>
          </div>
        </div>
      </div>
      <div className="app__block4">
        <div className="app__block4__pickle-image-container3">
            <img className="app__block4__pickle-image-container3__pic-back" alt="" src={Pickle3Back} data-aos="fade-up" data-aos-delay="300"></img>
            <img className="app__block4__pickle-image-container3__pic-front" alt="" src={Pickle3Front} data-aos-easing="ease-in-out-back" data-aos-delay="600"data-aos="zoom-in"></img>
            <div className="app__block4__pickle-image-container3__text-div" data-aos="fade-left">
              <div className="app__block4__pickle-image-container3__text-div__under-green-bar"></div>
              <span className="app__block4__pickle-image-container3__text-div__pickle-sub-title navy">Pickle 03</span><br></br>
              <span className="app__block4__pickle-image-container3__text-div__pickle-big-text">이자는 <span className="bold">수입</span>입니다.</span><br></br>
              <span className="app__block4__pickle-image-container3__text-div__pickle1-subtext">여기저기 흩어져 있던 상환금들을 월별로 모아보고<br></br>
              들어올 수입을 놓치지 마세요.</span>
            </div>
        </div>
      </div>
      <div className="app__block5">
        <img className="app__block5__logo" src={Logo} alt="logo" />
        <div className="app__block5__logo-text">
          <span className="app__block5__logo-text__short-description navy"><span className="montserrat-medium-big bold">P2P</span>투자를 기록하는 가계부,<span className="bold"> 피클노트</span>
          </span>
        </div>
        <Link to="/#info-input" style={{ textDecoration: 'none' }}><div onClick={handleClick} className="app__block5__open-btn">서비스 오픈 알림받기</div></Link>
      </div>
      <div id="info-input" className={isClicked1 ? "app__block6" : "app__block6--visibility-hidden"}>
        <div className="app__block6__text-div">
          <span className="app__block6__text-div__text">
            <span>피클노트는 조금 더 편리하고</span><br></br>
            <span>꼭 필요한 서비스가 되기 위해 준비하고 있습니다.</span><br></br>
            <span>자주 사용하는 <span className="bold montserrat-medium">P2P</span>플랫폼을 알려주세요!</span>
          </span>
        </div>
        <form className="app__block6__form" onSubmit={handleSubmit}>
          <label className="app__block6__form__label">
          <div>&nbsp;전화번호</div>    
          <input className="app__block6__form__label__input" type="text" name="phoneNumber" value={phoneNumber} onChange={handleChange} placeholder="010-0000-0000"></input>
          </label>
          <label className="app__block6__form__label">
          <span><span className="top-dot">·</span> 사용하는 <span className="bold montserrat-small">P2P</span>플랫폼</span>
          <input className="app__block6__form__label__input" required type="text" name="investmentPlatform" value={investmentPlatform} onChange={handleChange} placeholder="ex. 투게더펀딩, 피플펀드 ···"></input>
          </label>
          <label className="app__block6__form__label">
          <span><span className="top-dot">·</span> 투자건수 및 투자금액</span>
          <input className="app__block6__form__label__input" required type="text" name="investAmount" value={investAmount} onChange={handleChange} placeholder="ex. 14건 or 800만원"></input>
          </label>
          <input type="submit"  className="app__block6__form__confirm-btn" value="서비스 오픈 알림받기"></input>
        </form>
        <div className="app__block6__service-notice">
          <span>전화번호를 남겨주시면 서비스 오픈시 SMS로 다운로드 링크를 보내드립니다.</span><br></br>
          <span>전화번호 없이 사용하는 P2P플랫폼과 투자건수 및 투자금액만 보내주시면</span><br></br>
          <span>서비스 준비에 참고하도록 하겠습니다.</span>
        </div>
        <div className={isClicked2 ? "app__block6__pop-up" : "app__block6--visibility-hidden"}>
          <img className="app__block6__pop-up__cucumber" alt="" width="96px" height="96px" src={PickleModal} data-aos="zoom-in"></img>
          <div className="app__block6__pop-up__thanks-text">
            소중한 정보 제공에 감사드립니다.<br></br>
            좋은 서비스로 찾아오겠습니다.
          </div>
          <button className="app__block6__pop-up__fighting-btn">화이팅 :)</button>
        </div> 
      </div>
      <div className="app__block7">
        <div>궁금한 점은 메일로 문의 주세요!</div>
        <div>contact.picklenote@gmail.com</div>
      </div>
    </div>
    {/* <div className="preparing-for-mobile">
        <div>
          <div className="preparing-for-mobile__logo-container"><img className="preparing-for-mobile__logo" src={Logo} alt="logo" /></div>
          <div className="bold">모바일 버전은 제작중입니다.</div>
        </div>
    </div> */}
    </>
  );
}

export default App;