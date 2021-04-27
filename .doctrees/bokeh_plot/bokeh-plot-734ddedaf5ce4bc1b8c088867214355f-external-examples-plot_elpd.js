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
    
      
      
    
      var element = document.getElementById("23a627e2-2c3c-4802-a28d-68e12eb624f6");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '23a627e2-2c3c-4802-a28d-68e12eb624f6' but no matching script tag was found.")
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
                    
                  var docs_json = '{"f97312c8-596c-4b71-b5a6-d261288d633c":{"defs":[],"roots":{"references":[{"attributes":{},"id":"17295","type":"UndoTool"},{"attributes":{},"id":"17291","type":"PanTool"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"17299","type":"PolyAnnotation"},{"attributes":{},"id":"17320","type":"AllLabels"},{"attributes":{},"id":"17321","type":"BasicTickFormatter"},{"attributes":{"toolbar":{"id":"17328"},"toolbar_location":"above"},"id":"17329","type":"ToolbarBox"},{"attributes":{},"id":"17293","type":"WheelZoomTool"},{"attributes":{"text":"Centered eight - Non centered eight"},"id":"17313","type":"Title"},{"attributes":{"overlay":{"id":"17299"}},"id":"17294","type":"LassoSelectTool"},{"attributes":{"children":[{"id":"17329"},{"id":"17327"}]},"id":"17330","type":"Column"},{"attributes":{},"id":"17290","type":"ResetTool"},{"attributes":{},"id":"17287","type":"BasicTicker"},{"attributes":{"source":{"id":"17310"}},"id":"17312","type":"CDSView"},{"attributes":{"callback":null},"id":"17297","type":"HoverTool"},{"attributes":{"axis":{"id":"17286"},"dimension":1,"ticker":null},"id":"17289","type":"Grid"},{"attributes":{},"id":"17278","type":"LinearScale"},{"attributes":{},"id":"17324","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"17298"}},"id":"17292","type":"BoxZoomTool"},{"attributes":{},"id":"17280","type":"LinearScale"},{"attributes":{},"id":"17276","type":"DataRange1d"},{"attributes":{"axis":{"id":"17282"},"ticker":null},"id":"17285","type":"Grid"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"value":"cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"17309","type":"Scatter"},{"attributes":{"active_multi":null,"tools":[{"id":"17290"},{"id":"17291"},{"id":"17292"},{"id":"17293"},{"id":"17294"},{"id":"17295"},{"id":"17296"},{"id":"17297"}]},"id":"17300","type":"Toolbar"},{"attributes":{},"id":"17296","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"17298","type":"BoxAnnotation"},{"attributes":{},"id":"17325","type":"Selection"},{"attributes":{},"id":"17283","type":"BasicTicker"},{"attributes":{"children":[[{"id":"17273"},0,0]]},"id":"17327","type":"GridBox"},{"attributes":{"formatter":{"id":"17318"},"major_label_policy":{"id":"17317"},"ticker":{"id":"17283"}},"id":"17282","type":"LinearAxis"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"17321"},"major_label_policy":{"id":"17320"},"ticker":{"id":"17287"}},"id":"17286","type":"LinearAxis"},{"attributes":{"toolbars":[{"id":"17300"}],"tools":[{"id":"17290"},{"id":"17291"},{"id":"17292"},{"id":"17293"},{"id":"17294"},{"id":"17295"},{"id":"17296"},{"id":"17297"}]},"id":"17328","type":"ProxyToolbar"},{"attributes":{"data_source":{"id":"17310"},"glyph":{"id":"17309"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"17312"}},"id":"17311","type":"GlyphRenderer"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIkKht05k7+A2X/x9IekPwAArX2oaFM/QNQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"17325"},"selection_policy":{"id":"17324"}},"id":"17310","type":"ColumnDataSource"},{"attributes":{},"id":"17317","type":"AllLabels"},{"attributes":{},"id":"17318","type":"BasicTickFormatter"},{"attributes":{},"id":"17274","type":"DataRange1d"},{"attributes":{"below":[{"id":"17282"}],"center":[{"id":"17285"},{"id":"17289"}],"height":288,"left":[{"id":"17286"}],"output_backend":"webgl","renderers":[{"id":"17311"}],"title":{"id":"17313"},"toolbar":{"id":"17300"},"toolbar_location":null,"width":432,"x_range":{"id":"17274"},"x_scale":{"id":"17278"},"y_range":{"id":"17276"},"y_scale":{"id":"17280"}},"id":"17273","subtype":"Figure","type":"Plot"}],"root_ids":["17330"]},"title":"Bokeh Application","version":"2.3.1"}}';
                  var render_items = [{"docid":"f97312c8-596c-4b71-b5a6-d261288d633c","root_ids":["17330"],"roots":{"17330":"23a627e2-2c3c-4802-a28d-68e12eb624f6"}}];
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