import Loadable from 'react-loadable'
import Loading from 'components/shared-component/Loading'
import pMinDelay from 'p-min-delay'

const LoadableComponent = Loadable({
    loader: () => pMinDelay(import('./app-loadable'), 2500),
    loading: Loading,
    delay: 2000,
    timeout: 10000
});

const Views = () => {
    return (
        <LoadableComponent />
    );
};

export default Views;
