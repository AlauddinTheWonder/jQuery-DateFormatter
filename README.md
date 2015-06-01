# jQuery-DateFormatter
jQuery DateFormatter can make any kind of inserted date into a formatted date

**Uses**

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
