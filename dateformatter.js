/*
 * Date Formatter
 * https://github.com/AlauddinTheWonder/jQuery-DateFormatter
 * Copyright (c) 2015 -	Alauddin Ansari
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 * Version: 0.0.0-dev
 * Uses: $('#dateinput').dateformatter({placeholder:'mm/dd/yyyy'});
 */


(function($){
	$.fn.dateformatter = function(options){
		var settings = $.extend({
            placeholder: "mm/dd/yyyy",
        }, options );

		this.each(function() {
			$(this).attr({'placeholder': settings.placeholder, 'maxlength' : 10});
		});

		this.on('keypress', function(e){
			var key = e.keyCode ? e.keyCode : e.which;
			if(key != 45 && key != 46 && key != 47){
				if ( isNaN( String.fromCharCode(key) ) ) return false;
			}
		});

		this.on('blur', function(){
			var _od = $(this).val();
			var _nd = "";

			if(_od.trim() != "")
			{
				var splitter = "";
				var _splits = "";
				var y, m, d;


				if(_od.indexOf('/') > 0)
				{
					splitter = "/";
				}
				else if(_od.indexOf('-') > 0)
				{
					splitter = "-";
				}
				else if(_od.indexOf('.') > 0)
				{
					splitter = ".";
				}
				else
				{
					var dt = new Date(_od*1000);
					console.log(dt);
					splitter = "/";
					_od = (dt.getMonth()+1) + splitter + dt.getDate() + splitter + dt.getFullYear();
				}

				if(splitter != "")
				{
					_splits = _od.split(splitter);
					if(_splits.length == 3)
					{
						// suppose given date is mm-dd-yyyy
						m = parseInt(_splits[0]);
						d = parseInt(_splits[1]);
						y = parseInt(_splits[2]);

						// if year is mis-placed Ex. yyyy-mm-dd
						if(y.toString().length < 4 && m.toString().length == 4)
						{
							var c = m;
							m = d;
							d = y;
							y = c;
						}

						// if month and date inter-changed Ex. dd-mm-yyyy
						if(m > 12 && d <= 12)
						{
							var c = d;
							d = m;
							m = c;
						}

						// Final check
						if(m <= 12 && d <= 31 && y.toString().length == 4){
							m = (m < 10) ? "0"+m : m;
							d = (d < 10) ? "0"+d : d;

							var fmt = settings.placeholder.toLowerCase();
							var newfmt = fmt.replace('mm', m).replace('dd', d).replace('yyyy', y).replace('m', m).replace('d', d).replace('yy', y).replace('y', y);
							_nd = newfmt;
						}
					}
				}

			}
			$(this).val(_nd);
		});
	}
})(jQuery);