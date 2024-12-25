import {  useMutation,  } from "@tanstack/react-query";
import { toast } from "sonner";

import { addFollowing, removeFollowing } from "@/services/FollowService";


export const useAddFollow =()=>{
  

    return useMutation<any,Error,string>({
        mutationKey: ['user'],
        mutationFn: async (followId:string)=> await addFollowing(followId),
        onSuccess:(res)=>{
                     
            toast.success(res.message);
         
        },
        onError:(error)=>{
            toast.error(error.message)
        }
    })
};

export const useUnFollow =()=>{
  
    
    return useMutation<any,Error,string>({
        mutationKey: ['user'],
        mutationFn: async (followId:string)=> await removeFollowing(followId),
        onSuccess:(res)=>{
                     
            toast.success(res.message);
   
        },
        onError:(error)=>{
            toast.error(error.message)
        }
    })
};