import {Button} from "../button/button";

export interface Addition {
    title: string;
    unit: string;
    price: number;
}

export interface AdditionProps {
    addition: Addition;
}

export const Addition = (props: AdditionProps) => {
    const {addition: {title, unit, price}} = props;

    return (
        <li className={'related__item'}>
            <article className="addition">
                <h3 className="addition__title">{title}</h3>
                <p className='addition__unit'>{unit}</p>
                <p className='addition__price'>{price}</p>
                <Button text={'Заказать'} type='button'/>
            </article>
        </li>
    );
}
