import { useEffect } from "react";
import { useState } from "react";
import { fetchData } from "../services/api";

const Userlist = ()=>{
     const [user,setUser] = useState([]);
     const [loading,setLoading] = useState(true)

     const fetchUserData = async ()=>{
           try{
                const res = await fetchData();
                console.log("user fetches",res)
                if(res){
                     setLoading(false)
                     setUser(res.data) 
                }
           }catch(err){
              console.log('error happen in the',err.message)
           }
     };
     useEffect(()=>{
          fetchUserData();
     },[])
     return(
        <>
            <div>
                 <div className="flex flex-col mx-auto my-2 w-4/5 justify-center items-center bg-sky-50">
                       {
                         loading ? (
                                
                              <p className="text-center font-bold">loading....</p>
                         ):(
                              !loading && user.length>0 ? (
                                 <>
                                     {
                                        user.map((list)=>(
                                              <div key={list.id} className="w-full p-4 border-b-2 my-2 border-amber-500 bg-slate-600 hover:bg-slate-600 hover:transition-all rounded-3xl flex flex-row items-center  justify-between gap-5">
                                                  <div className="bg-white w-12 h-12 p-4 items-center justify-center flex rounded-full shadow-2xl">
                                                        <span className="text-center text-black font-bold">{list.username.slice(0,1)}</span>
                                                  </div>
                                                  <h1 className="text-3xl font-medium text-white">{list.username}</h1>
                                                  <p className="text-emerald-300 font-extralight text-md">{list.email}</p>
                                                  <p className="text-white font-medium">{list.address.city}</p>
                                                  <p className="text-blue-400 underline cursor-pointer font-medium">{list.address.zipcode}</p>

                                              </div>
                                        ))
                                     }
                                 </>
                              ):(
                                   <p>not user data found...</p>
                              )
                         )
                       }       
                 </div>  
            </div>
        </>
     )
};

export default Userlist;