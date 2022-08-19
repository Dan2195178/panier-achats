import './ListeProduits.scss';
import Produit from './Produit';
import tabProduits from './data/produits.json';

export default function ListeProduits(props) {
    // console.log('Tableau des produits : ', tabProduits);
    return (
        <main className="ListeProduits">
            <h2>Produits disponibles</h2>
            <section>
                {/* <Produit id="prd001" nom='T-Shirt rayé noir et blanc' prix='25.99'/>
                <Produit id="prd002" nom='Pantalon en cotton' prix='37.99'/> */}
                {tabProduits.map(
                    prd => <Produit id={prd.id} nom={prd.nom} prix={prd.prix}/>
                    )}
            </section>
        </main>

    );
}