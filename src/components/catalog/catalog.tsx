import {additions, cards} from "../../settings";
import {Card} from "../card/card";
import {Title} from "../title/title";
import {Addition} from "../addition/addition";

export const Catalog = () => {
    return (
        <section className="catalog">
            <Title mode={"h2"} text='Список товаров.'/>
            <ul className={'cards'}>
                {cards.map((card) => <Card key={card.image} card={card}/>)}
            </ul>
            <Title mode={"h2"} text='Список сопутствующих товаров.'/>
            <ul className={'related-cards'}>
                {additions.map((add) => <Addition key={add.title} addition={add} />)}
            </ul>
        </section>
    );
}
