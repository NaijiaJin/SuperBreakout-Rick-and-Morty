#pragma strict

function Start () {
	
}

function Update () {
if(Input.GetKey(KeyCode.Escape))
{
	Application.Quit();


}


if(Input.GetKey(KeyCode.H))
{
	Application.LoadLevel ("A5-start");


}
	
}
