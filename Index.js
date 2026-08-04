// FLEXTD - Main Entry Point
import FlextdV1 from './Flextd.V1.js';
import FlextdV2 from './Flextd.V2.js';
import FlextdV3 from './Flextd.V3.js';

export function getVersion(version = 'V3') {
  const v = version.toString().toUpperCase();
  if (v === 'V1' || v === '1') return FlextdV1;
  if (v === 'V2' || v === '2') return FlextdV2;
  return FlextdV3;
}

export const Flextd = {
  V1: FlextdV1,
  V2: FlextdV2,
  V3: FlextdV3,
  latest: FlextdV3,
  get: getVersion
};

export default FlextdV3;
