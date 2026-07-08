import React, { useState, useEffect } from 'react'
import { ImgSlide3 } from 'assets/images'
import { connect } from "react-redux";
import SunSvg from 'assets/svg/Zone/SunSvg';
import StackSvg from 'assets/svg/Zone/StackSvg';
import CategorySvg from 'assets/svg/Zone/CategorySvg';
import PaperSvg from 'assets/svg/Statistic/PaperSvg';

const Zone = props => {
    const { screens } = props
    const [ iconSize, setIconSize ] = useState({ transform: 'scale(0.777)' })

    useEffect(() => {
        screens.length > 0 && !screens.includes('md') ? setIconSize({ transform: 'scale(0.777)' }) : setIconSize({ transform: 'scale(1)' })
    }, [screens])

    return (
        <div className='w-full flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between'>
            <div className='flex flex-col justify-center lg:justify-start items-start xl:w-[635px]'>
                <div className='font-extrabold text-left uppercase text-[18px] md:text-[24px] xl:text-[32px]'>Quản lý vùng<br /><span className='text-[#81B82F]'>Chăn nuôi và canh tác</span></div>
                <div className='mt-5 md:mt-[30px] lg:mt-2 xl:mt-5 text-[14px] md:text-[18px] text-justify'>Các thửa ruộng là hợp phần quan trọng cấu thành nên các vùng chăn nuôi và canh tác nông nghiệp. <strong>BFMS</strong> quản lý toàn diện thông tin chi tiết về các thửa ruộng trên cánh đồng gắn với từng hộ gia đình nắm quyền sử dụng. Dễ dàng tạo các vùng canh tác mới, hiển thị thông tin chi tiết về các vùng đang triển khai theo kế hoạch … tất cả đều được thể hiện trực quan và rõ ràng thông qua các phân lớp bản đồ.</div>
                <div className='mt-5 md:mt-8 lg:mt-6 xl:mt-11 flex flex-col items-stretch justify-start space-y-3 md:space-y-1'>
                    <div className='flex items-center justify-start'>
                        <StackSvg style={iconSize} />
                        <div className='mt-[2px] ml-2 md:ml-4 text-[14px] md:text-[18px] text-left'>Hiển thị tổng quan các phân lớp thông tin bản đồ trên vùng canh tác</div>
                    </div>
                    <div className='flex items-center justify-start'>
                        <CategorySvg style={iconSize} />
                        <div className='mt-[2px] ml-2 md:ml-4 text-[14px] md:text-[18px] text-left'>Phân định rõ ràng các thửa ruộng dựa trên quyền sử dụng và khai thác</div>
                    </div>
                    <div className='flex items-center justify-start'>
                        <PaperSvg style={iconSize} />
                        <div className='mt-[2px] ml-2 md:ml-4 text-[14px] md:text-[18px] text-left'>Hiển thị chi tiết kế hoạch sản xuất gắn với từng thửa ruộng và vùng canh tác</div>
                    </div>
                    <div className='flex items-center justify-start'>
                        <SunSvg style={iconSize} />
                        <div className='mt-[2px] ml-2 md:ml-4 text-[14px] md:text-[18px] text-left'>Gắn kết với thông tin dự báo thời tiết ngắn và dài hạn trên từng thửa và vùng canh tác</div>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center lg:ml-10 mt-[30px] md:mt-14 lg:mt-0'>
                <div className='w-full h-full lg:w-[500px] xl:w-[634px] 2xl:w-[724px]'>
                    <img className='w-full h-full object-contain' alt='BFMS_Overview' src={ImgSlide3} />
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

export default connect(mapStateToProps, null)(Zone)