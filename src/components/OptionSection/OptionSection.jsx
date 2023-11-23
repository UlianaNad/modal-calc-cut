import React, { useEffect, useState } from 'react';
//import PropTypes from 'prop-types'
// import SizesBlock from './SizesBlock.jsx/SizesBlock';
import SelectEdges from './SelectEdges/SelectEdges';

const OptionSection = ({ products }) => {
  const [customItemWidth, setCustomItemWidth] = useState(null);
  const [customItemHeight, setCustomItemHeight] = useState(null);
  const [customItemPrice, setCustomItemPrice] = useState(null);
  const [amountOfPieces, setAmountOfPieces] = useState(null);
  const [totalPrice, setTotalPrice] = useState(null);
  const [totalAmountOfCustomParticles, setTotalAmountOfCustomParticles] =
    useState(null);
  const [possibleAmountOfCustomParticles, setPossibleAmountOfCustomParticles] =
    useState(null);
  const [customOptions, setCustomOptions] = useState(null);

  const price = products[0].offers.price;
  const itemWidth = products[0].dimensions.width;
  const itemHeight = products[0].dimensions.height;

  useEffect(() => {
    const calculateAmountOfCuttingPieces = (height, width) => {
      const startSquare = itemHeight * itemWidth;
      const customSquare = height * width;
      const amountOfCuttingPieces = Math.floor(startSquare / customSquare);
      return amountOfCuttingPieces;
    };
    if (
      customItemHeight &&
      customItemWidth &&
      customItemHeight > 0 &&
      customItemWidth > 0
    ) {
      setAmountOfPieces(
        calculateAmountOfCuttingPieces(customItemHeight, customItemWidth)
      );
    }
  }, [customItemHeight, customItemWidth, itemHeight, itemWidth]);

  useEffect(() => {
    // This runs after the amountOfPieces state has been updated
    if (amountOfPieces) {
      setCustomItemPrice(calculatePriceForPiece(price, amountOfPieces));
    }
  }, [amountOfPieces, price]);

  useEffect(() => {
    if (amountOfPieces && totalAmountOfCustomParticles) {
      const totalPossibleParts = Math.ceil(
        totalAmountOfCustomParticles / amountOfPieces
      );
      setPossibleAmountOfCustomParticles(totalPossibleParts);
    }
  }, [amountOfPieces, totalAmountOfCustomParticles]);

  useEffect(() => {
    if (possibleAmountOfCustomParticles) {
      const total = Math.ceil(possibleAmountOfCustomParticles * price);
      setTotalPrice(total);
    }
  }, [possibleAmountOfCustomParticles, price]);

  const handleChangeInput = ({ target }) => {
    if (target.name === 'width') {
      if (target.value < 0 || target.value > itemWidth) {
        alert('Check the size!');
      } else {
        setCustomItemWidth(target.value);
      }
    }

    if (target.name === 'height') {
      if (target.value < 0 || target.value > itemHeight) {
        alert('Write smaller size');
      } else {
        setCustomItemHeight(target.value);
      }
    }
  };

  const handleChangeInputTotalAmount = ({ target }) => {
    console.log(target.value);
    if (target.value) {
      setTotalAmountOfCustomParticles(Number(target.value));
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    setCustomOptions({
      ...customOptions,
      heightCut: customItemHeight,
      widthCut: customItemWidth,
      priceOfSinglePiece: customItemPrice,
      amountOfPieces: amountOfPieces,
      totalAmountOfCustomParticles: totalAmountOfCustomParticles,
      possibleAmountOfCustomParticles: possibleAmountOfCustomParticles,
    });
  };

  const handleSelectChange = data => {
    setCustomOptions({
      ...customOptions,
      edgeWidth: data,
    });
  };
  const handleInputCheckboxChange = data => {
    setCustomOptions({
      ...customOptions,
      edgeSides: data,
    });
  };
  function calculatePriceForPiece(price, amount) {
    const priceForPiece = Math.round(price / amount);
    return priceForPiece;
  }

  return (
    <section className="option">
      <div className="modal-window">
        <form onSubmit={handleSubmit} action="" className="item-sizes-form">
          {/* <SizesBlock/> */}
          <div className="item-sizes-block">
            <h4>Розміри:</h4>
            <ul>
              <li>
                <label className="width">
                  Ширина
                  <input
                    onChange={handleChangeInput}
                    type="number"
                    name="width"
                    id="width"
                    className="width"
                  />
                  <span className="input-group-dimension-addon">mm</span>
                </label>
                <p>
                  Max: <span>{itemWidth} mm</span>
                </p>
              </li>
              <li>
                <label className="height">
                  Висота
                  <input
                    onChange={handleChangeInput}
                    type="number"
                    name="height"
                    id="height"
                    className="height"
                  />
                  <span className="input-group-dimension-addon">mm</span>
                </label>
                <p>
                  Max: <span>{itemHeight} mm</span>
                </p>
              </li>
            </ul>
            <p>
              Загальна кількість потрібних деталей:
              <input
                onChange={handleChangeInputTotalAmount}
                type="number"
                name="total-amount"
              />
              шт.
            </p>
            <p>
              Кількість листів з порізки одного листа:
              <span className="cut_piece">
                {amountOfPieces ? amountOfPieces : 0}
              </span>
              шт.
            </p>
            <p>
              Ціна за 1 вирізаний лист:
              <span> {customItemPrice ? customItemPrice : 0} </span>грн
            </p>

            <p>
              Загальна кількість листів для порізки
              <span>
                {possibleAmountOfCustomParticles
                  ? possibleAmountOfCustomParticles
                  : 0}
              </span>
              шт. i їх загальна вартість
              <span> {totalPrice ? totalPrice : 0}</span>
              грн
            </p>
          </div>
          <SelectEdges handleSelectChange={handleSelectChange} handleInputCheckboxChange={handleInputCheckboxChange}/>
          {/* <div className="pattern-rotation">
            <h4>Обертання текстури</h4>
            <img src="./napr-vl.jpg" alt="" srcset="" width="100px" />
          </div>
          <div className="comment">
            <h4>Залиште свій коментар щодо замовлення:</h4>
            <textarea name="comment" id="" cols="30" rows="10"></textarea>
          </div> */}
          <button type="submit">Відправити до корзини</button>
        </form>
      </div>
    </section>
  );
};

OptionSection.propTypes = {};

export default OptionSection;
