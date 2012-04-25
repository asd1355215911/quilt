(function(Kinetic) {

  var Template = Kinetic.View.extend({

    template: function(data) {
      var out = Kinetic.templates[this.options.name](data);

      // If layout is specified, render it with content.
      if (this.options.layout) {
        data.content = out;
        out = Kinetic.templates[this.options.layout](data);
      }

      return out;
    }

  });

  Kinetic.attributes.template = function(el, options) {

    // If `options` is a string, assume it's the template name.
    if (_.isString(options)) options = {name: options};

    options.el = el;
    options.model = this.resolve(options.model) || this.model;
    options.collection = this.resolve(options.collection) || this.collection;

    return new Template(options);
  };

})(Kinetic);