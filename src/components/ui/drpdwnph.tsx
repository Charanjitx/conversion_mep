import { obj } from '@/lib/types';
import { ChevronDownIcon } from '@radix-ui/react-icons'
import { ChevronUpIcon } from '@radix-ui/react-icons'
import Link from 'next/link';
import { useState } from 'react';


const DropMnuPh = ({lbl,itms, setClsOpn}:{lbl:obj,itms:Array<obj>,setClsOpn:React.Dispatch<React.SetStateAction<boolean>>}) => {
    const[show,setShow] = useState(false)
    const setChange = () => {
        setShow((prev)=>!prev)
        setClsOpn((prev)=>!prev)
    }
    return(<>
        <div className="flex items-center pt-5 mb-2 text-lg font-medium text-center transition-all" onClick={()=>setShow((prev)=>!prev)}>
               <div>{lbl.lbl}</div> { show ? <ChevronDownIcon className='ml-2'/>:<ChevronUpIcon className='ml-2'/>}
        </div>
               { show && <div className="text-lg min-w-36 py-2 px-5 bg-[rgba(0,0,0,0.7)] transition-all" onClick={()=>setChange()}>
                { itms.map((ele,idx)=>{
                    return(
                        <div key={idx} className="w-full py-4"><Link href={ele.url} className="p-2">{ele.lbl}</Link></div>
                    )})
                }
               </div>
               }
    </>)
}
export default DropMnuPh;
