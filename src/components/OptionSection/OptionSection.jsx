import React from 'react'
import PropTypes from 'prop-types'
import SizesBlock from './SizesBlock.jsx/SizesBlock';

const OptionSection = props => {
  return (
    <section className="option">
      <div className="modal-window">
        <form action="" className="item-sizes-form">
          <SizesBlock/>
          {/* <div className="edge-block">
            <h4>Кромка</h4>
            <button type="button">Так</button>
            <button type="button">Ні</button>
            <div className="edge-preview">
              <div className="field position">
                <label for="edge-width">Вибрати ширину кромки:</label>
                <select name="edge-width" id="edge-width">
                  <option value="22*0.6">22*0.6 </option>
                  <option value="22*2">22*2</option>
                  <option value="42*2">42*2</option>
                </select>
                <label className="label">
                  <span>Виберіть сторони для кромки:</span>
                </label>
                <div className="height-width-container">
                  <div className="height-width">
                    <span className="height">
                      <span className="arrows"></span>
                      <span className="height-value">100 mm</span>
                    </span>
                    <span className="width">
                      <span className="arrows"></span>
                      <span className="width-value">50 mm</span>
                    </span>
                    <div className="control">
                      <div className="options-list" id="rounded_corners_position">
                        <div className="field choice">
                          <input
                            className="validate-variable-product-one-required"
                            type="checkbox"
                            name="product_top_left"
                            value="top_left"
                          />
                          <label for="rounded_corners_top_left">
                            <span>Ліворуч</span>
                          </label>
                        </div>
                        <div className="field choice">
                          <input
                            className="validate-variable-product-one-required"
                            type="checkbox"
                            name="product_top_right"
                            value="top_right"
                          />
                          <label for="rounded_corners_top_right">
                            <span>Праворуч</span>
                          </label>
                        </div>
                        <div className="field choice">
                          <input
                            className="validate-variable-product-one-required"
                            type="checkbox"
                            name="product_bottom_left"
                            value="bottom_left"
                          />
                          <label for="rounded_corners_bottom_left">
                            <span>Внизу</span>
                          </label>
                        </div>
                        <div className="field choice">
                          <input
                            className="validate-variable-product-one-required"
                            type="checkbox"
                            name="product_bottom_right"
                            value="bottom_right"
                          />
                          <label for="rounded_corners_bottom_right">
                            <span>Вгорі</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          {/* </div> */}
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