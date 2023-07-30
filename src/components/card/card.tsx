import {Button} from "../button/button";

export type Taste = 'Курица' | 'Рыба' | 'Гречка' | 'Рис';

export interface Card {
    title: string;
    image: string;
    weight: number;
    taste: Taste;
    price: number;
}

export interface CardProps {
    card: Card;
}

export const Card = (props: CardProps) => {
    const {card: {title, image, weight, taste, price}} = props;

    return (
        <li className={'product__item'}>
            <article className="card">
                <h3 className="card__title">{title}</h3>
                <div className="card__image-wrapper">
                    <img
                        className="card__image"
                        src={image}
                        alt={title}
                        aria-hidden="true"
                    />
                </div>
                <dl className={'card__features'}>
                    <dt>Масса</dt>
                    <dd>{weight}</dd>

                    <dt>Вкус</dt>
                    <dd>{taste}</dd>

                    <dt>Цена</dt>
                    <dd>{price}</dd>
                </dl>
                <Button text={'Заказать'} type='button'/>
            </article>
        </li>
    );
}
