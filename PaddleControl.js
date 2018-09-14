#pragma strict

//Declare the paddle speed here 
// ...
var speed:float=80.0f;
var horizontalMovement:Vector3;
var old1:boolean =false;
var old2:boolean =false;
var old3:boolean =false;
var huizhangold1:Transform;
var huizhangold2:Transform;
var huizhangold3:Transform;
var star:Texture;
function Start () {

}

function Update () {

	//Use GetAxis to transform the x coordinates, do not forget to use deltaTime and speed declared above
    // ...
    var movement:float=Input.GetAxis("Horizontal")*speed;
    movement *= Time.deltaTime;
    transform.Translate (movement, 0,0 );
	//Better to limit how far the paddle can go
	//You need to change the value after modification of your scene
	//horizontalMovement.x=Input.GetAxis("Horizontal")*speed;
    var max:float = 20.0f;
    if (transform.position.x <= -max || transform.position.x >= max){
        transform.position.x = Mathf.Clamp(transform.position.x, -max, max);
    }
    
    
    if(Input.GetKeyDown(KeyCode.Space))
    {	
    	transform.Translate(0,0,0.5);
    	//transform.Translate(0,0,-1);
    
    }
    if(Input.GetKeyUp(KeyCode.Space))
    {	
    	transform.Translate(0,0,-0.5);
    	//transform.Translate(0,0,-1);
    
    }
    
    

    
}

function OnGUI()
{
	    

		if(old1==true)
		{
			old1=false;
			Debug.Log("fksjdfhkshfskhfksdjhfksdhfsd");
		    GUI.Label (Rect (Screen.width/2+500,Screen.height/2-400,50,50), star);
			//GUI.Button(new Rect (Screen.width / 2, Screen.height / 2, 200, 200), "");
			//var clone101:Transform=Instantiate (huizhangold1, Vector3(20.5, 5.2, 25.1), Quaternion.identity);
			 // clone101.transform.Rotate(new Vector3(0,180,0));
			
			
		
		}
		if(old2==true)
		{
			old2=false;
			Debug.Log("fksjdfhkshfskhfksdjhfksdhfsd");
		
			//GUI.Button(new Rect (Screen.width / 2, Screen.height / 2, 200, 200), "");
			//var clone102:Transform=Instantiate (huizhangold2, Vector3(17.5, 5.2, 25.1), Quaternion.identity);
			 // clone102.transform.Rotate(new Vector3(0,180,0));
			 GUI.Label (Rect (Screen.width/2+550,Screen.height/2-400,50,50), star);
			
		
		}
			if(old3==true)
		{
			old3=false;
			Debug.Log("fksjdfhkshfskhfksdjhfksdhfsd");
		
			//GUI.Button(new Rect (Screen.width / 2, Screen.height / 2, 200, 200), "");
			//var clone103:Transform=Instantiate (huizhangold3, Vector3(14.5, 5.2, 25.1), Quaternion.identity);
			 // clone103.transform.Rotate(new Vector3(0,180,0));
			   GUI.Label (Rect (Screen.width/2+600,Screen.height/2-400,50,50), star);
			
		
		}




}

function OnTriggerEnter(other:Collider)
 {
 //Is the ball hits the trigger down at the bottom, desctroy it and game is lost
 if(other.tag=="timemachine1")
 {
  GameObject.Find("Main Camera").GetComponent.<Timerhh>().showtimeadd();
  GameObject.Find("Main Camera").GetComponent.<GameManager>().Timeadd();//sound
  Destroy(other.gameObject);
  old1=true;
  print("timemachine1");

 
  }
   if(other.tag=="timemachine2")
 {
  GameObject.Find("Main Camera").GetComponent.<Timerhh>().showtimeadd();
  GameObject.Find("Main Camera").GetComponent.<GameManager>().Timeadd();//sound
  Destroy(other.gameObject);

  old2=true;

 
  }
  
if(other.tag=="timemachine3")
 {
  GameObject.Find("Main Camera").GetComponent.<Timerhh>().showtimeadd();
  GameObject.Find("Main Camera").GetComponent.<GameManager>().Timeadd();//sound
  Destroy(other.gameObject);


  old3=true;
 
  }

 }















