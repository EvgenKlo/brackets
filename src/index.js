module.exports = function check(str, bracketsConfig) {
  let result = false;
  let massiveStr = str.split('');
  function findPair () {
    for (let i = 0; i < massiveStr.length; i++){
      bracketsConfig.forEach(element => {
        if(massiveStr[i] === element[0] && massiveStr[i+1] === element[1]){
          massiveStr.splice(i, 2);
          findPair();
        };
      });
      if(massiveStr.length === 0){
        result = true;
      };
    }
  };
  findPair();
  return result;
};
