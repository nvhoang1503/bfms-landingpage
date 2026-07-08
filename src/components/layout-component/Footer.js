import React from 'react'
import LocationSvg from 'assets/svg/Footer/LocationSvg'
import PhoneSvg from 'assets/svg/Footer/PhoneSvg'
import MailSvg from 'assets/svg/Footer/MailSvg'
import BFMSLogoV2 from 'assets/images/LOGO-BLAv2.png'

const Footer = () => {
    return (
        <>
            <footer className="flex flex-col items-center justify-between main-backgroud_linear rounded-t-[60px]">
                <div className="h-[174px] flex items-center justify-between mt-6 md:mt-14">
                    <div className='w-[314px] h-[174px] relative'>
                        <img className="absolute w-[255px] h-[174px]" src={BFMSLogoV2} alt="BFMS_logo" />
                    </div>
                </div>
                <div className='grid grid-cols-3 items-center mt-7 lg:mt-20 mb-8 lg:mb-12 w-full px-5 md:px-40 lg:px-14 xl:px-32 2xl:px-96'>
                    <div className='col-span-3 lg:col-span-1 flex items-center justify-start lg:justify-center'>
                        <div className='flex items-center justify-start'>
                            <LocationSvg />
                            <div className="text-lg text-white leading-6 ml-5">Tòa nhà Empress, Tầng 11 - 138-142 Hai Bà Trưng - Phường Đa Kao - Quận 1 - TP.Hồ Chí Minh</div>
                        </div>
                    </div>
                    <div className='col-span-3 mt-6 lg:mt-0 lg:col-span-1 flex items-center justify-start lg:justify-center'>
                        <div className='flex items-center justify-start'>
                            <PhoneSvg />
                            <div className="text-lg text-white leading-none ml-5">(+84) 028-36222245</div>
                        </div>
                    </div>
                    <div className='col-span-3 mt-6 lg:mt-0 lg:col-span-1 flex items-center justify-start lg:justify-center'>
                        <div className='flex items-center justify-start'>
                            <MailSvg />
                            <div className="text-lg text-white leading-none ml-5">info@BalanceLife.com</div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="bg-[#6BA425] h-[60px] flex items-center justify-center">
                <span className='text-white text-lg text-center'>{`${new Date().getFullYear()}`} &copy; All rights reserved by Balance Life</span>
            </footer>
        </>
    )
}

export default Footer