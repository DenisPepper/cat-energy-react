import {Header} from "../../components/header/header";
import {Title} from "../../components/title/title";
import {Catalog} from "../../components/catalog/catalog";
import {Footer} from "../../components/footer/footer";

export const CatalogPage = () => {
    return (
        <>
            <Header/>
            <main>
                <Title text={'Каталог продукции'} mode={"h1"}/>
                <Catalog/>
            </main>
            <Footer/>
        </>
    );
}
