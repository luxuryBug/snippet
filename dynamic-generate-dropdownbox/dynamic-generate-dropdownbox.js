/**
 * dynamic-generate-dropdownbox.js
 * 动态生成下拉框
 * 当第n个下拉框的value发生改变时
 * [$("input[type='text']").change( function() {
		  // 这里可以写些验证代码
		});]
 *生成第n+1个下拉框
 */

console.log('dynamic-generate-dropdownbox--start');

$.ajax({ 
	url: "data.json", 
	success: function(data){
    var jsondata = JSON.parse(data);
    console.log(jsondata);
    createDropDownBox($('.wrap'),jsondata["province"],"province");
	}
})

// changeDropDownBox($("select.dynamic-dropdown-box"));
/**
 * 动态绑定change事件
 * @param  {[type]} jqEle [jq元素]
 * @return {[type]}       [description]
 */
function changeDropDownBox(jqEle){
	jqEle.change(function(e){
		console.log(e.target.value);
		console.log(this);

		if(!e.target.value){
			// 删除后边所有的下拉框
			deleteDropDownBox($(this))
		}else{
			// 删除后边所有的下拉框
			deleteDropDownBox($(this))
			// 动态生成新的下拉框
			createDropDownBox($(this))
		}
	});
}

/**
 * 删除后边所有的下拉框
 * @param  {[type]} jqEle [jq元素]
 * @return {[type]}       [description]
 */
function deleteDropDownBox(jqEle){
	jqEle.nextAll().remove();
}

/**
 * 动态生成新的下拉框
 * @param  {[type]} jqEle [jq元素]
 * @return {[type]}       [description]
 */
function createDropDownBox(jqEle,data,key){
	var htmlstr = [
		'<div class="dynamic-dropdown-box-group">'+
			'<select class="dynamic-dropdown-box" data-type="{{data.type}}>'+
			'</select>'+
		'</div>'
	].join('');
	debugger
	htmlstr = htmlstr.replace('{{data.type}}',key);
	var optionStr = '';
	// for(var k in data){
	// 	if(typeof data[k] == "object"){
			$.each(data,function(index,v){
				var optionOrigin = '<option value="{{info.id}}" data-type="{{info.type}}>{{info.name}}</option>';
				optionOrigin = optionOrigin.replace('{{info.id}}',v.id);
				optionOrigin = optionOrigin.replace('{{info.type}}',k);
				optionOrigin = optionOrigin.replace('{{info.name}}',v.name);
				optionStr += optionOrigin;
			});
	// 	}else{
	// 		htmlstr = htmlstr.replace('{{data.}}'+k,data[key][k]);
	// 	}
	// }

	var newJqEle = $(htmlstr);
	newJqEle.find('.dynamic-dropdown-box').append($(optionStr));

	changeDropDownBox(newJqEle);
	if(jqEle == $('.wrap')){
		jqEle.append(newJqEle);
	}else{
		jqEle.nextAll().remove();
		jqEle.after(newJqEle);
	}

}