import { createContext,useContext,useEffect,useReducer } from "react";

const initialState = {
    user: localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : null,
    role: localStorage.getItem("role")
        ? JSON.parse(localStorage.getItem("role"))
        : null,
    token: localStorage.getItem("token")
        ? JSON.parse(localStorage.getItem("token"))
        : null,
}

export const authContext = createContext(initialState);
const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return { user: null, role: null, token: null };
        case "LOGIN_SUCCESS":
            return {
                user: action.payload.user,
                role: action.payload.role,
                token: action.payload.token,
            };
        case "LOGOUT":
            return {
                user: null,
                role: null,
                token: null,
            };
        default:
            return state;
    }
};

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user));
        localStorage.setItem("role", JSON.stringify(state.role));
        localStorage.setItem("token", JSON.stringify(state.token));
    },[state])
return (
        <authContext.Provider value={{ user: state.user, role: state.role, token: state.token, dispatch }}>
            {children}
        </authContext.Provider>
    );
}