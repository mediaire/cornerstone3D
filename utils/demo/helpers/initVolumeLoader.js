import {
  volumeLoader,
  cornerstoneStreamingImageVolumeLoader,
  cornerstoneStreamingDynamicImageVolumeLoader,
  decimatedVolumeLoader,
} from '@mediaire/cornerstone3d-core';

export default function initVolumeLoader() {
  volumeLoader.registerUnknownVolumeLoader(
    cornerstoneStreamingImageVolumeLoader
  );
  volumeLoader.registerVolumeLoader(
    'cornerstoneStreamingImageVolume',
    cornerstoneStreamingImageVolumeLoader
  );
  volumeLoader.registerVolumeLoader(
    'cornerstoneStreamingDynamicImageVolume',
    cornerstoneStreamingDynamicImageVolumeLoader
  );
    volumeLoader.registerVolumeLoader(
    'decimatedVolumeLoader',
    decimatedVolumeLoader
  );
}
