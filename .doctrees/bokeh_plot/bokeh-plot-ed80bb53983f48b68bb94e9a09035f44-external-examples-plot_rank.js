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
    
      
      
    
      var element = document.getElementById("6db01083-6578-4ba8-a7c3-8553b3e7689f");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '6db01083-6578-4ba8-a7c3-8553b3e7689f' but no matching script tag was found.")
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
                    
                  var docs_json = '{"452da6ba-a740-4f00-abab-2872750cf140":{"defs":[],"roots":{"references":[{"attributes":{"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40819"},"selection_policy":{"id":"40818"}},"id":"40769","type":"ColumnDataSource"},{"attributes":{},"id":"40813","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"40678"},"dimension":1,"ticker":null},"id":"40681","type":"Grid"},{"attributes":{"line_dash":[6],"location":1.4807692307692308},"id":"40774","type":"Span"},{"attributes":{"below":[{"id":"40674"}],"center":[{"id":"40677"},{"id":"40681"},{"id":"40740"},{"id":"40746"},{"id":"40752"},{"id":"40758"}],"height":331,"left":[{"id":"40678"}],"output_backend":"webgl","renderers":[{"id":"40738"},{"id":"40744"},{"id":"40750"},{"id":"40756"}],"title":{"id":"40761"},"toolbar":{"id":"40692"},"toolbar_location":null,"width":496,"x_range":{"id":"40666"},"x_scale":{"id":"40670"},"y_range":{"id":"40668"},"y_scale":{"id":"40672"}},"id":"40665","subtype":"Figure","type":"Plot"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40770","type":"VBar"},{"attributes":{},"id":"40819","type":"Selection"},{"attributes":{},"id":"40803","type":"UnionRenderers"},{"attributes":{"line_dash":[6],"location":2.480769230769231},"id":"40780","type":"Span"},{"attributes":{"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40800"},"selection_policy":{"id":"40799"}},"id":"40735","type":"ColumnDataSource"},{"attributes":{},"id":"40804","type":"Selection"},{"attributes":{"data_source":{"id":"40735"},"glyph":{"id":"40736"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40737"},"view":{"id":"40739"}},"id":"40738","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40737","type":"VBar"},{"attributes":{"callback":null},"id":"40689","type":"HoverTool"},{"attributes":{"source":{"id":"40735"}},"id":"40739","type":"CDSView"},{"attributes":{},"id":"40820","type":"UnionRenderers"},{"attributes":{"source":{"id":"40741"}},"id":"40745","type":"CDSView"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40743","type":"VBar"},{"attributes":{},"id":"40821","type":"Selection"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40742","type":"VBar"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40802"},"selection_policy":{"id":"40801"}},"id":"40741","type":"ColumnDataSource"},{"attributes":{"line_dash":[6],"location":1.4166666666666665},"id":"40746","type":"Span"},{"attributes":{"line_dash":[6],"location":2.4166666666666665},"id":"40752","type":"Span"},{"attributes":{},"id":"40706","type":"LinearScale"},{"attributes":{"axis":{"id":"40708"},"ticker":null},"id":"40711","type":"Grid"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40782","type":"VBar"},{"attributes":{},"id":"40805","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"40723","type":"HoverTool"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40748","type":"VBar"},{"attributes":{"data_source":{"id":"40741"},"glyph":{"id":"40742"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40743"},"view":{"id":"40745"}},"id":"40744","type":"GlyphRenderer"},{"attributes":{"axis_label":"Chain","formatter":{"id":"40813"},"major_label_policy":{"id":"40812"},"ticker":{"id":"40787"}},"id":"40712","type":"LinearAxis"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"40811"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"40810"},"ticker":{"id":"40709"}},"id":"40708","type":"LinearAxis"},{"attributes":{"source":{"id":"40747"}},"id":"40751","type":"CDSView"},{"attributes":{},"id":"40806","type":"Selection"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40804"},"selection_policy":{"id":"40803"}},"id":"40747","type":"ColumnDataSource"},{"attributes":{},"id":"40709","type":"BasicTicker"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40749","type":"VBar"},{"attributes":{"active_multi":null,"tools":[{"id":"40682"},{"id":"40683"},{"id":"40684"},{"id":"40685"},{"id":"40686"},{"id":"40687"},{"id":"40688"},{"id":"40689"}]},"id":"40692","type":"Toolbar"},{"attributes":{},"id":"40704","type":"LinearScale"},{"attributes":{"line_dash":[6],"location":3.480769230769231},"id":"40786","type":"Span"},{"attributes":{"axis":{"id":"40712"},"dimension":1,"ticker":null},"id":"40715","type":"Grid"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40754","type":"VBar"},{"attributes":{},"id":"40822","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"40747"},"glyph":{"id":"40748"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40749"},"view":{"id":"40751"}},"id":"40750","type":"GlyphRenderer"},{"attributes":{"text":"mu"},"id":"40789","type":"Title"},{"attributes":{},"id":"40793","type":"AllLabels"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40736","type":"VBar"},{"attributes":{"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40821"},"selection_policy":{"id":"40820"}},"id":"40775","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"40724"}},"id":"40718","type":"BoxZoomTool"},{"attributes":{"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40806"},"selection_policy":{"id":"40805"}},"id":"40753","type":"ColumnDataSource"},{"attributes":{},"id":"40717","type":"PanTool"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40755","type":"VBar"},{"attributes":{},"id":"40823","type":"Selection"},{"attributes":{"data_source":{"id":"40775"},"glyph":{"id":"40776"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40777"},"view":{"id":"40779"}},"id":"40778","type":"GlyphRenderer"},{"attributes":{},"id":"40716","type":"ResetTool"},{"attributes":{},"id":"40722","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"40690","type":"BoxAnnotation"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40776","type":"VBar"},{"attributes":{"line_dash":[6],"location":3.4166666666666665},"id":"40758","type":"Span"},{"attributes":{"source":{"id":"40781"}},"id":"40785","type":"CDSView"},{"attributes":{},"id":"40666","type":"DataRange1d"},{"attributes":{"data_source":{"id":"40753"},"glyph":{"id":"40754"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40755"},"view":{"id":"40757"}},"id":"40756","type":"GlyphRenderer"},{"attributes":{},"id":"40719","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"40725"}},"id":"40720","type":"LassoSelectTool"},{"attributes":{},"id":"40670","type":"LinearScale"},{"attributes":{"below":[{"id":"40708"}],"center":[{"id":"40711"},{"id":"40715"},{"id":"40768"},{"id":"40774"},{"id":"40780"},{"id":"40786"}],"height":331,"left":[{"id":"40712"}],"output_backend":"webgl","renderers":[{"id":"40766"},{"id":"40772"},{"id":"40778"},{"id":"40784"}],"title":{"id":"40789"},"toolbar":{"id":"40726"},"toolbar_location":null,"width":496,"x_range":{"id":"40666"},"x_scale":{"id":"40704"},"y_range":{"id":"40668"},"y_scale":{"id":"40706"}},"id":"40701","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"40721","type":"UndoTool"},{"attributes":{"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40823"},"selection_policy":{"id":"40822"}},"id":"40781","type":"ColumnDataSource"},{"attributes":{"active_multi":null,"tools":[{"id":"40716"},{"id":"40717"},{"id":"40718"},{"id":"40719"},{"id":"40720"},{"id":"40721"},{"id":"40722"},{"id":"40723"}]},"id":"40726","type":"Toolbar"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40783","type":"VBar"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"40794"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"40793"},"ticker":{"id":"40675"}},"id":"40674","type":"LinearAxis"},{"attributes":{"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40817"},"selection_policy":{"id":"40816"}},"id":"40763","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"40781"},"glyph":{"id":"40782"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40783"},"view":{"id":"40785"}},"id":"40784","type":"GlyphRenderer"},{"attributes":{"line_dash":[6],"location":0.41666666666666663},"id":"40740","type":"Span"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40771","type":"VBar"},{"attributes":{"data_source":{"id":"40763"},"glyph":{"id":"40764"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40765"},"view":{"id":"40767"}},"id":"40766","type":"GlyphRenderer"},{"attributes":{"ticks":[0,1,2,3]},"id":"40759","type":"FixedTicker"},{"attributes":{"toolbars":[{"id":"40692"},{"id":"40726"}],"tools":[{"id":"40682"},{"id":"40683"},{"id":"40684"},{"id":"40685"},{"id":"40686"},{"id":"40687"},{"id":"40688"},{"id":"40689"},{"id":"40716"},{"id":"40717"},{"id":"40718"},{"id":"40719"},{"id":"40720"},{"id":"40721"},{"id":"40722"},{"id":"40723"}]},"id":"40826","type":"ProxyToolbar"},{"attributes":{"children":[[{"id":"40665"},0,0],[{"id":"40701"},0,1]]},"id":"40825","type":"GridBox"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40765","type":"VBar"},{"attributes":{"toolbar":{"id":"40826"},"toolbar_location":"above"},"id":"40827","type":"ToolbarBox"},{"attributes":{"line_dash":[6],"location":0.48076923076923067},"id":"40768","type":"Span"},{"attributes":{},"id":"40675","type":"BasicTicker"},{"attributes":{"ticks":[0,1,2,3]},"id":"40787","type":"FixedTicker"},{"attributes":{"axis":{"id":"40674"},"ticker":null},"id":"40677","type":"Grid"},{"attributes":{"text":"tau"},"id":"40761","type":"Title"},{"attributes":{"source":{"id":"40753"}},"id":"40757","type":"CDSView"},{"attributes":{},"id":"40799","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40764","type":"VBar"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"40724","type":"BoxAnnotation"},{"attributes":{},"id":"40794","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"40763"}},"id":"40767","type":"CDSView"},{"attributes":{"axis_label":"Chain","formatter":{"id":"40796"},"major_label_policy":{"id":"40795"},"ticker":{"id":"40759"}},"id":"40678","type":"LinearAxis"},{"attributes":{},"id":"40800","type":"Selection"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"40725","type":"PolyAnnotation"},{"attributes":{},"id":"40810","type":"AllLabels"},{"attributes":{},"id":"40816","type":"UnionRenderers"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40777","type":"VBar"},{"attributes":{},"id":"40668","type":"DataRange1d"},{"attributes":{},"id":"40795","type":"AllLabels"},{"attributes":{"source":{"id":"40769"}},"id":"40773","type":"CDSView"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"40691","type":"PolyAnnotation"},{"attributes":{},"id":"40817","type":"Selection"},{"attributes":{},"id":"40688","type":"SaveTool"},{"attributes":{},"id":"40796","type":"BasicTickFormatter"},{"attributes":{},"id":"40685","type":"WheelZoomTool"},{"attributes":{},"id":"40811","type":"BasicTickFormatter"},{"attributes":{},"id":"40801","type":"UnionRenderers"},{"attributes":{"source":{"id":"40775"}},"id":"40779","type":"CDSView"},{"attributes":{},"id":"40683","type":"PanTool"},{"attributes":{"data_source":{"id":"40769"},"glyph":{"id":"40770"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40771"},"view":{"id":"40773"}},"id":"40772","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"40827"},{"id":"40825"}]},"id":"40828","type":"Column"},{"attributes":{"overlay":{"id":"40690"}},"id":"40684","type":"BoxZoomTool"},{"attributes":{},"id":"40802","type":"Selection"},{"attributes":{},"id":"40682","type":"ResetTool"},{"attributes":{"overlay":{"id":"40691"}},"id":"40686","type":"LassoSelectTool"},{"attributes":{},"id":"40812","type":"AllLabels"},{"attributes":{},"id":"40687","type":"UndoTool"},{"attributes":{},"id":"40672","type":"LinearScale"},{"attributes":{},"id":"40818","type":"UnionRenderers"}],"root_ids":["40828"]},"title":"Bokeh Application","version":"2.3.1"}}';
                  var render_items = [{"docid":"452da6ba-a740-4f00-abab-2872750cf140","root_ids":["40828"],"roots":{"40828":"6db01083-6578-4ba8-a7c3-8553b3e7689f"}}];
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