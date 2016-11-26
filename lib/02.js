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

      var IdView = Backbone.View.extend({
        template : _.template([
          "<h1>",
            "<%= id %>",
          "</h1>"
        ].join("")),
        render:function(){
          var html = this.template({id:this.id});
          $(this.el).html(html);
        }
      });



      var Workspace = Backbone.Router.extend({
        routes:{
          '':"pageItemView",
          'invoke/:id':"invoke"
        },
        "pageItemView":function(){

          pageItemView = new ItemView({
            model:pageItemModel,
            el:'body'
          });

          pageItemView.render();
        },
        "invoke":function(id){
          var Id_View = new IdView({
              "el":"body",
              "id":id
            });

          Id_View.render();
        }
      });

      new Workspace();

      Backbone.history.start();







  });
})(jQuery);
