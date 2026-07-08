import React, { memo } from 'react'
import Overview from './Overview'
import Plan from './Plan'
import Zone from './Zone'
import Report from './Report'
import Statistic from './Statistic'
import Contact from './Contact'
import Tracing from './Tracing'

const LandingPage = () => {
    return (
        <div className='flex flex-col items-stretch justify-start'>
            <div id='overview' className='scroll-mt-28'>
              <Overview />
            </div>
            <div id='plan' className='mt-16 scroll-m-28 md:mt-28 px-4 md:px-7 lg:px-12 2xl:px-56'>
              <Plan />
            </div>
            <div id='zone' className='mt-20 scroll-m-28 md:mt-28 px-4 md:px-7 lg:px-12 2xl:px-56'>
              <Zone />
            </div>
            <div id='report' className='mt-20 scroll-m-28 md:mt-28 px-4 md:px-7 lg:px-12 2xl:px-56'>
              <Report />
            </div>
            <div id='statistic' className='mt-20 scroll-m-28 md:mt-28 px-4 md:px-7 lg:px-12 2xl:px-56'>
              <Statistic />
            </div>
            <div id='tracing' className='mt-20 scroll-m-28 md:mt-28 px-4 md:px-7 lg:px-12 2xl:px-56'>
              <Tracing />
            </div>
            <div id='contact' className='mt-20 scroll-m-28 md:mt-28 px-4 md:px-7 lg:px-12 2xl:px-56 mb-[80px] md:mb-[100px] lg:mb-[120px]'>
              <Contact />
            </div>
        </div>
    )
}

export default memo(LandingPage)