#pragma strict


var moreballs:Transform;
var magicbox:Transform;

var speed:float =10.0f;

function Start () {

}

function Update () {
	
	transform.Rotate(0,Time.deltaTime*speed, 0);

}


function OnCollisionEnter(other:Collision)
{
	//If hits with the ball, then desctroy itself and add one mark
	// ...
	if(other.gameObject.tag=="ball")
	{
		
	
		//padle particle 
		var clone :Transform=Instantiate(moreballs,transform.position,Quaternion.identity);
   	    Destroy(clone.gameObject,10.0f);
   	    GameObject.Find("Main Camera").GetComponent.<GameManager>().Mrmeseek();
		//box particle
		var clone1 :Transform=Instantiate(magicbox,transform.position,Quaternion.identity);
   	    Destroy(clone1.gameObject,1.0f);
		
		Destroy(gameObject);
		Debug.Log("destroy");
		//var GM=GetComponent("GameManager");
		//GameManager.CLUB.HitBlock();
		GameObject.Find("Main Camera").GetComponent.<GameManager>().HitBlock();
			GameObject.Find("Main Camera").GetComponent.<GameManager>().Mrmeseek2();
		//GameObject.Find("脚本所在的物体的名字").GetComponent<脚本名>().函数名()
	}
	
	
	
}

function OnCollisionExit(other:Collision)
{
	//If hits with the ball, then desctroy itself and add one mark
	// ...
	
	if(other.collider.tag=="ball")
	{
		Destroy(gameObject);
	}
	
}
