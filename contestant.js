class Contestant {
  constructor(){
    this.index = null;
    this.answer = 0;
    this.name = null;
  }

  getCount(){
    var contestantCountRef = database.ref('contestantCount');
    contestantCountRef.on("value",function(data){
      contestantCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      contestantCount: count
    });
  }

  update(){
    var contestantIndex = "players/player" + this.index;
    database.ref(contestantIndex).set({
      name:this.name,
      answer:this.answer
    });
  }

  static getcontestantInfo(){

    var contestantInfoRef = database.ref('players')
    contestantInfoRef.on("value",(data)=>{
      allContestant = data.val();
    })
  }
}
