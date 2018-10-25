
// app模块   
(function(){
    'use strict';

    angular
        .module('app', []);
}());   

(function(){
    'use strict';

    angular
        .module('app')
        .controller('MainCtrl', MainCtrl)

    /** @ngInject */
    function MainCtrl($scope, $compile){
        var vm = this;
        
        init();

        function init(){
            $scope.title = 'hello app';
            // 菜单数组
            $scope.menu = [
                {
                    id: 1,
                    name: '百度',
                    ctrl: 'baiduCtrl',
                    viewUrl:  'view/baidu.html'
                },
                {
                    id: 2,
                    name: 'tapd',
                    ctrl: 'tapdCtrl',
                    viewUrl:  'view/tapd.html'
                }
            ]
        }

        // 已存在的tab
        $scope.existTab = [];


        // 创建页签实例
        function createTabInst(info){
            var template = '<div class="inner" ng-show="'+info.id+' == currTab" id="'+info.id+'">'+
                    '<div ng-include="\''+info.viewUrl+'\'" ng-controller="'+info.ctrl+'"></div>'+
                '</div>';
            console.log(template);
            var content = $compile(template)($scope);
            angular.element('.content').append(content);
            // 添加至已创建的tab
            $scope.existTab.push(info.id);
        }

        // 根据某个key找到页签数据
        function findMenuByKey(val,key){
            return $scope.menu[0];
        }

        // 展示指定tab
        $scope.showTab = function(info){
            if($scope.existTab.indexOf(info.id)>-1){
                // 已存在，直接展示
                $scope.currTab = info.id;
            }else{
                createTabInst(info);
                $scope.currTab = info.id;
            }
        }



    }

}());

// 总结
`
    使用ng-include、ng-controller、$compile
    来动态嵌入一个view



`

