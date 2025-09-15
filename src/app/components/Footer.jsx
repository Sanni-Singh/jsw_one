import React from 'react'
import Link from 'next/link'
import { LuPhone } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { CgHeadset } from "react-icons/cg";

const Footer = () => {
    return (
        <footer className="  lg:pt-12 text-[14px] text-gray-900  ">
            <div className="max-w-[1400px] mx-auto px-6  grid grid-cols-1 lg:grid-cols-5 ">
                <div>
                    <img src="./jsw_one_msme.svg" alt="jsw_one_msme" className=' mb-4 lg:w-40  w-25' />
                    <div className='hidden lg:block'>
                        <div className='flex gap-5 mt-8 '>
                            <a href="https://www.youtube.com/channel/UC082oVAn2HHWT-Jjj5_Ra7A" target='_blank'><img src="https://assets.jswonemsme.com/youtube_b9a624e156/youtube_b9a624e156.svg" alt="" className='w-6 rounded-full' /></a>
                            <a href="https://www.linkedin.com/company/jsw-one/?originalSubdomain=in" target='_blank'><img src="https://assets.jswonemsme.com/Linked_In_ce75758379/Linked_In_ce75758379.svg" alt="" className='w-6 rounded-full' /></a>
                            <a href="https://www.instagram.com/jswonemsme/#" target='_blank'> <img src="https://assets.jswonemsme.com/instagram_a234d955b4/instagram_a234d955b4.svg" alt="" className='w-6 rounded-full' /></a>
                            <a href="https://www.facebook.com/jswonemsme" target='_blank'><img src="https://assets.jswonemsme.com/facebook_4d7b4fc90a/facebook_4d7b4fc90a.svg" alt="" className='w-6 rounded-full' /></a>
                        </div>
                    </div>
                </div>
                <div>
                    <p className=" lg:text-[16px] font-semibold mb-3 lg:pt-6">Buy online</p>
                    <ul className="space-y-2 menu-list ">
                        <li><Link href="/category/mild-steel">Mild Steel</Link></li>
                        <li><Link href="/category/steel">Steel</Link></li>
                        <li><Link href="/category/structural-steel">Structural Steel</Link></li>
                        <li><Link href="/category/tmt-bars">TMT</Link></li>
                        <li><Link href="/category/cement">Cement</Link></li>
                    </ul>
                </div>
                <div>
                    <p className='lg:text-[16px] font-semibold mb-3 pt-6'>JSW One Msme</p>
                    <ul className='space-y-2 menu-list'>
                        <li> <Link href="/about-us">About us</Link> </li>
                        <li><Link href="/blogs"> Blogs</Link> </li>
                        <li> <Link href="/sitemap">Sitemap</Link></li>
                        <li> <a href="https://www.jswonetmt.com/" target='_blank'>Jsw One TMT</a> </li>
                    </ul>

                </div>
                <div>
                    <p className=' lg:text-[16px] font-semibold mb-3 pt-6'>Policy</p>
                    <ul className='space-y-2 menu-list'>
                        <li> <Link href="/terms-conditions">Terms & conditions</Link> </li>
                        <li><Link href="/privacy-policy"> Privacy policy </Link> </li>
                        <li> <Link href="/return-policy">Return policy</Link></li>
                    </ul>
                    <div className="hidden lg:block">
                        <p className='font-semibold mt-6'> Banking partner </p>
                        <a href="https://www.rblbank.com/business-banking/business-banking-group/?tabName=why-us" target='_blank'>
                            <img src="./Rbl_bank.png" alt="Rbl_bank" className='w-26' />
                        </a>
                    </div>
                </div>
                <div className='space-y-2'>
                    <p className=' lg:text-[16px] font-semibold mb-3 pt-6'>Support</p>
                    <div className='flex gap-3'>
                        <LuPhone className='mt-1' />
                        <p>+91 7208055523</p>
                    </div>
                    <div className='flex gap-3'>
                        <span><MdOutlineEmail className='mt-1' /></span>
                        <p>support@jswonemsme.com</p>
                    </div>
                    <div className='flex gap-3'>
                        <span><CgHeadset className='mt-1' /></span>
                        <p><Link href='/help-support'>Help & support</Link></p>
                    </div>
                    <p className='font-semibold mt-7 '>Download our App </p>
                   <a href="https://play.google.com/store/apps/details?id=com.constructone.mobile.retailer&pli=1" target='_blank' ><img src="./playstore.svg" className='rounded-lg' alt="" />
                 </a>    <div className="block lg:hidden">
                        <p className='font-semibold mt-6'> Banking partner </p>
                        <a href="https://www.rblbank.com/business-banking/business-banking-group/?tabName=why-us" target='_blank'>
                            <img src="./Rbl_bank.png" alt="Rbl_bank" className='w-26 mb-7' />
                        </a>
                    </div>
                </div>
                <div className='lg:hidden'>
                    <hr className='text-gray-300' />
                    <img src="./jsw_one_msme.svg" alt="jsw_one_msme" className='hidden md:block w-25 ml-7 mb-4'/>
                    <div>
                        <div className='flex gap-5 mb-8 mt-4 '>
                            <a href="https://www.youtube.com/channel/UC082oVAn2HHWT-Jjj5_Ra7A" target='_blank'><img src="https://assets.jswonemsme.com/youtube_b9a624e156/youtube_b9a624e156.svg" alt="" className='w-6 rounded-full' /></a>
                            <a href="https://www.linkedin.com/company/jsw-one/?originalSubdomain=in" target='_blank'><img src="https://assets.jswonemsme.com/Linked_In_ce75758379/Linked_In_ce75758379.svg" alt="" className='w-6 rounded-full' /></a>
                            <a href="https://www.instagram.com/jswonemsme/#" target='_blank'> <img src="https://assets.jswonemsme.com/instagram_a234d955b4/instagram_a234d955b4.svg" alt="" className='w-6 rounded-full' /></a>
                            <a href="https://www.facebook.com/jswonemsme" target='_blank'><img src="https://assets.jswonemsme.com/facebook_4d7b4fc90a/facebook_4d7b4fc90a.svg" alt="" className='w-6 rounded-full' /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer