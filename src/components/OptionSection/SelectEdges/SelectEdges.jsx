import React, { useState } from 'react';
import EdgePreview from './EdgePreview/EdgePreview';

const SelectEdges = () => {
  const [toggleEdgeBlock, setToggleEdgeBlock] = useState(false);

  const handleOpenEdgeBlock = () => {
    setToggleEdgeBlock(true);
  };
  const handleCloseEdgeBlock = () => {
    setToggleEdgeBlock(false);
  };

  return (
    <div className="edge-block">
      <h4>Кромка</h4>
      <button type="button" onClick={handleOpenEdgeBlock}>
        Так
      </button>
      <button type="button" onClick={handleCloseEdgeBlock}>
        Ні
      </button>
      {toggleEdgeBlock ? (
        <div>
          <EdgePreview />
          <div className="field position">
            <label for="edge-width">Вибрати ширину кромки:</label>
            <select name="edge-width" id="edge-width">
              <option value="22*0.6">22*0.6 </option>
              <option value="22*2">22*2</option>
              <option value="42*2">42*2</option>
            </select>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SelectEdges;
