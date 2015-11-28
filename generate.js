function gen_add_sub() {
    var a = Math.floor(Math.random() * 41) - 20;
    var b = Math.floor(Math.random() * 41) - 20;
    var op = Math.floor(Math.random() * 2) == 1 ? "+" : "-";

    return "<p>" +  a + " " + op + " " + b + "</p>";
}

function gen_mul() { 
    var a = Math.floor(Math.random() * 25) - 12;
    var b = Math.floor(Math.random() * 25) - 12;

    return "<p>" +  a + " &times; " + b + "</p>";
}

function gen_div() {
    var b = Math.floor(Math.random() * 25) - 12;
    var a = (Math.floor(Math.random() * 25) - 12) * b;

    return "<p>" +  a + " &divide; " + b + "</p>";
}

function gen_squared() {
    var a = Math.floor(Math.random() * 19) + 1;

    return "<p>" +  a + "&sup2;</p>";
}

function gen_cubed() {
    var a = Math.floor(Math.random() * 9) + 1;

    return "<p>" +  a + "&sup3;</p>";
}

function gen_sqrt() {
    var a = Math.floor(Math.random() * 19) + 1;
    var a2 = a * a;

    return "<p>&radic;" + a2 + "</p>";
}

function gen_cbrt() {
    var a = Math.floor(Math.random() * 9) + 1;
    var a3 = a * a * a;

    return "<p>&#8731;" +  a3 + "</p>";
}

function gen(count) {

    var str = "";
    for (var i = 0; i < count; i++) {
        var n = Math.floor(Math.random() * 8);
        switch(n) {
            case 0:
            case 1:
                str += gen_add_sub(); break;
            case 2:
                str += gen_mul(); break;
            case 3: 
                str += gen_div(); break;
            case 4:
                str += gen_squared(); break;
            case 5:
                str += gen_cubed(); break;
            case 6:
                str += gen_sqrt(); break;
            case 7:
                str += gen_cbrt(); break;
        }
    }
    return str;

}

module.exports = gen;


