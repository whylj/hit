class GuaScene {
    constructor(game){
      this.game = game
    }
    draw(){
      alert('一定要继承本函数')
    }
    update(){

    }
    static new(game) {
      var i = new this(game)
      return i
    }
}
