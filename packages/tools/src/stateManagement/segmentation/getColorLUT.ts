import type { Types } from '@mediaire/cornerstone3d-core';
import { defaultSegmentationStateManager } from './SegmentationStateManager';

/**
 * Get the color lut for a given index
 * @param index - The index of the color lut to retrieve.
 * @returns A ColorLUT array.
 */
export function getColorLUT(index: number): Types.ColorLUT | undefined {
  const segmentationStateManager = defaultSegmentationStateManager;
  return segmentationStateManager.getColorLUT(index);
}
