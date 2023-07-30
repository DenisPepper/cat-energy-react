import {Card} from "./components/card/card";
import {Addition} from "./components/addition/addition";

export const cards: Card[] = [
    {
        title: 'Cat Energy PRO 500 г',
        image: './img/card-pro-500-chicken.png',
        weight: 500,
        taste: 'Курица',
        price: 700,
    },
    {
        title: 'Cat Energy PRO 1000 г',
        image: './img/card-pro-1000-chicken.png',
        weight: 1000,
        taste: "Курица",
        price: 1000,
    },
    {
        title: 'Cat Energy PRO 500 г',
        image: './img/card-pro-500-fish.png',
        weight: 500,
        taste: "Рыба",
        price: 700,
    },
    {
        title: 'Cat Energy PRO 1000 г',
        image: './img/card-pro-1000-fish.png',
        weight: 1000,
        taste: "Рыба",
        price: 1000,
    },
    {
        title: 'Cat Energy slim 500 г',
        image: './img/card-pro-500-buckwheat.png',
        weight: 500,
        taste: "Гречка",
        price: 400,
    },
    {
        title: 'Cat Energy slim 1000 г',
        image: './img/card-pro-1000-buckwheat.png',
        weight: 1000,
        taste: "Гречка",
        price: 700,
    },
    {
        title: 'Cat Energy slim 500 г',
        image: './img/card-pro-500-rice.png',
        weight: 500,
        taste: "Рис",
        price: 500,
    },
];

export const additions: Addition[] = [
    {title: 'Сахарозаменитель', unit: '1 упаковка (100 г)', price: 200},
    {title: 'питьевая вода', unit: '5 литров', price: 50},
    {title: 'молоко', unit: '1 литр', price: 100},
    {title: 'витамины', unit: '1 упаковка (30 г)', price: 300},
];
