const PaintCan = function(volume, is_empty){
  this.volume = volume;
  this.is_empty = false;
};

PaintCan.prototype.check_empty = function(){
  return this.is_empty;
};

PaintCan.prototype.empty_can = function(){
  this.is_empty = true;
};

module.exports = PaintCan;
