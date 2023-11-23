import React, { useEffect, useState } from 'react';
//import PropTypes from 'prop-types'

const SizesBlock = props => {
  const [customItemWidth, setCustomItemWidth] = useState(null);
  const [customItemHeight, setCustomItemHeight] = useState(null);
  const [customItemPrice, setCustomItemPrice] = useState(null);
  const [amountOfPieces, setAmountOfPieces] = useState(null);
  const [totalPrice, setTotalPrice] = useState(null);
  const [totalAmountOfCustomParticles, setTotalAmountOfCustomParticles] =
    useState(null);
  const [possibleAmountOfCustomParticles, setPossibleAmountOfCustomParticles] =
    useState(null);

  const price = 1252.35;

  useEffect(() => {
    // Check if both customItemHeight and customItemWidth have values
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
  }, [customItemHeight, customItemWidth]);

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
      const total = possibleAmountOfCustomParticles * price;
      setTotalPrice(total);
    }
  }, [possibleAmountOfCustomParticles, price]);

  const handleChangeInput = ({ target }) => {
    if (target.name === 'width') {
      if (target.value < 0 || target.value > 2070) {
        alert('Check the size!');
      } else {
        setCustomItemWidth(target.value);
      }
    }

    if (target.name === 'height') {
      if (target.value < 0 || target.value > 2620) {
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

  const calculateAmountOfCuttingPieces = (height, width) => {
    const startSquare = 2620 * 2070;
    const customSquare = height * width;
    const amountOfCuttingPieces = Math.floor(startSquare / customSquare);
    return amountOfCuttingPieces;
  };

  function calculatePriceForPiece(price, amount) {
    const priceForPiece = Math.round(price / amount);
    return priceForPiece;
  }

  return (
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
            Max: <span>2440 mm</span>
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
            Max: <span>2440 mm</span>
          </p>
        </li>
      </ul>
      <p>
        Загальна кількість потрібних деталей:{' '}
        <input
          onChange={handleChangeInputTotalAmount}
          type="number"
          name="total-amount"
        />{' '}
        шт.
      </p>
      <p>
        Кількість листів з порізки одного листа:
        <span className="cut_piece">{amountOfPieces ? amountOfPieces : 0}</span>
        шт.
      </p>
      <p>
        Ціна за 1 вирізаний лист:{' '}
        <span> {customItemPrice ? customItemPrice : 0} </span>грн
      </p>

      <p>
        Загальна кількість листів для порізки{' '}
        <span>
          {possibleAmountOfCustomParticles
            ? possibleAmountOfCustomParticles
            : 0}
        </span>{' '}
        шт. i їх загальна вартість <span> {totalPrice ? totalPrice : 0}</span>
        грн
      </p>
    </div>
  );
};

// SizesBlock.propTypes = {}

export default SizesBlock;
