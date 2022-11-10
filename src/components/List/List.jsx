import { useEffect, useState } from "react";
import React from 'react'
import './List.scss';

function List({className, items = [], type}) {

  const [features, setFeatures] = useState([])

  useEffect(() => {
    const setAvaliableItems = (features, type) => {
      return features.map( feature => {
        return (
          {
            name : feature.name,
            available: feature.available.includes(type)
          }
        )
      })
    }
    setFeatures(setAvaliableItems(items, type));
  }, [items, type])

  return (
    <ul className={className}>
      {
        features.map( (feature, index) => {
          return(
            <li 
            key={`${JSON.stringify(feature.name)}-${index}`} 
            className={feature.available ? null : 'unavailable'}
            >
              {feature.name}
            </li>
          )
        })
      }
    </ul>
  )
}

export default List