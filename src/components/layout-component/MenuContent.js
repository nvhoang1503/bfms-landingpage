import React, { useRef, memo } from 'react'
import { NAV_TYPE_SIDE } from 'constants/NavType';
import navigationConfig from 'configs/NavigationConfig';
import { Link } from 'react-router-dom';
import { MENU_TYPE_DEFAULT_PATH, MENU_TYPE_DIFFERENT_PATH } from 'constants/MenuType';

const SideNavContent = props => {
  
  const { isMobile, currentKey, toggleMobileNav } = props
  let timeOutRef = useRef()

  const closeMobileNav = () => {
    if (isMobile) {
      toggleMobileNav(false)
    }
  }

  const handleClickMenu = (key, type) => {
    if (type === MENU_TYPE_DIFFERENT_PATH) {
      closeMobileNav()
      return
    }

    if (type === MENU_TYPE_DEFAULT_PATH) {
      if (timeOutRef.current) {
        clearTimeout(timeOutRef.current)
      }
      timeOutRef = setTimeout(() => {
        const elementToScroll = document.getElementById(key)
        if (elementToScroll) {
          elementToScroll.scrollIntoView({ block: "start", inline: "start", behavior: 'smooth' })
          closeMobileNav()
        }
      }, 100) 
    }
  }

  return (
    <div className='bg-transparent h-hull w-full'>
      <div className='flex flex-col items-center justify-center text-white'>
        {
          navigationConfig.map(menu =>
            (
              <Link key={menu.key} className={`w-full text-center py-4 ${ currentKey === menu.key ? 'bg-[#6BA425]' : 'bg-transparent'} cursor-pointer hover:bg-[#6BA425]`} to={menu.path} onClick={() => handleClickMenu(menu.key, menu.type)}>
                <span className='text-white font-extrabold text-lg'>{menu.title}</span>
              </Link>
            )
          )
        }
      </div>
    </div>
  )
}

const TopNavContent = props => {

  const { currentKey } = props
  let timeOutRef = useRef()

  const handleClickMenu = (key, type) => {
    if (type === MENU_TYPE_DIFFERENT_PATH) {
      return
    }

    if (type === MENU_TYPE_DEFAULT_PATH) {
      if (timeOutRef.current) {
        clearTimeout(timeOutRef.current)
      }
      timeOutRef = setTimeout(() => {
        const elementToScroll = document.getElementById(key)
        if (elementToScroll) {
          elementToScroll.scrollIntoView({ block: "start", inline: "start", behavior: 'smooth' })
        }
      }, 100) 
    }
  }

  return (
    <div className='bg-transparent h-hull w-full'>
      <div className='flex items-center justify-end space-x-10 text-[#515158]'>
        {
          navigationConfig.map(menu =>
            (
              <Link key={menu.key} className='text-center bg-transparent cursor-pointer' to={menu.path} onClick={() => handleClickMenu(menu.key, menu.type)}>
                <span className={`${currentKey === menu.key ? 'text-[#6BA425]' : 'text-[#515158]'} font-extrabold text-base h-full cursor-pointer hover:text-[#6BA425]`}>{menu.title}</span>
              </Link>
            )
          )
        }
      </div>
    </div>
  )
}

const MenuContent = props => {
  const { type } = props
  return type === NAV_TYPE_SIDE ? (
    <SideNavContent {...props} />
  ) : (
    <TopNavContent {...props} />
  )
}

export default memo(MenuContent)