// {id:6,sx:39,sy:190,ex:170,ey:205},{id:7,sx:39,sy:206,ex:170,ey:221},\
// {id:6,sx:39,sy:206,ex:170,ey:220},\
var sx = 205;
var sy = 405;
//
var ex = 305;
var ey = 420;
var u = "3";
var offset = 1;
for (var i = 0; i < 11; i++) {
    console.log(`{id:"${u}_${i}",sx:${sx},sy:${sy},ex:${ex},ey:${ey}},`);
    if (i % 2 == 0) {
        offset *= -1;
    }
    sy = ey + offset;
    ey = sy + 15;
    // offset = 1;
}