export type Link =
    './index.html'
    | './catalog.html'
    | '#';

export type LinkName =
    'home'
    | 'catalog'
    | 'stub';

export const AppLink: Record<LinkName, Link> = {
    home: "./index.html",
    catalog: "./catalog.html",
    stub: "#",
} as const;

export const enum AppPath {
    Home = '/',
    Catalog = '/catalog',
    Dev = '/dev',
}
