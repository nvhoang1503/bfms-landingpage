import React, { useState, useEffect } from 'react'
import { ImgSlide5 } from 'assets/images'
import { connect } from "react-redux";
import SearchSvg from 'assets/svg/Statistic/SearchSvg'
import PaperSvg from 'assets/svg/Statistic/PaperSvg'
import ChartSvg from 'assets/svg/Plan/ChartSvg';
import CircleGraphSvg from 'assets/svg/Report/CircleGraphSvg';

const Statistic = props => {
    const { screens } = props
    const [ iconSize, setIconSize ] = useState({ transform: 'scale(0.777)' })

    useEffect(() => {
        screens.length > 0 && !screens.includes('md') ? setIconSize({ transform: 'scale(0.777)' }) : setIconSize({ transform: 'scale(1)' })
    }, [screens])

    return (
        <div className='w-full flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between'>
            <div className='flex flex-col justify-center lg:justify-start items-start xl:w-[635px]'>
                <div className='font-extrabold text-left uppercase text-[18px] md:text-[24px] xl:text-[32px]'><span className='text-[#81B82F]'>Thống kê số liệu</span><br />sản xuất</div>
                <div className='mt-5 md:mt-[30px] lg:mt-2 xl:mt-5 text-[14px] md:text-[18px] text-justify'>Cơ sở dữ liệu trong <strong>BFMS</strong> được thiết kế để ghi nhận, lưu trữ và truy vấn cả hai dạng thức gồm: Thông tin số liệu không gian và Thông tin số liệu thuộc tính. Toàn bộ thông tin và số liệu liên quan tới sản xuất nông nghiệp bao gồm (nhưng không hạn chế) như bản đồ theo chủ đề, thông tin đất đai, chi phí sản xuất, doanh thu từ sản xuất … đều được thống kê ghi nhận chi tiết. Là nguồn thông tin quan trọng để tối ưu hóa kế hoạch cũng như quy trình sản xuất trong tương lai.</div>
                <div className='mt-5 md:mt-8 lg:mt-6 xl:mt-11 flex flex-col items-stretch justify-start space-y-3 md:space-y-1'>
                    <div className='flex items-center justify-start'>
                        <ChartSvg style={iconSize} />
                        <div className='mt-[2px] ml-2 md:ml-4 text-[14px] md:text-[18px] text-left'>Tổ chức hợp lý các dạng thức số liệu và thông tin (không gian và thuộc tính)</div>
                    </div>
                    <div className='flex items-center justify-start'>
                        <CircleGraphSvg style={iconSize} />
                        <div className='mt-[2px] ml-2 md:ml-4 text-[14px] md:text-[18px] text-left'>Tích hợp thông tin thuộc tính, số liệu thống kê với thông tin không gian (bản đồ)</div>
                    </div>
                    <div className='flex items-center justify-start'>
                        <PaperSvg style={iconSize} />
                        <div className='mt-[2px] ml-2 md:ml-4 text-[14px] md:text-[18px] text-left'>Thống kê số liệu tổng hợp để tạo thành các báo cáo trực quan theo yêu cầu</div>
                    </div>
                    <div className='flex items-center justify-start'>
                        <SearchSvg style={iconSize} />
                        <div className='mt-[2px] ml-2 md:ml-4 text-[14px] md:text-[18px] text-left'>Tra cứu, truy vấn và in ấn các báo cáo thống kê theo chủ đề quan tâm</div>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center lg:ml-10 mt-[30px] md:mt-14 lg:mt-0'>
                <div className='w-full h-full lg:w-[500px] xl:w-[634px] 2xl:w-[724px]'>
                    <img className='w-full h-full object-contain' alt='BFMS_Overview' src={ImgSlide5} />
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

export default connect(mapStateToProps, null)(Statistic)