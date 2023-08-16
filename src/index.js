module.exports = function check(str, bracketsConfig) {

  let strArray = [];
  let k = 0;
  while (k < str.length) {
    strArray.push(str[k])
    k++;
  }

  for (let i = 0; i < strArray.length; i++) {
    for (let k = 0; k < bracketsConfig.length; k++) {
      if (strArray[i] == bracketsConfig[k][0] && strArray[i + 1] == bracketsConfig[k][1]) {
        strArray.splice(i, 2);
        i = -1;
      }
    }
  }

  if (strArray.length == 0) {
    return true;
  } else {
    return false;
  }

}

