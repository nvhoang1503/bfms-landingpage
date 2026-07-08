import React from 'react'
import Icon from '@ant-design/icons'

const LocationSvg = props => {
    return (
        <Icon component={
            () => {
                return (
                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.9303 5.13935C18.7538 2.91773 23.4535 2.95656 27.2412 5.24107C30.9916 7.5721 33.2709 11.7323 33.2499 16.2075C33.1624 20.6534 30.7183 24.8325 27.6631 28.0632C25.8997 29.9362 23.9271 31.5925 21.7855 32.9981C21.5649 33.1256 21.3233 33.211 21.0726 33.25C20.8313 33.2397 20.5963 33.1684 20.3888 33.0425C17.1192 30.9305 14.2508 28.2346 11.9216 25.0844C9.97253 22.4549 8.86521 19.278 8.75 15.9852L8.75873 15.5062C8.91786 11.2081 11.2434 7.28163 14.9303 5.13935ZM22.5877 12.3109C21.0334 11.6502 19.2413 12.0091 18.0483 13.2201C16.8553 14.4311 16.4966 16.2553 17.1398 17.8409C17.7829 19.4265 19.3011 20.4607 20.9853 20.4607C22.0887 20.4687 23.1493 20.0267 23.9309 19.2333C24.7125 18.44 25.1501 17.3611 25.1462 16.2372C25.1521 14.5216 24.142 12.9715 22.5877 12.3109Z" fill="url(#paint0_linear_1977_86653)" />
                        <path d="M21 38.5C25.8325 38.5 29.75 37.7165 29.75 36.75C29.75 35.7835 25.8325 35 21 35C16.1675 35 12.25 35.7835 12.25 36.75C12.25 37.7165 16.1675 38.5 21 38.5Z" fill="url(#paint1_linear_1977_86653)" />
                        <defs>
                            <linearGradient id="paint0_linear_1977_86653" x1="22.4261" y1="83.825" x2="39.2589" y2="-123.076" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#6BA425" />
                                <stop offset="1" stopColor="#B3E17A" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_1977_86653" x1="21" y1="35" x2="21.1417" y2="39.3449" gradientUnits="userSpaceOnUse">
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

export default LocationSvg