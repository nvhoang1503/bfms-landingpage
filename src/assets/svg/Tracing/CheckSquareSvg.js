import React from 'react'
import Icon from '@ant-design/icons'

const CheckSquareSvg = props => {
    return (
        <Icon component={
            () => {
                return (
                    <svg width="43" height="42" viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M29.2223 3.49951H14.0498C8.11726 3.49951 4.12726 7.66451 4.12726 13.8595V28.157C4.12726 34.3345 8.11726 38.4995 14.0498 38.4995H29.2223C35.1548 38.4995 39.1273 34.3345 39.1273 28.157V13.8595C39.1273 7.66451 35.1548 3.49951 29.2223 3.49951Z" fill="url(#paint0_linear_1980_86779)" />
                        <path d="M19.5502 26.6838C19.1582 26.6838 18.7662 26.5351 18.4669 26.2358L14.3142 22.0831C13.7157 21.4846 13.7157 20.5151 14.3142 19.9183C14.9127 19.3198 15.8804 19.3181 16.4789 19.9166L19.5502 22.9878L26.7742 15.7638C27.3727 15.1653 28.3404 15.1653 28.9389 15.7638C29.5374 16.3623 29.5374 17.3318 28.9389 17.9303L20.6334 26.2358C20.3342 26.5351 19.9422 26.6838 19.5502 26.6838Z" fill="url(#paint1_linear_1980_86779)" />
                        <defs>
                            <linearGradient id="paint0_linear_1980_86779" x1="23.6646" y1="97.9995" x2="40.0078" y2="-145.93" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#6BA425" />
                                <stop offset="1" stopColor="#B3E17A" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_1980_86779" x1="21.6265" y1="15.3149" x2="23.2899" y2="29.2445" gradientUnits="userSpaceOnUse">
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

export default CheckSquareSvg