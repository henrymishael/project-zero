
import special from '/public/special.png'
import jollof from '/public/jollof.png'
import beans from '/public/whiterice.png'

import React from 'react'


  


const foodList = {
    foodItems: [
    {
        id: '1',
        slug: 'basmatic',
        image : special,
        name: 'Basmatic Fried Rice and Turkey',
        price : '₦3,000',
        rating : '⭐⭐⭐⭐⭐',
        info : 'Lorem ipsum dolor sit amet      consectetur adipisicing elit. Natus  laborum quis ut! Qui animi quaerat   voluptates! Corporis itaque vitae     laudantium in, porro accusamus hic,     saepe quod explicabo voluptatum rerum   nisi.'
    },
    {
        id : '2',
        slug: 'Jollof',
        image : jollof,
        name : 'Jollof Rice and Chicken',
        price : '₦2,500',
        rating : '⭐⭐⭐',
        info : 'Lorem ipsum dolor sit amet      consectetur adipisicing elit. Natus  laborum quis ut! Qui animi quaerat   voluptates! Corporis itaque vitae     laudantium in, porro accusamus hic,     saepe quod explicabo voluptatum rerum   nisi.'  
    },
    {
        id : '3',
        slug : 'beans',
        image : beans,
        name: 'Rice and Beans',
        price : '₦2,000',
        rating : '⭐⭐⭐⭐',
        info : 'Lorem ipsum dolor sit amet      consectetur adipisicing elit. Natus  laborum quis ut! Qui animi quaerat   voluptates! Corporis itaque vitae     laudantium in, porro accusamus hic,     saepe quod explicabo voluptatum rerum   nisi.'
    },

]


}

export default foodList