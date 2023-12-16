import { obj } from '@/lib/types';
import { ChevronDownIcon } from '@radix-ui/react-icons'
import { ChevronUpIcon } from '@radix-ui/react-icons'
import Link from 'next/link';
import { useState } from 'react';

const DropMnu = ({lbl,itms}:{lbl:obj,itms:Array<obj>}) => {
    const[show,setShow] = useState(false)
    return(
        <button className="h-20 text-lg font-medium text-center transition-all" 
           onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
               <Link href={lbl.url} className="inline-block">{lbl.lbl}</Link> { show ? <ChevronDownIcon className="inline-block ml-2"/> : <ChevronUpIcon className='inline-block ml-2'/>} 
               { show && <div className="absolute mt-6 text-md min-w-36 py-2 px-5 bg-[rgba(0,0,0,0.7)] transition-all">
                { itms.map((ele,idx)=>{
                    return(
                        <div key={idx} className="py-4"><Link href={ele.url} className="p-2">{ele.lbl}</Link></div>
                    )
                    })
                }
               </div>
               }
        </button>
    )
}
export default DropMnu;
