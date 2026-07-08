import { useEffect, memo } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import LandingPage from './landing';
import Traceability from './traceability';
import TracingResult from "./traceability/Result";
import TracingScan from "./traceability/Scan";
import navigationConfig from "configs/NavigationConfig";
import { connect } from "react-redux";
import { setKey } from "core/redux";

export const AppViews = props => {
    const { currentKey, setKey } = props

    let location = useLocation()

    useEffect(() => {
        const path = location.pathname
        if (path && currentKey === navigationConfig[0].key) {
            const currentMenu = navigationConfig.find(v => v.path === path)
            if (currentMenu) setKey(currentMenu.key)
        }
    }, [location.pathname, currentKey, setKey])

    return (
        <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='traceability' element={<Traceability />}>
                <Route index element={<TracingScan />} />
                <Route path='result' element={<TracingResult />} />
                <Route path='*' element={<Navigate to='/traceability' replace={true} />} />
            </Route>
            <Route path='*' element={<Navigate to='/' replace={true} />} />
        </Routes>
    )
}

const mapStateToProps = state => {
    return {
      currentKey: state.itemNavSelect.currentKey
    }
}

export default connect(mapStateToProps, { setKey })(memo(AppViews))