import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurantMenu";

const RestraurntMenu = () => {
  const { id } = useParams();

  console.log({ id });

  const restaurant = useRestaurant(id);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div>
      <div>
        <h1>Restaurant id : {id}</h1>
        <h2>{restaurant.cards?.[0]?.card?.card?.text}</h2>
        <img
          src={
            IMG_CDN_URL +
            restaurant?.cards?.[2]?.card?.card?.info?.cloudinaryImageId
          }
        />
        <h3>{restaurant?.cards?.[2]?.card?.card?.info?.areaName}</h3>
        <h3>{restaurant?.cards?.[2]?.card?.card?.info?.city}</h3>
        <h3>{restaurant?.cards?.[2]?.card?.card?.info?.avgRating}</h3>
        <h3>{restaurant?.cards?.[2]?.card?.card?.info?.costForTwoMessage}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {restaurant?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map(
            (card) => {
              return card?.card?.card?.title ? (
                <ul>
                  <li>
                    {card.card.card.title}

                    {card?.card?.card.itemCards &&
                      card?.card?.card.itemCards.length > 0 && (
                        <ul>
                          {card?.card?.card.itemCards.map((item) => {
                            return <li>{item.card.info.name}</li>;
                          })}
                        </ul>
                      )}
                  </li>
                </ul>
              ) : null;
            }
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestraurntMenu;
