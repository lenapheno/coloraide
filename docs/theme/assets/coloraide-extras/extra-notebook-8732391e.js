function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}var runtime=function(e){"use strict";var n,t=Object.prototype,o=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",s=r.toStringTag||"@@toStringTag";function c(e,n,t){return Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}),e[n]}try{c({},"")}catch(e){c=function(e,n,t){return e[n]=t}}function l(e,n,t,o){var r=n&&n.prototype instanceof g?n:g,a=Object.create(r.prototype),i=new T(o||[]);return a._invoke=function(e,n,t){var o=d;return function(r,a){if(o===m)throw new Error("Generator is already running");if(o===f){if("throw"===r)throw a;return P()}for(t.method=r,t.arg=a;;){var i=t.delegate;if(i){var s=L(i,t);if(s){if(s===h)continue;return s}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if(o===d)throw o=f,t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);o=m;var c=u(e,n,t);if("normal"===c.type){if(o=t.done?f:p,c.arg===h)continue;return{value:c.arg,done:t.done}}"throw"===c.type&&(o=f,t.method="throw",t.arg=c.arg)}}}(e,t,i),a}function u(e,n,t){try{return{type:"normal",arg:e.call(n,t)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var d="suspendedStart",p="suspendedYield",m="executing",f="completed",h={};function g(){}function y(){}function _(){}var v={};c(v,a,(function(){return this}));var w=Object.getPrototypeOf,b=w&&w(w(R([])));b&&b!==t&&o.call(b,a)&&(v=b);var x=_.prototype=g.prototype=Object.create(v);function E(e){["next","throw","return"].forEach((function(n){c(e,n,(function(e){return this._invoke(n,e)}))}))}function k(e,n){function t(r,a,i,s){var c=u(e[r],e,a);if("throw"!==c.type){var l=c.arg,d=l.value;return d&&"object"===_typeof(d)&&o.call(d,"__await")?n.resolve(d.__await).then((function(e){t("next",e,i,s)}),(function(e){t("throw",e,i,s)})):n.resolve(d).then((function(e){l.value=e,i(l)}),(function(e){return t("throw",e,i,s)}))}s(c.arg)}var r;this._invoke=function(e,o){function a(){return new n((function(n,r){t(e,o,n,r)}))}return r=r?r.then(a,a):a()}}function L(e,t){var o=e.iterator[t.method];if(o===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=n,L(e,t),"throw"===t.method))return h;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var r=u(o,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,h;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=n),t.delegate=null,h):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function S(e){var n={tryLoc:e[0]};1 in e&&(n.catchLoc=e[1]),2 in e&&(n.finallyLoc=e[2],n.afterLoc=e[3]),this.tryEntries.push(n)}function C(e){var n=e.completion||{};n.type="normal",delete n.arg,e.completion=n}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function R(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function t(){for(;++r<e.length;)if(o.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=n,t.done=!0,t};return i.next=i}}return{next:P}}function P(){return{value:n,done:!0}}return y.prototype=_,c(x,"constructor",_),c(_,"constructor",y),y.displayName=c(_,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var n="function"==typeof e&&e.constructor;return!!n&&(n===y||"GeneratorFunction"===(n.displayName||n.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,_):(e.__proto__=_,c(e,s,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},E(k.prototype),c(k.prototype,i,(function(){return this})),e.AsyncIterator=k,e.async=function(n,t,o,r,a){void 0===a&&(a=Promise);var i=new k(l(n,t,o,r),a);return e.isGeneratorFunction(t)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},E(x),c(x,s,"Generator"),c(x,a,(function(){return this})),c(x,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var n=[];for(var t in e)n.push(t);return n.reverse(),function t(){for(;n.length;){var o=n.pop();if(o in e)return t.value=o,t.done=!1,t}return t.done=!0,t}},e.values=R,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(C),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(o,r){return s.type="throw",s.arg=e,t.next=o,r&&(t.method="next",t.arg=n),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),l=o.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,n){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=n&&n<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=n,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(e,n){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&n&&(this.next=n),h},finish:function(e){for(var n=this.tryEntries.length-1;n>=0;--n){var t=this.tryEntries[n];if(t.finallyLoc===e)return this.complete(t.completion,t.afterLoc),C(t),h}},catch:function(e){for(var n=this.tryEntries.length-1;n>=0;--n){var t=this.tryEntries[n];if(t.tryLoc===e){var o=t.completion;if("throw"===o.type){var r=o.arg;C(t)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,o){return this.delegate={iterator:R(e),resultName:t,nextLoc:o},"next"===this.method&&(this.arg=n),h}},e}("object"===("undefined"==typeof module?"undefined":_typeof(module))?module.exports:{});try{regeneratorRuntime=runtime}catch(e){"object"===("undefined"==typeof globalThis?"undefined":_typeof(globalThis))?globalThis.regeneratorRuntime=runtime:Function("r","regeneratorRuntime = r")(runtime)}!function(){"use strict";function e(e,n,t,o,r,a,i){try{var s=e[a](i),c=s.value}catch(e){return void t(e)}s.done?n(c):Promise.resolve(c).then(o,r)}function n(n){return function(){var t=this,o=arguments;return new Promise((function(r,a){var i=n.apply(t,o);function s(n){e(i,r,a,s,c,"next",n)}function c(n){e(i,r,a,s,c,"throw",n)}s(void 0)}))}}function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var o,r,a=[],i=!0,s=!1;try{for(t=t.call(e);!(i=(o=t.next()).done)&&(a.push(o.value),!n||a.length!==n);i=!0);}catch(e){s=!0,r=e}finally{try{i||null==t.return||t.return()}finally{if(s)throw r}}return a}(e,n)||o(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,n){if(e){if("string"==typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}}function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}var a,i,s,c,l,u,d,p,m,f,h,g,y,_,v,w,b,x,E,k,L,S,C;a=null,i=!1,s="",c="",l={},u=/.*?_(\d+)$/,d=!1,p="",m=!1,f=/^( {1,4}|\t)/,h="\"\"\"\nExecute Python code in code blocks (color previews added specifically for ColorAide).\n\nThis is meant to be executed by Pyodide on preformatted HTML to allow for live execution of\ncode snippets using `coloraide`.\n\nTransform Python code by executing it, transforming to a Python console output,\nand finding and outputting color previews.\n\"\"\"\nimport micropip\nfrom js import document, location\nimport xml.etree.ElementTree as Etree\nfrom collections.abc import Sequence\nfrom collections import namedtuple\nimport ast\nfrom io import StringIO\nimport contextlib\nimport sys\nimport re\nfrom pygments import highlight\nfrom pygments.lexers import get_lexer_by_name\nfrom pygments.formatters import find_formatter_class\nHtmlFormatter = find_formatter_class('html')\n\nWEBSPACE = \"srgb\"\nAST_BLOCKS = (ast.If, ast.For, ast.While, ast.Try, ast.With, ast.FunctionDef, ast.ClassDef)\n\nRE_COLOR_START = re.compile(\n    r\"(?i)(?:\\b(?<![-#&$])(?:color|hsla?|lch|lab|hwb|rgba?)\\(|\\b(?<![-#&$])[\\w]{3,}(?![(-])\\b|(?<![&])#)\"\n)\n\ntemplate = '''<div class=\"playground\" id=\"__playground_{el_id}\">\n<div class=\"playground-results\" id=\"__playground-results_{el_id}\">\n{results}\n</div>\n<div class=\"playground-code hidden\" id=\"__playground-code_{el_id}\">\n<form autocomplete=\"off\">\n<textarea class=\"playground-inputs\" id=\"__playground-inputs_{el_id}\" spellcheck=\"false\">{raw_source}</textarea>\n</form>\n</div>\n\n<button id=\"__playground-edit_{el_id}\" class=\"playground-edit\" title=\"Edit the current snippet\">Edit</button>\n<button id=\"__playground-share_{el_id}\" class=\"playground-share\" title=\"Copy URL to current snippet\">Share</button>\n<button id=\"__playground-run_{el_id}\" class=\"playground-run hidden\" title=\"Run code (Ctrl + Enter)\">Run</button>\n<button id=\"__playground-cancel_{el_id}\" class=\"playground-cancel hidden\" title=\"Cancel edit (Escape)\">Cancel</button>\n</div>'''\n\ncode_id = 0\n\n\nclass ColorInterpolate(list):\n    \"\"\"Color interpolate.\"\"\"\n\n\nclass ColorTuple(namedtuple('ColorTuple', ['string', 'color'])):\n    \"\"\"Color tuple.\"\"\"\n\n\ndef _escape(txt):\n    \"\"\"Basic HTML escaping.\"\"\"\n\n    txt = txt.replace('&', '&amp;')\n    txt = txt.replace('<', '&lt;')\n    txt = txt.replace('>', '&gt;')\n    return txt\n\n\n@contextlib.contextmanager\ndef std_output(stdout=None):\n    \"\"\"Capture standard out.\"\"\"\n    old = sys.stdout\n    if stdout is None:\n        stdout = StringIO()\n    sys.stdout = stdout\n    yield stdout\n    sys.stdout = old\n\n\ndef get_colors(result):\n    \"\"\"Get color from results.\"\"\"\n\n    from coloraide import Color\n    from coloraide.interpolate import Interpolator\n\n    colors = []\n    if isinstance(result, Color):\n        colors.append(ColorTuple(result.to_string(fit=False), result))\n    elif isinstance(result, Interpolator):\n        colors = ColorInterpolate(result.steps(steps=5, max_delta_e=4))\n    elif isinstance(result, str):\n        try:\n            colors.append(ColorTuple(result, Color(result)))\n        except Exception:\n            pass\n    elif isinstance(result, Sequence):\n        for x in result:\n            if isinstance(x, Color):\n                colors.append(ColorTuple(x.to_string(fit=False), x))\n            elif isinstance(x, str):\n                try:\n                    colors.append(ColorTuple(x, Color(x)))\n                except Exception:\n                    pass\n    return colors\n\n\ndef find_colors(text):\n    \"\"\"Find colors in text buffer.\"\"\"\n\n    import coloraide\n\n    colors = []\n    for m in RE_COLOR_START.finditer(text):\n        start = m.start()\n        mcolor = coloraide.Color.match(text, start=start)\n        if mcolor is not None:\n            colors.append(ColorTuple(text[mcolor.start:mcolor.end], mcolor.color))\n    return colors\n\n\ndef execute(cmd):\n    \"\"\"Execute color commands.\"\"\"\n\n    import coloraide\n\n    g = {'Color': coloraide.Color, 'coloraide': coloraide, 'NaN': coloraide.NaN, 'Piecewise': coloraide.Piecewise}\n    console = ''\n    colors = []\n\n    # Build AST tree\n    src = cmd.strip()\n    lines = src.split('\\n')\n    try:\n        tree = ast.parse(src)\n    except Exception:\n        import traceback\n        return '{}'.format(traceback.format_exc()), colors\n\n    for node in tree.body:\n        result = None\n\n        # Format source as Python console statements\n        start = node.lineno\n        end = node.end_lineno\n        stmt = lines[start - 1: end]\n        command = ''\n        for i, line in enumerate(stmt, 0):\n            if i == 0:\n                stmt[i] = '>>> ' + line\n            else:\n                stmt[i] = '... ' + line\n        command += '\\n'.join(stmt)\n        if isinstance(node, AST_BLOCKS):\n            command += '\\n... '\n\n        try:\n            # Capture anything sent to standard out\n            text = ''\n            with std_output() as s:\n                # Execute code\n                if isinstance(node, ast.Expr):\n                    _eval = ast.Expression(node.value)\n                    result = eval(compile(_eval, '<string>', 'eval'), g)\n                else:\n                    _exec = ast.Module([node], [])\n                    exec(compile(_exec, '<string>', 'exec'), g)\n\n                # Execution went well, so append command\n                console += command\n\n                # Output captured standard out after statements\n                text = s.getvalue()\n                if text:\n                    clist = find_colors(text)\n                    if clist:\n                        colors.append(clist)\n                    console += '\\n{}'.format(text)\n                s.flush()\n        except Exception:\n            import traceback\n            console += '{}\\n{}'.format(command, traceback.format_exc())\n            # Failed for some reason, so quit\n            break\n\n        # If we got a result, output it as well\n        if result is not None:\n            clist = get_colors(result)\n            if clist:\n                colors.append(clist)\n            console += '{}{}\\n'.format('\\n' if not text else '', str(result))\n        else:\n            console += '\\n' if not text else ''\n\n    return console, colors\n\n\ndef colorize(src, lang, **options):\n    \"\"\"Colorize.\"\"\"\n\n    lexer = get_lexer_by_name(lang, **options)\n    formatter = HtmlFormatter(cssclass=\"highlight\", wrapcode=True)\n    return highlight(src, lexer, formatter).strip()\n\n\ndef color_command_validator(language, inputs, options, attrs, md):\n    \"\"\"Color validator.\"\"\"\n\n    valid_inputs = set()\n\n    for k, v in inputs.items():\n        if k in valid_inputs:\n            options[k] = True\n            continue\n        attrs[k] = v\n    return True\n\n\ndef _color_command_console(colors):\n    \"\"\"Color command formatter.\"\"\"\n\n    el = ''\n    bar = False\n    values = []\n    for item in colors:\n        if isinstance(item, ColorInterpolate):\n            if bar:\n                el += '<div class=\"swatch-bar\">{}</div>'.format(' '.join(values))\n                values = []\n            sub_el1 = '<div class=\"swatch-bar\"><span class=\"swatch swatch-gradient\">{}</span></div>'\n            style = \"--swatch-stops: \"\n            stops = []\n            for color in item:\n                color.fit(WEBSPACE, in_place=True)\n                stops.append(color.convert(WEBSPACE).to_string())\n            if not stops:\n                stops.extend(['transparent'] * 2)\n            if len(stops) == 1:\n                stops.append(stops[0])\n            style += ','.join(stops)\n            sub_el2 = '<span class=\"swatch-color\" style=\"{}\"></span>'.format(style)\n            el += sub_el1.format(sub_el2)\n            bar = False\n        else:\n            bar = True\n            base_classes = \"swatch\"\n            for color in item:\n                if not color.color.in_gamut(WEBSPACE):\n                    base_classes += \" out-of-gamut\"\n                color.color.fit(WEBSPACE, in_place=True)\n                srgb = color.color.convert(WEBSPACE)\n                value1 = srgb.to_string(alpha=False)\n                value2 = srgb.to_string()\n                style = \"--swatch-stops: {} 50%, {} 50%\".format(value1, value2)\n                title = color.string\n                classes = base_classes\n                c = '<span class=\"swatch-color\" style=\"{style}\"></span>'.format(style=style)\n                c = '<span class=\"{classes}\" title=\"{title}\">{color}</span>'.format(\n                    classes=classes,\n                    color=c,\n                    title=title\n                )\n                values.append(c)\n    if bar:\n        el += '<div class=\"swatch-bar\">{}</div>'.format(' '.join(values))\n        values = []\n\n    return el\n\n\ndef color_command_formatter(src=\"\", language=\"\", class_name=None, options=None, md=\"\", **kwargs):\n    \"\"\"Formatter wrapper.\"\"\"\n\n    global code_id\n\n    try:\n        if len(md.preprocessors['fenced_code_block'].extension.stash) == 0:\n            code_id = 0\n\n        console, colors = execute(src.strip())\n        el = _color_command_console(colors)\n\n        el += md.preprocessors['fenced_code_block'].extension.superfences[0]['formatter'](\n            src=console,\n            class_name=\"highlight\",\n            language='pycon',\n            md=md,\n            options=options,\n            **kwargs\n        )\n        el = '<div class=\"color-command\">{}</div>'.format(el)\n        el = template.format(el_id=code_id, raw_source=_escape(src), results=el)\n        code_id += 1\n    except Exception:\n        from pymdownx import superfences\n        import traceback\n        print(traceback.format_exc())\n        return superfences.fence_code_format(src, 'text', class_name, options, md, **kwargs)\n    return el\n\n\ndef live_color_command_formatter(src):\n    \"\"\"Formatter wrapper.\"\"\"\n\n    try:\n        console, colors = execute(src.strip())\n        el = _color_command_console(colors)\n\n        if not colors:\n            el += '<div class=\"swatch-bar\"></div>'\n\n        el += colorize(console, 'pycon', **{'python3': True, 'stripnl': False})\n        el = '<div class=\"color-command\">{}</div>'.format(el)\n    except Exception:\n        return '<div class=\"color-command\"><div class=\"swatch-bar\"></div>{}</div>'.format(colorize('', 'text'))\n    return el\n\n\ndef color_formatter(src=\"\", language=\"\", class_name=None, md=\"\"):\n    \"\"\"Formatter wrapper.\"\"\"\n\n    from coloraide import Color\n\n    try:\n        result = src.strip()\n        try:\n            console, colors = execute(result)\n            if len(colors) != 1 or len(colors[0]) != 1:\n                raise ValueError('Need one color only')\n            color = colors[0][0].color\n            result = colors[0][0].string\n        except Exception:\n            color = Color(result.strip())\n        el = Etree.Element('span')\n        stops = []\n        if not color.in_gamut(WEBSPACE):\n            color.fit(WEBSPACE, in_place=True)\n            attributes = {'class': \"swatch out-of-gamut\", \"title\": result}\n            sub_el = Etree.SubElement(el, 'span', attributes)\n            stops.append(color.convert(WEBSPACE).to_string(hex=True, alpha=False))\n            if color.alpha < 1.0:\n                stops[-1] += ' 50%'\n                stops.append(color.convert(WEBSPACE).to_string(hex=True) + ' 50%')\n        else:\n            attributes = {'class': \"swatch\", \"title\": result}\n            sub_el = Etree.SubElement(el, 'span', attributes)\n            stops.append(color.convert(WEBSPACE).to_string(hex=True, alpha=False))\n            if color.alpha < 1.0:\n                stops[-1] += ' 50%'\n                stops.append(color.convert(WEBSPACE).to_string(hex=True) + ' 50%')\n\n        if not stops:\n            stops.extend(['transparent'] * 2)\n        if len(stops) == 1:\n            stops.append(stops[0])\n\n        Etree.SubElement(\n            sub_el,\n            'span',\n            {\n                \"class\": \"swatch-color\",\n                \"style\": \"--swatch-stops: {};\".format(','.join(stops))\n            }\n        )\n\n        el.append(md.inlinePatterns['backtick'].handle_code('css-color', result))\n    except Exception:\n        import traceback\n        print(traceback.format_exc())\n        el = md.inlinePatterns['backtick'].handle_code('text', src)\n    return el\n\n\ndef render_console(*args):\n    \"\"\"Render console update.\"\"\"\n\n    try:\n        # Run code\n        inputs = document.getElementById(\"__playground-inputs_{}\".format(globals()['id_num']))\n        results = document.getElementById(\"__playground-results_{}\".format(globals()['id_num']))\n        results.innerHTML = live_color_command_formatter(inputs.value)\n        scrollingElement = results.querySelector('code')\n        scrollingElement.scrollTop = scrollingElement.scrollHeight\n    except Exception as e:\n        print(e)\n\n\ndef render_notebook(*args):\n    \"\"\"Render notebook.\"\"\"\n\n    import markdown\n    from pymdownx import slugs\n\n    text = globals().get('content', '')\n    extensions = [\n        'markdown.extensions.toc',\n        'markdown.extensions.admonition',\n        'markdown.extensions.smarty',\n        'pymdownx.betterem',\n        'markdown.extensions.attr_list',\n        'markdown.extensions.def_list',\n        'markdown.extensions.tables',\n        'markdown.extensions.abbr',\n        'markdown.extensions.footnotes',\n        'markdown.extensions.md_in_html',\n        'pymdownx.superfences',\n        'pymdownx.highlight',\n        'pymdownx.inlinehilite',\n        'pymdownx.magiclink',\n        'pymdownx.tilde',\n        'pymdownx.caret',\n        'pymdownx.smartsymbols',\n        'pymdownx.emoji',\n        'pymdownx.escapeall',\n        'pymdownx.tasklist',\n        'pymdownx.striphtml',\n        'pymdownx.snippets',\n        'pymdownx.keys',\n        'pymdownx.details',\n        'pymdownx.saneheaders',\n        'pymdownx.tabbed'\n    ]\n    extension_configs = {\n        'markdown.extensions.toc': {\n            'slugify': slugs.slugify(case=\"lower\"),\n            'permalink': \"\"\n        },\n        'markdown.extensions.smarty': {\n            \"smart_quotes\": False,\n        },\n        'pymdownx.superfences': {\n            'preserve_tabs': True,\n            'custom_fences': [\n                {\n                    \"name\": 'playground',\n                    \"class\": 'playground',\n                    \"format\": color_command_formatter,\n                    \"validator\": color_command_validator\n                }\n            ]\n        },\n        'pymdownx.inlinehilite': {\n            'custom_inline': [\n                {\n                    'name': 'color',\n                    'class': 'color',\n                    'format': color_formatter\n                }\n            ]\n        },\n        'pymdownx.magiclink': {\n            'repo_url_shortener': True,\n            'repo_url_shorthand': True,\n            'social_url_shorthand': True,\n            'user': 'facelessuser',\n            'repo': 'coloraide'\n        },\n        'pymdownx.keys': {\n            'separator': \"\\uff0b\"\n        }\n    }\n\n    try:\n        html = markdown.markdown(text, extensions=extensions, extension_configs=extension_configs)\n    except Exception:\n        html = ''\n    content = document.getElementById(\"__notebook-render\")\n    content.innerHTML = html\n\n\n# Load up necessary wheels and then execute the appropriate payload\ncwheel = \"coloraide-0.9.0-py3-none-any.whl\"\nmwheel = \"Markdown-3.3.4-py3-none-any.whl\"\npwheel = \"pymdown_extensions-9.0-py3-none-any.whl\"\n\nwheels = [\n    location.origin + '/coloraide/playground/' + cwheel\n]\n\naction = globals().get('action')\nif action == 'render':\n    callback = render_notebook\n    wheels.extend(\n        [\n            location.origin + '/coloraide/playground/' + mwheel,\n            location.origin + '/coloraide/playground/' + pwheel\n        ]\n    )\nelse:\n    callback = render_console\n\n# We run this from inside an async JavaScript function\n# so it is okay to call await outside a coroutine as\n# we are technically still inside one.\nawait micropip.install(wheels)\ncallback()\n",g=function(e){return'\n!!! new "This notebook is powered by [Pyodide](https://github.com/pyodide/pyodide). Learn more [here](?notebook=https://gist.githubusercontent.com/facelessuser/7c819668b5eb248ecb9ac608d91391cf/raw/playground.md). Preview, convert, interpolate, and explore!"\n\n````````playground\n'.concat(e,"\n````````\n")},y=function(){m=!0,window.document.dispatchEvent(new Event("DOMContentLoaded",{bubbles:!0,cancelable:!0}))},_=function(e){var n=window.pageXOffset||(document.documentElement||document.body.parentNode||document.body).scrollLeft,t=window.pageYOffset||(document.documentElement||document.body.parentNode||document.body).scrollTop;e.style.height="5px",e.style.height="".concat(e.scrollHeight,"px"),window.scrollTo(n,t)},v=function(e){return encodeURIComponent(e).replace(/[.!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16))}))},w=function(){var e=n(regeneratorRuntime.mark((function e(n){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=document.getElementById("__playground-inputs_".concat(n))).setAttribute("readonly",""),a.globals.set("id_num",n),a.globals.set("action","notebook"),e.next=6,a.runPythonAsync(h);case 6:t.removeAttribute("readonly");case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),b=function(){var e=n(regeneratorRuntime.mark((function e(n){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.globals.set("content",n),a.globals.set("action","render"),e.next=4,a.runPythonAsync(h);case 4:(t=document.getElementById("__notebook-input"))&&(s=n,t.value=n),window.location.hash&&(window.location.href=window.location.href);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),x=function(){var e=n(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(d){e.next=7;break}return d=!0,e.next=4,loadPyodide({indexURL:"https://cdn.jsdelivr.net/pyodide/v0.19.0/full/",fullStdLib:!1});case 4:return a=e.sent,e.next=7,a.loadPackage(["micropip","Pygments"]);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(e,n,t){var o=null==n?"Loading...":n,r=t?"loading relative":"loading",a=document.createElement("template");a.innerHTML='<div class="'.concat(r,'"><div class="loader"></div><div>').concat(o,"</div></div>"),e.appendChild(a.content.firstChild)},k=function(e){e.querySelector(".loading")&&e.removeChild(e.querySelector(".loading"))},L=function(e){if("Tab"===e.key){var n=e.target;if(n.selectionStart!==n.selectionEnd){e.preventDefault();for(var t=n.selectionStart,o=n.selectionEnd,r=n.value;t>0&&"\n"!==r[t-1];)t--;for(;o>0&&"\n"!==r[o-1]&&o<r.length;)o++;for(var a=r.substr(t,o-t).split("\n"),i=0;i<a.length;i++)i===a.length-1&&0===a[i].length||(e.shiftKey?a[i]=a[i].replace(f,""):a[i]="    ".concat(a[i]));a=a.join("\n"),n.value=r.substr(0,t)+a+r.substr(o),n.selectionStart=t,n.selectionEnd=t+a.length}}},S=function(){var e=n(regeneratorRuntime.mark((function e(t){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=document.getElementById("__notebook-source"),document.querySelectorAll(".playground").forEach((function(e){var r=e.id.replace(u,"$1"),a=document.getElementById("__playground-inputs_".concat(r)),d=document.getElementById("__playground-results_".concat(r)),p=document.getElementById("__playground-code_".concat(r)),m=document.querySelector("button#__playground-edit_".concat(r)),f=document.querySelector("button#__playground-share_".concat(r)),h=document.querySelector("button#__playground-run_".concat(r)),g=document.querySelector("button#__playground-cancel_".concat(r));if(a.addEventListener("input",(function(){_(a)})),a.addEventListener("keydown",L),o&&t){var y=document.getElementById("__notebook-input");y.addEventListener("input",(function(e){_(e.target)})),y.addEventListener("keydown",L),document.getElementById("__notebook-edit").addEventListener("click",(function(){l[y.id]=y.value,document.getElementById("__notebook-render").classList.toggle("hidden"),document.getElementById("__notebook-source").classList.toggle("hidden"),_(document.getElementById("__notebook-input"))})),document.getElementById("__notebook-md-gist").addEventListener("click",function(){var e=n(regeneratorRuntime.mark((function e(n){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null!==(t=prompt("Please enter link to the Markdown page source:",c))&&(t=v(t),n.preventDefault(),history.pushState({notebook:t},"","?".concat(new URLSearchParams("notebook=".concat(t)).toString())),C(!1));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),document.getElementById("__notebook-py-gist").addEventListener("click",function(){var e=n(regeneratorRuntime.mark((function e(n){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null!==(t=prompt("Please enter the link to the Python code source:",c))&&(t=v(t),n.preventDefault(),history.pushState({source:t},"","?".concat(new URLSearchParams("source=".concat(t)).toString())),C(!1));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),document.getElementById("__notebook-input").value=s,document.getElementById("__notebook-cancel").addEventListener("click",(function(){y.value=l[y.id],delete l[y.id],document.getElementById("__notebook-render").classList.toggle("hidden"),document.getElementById("__notebook-source").classList.toggle("hidden")})),document.getElementById("__notebook-submit").addEventListener("click",n(regeneratorRuntime.mark((function e(){var n,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=document.getElementById("__notebook-render"),s=document.getElementById("__notebook-input").value,n.classList.toggle("hidden"),document.getElementById("__notebook-source").classList.toggle("hidden"),t=document.querySelector("article"),E(t,"Loading Notebook..."),n.innerHTML="",l={},e.next=10,x();case 10:return e.next=12,b(s);case 12:return e.next=14,S();case 14:k(t);case 15:case"end":return e.stop()}}),e)}))))}a.addEventListener("touchmove",(function(e){e.stopPropagation()})),m.addEventListener("click",n(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l[r]=a.value,p.classList.toggle("hidden"),d.classList.toggle("hidden"),h.classList.toggle("hidden"),g.classList.toggle("hidden"),m.classList.toggle("hidden"),f.classList.toggle("hidden"),_(a),a.focus();case 9:case"end":return e.stop()}}),e)})))),f.addEventListener("click",n(regeneratorRuntime.mark((function e(){var t,o,r,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=v(a.value),o=window.location,r="/playground/",o.pathname.startsWith("/coloraide/")&&(r="/coloraide/playground/"),i="".concat(o.protocol,"//").concat(o.host).concat(r,"?code=").concat(t),t.length>1e3?alert("Code must be under a 1000 characters to generate a URL!"):navigator.clipboard.writeText(i).then(n(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:alert("Link copied to clipboard :)");case 1:case"end":return e.stop()}}),e)}))),n(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:alert("Failed to copy link clipboard!");case 1:case"end":return e.stop()}}),e)}))));case 6:case"end":return e.stop()}}),e)})))),h.addEventListener("click",n(regeneratorRuntime.mark((function e(){var n,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!i){e.next=2;break}return e.abrupt("return");case 2:return i=!0,n=p.querySelector("form"),E(n,null,!0),(t=document.querySelectorAll(".playground .playground-run"))&&t.forEach((function(e){e.setAttribute("disabled","")})),e.next=9,x();case 9:return d.querySelector("code").innerHTML="",e.next=12,w(r);case 12:t&&t.forEach((function(e){e.removeAttribute("disabled")})),k(n),p.classList.toggle("hidden"),d.classList.toggle("hidden"),m.classList.toggle("hidden"),f.classList.toggle("hidden"),h.classList.toggle("hidden"),g.classList.toggle("hidden"),delete l[r],i=!1;case 22:case"end":return e.stop()}}),e)})))),g.addEventListener("click",(function(){a.value=l[r],delete l[r],p.classList.toggle("hidden"),d.classList.toggle("hidden"),m.classList.toggle("hidden"),f.classList.toggle("hidden"),h.classList.toggle("hidden"),g.classList.toggle("hidden")}))}));case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),C=function(){var e=n(regeneratorRuntime.mark((function e(t){var o,r,a,i,s,u,d,m,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l={},!window.location.pathname.endsWith("/playground/")){e.next=32;break}if(o=new URLSearchParams(window.location.search),r="Loading Pyodide...",a="Loading Notebook...",i=o.has("source")?o.get("source"):o.get("notebook"),s=document.querySelector("article"),null===i||!i.trim()){e.next=16;break}return E(s,r),e.next=11,x();case 11:k(s),E(s,a);try{u=o.has("source")?"source":"notebook",p=decodeURIComponent(o.toString()),d="",m=new XMLHttpRequest,c=i,m.open("GET",i,!0),m.onload=n(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return 4===m.readyState&&200===m.status&&(d=m.responseText),"source"===u&&(d=g(d)),e.next=4,b(d);case 4:return e.next=6,S(t);case 6:k(s),y();case 8:case"end":return e.stop()}}),e)}))),m.send()}catch(e){}e.next=30;break;case 16:return c="",f=g(o.has("code")?o.get("code"):"import coloraide\ncoloraide.__version__\nColor('red')"),p=decodeURIComponent(o.toString()),E(s,r),e.next=22,x();case 22:return k(s),E(s,a),e.next=26,b(f);case 26:return e.next=28,S(t);case 28:k(s),y();case 30:e.next=35;break;case 32:c="",p="",S(t);case 35:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),document.addEventListener("click",(function(e){var n=e.target||e.srcElement;if("A"===n.tagName&&C&&n.getAttribute("href")&&n.host===window.location.host&&"/coloraide/playground/"===window.location.pathname&&window.location.pathname===n.pathname&&window.location.search!==n.search){e.preventDefault();var r,a={},i=function(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=o(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,c=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return s=e.done,e},e:function(e){c=!0,i=e},f:function(){try{s||null==t.return||t.return()}finally{if(c)throw i}}}}(new URLSearchParams(n.search));try{for(i.s();!(r=i.n()).done;){var s=t(r.value,2),c=s[0],l=s[1];a[c]=l}}catch(e){i.e(e)}finally{i.f()}history.pushState(a,"",n.href),C(!1)}})),window.addEventListener("popstate",(function(){"/coloraide/playground/"===window.location.pathname&&decodeURIComponent(new URLSearchParams(window.location.search).toString())!==p&&C(!1)})),window.addEventListener("unload",(function(){m=!0})),window.document$.subscribe((function(){m?m=!1:C(!0)}))}();
//# sourceMappingURL=extra-notebook-8732391e.js.map
