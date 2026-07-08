import React from 'react'
import Icon from '@ant-design/icons';

const PhoneSvg = props => {
    return (
        <Icon component={
            () => {
                return (
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.3367 14.6691C18.9879 20.3187 20.2699 13.7827 23.868 17.3783C27.3369 20.8462 29.3307 21.541 24.9356 25.9349C24.3851 26.3773 20.8873 31.7 8.59488 19.411C-3.69907 7.1205 1.6206 3.61913 2.06314 3.06877C6.46883 -1.33721 7.15166 0.66813 10.6205 4.13605C14.2187 7.73321 7.68545 9.01942 13.3367 14.6691Z" fill="white" />
                    </svg>
                )
            }
        } {...props} />
    )
}

export default PhoneSvg