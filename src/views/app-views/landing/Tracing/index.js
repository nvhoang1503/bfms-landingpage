import React, { useState, useEffect } from 'react'
import { ImgSlide6 } from 'assets/images'
import { connect } from "react-redux";
import PaperSvg from 'assets/svg/Statistic/PaperSvg';
import SheldDoneSvg from 'assets/svg/Statistic/SheldSvg';
import CheckSquareSvg from 'assets/svg/Tracing/CheckSquareSvg';
import DashbroadPlusSvg from 'assets/svg/Tracing/DashbroadPlusSvg';

const Tracing = props => {
    const { screens } = props
    const [ iconSize, setIconSize ] = useState({ transform: 'scale(0.777)' })

    useEffect(() => {
        screens.length > 0 && !screens.includes('md') ? setIconSize({ transform: 'scale(0.777)' }) : setIconSize({ transform: 'scale(1)' })
    }, [screens])

    return (
        <div className='w-full flex flex-col lg:flex-row-reverse items-start lg:items-center justify-start lg:justify-between'>
            <div className='flex flex-col justify-center lg:justify-start items-start lg:ml-10 xl:w-[724px]'>
                <div className='font-extrabold text-left uppercase text-[18px] md:text-[24px] xl:text-[32px]'><span className='text-[#81B82F]'>Truy xuất nguồn gốc</span><br />sản phẩm</div>
                <div className='mt-5 md:mt-[30px] lg:mt-2 xl:mt-5 text-[14px] md:text-[18px] text-justify'>Niềm tin của người tiêu dùng là tiền đề quan trọng quyết định thành công của bất kỳ mô hình phát triển nông nghiệp nào trên Thế giới. Với phương châm minh bạch hóa quá trình sản xuất, cung cấp đầy đủ thông tin liên quan tới nông sản khi tới tay người tiêu dùng, tạo sự an tâm về chất lượng hàng hóa cho thị thường trong và ngoài nước, <strong>BFMS</strong> quản lý chặt chẽ và ghi nhận đầy đủ thông tin trong quá trình canh tác, là chìa khóa tạo ra giá trị của các báo cáo truy xuất nguồn gốc.</div>
                <div className='mt-5 md:mt-8 lg:mt-6 xl:mt-11 flex flex-col items-stretch justify-start space-y-3 md:space-y-1'>
                    <div className='flex items-center justify-start'>
                        <CheckSquareSvg style={iconSize} />
                        <div className='mt-[2px] ml-2 md:ml-4 text-[14px] md:text-[18px] text-left'>Bảo đảm đủ chức năng truy xuất nguồn gốc bên trong và bên ngoài</div>
                    </div>
                    <div className='flex items-center justify-start'>
                        <DashbroadPlusSvg style={iconSize} />
                        <div className='mt-[2px] ml-2 md:ml-4 text-[14px] md:text-[18px] text-left'>Liên kết trực tiếp với các module chức năng lập và triển khai kế hoạch sản xuất</div>
                    </div>
                    <div className='flex items-center justify-start'>
                        <SheldDoneSvg style={iconSize} />
                        <div className='mt-[2px] ml-2 md:ml-4 text-[14px] md:text-[18px] text-left'>Khai thác nguồn thông tin không thể sửa chữa để tạo báo cáo truy xuất nguồn gốc</div>
                    </div>
                    <div className='flex items-center justify-start'>
                        <PaperSvg style={iconSize} />
                        <div className='mt-[2px] ml-2 md:ml-4 text-[14px] md:text-[18px] text-left'>Cung cấp đầy đủ thông tin mà người dùng quan tâm trong báo cáo truy xuất nguồn gốc</div>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center mt-[30px] md:mt-14 lg:mt-0'>
                <div className='w-full h-full lg:w-[500px] xl:w-[634px] 2xl:w-[724px]'>
                    <img className='w-full h-full object-contain' alt='BFMS_Overview' src={ImgSlide6} />
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

export default connect(mapStateToProps, null)(Tracing)