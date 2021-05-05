var data = [15.0, 34.0, 57.0, 92.0, 135.0, 372.0, 560.0, 840.0, 1242.0, 1716.0, 2360.0, 3216.0, 4200.0, 5460.0, 7050.0, 8840.0, 11040.0, 13716.0, 16680.0, 20216.0, 24402.0, 28980.0, 34320.0, 40512.0, 47216.0, 54900.0, 63666.0, 73080.0, 83720.0, 95700.0, 108480.0, 122760.0, 138666.0, 155540.0, 174216.0, 194832.0, 216600.0, 240500.0, 266682.0, 294216.0, 324240.0, 356916.0, 391160.0, 428280.0, 468450.0, 510420.0, 555680.0, 604416.0, 655200.0, 709716.0, 748608.0, 789631.0, 832902.0, 878545.0, 926689.0, 977471.0, 1031036.0, 1087536.0, 1147032.0, 1209994.0, 1276301.0, 1346242.0, 1420016.0, 1497832.0, 1579913.0, 1666492.0, 1757815.0, 1854143.0, 1955750.0, 2062925.0, 2175973.0, 2295216.0, 2420993.0, 2553663.0, 2693603.0, 2841212.0, 2996910.0, 3161140.0, 3334370.0, 3517093.0, 3709829.0, 3913127.0, 4127566.0, 4353756.0, 4592341.0, 4844001.0, 5109452.0, 5389449.0, 5684790.0, 5996316.0, 6324914.0, 6671519.0, 7037118.0, 7422752.0, 7829518.0, 8258575.0, 8711144.0, 9188514.0, 9692044.0, 10223168.0, 10783397.0, 11374327.0, 11997640.0, 12655110.0, 13348610.0, 14080113.0, 14851703.0, 15665576.0, 16524049.0, 17429566.0, 18384706.0, 19392187.0, 20454878.0, 21575805.0, 22758159.0, 24005306.0, 25320796.0, 26708375.0, 28171993.0, 29715818.0, 31344244.0, 33061908.0, 34873700.0, 36784778.0, 38800583.0, 40926854.0, 43169645.0, 45535341.0, 48030677.0, 50662758.0, 53439077.0, 56367538.0, 59456479.0, 62714694.0, 66151459.0, 69776558.0, 73600313.0, 77633610.0, 81887931.0, 86375389.0, 91108760.0, 96101520.0, 101367883.0, 106992842.0, 112782213.0, 118962678.0, 125481832.0, 132358236.0, 139611467.0, 147262175.0, 155332142.0, 163844343.0, 172823012.0, 182293713.0, 192283408.0, 202820538.0, 213935103.0, 225658746.0, 238024845.0, 251068606.0, 264827165.0, 279339639.0, 294647508.0, 310794191.0, 327825712.0, 345790561.0, 364739883.0, 384727628.0, 405810702.0, 428049128.0, 451506220.0, 476248760.0, 502347192.0, 529875818.0, 558913012.0, 589541445.0, 621848316.0, 655925603.0, 691870326.0, 729784819.0, 769777027.0, 811960808.0, 856456260.0, 903390063.0, 952895838.0, 1005114529.0, 1060194805.0, 1118293480.0, 1179575962.0, 1244216724.0, 1312399800.0, 1384319309.0, 1460180007.0, 1540197871.0, 1624600714.0, 1713628833.0, 1807535693.0, 1906558648.0, 2011069705.0, 2121276324.0];
var s, e;

function getElementFor(start, end, id) {
    let cont = document.createElement("div");
    let pLabel = document.createElement("p");
    cont.className = "cont";
    pLabel.style.display = "block";
    pLabel.style.width = "90%";
    pLabel.style.marginLeft = "auto";
    pLabel.style.marginRight = "auto";
    pLabel.style.fontWeight = "bold";
    pLabel.innerText = year;
    container.appendChild(pLabel);
    let field = document.createElement("input");
    field.type = "text";
    field.style.display = "block";
    field.style.width = "90%";
    field.style.marginLeft = "auto";
    field.style.marginRight = "auto";
    let l = document.createElement("label");
    l.innerText = "exp per hour at " + start + " - " + end;
    let i = document.createElement("input");
    i.type = "number";
    i.id = id;
    i.value = 0;
    cont.appendChild(l);
    cont.appendChild(i);
    return cont;
}

function init() {
    s = parseInt(sessionStorage.getItem("curLevel"));
    e = parseInt(sessionStorage.getItem("goal"));
    var c = s;
    while (c < e) {
        var next = c + 10;
        next = Math.min(Math.floor(next / 10) * 10, e);
        document.getElementById("levelTimes").appendChild(getElementFor(c, next, Math.floor(c / 10)));
        c = next;
    }
}

function getNeededTimeFor(level) {
    return parseFloat(document.getElementById(Math.floor(level / 10)).value);
}

function calc() {
    var currentTime = data[s - 1] / getNeededTimeFor(s) * parseFloat(sessionStorage.getItem("percent")) / 100;
    for (var c = s + 1; c < e; c++){
        currentTime += data[c - 1] / getNeededTimeFor(c);
    }
    document.getElementById("result").innerText = "IT WILL TAKE " + currentTime.toFixed(2) + " HOURS TO REACH LEVEL " + e;
}
