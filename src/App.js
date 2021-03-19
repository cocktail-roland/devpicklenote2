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

const App=()=> {
  const [isClicked1, setIsClicked1]=useState(false);
  const [isClicked2, setIsClicked2]=useState(false);
  const [isBlurred,setIsBlurred]=useState(false);
  useEffect(() => {
    AOS.init({
      duration : 2000,
      easing: 'ease-in-out'
    });
  }, []);

  const handleClick = (e)=>{
    console.log(e.target.className);
    if(e.target.className.includes("open-btn")){
    setIsClicked1(true);
    }
    else if(e.target.className.includes("confirm-btn")){
      setIsClicked2(true);
      setIsBlurred(true);
      }
    if(!(e.target.className.includes('pop-up')||e.target.className.includes('open-btn')||e.target.className.includes("confirm-btn"))){
      setIsClicked2(false);
      setIsBlurred(false);
    }
  }

  return (
    <div className={isBlurred ? "blur" :"app"} onClick={handleClick}>
      <div className="header navy">
        <span className="bold">P2P</span>투자를 기록하는 가계부, 피클노트
      </div>
      <div className="block1">
        <img className="main-image" data-aos="fade-down" src={MainImage} alt="main" />
        <div className="main-text">
          <div className="main-text-div1">
            <span className="navy">
            투자는
            <span className="bold"> 지출,</span>
            <span>&nbsp;이자는</span>
            <span className="bold"> 수입</span>
            </span>
          </div>
          <div className="main-text-div2">
            <span className="text-explain">투자내역을 기록해 가계부로 정리해보세요.</span>
          </div>
        </div>
        <div className="main-text-description">
          <span>
            다수의&nbsp;
            <span className="bold navy">P2P</span>
            플랫폼에 투자하면서 꼭 필요했던,<br></br>
            투자중인 곳의 손해와 이익을 한 눈에 관리할 수 있는<br></br>
            나만의 투자 가계부를 가장 먼저 만나보세요.
          </span>
          <div className="main-under-yellow-bar"></div>
          <div className="main-mouse">
            <div className="main-mouse-dot"></div>
          </div>
        </div>
      </div>
      {/* <div className="block2">
        <div className="pic-container">
          <img className="pic-book" alt="" width="420px" height="247px" src="https://www.fint.co.kr/static/imgs/f-2-i2.png" data-aos-easing='ease' data-aos-delay="300" data-aos="fade-up"></img>
          <img className="pic-phone" alt="" width="220px" height="450px" src="https://www.fint.co.kr/static/imgs/f-2-i1.png" data-aos="fade-zoom-in"></img>
          <img className="pic-pig" alt="" width="220px" height="303px" src="https://www.fint.co.kr/static/imgs/f-2-i-inner.png" data-aos-delay="500" data-aos="zoom-in"></img>
          <div className="pic-txt" data-aos="fade-up"><span>소액으로도<br></br> 쉽고 간편하게<br></br> 글로벌 분산투자</span></div>
          <div className="pic-txt2" data-aos="fade-up"><span>투자의 경험이 없는 사람도 최저 금액<br></br>20만원으로 가볍게 국내외 다양한 ETF에<br></br>투자할 수 있습니다</span></div>
        </div>
      </div> */}
      <div className="block3">
        <div className="pickle-image-container1">
            <img className="pickle-image-container1-pic-back" alt="" width="396px" height="660px"  src={PickleBack1} data-aos="fade-up" data-aos-delay="300"></img>
            <img className="pickle-image-container1-pic-front1" alt="" width="560px" height="106px" src={PickleFront1} data-aos-easing="ease-in-out-back" data-aos-delay="600" data-aos="zoom-in"></img>
            <img className="pickle-image-container1-pic-front2" alt="" width="432px" height="290px" src={PickleFront2} data-aos-easing="ease-in-out-back" data-aos-delay="900" data-aos="zoom-in"></img>
            <div className="pickle-image-container1-text-div" data-aos="fade-left">
              <div className="pickle-image-container1-under-green-bar1"></div>
              <span className="pickle-image-container1-pickle-sub-title navy">Pickle 01</span><br></br>
              <span className="pickle-image-container1-pickle-big-text">흩어진 <span className="bold montserrat-big">P2P</span>내역을 모아담다.</span><br></br>
              <span className="pickle-image-container1-pickle1-subtext">다수의 플랫폼에 분산투자되어 보기 어려웠던<br></br>
              내역들을 피클로 한번에 정리해서 보세요!</span>
            </div>
        </div>
      </div>
      <div className="block4">
        <div className="pickle-image-container2">
          <img className="pickle-image-container2-pic-back" alt="" width="396px" height="660px" src={Pickle2Back} data-aos="fade-up" data-aos-delay="300"></img>
          <img className="pickle-image-container2-pic-front1" alt="" width="432px" height="290px" src={Pickle2Front} data-aos-easing="ease-in-out-back" data-aos-delay="600" data-aos="zoom-in"></img>
          <div className="pickle-image-container2-text-div" data-aos="fade-right">
            <div className="pickle-image-container2-under-green-bar2"></div>
            <span className="pickle-image-container2-pickle-sub-title navy">Pickle 02</span><br></br>
            <span className="pickle-image-container2-pickle-big-text">투자도 <span className="bold">지출</span>이죠,</span><br></br>
            <span className="pickle-image-container2-pickle1-subtext">내가 투자한 내역을 기록하면 돈의 흐름을 놓치지 않고<br></br>
            빠짐 없이 가계부를 정리할 수 있어요.</span>
          </div>
        </div>
      </div>
      <div className="block5">
        <div className="pickle-image-container3">
            <img className="pickle-image-container3-pic-back" alt="" width="396px" height="660px" src={Pickle3Back} data-aos="fade-up" data-aos-delay="300"></img>
            <img className="pickle-image-container3-pic-front" alt="" width="432px" height="236px" src={Pickle3Front} data-aos-easing="ease-in-out-back" data-aos-delay="600"data-aos="zoom-in"></img>
            <div className="pickle-image-container3-text-div" data-aos="fade-left">
              <div className="pickle-image-container3-under-green-bar"></div>
              <span className="pickle-image-container3-pickle-sub-title navy">Pickle 03</span><br></br>
              <span className="pickle-image-container3-pickle-big-text">이자는 <span className="bold">수입</span>입니다.</span><br></br>
              <span className="pickle-image-container3-pickle1-subtext">여기저기 흩어져 있던 상환금들을 월별로 모아보고<br></br>
              들어올 수입을 놓치지 마세요.</span>
            </div>
        </div>
      </div>
      <div className="block6">
        <img className="logo" width="384px" height="312px" src={Logo} alt="logo" />
        <div className="logo-text">
          <span className="short-description navy"><span className="montserrat-medium-big bold">P2P</span>투자를 기록하는 가계부,<span className="bold"> 피클노트</span>
          </span>
        </div>
        <Link to="/#info-input" style={{ textDecoration: 'none' }}><div onClick={handleClick} className="open-btn">서비스 오픈 알림받기</div></Link>
      </div>
      <div id="info-input" className={isClicked1 ? "block7" : "display-none"}>
        <div className="block7-text-div">
          <span className="block7-text">
            <span>피클노트는 조금 더 편리하고</span><br></br>
            <span>꼭 필요한 서비스가 되기 위해 준비하고 있습니다.</span><br></br>
            <span>자주 사용하는 <span className="bold montserrat-medium">P2P</span>플랫폼을 알려주세요!</span>
          </span>
        </div>
        <form className="block7-form">
          <label className="block7-label">
          <div>&nbsp;전화번호</div>    
          <input className="block7-input" type="text" name="phone" placeholder="010-0000-0000"></input>
          </label>
          <label className="block7-label">
          <span><span className="top-dot">·</span> 사용하는 <span className="bold montserrat-small">P2P</span>플랫폼</span>
          <input className="block7-input" type="text" name="phone" placeholder="ex. 투게더펀딩, 피플펀드 ···"></input>
          </label>
          <label className="block7-label">
          <span><span className="top-dot">·</span> 투자건수 및 투자금액</span>
          <input className="block7-input" type="text" name="phone" placeholder="ex. 14건 or 800만원"></input>
          </label>
        </form>
        <button onClick={handleClick} className="block7-confirm-btn">서비스 오픈 알림받기</button>
        <div className="block7-service-notice">
          <span>전화번호를 남겨주시면 서비스 오픈시 SMS로 다운로드 링크를 보내드립니다.</span><br></br>
          <span>전화번호 없이 사용하는 P2P플랫폼과 투자건수 및 투자금액만 보내주시면</span><br></br>
          <span>서비스 준비에 참고하도록 하겠습니다.</span>
        </div>
        <div className={isClicked2 ? "pop-up" : "display-none"}>
          <img className="cucumber" alt="" width="96px" height="96px" src={PickleModal} data-aos="zoom-in"></img>
          <div className="thanks-text">
            <span>소중한 정보 제공에 감사드립니다.</span><br></br>
            <span>좋은 서비스로 찾아오겠습니다.</span></div>
            <button className="fighting-btn">화이팅 :)</button>
        </div> 
      </div>
      <div className="block8">
        <div>궁금한 점은 메일로 문의 주세요!</div>
        <div>contact.picklenote@gmail.com</div>
      </div>
    </div>
  );
}

export default App;