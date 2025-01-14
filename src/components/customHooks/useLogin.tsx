import { createAccountProps, RootState } from "@/types/typs";
import authAppwriteServices from "../config/authAppwriteServices";
import { useSelector } from "react-redux";

const useLogin = () => {
    const storeActions = useSelector((state: RootState) => state.auth);
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
            if (response) {
                return response;
            } else {
                throw new Error('User account not created');
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