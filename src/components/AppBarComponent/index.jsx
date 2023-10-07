import { AppBar } from "./style"
import { FaSearch } from "react-icons/fa"

export const AppBarComponent = props => {

    return (
        <AppBar>
            <div>
                Ecommerce
            </div>
            <div className="search">
                <FaSearch></FaSearch>
                <input type="text" placeholder="buscar produto..."/>
            </div>
            <ul>
                <li>Item de menu</li>
                <li>Item de menu</li>
                <li>Item de menu</li>
                <img src="https://cdn.icon-icons.com/icons2/2468/PNG/512/user_kids_avatar_user_profile_icon_149314.png"/>
            </ul>
        </AppBar>
    )
}