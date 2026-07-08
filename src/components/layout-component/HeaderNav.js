import { useState, memo } from "react";
import { Layout, Button } from "antd";
import BFMSLogo from "assets/images/LOGO_BLA.V1.png";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons"
import { connect } from "react-redux";
import { toggleMobileNav, setKey } from 'core/redux';
import { NAV_TYPE_TOP } from "constants/NavType";
import MenuContent from "./MenuContent";

const { Header } = Layout;

export const HeaderNav = (props) => {
    const { isMobile, mobileNavStatus, toggleMobileNav, setKey } = props
    const [navCollapsed, setNavCollapsed] = useState(false)

    const mobileNavToggle = () => {
        setNavCollapsed(!navCollapsed);
        toggleMobileNav(!mobileNavStatus);
    }

    const handleContact = () => {    
        const elementToScroll = document.getElementById('contact')
        if (elementToScroll) {
          document.getElementById('contact').scrollIntoView({ block: "start", inline: "start", behavior: 'smooth' })
          setKey('contact')
        }
      }

    return (
        <Header style={{ backgroundColor: "white", height: "100px", padding: 0, position: 'fixed', top: 0, width:'100%', zIndex: '100' }}>
            <div className="h-full flex items-center justify-between px-4 md:px-7 lg:px-12 2xl:px-56">
                <div className="h-[60px] flex items-center justify-start">
                    <img className="w-[144px] h-[80px] object-cover" src={BFMSLogo} alt="BFMS_logo" />
                    <div className="text-[32px] font-[800] text-[#91C839] leading-none ml-[16px]">
                        BFMS
                    </div>
                </div>
                {!isMobile ? (
                    <div className="w-full h-full flex items-center justify-end">
                        <MenuContent type={NAV_TYPE_TOP} {...props} />
                        <button
                            type="button"
                            className="w-[122px] h-[50px] text-white rounded-xl bg-[#6ba425] ml-12 hover:bg-[#609321]"
                            onClick={handleContact}
                        >
                            <div className="text-[15px] font-[700] text-white leading-none tracking-wide">
                                Liên hệ
                            </div>
                        </button>
                    </div>
                ) : (
                    <Button style={{ border: 'none', boxShadow: 'none' }} shape="circle" onClick={mobileNavToggle} icon={navCollapsed ? <MenuUnfoldOutlined style={{ fontSize: '1.25rem', color: '#81B82F' }} /> : <MenuFoldOutlined style={{ fontSize: '1.25rem', color: '#81B82F' }} />} />
                )}
            </div>
        </Header>
    );
};

const mapStateToProps = (state, ownProps) => {
    const { isMobile } = ownProps
    return {
        mobileNavStatus: state.mobileNav.mobileNavStatus,
        currentKey: state.itemNavSelect.currentKey,
        isMobile
    }
}

export default connect(mapStateToProps, { toggleMobileNav, setKey })(memo(HeaderNav));
