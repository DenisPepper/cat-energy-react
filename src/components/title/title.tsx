interface TitleProps {
    mode: 'h1' | 'h2' | 'h3';
    text: string;
}

export const Title = (props: TitleProps) => {
    const {mode, text} = props;

    if (mode === 'h1') {
        return <h1>{text}</h1>;
    }

    if (mode === 'h2') {
        return <h2>{text}</h2>;
    }

    if (mode === 'h3') {
        return <h3>{text}</h3>;
    }

    return null;
}
