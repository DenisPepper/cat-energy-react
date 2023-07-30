import {additions, cards} from "../../settings";
import {Card} from "../card/card";
import {Title} from "../title/title";
import {Addition} from "../addition/addition";

export const Catalog = () => {
    return (
        <>
            <section className='products'>
                <Title mode={"h2"} text='Список товаров.'/>
                <ul className={'products__list'}>
                    {cards.map((card) => <Card key={card.image} card={card}/>)}
                </ul>
            </section>
            <section className='related-products'>
                <Title mode={"h2"} text='Список сопутствующих товаров.'/>
                <ul className={'related-products__list'}>
                    {additions.map((add) => <Addition key={add.title} addition={add}/>)}
                </ul>
            </section>
        </>
    );
}
