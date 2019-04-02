const PainterDecorator = function(){
  this.paint_stock = [];
};

PainterDecorator.prototype.add_paint_can = function( paintCan){
  this.paint_stock.push(paintCan);
};



module.exports = PainterDecorator;
