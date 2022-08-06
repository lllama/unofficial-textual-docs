URLS=[
"textual/index.html",
"textual/drivers/index.html",
"textual/drivers/linux_driver.html",
"textual/driver.html",
"textual/color.html",
"textual/css/index.html",
"textual/css/tokenizer.html",
"textual/css/query.html",
"textual/css/stylesheet.html",
"textual/css/scalar.html",
"textual/css/tokenize.html",
"textual/css/scalar_animation.html",
"textual/css/parse.html",
"textual/css/model.html",
"textual/css/transition.html",
"textual/css/match.html",
"textual/css/styles.html",
"textual/css/errors.html",
"textual/css/constants.html",
"textual/css/types.html",
"textual/message_pump.html",
"textual/case.html",
"textual/devtools/index.html",
"textual/devtools/renderables.html",
"textual/reactive.html",
"textual/box_model.html",
"textual/renderables/index.html",
"textual/renderables/blank.html",
"textual/renderables/sparkline.html",
"textual/renderables/underline_bar.html",
"textual/renderables/tint.html",
"textual/renderables/gradient.html",
"textual/renderables/opacity.html",
"textual/message.html",
"textual/scroll_view.html",
"textual/widget.html",
"textual/dom.html",
"textual/suggestions.html",
"textual/scrollbar.html",
"textual/actions.html",
"textual/events.html",
"textual/features.html",
"textual/cli/index.html",
"textual/screen.html",
"textual/design.html",
"textual/keys.html",
"textual/draw.html",
"textual/file_monitor.html",
"textual/binding.html",
"textual/errors.html",
"textual/layout.html",
"textual/messages.html",
"textual/constants.html",
"textual/geometry.html",
"textual/layouts/index.html",
"textual/layouts/vertical.html",
"textual/layouts/horizontal.html",
"textual/layouts/factory.html",
"textual/layouts/grid.html"
];
INDEX=[
{
"ref":"textual",
"url":0,
"doc":""
},
{
"ref":"textual.log",
"url":0,
"doc":"",
"func":1
},
{
"ref":"textual.panic",
"url":0,
"doc":"",
"func":1
},
{
"ref":"textual.drivers",
"url":1,
"doc":""
},
{
"ref":"textual.drivers.linux_driver",
"url":2,
"doc":""
},
{
"ref":"textual.drivers.linux_driver.LinuxDriver",
"url":2,
"doc":"Powers display and input for Linux / MacOS"
},
{
"ref":"textual.drivers.linux_driver.LinuxDriver.start_application_mode",
"url":2,
"doc":"",
"func":1
},
{
"ref":"textual.drivers.linux_driver.LinuxDriver.disable_input",
"url":2,
"doc":"",
"func":1
},
{
"ref":"textual.drivers.linux_driver.LinuxDriver.stop_application_mode",
"url":2,
"doc":"",
"func":1
},
{
"ref":"textual.drivers.linux_driver.LinuxDriver.run_input_thread",
"url":2,
"doc":"",
"func":1
},
{
"ref":"textual.drivers.linux_driver.LinuxDriver.process_event",
"url":3,
"doc":"Performs some additional processing of events.",
"func":1
},
{
"ref":"textual.drivers.linux_driver.LinuxDriver.enable_bracketed_paste",
"url":3,
"doc":"Write the ANSI escape code  ESC[?2004h , which enables bracketed paste mode.",
"func":1
},
{
"ref":"textual.drivers.linux_driver.LinuxDriver.disable_bracketed_paste",
"url":3,
"doc":"Write the ANSI escape code  ESC[?2004l , which disables bracketed paste mode.",
"func":1
},
{
"ref":"textual.color",
"url":4,
"doc":"Manages Color in Textual. All instances where the developer is presented with a color should use this class. The only exception should be when passing things to a Rich renderable, which will need to use the  rich_color attribute to perform a conversion. I'm not entirely happy with burdening the user with two similar color classes. In a future update we might add a protocol to convert automatically so the dev could use them interchangeably."
},
{
"ref":"textual.color.HLS",
"url":4,
"doc":"A color in HLS format."
},
{
"ref":"textual.color.HLS.h",
"url":4,
"doc":"Alias for field number 0"
},
{
"ref":"textual.color.HLS.l",
"url":4,
"doc":"Alias for field number 1"
},
{
"ref":"textual.color.HLS.s",
"url":4,
"doc":"Alias for field number 2"
},
{
"ref":"textual.color.HSV",
"url":4,
"doc":"A color in HSV format."
},
{
"ref":"textual.color.HSV.h",
"url":4,
"doc":"Alias for field number 0"
},
{
"ref":"textual.color.HSV.s",
"url":4,
"doc":"Alias for field number 1"
},
{
"ref":"textual.color.HSV.v",
"url":4,
"doc":"Alias for field number 2"
},
{
"ref":"textual.color.Lab",
"url":4,
"doc":"A color in CIE-L ab format."
},
{
"ref":"textual.color.Lab.L",
"url":4,
"doc":"Alias for field number 0"
},
{
"ref":"textual.color.Lab.a",
"url":4,
"doc":"Alias for field number 1"
},
{
"ref":"textual.color.Lab.b",
"url":4,
"doc":"Alias for field number 2"
},
{
"ref":"textual.color.ColorParseError",
"url":4,
"doc":"A color failed to parse Creates a new ColorParseError Args: message (str): the error message suggested_color (str | None): a close color we can suggest. Defaults to None."
},
{
"ref":"textual.color.Color",
"url":4,
"doc":"A class to represent a single RGB color with alpha."
},
{
"ref":"textual.color.Color.r",
"url":4,
"doc":"Alias for field number 0"
},
{
"ref":"textual.color.Color.g",
"url":4,
"doc":"Alias for field number 1"
},
{
"ref":"textual.color.Color.b",
"url":4,
"doc":"Alias for field number 2"
},
{
"ref":"textual.color.Color.a",
"url":4,
"doc":"Alias for field number 3"
},
{
"ref":"textual.color.Color.from_rich_color",
"url":4,
"doc":"Create a new color from Rich's Color class. Args: rich_color (RichColor): An instance of rich.color.Color. Returns: Color: A new Color.",
"func":1
},
{
"ref":"textual.color.Color.from_hls",
"url":4,
"doc":"Create a color from HLS components. Args: h (float): Hue. l (float): Lightness. s (float): Saturation. Returns: Color: A new color.",
"func":1
},
{
"ref":"textual.color.Color.is_transparent",
"url":4,
"doc":"Check if the color is transparent, i.e. has 0 alpha."
},
{
"ref":"textual.color.Color.clamped",
"url":4,
"doc":"Get a color with all components saturated to maximum and minimum values."
},
{
"ref":"textual.color.Color.rich_color",
"url":4,
"doc":"This color encoded in Rich's Color class."
},
{
"ref":"textual.color.Color.normalized",
"url":4,
"doc":"A tuple of the color components normalized to between 0 and 1."
},
{
"ref":"textual.color.Color.rgb",
"url":4,
"doc":"Get just the red, green, and blue components."
},
{
"ref":"textual.color.Color.hls",
"url":4,
"doc":"Get the color as HLS."
},
{
"ref":"textual.color.Color.brightness",
"url":4,
"doc":"Get the human perceptual brightness."
},
{
"ref":"textual.color.Color.hex",
"url":4,
"doc":"The color in CSS hex form, with 6 digits for RGB, and 8 digits for RGBA. Returns: str: A CSS hex-style color, e.g. \" 46b3de\" or \" 3342457f\""
},
{
"ref":"textual.color.Color.css",
"url":4,
"doc":"The color in CSS rgb or rgba form. Returns: str: A CSS style color, e.g. \"rgb(10,20,30)\" or \"rgb(50,70,80,0.5)\""
},
{
"ref":"textual.color.Color.with_alpha",
"url":4,
"doc":"Create a new color with the given alpha. Args: alpha (float): New value for alpha. Returns: Color: A new color.",
"func":1
},
{
"ref":"textual.color.Color.blend",
"url":4,
"doc":"Generate a new color between two colors. Args: destination (Color): Another color. factor (float): A blend factor, 0 -> 1 Returns: Color: A new color.",
"func":1
},
{
"ref":"textual.color.Color.parse",
"url":4,
"doc":"Parse a string containing a CSS-style color. Args: color_text (str | Color): Text with a valid color format. Color objects will be returned unmodified. Raises: ColorParseError: If the color is not encoded correctly. Returns: Color: New color object.",
"func":1
},
{
"ref":"textual.color.Color.darken",
"url":4,
"doc":"Darken the color by a given amount. Args: amount (float): Value between 0-1 to reduce luminance by. Returns: Color: New color.",
"func":1
},
{
"ref":"textual.color.Color.lighten",
"url":4,
"doc":"Lighten the color by a given amount. Args: amount (float): Value between 0-1 to increase luminance by. Returns: Color: New color.",
"func":1
},
{
"ref":"textual.color.Color.get_contrast_text",
"url":4,
"doc":"Get a light or dark color that best contrasts this color, for use with text. Args: alpha (float, optional): An alpha value to adjust the pure white / black by. Defaults to 0.95. Returns: Color: A new color, either an off-white or off-black",
"func":1
},
{
"ref":"textual.color.ColorPair",
"url":4,
"doc":"A pair of colors for foreground and background."
},
{
"ref":"textual.color.ColorPair.foreground",
"url":4,
"doc":"Alias for field number 0"
},
{
"ref":"textual.color.ColorPair.background",
"url":4,
"doc":"Alias for field number 1"
},
{
"ref":"textual.color.ColorPair.style",
"url":4,
"doc":"A Rich style with foreground and background."
},
{
"ref":"textual.color.rgb_to_lab",
"url":4,
"doc":"Convert an RGB color to the CIE-L ab format. Uses the standard RGB color space with a D65/2\u2070 standard illuminant. Conversion passes through the XYZ color space. Cf. http: www.easyrgb.com/en/math.php.",
"func":1
},
{
"ref":"textual.color.lab_to_rgb",
"url":4,
"doc":"Convert a CIE-L ab color to RGB. Uses the standard RGB color space with a D65/2\u2070 standard illuminant. Conversion passes through the XYZ color space. Cf. http: www.easyrgb.com/en/math.php.",
"func":1
},
{
"ref":"textual.css",
"url":5,
"doc":""
},
{
"ref":"textual.css.tokenizer",
"url":6,
"doc":""
},
{
"ref":"textual.css.tokenizer.TokenError",
"url":6,
"doc":"Error raised when the CSS cannot be tokenized (syntax error). Args: path (str): Path to source or \" \" if source is parsed from a literal. code (str): The code being parsed. start (tuple[int, int]): Line number of the error. message (str): A message associated with the error. end (tuple[int, int] | None): End location of token, or None if not known. Defaults to None."
},
{
"ref":"textual.css.tokenizer.EOFError",
"url":6,
"doc":"Error raised when the CSS cannot be tokenized (syntax error). Args: path (str): Path to source or \" \" if source is parsed from a literal. code (str): The code being parsed. start (tuple[int, int]): Line number of the error. message (str): A message associated with the error. end (tuple[int, int] | None): End location of token, or None if not known. Defaults to None."
},
{
"ref":"textual.css.tokenizer.Expect",
"url":6,
"doc":""
},
{
"ref":"textual.css.tokenizer.Expect.expect_eof",
"url":6,
"doc":"",
"func":1
},
{
"ref":"textual.css.tokenizer.ReferencedBy",
"url":6,
"doc":"ReferencedBy(name, location, length)"
},
{
"ref":"textual.css.tokenizer.ReferencedBy.name",
"url":6,
"doc":"Alias for field number 0"
},
{
"ref":"textual.css.tokenizer.ReferencedBy.location",
"url":6,
"doc":"Alias for field number 1"
},
{
"ref":"textual.css.tokenizer.ReferencedBy.length",
"url":6,
"doc":"Alias for field number 2"
},
{
"ref":"textual.css.tokenizer.Token",
"url":6,
"doc":"Token(name, value, path, code, location, referenced_by)"
},
{
"ref":"textual.css.tokenizer.Token.name",
"url":6,
"doc":"Alias for field number 0"
},
{
"ref":"textual.css.tokenizer.Token.value",
"url":6,
"doc":"Alias for field number 1"
},
{
"ref":"textual.css.tokenizer.Token.path",
"url":6,
"doc":"Alias for field number 2"
},
{
"ref":"textual.css.tokenizer.Token.code",
"url":6,
"doc":"Alias for field number 3"
},
{
"ref":"textual.css.tokenizer.Token.location",
"url":6,
"doc":"Alias for field number 4"
},
{
"ref":"textual.css.tokenizer.Token.referenced_by",
"url":6,
"doc":"Alias for field number 5"
},
{
"ref":"textual.css.tokenizer.Token.start",
"url":6,
"doc":"Start line and column (1 indexed)."
},
{
"ref":"textual.css.tokenizer.Token.end",
"url":6,
"doc":"End line and column (1 indexed)."
},
{
"ref":"textual.css.tokenizer.Token.with_reference",
"url":6,
"doc":"Return a copy of the Token, with reference information attached. This is used for variable substitution, where a variable reference can refer to tokens which were defined elsewhere. With the additional ReferencedBy data attached, we can track where the token we are referring to is used.",
"func":1
},
{
"ref":"textual.css.tokenizer.Tokenizer",
"url":6,
"doc":""
},
{
"ref":"textual.css.tokenizer.Tokenizer.get_token",
"url":6,
"doc":"",
"func":1
},
{
"ref":"textual.css.tokenizer.Tokenizer.skip_to",
"url":6,
"doc":"",
"func":1
},
{
"ref":"textual.css.query",
"url":7,
"doc":"A DOMQuery is a set of DOM nodes associated with a given CSS selector. This set of nodes may be further filtered with the filter method. Additional methods apply actions to the nodes in the query. If this sounds like JQuery, a (once) popular JS library, it is no coincidence. DOMQuery objects are typically created by Widget.filter method."
},
{
"ref":"textual.css.query.NoMatchingNodesError",
"url":7,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"textual.css.query.DOMQuery",
"url":7,
"doc":""
},
{
"ref":"textual.css.query.DOMQuery.filter",
"url":7,
"doc":"Filter this set by the given CSS selector. Args: selector (str): A CSS selector. Returns: DOMQuery: New DOM Query.",
"func":1
},
{
"ref":"textual.css.query.DOMQuery.exclude",
"url":7,
"doc":"Exclude nodes that match a given selector. Args: selector (str): A CSS selector. Returns: DOMQuery: New DOM query.",
"func":1
},
{
"ref":"textual.css.query.DOMQuery.first",
"url":7,
"doc":"Get the first matched node. Returns: DOMNode: A DOM Node.",
"func":1
},
{
"ref":"textual.css.query.DOMQuery.add_class",
"url":7,
"doc":"Add the given class name(s) to nodes.",
"func":1
},
{
"ref":"textual.css.query.DOMQuery.remove_class",
"url":7,
"doc":"Remove the given class names from the nodes.",
"func":1
},
{
"ref":"textual.css.query.DOMQuery.toggle_class",
"url":7,
"doc":"Toggle the given class names from matched nodes.",
"func":1
},
{
"ref":"textual.css.query.DOMQuery.set_styles",
"url":7,
"doc":"Set styles on matched nodes. Args: css (str, optional): CSS declarations to parser, or None. Defaults to None.",
"func":1
},
{
"ref":"textual.css.query.DOMQuery.refresh",
"url":7,
"doc":"Refresh matched nodes. Args: repaint (bool): Repaint node(s). defaults to True. layout (bool): Layout node(s). Defaults to False. Returns: DOMQuery: Query for chaining.",
"func":1
},
{
"ref":"textual.css.stylesheet",
"url":8,
"doc":""
},
{
"ref":"textual.css.stylesheet.StylesheetParseError",
"url":8,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"textual.css.stylesheet.StylesheetErrors",
"url":8,
"doc":""
},
{
"ref":"textual.css.stylesheet.StylesheetErrors.set_variables",
"url":8,
"doc":"Pre-populate CSS variables.",
"func":1
},
{
"ref":"textual.css.stylesheet.CssSource",
"url":8,
"doc":"Contains the CSS content and whether or not the CSS comes from user defined stylesheets vs widget-level stylesheets. Args: content (str): The CSS as a string. is_defaults (bool): True if the CSS is default (i.e. that defined at the widget level). False if it's user CSS (which will override the defaults)."
},
{
"ref":"textual.css.stylesheet.CssSource.content",
"url":8,
"doc":"Alias for field number 0"
},
{
"ref":"textual.css.stylesheet.CssSource.is_defaults",
"url":8,
"doc":"Alias for field number 1"
},
{
"ref":"textual.css.stylesheet.Stylesheet",
"url":8,
"doc":""
},
{
"ref":"textual.css.stylesheet.Stylesheet.rules",
"url":8,
"doc":""
},
{
"ref":"textual.css.stylesheet.Stylesheet.css",
"url":8,
"doc":""
},
{
"ref":"textual.css.stylesheet.Stylesheet.copy",
"url":8,
"doc":"Create a copy of this stylesheet. Returns: Stylesheet: New stylesheet.",
"func":1
},
{
"ref":"textual.css.stylesheet.Stylesheet.set_variables",
"url":8,
"doc":"Set CSS variables. Args: variables (dict[str, str]): A mapping of name to variable.",
"func":1
},
{
"ref":"textual.css.stylesheet.Stylesheet.read",
"url":8,
"doc":"Read Textual CSS file. Args: filename (str | PurePath): filename of CSS. Raises: StylesheetError: If the CSS could not be read. StylesheetParseError: If the CSS is invalid.",
"func":1
},
{
"ref":"textual.css.stylesheet.Stylesheet.add_source",
"url":8,
"doc":"Parse CSS from a string. Args: css (str): String with CSS source. path (str | PurePath, optional): The path of the source if a file, or some other identifier. Defaults to None. is_default_css (bool): True if the CSS is defined in the Widget, False if the CSS is defined in a user stylesheet. Raises: StylesheetError: If the CSS could not be read. StylesheetParseError: If the CSS is invalid.",
"func":1
},
{
"ref":"textual.css.stylesheet.Stylesheet.parse",
"url":8,
"doc":"Parse the source in the stylesheet. Raises: StylesheetParseError: If there are any CSS related errors.",
"func":1
},
{
"ref":"textual.css.stylesheet.Stylesheet.reparse",
"url":8,
"doc":"Re-parse source, applying new variables. Raises: StylesheetError: If the CSS could not be read. StylesheetParseError: If the CSS is invalid.",
"func":1
},
{
"ref":"textual.css.stylesheet.Stylesheet.apply",
"url":8,
"doc":"Apply the stylesheet to a DOM node. Args: node (DOMNode): The  DOMNode to apply the stylesheet to. Applies the styles defined in this  Stylesheet to the node. If the same rule is defined multiple times for the node (e.g. multiple classes modifying the same CSS property), then only the most specific rule will be applied. animate (bool, optional): Animate changed rules. Defaults to  False .",
"func":1
},
{
"ref":"textual.css.stylesheet.Stylesheet.replace_rules",
"url":8,
"doc":"Replace style rules on a node, animating as required. Args: node (DOMNode): A DOM node. rules (RulesMap): Mapping of rules. animate (bool, optional): Enable animation. Defaults to False.",
"func":1
},
{
"ref":"textual.css.stylesheet.Stylesheet.update",
"url":8,
"doc":"Update a node and its children.",
"func":1
},
{
"ref":"textual.css.scalar",
"url":9,
"doc":""
},
{
"ref":"textual.css.scalar.ScalarError",
"url":9,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"textual.css.scalar.ScalarResolveError",
"url":9,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"textual.css.scalar.ScalarParseError",
"url":9,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"textual.css.scalar.Unit",
"url":9,
"doc":"Enumeration of the various units inherited from CSS."
},
{
"ref":"textual.css.scalar.Unit.CELLS",
"url":9,
"doc":""
},
{
"ref":"textual.css.scalar.Unit.FRACTION",
"url":9,
"doc":""
},
{
"ref":"textual.css.scalar.Unit.PERCENT",
"url":9,
"doc":""
},
{
"ref":"textual.css.scalar.Unit.WIDTH",
"url":9,
"doc":""
},
{
"ref":"textual.css.scalar.Unit.HEIGHT",
"url":9,
"doc":""
},
{
"ref":"textual.css.scalar.Unit.VIEW_WIDTH",
"url":9,
"doc":""
},
{
"ref":"textual.css.scalar.Unit.VIEW_HEIGHT",
"url":9,
"doc":""
},
{
"ref":"textual.css.scalar.Unit.AUTO",
"url":9,
"doc":""
},
{
"ref":"textual.css.scalar.get_symbols",
"url":9,
"doc":"Get symbols for an iterable of units. Args: units (Iterable[Unit]): A number of units. Returns: list[str]: List of symbols.",
"func":1
},
{
"ref":"textual.css.scalar.Scalar",
"url":9,
"doc":"A numeric value and a unit."
},
{
"ref":"textual.css.scalar.Scalar.value",
"url":9,
"doc":"Alias for field number 0"
},
{
"ref":"textual.css.scalar.Scalar.unit",
"url":9,
"doc":"Alias for field number 1"
},
{
"ref":"textual.css.scalar.Scalar.percent_unit",
"url":9,
"doc":"Alias for field number 2"
},
{
"ref":"textual.css.scalar.Scalar.is_percent",
"url":9,
"doc":"Check if the Scalar is a percentage unit."
},
{
"ref":"textual.css.scalar.Scalar.is_fraction",
"url":9,
"doc":"Check if the unit is a fraction."
},
{
"ref":"textual.css.scalar.Scalar.cells",
"url":9,
"doc":"Check if the unit is explicit cells."
},
{
"ref":"textual.css.scalar.Scalar.fraction",
"url":9,
"doc":"Get the fraction value, or None if not a value."
},
{
"ref":"textual.css.scalar.Scalar.symbol",
"url":9,
"doc":"Get the symbol of this unit."
},
{
"ref":"textual.css.scalar.Scalar.is_auto",
"url":9,
"doc":"Check if this is an auto unit."
},
{
"ref":"textual.css.scalar.Scalar.from_number",
"url":9,
"doc":"Create a scalar with cells unit. Args: value (float): A number of cells. Returns: Scalar: New Scalar.",
"func":1
},
{
"ref":"textual.css.scalar.Scalar.parse",
"url":9,
"doc":"Parse a string in to a Scalar Args: token (str): A string containing a scalar, e.g. \"3.14fr\" Raises: ScalarParseError: If the value is not a valid scalar Returns: Scalar: New scalar",
"func":1
},
{
"ref":"textual.css.scalar.Scalar.resolve_dimension",
"url":9,
"doc":"Resolve scalar with units in to a dimensions. Args: size (tuple[int, int]): Size of the container. viewport (tuple[int, int]): Size of the viewport (typically terminal size) Raises: ScalarResolveError: If the unit is unknown. Returns: int: A size (in cells)",
"func":1
},
{
"ref":"textual.css.scalar.Scalar.copy_with",
"url":9,
"doc":"Get a copy of this Scalar, with values optionally modified Args: value (float | None): The new value, or None to keep the same value unit (Unit | None): The new unit, or None to keep the same unit percent_unit (Unit | None): The new percent_unit, or None to keep the same percent_unit",
"func":1
},
{
"ref":"textual.css.scalar.ScalarOffset",
"url":9,
"doc":"An Offset with two scalars, used to animate between to Scalars."
},
{
"ref":"textual.css.scalar.ScalarOffset.x",
"url":9,
"doc":"Alias for field number 0"
},
{
"ref":"textual.css.scalar.ScalarOffset.y",
"url":9,
"doc":"Alias for field number 1"
},
{
"ref":"textual.css.scalar.ScalarOffset.null",
"url":9,
"doc":"Get a null scalar offset (0, 0).",
"func":1
},
{
"ref":"textual.css.scalar.ScalarOffset.resolve",
"url":9,
"doc":"",
"func":1
},
{
"ref":"textual.css.scalar.percentage_string_to_float",
"url":9,
"doc":"Convert a string percentage e.g. '20%' to a float e.g. 20.0. Args: string (str): The percentage string to convert.",
"func":1
},
{
"ref":"textual.css.tokenize",
"url":10,
"doc":""
},
{
"ref":"textual.css.tokenize.TokenizerState",
"url":10,
"doc":"State machine for the tokenizer. Attributes: EXPECT: The initial expectation of the tokenizer. Since we start tokenizing at the root scope, we might expect to see either a variable or selector, for example. STATE_MAP: Maps token names to Expects, defines the sets of valid tokens that we'd expect to see next, given the current token. For example, if we've just processed a variable declaration name, we next expect to see the value of that variable."
},
{
"ref":"textual.css.tokenize.TokenizerState.EXPECT",
"url":10,
"doc":""
},
{
"ref":"textual.css.tokenize.TokenizerState.STATE_MAP",
"url":10,
"doc":""
},
{
"ref":"textual.css.tokenize.DeclarationTokenizerState",
"url":10,
"doc":"State machine for the tokenizer. Attributes: EXPECT: The initial expectation of the tokenizer. Since we start tokenizing at the root scope, we might expect to see either a variable or selector, for example. STATE_MAP: Maps token names to Expects, defines the sets of valid tokens that we'd expect to see next, given the current token. For example, if we've just processed a variable declaration name, we next expect to see the value of that variable."
},
{
"ref":"textual.css.tokenize.DeclarationTokenizerState.EXPECT",
"url":10,
"doc":""
},
{
"ref":"textual.css.tokenize.DeclarationTokenizerState.STATE_MAP",
"url":10,
"doc":""
},
{
"ref":"textual.css.tokenize.ValueTokenizerState",
"url":10,
"doc":"State machine for the tokenizer. Attributes: EXPECT: The initial expectation of the tokenizer. Since we start tokenizing at the root scope, we might expect to see either a variable or selector, for example. STATE_MAP: Maps token names to Expects, defines the sets of valid tokens that we'd expect to see next, given the current token. For example, if we've just processed a variable declaration name, we next expect to see the value of that variable."
},
{
"ref":"textual.css.tokenize.ValueTokenizerState.EXPECT",
"url":10,
"doc":""
},
{
"ref":"textual.css.tokenize.tokenize_values",
"url":10,
"doc":"Tokens the values in a dict of strings. Args: values (dict[str, str]): A mapping of CSS variable name on to a value, to be added to the CSS context. Returns: dict[str, list[Token : A mapping of name on to a list of tokens,",
"func":1
},
{
"ref":"textual.css.scalar_animation",
"url":11,
"doc":""
},
{
"ref":"textual.css.scalar_animation.ScalarAnimation",
"url":11,
"doc":"Helper class that provides a standard way to create an ABC using inheritance."
},
{
"ref":"textual.css.parse",
"url":12,
"doc":""
},
{
"ref":"textual.css.parse.parse_selectors",
"url":12,
"doc":"",
"func":1
},
{
"ref":"textual.css.parse.parse_rule_set",
"url":12,
"doc":"",
"func":1
},
{
"ref":"textual.css.parse.parse_declarations",
"url":12,
"doc":"Parse declarations and return a Styles object. Args: css (str): String containing CSS. path (str): Path to the CSS, or something else to identify the location. Returns: Styles: A styles object.",
"func":1
},
{
"ref":"textual.css.parse.substitute_references",
"url":12,
"doc":"Replace variable references with values by substituting variable reference tokens with the tokens representing their values. Args: tokens (Iterable[Token]): Iterator of Tokens which may contain tokens with the name \"variable_ref\". Returns: Iterable[Token]: Yields Tokens such that any variable references (tokens where token.name  \"variable_ref\") have been replaced with the tokens representing the value. In other words, an Iterable of Tokens similar to the original input, but with variables resolved. Substituted tokens will have their referenced_by attribute populated with information about where the tokens are being substituted to.",
"func":1
},
{
"ref":"textual.css.parse.parse",
"url":12,
"doc":"Parse CSS by tokenizing it, performing variable substitution, and generating rule sets from it. Args: css (str): The input CSS path (str): Path to the CSS variables (dict[str, str]): Substitution variables to substitute tokens for. is_default_rules (bool): True if the rules we're extracting are default (i.e. in Widget.CSS) rules. False if they're from user defined CSS.",
"func":1
},
{
"ref":"textual.css.model",
"url":13,
"doc":""
},
{
"ref":"textual.css.model.SelectorType",
"url":13,
"doc":"An enumeration."
},
{
"ref":"textual.css.model.SelectorType.UNIVERSAL",
"url":13,
"doc":""
},
{
"ref":"textual.css.model.SelectorType.TYPE",
"url":13,
"doc":""
},
{
"ref":"textual.css.model.SelectorType.CLASS",
"url":13,
"doc":""
},
{
"ref":"textual.css.model.SelectorType.ID",
"url":13,
"doc":""
},
{
"ref":"textual.css.model.CombinatorType",
"url":13,
"doc":"An enumeration."
},
{
"ref":"textual.css.model.CombinatorType.SAME",
"url":13,
"doc":""
},
{
"ref":"textual.css.model.CombinatorType.DESCENDENT",
"url":13,
"doc":""
},
{
"ref":"textual.css.model.CombinatorType.CHILD",
"url":13,
"doc":""
},
{
"ref":"textual.css.model.Selector",
"url":13,
"doc":"Represents a CSS selector. Some examples of selectors:  Header.title App > Content"
},
{
"ref":"textual.css.model.Selector.name",
"url":13,
"doc":""
},
{
"ref":"textual.css.model.Selector.pseudo_classes",
"url":13,
"doc":""
},
{
"ref":"textual.css.model.Selector.specificity",
"url":13,
"doc":""
},
{
"ref":"textual.css.model.Selector.combinator",
"url":13,
"doc":""
},
{
"ref":"textual.css.model.Selector.type",
"url":13,
"doc":""
},
{
"ref":"textual.css.model.Selector.advance",
"url":13,
"doc":""
},
{
"ref":"textual.css.model.Selector.css",
"url":13,
"doc":"Rebuilds the selector as it would appear in CSS."
},
{
"ref":"textual.css.model.Selector.check",
"url":13,
"doc":"Check if a given node matches the selector. Args: node (DOMNode): A DOM node. Returns: bool: True if the selector matches, otherwise False.",
"func":1
},
{
"ref":"textual.css.model.Declaration",
"url":13,
"doc":"Declaration(token: 'Token', name: 'str', tokens: 'list[Token]' =  )"
},
{
"ref":"textual.css.model.Declaration.token",
"url":13,
"doc":""
},
{
"ref":"textual.css.model.Declaration.name",
"url":13,
"doc":""
},
{
"ref":"textual.css.model.Declaration.tokens",
"url":13,
"doc":""
},
{
"ref":"textual.css.model.SelectorSet",
"url":13,
"doc":"SelectorSet(selectors: 'list[Selector]' =  , specificity: 'Specificity3' = (0, 0, 0 "
},
{
"ref":"textual.css.model.SelectorSet.selectors",
"url":13,
"doc":""
},
{
"ref":"textual.css.model.SelectorSet.specificity",
"url":13,
"doc":""
},
{
"ref":"textual.css.model.SelectorSet.from_selectors",
"url":13,
"doc":"",
"func":1
},
{
"ref":"textual.css.model.RuleSet",
"url":13,
"doc":"RuleSet(selector_set: 'list[SelectorSet]' =  , styles: 'Styles' =  , errors: 'list[tuple[Token, str ' =  , classes: 'set[str]' =  , is_default_rules: 'bool' = False)"
},
{
"ref":"textual.css.model.RuleSet.selector_set",
"url":13,
"doc":""
},
{
"ref":"textual.css.model.RuleSet.styles",
"url":13,
"doc":""
},
{
"ref":"textual.css.model.RuleSet.errors",
"url":13,
"doc":""
},
{
"ref":"textual.css.model.RuleSet.classes",
"url":13,
"doc":""
},
{
"ref":"textual.css.model.RuleSet.is_default_rules",
"url":13,
"doc":""
},
{
"ref":"textual.css.model.RuleSet.selectors",
"url":13,
"doc":""
},
{
"ref":"textual.css.model.RuleSet.css",
"url":13,
"doc":"Generate the CSS this RuleSet Returns: str: A string containing CSS code."
},
{
"ref":"textual.css.transition",
"url":14,
"doc":""
},
{
"ref":"textual.css.transition.Transition",
"url":14,
"doc":"Transition(duration, easing, delay)"
},
{
"ref":"textual.css.transition.Transition.duration",
"url":14,
"doc":"Alias for field number 0"
},
{
"ref":"textual.css.transition.Transition.easing",
"url":14,
"doc":"Alias for field number 1"
},
{
"ref":"textual.css.transition.Transition.delay",
"url":14,
"doc":"Alias for field number 2"
},
{
"ref":"textual.css.match",
"url":15,
"doc":""
},
{
"ref":"textual.css.match.match",
"url":15,
"doc":"Check if a given selector matches any of the given selector sets. Args: selector_sets (Iterable[SelectorSet]): Iterable of selector sets. node (DOMNode): DOM node. Returns: bool: True if the node matches the selector, otherwise False.",
"func":1
},
{
"ref":"textual.css.styles",
"url":16,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap",
"url":16,
"doc":"A typed dict for CSS rules. Any key may be absent, indicating that rule has not been set. Does not define composite rules, that is a rule that is made of a combination of other rules."
},
{
"ref":"textual.css.styles.RulesMap.display",
"url":16,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.visibility",
"url":16,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.layout",
"url":16,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.color",
"url":16,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.background",
"url":16,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.text_style",
"url":16,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.opacity",
"url":16,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.padding",
"url":16,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.margin",
"url":16,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.offset",
"url":16,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.border_top",
"url":16,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.border_right",
"url":16,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.border_bottom",
"url":16,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.border_left",
"url":16,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.outline_top",
"url":16,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.outline_right",
"url":16,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.outline_bottom",
"url":16,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.outline_left",
"url":16,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.box_sizing",
"url":16,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.width",
"url":16,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.height",
"url":16,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.min_width",
"url":16,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.min_height",
"url":16,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.max_width",
"url":16,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.max_height",
"url":16,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.dock",
"url":16,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.docks",
"url":16,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.overflow_x",
"url":16,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.overflow_y",
"url":16,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.layers",
"url":16,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.layer",
"url":16,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.transitions",
"url":16,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.tint",
"url":16,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.scrollbar_color",
"url":16,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.scrollbar_color_hover",
"url":16,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.scrollbar_color_active",
"url":16,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.scrollbar_background",
"url":16,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.scrollbar_background_hover",
"url":16,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.scrollbar_background_active",
"url":16,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.scrollbar_gutter",
"url":16,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.scrollbar_size_vertical",
"url":16,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.scrollbar_size_horizontal",
"url":16,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.align_horizontal",
"url":16,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.align_vertical",
"url":16,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.content_align_horizontal",
"url":16,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.content_align_vertical",
"url":16,
"doc":""
},
{
"ref":"textual.css.styles.DockGroup",
"url":16,
"doc":"DockGroup(name, edge, z)"
},
{
"ref":"textual.css.styles.DockGroup.name",
"url":16,
"doc":"Alias for field number 0"
},
{
"ref":"textual.css.styles.DockGroup.edge",
"url":16,
"doc":"Alias for field number 1"
},
{
"ref":"textual.css.styles.DockGroup.z",
"url":16,
"doc":"Alias for field number 2"
},
{
"ref":"textual.css.styles.StylesBase",
"url":16,
"doc":"A common base class for Styles and RenderStyles"
},
{
"ref":"textual.css.styles.StylesBase.ANIMATABLE",
"url":16,
"doc":""
},
{
"ref":"textual.css.styles.StylesBase.node",
"url":16,
"doc":""
},
{
"ref":"textual.css.styles.StylesBase.display",
"url":16,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.StylesBase.visibility",
"url":16,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.StylesBase.layout",
"url":16,
"doc":"Descriptor for getting and setting layout."
},
{
"ref":"textual.css.styles.StylesBase.color",
"url":16,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.StylesBase.background",
"url":16,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.StylesBase.text_style",
"url":16,
"doc":"Descriptor for getting and set style flag properties (e.g.  bold italic underline )."
},
{
"ref":"textual.css.styles.StylesBase.opacity",
"url":16,
"doc":"Property that can be set either as a float (e.g. 0.1) or a string percentage (e.g. '10%'). Values will be clamped to the range (0, 1)."
},
{
"ref":"textual.css.styles.StylesBase.padding",
"url":16,
"doc":"Descriptor for getting and setting spacing properties (e.g. padding and margin)."
},
{
"ref":"textual.css.styles.StylesBase.margin",
"url":16,
"doc":"Descriptor for getting and setting spacing properties (e.g. padding and margin)."
},
{
"ref":"textual.css.styles.StylesBase.offset",
"url":16,
"doc":"Descriptor for getting and setting the offset property. Offset consists of two values, x and y, that a widget's position will be adjusted by before it is rendered."
},
{
"ref":"textual.css.styles.StylesBase.border",
"url":16,
"doc":"Descriptor for getting and setting full borders and outlines. Args: layout (bool): True if the layout should be refreshed after setting, False otherwise."
},
{
"ref":"textual.css.styles.StylesBase.border_top",
"url":16,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.StylesBase.border_right",
"url":16,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.StylesBase.border_bottom",
"url":16,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.StylesBase.border_left",
"url":16,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.StylesBase.outline",
"url":16,
"doc":"Descriptor for getting and setting full borders and outlines. Args: layout (bool): True if the layout should be refreshed after setting, False otherwise."
},
{
"ref":"textual.css.styles.StylesBase.outline_top",
"url":16,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.StylesBase.outline_right",
"url":16,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.StylesBase.outline_bottom",
"url":16,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.StylesBase.outline_left",
"url":16,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.StylesBase.box_sizing",
"url":16,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.StylesBase.width",
"url":16,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.StylesBase.height",
"url":16,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.StylesBase.min_width",
"url":16,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.StylesBase.min_height",
"url":16,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.StylesBase.max_width",
"url":16,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.StylesBase.max_height",
"url":16,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.StylesBase.dock",
"url":16,
"doc":"Descriptor for getting and setting the dock property. The dock property allows you to specify which dock you wish a Widget to be attached to. This should be used in conjunction with the \"docks\" property which lets you define the docks themselves, and where they are located on screen."
},
{
"ref":"textual.css.styles.StylesBase.docks",
"url":16,
"doc":"Descriptor for getting and setting the docks property. This property is used to define docks and their location on screen."
},
{
"ref":"textual.css.styles.StylesBase.overflow_x",
"url":16,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.StylesBase.overflow_y",
"url":16,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.StylesBase.layer",
"url":16,
"doc":"Descriptor for getting and setting name properties."
},
{
"ref":"textual.css.styles.StylesBase.layers",
"url":16,
"doc":""
},
{
"ref":"textual.css.styles.StylesBase.transitions",
"url":16,
"doc":"Descriptor for getting transitions properties"
},
{
"ref":"textual.css.styles.StylesBase.rich_style",
"url":16,
"doc":"Descriptor for getting the Rich style."
},
{
"ref":"textual.css.styles.StylesBase.tint",
"url":16,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.StylesBase.scrollbar_color",
"url":16,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.StylesBase.scrollbar_color_hover",
"url":16,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.StylesBase.scrollbar_color_active",
"url":16,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.StylesBase.scrollbar_background",
"url":16,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.StylesBase.scrollbar_background_hover",
"url":16,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.StylesBase.scrollbar_background_active",
"url":16,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.StylesBase.scrollbar_gutter",
"url":16,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.StylesBase.scrollbar_size_vertical",
"url":16,
"doc":""
},
{
"ref":"textual.css.styles.StylesBase.scrollbar_size_horizontal",
"url":16,
"doc":""
},
{
"ref":"textual.css.styles.StylesBase.align_horizontal",
"url":16,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.StylesBase.align_vertical",
"url":16,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.StylesBase.align",
"url":16,
"doc":"Combines the horizontal and vertical alignment properties in to a single property."
},
{
"ref":"textual.css.styles.StylesBase.content_align_horizontal",
"url":16,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.StylesBase.content_align_vertical",
"url":16,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.StylesBase.content_align",
"url":16,
"doc":"Combines the horizontal and vertical alignment properties in to a single property."
},
{
"ref":"textual.css.styles.StylesBase.gutter",
"url":16,
"doc":"Get space around widget. Returns: Spacing: Space around widget content."
},
{
"ref":"textual.css.styles.StylesBase.auto_dimensions",
"url":16,
"doc":"Check if width or height are set to 'auto'."
},
{
"ref":"textual.css.styles.StylesBase.has_rule",
"url":16,
"doc":"Check if a rule is set on this Styles object. Args: rule (str): Rule name. Returns: bool:  True if the rules is present, otherwise  False .",
"func":1
},
{
"ref":"textual.css.styles.StylesBase.clear_rule",
"url":16,
"doc":"Removes the rule from the Styles object, as if it had never been set. Args: rule (str): Rule name. Returns: bool:  True if a rule was cleared, or  False if the rule is already not set.",
"func":1
},
{
"ref":"textual.css.styles.StylesBase.get_rules",
"url":16,
"doc":"Get the rules in a mapping. Returns: RulesMap: A TypedDict of the rules.",
"func":1
},
{
"ref":"textual.css.styles.StylesBase.set_rule",
"url":16,
"doc":"Set a rule. Args: rule (str): Rule name. value (object | None): New rule value. Returns: bool:  True if the rule changed, otherwise  False .",
"func":1
},
{
"ref":"textual.css.styles.StylesBase.get_rule",
"url":16,
"doc":"Get an individual rule. Args: rule (str): Name of rule. default (object, optional): Default if rule does not exists. Defaults to None. Returns: object: Rule value or default.",
"func":1
},
{
"ref":"textual.css.styles.StylesBase.refresh",
"url":16,
"doc":"Mark the styles as requiring a refresh. Args: layout (bool, optional): Also require a layout. Defaults to False. children (bool, opional): Also refresh children. Defaults to False.",
"func":1
},
{
"ref":"textual.css.styles.StylesBase.reset",
"url":16,
"doc":"Reset the rules to initial state.",
"func":1
},
{
"ref":"textual.css.styles.StylesBase.merge",
"url":16,
"doc":"Merge values from another Styles. Args: other (Styles): A Styles object.",
"func":1
},
{
"ref":"textual.css.styles.StylesBase.merge_rules",
"url":16,
"doc":"Merge rules in to Styles. Args: rules (RulesMap): A mapping of rules.",
"func":1
},
{
"ref":"textual.css.styles.StylesBase.get_render_rules",
"url":16,
"doc":"Get rules map with defaults.",
"func":1
},
{
"ref":"textual.css.styles.StylesBase.is_animatable",
"url":16,
"doc":"Check if a given rule may be animated. Args: rule (str): Name of the rule. Returns: bool:  True if the rule may be animated, otherwise  False .",
"func":1
},
{
"ref":"textual.css.styles.StylesBase.parse",
"url":16,
"doc":"Parse CSS and return a Styles object. Args: css (str): Textual CSS. path (str): Path or string indicating source of CSS. node (DOMNode, optional): Node to associate with the Styles. Defaults to None. Returns: Styles: A Styles instance containing result of parsing CSS.",
"func":1
},
{
"ref":"textual.css.styles.StylesBase.get_transition",
"url":16,
"doc":"",
"func":1
},
{
"ref":"textual.css.styles.StylesBase.align_width",
"url":16,
"doc":"Align the width dimension. Args: width (int): Width of the content. parent_width (int): Width of the parent container. Returns: int: An offset to add to the X coordinate.",
"func":1
},
{
"ref":"textual.css.styles.StylesBase.align_height",
"url":16,
"doc":"Align the height dimensions Args: height (int): Height of the content. parent_height (int): Height of the parent container. Returns: int: An offset to add to the Y coordinate.",
"func":1
},
{
"ref":"textual.css.styles.StylesBase.align_size",
"url":16,
"doc":"Align a size according to alignment rules. Args: child (tuple[int, int]): The size of the child (width, height) parent (tuple[int, int]): The size of the parent (width, height) Returns: Offset: Offset required to align the child.",
"func":1
},
{
"ref":"textual.css.styles.Styles",
"url":16,
"doc":"Styles(node: 'DOMNode | None' = None, _rules: 'RulesMap' =  , important: 'set[str]' =  )"
},
{
"ref":"textual.css.styles.Styles.important",
"url":16,
"doc":""
},
{
"ref":"textual.css.styles.Styles.node",
"url":16,
"doc":""
},
{
"ref":"textual.css.styles.Styles.copy",
"url":16,
"doc":"Get a copy of this Styles object.",
"func":1
},
{
"ref":"textual.css.styles.Styles.has_rule",
"url":16,
"doc":"Check if a rule is set on this Styles object. Args: rule (str): Rule name. Returns: bool:  True if the rules is present, otherwise  False .",
"func":1
},
{
"ref":"textual.css.styles.Styles.clear_rule",
"url":16,
"doc":"Removes the rule from the Styles object, as if it had never been set. Args: rule (str): Rule name. Returns: bool:  True if a rule was cleared, or  False if it was already not set.",
"func":1
},
{
"ref":"textual.css.styles.Styles.get_rules",
"url":16,
"doc":"Get the rules in a mapping. Returns: RulesMap: A TypedDict of the rules.",
"func":1
},
{
"ref":"textual.css.styles.Styles.set_rule",
"url":16,
"doc":"Set a rule. Args: rule (str): Rule name. value (object | None): New rule value. Returns: bool:  True if the rule changed, otherwise  False .",
"func":1
},
{
"ref":"textual.css.styles.Styles.get_rule",
"url":16,
"doc":"Get an individual rule. Args: rule (str): Name of rule. default (object, optional): Default if rule does not exists. Defaults to None. Returns: object: Rule value or default.",
"func":1
},
{
"ref":"textual.css.styles.Styles.refresh",
"url":16,
"doc":"Mark the styles as requiring a refresh. Args: layout (bool, optional): Also require a layout. Defaults to False. children (bool, opional): Also refresh children. Defaults to False.",
"func":1
},
{
"ref":"textual.css.styles.Styles.reset",
"url":16,
"doc":"Reset the rules to initial state.",
"func":1
},
{
"ref":"textual.css.styles.Styles.merge",
"url":16,
"doc":"Merge values from another Styles. Args: other (Styles): A Styles object.",
"func":1
},
{
"ref":"textual.css.styles.Styles.merge_rules",
"url":16,
"doc":"Merge rules in to Styles. Args: rules (RulesMap): A mapping of rules.",
"func":1
},
{
"ref":"textual.css.styles.Styles.extract_rules",
"url":16,
"doc":"Extract rules from Styles object, and apply !important css specificity as well as higher specificity of user CSS vs widget CSS. Args: specificity (Specificity3): A node specificity. is_default_rules (bool): True if the rules we're extracting are default (i.e. in Widget.CSS) rules. False if they're from user defined CSS. Returns: list[tuple[str, Specificity5, Any ]: A list containing a tuple of  ,   .",
"func":1
},
{
"ref":"textual.css.styles.Styles.css_lines",
"url":16,
"doc":""
},
{
"ref":"textual.css.styles.Styles.css",
"url":16,
"doc":""
},
{
"ref":"textual.css.styles.Styles.display",
"url":16,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.Styles.visibility",
"url":16,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.Styles.layout",
"url":16,
"doc":"Descriptor for getting and setting layout."
},
{
"ref":"textual.css.styles.Styles.color",
"url":16,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.Styles.background",
"url":16,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.Styles.text_style",
"url":16,
"doc":"Descriptor for getting and set style flag properties (e.g.  bold italic underline )."
},
{
"ref":"textual.css.styles.Styles.opacity",
"url":16,
"doc":"Property that can be set either as a float (e.g. 0.1) or a string percentage (e.g. '10%'). Values will be clamped to the range (0, 1)."
},
{
"ref":"textual.css.styles.Styles.padding",
"url":16,
"doc":"Descriptor for getting and setting spacing properties (e.g. padding and margin)."
},
{
"ref":"textual.css.styles.Styles.margin",
"url":16,
"doc":"Descriptor for getting and setting spacing properties (e.g. padding and margin)."
},
{
"ref":"textual.css.styles.Styles.offset",
"url":16,
"doc":"Descriptor for getting and setting the offset property. Offset consists of two values, x and y, that a widget's position will be adjusted by before it is rendered."
},
{
"ref":"textual.css.styles.Styles.border",
"url":16,
"doc":"Descriptor for getting and setting full borders and outlines. Args: layout (bool): True if the layout should be refreshed after setting, False otherwise."
},
{
"ref":"textual.css.styles.Styles.border_top",
"url":16,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.Styles.border_right",
"url":16,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.Styles.border_bottom",
"url":16,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.Styles.border_left",
"url":16,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.Styles.outline",
"url":16,
"doc":"Descriptor for getting and setting full borders and outlines. Args: layout (bool): True if the layout should be refreshed after setting, False otherwise."
},
{
"ref":"textual.css.styles.Styles.outline_top",
"url":16,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.Styles.outline_right",
"url":16,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.Styles.outline_bottom",
"url":16,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.Styles.outline_left",
"url":16,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.Styles.box_sizing",
"url":16,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.Styles.width",
"url":16,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.Styles.height",
"url":16,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.Styles.min_width",
"url":16,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.Styles.min_height",
"url":16,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.Styles.max_width",
"url":16,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.Styles.max_height",
"url":16,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.Styles.dock",
"url":16,
"doc":"Descriptor for getting and setting the dock property. The dock property allows you to specify which dock you wish a Widget to be attached to. This should be used in conjunction with the \"docks\" property which lets you define the docks themselves, and where they are located on screen."
},
{
"ref":"textual.css.styles.Styles.docks",
"url":16,
"doc":"Descriptor for getting and setting the docks property. This property is used to define docks and their location on screen."
},
{
"ref":"textual.css.styles.Styles.overflow_x",
"url":16,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.Styles.overflow_y",
"url":16,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.Styles.layer",
"url":16,
"doc":"Descriptor for getting and setting name properties."
},
{
"ref":"textual.css.styles.Styles.transitions",
"url":16,
"doc":"Descriptor for getting transitions properties"
},
{
"ref":"textual.css.styles.Styles.rich_style",
"url":16,
"doc":"Descriptor for getting the Rich style."
},
{
"ref":"textual.css.styles.Styles.tint",
"url":16,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.Styles.scrollbar_color",
"url":16,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.Styles.scrollbar_color_hover",
"url":16,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.Styles.scrollbar_color_active",
"url":16,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.Styles.scrollbar_background",
"url":16,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.Styles.scrollbar_background_hover",
"url":16,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.Styles.scrollbar_background_active",
"url":16,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.Styles.scrollbar_gutter",
"url":16,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.Styles.align_horizontal",
"url":16,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.Styles.align_vertical",
"url":16,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.Styles.align",
"url":16,
"doc":"Combines the horizontal and vertical alignment properties in to a single property."
},
{
"ref":"textual.css.styles.Styles.content_align_horizontal",
"url":16,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.Styles.content_align_vertical",
"url":16,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.Styles.content_align",
"url":16,
"doc":"Combines the horizontal and vertical alignment properties in to a single property."
},
{
"ref":"textual.css.styles.Styles.gutter",
"url":16,
"doc":"Get space around widget. Returns: Spacing: Space around widget content."
},
{
"ref":"textual.css.styles.Styles.auto_dimensions",
"url":16,
"doc":"Check if width or height are set to 'auto'."
},
{
"ref":"textual.css.styles.Styles.get_render_rules",
"url":16,
"doc":"Get rules map with defaults.",
"func":1
},
{
"ref":"textual.css.styles.Styles.is_animatable",
"url":16,
"doc":"Check if a given rule may be animated. Args: rule (str): Name of the rule. Returns: bool:  True if the rule may be animated, otherwise  False .",
"func":1
},
{
"ref":"textual.css.styles.Styles.parse",
"url":16,
"doc":"Parse CSS and return a Styles object. Args: css (str): Textual CSS. path (str): Path or string indicating source of CSS. node (DOMNode, optional): Node to associate with the Styles. Defaults to None. Returns: Styles: A Styles instance containing result of parsing CSS.",
"func":1
},
{
"ref":"textual.css.styles.Styles.align_width",
"url":16,
"doc":"Align the width dimension. Args: width (int): Width of the content. parent_width (int): Width of the parent container. Returns: int: An offset to add to the X coordinate.",
"func":1
},
{
"ref":"textual.css.styles.Styles.align_height",
"url":16,
"doc":"Align the height dimensions Args: height (int): Height of the content. parent_height (int): Height of the parent container. Returns: int: An offset to add to the Y coordinate.",
"func":1
},
{
"ref":"textual.css.styles.Styles.align_size",
"url":16,
"doc":"Align a size according to alignment rules. Args: child (tuple[int, int]): The size of the child (width, height) parent (tuple[int, int]): The size of the parent (width, height) Returns: Offset: Offset required to align the child.",
"func":1
},
{
"ref":"textual.css.styles.RenderStyles",
"url":16,
"doc":"Presents a combined view of two Styles object: a base Styles and inline Styles."
},
{
"ref":"textual.css.styles.RenderStyles.node",
"url":16,
"doc":""
},
{
"ref":"textual.css.styles.RenderStyles.base",
"url":16,
"doc":"Quick access to base (css) style."
},
{
"ref":"textual.css.styles.RenderStyles.inline",
"url":16,
"doc":"Quick access to the inline styles."
},
{
"ref":"textual.css.styles.RenderStyles.refresh",
"url":16,
"doc":"Mark the styles as requiring a refresh. Args: layout (bool, optional): Also require a layout. Defaults to False. children (bool, opional): Also refresh children. Defaults to False.",
"func":1
},
{
"ref":"textual.css.styles.RenderStyles.merge",
"url":16,
"doc":"Merge values from another Styles. Args: other (Styles): A Styles object.",
"func":1
},
{
"ref":"textual.css.styles.RenderStyles.merge_rules",
"url":16,
"doc":"Merge rules in to Styles. Args: rules (RulesMap): A mapping of rules.",
"func":1
},
{
"ref":"textual.css.styles.RenderStyles.reset",
"url":16,
"doc":"Reset the rules to initial state.",
"func":1
},
{
"ref":"textual.css.styles.RenderStyles.has_rule",
"url":16,
"doc":"Check if a rule has been set.",
"func":1
},
{
"ref":"textual.css.styles.RenderStyles.set_rule",
"url":16,
"doc":"Set a rule. Args: rule (str): Rule name. value (object | None): New rule value. Returns: bool:  True if the rule changed, otherwise  False .",
"func":1
},
{
"ref":"textual.css.styles.RenderStyles.get_rule",
"url":16,
"doc":"Get an individual rule. Args: rule (str): Name of rule. default (object, optional): Default if rule does not exists. Defaults to None. Returns: object: Rule value or default.",
"func":1
},
{
"ref":"textual.css.styles.RenderStyles.clear_rule",
"url":16,
"doc":"Clear a rule (from inline).",
"func":1
},
{
"ref":"textual.css.styles.RenderStyles.get_rules",
"url":16,
"doc":"Get rules as a dictionary",
"func":1
},
{
"ref":"textual.css.styles.RenderStyles.css",
"url":16,
"doc":"Get the CSS for the combined styles."
},
{
"ref":"textual.css.styles.RenderStyles.display",
"url":16,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.RenderStyles.visibility",
"url":16,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.RenderStyles.layout",
"url":16,
"doc":"Descriptor for getting and setting layout."
},
{
"ref":"textual.css.styles.RenderStyles.color",
"url":16,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.RenderStyles.background",
"url":16,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.RenderStyles.text_style",
"url":16,
"doc":"Descriptor for getting and set style flag properties (e.g.  bold italic underline )."
},
{
"ref":"textual.css.styles.RenderStyles.opacity",
"url":16,
"doc":"Property that can be set either as a float (e.g. 0.1) or a string percentage (e.g. '10%'). Values will be clamped to the range (0, 1)."
},
{
"ref":"textual.css.styles.RenderStyles.padding",
"url":16,
"doc":"Descriptor for getting and setting spacing properties (e.g. padding and margin)."
},
{
"ref":"textual.css.styles.RenderStyles.margin",
"url":16,
"doc":"Descriptor for getting and setting spacing properties (e.g. padding and margin)."
},
{
"ref":"textual.css.styles.RenderStyles.offset",
"url":16,
"doc":"Descriptor for getting and setting the offset property. Offset consists of two values, x and y, that a widget's position will be adjusted by before it is rendered."
},
{
"ref":"textual.css.styles.RenderStyles.border",
"url":16,
"doc":"Descriptor for getting and setting full borders and outlines. Args: layout (bool): True if the layout should be refreshed after setting, False otherwise."
},
{
"ref":"textual.css.styles.RenderStyles.border_top",
"url":16,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.RenderStyles.border_right",
"url":16,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.RenderStyles.border_bottom",
"url":16,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.RenderStyles.border_left",
"url":16,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.RenderStyles.outline",
"url":16,
"doc":"Descriptor for getting and setting full borders and outlines. Args: layout (bool): True if the layout should be refreshed after setting, False otherwise."
},
{
"ref":"textual.css.styles.RenderStyles.outline_top",
"url":16,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.RenderStyles.outline_right",
"url":16,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.RenderStyles.outline_bottom",
"url":16,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.RenderStyles.outline_left",
"url":16,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.RenderStyles.box_sizing",
"url":16,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.RenderStyles.width",
"url":16,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.RenderStyles.height",
"url":16,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.RenderStyles.min_width",
"url":16,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.RenderStyles.min_height",
"url":16,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.RenderStyles.max_width",
"url":16,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.RenderStyles.max_height",
"url":16,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.RenderStyles.dock",
"url":16,
"doc":"Descriptor for getting and setting the dock property. The dock property allows you to specify which dock you wish a Widget to be attached to. This should be used in conjunction with the \"docks\" property which lets you define the docks themselves, and where they are located on screen."
},
{
"ref":"textual.css.styles.RenderStyles.docks",
"url":16,
"doc":"Descriptor for getting and setting the docks property. This property is used to define docks and their location on screen."
},
{
"ref":"textual.css.styles.RenderStyles.overflow_x",
"url":16,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.RenderStyles.overflow_y",
"url":16,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.RenderStyles.layer",
"url":16,
"doc":"Descriptor for getting and setting name properties."
},
{
"ref":"textual.css.styles.RenderStyles.transitions",
"url":16,
"doc":"Descriptor for getting transitions properties"
},
{
"ref":"textual.css.styles.RenderStyles.rich_style",
"url":16,
"doc":"Descriptor for getting the Rich style."
},
{
"ref":"textual.css.styles.RenderStyles.tint",
"url":16,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.RenderStyles.scrollbar_color",
"url":16,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.RenderStyles.scrollbar_color_hover",
"url":16,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.RenderStyles.scrollbar_color_active",
"url":16,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.RenderStyles.scrollbar_background",
"url":16,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.RenderStyles.scrollbar_background_hover",
"url":16,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.RenderStyles.scrollbar_background_active",
"url":16,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.RenderStyles.scrollbar_gutter",
"url":16,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.RenderStyles.align_horizontal",
"url":16,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.RenderStyles.align_vertical",
"url":16,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.RenderStyles.align",
"url":16,
"doc":"Combines the horizontal and vertical alignment properties in to a single property."
},
{
"ref":"textual.css.styles.RenderStyles.content_align_horizontal",
"url":16,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.RenderStyles.content_align_vertical",
"url":16,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.RenderStyles.content_align",
"url":16,
"doc":"Combines the horizontal and vertical alignment properties in to a single property."
},
{
"ref":"textual.css.styles.RenderStyles.gutter",
"url":16,
"doc":"Get space around widget. Returns: Spacing: Space around widget content."
},
{
"ref":"textual.css.styles.RenderStyles.auto_dimensions",
"url":16,
"doc":"Check if width or height are set to 'auto'."
},
{
"ref":"textual.css.styles.RenderStyles.get_render_rules",
"url":16,
"doc":"Get rules map with defaults.",
"func":1
},
{
"ref":"textual.css.styles.RenderStyles.is_animatable",
"url":16,
"doc":"Check if a given rule may be animated. Args: rule (str): Name of the rule. Returns: bool:  True if the rule may be animated, otherwise  False .",
"func":1
},
{
"ref":"textual.css.styles.RenderStyles.parse",
"url":16,
"doc":"Parse CSS and return a Styles object. Args: css (str): Textual CSS. path (str): Path or string indicating source of CSS. node (DOMNode, optional): Node to associate with the Styles. Defaults to None. Returns: Styles: A Styles instance containing result of parsing CSS.",
"func":1
},
{
"ref":"textual.css.styles.RenderStyles.align_width",
"url":16,
"doc":"Align the width dimension. Args: width (int): Width of the content. parent_width (int): Width of the parent container. Returns: int: An offset to add to the X coordinate.",
"func":1
},
{
"ref":"textual.css.styles.RenderStyles.align_height",
"url":16,
"doc":"Align the height dimensions Args: height (int): Height of the content. parent_height (int): Height of the parent container. Returns: int: An offset to add to the Y coordinate.",
"func":1
},
{
"ref":"textual.css.styles.RenderStyles.align_size",
"url":16,
"doc":"Align a size according to alignment rules. Args: child (tuple[int, int]): The size of the child (width, height) parent (tuple[int, int]): The size of the parent (width, height) Returns: Offset: Offset required to align the child.",
"func":1
},
{
"ref":"textual.css.errors",
"url":17,
"doc":""
},
{
"ref":"textual.css.errors.DeclarationError",
"url":17,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"textual.css.errors.StyleTypeError",
"url":17,
"doc":"Inappropriate argument type."
},
{
"ref":"textual.css.errors.UnresolvedVariableError",
"url":17,
"doc":"Error raised when the CSS cannot be tokenized (syntax error). Args: path (str): Path to source or \" \" if source is parsed from a literal. code (str): The code being parsed. start (tuple[int, int]): Line number of the error. message (str): A message associated with the error. end (tuple[int, int] | None): End location of token, or None if not known. Defaults to None."
},
{
"ref":"textual.css.errors.StyleValueError",
"url":17,
"doc":"Raised when the value of a style property is not valid Attributes: help_text (HelpText | None): Optional HelpText to be rendered when this error is raised."
},
{
"ref":"textual.css.errors.StylesheetError",
"url":17,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"textual.css.constants",
"url":18,
"doc":""
},
{
"ref":"textual.css.types",
"url":19,
"doc":""
},
{
"ref":"textual.message_pump",
"url":20,
"doc":""
},
{
"ref":"textual.message_pump.NoParent",
"url":20,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"textual.message_pump.CallbackError",
"url":20,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"textual.message_pump.MessagePumpClosed",
"url":20,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"textual.message_pump.MessagePriority",
"url":20,
"doc":"Wraps a messages with a priority, and provides equality."
},
{
"ref":"textual.message_pump.MessagePriority.message",
"url":20,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.message_pump.MessagePriority.priority",
"url":20,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.message_pump.MessagePump",
"url":20,
"doc":""
},
{
"ref":"textual.message_pump.MessagePump.task",
"url":20,
"doc":""
},
{
"ref":"textual.message_pump.MessagePump.has_parent",
"url":20,
"doc":""
},
{
"ref":"textual.message_pump.MessagePump.app",
"url":20,
"doc":"Get the current app. Raises: NoActiveAppError: if no active app could be found for the current asyncio context"
},
{
"ref":"textual.message_pump.MessagePump.is_parent_active",
"url":20,
"doc":""
},
{
"ref":"textual.message_pump.MessagePump.is_running",
"url":20,
"doc":""
},
{
"ref":"textual.message_pump.MessagePump.log",
"url":20,
"doc":"",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.set_parent",
"url":20,
"doc":"",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.check_message_enabled",
"url":20,
"doc":"",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.disable_messages",
"url":20,
"doc":"Disable message types from being processed.",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.enable_messages",
"url":20,
"doc":"Enable processing of messages types.",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.get_message",
"url":20,
"doc":"Get the next event on the queue, or None if queue is closed. Returns: Optional[Event]: Event object or None.",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.peek_message",
"url":20,
"doc":"Peek the message at the head of the queue (does not remove it from the queue), or return None if the queue is empty. Returns: Optional[Message]: The message or None.",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.set_timer",
"url":20,
"doc":"",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.set_interval",
"url":20,
"doc":"",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.call_later",
"url":20,
"doc":"Schedule a callback to run after all messages are processed and the screen has been refreshed. Args: callback (Callable): A callable.",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.handle_invoke_later",
"url":20,
"doc":"",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.close_messages_no_wait",
"url":20,
"doc":"Request the message queue to exit.",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.close_messages",
"url":20,
"doc":"Close message queue, and optionally wait for queue to finish processing.",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.start_messages",
"url":20,
"doc":"",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.process_messages",
"url":20,
"doc":"",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.dispatch_message",
"url":20,
"doc":"",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.on_event",
"url":20,
"doc":"",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.on_message",
"url":20,
"doc":"",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.check_idle",
"url":20,
"doc":"Prompt the message pump to call idle if the queue is empty.",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.post_message",
"url":20,
"doc":"",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.post_priority_message",
"url":20,
"doc":"Post a \"priority\" messages which will be processes prior to regular messages. Note that you should rarely need this in a regular app. It exists primarily to allow timer messages to skip the queue, so that they can be more regular. Args: message (Message): A message. Returns: bool: True if the messages was processed.",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.post_message_no_wait",
"url":20,
"doc":"",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.post_message_from_child",
"url":20,
"doc":"",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.post_message_from_child_no_wait",
"url":20,
"doc":"",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.emit_no_wait",
"url":20,
"doc":"",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.emit",
"url":20,
"doc":"",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.dispatch_key",
"url":20,
"doc":"Dispatch a key event to method. This method will call the method named 'key_ ' if it exists. Args: event (events.Key): A key event.",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.on_timer",
"url":20,
"doc":"",
"func":1
},
{
"ref":"textual.case",
"url":21,
"doc":""
},
{
"ref":"textual.case.camel_to_snake",
"url":21,
"doc":"Convert name from CamelCase to snake_case. Args: name (str): A symbol name, such as a class name. Returns: str: Name in camel case.",
"func":1
},
{
"ref":"textual.devtools",
"url":22,
"doc":""
},
{
"ref":"textual.devtools.renderables",
"url":23,
"doc":""
},
{
"ref":"textual.devtools.renderables.DevConsoleHeader",
"url":23,
"doc":""
},
{
"ref":"textual.devtools.renderables.DevConsoleLog",
"url":23,
"doc":"Renderable representing a single log message Args: segments (Iterable[Segment]): The segments to display path (str): The path of the file on the client that the log call was made from line_number (int): The line number of the file on the client the log call was made from unix_timestamp (int): Seconds since January 1st 1970"
},
{
"ref":"textual.devtools.renderables.DevConsoleNotice",
"url":23,
"doc":"Renderable for messages written by the devtools console itself Args: message (str): The message to display level (DevtoolsMessageLevel): The message level (\"info\", \"warning\", or \"error\"). Determines colors used to render the message and the perceived importance."
},
{
"ref":"textual.driver",
"url":3,
"doc":""
},
{
"ref":"textual.driver.Driver",
"url":3,
"doc":"Helper class that provides a standard way to create an ABC using inheritance."
},
{
"ref":"textual.driver.Driver.send_event",
"url":3,
"doc":"",
"func":1
},
{
"ref":"textual.driver.Driver.process_event",
"url":3,
"doc":"Performs some additional processing of events.",
"func":1
},
{
"ref":"textual.driver.Driver.enable_bracketed_paste",
"url":3,
"doc":"Write the ANSI escape code  ESC[?2004h , which enables bracketed paste mode.",
"func":1
},
{
"ref":"textual.driver.Driver.disable_bracketed_paste",
"url":3,
"doc":"Write the ANSI escape code  ESC[?2004l , which disables bracketed paste mode.",
"func":1
},
{
"ref":"textual.driver.Driver.start_application_mode",
"url":3,
"doc":"",
"func":1
},
{
"ref":"textual.driver.Driver.disable_input",
"url":3,
"doc":"",
"func":1
},
{
"ref":"textual.driver.Driver.stop_application_mode",
"url":3,
"doc":"",
"func":1
},
{
"ref":"textual.reactive",
"url":24,
"doc":""
},
{
"ref":"textual.reactive.Reactive",
"url":24,
"doc":"Reactive descriptor."
},
{
"ref":"textual.reactive.Reactive.check_watchers",
"url":24,
"doc":"",
"func":1
},
{
"ref":"textual.reactive.Reactive.compute",
"url":24,
"doc":"",
"func":1
},
{
"ref":"textual.reactive.watch",
"url":24,
"doc":"",
"func":1
},
{
"ref":"textual.box_model",
"url":25,
"doc":""
},
{
"ref":"textual.box_model.BoxModel",
"url":25,
"doc":"The result of  get_box_model ."
},
{
"ref":"textual.box_model.BoxModel.width",
"url":25,
"doc":"Alias for field number 0"
},
{
"ref":"textual.box_model.BoxModel.height",
"url":25,
"doc":"Alias for field number 1"
},
{
"ref":"textual.box_model.BoxModel.margin",
"url":25,
"doc":"Alias for field number 2"
},
{
"ref":"textual.box_model.get_box_model",
"url":25,
"doc":"Resolve the box model for this Styles. Args: styles (StylesBase): Styles object. container (Size): The size of the widget container. viewport (Size): The viewport size. get_auto_width (Callable): A callable which accepts container size and parent size and returns a width. get_auto_height (Callable): A callable which accepts container size and parent size and returns a height. Returns: BoxModel: A tuple with the size of the content area and margin.",
"func":1
},
{
"ref":"textual.renderables",
"url":26,
"doc":""
},
{
"ref":"textual.renderables.blank",
"url":27,
"doc":""
},
{
"ref":"textual.renderables.blank.Blank",
"url":27,
"doc":"Draw solid background color."
},
{
"ref":"textual.renderables.sparkline",
"url":28,
"doc":""
},
{
"ref":"textual.renderables.sparkline.Sparkline",
"url":28,
"doc":"A sparkline representing a series of data. Args: data (Sequence[T]): The sequence of data to render. width (int, optional): The width of the sparkline/the number of buckets to partition the data into. min_color (Color, optional): The color of values equal to the min value in data. max_color (Color, optional): The color of values equal to the max value in data. summary_function (Callable[list[T ): Function that will be applied to each bucket."
},
{
"ref":"textual.renderables.sparkline.Sparkline.BARS",
"url":28,
"doc":""
},
{
"ref":"textual.renderables.underline_bar",
"url":29,
"doc":""
},
{
"ref":"textual.renderables.underline_bar.UnderlineBar",
"url":29,
"doc":"Thin horizontal bar with a portion highlighted. Args: highlight_range (tuple[float, float]): The range to highlight. Defaults to  (0, 0) (no highlight) highlight_style (StyleType): The style of the highlighted range of the bar. background_style (StyleType): The style of the non-highlighted range(s) of the bar. width (int, optional): The width of the bar, or  None to fill available width."
},
{
"ref":"textual.renderables.tint",
"url":30,
"doc":""
},
{
"ref":"textual.renderables.tint.Tint",
"url":30,
"doc":"Applies a color on top of an existing renderable. Wrap a renderable to apply a tint color. Args: renderable (RenderableType): A renderable. color (Color): A color (presumably with alpha)."
},
{
"ref":"textual.renderables.tint.Tint.process_segments",
"url":30,
"doc":"Apply tint to segments. Args: segments (Iterable[Segment]): Incoming segments. color (Color): Color of tint. Returns: Iterable[Segment]: Segments with applied tint.",
"func":1
},
{
"ref":"textual.renderables.gradient",
"url":31,
"doc":""
},
{
"ref":"textual.renderables.gradient.VerticalGradient",
"url":31,
"doc":"Draw a vertical gradient."
},
{
"ref":"textual.renderables.opacity",
"url":32,
"doc":""
},
{
"ref":"textual.renderables.opacity.Opacity",
"url":32,
"doc":"Blend foreground in to background. Wrap a renderable to blend foreground color into the background color. Args: renderable (RenderableType): The RenderableType to manipulate. opacity (float): The opacity as a float. A value of 1.0 means text is fully visible."
},
{
"ref":"textual.renderables.opacity.Opacity.process_segments",
"url":32,
"doc":"Apply opacity to segments. Args: segments (Iterable[Segment]): Incoming segments. opacity (float): Opacity to apply. Returns: Iterable[Segment]: Segments with applied opacity.",
"func":1
},
{
"ref":"textual.message",
"url":33,
"doc":""
},
{
"ref":"textual.message.Message",
"url":33,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.message.Message.bubble",
"url":33,
"doc":""
},
{
"ref":"textual.message.Message.verbosity",
"url":33,
"doc":""
},
{
"ref":"textual.message.Message.system",
"url":33,
"doc":""
},
{
"ref":"textual.message.Message.is_forwarded",
"url":33,
"doc":""
},
{
"ref":"textual.message.Message.set_forwarded",
"url":33,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.message.Message.can_replace",
"url":33,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.message.Message.prevent_default",
"url":33,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.message.Message.stop",
"url":33,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.message.Message.name",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.message.Message.sender",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.message.Message.time",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scroll_view",
"url":34,
"doc":""
},
{
"ref":"textual.scroll_view.ScrollView",
"url":34,
"doc":"A base class for a Widget that handles it's own scrolling (i.e. doesn't rely on the compositor to render children)."
},
{
"ref":"textual.scroll_view.ScrollView.COMPONENT_CLASSES",
"url":34,
"doc":""
},
{
"ref":"textual.scroll_view.ScrollView.CSS",
"url":34,
"doc":""
},
{
"ref":"textual.scroll_view.ScrollView.is_scrollable",
"url":34,
"doc":"Always scrollable."
},
{
"ref":"textual.scroll_view.ScrollView.is_transparent",
"url":34,
"doc":"Not transparent, i.e. renders something."
},
{
"ref":"textual.scroll_view.ScrollView.on_mount",
"url":34,
"doc":"",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.get_content_width",
"url":34,
"doc":"Gets the width of the content area. Args: container (Size): Size of the container (immediate parent) widget. viewport (Size): Size of the viewport. Returns: int: The optimal width of the content.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.get_content_height",
"url":34,
"doc":"Gets the height (number of lines) in the content area. Args: container (Size): Size of the container (immediate parent) widget. viewport (Size): Size of the viewport. width (int): Width of renderable. Returns: int: The height of the content.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.size_updated",
"url":34,
"doc":"Called when size is updated. Args: size (Size): New size. virtual_size (Size): New virtual size. container_size (Size): New container size.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.render",
"url":34,
"doc":"Render the scrollable region (if  render_lines is not implemented). Returns: RenderableType: Renderable object.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.watch_scroll_x",
"url":34,
"doc":"Called when horizontal bar is scrolled.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.watch_scroll_y",
"url":34,
"doc":"Called when vertical bar is scrolled.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.can_focus",
"url":34,
"doc":""
},
{
"ref":"textual.scroll_view.ScrollView.can_focus_children",
"url":34,
"doc":""
},
{
"ref":"textual.scroll_view.ScrollView.virtual_size",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scroll_view.ScrollView.auto_width",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scroll_view.ScrollView.auto_height",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scroll_view.ScrollView.has_focus",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scroll_view.ScrollView.descendant_has_focus",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scroll_view.ScrollView.mouse_over",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scroll_view.ScrollView.scroll_x",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scroll_view.ScrollView.scroll_y",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scroll_view.ScrollView.scroll_target_x",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scroll_view.ScrollView.scroll_target_y",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scroll_view.ScrollView.show_vertical_scrollbar",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scroll_view.ScrollView.show_horizontal_scrollbar",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scroll_view.ScrollView.watch_show_horizontal_scrollbar",
"url":35,
"doc":"Watch function for show_horizontal_scrollbar attribute. Args: value (bool): Show horizontal scrollbar flag.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.watch_show_vertical_scrollbar",
"url":35,
"doc":"Watch function for show_vertical_scrollbar attribute. Args: value (bool): Show vertical scrollbar flag.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.compose",
"url":35,
"doc":"Yield child widgets for a container.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.on_register",
"url":35,
"doc":"Called when the instance is registered. Args: app (App): App instance.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.get_box_model",
"url":35,
"doc":"Process the box model for this widget. Args: container (Size): The size of the container widget (with a layout) viewport (Size): The viewport size. Returns: BoxModel: The size and margin for this widget.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.max_scroll_x",
"url":35,
"doc":"The maximum value of  scroll_x ."
},
{
"ref":"textual.scroll_view.ScrollView.max_scroll_y",
"url":35,
"doc":"The maximum value of  scroll_y ."
},
{
"ref":"textual.scroll_view.ScrollView.vertical_scrollbar",
"url":35,
"doc":"Get a vertical scrollbar (create if necessary) Returns: ScrollBar: ScrollBar Widget."
},
{
"ref":"textual.scroll_view.ScrollView.horizontal_scrollbar",
"url":35,
"doc":"Get a vertical scrollbar (create if necessary) Returns: ScrollBar: ScrollBar Widget."
},
{
"ref":"textual.scroll_view.ScrollView.scrollbars_enabled",
"url":35,
"doc":"A tuple of booleans that indicate if scrollbars are enabled. Returns: tuple[bool, bool]: A tuple of ( ,  )"
},
{
"ref":"textual.scroll_view.ScrollView.scrollbar_size_vertical",
"url":35,
"doc":"Get the width used by the  vertical scrollbar."
},
{
"ref":"textual.scroll_view.ScrollView.scrollbar_size_horizontal",
"url":35,
"doc":"Get the height used by the  horizontal scrollbar."
},
{
"ref":"textual.scroll_view.ScrollView.gutter",
"url":35,
"doc":"Spacing for padding / border / scrollbars."
},
{
"ref":"textual.scroll_view.ScrollView.size",
"url":35,
"doc":"The size of the content area."
},
{
"ref":"textual.scroll_view.ScrollView.outer_size",
"url":35,
"doc":"The size of the widget (including padding and border)."
},
{
"ref":"textual.scroll_view.ScrollView.container_size",
"url":35,
"doc":"The size of the container (parent widget)."
},
{
"ref":"textual.scroll_view.ScrollView.content_region",
"url":35,
"doc":"Gets an absolute region containing the content (minus padding and border)."
},
{
"ref":"textual.scroll_view.ScrollView.content_offset",
"url":35,
"doc":"An offset from the Widget origin where the content begins."
},
{
"ref":"textual.scroll_view.ScrollView.region",
"url":35,
"doc":"The region occupied by this widget, relative to the Screen."
},
{
"ref":"textual.scroll_view.ScrollView.virtual_region",
"url":35,
"doc":"The widget region relative to it's container. Which may not be visible, depending on scroll offset."
},
{
"ref":"textual.scroll_view.ScrollView.window_region",
"url":35,
"doc":"The region within the scrollable area that is currently visible. Returns: Region: New region."
},
{
"ref":"textual.scroll_view.ScrollView.virtual_region_with_margin",
"url":35,
"doc":"The widget region relative to its container ( including margin ), which may not be visible, depending on the scroll offset. Returns: Region: The virtual region of the Widget, inclusive of its margin."
},
{
"ref":"textual.scroll_view.ScrollView.focusable_children",
"url":35,
"doc":"Get the children which may be focused."
},
{
"ref":"textual.scroll_view.ScrollView.console",
"url":35,
"doc":"Get the current console."
},
{
"ref":"textual.scroll_view.ScrollView.layout",
"url":35,
"doc":"Get the layout object if set in styles, or a default layout."
},
{
"ref":"textual.scroll_view.ScrollView.is_container",
"url":35,
"doc":"Check if this widget is a container (contains other widgets). Returns: bool: True if this widget is a container."
},
{
"ref":"textual.scroll_view.ScrollView.layer",
"url":35,
"doc":"Get the name of this widgets layer."
},
{
"ref":"textual.scroll_view.ScrollView.layers",
"url":35,
"doc":"Layers of from parent. Returns: tuple[str,  .]: Tuple of layer names."
},
{
"ref":"textual.scroll_view.ScrollView.scroll_to",
"url":35,
"doc":"Scroll to a given (absolute) coordinate, optionally animating. Args: x (int | None, optional): X coordinate (column) to scroll to, or  None for no change. Defaults to None. y (int | None, optional): Y coordinate (row) to scroll to, or  None for no change. Defaults to None. animate (bool, optional): Animate to new scroll position. Defaults to False. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.scroll_relative",
"url":35,
"doc":"Scroll relative to current position. Args: x (int | None, optional): X distance (columns) to scroll, or  None for no change. Defaults to None. y (int | None, optional): Y distance (rows) to scroll, or  None for no change. Defaults to None. animate (bool, optional): Animate to new scroll position. Defaults to False. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.scroll_to_widget",
"url":35,
"doc":"Scroll scrolling to bring a widget in to view. Args: widget (Widget): A descendant widget. animate (bool, optional): True to animate, or False to jump. Defaults to True. Returns: bool: True if any scrolling has occurred in any descendant, otherwise False.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.scroll_to_region",
"url":35,
"doc":"Scrolls a given region in to view, if required. This method will scroll the least distance required to move  region fully within the scrollable area. Args: region (Region): A region that should be visible. animate (bool, optional): Enable animation. Defaults to True. spacing (Spacing): Space to subtract from the window region. Returns: Offset: The distance that was scrolled.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.get_pseudo_classes",
"url":35,
"doc":"Pseudo classes for a widget",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.watch_mouse_over",
"url":35,
"doc":"Update from CSS if mouse over state changes.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.watch_has_focus",
"url":35,
"doc":"Update from CSS if has focus state changes.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.render_line",
"url":35,
"doc":"Render a line of content. Args: y (int): Y Coordinate of line. Returns: list[Segment]: A rendered line.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.render_lines",
"url":35,
"doc":"Render the widget in to lines. Args: crop (Region): Region within visible area to render. Returns: Lines: A list of list of segments.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.call_later",
"url":35,
"doc":"Schedule a callback to run after all messages are processed and the screen has been refreshed. Args: callback (Callable): A callable.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.refresh",
"url":35,
"doc":"Initiate a refresh of the widget. This method sets an internal flag to perform a refresh, which will be done on the next idle event. Only one refresh will be done even if this method is called multiple times. Args: repaint (bool, optional): Repaint the widget (will call render() again). Defaults to True. layout (bool, optional): Also layout widgets in the view. Defaults to False.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.on_idle",
"url":35,
"doc":"Called when there are no more events on the queue. Args: event (events.Idle): Idle event.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.focus",
"url":35,
"doc":"Give input focus to this widget.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.capture_mouse",
"url":35,
"doc":"Capture (or release) the mouse. When captured, all mouse coordinates will go to this widget even when the pointer is not directly over the widget. Args: capture (bool, optional): True to capture or False to release. Defaults to True.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.release_mouse",
"url":35,
"doc":"Release the mouse. Mouse events will only be sent when the mouse is over the widget.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.css",
"url":36,
"doc":"Gets the CSS for this class and inherited from bases. Returns: list[tuple[str, str : a list of tuples containing (PATH, SOURCE) for this and inherited from base classes."
},
{
"ref":"textual.scroll_view.ScrollView.parent",
"url":36,
"doc":"Get the parent node. Returns: DOMNode | None: The node which is the direct parent of this node."
},
{
"ref":"textual.scroll_view.ScrollView.screen",
"url":36,
"doc":"Get the screen that this node is contained within. Note that this may not be the currently active screen within the app."
},
{
"ref":"textual.scroll_view.ScrollView.id",
"url":36,
"doc":"The ID of this node, or None if the node has no ID. Returns: (str | None): A Node ID or None."
},
{
"ref":"textual.scroll_view.ScrollView.css_identifier",
"url":36,
"doc":"A CSS selector that identifies this DOM node."
},
{
"ref":"textual.scroll_view.ScrollView.css_identifier_styled",
"url":36,
"doc":"A stylized CSS identifier."
},
{
"ref":"textual.scroll_view.ScrollView.pseudo_classes",
"url":36,
"doc":"Get a set of all pseudo classes"
},
{
"ref":"textual.scroll_view.ScrollView.css_path_nodes",
"url":36,
"doc":"A list of nodes from the root to this node, forming a \"path\". Returns: list[DOMNode]: List of Nodes, starting with the root and ending with this node."
},
{
"ref":"textual.scroll_view.ScrollView.display",
"url":36,
"doc":"Returns:  True if this DOMNode is displayed ( display != \"none\" ),  False otherwise."
},
{
"ref":"textual.scroll_view.ScrollView.tree",
"url":36,
"doc":"Get a Rich tree object which will recursively render the structure of the node tree. Returns: Tree: A Rich object which may be printed."
},
{
"ref":"textual.scroll_view.ScrollView.text_style",
"url":36,
"doc":"Get the text style object. A widget's style is influenced by its parent. for instance if a parent is bold, then the child will also be bold. Returns: Style: Rich Style object."
},
{
"ref":"textual.scroll_view.ScrollView.rich_style",
"url":36,
"doc":"Get a Rich Style object for this DOMNode."
},
{
"ref":"textual.scroll_view.ScrollView.background_colors",
"url":36,
"doc":"Get the background color and the color of the parent's background. Returns: tuple[Color, Color]: Tuple of (base background, background)"
},
{
"ref":"textual.scroll_view.ScrollView.colors",
"url":36,
"doc":"Gets the Widgets foreground and background colors, and its parent's (base) colors. Returns: tuple[Color, Color, Color, Color]: Tuple of (base background, base color, background, color)"
},
{
"ref":"textual.scroll_view.ScrollView.ancestors",
"url":36,
"doc":"Get a list of Nodes by tracing ancestors all the way back to App."
},
{
"ref":"textual.scroll_view.ScrollView.displayed_children",
"url":36,
"doc":"The children which don't have display: none set."
},
{
"ref":"textual.scroll_view.ScrollView.reset_styles",
"url":36,
"doc":"Reset styles back to their initial state",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.add_child",
"url":36,
"doc":"Add a new child node. Args: node (DOMNode): A DOM node.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.add_children",
"url":36,
"doc":"Add multiple children to this node. Args:  nodes (DOMNode): Positional args should be new DOM nodes.  named_nodes (DOMNode): Keyword args will be assigned the argument name as an ID.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.walk_children",
"url":36,
"doc":"Generate all descendants of this node. Args: with_self (bool, optional): Also include self in the results. Defaults to True.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.get_child",
"url":36,
"doc":"Return the first child (immediate descendent) of this node with the given ID. Args: id (str): The ID of the child. Returns: DOMNode: The first child of this node with the ID. Raises: NoMatchingNodesError: if no children could be found for this ID",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.query",
"url":36,
"doc":"Get a DOM query. Args: selector (str, optional): A CSS selector or  None for all nodes. Defaults to None. Returns: DOMQuery: A query object.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.set_styles",
"url":36,
"doc":"Set custom styles on this object.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.has_class",
"url":36,
"doc":"Check if the Node has all the given class names. Args:  class_names (str): CSS class names to check. Returns: bool:  True if the node has all the given class names, otherwise  False .",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.add_class",
"url":36,
"doc":"Add class names to this Node. Args:  class_names (str): CSS class names to add.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.remove_class",
"url":36,
"doc":"Remove class names from this Node. Args:  class_names (str): CSS class names to remove.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.toggle_class",
"url":36,
"doc":"Toggle class names on this Node. Args:  class_names (str): CSS class names to toggle.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.has_pseudo_class",
"url":36,
"doc":"Check for pseudo class (such as hover, focus etc)",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.app",
"url":20,
"doc":"Get the current app. Raises: NoActiveAppError: if no active app could be found for the current asyncio context"
},
{
"ref":"textual.scroll_view.ScrollView.disable_messages",
"url":20,
"doc":"Disable message types from being processed.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.enable_messages",
"url":20,
"doc":"Enable processing of messages types.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.get_message",
"url":20,
"doc":"Get the next event on the queue, or None if queue is closed. Returns: Optional[Event]: Event object or None.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.peek_message",
"url":20,
"doc":"Peek the message at the head of the queue (does not remove it from the queue), or return None if the queue is empty. Returns: Optional[Message]: The message or None.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.close_messages_no_wait",
"url":20,
"doc":"Request the message queue to exit.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.close_messages",
"url":20,
"doc":"Close message queue, and optionally wait for queue to finish processing.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.check_idle",
"url":20,
"doc":"Prompt the message pump to call idle if the queue is empty.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.post_priority_message",
"url":20,
"doc":"Post a \"priority\" messages which will be processes prior to regular messages. Note that you should rarely need this in a regular app. It exists primarily to allow timer messages to skip the queue, so that they can be more regular. Args: message (Message): A message. Returns: bool: True if the messages was processed.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.dispatch_key",
"url":20,
"doc":"Dispatch a key event to method. This method will call the method named 'key_ ' if it exists. Args: event (events.Key): A key event.",
"func":1
},
{
"ref":"textual.suggestions",
"url":37,
"doc":""
},
{
"ref":"textual.suggestions.get_suggestion",
"url":37,
"doc":"Returns a close match of  word amongst  possible_words . Args: word (str): The word we want to find a close match for possible_words (Sequence[str]): The words amongst which we want to find a close match Returns: str | None: The closest match amongst the  possible_words . Returns  None if no close matches could be found. Example: returns \"red\" for word \"redu\" and possible words (\"yellow\", \"red\")",
"func":1
},
{
"ref":"textual.suggestions.get_suggestions",
"url":37,
"doc":"Returns a list of up to  count matches of  word amongst  possible_words . Args: word (str): The word we want to find a close match for possible_words (Sequence[str]): The words amongst which we want to find close matches Returns: list[str]: The closest matches amongst the  possible_words , from the closest to the least close. Returns an empty list if no close matches could be found. Example: returns [\"yellow\", \"ellow\"] for word \"yllow\" and possible words (\"yellow\", \"red\", \"ellow\")",
"func":1
},
{
"ref":"textual.dom",
"url":36,
"doc":""
},
{
"ref":"textual.dom.NoParent",
"url":36,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"textual.dom.DOMNode",
"url":36,
"doc":"A node in a hierarchy of things forming the UI. Nodes are mountable and may be styled with CSS."
},
{
"ref":"textual.dom.DOMNode.CSS",
"url":36,
"doc":""
},
{
"ref":"textual.dom.DOMNode.COMPONENT_CLASSES",
"url":36,
"doc":""
},
{
"ref":"textual.dom.DOMNode.on_register",
"url":36,
"doc":"Called when the widget is registered Args: app (App): Parent application.",
"func":1
},
{
"ref":"textual.dom.DOMNode.css",
"url":36,
"doc":"Gets the CSS for this class and inherited from bases. Returns: list[tuple[str, str : a list of tuples containing (PATH, SOURCE) for this and inherited from base classes."
},
{
"ref":"textual.dom.DOMNode.parent",
"url":36,
"doc":"Get the parent node. Returns: DOMNode | None: The node which is the direct parent of this node."
},
{
"ref":"textual.dom.DOMNode.screen",
"url":36,
"doc":"Get the screen that this node is contained within. Note that this may not be the currently active screen within the app."
},
{
"ref":"textual.dom.DOMNode.id",
"url":36,
"doc":"The ID of this node, or None if the node has no ID. Returns: (str | None): A Node ID or None."
},
{
"ref":"textual.dom.DOMNode.name",
"url":36,
"doc":""
},
{
"ref":"textual.dom.DOMNode.css_identifier",
"url":36,
"doc":"A CSS selector that identifies this DOM node."
},
{
"ref":"textual.dom.DOMNode.css_identifier_styled",
"url":36,
"doc":"A stylized CSS identifier."
},
{
"ref":"textual.dom.DOMNode.classes",
"url":36,
"doc":""
},
{
"ref":"textual.dom.DOMNode.pseudo_classes",
"url":36,
"doc":"Get a set of all pseudo classes"
},
{
"ref":"textual.dom.DOMNode.css_path_nodes",
"url":36,
"doc":"A list of nodes from the root to this node, forming a \"path\". Returns: list[DOMNode]: List of Nodes, starting with the root and ending with this node."
},
{
"ref":"textual.dom.DOMNode.display",
"url":36,
"doc":"Returns:  True if this DOMNode is displayed ( display != \"none\" ),  False otherwise."
},
{
"ref":"textual.dom.DOMNode.visible",
"url":36,
"doc":""
},
{
"ref":"textual.dom.DOMNode.tree",
"url":36,
"doc":"Get a Rich tree object which will recursively render the structure of the node tree. Returns: Tree: A Rich object which may be printed."
},
{
"ref":"textual.dom.DOMNode.text_style",
"url":36,
"doc":"Get the text style object. A widget's style is influenced by its parent. for instance if a parent is bold, then the child will also be bold. Returns: Style: Rich Style object."
},
{
"ref":"textual.dom.DOMNode.rich_style",
"url":36,
"doc":"Get a Rich Style object for this DOMNode."
},
{
"ref":"textual.dom.DOMNode.background_colors",
"url":36,
"doc":"Get the background color and the color of the parent's background. Returns: tuple[Color, Color]: Tuple of (base background, background)"
},
{
"ref":"textual.dom.DOMNode.colors",
"url":36,
"doc":"Gets the Widgets foreground and background colors, and its parent's (base) colors. Returns: tuple[Color, Color, Color, Color]: Tuple of (base background, base color, background, color)"
},
{
"ref":"textual.dom.DOMNode.ancestors",
"url":36,
"doc":"Get a list of Nodes by tracing ancestors all the way back to App."
},
{
"ref":"textual.dom.DOMNode.displayed_children",
"url":36,
"doc":"The children which don't have display: none set."
},
{
"ref":"textual.dom.DOMNode.get_pseudo_classes",
"url":36,
"doc":"Get any pseudo classes applicable to this Node, e.g. hover, focus. Returns: Iterable[str]: Iterable of strings, such as a generator.",
"func":1
},
{
"ref":"textual.dom.DOMNode.reset_styles",
"url":36,
"doc":"Reset styles back to their initial state",
"func":1
},
{
"ref":"textual.dom.DOMNode.add_child",
"url":36,
"doc":"Add a new child node. Args: node (DOMNode): A DOM node.",
"func":1
},
{
"ref":"textual.dom.DOMNode.add_children",
"url":36,
"doc":"Add multiple children to this node. Args:  nodes (DOMNode): Positional args should be new DOM nodes.  named_nodes (DOMNode): Keyword args will be assigned the argument name as an ID.",
"func":1
},
{
"ref":"textual.dom.DOMNode.walk_children",
"url":36,
"doc":"Generate all descendants of this node. Args: with_self (bool, optional): Also include self in the results. Defaults to True.",
"func":1
},
{
"ref":"textual.dom.DOMNode.get_child",
"url":36,
"doc":"Return the first child (immediate descendent) of this node with the given ID. Args: id (str): The ID of the child. Returns: DOMNode: The first child of this node with the ID. Raises: NoMatchingNodesError: if no children could be found for this ID",
"func":1
},
{
"ref":"textual.dom.DOMNode.query",
"url":36,
"doc":"Get a DOM query. Args: selector (str, optional): A CSS selector or  None for all nodes. Defaults to None. Returns: DOMQuery: A query object.",
"func":1
},
{
"ref":"textual.dom.DOMNode.set_styles",
"url":36,
"doc":"Set custom styles on this object.",
"func":1
},
{
"ref":"textual.dom.DOMNode.has_class",
"url":36,
"doc":"Check if the Node has all the given class names. Args:  class_names (str): CSS class names to check. Returns: bool:  True if the node has all the given class names, otherwise  False .",
"func":1
},
{
"ref":"textual.dom.DOMNode.add_class",
"url":36,
"doc":"Add class names to this Node. Args:  class_names (str): CSS class names to add.",
"func":1
},
{
"ref":"textual.dom.DOMNode.remove_class",
"url":36,
"doc":"Remove class names from this Node. Args:  class_names (str): CSS class names to remove.",
"func":1
},
{
"ref":"textual.dom.DOMNode.toggle_class",
"url":36,
"doc":"Toggle class names on this Node. Args:  class_names (str): CSS class names to toggle.",
"func":1
},
{
"ref":"textual.dom.DOMNode.has_pseudo_class",
"url":36,
"doc":"Check for pseudo class (such as hover, focus etc)",
"func":1
},
{
"ref":"textual.dom.DOMNode.refresh",
"url":36,
"doc":"",
"func":1
},
{
"ref":"textual.dom.DOMNode.app",
"url":20,
"doc":"Get the current app. Raises: NoActiveAppError: if no active app could be found for the current asyncio context"
},
{
"ref":"textual.dom.DOMNode.disable_messages",
"url":20,
"doc":"Disable message types from being processed.",
"func":1
},
{
"ref":"textual.dom.DOMNode.enable_messages",
"url":20,
"doc":"Enable processing of messages types.",
"func":1
},
{
"ref":"textual.dom.DOMNode.get_message",
"url":20,
"doc":"Get the next event on the queue, or None if queue is closed. Returns: Optional[Event]: Event object or None.",
"func":1
},
{
"ref":"textual.dom.DOMNode.peek_message",
"url":20,
"doc":"Peek the message at the head of the queue (does not remove it from the queue), or return None if the queue is empty. Returns: Optional[Message]: The message or None.",
"func":1
},
{
"ref":"textual.dom.DOMNode.call_later",
"url":20,
"doc":"Schedule a callback to run after all messages are processed and the screen has been refreshed. Args: callback (Callable): A callable.",
"func":1
},
{
"ref":"textual.dom.DOMNode.close_messages_no_wait",
"url":20,
"doc":"Request the message queue to exit.",
"func":1
},
{
"ref":"textual.dom.DOMNode.close_messages",
"url":20,
"doc":"Close message queue, and optionally wait for queue to finish processing.",
"func":1
},
{
"ref":"textual.dom.DOMNode.check_idle",
"url":20,
"doc":"Prompt the message pump to call idle if the queue is empty.",
"func":1
},
{
"ref":"textual.dom.DOMNode.post_priority_message",
"url":20,
"doc":"Post a \"priority\" messages which will be processes prior to regular messages. Note that you should rarely need this in a regular app. It exists primarily to allow timer messages to skip the queue, so that they can be more regular. Args: message (Message): A message. Returns: bool: True if the messages was processed.",
"func":1
},
{
"ref":"textual.dom.DOMNode.dispatch_key",
"url":20,
"doc":"Dispatch a key event to method. This method will call the method named 'key_ ' if it exists. Args: event (events.Key): A key event.",
"func":1
},
{
"ref":"textual.scrollbar",
"url":38,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollMessage",
"url":38,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.scrollbar.ScrollMessage.sender",
"url":38,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollMessage.bubble",
"url":38,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollMessage.verbosity",
"url":38,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollMessage.system",
"url":38,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollMessage.set_forwarded",
"url":33,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollMessage.can_replace",
"url":33,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.scrollbar.ScrollMessage.prevent_default",
"url":33,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollMessage.stop",
"url":33,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollMessage.name",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollMessage.time",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollUp",
"url":38,
"doc":"Message sent when clicking above handle. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.scrollbar.ScrollUp.sender",
"url":38,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollUp.bubble",
"url":38,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollUp.verbosity",
"url":38,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollUp.system",
"url":38,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollUp.set_forwarded",
"url":33,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollUp.can_replace",
"url":33,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.scrollbar.ScrollUp.prevent_default",
"url":33,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollUp.stop",
"url":33,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollUp.name",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollUp.time",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollDown",
"url":38,
"doc":"Message sent when clicking below handle. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.scrollbar.ScrollDown.sender",
"url":38,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollDown.bubble",
"url":38,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollDown.verbosity",
"url":38,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollDown.system",
"url":38,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollDown.set_forwarded",
"url":33,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollDown.can_replace",
"url":33,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.scrollbar.ScrollDown.prevent_default",
"url":33,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollDown.stop",
"url":33,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollDown.name",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollDown.time",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollLeft",
"url":38,
"doc":"Message sent when clicking above handle. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.scrollbar.ScrollLeft.sender",
"url":38,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollLeft.bubble",
"url":38,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollLeft.verbosity",
"url":38,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollLeft.system",
"url":38,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollLeft.set_forwarded",
"url":33,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollLeft.can_replace",
"url":33,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.scrollbar.ScrollLeft.prevent_default",
"url":33,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollLeft.stop",
"url":33,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollLeft.name",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollLeft.time",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollRight",
"url":38,
"doc":"Message sent when clicking below handle. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.scrollbar.ScrollRight.sender",
"url":38,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollRight.bubble",
"url":38,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollRight.verbosity",
"url":38,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollRight.system",
"url":38,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollRight.set_forwarded",
"url":33,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollRight.can_replace",
"url":33,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.scrollbar.ScrollRight.prevent_default",
"url":33,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollRight.stop",
"url":33,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollRight.name",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollRight.time",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollTo",
"url":38,
"doc":"Message sent when click and dragging handle. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.scrollbar.ScrollTo.sender",
"url":38,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollTo.bubble",
"url":38,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollTo.verbosity",
"url":38,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollTo.system",
"url":38,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollTo.set_forwarded",
"url":33,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollTo.can_replace",
"url":33,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.scrollbar.ScrollTo.prevent_default",
"url":33,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollTo.stop",
"url":33,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollTo.name",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollTo.time",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollBarRender",
"url":38,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollBarRender.render_bar",
"url":38,
"doc":"",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar",
"url":38,
"doc":"A node in a hierarchy of things forming the UI. Nodes are mountable and may be styled with CSS."
},
{
"ref":"textual.scrollbar.ScrollBar.window_virtual_size",
"url":38,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scrollbar.ScrollBar.window_size",
"url":38,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scrollbar.ScrollBar.position",
"url":38,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scrollbar.ScrollBar.mouse_over",
"url":38,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scrollbar.ScrollBar.grabbed",
"url":38,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scrollbar.ScrollBar.render",
"url":38,
"doc":"Get renderable for widget. Args: style (Styles): The Styles object for this Widget. Returns: RenderableType: Any renderable",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.on_enter",
"url":38,
"doc":"",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.on_leave",
"url":38,
"doc":"",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.action_scroll_down",
"url":38,
"doc":"",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.action_scroll_up",
"url":38,
"doc":"",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.action_grab",
"url":38,
"doc":"",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.action_released",
"url":38,
"doc":"",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.on_mouse_up",
"url":38,
"doc":"",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.on_mouse_capture",
"url":38,
"doc":"",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.on_mouse_release",
"url":38,
"doc":"",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.on_mouse_move",
"url":38,
"doc":"",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.can_focus",
"url":38,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollBar.can_focus_children",
"url":38,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollBar.virtual_size",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scrollbar.ScrollBar.auto_width",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scrollbar.ScrollBar.auto_height",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scrollbar.ScrollBar.has_focus",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scrollbar.ScrollBar.descendant_has_focus",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scrollbar.ScrollBar.scroll_x",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scrollbar.ScrollBar.scroll_y",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scrollbar.ScrollBar.scroll_target_x",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scrollbar.ScrollBar.scroll_target_y",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scrollbar.ScrollBar.show_vertical_scrollbar",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scrollbar.ScrollBar.show_horizontal_scrollbar",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scrollbar.ScrollBar.watch_show_horizontal_scrollbar",
"url":35,
"doc":"Watch function for show_horizontal_scrollbar attribute. Args: value (bool): Show horizontal scrollbar flag.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.watch_show_vertical_scrollbar",
"url":35,
"doc":"Watch function for show_vertical_scrollbar attribute. Args: value (bool): Show vertical scrollbar flag.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.compose",
"url":35,
"doc":"Yield child widgets for a container.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.on_register",
"url":35,
"doc":"Called when the instance is registered. Args: app (App): App instance.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.get_box_model",
"url":35,
"doc":"Process the box model for this widget. Args: container (Size): The size of the container widget (with a layout) viewport (Size): The viewport size. Returns: BoxModel: The size and margin for this widget.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.get_content_width",
"url":35,
"doc":"Gets the width of the content area. Args: container (Size): Size of the container (immediate parent) widget. viewport (Size): Size of the viewport. Returns: int: The optimal width of the content.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.get_content_height",
"url":35,
"doc":"Gets the height (number of lines) in the content area. Args: container (Size): Size of the container (immediate parent) widget. viewport (Size): Size of the viewport. width (int): Width of renderable. Returns: int: The height of the content.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.max_scroll_x",
"url":35,
"doc":"The maximum value of  scroll_x ."
},
{
"ref":"textual.scrollbar.ScrollBar.max_scroll_y",
"url":35,
"doc":"The maximum value of  scroll_y ."
},
{
"ref":"textual.scrollbar.ScrollBar.vertical_scrollbar",
"url":35,
"doc":"Get a vertical scrollbar (create if necessary) Returns: ScrollBar: ScrollBar Widget."
},
{
"ref":"textual.scrollbar.ScrollBar.horizontal_scrollbar",
"url":35,
"doc":"Get a vertical scrollbar (create if necessary) Returns: ScrollBar: ScrollBar Widget."
},
{
"ref":"textual.scrollbar.ScrollBar.scrollbars_enabled",
"url":35,
"doc":"A tuple of booleans that indicate if scrollbars are enabled. Returns: tuple[bool, bool]: A tuple of ( ,  )"
},
{
"ref":"textual.scrollbar.ScrollBar.scrollbar_size_vertical",
"url":35,
"doc":"Get the width used by the  vertical scrollbar."
},
{
"ref":"textual.scrollbar.ScrollBar.scrollbar_size_horizontal",
"url":35,
"doc":"Get the height used by the  horizontal scrollbar."
},
{
"ref":"textual.scrollbar.ScrollBar.gutter",
"url":35,
"doc":"Spacing for padding / border / scrollbars."
},
{
"ref":"textual.scrollbar.ScrollBar.size",
"url":35,
"doc":"The size of the content area."
},
{
"ref":"textual.scrollbar.ScrollBar.outer_size",
"url":35,
"doc":"The size of the widget (including padding and border)."
},
{
"ref":"textual.scrollbar.ScrollBar.container_size",
"url":35,
"doc":"The size of the container (parent widget)."
},
{
"ref":"textual.scrollbar.ScrollBar.content_region",
"url":35,
"doc":"Gets an absolute region containing the content (minus padding and border)."
},
{
"ref":"textual.scrollbar.ScrollBar.content_offset",
"url":35,
"doc":"An offset from the Widget origin where the content begins."
},
{
"ref":"textual.scrollbar.ScrollBar.region",
"url":35,
"doc":"The region occupied by this widget, relative to the Screen."
},
{
"ref":"textual.scrollbar.ScrollBar.virtual_region",
"url":35,
"doc":"The widget region relative to it's container. Which may not be visible, depending on scroll offset."
},
{
"ref":"textual.scrollbar.ScrollBar.window_region",
"url":35,
"doc":"The region within the scrollable area that is currently visible. Returns: Region: New region."
},
{
"ref":"textual.scrollbar.ScrollBar.virtual_region_with_margin",
"url":35,
"doc":"The widget region relative to its container ( including margin ), which may not be visible, depending on the scroll offset. Returns: Region: The virtual region of the Widget, inclusive of its margin."
},
{
"ref":"textual.scrollbar.ScrollBar.focusable_children",
"url":35,
"doc":"Get the children which may be focused."
},
{
"ref":"textual.scrollbar.ScrollBar.is_transparent",
"url":35,
"doc":"Check if the background styles is not set. Returns: bool:  True if there is background color, otherwise  False ."
},
{
"ref":"textual.scrollbar.ScrollBar.console",
"url":35,
"doc":"Get the current console."
},
{
"ref":"textual.scrollbar.ScrollBar.layout",
"url":35,
"doc":"Get the layout object if set in styles, or a default layout."
},
{
"ref":"textual.scrollbar.ScrollBar.is_container",
"url":35,
"doc":"Check if this widget is a container (contains other widgets). Returns: bool: True if this widget is a container."
},
{
"ref":"textual.scrollbar.ScrollBar.is_scrollable",
"url":35,
"doc":"Check if this Widget may be scrolled. Returns: bool: True if this widget may be scrolled."
},
{
"ref":"textual.scrollbar.ScrollBar.layer",
"url":35,
"doc":"Get the name of this widgets layer."
},
{
"ref":"textual.scrollbar.ScrollBar.layers",
"url":35,
"doc":"Layers of from parent. Returns: tuple[str,  .]: Tuple of layer names."
},
{
"ref":"textual.scrollbar.ScrollBar.scroll_to",
"url":35,
"doc":"Scroll to a given (absolute) coordinate, optionally animating. Args: x (int | None, optional): X coordinate (column) to scroll to, or  None for no change. Defaults to None. y (int | None, optional): Y coordinate (row) to scroll to, or  None for no change. Defaults to None. animate (bool, optional): Animate to new scroll position. Defaults to False. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.scroll_relative",
"url":35,
"doc":"Scroll relative to current position. Args: x (int | None, optional): X distance (columns) to scroll, or  None for no change. Defaults to None. y (int | None, optional): Y distance (rows) to scroll, or  None for no change. Defaults to None. animate (bool, optional): Animate to new scroll position. Defaults to False. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.scroll_to_widget",
"url":35,
"doc":"Scroll scrolling to bring a widget in to view. Args: widget (Widget): A descendant widget. animate (bool, optional): True to animate, or False to jump. Defaults to True. Returns: bool: True if any scrolling has occurred in any descendant, otherwise False.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.scroll_to_region",
"url":35,
"doc":"Scrolls a given region in to view, if required. This method will scroll the least distance required to move  region fully within the scrollable area. Args: region (Region): A region that should be visible. animate (bool, optional): Enable animation. Defaults to True. spacing (Spacing): Space to subtract from the window region. Returns: Offset: The distance that was scrolled.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.get_pseudo_classes",
"url":35,
"doc":"Pseudo classes for a widget",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.watch_mouse_over",
"url":35,
"doc":"Update from CSS if mouse over state changes.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.watch_has_focus",
"url":35,
"doc":"Update from CSS if has focus state changes.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.render_line",
"url":35,
"doc":"Render a line of content. Args: y (int): Y Coordinate of line. Returns: list[Segment]: A rendered line.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.render_lines",
"url":35,
"doc":"Render the widget in to lines. Args: crop (Region): Region within visible area to render. Returns: Lines: A list of list of segments.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.call_later",
"url":35,
"doc":"Schedule a callback to run after all messages are processed and the screen has been refreshed. Args: callback (Callable): A callable.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.refresh",
"url":35,
"doc":"Initiate a refresh of the widget. This method sets an internal flag to perform a refresh, which will be done on the next idle event. Only one refresh will be done even if this method is called multiple times. Args: repaint (bool, optional): Repaint the widget (will call render() again). Defaults to True. layout (bool, optional): Also layout widgets in the view. Defaults to False.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.on_idle",
"url":35,
"doc":"Called when there are no more events on the queue. Args: event (events.Idle): Idle event.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.focus",
"url":35,
"doc":"Give input focus to this widget.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.capture_mouse",
"url":35,
"doc":"Capture (or release) the mouse. When captured, all mouse coordinates will go to this widget even when the pointer is not directly over the widget. Args: capture (bool, optional): True to capture or False to release. Defaults to True.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.release_mouse",
"url":35,
"doc":"Release the mouse. Mouse events will only be sent when the mouse is over the widget.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.css",
"url":36,
"doc":"Gets the CSS for this class and inherited from bases. Returns: list[tuple[str, str : a list of tuples containing (PATH, SOURCE) for this and inherited from base classes."
},
{
"ref":"textual.scrollbar.ScrollBar.parent",
"url":36,
"doc":"Get the parent node. Returns: DOMNode | None: The node which is the direct parent of this node."
},
{
"ref":"textual.scrollbar.ScrollBar.screen",
"url":36,
"doc":"Get the screen that this node is contained within. Note that this may not be the currently active screen within the app."
},
{
"ref":"textual.scrollbar.ScrollBar.id",
"url":36,
"doc":"The ID of this node, or None if the node has no ID. Returns: (str | None): A Node ID or None."
},
{
"ref":"textual.scrollbar.ScrollBar.css_identifier",
"url":36,
"doc":"A CSS selector that identifies this DOM node."
},
{
"ref":"textual.scrollbar.ScrollBar.css_identifier_styled",
"url":36,
"doc":"A stylized CSS identifier."
},
{
"ref":"textual.scrollbar.ScrollBar.pseudo_classes",
"url":36,
"doc":"Get a set of all pseudo classes"
},
{
"ref":"textual.scrollbar.ScrollBar.css_path_nodes",
"url":36,
"doc":"A list of nodes from the root to this node, forming a \"path\". Returns: list[DOMNode]: List of Nodes, starting with the root and ending with this node."
},
{
"ref":"textual.scrollbar.ScrollBar.display",
"url":36,
"doc":"Returns:  True if this DOMNode is displayed ( display != \"none\" ),  False otherwise."
},
{
"ref":"textual.scrollbar.ScrollBar.tree",
"url":36,
"doc":"Get a Rich tree object which will recursively render the structure of the node tree. Returns: Tree: A Rich object which may be printed."
},
{
"ref":"textual.scrollbar.ScrollBar.text_style",
"url":36,
"doc":"Get the text style object. A widget's style is influenced by its parent. for instance if a parent is bold, then the child will also be bold. Returns: Style: Rich Style object."
},
{
"ref":"textual.scrollbar.ScrollBar.rich_style",
"url":36,
"doc":"Get a Rich Style object for this DOMNode."
},
{
"ref":"textual.scrollbar.ScrollBar.background_colors",
"url":36,
"doc":"Get the background color and the color of the parent's background. Returns: tuple[Color, Color]: Tuple of (base background, background)"
},
{
"ref":"textual.scrollbar.ScrollBar.colors",
"url":36,
"doc":"Gets the Widgets foreground and background colors, and its parent's (base) colors. Returns: tuple[Color, Color, Color, Color]: Tuple of (base background, base color, background, color)"
},
{
"ref":"textual.scrollbar.ScrollBar.ancestors",
"url":36,
"doc":"Get a list of Nodes by tracing ancestors all the way back to App."
},
{
"ref":"textual.scrollbar.ScrollBar.displayed_children",
"url":36,
"doc":"The children which don't have display: none set."
},
{
"ref":"textual.scrollbar.ScrollBar.reset_styles",
"url":36,
"doc":"Reset styles back to their initial state",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.add_child",
"url":36,
"doc":"Add a new child node. Args: node (DOMNode): A DOM node.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.add_children",
"url":36,
"doc":"Add multiple children to this node. Args:  nodes (DOMNode): Positional args should be new DOM nodes.  named_nodes (DOMNode): Keyword args will be assigned the argument name as an ID.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.walk_children",
"url":36,
"doc":"Generate all descendants of this node. Args: with_self (bool, optional): Also include self in the results. Defaults to True.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.get_child",
"url":36,
"doc":"Return the first child (immediate descendent) of this node with the given ID. Args: id (str): The ID of the child. Returns: DOMNode: The first child of this node with the ID. Raises: NoMatchingNodesError: if no children could be found for this ID",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.query",
"url":36,
"doc":"Get a DOM query. Args: selector (str, optional): A CSS selector or  None for all nodes. Defaults to None. Returns: DOMQuery: A query object.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.set_styles",
"url":36,
"doc":"Set custom styles on this object.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.has_class",
"url":36,
"doc":"Check if the Node has all the given class names. Args:  class_names (str): CSS class names to check. Returns: bool:  True if the node has all the given class names, otherwise  False .",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.add_class",
"url":36,
"doc":"Add class names to this Node. Args:  class_names (str): CSS class names to add.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.remove_class",
"url":36,
"doc":"Remove class names from this Node. Args:  class_names (str): CSS class names to remove.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.toggle_class",
"url":36,
"doc":"Toggle class names on this Node. Args:  class_names (str): CSS class names to toggle.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.has_pseudo_class",
"url":36,
"doc":"Check for pseudo class (such as hover, focus etc)",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.app",
"url":20,
"doc":"Get the current app. Raises: NoActiveAppError: if no active app could be found for the current asyncio context"
},
{
"ref":"textual.scrollbar.ScrollBar.disable_messages",
"url":20,
"doc":"Disable message types from being processed.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.enable_messages",
"url":20,
"doc":"Enable processing of messages types.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.get_message",
"url":20,
"doc":"Get the next event on the queue, or None if queue is closed. Returns: Optional[Event]: Event object or None.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.peek_message",
"url":20,
"doc":"Peek the message at the head of the queue (does not remove it from the queue), or return None if the queue is empty. Returns: Optional[Message]: The message or None.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.close_messages_no_wait",
"url":20,
"doc":"Request the message queue to exit.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.close_messages",
"url":20,
"doc":"Close message queue, and optionally wait for queue to finish processing.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.check_idle",
"url":20,
"doc":"Prompt the message pump to call idle if the queue is empty.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.post_priority_message",
"url":20,
"doc":"Post a \"priority\" messages which will be processes prior to regular messages. Note that you should rarely need this in a regular app. It exists primarily to allow timer messages to skip the queue, so that they can be more regular. Args: message (Message): A message. Returns: bool: True if the messages was processed.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.dispatch_key",
"url":20,
"doc":"Dispatch a key event to method. This method will call the method named 'key_ ' if it exists. Args: event (events.Key): A key event.",
"func":1
},
{
"ref":"textual.actions",
"url":39,
"doc":""
},
{
"ref":"textual.actions.ActionError",
"url":39,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"textual.actions.parse",
"url":39,
"doc":"",
"func":1
},
{
"ref":"textual.events",
"url":40,
"doc":""
},
{
"ref":"textual.events.Event",
"url":40,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Event.sender",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Event.bubble",
"url":40,
"doc":""
},
{
"ref":"textual.events.Event.verbosity",
"url":40,
"doc":""
},
{
"ref":"textual.events.Event.system",
"url":40,
"doc":""
},
{
"ref":"textual.events.Event.set_forwarded",
"url":33,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.Event.can_replace",
"url":33,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Event.prevent_default",
"url":33,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Event.stop",
"url":33,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Event.name",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Event.time",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Null",
"url":40,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Null.sender",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Null.can_replace",
"url":40,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Null.bubble",
"url":40,
"doc":""
},
{
"ref":"textual.events.Null.verbosity",
"url":40,
"doc":""
},
{
"ref":"textual.events.Null.system",
"url":40,
"doc":""
},
{
"ref":"textual.events.Null.set_forwarded",
"url":33,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.Null.prevent_default",
"url":33,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Null.stop",
"url":33,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Null.name",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Null.time",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Callback",
"url":40,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Callback.sender",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Callback.bubble",
"url":40,
"doc":""
},
{
"ref":"textual.events.Callback.verbosity",
"url":40,
"doc":""
},
{
"ref":"textual.events.Callback.system",
"url":40,
"doc":""
},
{
"ref":"textual.events.Callback.set_forwarded",
"url":33,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.Callback.can_replace",
"url":33,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Callback.prevent_default",
"url":33,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Callback.stop",
"url":33,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Callback.name",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Callback.time",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.InvokeCallbacks",
"url":40,
"doc":"Sent after the Screen is updated Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.InvokeCallbacks.sender",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.InvokeCallbacks.bubble",
"url":40,
"doc":""
},
{
"ref":"textual.events.InvokeCallbacks.verbosity",
"url":40,
"doc":""
},
{
"ref":"textual.events.InvokeCallbacks.system",
"url":40,
"doc":""
},
{
"ref":"textual.events.InvokeCallbacks.set_forwarded",
"url":33,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.InvokeCallbacks.can_replace",
"url":33,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.InvokeCallbacks.prevent_default",
"url":33,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.InvokeCallbacks.stop",
"url":33,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.InvokeCallbacks.name",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.InvokeCallbacks.time",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.ShutdownRequest",
"url":40,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.ShutdownRequest.sender",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.ShutdownRequest.bubble",
"url":40,
"doc":""
},
{
"ref":"textual.events.ShutdownRequest.verbosity",
"url":40,
"doc":""
},
{
"ref":"textual.events.ShutdownRequest.system",
"url":40,
"doc":""
},
{
"ref":"textual.events.ShutdownRequest.set_forwarded",
"url":33,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.ShutdownRequest.can_replace",
"url":33,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.ShutdownRequest.prevent_default",
"url":33,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.ShutdownRequest.stop",
"url":33,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.ShutdownRequest.name",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.ShutdownRequest.time",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Shutdown",
"url":40,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Shutdown.sender",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Shutdown.bubble",
"url":40,
"doc":""
},
{
"ref":"textual.events.Shutdown.verbosity",
"url":40,
"doc":""
},
{
"ref":"textual.events.Shutdown.system",
"url":40,
"doc":""
},
{
"ref":"textual.events.Shutdown.set_forwarded",
"url":33,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.Shutdown.can_replace",
"url":33,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Shutdown.prevent_default",
"url":33,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Shutdown.stop",
"url":33,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Shutdown.name",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Shutdown.time",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Load",
"url":40,
"doc":"Sent when the App is running but  before the terminal is in application mode. Use this event to run any set up that doesn't require any visuals such as loading configuration and binding keys. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Load.sender",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Load.bubble",
"url":40,
"doc":""
},
{
"ref":"textual.events.Load.verbosity",
"url":40,
"doc":""
},
{
"ref":"textual.events.Load.system",
"url":40,
"doc":""
},
{
"ref":"textual.events.Load.set_forwarded",
"url":33,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.Load.can_replace",
"url":33,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Load.prevent_default",
"url":33,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Load.stop",
"url":33,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Load.name",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Load.time",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Idle",
"url":40,
"doc":"Sent when there are no more items in the message queue. This is a pseudo-event in that it is created by the Textual system and doesn't go through the usual message queue. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Idle.sender",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Idle.bubble",
"url":40,
"doc":""
},
{
"ref":"textual.events.Idle.verbosity",
"url":40,
"doc":""
},
{
"ref":"textual.events.Idle.system",
"url":40,
"doc":""
},
{
"ref":"textual.events.Idle.set_forwarded",
"url":33,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.Idle.can_replace",
"url":33,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Idle.prevent_default",
"url":33,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Idle.stop",
"url":33,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Idle.name",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Idle.time",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Action",
"url":40,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Action.sender",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Action.action",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Action.bubble",
"url":40,
"doc":""
},
{
"ref":"textual.events.Action.verbosity",
"url":40,
"doc":""
},
{
"ref":"textual.events.Action.system",
"url":40,
"doc":""
},
{
"ref":"textual.events.Action.set_forwarded",
"url":33,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.Action.can_replace",
"url":33,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Action.prevent_default",
"url":33,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Action.stop",
"url":33,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Action.name",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Action.time",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Resize",
"url":40,
"doc":"Sent when the app or widget has been resized. Args: sender (MessageTarget): The sender of the event (the Screen). size (Size): The new size of the Widget. virtual_size (Size): The virtual size (scrollable size) of the Widget. container_size (Size | None, optional): The size of the Widget's container widget. Defaults to None."
},
{
"ref":"textual.events.Resize.sender",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Resize.can_replace",
"url":40,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Resize.container_size",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Resize.size",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Resize.virtual_size",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Resize.bubble",
"url":40,
"doc":""
},
{
"ref":"textual.events.Resize.verbosity",
"url":40,
"doc":""
},
{
"ref":"textual.events.Resize.system",
"url":40,
"doc":""
},
{
"ref":"textual.events.Resize.set_forwarded",
"url":33,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.Resize.prevent_default",
"url":33,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Resize.stop",
"url":33,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Resize.name",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Resize.time",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Mount",
"url":40,
"doc":"Sent when a widget is  mounted and may receive messages. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Mount.sender",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Mount.bubble",
"url":40,
"doc":""
},
{
"ref":"textual.events.Mount.verbosity",
"url":40,
"doc":""
},
{
"ref":"textual.events.Mount.system",
"url":40,
"doc":""
},
{
"ref":"textual.events.Mount.set_forwarded",
"url":33,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.Mount.can_replace",
"url":33,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Mount.prevent_default",
"url":33,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Mount.stop",
"url":33,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Mount.name",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Mount.time",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Unmount",
"url":40,
"doc":"Sent when a widget is unmounted, and may no longer receive messages. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Unmount.sender",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Unmount.bubble",
"url":40,
"doc":""
},
{
"ref":"textual.events.Unmount.verbosity",
"url":40,
"doc":""
},
{
"ref":"textual.events.Unmount.system",
"url":40,
"doc":""
},
{
"ref":"textual.events.Unmount.set_forwarded",
"url":33,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.Unmount.can_replace",
"url":33,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Unmount.prevent_default",
"url":33,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Unmount.stop",
"url":33,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Unmount.name",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Unmount.time",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Show",
"url":40,
"doc":"Sent when a widget has become visible. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Show.sender",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Show.bubble",
"url":40,
"doc":""
},
{
"ref":"textual.events.Show.verbosity",
"url":40,
"doc":""
},
{
"ref":"textual.events.Show.system",
"url":40,
"doc":""
},
{
"ref":"textual.events.Show.set_forwarded",
"url":33,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.Show.can_replace",
"url":33,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Show.prevent_default",
"url":33,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Show.stop",
"url":33,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Show.name",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Show.time",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Hide",
"url":40,
"doc":"Sent when a widget has been hidden. A widget may be hidden by setting its  visible flag to  False , if it is no longer in a layout, or if it has been offset beyond the edges of the terminal. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Hide.sender",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Hide.bubble",
"url":40,
"doc":""
},
{
"ref":"textual.events.Hide.verbosity",
"url":40,
"doc":""
},
{
"ref":"textual.events.Hide.system",
"url":40,
"doc":""
},
{
"ref":"textual.events.Hide.set_forwarded",
"url":33,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.Hide.can_replace",
"url":33,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Hide.prevent_default",
"url":33,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Hide.stop",
"url":33,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Hide.name",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Hide.time",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseCapture",
"url":40,
"doc":"Sent when the mouse has been captured. When a mouse has been captures, all further mouse events will be sent to the capturing widget. Args: sender (MessageTarget): The sender of the event, (in this case the app). mouse_position (Point): The position of the mouse when captured."
},
{
"ref":"textual.events.MouseCapture.sender",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseCapture.bubble",
"url":40,
"doc":""
},
{
"ref":"textual.events.MouseCapture.verbosity",
"url":40,
"doc":""
},
{
"ref":"textual.events.MouseCapture.system",
"url":40,
"doc":""
},
{
"ref":"textual.events.MouseCapture.set_forwarded",
"url":33,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.MouseCapture.can_replace",
"url":33,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.MouseCapture.prevent_default",
"url":33,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseCapture.stop",
"url":33,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseCapture.name",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseCapture.time",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseRelease",
"url":40,
"doc":"Mouse has been released. Args: sender (MessageTarget): The sender of the event, (in this case the app). mouse_position (Point): The position of the mouse when released."
},
{
"ref":"textual.events.MouseRelease.sender",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseRelease.bubble",
"url":40,
"doc":""
},
{
"ref":"textual.events.MouseRelease.verbosity",
"url":40,
"doc":""
},
{
"ref":"textual.events.MouseRelease.system",
"url":40,
"doc":""
},
{
"ref":"textual.events.MouseRelease.set_forwarded",
"url":33,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.MouseRelease.can_replace",
"url":33,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.MouseRelease.prevent_default",
"url":33,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseRelease.stop",
"url":33,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseRelease.name",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseRelease.time",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.InputEvent",
"url":40,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.InputEvent.sender",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.InputEvent.bubble",
"url":40,
"doc":""
},
{
"ref":"textual.events.InputEvent.verbosity",
"url":40,
"doc":""
},
{
"ref":"textual.events.InputEvent.system",
"url":40,
"doc":""
},
{
"ref":"textual.events.InputEvent.set_forwarded",
"url":33,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.InputEvent.can_replace",
"url":33,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.InputEvent.prevent_default",
"url":33,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.InputEvent.stop",
"url":33,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.InputEvent.name",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.InputEvent.time",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Key",
"url":40,
"doc":"Sent when the user hits a key on the keyboard Args: sender (MessageTarget): The sender of the event (the App) key (str): The pressed key if a single character (or a longer string for special characters)"
},
{
"ref":"textual.events.Key.sender",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Key.is_printable",
"url":40,
"doc":"Return True if the key is printable. Currently, we assume any key event that isn't defined in key bindings is printable. Returns: bool: True if the key is printable. False otherwise."
},
{
"ref":"textual.events.Key.key",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Key.bubble",
"url":40,
"doc":""
},
{
"ref":"textual.events.Key.verbosity",
"url":40,
"doc":""
},
{
"ref":"textual.events.Key.system",
"url":40,
"doc":""
},
{
"ref":"textual.events.Key.set_forwarded",
"url":33,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.Key.can_replace",
"url":33,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Key.prevent_default",
"url":33,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Key.stop",
"url":33,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Key.name",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Key.time",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent",
"url":40,
"doc":"Sent in response to a mouse event Args: sender (MessageTarget): The sender of the event. x (int): The relative x coordinate. y (int): The relative y coordinate. delta_x (int): Change in x since the last message. delta_y (int): Change in y since the last message. button (int): Indexed of the pressed button. shift (bool): True if the shift key is pressed. meta (bool): True if the meta key is pressed. ctrl (bool): True if the ctrl key is pressed. screen_x (int, optional): The absolute x coordinate. screen_y (int, optional): The absolute y coordinate. style (Style, optional): The Rich Style under the mouse cursor."
},
{
"ref":"textual.events.MouseEvent.sender",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent.from_event",
"url":40,
"doc":"",
"func":1
},
{
"ref":"textual.events.MouseEvent.style",
"url":40,
"doc":""
},
{
"ref":"textual.events.MouseEvent.offset",
"url":40,
"doc":"",
"func":1
},
{
"ref":"textual.events.MouseEvent.button",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent.ctrl",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent.delta_x",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent.delta_y",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent.meta",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent.screen_x",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent.screen_y",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent.shift",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent.x",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent.y",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent.bubble",
"url":40,
"doc":""
},
{
"ref":"textual.events.MouseEvent.verbosity",
"url":40,
"doc":""
},
{
"ref":"textual.events.MouseEvent.system",
"url":40,
"doc":""
},
{
"ref":"textual.events.MouseEvent.set_forwarded",
"url":33,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.MouseEvent.can_replace",
"url":33,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.MouseEvent.prevent_default",
"url":33,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseEvent.stop",
"url":33,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseEvent.name",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent.time",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove",
"url":40,
"doc":"Sent when the mouse cursor moves. Args: sender (MessageTarget): The sender of the event. x (int): The relative x coordinate. y (int): The relative y coordinate. delta_x (int): Change in x since the last message. delta_y (int): Change in y since the last message. button (int): Indexed of the pressed button. shift (bool): True if the shift key is pressed. meta (bool): True if the meta key is pressed. ctrl (bool): True if the ctrl key is pressed. screen_x (int, optional): The absolute x coordinate. screen_y (int, optional): The absolute y coordinate. style (Style, optional): The Rich Style under the mouse cursor."
},
{
"ref":"textual.events.MouseMove.sender",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove.bubble",
"url":40,
"doc":""
},
{
"ref":"textual.events.MouseMove.verbosity",
"url":40,
"doc":""
},
{
"ref":"textual.events.MouseMove.system",
"url":40,
"doc":""
},
{
"ref":"textual.events.MouseMove.button",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove.ctrl",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove.delta_x",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove.delta_y",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove.meta",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove.screen_x",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove.screen_y",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove.shift",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove.x",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove.y",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove.set_forwarded",
"url":33,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.MouseMove.can_replace",
"url":33,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.MouseMove.prevent_default",
"url":33,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseMove.stop",
"url":33,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseMove.name",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove.time",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown",
"url":40,
"doc":"Sent in response to a mouse event Args: sender (MessageTarget): The sender of the event. x (int): The relative x coordinate. y (int): The relative y coordinate. delta_x (int): Change in x since the last message. delta_y (int): Change in y since the last message. button (int): Indexed of the pressed button. shift (bool): True if the shift key is pressed. meta (bool): True if the meta key is pressed. ctrl (bool): True if the ctrl key is pressed. screen_x (int, optional): The absolute x coordinate. screen_y (int, optional): The absolute y coordinate. style (Style, optional): The Rich Style under the mouse cursor."
},
{
"ref":"textual.events.MouseDown.sender",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown.bubble",
"url":40,
"doc":""
},
{
"ref":"textual.events.MouseDown.verbosity",
"url":40,
"doc":""
},
{
"ref":"textual.events.MouseDown.system",
"url":40,
"doc":""
},
{
"ref":"textual.events.MouseDown.button",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown.ctrl",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown.delta_x",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown.delta_y",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown.meta",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown.screen_x",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown.screen_y",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown.shift",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown.x",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown.y",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown.set_forwarded",
"url":33,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.MouseDown.can_replace",
"url":33,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.MouseDown.prevent_default",
"url":33,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseDown.stop",
"url":33,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseDown.name",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown.time",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp",
"url":40,
"doc":"Sent in response to a mouse event Args: sender (MessageTarget): The sender of the event. x (int): The relative x coordinate. y (int): The relative y coordinate. delta_x (int): Change in x since the last message. delta_y (int): Change in y since the last message. button (int): Indexed of the pressed button. shift (bool): True if the shift key is pressed. meta (bool): True if the meta key is pressed. ctrl (bool): True if the ctrl key is pressed. screen_x (int, optional): The absolute x coordinate. screen_y (int, optional): The absolute y coordinate. style (Style, optional): The Rich Style under the mouse cursor."
},
{
"ref":"textual.events.MouseUp.sender",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp.bubble",
"url":40,
"doc":""
},
{
"ref":"textual.events.MouseUp.verbosity",
"url":40,
"doc":""
},
{
"ref":"textual.events.MouseUp.system",
"url":40,
"doc":""
},
{
"ref":"textual.events.MouseUp.button",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp.ctrl",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp.delta_x",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp.delta_y",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp.meta",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp.screen_x",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp.screen_y",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp.shift",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp.x",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp.y",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp.set_forwarded",
"url":33,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.MouseUp.can_replace",
"url":33,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.MouseUp.prevent_default",
"url":33,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseUp.stop",
"url":33,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseUp.name",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp.time",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseScrollDown",
"url":40,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.MouseScrollDown.sender",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseScrollDown.x",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseScrollDown.y",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseScrollDown.bubble",
"url":40,
"doc":""
},
{
"ref":"textual.events.MouseScrollDown.verbosity",
"url":40,
"doc":""
},
{
"ref":"textual.events.MouseScrollDown.system",
"url":40,
"doc":""
},
{
"ref":"textual.events.MouseScrollDown.set_forwarded",
"url":33,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.MouseScrollDown.can_replace",
"url":33,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.MouseScrollDown.prevent_default",
"url":33,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseScrollDown.stop",
"url":33,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseScrollDown.name",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseScrollDown.time",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseScrollUp",
"url":40,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.MouseScrollUp.sender",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseScrollUp.bubble",
"url":40,
"doc":""
},
{
"ref":"textual.events.MouseScrollUp.verbosity",
"url":40,
"doc":""
},
{
"ref":"textual.events.MouseScrollUp.system",
"url":40,
"doc":""
},
{
"ref":"textual.events.MouseScrollUp.x",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseScrollUp.y",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseScrollUp.set_forwarded",
"url":33,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.MouseScrollUp.can_replace",
"url":33,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.MouseScrollUp.prevent_default",
"url":33,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseScrollUp.stop",
"url":33,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseScrollUp.name",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseScrollUp.time",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click",
"url":40,
"doc":"Sent in response to a mouse event Args: sender (MessageTarget): The sender of the event. x (int): The relative x coordinate. y (int): The relative y coordinate. delta_x (int): Change in x since the last message. delta_y (int): Change in y since the last message. button (int): Indexed of the pressed button. shift (bool): True if the shift key is pressed. meta (bool): True if the meta key is pressed. ctrl (bool): True if the ctrl key is pressed. screen_x (int, optional): The absolute x coordinate. screen_y (int, optional): The absolute y coordinate. style (Style, optional): The Rich Style under the mouse cursor."
},
{
"ref":"textual.events.Click.sender",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click.bubble",
"url":40,
"doc":""
},
{
"ref":"textual.events.Click.verbosity",
"url":40,
"doc":""
},
{
"ref":"textual.events.Click.system",
"url":40,
"doc":""
},
{
"ref":"textual.events.Click.button",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click.ctrl",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click.delta_x",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click.delta_y",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click.meta",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click.screen_x",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click.screen_y",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click.shift",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click.x",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click.y",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click.set_forwarded",
"url":33,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.Click.can_replace",
"url":33,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Click.prevent_default",
"url":33,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Click.stop",
"url":33,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Click.name",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click.time",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DoubleClick",
"url":40,
"doc":"Sent in response to a mouse event Args: sender (MessageTarget): The sender of the event. x (int): The relative x coordinate. y (int): The relative y coordinate. delta_x (int): Change in x since the last message. delta_y (int): Change in y since the last message. button (int): Indexed of the pressed button. shift (bool): True if the shift key is pressed. meta (bool): True if the meta key is pressed. ctrl (bool): True if the ctrl key is pressed. screen_x (int, optional): The absolute x coordinate. screen_y (int, optional): The absolute y coordinate. style (Style, optional): The Rich Style under the mouse cursor."
},
{
"ref":"textual.events.DoubleClick.sender",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DoubleClick.bubble",
"url":40,
"doc":""
},
{
"ref":"textual.events.DoubleClick.verbosity",
"url":40,
"doc":""
},
{
"ref":"textual.events.DoubleClick.system",
"url":40,
"doc":""
},
{
"ref":"textual.events.DoubleClick.button",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DoubleClick.ctrl",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DoubleClick.delta_x",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DoubleClick.delta_y",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DoubleClick.meta",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DoubleClick.screen_x",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DoubleClick.screen_y",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DoubleClick.shift",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DoubleClick.x",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DoubleClick.y",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DoubleClick.set_forwarded",
"url":33,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.DoubleClick.can_replace",
"url":33,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.DoubleClick.prevent_default",
"url":33,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.DoubleClick.stop",
"url":33,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.DoubleClick.name",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DoubleClick.time",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Timer",
"url":40,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Timer.sender",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Timer.callback",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Timer.count",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Timer.time",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Timer.bubble",
"url":40,
"doc":""
},
{
"ref":"textual.events.Timer.verbosity",
"url":40,
"doc":""
},
{
"ref":"textual.events.Timer.system",
"url":40,
"doc":""
},
{
"ref":"textual.events.Timer.set_forwarded",
"url":33,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.Timer.can_replace",
"url":33,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Timer.prevent_default",
"url":33,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Timer.stop",
"url":33,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Timer.name",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Enter",
"url":40,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Enter.sender",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Enter.bubble",
"url":40,
"doc":""
},
{
"ref":"textual.events.Enter.verbosity",
"url":40,
"doc":""
},
{
"ref":"textual.events.Enter.system",
"url":40,
"doc":""
},
{
"ref":"textual.events.Enter.set_forwarded",
"url":33,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.Enter.can_replace",
"url":33,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Enter.prevent_default",
"url":33,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Enter.stop",
"url":33,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Enter.name",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Enter.time",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Leave",
"url":40,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Leave.sender",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Leave.bubble",
"url":40,
"doc":""
},
{
"ref":"textual.events.Leave.verbosity",
"url":40,
"doc":""
},
{
"ref":"textual.events.Leave.system",
"url":40,
"doc":""
},
{
"ref":"textual.events.Leave.set_forwarded",
"url":33,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.Leave.can_replace",
"url":33,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Leave.prevent_default",
"url":33,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Leave.stop",
"url":33,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Leave.name",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Leave.time",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Focus",
"url":40,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Focus.sender",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Focus.bubble",
"url":40,
"doc":""
},
{
"ref":"textual.events.Focus.verbosity",
"url":40,
"doc":""
},
{
"ref":"textual.events.Focus.system",
"url":40,
"doc":""
},
{
"ref":"textual.events.Focus.set_forwarded",
"url":33,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.Focus.can_replace",
"url":33,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Focus.prevent_default",
"url":33,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Focus.stop",
"url":33,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Focus.name",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Focus.time",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Blur",
"url":40,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Blur.sender",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Blur.bubble",
"url":40,
"doc":""
},
{
"ref":"textual.events.Blur.verbosity",
"url":40,
"doc":""
},
{
"ref":"textual.events.Blur.system",
"url":40,
"doc":""
},
{
"ref":"textual.events.Blur.set_forwarded",
"url":33,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.Blur.can_replace",
"url":33,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Blur.prevent_default",
"url":33,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Blur.stop",
"url":33,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Blur.name",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Blur.time",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DescendantFocus",
"url":40,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.DescendantFocus.sender",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DescendantFocus.bubble",
"url":40,
"doc":""
},
{
"ref":"textual.events.DescendantFocus.verbosity",
"url":40,
"doc":""
},
{
"ref":"textual.events.DescendantFocus.system",
"url":40,
"doc":""
},
{
"ref":"textual.events.DescendantFocus.set_forwarded",
"url":33,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.DescendantFocus.can_replace",
"url":33,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.DescendantFocus.prevent_default",
"url":33,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.DescendantFocus.stop",
"url":33,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.DescendantFocus.name",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DescendantFocus.time",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DescendantBlur",
"url":40,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.DescendantBlur.sender",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DescendantBlur.bubble",
"url":40,
"doc":""
},
{
"ref":"textual.events.DescendantBlur.verbosity",
"url":40,
"doc":""
},
{
"ref":"textual.events.DescendantBlur.system",
"url":40,
"doc":""
},
{
"ref":"textual.events.DescendantBlur.set_forwarded",
"url":33,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.DescendantBlur.can_replace",
"url":33,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.DescendantBlur.prevent_default",
"url":33,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.DescendantBlur.stop",
"url":33,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.DescendantBlur.name",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DescendantBlur.time",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Paste",
"url":40,
"doc":"Event containing text that was pasted into the Textual application. This event will only appear when running in a terminal emulator that supports bracketed paste mode. Textual will enable bracketed pastes when an app starts, and disable it when the app shuts down. Args: sender (MessageTarget): The sender of the event, (in this case the app). text: The text that has been pasted"
},
{
"ref":"textual.events.Paste.sender",
"url":40,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Paste.bubble",
"url":40,
"doc":""
},
{
"ref":"textual.events.Paste.verbosity",
"url":40,
"doc":""
},
{
"ref":"textual.events.Paste.system",
"url":40,
"doc":""
},
{
"ref":"textual.events.Paste.set_forwarded",
"url":33,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.Paste.can_replace",
"url":33,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Paste.prevent_default",
"url":33,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Paste.stop",
"url":33,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Paste.name",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Paste.time",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.features",
"url":41,
"doc":""
},
{
"ref":"textual.features.parse_features",
"url":41,
"doc":"Parse features env var Args: features (str): Comma separated feature flags Returns: frozenset[FeatureFlag]: A frozen set of known features.",
"func":1
},
{
"ref":"textual.cli",
"url":42,
"doc":""
},
{
"ref":"textual.screen",
"url":43,
"doc":""
},
{
"ref":"textual.screen.Screen",
"url":43,
"doc":"A widget for the root of the app."
},
{
"ref":"textual.screen.Screen.COMPONENT_CLASSES",
"url":43,
"doc":""
},
{
"ref":"textual.screen.Screen.CSS",
"url":43,
"doc":""
},
{
"ref":"textual.screen.Screen.dark",
"url":43,
"doc":"Reactive descriptor."
},
{
"ref":"textual.screen.Screen.is_transparent",
"url":43,
"doc":"Check if the background styles is not set. Returns: bool:  True if there is background color, otherwise  False ."
},
{
"ref":"textual.screen.Screen.update_timer",
"url":43,
"doc":"Timer used to perform updates."
},
{
"ref":"textual.screen.Screen.watch_dark",
"url":43,
"doc":"",
"func":1
},
{
"ref":"textual.screen.Screen.render",
"url":43,
"doc":"Get renderable for widget. Args: style (Styles): The Styles object for this Widget. Returns: RenderableType: Any renderable",
"func":1
},
{
"ref":"textual.screen.Screen.get_offset",
"url":43,
"doc":"Get the absolute offset of a given Widget. Args: widget (Widget): A widget Returns: Offset: The widget's offset relative to the top left of the terminal.",
"func":1
},
{
"ref":"textual.screen.Screen.get_widget_at",
"url":43,
"doc":"Get the widget at a given coordinate. Args: x (int): X Coordinate. y (int): Y Coordinate. Returns: tuple[Widget, Region]: Widget and screen region.",
"func":1
},
{
"ref":"textual.screen.Screen.get_style_at",
"url":43,
"doc":"Get the style under a given coordinate. Args: x (int): X Coordinate. y (int): Y Coordinate. Returns: Style: Rich Style object",
"func":1
},
{
"ref":"textual.screen.Screen.find_widget",
"url":43,
"doc":"Get the screen region of a Widget. Args: widget (Widget): A Widget within the composition. Returns: Region: Region relative to screen.",
"func":1
},
{
"ref":"textual.screen.Screen.on_idle",
"url":43,
"doc":"Called when there are no more events on the queue. Args: event (events.Idle): Idle event.",
"func":1
},
{
"ref":"textual.screen.Screen.on_invoke_callbacks",
"url":43,
"doc":"Handle PostScreenUpdate events, which are sent after the screen is updated",
"func":1
},
{
"ref":"textual.screen.Screen.handle_invoke_later",
"url":43,
"doc":"",
"func":1
},
{
"ref":"textual.screen.Screen.handle_update",
"url":43,
"doc":"",
"func":1
},
{
"ref":"textual.screen.Screen.handle_layout",
"url":43,
"doc":"",
"func":1
},
{
"ref":"textual.screen.Screen.on_resize",
"url":43,
"doc":"",
"func":1
},
{
"ref":"textual.screen.Screen.forward_event",
"url":43,
"doc":"",
"func":1
},
{
"ref":"textual.screen.Screen.can_focus",
"url":43,
"doc":""
},
{
"ref":"textual.screen.Screen.can_focus_children",
"url":43,
"doc":""
},
{
"ref":"textual.screen.Screen.virtual_size",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.screen.Screen.auto_width",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.screen.Screen.auto_height",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.screen.Screen.has_focus",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.screen.Screen.descendant_has_focus",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.screen.Screen.mouse_over",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.screen.Screen.scroll_x",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.screen.Screen.scroll_y",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.screen.Screen.scroll_target_x",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.screen.Screen.scroll_target_y",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.screen.Screen.show_vertical_scrollbar",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.screen.Screen.show_horizontal_scrollbar",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.screen.Screen.watch_show_horizontal_scrollbar",
"url":35,
"doc":"Watch function for show_horizontal_scrollbar attribute. Args: value (bool): Show horizontal scrollbar flag.",
"func":1
},
{
"ref":"textual.screen.Screen.watch_show_vertical_scrollbar",
"url":35,
"doc":"Watch function for show_vertical_scrollbar attribute. Args: value (bool): Show vertical scrollbar flag.",
"func":1
},
{
"ref":"textual.screen.Screen.compose",
"url":35,
"doc":"Yield child widgets for a container.",
"func":1
},
{
"ref":"textual.screen.Screen.on_register",
"url":35,
"doc":"Called when the instance is registered. Args: app (App): App instance.",
"func":1
},
{
"ref":"textual.screen.Screen.get_box_model",
"url":35,
"doc":"Process the box model for this widget. Args: container (Size): The size of the container widget (with a layout) viewport (Size): The viewport size. Returns: BoxModel: The size and margin for this widget.",
"func":1
},
{
"ref":"textual.screen.Screen.get_content_width",
"url":35,
"doc":"Gets the width of the content area. Args: container (Size): Size of the container (immediate parent) widget. viewport (Size): Size of the viewport. Returns: int: The optimal width of the content.",
"func":1
},
{
"ref":"textual.screen.Screen.get_content_height",
"url":35,
"doc":"Gets the height (number of lines) in the content area. Args: container (Size): Size of the container (immediate parent) widget. viewport (Size): Size of the viewport. width (int): Width of renderable. Returns: int: The height of the content.",
"func":1
},
{
"ref":"textual.screen.Screen.max_scroll_x",
"url":35,
"doc":"The maximum value of  scroll_x ."
},
{
"ref":"textual.screen.Screen.max_scroll_y",
"url":35,
"doc":"The maximum value of  scroll_y ."
},
{
"ref":"textual.screen.Screen.vertical_scrollbar",
"url":35,
"doc":"Get a vertical scrollbar (create if necessary) Returns: ScrollBar: ScrollBar Widget."
},
{
"ref":"textual.screen.Screen.horizontal_scrollbar",
"url":35,
"doc":"Get a vertical scrollbar (create if necessary) Returns: ScrollBar: ScrollBar Widget."
},
{
"ref":"textual.screen.Screen.scrollbars_enabled",
"url":35,
"doc":"A tuple of booleans that indicate if scrollbars are enabled. Returns: tuple[bool, bool]: A tuple of ( ,  )"
},
{
"ref":"textual.screen.Screen.scrollbar_size_vertical",
"url":35,
"doc":"Get the width used by the  vertical scrollbar."
},
{
"ref":"textual.screen.Screen.scrollbar_size_horizontal",
"url":35,
"doc":"Get the height used by the  horizontal scrollbar."
},
{
"ref":"textual.screen.Screen.gutter",
"url":35,
"doc":"Spacing for padding / border / scrollbars."
},
{
"ref":"textual.screen.Screen.size",
"url":35,
"doc":"The size of the content area."
},
{
"ref":"textual.screen.Screen.outer_size",
"url":35,
"doc":"The size of the widget (including padding and border)."
},
{
"ref":"textual.screen.Screen.container_size",
"url":35,
"doc":"The size of the container (parent widget)."
},
{
"ref":"textual.screen.Screen.content_region",
"url":35,
"doc":"Gets an absolute region containing the content (minus padding and border)."
},
{
"ref":"textual.screen.Screen.content_offset",
"url":35,
"doc":"An offset from the Widget origin where the content begins."
},
{
"ref":"textual.screen.Screen.region",
"url":35,
"doc":"The region occupied by this widget, relative to the Screen."
},
{
"ref":"textual.screen.Screen.virtual_region",
"url":35,
"doc":"The widget region relative to it's container. Which may not be visible, depending on scroll offset."
},
{
"ref":"textual.screen.Screen.window_region",
"url":35,
"doc":"The region within the scrollable area that is currently visible. Returns: Region: New region."
},
{
"ref":"textual.screen.Screen.virtual_region_with_margin",
"url":35,
"doc":"The widget region relative to its container ( including margin ), which may not be visible, depending on the scroll offset. Returns: Region: The virtual region of the Widget, inclusive of its margin."
},
{
"ref":"textual.screen.Screen.focusable_children",
"url":35,
"doc":"Get the children which may be focused."
},
{
"ref":"textual.screen.Screen.console",
"url":35,
"doc":"Get the current console."
},
{
"ref":"textual.screen.Screen.layout",
"url":35,
"doc":"Get the layout object if set in styles, or a default layout."
},
{
"ref":"textual.screen.Screen.is_container",
"url":35,
"doc":"Check if this widget is a container (contains other widgets). Returns: bool: True if this widget is a container."
},
{
"ref":"textual.screen.Screen.is_scrollable",
"url":35,
"doc":"Check if this Widget may be scrolled. Returns: bool: True if this widget may be scrolled."
},
{
"ref":"textual.screen.Screen.layer",
"url":35,
"doc":"Get the name of this widgets layer."
},
{
"ref":"textual.screen.Screen.layers",
"url":35,
"doc":"Layers of from parent. Returns: tuple[str,  .]: Tuple of layer names."
},
{
"ref":"textual.screen.Screen.scroll_to",
"url":35,
"doc":"Scroll to a given (absolute) coordinate, optionally animating. Args: x (int | None, optional): X coordinate (column) to scroll to, or  None for no change. Defaults to None. y (int | None, optional): Y coordinate (row) to scroll to, or  None for no change. Defaults to None. animate (bool, optional): Animate to new scroll position. Defaults to False. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.screen.Screen.scroll_relative",
"url":35,
"doc":"Scroll relative to current position. Args: x (int | None, optional): X distance (columns) to scroll, or  None for no change. Defaults to None. y (int | None, optional): Y distance (rows) to scroll, or  None for no change. Defaults to None. animate (bool, optional): Animate to new scroll position. Defaults to False. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.screen.Screen.scroll_to_widget",
"url":35,
"doc":"Scroll scrolling to bring a widget in to view. Args: widget (Widget): A descendant widget. animate (bool, optional): True to animate, or False to jump. Defaults to True. Returns: bool: True if any scrolling has occurred in any descendant, otherwise False.",
"func":1
},
{
"ref":"textual.screen.Screen.scroll_to_region",
"url":35,
"doc":"Scrolls a given region in to view, if required. This method will scroll the least distance required to move  region fully within the scrollable area. Args: region (Region): A region that should be visible. animate (bool, optional): Enable animation. Defaults to True. spacing (Spacing): Space to subtract from the window region. Returns: Offset: The distance that was scrolled.",
"func":1
},
{
"ref":"textual.screen.Screen.get_pseudo_classes",
"url":35,
"doc":"Pseudo classes for a widget",
"func":1
},
{
"ref":"textual.screen.Screen.watch_mouse_over",
"url":35,
"doc":"Update from CSS if mouse over state changes.",
"func":1
},
{
"ref":"textual.screen.Screen.watch_has_focus",
"url":35,
"doc":"Update from CSS if has focus state changes.",
"func":1
},
{
"ref":"textual.screen.Screen.render_line",
"url":35,
"doc":"Render a line of content. Args: y (int): Y Coordinate of line. Returns: list[Segment]: A rendered line.",
"func":1
},
{
"ref":"textual.screen.Screen.render_lines",
"url":35,
"doc":"Render the widget in to lines. Args: crop (Region): Region within visible area to render. Returns: Lines: A list of list of segments.",
"func":1
},
{
"ref":"textual.screen.Screen.call_later",
"url":35,
"doc":"Schedule a callback to run after all messages are processed and the screen has been refreshed. Args: callback (Callable): A callable.",
"func":1
},
{
"ref":"textual.screen.Screen.refresh",
"url":35,
"doc":"Initiate a refresh of the widget. This method sets an internal flag to perform a refresh, which will be done on the next idle event. Only one refresh will be done even if this method is called multiple times. Args: repaint (bool, optional): Repaint the widget (will call render() again). Defaults to True. layout (bool, optional): Also layout widgets in the view. Defaults to False.",
"func":1
},
{
"ref":"textual.screen.Screen.focus",
"url":35,
"doc":"Give input focus to this widget.",
"func":1
},
{
"ref":"textual.screen.Screen.capture_mouse",
"url":35,
"doc":"Capture (or release) the mouse. When captured, all mouse coordinates will go to this widget even when the pointer is not directly over the widget. Args: capture (bool, optional): True to capture or False to release. Defaults to True.",
"func":1
},
{
"ref":"textual.screen.Screen.release_mouse",
"url":35,
"doc":"Release the mouse. Mouse events will only be sent when the mouse is over the widget.",
"func":1
},
{
"ref":"textual.screen.Screen.css",
"url":36,
"doc":"Gets the CSS for this class and inherited from bases. Returns: list[tuple[str, str : a list of tuples containing (PATH, SOURCE) for this and inherited from base classes."
},
{
"ref":"textual.screen.Screen.parent",
"url":36,
"doc":"Get the parent node. Returns: DOMNode | None: The node which is the direct parent of this node."
},
{
"ref":"textual.screen.Screen.screen",
"url":36,
"doc":"Get the screen that this node is contained within. Note that this may not be the currently active screen within the app."
},
{
"ref":"textual.screen.Screen.id",
"url":36,
"doc":"The ID of this node, or None if the node has no ID. Returns: (str | None): A Node ID or None."
},
{
"ref":"textual.screen.Screen.css_identifier",
"url":36,
"doc":"A CSS selector that identifies this DOM node."
},
{
"ref":"textual.screen.Screen.css_identifier_styled",
"url":36,
"doc":"A stylized CSS identifier."
},
{
"ref":"textual.screen.Screen.pseudo_classes",
"url":36,
"doc":"Get a set of all pseudo classes"
},
{
"ref":"textual.screen.Screen.css_path_nodes",
"url":36,
"doc":"A list of nodes from the root to this node, forming a \"path\". Returns: list[DOMNode]: List of Nodes, starting with the root and ending with this node."
},
{
"ref":"textual.screen.Screen.display",
"url":36,
"doc":"Returns:  True if this DOMNode is displayed ( display != \"none\" ),  False otherwise."
},
{
"ref":"textual.screen.Screen.tree",
"url":36,
"doc":"Get a Rich tree object which will recursively render the structure of the node tree. Returns: Tree: A Rich object which may be printed."
},
{
"ref":"textual.screen.Screen.text_style",
"url":36,
"doc":"Get the text style object. A widget's style is influenced by its parent. for instance if a parent is bold, then the child will also be bold. Returns: Style: Rich Style object."
},
{
"ref":"textual.screen.Screen.rich_style",
"url":36,
"doc":"Get a Rich Style object for this DOMNode."
},
{
"ref":"textual.screen.Screen.background_colors",
"url":36,
"doc":"Get the background color and the color of the parent's background. Returns: tuple[Color, Color]: Tuple of (base background, background)"
},
{
"ref":"textual.screen.Screen.colors",
"url":36,
"doc":"Gets the Widgets foreground and background colors, and its parent's (base) colors. Returns: tuple[Color, Color, Color, Color]: Tuple of (base background, base color, background, color)"
},
{
"ref":"textual.screen.Screen.ancestors",
"url":36,
"doc":"Get a list of Nodes by tracing ancestors all the way back to App."
},
{
"ref":"textual.screen.Screen.displayed_children",
"url":36,
"doc":"The children which don't have display: none set."
},
{
"ref":"textual.screen.Screen.reset_styles",
"url":36,
"doc":"Reset styles back to their initial state",
"func":1
},
{
"ref":"textual.screen.Screen.add_child",
"url":36,
"doc":"Add a new child node. Args: node (DOMNode): A DOM node.",
"func":1
},
{
"ref":"textual.screen.Screen.add_children",
"url":36,
"doc":"Add multiple children to this node. Args:  nodes (DOMNode): Positional args should be new DOM nodes.  named_nodes (DOMNode): Keyword args will be assigned the argument name as an ID.",
"func":1
},
{
"ref":"textual.screen.Screen.walk_children",
"url":36,
"doc":"Generate all descendants of this node. Args: with_self (bool, optional): Also include self in the results. Defaults to True.",
"func":1
},
{
"ref":"textual.screen.Screen.get_child",
"url":36,
"doc":"Return the first child (immediate descendent) of this node with the given ID. Args: id (str): The ID of the child. Returns: DOMNode: The first child of this node with the ID. Raises: NoMatchingNodesError: if no children could be found for this ID",
"func":1
},
{
"ref":"textual.screen.Screen.query",
"url":36,
"doc":"Get a DOM query. Args: selector (str, optional): A CSS selector or  None for all nodes. Defaults to None. Returns: DOMQuery: A query object.",
"func":1
},
{
"ref":"textual.screen.Screen.set_styles",
"url":36,
"doc":"Set custom styles on this object.",
"func":1
},
{
"ref":"textual.screen.Screen.has_class",
"url":36,
"doc":"Check if the Node has all the given class names. Args:  class_names (str): CSS class names to check. Returns: bool:  True if the node has all the given class names, otherwise  False .",
"func":1
},
{
"ref":"textual.screen.Screen.add_class",
"url":36,
"doc":"Add class names to this Node. Args:  class_names (str): CSS class names to add.",
"func":1
},
{
"ref":"textual.screen.Screen.remove_class",
"url":36,
"doc":"Remove class names from this Node. Args:  class_names (str): CSS class names to remove.",
"func":1
},
{
"ref":"textual.screen.Screen.toggle_class",
"url":36,
"doc":"Toggle class names on this Node. Args:  class_names (str): CSS class names to toggle.",
"func":1
},
{
"ref":"textual.screen.Screen.has_pseudo_class",
"url":36,
"doc":"Check for pseudo class (such as hover, focus etc)",
"func":1
},
{
"ref":"textual.screen.Screen.app",
"url":20,
"doc":"Get the current app. Raises: NoActiveAppError: if no active app could be found for the current asyncio context"
},
{
"ref":"textual.screen.Screen.disable_messages",
"url":20,
"doc":"Disable message types from being processed.",
"func":1
},
{
"ref":"textual.screen.Screen.enable_messages",
"url":20,
"doc":"Enable processing of messages types.",
"func":1
},
{
"ref":"textual.screen.Screen.get_message",
"url":20,
"doc":"Get the next event on the queue, or None if queue is closed. Returns: Optional[Event]: Event object or None.",
"func":1
},
{
"ref":"textual.screen.Screen.peek_message",
"url":20,
"doc":"Peek the message at the head of the queue (does not remove it from the queue), or return None if the queue is empty. Returns: Optional[Message]: The message or None.",
"func":1
},
{
"ref":"textual.screen.Screen.close_messages_no_wait",
"url":20,
"doc":"Request the message queue to exit.",
"func":1
},
{
"ref":"textual.screen.Screen.close_messages",
"url":20,
"doc":"Close message queue, and optionally wait for queue to finish processing.",
"func":1
},
{
"ref":"textual.screen.Screen.check_idle",
"url":20,
"doc":"Prompt the message pump to call idle if the queue is empty.",
"func":1
},
{
"ref":"textual.screen.Screen.post_priority_message",
"url":20,
"doc":"Post a \"priority\" messages which will be processes prior to regular messages. Note that you should rarely need this in a regular app. It exists primarily to allow timer messages to skip the queue, so that they can be more regular. Args: message (Message): A message. Returns: bool: True if the messages was processed.",
"func":1
},
{
"ref":"textual.screen.Screen.dispatch_key",
"url":20,
"doc":"Dispatch a key event to method. This method will call the method named 'key_ ' if it exists. Args: event (events.Key): A key event.",
"func":1
},
{
"ref":"textual.design",
"url":44,
"doc":""
},
{
"ref":"textual.design.ColorSystem",
"url":44,
"doc":"Defines a standard set of colors and variations for building a UI. Primary is the main theme color Secondary is a second theme color"
},
{
"ref":"textual.design.ColorSystem.COLOR_NAMES",
"url":44,
"doc":""
},
{
"ref":"textual.design.ColorSystem.shades",
"url":44,
"doc":"The names of the colors and derived shades."
},
{
"ref":"textual.design.ColorSystem.generate",
"url":44,
"doc":"Generate a mapping of color name on to a CSS color. Args: dark (bool, optional): Enable dark mode. Defaults to False. luminosity_spread (float, optional): Amount of luminosity to subtract and add to generate shades. Defaults to 0.2. text_alpha (float, optional): Alpha value for text. Defaults to 0.9. Returns: dict[str, str]: A mapping of color name on to a CSS-style encoded color",
"func":1
},
{
"ref":"textual.design.show_design",
"url":44,
"doc":"Generate a renderable to show color systems. Args: light (ColorSystem): Light ColorSystem. dark (ColorSystem): Dark ColorSystem Returns: Table: Table showing all colors.",
"func":1
},
{
"ref":"textual.keys",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys",
"url":45,
"doc":"List of keys for use in key bindings. Note that this is an \"StrEnum\", all values can be compared against strings."
},
{
"ref":"textual.keys.Keys.value",
"url":45,
"doc":"The value of the Enum member."
},
{
"ref":"textual.keys.Keys.Space",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.Escape",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftEscape",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.Return",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlAt",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlA",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlB",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlC",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlD",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlE",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlG",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlH",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlI",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlJ",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlK",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlL",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlM",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlN",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlO",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlP",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlQ",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlR",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlS",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlT",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlU",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlV",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlW",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlX",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlY",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlZ",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.Control1",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.Control2",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.Control3",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.Control4",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.Control5",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.Control6",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.Control7",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.Control8",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.Control9",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.Control0",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShift1",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShift2",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShift3",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShift4",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShift5",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShift6",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShift7",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShift8",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShift9",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShift0",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlBackslash",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlSquareClose",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlCircumflex",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlUnderscore",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.Left",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.Right",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.Up",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.Down",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.Home",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.End",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.Insert",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.Delete",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.PageUp",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.PageDown",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlLeft",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlRight",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlUp",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlDown",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlHome",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlEnd",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlInsert",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlDelete",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlPageUp",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlPageDown",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftLeft",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftRight",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftUp",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftDown",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftHome",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftEnd",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftInsert",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftDelete",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftPageUp",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftPageDown",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShiftLeft",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShiftRight",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShiftUp",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShiftDown",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShiftHome",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShiftEnd",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShiftInsert",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShiftDelete",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShiftPageUp",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShiftPageDown",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.BackTab",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.F1",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.F2",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.F3",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.F4",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.F5",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.F6",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.F7",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.F8",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.F9",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.F10",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.F11",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.F12",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.F13",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.F14",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.F15",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.F16",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.F17",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.F18",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.F19",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.F20",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.F21",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.F22",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.F23",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.F24",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF1",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF2",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF3",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF4",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF5",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF6",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF7",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF8",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF9",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF10",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF11",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF12",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF13",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF14",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF15",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF16",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF17",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF18",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF19",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF20",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF21",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF22",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF23",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF24",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.Any",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ScrollUp",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ScrollDown",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.CPRResponse",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.Vt100MouseEvent",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.WindowsMouseEvent",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.Ignore",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlSpace",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.Tab",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.Enter",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.Backspace",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftControlLeft",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftControlRight",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftControlHome",
"url":45,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftControlEnd",
"url":45,
"doc":""
},
{
"ref":"textual.draw",
"url":46,
"doc":""
},
{
"ref":"textual.draw.DrawStyle",
"url":46,
"doc":"An enumeration."
},
{
"ref":"textual.draw.DrawStyle.NONE",
"url":46,
"doc":""
},
{
"ref":"textual.draw.DrawStyle.ASCII",
"url":46,
"doc":""
},
{
"ref":"textual.draw.DrawStyle.SQUARE",
"url":46,
"doc":""
},
{
"ref":"textual.draw.DrawStyle.HEAVY",
"url":46,
"doc":""
},
{
"ref":"textual.draw.DrawStyle.ROUNDED",
"url":46,
"doc":""
},
{
"ref":"textual.draw.DrawStyle.DOUBLE",
"url":46,
"doc":""
},
{
"ref":"textual.file_monitor",
"url":47,
"doc":""
},
{
"ref":"textual.file_monitor.FileMonitor",
"url":47,
"doc":""
},
{
"ref":"textual.file_monitor.FileMonitor.check",
"url":47,
"doc":"",
"func":1
},
{
"ref":"textual.file_monitor.FileMonitor.on_change",
"url":47,
"doc":"Called when file changes.",
"func":1
},
{
"ref":"textual.binding",
"url":48,
"doc":""
},
{
"ref":"textual.binding.NoBinding",
"url":48,
"doc":"A binding was not found."
},
{
"ref":"textual.binding.Binding",
"url":48,
"doc":"Binding(key: 'str', action: 'str', description: 'str', show: 'bool' = False, key_display: 'str | None' = None, allow_forward: 'bool' = True)"
},
{
"ref":"textual.binding.Binding.key",
"url":48,
"doc":""
},
{
"ref":"textual.binding.Binding.action",
"url":48,
"doc":""
},
{
"ref":"textual.binding.Binding.description",
"url":48,
"doc":""
},
{
"ref":"textual.binding.Binding.show",
"url":48,
"doc":""
},
{
"ref":"textual.binding.Binding.key_display",
"url":48,
"doc":""
},
{
"ref":"textual.binding.Binding.allow_forward",
"url":48,
"doc":""
},
{
"ref":"textual.binding.Bindings",
"url":48,
"doc":"Manage a set of bindings."
},
{
"ref":"textual.binding.Bindings.shown_keys",
"url":48,
"doc":""
},
{
"ref":"textual.binding.Bindings.bind",
"url":48,
"doc":"",
"func":1
},
{
"ref":"textual.binding.Bindings.get_key",
"url":48,
"doc":"",
"func":1
},
{
"ref":"textual.binding.Bindings.allow_forward",
"url":48,
"doc":"",
"func":1
},
{
"ref":"textual.binding.BindingStack",
"url":48,
"doc":"Manage a stack of bindings."
},
{
"ref":"textual.binding.BindingStack.push",
"url":48,
"doc":"",
"func":1
},
{
"ref":"textual.binding.BindingStack.pop",
"url":48,
"doc":"",
"func":1
},
{
"ref":"textual.binding.BindingStack.get_key",
"url":48,
"doc":"",
"func":1
},
{
"ref":"textual.errors",
"url":49,
"doc":""
},
{
"ref":"textual.errors.TextualError",
"url":49,
"doc":"Base class for Textual errors."
},
{
"ref":"textual.errors.NoWidget",
"url":49,
"doc":"Specified widget was not found."
},
{
"ref":"textual.layout",
"url":50,
"doc":""
},
{
"ref":"textual.layout.Vertical",
"url":50,
"doc":"A container widget to align children vertically."
},
{
"ref":"textual.layout.Vertical.COMPONENT_CLASSES",
"url":50,
"doc":""
},
{
"ref":"textual.layout.Vertical.CSS",
"url":50,
"doc":""
},
{
"ref":"textual.layout.Vertical.can_focus",
"url":50,
"doc":""
},
{
"ref":"textual.layout.Vertical.can_focus_children",
"url":50,
"doc":""
},
{
"ref":"textual.layout.Vertical.virtual_size",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.layout.Vertical.auto_width",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.layout.Vertical.auto_height",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.layout.Vertical.has_focus",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.layout.Vertical.descendant_has_focus",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.layout.Vertical.mouse_over",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.layout.Vertical.scroll_x",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.layout.Vertical.scroll_y",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.layout.Vertical.scroll_target_x",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.layout.Vertical.scroll_target_y",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.layout.Vertical.show_vertical_scrollbar",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.layout.Vertical.show_horizontal_scrollbar",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.layout.Vertical.watch_show_horizontal_scrollbar",
"url":35,
"doc":"Watch function for show_horizontal_scrollbar attribute. Args: value (bool): Show horizontal scrollbar flag.",
"func":1
},
{
"ref":"textual.layout.Vertical.watch_show_vertical_scrollbar",
"url":35,
"doc":"Watch function for show_vertical_scrollbar attribute. Args: value (bool): Show vertical scrollbar flag.",
"func":1
},
{
"ref":"textual.layout.Vertical.compose",
"url":35,
"doc":"Yield child widgets for a container.",
"func":1
},
{
"ref":"textual.layout.Vertical.on_register",
"url":35,
"doc":"Called when the instance is registered. Args: app (App): App instance.",
"func":1
},
{
"ref":"textual.layout.Vertical.get_box_model",
"url":35,
"doc":"Process the box model for this widget. Args: container (Size): The size of the container widget (with a layout) viewport (Size): The viewport size. Returns: BoxModel: The size and margin for this widget.",
"func":1
},
{
"ref":"textual.layout.Vertical.get_content_width",
"url":35,
"doc":"Gets the width of the content area. Args: container (Size): Size of the container (immediate parent) widget. viewport (Size): Size of the viewport. Returns: int: The optimal width of the content.",
"func":1
},
{
"ref":"textual.layout.Vertical.get_content_height",
"url":35,
"doc":"Gets the height (number of lines) in the content area. Args: container (Size): Size of the container (immediate parent) widget. viewport (Size): Size of the viewport. width (int): Width of renderable. Returns: int: The height of the content.",
"func":1
},
{
"ref":"textual.layout.Vertical.max_scroll_x",
"url":35,
"doc":"The maximum value of  scroll_x ."
},
{
"ref":"textual.layout.Vertical.max_scroll_y",
"url":35,
"doc":"The maximum value of  scroll_y ."
},
{
"ref":"textual.layout.Vertical.vertical_scrollbar",
"url":35,
"doc":"Get a vertical scrollbar (create if necessary) Returns: ScrollBar: ScrollBar Widget."
},
{
"ref":"textual.layout.Vertical.horizontal_scrollbar",
"url":35,
"doc":"Get a vertical scrollbar (create if necessary) Returns: ScrollBar: ScrollBar Widget."
},
{
"ref":"textual.layout.Vertical.scrollbars_enabled",
"url":35,
"doc":"A tuple of booleans that indicate if scrollbars are enabled. Returns: tuple[bool, bool]: A tuple of ( ,  )"
},
{
"ref":"textual.layout.Vertical.scrollbar_size_vertical",
"url":35,
"doc":"Get the width used by the  vertical scrollbar."
},
{
"ref":"textual.layout.Vertical.scrollbar_size_horizontal",
"url":35,
"doc":"Get the height used by the  horizontal scrollbar."
},
{
"ref":"textual.layout.Vertical.gutter",
"url":35,
"doc":"Spacing for padding / border / scrollbars."
},
{
"ref":"textual.layout.Vertical.size",
"url":35,
"doc":"The size of the content area."
},
{
"ref":"textual.layout.Vertical.outer_size",
"url":35,
"doc":"The size of the widget (including padding and border)."
},
{
"ref":"textual.layout.Vertical.container_size",
"url":35,
"doc":"The size of the container (parent widget)."
},
{
"ref":"textual.layout.Vertical.content_region",
"url":35,
"doc":"Gets an absolute region containing the content (minus padding and border)."
},
{
"ref":"textual.layout.Vertical.content_offset",
"url":35,
"doc":"An offset from the Widget origin where the content begins."
},
{
"ref":"textual.layout.Vertical.region",
"url":35,
"doc":"The region occupied by this widget, relative to the Screen."
},
{
"ref":"textual.layout.Vertical.virtual_region",
"url":35,
"doc":"The widget region relative to it's container. Which may not be visible, depending on scroll offset."
},
{
"ref":"textual.layout.Vertical.window_region",
"url":35,
"doc":"The region within the scrollable area that is currently visible. Returns: Region: New region."
},
{
"ref":"textual.layout.Vertical.virtual_region_with_margin",
"url":35,
"doc":"The widget region relative to its container ( including margin ), which may not be visible, depending on the scroll offset. Returns: Region: The virtual region of the Widget, inclusive of its margin."
},
{
"ref":"textual.layout.Vertical.focusable_children",
"url":35,
"doc":"Get the children which may be focused."
},
{
"ref":"textual.layout.Vertical.is_transparent",
"url":35,
"doc":"Check if the background styles is not set. Returns: bool:  True if there is background color, otherwise  False ."
},
{
"ref":"textual.layout.Vertical.console",
"url":35,
"doc":"Get the current console."
},
{
"ref":"textual.layout.Vertical.layout",
"url":35,
"doc":"Get the layout object if set in styles, or a default layout."
},
{
"ref":"textual.layout.Vertical.is_container",
"url":35,
"doc":"Check if this widget is a container (contains other widgets). Returns: bool: True if this widget is a container."
},
{
"ref":"textual.layout.Vertical.is_scrollable",
"url":35,
"doc":"Check if this Widget may be scrolled. Returns: bool: True if this widget may be scrolled."
},
{
"ref":"textual.layout.Vertical.layer",
"url":35,
"doc":"Get the name of this widgets layer."
},
{
"ref":"textual.layout.Vertical.layers",
"url":35,
"doc":"Layers of from parent. Returns: tuple[str,  .]: Tuple of layer names."
},
{
"ref":"textual.layout.Vertical.scroll_to",
"url":35,
"doc":"Scroll to a given (absolute) coordinate, optionally animating. Args: x (int | None, optional): X coordinate (column) to scroll to, or  None for no change. Defaults to None. y (int | None, optional): Y coordinate (row) to scroll to, or  None for no change. Defaults to None. animate (bool, optional): Animate to new scroll position. Defaults to False. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.layout.Vertical.scroll_relative",
"url":35,
"doc":"Scroll relative to current position. Args: x (int | None, optional): X distance (columns) to scroll, or  None for no change. Defaults to None. y (int | None, optional): Y distance (rows) to scroll, or  None for no change. Defaults to None. animate (bool, optional): Animate to new scroll position. Defaults to False. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.layout.Vertical.scroll_to_widget",
"url":35,
"doc":"Scroll scrolling to bring a widget in to view. Args: widget (Widget): A descendant widget. animate (bool, optional): True to animate, or False to jump. Defaults to True. Returns: bool: True if any scrolling has occurred in any descendant, otherwise False.",
"func":1
},
{
"ref":"textual.layout.Vertical.scroll_to_region",
"url":35,
"doc":"Scrolls a given region in to view, if required. This method will scroll the least distance required to move  region fully within the scrollable area. Args: region (Region): A region that should be visible. animate (bool, optional): Enable animation. Defaults to True. spacing (Spacing): Space to subtract from the window region. Returns: Offset: The distance that was scrolled.",
"func":1
},
{
"ref":"textual.layout.Vertical.get_pseudo_classes",
"url":35,
"doc":"Pseudo classes for a widget",
"func":1
},
{
"ref":"textual.layout.Vertical.watch_mouse_over",
"url":35,
"doc":"Update from CSS if mouse over state changes.",
"func":1
},
{
"ref":"textual.layout.Vertical.watch_has_focus",
"url":35,
"doc":"Update from CSS if has focus state changes.",
"func":1
},
{
"ref":"textual.layout.Vertical.render_line",
"url":35,
"doc":"Render a line of content. Args: y (int): Y Coordinate of line. Returns: list[Segment]: A rendered line.",
"func":1
},
{
"ref":"textual.layout.Vertical.render_lines",
"url":35,
"doc":"Render the widget in to lines. Args: crop (Region): Region within visible area to render. Returns: Lines: A list of list of segments.",
"func":1
},
{
"ref":"textual.layout.Vertical.call_later",
"url":35,
"doc":"Schedule a callback to run after all messages are processed and the screen has been refreshed. Args: callback (Callable): A callable.",
"func":1
},
{
"ref":"textual.layout.Vertical.refresh",
"url":35,
"doc":"Initiate a refresh of the widget. This method sets an internal flag to perform a refresh, which will be done on the next idle event. Only one refresh will be done even if this method is called multiple times. Args: repaint (bool, optional): Repaint the widget (will call render() again). Defaults to True. layout (bool, optional): Also layout widgets in the view. Defaults to False.",
"func":1
},
{
"ref":"textual.layout.Vertical.render",
"url":35,
"doc":"Get renderable for widget. Args: style (Styles): The Styles object for this Widget. Returns: RenderableType: Any renderable",
"func":1
},
{
"ref":"textual.layout.Vertical.on_idle",
"url":35,
"doc":"Called when there are no more events on the queue. Args: event (events.Idle): Idle event.",
"func":1
},
{
"ref":"textual.layout.Vertical.focus",
"url":35,
"doc":"Give input focus to this widget.",
"func":1
},
{
"ref":"textual.layout.Vertical.capture_mouse",
"url":35,
"doc":"Capture (or release) the mouse. When captured, all mouse coordinates will go to this widget even when the pointer is not directly over the widget. Args: capture (bool, optional): True to capture or False to release. Defaults to True.",
"func":1
},
{
"ref":"textual.layout.Vertical.release_mouse",
"url":35,
"doc":"Release the mouse. Mouse events will only be sent when the mouse is over the widget.",
"func":1
},
{
"ref":"textual.layout.Vertical.css",
"url":36,
"doc":"Gets the CSS for this class and inherited from bases. Returns: list[tuple[str, str : a list of tuples containing (PATH, SOURCE) for this and inherited from base classes."
},
{
"ref":"textual.layout.Vertical.parent",
"url":36,
"doc":"Get the parent node. Returns: DOMNode | None: The node which is the direct parent of this node."
},
{
"ref":"textual.layout.Vertical.screen",
"url":36,
"doc":"Get the screen that this node is contained within. Note that this may not be the currently active screen within the app."
},
{
"ref":"textual.layout.Vertical.id",
"url":36,
"doc":"The ID of this node, or None if the node has no ID. Returns: (str | None): A Node ID or None."
},
{
"ref":"textual.layout.Vertical.css_identifier",
"url":36,
"doc":"A CSS selector that identifies this DOM node."
},
{
"ref":"textual.layout.Vertical.css_identifier_styled",
"url":36,
"doc":"A stylized CSS identifier."
},
{
"ref":"textual.layout.Vertical.pseudo_classes",
"url":36,
"doc":"Get a set of all pseudo classes"
},
{
"ref":"textual.layout.Vertical.css_path_nodes",
"url":36,
"doc":"A list of nodes from the root to this node, forming a \"path\". Returns: list[DOMNode]: List of Nodes, starting with the root and ending with this node."
},
{
"ref":"textual.layout.Vertical.display",
"url":36,
"doc":"Returns:  True if this DOMNode is displayed ( display != \"none\" ),  False otherwise."
},
{
"ref":"textual.layout.Vertical.tree",
"url":36,
"doc":"Get a Rich tree object which will recursively render the structure of the node tree. Returns: Tree: A Rich object which may be printed."
},
{
"ref":"textual.layout.Vertical.text_style",
"url":36,
"doc":"Get the text style object. A widget's style is influenced by its parent. for instance if a parent is bold, then the child will also be bold. Returns: Style: Rich Style object."
},
{
"ref":"textual.layout.Vertical.rich_style",
"url":36,
"doc":"Get a Rich Style object for this DOMNode."
},
{
"ref":"textual.layout.Vertical.background_colors",
"url":36,
"doc":"Get the background color and the color of the parent's background. Returns: tuple[Color, Color]: Tuple of (base background, background)"
},
{
"ref":"textual.layout.Vertical.colors",
"url":36,
"doc":"Gets the Widgets foreground and background colors, and its parent's (base) colors. Returns: tuple[Color, Color, Color, Color]: Tuple of (base background, base color, background, color)"
},
{
"ref":"textual.layout.Vertical.ancestors",
"url":36,
"doc":"Get a list of Nodes by tracing ancestors all the way back to App."
},
{
"ref":"textual.layout.Vertical.displayed_children",
"url":36,
"doc":"The children which don't have display: none set."
},
{
"ref":"textual.layout.Vertical.reset_styles",
"url":36,
"doc":"Reset styles back to their initial state",
"func":1
},
{
"ref":"textual.layout.Vertical.add_child",
"url":36,
"doc":"Add a new child node. Args: node (DOMNode): A DOM node.",
"func":1
},
{
"ref":"textual.layout.Vertical.add_children",
"url":36,
"doc":"Add multiple children to this node. Args:  nodes (DOMNode): Positional args should be new DOM nodes.  named_nodes (DOMNode): Keyword args will be assigned the argument name as an ID.",
"func":1
},
{
"ref":"textual.layout.Vertical.walk_children",
"url":36,
"doc":"Generate all descendants of this node. Args: with_self (bool, optional): Also include self in the results. Defaults to True.",
"func":1
},
{
"ref":"textual.layout.Vertical.get_child",
"url":36,
"doc":"Return the first child (immediate descendent) of this node with the given ID. Args: id (str): The ID of the child. Returns: DOMNode: The first child of this node with the ID. Raises: NoMatchingNodesError: if no children could be found for this ID",
"func":1
},
{
"ref":"textual.layout.Vertical.query",
"url":36,
"doc":"Get a DOM query. Args: selector (str, optional): A CSS selector or  None for all nodes. Defaults to None. Returns: DOMQuery: A query object.",
"func":1
},
{
"ref":"textual.layout.Vertical.set_styles",
"url":36,
"doc":"Set custom styles on this object.",
"func":1
},
{
"ref":"textual.layout.Vertical.has_class",
"url":36,
"doc":"Check if the Node has all the given class names. Args:  class_names (str): CSS class names to check. Returns: bool:  True if the node has all the given class names, otherwise  False .",
"func":1
},
{
"ref":"textual.layout.Vertical.add_class",
"url":36,
"doc":"Add class names to this Node. Args:  class_names (str): CSS class names to add.",
"func":1
},
{
"ref":"textual.layout.Vertical.remove_class",
"url":36,
"doc":"Remove class names from this Node. Args:  class_names (str): CSS class names to remove.",
"func":1
},
{
"ref":"textual.layout.Vertical.toggle_class",
"url":36,
"doc":"Toggle class names on this Node. Args:  class_names (str): CSS class names to toggle.",
"func":1
},
{
"ref":"textual.layout.Vertical.has_pseudo_class",
"url":36,
"doc":"Check for pseudo class (such as hover, focus etc)",
"func":1
},
{
"ref":"textual.layout.Vertical.app",
"url":20,
"doc":"Get the current app. Raises: NoActiveAppError: if no active app could be found for the current asyncio context"
},
{
"ref":"textual.layout.Vertical.disable_messages",
"url":20,
"doc":"Disable message types from being processed.",
"func":1
},
{
"ref":"textual.layout.Vertical.enable_messages",
"url":20,
"doc":"Enable processing of messages types.",
"func":1
},
{
"ref":"textual.layout.Vertical.get_message",
"url":20,
"doc":"Get the next event on the queue, or None if queue is closed. Returns: Optional[Event]: Event object or None.",
"func":1
},
{
"ref":"textual.layout.Vertical.peek_message",
"url":20,
"doc":"Peek the message at the head of the queue (does not remove it from the queue), or return None if the queue is empty. Returns: Optional[Message]: The message or None.",
"func":1
},
{
"ref":"textual.layout.Vertical.close_messages_no_wait",
"url":20,
"doc":"Request the message queue to exit.",
"func":1
},
{
"ref":"textual.layout.Vertical.close_messages",
"url":20,
"doc":"Close message queue, and optionally wait for queue to finish processing.",
"func":1
},
{
"ref":"textual.layout.Vertical.check_idle",
"url":20,
"doc":"Prompt the message pump to call idle if the queue is empty.",
"func":1
},
{
"ref":"textual.layout.Vertical.post_priority_message",
"url":20,
"doc":"Post a \"priority\" messages which will be processes prior to regular messages. Note that you should rarely need this in a regular app. It exists primarily to allow timer messages to skip the queue, so that they can be more regular. Args: message (Message): A message. Returns: bool: True if the messages was processed.",
"func":1
},
{
"ref":"textual.layout.Vertical.dispatch_key",
"url":20,
"doc":"Dispatch a key event to method. This method will call the method named 'key_ ' if it exists. Args: event (events.Key): A key event.",
"func":1
},
{
"ref":"textual.layout.Horizontal",
"url":50,
"doc":"A container widget to align children horizontally."
},
{
"ref":"textual.layout.Horizontal.COMPONENT_CLASSES",
"url":50,
"doc":""
},
{
"ref":"textual.layout.Horizontal.CSS",
"url":50,
"doc":""
},
{
"ref":"textual.layout.Horizontal.can_focus",
"url":50,
"doc":""
},
{
"ref":"textual.layout.Horizontal.can_focus_children",
"url":50,
"doc":""
},
{
"ref":"textual.layout.Horizontal.virtual_size",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.layout.Horizontal.auto_width",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.layout.Horizontal.auto_height",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.layout.Horizontal.has_focus",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.layout.Horizontal.descendant_has_focus",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.layout.Horizontal.mouse_over",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.layout.Horizontal.scroll_x",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.layout.Horizontal.scroll_y",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.layout.Horizontal.scroll_target_x",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.layout.Horizontal.scroll_target_y",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.layout.Horizontal.show_vertical_scrollbar",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.layout.Horizontal.show_horizontal_scrollbar",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.layout.Horizontal.watch_show_horizontal_scrollbar",
"url":35,
"doc":"Watch function for show_horizontal_scrollbar attribute. Args: value (bool): Show horizontal scrollbar flag.",
"func":1
},
{
"ref":"textual.layout.Horizontal.watch_show_vertical_scrollbar",
"url":35,
"doc":"Watch function for show_vertical_scrollbar attribute. Args: value (bool): Show vertical scrollbar flag.",
"func":1
},
{
"ref":"textual.layout.Horizontal.compose",
"url":35,
"doc":"Yield child widgets for a container.",
"func":1
},
{
"ref":"textual.layout.Horizontal.on_register",
"url":35,
"doc":"Called when the instance is registered. Args: app (App): App instance.",
"func":1
},
{
"ref":"textual.layout.Horizontal.get_box_model",
"url":35,
"doc":"Process the box model for this widget. Args: container (Size): The size of the container widget (with a layout) viewport (Size): The viewport size. Returns: BoxModel: The size and margin for this widget.",
"func":1
},
{
"ref":"textual.layout.Horizontal.get_content_width",
"url":35,
"doc":"Gets the width of the content area. Args: container (Size): Size of the container (immediate parent) widget. viewport (Size): Size of the viewport. Returns: int: The optimal width of the content.",
"func":1
},
{
"ref":"textual.layout.Horizontal.get_content_height",
"url":35,
"doc":"Gets the height (number of lines) in the content area. Args: container (Size): Size of the container (immediate parent) widget. viewport (Size): Size of the viewport. width (int): Width of renderable. Returns: int: The height of the content.",
"func":1
},
{
"ref":"textual.layout.Horizontal.max_scroll_x",
"url":35,
"doc":"The maximum value of  scroll_x ."
},
{
"ref":"textual.layout.Horizontal.max_scroll_y",
"url":35,
"doc":"The maximum value of  scroll_y ."
},
{
"ref":"textual.layout.Horizontal.vertical_scrollbar",
"url":35,
"doc":"Get a vertical scrollbar (create if necessary) Returns: ScrollBar: ScrollBar Widget."
},
{
"ref":"textual.layout.Horizontal.horizontal_scrollbar",
"url":35,
"doc":"Get a vertical scrollbar (create if necessary) Returns: ScrollBar: ScrollBar Widget."
},
{
"ref":"textual.layout.Horizontal.scrollbars_enabled",
"url":35,
"doc":"A tuple of booleans that indicate if scrollbars are enabled. Returns: tuple[bool, bool]: A tuple of ( ,  )"
},
{
"ref":"textual.layout.Horizontal.scrollbar_size_vertical",
"url":35,
"doc":"Get the width used by the  vertical scrollbar."
},
{
"ref":"textual.layout.Horizontal.scrollbar_size_horizontal",
"url":35,
"doc":"Get the height used by the  horizontal scrollbar."
},
{
"ref":"textual.layout.Horizontal.gutter",
"url":35,
"doc":"Spacing for padding / border / scrollbars."
},
{
"ref":"textual.layout.Horizontal.size",
"url":35,
"doc":"The size of the content area."
},
{
"ref":"textual.layout.Horizontal.outer_size",
"url":35,
"doc":"The size of the widget (including padding and border)."
},
{
"ref":"textual.layout.Horizontal.container_size",
"url":35,
"doc":"The size of the container (parent widget)."
},
{
"ref":"textual.layout.Horizontal.content_region",
"url":35,
"doc":"Gets an absolute region containing the content (minus padding and border)."
},
{
"ref":"textual.layout.Horizontal.content_offset",
"url":35,
"doc":"An offset from the Widget origin where the content begins."
},
{
"ref":"textual.layout.Horizontal.region",
"url":35,
"doc":"The region occupied by this widget, relative to the Screen."
},
{
"ref":"textual.layout.Horizontal.virtual_region",
"url":35,
"doc":"The widget region relative to it's container. Which may not be visible, depending on scroll offset."
},
{
"ref":"textual.layout.Horizontal.window_region",
"url":35,
"doc":"The region within the scrollable area that is currently visible. Returns: Region: New region."
},
{
"ref":"textual.layout.Horizontal.virtual_region_with_margin",
"url":35,
"doc":"The widget region relative to its container ( including margin ), which may not be visible, depending on the scroll offset. Returns: Region: The virtual region of the Widget, inclusive of its margin."
},
{
"ref":"textual.layout.Horizontal.focusable_children",
"url":35,
"doc":"Get the children which may be focused."
},
{
"ref":"textual.layout.Horizontal.is_transparent",
"url":35,
"doc":"Check if the background styles is not set. Returns: bool:  True if there is background color, otherwise  False ."
},
{
"ref":"textual.layout.Horizontal.console",
"url":35,
"doc":"Get the current console."
},
{
"ref":"textual.layout.Horizontal.layout",
"url":35,
"doc":"Get the layout object if set in styles, or a default layout."
},
{
"ref":"textual.layout.Horizontal.is_container",
"url":35,
"doc":"Check if this widget is a container (contains other widgets). Returns: bool: True if this widget is a container."
},
{
"ref":"textual.layout.Horizontal.is_scrollable",
"url":35,
"doc":"Check if this Widget may be scrolled. Returns: bool: True if this widget may be scrolled."
},
{
"ref":"textual.layout.Horizontal.layer",
"url":35,
"doc":"Get the name of this widgets layer."
},
{
"ref":"textual.layout.Horizontal.layers",
"url":35,
"doc":"Layers of from parent. Returns: tuple[str,  .]: Tuple of layer names."
},
{
"ref":"textual.layout.Horizontal.scroll_to",
"url":35,
"doc":"Scroll to a given (absolute) coordinate, optionally animating. Args: x (int | None, optional): X coordinate (column) to scroll to, or  None for no change. Defaults to None. y (int | None, optional): Y coordinate (row) to scroll to, or  None for no change. Defaults to None. animate (bool, optional): Animate to new scroll position. Defaults to False. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.layout.Horizontal.scroll_relative",
"url":35,
"doc":"Scroll relative to current position. Args: x (int | None, optional): X distance (columns) to scroll, or  None for no change. Defaults to None. y (int | None, optional): Y distance (rows) to scroll, or  None for no change. Defaults to None. animate (bool, optional): Animate to new scroll position. Defaults to False. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.layout.Horizontal.scroll_to_widget",
"url":35,
"doc":"Scroll scrolling to bring a widget in to view. Args: widget (Widget): A descendant widget. animate (bool, optional): True to animate, or False to jump. Defaults to True. Returns: bool: True if any scrolling has occurred in any descendant, otherwise False.",
"func":1
},
{
"ref":"textual.layout.Horizontal.scroll_to_region",
"url":35,
"doc":"Scrolls a given region in to view, if required. This method will scroll the least distance required to move  region fully within the scrollable area. Args: region (Region): A region that should be visible. animate (bool, optional): Enable animation. Defaults to True. spacing (Spacing): Space to subtract from the window region. Returns: Offset: The distance that was scrolled.",
"func":1
},
{
"ref":"textual.layout.Horizontal.get_pseudo_classes",
"url":35,
"doc":"Pseudo classes for a widget",
"func":1
},
{
"ref":"textual.layout.Horizontal.watch_mouse_over",
"url":35,
"doc":"Update from CSS if mouse over state changes.",
"func":1
},
{
"ref":"textual.layout.Horizontal.watch_has_focus",
"url":35,
"doc":"Update from CSS if has focus state changes.",
"func":1
},
{
"ref":"textual.layout.Horizontal.render_line",
"url":35,
"doc":"Render a line of content. Args: y (int): Y Coordinate of line. Returns: list[Segment]: A rendered line.",
"func":1
},
{
"ref":"textual.layout.Horizontal.render_lines",
"url":35,
"doc":"Render the widget in to lines. Args: crop (Region): Region within visible area to render. Returns: Lines: A list of list of segments.",
"func":1
},
{
"ref":"textual.layout.Horizontal.call_later",
"url":35,
"doc":"Schedule a callback to run after all messages are processed and the screen has been refreshed. Args: callback (Callable): A callable.",
"func":1
},
{
"ref":"textual.layout.Horizontal.refresh",
"url":35,
"doc":"Initiate a refresh of the widget. This method sets an internal flag to perform a refresh, which will be done on the next idle event. Only one refresh will be done even if this method is called multiple times. Args: repaint (bool, optional): Repaint the widget (will call render() again). Defaults to True. layout (bool, optional): Also layout widgets in the view. Defaults to False.",
"func":1
},
{
"ref":"textual.layout.Horizontal.render",
"url":35,
"doc":"Get renderable for widget. Args: style (Styles): The Styles object for this Widget. Returns: RenderableType: Any renderable",
"func":1
},
{
"ref":"textual.layout.Horizontal.on_idle",
"url":35,
"doc":"Called when there are no more events on the queue. Args: event (events.Idle): Idle event.",
"func":1
},
{
"ref":"textual.layout.Horizontal.focus",
"url":35,
"doc":"Give input focus to this widget.",
"func":1
},
{
"ref":"textual.layout.Horizontal.capture_mouse",
"url":35,
"doc":"Capture (or release) the mouse. When captured, all mouse coordinates will go to this widget even when the pointer is not directly over the widget. Args: capture (bool, optional): True to capture or False to release. Defaults to True.",
"func":1
},
{
"ref":"textual.layout.Horizontal.release_mouse",
"url":35,
"doc":"Release the mouse. Mouse events will only be sent when the mouse is over the widget.",
"func":1
},
{
"ref":"textual.layout.Horizontal.css",
"url":36,
"doc":"Gets the CSS for this class and inherited from bases. Returns: list[tuple[str, str : a list of tuples containing (PATH, SOURCE) for this and inherited from base classes."
},
{
"ref":"textual.layout.Horizontal.parent",
"url":36,
"doc":"Get the parent node. Returns: DOMNode | None: The node which is the direct parent of this node."
},
{
"ref":"textual.layout.Horizontal.screen",
"url":36,
"doc":"Get the screen that this node is contained within. Note that this may not be the currently active screen within the app."
},
{
"ref":"textual.layout.Horizontal.id",
"url":36,
"doc":"The ID of this node, or None if the node has no ID. Returns: (str | None): A Node ID or None."
},
{
"ref":"textual.layout.Horizontal.css_identifier",
"url":36,
"doc":"A CSS selector that identifies this DOM node."
},
{
"ref":"textual.layout.Horizontal.css_identifier_styled",
"url":36,
"doc":"A stylized CSS identifier."
},
{
"ref":"textual.layout.Horizontal.pseudo_classes",
"url":36,
"doc":"Get a set of all pseudo classes"
},
{
"ref":"textual.layout.Horizontal.css_path_nodes",
"url":36,
"doc":"A list of nodes from the root to this node, forming a \"path\". Returns: list[DOMNode]: List of Nodes, starting with the root and ending with this node."
},
{
"ref":"textual.layout.Horizontal.display",
"url":36,
"doc":"Returns:  True if this DOMNode is displayed ( display != \"none\" ),  False otherwise."
},
{
"ref":"textual.layout.Horizontal.tree",
"url":36,
"doc":"Get a Rich tree object which will recursively render the structure of the node tree. Returns: Tree: A Rich object which may be printed."
},
{
"ref":"textual.layout.Horizontal.text_style",
"url":36,
"doc":"Get the text style object. A widget's style is influenced by its parent. for instance if a parent is bold, then the child will also be bold. Returns: Style: Rich Style object."
},
{
"ref":"textual.layout.Horizontal.rich_style",
"url":36,
"doc":"Get a Rich Style object for this DOMNode."
},
{
"ref":"textual.layout.Horizontal.background_colors",
"url":36,
"doc":"Get the background color and the color of the parent's background. Returns: tuple[Color, Color]: Tuple of (base background, background)"
},
{
"ref":"textual.layout.Horizontal.colors",
"url":36,
"doc":"Gets the Widgets foreground and background colors, and its parent's (base) colors. Returns: tuple[Color, Color, Color, Color]: Tuple of (base background, base color, background, color)"
},
{
"ref":"textual.layout.Horizontal.ancestors",
"url":36,
"doc":"Get a list of Nodes by tracing ancestors all the way back to App."
},
{
"ref":"textual.layout.Horizontal.displayed_children",
"url":36,
"doc":"The children which don't have display: none set."
},
{
"ref":"textual.layout.Horizontal.reset_styles",
"url":36,
"doc":"Reset styles back to their initial state",
"func":1
},
{
"ref":"textual.layout.Horizontal.add_child",
"url":36,
"doc":"Add a new child node. Args: node (DOMNode): A DOM node.",
"func":1
},
{
"ref":"textual.layout.Horizontal.add_children",
"url":36,
"doc":"Add multiple children to this node. Args:  nodes (DOMNode): Positional args should be new DOM nodes.  named_nodes (DOMNode): Keyword args will be assigned the argument name as an ID.",
"func":1
},
{
"ref":"textual.layout.Horizontal.walk_children",
"url":36,
"doc":"Generate all descendants of this node. Args: with_self (bool, optional): Also include self in the results. Defaults to True.",
"func":1
},
{
"ref":"textual.layout.Horizontal.get_child",
"url":36,
"doc":"Return the first child (immediate descendent) of this node with the given ID. Args: id (str): The ID of the child. Returns: DOMNode: The first child of this node with the ID. Raises: NoMatchingNodesError: if no children could be found for this ID",
"func":1
},
{
"ref":"textual.layout.Horizontal.query",
"url":36,
"doc":"Get a DOM query. Args: selector (str, optional): A CSS selector or  None for all nodes. Defaults to None. Returns: DOMQuery: A query object.",
"func":1
},
{
"ref":"textual.layout.Horizontal.set_styles",
"url":36,
"doc":"Set custom styles on this object.",
"func":1
},
{
"ref":"textual.layout.Horizontal.has_class",
"url":36,
"doc":"Check if the Node has all the given class names. Args:  class_names (str): CSS class names to check. Returns: bool:  True if the node has all the given class names, otherwise  False .",
"func":1
},
{
"ref":"textual.layout.Horizontal.add_class",
"url":36,
"doc":"Add class names to this Node. Args:  class_names (str): CSS class names to add.",
"func":1
},
{
"ref":"textual.layout.Horizontal.remove_class",
"url":36,
"doc":"Remove class names from this Node. Args:  class_names (str): CSS class names to remove.",
"func":1
},
{
"ref":"textual.layout.Horizontal.toggle_class",
"url":36,
"doc":"Toggle class names on this Node. Args:  class_names (str): CSS class names to toggle.",
"func":1
},
{
"ref":"textual.layout.Horizontal.has_pseudo_class",
"url":36,
"doc":"Check for pseudo class (such as hover, focus etc)",
"func":1
},
{
"ref":"textual.layout.Horizontal.app",
"url":20,
"doc":"Get the current app. Raises: NoActiveAppError: if no active app could be found for the current asyncio context"
},
{
"ref":"textual.layout.Horizontal.disable_messages",
"url":20,
"doc":"Disable message types from being processed.",
"func":1
},
{
"ref":"textual.layout.Horizontal.enable_messages",
"url":20,
"doc":"Enable processing of messages types.",
"func":1
},
{
"ref":"textual.layout.Horizontal.get_message",
"url":20,
"doc":"Get the next event on the queue, or None if queue is closed. Returns: Optional[Event]: Event object or None.",
"func":1
},
{
"ref":"textual.layout.Horizontal.peek_message",
"url":20,
"doc":"Peek the message at the head of the queue (does not remove it from the queue), or return None if the queue is empty. Returns: Optional[Message]: The message or None.",
"func":1
},
{
"ref":"textual.layout.Horizontal.close_messages_no_wait",
"url":20,
"doc":"Request the message queue to exit.",
"func":1
},
{
"ref":"textual.layout.Horizontal.close_messages",
"url":20,
"doc":"Close message queue, and optionally wait for queue to finish processing.",
"func":1
},
{
"ref":"textual.layout.Horizontal.check_idle",
"url":20,
"doc":"Prompt the message pump to call idle if the queue is empty.",
"func":1
},
{
"ref":"textual.layout.Horizontal.post_priority_message",
"url":20,
"doc":"Post a \"priority\" messages which will be processes prior to regular messages. Note that you should rarely need this in a regular app. It exists primarily to allow timer messages to skip the queue, so that they can be more regular. Args: message (Message): A message. Returns: bool: True if the messages was processed.",
"func":1
},
{
"ref":"textual.layout.Horizontal.dispatch_key",
"url":20,
"doc":"Dispatch a key event to method. This method will call the method named 'key_ ' if it exists. Args: event (events.Key): A key event.",
"func":1
},
{
"ref":"textual.messages",
"url":51,
"doc":""
},
{
"ref":"textual.messages.Update",
"url":51,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.messages.Update.sender",
"url":51,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.Update.can_replace",
"url":51,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.messages.Update.bubble",
"url":51,
"doc":""
},
{
"ref":"textual.messages.Update.verbosity",
"url":51,
"doc":""
},
{
"ref":"textual.messages.Update.system",
"url":51,
"doc":""
},
{
"ref":"textual.messages.Update.set_forwarded",
"url":33,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.messages.Update.prevent_default",
"url":33,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.messages.Update.stop",
"url":33,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.messages.Update.name",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.Update.time",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.Layout",
"url":51,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.messages.Layout.sender",
"url":51,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.Layout.can_replace",
"url":51,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.messages.Layout.bubble",
"url":51,
"doc":""
},
{
"ref":"textual.messages.Layout.verbosity",
"url":51,
"doc":""
},
{
"ref":"textual.messages.Layout.system",
"url":51,
"doc":""
},
{
"ref":"textual.messages.Layout.set_forwarded",
"url":33,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.messages.Layout.prevent_default",
"url":33,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.messages.Layout.stop",
"url":33,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.messages.Layout.name",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.Layout.time",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.InvokeLater",
"url":51,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.messages.InvokeLater.sender",
"url":51,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.InvokeLater.bubble",
"url":51,
"doc":""
},
{
"ref":"textual.messages.InvokeLater.verbosity",
"url":51,
"doc":""
},
{
"ref":"textual.messages.InvokeLater.system",
"url":51,
"doc":""
},
{
"ref":"textual.messages.InvokeLater.set_forwarded",
"url":33,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.messages.InvokeLater.can_replace",
"url":33,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.messages.InvokeLater.prevent_default",
"url":33,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.messages.InvokeLater.stop",
"url":33,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.messages.InvokeLater.name",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.InvokeLater.time",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.CursorMove",
"url":51,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.messages.CursorMove.sender",
"url":51,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.CursorMove.bubble",
"url":51,
"doc":""
},
{
"ref":"textual.messages.CursorMove.verbosity",
"url":51,
"doc":""
},
{
"ref":"textual.messages.CursorMove.system",
"url":51,
"doc":""
},
{
"ref":"textual.messages.CursorMove.set_forwarded",
"url":33,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.messages.CursorMove.can_replace",
"url":33,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.messages.CursorMove.prevent_default",
"url":33,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.messages.CursorMove.stop",
"url":33,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.messages.CursorMove.name",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.CursorMove.time",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.StylesUpdated",
"url":51,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.messages.StylesUpdated.sender",
"url":51,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.StylesUpdated.can_replace",
"url":51,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.messages.StylesUpdated.bubble",
"url":51,
"doc":""
},
{
"ref":"textual.messages.StylesUpdated.verbosity",
"url":51,
"doc":""
},
{
"ref":"textual.messages.StylesUpdated.system",
"url":51,
"doc":""
},
{
"ref":"textual.messages.StylesUpdated.set_forwarded",
"url":33,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.messages.StylesUpdated.prevent_default",
"url":33,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.messages.StylesUpdated.stop",
"url":33,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.messages.StylesUpdated.name",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.StylesUpdated.time",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.Prompt",
"url":51,
"doc":"Used to 'wake up' an event loop. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.messages.Prompt.sender",
"url":51,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.Prompt.can_replace",
"url":51,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.messages.Prompt.bubble",
"url":51,
"doc":""
},
{
"ref":"textual.messages.Prompt.verbosity",
"url":51,
"doc":""
},
{
"ref":"textual.messages.Prompt.system",
"url":51,
"doc":""
},
{
"ref":"textual.messages.Prompt.set_forwarded",
"url":33,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.messages.Prompt.prevent_default",
"url":33,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.messages.Prompt.stop",
"url":33,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.messages.Prompt.name",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.Prompt.time",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.TerminalSupportsSynchronizedOutput",
"url":51,
"doc":"Used to make the App aware that the terminal emulator supports synchronised output. @link https: gist.github.com/christianparpart/d8a62cc1ab659194337d73e399004036 Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.messages.TerminalSupportsSynchronizedOutput.sender",
"url":51,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.TerminalSupportsSynchronizedOutput.bubble",
"url":51,
"doc":""
},
{
"ref":"textual.messages.TerminalSupportsSynchronizedOutput.verbosity",
"url":51,
"doc":""
},
{
"ref":"textual.messages.TerminalSupportsSynchronizedOutput.system",
"url":51,
"doc":""
},
{
"ref":"textual.messages.TerminalSupportsSynchronizedOutput.set_forwarded",
"url":33,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.messages.TerminalSupportsSynchronizedOutput.can_replace",
"url":33,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.messages.TerminalSupportsSynchronizedOutput.prevent_default",
"url":33,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.messages.TerminalSupportsSynchronizedOutput.stop",
"url":33,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.messages.TerminalSupportsSynchronizedOutput.name",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.TerminalSupportsSynchronizedOutput.time",
"url":33,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.constants",
"url":52,
"doc":"Constants that we might want to expose via the public API."
},
{
"ref":"textual.geometry",
"url":53,
"doc":"Functions and classes to manage terminal geometry (anything involving coordinates or dimensions)."
},
{
"ref":"textual.geometry.clamp",
"url":53,
"doc":"Clamps a value between two other values. Args: value (T): A value minimum (T): Minimum value maximum (T): maximum value Returns: T: New value that is not less than the minimum or greater than the maximum.",
"func":1
},
{
"ref":"textual.geometry.Offset",
"url":53,
"doc":"A cell offset defined by x and y coordinates. Offsets are typically relative to the top left of the terminal or other container."
},
{
"ref":"textual.geometry.Offset.x",
"url":53,
"doc":"Offset in the x-axis (horizontal)"
},
{
"ref":"textual.geometry.Offset.y",
"url":53,
"doc":"Offset in the y-axis (vertical)"
},
{
"ref":"textual.geometry.Offset.is_origin",
"url":53,
"doc":"Check if the point is at the origin (0, 0)"
},
{
"ref":"textual.geometry.Offset.blend",
"url":53,
"doc":"Blend (interpolate) to a new point. Args: destination (Point): Point where progress is 1.0 factor (float): A value between 0 and 1.0 Returns: Point: A new point on a line between self and destination",
"func":1
},
{
"ref":"textual.geometry.Offset.get_distance_to",
"url":53,
"doc":"Get the distance to another offset. Args: other (Offset): An offset Returns: float: Distance to other offset",
"func":1
},
{
"ref":"textual.geometry.Size",
"url":53,
"doc":"An area defined by its width and height."
},
{
"ref":"textual.geometry.Size.width",
"url":53,
"doc":"The width in cells."
},
{
"ref":"textual.geometry.Size.height",
"url":53,
"doc":"The height in cells."
},
{
"ref":"textual.geometry.Size.area",
"url":53,
"doc":"Get the area of the size. Returns: int: Area in cells."
},
{
"ref":"textual.geometry.Size.region",
"url":53,
"doc":"Get a region of the same size."
},
{
"ref":"textual.geometry.Size.line_range",
"url":53,
"doc":"Get a range covering lines."
},
{
"ref":"textual.geometry.Size.contains",
"url":53,
"doc":"Check if a point is in the size. Args: x (int): X coordinate (column) y (int): Y coordinate (row) Returns: bool: True if the point is within the region.",
"func":1
},
{
"ref":"textual.geometry.Size.contains_point",
"url":53,
"doc":"Check if a point is in the size. Args: point (tuple[int, int]): A tuple of x and y coordinates. Returns: bool: True if the point is within the region.",
"func":1
},
{
"ref":"textual.geometry.Region",
"url":53,
"doc":"Defines a rectangular region. A Region consists a coordinate (x and y) and dimensions (width and height).   (x, y) \u250c          \u2510 \u25b2 \u2502 \u2502 \u2502 \u2502 \u2502 \u2502 \u2502 \u2502 height \u2502 \u2502 \u2502 \u2502 \u2502 \u2502 \u2514          \u2518 \u25bc \u25c0   \u2500 width    \u25b6  "
},
{
"ref":"textual.geometry.Region.x",
"url":53,
"doc":"Offset in the x-axis (horizontal)"
},
{
"ref":"textual.geometry.Region.y",
"url":53,
"doc":"Offset in the y-axis (vertical)"
},
{
"ref":"textual.geometry.Region.width",
"url":53,
"doc":"The widget of the region"
},
{
"ref":"textual.geometry.Region.height",
"url":53,
"doc":"The height of the region"
},
{
"ref":"textual.geometry.Region.from_union",
"url":53,
"doc":"Create a Region from the union of other regions. Args: regions (Collection[Region]): One or more regions. Returns: Region: A Region that encloses all other regions.",
"func":1
},
{
"ref":"textual.geometry.Region.from_corners",
"url":53,
"doc":"Construct a Region form the top left and bottom right corners. Args: x1 (int): Top left x y1 (int): Top left y x2 (int): Bottom right x y2 (int): Bottom right y Returns: Region: A new region.",
"func":1
},
{
"ref":"textual.geometry.Region.from_offset",
"url":53,
"doc":"Create a region from offset and size. Args: offset (Point): Offset (top left point) size (tuple[int, int]): Dimensions of region. Returns: Region: A region instance.",
"func":1
},
{
"ref":"textual.geometry.Region.get_scroll_to_visible",
"url":53,
"doc":"Calculate the smallest offset required to translate a window so that it contains another region. This method is used to calculate the required offset to scroll something in to view. Args: window_region (Region): The window region. region (Region): The region to move inside the window. Returns: Offset: An offset required to add to region to move it inside window_region.",
"func":1
},
{
"ref":"textual.geometry.Region.column_span",
"url":53,
"doc":"Get the start and end column (x coord). The end value is exclusive. Returns: tuple[int, int]: Pair of x coordinates (column numbers)."
},
{
"ref":"textual.geometry.Region.line_span",
"url":53,
"doc":"Get the start and end line number (y coord). The end value is exclusive. Returns: tuple[int, int]: Pair of y coordinates (line numbers)."
},
{
"ref":"textual.geometry.Region.right",
"url":53,
"doc":"Maximum X value (non inclusive)"
},
{
"ref":"textual.geometry.Region.bottom",
"url":53,
"doc":"Maximum Y value (non inclusive)"
},
{
"ref":"textual.geometry.Region.area",
"url":53,
"doc":"Get the area within the region."
},
{
"ref":"textual.geometry.Region.offset",
"url":53,
"doc":"Get the start point of the region."
},
{
"ref":"textual.geometry.Region.bottom_left",
"url":53,
"doc":"Bottom left offset of the region."
},
{
"ref":"textual.geometry.Region.top_right",
"url":53,
"doc":"Top right offset of the region."
},
{
"ref":"textual.geometry.Region.bottom_right",
"url":53,
"doc":"Bottom right of the region."
},
{
"ref":"textual.geometry.Region.size",
"url":53,
"doc":"Get the size of the region."
},
{
"ref":"textual.geometry.Region.corners",
"url":53,
"doc":"Get the top left and bottom right coordinates as a tuple of integers. Returns: tuple[int, int, int, int]: A tuple of  ( ,  ,  ,  ) "
},
{
"ref":"textual.geometry.Region.column_range",
"url":53,
"doc":"A range object for X coordinates."
},
{
"ref":"textual.geometry.Region.line_range",
"url":53,
"doc":"A range object for Y coordinates."
},
{
"ref":"textual.geometry.Region.reset_offset",
"url":53,
"doc":"An region of the same size at (0, 0)."
},
{
"ref":"textual.geometry.Region.at_offset",
"url":53,
"doc":"Get a new Region with the same size at a given offset. Args: offset (tuple[int, int]): An offset. Returns: Region: New Region with adjusted offset.",
"func":1
},
{
"ref":"textual.geometry.Region.crop_size",
"url":53,
"doc":"Get a region with the same offset, with a size no larger than  size . Args: size (tuple[int, int]): Maximum width and height (WIDTH, HEIGHT). Returns: Region: New region that could fit within  size .",
"func":1
},
{
"ref":"textual.geometry.Region.expand",
"url":53,
"doc":"Increase the size of the region by adding a border. Args: size (tuple[int, int]): Additional width and height. Returns: Region: A new region.",
"func":1
},
{
"ref":"textual.geometry.Region.overlaps",
"url":53,
"doc":"Check if another region overlaps this region. Args: other (Region): A Region. Returns: bool: True if other region shares any cells with this region.",
"func":1
},
{
"ref":"textual.geometry.Region.contains",
"url":53,
"doc":"Check if a point is in the region. Args: x (int): X coordinate (column) y (int): Y coordinate (row) Returns: bool: True if the point is within the region.",
"func":1
},
{
"ref":"textual.geometry.Region.contains_point",
"url":53,
"doc":"Check if a point is in the region. Args: point (tuple[int, int]): A tuple of x and y coordinates. Returns: bool: True if the point is within the region.",
"func":1
},
{
"ref":"textual.geometry.Region.contains_region",
"url":53,
"doc":"Check if a region is entirely contained within this region. Args: other (Region): A region. Returns: bool: True if the other region fits perfectly within this region.",
"func":1
},
{
"ref":"textual.geometry.Region.translate",
"url":53,
"doc":"Move the offset of the Region. Args: translate (tuple[int, int]): Offset to add to region. Returns: Region: A new region shifted by (x, y)",
"func":1
},
{
"ref":"textual.geometry.Region.clip",
"url":53,
"doc":"Clip this region to fit within width, height. Args: width (int): Width of bounds. height (int): Height of bounds. Returns: Region: Clipped region.",
"func":1
},
{
"ref":"textual.geometry.Region.grow",
"url":53,
"doc":"Grow a region by adding spacing. Args: margin (Spacing): Defines how many cells to grow the Region by at each edge. Returns: Region: New region.",
"func":1
},
{
"ref":"textual.geometry.Region.shrink",
"url":53,
"doc":"Shrink a region by subtracting spacing. Args: margin (Spacing): Defines how many cells to shrink the Region by at each edge. Returns: Region: The new, smaller region.",
"func":1
},
{
"ref":"textual.geometry.Region.intersection",
"url":53,
"doc":"Get the overlapping portion of the two regions. Args: region (Region): A region that overlaps this region. Returns: Region: A new region that covers when the two regions overlap.",
"func":1
},
{
"ref":"textual.geometry.Region.union",
"url":53,
"doc":"Get the smallest region that contains both regions. Args: region (Region): Another region. Returns: Region: An optimally sized region to cover both regions.",
"func":1
},
{
"ref":"textual.geometry.Region.split",
"url":53,
"doc":"Split a region in to 4 from given x and y offsets (cuts).   cut_x \u2193 \u250c    \u2510\u250c \u2500\u2510 \u2502  \u2502 \u2502 0  1 \u2502 \u2502  \u2502 cut_y \u2192 \u2514    \u2518\u2514 \u2500\u2518 \u250c    \u2510\u250c \u2500\u2510 \u2502 2  3 \u2502 \u2514    \u2518\u2514 \u2500\u2518   Args: cut_x (int): Offset from self.x where the cut should be made. If negative, the cut is taken from the right edge. cut_y (int): Offset from self.y where the cut should be made. If negative, the cut is taken from the lower edge. Returns: tuple[Region, Region, Region, Region]: Four new regions which add up to the original (self).",
"func":1
},
{
"ref":"textual.geometry.Region.split_vertical",
"url":53,
"doc":"Split a region in to two, from a given x offset.   cut \u2193 \u250c    \u2510\u250c \u2500\u2510 \u2502 0  1 \u2502 \u2502  \u2502 \u2514    \u2518\u2514 \u2500\u2518   Args: cut (int): An offset from self.x where the cut should be made. If cut is negative, it is taken from the right edge. Returns: tuple[Region, Region]: Two regions, which add up to the original (self).",
"func":1
},
{
"ref":"textual.geometry.Region.split_horizontal",
"url":53,
"doc":"Split a region in to two, from a given x offset.   \u250c    \u2500\u2510 \u2502 0 \u2502 \u2502 \u2502 cut \u2192 \u2514    \u2500\u2518 \u250c    \u2500\u2510 \u2502 1 \u2502 \u2514    \u2500\u2518   Args: cut (int): An offset from self.x where the cut should be made. May be negative, for the offset to start from the right edge. Returns: tuple[Region, Region]: Two regions, which add up to the original (self).",
"func":1
},
{
"ref":"textual.geometry.Spacing",
"url":53,
"doc":"The spacing around a renderable."
},
{
"ref":"textual.geometry.Spacing.top",
"url":53,
"doc":"Space from the top of a region."
},
{
"ref":"textual.geometry.Spacing.right",
"url":53,
"doc":"Space from the left of a region."
},
{
"ref":"textual.geometry.Spacing.bottom",
"url":53,
"doc":"Space from the bottom of a region."
},
{
"ref":"textual.geometry.Spacing.left",
"url":53,
"doc":"Space from the left of a region."
},
{
"ref":"textual.geometry.Spacing.width",
"url":53,
"doc":"Total space in width."
},
{
"ref":"textual.geometry.Spacing.height",
"url":53,
"doc":"Total space in height."
},
{
"ref":"textual.geometry.Spacing.top_left",
"url":53,
"doc":"Top left space."
},
{
"ref":"textual.geometry.Spacing.bottom_right",
"url":53,
"doc":"Bottom right space."
},
{
"ref":"textual.geometry.Spacing.totals",
"url":53,
"doc":"Returns a tuple of ( ,  )."
},
{
"ref":"textual.geometry.Spacing.css",
"url":53,
"doc":"Gets a string containing the spacing in CSS format."
},
{
"ref":"textual.geometry.Spacing.unpack",
"url":53,
"doc":"Unpack padding specified in CSS style. Args: pad (SpacingDimensions): An integer, or tuple of 1, 2, or 4 integers. Raises: ValueError: If  pad is an invalid value. Returns: Spacing: New Spacing object.",
"func":1
},
{
"ref":"textual.geometry.Spacing.vertical",
"url":53,
"doc":"Construct a Spacing with a given amount of spacing on vertical edges, and no horizontal spacing. Args: amount (int): The magnitude of spacing to apply to vertical edges Returns: Spacing:  Spacing(amount, 0, amount, 0) ",
"func":1
},
{
"ref":"textual.geometry.Spacing.horizontal",
"url":53,
"doc":"Construct a Spacing with a given amount of spacing on horizontal edges, and no vertical spacing. Args: amount (int): The magnitude of spacing to apply to horizontal edges Returns: Spacing:  Spacing(0, amount, 0, amount) ",
"func":1
},
{
"ref":"textual.geometry.Spacing.all",
"url":53,
"doc":"Construct a Spacing with a given amount of spacing on all edges. Args: amount (int): The magnitude of spacing to apply to all edges Returns: Spacing:  Spacing(amount, amount, amount, amount) ",
"func":1
},
{
"ref":"textual.geometry.Spacing.grow_maximum",
"url":53,
"doc":"Grow spacing with a maximum. Args: other (Spacing): Spacing object. Returns: Spacing: New spacing were the values are maximum of the two values.",
"func":1
},
{
"ref":"textual.layouts",
"url":54,
"doc":""
},
{
"ref":"textual.layouts.vertical",
"url":55,
"doc":""
},
{
"ref":"textual.layouts.vertical.VerticalLayout",
"url":55,
"doc":"Used to layout Widgets vertically on screen, from top to bottom."
},
{
"ref":"textual.layouts.vertical.VerticalLayout.name",
"url":55,
"doc":""
},
{
"ref":"textual.layouts.vertical.VerticalLayout.arrange",
"url":55,
"doc":"Generate a layout map that defines where on the screen the widgets will be drawn. Args: parent (Widget): Parent widget. size (Size): Size of container. Returns: Iterable[WidgetPlacement]: An iterable of widget location",
"func":1
},
{
"ref":"textual.layouts.horizontal",
"url":56,
"doc":""
},
{
"ref":"textual.layouts.horizontal.HorizontalLayout",
"url":56,
"doc":"Used to layout Widgets horizontally on screen, from left to right. Since Widgets naturally fill the space of their parent container, all widgets used in a horizontal layout should have a specified."
},
{
"ref":"textual.layouts.horizontal.HorizontalLayout.name",
"url":56,
"doc":""
},
{
"ref":"textual.layouts.horizontal.HorizontalLayout.arrange",
"url":56,
"doc":"Generate a layout map that defines where on the screen the widgets will be drawn. Args: parent (Widget): Parent widget. size (Size): Size of container. Returns: Iterable[WidgetPlacement]: An iterable of widget location",
"func":1
},
{
"ref":"textual.layouts.factory",
"url":57,
"doc":""
},
{
"ref":"textual.layouts.factory.MissingLayout",
"url":57,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"textual.layouts.factory.get_layout",
"url":57,
"doc":"Get a named layout object. Args: name (str): Name of the layout. Raises: MissingLayout: If the named layout doesn't exist. Returns: Layout: A layout object.",
"func":1
},
{
"ref":"textual.layouts.grid",
"url":58,
"doc":""
},
{
"ref":"textual.layouts.grid.GridOptions",
"url":58,
"doc":"GridOptions(name: 'str', size: 'int | None' = None, fraction: 'int' = 1, min_size: 'int' = 1, max_size: 'int | None' = None)"
},
{
"ref":"textual.layouts.grid.GridOptions.name",
"url":58,
"doc":""
},
{
"ref":"textual.layouts.grid.GridOptions.size",
"url":58,
"doc":""
},
{
"ref":"textual.layouts.grid.GridOptions.fraction",
"url":58,
"doc":""
},
{
"ref":"textual.layouts.grid.GridOptions.min_size",
"url":58,
"doc":""
},
{
"ref":"textual.layouts.grid.GridOptions.max_size",
"url":58,
"doc":""
},
{
"ref":"textual.layouts.grid.GridArea",
"url":58,
"doc":"GridArea(col_start, col_end, row_start, row_end)"
},
{
"ref":"textual.layouts.grid.GridArea.col_start",
"url":58,
"doc":"Alias for field number 0"
},
{
"ref":"textual.layouts.grid.GridArea.col_end",
"url":58,
"doc":"Alias for field number 1"
},
{
"ref":"textual.layouts.grid.GridArea.row_start",
"url":58,
"doc":"Alias for field number 2"
},
{
"ref":"textual.layouts.grid.GridArea.row_end",
"url":58,
"doc":"Alias for field number 3"
},
{
"ref":"textual.layouts.grid.GridLayout",
"url":58,
"doc":"Responsible for arranging Widgets in a view and rendering them."
},
{
"ref":"textual.layouts.grid.GridLayout.name",
"url":58,
"doc":""
},
{
"ref":"textual.layouts.grid.GridLayout.is_row_visible",
"url":58,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.grid.GridLayout.is_column_visible",
"url":58,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.grid.GridLayout.show_row",
"url":58,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.grid.GridLayout.show_column",
"url":58,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.grid.GridLayout.add_column",
"url":58,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.grid.GridLayout.add_row",
"url":58,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.grid.GridLayout.add_areas",
"url":58,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.grid.GridLayout.set_gap",
"url":58,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.grid.GridLayout.set_gutter",
"url":58,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.grid.GridLayout.add_widget",
"url":58,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.grid.GridLayout.place",
"url":58,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.grid.GridLayout.set_repeat",
"url":58,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.grid.GridLayout.set_align",
"url":58,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.grid.GridLayout.get_widgets",
"url":58,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.grid.GridLayout.arrange",
"url":58,
"doc":"Generate a map that associates widgets with their location on screen. Args: width (int): [description] height (int): [description] offset (Point, optional): [description]. Defaults to Point(0, 0). Returns: dict[Widget, OrderedRegion]: [description]",
"func":1
},
{
"ref":"textual.widget",
"url":35,
"doc":""
},
{
"ref":"textual.widget.RenderCache",
"url":35,
"doc":"Stores results of a previous render."
},
{
"ref":"textual.widget.RenderCache.size",
"url":35,
"doc":"Alias for field number 0"
},
{
"ref":"textual.widget.RenderCache.lines",
"url":35,
"doc":"Alias for field number 1"
},
{
"ref":"textual.widget.RenderCache.cursor_line",
"url":35,
"doc":""
},
{
"ref":"textual.widget.Widget",
"url":35,
"doc":"A node in a hierarchy of things forming the UI. Nodes are mountable and may be styled with CSS."
},
{
"ref":"textual.widget.Widget.CSS",
"url":35,
"doc":""
},
{
"ref":"textual.widget.Widget.COMPONENT_CLASSES",
"url":35,
"doc":""
},
{
"ref":"textual.widget.Widget.can_focus",
"url":35,
"doc":""
},
{
"ref":"textual.widget.Widget.can_focus_children",
"url":35,
"doc":""
},
{
"ref":"textual.widget.Widget.virtual_size",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widget.Widget.auto_width",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widget.Widget.auto_height",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widget.Widget.has_focus",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widget.Widget.descendant_has_focus",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widget.Widget.mouse_over",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widget.Widget.scroll_x",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widget.Widget.scroll_y",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widget.Widget.scroll_target_x",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widget.Widget.scroll_target_y",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widget.Widget.show_vertical_scrollbar",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widget.Widget.show_horizontal_scrollbar",
"url":35,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widget.Widget.watch_show_horizontal_scrollbar",
"url":35,
"doc":"Watch function for show_horizontal_scrollbar attribute. Args: value (bool): Show horizontal scrollbar flag.",
"func":1
},
{
"ref":"textual.widget.Widget.watch_show_vertical_scrollbar",
"url":35,
"doc":"Watch function for show_vertical_scrollbar attribute. Args: value (bool): Show vertical scrollbar flag.",
"func":1
},
{
"ref":"textual.widget.Widget.mount",
"url":35,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.compose",
"url":35,
"doc":"Yield child widgets for a container.",
"func":1
},
{
"ref":"textual.widget.Widget.on_register",
"url":35,
"doc":"Called when the instance is registered. Args: app (App): App instance.",
"func":1
},
{
"ref":"textual.widget.Widget.get_box_model",
"url":35,
"doc":"Process the box model for this widget. Args: container (Size): The size of the container widget (with a layout) viewport (Size): The viewport size. Returns: BoxModel: The size and margin for this widget.",
"func":1
},
{
"ref":"textual.widget.Widget.get_content_width",
"url":35,
"doc":"Gets the width of the content area. Args: container (Size): Size of the container (immediate parent) widget. viewport (Size): Size of the viewport. Returns: int: The optimal width of the content.",
"func":1
},
{
"ref":"textual.widget.Widget.get_content_height",
"url":35,
"doc":"Gets the height (number of lines) in the content area. Args: container (Size): Size of the container (immediate parent) widget. viewport (Size): Size of the viewport. width (int): Width of renderable. Returns: int: The height of the content.",
"func":1
},
{
"ref":"textual.widget.Widget.watch_scroll_x",
"url":35,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.watch_scroll_y",
"url":35,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.validate_scroll_x",
"url":35,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.validate_scroll_target_x",
"url":35,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.validate_scroll_y",
"url":35,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.validate_scroll_target_y",
"url":35,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.max_scroll_x",
"url":35,
"doc":"The maximum value of  scroll_x ."
},
{
"ref":"textual.widget.Widget.max_scroll_y",
"url":35,
"doc":"The maximum value of  scroll_y ."
},
{
"ref":"textual.widget.Widget.vertical_scrollbar",
"url":35,
"doc":"Get a vertical scrollbar (create if necessary) Returns: ScrollBar: ScrollBar Widget."
},
{
"ref":"textual.widget.Widget.horizontal_scrollbar",
"url":35,
"doc":"Get a vertical scrollbar (create if necessary) Returns: ScrollBar: ScrollBar Widget."
},
{
"ref":"textual.widget.Widget.scrollbars_enabled",
"url":35,
"doc":"A tuple of booleans that indicate if scrollbars are enabled. Returns: tuple[bool, bool]: A tuple of ( ,  )"
},
{
"ref":"textual.widget.Widget.scrollbar_size_vertical",
"url":35,
"doc":"Get the width used by the  vertical scrollbar."
},
{
"ref":"textual.widget.Widget.scrollbar_size_horizontal",
"url":35,
"doc":"Get the height used by the  horizontal scrollbar."
},
{
"ref":"textual.widget.Widget.scrollbar_gutter",
"url":35,
"doc":""
},
{
"ref":"textual.widget.Widget.gutter",
"url":35,
"doc":"Spacing for padding / border / scrollbars."
},
{
"ref":"textual.widget.Widget.size",
"url":35,
"doc":"The size of the content area."
},
{
"ref":"textual.widget.Widget.outer_size",
"url":35,
"doc":"The size of the widget (including padding and border)."
},
{
"ref":"textual.widget.Widget.container_size",
"url":35,
"doc":"The size of the container (parent widget)."
},
{
"ref":"textual.widget.Widget.content_region",
"url":35,
"doc":"Gets an absolute region containing the content (minus padding and border)."
},
{
"ref":"textual.widget.Widget.content_offset",
"url":35,
"doc":"An offset from the Widget origin where the content begins."
},
{
"ref":"textual.widget.Widget.region",
"url":35,
"doc":"The region occupied by this widget, relative to the Screen."
},
{
"ref":"textual.widget.Widget.virtual_region",
"url":35,
"doc":"The widget region relative to it's container. Which may not be visible, depending on scroll offset."
},
{
"ref":"textual.widget.Widget.window_region",
"url":35,
"doc":"The region within the scrollable area that is currently visible. Returns: Region: New region."
},
{
"ref":"textual.widget.Widget.virtual_region_with_margin",
"url":35,
"doc":"The widget region relative to its container ( including margin ), which may not be visible, depending on the scroll offset. Returns: Region: The virtual region of the Widget, inclusive of its margin."
},
{
"ref":"textual.widget.Widget.focusable_children",
"url":35,
"doc":"Get the children which may be focused."
},
{
"ref":"textual.widget.Widget.scroll_offset",
"url":35,
"doc":""
},
{
"ref":"textual.widget.Widget.is_transparent",
"url":35,
"doc":"Check if the background styles is not set. Returns: bool:  True if there is background color, otherwise  False ."
},
{
"ref":"textual.widget.Widget.console",
"url":35,
"doc":"Get the current console."
},
{
"ref":"textual.widget.Widget.animate",
"url":35,
"doc":""
},
{
"ref":"textual.widget.Widget.layout",
"url":35,
"doc":"Get the layout object if set in styles, or a default layout."
},
{
"ref":"textual.widget.Widget.is_container",
"url":35,
"doc":"Check if this widget is a container (contains other widgets). Returns: bool: True if this widget is a container."
},
{
"ref":"textual.widget.Widget.is_scrollable",
"url":35,
"doc":"Check if this Widget may be scrolled. Returns: bool: True if this widget may be scrolled."
},
{
"ref":"textual.widget.Widget.layer",
"url":35,
"doc":"Get the name of this widgets layer."
},
{
"ref":"textual.widget.Widget.layers",
"url":35,
"doc":"Layers of from parent. Returns: tuple[str,  .]: Tuple of layer names."
},
{
"ref":"textual.widget.Widget.scroll_to",
"url":35,
"doc":"Scroll to a given (absolute) coordinate, optionally animating. Args: x (int | None, optional): X coordinate (column) to scroll to, or  None for no change. Defaults to None. y (int | None, optional): Y coordinate (row) to scroll to, or  None for no change. Defaults to None. animate (bool, optional): Animate to new scroll position. Defaults to False. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.widget.Widget.scroll_relative",
"url":35,
"doc":"Scroll relative to current position. Args: x (int | None, optional): X distance (columns) to scroll, or  None for no change. Defaults to None. y (int | None, optional): Y distance (rows) to scroll, or  None for no change. Defaults to None. animate (bool, optional): Animate to new scroll position. Defaults to False. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.widget.Widget.scroll_home",
"url":35,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.scroll_end",
"url":35,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.scroll_left",
"url":35,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.scroll_right",
"url":35,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.scroll_up",
"url":35,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.scroll_down",
"url":35,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.scroll_page_up",
"url":35,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.scroll_page_down",
"url":35,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.scroll_page_left",
"url":35,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.scroll_page_right",
"url":35,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.scroll_to_widget",
"url":35,
"doc":"Scroll scrolling to bring a widget in to view. Args: widget (Widget): A descendant widget. animate (bool, optional): True to animate, or False to jump. Defaults to True. Returns: bool: True if any scrolling has occurred in any descendant, otherwise False.",
"func":1
},
{
"ref":"textual.widget.Widget.scroll_to_region",
"url":35,
"doc":"Scrolls a given region in to view, if required. This method will scroll the least distance required to move  region fully within the scrollable area. Args: region (Region): A region that should be visible. animate (bool, optional): Enable animation. Defaults to True. spacing (Spacing): Space to subtract from the window region. Returns: Offset: The distance that was scrolled.",
"func":1
},
{
"ref":"textual.widget.Widget.get_pseudo_classes",
"url":35,
"doc":"Pseudo classes for a widget",
"func":1
},
{
"ref":"textual.widget.Widget.watch",
"url":35,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.watch_mouse_over",
"url":35,
"doc":"Update from CSS if mouse over state changes.",
"func":1
},
{
"ref":"textual.widget.Widget.watch_has_focus",
"url":35,
"doc":"Update from CSS if has focus state changes.",
"func":1
},
{
"ref":"textual.widget.Widget.size_updated",
"url":35,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.render_line",
"url":35,
"doc":"Render a line of content. Args: y (int): Y Coordinate of line. Returns: list[Segment]: A rendered line.",
"func":1
},
{
"ref":"textual.widget.Widget.render_lines",
"url":35,
"doc":"Render the widget in to lines. Args: crop (Region): Region within visible area to render. Returns: Lines: A list of list of segments.",
"func":1
},
{
"ref":"textual.widget.Widget.get_style_at",
"url":35,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.call_later",
"url":35,
"doc":"Schedule a callback to run after all messages are processed and the screen has been refreshed. Args: callback (Callable): A callable.",
"func":1
},
{
"ref":"textual.widget.Widget.forward_event",
"url":35,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.refresh",
"url":35,
"doc":"Initiate a refresh of the widget. This method sets an internal flag to perform a refresh, which will be done on the next idle event. Only one refresh will be done even if this method is called multiple times. Args: repaint (bool, optional): Repaint the widget (will call render() again). Defaults to True. layout (bool, optional): Also layout widgets in the view. Defaults to False.",
"func":1
},
{
"ref":"textual.widget.Widget.render",
"url":35,
"doc":"Get renderable for widget. Args: style (Styles): The Styles object for this Widget. Returns: RenderableType: Any renderable",
"func":1
},
{
"ref":"textual.widget.Widget.action",
"url":35,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.post_message",
"url":35,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.on_idle",
"url":35,
"doc":"Called when there are no more events on the queue. Args: event (events.Idle): Idle event.",
"func":1
},
{
"ref":"textual.widget.Widget.focus",
"url":35,
"doc":"Give input focus to this widget.",
"func":1
},
{
"ref":"textual.widget.Widget.capture_mouse",
"url":35,
"doc":"Capture (or release) the mouse. When captured, all mouse coordinates will go to this widget even when the pointer is not directly over the widget. Args: capture (bool, optional): True to capture or False to release. Defaults to True.",
"func":1
},
{
"ref":"textual.widget.Widget.release_mouse",
"url":35,
"doc":"Release the mouse. Mouse events will only be sent when the mouse is over the widget.",
"func":1
},
{
"ref":"textual.widget.Widget.broker_event",
"url":35,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.on_mouse_down",
"url":35,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.on_mouse_up",
"url":35,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.on_click",
"url":35,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.on_key",
"url":35,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.on_mount",
"url":35,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.on_leave",
"url":35,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.on_enter",
"url":35,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.on_focus",
"url":35,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.on_blur",
"url":35,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.on_descendant_focus",
"url":35,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.on_descendant_blur",
"url":35,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.on_mouse_scroll_down",
"url":35,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.on_mouse_scroll_up",
"url":35,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.handle_scroll_to",
"url":35,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.handle_scroll_up",
"url":35,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.handle_scroll_down",
"url":35,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.handle_scroll_left",
"url":35,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.handle_scroll_right",
"url":35,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.key_home",
"url":35,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.key_end",
"url":35,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.key_left",
"url":35,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.key_right",
"url":35,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.key_down",
"url":35,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.key_up",
"url":35,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.key_pagedown",
"url":35,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.key_pageup",
"url":35,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.css",
"url":36,
"doc":"Gets the CSS for this class and inherited from bases. Returns: list[tuple[str, str : a list of tuples containing (PATH, SOURCE) for this and inherited from base classes."
},
{
"ref":"textual.widget.Widget.parent",
"url":36,
"doc":"Get the parent node. Returns: DOMNode | None: The node which is the direct parent of this node."
},
{
"ref":"textual.widget.Widget.screen",
"url":36,
"doc":"Get the screen that this node is contained within. Note that this may not be the currently active screen within the app."
},
{
"ref":"textual.widget.Widget.id",
"url":36,
"doc":"The ID of this node, or None if the node has no ID. Returns: (str | None): A Node ID or None."
},
{
"ref":"textual.widget.Widget.css_identifier",
"url":36,
"doc":"A CSS selector that identifies this DOM node."
},
{
"ref":"textual.widget.Widget.css_identifier_styled",
"url":36,
"doc":"A stylized CSS identifier."
},
{
"ref":"textual.widget.Widget.pseudo_classes",
"url":36,
"doc":"Get a set of all pseudo classes"
},
{
"ref":"textual.widget.Widget.css_path_nodes",
"url":36,
"doc":"A list of nodes from the root to this node, forming a \"path\". Returns: list[DOMNode]: List of Nodes, starting with the root and ending with this node."
},
{
"ref":"textual.widget.Widget.display",
"url":36,
"doc":"Returns:  True if this DOMNode is displayed ( display != \"none\" ),  False otherwise."
},
{
"ref":"textual.widget.Widget.tree",
"url":36,
"doc":"Get a Rich tree object which will recursively render the structure of the node tree. Returns: Tree: A Rich object which may be printed."
},
{
"ref":"textual.widget.Widget.text_style",
"url":36,
"doc":"Get the text style object. A widget's style is influenced by its parent. for instance if a parent is bold, then the child will also be bold. Returns: Style: Rich Style object."
},
{
"ref":"textual.widget.Widget.rich_style",
"url":36,
"doc":"Get a Rich Style object for this DOMNode."
},
{
"ref":"textual.widget.Widget.background_colors",
"url":36,
"doc":"Get the background color and the color of the parent's background. Returns: tuple[Color, Color]: Tuple of (base background, background)"
},
{
"ref":"textual.widget.Widget.colors",
"url":36,
"doc":"Gets the Widgets foreground and background colors, and its parent's (base) colors. Returns: tuple[Color, Color, Color, Color]: Tuple of (base background, base color, background, color)"
},
{
"ref":"textual.widget.Widget.ancestors",
"url":36,
"doc":"Get a list of Nodes by tracing ancestors all the way back to App."
},
{
"ref":"textual.widget.Widget.displayed_children",
"url":36,
"doc":"The children which don't have display: none set."
},
{
"ref":"textual.widget.Widget.reset_styles",
"url":36,
"doc":"Reset styles back to their initial state",
"func":1
},
{
"ref":"textual.widget.Widget.add_child",
"url":36,
"doc":"Add a new child node. Args: node (DOMNode): A DOM node.",
"func":1
},
{
"ref":"textual.widget.Widget.add_children",
"url":36,
"doc":"Add multiple children to this node. Args:  nodes (DOMNode): Positional args should be new DOM nodes.  named_nodes (DOMNode): Keyword args will be assigned the argument name as an ID.",
"func":1
},
{
"ref":"textual.widget.Widget.walk_children",
"url":36,
"doc":"Generate all descendants of this node. Args: with_self (bool, optional): Also include self in the results. Defaults to True.",
"func":1
},
{
"ref":"textual.widget.Widget.get_child",
"url":36,
"doc":"Return the first child (immediate descendent) of this node with the given ID. Args: id (str): The ID of the child. Returns: DOMNode: The first child of this node with the ID. Raises: NoMatchingNodesError: if no children could be found for this ID",
"func":1
},
{
"ref":"textual.widget.Widget.query",
"url":36,
"doc":"Get a DOM query. Args: selector (str, optional): A CSS selector or  None for all nodes. Defaults to None. Returns: DOMQuery: A query object.",
"func":1
},
{
"ref":"textual.widget.Widget.set_styles",
"url":36,
"doc":"Set custom styles on this object.",
"func":1
},
{
"ref":"textual.widget.Widget.has_class",
"url":36,
"doc":"Check if the Node has all the given class names. Args:  class_names (str): CSS class names to check. Returns: bool:  True if the node has all the given class names, otherwise  False .",
"func":1
},
{
"ref":"textual.widget.Widget.add_class",
"url":36,
"doc":"Add class names to this Node. Args:  class_names (str): CSS class names to add.",
"func":1
},
{
"ref":"textual.widget.Widget.remove_class",
"url":36,
"doc":"Remove class names from this Node. Args:  class_names (str): CSS class names to remove.",
"func":1
},
{
"ref":"textual.widget.Widget.toggle_class",
"url":36,
"doc":"Toggle class names on this Node. Args:  class_names (str): CSS class names to toggle.",
"func":1
},
{
"ref":"textual.widget.Widget.has_pseudo_class",
"url":36,
"doc":"Check for pseudo class (such as hover, focus etc)",
"func":1
},
{
"ref":"textual.widget.Widget.app",
"url":20,
"doc":"Get the current app. Raises: NoActiveAppError: if no active app could be found for the current asyncio context"
},
{
"ref":"textual.widget.Widget.disable_messages",
"url":20,
"doc":"Disable message types from being processed.",
"func":1
},
{
"ref":"textual.widget.Widget.enable_messages",
"url":20,
"doc":"Enable processing of messages types.",
"func":1
},
{
"ref":"textual.widget.Widget.get_message",
"url":20,
"doc":"Get the next event on the queue, or None if queue is closed. Returns: Optional[Event]: Event object or None.",
"func":1
},
{
"ref":"textual.widget.Widget.peek_message",
"url":20,
"doc":"Peek the message at the head of the queue (does not remove it from the queue), or return None if the queue is empty. Returns: Optional[Message]: The message or None.",
"func":1
},
{
"ref":"textual.widget.Widget.close_messages_no_wait",
"url":20,
"doc":"Request the message queue to exit.",
"func":1
},
{
"ref":"textual.widget.Widget.close_messages",
"url":20,
"doc":"Close message queue, and optionally wait for queue to finish processing.",
"func":1
},
{
"ref":"textual.widget.Widget.check_idle",
"url":20,
"doc":"Prompt the message pump to call idle if the queue is empty.",
"func":1
},
{
"ref":"textual.widget.Widget.post_priority_message",
"url":20,
"doc":"Post a \"priority\" messages which will be processes prior to regular messages. Note that you should rarely need this in a regular app. It exists primarily to allow timer messages to skip the queue, so that they can be more regular. Args: message (Message): A message. Returns: bool: True if the messages was processed.",
"func":1
},
{
"ref":"textual.widget.Widget.dispatch_key",
"url":20,
"doc":"Dispatch a key event to method. This method will call the method named 'key_ ' if it exists. Args: event (events.Key): A key event.",
"func":1
}
]