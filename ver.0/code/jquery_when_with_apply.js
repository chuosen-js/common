
(function() {
  //JavaScriptの関数の引数は、ArrayObjectを受け取った場合そのままArrayObjectとして渡される
  var func = function(arg1, arg2) {
    console.log(arg1);
    console.log(arg2);
  };
  var userList1 = ["hanako", "sachiko"];
  // 以下の２つの違いに注意
  func("taro", "jiro");
  func(userList1);

  func.apply(null, userList1);
})();



(function() {
  /*
   * applyの使いどころ
   * jQuery.whenは引数に複数個のjQuery.Deferredオブジェクトを受け取れるが
   * ArrayObjectで渡すことは出来ないのでapplyでarrayObjectを展開させる
   */
  var userList = ["taro", "jiro", "hanalko"];
  var ajaxList = [];

  //何回ajaxを回すかわからない
  ajaxList = userList.map(function(user) {
    return $.ajax({
      method: "get",
      url: "/api/" + user,
      dataType: "JSON"
    });
  });

  $.when.apply(this, ajaxList).done(function() {
    arguments.forEach(function(res) {
      console.log(res);
    });
  });
})();
