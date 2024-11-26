/*
    let input1 = document.querySelector("input");
    let input2 = document.getElementById("input2")
    let buttons = document.querySelectorAll("button");
    let results = document.querySelector(".results");
    let btn = document.querySelector(".addValue");

    function fun() {
        results.innerHTML = "";
    }
    input1.onfocus = fun;
    input2.onfocus = fun;
    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.target.className === "check" ? check() : e.target.className === "add" ? add() : e.target.className === "delete" ? remove() : e.target.className === "show" ? show() : e.target.className === "clear" ? clear() : "";
        });
    });
    function noItem() {
        results.innerHTML = `<div style="margin-top:20px;">Please Enter The Item In The Input</div>`;
    }
    function notFounded() {
        results.innerHTML =  `<div style="margin-top:20px;">The Item Not Founded In The Local Storage</div>`;
    }
    function check() {
        input1.value ? (localStorage.getItem(input1.value) ? results.innerHTML = `<div style="margin-top:20px;">The Item <span>${input1.value}</span> Is Exist In Local Storage</div>` : notFounded()) : noItem();
        input1.value = "";
    }
    function add() {
        let val1 = input1.value;
        if (val1) {
            input1.classList.add("none");
            input1.value = "";
            input2.classList.remove("none");
            buttons.forEach(button => button.classList.add("none"));
            btn.classList.remove("none");
            btn.onclick = function () {
                let val2 = input2.value;
                if (val2) {
                    localStorage.setItem(val1, val2);
                    input2.classList.add("none");
                    input2.value = "";
                    input1.classList.remove("none");
                    buttons.forEach(button => button.classList.remove("none"));
                    btn.classList.add("none");
                    results.innerHTML = "";
                } else
                    results.innerHTML = `<div style="margin-top:20px;">Please Enter The Item Value In The Input</div>`;
            }
        } else
            noItem();
    }
    function remove() {
        input1.value ? (window.localStorage.getItem(input1.value) ? results.innerHTML = `<div style="margin-top:20px;">The Item <span>${input1.value}</span> Is Removed </div>` : notFounded()) : noItem();
        window.localStorage.removeItem(input1.value);
        input1.value = "";
    }
    function clear() {
        results.innerHTML = localStorage.length ? `<div style="margin-top:20px;">The Local Storage Is cleared </div>` : `<div style="margin-top:20px;">No Items Founded In Local Storage To Clear</div>`;
        localStorage.clear();
    }
    function show() {
        results.innerHTML = "";
        if (localStorage.length)
            for (let i = 0; i < localStorage.length; i++)
                results.innerHTML += `<div style="margin-top:20px;">The Item Num ${i + 1} Is <span>${localStorage.key(i)}</span> And His Value Is <span>${localStorage.getItem(localStorage.key(i))}</span></div>`;
        else
            results.innerHTML = `<div style="margin-top:20px;">No Items Founded In Local Storage To Show</div>`;
    }
*/








let input1 = document.querySelector("input");
let buttons = document.querySelectorAll("button");
let results = document.querySelector(".results");
let btn = document.querySelector(".addValue");



function fun() {
    results.innerHTML = "";
}
input1.onfocus = fun;
buttons.forEach(button => button.addEventListener("click", (e) => e.target.className === "check" ? check() : e.target.className === "add" ? add() : e.target.className === "delete" ? remove() : e.target.className === "show" ? show() : e.target.className === "clear" ? clear() : ""));

function noItem() {
    results.innerHTML = `<div style="margin-top:20px;">Please Enter The Item In The Input</div>`;
}
function notFounded() {
    results.innerHTML =  `<div style="margin-top:20px;">The Item Not Founded In The Local Storage</div>`;
}
function check() {
    input1.value ? (localStorage.getItem(input1.value) ? results.innerHTML = `<div style="margin-top:20px;">The Item <span>${input1.value}</span> Is Exist In Local Storage</div>` : notFounded()) : noItem();    
    input1.value = "";
}
function add() {
    let val1 = input1.value;
    if (val1) {
        input1.value = "";
        input1.placeholder = "Local Storage Item Value";
        buttons.forEach(button => button.classList.add("none"));
        btn.classList.remove("none");
        btn.onclick = function () {
            let val2 = input1.value;
            if (val2) {
                localStorage.setItem(val1, val2);
                input1.value = "";
                input1.placeholder = "Local Storage Item";
                buttons.forEach(button => button.classList.remove("none"));
                btn.classList.add("none");
                results.innerHTML = "";
            } else 
                results.innerHTML = `<div style="margin-top:20px;">Please Enter The Item Value In The Input</div>`;
        }
    } else 
        noItem();
}
function remove() {
    input1.value ? (window.localStorage.getItem(input1.value) ? results.innerHTML = `<div style="margin-top:20px;">The Item <span>${input1.value}</span> Is Removed </div>` : notFounded()) : noItem();    
    window.localStorage.removeItem(input1.value);
    input1.value = "";
}
function clear() {
    results.innerHTML = localStorage.length ? `<div style="margin-top:20px;">The Local Storage Is cleared </div>` : `<div style="margin-top:20px;">No Items Founded In Local Storage To Clear</div>`;
    localStorage.clear();
}
function show() {
    results.innerHTML = "";
    if (localStorage.length) 
        for (let i = 0; i < localStorage.length; i++)
            results.innerHTML += `<div style="margin-top:20px;">The Item Num ${i + 1} Is <span>${localStorage.key(i)}</span> And His Value Is <span>${localStorage.getItem(localStorage.key(i))}</span></div>`;
    else 
        results.innerHTML = `<div style="margin-top:20px;">No Items Founded In Local Storage To Show</div>`;
}