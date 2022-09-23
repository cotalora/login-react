import { 
    FacebookAuthProvider, 
    GoogleAuthProvider, 
    signInWithEmailAndPassword, 
    signInWithPopup, 
    updateProfile 
} from "firebase/auth";
import { ILoginInWithAny } from "../interfaces";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        const { displayName, email, photoURL, uid } = result.user;

        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid,
            accessToken: await result.user.getIdToken()
        }

    } catch ({ code, message }: any) {
        const errorCode = code;
        const errorMessage = message;

        return {
            ok: false,
            errorCode,
            errorMessage
        }
    }
}

export const signInWithFacebook = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth, facebookProvider);
        const { displayName, email, photoURL, uid } = result.user;

        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }
    } catch ({ code, message }: any) {
        const errorCode = code;
        const errorMessage = message;

        return {
            ok: false,
            errorCode,
            errorMessage
        }
    }
}

export const loginInWithEmailPassword = async ({ email, password }: ILoginInWithAny) => {
    try {
        const result = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL, displayName } = result.user;

        FirebaseAuth.currentUser &&
            await updateProfile(FirebaseAuth.currentUser, { displayName });

        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid,
            accessToken: await result.user.getIdToken()
        }

    } catch ({ code, message }: any) {
        const errorCode = code;
        const errorMessage = message;

        return {
            ok: false,
            errorCode,
            errorMessage
        }
    }
}

export const logoutFirebase = async () => {
    return await FirebaseAuth.signOut();
}