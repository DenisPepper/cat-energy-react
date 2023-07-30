interface TitleProps {
    mode: 'h1' | 'h2' | 'h3';
    text: string;
    isHidden?: boolean;
}

export const Title = (props: TitleProps) => {
    const {mode, text, isHidden = false} = props;
    const cls = isHidden ? 'visually-hidden' : '';

    if (mode === 'h1') {
        return <h1 className={cls}>{text}</h1>;
    }

    if (mode === 'h2') {
        return <h2 className={cls}>{text}</h2>;
    }

    if (mode === 'h3') {
        return <h3 className={cls}>{text}</h3>;
    }

    return null;
}
