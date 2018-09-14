#pragma strict

function Start () {

}

function Update () {

}
function OnTriggerEnter(other:Collider)
 {
 //Is the ball hits the trigger down at the bottom, desctroy it and game is lost
 if(other.tag=="ball")
 {
 // 退回到主页面
 Debug.Log("dead detected");
 Destroy(this.gameObject);
 GameObject.Find("Main Camera").GetComponent.<GameManager>().SetGameOver();
 
 
 }
  }