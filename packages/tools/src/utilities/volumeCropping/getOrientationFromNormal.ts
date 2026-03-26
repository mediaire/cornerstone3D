import { vec3 } from 'gl-matrix';
import { utilities } from '@mediaire/cornerstone3d-core';
import type { Types } from '@mediaire/cornerstone3d-core';
import { ORIENTATION_TOLERANCE } from './constants';

/**
 * Maps a camera normal vector to an orientation string.
 * Returns 'AXIAL', 'CORONAL', 'SAGITTAL', or null if not matched.
 *
 * @param normal - The view plane normal vector
 * @returns The orientation string or null if not matched
 */
export function getOrientationFromNormal(
  normal: Types.Point3
): 'AXIAL' | 'CORONAL' | 'SAGITTAL' | null {
  if (!normal) {
    return null;
  }

  const canonical = {
    AXIAL: [0, 0, 1],
    CORONAL: [0, 1, 0],
    SAGITTAL: [1, 0, 0],
  };

  for (const [key, value] of Object.entries(canonical)) {
    if (
      utilities.isEqualAbs(
        1,
        vec3.dot(value as Types.Point3, normal),
        ORIENTATION_TOLERANCE
      )
    ) {
      return key as 'AXIAL' | 'CORONAL' | 'SAGITTAL';
    }
  }

  return null;
}
