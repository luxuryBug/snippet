/**
 * studyNote about angular1.5.1
 */

var funnyNg = {
	function: ngFunc,
	filter: ngFilter,
	directive: ngDirective,
};

// ng-function
var ngFunc = [
	{
		name: 'angular.extend',
		usage: ['angular.extend(dst, src)','angular.extend({},dst, src)'],
		desc: '浅复制',
	},
	{
		name: 'angular.merge',
		usage: ['angular.merge(dst, src)','angular.merge({},dst, src)'],
		desc: '深复制',
	},
	{
		name: 'angular.identity',
		usage: ['angular.identity(function a(){}, function b(){})'],
		desc: '返回第一个函数',
	},
	{
		name: 'angular.noop',
		usage: ['angular.noop'],
		desc: '返回一个函数',
	},
	{
		name: 'angular.fromJson',
		usage: ['angular.fromJson(str)'],
		desc: '字符串对象转换成对象==Json.stringfy(str)',
	},
	{
		name: 'angular.toJson',
		usage: ['angular.toJson(obj)'],
		desc: '对象转换成字符串对象==Json.parse(obj)',
	},
];

// ng-filter
var ngFilter = [
	{
		name: 'currency',
		usage: ['{{1234.5678 | currency : "￥" : 4}}'],
		desc: '过滤金额',
		param: ['货币标志','小数点保存位数'],
		tips: ['小数点保留位数<0时，当做0处理']
	},
	{
		name: 'filter',
		usage: ['$filter(\'filter\')($scope.array,{$:'J'},true)'],
		desc: '自定义过滤',
		param: ['数组','表达式','严格匹配'],
		tips: ['$匹配任何属性','!值属性中不含值','filter过滤的是数组']
	},
	{
		name: 'limitTo',
		usage: ['$filter(\'limitTo\')($scope.array,2,0)'],
		desc: '数组截取几位',
		param: ['数组','截取几位','从索引号几开始截取'],
		tips: ['从索引号几开始截取默认0',]
	},
	{
		name: 'number',
		usage: ['$filter(\'number\')(1234.5678,2)'],
		desc: '数值截取几位',
		param: ['数值','截取几位'],
		tips: ['小数点保留位数<0时，当做0处理',]
	},
	{
		name: 'lowercase',
		usage: ['$filter(\'lowercase\')(str)'],
		desc: '字符串转换成小写',
		param: ['字符串',],
		tips: ['只转换字符',]
	},
];

// ng-directive
var ngDirective = [
	{
		name: 'ng-non-bindable',
		usage: ['<i ng-non-bindable>{{1234.5678 | currency : "￥" :0}}</i>'],
		desc: '不ng-bind',
	},
];