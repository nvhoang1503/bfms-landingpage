import { Spin } from 'antd';
import PropTypes from 'prop-types';
import BFMSLogo from 'assets/images/LOGO_BLA.V1.png'
import './Loading.scss';

const Loading = (props) => {
    const { cover } = props

    if (cover === 'page') document.getElementById('root').style.height = '100vh'
    
    return (
        <div className='h-full flex items-center justify-center'>
            <div className='flex flex-col items-center justify-center'>
                <Spin size="large" />
                <div className='flex items-center justify-center mt-5 logo-splash'>
                    <img src={BFMSLogo} alt="BFMS_Logo" className='mx-2 h-[100px] w-[150px] object-fill' />
                </div>
            </div>
        </div>
    )
}

Loading.propTypes = {
    cover: PropTypes.string
}

Loading.defaultProps = {
    cover: 'page'
};

export default Loading