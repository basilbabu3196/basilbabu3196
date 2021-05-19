import axios from 'axios'
const baseUrl="http://localhost:8000"
import bankservice from './services/bank.services'
const login =(data)=>{
return axios.post(baseUrl+"/login".data,{
withCredentials:true

})
}
const login =(data)=>{
    return axios.post(baseUrl+"/login".data,{
    withCredentials:true
    
    })
    }
 const register =(data)=>{
        return axios.post(baseUrl+"/login".data,{
        withCredentials:true
        
        })
        }
 const deposite =(data)=>{
            return axios.post(baseUrl+"/login".data,{
            withCredentials:true
            
            })
            }
 const withdraw =(data)=>{
                return axios.post(baseUrl+"/login".data,{
                withCredentials:true
                
                })
 }
export default{
    login,
    register,
    deposite,
    withdraw
} 