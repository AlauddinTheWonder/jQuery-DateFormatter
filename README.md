# jQuery-DateFormatter
jQuery DateFormatter can convert any kind of inserted date into desired formatted date. Means type Date in any form, can be formatted.

### What it does

Correct the entered date in desired format. 

Ex. Suppose someone entered any of below date format, all converted to desired format
```
31/12/2015 or 12/31/2015 or 2015-12-31 or 2015-31-12 or 1432635046 (timestamp) >> 12/31/2015
```


**All supported formates**
```
mm/dd/yyyy, dd/mm/yyyy, yyyy/mm/dd, yyyy/dd/mm
mm-dd-yyyy, dd-mm-yyyy, yyyy-mm-dd, yyyy-dd-mm
mm.dd.yyyy, dd.mm.yyyy, yyyy.mm.dd, yyyy.dd.mm
Timestamp
```


*Argument*
<br />
**Placeholder** : Decide output date format. *default*: mm/dd/yyyy



**Uses:**

```HTML
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
	<script src="dateformatter.js"></script>
</head>
<body>
	<input type="text" name="d1" id="d1" /><br><br>
	<input type="text" name="d2" id="d2" />

	<script type="text/javascript">
		$(function(){
			$('#d1, #d2').dateformatter({
				placeholder:'mm/dd/yyyy'
			});
		});
	</script>
</body>
</html>
```
