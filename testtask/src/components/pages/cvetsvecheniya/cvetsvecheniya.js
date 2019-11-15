import React,{Component} from 'react';
import './cvetsvecheniya.scss';
import Firstlight from './img/firstlight.jpg';
import Slideforteplu1 from './img/slideforteplu.jpg';
import Slideforteplu2 from './img/slideforteplu2.jpg';
import Slideforteplu3 from './img/slideforteplu3.jpg';
import Dnevnou1 from './img/dnevnoy1.jpg';
import Dnevnou2 from './img/dnevnoy2.jpg';
import Dnevnou3 from './img/dnevnoy3.jpg';
import Xolodniy1 from './img/xolodniy1.jpg';
import Xolodniy2 from './img/xolodniy2.jpg';
import Xolodniy3 from './img/xolodniy3.jpg';
class Cvetsvecheniya extends Component{

    
    componentDidMount(){
        document.getElementById('autoclicker').click()
        document.getElementById('defaulterino').click()
        document.getElementById('defaulterino1').click()
        document.getElementById('defaulterino2').click()
    }
    changerimglinker(e,city){
        console.log(city)
        let allslider = document.querySelectorAll('.hideentogler')
        for(let i =0; i<allslider.length; i++){
            allslider[i].style.display = 'none'
        }
       let alldivs = document.querySelectorAll('.relativitionblock')
       for(let i = 0; i<alldivs.length; i++){
        alldivs[i].classList.remove('togglerclassser')
        alldivs[i].querySelector('.checkbox').style.display = 'none'
       }
       if(e.target.parentNode.classList.contains('relativitionblock')){
        e.target.parentNode.classList.add('togglerclassser')
        e.target.parentNode.querySelector('.checkbox').style.display = 'block'
        document.getElementById(city).style.display = 'block'
       }
     
    }
    slidertoggling(e,name){
        let allslide = document.querySelectorAll('.hideentogler_slide')
        for(let i =0; i<allslide.length; i++){
            allslide[i].style.display = 'none'
        }
        document.getElementById(name).style.display = 'block'
        let alldots = document.querySelectorAll('.slider_dots_true div')
        for(let i=0; i<alldots.length; i++){
            alldots[i].style.background = 'none'
        }
        e.target.style.backgroundColor = '#fff'
    }
    slidertogglingsk(e,name){
        let allslide = document.querySelectorAll('.hideentogler1_slide')
        for(let i =0; i<allslide.length; i++){
            allslide[i].style.display = 'none'
        }
        document.getElementById(name).style.display = 'block'
        let alldots = document.querySelectorAll('.slider_dots_true1 div')
        for(let i=0; i<alldots.length; i++){
            alldots[i].style.background = 'none'
        }
        e.target.style.backgroundColor = '#fff'
    }
    slidertogglingth(e,name){
        let allslide = document.querySelectorAll('.hideentogler2_slide')
        for(let i =0; i<allslide.length; i++){
            allslide[i].style.display = 'none'
        }
        document.getElementById(name).style.display = 'block'
        let alldots = document.querySelectorAll('.slider_dots_true2 div')
        for(let i=0; i<alldots.length; i++){
            alldots[i].style.background = 'none'
        }
        e.target.style.backgroundColor = '#fff'
    }
    infobutton(){
        this.props.history.push('/info')
    }
    render(){
        return(
            <React.Fragment>
              <main className="container_main">
                <div className="slidebarleft container_main__slidebarleft">
                    <div className="slidebarleft_first hideentogler" id="tepliu">
                        <div className="hideentogler_slide" id="first_slide">
                                <img width="900" height="500" src={Slideforteplu1} alt=""/>
                        </div>
                        <div className="hideentogler_slide" id="second_slide">
                        <img width="900" height="500" src={Slideforteplu2} alt=""/>
                        </div>
                        <div className="hideentogler_slide" id="theard_slide">
                        <img width="900" height="500" src={Slideforteplu3} alt=""/>
                        </div>
                        <div className="slider_dots_true">
                            <div id="defaulterino" onClick={(e)=>{this.slidertoggling(e,'first_slide')}}>
                            </div>
                            <div onClick={(e)=>{this.slidertoggling(e,'second_slide')}}>
                            </div>
                            <div onClick={(e)=>{this.slidertoggling(e,'theard_slide')}}>
                            </div>
                        </div>
                    </div>

                    <div  className="slidebarleft_second hideentogler" id="dnevnou">
                    <div className="hideentogler1_slide" id="sk_first_slide">
                        <img src={Dnevnou1} alt=""/>
                        </div>
                        <div className="hideentogler1_slide" id="sk_second_slide">
                        <img  src={Dnevnou2} alt=""/>
                        </div>
                        <div className="hideentogler1_slide" id="sk_theard_slide">
                        <img src={Dnevnou3} alt=""/>
                        </div>
                        <div className="slider_dots_true1">
                            <div id="defaulterino1" onClick={(e)=>{this.slidertogglingsk(e,'sk_first_slide')}}>
                            </div>
                            <div onClick={(e)=>{this.slidertogglingsk(e,'sk_second_slide')}}>
                            </div>
                            <div onClick={(e)=>{this.slidertogglingsk(e,'sk_theard_slide')}}>
                            </div>
                        </div>
                    </div>
                    <div  className="slidebarleft_thearst hideentogler" id="holodnu">
                    <div className="hideentogler2_slide" id="th_first_slide">
                        <img src={Xolodniy1} alt=""/>
                        </div>
                        <div className="hideentogler2_slide" id="th_second_slide">
                        <img src={Xolodniy2} alt=""/>
                        </div>
                        <div className="hideentogler2_slide" id="th_theard_slide">
                        <img src={Xolodniy3} alt=""/>
                        </div>
                        <div className="slider_dots_true2">
                            <div id="defaulterino2" onClick={(e)=>{this.slidertogglingth(e,'th_first_slide')}}>
                            </div>
                            <div onClick={(e)=>{this.slidertogglingth(e,'th_second_slide')}}>
                            </div>
                            <div onClick={(e)=>{this.slidertogglingth(e,'th_theard_slide')}}>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mainconfigurator container_main__mainconfigurator">
                    <div className="mainconfigurator__textcontainer">
                        <div className="mainconfigurator__textcontainer_text">
                            <div className="div_container_class">
                                <p className="text_container_for_key text_container_for_key_center">Класс:</p>
                             <div className="button_text_container_div">
                                <p className="button_text_container">Standart</p>
                                 </div> 
                            </div>
                            <div className="div_container_class">
                                <p className="text_container_for_key">Потребляемая<br/> мощность:</p>
                                <p className="text_datainformation_long">58 Вт.</p>
                            </div>
                            <div className="div_container_class">
                                <p className="text_container_for_key">Сила света:</p>
                                <p className="text_datainformation_long">3459 Люмен = 7,5 ламп<br/> накаливания по 40 Вт.</p>
                            </div>
                            <div className="div_container_class">
                                <p className="text_container_for_key">Гарантия:</p>
                                <p className="text_datainformation_long">3 года</p>
                            </div>
                            <div className="div_container_class">
                                <p className="text_container_for_key">Монтаж:</p>
                                <p className="text_datainformation_long">Да</p>
                            </div>
                            <div className="div_container_class">
                                <p className="text_container_for_key">Итого сумма:</p>
                                <p className="text_datainformation_long">2594 рублей</p>
                            </div>
                        </div>
                       
                    </div>
                   
                   <div className="mainconfigurator__informationlink">
                    <div onClick={()=>{this.infobutton()}}>
                        <p>i</p>
                    </div>
                    <p className="mainconfigurator__informationlink_text">
                      Выберите цвет свечения
                    </p>
               
                   </div>

                   <div  className="mainconfigurator__checkboxing">
                        <div className="mainconfigurator__checkboxing_content">
                            <div  className="relativitionblock" onClick={(e)=>{this.changerimglinker(e,'tepliu')}}>
                         
                               <img id="autoclicker" width="170" src={Firstlight} alt=""/>
                               <p className="textcontainer_relatives">Теплый</p>
                                <div className="checkbox">
                                    <input type="checkbox" checked id="checkbox_1" onChange={()=>{}}/>
                                    <label htmlFor="checkbox_1"></label>
                            </div>

                            </div>
                            <div className="relativitionblock" onClick={(e)=>{this.changerimglinker(e,'dnevnou')}}>
                                <img width="170" src={Firstlight} alt=""/>
                               <p className="textcontainer_relatives">Дневной</p>
                                <div className="checkbox">
                                    <input type="checkbox"  checked id="checkbox_2" onChange={()=>{}}/>
                                    <label htmlFor="checkbox_2"></label>
                            </div>
                            </div>
                            <div className="relativitionblock lasteone" onClick={(e)=>{this.changerimglinker(e,'holodnu')}}>
                                <img width="170"  src={Firstlight} alt=""/>
                                <p className="textcontainer_relatives">Холодный</p>
                                <div className="checkbox">
                                    <input type="checkbox" checked id="checkbox_3" onChange={()=>{}}/>
                                    <label htmlFor="checkbox_3"></label>
                            </div>
                            </div>
                        </div>
                   </div>
                </div>
              </main>
            </React.Fragment>
        )
    }
}
export default Cvetsvecheniya;