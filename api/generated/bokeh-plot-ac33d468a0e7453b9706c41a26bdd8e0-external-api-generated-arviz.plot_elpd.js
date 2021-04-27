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
    
      
      
    
      var element = document.getElementById("5ebee1e6-474d-4710-9e52-8a635176ed9b");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '5ebee1e6-474d-4710-9e52-8a635176ed9b' but no matching script tag was found.")
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
                    
                  var docs_json = '{"638d7b83-6e40-4bb3-9dd3-65792aab3fe7":{"defs":[],"roots":{"references":[{"attributes":{},"id":"14216","type":"UndoTool"},{"attributes":{},"id":"14241","type":"AllLabels"},{"attributes":{},"id":"14214","type":"WheelZoomTool"},{"attributes":{"active_multi":null,"tools":[{"id":"14211"},{"id":"14212"},{"id":"14213"},{"id":"14214"},{"id":"14215"},{"id":"14216"},{"id":"14217"},{"id":"14218"}]},"id":"14221","type":"Toolbar"},{"attributes":{},"id":"14211","type":"ResetTool"},{"attributes":{},"id":"14212","type":"PanTool"},{"attributes":{},"id":"14204","type":"BasicTicker"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIkKht05k7+A2X/x9IekPwAArX2oaFM/QNQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"14246"},"selection_policy":{"id":"14245"}},"id":"14231","type":"ColumnDataSource"},{"attributes":{},"id":"14245","type":"UnionRenderers"},{"attributes":{},"id":"14195","type":"DataRange1d"},{"attributes":{},"id":"14208","type":"BasicTicker"},{"attributes":{"overlay":{"id":"14219"}},"id":"14213","type":"BoxZoomTool"},{"attributes":{"children":[{"id":"14250"},{"id":"14248"}]},"id":"14251","type":"Column"},{"attributes":{"data_source":{"id":"14231"},"glyph":{"id":"14230"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"14233"}},"id":"14232","type":"GlyphRenderer"},{"attributes":{"source":{"id":"14231"}},"id":"14233","type":"CDSView"},{"attributes":{},"id":"14217","type":"SaveTool"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"14242"},"major_label_policy":{"id":"14241"},"ticker":{"id":"14208"}},"id":"14207","type":"LinearAxis"},{"attributes":{},"id":"14197","type":"DataRange1d"},{"attributes":{"axis":{"id":"14203"},"ticker":null},"id":"14206","type":"Grid"},{"attributes":{"toolbars":[{"id":"14221"}],"tools":[{"id":"14211"},{"id":"14212"},{"id":"14213"},{"id":"14214"},{"id":"14215"},{"id":"14216"},{"id":"14217"},{"id":"14218"}]},"id":"14249","type":"ProxyToolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"14219","type":"BoxAnnotation"},{"attributes":{"children":[[{"id":"14194"},0,0]]},"id":"14248","type":"GridBox"},{"attributes":{"below":[{"id":"14203"}],"center":[{"id":"14206"},{"id":"14210"}],"height":288,"left":[{"id":"14207"}],"output_backend":"webgl","renderers":[{"id":"14232"}],"title":{"id":"14234"},"toolbar":{"id":"14221"},"toolbar_location":null,"width":432,"x_range":{"id":"14195"},"x_scale":{"id":"14199"},"y_range":{"id":"14197"},"y_scale":{"id":"14201"}},"id":"14194","subtype":"Figure","type":"Plot"},{"attributes":{"text":"centered model - non centered model"},"id":"14234","type":"Title"},{"attributes":{},"id":"14199","type":"LinearScale"},{"attributes":{},"id":"14201","type":"LinearScale"},{"attributes":{"toolbar":{"id":"14249"},"toolbar_location":"above"},"id":"14250","type":"ToolbarBox"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"value":"cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"14230","type":"Scatter"},{"attributes":{},"id":"14239","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"14220"}},"id":"14215","type":"LassoSelectTool"},{"attributes":{},"id":"14242","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"14218","type":"HoverTool"},{"attributes":{"formatter":{"id":"14239"},"major_label_policy":{"id":"14238"},"ticker":{"id":"14204"}},"id":"14203","type":"LinearAxis"},{"attributes":{},"id":"14238","type":"AllLabels"},{"attributes":{},"id":"14246","type":"Selection"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"14220","type":"PolyAnnotation"},{"attributes":{"axis":{"id":"14207"},"dimension":1,"ticker":null},"id":"14210","type":"Grid"}],"root_ids":["14251"]},"title":"Bokeh Application","version":"2.3.1"}}';
                  var render_items = [{"docid":"638d7b83-6e40-4bb3-9dd3-65792aab3fe7","root_ids":["14251"],"roots":{"14251":"5ebee1e6-474d-4710-9e52-8a635176ed9b"}}];
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