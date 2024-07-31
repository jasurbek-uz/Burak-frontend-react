import NewDishes from "../../app/screens/homePage/NewDishes";
import { Member } from "./member";
import { Product } from "./product";

/* REACT APP STATE*/
export interface AppRootState {
	homePage: HomePageState;
}

export interface HomePageState {
	popularDishes: Product[];
	newDishes: Product[];
	topUsers: Member[];
}