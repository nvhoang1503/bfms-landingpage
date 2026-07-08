import React from 'react'
import Icon from '@ant-design/icons'

const PaperSvg = props => {
    return (
        <Icon component={
            () => {
                return (
                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M32.9154 15.7867C32.1253 15.7867 31.0787 15.7692 29.7756 15.7692C26.5977 15.7692 23.9847 13.139 23.9847 9.93125V4.30325C23.9847 3.8605 23.6312 3.5 23.1928 3.5H13.9363C9.61654 3.5 6.125 7.0455 6.125 11.3907V30.247C6.125 34.8057 9.78289 38.5 14.2968 38.5H28.081C32.3852 38.5 35.875 34.9772 35.875 30.6285V16.5743C35.875 16.1298 35.5232 15.771 35.0831 15.7727C34.3432 15.778 33.456 15.7867 32.9154 15.7867Z" fill="url(#paint0_linear_1977_86654)" />
                        <path d="M28.147 4.4929C27.6238 3.94865 26.7103 4.32315 26.7103 5.0774V9.69215C26.7103 11.6276 28.3045 13.2201 30.24 13.2201C31.4598 13.2341 33.1538 13.2376 34.5923 13.2341C35.329 13.2324 35.7035 12.3521 35.1925 11.8201C33.3463 9.9004 30.0405 6.4599 28.147 4.4929Z" fill="url(#paint1_linear_1977_86654)" />
                        <path d="M25.2315 26.0626C25.9508 26.0626 26.5353 26.6471 26.5353 27.3664C26.5353 28.0856 25.9508 28.6684 25.2315 28.6684H15.7045C14.9853 28.6684 14.4025 28.0856 14.4025 27.3664C14.4025 26.6471 14.9853 26.0626 15.7045 26.0626H25.2315ZM21.6281 17.3228C22.3473 17.3228 22.9318 17.9073 22.9318 18.6265C22.9318 19.3458 22.3473 19.9285 21.6281 19.9285H15.7043C14.9851 19.9285 14.4023 19.3458 14.4023 18.6265C14.4023 17.9073 14.9851 17.3228 15.7043 17.3228H21.6281Z" fill="url(#paint2_linear_1977_86654)" />
                        <defs>
                            <linearGradient id="paint0_linear_1977_86654" x1="22.7317" y1="98" x2="41.9261" y2="-145.512" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#6BA425" />
                                <stop offset="1" stopColor="#B3E17A" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_1977_86654" x1="31.5767" y1="28.5363" x2="35.9144" y2="-34.1737" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#6BA425" />
                                <stop offset="1" stopColor="#B3E17A" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_1977_86654" x1="20.4688" y1="17.3228" x2="22.5696" y2="31.1017" gradientUnits="userSpaceOnUse">
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

export default PaperSvg