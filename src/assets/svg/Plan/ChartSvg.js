import React from 'react'
import Icon from '@ant-design/icons'

const ChartSvg = props => {
    return (
        <Icon component={
            () => {
                return (
                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M29.1822 3.5H12.8333C6.87556 3.5 3.5 6.87556 3.5 12.8333V29.1667C3.5 35.1244 6.87556 38.5 12.8333 38.5H29.1822C35.14 38.5 38.5 35.1244 38.5 29.1667V12.8333C38.5 6.87556 35.14 3.5 29.1822 3.5Z" fill="url(#paint0_linear_1534_87364)" />
                        <path d="M12.8953 16.3958C12.1019 16.3958 11.4486 17.0491 11.4486 17.858V29.8824C11.4486 30.6758 12.1019 31.3291 12.8953 31.3291C13.7042 31.3291 14.3575 30.6758 14.3575 29.8824V17.858C14.3575 17.0491 13.7042 16.3958 12.8953 16.3958Z" fill="url(#paint1_linear_1534_87364)" />
                        <path d="M21.0619 10.6558C20.2686 10.6558 19.6152 11.3091 19.6152 12.118V29.8824C19.6152 30.6758 20.2686 31.3291 21.0619 31.3291C21.8708 31.3291 22.5241 30.6758 22.5241 29.8824V12.118C22.5241 11.3091 21.8708 10.6558 21.0619 10.6558Z" fill="url(#paint2_linear_1534_87364)" />
                        <path d="M29.1198 22.7424C28.3109 22.7424 27.6576 23.3958 27.6576 24.2047V29.8824C27.6576 30.6758 28.3109 31.3291 29.1043 31.3291C29.9131 31.3291 30.5665 30.6758 30.5665 29.8824V24.2047C30.5665 23.3958 29.9131 22.7424 29.1198 22.7424Z" fill="url(#paint3_linear_1534_87364)" />
                        <defs>
                            <linearGradient id="paint0_linear_1534_87364" x1="23.0373" y1="98" x2="39.3805" y2="-145.93" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#6BA425" />
                                <stop offset="1" stopColor="#B3E17A" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_1534_87364" x1="12.9031" y1="16.3958" x2="22.037" y2="27.3083" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#F2C94C" />
                                <stop offset="1" stopColor="#EEB916" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_1534_87364" x1="21.0697" y1="10.6558" x2="33.7769" y2="21.6222" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#F2C94C" />
                                <stop offset="1" stopColor="#EEB916" />
                            </linearGradient>
                            <linearGradient id="paint3_linear_1534_87364" x1="29.112" y1="22.7424" x2="33.2818" y2="31.4063" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#F2C94C" />
                                <stop offset="1" stopColor="#EEB916" />
                            </linearGradient>
                        </defs>
                    </svg>
                )
            }
        } {...props} />
    )
}

export default ChartSvg