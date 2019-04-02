const Room = function(area){
  this.area = area;
  this.painted = false;
};

Room.prototype.paint = function(){
  this.painted = true;
  return this.painted;
};

module.exports = Room;
