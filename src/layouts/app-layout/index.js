import { Layout, Grid } from "antd";
import utils from "core/utils";
import AppViews from "views/app-views";
import HeaderNav from "components/layout-component/HeaderNav";
import Footer from "components/layout-component/Footer";
import MobileNav from "../../components/layout-component/MobileNav";
import Scrollbars from "react-custom-scrollbars-2";
import { useRef, useEffect } from "react";
import TriangleSvg from "assets/svg/BackToTop/TriangleSvg";
import { connect } from "react-redux";
import { setKey, setScreens } from "core/redux";
import { memo } from "react";

const { Content } = Layout;
const { useBreakpoint } = Grid;

export const AppLayout = props => {
    const { setKey, setScreens } = props

    const screens = utils.getBreakPoint(useBreakpoint());
    const isMobile = screens.length === 0 ? false : !screens.includes("xxl")

    const scrollbars = useRef()
    const currentKey = useRef('overview')

    useEffect(() => {
        setScreens(screens)
    }, [screens, setScreens])

    const scrollBackToTop = () => {
        scrollbars.current.scrollToTop()
        setKey('overview')
    }

    const onScrollStop = () => {
        if ((scrollbars.current.getValues().scrollTop <= document.getElementById('overview').clientHeight) && currentKey.current !== 'overview') {
            currentKey.current = 'overview'
            setKey('overview')
        }
        if ((scrollbars.current.getValues().scrollTop >= document.getElementById('overview').clientHeight) && currentKey.current !== 'plan') {
            currentKey.current = 'plan'
            setKey('plan')
        }
        if ((scrollbars.current.getValues().scrollTop >= document.getElementById('overview').clientHeight + document.getElementById('plan').clientHeight) && currentKey.current !== 'zone') {
            currentKey.current = 'zone'
            setKey('zone')
        }
        if ((scrollbars.current.getValues().scrollTop >= document.getElementById('overview').clientHeight + document.getElementById('plan').clientHeight + document.getElementById('zone').clientHeight) && currentKey.current !== 'report') {
            currentKey.current = 'report'
            setKey('report')
        }
        if ((scrollbars.current.getValues().scrollTop >= document.getElementById('overview').clientHeight + document.getElementById('plan').clientHeight + document.getElementById('zone').clientHeight + document.getElementById('report').clientHeight) && currentKey.current !== 'statistic') {
            currentKey.current = 'statistic'
            setKey('statistic')
        }
        if ((scrollbars.current.getValues().scrollTop >= document.getElementById('overview').clientHeight + document.getElementById('plan').clientHeight + document.getElementById('zone').clientHeight + document.getElementById('report').clientHeight + document.getElementById('statistic').clientHeight) && currentKey.current !== 'tracing') {
            currentKey.current = 'tracing'
            setKey('tracing')
        }
        if ((scrollbars.current.getValues().scrollTop >= document.getElementById('overview').clientHeight + document.getElementById('plan').clientHeight + document.getElementById('zone').clientHeight + document.getElementById('report').clientHeight + document.getElementById('statistic').clientHeight + document.getElementById('tracing').clientHeight) && currentKey.current !== 'contact') {
            currentKey.current = 'contact'
            setKey('contact')
        }
    }

    return (
        <>
            <Scrollbars autoHide ref={scrollbars} onScrollStop={onScrollStop} >
                <Layout>
                    <HeaderNav isMobile={isMobile} />
                    <Layout style={{ backgroundColor: "white" }}>
                        <Content style={{ marginTop: "100px" }}>
                            <AppViews />
                        </Content>
                        <Footer />
                    </Layout>
                    {isMobile && <MobileNav />}
                </Layout>
            </Scrollbars>
            <div className="absolute z-20 bottom-5 right-5">
                <button
                    type="button"
                    className="w-[50px] h-[50px] bg-[#81B82F] opacity-80 rounded-xl hover:bg-[#EEB916] flex items-center justify-center"
                    onClick={scrollBackToTop}
                >
                    <TriangleSvg />
                </button>
            </div>
        </>
    );
};

export default connect(null, { setKey, setScreens })(memo(AppLayout));
