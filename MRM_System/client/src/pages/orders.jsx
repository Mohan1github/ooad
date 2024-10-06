import React, { useEffect ,useState} from 'react'
import axios from 'axios';
import { useParams ,useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast';
import { trusted } from 'mongoose';
function Orders() {
    const navigate = useNavigate();
    const [drugdata,setDrugData] = useState({})
    const {id} = useParams();

    const [cusname ,setCuname]  = useState("");
    const [med,setMed] = useState("dolopins");
    const [quan,setQuan] = useState(1);
    const [addr,setAddr] = useState("");
    const [email,setEmail] = useState("");
    const [num,setNum] = useState(123);
    
    const getdetails = ()=>{
        axios
        .get(`${process.env.REACT_APP_API_URL}/user/get-drug/${id}`)
        .then((response) => {
          setDrugData(response.data);
        });
    }

    const handleplaceorder = async()=>{
        try{
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/makeorders/medicine`,{cusname,med,quan,addr,email,num})
            if(res.success === true){
                toast.success("Order placed successfully!");
            }
            else{
                toast.error("Something went wrong");
            }
        }
        catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        getdetails()
    },[id])
  return (
    // <div>Orders
    //     <h>{drugdata.drugname}</h>
        
    // </div>
     <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
     <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
       <div className="px-6 py-8">
         <h2 className="text-2xl font-bold text-gray-800 mb-6">Create New Order</h2>
         <form>
           {/* Customer Information */}
           <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
             <div>
               <label className="block text-sm font-medium text-gray-700">Customer Name</label>
               <input
                 type="text"
                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                 placeholder="John Doe"
                 onChange={(e)=>setCuname(e.target.value)}
               />
             </div>
             <div>
               <label className="block text-sm font-medium text-gray-700">Customer Email</label>
               <input
                 type="email"
                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                 placeholder="johndoe@example.com"
                 onChange={(e)=>setEmail(e.target.value)}
               />
             </div>
           </div>

           {/* Order Details */}
           <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
             <div>
               {/* <label className="block text-sm font-medium text-gray-700">Order Date</label>
               <input
                 type="date"
                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                 onChange={(e)=>setDate(e.target.value)}
                 defaultValue={Date.now()}
               /> */}
             </div>
             <div>
               <label className="block text-sm font-medium text-gray-700">Order Number</label>
               <input
                 type="text"
                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                 placeholder="ORD12345"
                 onChange={(e)=>setNum(e.target.value)}
               />
             </div>
           </div>

           {/* Product Information */}
           <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
             <div>
               <label className="block text-sm font-medium text-gray-700">Product Name</label>
               <input
                 type="text"
                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                 placeholder="Medical Gloves"
                 defaultValue={drugdata.drugname}
                //  onChange={(e)=>setMed(drugdata.drugname)}
                 value={drugdata.drugname}
               />
             </div>
             <div>
               <label className="block text-sm font-medium text-gray-700">Quantity</label>
               <input
                 type="number"
                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                 placeholder="100"
                 onChange={(e)=>setQuan(e.target.value)}
               />
             </div>
           </div>

           <div className="mt-6">
             <label className="block text-sm font-medium text-gray-700">Shipping Address</label>
             <textarea
               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
               placeholder="123 Main St, City, State, ZIP"
               onChange={(e)=>setAddr(e.target.value)}
             />
           </div>

           {/* Submit Button */}
           <div className="mt-8">
             <button
               type="submit"
               className="w-full bg-indigo-600 text-white font-medium py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            
            onClick={()=>handleplaceorder()}
            >
               Place Order
             </button>
           </div>
           <div className="mt-8">
             <button
               type="submit"
               className="w-full bg-indigo-600 text-white font-medium py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            
            onClick={()=>navigate("/")}
            >
               Cancel
             </button>
           </div>
         </form>
       </div>
     </div>
   </div>

  )
}
export default Orders