import {ref} from 'vue'
import {defineStore} from 'pinia'
import { appGet, appPost } from '@/utils/axios'

interface FormValues {
  image_file?: File;
  image_url?: string
}
export const useCounterStore = defineStore('counter', () => {

    const counterData = ref<CounterRes>()
    const currentStep = ref<number>(1)
    const formValues = ref<FormValues>({});
    const countCell = (feedBack:(val?:string,err?:string)=>void,body:any) => appPost( {
      url:`count-cell`,
      body
    }
    ).then(({ data }: { data: CounterRes }) => {
      if (data.status) {
        counterData.value = data;
        console.log("message")
        feedBack(data.message,undefined)
      } 
    }).catch((e: any) => {
      console.log("e")
      const message = (e.response.data as CounterRes )?.message??`${e}`;
      console.log(message)
      feedBack(undefined,message??e)
    });

    return {
        counterData,
        countCell,
        currentStep, formValues
    }
})


export const useUtilStore = defineStore('counter', () => {

    const counterData = ref<CounterRes>()
    const sendFeed = (feedBack:(val?:string,err?:string)=>void)=> appGet( `count-cell`
    ).then(({ data }: { data: CounterRes }) => {
      if (data.status) {
        counterData.value = data;
        console.log("message")
        feedBack(data.message,undefined)
      } 
    }).catch((e: any) => {
      console.log("e")
      const message = (e.response.data as CounterRes )?.message??`${e}`;
      console.log(message)
      feedBack(undefined,message??e)
    });

    return {
        counterData,
       
    }
})




export interface CounterRes {
    status:  boolean;
    message: string;
    data:    CounterData;
}

export interface CounterData {
    count:   number;
    output1: string;
    output2: string;
}

