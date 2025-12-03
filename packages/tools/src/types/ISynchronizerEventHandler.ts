import type { Types } from '@mediaire/cornerstone3d-core';
import type { Synchronizer } from '../store';

export default interface ISynchronizerEventHandler {
  (
    synchronizer: Synchronizer,
    sourceViewport: Types.IViewportId,
    targetViewport: Types.IViewportId,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    sourceEvent: any,
    options?: unknown
  ): Promise<void> | void;
}
