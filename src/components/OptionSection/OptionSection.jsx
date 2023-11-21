import React from 'react'
//import PropTypes from 'prop-types'
import SizesBlock from './SizesBlock.jsx/SizesBlock';
import SelectEdges from './SelectEdges/SelectEdges';

const OptionSection = props => {
  return (
    <section className="option">
      <div className="modal-window">
        <form action="" className="item-sizes-form">
          <SizesBlock/>
          <SelectEdges />
          {/* <div className="pattern-rotation">
            <h4>Обертання текстури</h4>
            <img src="./napr-vl.jpg" alt="" srcset="" width="100px" />
          </div>
          <div className="comment">
            <h4>Залиште свій коментар щодо замовлення:</h4>
            <textarea name="comment" id="" cols="30" rows="10"></textarea>
          </div>
          <button type="submit">Відправити до корзини</button> */}
        </form>
      </div>
    </section>
  );
}

OptionSection.propTypes = {}

export default OptionSection