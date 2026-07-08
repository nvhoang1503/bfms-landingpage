import React, { useState, useEffect } from 'react'
import { ImgSlide4 } from 'assets/images'
import { connect } from "react-redux";
import ImageSvg from 'assets/svg/Report/ImageSvg';
import BagSvg from 'assets/svg/Report/BagSvg';
import EditSquareSvg from 'assets/svg/Report/EditSquareSvg';
import CircleGraphSvg from 'assets/svg/Report/CircleGraphSvg';

const Report = props => {
    const { screens } = props
    const [ iconSize, setIconSize ] = useState({ transform: 'scale(0.777)' })

    useEffect(() => {
        screens.length > 0 && !screens.includes('md') ? setIconSize({ transform: 'scale(0.777)' }) : setIconSize({ transform: 'scale(1)' })
    }, [screens])

    return (
        <div className='w-full flex flex-col lg:flex-row-reverse items-start lg:items-center justify-start lg:justify-between'>
            <div className='flex flex-col justify-center lg:justify-start items-start lg:ml-10 xl:w-[724px]'>
                <div className='font-extrabold text-left uppercase text-[18px] md:text-[24px] xl:text-[32px]'><span className='text-[#81B82F]'>Theo dõi và báo cáo</span><br />công việc dễ dàng</div>
                <div className='mt-5 md:mt-[30px] lg:mt-2 xl:mt-5 text-[14px] md:text-[18px] text-justify'>Một kế hoạch sản xuất chỉ phát huy hết lợi thế và tính xác thực khi nó được theo dõi, kiểm soát, cập nhật và báo cáo thường xuyên trong quá trình triển khai. <strong>BFMS</strong> cho phép người dùng dễ dàng theo dõi toàn bộ các công việc / nhiệm vụ đã lập trong kế hoạch sản xuất, kiểm soát được khối lượng công việc và chi phí thực tiễn sử dụng, cập nhật thông tin thường xuyên bằng số liệu, hình ảnh, mô tả hay tài liệu.</div>
                <div className='mt-5 md:mt-8 lg:mt-6 xl:mt-11 flex flex-col items-stretch justify-start space-y-3 md:space-y-1'>
                    <div className='flex items-center justify-start'>
                        <BagSvg style={iconSize} />
                        <div className='mt-[2px] ml-2 md:ml-4 text-[14px] md:text-[18px] text-left'>Nhắc nhở các công việc / nhiệm vụ đến thời hạn cần triển khai theo kế hoạch</div>
                    </div>
                    <div className='flex items-center justify-start'>
                        <EditSquareSvg style={iconSize} />
                        <div className='mt-[2px] ml-2 md:ml-4 text-[14px] md:text-[18px] text-left'>Theo dõi và giám sát quá trình triển khai từng công việc / nhiệm vụ trong kế hoạch</div>
                    </div>
                    <div className='flex items-center justify-start'>
                        <CircleGraphSvg style={iconSize} />
                        <div className='mt-[2px] ml-2 md:ml-4 text-[14px] md:text-[18px] text-left'>Cập nhật thông tin liên quan tới chi phí và các điều chỉnh triển khai thực tiễn</div>
                    </div>
                    <div className='flex items-center justify-start'>
                        <ImageSvg style={iconSize} />
                        <div className='mt-[2px] ml-2 md:ml-4 text-[14px] md:text-[18px] text-left'>Hiển thị trực quan hình ảnh, số liệu, tài liệu liên quan tới công việc / nhiệm vụ</div>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center mt-[30px] md:mt-14 lg:mt-0'>
                <div className='w-full h-full lg:w-[500px] xl:w-[634px] 2xl:w-[724px]'>
                    <img className='w-full h-full object-contain' alt='BFMS_Overview' src={ImgSlide4} />
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

export default connect(mapStateToProps, null)(Report)