import React from 'react'
import Icon from '@ant-design/icons'

const CategorySvg = props => {
    return (
        <Icon component={
            () => {
                return (
                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M28.1321 3.5H34.0576C36.5116 3.5 38.5 5.50524 38.5 7.97994V13.9554C38.5 16.4301 36.5116 18.4354 34.0576 18.4354H28.1321C25.6782 18.4354 23.6897 16.4301 23.6897 13.9554V7.97994C23.6897 5.50524 25.6782 3.5 28.1321 3.5Z" fill="url(#paint0_linear_1977_86455)" />
                        <path d="M13.8679 23.5646C16.3218 23.5646 18.3103 25.5699 18.3103 28.0446V34.0201C18.3103 36.4931 16.3218 38.5 13.8679 38.5H7.94242C5.48845 38.5 3.5 36.4931 3.5 34.0201V28.0446C3.5 25.5699 5.48845 23.5646 7.94242 23.5646H13.8679ZM34.0576 23.5646C36.5116 23.5646 38.5 25.5699 38.5 28.0446V34.0201C38.5 36.4931 36.5116 38.5 34.0576 38.5H28.1321C25.6782 38.5 23.6897 36.4931 23.6897 34.0201V28.0446C23.6897 25.5699 25.6782 23.5646 28.1321 23.5646H34.0576ZM13.8679 3.5C16.3218 3.5 18.3103 5.50524 18.3103 7.97994V13.9554C18.3103 16.4301 16.3218 18.4354 13.8679 18.4354H7.94242C5.48845 18.4354 3.5 16.4301 3.5 13.9554V7.97994C3.5 5.50524 5.48845 3.5 7.94242 3.5H13.8679Z" fill="url(#paint1_linear_1977_86455)" />
                        <defs>
                            <linearGradient id="paint0_linear_1977_86455" x1="31.0949" y1="3.5" x2="34.0662" y2="21.5717" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#F2C94C" />
                                <stop offset="1" stopColor="#EEB916" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_1977_86455" x1="23.0373" y1="98" x2="39.3805" y2="-145.93" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#6BA425" />
                                <stop offset="1" stopColor="#B3E17A" />
                            </linearGradient>
                        </defs>
                    </svg>
                )
            }
        } {...props} />
    )
}

export default CategorySvg