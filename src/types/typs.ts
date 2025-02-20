export type HeadingLargeProps = {
    children: React.ReactNode;
    color?: string;
    padding?: string;
    lineHeight?: string;
    fontFamily?: string;
    textAlign?: string;
    fontSize?: string;
};

export type HeadingMediumProps = {
    children: React.ReactNode;
    color?: string;
    padding?: string;
    lineHeight?: string;
    fontFamily?: string;
    textAlign?: string;
};

export type HeadingSmallProps = {
    children: React.ReactNode;
    color?: string;
    padding?: string;
    lineHeight?: string;
    fontFamily?: string;
    textAlign?: string;
};

export type ParagraphMediumProps = {
    children: React.ReactNode;
    color?: string;
    padding?: string;
    lineHeight?: string;
    fontFamily?: string;
    textAlign?: string;
};

export type ParagraphSmallProps = {
    children: React.ReactNode;
    color?: string;
    padding?: string;
    lineHeight?: string;
    fontFamily?: string;
    textAlign?: string;
    justify?: string;
    margin?: string;
};

export type createAccountProps = {
    name: string,
    email: string,
    password: string
}

export type loginProps = {
    email: string,
    password: string
}

export type createPostProps = {
    title: string,
    content: string | null,
    image: string | null,
    status: string,
    userId: string
}

export type updatePostProps = {
    title: string,
    content: string | null,
    image: string | null,
    status: string,
    userId: string,
    postId: string
}

export interface AuthState {
    userData: {
        id: string;
        name: string;
        email: string;
        password: string;
        isAuthenticated: boolean;
        status: boolean;
    } | null;
    isLoggedIn: boolean;
    loading: boolean;
    isAuthenticated?: boolean;
}

export interface RootState {
    auth: AuthState;
}

export type MainContainerPrpos = {
    children: React.ReactNode;
    width?: string;
    height?: string;
    maxWidth?: string;
    maxHeight?: string;
    margin?: string;
    padding?: string;
    display?: string;
    flexDirection?: string;
    justifyContent?: string;
}

export type DropDownProps = {
    className?: string;
    padding?: string;
    label?: string;
    options?: [];
    value: string;
}

export type OptionProps = {
    value: string;
    label: string;
}

export type InputProps = {
    placeholder?: string;
    className?: string;
    padding?: string;
    name: string;
    type: string;
    label?: string;
    id?: string | undefined;
    value: string;
    error?: string | undefined | null | boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    touched?: boolean,
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export type PassworInputProps = {
    placeholder?: string;
    className?: string;
    padding?: string;
    name: string;
    id?: string | undefined;
    label?: string;
    type: string;
    value: string;
    error?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    touched?: boolean,
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export type LoginSignupButtonProps = {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    padding?: string;
    margin?: string;
    width?: string;
    height?: string;
    borderRadius?: string;
    boxShadow?: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    loading?: boolean;
}
