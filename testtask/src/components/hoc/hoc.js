import React from 'react';
import {MyConsumer} from '../context';

const Hoc = ()=> (Wrapped)=>{
    return(props)=>{
        return(
            <MyConsumer>
                {
                    (mainServices)=>{
                        return <Wrapped {...props} mainServices={mainServices}/>
                    }
                }
            </MyConsumer>
        )
    }
}
export default Hoc;