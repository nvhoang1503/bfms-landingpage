import React, { useState, useEffect } from 'react'
import { ImgSlide2 } from 'assets/images'
import { connect } from "react-redux";
import NotiSvg from 'assets/svg/Plan/NotiSvg'
import CalendarSvg from 'assets/svg/Plan/CalendarSvg';
import ChartSvg from 'assets/svg/Plan/ChartSvg';
import NewFileSvg from 'assets/svg/Plan/NewFileSvg';

const Plan = props => {
    const { screens } = props
    const [ iconSize, setIconSize ] = useState({ transform: 'scale(0.777)' })

    useEffect(() => {
        screens.length > 0 && !screens.includes('md') ? setIconSize({ transform: 'scale(0.777)' }) : setIconSize({ transform: 'scale(1)' })
    }, [screens])

    return (
        <div className='w-full flex flex-col lg:flex-row-reverse items-start lg:items-center justify-start lg:justify-between'>
            <div className='flex flex-col justify-center lg:justify-start items-start lg:ml-10 xl:w-[724px]'>
                <div className='font-extrabold text-left uppercase text-[18px] md:text-[24px] xl:text-[32px]'><span className='text-[#81B82F]'>Lập và quản lý</span><br />kế hoạch sản xuất</div>
                <div className='mt-5 md:mt-[30px] lg:mt-2 xl:mt-5 text-[14px] md:text-[18px] text-justify'>Kế hoạch sản xuất được lập một cách rõ ràng, chi tiết và cụ thể theo từng công việc / nhiệm vụ / thời gian, đồng thời giám sát chặt chẽ trong quá trình triển khai thực hiện kế hoạch đã lập. Chức năng này giúp người dùng luôn chủ động nắm rõ tất cả các nhiệm vụ cần thực thi, cũng như những số liệu và thông tin có liên quan tới các công việc / nhiệm vụ đã lập.</div>
                <div className='mt-5 md:mt-8 lg:mt-6 xl:mt-11 flex flex-col items-stretch justify-start space-y-3 md:space-y-1'>
                    <div className='flex items-center justify-start'>
                        <NewFileSvg style={iconSize} />
                        <div className='mt-[2px] ml-2 md:ml-4 text-[14px] md:text-[18px] text-left'>Lập kế hoạch và quản lý triển khai kế hoạch sản xuất đã lập</div>
                    </div>
                    <div className='flex items-center justify-start'>
                        <ChartSvg style={iconSize} />
                        <div className='mt-[2px] ml-2 md:ml-4 text-[14px] md:text-[18px] text-left'>Dự trù kinh phí và xác định thông tin trước khi triển khai kế hoạch</div>
                    </div>
                    <div className='flex items-center justify-start'>
                        <NotiSvg style={iconSize} />
                        <div className='mt-[2px] ml-2 md:ml-4 text-[14px] md:text-[18px] text-left'>Nhận thông báo mỗi khi bắt đầu công việc / nhiệm vụ trong kế hoạch</div>
                    </div>
                    <div className='flex items-center justify-start'>
                        <CalendarSvg style={iconSize} />
                        <div className='mt-[2px] ml-2 md:ml-4 text-[14px] md:text-[18px] text-left'>Theo dõi và kiểm soát công việc / nhiệm vụ theo từng ngày</div>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center mt-[30px] md:mt-14 lg:mt-0'>
                <div className='w-full h-full lg:w-[500px] xl:w-[634px] 2xl:w-[724px]'>
                    <img className='w-full h-full object-contain' alt='BFMS_Overview' src={ImgSlide2} />
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

export default connect(mapStateToProps, null)(Plan)