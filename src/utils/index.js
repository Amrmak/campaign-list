import { isAfter, isBefore, isSameDay, isValid } from 'date-fns';

const campaignSchema = {
  id: value => typeof value === 'number' && parseInt(value) === Number(value),
  name: value => typeof value === 'string',
  startDate: value => isValid(new Date(value)),
  endDate: value => isValid(new Date(value)),
  // note: the key "Budget" should be "budget" for consistency
  Budget: value => typeof value === 'number' && value >= 0,
};

/**
 * @description check if a campaign object has all the properties of a campaign
 * and it's value is valid
 * @param {Object} obj
 * @returns {Boolean} Return true if valid (matchs schema)
 */
const isObjectMatchingSchema = obj => {
  const isValidProperties = !Object.entries(campaignSchema)
    .map(([property, validate]) => [property, validate(obj[property])])
    .some(([, valid]) => !valid);
  if (isValidProperties) {
    const isValidDateRange = isBefore(
      new Date(obj.startDate),
      new Date(obj.endDate),
    );
    return isValidDateRange ? true : false;
  }
  return false;
};

/**
 * @description filters valid campaign objects from input
 * @param {Array} arr
 * @returns {Array} returns an array of valid campaigns
 */
export const filterValidCampaign = arr => {
  if (!Array.isArray(arr)) throw new Error('Input must be an array');

  return arr.filter(item => isObjectMatchingSchema(item));
};

/**
 * @description filters out unique objects by id
 * @param {Array} arr
 * @returns {Array} returns an array of unique object
 */
export const filterUniqueObjectsById = arr => {
  if (!Array.isArray(arr)) throw new Error('Input must be an array');

  const map = new Map();
  return arr.filter(item => {
    if (!map.has(item.id)) {
      map.set(item.id, true); // set any value to Map
      return true;
    }
    return false;
  });
};

/**
 * @description search for a given campaign list by name
 * @param {String} name
 * @param {Array} campaigns
 * @returns {Array} return a list that has a name that matchs the input name
 */
const filterCampaignsByName = (name, campaigns) => {
  if (!name && typeof name !== 'string')
    throw new Error('First param should be a string');
  if (!Array.isArray(campaigns))
    throw new Error('Second param should be an array');

  return campaigns.filter(item =>
    item.name.toLowerCase().includes(name.toLowerCase()),
  );
};

/**
 * @description filters campaign by a start and end dates
 * @param {String} inputStart
 * @param {String} inputEnd
 * @param {Array} campaigns
 * @returns {Array} return a list of campaigns that their
 * startDate or endDate is in the range
 */
const filterCampaignsByDateRange = (inputStart, inputEnd, campaigns) => {
  const startDate = new Date(inputStart);
  const endDate = new Date(inputEnd);

  if (!Array.isArray(campaigns))
    throw new Error('Third param should be an array');
  if (!inputStart || !inputEnd) return campaigns;

  return campaigns.filter(campaign => {
    const campaignStartDate = new Date(campaign.startDate);
    const campaignEndDate = new Date(campaign.endDate);

    return (
      (isSameDay(startDate, campaignStartDate) ||
        isBefore(startDate, campaignStartDate)) &&
      (isSameDay(endDate, campaignEndDate) || isAfter(endDate, campaignEndDate))
    );
  });
};

/**
 * @description filters campaign by a name, start and end dates
 * @param {String} name
 * @param {Object} dateRange
 * @param {Array} campaigns
 * @returns {Array} return a list of campaigns that matchs filtering params
 */
export const applyCampaignsFilter = (name, startDate, endDate, campaigns) => {
  if (typeof name !== 'string')
    throw new Error('First param should be a string');
  if (!Array.isArray(campaigns))
    throw new Error('Third param should be an array');

  const filteredByName = name
    ? filterCampaignsByName(name, campaigns)
    : campaigns;

  return startDate && endDate
    ? filterCampaignsByDateRange(startDate, endDate, filteredByName)
    : filteredByName;
};

export const getCampaignStatus = (startDate, endDate) =>
  isAfter(new Date(), new Date(startDate)) &&
  isBefore(new Date(), new Date(endDate))
    ? 'Active'
    : 'Inactive';
