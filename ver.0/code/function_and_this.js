/*
 * thisはfunctionの中で呼ばれると、その親オブジェクト自身を返す
 * グローバルでthisが呼ばれるとグローバルオブジェクトを返す（ブラウザならwindow）
 */

var obj = {
  foo: "FOO",
  bar: "BAR",
  foobar: function () {
    return this.foo + this.bar;
  }
};
console.log(obj.foobar());

// これは一見thisがobjを参照しそうだがfunctionの中にいないのでだめ
var obj2 = {
  foo: "FOO",
  bar: "BAR",
  foobar: this.foo + this.bar
};
console.log(obj2);
