import normalize from './address.mjs';

function getAddress(user) {
  return normalize(user.address);
}

export default getAddress;
