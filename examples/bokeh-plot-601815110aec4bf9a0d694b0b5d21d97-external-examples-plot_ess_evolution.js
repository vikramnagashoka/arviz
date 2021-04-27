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
    
      
      
    
      var element = document.getElementById("cf7b0449-5a6c-493e-95b1-139bac8ce4e2");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'cf7b0449-5a6c-493e-95b1-139bac8ce4e2' but no matching script tag was found.")
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
                    
                  var docs_json = '{"5c12047e-8fc2-4726-9764-0d070112b93b":{"defs":[],"roots":{"references":[{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"17587"},{"id":"17582"}]},"id":"17592","type":"LegendItem"},{"attributes":{},"id":"17550","type":"ResetTool"},{"attributes":{},"id":"17610","type":"UnionRenderers"},{"attributes":{},"id":"17605","type":"Selection"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"17589","type":"Span"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17571","type":"Circle"},{"attributes":{"source":{"id":"17579"}},"id":"17583","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"17558","type":"BoxAnnotation"},{"attributes":{"children":[[{"id":"17533"},0,0]]},"id":"17613","type":"GridBox"},{"attributes":{"data_source":{"id":"17574"},"glyph":{"id":"17575"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17576"},"view":{"id":"17578"}},"id":"17577","type":"GlyphRenderer"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17611"},"selection_policy":{"id":"17610"}},"id":"17584","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"17559"}},"id":"17554","type":"LassoSelectTool"},{"attributes":{"above":[{"id":"17590"}],"below":[{"id":"17542"}],"center":[{"id":"17545"},{"id":"17549"}],"height":500,"left":[{"id":"17546"}],"output_backend":"webgl","renderers":[{"id":"17572"},{"id":"17577"},{"id":"17582"},{"id":"17587"},{"id":"17589"}],"title":{"id":"17593"},"toolbar":{"id":"17560"},"toolbar_location":null,"width":500,"x_range":{"id":"17534"},"x_scale":{"id":"17538"},"y_range":{"id":"17536"},"y_scale":{"id":"17540"}},"id":"17533","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"17611","type":"Selection"},{"attributes":{"toolbar":{"id":"17614"},"toolbar_location":"above"},"id":"17615","type":"ToolbarBox"},{"attributes":{"data_source":{"id":"17584"},"glyph":{"id":"17585"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17586"},"view":{"id":"17588"}},"id":"17587","type":"GlyphRenderer"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"17559","type":"PolyAnnotation"},{"attributes":{"line_alpha":0.1,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"17581","type":"Line"},{"attributes":{"overlay":{"id":"17558"}},"id":"17552","type":"BoxZoomTool"},{"attributes":{},"id":"17606","type":"UnionRenderers"},{"attributes":{},"id":"17547","type":"BasicTicker"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"17576","type":"Line"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"17572"},{"id":"17577"}]},"id":"17591","type":"LegendItem"},{"attributes":{},"id":"17598","type":"BasicTickFormatter"},{"attributes":{},"id":"17600","type":"AllLabels"},{"attributes":{"callback":null},"id":"17557","type":"HoverTool"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"17580","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"orange"},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17586","type":"Circle"},{"attributes":{},"id":"17543","type":"BasicTicker"},{"attributes":{"source":{"id":"17584"}},"id":"17588","type":"CDSView"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17609"},"selection_policy":{"id":"17608"}},"id":"17579","type":"ColumnDataSource"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17607"},"selection_policy":{"id":"17606"}},"id":"17574","type":"ColumnDataSource"},{"attributes":{"toolbars":[{"id":"17560"}],"tools":[{"id":"17550"},{"id":"17551"},{"id":"17552"},{"id":"17553"},{"id":"17554"},{"id":"17555"},{"id":"17556"},{"id":"17557"}]},"id":"17614","type":"ProxyToolbar"},{"attributes":{},"id":"17607","type":"Selection"},{"attributes":{},"id":"17534","type":"DataRange1d"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17605"},"selection_policy":{"id":"17604"}},"id":"17569","type":"ColumnDataSource"},{"attributes":{"source":{"id":"17574"}},"id":"17578","type":"CDSView"},{"attributes":{},"id":"17555","type":"UndoTool"},{"attributes":{"data_source":{"id":"17569"},"glyph":{"id":"17570"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17571"},"view":{"id":"17573"}},"id":"17572","type":"GlyphRenderer"},{"attributes":{},"id":"17597","type":"AllLabels"},{"attributes":{"axis_label":"ESS","formatter":{"id":"17601"},"major_label_policy":{"id":"17600"},"ticker":{"id":"17547"}},"id":"17546","type":"LinearAxis"},{"attributes":{},"id":"17601","type":"BasicTickFormatter"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"17575","type":"Line"},{"attributes":{"data_source":{"id":"17579"},"glyph":{"id":"17580"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17581"},"view":{"id":"17583"}},"id":"17582","type":"GlyphRenderer"},{"attributes":{},"id":"17540","type":"LinearScale"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17585","type":"Circle"},{"attributes":{"active_multi":null,"tools":[{"id":"17550"},{"id":"17551"},{"id":"17552"},{"id":"17553"},{"id":"17554"},{"id":"17555"},{"id":"17556"},{"id":"17557"}]},"id":"17560","type":"Toolbar"},{"attributes":{"click_policy":"hide","items":[{"id":"17591"},{"id":"17592"}],"location":"center_right","orientation":"horizontal"},"id":"17590","type":"Legend"},{"attributes":{"children":[{"id":"17615"},{"id":"17613"}]},"id":"17616","type":"Column"},{"attributes":{},"id":"17556","type":"SaveTool"},{"attributes":{"text":"b"},"id":"17593","type":"Title"},{"attributes":{},"id":"17551","type":"PanTool"},{"attributes":{},"id":"17538","type":"LinearScale"},{"attributes":{"source":{"id":"17569"}},"id":"17573","type":"CDSView"},{"attributes":{},"id":"17609","type":"Selection"},{"attributes":{},"id":"17604","type":"UnionRenderers"},{"attributes":{"axis_label":"Total number of draws","formatter":{"id":"17598"},"major_label_policy":{"id":"17597"},"ticker":{"id":"17543"}},"id":"17542","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17570","type":"Circle"},{"attributes":{},"id":"17536","type":"DataRange1d"},{"attributes":{},"id":"17608","type":"UnionRenderers"},{"attributes":{"axis":{"id":"17542"},"ticker":null},"id":"17545","type":"Grid"},{"attributes":{},"id":"17553","type":"WheelZoomTool"},{"attributes":{"axis":{"id":"17546"},"dimension":1,"ticker":null},"id":"17549","type":"Grid"}],"root_ids":["17616"]},"title":"Bokeh Application","version":"2.3.1"}}';
                  var render_items = [{"docid":"5c12047e-8fc2-4726-9764-0d070112b93b","root_ids":["17616"],"roots":{"17616":"cf7b0449-5a6c-493e-95b1-139bac8ce4e2"}}];
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