var buybtn = document.getElementById('buy');
var sellbtn = document.getElementById('sell');
var client = document.getElementById('Name');
var ticker = document.getElementById('T');
var ric = document.getElementById('R');
var size = document.getElementById('S');
var price = document.getElementById('P');
var USD = document.getElementById('U');
var currency = document.getElementById('C');
var issuer = document.getElementById('I');
var salesperson = document.getElementById('salesperson');
var HP = document.getElementById('HP');



// 注册事件，处理程序
buybtn.onclick = function () {
    var cname = client.value;
    var tticker = ticker.value;
    var rric = ric.value;
    var ssize = size.value;
    var pprice = price.value;
    // var UUSD = USD.value;
    var ccurrency = currency.value;
    var iissuer = issuer.value;
    var sales = salesperson.value;
    // var HHP = HP.value;


    var table = document.getElementsByTagName("table")[0];
    table.innerHTML += "<tr>\n" +
        "<td>" + "Date" + "</td>\n" +
        "<td>" + cname + "</td>\n" +
        "<td>buy</td>\n" +
        "<td>" + tticker + "</td>\n" +
        "<td>" + rric + "</td>\n" +
        "<td>" + ssize + "</td>\n" +
        "<td>" + pprice + "</td>\n" +
        "<td>1300.78</td>\n" +
        "<td>" + ccurrency + "</td>\n" +
        "<td>" + iissuer + "</td>\n" +
        "<td>" + sales + "</td>\n" +
        "<td>HT</td>\n" +
        "</tr>";
}


// 注册事件，处理程序
sellbtn.onclick = function () {
    var cname = client.value;
    var tticker = ticker.value;
    var rric = ric.value;
    var ssize = size.value;
    var pprice = price.value;
    // var UUSD = USD.value;
    var ccurrency = currency.value;
    var iissuer = issuer.value;
    var sales = salesperson.value;
    // var HHP = HP.value;


    var table = document.getElementsByTagName("table")[0];
    table.innerHTML += "<tr>\n" +
        "<td>" + "Date" + "</td>\n" +
        "<td>" + cname + "</td>\n" +
        "<td>sell</td>\n" +
        "<td>" + tticker + "</td>\n" +
        "<td>" + rric + "</td>\n" +
        "<td>" + ssize + "</td>\n" +
        "<td>" + pprice + "</td>\n" +
        "<td>1300.78</td>\n" +
        "<td>" + ccurrency + "</td>\n" +
        "<td>" + iissuer + "</td>\n" +
        "<td>" + sales + "</td>\n" +
        "<td>PT</td>\n" +
        "</tr>";
}
