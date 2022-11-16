import React from 'react';
import { restaurants } from '../../data/restaurants';
import ExploreSection from '../common/exploreSection';
import Filters from '../common/filters';
import "./delivery.css";
import DeliveryColletions from './deliveryCollections';
import TopBrands from './topBrands';



const deliveryFilters=[
  {
    id: 1,
    icon: <i class="fa-solid fa-sliders absolute-center"></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating 4.0+",
  },
  {
    id: 3,
    title: "Safe and Hygienic",
  },
  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    title: "Delivery Time",
    icon: <i class="fa-solid fa-up-down absolute-center"></i>,
  },
  {
    id: 6,
    title: "Great Offers",
  },
];
const restaurantList= restaurants;
const Delivery = () => {
  return (
    <div>
      <div className='max-width'>
        <Filters filterList={deliveryFilters}/>
      </div>
      <DeliveryColletions />
      <TopBrands />
      <ExploreSection restaurants={restaurantList} collectionName='Delivery Restaurants in Lucknow'/>
    </div>
  );
};

export default Delivery;