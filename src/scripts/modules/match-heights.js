// Matching non-linear element heights - v1.0 - 18/12/2016 - M.J.Foskett - https://websemantics.uk/
const matchHeights = () => {
  "use strict";

  const dataAttr = "data-matchHeights";
  const minViewportWidth = 320;

  const _getHeightSetsArray = (dataAttr) => {
    // Return an array containing the different values of data-data-heightmatch
    let value;
    let arr = [];
    const sets = document.querySelectorAll("[" + dataAttr + "]");
    let i = sets.length;
    while (i--) {
      value = sets[i].getAttribute(dataAttr);
      if (arr.indexOf(value) === -1) {
        arr.push(value);
      }
    }
    return arr;
  }

  const _resetMinHeights = (set) => {
    // reset min-heights by removing the inline style.
    let i = set.length;
    while (i--) {
      set[i].removeAttribute("style");
    }
  }

  const _getMaxSetHeight = (set) => {
    // return the height of the tallest element in set
    let maxHeight = 0;
    let currentHeight;
    let i = set.length;
    while (i--) {
      currentHeight = set[i].clientHeight;
      if (currentHeight > maxHeight) {
        maxHeight = currentHeight;
      }
    }
    return maxHeight;
  }

  const _setMinHeight = (set, matchedHeight) => {
    let i = set.length;
    while (i--) {
      set[i].style.minHeight = matchedHeight + "px";
    }
  }

  const init = () => {

    const sets = _getHeightSetsArray(dataAttr);
    let i = sets.length;
    let set;

    while (i--) {

      set = document.querySelectorAll("[" + dataAttr + "=\"" + sets[i] + "\"]");

      _resetMinHeights(set);

      // Only above minimum screen width
      if (document.body.clientWidth >= minViewportWidth) {

        _setMinHeight(set, _getMaxSetHeight(set));

      }
    }
  }

  init();

};

export default matchHeights;
