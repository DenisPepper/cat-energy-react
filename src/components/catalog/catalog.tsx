import {cards} from "../../settings";
import {Card} from "../card/card";

export const Catalog = () => {
    return (
        <section className="catalog">
            <ul className={'cards'}>
                {cards.map((card) => <Card key={card.image} card={card}/>)}
            </ul>
        </section>
    );
}
