/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// import React, { useState } from "react";
// import SingleItem from "./singleitem/SingleItem";
// import useAuth from "../../hooks/useAuth";
// import { useLoaderData } from "react-router-dom";
// const CartDetails = () => {
//   const Data = useLoaderData();
//   const newData = Data.productCardDetails;

//   console.log(newData);
//   const [card, setCard] = useState(newData);
//   return (
//     <div>
//       <div className="mt-5">
//         <div className="grid grid-cols-2 gap-5 ">
//           {card?.map((dd) => (
//             <SingleItem
//               key={dd._id}
//               card={card}
//               setCard={setCard}
//               CardData={dd}
//             ></SingleItem>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartDetails;

// import React, { useState, useEffect } from "react";
// import SingleItem from "./singleitem/SingleItem";
// import useAuth from "../../hooks/useAuth";
// import { useLoaderData } from "react-router-dom";

// const CartDetails = () => {
//   const data = useLoaderData();
//   const productCardDetails = data.productCardDetails;
//   const [filteredCard, setFilteredCard] = useState([]);
//   console.log(productCardDetails);
//   const { user } = useAuth();
//   const selectedUid = user.uid;
//   console.log(selectedUid);
//     useEffect(() => {
//       if (productCardDetails && selectedUid) {
//         const filteredItems = productCardDetails.filter(
//           (item) => item.uid === selectedUid
//         );
//         setFilteredCard(filteredItems);
//       } else {
//         setFilteredCard([]);
//       }
//     }, [selectedUid, productCardDetails]);
//     console.log(filteredCard);
//   return (
//     <div>
//       <div className="mt-5">
//         <div className="grid grid-cols-2 gap-5 ">
//           {filteredCard?.map((item) => (
//             <SingleItem key={item._id} CardData={item}></SingleItem>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartDetails;

// import React, { useState, useEffect } from "react";
// import SingleItem from "./singleitem/SingleItem";
// import useAuth from "../../hooks/useAuth";
// import { useLoaderData } from "react-router-dom";

// const CartDetails = () => {
//   const data = useLoaderData();
//   const productCardDetails = data.productCardDetails;
//   const [filteredCard, setFilteredCard] = useState([]);
//   const [error, setError] = useState(null);

//   const { user } = useAuth();
//   const selectedUid = user.uid;

//   useEffect(() => {
//     // Ensure that you filter the data only if selectedUid is available
//     if (selectedUid) {
//       try {
//         const filteredItems = productCardDetails.filter(
//           (item) => item.loadedData.id === selectedUid
//         );
//         setFilteredCard(filteredItems);
//       } catch (error) {
//         setError("Error filtering data: " + error.message);
//       }
//     } else {
//       setFilteredCard([]);
//     }
//   }, [selectedUid, productCardDetails]); // Dependencies are correct

//   return (
//     <div>
//       <div className="mt-5">
//         {error ? (
//           <p>Error: {error}</p>
//         ) : (
//           <div className="grid grid-cols-2 gap-5">
//             {filteredCard?.map((item) => (
//               <SingleItem key={item._id} CardData={item}></SingleItem>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CartDetails;

// import React, { useState, useEffect } from "react";
// import SingleItem from "./singleitem/SingleItem";
// import useAuth from "../../hooks/useAuth";
// import { useLoaderData } from "react-router-dom";

// const CartDetails = () => {
//   const data = useLoaderData();
//   const productCardDetails = data.productCardDetails;
//   const [filteredCard, setFilteredCard] = useState([]);
//   const [error, setError] = useState(null);
//   const { user } = useAuth();
//   const selectedUid = user.uid;
//   //   console.log(selectedUid);
//   useEffect(() => {
//     if (selectedUid) {
//       try {
//         const filteredItems = productCardDetails.filter(
//           (item) => item.id === selectedUid
//         );
//         setFilteredCard(filteredItems);
//       } catch (error) {
//         setError("Error filtering data: " + error.message);
//       }
//     } else {
//       setFilteredCard([]);
//     }
//   }, [selectedUid, productCardDetails]); // Dependencies are correct

//   return (
//     <div>
//       <div className="mt-5">
//         {error ? (
//           <p>Error: {error}</p>
//         ) : (
//           <div className="grid grid-cols-2 gap-5">
//             {filteredCard?.map((item) => (
//               <SingleItem key={item._id} CardData={item}></SingleItem>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CartDetails;

import React, { useState, useEffect } from "react";
import SingleItem from "./singleitem/SingleItem";
import useAuth from "../../hooks/useAuth";
import { useLoaderData } from "react-router-dom";

const CartDetails = () => {
  const data = useLoaderData();
  const productCardDetails = data.productCardDetails;
  const [filteredCard, setFilteredCard] = useState([]);
  const [error, setError] = useState(null);
  const { user } = useAuth();
  const selectedUid = user.uid;

  useEffect(() => {
    if (selectedUid) {
      try {
        const filteredItems = productCardDetails.filter(
          (item) => item.id === selectedUid
        );
        setFilteredCard(filteredItems);
      } catch (error) {
        setError("Error filtering data: " + error.message);
      }
    } else {
      setFilteredCard([]);
    }
  }, [selectedUid, productCardDetails]);

  const handleDelete = (deleteId) => {
    const updatedCard = filteredCard.filter((item) => item._id !== deleteId);
    setFilteredCard(updatedCard);
  };

  return (
    <div>
      <div className="mt-5">
        {error ? (
          <p>Error: {error}</p>
        ) : (
          <div className="grid grid-cols-2 gap-5">
            {filteredCard?.map((item) => (
              <SingleItem
                key={item._id}
                CardData={item}
                onDelete={handleDelete} // Pass the delete function as a prop
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDetails;
