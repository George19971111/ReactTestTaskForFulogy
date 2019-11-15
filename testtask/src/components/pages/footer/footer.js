import React,{Component} from 'react';
import './footer.scss';
import {Link} from 'react-router-dom';
import ArrowR from './img/icons/arrowRight.png';
import ArrowL from './img/icons/arrowLeft.png';
import Burgetfooter from './img/icons/menu.png'
class Footer extends Component{
    componentDidMount(){
        document.getElementById('defaultpage').click()
    }
    customfooterlink(e){
        let linkcontainersred = document.querySelectorAll('.navigation_footer_linker_reddiv')
        let linkcontainers = document.querySelectorAll('.navigation_footer_linker_bluediv')
        for(let i =0 ; i<linkcontainers.length; i++){
            linkcontainers[i].style.background ='#F8F8F8'
           linkcontainers[i].querySelector('a').style.color = '#1A1A1A'
        }
        for(let i =0; i<linkcontainersred.length; i++){
            linkcontainersred[i].style.background ='#F8F8F8'
            linkcontainersred[i].querySelector('a').style.color = '#1A1A1A'
        }
        e.target.style.color = '#fff'
        e.target.parentNode.style.background = '#05B3FB'
    }
    customfooterlinkrd(e){
        let linkcontainersred = document.querySelectorAll('.navigation_footer_linker_reddiv')
        let linkcontainers = document.querySelectorAll('.navigation_footer_linker_bluediv')
        for(let i =0 ; i<linkcontainers.length; i++){
            linkcontainers[i].style.background ='#F8F8F8'
           linkcontainers[i].querySelector('a').style.color = '#1A1A1A'
        }
        for(let i =0; i<linkcontainersred.length; i++){
            linkcontainersred[i].style.background ='#F8F8F8'
            linkcontainersred[i].querySelector('a').style.color = '#1A1A1A'
        }
        e.target.style.color = '#fff'
        e.target.parentNode.style.background = '#FF8183'
    }
    slideleftfootermeny(e){
      let allmenuitems = document.querySelectorAll('.menuitmm a')
      if(e.target.tagName === 'IMG' ) {
        for(let i =0; i<allmenuitems.length; i++){
            if(allmenuitems[i].innerHTML === document.querySelector('.mobilenavigationmenu__content_middle').querySelector('.visible a').innerHTML ){
                
                if(allmenuitems[i-1] !== undefined){
                    allmenuitems[i-1].parentNode.classList.remove('hidenelementmobilemenu')
                    allmenuitems[i-1].parentNode.classList.add('visible')
                    allmenuitems[i-1].click()
                     allmenuitems[i].parentNode.classList.remove('visible')
                     allmenuitems[i].parentNode.classList.add('hidenelementmobilemenu')

                }
            }
        }
      }
    }
    sliderightfootermeny(e){
        let allmenuitems = document.querySelectorAll('.menuitmm a')
 
        if(e.target.tagName === 'IMG' ) {
          for(let i =0; i<allmenuitems.length; i++){
            if(allmenuitems[i+1] !== undefined){
              if(allmenuitems[i].innerHTML === document.querySelector('.mobilenavigationmenu__content_middle').querySelector('.visible a').innerHTML ){
                allmenuitems[i].parentNode.classList.remove('visible')
              allmenuitems[i+1].parentNode.classList.remove('hidenelementmobilemenu')
              allmenuitems[i+1].parentNode.classList.add('visible')
              allmenuitems[i+1].click()
              allmenuitems[i].parentNode.classList.add('hidenelementmobilemenu')
             return 0
              }
              }
          }
        }
    }
    render(){
        return(
            <React.Fragment>
                <footer className="container_footer">
                    <nav className="navigation_footer container_footer__navigation_footer">
                  <div className="navigation_footer_linker_bluediv">  <Link to='' onClick={(e)=>{this.customfooterlink(e)}}>
                            Вариант кухни
                            </Link></div>
                       <div  className="navigation_footer_linker_bluediv"> <Link to='' onClick={(e)=>{this.customfooterlink(e)}}>
                            Размеры
                            </Link></div>
                      <div  className="navigation_footer_linker_bluediv">  <Link to='' onClick={(e)=>{this.customfooterlink(e)}}>
                            Сенсор
                            </Link>
                        </div>
                        <div  className="navigation_footer_linker_bluediv">  <Link to='' onClick={(e)=>{this.customfooterlink(e)}}>
                        Питающий кабель
                            </Link>
                        </div>
                       <div  className="navigation_footer_linker_bluediv"> <Link to='' onClick={(e)=>{this.customfooterlink(e)}}>
                            Блок питания  
                            </Link>
                        </div>
                      <div  className="navigation_footer_linker_bluediv">  <Link id='defaultpage' to='cvet_svecheniya' onClick={(e)=>{this.customfooterlink(e)}}>
                          Цвет свечения
                          </Link>
                        </div>
                       <div  className="navigation_footer_linker_reddiv"> <Link to='' onClick={(e)=>{this.customfooterlinkrd(e)}}>
                            Монтаж</Link>
                        </div>
                        <div  className="navigation_footer_linker_reddiv"><Link to='' onClick={(e)=>{this.customfooterlinkrd(e)}}>
                           Корзина
                           </Link>
                        </div>
                    </nav>

                    <nav className="mobilenavigationmenu">
                        <p className='mobilenavigationmenu_heading'>Выберите цвет свечения</p>

                        <div className='mobilenavigationmenu__content'>
                    
                          <div className="mobilenavigationmenu__content_left" onClick={(e)=>{this.slideleftfootermeny(e)}}>
                          <img src={ArrowL} alt=""/>
                          </div>
                          <div className="mobilenavigationmenu__content_middle">
                              <img width="20" height="20" src={Burgetfooter} alt=""/>
                          <div className="menuitmm hidenelementmobilemenu">  <Link to=''>
                            Вариант кухни
                            </Link></div>
                       <div  className="menuitmm hidenelementmobilemenu"> <Link to=''>
                            Размеры
                            </Link></div>
                      <div className="menuitmm hidenelementmobilemenu" >  <Link to='' >
                            Сенсор
                            </Link>
                        </div>
                        <div className="menuitmm hidenelementmobilemenu" >  <Link to=''>
                        Питающий кабель
                            </Link>
                        </div>
                       <div  className="menuitmm hidenelementmobilemenu"> <Link to='' >
                            Блок питания  
                            </Link>
                        </div>
                      <div className="menuitmm visible"><Link id='defaultpage' to='cvet_svecheniya' >
                          Цвет свечения
                          </Link>
                        </div>
                       <div className="menuitmm hidenelementmobilemenu"> <Link to=''>
                            Монтаж</Link>
                        </div>
                        <div className="menuitmm hidenelementmobilemenu"><Link to=''>
                           Корзина
                           </Link>
                        </div>
                          </div>
                          <div className="mobilenavigationmenu__content_right" onClick={(e)=>{this.sliderightfootermeny(e)}}>
                              <img src={ArrowR} alt=""/>
                          </div>
                        </div>
                    </nav>
                </footer>
            </React.Fragment>
        )
    }
}
export default Footer;