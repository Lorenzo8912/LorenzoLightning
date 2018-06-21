window.Counter= function(){
	var value=0; //private
	
    var increment= function(){
        value=value+1;
        return value;
    };

	var getValue: function(){
				return value;
	};
    return{
        increment:increment,
        getValue: getValue
    };
};