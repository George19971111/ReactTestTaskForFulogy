import React,{Component} from 'react';
import Erorin from '../erorind';

class Erorb extends Component{
    constructor(props){
        super(props)
        this.state={
            hasError:false
        }
    }
    componentDidCatch(){
        this.setState({
            hasError:true
        })
    }
    render(){
        if(this.state.hasError){
            return <Erorin/>
        }
       return  this.props.children
    }
}
export default Erorb;