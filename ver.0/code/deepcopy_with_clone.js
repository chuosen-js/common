/* npm cloneを使ったdeepcopy
/* 事前にnpm install --save clone
 */
var clone = require("clone");
var orig = {
  name: "furukawa"
};

var copied = clone(orig);
copied.name = "masuda";

//コピー先に変更を加えても
//コピー元に影響は無い
console.log(copied);
console.log(orig);
