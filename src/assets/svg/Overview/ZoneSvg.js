import React from 'react'
import Icon from '@ant-design/icons'

const ZoneSvg = props => {
    return (
        <Icon component={
            () => {
                return (
                    <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="45" cy="45" r="45" fill="#F2F9E8" />
                        <path d="M38.9303 29.1393C42.7538 26.9177 47.4536 26.9566 51.2412 29.2411C54.9916 31.5721 57.2709 35.7323 57.2499 40.2075C57.1624 44.6534 54.7183 48.8325 51.6631 52.0632C49.8997 53.9362 47.9271 55.5925 45.7855 56.9981C45.5649 57.1256 45.3233 57.211 45.0726 57.25C44.8313 57.2397 44.5963 57.1684 44.3888 57.0425C41.1192 54.9305 38.2508 52.2346 35.9216 49.0844C33.9725 46.4549 32.8652 43.278 32.75 39.9852L32.7587 39.5062C32.9179 35.2081 35.2434 31.2816 38.9303 29.1393ZM46.5877 36.3109C45.0334 35.6502 43.2413 36.0091 42.0483 37.2201C40.8553 38.4311 40.4966 40.2553 41.1398 41.8409C41.7829 43.4265 43.3011 44.4607 44.9853 44.4607C46.0887 44.4687 47.1493 44.0267 47.9309 43.2333C48.7125 42.44 49.1501 41.3611 49.1462 40.2372C49.1521 38.5216 48.142 36.9715 46.5877 36.3109Z" fill="url(#paint0_linear_1826_269)" />
                        <path d="M45 62.5C49.8325 62.5 53.75 61.7165 53.75 60.75C53.75 59.7835 49.8325 59 45 59C40.1675 59 36.25 59.7835 36.25 60.75C36.25 61.7165 40.1675 62.5 45 62.5Z" fill="url(#paint1_linear_1826_269)" />
                        <defs>
                            <linearGradient id="paint0_linear_1826_269" x1="46.4261" y1="107.825" x2="63.2589" y2="-99.0764" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#6BA425" />
                                <stop offset="1" stopColor="#B3E17A" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_1826_269" x1="45" y1="59" x2="45.1417" y2="63.3449" gradientUnits="userSpaceOnUse">
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

export default ZoneSvg