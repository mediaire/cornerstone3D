import type { Types } from '@mediaire/cornerstone3d-core';

function isWithinThreshold(
  index: number,
  imageScalarData: Types.PixelDataTypedArray,
  threshold: {
    range: number[];
  }
) {
  if (!threshold) {
    return true;
  }

  const voxelValue = imageScalarData[index];
  return threshold.range[0] <= voxelValue && voxelValue <= threshold.range[1];
}

export default isWithinThreshold;
