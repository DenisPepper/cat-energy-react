import {Header} from "../../components/header/header";
import {Title} from "../../components/title/title";
import {Catalog} from "../../components/catalog/catalog";

export const CatalogPage = () => {
    return (
        <>
            <Header/>
            <Title text={'Каталог продукции'} mode={"h1"}/>
            <Catalog/>
        </>
    );
}
