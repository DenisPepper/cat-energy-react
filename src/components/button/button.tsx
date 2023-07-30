interface ButtonProps {
    text: string;
    type: 'submit' | 'reset' | 'button'
}

export const Button = (props: ButtonProps) => {
    const {text, type} = props;

    return (
        <button className='button' type={type}>
            {text}
        </button>
    );
}
