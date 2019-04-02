const assert = require('assert');
const PainterDecorator = require('../painter_decorator.js');
const Room = require('../room.js');
const PaintCan = require('../paint_can.js');

describe("PainterDecorator", function(){
  let painterDecorator;

  beforeEach(function(){
    painterDecorator = new PainterDecorator();
    paintCan = new PaintCan(10, false);
  });

  it("should have an empty paint stock", function(){
    const actual = painterDecorator.paint_stock
    assert.deepStrictEqual(actual, []);
  });

  it("should be able to add a paint can to paint stock", function(){
    painterDecorator.add_paint_can(paintCan);
    const actual = painterDecorator.paint_stock;
    assert.deepStrictEqual(actual, [paintCan]);
  })

    describe("PaintCan", function(){
      let paintCan;

      beforeEach(function(){
        paintCan = new PaintCan(10, false);
      });

      it("should have a volume", function(){
        const actual = paintCan.volume;
        assert.strictEqual(actual, 10);
      });

      it("should check if it's empty", function() {
        const actual = paintCan.check_empty();
        assert.strictEqual(actual, false);
      });

      it("should be able to empty itself", function() {
        paintCan.empty_can();
        const actual = paintCan.check_empty();
        assert.strictEqual(actual, true);
      });
    });

    describe("Room", function(){
      let room;

      beforeEach(function(){
        room = new Room(50, false);
      });

      it("should have an area", function(){
        const actual = room.area;
        assert.strictEqual(actual, 50);
      });

      it("should be unpainted", function(){
        const actual = room.painted;
        assert.strictEqual(actual, false);
      });


      it("should be able to be painted", function(){
        room.paint();
        const actual = room.painted;
        assert.strictEqual(actual, true);
      });



    });

});
