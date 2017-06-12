/**
 * Created by xjb on 2017/6/8.
 */
ue.ready(function(){
    $("#file").click(controlFileMenu);
    $("#insert").click(controlInsertNume);
    $("#tools").click(controlToolsMenu);
});

function controlFileMenu() {
    alert("file menu");
}

function controlToolsMenu() {
    alert("tools menu");
}

function controlInsertNume() {
    alert("insert menu");
}

