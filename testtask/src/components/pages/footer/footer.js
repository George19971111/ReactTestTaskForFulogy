import React,{Component} from 'react';
import './footer.scss';
import {Link} from 'react-router-dom'
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
                </footer>
            </React.Fragment>
        )
    }
}
export default Footer;