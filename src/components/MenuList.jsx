/* eslint-disable react/prop-types */


import MenuItem from './MenuItem';

function MenuList({ List }) {
     console.log(List);
    return (

        
        <>
            {List.map((plat, index) => (
                <MenuItem key={index}
                    itemName={plat.itemName}
                    description={plat.description}
                    foodImage={plat.foodImage}
                    price={plat.price}
                    isFavorite={plat.isFavorite}
                />)
            )}
        </>
    );
}

export default MenuList;