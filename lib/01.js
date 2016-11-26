(function($){
  $(function(){

      var ItemModel = Backbone.Model.extend({
        defaults:{
          price:0,
          quantity:0
        },
        calculateAmount:function(){
          return this.get("price") * this.get("quantity");
        }
      });

      var pageItemModel = new ItemModel({
        price:2,
        quantity:3
      });

      var ItemView = Backbone.View.extend({
        template : _.template([
          "<div>",
            "<p>price:<%= price %></p>",
          "</div>"
        ].join("")),
        render:function(){
          var html = this.template({price:this.model.get("price")});
          $(this.el).html(html);
        }
      });

      pageItemView = new ItemView({
        model:pageItemModel,
        el:'body'
      });

      pageItemView.render();
  });
})(jQuery);
