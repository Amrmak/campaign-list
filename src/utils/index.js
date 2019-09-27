const campaignSchema = {
  id: value => typeof value === 'number' && parseInt(value) === Number(value),
  name: value => typeof value === 'string',
  // TODO: validate dates
  // note: the key "Budget" should be "budget" for consistency
  Budget: value => typeof value === 'number' && value >= 0,
};

/**
 * @description check if a campaign object has all the properties of a campaign
 * and it's value is valid
 * @param {Object} obj
 * @param {Object} [Schema = campaignSchema]
 * @returns {Boolean} Return true if valid (matchs schema)
 */
export const isCampaignValid = (obj, Schema = campaignSchema) => {
  return !Object.entries(Schema)
    .map(([property, validate]) => [property, validate(obj[property])])
    .some(([property, valid]) => !valid);
};

/**
 * @description filters valid campaign objects from input
 * @param {Array} arr
 * @returns {Array} returns an array of valid campaigns
 */
export const filterValidCampaign = arr => {
  if (!Array.isArray(arr)) throw new Error('input must be an array');

  return arr.filter(item => isCampaignValid(item));
};

/**
 * @description filters out unique objects by id
 * @param {Array} arr
 * @returns {Array} returns an array of unique object
 */
export const filterUniqueObjectsById = arr => {
  if (!Array.isArray(arr)) throw new Error('input must be an array');

  const map = new Map();
  return arr.filter(item => {
    if (!map.has(item.id)) {
      map.set(item.id, true); // set any value to Map
      return true;
    }
    return false;
  });
};
