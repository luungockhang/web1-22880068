(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['about-us-template'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<h1 class=\"py-3\">About Us</h1>\r\n<div>\r\n    <img src=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"thumbpath") : depth0), depth0))
    + "\" alt=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "\" class=\"float-start rounded-4 me-3\">\r\n    <div class=\"text-black-50\">"
    + ((stack1 = alias1((depth0 != null ? lookupProperty(depth0,"summary") : depth0), depth0)) != null ? stack1 : "")
    + "</div>\r\n    <a href=\"#aboutus/"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "\" class=\"btn btn-link readmore ps-0\"\r\n        onclick=\"loadDetails('aboutus/"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "','details-template','content')\">Read more</a>\r\n</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":9,"column":9}}})) != null ? stack1 : "");
},"useData":true});
templates['details-template'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <h1 class=\"py-3\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "</h1>\r\n    <img src=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"imagepath") : depth0), depth0))
    + "\" alt=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "\" class=\"float-start rounded-4 me-3\">\r\n    <p>"
    + ((stack1 = alias1((depth0 != null ? lookupProperty(depth0,"description") : depth0), depth0)) != null ? stack1 : "")
    + "</p>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"container overflow-auto\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":6,"column":13}}})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
templates['our-team-template'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"col-lg-3 col-md-6 col-sm-12\">\r\n        <a href=\"#team/"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "\" class=\"text-decoration-none\"\r\n            onclick=\"loadDetails('team/"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "','details-template','content')\">\r\n            <img src=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"thumbpath") : depth0), depth0))
    + "\" alt=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "\" class=\"rounded-4 mb-3 img-fluid\">\r\n            <h4 class=\"text-black\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "</h4>\r\n            <div class=\"text-black-50\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"summary") : depth0), depth0))
    + "</div>\r\n        </a>\r\n    </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<h1>Our Team</h1>\r\n<div class=\"row py-3\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":12,"column":13}}})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
templates['our-vision-template'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"clearfix mb-3\">\r\n    <a class=\"text-decoration-none\" href=\"#visions/"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "\"\r\n        onclick=\"loadDetails('visions/"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "','details-template','content')\">\r\n        <img src=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"thumbpath") : depth0), depth0))
    + "\" alt=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "\" class=\"float-start me-3 rounded-4\">\r\n        <h3 class=\"text-black\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "</h3>\r\n        <p class=\"text-black-50\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"summary") : depth0), depth0))
    + "</p>\r\n    </a>\r\n</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<h1 class=\"py-3\">Our Vision</h1>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":11,"column":9}}})) != null ? stack1 : "");
},"useData":true});
templates['testimonials-template'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"col\">\r\n            <div class=\"text-black-50\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"summary") : depth0), depth0))
    + "</div>\r\n            <span class=\"text-white\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "</span><br>\r\n            <a href=\"#\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"email") : depth0), depth0))
    + "</a>\r\n        </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"container\">\r\n    <h1 class=\"text-white pt-5\">Testimonials</h1>\r\n    <div class=\"row py-3\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":8},"end":{"line":10,"column":17}}})) != null ? stack1 : "")
    + "    </div>\r\n</div>";
},"useData":true});
})();