import React from 'react'
import Icon from '@ant-design/icons'

const PlanSvg = props => {
    return (
        <Icon component={
            () => {
                return (
                    <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="45" cy="45" r="45" fill="#F2F9E8" />
                        <path d="M52.3342 27.5H37.6675C32.3475 27.5 29.25 30.615 29.25 35.9525V54.03C29.25 59.455 32.3475 62.5 37.6675 62.5H52.3342C57.74 62.5 60.75 59.455 60.75 54.03V35.9525C60.75 30.615 57.74 27.5 52.3342 27.5Z" fill="url(#paint0_linear_1826_518)" />
                        <path d="M38.14 51.545H51.86C52.5583 51.615 53.085 52.21 53.085 52.9275C53.085 53.6257 52.5583 54.2225 51.86 54.2925H38.14C37.615 54.3625 37.1075 54.1 36.8275 53.6625C36.5475 53.2075 36.5475 52.63 36.8275 52.1925C37.1075 51.7375 37.615 51.4925 38.14 51.545ZM51.86 43.5632C52.6125 43.5632 53.225 44.1775 53.225 44.93C53.225 45.6825 52.6125 46.295 51.86 46.295H38.14C37.3858 46.295 36.775 45.6825 36.775 44.93C36.775 44.1775 37.3858 43.5632 38.14 43.5632H51.86ZM43.3708 35.6375C44.125 35.6375 44.7375 36.25 44.7375 37.0007C44.7375 37.7725 44.125 38.385 43.3708 38.385H38.14C37.3858 38.385 36.775 37.7725 36.775 37.02C36.775 36.2675 37.3858 35.655 38.14 35.655V35.6375H43.3708Z" fill="url(#paint1_linear_1826_518)" />
                        <defs>
                            <linearGradient id="paint0_linear_1826_518" x1="46.8336" y1="122" x2="64.9737" y2="-121.674" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#6BA425" />
                                <stop offset="1" stopColor="#B3E17A" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_1826_518" x1="44.9213" y1="35.6375" x2="49.034" y2="58.0804" gradientUnits="userSpaceOnUse">
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

export default PlanSvg