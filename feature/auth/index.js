import * as LocalAuthentication from 'expo-local-authentication';
import { useContext } from 'react';
import { AppContext } from '../../contex';
import { alertFunc } from '../../components/alertComp';

const AuthHook = () => {
  const { setIsAuthorize , setIsLoading } = useContext(AppContext);
  const authenticateFunc = async () =>{
    try{
      const checkAuthOption = await  LocalAuthentication.supportedAuthenticationTypesAsync();
      if(checkAuthOption && checkAuthOption[0] === 1 || checkAuthOption[0] === 2 ){

        const result = await LocalAuthentication.authenticateAsync();
        setIsAuthorize(result.success);
        setIsLoading(false)
        !result.success && alertFunc(result.error, 'Device Passwoard option not activated');
        return result.success;
      }
      alertFunc('Alert', `Device not support this feature.`)
      return false
    }catch(error){
      setIsAuthorize(false);
      setIsLoading(false)
      alertFunc('Alert', `Something went wrong`)
    }
  }
  

  return {authenticateFunc};
}
export default AuthHook;