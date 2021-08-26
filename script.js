var request = new XMLHttpRequest();
request.open("GET", "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json", true);
request.send();

request.onload = function () {
    // onclick = foo(x);
    var data = JSON.parse(this.response);
    // creating an parent div
    var div = document.createElement('div');
    div.setAttribute('class', 'modal-dialog modal-dialog-centered');
    div.setAttribute('id', 'output');
    //creating an table
    var table = document.createElement('table');
    table.setAttribute('class', 'table  table-responsive table-striped');

    //creating an Thead
    var thead = document.createElement('thead');
    thead.setAttribute('class', 'thead-dark ');

    //creating an thead data 
    var tr = document.createElement('tr');
    var th1 = createtrth('th', 'id');
    th1.setAttribute('scope', 'col')
    var th2 = createtrth('th', 'name    ');
    th2.setAttribute('scope', 'col')
    var th3 = createtrth('th', 'email');
    th3.setAttribute('scope', 'col')

    //appending head datas within head
    tr.append(th1, th2, th3);
    thead.append(tr);

    var div2 = document.createElement('div');
    div2.setAttribute('class', 'd-flex justify-content-center');


    var tbody = document.createElement('tbody');
    tbody.setAttribute('class','tbody')

    //creating buttons based on number of data divided by 10
    var a = [];
    for (j = 1; j <= (data.length / 10); j++) {
        var but1 = document.createElement('button');
        but1.setAttribute('type', 'button');
        but1.setAttribute('name', 'button');
        but1.classList.add('btn', 'btn-primary');
        but1.innerHTML = j;
        a.push(but1);
        but1.setAttribute('id', `but${j}`);
        // but1.addEventListener('click',foo);
        div2.append(but1);
    }
    console.log(a);
    a.forEach(element => {
        element.onclick = function () {
            foo(element.innerHTML);
        }
    });


    document.body.append(div)
    document.body.append(div2)




    function foo(x) {
        // console.log(btn);
        // let x = parseInt(document.getElementById('but1').innerHTML);
        for (var i = (x - 1) * 10; i < 10 * x; i++) {
            var tr = document.createElement('tr');
            var td1 = createtrth('td', data[i].id);
            var td2 = createtrth('td', data[i].name);
            var td3 = createtrth('td', data[i].email);

            tr.append(td1, td2, td3);

            tbody.append(tr);

            table.append(thead, tbody);

            div.append(table);

        }

    }

    function createtrth(elementname, value = ' ') {
        // <th>first</th>
        var td = document.createElement(elementname);
        td.innerHTML = value;
        return td;
    }
foo(1)
}
