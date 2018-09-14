#pragma strict

//Declare the gamestate with enum, three states will be enough
// ...
enum Club{playing,won,lost};

//Declare the ball prefaf here, assign it !!!
// ...

var ball:Transform;
private var score:int;

private var picklecount:int;
private var normalcount:int;
private var frightenedcount:int;
private var takingrickcount:int;
private var bricks:int;
private var happyforevercount:int;
private var headcount:int;
private var totalbricks:int;
private var headtalkcount:int;
private var gamestate:Club;
private var back:AudioSource;
var timeadd:AudioClip;

private var onethird:boolean=false ;
static var CLUB:GameManager;
var buttonstyle:GUIStyle;
var buttonstyle2:GUIStyle;
var buttonstyle3:GUIStyle;
var buttonstyle4:GUIStyle;
var wonstyle:GUIStyle;
var labelstyle:GUIStyle;
var rick: Texture2D;
var onethirdbutton:GUIStyle;


//var backgroud: AudioClip ;
var boomscore: AudioClip ;
var electronic: AudioClip ;
var paddle: AudioClip ;
var normal:AudioClip;
var fff:AudioClip;
var wwwhat:AudioClip;
var smell:AudioClip;
var wublubdubdub:AudioClip;
var iampicklerick:AudioClip;
var showmewhat:AudioClip;
var sci:AudioClip;
var morty:AudioClip;
var win:AudioClip;
var timeball:AudioClip;
var paused:boolean=false;
var prize:Transform;
var huizhang:Transform;
var level1:int=0;




var timeleft:float=10.0f;

//Declare some private variables to track total number of bricks, how many 
// have been hit and the current game state, look at A4 for reference
// ...

function Awake()
{

score=0;
    picklecount=GameObject.FindGameObjectsWithTag("pickle").Length;
	normalcount=GameObject.FindGameObjectsWithTag("normal").Length;
	frightenedcount=GameObject.FindGameObjectsWithTag("frightened").Length;
	takingrickcount=GameObject.FindGameObjectsWithTag("talkingrick").Length;
	bricks=GameObject.FindGameObjectsWithTag("brick").Length;
	happyforevercount=GameObject.FindGameObjectsWithTag("happyforever").Length;
	headcount=GameObject.FindGameObjectsWithTag("head").Length;
	headtalkcount=GameObject.FindGameObjectsWithTag("headtalk").Length;
	if(Application.loadedLevelName=="A5")
	{
    //Instantiate the ball, choose position carefully 
    // ...	
    totalbricks=52;

	}
	if(Application.loadedLevelName=="A5-level2")
	{
    //Instantiate the ball, choose position carefully 
    // ...	
    totalbricks=61;


	}
//	totalbricks= picklecount+normalcount+frightenedcount+takingrickcount+bricks+happyforevercount+headcount+headtalkcount-1;
    Time.timeScale=1.0f;
//AudioSource.PlayClipAtPoint (backgroud, transform.position);
	//Initalize all the variables
	// ...
	
	// Create a ball from the prefab 
	CreateBall();
}

function CreateBall()
{
    //Instantiate the ball, choose position carefully 
    // ...	
	Instantiate (ball, Vector3(3.8, 1.18, 5.0), Quaternion.identity);
    
}
function reCreateBall()
{
    //Instantiate the ball, choose position carefully 
    // ...	

	Instantiate (ball, Vector3(3.8, 1.18, 5.0), Quaternion.identity);
    
}





function OnGUI()
{
	   // GUI.Label (Rect (Screen.width/2-700,Screen.height/2-450,50,50), rick);
		GUI.skin.button = buttonstyle;
		//GUILayout.Label ("Your " + score + "/" + totalbricks);
		GUI.Button (new Rect(Screen.width/2+630,Screen.height/2-450,130,60),score + "/" + totalbricks);  
		GUI.skin.button = buttonstyle4;
		if (gamestate == Club.lost) {
						//GUILayout.Label ("You Lost");
						if (GUI.Button (new Rect (Screen.width / 2-50, Screen.height / 2-40, 200, 130), "Try Again!!!")) {
								Application.LoadLevel (Application.loadedLevel);
									GameObject.Find("RealBall(clone)").GetComponent.<BallControl>().life=3;
						}
				} 
	
		else if (gamestate == Club.won) 
		{
			//GUILayout.Label("You won");
				GUI.skin.button = wonstyle;
			if(GUI.Button(new Rect(Screen.width/2-50,Screen.height/2-40,600,400),"You won!!!"))
			{
				Application.LoadLevel ("A5-level2");
			}

		}
			GUI.skin.button = buttonstyle2;
		if(GUI.Button(new Rect(Screen.width/2-600,Screen.height/2-450,80,80),""))
			{
				
				Application.LoadLevel ("A5-start");
			}
			GUI.skin.button = buttonstyle3;
		if(GUI.Button(new Rect(Screen.width/2-500,Screen.height/2-450,80,80),""))
			{
				paused =!paused;
    			if (paused) Time.timeScale = 0;
    			else Time.timeScale = 1;
			}
		if(level1==1)
			{
			if(GUI.Button(new Rect(Screen.width/2-500,Screen.height/2-450,80,80),""))	
    		{
    			Application.LoadLevel ("A5-level2");
    		}
			}

		
			//GUI.skin.button = onethirdbutton;
		//if(onethird==true)
		//{
			
		//	onethird=false;
		//	Debug.Log("fksjdfhkshfskhfksdjhfksdhfsd");
		
		//	//GUI.Button(new Rect (Screen.width / 2, Screen.height / 2, 200, 200), "");
		//	var clone100:Transform=Instantiate (prize, Vector3(27.5, 5.2, 15.1), Quaternion.identity);
		//	Destroy(clone100.gameObject,1.0f);
		//	var clone101:Transform=Instantiate (huizhang, Vector3(27.5, 5.2, 15.1), Quaternion.identity);
		//	  clone101.transform.Rotate(new Vector3(0,180,0));
		//	  AudioSource.PlayClipAtPoint (morty, transform.position,20.0f);
			
		
		//}

    //Display how may bricks hit, using label
    // ...

	//Display button if won or lost, then prompt player to, refer A4 
	//   1. Play again, reload the level 
	//   2. Load another level

	// ...
}

function HitBlock()
{

	//If a ball hit a brick , call this function to reacord
	// if all bricks hit, call WonGame()	// ...
	AudioSource.PlayClipAtPoint (boomscore, transform.position,5.0f);
	score++;
	if (score >= totalbricks) 
		{
			//AudioSource.PlayClipAtPoint (win,transform.position, 10.0f);
				AudioSource.PlayClipAtPoint (win, transform.position,5.0f);
		WonGame();

		}
	if(score==totalbricks/3)
	{
			
			onethird=true;
			
	}
	
		

}
function Timeadd()
{

	AudioSource.PlayClipAtPoint (timeadd, transform.position);
	AudioSource.PlayClipAtPoint (boomscore, transform.position,5.0f);
}
function Portal()
{
AudioSource.PlayClipAtPoint (boomscore, transform.position,5.0f);
AudioSource.PlayClipAtPoint (sci, transform.position,20.0f);
}
function Showme()
{
AudioSource.PlayClipAtPoint (boomscore, transform.position,5.0f);
AudioSource.PlayClipAtPoint (showmewhat, transform.position,20.0f);
}
function Pickle()
{
AudioSource.PlayClipAtPoint (boomscore, transform.position,5.0f);
AudioSource.PlayClipAtPoint (iampicklerick, transform.position,20.0f);
}
function Smell()
{
AudioSource.PlayClipAtPoint (boomscore, transform.position,5.0f);
AudioSource.PlayClipAtPoint (smell, transform.position,20.0f);
}
function Whatarewegonnado()
{
AudioSource.PlayClipAtPoint (boomscore, transform.position,5.0f);
AudioSource.PlayClipAtPoint (wwwhat, transform.position,20.0f);
}
function Findnormal()
{
AudioSource.PlayClipAtPoint (boomscore, transform.position,5.0f);
AudioSource.PlayClipAtPoint (normal, transform.position,20.0f);
}
function Findfff()
{
AudioSource.PlayClipAtPoint (boomscore, transform.position,5.0f);
AudioSource.PlayClipAtPoint (fff, transform.position,20.0f);
}
function Touchpaddle()
{
	AudioSource.PlayClipAtPoint (paddle, transform.position,20.0f);

	
}
function Mrmeseek2()
{
	AudioSource.PlayClipAtPoint (electronic, transform.position,5.0f);
AudioSource.PlayClipAtPoint (timeball, transform.position,5.0f);
}

function Mrmeseek()
{
	AudioSource.PlayClipAtPoint (electronic, transform.position,5.0f);

}
function WonGame()
{
	//game won, change the state and pause 
	//...
	AudioSource.PlayClipAtPoint (win, transform.position);
	Time.timeScale = 0.0f;
		gamestate = Club.won;

}

function LostBall()
{

	//How many ball left in the sc
	back=this.GetComponent.<AudioSource>();
		back.Stop();
    var ballsLeft:int = GameObject.FindGameObjectsWithTag("ball").Length;
    if(ballsLeft<=1){
        //Was the last ball..
    	SetGameOver();
    }
}

function SetGameOver()
{
	//Game over, change the game state and pause
		back=this.GetComponent.<AudioSource>();
		back.Stop();
		AudioSource.PlayClipAtPoint (wublubdubdub, transform.position);
		Time.timeScale = 0.0f;
		gamestate = Club.lost;
	
}

function Update()
{
if(Input.GetKey(KeyCode.Escape))
{
	Application.Quit();


}


if(Application.loadedLevel==("A5"))
{	
	level1=1;

}



}










