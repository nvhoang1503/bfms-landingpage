import React, { useEffect, useState } from 'react'
import backgroundConfig from 'assets/BackgroundImg'
import { ImgSlide1 } from 'assets/images'
import PlanSvg from 'assets/svg/Overview/PlanSvg';
import ZoneSvg from 'assets/svg/Overview/ZoneSvg';
import StatisticSvg from 'assets/svg/Overview/StatisticSvg';
import ReportSvg from 'assets/svg/Overview/ReportSvg';
import { connect } from "react-redux";

const Overview = props => {
  const { screens } = props
  const [ backgroundUrl, setBackgroundUrl ] = useState(null)
  const [ iconSize, setIconSize ] = useState({ transform: 'scale(0.78)' })

  useEffect(() => {
    backgroundConfig.forEach((v, i) => {
      Object.keys(v)[0].includes(screens[screens.length - 1]) && setBackgroundUrl(backgroundConfig[i][Object.keys(v)[0]])
    })
    screens.length > 0 && !screens.includes('xl') ? setIconSize({ transform: 'scale(0.777)', marginTop: '-20px' }) : setIconSize({ transform: 'scale(1)' })
  }, [screens])

  const handleClick = (key) => {
    const elementToScroll = document.getElementById(key)
    if (elementToScroll) {
      document.getElementById(key).scrollIntoView({ block: "start", inline: "start", behavior: 'smooth' })
    }
  }

  return (
    <div className='flex flex-col items-stretch justify-start'>
      <div className='w-full relative'>
        <div className='w-full h-full'>
          <img className='w-full h-full object-contain' alt='BFMS_Overview' src={backgroundUrl} />
        </div>
        <div className='absolute inset-x-0 top-0 bg-transparent w-full h-full px-4 md:px-7 lg:px-12 2xl:px-56 flex items-start lg:items-center justify-center'>
          <div className='w-full flex flex-col lg:flex-row items-stretch lg:items-center justify-start lg:justify-between mt-8 lg:mt-0'>
            <div className='flex flex-col justify-center lg:justify-start items-center lg:items-start xl:w-[635px]'>
              <div className='font-extrabold text-center lg:text-left text-[18px] md:text-[28px] xl:text-[42px] text-transform: uppercase'>Thực hành quản trị<br />Sản xuất nông nghiệp thông minh với <span className='text-[#81B82F]'>BFMS</span></div>
              <div className='mt-2.5 md:mt-5 lg:mt-2 xl:mt-5 text-[14px] md:text-[18px] text-center lg:text-left md:px-16 lg:px-0'>
              Nông nghiệp Việt Nam bước vào giai đoạn phát triển chính xác và thông minh, toàn bộ quá trình sản xuất cần được lập kế hoạch, quản lý và phân bổ nguồn lực, dự trù chi phí, theo dõi và chăm sóc, thu hoạch và xử lý chế biến, thương mại… Giải pháp quản trị sản xuất nông nghiệp toàn diện <strong>BFMS (Balance Farm Management System) </strong>
               được tập thể kỹ thuật <strong>Balance Earth Sciences</strong> nghiên cứu, thiết kế và phát triển nhằm từng bước đáp ứng các yêu cầu của nền kinh tế nông nghiệp 4.0.
              </div>
              <div className='group'>
                <button type="button" className="rounded-xl bg-white border-[#81B82F] border-[1.5px] mt-5 md:mt-7 group-hover:bg-[#81B82F]" onClick={() => handleClick('contact')}>
                  <div className="text-[14px] lg:text-[16px] px-[23px] py-[10px] lg:px-[30px] lg:py-[13px] font-[600] text-[#81B82F] leading-none tracking-wide group-hover:text-white">
                    Liên hệ
                  </div>
                </button>
              </div>
            </div>
            <div className='flex items-center justify-center mt-2.5 md:mt-7 lg:mt-0'>
              <div className='w-full h-full sm:w-[400px] lg:w-[500px] xl:w-[640px] 2xl:w-[757px]'>
                <img className='w-full h-full object-contain' alt='BFMS_Overview' src={ImgSlide1} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full mt-12 md:mt-11 lg:mt-5 xl:mt-12 2xl:mt-4 px-4 md:px-7 lg:px-12 2xl:px-56'>
        <div className='w-full flex flex-col items-stretch justify-start'>
          <div className='w-full text-center'>
            <div className='font-extrabold text-center uppercase text-[#81B82F] text-[18px] md:text-[24px] xl:text-[32px]'>Quản lý - Sản xuất<span className='text-[#27272A]'><br />Nông nghiệp thông minh</span></div>
          </div>
          <div className='grid grid-cols-4 gap-5 md:gap-8 mt-8 lg:mt-10 xl:mt-[60px] 2xl:mt-[70px]'>
            <div className='col-span-4 md:col-span-2 lg:col-span-1 group'>
              <div className='w-full h-full flex flex-col items-center justify-start cursor-pointer rounded-xl bg-white group-hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] px-[13px] md:px-5 lg:px-3.5 xl:px-5 py-10' onClick={() => handleClick('plan')}>
                <PlanSvg style={iconSize} />
                <div className='mt-0 md:mt-2.5 xl:mt-[30px] font-extrabold text-center uppercase text-[16px] xl:text-[20px] group-hover:text-[#81B82F]'>Lập và quản lý<br/>kế hoạch sản xuất</div>
                <div className='mt-2 lg:mt-3 xl:mt-3.5 text-[14px] xl:text-[18px] text-justify px-4 sm:px-0'>Kế hoạch sản xuất nông nghiệp được lập và quản lý một cách rõ ràng, chi tiết. Giúp người sử dụng nắm rõ từng nhiệm vụ trong quá trình triển khai canh tác.</div>
              </div>
            </div>
            <div className='col-span-4 md:col-span-2 lg:col-span-1 group'>
              <div className='w-full h-full flex flex-col items-center justify-start cursor-pointer rounded-xl bg-white group-hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] px-[13px] md:px-5 lg:px-3.5 xl:px-5 py-10' onClick={() => handleClick('zone')}>
                <ZoneSvg style={iconSize} />
                <div className='mt-0 md:mt-2.5 xl:mt-[30px] font-extrabold text-center uppercase text-[16px] xl:text-[20px] group-hover:text-[#81B82F]'>Quản lý<br/>vùng canh tác</div>
                <div className='mt-2 lg:mt-3 xl:mt-3.5 text-[14px] xl:text-[18px] text-justify px-4 sm:px-0'>Mỗi vùng canh tác được quản lý chi tiết tới từng thửa ruộng, trên nền bản đồ số và cơ sở dữ liệu địa không gian và luôn được gắn liền với kế hoạch sản xuất.</div>
              </div>
            </div>
            <div className='col-span-4 md:col-span-2 lg:col-span-1 group'>
              <div className='w-full h-full flex flex-col items-center justify-start cursor-pointer rounded-xl bg-white group-hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] px-[13px] md:px-5 lg:px-3.5 xl:px-5 py-10' onClick={() => handleClick('report')}>
                <ReportSvg style={iconSize} />
                <div className='mt-0 md:mt-2.5 xl:mt-[30px] font-extrabold text-center uppercase text-[16px] xl:text-[20px] group-hover:text-[#81B82F]'>Theo dõi<br/> báo cáo công việc</div>
                <div className='mt-2 lg:mt-3 xl:mt-3.5 text-[14px] xl:text-[18px] text-justify px-4 sm:px-0'>Kiểm soát toàn bộ quá trình triển khai các nhiệm vụ và công việc nằm trong kế hoạch sản xuất, xác nhận các nhiệm vụ đã hoàn thành và cập nhật số liệu thống kê.</div>
              </div>
            </div>
            <div className='col-span-4 md:col-span-2 lg:col-span-1 group'>
              <div className='w-full h-full flex flex-col items-center justify-start cursor-pointer rounded-xl bg-white group-hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] px-[13px] md:px-5 lg:px-3.5 xl:px-5 py-10' onClick={() => handleClick('statistic')}>
                <StatisticSvg style={iconSize} />
                <div className='mt-0 md:mt-2.5 xl:mt-[30px] font-extrabold text-center uppercase text-[16px] xl:text-[20px] group-hover:text-[#81B82F]'>Thống kê<br/>số liệu sản xuất</div>
                <div className='mt-2 lg:mt-3 xl:mt-3.5 text-[14px] xl:text-[18px] text-justify px-4 sm:px-0'>Thống kê toàn diện các số liệu liên quan tới nguồn nhân lực, đất nông nghiệp, chi phí sản xuất … trên nền tảng cơ sở dữ liệu tổng hợp và kế hoạch sản xuất.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    screens: state.screens.screens
  }
}

export default connect(mapStateToProps, null)(Overview)