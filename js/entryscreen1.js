$today = new Date();
$yesterday = new Date($today);
$yesterday.setDate($today.getDate() - 1);

var $dd = $yesterday.getDate();
var $mm = $yesterday.getMonth()+1; //January is 0!

var $yyyy = $yesterday.getFullYear();
if($dd<10){$dd='0'+dd} if($mm<10){$mm='0'+$mm} $yesterday = $dd+'/'+$mm+'/'+$yyyy;

var dateElement = document.getElementById("date-value");
dateElement.innerHTML = $yesterday;