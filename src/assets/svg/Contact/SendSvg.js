import React from 'react'
import Icon from '@ant-design/icons'

const SendSvg = props => {
    return (
        <Icon component={
            () => {
                return (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.273501 19.0873C0.109159 19.8424 0.688977 20.1621 1.22698 19.9209L19.4101 10.5973H19.412C19.6288 10.475 19.7548 10.2545 19.7548 10.0002C19.7548 9.74577 19.6288 9.52518 19.412 9.4029H19.4101L1.22698 0.0790995C0.688977 -0.16215 0.109159 0.157638 0.273501 0.91287C0.284622 0.964026 1.35959 5.75238 1.94406 8.3566L11.436 10.0002L1.94406 11.6435C1.35959 14.2476 0.284572 19.0361 0.273501 19.0873V19.0873Z" fill="white" />
                    </svg>
                )
            }
        } {...props} />
    )
}

export default SendSvg