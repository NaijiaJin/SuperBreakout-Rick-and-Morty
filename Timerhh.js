#pragma strict


var  Maxtime:float=90;
var CountDown:float;
var timestyle:GUIStyle;
var showtime:float;
var addnumber:int=0;
var miao:Transform;

function Start () {
CountDown = Maxtime;
miao.GetComponent.<SpriteRenderer>().enabled=false;
}

function FixedUpdate () {
	CountDown -= Time.deltaTime;
	showtime=Mathf.RoundToInt(CountDown)+addnumber;
	addnumber=0;
	// i am a genius!!!!!!
	//CountDown=Mathf.FloorToInt(CountDown);
	//WaitForSeconds(1);
	//var b:float = (float)(Mathf.Round(CountDown*100))/100;
	//Debug.Log(b);
if (CountDown <= 0) {
			GameObject.Find("Main Camera").GetComponent.<GameManager>().SetGameOver();	
		}

}
function OnGUI()
{

	GUI.skin.button = timestyle;
	//GameObject.Find("Main Camera").GetComponent.<GameManager>().SetGameOver();
	GUI.Button (new Rect(Screen.width/2+460,Screen.height/2-450,130,60), showtime+"s"); 		
	if(showtime==30)
	{
	    miao.GetComponent.<SpriteRenderer>().enabled=true;
        
	}
	if(showtime<25)
	{
	    miao.GetComponent.<SpriteRenderer>().enabled=false;
	}
		
		
		
}
function showtimeadd()
{
			addnumber=20;		
		}




