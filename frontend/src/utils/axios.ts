import axios, { type AxiosResponse } from "axios";

interface IPostReq {
    body?: any;
    url: string;
    result: (response: AxiosResponse<any, any>) => void;
    error?: (err: any) => void;
    onFinally?: () => void;
}


export const postReq = ({body,url,result,error,onFinally}: IPostReq)=>axios.post(url,body)
.then(result).catch(error).finally(onFinally)