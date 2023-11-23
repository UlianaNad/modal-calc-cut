import React, { useEffect, useState } from 'react';
import { ChoiceWrap, FieldChoiceBottom, FieldChoiceLeft, FieldChoiceRight, FieldChoiceTop } from './EdgePriview.styled';

const EdgePreview = ({handleInputCheckboxChange}) => {
  const [checkedValues, setValue] = useState([]);


  useEffect(() => {
    window.localStorage.setItem("checkedValues", JSON.stringify(checkedValues))
   
    console.log(checkedValues);
  },[checkedValues, handleInputCheckboxChange]);
  

  const handleChange = ({ target }) => {
    const { value, checked } = target;
    setValue((prev) => {
      const updatedValues = checked
        ? [...prev, value]
        : prev.filter((choice) => choice !== value);
      handleInputCheckboxChange(updatedValues);
      return updatedValues;
    });
  };
  

  const renderCheckbox = (name, label) => (
    <>
      <input
        onChange={handleChange}
        className="validate-variable-product-one-required"
        type="checkbox"
        name={name}
        value={name}
      />
      <label htmlFor={`rounded_corners_${name}`}>
        <span>{label}</span>
      </label>
    </>
  );


  return (
    <div className="edge-preview">
      <label className="label">
        <span>Виберіть сторони для кромки:</span>
      </label>
      <div className="height-width-container">
        <div className="height-width">
          <div className="control">
            <ChoiceWrap>
              {[
                { name: 'top', label: 'Вгорі' },
                { name: 'left', label: 'Ліворуч' },
                { name: 'bottom', label: 'Внизу' },
                { name: 'right', label: 'Праворуч' },
             
              ].map(({ name, label }) => (
                <React.Fragment key={name}>
                  {name === 'top' && (
                    <FieldChoiceTop>{renderCheckbox(name, label)}</FieldChoiceTop>
                  )}
                  {name === 'left' && (
                    <FieldChoiceLeft>{renderCheckbox(name, label)}</FieldChoiceLeft>
                  )}
                  {name === 'right' && (
                    <FieldChoiceRight>{renderCheckbox(name, label)}</FieldChoiceRight>
                  )}
                   {name === 'bottom' && (
                    <FieldChoiceBottom>{renderCheckbox(name, label)}</FieldChoiceBottom>
                  )}
                  
                 
                </React.Fragment>
              ))}
            </ChoiceWrap>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EdgePreview;


// import React from 'react';
// import {
//   ChoiceWrap,
//   FieldChoiceBottom,
//   FieldChoiceLeft,
//   FieldChoiceRight,
//   FieldChoiceTop,
// } from './EdgePriview.styled';



// const EdgePreview = ({handleInputCheckboxChange}) => {
//   const handleInput = ({target}) =>{
//     if(target.name ===''){

//     }
//     if(target.name ===''){
      
//     }
//     if(target.name ===''){
      
//     }
//     if(target.name ===''){
      
//     }
//   }
//   return (
//     <div className="edge-preview">
//       <label className="label">
//         <span>Виберіть сторони для кромки:</span>
//       </label>
//       <div className="height-width-container">
//         <div className="height-width">
//           <span className="height">
//             <span className="arrows"></span>
//             <span className="height-value">100 mm</span>
//           </span>
//           <span className="width">
//             <span className="arrows"></span>
//             <span className="width-value">50 mm</span>
//           </span>
//           <div className="control">
//             <ChoiceWrap onChange={handleInput}>
//               <FieldChoiceTop>
//                 <input
//                   className="validate-variable-product-one-required"
//                   type="checkbox"
//                   name="product_bottom_right"
//                   value="bottom_right"
//                 />
//                 <label className="rounded_corners_bottom_right">
//                   <span>Вгорі</span>
//                 </label>
//               </FieldChoiceTop>
//               <FieldChoiceLeft>
//                 <input
//                   className="validate-variable-product-one-required"
//                   type="checkbox"
//                   name="product_top_left"
//                   value="top_left"
//                 />
//                 <label className="rounded_corners_top_left">
//                   <span>Ліворуч</span>
//                 </label>
//               </FieldChoiceLeft>
//               <FieldChoiceRight>
//                 <input
//                   className="validate-variable-product-one-required"
//                   type="checkbox"
//                   name="product_top_right"
//                   value="top_right"
//                 />
//                 <label className="rounded_corners_top_right">
//                   <span>Праворуч</span>
//                 </label>
//               </FieldChoiceRight>
//               <FieldChoiceBottom>
//                 <input
//                   className="validate-variable-product-one-required"
//                   type="checkbox"
//                   name="product_bottom_left"
//                   value="bottom_left"
//                 />
//                 <label className="rounded_corners_bottom_left">
//                   <span>Внизу</span>
//                 </label>
//               </FieldChoiceBottom>
//             </ChoiceWrap>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EdgePreview;
