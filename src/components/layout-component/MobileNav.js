import React, { memo } from 'react'
import { connect } from "react-redux";
import { Drawer } from "antd";
import { toggleMobileNav, setKey } from 'core/redux';
import { CloseOutlined } from '@ant-design/icons';
import { Scrollbars } from "react-custom-scrollbars-2";
import { NAV_TYPE_SIDE } from 'constants/NavType';
import MenuContent from './MenuContent';

const MobileNav = props => {

  const { mobileNavStatus, toggleMobileNav } = props

  const onClose = () => {
    toggleMobileNav(false)
  }

  return (
    <Drawer
      placement='right'
      closable={false}
      onClose={onClose}
      open={mobileNavStatus}
      bodyStyle={{ padding: 0 }}
    >
      <div className='main-backgroud_linear w-full h-full'>
        <div className='w-full h-full flex flex-col items-center justify-start py-6'>
          <div className='w-full flex items-center justify-between pl-6'>
            <CloseOutlined onClick={onClose} style={{ fontSize: '1.5rem', color: 'white', fontWeight: 900 }} />
          </div>
          <div className='w-full h-full mt-6'>
            <Scrollbars autoHide>
              <MenuContent type={NAV_TYPE_SIDE} isMobile={true} {...props} />
            </Scrollbars>
          </div>
        </div>
      </div>
    </Drawer>
  )
}

const mapStateToProps = state => {
  return {
    mobileNavStatus: state.mobileNav.mobileNavStatus,
    currentKey: state.itemNavSelect.currentKey
  }
}

export default connect(mapStateToProps, { toggleMobileNav, setKey })(memo(MobileNav));