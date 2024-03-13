export default function cleanSet(set, startString) {
  let returnString = '';

  if ((startString instanceof String) && startString) {
    for (const setItem of set.values()) {
      if (setItem && setItem.startsWith(startString)) {
        returnString = `${returnString}-${setItem.slice(startString.length)}`;
      }
    }

    if (returnString) {
      returnString = returnString.slice(1);
    }
  }
  return returnString;
}
