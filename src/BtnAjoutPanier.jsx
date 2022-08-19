import { Badge } from '@mui/material';
import './BtnAjoutPanier.scss';


export default function BtnAjoutPanier(props) {
    return (
        <Badge badgeContent={0} color="success">
            <button className="BtnAjoutPanier">
                Ajouter au panier
            </button>
        </Badge>
    );
}