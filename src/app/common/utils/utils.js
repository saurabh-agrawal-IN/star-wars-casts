import { FIELD_KEYS } from '../../common/constants';

/**
 * The sort function helps in sorting the data.
 * It sorts based on the given callback argument, which in return
 * decide which field to use for the comparison.
 *
 * @param {Array<Object>} originalArr - The array of objects
 * @param {Function} cb - The callback helper to derive the value for comparison
 *
 * @returns {Array<Object>} An array of sorted objects
 */
const sortFunc = (originalArr, cb) => {
  if (originalArr.length <= 1) {
    return originalArr;
  }
  const leftArr = [];
  const rightArr = [];
  const newArr = [];
  const pivot = originalArr.pop();
  const { length } = originalArr;
  for (let i = 0; i < length; i += 1) {
    const origName = cb(originalArr[i]);
    const pivotName = cb(pivot);
    if (origName <= pivotName) {
      leftArr.push(originalArr[i]);
    } else {
      rightArr.push(originalArr[i]);
    }
  }

  return newArr.concat(sortFunc(leftArr, cb), pivot, sortFunc(rightArr, cb));
};

/**
 * A function to perform the sorting.
 * @param {String} sortBy - sort by field selection
 * @param {Array<Object>} list - list of casts
 * @returns 
 */
const sortRecords = (sortBy, list) => {
  switch (sortBy) {
    default:
    case FIELD_KEYS.name:
      return sortFunc(list, (obj) =>
        obj.name.trim().toLowerCase()
      );
    case FIELD_KEYS.gender:
      return sortFunc(list, (obj) =>
        obj.gender.trim().toLowerCase()
      );
    case FIELD_KEYS.mass:
      return sortFunc(list, (obj) =>
        parseInt(obj.mass.trim())
      );
    case FIELD_KEYS.height:
      return sortFunc(list, (obj) =>
        parseInt(obj.height.trim())
      );
    case FIELD_KEYS.birth_year:
      return sortFunc(list, (obj) => {
        const bYear = obj.birth_year.trim().toLowerCase();
        return parseInt(bYear.slice(0, -3)); 
      });
    case FIELD_KEYS.eye_color:
      return sortFunc(list, (obj) =>
        obj.eye_color.trim().toLowerCase()
      );
    case FIELD_KEYS.hair_color:
      return sortFunc(list, (obj) =>
        obj.hair_color.trim().toLowerCase()
      );
    case FIELD_KEYS.skin_color:
      return sortFunc(list, (obj) =>
        obj.skin_color.trim().toLowerCase()
      ); 
  }
}

export {
  sortFunc,
  sortRecords
};
