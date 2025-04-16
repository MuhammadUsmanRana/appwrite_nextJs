import { createAccountProps, loginProps } from "@/types/typs";
import authAppwriteServices from "../config/authAppwriteServices";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { login } from "../store/authServices";


const useLogin = () => {
    const dispatch = useDispatch();


    const createAccount = async ({ name, email, password }: createAccountProps) => {
        try {
            console.log("🚀 ~ file: useLogin ~ createAccount ~ name, email, password", name, email, password)
            const data = await authAppwriteServices.createAccount({ name, email, password });
            console.log("🚀 ~ data ~ data:", data);
            if (!data) {
                throw new Error('Failed to create account');
            }
            return data;
        } catch (error: any) {
            console.error("🚀 ~ file: useLogin ~ line 12 ~ createAccount ~ error", error)
            throw error;
        }
    };

    const doLoginUser = async ({ email, password }: loginProps) => {
        try {
            const data = await authAppwriteServices.login({ email, password });
            console.log("🚀 ~ doLoginUser ~ data:", data);
            if (!data) {
                throw new Error('Failed to login');
            }
            return data;
        } catch (error: any) {
            console.error("🚀 ~ doLoginUser ~ error:", error);
            throw error;
        }
    }


    const doFetchCurrentUser = async () => {
        try {
            const response = await authAppwriteServices.getCurrentUser();
            // console.log("🚀 ~ doFetchCurrentUser ~ response:", response)
            if (response?.success === false) {
                throw new Error('User account not created');
            } else {
                dispatch(login({ user: response?.user }));
                Cookies.set("userId", response?.user?.$id ?? "", { expires: 2 });
                return response;
            }
        } catch (error) {
            console.error("🚀 ~ file: useLogin ~ doFethCurcrentUser ~ error", error);
        }
    }

    const doDeleteUser = async (userId: string) => {
        try {
            await authAppwriteServices.deleteAccount(userId);
            // router.push('/');
        } catch (error) {
            console.log("🚀 ~ file: useLogin ~ doDeleteUser ~ error", error);
        }
    };

    const doLogout = async () => {
        try {
            await authAppwriteServices.logout();
        } catch (error) {
            console.log("🚀 ~ file: useLogin ~ doLogout ~ error", error);
        }
    }


    return {
        createAccount,
        doLoginUser,
        doFetchCurrentUser,
        doDeleteUser,
        doLogout
    }
}

export default useLogin;