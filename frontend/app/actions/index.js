'use strict';


export const MODIFY_GRID_MARGINS = 'MODIFY_GRID_MARGINS';
export const MODIFY_GRID_SIZE = 'MODIFY_GRID_SIZE';


export const modifyGridMargins = (margins) => ({
  type: MODIFY_GRID_MARGINS,
  margins
});

export const modifyGridSize = (size) => ({
  type: MODIFY_GRID_SIZE,
  size
});
