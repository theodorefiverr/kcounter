import axios from "axios";
import Cookies from "js-cookie";


export const currentHost = window.location.protocol + '//' + window.location.host + '/'

export const baseUrl = "https://ki67.app/"
// const baseUrl = "http://localhost:4001/api/v1/"
export const appPost = ({body,url}:{body:any,url:string})=>axios.post(baseUrl+url,body,{
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  })

  export const appPostRaw = ({body,url}:{body:any,url:string})=>axios.post(url,body)

  export const appGet = (url:string)=> axios.get(baseUrl+url,{
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  })

  export const appDelete = (url:string)=>axios.delete(baseUrl+url,{
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  })


  export const formattedDate = (dateString:string) => new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  }).format(new Date(dateString));

  export const validateEmail= (input:string) =>{
      const validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (input.match(validRegex)) {
        return true;
      }
      return false;
    }

export function formatNaira(number:number) {
    const formattedNumber = number.toLocaleString('en-NG', {
        style: 'currency',
        currency: 'NGN',
    });

    return formattedNumber;
}