import React from 'react'
import { ChoiceWrap, FieldChoiceBottom, FieldChoiceLeft, FieldChoiceRight, FieldChoiceTop } from './EdgePriview.styled'

const EdgePreview = () => {
  return (
    <div className="edge-preview">
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
              <ChoiceWrap>
              <FieldChoiceTop>
                  <input
                    className="validate-variable-product-one-required"
                    type="checkbox"
                    name="product_bottom_right"
                    value="bottom_right"
                  />
                  <label for="rounded_corners_bottom_right">
                    <span>Вгорі</span>
                  </label>
                </FieldChoiceTop>
                <FieldChoiceLeft>
                  <input
                    className="validate-variable-product-one-required"
                    type="checkbox"
                    name="product_top_left"
                    value="top_left"
                  />
                  <label for="rounded_corners_top_left">
                    <span>Ліворуч</span>
                  </label>
                </FieldChoiceLeft>
                <FieldChoiceRight>
                  <input
                    className="validate-variable-product-one-required"
                    type="checkbox"
                    name="product_top_right"
                    value="top_right"
                  />
                  <label for="rounded_corners_top_right">
                    <span>Праворуч</span>
                  </label>
                </FieldChoiceRight>
                <FieldChoiceBottom>
                  <input
                    className="validate-variable-product-one-required"
                    type="checkbox"
                    name="product_bottom_left"
                    value="bottom_left"
                  />
                  <label for="rounded_corners_bottom_left">
                    <span>Внизу</span>
                  </label>
                </FieldChoiceBottom>
                
              </ChoiceWrap>
            </div>
          </div>
        </div>
      </div>
  )
}

export default EdgePreview