/**
 * Created by xjb on 2017/6/8.
 */
DogeEditor.controller('IndexController',['$scope',function($scope) {

    $scope.isToolActive = isToolActive;
    $scope.selectTool = selectTool;
    $scope.print = print;
    $scope.save = save;
    $scope.saveDraft = saveDraft;
    $scope.clear = clear;
    $scope.undo = undo;
    $scope.redo = redo;
    $scope.copy = copy;
    $scope.cut = cut;
    $scope.insertRowNext = insertRowNext;

    function init() {
        $scope.activeTool = null;
        $scope.showTool = false;
        $scope.toolbar = ['file','edit','insert','table','view','tool','record','link'];
    }

    function isToolActive(tool) {
        return $scope.activeTool == tool && $scope.showTool;
    }

    function selectTool(tool) {
        if($scope.activeTool == tool) {
            $scope.showTool = !$scope.showTool;
        } else {
            $scope.activeTool = tool;
            if(!$scope.showTool) {
                $scope.showTool = true;
            }
        }
    }

    function print() {
        ue.execCommand('print');
    }

    function save() {
        //todo 保存功能需要完善
        console.log(ue.getContent());
    }

    function saveDraft() {
        //todo 草稿功能需要完善
        console.log(ue.execCommand( "getlocaldata" ));
    }

    function clear() {
        ue.execCommand("cleardoc");
    }

    function undo() {
        ue.execCommand('undo');
    }

    function redo() {
        ue.execCommand('redo');
    }

    function copy() {

    }

    function cut() {

    }

    function insertRowNext() {
        ue.execCommand('insertrownext');
    }

    init();
}]);