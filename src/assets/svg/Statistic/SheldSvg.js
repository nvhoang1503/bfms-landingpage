import React from 'react'
import Icon from '@ant-design/icons'

const SheldDoneSvg = props => {
    return (
        <Icon component={
            () => {
                return (
                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.1515 38.5C20.9348 38.5 20.7181 38.4502 20.5225 38.349L14.2206 35.0868C12.4324 34.1602 11.0335 33.1202 9.9412 31.9087C7.55045 29.2592 6.2203 25.858 6.19916 22.3298L6.1251 10.7175C6.11635 9.37724 6.98139 8.1743 8.27455 7.72127L19.846 3.68688C20.5331 3.44149 21.2994 3.43805 21.9989 3.67487L33.6144 7.57197C34.9146 8.00613 35.7937 9.20049 35.8007 10.539L35.8747 22.16C35.8976 25.683 34.6133 29.0979 32.2595 31.7766C31.1796 33.0053 29.793 34.0606 28.0224 35.0044L21.7769 38.3404C21.5831 38.4451 21.3682 38.4983 21.1515 38.5Z" fill="url(#paint0_linear_1977_86666)" />
                        <path d="M19.8086 25.0616C19.4703 25.0633 19.1321 24.9415 18.8713 24.6909L15.5169 21.4648C14.9989 20.9637 14.9936 20.1503 15.5063 19.6458C16.019 19.1396 16.8558 19.1344 17.3756 19.6338L19.7892 21.9539L25.6824 16.1434C26.1968 15.6372 27.0337 15.632 27.5517 16.1314C28.0714 16.6325 28.0767 17.4476 27.564 17.9504L20.7406 24.6789C20.4834 24.9329 20.1469 25.0599 19.8086 25.0616Z" fill="url(#paint1_linear_1977_86666)" />
                        <defs>
                            <linearGradient id="paint0_linear_1977_86666" x1="22.7317" y1="98" x2="41.9261" y2="-145.512" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#6BA425" />
                                <stop offset="1" stopColor="#B3E17A" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_1977_86666" x1="21.535" y1="15.7603" x2="22.8835" y2="27.1596" gradientUnits="userSpaceOnUse">
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

export default SheldDoneSvg