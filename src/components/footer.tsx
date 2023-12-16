import CopyrightIcon from '@mui/icons-material/Copyright';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

import logo from "/public/photos/logo.png"

import Link from 'next/link';
import Image from 'next/image'; 

const Footer = () => {
    return(<>
        <div className="mb-3 bg-white">
            <div className="flex flex-col h-20 p-10 shrink">
                <div className='lg:flex'>
                    <div className='flex flex-col items-center justify-center basis-1/3'>
                        <div className='pb-5 text-center md:text-3xl md:font-bold'>Follow us on Social Media</div>
                        <div>
                            <Link href="https://facebook.com"><FacebookIcon fontSize='large'/></Link>
                            <Link href="https://x.com" className='mx-10'><TwitterIcon fontSize='large'/></Link>
                            <Link href="https://youtu.be"><YouTubeIcon fontSize='large'/></Link>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center my-5 basis-1/3'>
                        <Link href="/"><Image src={logo} className='w-48' alt="logo"/></Link>
                        <div className='flex px-3'>
                            <div className='mr-3 md:text-xl md:font-semibold'><b>Email</b></div>
                            <div className='md:text-xl md:font-medium'>info@conversionmep.com</div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center basis-1/3'>
                        <div className='md:text-xl md:font-semibold'><b>Office Address</b></div>
                        <div className='md:text-lg md:font-medium'>
                        Conversion Electromechanical Co. LLC <br/>
                        Al Serkal Building - Sheikh Rashid Rd<br/>
                        Al Khabaisi, Dubai, UAE <br/>
                        <b>Phone : </b> 04 295 2727, <b>Fax :</b> 04 295 2726 <br/>
                        </div>
                    </div>
                </div>
                <div className='my-10 text-center'>
                    <CopyrightIcon/><b>2023 ConversionMep</b>&nbsp;All Rights Receieved &nbsp;<b>Designed by Jiloo(TBS) Organisation</b>
                </div>
            </div>
        </div>
    </>)
}
export default Footer;
