loading = '<img src="./assets/img/loading.gif" alt="•••">';
table = document.querySelector("#tabla");
fixes = document.querySelector("#fix");
fixtable = document.querySelector("#fixturetable");
impar = false;
var teams = [];
a = 0;

fixt1 = '<table><thead><tr><th>eq1</th><th>eq2</th><th>r1</th><th>r2</th></tr></thead><tbody id="fixturetable';
fixt2 = '"></tbody></table>';

$("#app").load('./assets/pages/first.html');
$(document).ready(() => {
    autoset(6);
});

function autoset(n) {
    teams = [];
    a=0;
    for (let i = 0; i < n; i++) {
        a = a+1;
        // pgr = Math.round((Math.random()*18)/n);
        // per = Math.round((Math.random()*18)/n);
        // ppr = Math.round((Math.random()*18)/n);
        // gfr = Math.round(Math.random()*18);
        // gcr = Math.round(Math.random()*18);
        // pts = (3*pgr)+per;
        pgr = 0;
        per = 0;
        ppr = 0;
        gfr = 0;
        gcr = 0;
        pts = 0;
        team = new Team(a,("Equipo "+a),pgr,per,ppr,gfr,gcr,pts);
        teams.push(team);
    }
}

function position() {
    positionx = [];
    positionx.length = teams.length;
    for (p = 0; p < teams.length; p++) {
        for (p2 = 0; p2 < teams.length; p2++) {
            if (teams[p2].pts > teams[p].pts) {
                p = p2;
                major = p2;
            } else {
                if (p2 == teams.length-1) {
                    positionx[0] = p;
                    major = p;
                    p = teams.length;
                }
            }
        }
    }
    setTimeout(() => {
        console.log(major);
        for (let p3 = 0; p3 < teams.length; p3++) {
            teams[p3].ps = positionx[p3];
        }
        indexar(teams.length);
    }, 500);
}

function Team(number,name,pg,pe,pp,gf,gc,pts,ps) {
    this.number = number;
    this.name = name;
    this.pg = pg;
    this.pe = pe;
    this.pp = pp;
    this.gf = gf;
    this.gc = gc;
    this.pts = pts;
    this.ps = ps;
}

function nextPhase() {
    neq = document.getElementById("neq").value;
    mid = Math.round(neq/2)
    fixes.innerHTML = loading;
    setTimeout(() => {
        table.innerHTML = "";
        fixes.innerHTML = "";
        autoset(neq);
        check=0;
        for (i = 0; i < mid; i++) {
            check = check+1;
        }
        if (check+mid > neq) {
            imparfx();
        } else {
            parfx();
        }
        indexar(neq);
    }, 500);
}

function imparfx() {
    impar = true;
    fixes.innerHTML = "";
    teams.sort((a,b) => (a.number - b.number));
    for (let t = 0; t < neq; t++) {
        fixes.innerHTML += fixt1+(t+1)+fixt2;
        idtable = document.querySelector("#fixturetable"+(t+1));
        for (i = 0; i < mid; i++) {
            idtable.innerHTML += '<tr><td id="cl'+t+i+'"></td><td id="cr'+t+i+'"></td><td id="rl'+t+i+'"></td><td id="rr'+t+i+'"></td>';
        }
        idtable.innerHTML += '<tr id="btnst'+t+'"><td></td><td></td><td></td><td><button onclick="results('+t+')">Save</button></td></tr>';
    }
    last = neq - 1;
    first = 0;
    for (let t = 0; t < neq; t++) {
        for (i = 0; i < mid; i++) {
            cl = document.querySelector("#cl"+t+i);
            cr = document.querySelector("#cr"+t+i);
            rl = document.querySelector("#rl"+t+i);
            rr = document.querySelector("#rr"+t+i);
            if (i == 0) {
                cl.innerHTML = "Bye";
                cr.innerHTML = teams[first].number;
                rl.innerHTML = '-'
                rr.innerHTML = '-'
            } else {
                cl.innerHTML = teams[last].number;
                rl.innerHTML = '<input id="r'+t+i+'l" type="number">'
                if (i == 1) {
                    nextfix = last;
                }
                if (last == (0)) {
                    last = neq - 1;
                } else {
                    last = last - 1;
                }
                if (first == (neq - 1)) {
                    first = 0;
                } else {
                    first = first + 1;
                }
                cr.innerHTML = teams[first].number;
                rr.innerHTML = '<input id="r'+t+i+'r" type="number">'
            }
        }
        first = nextfix;
        last = nextfix - 1;
    }
    indexar(neq);
}

function parfx() {
    impar = false;
    fixes.innerHTML = "";
    teams.sort((a,b) => (a.number - b.number));
    for (let t = 0; t < neq-1; t++) {
        fixes.innerHTML += fixt1+(t+1)+fixt2;
        idtable = document.querySelector("#fixturetable"+(t+1));
        for (i = 0; i < mid; i++) {
            idtable.innerHTML += '<tr><td id="cl'+t+i+'"></td><td id="cr'+t+i+'"></td><td id="rl'+t+i+'"></td><td id="rr'+t+i+'"></td>';
        }
        idtable.innerHTML += '<tr id="btnst'+t+'"><td></td><td></td><td></td><td><button onclick="results('+t+')">Save</button></td></tr>';
    }
    last = neq - 1;
    first = 1;
    for (let t = 0; t < neq-1; t++) {
        for (i = 0; i < mid; i++) {
            cl = document.querySelector("#cl"+t+i);
            cr = document.querySelector("#cr"+t+i);
            rl = document.querySelector("#rl"+t+i);
            rr = document.querySelector("#rr"+t+i);
            if (i == 0) {
                cl.innerHTML = teams[0].number;
                cr.innerHTML = teams[first].number;
                rl.innerHTML = '<input id="r'+t+i+'l" type="number">'
                rr.innerHTML = '<input id="r'+t+i+'r" type="number">'
            } else {
                cl.innerHTML = teams[last].number;
                rl.innerHTML = '<input id="r'+t+i+'l" type="number">'
                if (i == 1) {
                    nextfix = last;
                }
                if (last == (1)) {
                    last = neq - 1;
                } else {
                    last = last - 1;
                }
                if (first == (neq - 1)) {
                    first = 1;
                } else {
                    first = first + 1;
                }
                cr.innerHTML = teams[first].number;
                rr.innerHTML = '<input id="r'+t+i+'r" type="number">'
            }
        }
        first = nextfix;
        last = nextfix - 1;
    }
    indexar(neq);
}

function results(table) {
    document.querySelector("#btnst"+table).innerHTML = "";
    teams.sort((a,b) => (a.number - b.number));
    for (let i = 0; i < mid; i++) {
        if (impar == true & i==0) {
        } else {
            leftteam = parseInt(document.getElementById("cl"+table+i).outerText)-1;
            rightteam = parseInt(document.getElementById("cr"+table+i).outerText)-1;
            leftresult = parseInt(document.getElementById("r"+table+i+"l").value);
            rightresult = parseInt(document.getElementById("r"+table+i+"r").value);
            
            if (leftresult > rightresult) {
                teams[leftteam].pg = teams[leftteam].pg + 1;
                teams[rightteam].pp = teams[rightteam].pp + 1;
            } else if (rightresult > leftresult) {
                teams[rightteam].pg = teams[rightteam].pg + 1;
                teams[leftteam].pp = teams[leftteam].pp + 1;
            } else if (leftresult == rightresult) {
                teams[leftteam].pe = teams[leftteam].pe + 1;
                teams[rightteam].pe = teams[rightteam].pe + 1;
            }
            teams[leftteam].gf = teams[leftteam].gf + leftresult;
            teams[rightteam].gf = teams[rightteam].gf + rightresult;
            teams[leftteam].gc = teams[leftteam].gc + rightresult;
            teams[rightteam].gc = teams[rightteam].gc + leftresult;
    
            document.getElementById("rl"+table+i).innerHTML = leftresult;
            document.getElementById("rr"+table+i).innerHTML = rightresult;
        }
    }
    indexar(neq);
}

function indexar(n) {
    for (let i = 0; i < n; i++) {
        teams[i].pts = (teams[i].pg*3)+teams[i].pe;
    }
    teams.sort((a,b) => {
        if (b.pts == a.pts) {
            if (b.gf < a.gf || b.gf < a.gf) {
                if (b.gf < a.gf) {
                    res = b.gf - a.gf
                    return res;
                } else if (b.gf > a.gf) {
                    res = a.gf - b.gf;
                    return res;
                }
            } else if (b.gf == a.gf) {
                if (b.gc > a.gc) {
                    res = b.gc - a.gc;
                    return res;
                } else if (b.gc < a.gc) {
                    res = a.gc - b.gc;
                    return res;
                } else {
                    res = b.pts - a.pts;
                    return res;
                }
            }
        } else {
            res = b.pts - a.pts;
            return res;
        }
    });
    table.innerHTML = loading;
    setTimeout(() => {
        table.innerHTML = "";
        for (let i = 0; i < n; i++) {
            if (i==0) {
                pstr = "gold";
            } else if (i==1) {
                pstr = "silver";
            } else if (i==2) {
                pstr = "bronze";
            } else {
                pstr = ""
            }
            table.innerHTML += '<tr class="'+pstr+'"><th>' + teams[i].number + '</th><th><input id="n'+i+'" class="names '+pstr+'" type="text" value="' + teams[i].name + '"></th><td>' + teams[i].pg + '</td><td>' + teams[i].pe + '</td><td>' + teams[i].pp + '</td><td>' + teams[i].gf + '</td><td>' + teams[i].gc + '</td><td>' + teams[i].pts + '</td><td>' + (i+1) + '</td></tr>';
        }
        table.innerHTML += '<button onclick="savenames('+n+')">Save Names</button>';
    }, 1000);
}

function savenames(n) {
    for (let i = 0; i < n; i++) {
        teams[i].name = document.getElementById("n"+i).value;
    }
}