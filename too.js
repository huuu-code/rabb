var datas = new Array();
load();

function addlist(){
    var txt = document.getElementById('tit').value;
    if( txt == ""){
        alert("请输入待办事件");
    }
    else{
        var local = getdata();
        local.push({thing:txt});
        savedata(local);
        load();
        document.getElementById('tit').value="";
    }

}

function getdata(){
    var data = localStorage.getItem("todo");
    if(data !== null){
        return JSON.parse(data); 
    }
    else{
        return[];
    }
}

function savedata(data){
    localStorage.setItem("todo",JSON.stringify(data));
}

function load(){
    clear(); //清空元素
    var data = getdata();
    console.log(data);
    var l = data.length;

    for(var i=0; i<l ;i++){
        var todolist = document.getElementById('todolists');

        var li = document.createElement("li");
        todolist.appendChild(li);

        var lb = document.createElement("label");
        lb.innerHTML = data[i].thing + '&nbsp';
        todolist.lastChild.appendChild(lb);

        var butt = document.createElement("button");
        butt.innerHTML = 'X';
        butt.id = i;
        todolist.lastChild.appendChild(butt);

        butt.onclick = function(){
            var data = getdata();
            var x = this.id;
            data.splice(x,1);
            console.log(data);
            savedata(data);
            load();
        }
    }
}

function clear(){
    var todolist = document.getElementById('todolists');
    todolist.innerHTML="";
}

function clean() {
    localStorage.clear();
    load();
}
