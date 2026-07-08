import React from 'react'
import Icon from '@ant-design/icons'

const DetailPlanSvg = props => {
    return (
        <Icon component={
            () => {
                return (
                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M28.3342 3.5H13.6675C8.3475 3.5 5.25 6.615 5.25 11.9525V30.03C5.25 35.455 8.3475 38.5 13.6675 38.5H28.3342C33.74 38.5 36.75 35.455 36.75 30.03V11.9525C36.75 6.615 33.74 3.5 28.3342 3.5Z" fill="url(#paint0_linear_1535_87467)" />
                        <path d="M14.14 27.545H27.86C28.5582 27.615 29.085 28.21 29.085 28.9275C29.085 29.6257 28.5582 30.2225 27.86 30.2925H14.14C13.615 30.3625 13.1075 30.1 12.8275 29.6625C12.5475 29.2075 12.5475 28.63 12.8275 28.1925C13.1075 27.7375 13.615 27.4925 14.14 27.545ZM27.86 19.5632C28.6125 19.5632 29.225 20.1775 29.225 20.93C29.225 21.6825 28.6125 22.295 27.86 22.295H14.14C13.3857 22.295 12.775 21.6825 12.775 20.93C12.775 20.1775 13.3857 19.5632 14.14 19.5632H27.86ZM19.3707 11.6375C20.125 11.6375 20.7375 12.25 20.7375 13.0007C20.7375 13.7725 20.125 14.385 19.3707 14.385H14.14C13.3857 14.385 12.775 13.7725 12.775 13.02C12.775 12.2675 13.3857 11.655 14.14 11.655V11.6375H19.3707Z" fill="url(#paint1_linear_1535_87467)" />
                        <defs>
                            <linearGradient id="paint0_linear_1535_87467" x1="22.8336" y1="98" x2="40.9737" y2="-145.674" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#6BA425" />
                                <stop offset="1" stopColor="#B3E17A" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_1535_87467" x1="20.9212" y1="11.6375" x2="25.034" y2="34.0804" gradientUnits="userSpaceOnUse">
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

export default DetailPlanSvg