/**
 * @author luxurybug
 * basicDocs for JavaScript protogenesis
 */

var funnyJs = {
	extraWord: extraWord,
};


// 拓展词汇
var extraWord = [
	{
		name: "expect.js",
		usage: [],
		desc: "Expect.js 库应用十分广泛，它拥有很好的仿自然语言的方法"
	},
];

var jsFunc = [
	{
		name: 'apply',
		usage: ['oldObj.apply(newObj,[])'],
		desc: '调用别的对象的方法，改变this指向，传递数组',
		segement:`
			var arr = [11,22,33,44];
			Math.max(arr); // NaN
			Math.max.apply({},arr);  // 44
		`,
	},
	{
		name: 'call',
		usage: ['oldObj.call(newObj,para1,para2,para3)'],
		desc: '调用别的对象的方法，改变this指向，传递多个参数',
	},
];