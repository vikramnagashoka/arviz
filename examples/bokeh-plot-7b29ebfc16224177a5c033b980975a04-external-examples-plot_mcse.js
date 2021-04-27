(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("6392ec82-6918-44ba-9c99-93fd147395d9");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '6392ec82-6918-44ba-9c99-93fd147395d9' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.3.1.min.js": "YF85VygJKMVnHE+lLv2AM93Vbstr0yo2TbIu5v8se5Rq3UQAUmcuh4aaJwNlpKwa", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.1.min.js": "KKuas3gevv3PvrlkyCMzffFeaMq5we/a2QsP5AUoS3mJ0jmaCL7jirFJN3GoE/lM", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.1.min.js": "MK/uFc3YT18pkvvXRl66tTHjP0/dxoSH2e/eiNMFIguKlun2+WVqaPTWmUy/zvh4"};
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.3.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.1.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"24020b14-6ba0-4e3f-bdcc-3b2dc2dc8719":{"defs":[],"roots":{"references":[{"attributes":{"data_source":{"id":"35525"},"glyph":{"id":"35524"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"35527"}},"id":"35526","type":"GlyphRenderer"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"35547"},"major_label_policy":{"id":"35546"},"ticker":{"id":"35476"}},"id":"35475","type":"LinearAxis"},{"attributes":{},"id":"35431","type":"DataRange1d"},{"attributes":{},"id":"35467","type":"DataRange1d"},{"attributes":{"end":1,"start":-0.05},"id":"35469","type":"DataRange1d"},{"attributes":{},"id":"35532","type":"AllLabels"},{"attributes":{},"id":"35437","type":"LinearScale"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"35550"},"major_label_policy":{"id":"35549"},"ticker":{"id":"35480"}},"id":"35479","type":"LinearAxis"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"35523","type":"Span"},{"attributes":{},"id":"35471","type":"LinearScale"},{"attributes":{"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"35556"},"selection_policy":{"id":"35555"}},"id":"35525","type":"ColumnDataSource"},{"attributes":{},"id":"35473","type":"LinearScale"},{"attributes":{"toolbars":[{"id":"35457"},{"id":"35493"}],"tools":[{"id":"35447"},{"id":"35448"},{"id":"35449"},{"id":"35450"},{"id":"35451"},{"id":"35452"},{"id":"35453"},{"id":"35454"},{"id":"35483"},{"id":"35484"},{"id":"35485"},{"id":"35486"},{"id":"35487"},{"id":"35488"},{"id":"35489"},{"id":"35490"}]},"id":"35559","type":"ProxyToolbar"},{"attributes":{},"id":"35476","type":"BasicTicker"},{"attributes":{"text":"mu"},"id":"35528","type":"Title"},{"attributes":{"axis":{"id":"35475"},"ticker":null},"id":"35478","type":"Grid"},{"attributes":{},"id":"35539","type":"UnionRenderers"},{"attributes":{"active_multi":null,"tools":[{"id":"35483"},{"id":"35484"},{"id":"35485"},{"id":"35486"},{"id":"35487"},{"id":"35488"},{"id":"35489"},{"id":"35490"}]},"id":"35493","type":"Toolbar"},{"attributes":{"source":{"id":"35525"}},"id":"35527","type":"CDSView"},{"attributes":{"toolbar":{"id":"35559"},"toolbar_location":"above"},"id":"35560","type":"ToolbarBox"},{"attributes":{"axis":{"id":"35479"},"dimension":1,"ticker":null},"id":"35482","type":"Grid"},{"attributes":{},"id":"35540","type":"Selection"},{"attributes":{},"id":"35480","type":"BasicTicker"},{"attributes":{},"id":"35452","type":"UndoTool"},{"attributes":{"overlay":{"id":"35491"}},"id":"35485","type":"BoxZoomTool"},{"attributes":{},"id":"35484","type":"PanTool"},{"attributes":{},"id":"35483","type":"ResetTool"},{"attributes":{},"id":"35486","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"35492"}},"id":"35487","type":"LassoSelectTool"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"35536"},"major_label_policy":{"id":"35535"},"ticker":{"id":"35444"}},"id":"35443","type":"LinearAxis"},{"attributes":{},"id":"35533","type":"BasicTickFormatter"},{"attributes":{},"id":"35488","type":"UndoTool"},{"attributes":{"overlay":{"id":"35456"}},"id":"35451","type":"LassoSelectTool"},{"attributes":{"axis":{"id":"35439"},"ticker":null},"id":"35442","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"35491","type":"BoxAnnotation"},{"attributes":{},"id":"35541","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"35455"}},"id":"35449","type":"BoxZoomTool"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"35492","type":"PolyAnnotation"},{"attributes":{},"id":"35448","type":"PanTool"},{"attributes":{},"id":"35447","type":"ResetTool"},{"attributes":{},"id":"35535","type":"AllLabels"},{"attributes":{},"id":"35542","type":"Selection"},{"attributes":{},"id":"35453","type":"SaveTool"},{"attributes":{},"id":"35450","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"35454","type":"HoverTool"},{"attributes":{},"id":"35553","type":"UnionRenderers"},{"attributes":{},"id":"35444","type":"BasicTicker"},{"attributes":{},"id":"35536","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"35439"}],"center":[{"id":"35442"},{"id":"35446"}],"height":500,"left":[{"id":"35443"}],"output_backend":"webgl","renderers":[{"id":"35505"},{"id":"35507"},{"id":"35508"},{"id":"35509"},{"id":"35512"}],"title":{"id":"35514"},"toolbar":{"id":"35457"},"toolbar_location":null,"width":500,"x_range":{"id":"35431"},"x_scale":{"id":"35435"},"y_range":{"id":"35433"},"y_scale":{"id":"35437"}},"id":"35430","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"35546","type":"AllLabels"},{"attributes":{},"id":"35554","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35503","type":"Circle"},{"attributes":{},"id":"35489","type":"SaveTool"},{"attributes":{"callback":null},"id":"35490","type":"HoverTool"},{"attributes":{"below":[{"id":"35475"}],"center":[{"id":"35478"},{"id":"35482"}],"height":500,"left":[{"id":"35479"}],"output_backend":"webgl","renderers":[{"id":"35519"},{"id":"35521"},{"id":"35522"},{"id":"35523"},{"id":"35526"}],"title":{"id":"35528"},"toolbar":{"id":"35493"},"toolbar_location":null,"width":500,"x_range":{"id":"35467"},"x_scale":{"id":"35471"},"y_range":{"id":"35469"},"y_scale":{"id":"35473"}},"id":"35466","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"35547","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"35455","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35504","type":"Circle"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD/upazjteTNP/DqXfy8Lcs/HHCIRHVOzT9orzckCyTOP6y8CkfbP8w/iNx/9NF5yz+IfM+LFJ/NPygi8KloJ8w/oK0q3zNVzD/YcLH58jHPP6hWLqhoMNQ/IGaMl5nu0j8AebTCVJLRP+D0hUiIM80/uNpKBpu90z/A00Fq0J3TP2iCFjW8ldY/kLBgWUSo1j8QCPgZgPnXPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"35540"},"selection_policy":{"id":"35539"}},"id":"35502","type":"ColumnDataSource"},{"attributes":{},"id":"35555","type":"UnionRenderers"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"35456","type":"PolyAnnotation"},{"attributes":{"axis":{"id":"35443"},"dimension":1,"ticker":null},"id":"35446","type":"Grid"},{"attributes":{},"id":"35549","type":"AllLabels"},{"attributes":{},"id":"35556","type":"Selection"},{"attributes":{"end":1,"start":-0.05},"id":"35433","type":"DataRange1d"},{"attributes":{"children":[[{"id":"35430"},0,0],[{"id":"35466"},0,1]]},"id":"35558","type":"GridBox"},{"attributes":{},"id":"35550","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"35511"},"glyph":{"id":"35510"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"35513"}},"id":"35512","type":"GlyphRenderer"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"35533"},"major_label_policy":{"id":"35532"},"ticker":{"id":"35440"}},"id":"35439","type":"LinearAxis"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2515582690238702},"id":"35507","type":"Span"},{"attributes":{"source":{"id":"35502"}},"id":"35506","type":"CDSView"},{"attributes":{"data_source":{"id":"35502"},"glyph":{"id":"35503"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35504"},"view":{"id":"35506"}},"id":"35505","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.1782444431478369},"id":"35508","type":"Span"},{"attributes":{"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"35542"},"selection_policy":{"id":"35541"}},"id":"35511","type":"ColumnDataSource"},{"attributes":{},"id":"35440","type":"BasicTicker"},{"attributes":{"source":{"id":"35516"}},"id":"35520","type":"CDSView"},{"attributes":{"text":"tau"},"id":"35514","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35518","type":"Circle"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"35509","type":"Span"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"35510","type":"Scatter"},{"attributes":{"source":{"id":"35511"}},"id":"35513","type":"CDSView"},{"attributes":{"data_source":{"id":"35516"},"glyph":{"id":"35517"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35518"},"view":{"id":"35520"}},"id":"35519","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.15209716424958658},"id":"35522","type":"Span"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35517","type":"Circle"},{"attributes":{"children":[{"id":"35560"},{"id":"35558"}]},"id":"35561","type":"Column"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"bcJe+Pxh3D88Eu5SUq3NPyL+eQAns8s/mzeOVbYJ1z+YvNPsmzTWP87j+UyletE/sIr1s8Bnzz8YN/msnr7PP8gPs0h4ec8/RNGUEkZ90z8g12riYrDUP+AlTxYjYc4/UBTOvdhAzD+AFwpyJ0DOPxDSzcUXbc4/kDNyJsikyj9AY0p3Si3PP8AWdsF70MQ/4I8dAXxLyD+grhW5nZrSPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"35554"},"selection_policy":{"id":"35553"}},"id":"35516","type":"ColumnDataSource"},{"attributes":{"active_multi":null,"tools":[{"id":"35447"},{"id":"35448"},{"id":"35449"},{"id":"35450"},{"id":"35451"},{"id":"35452"},{"id":"35453"},{"id":"35454"}]},"id":"35457","type":"Toolbar"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"35524","type":"Scatter"},{"attributes":{},"id":"35435","type":"LinearScale"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2148430013731262},"id":"35521","type":"Span"}],"root_ids":["35561"]},"title":"Bokeh Application","version":"2.3.1"}}';
                  var render_items = [{"docid":"24020b14-6ba0-4e3f-bdcc-3b2dc2dc8719","root_ids":["35561"],"roots":{"35561":"6392ec82-6918-44ba-9c99-93fd147395d9"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();