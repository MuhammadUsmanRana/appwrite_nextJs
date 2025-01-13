export type HeaderLargeProps = {
    children: React.ReactNode;
    color?: string;
    padding?: string;
    lineHeight?: string;
    fontFamily?: string;
    textAlign?: string;
    fontSize?: string;
};

export type HeaderMediumProps = {
    children: React.ReactNode;
    color?: string;
    padding?: string;
    lineHeight?: string;
    fontFamily?: string;
    textAlign?: string;
};

export type HeaderSmallProps = {
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