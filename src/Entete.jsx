import './Entete.scss';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
//import { IconButton } from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export default function Entete(props) {
    // Code JS du composant
    const panier = props.panier;
    console.log("Panier dans Entete", panier);

//     let test = {
//         nom: "Martin",
//         age:25
//     }
//    console.log("Les valeurs dans un objet : ", Object.values(test));

    // Renvoyer le "rendu" visuel du composant
    return (
        <header className='Entete'>
            <h2>Magasin</h2>
            <nav>
                <ul>
                    <li>mon compte</li>
                    {/* <li>panier</li> */}
                    <li>
                        <Badge badgeContent={Object.values(panier).length} color="primary">
                            <ShoppingCartIcon />
                        </Badge>
                        
                    </li>
                </ul>
            </nav>
        </header>
    );

}


