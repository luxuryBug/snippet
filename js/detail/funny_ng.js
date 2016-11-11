/**
 * studyNote about angular1.5.1
 */

var funnyNg = {
	function: ngFunc,
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