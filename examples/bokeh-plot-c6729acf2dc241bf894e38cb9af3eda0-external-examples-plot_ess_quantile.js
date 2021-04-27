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
    
      
      
    
      var element = document.getElementById("b00b3d39-4524-4b47-8080-b2452eda619b");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b00b3d39-4524-4b47-8080-b2452eda619b' but no matching script tag was found.")
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
                    
                  var docs_json = '{"db57f35e-7925-43de-baa4-6332b231206a":{"defs":[],"roots":{"references":[{"attributes":{"overlay":{"id":"17829"}},"id":"17823","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"17828","type":"HoverTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"17829","type":"BoxAnnotation"},{"attributes":{},"id":"17851","type":"BasicTickFormatter"},{"attributes":{},"id":"17853","type":"AllLabels"},{"attributes":{"data_source":{"id":"17840"},"glyph":{"id":"17841"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17842"},"view":{"id":"17844"}},"id":"17843","type":"GlyphRenderer"},{"attributes":{},"id":"17811","type":"LinearScale"},{"attributes":{},"id":"17826","type":"UndoTool"},{"attributes":{},"id":"17850","type":"AllLabels"},{"attributes":{},"id":"17821","type":"ResetTool"},{"attributes":{"children":[{"id":"17862"},{"id":"17860"}]},"id":"17863","type":"Column"},{"attributes":{"toolbar":{"id":"17861"},"toolbar_location":"above"},"id":"17862","type":"ToolbarBox"},{"attributes":{},"id":"17814","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17842","type":"Circle"},{"attributes":{"children":[[{"id":"17804"},0,0]]},"id":"17860","type":"GridBox"},{"attributes":{},"id":"17809","type":"LinearScale"},{"attributes":{},"id":"17858","type":"Selection"},{"attributes":{"text":"sigma"},"id":"17846","type":"Title"},{"attributes":{"toolbars":[{"id":"17831"}],"tools":[{"id":"17821"},{"id":"17822"},{"id":"17823"},{"id":"17824"},{"id":"17825"},{"id":"17826"},{"id":"17827"},{"id":"17828"}]},"id":"17861","type":"ProxyToolbar"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"17845","type":"Span"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17841","type":"Circle"},{"attributes":{},"id":"17818","type":"BasicTicker"},{"attributes":{"overlay":{"id":"17830"}},"id":"17825","type":"LassoSelectTool"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"R2riOHxslUDJrxt4rb2XQC8UfR7VtJlAMRHUGWndmUBKO3TVSyObQNp1b/0mJp1ASsbCePPwnkB+Du/cq5qgQH8ihBoHoKBAjJ8qLZB5oECYlOwhLnyfQD8CvMP22p1A58Gm42rqnEALInuU09KdQICWYY7d25xA2A/0ZSlsnEBzLBEly1mdQE4F40OedZlAKS7heDC7m0BmB8tcKnmYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17858"},"selection_policy":{"id":"17857"}},"id":"17840","type":"ColumnDataSource"},{"attributes":{},"id":"17854","type":"BasicTickFormatter"},{"attributes":{},"id":"17824","type":"WheelZoomTool"},{"attributes":{},"id":"17827","type":"SaveTool"},{"attributes":{"axis":{"id":"17817"},"dimension":1,"ticker":null},"id":"17820","type":"Grid"},{"attributes":{},"id":"17805","type":"DataRange1d"},{"attributes":{"source":{"id":"17840"}},"id":"17844","type":"CDSView"},{"attributes":{"axis":{"id":"17813"},"ticker":null},"id":"17816","type":"Grid"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"17851"},"major_label_policy":{"id":"17850"},"ticker":{"id":"17814"}},"id":"17813","type":"LinearAxis"},{"attributes":{},"id":"17807","type":"DataRange1d"},{"attributes":{"axis_label":"ESS for quantiles","formatter":{"id":"17854"},"major_label_policy":{"id":"17853"},"ticker":{"id":"17818"}},"id":"17817","type":"LinearAxis"},{"attributes":{"active_multi":null,"tools":[{"id":"17821"},{"id":"17822"},{"id":"17823"},{"id":"17824"},{"id":"17825"},{"id":"17826"},{"id":"17827"},{"id":"17828"}]},"id":"17831","type":"Toolbar"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"17830","type":"PolyAnnotation"},{"attributes":{},"id":"17822","type":"PanTool"},{"attributes":{"below":[{"id":"17813"}],"center":[{"id":"17816"},{"id":"17820"}],"height":500,"left":[{"id":"17817"}],"output_backend":"webgl","renderers":[{"id":"17843"},{"id":"17845"}],"title":{"id":"17846"},"toolbar":{"id":"17831"},"toolbar_location":null,"width":500,"x_range":{"id":"17805"},"x_scale":{"id":"17809"},"y_range":{"id":"17807"},"y_scale":{"id":"17811"}},"id":"17804","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"17857","type":"UnionRenderers"}],"root_ids":["17863"]},"title":"Bokeh Application","version":"2.3.1"}}';
                  var render_items = [{"docid":"db57f35e-7925-43de-baa4-6332b231206a","root_ids":["17863"],"roots":{"17863":"b00b3d39-4524-4b47-8080-b2452eda619b"}}];
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