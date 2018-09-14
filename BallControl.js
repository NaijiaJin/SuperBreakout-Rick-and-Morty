#pragma strict

//This script controls the ball movement 
//First declare the max/min speed for the ball
// ... 
var maxspeed:float=10000.0f;
var minspeed:float =100.0f;
var speed:float=200.0f;
var kaboom:Transform;
var mrtail:Transform;
var picklechange:Transform;
var moreballs:Transform;
var boing:Transform;
var pickleparticle:Transform;
var timemachine:Transform;
var gold:Transform;
var red:Transform;
var m_preVelocity:Vector3=Vector3.zero;
static var life:int=3;
var heart:Texture;
var holder:Texture;
function Awake(){
	//Set the initial speed of ball
	//rigidbody.velocity = ;
	
	var rb:Rigidbody =this.GetComponent.<Rigidbody>();
	GetComponent.<Rigidbody>().velocity=new Vector3(Random.Range(-20.0f,20.0f),0,30);
}


function Update () {

	//Make sure we stay between the MAX and MIN speed
	//Get the current speed 
	var totalVelocity:float = Vector3.Magnitude(GetComponent.<Rigidbody>().velocity);
    if (totalVelocity <= minspeed || totalVelocity >= maxspeed){
        totalVelocity = Mathf.Clamp(totalVelocity, minspeed, maxspeed);
    }
    if(Input.GetKey(KeyCode.V))
    {this.GetComponent.<Rigidbody>().velocity*=1.5;
    
    }
    //Limit the ball speed if it exceeds max/min value
    //scale the rigidbody.velocity
    if(life==0)
   { GameObject.Find("Main Camera").GetComponent.<GameManager>().SetGameOver();
  life=-1;
   }


}
function hitFactor(ballPos:Vector3 , paddlePos:Vector3 ,paddletWidth:float ) {
    // ascii art:
    //
    // 1  -0.5  0  0.5   1  <- x value
    // ===================  <- racket
    //
    return (ballPos.x - paddlePos.x) / paddletWidth;
}

function OnCollisionEnter(other:Collision)
{
   
   if(other.collider.CompareTag("padle"))
   {
  	   var x:float=hitFactor(transform.position,other.transform.position,other.collider.bounds.size.x);
        // Calculate direction, set length to 1
       var dir :Vector3 = new Vector3(x, 1,1).normalized;
        // Set Velocity with dir * speed
       this.GetComponent.<Rigidbody>().velocity =3* dir * speed;
       GameObject.Find("Main Camera").GetComponent.<GameManager>().Touchpaddle();
   //rigidbody.AddForce(1000,0,1000);
   }
   
   if(other.collider.CompareTag("brick"))//做了改动 不知道能否行
   {
    var x1:float=hitFactor(transform.position,other.transform.position,other.collider.bounds.size.x);
        // Calculate direction, set length to 1
    var dir1 :Vector3 = new Vector3(x1, 1,1).normalized;
        // Set Velocity with dir * speed
    this.GetComponent.<Rigidbody>().velocity =3* dir1 * speed;	
    Debug.Log("brick detected");
    var clone :Transform=Instantiate(kaboom,transform.position,Quaternion.identity);
   	Destroy(other.gameObject);
   	Destroy(clone.gameObject,1.0f);
   	GameObject.Find("Main Camera").GetComponent.<GameManager>().HitBlock();
   
   }
    if(other.collider.CompareTag("normal"))
   {	
       var x2:float=hitFactor(transform.position,other.transform.position,other.collider.bounds.size.x);
        // Calculate direction, set length to 1
       var dir2 :Vector3 = new Vector3(x2, 1,1).normalized;
        // Set Velocity with dir * speed
       this.GetComponent.<Rigidbody>().velocity =3* dir2 * speed;	
       Debug.Log("brick detected");
       var clone2 :Transform=Instantiate(kaboom,transform.position,Quaternion.identity);
   	   Destroy(other.gameObject);
   	   Destroy(clone2.gameObject,1.0f);
   	   GameObject.Find("Main Camera").GetComponent.<GameManager>().Findnormal();
   	   GameObject.Find("Main Camera").GetComponent.<GameManager>().HitBlock();
   
   }
    if(other.collider.CompareTag("frightened"))
   {
       Debug.Log("brick detected");
       var x3:float=hitFactor(transform.position,other.transform.position,other.collider.bounds.size.x);
        // Calculate direction, set length to 1
       var dir3 :Vector3 = new Vector3(x3, 1,1).normalized;
        // Set Velocity with dir * speed
       this.GetComponent.<Rigidbody>().velocity =3* dir3 * speed;	
       var clone3 :Transform=Instantiate(kaboom,transform.position,Quaternion.identity);
   	   Destroy(other.gameObject);
   	   Destroy(clone3.gameObject,1.0f);
   	   GameObject.Find("Main Camera").GetComponent.<GameManager>().HitBlock();
   	   GameObject.Find("Main Camera").GetComponent.<GameManager>().Findfff();
   
   }
   if(other.collider.CompareTag("talkingrick"))
   {	
       Debug.Log("brick detected");
       var clone4 :Transform=Instantiate(kaboom,transform.position,Quaternion.identity);
       Destroy(other.gameObject);
   	   Destroy(clone4.gameObject,1.0f);
   	   GameObject.Find("Main Camera").GetComponent.<GameManager>().HitBlock();
   	   GameObject.Find("Main Camera").GetComponent.<GameManager>().Smell();
   
   }
   
   if(other.collider.CompareTag("mr"))
   {//this.transform.localScale=new Vector3(2.0f,2.0f,2.0f);
    var x5:float=hitFactor(transform.position,other.transform.position,other.collider.bounds.size.x);
        // Calculate direction, set length to 1
    var dir5 :Vector3 = new Vector3(x5, 1,1).normalized;
        // Set Velocity with dir * speed
    this.GetComponent.<Rigidbody>().velocity =3* dir5 * speed;	
    var clone1 :Transform=Instantiate(mrtail,transform.position,Quaternion.identity);
    clone1.transform.parent=this.transform;
    var clone5:Transform=Instantiate(kaboom,transform.position,Quaternion.identity);
   	Destroy(clone5.gameObject,0.5f);
   	Destroy(other.gameObject);
   	GameObject.Find("Main Camera").GetComponent.<GameManager>().HitBlock();
  //  GameObject.Find("Main Camera").GetComponent.<GameManager>().Whatarewegonnado();
   }
   

   if(other.collider.CompareTag("border"))
   {	
     this.GetComponent.<Rigidbody>().velocity.z -=0.5;;
   }
    //pickle rick 变身
   if(other.collider.CompareTag("pickle"))
   {
    var x6:float=hitFactor(transform.position,other.transform.position,other.collider.bounds.size.x);
        // Calculate direction, set length to 1
    var dir6 :Vector3 = new Vector3(x6, 1,1).normalized;
        // Set Velocity with dir * speed
    this.GetComponent.<Rigidbody>().velocity =3* dir6 * speed;	
    Debug.Log("pickle detected");
    var clone7:Transform=Instantiate(pickleparticle,transform.position,Quaternion.identity);
   	Destroy(clone7.gameObject,0.5f);
    var clone6 :Transform=Instantiate(picklechange,transform.position,Quaternion.identity);
    clone6.transform.Rotate(new Vector3(0,180,0));
    clone6.transform.Translate(new Vector3(0,0,0.5));
   	Destroy(other.gameObject);
   	GameObject.Find("Main Camera").GetComponent.<GameManager>().Pickle();
   	GameObject.Find("Main Camera").GetComponent.<GameManager>().HitBlock();
   	Invoke("happytag",1.0f);
   
   }
  if(other.collider.CompareTag("happyforever"))
   {	
     var x7:float=hitFactor(transform.position,other.transform.position,other.collider.bounds.size.x);
        // Calculate direction, set length to 1
     var dir7 :Vector3 = new Vector3(x7, 1,1).normalized;
        // Set Velocity with dir * speed
     this.GetComponent.<Rigidbody>().velocity =3* dir7 * speed;	
     Debug.Log("delight detected");
     var clone8 :Transform=Instantiate(kaboom,transform.position,Quaternion.identity);
     Destroy(other.gameObject);
   	 Destroy(clone8.gameObject,1.0f);
   	 GameObject.Find("Main Camera").GetComponent.<GameManager>().HitBlock();
   	//GameObject.Find("Main Camera").GetComponent.<GameManager>().Smell();
   
   }
    if(other.collider.CompareTag("head"))
   {	
     var x8:float=hitFactor(transform.position,other.transform.position,other.collider.bounds.size.x);
        // Calculate direction, set length to 1
     var dir8 :Vector3 = new Vector3(x8, 1,1).normalized;
        // Set Velocity with dir * speed
     this.GetComponent.<Rigidbody>().velocity =3* dir8 * speed;	
     Debug.Log("delight detected");
     var clone9 :Transform=Instantiate(boing,transform.position,Quaternion.identity);
     Destroy(other.gameObject);
   	 Destroy(clone9.gameObject,1.0f);
   	 GameObject.Find("Main Camera").GetComponent.<GameManager>().HitBlock();
   	//GameObject.Find("Main Camera").GetComponent.<GameManager>().Smell();
   
   }
    if(other.collider.CompareTag("headtalk"))
   {	
     var x9:float=hitFactor(transform.position,other.transform.position,other.collider.bounds.size.x);
        // Calculate direction, set length to 1
     var dir9 :Vector3 = new Vector3(x9, 1,1).normalized;
        // Set Velocity with dir * speed
     this.GetComponent.<Rigidbody>().velocity =3* dir9 * speed;	
     Debug.Log("delight detected");
     var clone10 :Transform=Instantiate(boing,transform.position,Quaternion.identity);
     Destroy(other.gameObject);
   	 Destroy(clone10.gameObject,1.0f);
   	 GameObject.Find("Main Camera").GetComponent.<GameManager>().HitBlock();
   	GameObject.Find("Main Camera").GetComponent.<GameManager>().Showme();
   
   }
    if(other.collider.CompareTag("timemachine"))
   {	
     var x10:float=hitFactor(transform.position,other.transform.position,other.collider.bounds.size.x);
        // Calculate direction, set length to 1
     var dir10 :Vector3 = new Vector3(x10, 1,1).normalized;
        // Set Velocity with dir * speed
     this.GetComponent.<Rigidbody>().velocity =3* dir10 * speed;	
     Debug.Log("delight detected");
     var clone11:Transform=Instantiate(timemachine,transform.position,Quaternion.identity);
     Destroy(other.gameObject);
   	 clone11.transform.Rotate(new Vector3(0,180,0));
  

   	 GameObject.Find("Main Camera").GetComponent.<GameManager>().HitBlock();
   	GameObject.Find("Main Camera").GetComponent.<GameManager>().Portal();
   
   }
   if(other.collider.CompareTag("timemachine1"))
   {	
     var x11:float=hitFactor(transform.position,other.transform.position,other.collider.bounds.size.x);
        // Calculate direction, set length to 1
     var dir11 :Vector3 = new Vector3(x11, 1,1).normalized;
        // Set Velocity with dir * speed
     this.GetComponent.<Rigidbody>().velocity =3* dir11 * speed;	
     Debug.Log("delight detected");
     var clone12:Transform=Instantiate(gold,transform.position,Quaternion.identity);
     Destroy(other.gameObject);
   	 clone12.transform.Rotate(new Vector3(0,180,0));
  

   	 GameObject.Find("Main Camera").GetComponent.<GameManager>().HitBlock();
   	GameObject.Find("Main Camera").GetComponent.<GameManager>().Portal();
   
   }
    if(other.collider.CompareTag("timemachine2"))
   {	
     var x13:float=hitFactor(transform.position,other.transform.position,other.collider.bounds.size.x);
        // Calculate direction, set length to 1
     var dir13 :Vector3 = new Vector3(x13, 1,1).normalized;
        // Set Velocity with dir * speed
     this.GetComponent.<Rigidbody>().velocity =3* dir13 * speed;	
     Debug.Log("delight detected");
     var clone13:Transform=Instantiate(red,transform.position,Quaternion.identity);
     Destroy(other.gameObject);
   	 clone13.transform.Rotate(new Vector3(0,180,0));
  

   	 GameObject.Find("Main Camera").GetComponent.<GameManager>().HitBlock();
   	GameObject.Find("Main Camera").GetComponent.<GameManager>().Portal();
   
   }
   
   
   
}   
function happytag()
{
var rick=GameObject.FindGameObjectWithTag("happyrick");
rick.tag="happyforever";

}

function OnTriggerEnter(other:Collider)
 {
 //Is the ball hits the trigger down at the bottom, desctroy it and game is lost
 if(other.tag=="dead")
 {
 // 退回到主页面
 Debug.Log("dead detected");
 Destroy(this.gameObject);
 life--;
 Debug.Log(life);
 GameObject.Find("Main Camera").GetComponent.<GameManager>().CreateBall();
  if(life==0)
   { GameObject.Find("Main Camera").GetComponent.<GameManager>().SetGameOver();}
 //GameObject.Find("Main Camera").GetComponent.<GameManager>().SetGameOver();
 
 
 }
 
 if(other.tag=="portal1")
 {
 // 退回到主页面
 Debug.Log("portal1 detected");

 this.transform.position=new Vector3(-16.6f,1f,20.69f);
 GetComponent.<Rigidbody>().velocity=Vector3(25,0,-20);
 GameObject.Find("Main Camera").GetComponent.<GameManager>().Portal();
 //belonger.transform.localScale=new Vector3(20.0f,1.0f,1.0f);
 

 
 
 }
 
 if(other.tag=="portal2")
 {
 // 退回到主页面
 Debug.Log("portal1 detected");

 this.transform.position=new Vector3(-12.5f,1f,7.7f);
 GetComponent.<Rigidbody>().velocity=Vector3(25,0,20);
  GameObject.Find("Main Camera").GetComponent.<GameManager>().Portal();
 //belonger.transform.localScale=new Vector3(20.0f,1.0f,1.0f);
 

 
 
 }
 
  }
 
 
 

 function OnGUI()
{
	//	GUI.Label(Rect(Screen.width/2+280,Screen.height/2-450,350,60), holder);
		if(life==3)
	  {  GUI.Label (Rect (Screen.width/2+700,Screen.height/2-360,40,40), heart);
	  GUI.Label (Rect (Screen.width/2+700,Screen.height/2-320,40,40), heart);
	  GUI.Label (Rect (Screen.width/2+700,Screen.height/2-280,40,40), heart);


	  }
	  if(life==2)
	  {  GUI.Label (Rect (Screen.width/2+700,Screen.height/2-360,40,40), heart);
	  GUI.Label (Rect (Screen.width/2+700,Screen.height/2-320,40,40), heart);
	 

	  }
	  if(life==1)
	  {  GUI.Label (Rect (Screen.width/2+700,Screen.height/2-360,40,40), heart);


	  }
	  if(life==0)
	  { 

	  }
		
}
