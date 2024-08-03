import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import "../../../css/home.css";

import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setPopularDishes, setTopUsers } from "./slice";
import { Product } from "../../../lib/types/product";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";
import MemberService from "../../services/MemberService";

// redux slice & selector
const actionDispatch = (dispatch: Dispatch) =>({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
});


export default function HomePage() {
  const { setPopularDishes } = actionDispatch(useDispatch());
   // selector:store =>data

  useEffect(() => {
    // backend server data fetch =>data
    const product = new ProductService();
    product.getProducts({
      page: 1,
      limit: 4,
      order: "productViews",
      productCollection: ProductCollection.DISH,
    })
      .then((data) => {
      setPopularDishes(data);
      })
      .catch((err) => console.log(err));
    
     const member = new MemberService();
			member
				.getTopUsers()
				.then((data) => setTopUsers(data))
				.catch((err) => console.log(err));
  }, [])
  
  console.log("popularDishes:", PopularDishes);
  
	return (
		<div className={"homepage"}>
			<Statistics />
			<PopularDishes />
			<NewDishes />
			<Advertisement />
			<ActiveUsers />
			<Events />
		</div>
	);
}
