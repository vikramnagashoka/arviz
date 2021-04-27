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
    
      
      
    
      var element = document.getElementById("47b934a8-c1d7-4440-8526-b7c9666d8fff");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '47b934a8-c1d7-4440-8526-b7c9666d8fff' but no matching script tag was found.")
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
                    
                  var docs_json = '{"24c515d9-0522-49d3-b684-281407c9be3d":{"defs":[],"roots":{"references":[{"attributes":{"source":{"id":"15022"}},"id":"15026","type":"CDSView"},{"attributes":{"toolbars":[{"id":"15006"}],"tools":[{"id":"14996"},{"id":"14997"},{"id":"14998"},{"id":"14999"},{"id":"15000"},{"id":"15001"},{"id":"15002"},{"id":"15003"}]},"id":"15064","type":"ProxyToolbar"},{"attributes":{"source":{"id":"15027"}},"id":"15031","type":"CDSView"},{"attributes":{"data_source":{"id":"15027"},"glyph":{"id":"15028"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15029"},"view":{"id":"15031"}},"id":"15030","type":"GlyphRenderer"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"15024","type":"MultiLine"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15038","type":"Circle"},{"attributes":{"axis":{"id":"14988"},"ticker":null},"id":"14991","type":"Grid"},{"attributes":{"children":[{"id":"15065"},{"id":"15063"}]},"id":"15066","type":"Column"},{"attributes":{"data_source":{"id":"15022"},"glyph":{"id":"15023"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15024"},"view":{"id":"15026"}},"id":"15025","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15018","type":"Scatter"},{"attributes":{},"id":"15047","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Log","formatter":{"id":"15047"},"major_label_policy":{"id":"15046"},"ticker":{"id":"14989"}},"id":"14988","type":"LinearAxis"},{"attributes":{"children":[[{"id":"14979"},0,0]]},"id":"15063","type":"GridBox"},{"attributes":{},"id":"15001","type":"UndoTool"},{"attributes":{"active_multi":null,"tools":[{"id":"14996"},{"id":"14997"},{"id":"14998"},{"id":"14999"},{"id":"15000"},{"id":"15001"},{"id":"15002"},{"id":"15003"}]},"id":"15006","type":"Toolbar"},{"attributes":{},"id":"14996","type":"ResetTool"},{"attributes":{"data":{"x":{"__ndarray__":"m/f9Q2zYPcDPGP3dN9s9wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"15061"},"selection_policy":{"id":"15060"}},"id":"15037","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"15003","type":"HoverTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"grey"},"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15019","type":"Scatter"},{"attributes":{},"id":"15057","type":"Selection"},{"attributes":{"formatter":{"id":"15049"},"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"major_label_policy":{"id":"15048"},"ticker":{"id":"15015"}},"id":"14992","type":"LinearAxis"},{"attributes":{"data":{"x":{"__ndarray__":"KQWarnTPPsA=","dtype":"float64","order":"little","shape":[1]},"y":[-0.75]},"selected":{"id":"15053"},"selection_policy":{"id":"15052"}},"id":"15017","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"15032"},"glyph":{"id":"15033"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15034"},"view":{"id":"15036"}},"id":"15035","type":"GlyphRenderer"},{"attributes":{"source":{"id":"15037"}},"id":"15041","type":"CDSView"},{"attributes":{},"id":"15046","type":"AllLabels"},{"attributes":{},"id":"14984","type":"LinearScale"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15028","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"black"},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15039","type":"Circle"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"15005","type":"PolyAnnotation"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"15015","type":"FixedTicker"},{"attributes":{"overlay":{"id":"15004"}},"id":"14998","type":"BoxZoomTool"},{"attributes":{},"id":"15059","type":"Selection"},{"attributes":{"data_source":{"id":"15037"},"glyph":{"id":"15038"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15039"},"view":{"id":"15041"}},"id":"15040","type":"GlyphRenderer"},{"attributes":{},"id":"15044","type":"Title"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"15033","type":"MultiLine"},{"attributes":{"data":{"xs":[[-32.052286212415325,-29.322294424364305],[-32.23721121836336,-29.383537134836743]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"15059"},"selection_policy":{"id":"15058"}},"id":"15032","type":"ColumnDataSource"},{"attributes":{"line_alpha":{"value":0.1},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"15034","type":"MultiLine"},{"attributes":{},"id":"15053","type":"Selection"},{"attributes":{},"id":"14986","type":"LinearScale"},{"attributes":{},"id":"15056","type":"UnionRenderers"},{"attributes":{},"id":"15060","type":"UnionRenderers"},{"attributes":{"source":{"id":"15032"}},"id":"15036","type":"CDSView"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"15023","type":"MultiLine"},{"attributes":{"below":[{"id":"14988"}],"center":[{"id":"14991"},{"id":"14995"}],"height":500,"left":[{"id":"14992"}],"output_backend":"webgl","renderers":[{"id":"15020"},{"id":"15025"},{"id":"15030"},{"id":"15035"},{"id":"15040"},{"id":"15042"}],"title":{"id":"15044"},"toolbar":{"id":"15006"},"toolbar_location":null,"width":500,"x_range":{"id":"14980"},"x_scale":{"id":"14984"},"y_range":{"id":"14982"},"y_scale":{"id":"14986"}},"id":"14979","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"15054","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"15005"}},"id":"15000","type":"LassoSelectTool"},{"attributes":{"end":0.5,"start":-1.5},"id":"14982","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"15004","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":null},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15029","type":"Circle"},{"attributes":{"data_source":{"id":"15017"},"glyph":{"id":"15018"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15019"},"view":{"id":"15021"}},"id":"15020","type":"GlyphRenderer"},{"attributes":{},"id":"14997","type":"PanTool"},{"attributes":{},"id":"15002","type":"SaveTool"},{"attributes":{"data":{"xs":[[-30.896420573800544,-30.724327779399562]],"ys":[[-0.75,-0.75]]},"selected":{"id":"15055"},"selection_policy":{"id":"15054"}},"id":"15022","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"14992"},"dimension":1,"ticker":null},"id":"14995","type":"Grid"},{"attributes":{},"id":"15058","type":"UnionRenderers"},{"attributes":{},"id":"15048","type":"AllLabels"},{"attributes":{},"id":"15061","type":"Selection"},{"attributes":{},"id":"14980","type":"DataRange1d"},{"attributes":{},"id":"14999","type":"WheelZoomTool"},{"attributes":{},"id":"15052","type":"UnionRenderers"},{"attributes":{"toolbar":{"id":"15064"},"toolbar_location":"above"},"id":"15065","type":"ToolbarBox"},{"attributes":{"source":{"id":"15017"}},"id":"15021","type":"CDSView"},{"attributes":{},"id":"14989","type":"BasicTicker"},{"attributes":{"dimension":"height","line_color":"grey","line_dash":[6],"line_width":1.7677669529663689,"location":-30.687290318389813},"id":"15042","type":"Span"},{"attributes":{},"id":"15049","type":"BasicTickFormatter"},{"attributes":{},"id":"15055","type":"Selection"},{"attributes":{"data":{"x":{"__ndarray__":"eFcgQvKvPsApBZqudM8+wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"15057"},"selection_policy":{"id":"15056"}},"id":"15027","type":"ColumnDataSource"}],"root_ids":["15066"]},"title":"Bokeh Application","version":"2.3.1"}}';
                  var render_items = [{"docid":"24c515d9-0522-49d3-b684-281407c9be3d","root_ids":["15066"],"roots":{"15066":"47b934a8-c1d7-4440-8526-b7c9666d8fff"}}];
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