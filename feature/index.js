import { useContext, useEffect } from 'react';
import { AppContext } from '../contex';
import TodoFeature from './todo';
import AccessDenied from '../components/accessDenied';
import AuthHook from './auth';
import LoadingSpinner from '../components/loader';

const FeatureWrapComp = () => {
    const { isAuthorize , isLoading } = useContext(AppContext); // get context value
    const { authenticateFunc } = AuthHook(); // Custom Auth hook
    useEffect(() => {
      authenticateFunc();
    }, []);
    return (
      isLoading ? <LoadingSpinner /> :
        isAuthorize ?
            <TodoFeature />
            :
            <AccessDenied />

    );
}
export default FeatureWrapComp;