import { createAccountProps, RootState } from "@/types/typs";
import authAppwriteServices from "../config/authAppwriteServices";
import { useSelector } from "react-redux";

const useLogin = () => {
    const storeActions = useSelector((state: RootState) => state.auth);
    // console.log("🚀 ~ useLogin ~ storeActions:", storeActions)
    // const router = useRouter();


    const createAccount = ({ name, email, password }: createAccountProps) => {
        authAppwriteServices.createAccount({ name, email, password }).then(() => {
            return {
                name,
                email,
                password
            }
        }).catch((error) => {
            console.log("🚀 ~ file: useLogin ~ line 12 ~ createAccount ~ error", error
            );
        });
    };

    const doFetchCurrentUser = async () => {
        try {
            const response = await authAppwriteServices.getCurrentUser();
            console.log("🚀 ~ doFetchCurrentUser ~ response:", response)
            if (!response) {
                throw new Error('User account not created');
            } else {
                return response;
            }
        } catch (error) {
            console.log("🚀 ~ file: useLogin ~ doFetchCurrentUser ~ error", error);
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
        doFetchCurrentUser,
        doDeleteUser,
        doLogout
    }
}

export default useLogin;