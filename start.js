#pragma strict

var buttonstyle:GUIStyle;
var buttonstyle1:GUIStyle;
var buttonstyle2:GUIStyle;
var labelstyle:GUIStyle;
var backgroundsound:AudioClip;
var clickstart:AudioClip;
var argue:AudioClip;


function Start () {
 Time.timeScale=1.0f;
AudioSource.PlayClipAtPoint (backgroundsound, transform.position);

}

function OnGUI()
{
		GUI.skin.button = buttonstyle;
		//GUILayout.Label ("Your " + score + "/" + totalbricks);
		//if(GUI.skin.button.onHover())
		//{
		//AudioSource.PlayClipAtPoint (clickstart, transform.position);
		
	//	}
		
		if (GUI.Button (new Rect (Screen.width / 2-100, Screen.height / 2+50, 200, 60), "START!")) {
							AudioSource.PlayClipAtPoint (clickstart, transform.position);
							Invoke("otherlevel",1.0f);

						}
		
				
			GUI.skin.button = buttonstyle1;	
		if(GUI.Button(new Rect(Screen.width/2-100,Screen.height/2+250,200,55),"EXIT"))
			{
				AudioSource.PlayClipAtPoint (argue, transform.position);
							Invoke("quit",1.0f);
				
			}
				GUI.skin.button = buttonstyle2;	
		if(GUI.Button(new Rect(Screen.width/2-100,Screen.height/2+150,200,60),"HOW TO PLAY?"))
			{
				AudioSource.PlayClipAtPoint (clickstart, transform.position);
							Invoke("otherlevel2",1.0f);
				
			}


	// ...
}
function otherlevel2()
{
Application.LoadLevel ( "how");

}
function otherlevel()
{
Application.LoadLevel ( "A5");

}
function quit()
{
Application.Quit();

}

function Update () {



if(Input.GetKey(KeyCode.Escape))
{
	Application.Quit();


}







}