module.exports = {
  // Generate ID rule
  // key: 'TEXT' => The first character of site Name
  // type: 'TEXT' => The type record
  // code: the lastest record index
  generateID: (genType, lastestID) => {
    let key = "K";
    let type = genType === "product" ? "P" : "";
    let code =
      lastestID < 9
        ? "000" + lastestID
        : lastestID < 99
        ? "00" + lastestID 
        : lastestID < 999
        ? "0" + lastestID
        : lastestID;
    // db.collection('products').get().then
    return key + type + code;
  },
};
