URLS=[
"textual/index.html",
"textual/layout.html",
"textual/widget.html",
"textual/dom.html",
"textual/message_pump.html",
"textual/events.html",
"textual/message.html",
"textual/layouts/index.html",
"textual/layouts/grid.html",
"textual/layouts/horizontal.html",
"textual/layouts/dock.html",
"textual/layouts/vertical.html",
"textual/layouts/factory.html",
"textual/actions.html",
"textual/keys.html",
"textual/widgets/index.html",
"textual/widgets/tabs.html",
"textual/case.html",
"textual/css/index.html",
"textual/css/scalar_animation.html",
"textual/css/constants.html",
"textual/css/match.html",
"textual/css/model.html",
"textual/css/stylesheet.html",
"textual/css/scalar.html",
"textual/css/parse.html",
"textual/css/tokenizer.html",
"textual/css/query.html",
"textual/css/errors.html",
"textual/css/styles.html",
"textual/css/transition.html",
"textual/css/types.html",
"textual/css/tokenize.html",
"textual/cli/index.html",
"textual/cli/cli.html",
"textual/design.html",
"textual/app.html",
"textual/binding.html",
"textual/suggestions.html",
"textual/file_monitor.html",
"textual/box_model.html",
"textual/blank.html",
"textual/messages.html",
"textual/screen.html",
"textual/errors.html",
"textual/scrollbar.html",
"textual/driver.html",
"textual/drivers/index.html",
"textual/drivers/linux_driver.html",
"textual/renderables/index.html",
"textual/renderables/sparkline.html",
"textual/renderables/tint.html",
"textual/renderables/gradient.html",
"textual/renderables/underline_bar.html",
"textual/renderables/blank.html",
"textual/renderables/opacity.html",
"textual/devtools/index.html",
"textual/devtools/renderables.html",
"textual/devtools/client.html",
"textual/devtools/redirect_output.html",
"textual/devtools/server.html",
"textual/devtools/service.html",
"textual/draw.html",
"textual/reactive.html",
"textual/color.html",
"textual/geometry.html",
"textual/features.html"
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
"ref":"textual.layout",
"url":1,
"doc":""
},
{
"ref":"textual.layout.Vertical",
"url":1,
"doc":"A container widget to align children vertically."
},
{
"ref":"textual.layout.Vertical.CSS",
"url":1,
"doc":""
},
{
"ref":"textual.layout.Vertical.can_focus",
"url":1,
"doc":""
},
{
"ref":"textual.layout.Vertical.can_focus_children",
"url":1,
"doc":""
},
{
"ref":"textual.layout.Vertical.auto_width",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.layout.Vertical.auto_height",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.layout.Vertical.has_focus",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.layout.Vertical.descendant_has_focus",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.layout.Vertical.mouse_over",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.layout.Vertical.scroll_x",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.layout.Vertical.scroll_y",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.layout.Vertical.scroll_target_x",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.layout.Vertical.scroll_target_y",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.layout.Vertical.show_vertical_scrollbar",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.layout.Vertical.show_horizontal_scrollbar",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.layout.Vertical.compose",
"url":2,
"doc":"Yield child widgets for a container.",
"func":1
},
{
"ref":"textual.layout.Vertical.on_register",
"url":2,
"doc":"Called when the instance is registered. Args: app (App): App instance.",
"func":1
},
{
"ref":"textual.layout.Vertical.get_box_model",
"url":2,
"doc":"Process the box model for this widget. Args: container (Size): The size of the container widget (with a layout) viewport (Size): The viewport size. Returns: BoxModel: The size and margin for this widget.",
"func":1
},
{
"ref":"textual.layout.Vertical.get_content_width",
"url":2,
"doc":"Gets the width of the content area. Args: container_size (Size): Size of the container (immediate parent) widget. viewport_size (Size): Size of the viewport. Returns: int: The optimal width of the content.",
"func":1
},
{
"ref":"textual.layout.Vertical.get_content_height",
"url":2,
"doc":"Gets the height (number of lines) in the content area. Args: container_size (Size): Size of the container (immediate parent) widget. viewport_size (Size): Size of the viewport. width (int): Width of renderable. Returns: int: The height of the content.",
"func":1
},
{
"ref":"textual.layout.Vertical.vertical_scrollbar",
"url":2,
"doc":"Get a vertical scrollbar (create if necessary) Returns: ScrollBar: ScrollBar Widget."
},
{
"ref":"textual.layout.Vertical.horizontal_scrollbar",
"url":2,
"doc":"Get a vertical scrollbar (create if necessary) Returns: ScrollBar: ScrollBar Widget."
},
{
"ref":"textual.layout.Vertical.scrollbars_enabled",
"url":2,
"doc":"A tuple of booleans that indicate if scrollbars are enabled. Returns: tuple[bool, bool]: A tuple of ( ,  )"
},
{
"ref":"textual.layout.Vertical.set_dirty",
"url":2,
"doc":"Set the Widget as 'dirty' (requiring re-render).",
"func":1
},
{
"ref":"textual.layout.Vertical.scroll_to",
"url":2,
"doc":"Scroll to a given (absolute) coordinate, optionally animating. Args: x (int | None, optional): X coordinate (column) to scroll to, or  None for no change. Defaults to None. y (int | None, optional): Y coordinate (row) to scroll to, or  None for no change. Defaults to None. animate (bool, optional): Animate to new scroll position. Defaults to False. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.layout.Vertical.scroll_relative",
"url":2,
"doc":"Scroll relative to current position. Args: x (int | None, optional): X distance (columns) to scroll, or  None for no change. Defaults to None. y (int | None, optional): Y distance (rows) to scroll, or  None for no change. Defaults to None. animate (bool, optional): Animate to new scroll position. Defaults to False. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.layout.Vertical.scroll_to_widget",
"url":2,
"doc":"Scroll so that a child widget is in the visible area. Args: widget (Widget): A Widget in the children. animate (bool, optional): True to animate, or False to jump. Defaults to True. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.layout.Vertical.get_pseudo_classes",
"url":2,
"doc":"Pseudo classes for a widget",
"func":1
},
{
"ref":"textual.layout.Vertical.render_styled",
"url":2,
"doc":"Applies style attributes to the default renderable. Returns: RenderableType: A new renderable.",
"func":1
},
{
"ref":"textual.layout.Vertical.content_region",
"url":2,
"doc":"A region relative to the Widget origin that contains the content."
},
{
"ref":"textual.layout.Vertical.content_offset",
"url":2,
"doc":"An offset from the Widget origin where the content begins."
},
{
"ref":"textual.layout.Vertical.region",
"url":2,
"doc":"The region occupied by this widget, relative to the Screen."
},
{
"ref":"textual.layout.Vertical.is_transparent",
"url":2,
"doc":"Check if the background styles is not set. Returns: bool:  True if there is background color, otherwise  False ."
},
{
"ref":"textual.layout.Vertical.console",
"url":2,
"doc":"Get the current console."
},
{
"ref":"textual.layout.Vertical.is_container",
"url":2,
"doc":"Check if this widget is a container (contains other widgets) Returns: bool: True if this widget is a container."
},
{
"ref":"textual.layout.Vertical.watch_mouse_over",
"url":2,
"doc":"Update from CSS if mouse over state changes.",
"func":1
},
{
"ref":"textual.layout.Vertical.watch_has_focus",
"url":2,
"doc":"Update from CSS if has focus state changes.",
"func":1
},
{
"ref":"textual.layout.Vertical.get_render_lines",
"url":2,
"doc":"Get segment lines to render the widget. Args: start (int | None, optional): line start index, or None for first line. Defaults to None. end (int | None, optional): line end index, or None for last line. Defaults to None. Returns: Lines: A list of lists of segments.",
"func":1
},
{
"ref":"textual.layout.Vertical.check_layout",
"url":2,
"doc":"Check if a layout has been requested.",
"func":1
},
{
"ref":"textual.layout.Vertical.call_later",
"url":2,
"doc":"Run a callback after processing all messages and refreshing the screen. Args: callback (Callable): A callable.",
"func":1
},
{
"ref":"textual.layout.Vertical.refresh",
"url":2,
"doc":"Initiate a refresh of the widget. This method sets an internal flag to perform a refresh, which will be done on the next idle event. Only one refresh will be done even if this method is called multiple times. Args: repaint (bool, optional): Repaint the widget (will call render() again). Defaults to True. layout (bool, optional): Also layout widgets in the view. Defaults to False.",
"func":1
},
{
"ref":"textual.layout.Vertical.render",
"url":2,
"doc":"Get renderable for widget. Args: style (Styles): The Styles object for this Widget. Returns: RenderableType: Any renderable",
"func":1
},
{
"ref":"textual.layout.Vertical.on_idle",
"url":2,
"doc":"Called when there are no more events on the queue. Args: event (events.Idle): Idle event.",
"func":1
},
{
"ref":"textual.layout.Vertical.focus",
"url":2,
"doc":"Give input focus to this widget.",
"func":1
},
{
"ref":"textual.layout.Vertical.capture_mouse",
"url":2,
"doc":"Capture (or release) the mouse. When captured, all mouse coordinates will go to this widget even when the pointer is not directly over the widget. Args: capture (bool, optional): True to capture or False to release. Defaults to True.",
"func":1
},
{
"ref":"textual.layout.Vertical.release_mouse",
"url":2,
"doc":"Release the mouse. Mouse events will only be sent when the mouse is over the widget.",
"func":1
},
{
"ref":"textual.layout.Vertical.parent",
"url":3,
"doc":"Get the parent node. Returns: DOMNode: The node which is the direct parent of this node."
},
{
"ref":"textual.layout.Vertical.screen",
"url":3,
"doc":"Get the screen that this node is contained within. Note that this may not be the currently active screen within the app."
},
{
"ref":"textual.layout.Vertical.id",
"url":3,
"doc":"The ID of this node, or None if the node has no ID. Returns: (str | None): A Node ID or None."
},
{
"ref":"textual.layout.Vertical.css_identifier",
"url":3,
"doc":"A CSS selector that identifies this DOM node."
},
{
"ref":"textual.layout.Vertical.css_identifier_styled",
"url":3,
"doc":"A stylized CSS identifier."
},
{
"ref":"textual.layout.Vertical.pseudo_classes",
"url":3,
"doc":"Get a set of all pseudo classes"
},
{
"ref":"textual.layout.Vertical.css_type",
"url":3,
"doc":"Gets the CSS type, used by the CSS. Returns: str: A type used in CSS (lower cased class name)."
},
{
"ref":"textual.layout.Vertical.css_path_nodes",
"url":3,
"doc":"A list of nodes from the root to this node, forming a \"path\". Returns: list[DOMNode]: List of Nodes, starting with the root and ending with this node."
},
{
"ref":"textual.layout.Vertical.display",
"url":3,
"doc":"Returns:  True if this DOMNode is displayed ( display != \"none\" ),  False otherwise."
},
{
"ref":"textual.layout.Vertical.tree",
"url":3,
"doc":"Get a Rich tree object which will recursively render the structure of the node tree. Returns: Tree: A Rich object which may be printed."
},
{
"ref":"textual.layout.Vertical.rich_text_style",
"url":3,
"doc":"Get the text style object. A widget's style is influenced by its parent. For instance if a widgets background has an alpha, then its parent's background color will show through. Additionally, widgets will inherit their parent's text style (i.e. bold, italic etc). Returns: Style: Rich Style object."
},
{
"ref":"textual.layout.Vertical.ancestors",
"url":3,
"doc":"Get a list of Nodes by tracing ancestors all the way back to App."
},
{
"ref":"textual.layout.Vertical.displayed_children",
"url":3,
"doc":"The children which don't have display: none set."
},
{
"ref":"textual.layout.Vertical.focusable_children",
"url":3,
"doc":"Get the children which may be focused."
},
{
"ref":"textual.layout.Vertical.add_child",
"url":3,
"doc":"Add a new child node. Args: node (DOMNode): A DOM node.",
"func":1
},
{
"ref":"textual.layout.Vertical.add_children",
"url":3,
"doc":"Add multiple children to this node. Args:  nodes (DOMNode): Positional args should be new DOM nodes.  named_nodes (DOMNode): Keyword args will be assigned the argument name as an ID.",
"func":1
},
{
"ref":"textual.layout.Vertical.walk_children",
"url":3,
"doc":"Generate all descendents of this node. Args: with_self (bool, optional): Also include self in the results. Defaults to True.",
"func":1
},
{
"ref":"textual.layout.Vertical.get_child",
"url":3,
"doc":"Return the first child (immediate descendent) of this node with the given ID. Args: id (str): The ID of the child. Returns: DOMNode: The first child of this node with the ID. Raises: NoMatchingNodesError: if no children could be found for this ID",
"func":1
},
{
"ref":"textual.layout.Vertical.query",
"url":3,
"doc":"Get a DOM query. Args: selector (str, optional): A CSS selector or  None for all nodes. Defaults to None. Returns: DOMQuery: A query object.",
"func":1
},
{
"ref":"textual.layout.Vertical.set_styles",
"url":3,
"doc":"Set custom styles on this object.",
"func":1
},
{
"ref":"textual.layout.Vertical.has_class",
"url":3,
"doc":"Check if the Node has all the given class names. Args:  class_names (str): CSS class names to check. Returns: bool:  True if the node has all the given class names, otherwise  False .",
"func":1
},
{
"ref":"textual.layout.Vertical.add_class",
"url":3,
"doc":"Add class names to this Node. Args:  class_names (str): CSS class names to add.",
"func":1
},
{
"ref":"textual.layout.Vertical.remove_class",
"url":3,
"doc":"Remove class names from this Node. Args:  class_names (str): CSS class names to remove.",
"func":1
},
{
"ref":"textual.layout.Vertical.toggle_class",
"url":3,
"doc":"Toggle class names on this Node. Args:  class_names (str): CSS class names to toggle.",
"func":1
},
{
"ref":"textual.layout.Vertical.has_pseudo_class",
"url":3,
"doc":"Check for pseudo class (such as hover, focus etc)",
"func":1
},
{
"ref":"textual.layout.Vertical.app",
"url":4,
"doc":"Get the current app."
},
{
"ref":"textual.layout.Vertical.disable_messages",
"url":4,
"doc":"Disable message types from being processed.",
"func":1
},
{
"ref":"textual.layout.Vertical.enable_messages",
"url":4,
"doc":"Enable processing of messages types.",
"func":1
},
{
"ref":"textual.layout.Vertical.get_message",
"url":4,
"doc":"Get the next event on the queue, or None if queue is closed. Returns: Optional[Event]: Event object or None.",
"func":1
},
{
"ref":"textual.layout.Vertical.peek_message",
"url":4,
"doc":"Peek the message at the head of the queue (does not remove it from the queue), or return None if the queue is empty. Returns: Optional[Message]: The message or None.",
"func":1
},
{
"ref":"textual.layout.Vertical.close_messages_no_wait",
"url":4,
"doc":"Request the message queue to exit.",
"func":1
},
{
"ref":"textual.layout.Vertical.close_messages",
"url":4,
"doc":"Close message queue, and optionally wait for queue to finish processing.",
"func":1
},
{
"ref":"textual.layout.Vertical.check_idle",
"url":4,
"doc":"Prompt the message pump to call idle if the queue is empty.",
"func":1
},
{
"ref":"textual.layout.Vertical.post_priority_message",
"url":4,
"doc":"Post a \"priority\" messages which will be processes prior to regular messages. Note that you should rarely need this in a regular app. It exists primarily to allow timer messages to skip the queue, so that they can be more regular. Args: message (Message): A message. Returns: bool: True if the messages was processed.",
"func":1
},
{
"ref":"textual.layout.Vertical.dispatch_key",
"url":4,
"doc":"Dispatch a key event to method. This method will call the method named 'key_ ' if it exists. Args: event (events.Key): A key event.",
"func":1
},
{
"ref":"textual.layout.Horizontal",
"url":1,
"doc":"A container widget to align children horizontally."
},
{
"ref":"textual.layout.Horizontal.CSS",
"url":1,
"doc":""
},
{
"ref":"textual.layout.Horizontal.can_focus",
"url":1,
"doc":""
},
{
"ref":"textual.layout.Horizontal.can_focus_children",
"url":1,
"doc":""
},
{
"ref":"textual.layout.Horizontal.auto_width",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.layout.Horizontal.auto_height",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.layout.Horizontal.has_focus",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.layout.Horizontal.descendant_has_focus",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.layout.Horizontal.mouse_over",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.layout.Horizontal.scroll_x",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.layout.Horizontal.scroll_y",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.layout.Horizontal.scroll_target_x",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.layout.Horizontal.scroll_target_y",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.layout.Horizontal.show_vertical_scrollbar",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.layout.Horizontal.show_horizontal_scrollbar",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.layout.Horizontal.compose",
"url":2,
"doc":"Yield child widgets for a container.",
"func":1
},
{
"ref":"textual.layout.Horizontal.on_register",
"url":2,
"doc":"Called when the instance is registered. Args: app (App): App instance.",
"func":1
},
{
"ref":"textual.layout.Horizontal.get_box_model",
"url":2,
"doc":"Process the box model for this widget. Args: container (Size): The size of the container widget (with a layout) viewport (Size): The viewport size. Returns: BoxModel: The size and margin for this widget.",
"func":1
},
{
"ref":"textual.layout.Horizontal.get_content_width",
"url":2,
"doc":"Gets the width of the content area. Args: container_size (Size): Size of the container (immediate parent) widget. viewport_size (Size): Size of the viewport. Returns: int: The optimal width of the content.",
"func":1
},
{
"ref":"textual.layout.Horizontal.get_content_height",
"url":2,
"doc":"Gets the height (number of lines) in the content area. Args: container_size (Size): Size of the container (immediate parent) widget. viewport_size (Size): Size of the viewport. width (int): Width of renderable. Returns: int: The height of the content.",
"func":1
},
{
"ref":"textual.layout.Horizontal.vertical_scrollbar",
"url":2,
"doc":"Get a vertical scrollbar (create if necessary) Returns: ScrollBar: ScrollBar Widget."
},
{
"ref":"textual.layout.Horizontal.horizontal_scrollbar",
"url":2,
"doc":"Get a vertical scrollbar (create if necessary) Returns: ScrollBar: ScrollBar Widget."
},
{
"ref":"textual.layout.Horizontal.scrollbars_enabled",
"url":2,
"doc":"A tuple of booleans that indicate if scrollbars are enabled. Returns: tuple[bool, bool]: A tuple of ( ,  )"
},
{
"ref":"textual.layout.Horizontal.set_dirty",
"url":2,
"doc":"Set the Widget as 'dirty' (requiring re-render).",
"func":1
},
{
"ref":"textual.layout.Horizontal.scroll_to",
"url":2,
"doc":"Scroll to a given (absolute) coordinate, optionally animating. Args: x (int | None, optional): X coordinate (column) to scroll to, or  None for no change. Defaults to None. y (int | None, optional): Y coordinate (row) to scroll to, or  None for no change. Defaults to None. animate (bool, optional): Animate to new scroll position. Defaults to False. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.layout.Horizontal.scroll_relative",
"url":2,
"doc":"Scroll relative to current position. Args: x (int | None, optional): X distance (columns) to scroll, or  None for no change. Defaults to None. y (int | None, optional): Y distance (rows) to scroll, or  None for no change. Defaults to None. animate (bool, optional): Animate to new scroll position. Defaults to False. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.layout.Horizontal.scroll_to_widget",
"url":2,
"doc":"Scroll so that a child widget is in the visible area. Args: widget (Widget): A Widget in the children. animate (bool, optional): True to animate, or False to jump. Defaults to True. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.layout.Horizontal.get_pseudo_classes",
"url":2,
"doc":"Pseudo classes for a widget",
"func":1
},
{
"ref":"textual.layout.Horizontal.render_styled",
"url":2,
"doc":"Applies style attributes to the default renderable. Returns: RenderableType: A new renderable.",
"func":1
},
{
"ref":"textual.layout.Horizontal.content_region",
"url":2,
"doc":"A region relative to the Widget origin that contains the content."
},
{
"ref":"textual.layout.Horizontal.content_offset",
"url":2,
"doc":"An offset from the Widget origin where the content begins."
},
{
"ref":"textual.layout.Horizontal.region",
"url":2,
"doc":"The region occupied by this widget, relative to the Screen."
},
{
"ref":"textual.layout.Horizontal.is_transparent",
"url":2,
"doc":"Check if the background styles is not set. Returns: bool:  True if there is background color, otherwise  False ."
},
{
"ref":"textual.layout.Horizontal.console",
"url":2,
"doc":"Get the current console."
},
{
"ref":"textual.layout.Horizontal.is_container",
"url":2,
"doc":"Check if this widget is a container (contains other widgets) Returns: bool: True if this widget is a container."
},
{
"ref":"textual.layout.Horizontal.watch_mouse_over",
"url":2,
"doc":"Update from CSS if mouse over state changes.",
"func":1
},
{
"ref":"textual.layout.Horizontal.watch_has_focus",
"url":2,
"doc":"Update from CSS if has focus state changes.",
"func":1
},
{
"ref":"textual.layout.Horizontal.get_render_lines",
"url":2,
"doc":"Get segment lines to render the widget. Args: start (int | None, optional): line start index, or None for first line. Defaults to None. end (int | None, optional): line end index, or None for last line. Defaults to None. Returns: Lines: A list of lists of segments.",
"func":1
},
{
"ref":"textual.layout.Horizontal.check_layout",
"url":2,
"doc":"Check if a layout has been requested.",
"func":1
},
{
"ref":"textual.layout.Horizontal.call_later",
"url":2,
"doc":"Run a callback after processing all messages and refreshing the screen. Args: callback (Callable): A callable.",
"func":1
},
{
"ref":"textual.layout.Horizontal.refresh",
"url":2,
"doc":"Initiate a refresh of the widget. This method sets an internal flag to perform a refresh, which will be done on the next idle event. Only one refresh will be done even if this method is called multiple times. Args: repaint (bool, optional): Repaint the widget (will call render() again). Defaults to True. layout (bool, optional): Also layout widgets in the view. Defaults to False.",
"func":1
},
{
"ref":"textual.layout.Horizontal.render",
"url":2,
"doc":"Get renderable for widget. Args: style (Styles): The Styles object for this Widget. Returns: RenderableType: Any renderable",
"func":1
},
{
"ref":"textual.layout.Horizontal.on_idle",
"url":2,
"doc":"Called when there are no more events on the queue. Args: event (events.Idle): Idle event.",
"func":1
},
{
"ref":"textual.layout.Horizontal.focus",
"url":2,
"doc":"Give input focus to this widget.",
"func":1
},
{
"ref":"textual.layout.Horizontal.capture_mouse",
"url":2,
"doc":"Capture (or release) the mouse. When captured, all mouse coordinates will go to this widget even when the pointer is not directly over the widget. Args: capture (bool, optional): True to capture or False to release. Defaults to True.",
"func":1
},
{
"ref":"textual.layout.Horizontal.release_mouse",
"url":2,
"doc":"Release the mouse. Mouse events will only be sent when the mouse is over the widget.",
"func":1
},
{
"ref":"textual.layout.Horizontal.parent",
"url":3,
"doc":"Get the parent node. Returns: DOMNode: The node which is the direct parent of this node."
},
{
"ref":"textual.layout.Horizontal.screen",
"url":3,
"doc":"Get the screen that this node is contained within. Note that this may not be the currently active screen within the app."
},
{
"ref":"textual.layout.Horizontal.id",
"url":3,
"doc":"The ID of this node, or None if the node has no ID. Returns: (str | None): A Node ID or None."
},
{
"ref":"textual.layout.Horizontal.css_identifier",
"url":3,
"doc":"A CSS selector that identifies this DOM node."
},
{
"ref":"textual.layout.Horizontal.css_identifier_styled",
"url":3,
"doc":"A stylized CSS identifier."
},
{
"ref":"textual.layout.Horizontal.pseudo_classes",
"url":3,
"doc":"Get a set of all pseudo classes"
},
{
"ref":"textual.layout.Horizontal.css_type",
"url":3,
"doc":"Gets the CSS type, used by the CSS. Returns: str: A type used in CSS (lower cased class name)."
},
{
"ref":"textual.layout.Horizontal.css_path_nodes",
"url":3,
"doc":"A list of nodes from the root to this node, forming a \"path\". Returns: list[DOMNode]: List of Nodes, starting with the root and ending with this node."
},
{
"ref":"textual.layout.Horizontal.display",
"url":3,
"doc":"Returns:  True if this DOMNode is displayed ( display != \"none\" ),  False otherwise."
},
{
"ref":"textual.layout.Horizontal.tree",
"url":3,
"doc":"Get a Rich tree object which will recursively render the structure of the node tree. Returns: Tree: A Rich object which may be printed."
},
{
"ref":"textual.layout.Horizontal.rich_text_style",
"url":3,
"doc":"Get the text style object. A widget's style is influenced by its parent. For instance if a widgets background has an alpha, then its parent's background color will show through. Additionally, widgets will inherit their parent's text style (i.e. bold, italic etc). Returns: Style: Rich Style object."
},
{
"ref":"textual.layout.Horizontal.ancestors",
"url":3,
"doc":"Get a list of Nodes by tracing ancestors all the way back to App."
},
{
"ref":"textual.layout.Horizontal.displayed_children",
"url":3,
"doc":"The children which don't have display: none set."
},
{
"ref":"textual.layout.Horizontal.focusable_children",
"url":3,
"doc":"Get the children which may be focused."
},
{
"ref":"textual.layout.Horizontal.add_child",
"url":3,
"doc":"Add a new child node. Args: node (DOMNode): A DOM node.",
"func":1
},
{
"ref":"textual.layout.Horizontal.add_children",
"url":3,
"doc":"Add multiple children to this node. Args:  nodes (DOMNode): Positional args should be new DOM nodes.  named_nodes (DOMNode): Keyword args will be assigned the argument name as an ID.",
"func":1
},
{
"ref":"textual.layout.Horizontal.walk_children",
"url":3,
"doc":"Generate all descendents of this node. Args: with_self (bool, optional): Also include self in the results. Defaults to True.",
"func":1
},
{
"ref":"textual.layout.Horizontal.get_child",
"url":3,
"doc":"Return the first child (immediate descendent) of this node with the given ID. Args: id (str): The ID of the child. Returns: DOMNode: The first child of this node with the ID. Raises: NoMatchingNodesError: if no children could be found for this ID",
"func":1
},
{
"ref":"textual.layout.Horizontal.query",
"url":3,
"doc":"Get a DOM query. Args: selector (str, optional): A CSS selector or  None for all nodes. Defaults to None. Returns: DOMQuery: A query object.",
"func":1
},
{
"ref":"textual.layout.Horizontal.set_styles",
"url":3,
"doc":"Set custom styles on this object.",
"func":1
},
{
"ref":"textual.layout.Horizontal.has_class",
"url":3,
"doc":"Check if the Node has all the given class names. Args:  class_names (str): CSS class names to check. Returns: bool:  True if the node has all the given class names, otherwise  False .",
"func":1
},
{
"ref":"textual.layout.Horizontal.add_class",
"url":3,
"doc":"Add class names to this Node. Args:  class_names (str): CSS class names to add.",
"func":1
},
{
"ref":"textual.layout.Horizontal.remove_class",
"url":3,
"doc":"Remove class names from this Node. Args:  class_names (str): CSS class names to remove.",
"func":1
},
{
"ref":"textual.layout.Horizontal.toggle_class",
"url":3,
"doc":"Toggle class names on this Node. Args:  class_names (str): CSS class names to toggle.",
"func":1
},
{
"ref":"textual.layout.Horizontal.has_pseudo_class",
"url":3,
"doc":"Check for pseudo class (such as hover, focus etc)",
"func":1
},
{
"ref":"textual.layout.Horizontal.app",
"url":4,
"doc":"Get the current app."
},
{
"ref":"textual.layout.Horizontal.disable_messages",
"url":4,
"doc":"Disable message types from being processed.",
"func":1
},
{
"ref":"textual.layout.Horizontal.enable_messages",
"url":4,
"doc":"Enable processing of messages types.",
"func":1
},
{
"ref":"textual.layout.Horizontal.get_message",
"url":4,
"doc":"Get the next event on the queue, or None if queue is closed. Returns: Optional[Event]: Event object or None.",
"func":1
},
{
"ref":"textual.layout.Horizontal.peek_message",
"url":4,
"doc":"Peek the message at the head of the queue (does not remove it from the queue), or return None if the queue is empty. Returns: Optional[Message]: The message or None.",
"func":1
},
{
"ref":"textual.layout.Horizontal.close_messages_no_wait",
"url":4,
"doc":"Request the message queue to exit.",
"func":1
},
{
"ref":"textual.layout.Horizontal.close_messages",
"url":4,
"doc":"Close message queue, and optionally wait for queue to finish processing.",
"func":1
},
{
"ref":"textual.layout.Horizontal.check_idle",
"url":4,
"doc":"Prompt the message pump to call idle if the queue is empty.",
"func":1
},
{
"ref":"textual.layout.Horizontal.post_priority_message",
"url":4,
"doc":"Post a \"priority\" messages which will be processes prior to regular messages. Note that you should rarely need this in a regular app. It exists primarily to allow timer messages to skip the queue, so that they can be more regular. Args: message (Message): A message. Returns: bool: True if the messages was processed.",
"func":1
},
{
"ref":"textual.layout.Horizontal.dispatch_key",
"url":4,
"doc":"Dispatch a key event to method. This method will call the method named 'key_ ' if it exists. Args: event (events.Key): A key event.",
"func":1
},
{
"ref":"textual.events",
"url":5,
"doc":""
},
{
"ref":"textual.events.Event",
"url":5,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Event.sender",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Event.bubble",
"url":5,
"doc":""
},
{
"ref":"textual.events.Event.verbosity",
"url":5,
"doc":""
},
{
"ref":"textual.events.Event.system",
"url":5,
"doc":""
},
{
"ref":"textual.events.Event.set_forwarded",
"url":6,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.Event.can_replace",
"url":6,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Event.prevent_default",
"url":6,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Event.stop",
"url":6,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Event.name",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Event.time",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Null",
"url":5,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Null.sender",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Null.can_replace",
"url":5,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Null.bubble",
"url":5,
"doc":""
},
{
"ref":"textual.events.Null.verbosity",
"url":5,
"doc":""
},
{
"ref":"textual.events.Null.system",
"url":5,
"doc":""
},
{
"ref":"textual.events.Null.set_forwarded",
"url":6,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.Null.prevent_default",
"url":6,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Null.stop",
"url":6,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Null.name",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Null.time",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Callback",
"url":5,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Callback.sender",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Callback.bubble",
"url":5,
"doc":""
},
{
"ref":"textual.events.Callback.verbosity",
"url":5,
"doc":""
},
{
"ref":"textual.events.Callback.system",
"url":5,
"doc":""
},
{
"ref":"textual.events.Callback.set_forwarded",
"url":6,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.Callback.can_replace",
"url":6,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Callback.prevent_default",
"url":6,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Callback.stop",
"url":6,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Callback.name",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Callback.time",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.ShutdownRequest",
"url":5,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.ShutdownRequest.sender",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.ShutdownRequest.bubble",
"url":5,
"doc":""
},
{
"ref":"textual.events.ShutdownRequest.verbosity",
"url":5,
"doc":""
},
{
"ref":"textual.events.ShutdownRequest.system",
"url":5,
"doc":""
},
{
"ref":"textual.events.ShutdownRequest.set_forwarded",
"url":6,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.ShutdownRequest.can_replace",
"url":6,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.ShutdownRequest.prevent_default",
"url":6,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.ShutdownRequest.stop",
"url":6,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.ShutdownRequest.name",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.ShutdownRequest.time",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Shutdown",
"url":5,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Shutdown.sender",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Shutdown.bubble",
"url":5,
"doc":""
},
{
"ref":"textual.events.Shutdown.verbosity",
"url":5,
"doc":""
},
{
"ref":"textual.events.Shutdown.system",
"url":5,
"doc":""
},
{
"ref":"textual.events.Shutdown.set_forwarded",
"url":6,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.Shutdown.can_replace",
"url":6,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Shutdown.prevent_default",
"url":6,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Shutdown.stop",
"url":6,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Shutdown.name",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Shutdown.time",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Load",
"url":5,
"doc":"Sent when the App is running but  before the terminal is in application mode. Use this event to run any set up that doesn't require any visuals such as loading configuration and binding keys. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Load.sender",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Load.bubble",
"url":5,
"doc":""
},
{
"ref":"textual.events.Load.verbosity",
"url":5,
"doc":""
},
{
"ref":"textual.events.Load.system",
"url":5,
"doc":""
},
{
"ref":"textual.events.Load.set_forwarded",
"url":6,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.Load.can_replace",
"url":6,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Load.prevent_default",
"url":6,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Load.stop",
"url":6,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Load.name",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Load.time",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Idle",
"url":5,
"doc":"Sent when there are no more items in the message queue. This is a pseudo-event in that it is created by the Textual system and doesn't go through the usual message queue. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Idle.sender",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Idle.bubble",
"url":5,
"doc":""
},
{
"ref":"textual.events.Idle.verbosity",
"url":5,
"doc":""
},
{
"ref":"textual.events.Idle.system",
"url":5,
"doc":""
},
{
"ref":"textual.events.Idle.set_forwarded",
"url":6,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.Idle.can_replace",
"url":6,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Idle.prevent_default",
"url":6,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Idle.stop",
"url":6,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Idle.name",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Idle.time",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Action",
"url":5,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Action.sender",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Action.action",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Action.bubble",
"url":5,
"doc":""
},
{
"ref":"textual.events.Action.verbosity",
"url":5,
"doc":""
},
{
"ref":"textual.events.Action.system",
"url":5,
"doc":""
},
{
"ref":"textual.events.Action.set_forwarded",
"url":6,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.Action.can_replace",
"url":6,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Action.prevent_default",
"url":6,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Action.stop",
"url":6,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Action.name",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Action.time",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Resize",
"url":5,
"doc":"Sent when the app or widget has been resized. Args: sender (MessageTarget): Event sender. width (int): New width in terminal cells. height (int): New height in terminal cells."
},
{
"ref":"textual.events.Resize.can_replace",
"url":5,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Resize.size",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Resize.bubble",
"url":5,
"doc":""
},
{
"ref":"textual.events.Resize.verbosity",
"url":5,
"doc":""
},
{
"ref":"textual.events.Resize.system",
"url":5,
"doc":""
},
{
"ref":"textual.events.Resize.sender",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Resize.set_forwarded",
"url":6,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.Resize.prevent_default",
"url":6,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Resize.stop",
"url":6,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Resize.name",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Resize.time",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Mount",
"url":5,
"doc":"Sent when a widget is  mounted and may receive messages. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Mount.sender",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Mount.bubble",
"url":5,
"doc":""
},
{
"ref":"textual.events.Mount.verbosity",
"url":5,
"doc":""
},
{
"ref":"textual.events.Mount.system",
"url":5,
"doc":""
},
{
"ref":"textual.events.Mount.set_forwarded",
"url":6,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.Mount.can_replace",
"url":6,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Mount.prevent_default",
"url":6,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Mount.stop",
"url":6,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Mount.name",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Mount.time",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Unmount",
"url":5,
"doc":"Sent when a widget is unmounted, and may no longer receive messages. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Unmount.sender",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Unmount.bubble",
"url":5,
"doc":""
},
{
"ref":"textual.events.Unmount.verbosity",
"url":5,
"doc":""
},
{
"ref":"textual.events.Unmount.system",
"url":5,
"doc":""
},
{
"ref":"textual.events.Unmount.set_forwarded",
"url":6,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.Unmount.can_replace",
"url":6,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Unmount.prevent_default",
"url":6,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Unmount.stop",
"url":6,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Unmount.name",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Unmount.time",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Show",
"url":5,
"doc":"Sent when a widget has become visible. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Show.sender",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Show.bubble",
"url":5,
"doc":""
},
{
"ref":"textual.events.Show.verbosity",
"url":5,
"doc":""
},
{
"ref":"textual.events.Show.system",
"url":5,
"doc":""
},
{
"ref":"textual.events.Show.set_forwarded",
"url":6,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.Show.can_replace",
"url":6,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Show.prevent_default",
"url":6,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Show.stop",
"url":6,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Show.name",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Show.time",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Hide",
"url":5,
"doc":"Sent when a widget has been hidden. A widget may be hidden by setting its  visible flag to  False , if it is no longer in a layout, or if it has been offset beyond the edges of the terminal. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Hide.sender",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Hide.bubble",
"url":5,
"doc":""
},
{
"ref":"textual.events.Hide.verbosity",
"url":5,
"doc":""
},
{
"ref":"textual.events.Hide.system",
"url":5,
"doc":""
},
{
"ref":"textual.events.Hide.set_forwarded",
"url":6,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.Hide.can_replace",
"url":6,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Hide.prevent_default",
"url":6,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Hide.stop",
"url":6,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Hide.name",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Hide.time",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseCapture",
"url":5,
"doc":"Sent when the mouse has been captured. When a mouse has been captures, all further mouse events will be sent to the capturing widget. Args: sender (MessageTarget): The sender of the event, (in this case the app). mouse_position (Point): The position of the mouse when captured."
},
{
"ref":"textual.events.MouseCapture.sender",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseCapture.bubble",
"url":5,
"doc":""
},
{
"ref":"textual.events.MouseCapture.verbosity",
"url":5,
"doc":""
},
{
"ref":"textual.events.MouseCapture.system",
"url":5,
"doc":""
},
{
"ref":"textual.events.MouseCapture.set_forwarded",
"url":6,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.MouseCapture.can_replace",
"url":6,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.MouseCapture.prevent_default",
"url":6,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseCapture.stop",
"url":6,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseCapture.name",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseCapture.time",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseRelease",
"url":5,
"doc":"Mouse has been released. Args: sender (MessageTarget): The sender of the event, (in this case the app). mouse_position (Point): The position of the mouse when released."
},
{
"ref":"textual.events.MouseRelease.sender",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseRelease.bubble",
"url":5,
"doc":""
},
{
"ref":"textual.events.MouseRelease.verbosity",
"url":5,
"doc":""
},
{
"ref":"textual.events.MouseRelease.system",
"url":5,
"doc":""
},
{
"ref":"textual.events.MouseRelease.set_forwarded",
"url":6,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.MouseRelease.can_replace",
"url":6,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.MouseRelease.prevent_default",
"url":6,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseRelease.stop",
"url":6,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseRelease.name",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseRelease.time",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.InputEvent",
"url":5,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.InputEvent.sender",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.InputEvent.bubble",
"url":5,
"doc":""
},
{
"ref":"textual.events.InputEvent.verbosity",
"url":5,
"doc":""
},
{
"ref":"textual.events.InputEvent.system",
"url":5,
"doc":""
},
{
"ref":"textual.events.InputEvent.set_forwarded",
"url":6,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.InputEvent.can_replace",
"url":6,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.InputEvent.prevent_default",
"url":6,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.InputEvent.stop",
"url":6,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.InputEvent.name",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.InputEvent.time",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Key",
"url":5,
"doc":"Sent when the user hits a key on the keyboard Args: sender (MessageTarget): The sender of the event (the App) key (str): The pressed key if a single character (or a longer string for special characters)"
},
{
"ref":"textual.events.Key.sender",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Key.key",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Key.bubble",
"url":5,
"doc":""
},
{
"ref":"textual.events.Key.verbosity",
"url":5,
"doc":""
},
{
"ref":"textual.events.Key.system",
"url":5,
"doc":""
},
{
"ref":"textual.events.Key.set_forwarded",
"url":6,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.Key.can_replace",
"url":6,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Key.prevent_default",
"url":6,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Key.stop",
"url":6,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Key.name",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Key.time",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent",
"url":5,
"doc":"Sent in response to a mouse event Args: sender (MessageTarget): The sender of the event. x (int): The relative x coordinate. y (int): The relative y coordinate. delta_x (int): Change in x since the last message. delta_y (int): Change in y since the last message. button (int): Indexed of the pressed button. shift (bool): True if the shift key is pressed. meta (bool): True if the meta key is pressed. ctrl (bool): True if the ctrl key is pressed. screen_x (int, optional): The absolute x coordinate. screen_y (int, optional): The absolute y coordinate. style (Style, optional): The Rich Style under the mouse cursor."
},
{
"ref":"textual.events.MouseEvent.sender",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent.from_event",
"url":5,
"doc":"",
"func":1
},
{
"ref":"textual.events.MouseEvent.style",
"url":5,
"doc":""
},
{
"ref":"textual.events.MouseEvent.offset",
"url":5,
"doc":"",
"func":1
},
{
"ref":"textual.events.MouseEvent.button",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent.ctrl",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent.delta_x",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent.delta_y",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent.meta",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent.screen_x",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent.screen_y",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent.shift",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent.x",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent.y",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent.bubble",
"url":5,
"doc":""
},
{
"ref":"textual.events.MouseEvent.verbosity",
"url":5,
"doc":""
},
{
"ref":"textual.events.MouseEvent.system",
"url":5,
"doc":""
},
{
"ref":"textual.events.MouseEvent.set_forwarded",
"url":6,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.MouseEvent.can_replace",
"url":6,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.MouseEvent.prevent_default",
"url":6,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseEvent.stop",
"url":6,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseEvent.name",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent.time",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove",
"url":5,
"doc":"Sent when the mouse cursor moves. Args: sender (MessageTarget): The sender of the event. x (int): The relative x coordinate. y (int): The relative y coordinate. delta_x (int): Change in x since the last message. delta_y (int): Change in y since the last message. button (int): Indexed of the pressed button. shift (bool): True if the shift key is pressed. meta (bool): True if the meta key is pressed. ctrl (bool): True if the ctrl key is pressed. screen_x (int, optional): The absolute x coordinate. screen_y (int, optional): The absolute y coordinate. style (Style, optional): The Rich Style under the mouse cursor."
},
{
"ref":"textual.events.MouseMove.sender",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove.bubble",
"url":5,
"doc":""
},
{
"ref":"textual.events.MouseMove.verbosity",
"url":5,
"doc":""
},
{
"ref":"textual.events.MouseMove.system",
"url":5,
"doc":""
},
{
"ref":"textual.events.MouseMove.button",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove.ctrl",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove.delta_x",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove.delta_y",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove.meta",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove.screen_x",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove.screen_y",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove.shift",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove.x",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove.y",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove.set_forwarded",
"url":6,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.MouseMove.can_replace",
"url":6,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.MouseMove.prevent_default",
"url":6,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseMove.stop",
"url":6,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseMove.name",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove.time",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown",
"url":5,
"doc":"Sent in response to a mouse event Args: sender (MessageTarget): The sender of the event. x (int): The relative x coordinate. y (int): The relative y coordinate. delta_x (int): Change in x since the last message. delta_y (int): Change in y since the last message. button (int): Indexed of the pressed button. shift (bool): True if the shift key is pressed. meta (bool): True if the meta key is pressed. ctrl (bool): True if the ctrl key is pressed. screen_x (int, optional): The absolute x coordinate. screen_y (int, optional): The absolute y coordinate. style (Style, optional): The Rich Style under the mouse cursor."
},
{
"ref":"textual.events.MouseDown.sender",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown.bubble",
"url":5,
"doc":""
},
{
"ref":"textual.events.MouseDown.verbosity",
"url":5,
"doc":""
},
{
"ref":"textual.events.MouseDown.system",
"url":5,
"doc":""
},
{
"ref":"textual.events.MouseDown.button",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown.ctrl",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown.delta_x",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown.delta_y",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown.meta",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown.screen_x",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown.screen_y",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown.shift",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown.x",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown.y",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown.set_forwarded",
"url":6,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.MouseDown.can_replace",
"url":6,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.MouseDown.prevent_default",
"url":6,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseDown.stop",
"url":6,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseDown.name",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown.time",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp",
"url":5,
"doc":"Sent in response to a mouse event Args: sender (MessageTarget): The sender of the event. x (int): The relative x coordinate. y (int): The relative y coordinate. delta_x (int): Change in x since the last message. delta_y (int): Change in y since the last message. button (int): Indexed of the pressed button. shift (bool): True if the shift key is pressed. meta (bool): True if the meta key is pressed. ctrl (bool): True if the ctrl key is pressed. screen_x (int, optional): The absolute x coordinate. screen_y (int, optional): The absolute y coordinate. style (Style, optional): The Rich Style under the mouse cursor."
},
{
"ref":"textual.events.MouseUp.sender",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp.bubble",
"url":5,
"doc":""
},
{
"ref":"textual.events.MouseUp.verbosity",
"url":5,
"doc":""
},
{
"ref":"textual.events.MouseUp.system",
"url":5,
"doc":""
},
{
"ref":"textual.events.MouseUp.button",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp.ctrl",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp.delta_x",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp.delta_y",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp.meta",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp.screen_x",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp.screen_y",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp.shift",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp.x",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp.y",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp.set_forwarded",
"url":6,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.MouseUp.can_replace",
"url":6,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.MouseUp.prevent_default",
"url":6,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseUp.stop",
"url":6,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseUp.name",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp.time",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseScrollDown",
"url":5,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.MouseScrollDown.sender",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseScrollDown.x",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseScrollDown.y",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseScrollDown.bubble",
"url":5,
"doc":""
},
{
"ref":"textual.events.MouseScrollDown.verbosity",
"url":5,
"doc":""
},
{
"ref":"textual.events.MouseScrollDown.system",
"url":5,
"doc":""
},
{
"ref":"textual.events.MouseScrollDown.set_forwarded",
"url":6,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.MouseScrollDown.can_replace",
"url":6,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.MouseScrollDown.prevent_default",
"url":6,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseScrollDown.stop",
"url":6,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseScrollDown.name",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseScrollDown.time",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseScrollUp",
"url":5,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.MouseScrollUp.sender",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseScrollUp.bubble",
"url":5,
"doc":""
},
{
"ref":"textual.events.MouseScrollUp.verbosity",
"url":5,
"doc":""
},
{
"ref":"textual.events.MouseScrollUp.system",
"url":5,
"doc":""
},
{
"ref":"textual.events.MouseScrollUp.x",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseScrollUp.y",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseScrollUp.set_forwarded",
"url":6,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.MouseScrollUp.can_replace",
"url":6,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.MouseScrollUp.prevent_default",
"url":6,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseScrollUp.stop",
"url":6,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseScrollUp.name",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseScrollUp.time",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click",
"url":5,
"doc":"Sent in response to a mouse event Args: sender (MessageTarget): The sender of the event. x (int): The relative x coordinate. y (int): The relative y coordinate. delta_x (int): Change in x since the last message. delta_y (int): Change in y since the last message. button (int): Indexed of the pressed button. shift (bool): True if the shift key is pressed. meta (bool): True if the meta key is pressed. ctrl (bool): True if the ctrl key is pressed. screen_x (int, optional): The absolute x coordinate. screen_y (int, optional): The absolute y coordinate. style (Style, optional): The Rich Style under the mouse cursor."
},
{
"ref":"textual.events.Click.sender",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click.bubble",
"url":5,
"doc":""
},
{
"ref":"textual.events.Click.verbosity",
"url":5,
"doc":""
},
{
"ref":"textual.events.Click.system",
"url":5,
"doc":""
},
{
"ref":"textual.events.Click.button",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click.ctrl",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click.delta_x",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click.delta_y",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click.meta",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click.screen_x",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click.screen_y",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click.shift",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click.x",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click.y",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click.set_forwarded",
"url":6,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.Click.can_replace",
"url":6,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Click.prevent_default",
"url":6,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Click.stop",
"url":6,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Click.name",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click.time",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DoubleClick",
"url":5,
"doc":"Sent in response to a mouse event Args: sender (MessageTarget): The sender of the event. x (int): The relative x coordinate. y (int): The relative y coordinate. delta_x (int): Change in x since the last message. delta_y (int): Change in y since the last message. button (int): Indexed of the pressed button. shift (bool): True if the shift key is pressed. meta (bool): True if the meta key is pressed. ctrl (bool): True if the ctrl key is pressed. screen_x (int, optional): The absolute x coordinate. screen_y (int, optional): The absolute y coordinate. style (Style, optional): The Rich Style under the mouse cursor."
},
{
"ref":"textual.events.DoubleClick.sender",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DoubleClick.bubble",
"url":5,
"doc":""
},
{
"ref":"textual.events.DoubleClick.verbosity",
"url":5,
"doc":""
},
{
"ref":"textual.events.DoubleClick.system",
"url":5,
"doc":""
},
{
"ref":"textual.events.DoubleClick.button",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DoubleClick.ctrl",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DoubleClick.delta_x",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DoubleClick.delta_y",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DoubleClick.meta",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DoubleClick.screen_x",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DoubleClick.screen_y",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DoubleClick.shift",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DoubleClick.x",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DoubleClick.y",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DoubleClick.set_forwarded",
"url":6,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.DoubleClick.can_replace",
"url":6,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.DoubleClick.prevent_default",
"url":6,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.DoubleClick.stop",
"url":6,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.DoubleClick.name",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DoubleClick.time",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Timer",
"url":5,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Timer.sender",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Timer.callback",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Timer.count",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Timer.time",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Timer.bubble",
"url":5,
"doc":""
},
{
"ref":"textual.events.Timer.verbosity",
"url":5,
"doc":""
},
{
"ref":"textual.events.Timer.system",
"url":5,
"doc":""
},
{
"ref":"textual.events.Timer.set_forwarded",
"url":6,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.Timer.can_replace",
"url":6,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Timer.prevent_default",
"url":6,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Timer.stop",
"url":6,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Timer.name",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Enter",
"url":5,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Enter.sender",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Enter.bubble",
"url":5,
"doc":""
},
{
"ref":"textual.events.Enter.verbosity",
"url":5,
"doc":""
},
{
"ref":"textual.events.Enter.system",
"url":5,
"doc":""
},
{
"ref":"textual.events.Enter.set_forwarded",
"url":6,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.Enter.can_replace",
"url":6,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Enter.prevent_default",
"url":6,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Enter.stop",
"url":6,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Enter.name",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Enter.time",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Leave",
"url":5,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Leave.sender",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Leave.bubble",
"url":5,
"doc":""
},
{
"ref":"textual.events.Leave.verbosity",
"url":5,
"doc":""
},
{
"ref":"textual.events.Leave.system",
"url":5,
"doc":""
},
{
"ref":"textual.events.Leave.set_forwarded",
"url":6,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.Leave.can_replace",
"url":6,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Leave.prevent_default",
"url":6,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Leave.stop",
"url":6,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Leave.name",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Leave.time",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Focus",
"url":5,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Focus.sender",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Focus.bubble",
"url":5,
"doc":""
},
{
"ref":"textual.events.Focus.verbosity",
"url":5,
"doc":""
},
{
"ref":"textual.events.Focus.system",
"url":5,
"doc":""
},
{
"ref":"textual.events.Focus.set_forwarded",
"url":6,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.Focus.can_replace",
"url":6,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Focus.prevent_default",
"url":6,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Focus.stop",
"url":6,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Focus.name",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Focus.time",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Blur",
"url":5,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Blur.sender",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Blur.bubble",
"url":5,
"doc":""
},
{
"ref":"textual.events.Blur.verbosity",
"url":5,
"doc":""
},
{
"ref":"textual.events.Blur.system",
"url":5,
"doc":""
},
{
"ref":"textual.events.Blur.set_forwarded",
"url":6,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.Blur.can_replace",
"url":6,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Blur.prevent_default",
"url":6,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Blur.stop",
"url":6,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Blur.name",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Blur.time",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DescendantFocus",
"url":5,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.DescendantFocus.sender",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DescendantFocus.bubble",
"url":5,
"doc":""
},
{
"ref":"textual.events.DescendantFocus.verbosity",
"url":5,
"doc":""
},
{
"ref":"textual.events.DescendantFocus.system",
"url":5,
"doc":""
},
{
"ref":"textual.events.DescendantFocus.set_forwarded",
"url":6,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.DescendantFocus.can_replace",
"url":6,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.DescendantFocus.prevent_default",
"url":6,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.DescendantFocus.stop",
"url":6,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.DescendantFocus.name",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DescendantFocus.time",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DescendantBlur",
"url":5,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.DescendantBlur.sender",
"url":5,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DescendantBlur.bubble",
"url":5,
"doc":""
},
{
"ref":"textual.events.DescendantBlur.verbosity",
"url":5,
"doc":""
},
{
"ref":"textual.events.DescendantBlur.system",
"url":5,
"doc":""
},
{
"ref":"textual.events.DescendantBlur.set_forwarded",
"url":6,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.DescendantBlur.can_replace",
"url":6,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.DescendantBlur.prevent_default",
"url":6,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.DescendantBlur.stop",
"url":6,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.DescendantBlur.name",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DescendantBlur.time",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.dom",
"url":3,
"doc":""
},
{
"ref":"textual.dom.NoParent",
"url":3,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"textual.dom.DOMNode",
"url":3,
"doc":"A node in a hierarchy of things forming the UI. Nodes are mountable and may be styled with CSS."
},
{
"ref":"textual.dom.DOMNode.DEFAULT_STYLES",
"url":3,
"doc":""
},
{
"ref":"textual.dom.DOMNode.INLINE_STYLES",
"url":3,
"doc":""
},
{
"ref":"textual.dom.DOMNode.on_register",
"url":3,
"doc":"Called when the widget is registered Args: app (App): Parent application.",
"func":1
},
{
"ref":"textual.dom.DOMNode.parent",
"url":3,
"doc":"Get the parent node. Returns: DOMNode: The node which is the direct parent of this node."
},
{
"ref":"textual.dom.DOMNode.screen",
"url":3,
"doc":"Get the screen that this node is contained within. Note that this may not be the currently active screen within the app."
},
{
"ref":"textual.dom.DOMNode.id",
"url":3,
"doc":"The ID of this node, or None if the node has no ID. Returns: (str | None): A Node ID or None."
},
{
"ref":"textual.dom.DOMNode.name",
"url":3,
"doc":""
},
{
"ref":"textual.dom.DOMNode.css_identifier",
"url":3,
"doc":"A CSS selector that identifies this DOM node."
},
{
"ref":"textual.dom.DOMNode.css_identifier_styled",
"url":3,
"doc":"A stylized CSS identifier."
},
{
"ref":"textual.dom.DOMNode.classes",
"url":3,
"doc":""
},
{
"ref":"textual.dom.DOMNode.pseudo_classes",
"url":3,
"doc":"Get a set of all pseudo classes"
},
{
"ref":"textual.dom.DOMNode.css_type",
"url":3,
"doc":"Gets the CSS type, used by the CSS. Returns: str: A type used in CSS (lower cased class name)."
},
{
"ref":"textual.dom.DOMNode.css_path_nodes",
"url":3,
"doc":"A list of nodes from the root to this node, forming a \"path\". Returns: list[DOMNode]: List of Nodes, starting with the root and ending with this node."
},
{
"ref":"textual.dom.DOMNode.display",
"url":3,
"doc":"Returns:  True if this DOMNode is displayed ( display != \"none\" ),  False otherwise."
},
{
"ref":"textual.dom.DOMNode.visible",
"url":3,
"doc":""
},
{
"ref":"textual.dom.DOMNode.tree",
"url":3,
"doc":"Get a Rich tree object which will recursively render the structure of the node tree. Returns: Tree: A Rich object which may be printed."
},
{
"ref":"textual.dom.DOMNode.rich_text_style",
"url":3,
"doc":"Get the text style object. A widget's style is influenced by its parent. For instance if a widgets background has an alpha, then its parent's background color will show through. Additionally, widgets will inherit their parent's text style (i.e. bold, italic etc). Returns: Style: Rich Style object."
},
{
"ref":"textual.dom.DOMNode.ancestors",
"url":3,
"doc":"Get a list of Nodes by tracing ancestors all the way back to App."
},
{
"ref":"textual.dom.DOMNode.displayed_children",
"url":3,
"doc":"The children which don't have display: none set."
},
{
"ref":"textual.dom.DOMNode.focusable_children",
"url":3,
"doc":"Get the children which may be focused."
},
{
"ref":"textual.dom.DOMNode.get_pseudo_classes",
"url":3,
"doc":"Get any pseudo classes applicable to this Node, e.g. hover, focus. Returns: Iterable[str]: Iterable of strings, such as a generator.",
"func":1
},
{
"ref":"textual.dom.DOMNode.reset_styles",
"url":3,
"doc":"",
"func":1
},
{
"ref":"textual.dom.DOMNode.on_style_change",
"url":3,
"doc":"",
"func":1
},
{
"ref":"textual.dom.DOMNode.add_child",
"url":3,
"doc":"Add a new child node. Args: node (DOMNode): A DOM node.",
"func":1
},
{
"ref":"textual.dom.DOMNode.add_children",
"url":3,
"doc":"Add multiple children to this node. Args:  nodes (DOMNode): Positional args should be new DOM nodes.  named_nodes (DOMNode): Keyword args will be assigned the argument name as an ID.",
"func":1
},
{
"ref":"textual.dom.DOMNode.walk_children",
"url":3,
"doc":"Generate all descendents of this node. Args: with_self (bool, optional): Also include self in the results. Defaults to True.",
"func":1
},
{
"ref":"textual.dom.DOMNode.get_child",
"url":3,
"doc":"Return the first child (immediate descendent) of this node with the given ID. Args: id (str): The ID of the child. Returns: DOMNode: The first child of this node with the ID. Raises: NoMatchingNodesError: if no children could be found for this ID",
"func":1
},
{
"ref":"textual.dom.DOMNode.query",
"url":3,
"doc":"Get a DOM query. Args: selector (str, optional): A CSS selector or  None for all nodes. Defaults to None. Returns: DOMQuery: A query object.",
"func":1
},
{
"ref":"textual.dom.DOMNode.set_styles",
"url":3,
"doc":"Set custom styles on this object.",
"func":1
},
{
"ref":"textual.dom.DOMNode.has_class",
"url":3,
"doc":"Check if the Node has all the given class names. Args:  class_names (str): CSS class names to check. Returns: bool:  True if the node has all the given class names, otherwise  False .",
"func":1
},
{
"ref":"textual.dom.DOMNode.add_class",
"url":3,
"doc":"Add class names to this Node. Args:  class_names (str): CSS class names to add.",
"func":1
},
{
"ref":"textual.dom.DOMNode.remove_class",
"url":3,
"doc":"Remove class names from this Node. Args:  class_names (str): CSS class names to remove.",
"func":1
},
{
"ref":"textual.dom.DOMNode.toggle_class",
"url":3,
"doc":"Toggle class names on this Node. Args:  class_names (str): CSS class names to toggle.",
"func":1
},
{
"ref":"textual.dom.DOMNode.has_pseudo_class",
"url":3,
"doc":"Check for pseudo class (such as hover, focus etc)",
"func":1
},
{
"ref":"textual.dom.DOMNode.refresh",
"url":3,
"doc":"",
"func":1
},
{
"ref":"textual.dom.DOMNode.app",
"url":4,
"doc":"Get the current app."
},
{
"ref":"textual.dom.DOMNode.disable_messages",
"url":4,
"doc":"Disable message types from being processed.",
"func":1
},
{
"ref":"textual.dom.DOMNode.enable_messages",
"url":4,
"doc":"Enable processing of messages types.",
"func":1
},
{
"ref":"textual.dom.DOMNode.get_message",
"url":4,
"doc":"Get the next event on the queue, or None if queue is closed. Returns: Optional[Event]: Event object or None.",
"func":1
},
{
"ref":"textual.dom.DOMNode.peek_message",
"url":4,
"doc":"Peek the message at the head of the queue (does not remove it from the queue), or return None if the queue is empty. Returns: Optional[Message]: The message or None.",
"func":1
},
{
"ref":"textual.dom.DOMNode.call_later",
"url":4,
"doc":"Run a callback after processing all messages and refreshing the screen. Args: callback (Callable): A callable.",
"func":1
},
{
"ref":"textual.dom.DOMNode.close_messages_no_wait",
"url":4,
"doc":"Request the message queue to exit.",
"func":1
},
{
"ref":"textual.dom.DOMNode.close_messages",
"url":4,
"doc":"Close message queue, and optionally wait for queue to finish processing.",
"func":1
},
{
"ref":"textual.dom.DOMNode.check_idle",
"url":4,
"doc":"Prompt the message pump to call idle if the queue is empty.",
"func":1
},
{
"ref":"textual.dom.DOMNode.post_priority_message",
"url":4,
"doc":"Post a \"priority\" messages which will be processes prior to regular messages. Note that you should rarely need this in a regular app. It exists primarily to allow timer messages to skip the queue, so that they can be more regular. Args: message (Message): A message. Returns: bool: True if the messages was processed.",
"func":1
},
{
"ref":"textual.dom.DOMNode.dispatch_key",
"url":4,
"doc":"Dispatch a key event to method. This method will call the method named 'key_ ' if it exists. Args: event (events.Key): A key event.",
"func":1
},
{
"ref":"textual.layouts",
"url":7,
"doc":""
},
{
"ref":"textual.layouts.grid",
"url":8,
"doc":""
},
{
"ref":"textual.layouts.grid.GridOptions",
"url":8,
"doc":"GridOptions(name: 'str', size: 'int | None' = None, fraction: 'int' = 1, min_size: 'int' = 1, max_size: 'int | None' = None)"
},
{
"ref":"textual.layouts.grid.GridOptions.name",
"url":8,
"doc":""
},
{
"ref":"textual.layouts.grid.GridOptions.size",
"url":8,
"doc":""
},
{
"ref":"textual.layouts.grid.GridOptions.fraction",
"url":8,
"doc":""
},
{
"ref":"textual.layouts.grid.GridOptions.min_size",
"url":8,
"doc":""
},
{
"ref":"textual.layouts.grid.GridOptions.max_size",
"url":8,
"doc":""
},
{
"ref":"textual.layouts.grid.GridArea",
"url":8,
"doc":"GridArea(col_start, col_end, row_start, row_end)"
},
{
"ref":"textual.layouts.grid.GridArea.col_start",
"url":8,
"doc":"Alias for field number 0"
},
{
"ref":"textual.layouts.grid.GridArea.col_end",
"url":8,
"doc":"Alias for field number 1"
},
{
"ref":"textual.layouts.grid.GridArea.row_start",
"url":8,
"doc":"Alias for field number 2"
},
{
"ref":"textual.layouts.grid.GridArea.row_end",
"url":8,
"doc":"Alias for field number 3"
},
{
"ref":"textual.layouts.grid.GridLayout",
"url":8,
"doc":"Responsible for arranging Widgets in a view and rendering them."
},
{
"ref":"textual.layouts.grid.GridLayout.name",
"url":8,
"doc":""
},
{
"ref":"textual.layouts.grid.GridLayout.is_row_visible",
"url":8,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.grid.GridLayout.is_column_visible",
"url":8,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.grid.GridLayout.show_row",
"url":8,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.grid.GridLayout.show_column",
"url":8,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.grid.GridLayout.add_column",
"url":8,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.grid.GridLayout.add_row",
"url":8,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.grid.GridLayout.add_areas",
"url":8,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.grid.GridLayout.set_gap",
"url":8,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.grid.GridLayout.set_gutter",
"url":8,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.grid.GridLayout.add_widget",
"url":8,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.grid.GridLayout.place",
"url":8,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.grid.GridLayout.set_repeat",
"url":8,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.grid.GridLayout.set_align",
"url":8,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.grid.GridLayout.get_widgets",
"url":8,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.grid.GridLayout.arrange",
"url":8,
"doc":"Generate a map that associates widgets with their location on screen. Args: width (int): [description] height (int): [description] offset (Point, optional): [description]. Defaults to Point(0, 0). Returns: dict[Widget, OrderedRegion]: [description]",
"func":1
},
{
"ref":"textual.layouts.horizontal",
"url":9,
"doc":""
},
{
"ref":"textual.layouts.horizontal.HorizontalLayout",
"url":9,
"doc":"Used to layout Widgets horizontally on screen, from left to right. Since Widgets naturally fill the space of their parent container, all widgets used in a horizontal layout should have a specified."
},
{
"ref":"textual.layouts.horizontal.HorizontalLayout.name",
"url":9,
"doc":""
},
{
"ref":"textual.layouts.horizontal.HorizontalLayout.arrange",
"url":9,
"doc":"Generate a layout map that defines where on the screen the widgets will be drawn. Args: parent (Widget): Parent widget. size (Size): Size of container. scroll (Offset): Offset to apply to the Widget placements. Returns: Iterable[WidgetPlacement]: An iterable of widget location",
"func":1
},
{
"ref":"textual.layouts.dock",
"url":10,
"doc":""
},
{
"ref":"textual.layouts.dock.DockOptions",
"url":10,
"doc":"DockOptions(size: 'int | None' = None, fraction: 'int' = 1, min_size: 'int' = 1)"
},
{
"ref":"textual.layouts.dock.DockOptions.size",
"url":10,
"doc":""
},
{
"ref":"textual.layouts.dock.DockOptions.fraction",
"url":10,
"doc":""
},
{
"ref":"textual.layouts.dock.DockOptions.min_size",
"url":10,
"doc":""
},
{
"ref":"textual.layouts.dock.Dock",
"url":10,
"doc":"Dock(edge, widgets, z)"
},
{
"ref":"textual.layouts.dock.Dock.edge",
"url":10,
"doc":"Alias for field number 0"
},
{
"ref":"textual.layouts.dock.Dock.widgets",
"url":10,
"doc":"Alias for field number 1"
},
{
"ref":"textual.layouts.dock.Dock.z",
"url":10,
"doc":"Alias for field number 2"
},
{
"ref":"textual.layouts.dock.DockLayout",
"url":10,
"doc":"Dock Widgets to edge of screen."
},
{
"ref":"textual.layouts.dock.DockLayout.name",
"url":10,
"doc":""
},
{
"ref":"textual.layouts.dock.DockLayout.get_docks",
"url":10,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.dock.DockLayout.arrange",
"url":10,
"doc":"Generate a layout map that defines where on the screen the widgets will be drawn. Args: parent (Widget): Parent widget. size (Size): Size of container. scroll (Offset): Offset to apply to the Widget placements. Returns: Iterable[WidgetPlacement]: An iterable of widget location",
"func":1
},
{
"ref":"textual.layouts.vertical",
"url":11,
"doc":""
},
{
"ref":"textual.layouts.vertical.VerticalLayout",
"url":11,
"doc":"Used to layout Widgets vertically on screen, from top to bottom."
},
{
"ref":"textual.layouts.vertical.VerticalLayout.name",
"url":11,
"doc":""
},
{
"ref":"textual.layouts.vertical.VerticalLayout.arrange",
"url":11,
"doc":"Generate a layout map that defines where on the screen the widgets will be drawn. Args: parent (Widget): Parent widget. size (Size): Size of container. scroll (Offset): Offset to apply to the Widget placements. Returns: Iterable[WidgetPlacement]: An iterable of widget location",
"func":1
},
{
"ref":"textual.layouts.factory",
"url":12,
"doc":""
},
{
"ref":"textual.layouts.factory.MissingLayout",
"url":12,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"textual.layouts.factory.get_layout",
"url":12,
"doc":"Get a named layout object. Args: name (str): Name of the layout. Raises: MissingLayout: If the named layout doesn't exist. Returns: Layout: A layout object.",
"func":1
},
{
"ref":"textual.actions",
"url":13,
"doc":""
},
{
"ref":"textual.actions.ActionError",
"url":13,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"textual.actions.parse",
"url":13,
"doc":"",
"func":1
},
{
"ref":"textual.keys",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys",
"url":14,
"doc":"List of keys for use in key bindings. Note that this is an \"StrEnum\", all values can be compared against strings."
},
{
"ref":"textual.keys.Keys.value",
"url":14,
"doc":"The value of the Enum member."
},
{
"ref":"textual.keys.Keys.Escape",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftEscape",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.Return",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlAt",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlA",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlB",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlC",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlD",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlE",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlG",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlH",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlI",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlJ",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlK",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlL",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlM",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlN",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlO",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlP",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlQ",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlR",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlS",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlT",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlU",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlV",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlW",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlX",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlY",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlZ",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.Control1",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.Control2",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.Control3",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.Control4",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.Control5",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.Control6",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.Control7",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.Control8",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.Control9",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.Control0",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShift1",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShift2",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShift3",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShift4",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShift5",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShift6",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShift7",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShift8",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShift9",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShift0",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlBackslash",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlSquareClose",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlCircumflex",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlUnderscore",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.Left",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.Right",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.Up",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.Down",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.Home",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.End",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.Insert",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.Delete",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.PageUp",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.PageDown",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlLeft",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlRight",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlUp",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlDown",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlHome",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlEnd",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlInsert",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlDelete",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlPageUp",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlPageDown",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftLeft",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftRight",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftUp",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftDown",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftHome",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftEnd",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftInsert",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftDelete",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftPageUp",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftPageDown",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShiftLeft",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShiftRight",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShiftUp",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShiftDown",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShiftHome",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShiftEnd",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShiftInsert",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShiftDelete",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShiftPageUp",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShiftPageDown",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.BackTab",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.F1",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.F2",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.F3",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.F4",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.F5",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.F6",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.F7",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.F8",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.F9",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.F10",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.F11",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.F12",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.F13",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.F14",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.F15",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.F16",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.F17",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.F18",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.F19",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.F20",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.F21",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.F22",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.F23",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.F24",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF1",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF2",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF3",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF4",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF5",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF6",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF7",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF8",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF9",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF10",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF11",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF12",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF13",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF14",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF15",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF16",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF17",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF18",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF19",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF20",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF21",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF22",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF23",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF24",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.Any",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ScrollUp",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ScrollDown",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.CPRResponse",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.Vt100MouseEvent",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.WindowsMouseEvent",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.BracketedPaste",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.Ignore",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlSpace",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.Tab",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.Enter",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.Backspace",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftControlLeft",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftControlRight",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftControlHome",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftControlEnd",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Binding",
"url":14,
"doc":"Binding(action: str, description: str, show: bool = False)"
},
{
"ref":"textual.keys.Binding.action",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Binding.description",
"url":14,
"doc":""
},
{
"ref":"textual.keys.Binding.show",
"url":14,
"doc":""
},
{
"ref":"textual.widgets",
"url":15,
"doc":""
},
{
"ref":"textual.widgets.Button",
"url":15,
"doc":"A simple clickable button."
},
{
"ref":"textual.widgets.Button.CSS",
"url":15,
"doc":""
},
{
"ref":"textual.widgets.Button.Pressed",
"url":15,
"doc":"Base class for a message."
},
{
"ref":"textual.widgets.Button.label",
"url":15,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Button.validate_label",
"url":15,
"doc":"Parse markup for self.label",
"func":1
},
{
"ref":"textual.widgets.Button.render",
"url":15,
"doc":"Get renderable for widget. Args: style (Styles): The Styles object for this Widget. Returns: RenderableType: Any renderable",
"func":1
},
{
"ref":"textual.widgets.Button.on_click",
"url":15,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.Button.on_key",
"url":15,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.Button.can_focus",
"url":15,
"doc":""
},
{
"ref":"textual.widgets.Button.can_focus_children",
"url":15,
"doc":""
},
{
"ref":"textual.widgets.Button.auto_width",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Button.auto_height",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Button.has_focus",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Button.descendant_has_focus",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Button.mouse_over",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Button.scroll_x",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Button.scroll_y",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Button.scroll_target_x",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Button.scroll_target_y",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Button.show_vertical_scrollbar",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Button.show_horizontal_scrollbar",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Button.compose",
"url":2,
"doc":"Yield child widgets for a container.",
"func":1
},
{
"ref":"textual.widgets.Button.on_register",
"url":2,
"doc":"Called when the instance is registered. Args: app (App): App instance.",
"func":1
},
{
"ref":"textual.widgets.Button.get_box_model",
"url":2,
"doc":"Process the box model for this widget. Args: container (Size): The size of the container widget (with a layout) viewport (Size): The viewport size. Returns: BoxModel: The size and margin for this widget.",
"func":1
},
{
"ref":"textual.widgets.Button.get_content_width",
"url":2,
"doc":"Gets the width of the content area. Args: container_size (Size): Size of the container (immediate parent) widget. viewport_size (Size): Size of the viewport. Returns: int: The optimal width of the content.",
"func":1
},
{
"ref":"textual.widgets.Button.get_content_height",
"url":2,
"doc":"Gets the height (number of lines) in the content area. Args: container_size (Size): Size of the container (immediate parent) widget. viewport_size (Size): Size of the viewport. width (int): Width of renderable. Returns: int: The height of the content.",
"func":1
},
{
"ref":"textual.widgets.Button.vertical_scrollbar",
"url":2,
"doc":"Get a vertical scrollbar (create if necessary) Returns: ScrollBar: ScrollBar Widget."
},
{
"ref":"textual.widgets.Button.horizontal_scrollbar",
"url":2,
"doc":"Get a vertical scrollbar (create if necessary) Returns: ScrollBar: ScrollBar Widget."
},
{
"ref":"textual.widgets.Button.scrollbars_enabled",
"url":2,
"doc":"A tuple of booleans that indicate if scrollbars are enabled. Returns: tuple[bool, bool]: A tuple of ( ,  )"
},
{
"ref":"textual.widgets.Button.set_dirty",
"url":2,
"doc":"Set the Widget as 'dirty' (requiring re-render).",
"func":1
},
{
"ref":"textual.widgets.Button.scroll_to",
"url":2,
"doc":"Scroll to a given (absolute) coordinate, optionally animating. Args: x (int | None, optional): X coordinate (column) to scroll to, or  None for no change. Defaults to None. y (int | None, optional): Y coordinate (row) to scroll to, or  None for no change. Defaults to None. animate (bool, optional): Animate to new scroll position. Defaults to False. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.widgets.Button.scroll_relative",
"url":2,
"doc":"Scroll relative to current position. Args: x (int | None, optional): X distance (columns) to scroll, or  None for no change. Defaults to None. y (int | None, optional): Y distance (rows) to scroll, or  None for no change. Defaults to None. animate (bool, optional): Animate to new scroll position. Defaults to False. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.widgets.Button.scroll_to_widget",
"url":2,
"doc":"Scroll so that a child widget is in the visible area. Args: widget (Widget): A Widget in the children. animate (bool, optional): True to animate, or False to jump. Defaults to True. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.widgets.Button.get_pseudo_classes",
"url":2,
"doc":"Pseudo classes for a widget",
"func":1
},
{
"ref":"textual.widgets.Button.render_styled",
"url":2,
"doc":"Applies style attributes to the default renderable. Returns: RenderableType: A new renderable.",
"func":1
},
{
"ref":"textual.widgets.Button.content_region",
"url":2,
"doc":"A region relative to the Widget origin that contains the content."
},
{
"ref":"textual.widgets.Button.content_offset",
"url":2,
"doc":"An offset from the Widget origin where the content begins."
},
{
"ref":"textual.widgets.Button.region",
"url":2,
"doc":"The region occupied by this widget, relative to the Screen."
},
{
"ref":"textual.widgets.Button.is_transparent",
"url":2,
"doc":"Check if the background styles is not set. Returns: bool:  True if there is background color, otherwise  False ."
},
{
"ref":"textual.widgets.Button.console",
"url":2,
"doc":"Get the current console."
},
{
"ref":"textual.widgets.Button.is_container",
"url":2,
"doc":"Check if this widget is a container (contains other widgets) Returns: bool: True if this widget is a container."
},
{
"ref":"textual.widgets.Button.watch_mouse_over",
"url":2,
"doc":"Update from CSS if mouse over state changes.",
"func":1
},
{
"ref":"textual.widgets.Button.watch_has_focus",
"url":2,
"doc":"Update from CSS if has focus state changes.",
"func":1
},
{
"ref":"textual.widgets.Button.get_render_lines",
"url":2,
"doc":"Get segment lines to render the widget. Args: start (int | None, optional): line start index, or None for first line. Defaults to None. end (int | None, optional): line end index, or None for last line. Defaults to None. Returns: Lines: A list of lists of segments.",
"func":1
},
{
"ref":"textual.widgets.Button.check_layout",
"url":2,
"doc":"Check if a layout has been requested.",
"func":1
},
{
"ref":"textual.widgets.Button.call_later",
"url":2,
"doc":"Run a callback after processing all messages and refreshing the screen. Args: callback (Callable): A callable.",
"func":1
},
{
"ref":"textual.widgets.Button.refresh",
"url":2,
"doc":"Initiate a refresh of the widget. This method sets an internal flag to perform a refresh, which will be done on the next idle event. Only one refresh will be done even if this method is called multiple times. Args: repaint (bool, optional): Repaint the widget (will call render() again). Defaults to True. layout (bool, optional): Also layout widgets in the view. Defaults to False.",
"func":1
},
{
"ref":"textual.widgets.Button.on_idle",
"url":2,
"doc":"Called when there are no more events on the queue. Args: event (events.Idle): Idle event.",
"func":1
},
{
"ref":"textual.widgets.Button.focus",
"url":2,
"doc":"Give input focus to this widget.",
"func":1
},
{
"ref":"textual.widgets.Button.capture_mouse",
"url":2,
"doc":"Capture (or release) the mouse. When captured, all mouse coordinates will go to this widget even when the pointer is not directly over the widget. Args: capture (bool, optional): True to capture or False to release. Defaults to True.",
"func":1
},
{
"ref":"textual.widgets.Button.release_mouse",
"url":2,
"doc":"Release the mouse. Mouse events will only be sent when the mouse is over the widget.",
"func":1
},
{
"ref":"textual.widgets.Button.parent",
"url":3,
"doc":"Get the parent node. Returns: DOMNode: The node which is the direct parent of this node."
},
{
"ref":"textual.widgets.Button.screen",
"url":3,
"doc":"Get the screen that this node is contained within. Note that this may not be the currently active screen within the app."
},
{
"ref":"textual.widgets.Button.id",
"url":3,
"doc":"The ID of this node, or None if the node has no ID. Returns: (str | None): A Node ID or None."
},
{
"ref":"textual.widgets.Button.css_identifier",
"url":3,
"doc":"A CSS selector that identifies this DOM node."
},
{
"ref":"textual.widgets.Button.css_identifier_styled",
"url":3,
"doc":"A stylized CSS identifier."
},
{
"ref":"textual.widgets.Button.pseudo_classes",
"url":3,
"doc":"Get a set of all pseudo classes"
},
{
"ref":"textual.widgets.Button.css_type",
"url":3,
"doc":"Gets the CSS type, used by the CSS. Returns: str: A type used in CSS (lower cased class name)."
},
{
"ref":"textual.widgets.Button.css_path_nodes",
"url":3,
"doc":"A list of nodes from the root to this node, forming a \"path\". Returns: list[DOMNode]: List of Nodes, starting with the root and ending with this node."
},
{
"ref":"textual.widgets.Button.display",
"url":3,
"doc":"Returns:  True if this DOMNode is displayed ( display != \"none\" ),  False otherwise."
},
{
"ref":"textual.widgets.Button.tree",
"url":3,
"doc":"Get a Rich tree object which will recursively render the structure of the node tree. Returns: Tree: A Rich object which may be printed."
},
{
"ref":"textual.widgets.Button.rich_text_style",
"url":3,
"doc":"Get the text style object. A widget's style is influenced by its parent. For instance if a widgets background has an alpha, then its parent's background color will show through. Additionally, widgets will inherit their parent's text style (i.e. bold, italic etc). Returns: Style: Rich Style object."
},
{
"ref":"textual.widgets.Button.ancestors",
"url":3,
"doc":"Get a list of Nodes by tracing ancestors all the way back to App."
},
{
"ref":"textual.widgets.Button.displayed_children",
"url":3,
"doc":"The children which don't have display: none set."
},
{
"ref":"textual.widgets.Button.focusable_children",
"url":3,
"doc":"Get the children which may be focused."
},
{
"ref":"textual.widgets.Button.add_child",
"url":3,
"doc":"Add a new child node. Args: node (DOMNode): A DOM node.",
"func":1
},
{
"ref":"textual.widgets.Button.add_children",
"url":3,
"doc":"Add multiple children to this node. Args:  nodes (DOMNode): Positional args should be new DOM nodes.  named_nodes (DOMNode): Keyword args will be assigned the argument name as an ID.",
"func":1
},
{
"ref":"textual.widgets.Button.walk_children",
"url":3,
"doc":"Generate all descendents of this node. Args: with_self (bool, optional): Also include self in the results. Defaults to True.",
"func":1
},
{
"ref":"textual.widgets.Button.get_child",
"url":3,
"doc":"Return the first child (immediate descendent) of this node with the given ID. Args: id (str): The ID of the child. Returns: DOMNode: The first child of this node with the ID. Raises: NoMatchingNodesError: if no children could be found for this ID",
"func":1
},
{
"ref":"textual.widgets.Button.query",
"url":3,
"doc":"Get a DOM query. Args: selector (str, optional): A CSS selector or  None for all nodes. Defaults to None. Returns: DOMQuery: A query object.",
"func":1
},
{
"ref":"textual.widgets.Button.set_styles",
"url":3,
"doc":"Set custom styles on this object.",
"func":1
},
{
"ref":"textual.widgets.Button.has_class",
"url":3,
"doc":"Check if the Node has all the given class names. Args:  class_names (str): CSS class names to check. Returns: bool:  True if the node has all the given class names, otherwise  False .",
"func":1
},
{
"ref":"textual.widgets.Button.add_class",
"url":3,
"doc":"Add class names to this Node. Args:  class_names (str): CSS class names to add.",
"func":1
},
{
"ref":"textual.widgets.Button.remove_class",
"url":3,
"doc":"Remove class names from this Node. Args:  class_names (str): CSS class names to remove.",
"func":1
},
{
"ref":"textual.widgets.Button.toggle_class",
"url":3,
"doc":"Toggle class names on this Node. Args:  class_names (str): CSS class names to toggle.",
"func":1
},
{
"ref":"textual.widgets.Button.has_pseudo_class",
"url":3,
"doc":"Check for pseudo class (such as hover, focus etc)",
"func":1
},
{
"ref":"textual.widgets.Button.app",
"url":4,
"doc":"Get the current app."
},
{
"ref":"textual.widgets.Button.disable_messages",
"url":4,
"doc":"Disable message types from being processed.",
"func":1
},
{
"ref":"textual.widgets.Button.enable_messages",
"url":4,
"doc":"Enable processing of messages types.",
"func":1
},
{
"ref":"textual.widgets.Button.get_message",
"url":4,
"doc":"Get the next event on the queue, or None if queue is closed. Returns: Optional[Event]: Event object or None.",
"func":1
},
{
"ref":"textual.widgets.Button.peek_message",
"url":4,
"doc":"Peek the message at the head of the queue (does not remove it from the queue), or return None if the queue is empty. Returns: Optional[Message]: The message or None.",
"func":1
},
{
"ref":"textual.widgets.Button.close_messages_no_wait",
"url":4,
"doc":"Request the message queue to exit.",
"func":1
},
{
"ref":"textual.widgets.Button.close_messages",
"url":4,
"doc":"Close message queue, and optionally wait for queue to finish processing.",
"func":1
},
{
"ref":"textual.widgets.Button.check_idle",
"url":4,
"doc":"Prompt the message pump to call idle if the queue is empty.",
"func":1
},
{
"ref":"textual.widgets.Button.post_priority_message",
"url":4,
"doc":"Post a \"priority\" messages which will be processes prior to regular messages. Note that you should rarely need this in a regular app. It exists primarily to allow timer messages to skip the queue, so that they can be more regular. Args: message (Message): A message. Returns: bool: True if the messages was processed.",
"func":1
},
{
"ref":"textual.widgets.Button.dispatch_key",
"url":4,
"doc":"Dispatch a key event to method. This method will call the method named 'key_ ' if it exists. Args: event (events.Key): A key event.",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree",
"url":15,
"doc":"Abstract base class for generic types. A generic type is typically declared by inheriting from this class parameterized with one or more type variables. For example, a generic mapping type might be defined as class Mapping(Generic[KT, VT]): def __getitem__(self, key: KT) -> VT:  .  Etc. This class can then be used as follows def lookup_name(mapping: Mapping[KT, VT], key: KT, default: VT) -> VT: try: return mapping[key] except KeyError: return default"
},
{
"ref":"textual.widgets.DirectoryTree.has_focus",
"url":15,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.DirectoryTree.on_focus",
"url":15,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.on_blur",
"url":15,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.watch_hover_node",
"url":15,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.render_node",
"url":15,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.render_tree_label",
"url":15,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.on_mount",
"url":15,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.load_directory",
"url":15,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.handle_tree_click",
"url":15,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.can_focus",
"url":15,
"doc":""
},
{
"ref":"textual.widgets.DirectoryTree.can_focus_children",
"url":15,
"doc":""
},
{
"ref":"textual.widgets.DirectoryTree.auto_width",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.DirectoryTree.auto_height",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.DirectoryTree.descendant_has_focus",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.DirectoryTree.mouse_over",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.DirectoryTree.scroll_x",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.DirectoryTree.scroll_y",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.DirectoryTree.scroll_target_x",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.DirectoryTree.scroll_target_y",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.DirectoryTree.show_vertical_scrollbar",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.DirectoryTree.show_horizontal_scrollbar",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.DirectoryTree.compose",
"url":2,
"doc":"Yield child widgets for a container.",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.on_register",
"url":2,
"doc":"Called when the instance is registered. Args: app (App): App instance.",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.get_box_model",
"url":2,
"doc":"Process the box model for this widget. Args: container (Size): The size of the container widget (with a layout) viewport (Size): The viewport size. Returns: BoxModel: The size and margin for this widget.",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.get_content_width",
"url":2,
"doc":"Gets the width of the content area. Args: container_size (Size): Size of the container (immediate parent) widget. viewport_size (Size): Size of the viewport. Returns: int: The optimal width of the content.",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.get_content_height",
"url":2,
"doc":"Gets the height (number of lines) in the content area. Args: container_size (Size): Size of the container (immediate parent) widget. viewport_size (Size): Size of the viewport. width (int): Width of renderable. Returns: int: The height of the content.",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.vertical_scrollbar",
"url":2,
"doc":"Get a vertical scrollbar (create if necessary) Returns: ScrollBar: ScrollBar Widget."
},
{
"ref":"textual.widgets.DirectoryTree.horizontal_scrollbar",
"url":2,
"doc":"Get a vertical scrollbar (create if necessary) Returns: ScrollBar: ScrollBar Widget."
},
{
"ref":"textual.widgets.DirectoryTree.scrollbars_enabled",
"url":2,
"doc":"A tuple of booleans that indicate if scrollbars are enabled. Returns: tuple[bool, bool]: A tuple of ( ,  )"
},
{
"ref":"textual.widgets.DirectoryTree.set_dirty",
"url":2,
"doc":"Set the Widget as 'dirty' (requiring re-render).",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.scroll_to",
"url":2,
"doc":"Scroll to a given (absolute) coordinate, optionally animating. Args: x (int | None, optional): X coordinate (column) to scroll to, or  None for no change. Defaults to None. y (int | None, optional): Y coordinate (row) to scroll to, or  None for no change. Defaults to None. animate (bool, optional): Animate to new scroll position. Defaults to False. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.scroll_relative",
"url":2,
"doc":"Scroll relative to current position. Args: x (int | None, optional): X distance (columns) to scroll, or  None for no change. Defaults to None. y (int | None, optional): Y distance (rows) to scroll, or  None for no change. Defaults to None. animate (bool, optional): Animate to new scroll position. Defaults to False. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.scroll_to_widget",
"url":2,
"doc":"Scroll so that a child widget is in the visible area. Args: widget (Widget): A Widget in the children. animate (bool, optional): True to animate, or False to jump. Defaults to True. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.get_pseudo_classes",
"url":2,
"doc":"Pseudo classes for a widget",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.render_styled",
"url":2,
"doc":"Applies style attributes to the default renderable. Returns: RenderableType: A new renderable.",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.content_region",
"url":2,
"doc":"A region relative to the Widget origin that contains the content."
},
{
"ref":"textual.widgets.DirectoryTree.content_offset",
"url":2,
"doc":"An offset from the Widget origin where the content begins."
},
{
"ref":"textual.widgets.DirectoryTree.region",
"url":2,
"doc":"The region occupied by this widget, relative to the Screen."
},
{
"ref":"textual.widgets.DirectoryTree.is_transparent",
"url":2,
"doc":"Check if the background styles is not set. Returns: bool:  True if there is background color, otherwise  False ."
},
{
"ref":"textual.widgets.DirectoryTree.console",
"url":2,
"doc":"Get the current console."
},
{
"ref":"textual.widgets.DirectoryTree.is_container",
"url":2,
"doc":"Check if this widget is a container (contains other widgets) Returns: bool: True if this widget is a container."
},
{
"ref":"textual.widgets.DirectoryTree.watch_mouse_over",
"url":2,
"doc":"Update from CSS if mouse over state changes.",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.watch_has_focus",
"url":2,
"doc":"Update from CSS if has focus state changes.",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.get_render_lines",
"url":2,
"doc":"Get segment lines to render the widget. Args: start (int | None, optional): line start index, or None for first line. Defaults to None. end (int | None, optional): line end index, or None for last line. Defaults to None. Returns: Lines: A list of lists of segments.",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.check_layout",
"url":2,
"doc":"Check if a layout has been requested.",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.call_later",
"url":2,
"doc":"Run a callback after processing all messages and refreshing the screen. Args: callback (Callable): A callable.",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.refresh",
"url":2,
"doc":"Initiate a refresh of the widget. This method sets an internal flag to perform a refresh, which will be done on the next idle event. Only one refresh will be done even if this method is called multiple times. Args: repaint (bool, optional): Repaint the widget (will call render() again). Defaults to True. layout (bool, optional): Also layout widgets in the view. Defaults to False.",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.render",
"url":2,
"doc":"Get renderable for widget. Args: style (Styles): The Styles object for this Widget. Returns: RenderableType: Any renderable",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.on_idle",
"url":2,
"doc":"Called when there are no more events on the queue. Args: event (events.Idle): Idle event.",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.focus",
"url":2,
"doc":"Give input focus to this widget.",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.capture_mouse",
"url":2,
"doc":"Capture (or release) the mouse. When captured, all mouse coordinates will go to this widget even when the pointer is not directly over the widget. Args: capture (bool, optional): True to capture or False to release. Defaults to True.",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.release_mouse",
"url":2,
"doc":"Release the mouse. Mouse events will only be sent when the mouse is over the widget.",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.parent",
"url":3,
"doc":"Get the parent node. Returns: DOMNode: The node which is the direct parent of this node."
},
{
"ref":"textual.widgets.DirectoryTree.screen",
"url":3,
"doc":"Get the screen that this node is contained within. Note that this may not be the currently active screen within the app."
},
{
"ref":"textual.widgets.DirectoryTree.id",
"url":3,
"doc":"The ID of this node, or None if the node has no ID. Returns: (str | None): A Node ID or None."
},
{
"ref":"textual.widgets.DirectoryTree.css_identifier",
"url":3,
"doc":"A CSS selector that identifies this DOM node."
},
{
"ref":"textual.widgets.DirectoryTree.css_identifier_styled",
"url":3,
"doc":"A stylized CSS identifier."
},
{
"ref":"textual.widgets.DirectoryTree.pseudo_classes",
"url":3,
"doc":"Get a set of all pseudo classes"
},
{
"ref":"textual.widgets.DirectoryTree.css_type",
"url":3,
"doc":"Gets the CSS type, used by the CSS. Returns: str: A type used in CSS (lower cased class name)."
},
{
"ref":"textual.widgets.DirectoryTree.css_path_nodes",
"url":3,
"doc":"A list of nodes from the root to this node, forming a \"path\". Returns: list[DOMNode]: List of Nodes, starting with the root and ending with this node."
},
{
"ref":"textual.widgets.DirectoryTree.display",
"url":3,
"doc":"Returns:  True if this DOMNode is displayed ( display != \"none\" ),  False otherwise."
},
{
"ref":"textual.widgets.DirectoryTree.tree",
"url":3,
"doc":"Get a Rich tree object which will recursively render the structure of the node tree. Returns: Tree: A Rich object which may be printed."
},
{
"ref":"textual.widgets.DirectoryTree.rich_text_style",
"url":3,
"doc":"Get the text style object. A widget's style is influenced by its parent. For instance if a widgets background has an alpha, then its parent's background color will show through. Additionally, widgets will inherit their parent's text style (i.e. bold, italic etc). Returns: Style: Rich Style object."
},
{
"ref":"textual.widgets.DirectoryTree.ancestors",
"url":3,
"doc":"Get a list of Nodes by tracing ancestors all the way back to App."
},
{
"ref":"textual.widgets.DirectoryTree.displayed_children",
"url":3,
"doc":"The children which don't have display: none set."
},
{
"ref":"textual.widgets.DirectoryTree.focusable_children",
"url":3,
"doc":"Get the children which may be focused."
},
{
"ref":"textual.widgets.DirectoryTree.add_child",
"url":3,
"doc":"Add a new child node. Args: node (DOMNode): A DOM node.",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.add_children",
"url":3,
"doc":"Add multiple children to this node. Args:  nodes (DOMNode): Positional args should be new DOM nodes.  named_nodes (DOMNode): Keyword args will be assigned the argument name as an ID.",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.walk_children",
"url":3,
"doc":"Generate all descendents of this node. Args: with_self (bool, optional): Also include self in the results. Defaults to True.",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.get_child",
"url":3,
"doc":"Return the first child (immediate descendent) of this node with the given ID. Args: id (str): The ID of the child. Returns: DOMNode: The first child of this node with the ID. Raises: NoMatchingNodesError: if no children could be found for this ID",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.query",
"url":3,
"doc":"Get a DOM query. Args: selector (str, optional): A CSS selector or  None for all nodes. Defaults to None. Returns: DOMQuery: A query object.",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.set_styles",
"url":3,
"doc":"Set custom styles on this object.",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.has_class",
"url":3,
"doc":"Check if the Node has all the given class names. Args:  class_names (str): CSS class names to check. Returns: bool:  True if the node has all the given class names, otherwise  False .",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.add_class",
"url":3,
"doc":"Add class names to this Node. Args:  class_names (str): CSS class names to add.",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.remove_class",
"url":3,
"doc":"Remove class names from this Node. Args:  class_names (str): CSS class names to remove.",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.toggle_class",
"url":3,
"doc":"Toggle class names on this Node. Args:  class_names (str): CSS class names to toggle.",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.has_pseudo_class",
"url":3,
"doc":"Check for pseudo class (such as hover, focus etc)",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.app",
"url":4,
"doc":"Get the current app."
},
{
"ref":"textual.widgets.DirectoryTree.disable_messages",
"url":4,
"doc":"Disable message types from being processed.",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.enable_messages",
"url":4,
"doc":"Enable processing of messages types.",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.get_message",
"url":4,
"doc":"Get the next event on the queue, or None if queue is closed. Returns: Optional[Event]: Event object or None.",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.peek_message",
"url":4,
"doc":"Peek the message at the head of the queue (does not remove it from the queue), or return None if the queue is empty. Returns: Optional[Message]: The message or None.",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.close_messages_no_wait",
"url":4,
"doc":"Request the message queue to exit.",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.close_messages",
"url":4,
"doc":"Close message queue, and optionally wait for queue to finish processing.",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.check_idle",
"url":4,
"doc":"Prompt the message pump to call idle if the queue is empty.",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.post_priority_message",
"url":4,
"doc":"Post a \"priority\" messages which will be processes prior to regular messages. Note that you should rarely need this in a regular app. It exists primarily to allow timer messages to skip the queue, so that they can be more regular. Args: message (Message): A message. Returns: bool: True if the messages was processed.",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.dispatch_key",
"url":4,
"doc":"Dispatch a key event to method. This method will call the method named 'key_ ' if it exists. Args: event (events.Key): A key event.",
"func":1
},
{
"ref":"textual.widgets.FileClick",
"url":15,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.widgets.FileClick.sender",
"url":15,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.widgets.FileClick.bubble",
"url":15,
"doc":""
},
{
"ref":"textual.widgets.FileClick.verbosity",
"url":15,
"doc":""
},
{
"ref":"textual.widgets.FileClick.system",
"url":15,
"doc":""
},
{
"ref":"textual.widgets.FileClick.set_forwarded",
"url":6,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.widgets.FileClick.can_replace",
"url":6,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.widgets.FileClick.prevent_default",
"url":6,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.widgets.FileClick.stop",
"url":6,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.widgets.FileClick.name",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.widgets.FileClick.time",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.widgets.Footer",
"url":15,
"doc":"A node in a hierarchy of things forming the UI. Nodes are mountable and may be styled with CSS."
},
{
"ref":"textual.widgets.Footer.highlight_key",
"url":15,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Footer.watch_highlight_key",
"url":15,
"doc":"If highlight key changes we need to regenerate the text.",
"func":1
},
{
"ref":"textual.widgets.Footer.on_mouse_move",
"url":15,
"doc":"Store any key we are moving over.",
"func":1
},
{
"ref":"textual.widgets.Footer.on_leave",
"url":15,
"doc":"Clear any highlight when the mouse leave the widget",
"func":1
},
{
"ref":"textual.widgets.Footer.make_key_text",
"url":15,
"doc":"Create text containing all the keys.",
"func":1
},
{
"ref":"textual.widgets.Footer.render",
"url":15,
"doc":"Get renderable for widget. Args: style (Styles): The Styles object for this Widget. Returns: RenderableType: Any renderable",
"func":1
},
{
"ref":"textual.widgets.Footer.can_focus",
"url":15,
"doc":""
},
{
"ref":"textual.widgets.Footer.can_focus_children",
"url":15,
"doc":""
},
{
"ref":"textual.widgets.Footer.auto_width",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Footer.auto_height",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Footer.has_focus",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Footer.descendant_has_focus",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Footer.mouse_over",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Footer.scroll_x",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Footer.scroll_y",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Footer.scroll_target_x",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Footer.scroll_target_y",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Footer.show_vertical_scrollbar",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Footer.show_horizontal_scrollbar",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Footer.compose",
"url":2,
"doc":"Yield child widgets for a container.",
"func":1
},
{
"ref":"textual.widgets.Footer.on_register",
"url":2,
"doc":"Called when the instance is registered. Args: app (App): App instance.",
"func":1
},
{
"ref":"textual.widgets.Footer.get_box_model",
"url":2,
"doc":"Process the box model for this widget. Args: container (Size): The size of the container widget (with a layout) viewport (Size): The viewport size. Returns: BoxModel: The size and margin for this widget.",
"func":1
},
{
"ref":"textual.widgets.Footer.get_content_width",
"url":2,
"doc":"Gets the width of the content area. Args: container_size (Size): Size of the container (immediate parent) widget. viewport_size (Size): Size of the viewport. Returns: int: The optimal width of the content.",
"func":1
},
{
"ref":"textual.widgets.Footer.get_content_height",
"url":2,
"doc":"Gets the height (number of lines) in the content area. Args: container_size (Size): Size of the container (immediate parent) widget. viewport_size (Size): Size of the viewport. width (int): Width of renderable. Returns: int: The height of the content.",
"func":1
},
{
"ref":"textual.widgets.Footer.vertical_scrollbar",
"url":2,
"doc":"Get a vertical scrollbar (create if necessary) Returns: ScrollBar: ScrollBar Widget."
},
{
"ref":"textual.widgets.Footer.horizontal_scrollbar",
"url":2,
"doc":"Get a vertical scrollbar (create if necessary) Returns: ScrollBar: ScrollBar Widget."
},
{
"ref":"textual.widgets.Footer.scrollbars_enabled",
"url":2,
"doc":"A tuple of booleans that indicate if scrollbars are enabled. Returns: tuple[bool, bool]: A tuple of ( ,  )"
},
{
"ref":"textual.widgets.Footer.set_dirty",
"url":2,
"doc":"Set the Widget as 'dirty' (requiring re-render).",
"func":1
},
{
"ref":"textual.widgets.Footer.scroll_to",
"url":2,
"doc":"Scroll to a given (absolute) coordinate, optionally animating. Args: x (int | None, optional): X coordinate (column) to scroll to, or  None for no change. Defaults to None. y (int | None, optional): Y coordinate (row) to scroll to, or  None for no change. Defaults to None. animate (bool, optional): Animate to new scroll position. Defaults to False. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.widgets.Footer.scroll_relative",
"url":2,
"doc":"Scroll relative to current position. Args: x (int | None, optional): X distance (columns) to scroll, or  None for no change. Defaults to None. y (int | None, optional): Y distance (rows) to scroll, or  None for no change. Defaults to None. animate (bool, optional): Animate to new scroll position. Defaults to False. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.widgets.Footer.scroll_to_widget",
"url":2,
"doc":"Scroll so that a child widget is in the visible area. Args: widget (Widget): A Widget in the children. animate (bool, optional): True to animate, or False to jump. Defaults to True. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.widgets.Footer.get_pseudo_classes",
"url":2,
"doc":"Pseudo classes for a widget",
"func":1
},
{
"ref":"textual.widgets.Footer.render_styled",
"url":2,
"doc":"Applies style attributes to the default renderable. Returns: RenderableType: A new renderable.",
"func":1
},
{
"ref":"textual.widgets.Footer.content_region",
"url":2,
"doc":"A region relative to the Widget origin that contains the content."
},
{
"ref":"textual.widgets.Footer.content_offset",
"url":2,
"doc":"An offset from the Widget origin where the content begins."
},
{
"ref":"textual.widgets.Footer.region",
"url":2,
"doc":"The region occupied by this widget, relative to the Screen."
},
{
"ref":"textual.widgets.Footer.is_transparent",
"url":2,
"doc":"Check if the background styles is not set. Returns: bool:  True if there is background color, otherwise  False ."
},
{
"ref":"textual.widgets.Footer.console",
"url":2,
"doc":"Get the current console."
},
{
"ref":"textual.widgets.Footer.is_container",
"url":2,
"doc":"Check if this widget is a container (contains other widgets) Returns: bool: True if this widget is a container."
},
{
"ref":"textual.widgets.Footer.watch_mouse_over",
"url":2,
"doc":"Update from CSS if mouse over state changes.",
"func":1
},
{
"ref":"textual.widgets.Footer.watch_has_focus",
"url":2,
"doc":"Update from CSS if has focus state changes.",
"func":1
},
{
"ref":"textual.widgets.Footer.get_render_lines",
"url":2,
"doc":"Get segment lines to render the widget. Args: start (int | None, optional): line start index, or None for first line. Defaults to None. end (int | None, optional): line end index, or None for last line. Defaults to None. Returns: Lines: A list of lists of segments.",
"func":1
},
{
"ref":"textual.widgets.Footer.check_layout",
"url":2,
"doc":"Check if a layout has been requested.",
"func":1
},
{
"ref":"textual.widgets.Footer.call_later",
"url":2,
"doc":"Run a callback after processing all messages and refreshing the screen. Args: callback (Callable): A callable.",
"func":1
},
{
"ref":"textual.widgets.Footer.refresh",
"url":2,
"doc":"Initiate a refresh of the widget. This method sets an internal flag to perform a refresh, which will be done on the next idle event. Only one refresh will be done even if this method is called multiple times. Args: repaint (bool, optional): Repaint the widget (will call render() again). Defaults to True. layout (bool, optional): Also layout widgets in the view. Defaults to False.",
"func":1
},
{
"ref":"textual.widgets.Footer.on_idle",
"url":2,
"doc":"Called when there are no more events on the queue. Args: event (events.Idle): Idle event.",
"func":1
},
{
"ref":"textual.widgets.Footer.focus",
"url":2,
"doc":"Give input focus to this widget.",
"func":1
},
{
"ref":"textual.widgets.Footer.capture_mouse",
"url":2,
"doc":"Capture (or release) the mouse. When captured, all mouse coordinates will go to this widget even when the pointer is not directly over the widget. Args: capture (bool, optional): True to capture or False to release. Defaults to True.",
"func":1
},
{
"ref":"textual.widgets.Footer.release_mouse",
"url":2,
"doc":"Release the mouse. Mouse events will only be sent when the mouse is over the widget.",
"func":1
},
{
"ref":"textual.widgets.Footer.parent",
"url":3,
"doc":"Get the parent node. Returns: DOMNode: The node which is the direct parent of this node."
},
{
"ref":"textual.widgets.Footer.screen",
"url":3,
"doc":"Get the screen that this node is contained within. Note that this may not be the currently active screen within the app."
},
{
"ref":"textual.widgets.Footer.id",
"url":3,
"doc":"The ID of this node, or None if the node has no ID. Returns: (str | None): A Node ID or None."
},
{
"ref":"textual.widgets.Footer.css_identifier",
"url":3,
"doc":"A CSS selector that identifies this DOM node."
},
{
"ref":"textual.widgets.Footer.css_identifier_styled",
"url":3,
"doc":"A stylized CSS identifier."
},
{
"ref":"textual.widgets.Footer.pseudo_classes",
"url":3,
"doc":"Get a set of all pseudo classes"
},
{
"ref":"textual.widgets.Footer.css_type",
"url":3,
"doc":"Gets the CSS type, used by the CSS. Returns: str: A type used in CSS (lower cased class name)."
},
{
"ref":"textual.widgets.Footer.css_path_nodes",
"url":3,
"doc":"A list of nodes from the root to this node, forming a \"path\". Returns: list[DOMNode]: List of Nodes, starting with the root and ending with this node."
},
{
"ref":"textual.widgets.Footer.display",
"url":3,
"doc":"Returns:  True if this DOMNode is displayed ( display != \"none\" ),  False otherwise."
},
{
"ref":"textual.widgets.Footer.tree",
"url":3,
"doc":"Get a Rich tree object which will recursively render the structure of the node tree. Returns: Tree: A Rich object which may be printed."
},
{
"ref":"textual.widgets.Footer.rich_text_style",
"url":3,
"doc":"Get the text style object. A widget's style is influenced by its parent. For instance if a widgets background has an alpha, then its parent's background color will show through. Additionally, widgets will inherit their parent's text style (i.e. bold, italic etc). Returns: Style: Rich Style object."
},
{
"ref":"textual.widgets.Footer.ancestors",
"url":3,
"doc":"Get a list of Nodes by tracing ancestors all the way back to App."
},
{
"ref":"textual.widgets.Footer.displayed_children",
"url":3,
"doc":"The children which don't have display: none set."
},
{
"ref":"textual.widgets.Footer.focusable_children",
"url":3,
"doc":"Get the children which may be focused."
},
{
"ref":"textual.widgets.Footer.add_child",
"url":3,
"doc":"Add a new child node. Args: node (DOMNode): A DOM node.",
"func":1
},
{
"ref":"textual.widgets.Footer.add_children",
"url":3,
"doc":"Add multiple children to this node. Args:  nodes (DOMNode): Positional args should be new DOM nodes.  named_nodes (DOMNode): Keyword args will be assigned the argument name as an ID.",
"func":1
},
{
"ref":"textual.widgets.Footer.walk_children",
"url":3,
"doc":"Generate all descendents of this node. Args: with_self (bool, optional): Also include self in the results. Defaults to True.",
"func":1
},
{
"ref":"textual.widgets.Footer.get_child",
"url":3,
"doc":"Return the first child (immediate descendent) of this node with the given ID. Args: id (str): The ID of the child. Returns: DOMNode: The first child of this node with the ID. Raises: NoMatchingNodesError: if no children could be found for this ID",
"func":1
},
{
"ref":"textual.widgets.Footer.query",
"url":3,
"doc":"Get a DOM query. Args: selector (str, optional): A CSS selector or  None for all nodes. Defaults to None. Returns: DOMQuery: A query object.",
"func":1
},
{
"ref":"textual.widgets.Footer.set_styles",
"url":3,
"doc":"Set custom styles on this object.",
"func":1
},
{
"ref":"textual.widgets.Footer.has_class",
"url":3,
"doc":"Check if the Node has all the given class names. Args:  class_names (str): CSS class names to check. Returns: bool:  True if the node has all the given class names, otherwise  False .",
"func":1
},
{
"ref":"textual.widgets.Footer.add_class",
"url":3,
"doc":"Add class names to this Node. Args:  class_names (str): CSS class names to add.",
"func":1
},
{
"ref":"textual.widgets.Footer.remove_class",
"url":3,
"doc":"Remove class names from this Node. Args:  class_names (str): CSS class names to remove.",
"func":1
},
{
"ref":"textual.widgets.Footer.toggle_class",
"url":3,
"doc":"Toggle class names on this Node. Args:  class_names (str): CSS class names to toggle.",
"func":1
},
{
"ref":"textual.widgets.Footer.has_pseudo_class",
"url":3,
"doc":"Check for pseudo class (such as hover, focus etc)",
"func":1
},
{
"ref":"textual.widgets.Footer.app",
"url":4,
"doc":"Get the current app."
},
{
"ref":"textual.widgets.Footer.disable_messages",
"url":4,
"doc":"Disable message types from being processed.",
"func":1
},
{
"ref":"textual.widgets.Footer.enable_messages",
"url":4,
"doc":"Enable processing of messages types.",
"func":1
},
{
"ref":"textual.widgets.Footer.get_message",
"url":4,
"doc":"Get the next event on the queue, or None if queue is closed. Returns: Optional[Event]: Event object or None.",
"func":1
},
{
"ref":"textual.widgets.Footer.peek_message",
"url":4,
"doc":"Peek the message at the head of the queue (does not remove it from the queue), or return None if the queue is empty. Returns: Optional[Message]: The message or None.",
"func":1
},
{
"ref":"textual.widgets.Footer.close_messages_no_wait",
"url":4,
"doc":"Request the message queue to exit.",
"func":1
},
{
"ref":"textual.widgets.Footer.close_messages",
"url":4,
"doc":"Close message queue, and optionally wait for queue to finish processing.",
"func":1
},
{
"ref":"textual.widgets.Footer.check_idle",
"url":4,
"doc":"Prompt the message pump to call idle if the queue is empty.",
"func":1
},
{
"ref":"textual.widgets.Footer.post_priority_message",
"url":4,
"doc":"Post a \"priority\" messages which will be processes prior to regular messages. Note that you should rarely need this in a regular app. It exists primarily to allow timer messages to skip the queue, so that they can be more regular. Args: message (Message): A message. Returns: bool: True if the messages was processed.",
"func":1
},
{
"ref":"textual.widgets.Footer.dispatch_key",
"url":4,
"doc":"Dispatch a key event to method. This method will call the method named 'key_ ' if it exists. Args: event (events.Key): A key event.",
"func":1
},
{
"ref":"textual.widgets.Header",
"url":15,
"doc":"A node in a hierarchy of things forming the UI. Nodes are mountable and may be styled with CSS."
},
{
"ref":"textual.widgets.Header.tall",
"url":15,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Header.style",
"url":15,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Header.clock",
"url":15,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Header.title",
"url":15,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Header.sub_title",
"url":15,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Header.full_title",
"url":15,
"doc":""
},
{
"ref":"textual.widgets.Header.watch_tall",
"url":15,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.Header.get_clock",
"url":15,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.Header.render",
"url":15,
"doc":"Get renderable for widget. Args: style (Styles): The Styles object for this Widget. Returns: RenderableType: Any renderable",
"func":1
},
{
"ref":"textual.widgets.Header.on_mount",
"url":15,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.Header.on_click",
"url":15,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.Header.can_focus",
"url":15,
"doc":""
},
{
"ref":"textual.widgets.Header.can_focus_children",
"url":15,
"doc":""
},
{
"ref":"textual.widgets.Header.auto_width",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Header.auto_height",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Header.has_focus",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Header.descendant_has_focus",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Header.mouse_over",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Header.scroll_x",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Header.scroll_y",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Header.scroll_target_x",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Header.scroll_target_y",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Header.show_vertical_scrollbar",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Header.show_horizontal_scrollbar",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Header.compose",
"url":2,
"doc":"Yield child widgets for a container.",
"func":1
},
{
"ref":"textual.widgets.Header.on_register",
"url":2,
"doc":"Called when the instance is registered. Args: app (App): App instance.",
"func":1
},
{
"ref":"textual.widgets.Header.get_box_model",
"url":2,
"doc":"Process the box model for this widget. Args: container (Size): The size of the container widget (with a layout) viewport (Size): The viewport size. Returns: BoxModel: The size and margin for this widget.",
"func":1
},
{
"ref":"textual.widgets.Header.get_content_width",
"url":2,
"doc":"Gets the width of the content area. Args: container_size (Size): Size of the container (immediate parent) widget. viewport_size (Size): Size of the viewport. Returns: int: The optimal width of the content.",
"func":1
},
{
"ref":"textual.widgets.Header.get_content_height",
"url":2,
"doc":"Gets the height (number of lines) in the content area. Args: container_size (Size): Size of the container (immediate parent) widget. viewport_size (Size): Size of the viewport. width (int): Width of renderable. Returns: int: The height of the content.",
"func":1
},
{
"ref":"textual.widgets.Header.vertical_scrollbar",
"url":2,
"doc":"Get a vertical scrollbar (create if necessary) Returns: ScrollBar: ScrollBar Widget."
},
{
"ref":"textual.widgets.Header.horizontal_scrollbar",
"url":2,
"doc":"Get a vertical scrollbar (create if necessary) Returns: ScrollBar: ScrollBar Widget."
},
{
"ref":"textual.widgets.Header.scrollbars_enabled",
"url":2,
"doc":"A tuple of booleans that indicate if scrollbars are enabled. Returns: tuple[bool, bool]: A tuple of ( ,  )"
},
{
"ref":"textual.widgets.Header.set_dirty",
"url":2,
"doc":"Set the Widget as 'dirty' (requiring re-render).",
"func":1
},
{
"ref":"textual.widgets.Header.scroll_to",
"url":2,
"doc":"Scroll to a given (absolute) coordinate, optionally animating. Args: x (int | None, optional): X coordinate (column) to scroll to, or  None for no change. Defaults to None. y (int | None, optional): Y coordinate (row) to scroll to, or  None for no change. Defaults to None. animate (bool, optional): Animate to new scroll position. Defaults to False. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.widgets.Header.scroll_relative",
"url":2,
"doc":"Scroll relative to current position. Args: x (int | None, optional): X distance (columns) to scroll, or  None for no change. Defaults to None. y (int | None, optional): Y distance (rows) to scroll, or  None for no change. Defaults to None. animate (bool, optional): Animate to new scroll position. Defaults to False. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.widgets.Header.scroll_to_widget",
"url":2,
"doc":"Scroll so that a child widget is in the visible area. Args: widget (Widget): A Widget in the children. animate (bool, optional): True to animate, or False to jump. Defaults to True. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.widgets.Header.get_pseudo_classes",
"url":2,
"doc":"Pseudo classes for a widget",
"func":1
},
{
"ref":"textual.widgets.Header.render_styled",
"url":2,
"doc":"Applies style attributes to the default renderable. Returns: RenderableType: A new renderable.",
"func":1
},
{
"ref":"textual.widgets.Header.content_region",
"url":2,
"doc":"A region relative to the Widget origin that contains the content."
},
{
"ref":"textual.widgets.Header.content_offset",
"url":2,
"doc":"An offset from the Widget origin where the content begins."
},
{
"ref":"textual.widgets.Header.region",
"url":2,
"doc":"The region occupied by this widget, relative to the Screen."
},
{
"ref":"textual.widgets.Header.is_transparent",
"url":2,
"doc":"Check if the background styles is not set. Returns: bool:  True if there is background color, otherwise  False ."
},
{
"ref":"textual.widgets.Header.console",
"url":2,
"doc":"Get the current console."
},
{
"ref":"textual.widgets.Header.is_container",
"url":2,
"doc":"Check if this widget is a container (contains other widgets) Returns: bool: True if this widget is a container."
},
{
"ref":"textual.widgets.Header.watch_mouse_over",
"url":2,
"doc":"Update from CSS if mouse over state changes.",
"func":1
},
{
"ref":"textual.widgets.Header.watch_has_focus",
"url":2,
"doc":"Update from CSS if has focus state changes.",
"func":1
},
{
"ref":"textual.widgets.Header.get_render_lines",
"url":2,
"doc":"Get segment lines to render the widget. Args: start (int | None, optional): line start index, or None for first line. Defaults to None. end (int | None, optional): line end index, or None for last line. Defaults to None. Returns: Lines: A list of lists of segments.",
"func":1
},
{
"ref":"textual.widgets.Header.check_layout",
"url":2,
"doc":"Check if a layout has been requested.",
"func":1
},
{
"ref":"textual.widgets.Header.call_later",
"url":2,
"doc":"Run a callback after processing all messages and refreshing the screen. Args: callback (Callable): A callable.",
"func":1
},
{
"ref":"textual.widgets.Header.refresh",
"url":2,
"doc":"Initiate a refresh of the widget. This method sets an internal flag to perform a refresh, which will be done on the next idle event. Only one refresh will be done even if this method is called multiple times. Args: repaint (bool, optional): Repaint the widget (will call render() again). Defaults to True. layout (bool, optional): Also layout widgets in the view. Defaults to False.",
"func":1
},
{
"ref":"textual.widgets.Header.on_idle",
"url":2,
"doc":"Called when there are no more events on the queue. Args: event (events.Idle): Idle event.",
"func":1
},
{
"ref":"textual.widgets.Header.focus",
"url":2,
"doc":"Give input focus to this widget.",
"func":1
},
{
"ref":"textual.widgets.Header.capture_mouse",
"url":2,
"doc":"Capture (or release) the mouse. When captured, all mouse coordinates will go to this widget even when the pointer is not directly over the widget. Args: capture (bool, optional): True to capture or False to release. Defaults to True.",
"func":1
},
{
"ref":"textual.widgets.Header.release_mouse",
"url":2,
"doc":"Release the mouse. Mouse events will only be sent when the mouse is over the widget.",
"func":1
},
{
"ref":"textual.widgets.Header.parent",
"url":3,
"doc":"Get the parent node. Returns: DOMNode: The node which is the direct parent of this node."
},
{
"ref":"textual.widgets.Header.screen",
"url":3,
"doc":"Get the screen that this node is contained within. Note that this may not be the currently active screen within the app."
},
{
"ref":"textual.widgets.Header.id",
"url":3,
"doc":"The ID of this node, or None if the node has no ID. Returns: (str | None): A Node ID or None."
},
{
"ref":"textual.widgets.Header.css_identifier",
"url":3,
"doc":"A CSS selector that identifies this DOM node."
},
{
"ref":"textual.widgets.Header.css_identifier_styled",
"url":3,
"doc":"A stylized CSS identifier."
},
{
"ref":"textual.widgets.Header.pseudo_classes",
"url":3,
"doc":"Get a set of all pseudo classes"
},
{
"ref":"textual.widgets.Header.css_type",
"url":3,
"doc":"Gets the CSS type, used by the CSS. Returns: str: A type used in CSS (lower cased class name)."
},
{
"ref":"textual.widgets.Header.css_path_nodes",
"url":3,
"doc":"A list of nodes from the root to this node, forming a \"path\". Returns: list[DOMNode]: List of Nodes, starting with the root and ending with this node."
},
{
"ref":"textual.widgets.Header.display",
"url":3,
"doc":"Returns:  True if this DOMNode is displayed ( display != \"none\" ),  False otherwise."
},
{
"ref":"textual.widgets.Header.tree",
"url":3,
"doc":"Get a Rich tree object which will recursively render the structure of the node tree. Returns: Tree: A Rich object which may be printed."
},
{
"ref":"textual.widgets.Header.rich_text_style",
"url":3,
"doc":"Get the text style object. A widget's style is influenced by its parent. For instance if a widgets background has an alpha, then its parent's background color will show through. Additionally, widgets will inherit their parent's text style (i.e. bold, italic etc). Returns: Style: Rich Style object."
},
{
"ref":"textual.widgets.Header.ancestors",
"url":3,
"doc":"Get a list of Nodes by tracing ancestors all the way back to App."
},
{
"ref":"textual.widgets.Header.displayed_children",
"url":3,
"doc":"The children which don't have display: none set."
},
{
"ref":"textual.widgets.Header.focusable_children",
"url":3,
"doc":"Get the children which may be focused."
},
{
"ref":"textual.widgets.Header.add_child",
"url":3,
"doc":"Add a new child node. Args: node (DOMNode): A DOM node.",
"func":1
},
{
"ref":"textual.widgets.Header.add_children",
"url":3,
"doc":"Add multiple children to this node. Args:  nodes (DOMNode): Positional args should be new DOM nodes.  named_nodes (DOMNode): Keyword args will be assigned the argument name as an ID.",
"func":1
},
{
"ref":"textual.widgets.Header.walk_children",
"url":3,
"doc":"Generate all descendents of this node. Args: with_self (bool, optional): Also include self in the results. Defaults to True.",
"func":1
},
{
"ref":"textual.widgets.Header.get_child",
"url":3,
"doc":"Return the first child (immediate descendent) of this node with the given ID. Args: id (str): The ID of the child. Returns: DOMNode: The first child of this node with the ID. Raises: NoMatchingNodesError: if no children could be found for this ID",
"func":1
},
{
"ref":"textual.widgets.Header.query",
"url":3,
"doc":"Get a DOM query. Args: selector (str, optional): A CSS selector or  None for all nodes. Defaults to None. Returns: DOMQuery: A query object.",
"func":1
},
{
"ref":"textual.widgets.Header.set_styles",
"url":3,
"doc":"Set custom styles on this object.",
"func":1
},
{
"ref":"textual.widgets.Header.has_class",
"url":3,
"doc":"Check if the Node has all the given class names. Args:  class_names (str): CSS class names to check. Returns: bool:  True if the node has all the given class names, otherwise  False .",
"func":1
},
{
"ref":"textual.widgets.Header.add_class",
"url":3,
"doc":"Add class names to this Node. Args:  class_names (str): CSS class names to add.",
"func":1
},
{
"ref":"textual.widgets.Header.remove_class",
"url":3,
"doc":"Remove class names from this Node. Args:  class_names (str): CSS class names to remove.",
"func":1
},
{
"ref":"textual.widgets.Header.toggle_class",
"url":3,
"doc":"Toggle class names on this Node. Args:  class_names (str): CSS class names to toggle.",
"func":1
},
{
"ref":"textual.widgets.Header.has_pseudo_class",
"url":3,
"doc":"Check for pseudo class (such as hover, focus etc)",
"func":1
},
{
"ref":"textual.widgets.Header.app",
"url":4,
"doc":"Get the current app."
},
{
"ref":"textual.widgets.Header.disable_messages",
"url":4,
"doc":"Disable message types from being processed.",
"func":1
},
{
"ref":"textual.widgets.Header.enable_messages",
"url":4,
"doc":"Enable processing of messages types.",
"func":1
},
{
"ref":"textual.widgets.Header.get_message",
"url":4,
"doc":"Get the next event on the queue, or None if queue is closed. Returns: Optional[Event]: Event object or None.",
"func":1
},
{
"ref":"textual.widgets.Header.peek_message",
"url":4,
"doc":"Peek the message at the head of the queue (does not remove it from the queue), or return None if the queue is empty. Returns: Optional[Message]: The message or None.",
"func":1
},
{
"ref":"textual.widgets.Header.close_messages_no_wait",
"url":4,
"doc":"Request the message queue to exit.",
"func":1
},
{
"ref":"textual.widgets.Header.close_messages",
"url":4,
"doc":"Close message queue, and optionally wait for queue to finish processing.",
"func":1
},
{
"ref":"textual.widgets.Header.check_idle",
"url":4,
"doc":"Prompt the message pump to call idle if the queue is empty.",
"func":1
},
{
"ref":"textual.widgets.Header.post_priority_message",
"url":4,
"doc":"Post a \"priority\" messages which will be processes prior to regular messages. Note that you should rarely need this in a regular app. It exists primarily to allow timer messages to skip the queue, so that they can be more regular. Args: message (Message): A message. Returns: bool: True if the messages was processed.",
"func":1
},
{
"ref":"textual.widgets.Header.dispatch_key",
"url":4,
"doc":"Dispatch a key event to method. This method will call the method named 'key_ ' if it exists. Args: event (events.Key): A key event.",
"func":1
},
{
"ref":"textual.widgets.Placeholder",
"url":15,
"doc":"A node in a hierarchy of things forming the UI. Nodes are mountable and may be styled with CSS."
},
{
"ref":"textual.widgets.Placeholder.has_focus",
"url":15,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Placeholder.mouse_over",
"url":15,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Placeholder.render",
"url":15,
"doc":"Get renderable for widget. Args: style (Styles): The Styles object for this Widget. Returns: RenderableType: Any renderable",
"func":1
},
{
"ref":"textual.widgets.Placeholder.on_focus",
"url":15,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.Placeholder.on_blur",
"url":15,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.Placeholder.on_enter",
"url":15,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.Placeholder.on_leave",
"url":15,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.Placeholder.can_focus",
"url":15,
"doc":""
},
{
"ref":"textual.widgets.Placeholder.can_focus_children",
"url":15,
"doc":""
},
{
"ref":"textual.widgets.Placeholder.auto_width",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Placeholder.auto_height",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Placeholder.descendant_has_focus",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Placeholder.scroll_x",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Placeholder.scroll_y",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Placeholder.scroll_target_x",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Placeholder.scroll_target_y",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Placeholder.show_vertical_scrollbar",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Placeholder.show_horizontal_scrollbar",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Placeholder.compose",
"url":2,
"doc":"Yield child widgets for a container.",
"func":1
},
{
"ref":"textual.widgets.Placeholder.on_register",
"url":2,
"doc":"Called when the instance is registered. Args: app (App): App instance.",
"func":1
},
{
"ref":"textual.widgets.Placeholder.get_box_model",
"url":2,
"doc":"Process the box model for this widget. Args: container (Size): The size of the container widget (with a layout) viewport (Size): The viewport size. Returns: BoxModel: The size and margin for this widget.",
"func":1
},
{
"ref":"textual.widgets.Placeholder.get_content_width",
"url":2,
"doc":"Gets the width of the content area. Args: container_size (Size): Size of the container (immediate parent) widget. viewport_size (Size): Size of the viewport. Returns: int: The optimal width of the content.",
"func":1
},
{
"ref":"textual.widgets.Placeholder.get_content_height",
"url":2,
"doc":"Gets the height (number of lines) in the content area. Args: container_size (Size): Size of the container (immediate parent) widget. viewport_size (Size): Size of the viewport. width (int): Width of renderable. Returns: int: The height of the content.",
"func":1
},
{
"ref":"textual.widgets.Placeholder.vertical_scrollbar",
"url":2,
"doc":"Get a vertical scrollbar (create if necessary) Returns: ScrollBar: ScrollBar Widget."
},
{
"ref":"textual.widgets.Placeholder.horizontal_scrollbar",
"url":2,
"doc":"Get a vertical scrollbar (create if necessary) Returns: ScrollBar: ScrollBar Widget."
},
{
"ref":"textual.widgets.Placeholder.scrollbars_enabled",
"url":2,
"doc":"A tuple of booleans that indicate if scrollbars are enabled. Returns: tuple[bool, bool]: A tuple of ( ,  )"
},
{
"ref":"textual.widgets.Placeholder.set_dirty",
"url":2,
"doc":"Set the Widget as 'dirty' (requiring re-render).",
"func":1
},
{
"ref":"textual.widgets.Placeholder.scroll_to",
"url":2,
"doc":"Scroll to a given (absolute) coordinate, optionally animating. Args: x (int | None, optional): X coordinate (column) to scroll to, or  None for no change. Defaults to None. y (int | None, optional): Y coordinate (row) to scroll to, or  None for no change. Defaults to None. animate (bool, optional): Animate to new scroll position. Defaults to False. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.widgets.Placeholder.scroll_relative",
"url":2,
"doc":"Scroll relative to current position. Args: x (int | None, optional): X distance (columns) to scroll, or  None for no change. Defaults to None. y (int | None, optional): Y distance (rows) to scroll, or  None for no change. Defaults to None. animate (bool, optional): Animate to new scroll position. Defaults to False. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.widgets.Placeholder.scroll_to_widget",
"url":2,
"doc":"Scroll so that a child widget is in the visible area. Args: widget (Widget): A Widget in the children. animate (bool, optional): True to animate, or False to jump. Defaults to True. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.widgets.Placeholder.get_pseudo_classes",
"url":2,
"doc":"Pseudo classes for a widget",
"func":1
},
{
"ref":"textual.widgets.Placeholder.render_styled",
"url":2,
"doc":"Applies style attributes to the default renderable. Returns: RenderableType: A new renderable.",
"func":1
},
{
"ref":"textual.widgets.Placeholder.content_region",
"url":2,
"doc":"A region relative to the Widget origin that contains the content."
},
{
"ref":"textual.widgets.Placeholder.content_offset",
"url":2,
"doc":"An offset from the Widget origin where the content begins."
},
{
"ref":"textual.widgets.Placeholder.region",
"url":2,
"doc":"The region occupied by this widget, relative to the Screen."
},
{
"ref":"textual.widgets.Placeholder.is_transparent",
"url":2,
"doc":"Check if the background styles is not set. Returns: bool:  True if there is background color, otherwise  False ."
},
{
"ref":"textual.widgets.Placeholder.console",
"url":2,
"doc":"Get the current console."
},
{
"ref":"textual.widgets.Placeholder.is_container",
"url":2,
"doc":"Check if this widget is a container (contains other widgets) Returns: bool: True if this widget is a container."
},
{
"ref":"textual.widgets.Placeholder.watch_mouse_over",
"url":2,
"doc":"Update from CSS if mouse over state changes.",
"func":1
},
{
"ref":"textual.widgets.Placeholder.watch_has_focus",
"url":2,
"doc":"Update from CSS if has focus state changes.",
"func":1
},
{
"ref":"textual.widgets.Placeholder.get_render_lines",
"url":2,
"doc":"Get segment lines to render the widget. Args: start (int | None, optional): line start index, or None for first line. Defaults to None. end (int | None, optional): line end index, or None for last line. Defaults to None. Returns: Lines: A list of lists of segments.",
"func":1
},
{
"ref":"textual.widgets.Placeholder.check_layout",
"url":2,
"doc":"Check if a layout has been requested.",
"func":1
},
{
"ref":"textual.widgets.Placeholder.call_later",
"url":2,
"doc":"Run a callback after processing all messages and refreshing the screen. Args: callback (Callable): A callable.",
"func":1
},
{
"ref":"textual.widgets.Placeholder.refresh",
"url":2,
"doc":"Initiate a refresh of the widget. This method sets an internal flag to perform a refresh, which will be done on the next idle event. Only one refresh will be done even if this method is called multiple times. Args: repaint (bool, optional): Repaint the widget (will call render() again). Defaults to True. layout (bool, optional): Also layout widgets in the view. Defaults to False.",
"func":1
},
{
"ref":"textual.widgets.Placeholder.on_idle",
"url":2,
"doc":"Called when there are no more events on the queue. Args: event (events.Idle): Idle event.",
"func":1
},
{
"ref":"textual.widgets.Placeholder.focus",
"url":2,
"doc":"Give input focus to this widget.",
"func":1
},
{
"ref":"textual.widgets.Placeholder.capture_mouse",
"url":2,
"doc":"Capture (or release) the mouse. When captured, all mouse coordinates will go to this widget even when the pointer is not directly over the widget. Args: capture (bool, optional): True to capture or False to release. Defaults to True.",
"func":1
},
{
"ref":"textual.widgets.Placeholder.release_mouse",
"url":2,
"doc":"Release the mouse. Mouse events will only be sent when the mouse is over the widget.",
"func":1
},
{
"ref":"textual.widgets.Placeholder.parent",
"url":3,
"doc":"Get the parent node. Returns: DOMNode: The node which is the direct parent of this node."
},
{
"ref":"textual.widgets.Placeholder.screen",
"url":3,
"doc":"Get the screen that this node is contained within. Note that this may not be the currently active screen within the app."
},
{
"ref":"textual.widgets.Placeholder.id",
"url":3,
"doc":"The ID of this node, or None if the node has no ID. Returns: (str | None): A Node ID or None."
},
{
"ref":"textual.widgets.Placeholder.css_identifier",
"url":3,
"doc":"A CSS selector that identifies this DOM node."
},
{
"ref":"textual.widgets.Placeholder.css_identifier_styled",
"url":3,
"doc":"A stylized CSS identifier."
},
{
"ref":"textual.widgets.Placeholder.pseudo_classes",
"url":3,
"doc":"Get a set of all pseudo classes"
},
{
"ref":"textual.widgets.Placeholder.css_type",
"url":3,
"doc":"Gets the CSS type, used by the CSS. Returns: str: A type used in CSS (lower cased class name)."
},
{
"ref":"textual.widgets.Placeholder.css_path_nodes",
"url":3,
"doc":"A list of nodes from the root to this node, forming a \"path\". Returns: list[DOMNode]: List of Nodes, starting with the root and ending with this node."
},
{
"ref":"textual.widgets.Placeholder.display",
"url":3,
"doc":"Returns:  True if this DOMNode is displayed ( display != \"none\" ),  False otherwise."
},
{
"ref":"textual.widgets.Placeholder.tree",
"url":3,
"doc":"Get a Rich tree object which will recursively render the structure of the node tree. Returns: Tree: A Rich object which may be printed."
},
{
"ref":"textual.widgets.Placeholder.rich_text_style",
"url":3,
"doc":"Get the text style object. A widget's style is influenced by its parent. For instance if a widgets background has an alpha, then its parent's background color will show through. Additionally, widgets will inherit their parent's text style (i.e. bold, italic etc). Returns: Style: Rich Style object."
},
{
"ref":"textual.widgets.Placeholder.ancestors",
"url":3,
"doc":"Get a list of Nodes by tracing ancestors all the way back to App."
},
{
"ref":"textual.widgets.Placeholder.displayed_children",
"url":3,
"doc":"The children which don't have display: none set."
},
{
"ref":"textual.widgets.Placeholder.focusable_children",
"url":3,
"doc":"Get the children which may be focused."
},
{
"ref":"textual.widgets.Placeholder.add_child",
"url":3,
"doc":"Add a new child node. Args: node (DOMNode): A DOM node.",
"func":1
},
{
"ref":"textual.widgets.Placeholder.add_children",
"url":3,
"doc":"Add multiple children to this node. Args:  nodes (DOMNode): Positional args should be new DOM nodes.  named_nodes (DOMNode): Keyword args will be assigned the argument name as an ID.",
"func":1
},
{
"ref":"textual.widgets.Placeholder.walk_children",
"url":3,
"doc":"Generate all descendents of this node. Args: with_self (bool, optional): Also include self in the results. Defaults to True.",
"func":1
},
{
"ref":"textual.widgets.Placeholder.get_child",
"url":3,
"doc":"Return the first child (immediate descendent) of this node with the given ID. Args: id (str): The ID of the child. Returns: DOMNode: The first child of this node with the ID. Raises: NoMatchingNodesError: if no children could be found for this ID",
"func":1
},
{
"ref":"textual.widgets.Placeholder.query",
"url":3,
"doc":"Get a DOM query. Args: selector (str, optional): A CSS selector or  None for all nodes. Defaults to None. Returns: DOMQuery: A query object.",
"func":1
},
{
"ref":"textual.widgets.Placeholder.set_styles",
"url":3,
"doc":"Set custom styles on this object.",
"func":1
},
{
"ref":"textual.widgets.Placeholder.has_class",
"url":3,
"doc":"Check if the Node has all the given class names. Args:  class_names (str): CSS class names to check. Returns: bool:  True if the node has all the given class names, otherwise  False .",
"func":1
},
{
"ref":"textual.widgets.Placeholder.add_class",
"url":3,
"doc":"Add class names to this Node. Args:  class_names (str): CSS class names to add.",
"func":1
},
{
"ref":"textual.widgets.Placeholder.remove_class",
"url":3,
"doc":"Remove class names from this Node. Args:  class_names (str): CSS class names to remove.",
"func":1
},
{
"ref":"textual.widgets.Placeholder.toggle_class",
"url":3,
"doc":"Toggle class names on this Node. Args:  class_names (str): CSS class names to toggle.",
"func":1
},
{
"ref":"textual.widgets.Placeholder.has_pseudo_class",
"url":3,
"doc":"Check for pseudo class (such as hover, focus etc)",
"func":1
},
{
"ref":"textual.widgets.Placeholder.app",
"url":4,
"doc":"Get the current app."
},
{
"ref":"textual.widgets.Placeholder.disable_messages",
"url":4,
"doc":"Disable message types from being processed.",
"func":1
},
{
"ref":"textual.widgets.Placeholder.enable_messages",
"url":4,
"doc":"Enable processing of messages types.",
"func":1
},
{
"ref":"textual.widgets.Placeholder.get_message",
"url":4,
"doc":"Get the next event on the queue, or None if queue is closed. Returns: Optional[Event]: Event object or None.",
"func":1
},
{
"ref":"textual.widgets.Placeholder.peek_message",
"url":4,
"doc":"Peek the message at the head of the queue (does not remove it from the queue), or return None if the queue is empty. Returns: Optional[Message]: The message or None.",
"func":1
},
{
"ref":"textual.widgets.Placeholder.close_messages_no_wait",
"url":4,
"doc":"Request the message queue to exit.",
"func":1
},
{
"ref":"textual.widgets.Placeholder.close_messages",
"url":4,
"doc":"Close message queue, and optionally wait for queue to finish processing.",
"func":1
},
{
"ref":"textual.widgets.Placeholder.check_idle",
"url":4,
"doc":"Prompt the message pump to call idle if the queue is empty.",
"func":1
},
{
"ref":"textual.widgets.Placeholder.post_priority_message",
"url":4,
"doc":"Post a \"priority\" messages which will be processes prior to regular messages. Note that you should rarely need this in a regular app. It exists primarily to allow timer messages to skip the queue, so that they can be more regular. Args: message (Message): A message. Returns: bool: True if the messages was processed.",
"func":1
},
{
"ref":"textual.widgets.Placeholder.dispatch_key",
"url":4,
"doc":"Dispatch a key event to method. This method will call the method named 'key_ ' if it exists. Args: event (events.Key): A key event.",
"func":1
},
{
"ref":"textual.widgets.Static",
"url":15,
"doc":"A node in a hierarchy of things forming the UI. Nodes are mountable and may be styled with CSS."
},
{
"ref":"textual.widgets.Static.render",
"url":15,
"doc":"Get renderable for widget. Args: style (Styles): The Styles object for this Widget. Returns: RenderableType: Any renderable",
"func":1
},
{
"ref":"textual.widgets.Static.update",
"url":15,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.Static.can_focus",
"url":15,
"doc":""
},
{
"ref":"textual.widgets.Static.can_focus_children",
"url":15,
"doc":""
},
{
"ref":"textual.widgets.Static.auto_width",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Static.auto_height",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Static.has_focus",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Static.descendant_has_focus",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Static.mouse_over",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Static.scroll_x",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Static.scroll_y",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Static.scroll_target_x",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Static.scroll_target_y",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Static.show_vertical_scrollbar",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Static.show_horizontal_scrollbar",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Static.compose",
"url":2,
"doc":"Yield child widgets for a container.",
"func":1
},
{
"ref":"textual.widgets.Static.on_register",
"url":2,
"doc":"Called when the instance is registered. Args: app (App): App instance.",
"func":1
},
{
"ref":"textual.widgets.Static.get_box_model",
"url":2,
"doc":"Process the box model for this widget. Args: container (Size): The size of the container widget (with a layout) viewport (Size): The viewport size. Returns: BoxModel: The size and margin for this widget.",
"func":1
},
{
"ref":"textual.widgets.Static.get_content_width",
"url":2,
"doc":"Gets the width of the content area. Args: container_size (Size): Size of the container (immediate parent) widget. viewport_size (Size): Size of the viewport. Returns: int: The optimal width of the content.",
"func":1
},
{
"ref":"textual.widgets.Static.get_content_height",
"url":2,
"doc":"Gets the height (number of lines) in the content area. Args: container_size (Size): Size of the container (immediate parent) widget. viewport_size (Size): Size of the viewport. width (int): Width of renderable. Returns: int: The height of the content.",
"func":1
},
{
"ref":"textual.widgets.Static.vertical_scrollbar",
"url":2,
"doc":"Get a vertical scrollbar (create if necessary) Returns: ScrollBar: ScrollBar Widget."
},
{
"ref":"textual.widgets.Static.horizontal_scrollbar",
"url":2,
"doc":"Get a vertical scrollbar (create if necessary) Returns: ScrollBar: ScrollBar Widget."
},
{
"ref":"textual.widgets.Static.scrollbars_enabled",
"url":2,
"doc":"A tuple of booleans that indicate if scrollbars are enabled. Returns: tuple[bool, bool]: A tuple of ( ,  )"
},
{
"ref":"textual.widgets.Static.set_dirty",
"url":2,
"doc":"Set the Widget as 'dirty' (requiring re-render).",
"func":1
},
{
"ref":"textual.widgets.Static.scroll_to",
"url":2,
"doc":"Scroll to a given (absolute) coordinate, optionally animating. Args: x (int | None, optional): X coordinate (column) to scroll to, or  None for no change. Defaults to None. y (int | None, optional): Y coordinate (row) to scroll to, or  None for no change. Defaults to None. animate (bool, optional): Animate to new scroll position. Defaults to False. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.widgets.Static.scroll_relative",
"url":2,
"doc":"Scroll relative to current position. Args: x (int | None, optional): X distance (columns) to scroll, or  None for no change. Defaults to None. y (int | None, optional): Y distance (rows) to scroll, or  None for no change. Defaults to None. animate (bool, optional): Animate to new scroll position. Defaults to False. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.widgets.Static.scroll_to_widget",
"url":2,
"doc":"Scroll so that a child widget is in the visible area. Args: widget (Widget): A Widget in the children. animate (bool, optional): True to animate, or False to jump. Defaults to True. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.widgets.Static.get_pseudo_classes",
"url":2,
"doc":"Pseudo classes for a widget",
"func":1
},
{
"ref":"textual.widgets.Static.render_styled",
"url":2,
"doc":"Applies style attributes to the default renderable. Returns: RenderableType: A new renderable.",
"func":1
},
{
"ref":"textual.widgets.Static.content_region",
"url":2,
"doc":"A region relative to the Widget origin that contains the content."
},
{
"ref":"textual.widgets.Static.content_offset",
"url":2,
"doc":"An offset from the Widget origin where the content begins."
},
{
"ref":"textual.widgets.Static.region",
"url":2,
"doc":"The region occupied by this widget, relative to the Screen."
},
{
"ref":"textual.widgets.Static.is_transparent",
"url":2,
"doc":"Check if the background styles is not set. Returns: bool:  True if there is background color, otherwise  False ."
},
{
"ref":"textual.widgets.Static.console",
"url":2,
"doc":"Get the current console."
},
{
"ref":"textual.widgets.Static.is_container",
"url":2,
"doc":"Check if this widget is a container (contains other widgets) Returns: bool: True if this widget is a container."
},
{
"ref":"textual.widgets.Static.watch_mouse_over",
"url":2,
"doc":"Update from CSS if mouse over state changes.",
"func":1
},
{
"ref":"textual.widgets.Static.watch_has_focus",
"url":2,
"doc":"Update from CSS if has focus state changes.",
"func":1
},
{
"ref":"textual.widgets.Static.get_render_lines",
"url":2,
"doc":"Get segment lines to render the widget. Args: start (int | None, optional): line start index, or None for first line. Defaults to None. end (int | None, optional): line end index, or None for last line. Defaults to None. Returns: Lines: A list of lists of segments.",
"func":1
},
{
"ref":"textual.widgets.Static.check_layout",
"url":2,
"doc":"Check if a layout has been requested.",
"func":1
},
{
"ref":"textual.widgets.Static.call_later",
"url":2,
"doc":"Run a callback after processing all messages and refreshing the screen. Args: callback (Callable): A callable.",
"func":1
},
{
"ref":"textual.widgets.Static.refresh",
"url":2,
"doc":"Initiate a refresh of the widget. This method sets an internal flag to perform a refresh, which will be done on the next idle event. Only one refresh will be done even if this method is called multiple times. Args: repaint (bool, optional): Repaint the widget (will call render() again). Defaults to True. layout (bool, optional): Also layout widgets in the view. Defaults to False.",
"func":1
},
{
"ref":"textual.widgets.Static.on_idle",
"url":2,
"doc":"Called when there are no more events on the queue. Args: event (events.Idle): Idle event.",
"func":1
},
{
"ref":"textual.widgets.Static.focus",
"url":2,
"doc":"Give input focus to this widget.",
"func":1
},
{
"ref":"textual.widgets.Static.capture_mouse",
"url":2,
"doc":"Capture (or release) the mouse. When captured, all mouse coordinates will go to this widget even when the pointer is not directly over the widget. Args: capture (bool, optional): True to capture or False to release. Defaults to True.",
"func":1
},
{
"ref":"textual.widgets.Static.release_mouse",
"url":2,
"doc":"Release the mouse. Mouse events will only be sent when the mouse is over the widget.",
"func":1
},
{
"ref":"textual.widgets.Static.parent",
"url":3,
"doc":"Get the parent node. Returns: DOMNode: The node which is the direct parent of this node."
},
{
"ref":"textual.widgets.Static.screen",
"url":3,
"doc":"Get the screen that this node is contained within. Note that this may not be the currently active screen within the app."
},
{
"ref":"textual.widgets.Static.id",
"url":3,
"doc":"The ID of this node, or None if the node has no ID. Returns: (str | None): A Node ID or None."
},
{
"ref":"textual.widgets.Static.css_identifier",
"url":3,
"doc":"A CSS selector that identifies this DOM node."
},
{
"ref":"textual.widgets.Static.css_identifier_styled",
"url":3,
"doc":"A stylized CSS identifier."
},
{
"ref":"textual.widgets.Static.pseudo_classes",
"url":3,
"doc":"Get a set of all pseudo classes"
},
{
"ref":"textual.widgets.Static.css_type",
"url":3,
"doc":"Gets the CSS type, used by the CSS. Returns: str: A type used in CSS (lower cased class name)."
},
{
"ref":"textual.widgets.Static.css_path_nodes",
"url":3,
"doc":"A list of nodes from the root to this node, forming a \"path\". Returns: list[DOMNode]: List of Nodes, starting with the root and ending with this node."
},
{
"ref":"textual.widgets.Static.display",
"url":3,
"doc":"Returns:  True if this DOMNode is displayed ( display != \"none\" ),  False otherwise."
},
{
"ref":"textual.widgets.Static.tree",
"url":3,
"doc":"Get a Rich tree object which will recursively render the structure of the node tree. Returns: Tree: A Rich object which may be printed."
},
{
"ref":"textual.widgets.Static.rich_text_style",
"url":3,
"doc":"Get the text style object. A widget's style is influenced by its parent. For instance if a widgets background has an alpha, then its parent's background color will show through. Additionally, widgets will inherit their parent's text style (i.e. bold, italic etc). Returns: Style: Rich Style object."
},
{
"ref":"textual.widgets.Static.ancestors",
"url":3,
"doc":"Get a list of Nodes by tracing ancestors all the way back to App."
},
{
"ref":"textual.widgets.Static.displayed_children",
"url":3,
"doc":"The children which don't have display: none set."
},
{
"ref":"textual.widgets.Static.focusable_children",
"url":3,
"doc":"Get the children which may be focused."
},
{
"ref":"textual.widgets.Static.add_child",
"url":3,
"doc":"Add a new child node. Args: node (DOMNode): A DOM node.",
"func":1
},
{
"ref":"textual.widgets.Static.add_children",
"url":3,
"doc":"Add multiple children to this node. Args:  nodes (DOMNode): Positional args should be new DOM nodes.  named_nodes (DOMNode): Keyword args will be assigned the argument name as an ID.",
"func":1
},
{
"ref":"textual.widgets.Static.walk_children",
"url":3,
"doc":"Generate all descendents of this node. Args: with_self (bool, optional): Also include self in the results. Defaults to True.",
"func":1
},
{
"ref":"textual.widgets.Static.get_child",
"url":3,
"doc":"Return the first child (immediate descendent) of this node with the given ID. Args: id (str): The ID of the child. Returns: DOMNode: The first child of this node with the ID. Raises: NoMatchingNodesError: if no children could be found for this ID",
"func":1
},
{
"ref":"textual.widgets.Static.query",
"url":3,
"doc":"Get a DOM query. Args: selector (str, optional): A CSS selector or  None for all nodes. Defaults to None. Returns: DOMQuery: A query object.",
"func":1
},
{
"ref":"textual.widgets.Static.set_styles",
"url":3,
"doc":"Set custom styles on this object.",
"func":1
},
{
"ref":"textual.widgets.Static.has_class",
"url":3,
"doc":"Check if the Node has all the given class names. Args:  class_names (str): CSS class names to check. Returns: bool:  True if the node has all the given class names, otherwise  False .",
"func":1
},
{
"ref":"textual.widgets.Static.add_class",
"url":3,
"doc":"Add class names to this Node. Args:  class_names (str): CSS class names to add.",
"func":1
},
{
"ref":"textual.widgets.Static.remove_class",
"url":3,
"doc":"Remove class names from this Node. Args:  class_names (str): CSS class names to remove.",
"func":1
},
{
"ref":"textual.widgets.Static.toggle_class",
"url":3,
"doc":"Toggle class names on this Node. Args:  class_names (str): CSS class names to toggle.",
"func":1
},
{
"ref":"textual.widgets.Static.has_pseudo_class",
"url":3,
"doc":"Check for pseudo class (such as hover, focus etc)",
"func":1
},
{
"ref":"textual.widgets.Static.app",
"url":4,
"doc":"Get the current app."
},
{
"ref":"textual.widgets.Static.disable_messages",
"url":4,
"doc":"Disable message types from being processed.",
"func":1
},
{
"ref":"textual.widgets.Static.enable_messages",
"url":4,
"doc":"Enable processing of messages types.",
"func":1
},
{
"ref":"textual.widgets.Static.get_message",
"url":4,
"doc":"Get the next event on the queue, or None if queue is closed. Returns: Optional[Event]: Event object or None.",
"func":1
},
{
"ref":"textual.widgets.Static.peek_message",
"url":4,
"doc":"Peek the message at the head of the queue (does not remove it from the queue), or return None if the queue is empty. Returns: Optional[Message]: The message or None.",
"func":1
},
{
"ref":"textual.widgets.Static.close_messages_no_wait",
"url":4,
"doc":"Request the message queue to exit.",
"func":1
},
{
"ref":"textual.widgets.Static.close_messages",
"url":4,
"doc":"Close message queue, and optionally wait for queue to finish processing.",
"func":1
},
{
"ref":"textual.widgets.Static.check_idle",
"url":4,
"doc":"Prompt the message pump to call idle if the queue is empty.",
"func":1
},
{
"ref":"textual.widgets.Static.post_priority_message",
"url":4,
"doc":"Post a \"priority\" messages which will be processes prior to regular messages. Note that you should rarely need this in a regular app. It exists primarily to allow timer messages to skip the queue, so that they can be more regular. Args: message (Message): A message. Returns: bool: True if the messages was processed.",
"func":1
},
{
"ref":"textual.widgets.Static.dispatch_key",
"url":4,
"doc":"Dispatch a key event to method. This method will call the method named 'key_ ' if it exists. Args: event (events.Key): A key event.",
"func":1
},
{
"ref":"textual.widgets.TreeClick",
"url":15,
"doc":"Abstract base class for generic types. A generic type is typically declared by inheriting from this class parameterized with one or more type variables. For example, a generic mapping type might be defined as class Mapping(Generic[KT, VT]): def __getitem__(self, key: KT) -> VT:  .  Etc. This class can then be used as follows def lookup_name(mapping: Mapping[KT, VT], key: KT, default: VT) -> VT: try: return mapping[key] except KeyError: return default"
},
{
"ref":"textual.widgets.TreeClick.sender",
"url":15,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.widgets.TreeClick.bubble",
"url":15,
"doc":""
},
{
"ref":"textual.widgets.TreeClick.verbosity",
"url":15,
"doc":""
},
{
"ref":"textual.widgets.TreeClick.system",
"url":15,
"doc":""
},
{
"ref":"textual.widgets.TreeClick.set_forwarded",
"url":6,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.widgets.TreeClick.can_replace",
"url":6,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.widgets.TreeClick.prevent_default",
"url":6,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.widgets.TreeClick.stop",
"url":6,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.widgets.TreeClick.name",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.widgets.TreeClick.time",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.widgets.TreeControl",
"url":15,
"doc":"Abstract base class for generic types. A generic type is typically declared by inheriting from this class parameterized with one or more type variables. For example, a generic mapping type might be defined as class Mapping(Generic[KT, VT]): def __getitem__(self, key: KT) -> VT:  .  Etc. This class can then be used as follows def lookup_name(mapping: Mapping[KT, VT], key: KT, default: VT) -> VT: try: return mapping[key] except KeyError: return default"
},
{
"ref":"textual.widgets.TreeControl.hover_node",
"url":15,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.TreeControl.cursor",
"url":15,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.TreeControl.cursor_line",
"url":15,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.TreeControl.show_cursor",
"url":15,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.TreeControl.watch_show_cursor",
"url":15,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.TreeControl.watch_cursor_line",
"url":15,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.TreeControl.add",
"url":15,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.TreeControl.find_cursor",
"url":15,
"doc":"Find the line location for the cursor node.",
"func":1
},
{
"ref":"textual.widgets.TreeControl.render",
"url":15,
"doc":"Get renderable for widget. Args: style (Styles): The Styles object for this Widget. Returns: RenderableType: Any renderable",
"func":1
},
{
"ref":"textual.widgets.TreeControl.render_node",
"url":15,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.TreeControl.action_click_label",
"url":15,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.TreeControl.on_mouse_move",
"url":15,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.TreeControl.on_key",
"url":15,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.TreeControl.key_down",
"url":15,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.TreeControl.key_up",
"url":15,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.TreeControl.key_enter",
"url":15,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.TreeControl.cursor_down",
"url":15,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.TreeControl.cursor_up",
"url":15,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.TreeControl.can_focus",
"url":15,
"doc":""
},
{
"ref":"textual.widgets.TreeControl.can_focus_children",
"url":15,
"doc":""
},
{
"ref":"textual.widgets.TreeControl.auto_width",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.TreeControl.auto_height",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.TreeControl.has_focus",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.TreeControl.descendant_has_focus",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.TreeControl.mouse_over",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.TreeControl.scroll_x",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.TreeControl.scroll_y",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.TreeControl.scroll_target_x",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.TreeControl.scroll_target_y",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.TreeControl.show_vertical_scrollbar",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.TreeControl.show_horizontal_scrollbar",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.TreeControl.compose",
"url":2,
"doc":"Yield child widgets for a container.",
"func":1
},
{
"ref":"textual.widgets.TreeControl.on_register",
"url":2,
"doc":"Called when the instance is registered. Args: app (App): App instance.",
"func":1
},
{
"ref":"textual.widgets.TreeControl.get_box_model",
"url":2,
"doc":"Process the box model for this widget. Args: container (Size): The size of the container widget (with a layout) viewport (Size): The viewport size. Returns: BoxModel: The size and margin for this widget.",
"func":1
},
{
"ref":"textual.widgets.TreeControl.get_content_width",
"url":2,
"doc":"Gets the width of the content area. Args: container_size (Size): Size of the container (immediate parent) widget. viewport_size (Size): Size of the viewport. Returns: int: The optimal width of the content.",
"func":1
},
{
"ref":"textual.widgets.TreeControl.get_content_height",
"url":2,
"doc":"Gets the height (number of lines) in the content area. Args: container_size (Size): Size of the container (immediate parent) widget. viewport_size (Size): Size of the viewport. width (int): Width of renderable. Returns: int: The height of the content.",
"func":1
},
{
"ref":"textual.widgets.TreeControl.vertical_scrollbar",
"url":2,
"doc":"Get a vertical scrollbar (create if necessary) Returns: ScrollBar: ScrollBar Widget."
},
{
"ref":"textual.widgets.TreeControl.horizontal_scrollbar",
"url":2,
"doc":"Get a vertical scrollbar (create if necessary) Returns: ScrollBar: ScrollBar Widget."
},
{
"ref":"textual.widgets.TreeControl.scrollbars_enabled",
"url":2,
"doc":"A tuple of booleans that indicate if scrollbars are enabled. Returns: tuple[bool, bool]: A tuple of ( ,  )"
},
{
"ref":"textual.widgets.TreeControl.set_dirty",
"url":2,
"doc":"Set the Widget as 'dirty' (requiring re-render).",
"func":1
},
{
"ref":"textual.widgets.TreeControl.scroll_to",
"url":2,
"doc":"Scroll to a given (absolute) coordinate, optionally animating. Args: x (int | None, optional): X coordinate (column) to scroll to, or  None for no change. Defaults to None. y (int | None, optional): Y coordinate (row) to scroll to, or  None for no change. Defaults to None. animate (bool, optional): Animate to new scroll position. Defaults to False. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.widgets.TreeControl.scroll_relative",
"url":2,
"doc":"Scroll relative to current position. Args: x (int | None, optional): X distance (columns) to scroll, or  None for no change. Defaults to None. y (int | None, optional): Y distance (rows) to scroll, or  None for no change. Defaults to None. animate (bool, optional): Animate to new scroll position. Defaults to False. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.widgets.TreeControl.scroll_to_widget",
"url":2,
"doc":"Scroll so that a child widget is in the visible area. Args: widget (Widget): A Widget in the children. animate (bool, optional): True to animate, or False to jump. Defaults to True. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.widgets.TreeControl.get_pseudo_classes",
"url":2,
"doc":"Pseudo classes for a widget",
"func":1
},
{
"ref":"textual.widgets.TreeControl.render_styled",
"url":2,
"doc":"Applies style attributes to the default renderable. Returns: RenderableType: A new renderable.",
"func":1
},
{
"ref":"textual.widgets.TreeControl.content_region",
"url":2,
"doc":"A region relative to the Widget origin that contains the content."
},
{
"ref":"textual.widgets.TreeControl.content_offset",
"url":2,
"doc":"An offset from the Widget origin where the content begins."
},
{
"ref":"textual.widgets.TreeControl.region",
"url":2,
"doc":"The region occupied by this widget, relative to the Screen."
},
{
"ref":"textual.widgets.TreeControl.is_transparent",
"url":2,
"doc":"Check if the background styles is not set. Returns: bool:  True if there is background color, otherwise  False ."
},
{
"ref":"textual.widgets.TreeControl.console",
"url":2,
"doc":"Get the current console."
},
{
"ref":"textual.widgets.TreeControl.is_container",
"url":2,
"doc":"Check if this widget is a container (contains other widgets) Returns: bool: True if this widget is a container."
},
{
"ref":"textual.widgets.TreeControl.watch_mouse_over",
"url":2,
"doc":"Update from CSS if mouse over state changes.",
"func":1
},
{
"ref":"textual.widgets.TreeControl.watch_has_focus",
"url":2,
"doc":"Update from CSS if has focus state changes.",
"func":1
},
{
"ref":"textual.widgets.TreeControl.get_render_lines",
"url":2,
"doc":"Get segment lines to render the widget. Args: start (int | None, optional): line start index, or None for first line. Defaults to None. end (int | None, optional): line end index, or None for last line. Defaults to None. Returns: Lines: A list of lists of segments.",
"func":1
},
{
"ref":"textual.widgets.TreeControl.check_layout",
"url":2,
"doc":"Check if a layout has been requested.",
"func":1
},
{
"ref":"textual.widgets.TreeControl.call_later",
"url":2,
"doc":"Run a callback after processing all messages and refreshing the screen. Args: callback (Callable): A callable.",
"func":1
},
{
"ref":"textual.widgets.TreeControl.refresh",
"url":2,
"doc":"Initiate a refresh of the widget. This method sets an internal flag to perform a refresh, which will be done on the next idle event. Only one refresh will be done even if this method is called multiple times. Args: repaint (bool, optional): Repaint the widget (will call render() again). Defaults to True. layout (bool, optional): Also layout widgets in the view. Defaults to False.",
"func":1
},
{
"ref":"textual.widgets.TreeControl.on_idle",
"url":2,
"doc":"Called when there are no more events on the queue. Args: event (events.Idle): Idle event.",
"func":1
},
{
"ref":"textual.widgets.TreeControl.focus",
"url":2,
"doc":"Give input focus to this widget.",
"func":1
},
{
"ref":"textual.widgets.TreeControl.capture_mouse",
"url":2,
"doc":"Capture (or release) the mouse. When captured, all mouse coordinates will go to this widget even when the pointer is not directly over the widget. Args: capture (bool, optional): True to capture or False to release. Defaults to True.",
"func":1
},
{
"ref":"textual.widgets.TreeControl.release_mouse",
"url":2,
"doc":"Release the mouse. Mouse events will only be sent when the mouse is over the widget.",
"func":1
},
{
"ref":"textual.widgets.TreeControl.parent",
"url":3,
"doc":"Get the parent node. Returns: DOMNode: The node which is the direct parent of this node."
},
{
"ref":"textual.widgets.TreeControl.screen",
"url":3,
"doc":"Get the screen that this node is contained within. Note that this may not be the currently active screen within the app."
},
{
"ref":"textual.widgets.TreeControl.id",
"url":3,
"doc":"The ID of this node, or None if the node has no ID. Returns: (str | None): A Node ID or None."
},
{
"ref":"textual.widgets.TreeControl.css_identifier",
"url":3,
"doc":"A CSS selector that identifies this DOM node."
},
{
"ref":"textual.widgets.TreeControl.css_identifier_styled",
"url":3,
"doc":"A stylized CSS identifier."
},
{
"ref":"textual.widgets.TreeControl.pseudo_classes",
"url":3,
"doc":"Get a set of all pseudo classes"
},
{
"ref":"textual.widgets.TreeControl.css_type",
"url":3,
"doc":"Gets the CSS type, used by the CSS. Returns: str: A type used in CSS (lower cased class name)."
},
{
"ref":"textual.widgets.TreeControl.css_path_nodes",
"url":3,
"doc":"A list of nodes from the root to this node, forming a \"path\". Returns: list[DOMNode]: List of Nodes, starting with the root and ending with this node."
},
{
"ref":"textual.widgets.TreeControl.display",
"url":3,
"doc":"Returns:  True if this DOMNode is displayed ( display != \"none\" ),  False otherwise."
},
{
"ref":"textual.widgets.TreeControl.tree",
"url":3,
"doc":"Get a Rich tree object which will recursively render the structure of the node tree. Returns: Tree: A Rich object which may be printed."
},
{
"ref":"textual.widgets.TreeControl.rich_text_style",
"url":3,
"doc":"Get the text style object. A widget's style is influenced by its parent. For instance if a widgets background has an alpha, then its parent's background color will show through. Additionally, widgets will inherit their parent's text style (i.e. bold, italic etc). Returns: Style: Rich Style object."
},
{
"ref":"textual.widgets.TreeControl.ancestors",
"url":3,
"doc":"Get a list of Nodes by tracing ancestors all the way back to App."
},
{
"ref":"textual.widgets.TreeControl.displayed_children",
"url":3,
"doc":"The children which don't have display: none set."
},
{
"ref":"textual.widgets.TreeControl.focusable_children",
"url":3,
"doc":"Get the children which may be focused."
},
{
"ref":"textual.widgets.TreeControl.add_child",
"url":3,
"doc":"Add a new child node. Args: node (DOMNode): A DOM node.",
"func":1
},
{
"ref":"textual.widgets.TreeControl.add_children",
"url":3,
"doc":"Add multiple children to this node. Args:  nodes (DOMNode): Positional args should be new DOM nodes.  named_nodes (DOMNode): Keyword args will be assigned the argument name as an ID.",
"func":1
},
{
"ref":"textual.widgets.TreeControl.walk_children",
"url":3,
"doc":"Generate all descendents of this node. Args: with_self (bool, optional): Also include self in the results. Defaults to True.",
"func":1
},
{
"ref":"textual.widgets.TreeControl.get_child",
"url":3,
"doc":"Return the first child (immediate descendent) of this node with the given ID. Args: id (str): The ID of the child. Returns: DOMNode: The first child of this node with the ID. Raises: NoMatchingNodesError: if no children could be found for this ID",
"func":1
},
{
"ref":"textual.widgets.TreeControl.query",
"url":3,
"doc":"Get a DOM query. Args: selector (str, optional): A CSS selector or  None for all nodes. Defaults to None. Returns: DOMQuery: A query object.",
"func":1
},
{
"ref":"textual.widgets.TreeControl.set_styles",
"url":3,
"doc":"Set custom styles on this object.",
"func":1
},
{
"ref":"textual.widgets.TreeControl.has_class",
"url":3,
"doc":"Check if the Node has all the given class names. Args:  class_names (str): CSS class names to check. Returns: bool:  True if the node has all the given class names, otherwise  False .",
"func":1
},
{
"ref":"textual.widgets.TreeControl.add_class",
"url":3,
"doc":"Add class names to this Node. Args:  class_names (str): CSS class names to add.",
"func":1
},
{
"ref":"textual.widgets.TreeControl.remove_class",
"url":3,
"doc":"Remove class names from this Node. Args:  class_names (str): CSS class names to remove.",
"func":1
},
{
"ref":"textual.widgets.TreeControl.toggle_class",
"url":3,
"doc":"Toggle class names on this Node. Args:  class_names (str): CSS class names to toggle.",
"func":1
},
{
"ref":"textual.widgets.TreeControl.has_pseudo_class",
"url":3,
"doc":"Check for pseudo class (such as hover, focus etc)",
"func":1
},
{
"ref":"textual.widgets.TreeControl.app",
"url":4,
"doc":"Get the current app."
},
{
"ref":"textual.widgets.TreeControl.disable_messages",
"url":4,
"doc":"Disable message types from being processed.",
"func":1
},
{
"ref":"textual.widgets.TreeControl.enable_messages",
"url":4,
"doc":"Enable processing of messages types.",
"func":1
},
{
"ref":"textual.widgets.TreeControl.get_message",
"url":4,
"doc":"Get the next event on the queue, or None if queue is closed. Returns: Optional[Event]: Event object or None.",
"func":1
},
{
"ref":"textual.widgets.TreeControl.peek_message",
"url":4,
"doc":"Peek the message at the head of the queue (does not remove it from the queue), or return None if the queue is empty. Returns: Optional[Message]: The message or None.",
"func":1
},
{
"ref":"textual.widgets.TreeControl.close_messages_no_wait",
"url":4,
"doc":"Request the message queue to exit.",
"func":1
},
{
"ref":"textual.widgets.TreeControl.close_messages",
"url":4,
"doc":"Close message queue, and optionally wait for queue to finish processing.",
"func":1
},
{
"ref":"textual.widgets.TreeControl.check_idle",
"url":4,
"doc":"Prompt the message pump to call idle if the queue is empty.",
"func":1
},
{
"ref":"textual.widgets.TreeControl.post_priority_message",
"url":4,
"doc":"Post a \"priority\" messages which will be processes prior to regular messages. Note that you should rarely need this in a regular app. It exists primarily to allow timer messages to skip the queue, so that they can be more regular. Args: message (Message): A message. Returns: bool: True if the messages was processed.",
"func":1
},
{
"ref":"textual.widgets.TreeControl.dispatch_key",
"url":4,
"doc":"Dispatch a key event to method. This method will call the method named 'key_ ' if it exists. Args: event (events.Key): A key event.",
"func":1
},
{
"ref":"textual.widgets.TreeNode",
"url":15,
"doc":"Abstract base class for generic types. A generic type is typically declared by inheriting from this class parameterized with one or more type variables. For example, a generic mapping type might be defined as class Mapping(Generic[KT, VT]): def __getitem__(self, key: KT) -> VT:  .  Etc. This class can then be used as follows def lookup_name(mapping: Mapping[KT, VT], key: KT, default: VT) -> VT: try: return mapping[key] except KeyError: return default"
},
{
"ref":"textual.widgets.TreeNode.control",
"url":15,
"doc":""
},
{
"ref":"textual.widgets.TreeNode.empty",
"url":15,
"doc":""
},
{
"ref":"textual.widgets.TreeNode.expanded",
"url":15,
"doc":""
},
{
"ref":"textual.widgets.TreeNode.is_cursor",
"url":15,
"doc":""
},
{
"ref":"textual.widgets.TreeNode.tree",
"url":15,
"doc":""
},
{
"ref":"textual.widgets.TreeNode.next_node",
"url":15,
"doc":"The next node in the tree, or None if at the end."
},
{
"ref":"textual.widgets.TreeNode.previous_node",
"url":15,
"doc":"The previous node in the tree, or None if at the end."
},
{
"ref":"textual.widgets.TreeNode.next_sibling",
"url":15,
"doc":"The next sibling, or None if last sibling."
},
{
"ref":"textual.widgets.TreeNode.previous_sibling",
"url":15,
"doc":"Previous sibling or None if first sibling."
},
{
"ref":"textual.widgets.TreeNode.expand",
"url":15,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.TreeNode.toggle",
"url":15,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.TreeNode.add",
"url":15,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.NodeID",
"url":15,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.tabs",
"url":16,
"doc":""
},
{
"ref":"textual.widgets.tabs.Tab",
"url":16,
"doc":"Data container representing a single tab. Attributes: label (str): The user-facing label that will appear inside the tab. name (str, optional): A unique string key that will identify the tab. If None, it will default to the label. If the name is not unique within a single list of tabs, only the final Tab will be displayed."
},
{
"ref":"textual.widgets.tabs.Tab.label",
"url":16,
"doc":""
},
{
"ref":"textual.widgets.tabs.Tab.name",
"url":16,
"doc":""
},
{
"ref":"textual.widgets.tabs.Tabs",
"url":16,
"doc":"Widget which displays a set of horizontal tabs. Args: tabs (list[Tab]): A list of Tab objects defining the tabs which should be rendered. active_tab (str, optional): The name of the tab that should be active on first render. active_tab_style (StyleType): Style to apply to the label of the active tab. active_bar_style (StyleType): Style to apply to the underline of the active tab. inactive_tab_style (StyleType): Style to apply to the label of inactive tabs. inactive_bar_style (StyleType): Style to apply to the underline of inactive tabs. inactive_text_opacity (float): Opacity of the text labels of inactive tabs. animation_duration (float): The duration of the tab change animation, in seconds. animation_function (str): The easing function to use for the tab change animation. tab_padding (int, optional): The padding at the side of each tab. If None, tabs will automatically be padded such that they fit the available horizontal space. search_by_first_character (bool): If True, entering a character on your keyboard will activate the next tab (in left-to-right order) with a label starting with that character."
},
{
"ref":"textual.widgets.tabs.Tabs.DEFAULT_STYLES",
"url":16,
"doc":""
},
{
"ref":"textual.widgets.tabs.Tabs.on_key",
"url":16,
"doc":"Handles key press events when this widget is in focus. Pressing \"escape\" removes focus from this widget. Use the left and right arrow keys to cycle through tabs. Use number keys to jump to tabs based in their number (\"1\" jumps to the leftmost tab). Type a character to cycle through tabs with labels beginning with that character. Args: event (events.Key): The Key event being handled",
"func":1
},
{
"ref":"textual.widgets.tabs.Tabs.activate_next_tab",
"url":16,
"doc":"Activate the tab to the right of the currently active tab",
"func":1
},
{
"ref":"textual.widgets.tabs.Tabs.activate_previous_tab",
"url":16,
"doc":"Activate the tab to the left of the currently active tab",
"func":1
},
{
"ref":"textual.widgets.tabs.Tabs.activate_tab_by_first_char",
"url":16,
"doc":"Activate the next tab that begins with the character Args: char (str): The character to search for",
"func":1
},
{
"ref":"textual.widgets.tabs.Tabs.activate_tab_by_number",
"url":16,
"doc":"Activate a tab using the tab number. Args: tab_number (int): The number of the tab. The leftmost tab is number 1, the next is 2, and so on. 0 represents the 10th tab.",
"func":1
},
{
"ref":"textual.widgets.tabs.Tabs.action_range_clicked",
"url":16,
"doc":"Handles 'range_clicked' actions which are fired when tabs are clicked",
"func":1
},
{
"ref":"textual.widgets.tabs.Tabs.watch__active_tab_name",
"url":16,
"doc":"Animates the underline bar position when the active tab changes",
"func":1
},
{
"ref":"textual.widgets.tabs.Tabs.find_tab_by_name",
"url":16,
"doc":"Return the index of the first tab with a certain name Args: tab_name (str): The name to search for.",
"func":1
},
{
"ref":"textual.widgets.tabs.Tabs.render",
"url":16,
"doc":"Get renderable for widget. Args: style (Styles): The Styles object for this Widget. Returns: RenderableType: Any renderable",
"func":1
},
{
"ref":"textual.widgets.tabs.Tabs.can_focus",
"url":16,
"doc":""
},
{
"ref":"textual.widgets.tabs.Tabs.can_focus_children",
"url":16,
"doc":""
},
{
"ref":"textual.widgets.tabs.Tabs.auto_width",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.tabs.Tabs.auto_height",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.tabs.Tabs.has_focus",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.tabs.Tabs.descendant_has_focus",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.tabs.Tabs.mouse_over",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.tabs.Tabs.scroll_x",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.tabs.Tabs.scroll_y",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.tabs.Tabs.scroll_target_x",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.tabs.Tabs.scroll_target_y",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.tabs.Tabs.show_vertical_scrollbar",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.tabs.Tabs.show_horizontal_scrollbar",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.tabs.Tabs.compose",
"url":2,
"doc":"Yield child widgets for a container.",
"func":1
},
{
"ref":"textual.widgets.tabs.Tabs.on_register",
"url":2,
"doc":"Called when the instance is registered. Args: app (App): App instance.",
"func":1
},
{
"ref":"textual.widgets.tabs.Tabs.get_box_model",
"url":2,
"doc":"Process the box model for this widget. Args: container (Size): The size of the container widget (with a layout) viewport (Size): The viewport size. Returns: BoxModel: The size and margin for this widget.",
"func":1
},
{
"ref":"textual.widgets.tabs.Tabs.get_content_width",
"url":2,
"doc":"Gets the width of the content area. Args: container_size (Size): Size of the container (immediate parent) widget. viewport_size (Size): Size of the viewport. Returns: int: The optimal width of the content.",
"func":1
},
{
"ref":"textual.widgets.tabs.Tabs.get_content_height",
"url":2,
"doc":"Gets the height (number of lines) in the content area. Args: container_size (Size): Size of the container (immediate parent) widget. viewport_size (Size): Size of the viewport. width (int): Width of renderable. Returns: int: The height of the content.",
"func":1
},
{
"ref":"textual.widgets.tabs.Tabs.vertical_scrollbar",
"url":2,
"doc":"Get a vertical scrollbar (create if necessary) Returns: ScrollBar: ScrollBar Widget."
},
{
"ref":"textual.widgets.tabs.Tabs.horizontal_scrollbar",
"url":2,
"doc":"Get a vertical scrollbar (create if necessary) Returns: ScrollBar: ScrollBar Widget."
},
{
"ref":"textual.widgets.tabs.Tabs.scrollbars_enabled",
"url":2,
"doc":"A tuple of booleans that indicate if scrollbars are enabled. Returns: tuple[bool, bool]: A tuple of ( ,  )"
},
{
"ref":"textual.widgets.tabs.Tabs.set_dirty",
"url":2,
"doc":"Set the Widget as 'dirty' (requiring re-render).",
"func":1
},
{
"ref":"textual.widgets.tabs.Tabs.scroll_to",
"url":2,
"doc":"Scroll to a given (absolute) coordinate, optionally animating. Args: x (int | None, optional): X coordinate (column) to scroll to, or  None for no change. Defaults to None. y (int | None, optional): Y coordinate (row) to scroll to, or  None for no change. Defaults to None. animate (bool, optional): Animate to new scroll position. Defaults to False. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.widgets.tabs.Tabs.scroll_relative",
"url":2,
"doc":"Scroll relative to current position. Args: x (int | None, optional): X distance (columns) to scroll, or  None for no change. Defaults to None. y (int | None, optional): Y distance (rows) to scroll, or  None for no change. Defaults to None. animate (bool, optional): Animate to new scroll position. Defaults to False. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.widgets.tabs.Tabs.scroll_to_widget",
"url":2,
"doc":"Scroll so that a child widget is in the visible area. Args: widget (Widget): A Widget in the children. animate (bool, optional): True to animate, or False to jump. Defaults to True. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.widgets.tabs.Tabs.get_pseudo_classes",
"url":2,
"doc":"Pseudo classes for a widget",
"func":1
},
{
"ref":"textual.widgets.tabs.Tabs.render_styled",
"url":2,
"doc":"Applies style attributes to the default renderable. Returns: RenderableType: A new renderable.",
"func":1
},
{
"ref":"textual.widgets.tabs.Tabs.content_region",
"url":2,
"doc":"A region relative to the Widget origin that contains the content."
},
{
"ref":"textual.widgets.tabs.Tabs.content_offset",
"url":2,
"doc":"An offset from the Widget origin where the content begins."
},
{
"ref":"textual.widgets.tabs.Tabs.region",
"url":2,
"doc":"The region occupied by this widget, relative to the Screen."
},
{
"ref":"textual.widgets.tabs.Tabs.is_transparent",
"url":2,
"doc":"Check if the background styles is not set. Returns: bool:  True if there is background color, otherwise  False ."
},
{
"ref":"textual.widgets.tabs.Tabs.console",
"url":2,
"doc":"Get the current console."
},
{
"ref":"textual.widgets.tabs.Tabs.is_container",
"url":2,
"doc":"Check if this widget is a container (contains other widgets) Returns: bool: True if this widget is a container."
},
{
"ref":"textual.widgets.tabs.Tabs.watch_mouse_over",
"url":2,
"doc":"Update from CSS if mouse over state changes.",
"func":1
},
{
"ref":"textual.widgets.tabs.Tabs.watch_has_focus",
"url":2,
"doc":"Update from CSS if has focus state changes.",
"func":1
},
{
"ref":"textual.widgets.tabs.Tabs.get_render_lines",
"url":2,
"doc":"Get segment lines to render the widget. Args: start (int | None, optional): line start index, or None for first line. Defaults to None. end (int | None, optional): line end index, or None for last line. Defaults to None. Returns: Lines: A list of lists of segments.",
"func":1
},
{
"ref":"textual.widgets.tabs.Tabs.check_layout",
"url":2,
"doc":"Check if a layout has been requested.",
"func":1
},
{
"ref":"textual.widgets.tabs.Tabs.call_later",
"url":2,
"doc":"Run a callback after processing all messages and refreshing the screen. Args: callback (Callable): A callable.",
"func":1
},
{
"ref":"textual.widgets.tabs.Tabs.refresh",
"url":2,
"doc":"Initiate a refresh of the widget. This method sets an internal flag to perform a refresh, which will be done on the next idle event. Only one refresh will be done even if this method is called multiple times. Args: repaint (bool, optional): Repaint the widget (will call render() again). Defaults to True. layout (bool, optional): Also layout widgets in the view. Defaults to False.",
"func":1
},
{
"ref":"textual.widgets.tabs.Tabs.on_idle",
"url":2,
"doc":"Called when there are no more events on the queue. Args: event (events.Idle): Idle event.",
"func":1
},
{
"ref":"textual.widgets.tabs.Tabs.focus",
"url":2,
"doc":"Give input focus to this widget.",
"func":1
},
{
"ref":"textual.widgets.tabs.Tabs.capture_mouse",
"url":2,
"doc":"Capture (or release) the mouse. When captured, all mouse coordinates will go to this widget even when the pointer is not directly over the widget. Args: capture (bool, optional): True to capture or False to release. Defaults to True.",
"func":1
},
{
"ref":"textual.widgets.tabs.Tabs.release_mouse",
"url":2,
"doc":"Release the mouse. Mouse events will only be sent when the mouse is over the widget.",
"func":1
},
{
"ref":"textual.widgets.tabs.Tabs.parent",
"url":3,
"doc":"Get the parent node. Returns: DOMNode: The node which is the direct parent of this node."
},
{
"ref":"textual.widgets.tabs.Tabs.screen",
"url":3,
"doc":"Get the screen that this node is contained within. Note that this may not be the currently active screen within the app."
},
{
"ref":"textual.widgets.tabs.Tabs.id",
"url":3,
"doc":"The ID of this node, or None if the node has no ID. Returns: (str | None): A Node ID or None."
},
{
"ref":"textual.widgets.tabs.Tabs.css_identifier",
"url":3,
"doc":"A CSS selector that identifies this DOM node."
},
{
"ref":"textual.widgets.tabs.Tabs.css_identifier_styled",
"url":3,
"doc":"A stylized CSS identifier."
},
{
"ref":"textual.widgets.tabs.Tabs.pseudo_classes",
"url":3,
"doc":"Get a set of all pseudo classes"
},
{
"ref":"textual.widgets.tabs.Tabs.css_type",
"url":3,
"doc":"Gets the CSS type, used by the CSS. Returns: str: A type used in CSS (lower cased class name)."
},
{
"ref":"textual.widgets.tabs.Tabs.css_path_nodes",
"url":3,
"doc":"A list of nodes from the root to this node, forming a \"path\". Returns: list[DOMNode]: List of Nodes, starting with the root and ending with this node."
},
{
"ref":"textual.widgets.tabs.Tabs.display",
"url":3,
"doc":"Returns:  True if this DOMNode is displayed ( display != \"none\" ),  False otherwise."
},
{
"ref":"textual.widgets.tabs.Tabs.tree",
"url":3,
"doc":"Get a Rich tree object which will recursively render the structure of the node tree. Returns: Tree: A Rich object which may be printed."
},
{
"ref":"textual.widgets.tabs.Tabs.rich_text_style",
"url":3,
"doc":"Get the text style object. A widget's style is influenced by its parent. For instance if a widgets background has an alpha, then its parent's background color will show through. Additionally, widgets will inherit their parent's text style (i.e. bold, italic etc). Returns: Style: Rich Style object."
},
{
"ref":"textual.widgets.tabs.Tabs.ancestors",
"url":3,
"doc":"Get a list of Nodes by tracing ancestors all the way back to App."
},
{
"ref":"textual.widgets.tabs.Tabs.displayed_children",
"url":3,
"doc":"The children which don't have display: none set."
},
{
"ref":"textual.widgets.tabs.Tabs.focusable_children",
"url":3,
"doc":"Get the children which may be focused."
},
{
"ref":"textual.widgets.tabs.Tabs.add_child",
"url":3,
"doc":"Add a new child node. Args: node (DOMNode): A DOM node.",
"func":1
},
{
"ref":"textual.widgets.tabs.Tabs.add_children",
"url":3,
"doc":"Add multiple children to this node. Args:  nodes (DOMNode): Positional args should be new DOM nodes.  named_nodes (DOMNode): Keyword args will be assigned the argument name as an ID.",
"func":1
},
{
"ref":"textual.widgets.tabs.Tabs.walk_children",
"url":3,
"doc":"Generate all descendents of this node. Args: with_self (bool, optional): Also include self in the results. Defaults to True.",
"func":1
},
{
"ref":"textual.widgets.tabs.Tabs.get_child",
"url":3,
"doc":"Return the first child (immediate descendent) of this node with the given ID. Args: id (str): The ID of the child. Returns: DOMNode: The first child of this node with the ID. Raises: NoMatchingNodesError: if no children could be found for this ID",
"func":1
},
{
"ref":"textual.widgets.tabs.Tabs.query",
"url":3,
"doc":"Get a DOM query. Args: selector (str, optional): A CSS selector or  None for all nodes. Defaults to None. Returns: DOMQuery: A query object.",
"func":1
},
{
"ref":"textual.widgets.tabs.Tabs.set_styles",
"url":3,
"doc":"Set custom styles on this object.",
"func":1
},
{
"ref":"textual.widgets.tabs.Tabs.has_class",
"url":3,
"doc":"Check if the Node has all the given class names. Args:  class_names (str): CSS class names to check. Returns: bool:  True if the node has all the given class names, otherwise  False .",
"func":1
},
{
"ref":"textual.widgets.tabs.Tabs.add_class",
"url":3,
"doc":"Add class names to this Node. Args:  class_names (str): CSS class names to add.",
"func":1
},
{
"ref":"textual.widgets.tabs.Tabs.remove_class",
"url":3,
"doc":"Remove class names from this Node. Args:  class_names (str): CSS class names to remove.",
"func":1
},
{
"ref":"textual.widgets.tabs.Tabs.toggle_class",
"url":3,
"doc":"Toggle class names on this Node. Args:  class_names (str): CSS class names to toggle.",
"func":1
},
{
"ref":"textual.widgets.tabs.Tabs.has_pseudo_class",
"url":3,
"doc":"Check for pseudo class (such as hover, focus etc)",
"func":1
},
{
"ref":"textual.widgets.tabs.Tabs.app",
"url":4,
"doc":"Get the current app."
},
{
"ref":"textual.widgets.tabs.Tabs.disable_messages",
"url":4,
"doc":"Disable message types from being processed.",
"func":1
},
{
"ref":"textual.widgets.tabs.Tabs.enable_messages",
"url":4,
"doc":"Enable processing of messages types.",
"func":1
},
{
"ref":"textual.widgets.tabs.Tabs.get_message",
"url":4,
"doc":"Get the next event on the queue, or None if queue is closed. Returns: Optional[Event]: Event object or None.",
"func":1
},
{
"ref":"textual.widgets.tabs.Tabs.peek_message",
"url":4,
"doc":"Peek the message at the head of the queue (does not remove it from the queue), or return None if the queue is empty. Returns: Optional[Message]: The message or None.",
"func":1
},
{
"ref":"textual.widgets.tabs.Tabs.close_messages_no_wait",
"url":4,
"doc":"Request the message queue to exit.",
"func":1
},
{
"ref":"textual.widgets.tabs.Tabs.close_messages",
"url":4,
"doc":"Close message queue, and optionally wait for queue to finish processing.",
"func":1
},
{
"ref":"textual.widgets.tabs.Tabs.check_idle",
"url":4,
"doc":"Prompt the message pump to call idle if the queue is empty.",
"func":1
},
{
"ref":"textual.widgets.tabs.Tabs.post_priority_message",
"url":4,
"doc":"Post a \"priority\" messages which will be processes prior to regular messages. Note that you should rarely need this in a regular app. It exists primarily to allow timer messages to skip the queue, so that they can be more regular. Args: message (Message): A message. Returns: bool: True if the messages was processed.",
"func":1
},
{
"ref":"textual.widgets.tabs.Tabs.dispatch_key",
"url":4,
"doc":"Dispatch a key event to method. This method will call the method named 'key_ ' if it exists. Args: event (events.Key): A key event.",
"func":1
},
{
"ref":"textual.message_pump",
"url":4,
"doc":""
},
{
"ref":"textual.message_pump.NoParent",
"url":4,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"textual.message_pump.CallbackError",
"url":4,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"textual.message_pump.MessagePumpClosed",
"url":4,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"textual.message_pump.MessagePriority",
"url":4,
"doc":"Wraps a messages with a priority, and provides equality."
},
{
"ref":"textual.message_pump.MessagePriority.message",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.message_pump.MessagePriority.priority",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.message_pump.MessagePump",
"url":4,
"doc":""
},
{
"ref":"textual.message_pump.MessagePump.task",
"url":4,
"doc":""
},
{
"ref":"textual.message_pump.MessagePump.has_parent",
"url":4,
"doc":""
},
{
"ref":"textual.message_pump.MessagePump.app",
"url":4,
"doc":"Get the current app."
},
{
"ref":"textual.message_pump.MessagePump.is_parent_active",
"url":4,
"doc":""
},
{
"ref":"textual.message_pump.MessagePump.is_running",
"url":4,
"doc":""
},
{
"ref":"textual.message_pump.MessagePump.log",
"url":4,
"doc":"",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.set_parent",
"url":4,
"doc":"",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.check_message_enabled",
"url":4,
"doc":"",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.disable_messages",
"url":4,
"doc":"Disable message types from being processed.",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.enable_messages",
"url":4,
"doc":"Enable processing of messages types.",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.get_message",
"url":4,
"doc":"Get the next event on the queue, or None if queue is closed. Returns: Optional[Event]: Event object or None.",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.peek_message",
"url":4,
"doc":"Peek the message at the head of the queue (does not remove it from the queue), or return None if the queue is empty. Returns: Optional[Message]: The message or None.",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.set_timer",
"url":4,
"doc":"",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.set_interval",
"url":4,
"doc":"",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.call_later",
"url":4,
"doc":"Run a callback after processing all messages and refreshing the screen. Args: callback (Callable): A callable.",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.close_messages_no_wait",
"url":4,
"doc":"Request the message queue to exit.",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.close_messages",
"url":4,
"doc":"Close message queue, and optionally wait for queue to finish processing.",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.start_messages",
"url":4,
"doc":"",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.process_messages",
"url":4,
"doc":"",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.dispatch_message",
"url":4,
"doc":"",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.on_event",
"url":4,
"doc":"",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.on_message",
"url":4,
"doc":"",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.check_idle",
"url":4,
"doc":"Prompt the message pump to call idle if the queue is empty.",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.post_message",
"url":4,
"doc":"",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.post_priority_message",
"url":4,
"doc":"Post a \"priority\" messages which will be processes prior to regular messages. Note that you should rarely need this in a regular app. It exists primarily to allow timer messages to skip the queue, so that they can be more regular. Args: message (Message): A message. Returns: bool: True if the messages was processed.",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.post_message_no_wait",
"url":4,
"doc":"",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.post_message_from_child",
"url":4,
"doc":"",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.post_message_from_child_no_wait",
"url":4,
"doc":"",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.on_callback",
"url":4,
"doc":"",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.emit_no_wait",
"url":4,
"doc":"",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.emit",
"url":4,
"doc":"",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.dispatch_key",
"url":4,
"doc":"Dispatch a key event to method. This method will call the method named 'key_ ' if it exists. Args: event (events.Key): A key event.",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.on_timer",
"url":4,
"doc":"",
"func":1
},
{
"ref":"textual.case",
"url":17,
"doc":""
},
{
"ref":"textual.case.camel_to_snake",
"url":17,
"doc":"Convert name from CamelCase to snake_case. Args: name (str): A symbol name, such as a class name. Returns: str: Name in camel case.",
"func":1
},
{
"ref":"textual.css",
"url":18,
"doc":""
},
{
"ref":"textual.css.scalar_animation",
"url":19,
"doc":""
},
{
"ref":"textual.css.scalar_animation.ScalarAnimation",
"url":19,
"doc":"Helper class that provides a standard way to create an ABC using inheritance."
},
{
"ref":"textual.css.constants",
"url":20,
"doc":""
},
{
"ref":"textual.css.match",
"url":21,
"doc":""
},
{
"ref":"textual.css.match.match",
"url":21,
"doc":"Check if a given selector matches any of the given selector sets. Args: selector_sets (Iterable[SelectorSet]): Iterable of selector sets. node (DOMNode): DOM node. Returns: bool: True if the node matches the selector, otherwise False.",
"func":1
},
{
"ref":"textual.css.model",
"url":22,
"doc":""
},
{
"ref":"textual.css.model.SelectorType",
"url":22,
"doc":"An enumeration."
},
{
"ref":"textual.css.model.SelectorType.UNIVERSAL",
"url":22,
"doc":""
},
{
"ref":"textual.css.model.SelectorType.TYPE",
"url":22,
"doc":""
},
{
"ref":"textual.css.model.SelectorType.CLASS",
"url":22,
"doc":""
},
{
"ref":"textual.css.model.SelectorType.ID",
"url":22,
"doc":""
},
{
"ref":"textual.css.model.CombinatorType",
"url":22,
"doc":"An enumeration."
},
{
"ref":"textual.css.model.CombinatorType.SAME",
"url":22,
"doc":""
},
{
"ref":"textual.css.model.CombinatorType.DESCENDENT",
"url":22,
"doc":""
},
{
"ref":"textual.css.model.CombinatorType.CHILD",
"url":22,
"doc":""
},
{
"ref":"textual.css.model.Selector",
"url":22,
"doc":"Represents a CSS selector. Some examples of selectors:  Header.title App > Content"
},
{
"ref":"textual.css.model.Selector.name",
"url":22,
"doc":""
},
{
"ref":"textual.css.model.Selector.pseudo_classes",
"url":22,
"doc":""
},
{
"ref":"textual.css.model.Selector.specificity",
"url":22,
"doc":""
},
{
"ref":"textual.css.model.Selector.combinator",
"url":22,
"doc":""
},
{
"ref":"textual.css.model.Selector.type",
"url":22,
"doc":""
},
{
"ref":"textual.css.model.Selector.advance",
"url":22,
"doc":""
},
{
"ref":"textual.css.model.Selector.css",
"url":22,
"doc":"Rebuilds the selector as it would appear in CSS."
},
{
"ref":"textual.css.model.Selector.check",
"url":22,
"doc":"",
"func":1
},
{
"ref":"textual.css.model.Declaration",
"url":22,
"doc":"Declaration(token: 'Token', name: 'str', tokens: 'list[Token]' =  )"
},
{
"ref":"textual.css.model.Declaration.token",
"url":22,
"doc":""
},
{
"ref":"textual.css.model.Declaration.name",
"url":22,
"doc":""
},
{
"ref":"textual.css.model.Declaration.tokens",
"url":22,
"doc":""
},
{
"ref":"textual.css.model.SelectorSet",
"url":22,
"doc":"SelectorSet(selectors: 'list[Selector]' =  , specificity: 'Specificity3' = (0, 0, 0 "
},
{
"ref":"textual.css.model.SelectorSet.selectors",
"url":22,
"doc":""
},
{
"ref":"textual.css.model.SelectorSet.specificity",
"url":22,
"doc":""
},
{
"ref":"textual.css.model.SelectorSet.from_selectors",
"url":22,
"doc":"",
"func":1
},
{
"ref":"textual.css.model.RuleSet",
"url":22,
"doc":"RuleSet(selector_set: 'list[SelectorSet]' =  , styles: 'Styles' =  , errors: 'list[tuple[Token, str ' =  , classes: 'set[str]' =  )"
},
{
"ref":"textual.css.model.RuleSet.selector_set",
"url":22,
"doc":""
},
{
"ref":"textual.css.model.RuleSet.styles",
"url":22,
"doc":""
},
{
"ref":"textual.css.model.RuleSet.errors",
"url":22,
"doc":""
},
{
"ref":"textual.css.model.RuleSet.classes",
"url":22,
"doc":""
},
{
"ref":"textual.css.model.RuleSet.selectors",
"url":22,
"doc":""
},
{
"ref":"textual.css.model.RuleSet.css",
"url":22,
"doc":"Generate the CSS this RuleSet Returns: str: A string containing CSS code."
},
{
"ref":"textual.css.stylesheet",
"url":23,
"doc":""
},
{
"ref":"textual.css.stylesheet.StylesheetParseError",
"url":23,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"textual.css.stylesheet.StylesheetErrors",
"url":23,
"doc":""
},
{
"ref":"textual.css.stylesheet.StylesheetErrors.set_variables",
"url":23,
"doc":"Pre-populate CSS variables.",
"func":1
},
{
"ref":"textual.css.stylesheet.Stylesheet",
"url":23,
"doc":""
},
{
"ref":"textual.css.stylesheet.Stylesheet.rules",
"url":23,
"doc":""
},
{
"ref":"textual.css.stylesheet.Stylesheet.css",
"url":23,
"doc":""
},
{
"ref":"textual.css.stylesheet.Stylesheet.set_variables",
"url":23,
"doc":"Set CSS variables. Args: variables (dict[str, str]): A mapping of name to variable.",
"func":1
},
{
"ref":"textual.css.stylesheet.Stylesheet.read",
"url":23,
"doc":"Read Textual CSS file. Args: filename (str | PurePath): filename of CSS. Raises: StylesheetError: If the CSS could not be read. StylesheetParseError: If the CSS is invalid.",
"func":1
},
{
"ref":"textual.css.stylesheet.Stylesheet.add_source",
"url":23,
"doc":"Parse CSS from a string. Args: css (str): String with CSS source. path (str | PurePath, optional): The path of the source if a file, or some other identifier. Defaults to None. Raises: StylesheetError: If the CSS could not be read. StylesheetParseError: If the CSS is invalid.",
"func":1
},
{
"ref":"textual.css.stylesheet.Stylesheet.parse",
"url":23,
"doc":"Parse the source in the stylesheet. Raises: StylesheetParseError: If there are any CSS related errors.",
"func":1
},
{
"ref":"textual.css.stylesheet.Stylesheet.reparse",
"url":23,
"doc":"Re-parse source, applying new variables. Raises: StylesheetError: If the CSS could not be read. StylesheetParseError: If the CSS is invalid.",
"func":1
},
{
"ref":"textual.css.stylesheet.Stylesheet.apply",
"url":23,
"doc":"Apply the stylesheet to a DOM node. Args: node (DOMNode): The  DOMNode to apply the stylesheet to. Applies the styles defined in this  Stylesheet to the node. If the same rule is defined multiple times for the node (e.g. multiple classes modifying the same CSS property), then only the most specific rule will be applied. animate (bool, optional): Animate changed rules. Defaults to  False .",
"func":1
},
{
"ref":"textual.css.stylesheet.Stylesheet.replace_rules",
"url":23,
"doc":"Replace style rules on a node, animating as required. Args: node (DOMNode): A DOM node. rules (RulesMap): Mapping of rules. animate (bool, optional): Enable animation. Defaults to False.",
"func":1
},
{
"ref":"textual.css.stylesheet.Stylesheet.update",
"url":23,
"doc":"Update a node and its children.",
"func":1
},
{
"ref":"textual.css.scalar",
"url":24,
"doc":""
},
{
"ref":"textual.css.scalar.ScalarError",
"url":24,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"textual.css.scalar.ScalarResolveError",
"url":24,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"textual.css.scalar.ScalarParseError",
"url":24,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"textual.css.scalar.Unit",
"url":24,
"doc":"An enumeration."
},
{
"ref":"textual.css.scalar.Unit.CELLS",
"url":24,
"doc":""
},
{
"ref":"textual.css.scalar.Unit.FRACTION",
"url":24,
"doc":""
},
{
"ref":"textual.css.scalar.Unit.PERCENT",
"url":24,
"doc":""
},
{
"ref":"textual.css.scalar.Unit.WIDTH",
"url":24,
"doc":""
},
{
"ref":"textual.css.scalar.Unit.HEIGHT",
"url":24,
"doc":""
},
{
"ref":"textual.css.scalar.Unit.VIEW_WIDTH",
"url":24,
"doc":""
},
{
"ref":"textual.css.scalar.Unit.VIEW_HEIGHT",
"url":24,
"doc":""
},
{
"ref":"textual.css.scalar.Unit.AUTO",
"url":24,
"doc":""
},
{
"ref":"textual.css.scalar.get_symbols",
"url":24,
"doc":"Get symbols for an iterable of units. Args: units (Iterable[Unit]): A number of units. Returns: list[str]: List of symbols.",
"func":1
},
{
"ref":"textual.css.scalar.Scalar",
"url":24,
"doc":"A numeric value and a unit."
},
{
"ref":"textual.css.scalar.Scalar.value",
"url":24,
"doc":"Alias for field number 0"
},
{
"ref":"textual.css.scalar.Scalar.unit",
"url":24,
"doc":"Alias for field number 1"
},
{
"ref":"textual.css.scalar.Scalar.percent_unit",
"url":24,
"doc":"Alias for field number 2"
},
{
"ref":"textual.css.scalar.Scalar.is_percent",
"url":24,
"doc":""
},
{
"ref":"textual.css.scalar.Scalar.cells",
"url":24,
"doc":""
},
{
"ref":"textual.css.scalar.Scalar.fraction",
"url":24,
"doc":""
},
{
"ref":"textual.css.scalar.Scalar.symbol",
"url":24,
"doc":""
},
{
"ref":"textual.css.scalar.Scalar.is_auto",
"url":24,
"doc":""
},
{
"ref":"textual.css.scalar.Scalar.from_number",
"url":24,
"doc":"",
"func":1
},
{
"ref":"textual.css.scalar.Scalar.parse",
"url":24,
"doc":"Parse a string in to a Scalar Args: token (str): A string containing a scalar, e.g. \"3.14fr\" Raises: ScalarParseError: If the value is not a valid scalar Returns: Scalar: New scalar",
"func":1
},
{
"ref":"textual.css.scalar.Scalar.resolve_dimension",
"url":24,
"doc":"Resolve scalar with units in to a dimensions. Args: size (tuple[int, int]): Size of the container. viewport (tuple[int, int]): Size of the viewport (typically terminal size) Raises: ScalarResolveError: If the unit is unknown. Returns: int: A size (in cells)",
"func":1
},
{
"ref":"textual.css.scalar.Scalar.copy_with",
"url":24,
"doc":"Get a copy of this Scalar, with values optionally modified Args: value (float | None): The new value, or None to keep the same value unit (Unit | None): The new unit, or None to keep the same unit percent_unit (Unit | None): The new percent_unit, or None to keep the same percent_unit",
"func":1
},
{
"ref":"textual.css.scalar.ScalarOffset",
"url":24,
"doc":"ScalarOffset(x, y)"
},
{
"ref":"textual.css.scalar.ScalarOffset.x",
"url":24,
"doc":"Alias for field number 0"
},
{
"ref":"textual.css.scalar.ScalarOffset.y",
"url":24,
"doc":"Alias for field number 1"
},
{
"ref":"textual.css.scalar.ScalarOffset.null",
"url":24,
"doc":"Get a null scalar offset (0, 0).",
"func":1
},
{
"ref":"textual.css.scalar.ScalarOffset.resolve",
"url":24,
"doc":"",
"func":1
},
{
"ref":"textual.css.parse",
"url":25,
"doc":""
},
{
"ref":"textual.css.parse.parse_selectors",
"url":25,
"doc":"",
"func":1
},
{
"ref":"textual.css.parse.parse_rule_set",
"url":25,
"doc":"",
"func":1
},
{
"ref":"textual.css.parse.parse_declarations",
"url":25,
"doc":"Parse declarations and return a Styles object. Args: css (str): String containing CSS. path (str): Path to the CSS, or something else to identify the location. Returns: Styles: A styles object.",
"func":1
},
{
"ref":"textual.css.parse.substitute_references",
"url":25,
"doc":"Replace variable references with values by substituting variable reference tokens with the tokens representing their values. Args: tokens (Iterable[Token]): Iterator of Tokens which may contain tokens with the name \"variable_ref\". Returns: Iterable[Token]: Yields Tokens such that any variable references (tokens where token.name  \"variable_ref\") have been replaced with the tokens representing the value. In other words, an Iterable of Tokens similar to the original input, but with variables resolved. Substituted tokens will have their referenced_by attribute populated with information about where the tokens are being substituted to.",
"func":1
},
{
"ref":"textual.css.parse.parse",
"url":25,
"doc":"Parse CSS by tokenizing it, performing variable substitution, and generating rule sets from it. Args: css (str): The input CSS path (str): Path to the CSS",
"func":1
},
{
"ref":"textual.css.tokenizer",
"url":26,
"doc":""
},
{
"ref":"textual.css.tokenizer.TokenizeError",
"url":26,
"doc":"Error raised when the CSS cannot be tokenized (syntax error). Args: path (str): Path to source or \" \" if source is parsed from a literal. code (str): The code being parsed. line_no (int): Line number of the error. col_no (int): Column number of the error. message (str): A message associated with the error."
},
{
"ref":"textual.css.tokenizer.EOFError",
"url":26,
"doc":"Error raised when the CSS cannot be tokenized (syntax error). Args: path (str): Path to source or \" \" if source is parsed from a literal. code (str): The code being parsed. line_no (int): Line number of the error. col_no (int): Column number of the error. message (str): A message associated with the error."
},
{
"ref":"textual.css.tokenizer.Expect",
"url":26,
"doc":""
},
{
"ref":"textual.css.tokenizer.Expect.expect_eof",
"url":26,
"doc":"",
"func":1
},
{
"ref":"textual.css.tokenizer.ReferencedBy",
"url":26,
"doc":"ReferencedBy(name, location, length)"
},
{
"ref":"textual.css.tokenizer.ReferencedBy.name",
"url":26,
"doc":"Alias for field number 0"
},
{
"ref":"textual.css.tokenizer.ReferencedBy.location",
"url":26,
"doc":"Alias for field number 1"
},
{
"ref":"textual.css.tokenizer.ReferencedBy.length",
"url":26,
"doc":"Alias for field number 2"
},
{
"ref":"textual.css.tokenizer.Token",
"url":26,
"doc":"Token(name, value, path, code, location, referenced_by)"
},
{
"ref":"textual.css.tokenizer.Token.name",
"url":26,
"doc":"Alias for field number 0"
},
{
"ref":"textual.css.tokenizer.Token.value",
"url":26,
"doc":"Alias for field number 1"
},
{
"ref":"textual.css.tokenizer.Token.path",
"url":26,
"doc":"Alias for field number 2"
},
{
"ref":"textual.css.tokenizer.Token.code",
"url":26,
"doc":"Alias for field number 3"
},
{
"ref":"textual.css.tokenizer.Token.location",
"url":26,
"doc":"Alias for field number 4"
},
{
"ref":"textual.css.tokenizer.Token.referenced_by",
"url":26,
"doc":"Alias for field number 5"
},
{
"ref":"textual.css.tokenizer.Token.with_reference",
"url":26,
"doc":"Return a copy of the Token, with reference information attached. This is used for variable substitution, where a variable reference can refer to tokens which were defined elsewhere. With the additional ReferencedBy data attached, we can track where the token we are referring to is used.",
"func":1
},
{
"ref":"textual.css.tokenizer.Tokenizer",
"url":26,
"doc":""
},
{
"ref":"textual.css.tokenizer.Tokenizer.get_token",
"url":26,
"doc":"",
"func":1
},
{
"ref":"textual.css.tokenizer.Tokenizer.skip_to",
"url":26,
"doc":"",
"func":1
},
{
"ref":"textual.css.query",
"url":27,
"doc":"A DOMQuery is a set of DOM nodes associated with a given CSS selector. This set of nodes may be further filtered with the filter method. Additional methods apply actions to the nodes in the query. If this sounds like JQuery, a (once) popular JS library, it is no coincidence. DOMQuery objects are typically created by Widget.filter method."
},
{
"ref":"textual.css.query.NoMatchingNodesError",
"url":27,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"textual.css.query.DOMQuery",
"url":27,
"doc":""
},
{
"ref":"textual.css.query.DOMQuery.filter",
"url":27,
"doc":"Filter this set by the given CSS selector. Args: selector (str): A CSS selector. Returns: DOMQuery: New DOM Query.",
"func":1
},
{
"ref":"textual.css.query.DOMQuery.exclude",
"url":27,
"doc":"Exclude nodes that match a given selector. Args: selector (str): A CSS selector. Returns: DOMQuery: New DOM query.",
"func":1
},
{
"ref":"textual.css.query.DOMQuery.first",
"url":27,
"doc":"Get the first matched node. Returns: DOMNode: A DOM Node.",
"func":1
},
{
"ref":"textual.css.query.DOMQuery.add_class",
"url":27,
"doc":"Add the given class name(s) to nodes.",
"func":1
},
{
"ref":"textual.css.query.DOMQuery.remove_class",
"url":27,
"doc":"Remove the given class names from the nodes.",
"func":1
},
{
"ref":"textual.css.query.DOMQuery.toggle_class",
"url":27,
"doc":"Toggle the given class names from matched nodes.",
"func":1
},
{
"ref":"textual.css.query.DOMQuery.set_styles",
"url":27,
"doc":"Set styles on matched nodes. Args: css (str, optional): CSS declarations to parser, or None. Defaults to None.",
"func":1
},
{
"ref":"textual.css.query.DOMQuery.refresh",
"url":27,
"doc":"Refresh matched nodes. Args: repaint (bool): Repaint node(s). defaults to True. layout (bool): Layout node(s). Defaults to False. Returns: DOMQuery: Query for chaining.",
"func":1
},
{
"ref":"textual.css.errors",
"url":28,
"doc":""
},
{
"ref":"textual.css.errors.DeclarationError",
"url":28,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"textual.css.errors.UnresolvedVariableError",
"url":28,
"doc":"Name not found globally."
},
{
"ref":"textual.css.errors.StyleTypeError",
"url":28,
"doc":"Inappropriate argument type."
},
{
"ref":"textual.css.errors.StyleValueError",
"url":28,
"doc":"Raised when the value of a style property is not valid Attributes: help_text (HelpText | None): Optional HelpText to be rendered when this error is raised."
},
{
"ref":"textual.css.errors.StylesheetError",
"url":28,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"textual.css.styles",
"url":29,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap",
"url":29,
"doc":"A typed dict for CSS rules. Any key may be absent, indicating that rule has not been set. Does not define composite rules, that is a rule that is made of a combination of other rules."
},
{
"ref":"textual.css.styles.RulesMap.display",
"url":29,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.visibility",
"url":29,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.layout",
"url":29,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.color",
"url":29,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.background",
"url":29,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.text_style",
"url":29,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.opacity",
"url":29,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.padding",
"url":29,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.margin",
"url":29,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.offset",
"url":29,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.border_top",
"url":29,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.border_right",
"url":29,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.border_bottom",
"url":29,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.border_left",
"url":29,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.outline_top",
"url":29,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.outline_right",
"url":29,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.outline_bottom",
"url":29,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.outline_left",
"url":29,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.box_sizing",
"url":29,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.width",
"url":29,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.height",
"url":29,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.min_width",
"url":29,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.min_height",
"url":29,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.max_width",
"url":29,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.max_height",
"url":29,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.dock",
"url":29,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.docks",
"url":29,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.overflow_x",
"url":29,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.overflow_y",
"url":29,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.layers",
"url":29,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.layer",
"url":29,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.transitions",
"url":29,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.tint",
"url":29,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.scrollbar_color",
"url":29,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.scrollbar_color_hover",
"url":29,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.scrollbar_color_active",
"url":29,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.scrollbar_background",
"url":29,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.scrollbar_background_hover",
"url":29,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.scrollbar_background_active",
"url":29,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.align_horizontal",
"url":29,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.align_vertical",
"url":29,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.content_align_horizontal",
"url":29,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.content_align_vertical",
"url":29,
"doc":""
},
{
"ref":"textual.css.styles.DockGroup",
"url":29,
"doc":"DockGroup(name, edge, z)"
},
{
"ref":"textual.css.styles.DockGroup.name",
"url":29,
"doc":"Alias for field number 0"
},
{
"ref":"textual.css.styles.DockGroup.edge",
"url":29,
"doc":"Alias for field number 1"
},
{
"ref":"textual.css.styles.DockGroup.z",
"url":29,
"doc":"Alias for field number 2"
},
{
"ref":"textual.css.styles.StylesBase",
"url":29,
"doc":"A common base class for Styles and RenderStyles"
},
{
"ref":"textual.css.styles.StylesBase.ANIMATABLE",
"url":29,
"doc":""
},
{
"ref":"textual.css.styles.StylesBase.display",
"url":29,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.StylesBase.visibility",
"url":29,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.StylesBase.layout",
"url":29,
"doc":"Descriptor for getting and setting layout."
},
{
"ref":"textual.css.styles.StylesBase.color",
"url":29,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.StylesBase.background",
"url":29,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.StylesBase.text_style",
"url":29,
"doc":"Descriptor for getting and set style flag properties (e.g.  bold italic underline )."
},
{
"ref":"textual.css.styles.StylesBase.opacity",
"url":29,
"doc":"Property that can be set either as a float (e.g. 0.1) or a string percentage (e.g. '10%'). Values will be clamped to the range (0, 1)."
},
{
"ref":"textual.css.styles.StylesBase.padding",
"url":29,
"doc":"Descriptor for getting and setting spacing properties (e.g. padding and margin)."
},
{
"ref":"textual.css.styles.StylesBase.margin",
"url":29,
"doc":"Descriptor for getting and setting spacing properties (e.g. padding and margin)."
},
{
"ref":"textual.css.styles.StylesBase.offset",
"url":29,
"doc":"Descriptor for getting and setting the offset property. Offset consists of two values, x and y, that a widget's position will be adjusted by before it is rendered."
},
{
"ref":"textual.css.styles.StylesBase.border",
"url":29,
"doc":"Descriptor for getting and setting full borders and outlines. Args: layout (bool): True if the layout should be refreshed after setting, False otherwise."
},
{
"ref":"textual.css.styles.StylesBase.border_top",
"url":29,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.StylesBase.border_right",
"url":29,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.StylesBase.border_bottom",
"url":29,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.StylesBase.border_left",
"url":29,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.StylesBase.outline",
"url":29,
"doc":"Descriptor for getting and setting full borders and outlines. Args: layout (bool): True if the layout should be refreshed after setting, False otherwise."
},
{
"ref":"textual.css.styles.StylesBase.outline_top",
"url":29,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.StylesBase.outline_right",
"url":29,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.StylesBase.outline_bottom",
"url":29,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.StylesBase.outline_left",
"url":29,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.StylesBase.box_sizing",
"url":29,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.StylesBase.width",
"url":29,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.StylesBase.height",
"url":29,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.StylesBase.min_width",
"url":29,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.StylesBase.min_height",
"url":29,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.StylesBase.max_width",
"url":29,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.StylesBase.max_height",
"url":29,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.StylesBase.dock",
"url":29,
"doc":"Descriptor for getting and setting the dock property. The dock property allows you to specify which dock you wish a Widget to be attached to. This should be used in conjunction with the \"docks\" property which lets you define the docks themselves, and where they are located on screen."
},
{
"ref":"textual.css.styles.StylesBase.docks",
"url":29,
"doc":"Descriptor for getting and setting the docks property. This property is used to define docks and their location on screen."
},
{
"ref":"textual.css.styles.StylesBase.overflow_x",
"url":29,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.StylesBase.overflow_y",
"url":29,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.StylesBase.layer",
"url":29,
"doc":"Descriptor for getting and setting name properties."
},
{
"ref":"textual.css.styles.StylesBase.layers",
"url":29,
"doc":""
},
{
"ref":"textual.css.styles.StylesBase.transitions",
"url":29,
"doc":"Descriptor for getting transitions properties"
},
{
"ref":"textual.css.styles.StylesBase.rich_style",
"url":29,
"doc":"Descriptor for getting the Rich style."
},
{
"ref":"textual.css.styles.StylesBase.tint",
"url":29,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.StylesBase.scrollbar_color",
"url":29,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.StylesBase.scrollbar_color_hover",
"url":29,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.StylesBase.scrollbar_color_active",
"url":29,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.StylesBase.scrollbar_background",
"url":29,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.StylesBase.scrollbar_background_hover",
"url":29,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.StylesBase.scrollbar_background_active",
"url":29,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.StylesBase.align_horizontal",
"url":29,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.StylesBase.align_vertical",
"url":29,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.StylesBase.content_align_horizontal",
"url":29,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.StylesBase.content_align_vertical",
"url":29,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.StylesBase.gutter",
"url":29,
"doc":"Get space around widget. Returns: Spacing: Space around widget."
},
{
"ref":"textual.css.styles.StylesBase.content_gutter",
"url":29,
"doc":"The spacing that surrounds the content area of the widget."
},
{
"ref":"textual.css.styles.StylesBase.has_rule",
"url":29,
"doc":"Check if a rule is set on this Styles object. Args: rule (str): Rule name. Returns: bool:  True if the rules is present, otherwise  False .",
"func":1
},
{
"ref":"textual.css.styles.StylesBase.clear_rule",
"url":29,
"doc":"Removes the rule from the Styles object, as if it had never been set. Args: rule (str): Rule name. Returns: bool:  True if a rule was cleared, or  False if the rule is already not set.",
"func":1
},
{
"ref":"textual.css.styles.StylesBase.get_rules",
"url":29,
"doc":"Get the rules in a mapping. Returns: RulesMap: A TypedDict of the rules.",
"func":1
},
{
"ref":"textual.css.styles.StylesBase.set_rule",
"url":29,
"doc":"Set a rule. Args: rule (str): Rule name. value (object | None): New rule value. Returns: bool:  True if the rule changed, otherwise  False .",
"func":1
},
{
"ref":"textual.css.styles.StylesBase.get_rule",
"url":29,
"doc":"Get an individual rule. Args: rule (str): Name of rule. default (object, optional): Default if rule does not exists. Defaults to None. Returns: object: Rule value or default.",
"func":1
},
{
"ref":"textual.css.styles.StylesBase.refresh",
"url":29,
"doc":"Mark the styles as requiring a refresh. Args: layout (bool, optional): Also require a layout. Defaults to False.",
"func":1
},
{
"ref":"textual.css.styles.StylesBase.reset",
"url":29,
"doc":"Reset the rules to initial state.",
"func":1
},
{
"ref":"textual.css.styles.StylesBase.merge",
"url":29,
"doc":"Merge values from another Styles. Args: other (Styles): A Styles object.",
"func":1
},
{
"ref":"textual.css.styles.StylesBase.merge_rules",
"url":29,
"doc":"Merge rules in to Styles. Args: rules (RulesMap): A mapping of rules.",
"func":1
},
{
"ref":"textual.css.styles.StylesBase.get_render_rules",
"url":29,
"doc":"Get rules map with defaults.",
"func":1
},
{
"ref":"textual.css.styles.StylesBase.is_animatable",
"url":29,
"doc":"Check if a given rule may be animated. Args: rule (str): Name of the rule. Returns: bool:  True if the rule may be animated, otherwise  False .",
"func":1
},
{
"ref":"textual.css.styles.StylesBase.parse",
"url":29,
"doc":"Parse CSS and return a Styles object. Args: css (str): Textual CSS. path (str): Path or string indicating source of CSS. node (DOMNode, optional): Node to associate with the Styles. Defaults to None. Returns: Styles: A Styles instance containing result of parsing CSS.",
"func":1
},
{
"ref":"textual.css.styles.StylesBase.get_transition",
"url":29,
"doc":"",
"func":1
},
{
"ref":"textual.css.styles.StylesBase.align_width",
"url":29,
"doc":"Align the width dimension. Args: width (int): Width of the content. parent_width (int): Width of the parent container. Returns: int: An offset to add to the X coordinate.",
"func":1
},
{
"ref":"textual.css.styles.StylesBase.align_height",
"url":29,
"doc":"Align the height dimensions Args: height (int): Height of the content. parent_height (int): Height of the parent container. Returns: int: An offset to add to the Y coordinate.",
"func":1
},
{
"ref":"textual.css.styles.Styles",
"url":29,
"doc":"Styles(node: 'DOMNode | None' = None, _rules: 'RulesMap' =  , important: 'set[str]' =  )"
},
{
"ref":"textual.css.styles.Styles.important",
"url":29,
"doc":""
},
{
"ref":"textual.css.styles.Styles.node",
"url":29,
"doc":""
},
{
"ref":"textual.css.styles.Styles.copy",
"url":29,
"doc":"Get a copy of this Styles object.",
"func":1
},
{
"ref":"textual.css.styles.Styles.has_rule",
"url":29,
"doc":"Check if a rule is set on this Styles object. Args: rule (str): Rule name. Returns: bool:  True if the rules is present, otherwise  False .",
"func":1
},
{
"ref":"textual.css.styles.Styles.clear_rule",
"url":29,
"doc":"Removes the rule from the Styles object, as if it had never been set. Args: rule (str): Rule name. Returns: bool:  True if a rule was cleared, or  False if it was already not set.",
"func":1
},
{
"ref":"textual.css.styles.Styles.get_rules",
"url":29,
"doc":"Get the rules in a mapping. Returns: RulesMap: A TypedDict of the rules.",
"func":1
},
{
"ref":"textual.css.styles.Styles.set_rule",
"url":29,
"doc":"Set a rule. Args: rule (str): Rule name. value (object | None): New rule value. Returns: bool:  True if the rule changed, otherwise  False .",
"func":1
},
{
"ref":"textual.css.styles.Styles.get_rule",
"url":29,
"doc":"Get an individual rule. Args: rule (str): Name of rule. default (object, optional): Default if rule does not exists. Defaults to None. Returns: object: Rule value or default.",
"func":1
},
{
"ref":"textual.css.styles.Styles.refresh",
"url":29,
"doc":"Mark the styles as requiring a refresh. Args: layout (bool, optional): Also require a layout. Defaults to False.",
"func":1
},
{
"ref":"textual.css.styles.Styles.reset",
"url":29,
"doc":"Reset the rules to initial state.",
"func":1
},
{
"ref":"textual.css.styles.Styles.merge",
"url":29,
"doc":"Merge values from another Styles. Args: other (Styles): A Styles object.",
"func":1
},
{
"ref":"textual.css.styles.Styles.merge_rules",
"url":29,
"doc":"Merge rules in to Styles. Args: rules (RulesMap): A mapping of rules.",
"func":1
},
{
"ref":"textual.css.styles.Styles.extract_rules",
"url":29,
"doc":"Extract rules from Styles object, and apply !important css specificity. Args: specificity (Specificity3): A node specificity. Returns: list[tuple[str, Specificity4, Any ]: A list containing a tuple of  ,   .",
"func":1
},
{
"ref":"textual.css.styles.Styles.css_lines",
"url":29,
"doc":""
},
{
"ref":"textual.css.styles.Styles.css",
"url":29,
"doc":""
},
{
"ref":"textual.css.styles.Styles.display",
"url":29,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.Styles.visibility",
"url":29,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.Styles.layout",
"url":29,
"doc":"Descriptor for getting and setting layout."
},
{
"ref":"textual.css.styles.Styles.color",
"url":29,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.Styles.background",
"url":29,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.Styles.text_style",
"url":29,
"doc":"Descriptor for getting and set style flag properties (e.g.  bold italic underline )."
},
{
"ref":"textual.css.styles.Styles.opacity",
"url":29,
"doc":"Property that can be set either as a float (e.g. 0.1) or a string percentage (e.g. '10%'). Values will be clamped to the range (0, 1)."
},
{
"ref":"textual.css.styles.Styles.padding",
"url":29,
"doc":"Descriptor for getting and setting spacing properties (e.g. padding and margin)."
},
{
"ref":"textual.css.styles.Styles.margin",
"url":29,
"doc":"Descriptor for getting and setting spacing properties (e.g. padding and margin)."
},
{
"ref":"textual.css.styles.Styles.offset",
"url":29,
"doc":"Descriptor for getting and setting the offset property. Offset consists of two values, x and y, that a widget's position will be adjusted by before it is rendered."
},
{
"ref":"textual.css.styles.Styles.border",
"url":29,
"doc":"Descriptor for getting and setting full borders and outlines. Args: layout (bool): True if the layout should be refreshed after setting, False otherwise."
},
{
"ref":"textual.css.styles.Styles.border_top",
"url":29,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.Styles.border_right",
"url":29,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.Styles.border_bottom",
"url":29,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.Styles.border_left",
"url":29,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.Styles.outline",
"url":29,
"doc":"Descriptor for getting and setting full borders and outlines. Args: layout (bool): True if the layout should be refreshed after setting, False otherwise."
},
{
"ref":"textual.css.styles.Styles.outline_top",
"url":29,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.Styles.outline_right",
"url":29,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.Styles.outline_bottom",
"url":29,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.Styles.outline_left",
"url":29,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.Styles.box_sizing",
"url":29,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.Styles.width",
"url":29,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.Styles.height",
"url":29,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.Styles.min_width",
"url":29,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.Styles.min_height",
"url":29,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.Styles.max_width",
"url":29,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.Styles.max_height",
"url":29,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.Styles.dock",
"url":29,
"doc":"Descriptor for getting and setting the dock property. The dock property allows you to specify which dock you wish a Widget to be attached to. This should be used in conjunction with the \"docks\" property which lets you define the docks themselves, and where they are located on screen."
},
{
"ref":"textual.css.styles.Styles.docks",
"url":29,
"doc":"Descriptor for getting and setting the docks property. This property is used to define docks and their location on screen."
},
{
"ref":"textual.css.styles.Styles.overflow_x",
"url":29,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.Styles.overflow_y",
"url":29,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.Styles.layer",
"url":29,
"doc":"Descriptor for getting and setting name properties."
},
{
"ref":"textual.css.styles.Styles.transitions",
"url":29,
"doc":"Descriptor for getting transitions properties"
},
{
"ref":"textual.css.styles.Styles.rich_style",
"url":29,
"doc":"Descriptor for getting the Rich style."
},
{
"ref":"textual.css.styles.Styles.tint",
"url":29,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.Styles.scrollbar_color",
"url":29,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.Styles.scrollbar_color_hover",
"url":29,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.Styles.scrollbar_color_active",
"url":29,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.Styles.scrollbar_background",
"url":29,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.Styles.scrollbar_background_hover",
"url":29,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.Styles.scrollbar_background_active",
"url":29,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.Styles.align_horizontal",
"url":29,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.Styles.align_vertical",
"url":29,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.Styles.content_align_horizontal",
"url":29,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.Styles.content_align_vertical",
"url":29,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.Styles.gutter",
"url":29,
"doc":"Get space around widget. Returns: Spacing: Space around widget."
},
{
"ref":"textual.css.styles.Styles.content_gutter",
"url":29,
"doc":"The spacing that surrounds the content area of the widget."
},
{
"ref":"textual.css.styles.Styles.get_render_rules",
"url":29,
"doc":"Get rules map with defaults.",
"func":1
},
{
"ref":"textual.css.styles.Styles.is_animatable",
"url":29,
"doc":"Check if a given rule may be animated. Args: rule (str): Name of the rule. Returns: bool:  True if the rule may be animated, otherwise  False .",
"func":1
},
{
"ref":"textual.css.styles.Styles.parse",
"url":29,
"doc":"Parse CSS and return a Styles object. Args: css (str): Textual CSS. path (str): Path or string indicating source of CSS. node (DOMNode, optional): Node to associate with the Styles. Defaults to None. Returns: Styles: A Styles instance containing result of parsing CSS.",
"func":1
},
{
"ref":"textual.css.styles.Styles.align_width",
"url":29,
"doc":"Align the width dimension. Args: width (int): Width of the content. parent_width (int): Width of the parent container. Returns: int: An offset to add to the X coordinate.",
"func":1
},
{
"ref":"textual.css.styles.Styles.align_height",
"url":29,
"doc":"Align the height dimensions Args: height (int): Height of the content. parent_height (int): Height of the parent container. Returns: int: An offset to add to the Y coordinate.",
"func":1
},
{
"ref":"textual.css.styles.RenderStyles",
"url":29,
"doc":"Presents a combined view of two Styles object: a base Styles and inline Styles."
},
{
"ref":"textual.css.styles.RenderStyles.base",
"url":29,
"doc":"Quick access to base (css) style."
},
{
"ref":"textual.css.styles.RenderStyles.inline",
"url":29,
"doc":"Quick access to the inline styles."
},
{
"ref":"textual.css.styles.RenderStyles.refresh",
"url":29,
"doc":"Mark the styles as requiring a refresh. Args: layout (bool, optional): Also require a layout. Defaults to False.",
"func":1
},
{
"ref":"textual.css.styles.RenderStyles.merge",
"url":29,
"doc":"Merge values from another Styles. Args: other (Styles): A Styles object.",
"func":1
},
{
"ref":"textual.css.styles.RenderStyles.merge_rules",
"url":29,
"doc":"Merge rules in to Styles. Args: rules (RulesMap): A mapping of rules.",
"func":1
},
{
"ref":"textual.css.styles.RenderStyles.reset",
"url":29,
"doc":"Reset the rules to initial state.",
"func":1
},
{
"ref":"textual.css.styles.RenderStyles.has_rule",
"url":29,
"doc":"Check if a rule has been set.",
"func":1
},
{
"ref":"textual.css.styles.RenderStyles.set_rule",
"url":29,
"doc":"Set a rule. Args: rule (str): Rule name. value (object | None): New rule value. Returns: bool:  True if the rule changed, otherwise  False .",
"func":1
},
{
"ref":"textual.css.styles.RenderStyles.get_rule",
"url":29,
"doc":"Get an individual rule. Args: rule (str): Name of rule. default (object, optional): Default if rule does not exists. Defaults to None. Returns: object: Rule value or default.",
"func":1
},
{
"ref":"textual.css.styles.RenderStyles.clear_rule",
"url":29,
"doc":"Clear a rule (from inline).",
"func":1
},
{
"ref":"textual.css.styles.RenderStyles.get_rules",
"url":29,
"doc":"Get rules as a dictionary",
"func":1
},
{
"ref":"textual.css.styles.RenderStyles.css",
"url":29,
"doc":"Get the CSS for the combined styles."
},
{
"ref":"textual.css.styles.RenderStyles.display",
"url":29,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.RenderStyles.visibility",
"url":29,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.RenderStyles.layout",
"url":29,
"doc":"Descriptor for getting and setting layout."
},
{
"ref":"textual.css.styles.RenderStyles.color",
"url":29,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.RenderStyles.background",
"url":29,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.RenderStyles.text_style",
"url":29,
"doc":"Descriptor for getting and set style flag properties (e.g.  bold italic underline )."
},
{
"ref":"textual.css.styles.RenderStyles.opacity",
"url":29,
"doc":"Property that can be set either as a float (e.g. 0.1) or a string percentage (e.g. '10%'). Values will be clamped to the range (0, 1)."
},
{
"ref":"textual.css.styles.RenderStyles.padding",
"url":29,
"doc":"Descriptor for getting and setting spacing properties (e.g. padding and margin)."
},
{
"ref":"textual.css.styles.RenderStyles.margin",
"url":29,
"doc":"Descriptor for getting and setting spacing properties (e.g. padding and margin)."
},
{
"ref":"textual.css.styles.RenderStyles.offset",
"url":29,
"doc":"Descriptor for getting and setting the offset property. Offset consists of two values, x and y, that a widget's position will be adjusted by before it is rendered."
},
{
"ref":"textual.css.styles.RenderStyles.border",
"url":29,
"doc":"Descriptor for getting and setting full borders and outlines. Args: layout (bool): True if the layout should be refreshed after setting, False otherwise."
},
{
"ref":"textual.css.styles.RenderStyles.border_top",
"url":29,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.RenderStyles.border_right",
"url":29,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.RenderStyles.border_bottom",
"url":29,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.RenderStyles.border_left",
"url":29,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.RenderStyles.outline",
"url":29,
"doc":"Descriptor for getting and setting full borders and outlines. Args: layout (bool): True if the layout should be refreshed after setting, False otherwise."
},
{
"ref":"textual.css.styles.RenderStyles.outline_top",
"url":29,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.RenderStyles.outline_right",
"url":29,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.RenderStyles.outline_bottom",
"url":29,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.RenderStyles.outline_left",
"url":29,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.RenderStyles.box_sizing",
"url":29,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.RenderStyles.width",
"url":29,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.RenderStyles.height",
"url":29,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.RenderStyles.min_width",
"url":29,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.RenderStyles.min_height",
"url":29,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.RenderStyles.max_width",
"url":29,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.RenderStyles.max_height",
"url":29,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.RenderStyles.dock",
"url":29,
"doc":"Descriptor for getting and setting the dock property. The dock property allows you to specify which dock you wish a Widget to be attached to. This should be used in conjunction with the \"docks\" property which lets you define the docks themselves, and where they are located on screen."
},
{
"ref":"textual.css.styles.RenderStyles.docks",
"url":29,
"doc":"Descriptor for getting and setting the docks property. This property is used to define docks and their location on screen."
},
{
"ref":"textual.css.styles.RenderStyles.overflow_x",
"url":29,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.RenderStyles.overflow_y",
"url":29,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.RenderStyles.layer",
"url":29,
"doc":"Descriptor for getting and setting name properties."
},
{
"ref":"textual.css.styles.RenderStyles.transitions",
"url":29,
"doc":"Descriptor for getting transitions properties"
},
{
"ref":"textual.css.styles.RenderStyles.rich_style",
"url":29,
"doc":"Descriptor for getting the Rich style."
},
{
"ref":"textual.css.styles.RenderStyles.tint",
"url":29,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.RenderStyles.scrollbar_color",
"url":29,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.RenderStyles.scrollbar_color_hover",
"url":29,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.RenderStyles.scrollbar_color_active",
"url":29,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.RenderStyles.scrollbar_background",
"url":29,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.RenderStyles.scrollbar_background_hover",
"url":29,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.RenderStyles.scrollbar_background_active",
"url":29,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.RenderStyles.align_horizontal",
"url":29,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.RenderStyles.align_vertical",
"url":29,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.RenderStyles.content_align_horizontal",
"url":29,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.RenderStyles.content_align_vertical",
"url":29,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.RenderStyles.gutter",
"url":29,
"doc":"Get space around widget. Returns: Spacing: Space around widget."
},
{
"ref":"textual.css.styles.RenderStyles.content_gutter",
"url":29,
"doc":"The spacing that surrounds the content area of the widget."
},
{
"ref":"textual.css.styles.RenderStyles.get_render_rules",
"url":29,
"doc":"Get rules map with defaults.",
"func":1
},
{
"ref":"textual.css.styles.RenderStyles.is_animatable",
"url":29,
"doc":"Check if a given rule may be animated. Args: rule (str): Name of the rule. Returns: bool:  True if the rule may be animated, otherwise  False .",
"func":1
},
{
"ref":"textual.css.styles.RenderStyles.parse",
"url":29,
"doc":"Parse CSS and return a Styles object. Args: css (str): Textual CSS. path (str): Path or string indicating source of CSS. node (DOMNode, optional): Node to associate with the Styles. Defaults to None. Returns: Styles: A Styles instance containing result of parsing CSS.",
"func":1
},
{
"ref":"textual.css.styles.RenderStyles.align_width",
"url":29,
"doc":"Align the width dimension. Args: width (int): Width of the content. parent_width (int): Width of the parent container. Returns: int: An offset to add to the X coordinate.",
"func":1
},
{
"ref":"textual.css.styles.RenderStyles.align_height",
"url":29,
"doc":"Align the height dimensions Args: height (int): Height of the content. parent_height (int): Height of the parent container. Returns: int: An offset to add to the Y coordinate.",
"func":1
},
{
"ref":"textual.css.transition",
"url":30,
"doc":""
},
{
"ref":"textual.css.transition.Transition",
"url":30,
"doc":"Transition(duration, easing, delay)"
},
{
"ref":"textual.css.transition.Transition.duration",
"url":30,
"doc":"Alias for field number 0"
},
{
"ref":"textual.css.transition.Transition.easing",
"url":30,
"doc":"Alias for field number 1"
},
{
"ref":"textual.css.transition.Transition.delay",
"url":30,
"doc":"Alias for field number 2"
},
{
"ref":"textual.css.types",
"url":31,
"doc":""
},
{
"ref":"textual.css.tokenize",
"url":32,
"doc":""
},
{
"ref":"textual.css.tokenize.TokenizerState",
"url":32,
"doc":"State machine for the tokenizer. Attributes: EXPECT: The initial expectation of the tokenizer. Since we start tokenizing at the root scope, we might expect to see either a variable or selector, for example. STATE_MAP: Maps token names to Expects, defines the sets of valid tokens that we'd expect to see next, given the current token. For example, if we've just processed a variable declaration name, we next expect to see the value of that variable."
},
{
"ref":"textual.css.tokenize.TokenizerState.EXPECT",
"url":32,
"doc":""
},
{
"ref":"textual.css.tokenize.TokenizerState.STATE_MAP",
"url":32,
"doc":""
},
{
"ref":"textual.css.tokenize.DeclarationTokenizerState",
"url":32,
"doc":"State machine for the tokenizer. Attributes: EXPECT: The initial expectation of the tokenizer. Since we start tokenizing at the root scope, we might expect to see either a variable or selector, for example. STATE_MAP: Maps token names to Expects, defines the sets of valid tokens that we'd expect to see next, given the current token. For example, if we've just processed a variable declaration name, we next expect to see the value of that variable."
},
{
"ref":"textual.css.tokenize.DeclarationTokenizerState.EXPECT",
"url":32,
"doc":""
},
{
"ref":"textual.css.tokenize.DeclarationTokenizerState.STATE_MAP",
"url":32,
"doc":""
},
{
"ref":"textual.css.tokenize.ValueTokenizerState",
"url":32,
"doc":"State machine for the tokenizer. Attributes: EXPECT: The initial expectation of the tokenizer. Since we start tokenizing at the root scope, we might expect to see either a variable or selector, for example. STATE_MAP: Maps token names to Expects, defines the sets of valid tokens that we'd expect to see next, given the current token. For example, if we've just processed a variable declaration name, we next expect to see the value of that variable."
},
{
"ref":"textual.css.tokenize.ValueTokenizerState.EXPECT",
"url":32,
"doc":""
},
{
"ref":"textual.css.tokenize.tokenize_values",
"url":32,
"doc":"Tokens the values in a dict of strings. Args: values (dict[str, str]): A mapping of CSS variable name on to a value, to be added to the CSS context. Returns: dict[str, list[Token : A mapping of name on to a list of tokens,",
"func":1
},
{
"ref":"textual.cli",
"url":33,
"doc":""
},
{
"ref":"textual.cli.cli",
"url":34,
"doc":""
},
{
"ref":"textual.design",
"url":35,
"doc":""
},
{
"ref":"textual.design.ColorProperty",
"url":35,
"doc":"Descriptor to parse colors."
},
{
"ref":"textual.design.ColorSystem",
"url":35,
"doc":"Defines a standard set of colors and variations for building a UI. Primary is the main theme color Secondary is a second theme color"
},
{
"ref":"textual.design.ColorSystem.COLOR_NAMES",
"url":35,
"doc":""
},
{
"ref":"textual.design.ColorSystem.primary",
"url":35,
"doc":"Get the primary color."
},
{
"ref":"textual.design.ColorSystem.secondary",
"url":35,
"doc":"Descriptor to parse colors."
},
{
"ref":"textual.design.ColorSystem.warning",
"url":35,
"doc":"Descriptor to parse colors."
},
{
"ref":"textual.design.ColorSystem.error",
"url":35,
"doc":"Descriptor to parse colors."
},
{
"ref":"textual.design.ColorSystem.success",
"url":35,
"doc":"Descriptor to parse colors."
},
{
"ref":"textual.design.ColorSystem.accent",
"url":35,
"doc":"Descriptor to parse colors."
},
{
"ref":"textual.design.ColorSystem.system",
"url":35,
"doc":"Descriptor to parse colors."
},
{
"ref":"textual.design.ColorSystem.surface",
"url":35,
"doc":"Descriptor to parse colors."
},
{
"ref":"textual.design.ColorSystem.background",
"url":35,
"doc":"Descriptor to parse colors."
},
{
"ref":"textual.design.ColorSystem.dark_surface",
"url":35,
"doc":"Descriptor to parse colors."
},
{
"ref":"textual.design.ColorSystem.dark_background",
"url":35,
"doc":"Descriptor to parse colors."
},
{
"ref":"textual.design.ColorSystem.panel",
"url":35,
"doc":"Descriptor to parse colors."
},
{
"ref":"textual.design.ColorSystem.shades",
"url":35,
"doc":"The names of the colors and derived shades."
},
{
"ref":"textual.design.ColorSystem.generate",
"url":35,
"doc":"Generate a mapping of color name on to a CSS color. Args: dark (bool, optional): Enable dark mode. Defaults to False. luminosity_spread (float, optional): Amount of luminosity to subtract and add to generate shades. Defaults to 0.2. text_alpha (float, optional): Alpha value for text. Defaults to 0.9. Returns: dict[str, str]: A mapping of color name on to a CSS-style encoded color",
"func":1
},
{
"ref":"textual.app",
"url":36,
"doc":""
},
{
"ref":"textual.app.AppError",
"url":36,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"textual.app.ActionError",
"url":36,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"textual.app.App",
"url":36,
"doc":"The base class for Textual Applications Textual application base class Args: driver_class (Type[Driver] | None, optional): Driver class or  None to auto-detect. Defaults to None. log_path (str | PurePath, optional): Path to log file, or  to disable. Defaults to  . log_verbosity (int, optional): Log verbosity from 0-3. Defaults to 1. title (str, optional): Default title of the application. Defaults to \"Textual Application\". css_path (str | PurePath | None, optional): Path to CSS or  None for no CSS file. Defaults to None. watch_css (bool, optional): Watch CSS for changes. Defaults to False."
},
{
"ref":"textual.app.App.CSS",
"url":36,
"doc":""
},
{
"ref":"textual.app.App.title",
"url":36,
"doc":"Reactive descriptor."
},
{
"ref":"textual.app.App.sub_title",
"url":36,
"doc":"Reactive descriptor."
},
{
"ref":"textual.app.App.background",
"url":36,
"doc":"Reactive descriptor."
},
{
"ref":"textual.app.App.dark",
"url":36,
"doc":"Reactive descriptor."
},
{
"ref":"textual.app.App.devtools_enabled",
"url":36,
"doc":"Check if devtools are enabled."
},
{
"ref":"textual.app.App.debug",
"url":36,
"doc":"Check if debug mode is enabled."
},
{
"ref":"textual.app.App.exit",
"url":36,
"doc":"Exit the app, and return the supplied result. Args: result (ReturnType | None, optional): Return value. Defaults to None.",
"func":1
},
{
"ref":"textual.app.App.focus_chain",
"url":36,
"doc":"Get widgets that may receive focus, in focus order."
},
{
"ref":"textual.app.App.show_focus",
"url":36,
"doc":"Highlight the currently focused widget. Returns: Widget | None: Focused widget, or None for no focus.",
"func":1
},
{
"ref":"textual.app.App.focus_next",
"url":36,
"doc":"Focus the next widget. Returns: Widget | None: Newly focused widget, or None for no focus.",
"func":1
},
{
"ref":"textual.app.App.focus_previous",
"url":36,
"doc":"Focus the previous widget. Returns: Widget | None: Newly focused widget, or None for no focus.",
"func":1
},
{
"ref":"textual.app.App.hide_focus",
"url":36,
"doc":"Hide the focus. Returns: Widget | None: Newly focused widget, or None for no focus.",
"func":1
},
{
"ref":"textual.app.App.compose",
"url":36,
"doc":"Yield child widgets for a container.",
"func":1
},
{
"ref":"textual.app.App.get_css_variables",
"url":36,
"doc":"Get a mapping of variables used to pre-populate CSS. Returns: dict[str, str]: A mapping of variable name to value.",
"func":1
},
{
"ref":"textual.app.App.watch_dark",
"url":36,
"doc":"Watches the dark bool.",
"func":1
},
{
"ref":"textual.app.App.get_driver_class",
"url":36,
"doc":"Get a driver class for this platform. Called by the constructor. Returns: Driver: A Driver class which manages input and display.",
"func":1
},
{
"ref":"textual.app.App.animator",
"url":36,
"doc":""
},
{
"ref":"textual.app.App.screen",
"url":36,
"doc":"Get the screen that this node is contained within. Note that this may not be the currently active screen within the app."
},
{
"ref":"textual.app.App.css_type",
"url":36,
"doc":"Gets the CSS type, used by the CSS. Returns: str: A type used in CSS (lower cased class name)."
},
{
"ref":"textual.app.App.size",
"url":36,
"doc":""
},
{
"ref":"textual.app.App.log",
"url":36,
"doc":"Write to logs. Args:  objects (Any): Positional arguments are converted to string and written to logs. verbosity (int, optional): Verbosity level 0-3. Defaults to 1. _textual_calling_frame (inspect.FrameInfo | None): The frame info to include in the log message sent to the devtools server.",
"func":1
},
{
"ref":"textual.app.App.bind",
"url":36,
"doc":"Bind a key to an action. Args: keys (str): A comma separated list of keys, i.e. action (str): Action to bind to. description (str, optional): Short description of action. Defaults to  . show (bool, optional): Show key in UI. Defaults to True. key_display (str, optional): Replacement text for key, or None to use default. Defaults to None.",
"func":1
},
{
"ref":"textual.app.App.run",
"url":36,
"doc":"The entry point to run a Textual app.",
"func":1
},
{
"ref":"textual.app.App.render",
"url":36,
"doc":"",
"func":1
},
{
"ref":"textual.app.App.query",
"url":36,
"doc":"Get a DOM query in the current screen. Args: selector (str, optional): A CSS selector or  None for all nodes. Defaults to None. Returns: DOMQuery: A query object.",
"func":1
},
{
"ref":"textual.app.App.get_child",
"url":36,
"doc":"Shorthand for self.screen.get_child(id: str) Returns the first child (immediate descendent) of this DOMNode with the given ID. Args: id (str): The ID of the node to search for. Returns: DOMNode: The first child of this node with the specified ID. Raises: NoMatchingNodesError: if no children could be found for this ID",
"func":1
},
{
"ref":"textual.app.App.update_styles",
"url":36,
"doc":"Request update of styles. Should be called whenever CSS classes / pseudo classes change.",
"func":1
},
{
"ref":"textual.app.App.mount",
"url":36,
"doc":"",
"func":1
},
{
"ref":"textual.app.App.push_screen",
"url":36,
"doc":"Push a new screen on the screen stack. Args: screen (Screen | None, optional): A new Screen instance or None to create one internally. Defaults to None. Returns: Screen: Newly active screen.",
"func":1
},
{
"ref":"textual.app.App.set_focus",
"url":36,
"doc":"Focus (or unfocus) a widget. A focused widget will receive key events first. Args: widget (Widget): [description]",
"func":1
},
{
"ref":"textual.app.App.capture_mouse",
"url":36,
"doc":"Send all mouse events to the given widget, disable mouse capture. Args: widget (Widget | None): If a widget, capture mouse event, or None to end mouse capture.",
"func":1
},
{
"ref":"textual.app.App.panic",
"url":36,
"doc":"Exits the app then displays a message. Args:  renderables (RenderableType, optional): Rich renderables to display on exit.",
"func":1
},
{
"ref":"textual.app.App.on_exception",
"url":36,
"doc":"Called with an unhandled exception. Args: error (Exception): An exception instance.",
"func":1
},
{
"ref":"textual.app.App.fatal_error",
"url":36,
"doc":"Exits the app after an unhandled exception.",
"func":1
},
{
"ref":"textual.app.App.process_messages",
"url":36,
"doc":"",
"func":1
},
{
"ref":"textual.app.App.on_mount",
"url":36,
"doc":"",
"func":1
},
{
"ref":"textual.app.App.on_idle",
"url":36,
"doc":"Perform actions when there are no messages in the queue.",
"func":1
},
{
"ref":"textual.app.App.register",
"url":36,
"doc":"Mount widget(s) so they may receive events. Args: parent (Widget): Parent Widget",
"func":1
},
{
"ref":"textual.app.App.start_widget",
"url":36,
"doc":"Start a widget (run it's task) so that it can receive messages. Args: parent (Widget): The parent of the Widget. widget (Widget): The Widget to start.",
"func":1
},
{
"ref":"textual.app.App.is_mounted",
"url":36,
"doc":"",
"func":1
},
{
"ref":"textual.app.App.close_all",
"url":36,
"doc":"",
"func":1
},
{
"ref":"textual.app.App.remove",
"url":36,
"doc":"",
"func":1
},
{
"ref":"textual.app.App.shutdown",
"url":36,
"doc":"",
"func":1
},
{
"ref":"textual.app.App.refresh",
"url":36,
"doc":"",
"func":1
},
{
"ref":"textual.app.App.refresh_css",
"url":36,
"doc":"Refresh CSS. Args: animate (bool, optional): Also execute CSS animations. Defaults to True.",
"func":1
},
{
"ref":"textual.app.App.display",
"url":36,
"doc":"Returns:  True if this DOMNode is displayed ( display != \"none\" ),  False otherwise.",
"func":1
},
{
"ref":"textual.app.App.measure",
"url":36,
"doc":"Get the optimal width for a widget or renderable. Args: renderable (RenderableType): A renderable (including Widget) max_width ([type], optional): Maximum width. Defaults to 100_000. Returns: int: Number of cells required to render.",
"func":1
},
{
"ref":"textual.app.App.get_widget_at",
"url":36,
"doc":"Get the widget under the given coordinates. Args: x (int): X Coord. y (int): Y Coord. Returns: tuple[Widget, Region]: The widget and the widget's screen region.",
"func":1
},
{
"ref":"textual.app.App.bell",
"url":36,
"doc":"Play the console 'bell'.",
"func":1
},
{
"ref":"textual.app.App.press",
"url":36,
"doc":"Handle a key press. Args: key (str): A key Returns: bool: True if the key was handled by a binding, otherwise False",
"func":1
},
{
"ref":"textual.app.App.on_event",
"url":36,
"doc":"",
"func":1
},
{
"ref":"textual.app.App.action",
"url":36,
"doc":"Perform an action. Args: action (str): Action encoded in a string.",
"func":1
},
{
"ref":"textual.app.App.dispatch_action",
"url":36,
"doc":"",
"func":1
},
{
"ref":"textual.app.App.broker_event",
"url":36,
"doc":"Allow the app an opportunity to dispatch events to action system. Args: event_name (str): _description_ event (events.Event): An event object. default_namespace (object | None): TODO: _description_ Returns: bool: True if an action was processed.",
"func":1
},
{
"ref":"textual.app.App.handle_update",
"url":36,
"doc":"",
"func":1
},
{
"ref":"textual.app.App.handle_layout",
"url":36,
"doc":"",
"func":1
},
{
"ref":"textual.app.App.on_key",
"url":36,
"doc":"",
"func":1
},
{
"ref":"textual.app.App.on_shutdown_request",
"url":36,
"doc":"",
"func":1
},
{
"ref":"textual.app.App.on_resize",
"url":36,
"doc":"",
"func":1
},
{
"ref":"textual.app.App.action_press",
"url":36,
"doc":"",
"func":1
},
{
"ref":"textual.app.App.action_quit",
"url":36,
"doc":"",
"func":1
},
{
"ref":"textual.app.App.action_bang",
"url":36,
"doc":"",
"func":1
},
{
"ref":"textual.app.App.action_bell",
"url":36,
"doc":"",
"func":1
},
{
"ref":"textual.app.App.action_add_class_",
"url":36,
"doc":"",
"func":1
},
{
"ref":"textual.app.App.action_remove_class_",
"url":36,
"doc":"",
"func":1
},
{
"ref":"textual.app.App.action_toggle_class",
"url":36,
"doc":"",
"func":1
},
{
"ref":"textual.app.App.handle_styles_updated",
"url":36,
"doc":"",
"func":1
},
{
"ref":"textual.app.App.on_register",
"url":3,
"doc":"Called when the widget is registered Args: app (App): Parent application.",
"func":1
},
{
"ref":"textual.app.App.parent",
"url":3,
"doc":"Get the parent node. Returns: DOMNode: The node which is the direct parent of this node."
},
{
"ref":"textual.app.App.id",
"url":3,
"doc":"The ID of this node, or None if the node has no ID. Returns: (str | None): A Node ID or None."
},
{
"ref":"textual.app.App.css_identifier",
"url":3,
"doc":"A CSS selector that identifies this DOM node."
},
{
"ref":"textual.app.App.css_identifier_styled",
"url":3,
"doc":"A stylized CSS identifier."
},
{
"ref":"textual.app.App.pseudo_classes",
"url":3,
"doc":"Get a set of all pseudo classes"
},
{
"ref":"textual.app.App.css_path_nodes",
"url":3,
"doc":"A list of nodes from the root to this node, forming a \"path\". Returns: list[DOMNode]: List of Nodes, starting with the root and ending with this node."
},
{
"ref":"textual.app.App.tree",
"url":3,
"doc":"Get a Rich tree object which will recursively render the structure of the node tree. Returns: Tree: A Rich object which may be printed."
},
{
"ref":"textual.app.App.rich_text_style",
"url":3,
"doc":"Get the text style object. A widget's style is influenced by its parent. For instance if a widgets background has an alpha, then its parent's background color will show through. Additionally, widgets will inherit their parent's text style (i.e. bold, italic etc). Returns: Style: Rich Style object."
},
{
"ref":"textual.app.App.ancestors",
"url":3,
"doc":"Get a list of Nodes by tracing ancestors all the way back to App."
},
{
"ref":"textual.app.App.displayed_children",
"url":3,
"doc":"The children which don't have display: none set."
},
{
"ref":"textual.app.App.focusable_children",
"url":3,
"doc":"Get the children which may be focused."
},
{
"ref":"textual.app.App.get_pseudo_classes",
"url":3,
"doc":"Get any pseudo classes applicable to this Node, e.g. hover, focus. Returns: Iterable[str]: Iterable of strings, such as a generator.",
"func":1
},
{
"ref":"textual.app.App.add_child",
"url":3,
"doc":"Add a new child node. Args: node (DOMNode): A DOM node.",
"func":1
},
{
"ref":"textual.app.App.add_children",
"url":3,
"doc":"Add multiple children to this node. Args:  nodes (DOMNode): Positional args should be new DOM nodes.  named_nodes (DOMNode): Keyword args will be assigned the argument name as an ID.",
"func":1
},
{
"ref":"textual.app.App.walk_children",
"url":3,
"doc":"Generate all descendents of this node. Args: with_self (bool, optional): Also include self in the results. Defaults to True.",
"func":1
},
{
"ref":"textual.app.App.set_styles",
"url":3,
"doc":"Set custom styles on this object.",
"func":1
},
{
"ref":"textual.app.App.has_class",
"url":3,
"doc":"Check if the Node has all the given class names. Args:  class_names (str): CSS class names to check. Returns: bool:  True if the node has all the given class names, otherwise  False .",
"func":1
},
{
"ref":"textual.app.App.add_class",
"url":3,
"doc":"Add class names to this Node. Args:  class_names (str): CSS class names to add.",
"func":1
},
{
"ref":"textual.app.App.remove_class",
"url":3,
"doc":"Remove class names from this Node. Args:  class_names (str): CSS class names to remove.",
"func":1
},
{
"ref":"textual.app.App.toggle_class",
"url":3,
"doc":"Toggle class names on this Node. Args:  class_names (str): CSS class names to toggle.",
"func":1
},
{
"ref":"textual.app.App.has_pseudo_class",
"url":3,
"doc":"Check for pseudo class (such as hover, focus etc)",
"func":1
},
{
"ref":"textual.app.App.app",
"url":4,
"doc":"Get the current app."
},
{
"ref":"textual.app.App.disable_messages",
"url":4,
"doc":"Disable message types from being processed.",
"func":1
},
{
"ref":"textual.app.App.enable_messages",
"url":4,
"doc":"Enable processing of messages types.",
"func":1
},
{
"ref":"textual.app.App.get_message",
"url":4,
"doc":"Get the next event on the queue, or None if queue is closed. Returns: Optional[Event]: Event object or None.",
"func":1
},
{
"ref":"textual.app.App.peek_message",
"url":4,
"doc":"Peek the message at the head of the queue (does not remove it from the queue), or return None if the queue is empty. Returns: Optional[Message]: The message or None.",
"func":1
},
{
"ref":"textual.app.App.call_later",
"url":4,
"doc":"Run a callback after processing all messages and refreshing the screen. Args: callback (Callable): A callable.",
"func":1
},
{
"ref":"textual.app.App.close_messages_no_wait",
"url":4,
"doc":"Request the message queue to exit.",
"func":1
},
{
"ref":"textual.app.App.close_messages",
"url":4,
"doc":"Close message queue, and optionally wait for queue to finish processing.",
"func":1
},
{
"ref":"textual.app.App.check_idle",
"url":4,
"doc":"Prompt the message pump to call idle if the queue is empty.",
"func":1
},
{
"ref":"textual.app.App.post_priority_message",
"url":4,
"doc":"Post a \"priority\" messages which will be processes prior to regular messages. Note that you should rarely need this in a regular app. It exists primarily to allow timer messages to skip the queue, so that they can be more regular. Args: message (Message): A message. Returns: bool: True if the messages was processed.",
"func":1
},
{
"ref":"textual.app.App.dispatch_key",
"url":4,
"doc":"Dispatch a key event to method. This method will call the method named 'key_ ' if it exists. Args: event (events.Key): A key event.",
"func":1
},
{
"ref":"textual.binding",
"url":37,
"doc":""
},
{
"ref":"textual.binding.NoBinding",
"url":37,
"doc":"A binding was not found."
},
{
"ref":"textual.binding.Binding",
"url":37,
"doc":"Binding(key: 'str', action: 'str', description: 'str', show: 'bool' = False, key_display: 'str | None' = None, allow_forward: 'bool' = True)"
},
{
"ref":"textual.binding.Binding.key",
"url":37,
"doc":""
},
{
"ref":"textual.binding.Binding.action",
"url":37,
"doc":""
},
{
"ref":"textual.binding.Binding.description",
"url":37,
"doc":""
},
{
"ref":"textual.binding.Binding.show",
"url":37,
"doc":""
},
{
"ref":"textual.binding.Binding.key_display",
"url":37,
"doc":""
},
{
"ref":"textual.binding.Binding.allow_forward",
"url":37,
"doc":""
},
{
"ref":"textual.binding.Bindings",
"url":37,
"doc":"Manage a set of bindings."
},
{
"ref":"textual.binding.Bindings.shown_keys",
"url":37,
"doc":""
},
{
"ref":"textual.binding.Bindings.bind",
"url":37,
"doc":"",
"func":1
},
{
"ref":"textual.binding.Bindings.get_key",
"url":37,
"doc":"",
"func":1
},
{
"ref":"textual.binding.Bindings.allow_forward",
"url":37,
"doc":"",
"func":1
},
{
"ref":"textual.binding.BindingStack",
"url":37,
"doc":"Manage a stack of bindings."
},
{
"ref":"textual.binding.BindingStack.push",
"url":37,
"doc":"",
"func":1
},
{
"ref":"textual.binding.BindingStack.pop",
"url":37,
"doc":"",
"func":1
},
{
"ref":"textual.binding.BindingStack.get_key",
"url":37,
"doc":"",
"func":1
},
{
"ref":"textual.suggestions",
"url":38,
"doc":""
},
{
"ref":"textual.suggestions.get_suggestion",
"url":38,
"doc":"Returns a close match of  word amongst  possible_words . Args: word (str): The word we want to find a close match for possible_words (Sequence[str]): The words amongst which we want to find a close match Returns: str | None: The closest match amongst the  possible_words . Returns  None if no close matches could be found. Example: returns \"red\" for word \"redu\" and possible words (\"yellow\", \"red\")",
"func":1
},
{
"ref":"textual.suggestions.get_suggestions",
"url":38,
"doc":"Returns a list of up to  count matches of  word amongst  possible_words . Args: word (str): The word we want to find a close match for possible_words (Sequence[str]): The words amongst which we want to find close matches Returns: list[str]: The closest matches amongst the  possible_words , from the closest to the least close. Returns an empty list if no close matches could be found. Example: returns [\"yellow\", \"ellow\"] for word \"yllow\" and possible words (\"yellow\", \"red\", \"ellow\")",
"func":1
},
{
"ref":"textual.file_monitor",
"url":39,
"doc":""
},
{
"ref":"textual.file_monitor.FileMonitor",
"url":39,
"doc":""
},
{
"ref":"textual.file_monitor.FileMonitor.check",
"url":39,
"doc":"",
"func":1
},
{
"ref":"textual.file_monitor.FileMonitor.on_change",
"url":39,
"doc":"Called when file changes.",
"func":1
},
{
"ref":"textual.box_model",
"url":40,
"doc":""
},
{
"ref":"textual.box_model.BoxModel",
"url":40,
"doc":"The result of  get_box_model ."
},
{
"ref":"textual.box_model.BoxModel.size",
"url":40,
"doc":"Alias for field number 0"
},
{
"ref":"textual.box_model.BoxModel.margin",
"url":40,
"doc":"Alias for field number 1"
},
{
"ref":"textual.box_model.get_box_model",
"url":40,
"doc":"Resolve the box model for this Styles. Args: styles (StylesBase): Styles object. container (Size): The size of the widget container. viewport (Size): The viewport size. get_auto_width (Callable): A callable which accepts container size and parent size and returns a width. get_auto_height (Callable): A callable which accepts container size and parent size and returns a height. Returns: BoxModel: A tuple with the size of the content area and margin.",
"func":1
},
{
"ref":"textual.blank",
"url":41,
"doc":""
},
{
"ref":"textual.blank.Blank",
"url":41,
"doc":"Render an empty rectangle. Args: style (StyleType): Style to apply to the box. width (int, optional): Width of the box in number of cells. Will expand to fit parent if  None . height (int, optional): Height of the box in number of cells. Will expand to fit parent if  None ."
},
{
"ref":"textual.messages",
"url":42,
"doc":""
},
{
"ref":"textual.messages.Update",
"url":42,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.messages.Update.sender",
"url":42,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.Update.can_replace",
"url":42,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.messages.Update.bubble",
"url":42,
"doc":""
},
{
"ref":"textual.messages.Update.verbosity",
"url":42,
"doc":""
},
{
"ref":"textual.messages.Update.system",
"url":42,
"doc":""
},
{
"ref":"textual.messages.Update.set_forwarded",
"url":6,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.messages.Update.prevent_default",
"url":6,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.messages.Update.stop",
"url":6,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.messages.Update.name",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.Update.time",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.Layout",
"url":42,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.messages.Layout.sender",
"url":42,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.Layout.can_replace",
"url":42,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.messages.Layout.bubble",
"url":42,
"doc":""
},
{
"ref":"textual.messages.Layout.verbosity",
"url":42,
"doc":""
},
{
"ref":"textual.messages.Layout.system",
"url":42,
"doc":""
},
{
"ref":"textual.messages.Layout.set_forwarded",
"url":6,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.messages.Layout.prevent_default",
"url":6,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.messages.Layout.stop",
"url":6,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.messages.Layout.name",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.Layout.time",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.CursorMove",
"url":42,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.messages.CursorMove.sender",
"url":42,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.CursorMove.bubble",
"url":42,
"doc":""
},
{
"ref":"textual.messages.CursorMove.verbosity",
"url":42,
"doc":""
},
{
"ref":"textual.messages.CursorMove.system",
"url":42,
"doc":""
},
{
"ref":"textual.messages.CursorMove.set_forwarded",
"url":6,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.messages.CursorMove.can_replace",
"url":6,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.messages.CursorMove.prevent_default",
"url":6,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.messages.CursorMove.stop",
"url":6,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.messages.CursorMove.name",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.CursorMove.time",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.StylesUpdated",
"url":42,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.messages.StylesUpdated.sender",
"url":42,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.StylesUpdated.can_replace",
"url":42,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.messages.StylesUpdated.bubble",
"url":42,
"doc":""
},
{
"ref":"textual.messages.StylesUpdated.verbosity",
"url":42,
"doc":""
},
{
"ref":"textual.messages.StylesUpdated.system",
"url":42,
"doc":""
},
{
"ref":"textual.messages.StylesUpdated.set_forwarded",
"url":6,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.messages.StylesUpdated.prevent_default",
"url":6,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.messages.StylesUpdated.stop",
"url":6,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.messages.StylesUpdated.name",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.StylesUpdated.time",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.Prompt",
"url":42,
"doc":"Used to 'wake up' an event loop. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.messages.Prompt.sender",
"url":42,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.Prompt.can_replace",
"url":42,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.messages.Prompt.bubble",
"url":42,
"doc":""
},
{
"ref":"textual.messages.Prompt.verbosity",
"url":42,
"doc":""
},
{
"ref":"textual.messages.Prompt.system",
"url":42,
"doc":""
},
{
"ref":"textual.messages.Prompt.set_forwarded",
"url":6,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.messages.Prompt.prevent_default",
"url":6,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.messages.Prompt.stop",
"url":6,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.messages.Prompt.name",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.Prompt.time",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
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
"ref":"textual.screen.Screen.refresh_layout",
"url":43,
"doc":"Refresh the layout (can change size and positions of widgets).",
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
"ref":"textual.screen.Screen.on_mount",
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
"ref":"textual.screen.Screen.auto_width",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.screen.Screen.auto_height",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.screen.Screen.has_focus",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.screen.Screen.descendant_has_focus",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.screen.Screen.mouse_over",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.screen.Screen.scroll_x",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.screen.Screen.scroll_y",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.screen.Screen.scroll_target_x",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.screen.Screen.scroll_target_y",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.screen.Screen.show_vertical_scrollbar",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.screen.Screen.show_horizontal_scrollbar",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.screen.Screen.compose",
"url":2,
"doc":"Yield child widgets for a container.",
"func":1
},
{
"ref":"textual.screen.Screen.on_register",
"url":2,
"doc":"Called when the instance is registered. Args: app (App): App instance.",
"func":1
},
{
"ref":"textual.screen.Screen.get_box_model",
"url":2,
"doc":"Process the box model for this widget. Args: container (Size): The size of the container widget (with a layout) viewport (Size): The viewport size. Returns: BoxModel: The size and margin for this widget.",
"func":1
},
{
"ref":"textual.screen.Screen.get_content_width",
"url":2,
"doc":"Gets the width of the content area. Args: container_size (Size): Size of the container (immediate parent) widget. viewport_size (Size): Size of the viewport. Returns: int: The optimal width of the content.",
"func":1
},
{
"ref":"textual.screen.Screen.get_content_height",
"url":2,
"doc":"Gets the height (number of lines) in the content area. Args: container_size (Size): Size of the container (immediate parent) widget. viewport_size (Size): Size of the viewport. width (int): Width of renderable. Returns: int: The height of the content.",
"func":1
},
{
"ref":"textual.screen.Screen.vertical_scrollbar",
"url":2,
"doc":"Get a vertical scrollbar (create if necessary) Returns: ScrollBar: ScrollBar Widget."
},
{
"ref":"textual.screen.Screen.horizontal_scrollbar",
"url":2,
"doc":"Get a vertical scrollbar (create if necessary) Returns: ScrollBar: ScrollBar Widget."
},
{
"ref":"textual.screen.Screen.scrollbars_enabled",
"url":2,
"doc":"A tuple of booleans that indicate if scrollbars are enabled. Returns: tuple[bool, bool]: A tuple of ( ,  )"
},
{
"ref":"textual.screen.Screen.set_dirty",
"url":2,
"doc":"Set the Widget as 'dirty' (requiring re-render).",
"func":1
},
{
"ref":"textual.screen.Screen.scroll_to",
"url":2,
"doc":"Scroll to a given (absolute) coordinate, optionally animating. Args: x (int | None, optional): X coordinate (column) to scroll to, or  None for no change. Defaults to None. y (int | None, optional): Y coordinate (row) to scroll to, or  None for no change. Defaults to None. animate (bool, optional): Animate to new scroll position. Defaults to False. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.screen.Screen.scroll_relative",
"url":2,
"doc":"Scroll relative to current position. Args: x (int | None, optional): X distance (columns) to scroll, or  None for no change. Defaults to None. y (int | None, optional): Y distance (rows) to scroll, or  None for no change. Defaults to None. animate (bool, optional): Animate to new scroll position. Defaults to False. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.screen.Screen.scroll_to_widget",
"url":2,
"doc":"Scroll so that a child widget is in the visible area. Args: widget (Widget): A Widget in the children. animate (bool, optional): True to animate, or False to jump. Defaults to True. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.screen.Screen.get_pseudo_classes",
"url":2,
"doc":"Pseudo classes for a widget",
"func":1
},
{
"ref":"textual.screen.Screen.render_styled",
"url":2,
"doc":"Applies style attributes to the default renderable. Returns: RenderableType: A new renderable.",
"func":1
},
{
"ref":"textual.screen.Screen.content_region",
"url":2,
"doc":"A region relative to the Widget origin that contains the content."
},
{
"ref":"textual.screen.Screen.content_offset",
"url":2,
"doc":"An offset from the Widget origin where the content begins."
},
{
"ref":"textual.screen.Screen.region",
"url":2,
"doc":"The region occupied by this widget, relative to the Screen."
},
{
"ref":"textual.screen.Screen.is_transparent",
"url":2,
"doc":"Check if the background styles is not set. Returns: bool:  True if there is background color, otherwise  False ."
},
{
"ref":"textual.screen.Screen.console",
"url":2,
"doc":"Get the current console."
},
{
"ref":"textual.screen.Screen.is_container",
"url":2,
"doc":"Check if this widget is a container (contains other widgets) Returns: bool: True if this widget is a container."
},
{
"ref":"textual.screen.Screen.watch_mouse_over",
"url":2,
"doc":"Update from CSS if mouse over state changes.",
"func":1
},
{
"ref":"textual.screen.Screen.watch_has_focus",
"url":2,
"doc":"Update from CSS if has focus state changes.",
"func":1
},
{
"ref":"textual.screen.Screen.get_render_lines",
"url":2,
"doc":"Get segment lines to render the widget. Args: start (int | None, optional): line start index, or None for first line. Defaults to None. end (int | None, optional): line end index, or None for last line. Defaults to None. Returns: Lines: A list of lists of segments.",
"func":1
},
{
"ref":"textual.screen.Screen.check_layout",
"url":2,
"doc":"Check if a layout has been requested.",
"func":1
},
{
"ref":"textual.screen.Screen.call_later",
"url":2,
"doc":"Run a callback after processing all messages and refreshing the screen. Args: callback (Callable): A callable.",
"func":1
},
{
"ref":"textual.screen.Screen.refresh",
"url":2,
"doc":"Initiate a refresh of the widget. This method sets an internal flag to perform a refresh, which will be done on the next idle event. Only one refresh will be done even if this method is called multiple times. Args: repaint (bool, optional): Repaint the widget (will call render() again). Defaults to True. layout (bool, optional): Also layout widgets in the view. Defaults to False.",
"func":1
},
{
"ref":"textual.screen.Screen.focus",
"url":2,
"doc":"Give input focus to this widget.",
"func":1
},
{
"ref":"textual.screen.Screen.capture_mouse",
"url":2,
"doc":"Capture (or release) the mouse. When captured, all mouse coordinates will go to this widget even when the pointer is not directly over the widget. Args: capture (bool, optional): True to capture or False to release. Defaults to True.",
"func":1
},
{
"ref":"textual.screen.Screen.release_mouse",
"url":2,
"doc":"Release the mouse. Mouse events will only be sent when the mouse is over the widget.",
"func":1
},
{
"ref":"textual.screen.Screen.parent",
"url":3,
"doc":"Get the parent node. Returns: DOMNode: The node which is the direct parent of this node."
},
{
"ref":"textual.screen.Screen.screen",
"url":3,
"doc":"Get the screen that this node is contained within. Note that this may not be the currently active screen within the app."
},
{
"ref":"textual.screen.Screen.id",
"url":3,
"doc":"The ID of this node, or None if the node has no ID. Returns: (str | None): A Node ID or None."
},
{
"ref":"textual.screen.Screen.css_identifier",
"url":3,
"doc":"A CSS selector that identifies this DOM node."
},
{
"ref":"textual.screen.Screen.css_identifier_styled",
"url":3,
"doc":"A stylized CSS identifier."
},
{
"ref":"textual.screen.Screen.pseudo_classes",
"url":3,
"doc":"Get a set of all pseudo classes"
},
{
"ref":"textual.screen.Screen.css_type",
"url":3,
"doc":"Gets the CSS type, used by the CSS. Returns: str: A type used in CSS (lower cased class name)."
},
{
"ref":"textual.screen.Screen.css_path_nodes",
"url":3,
"doc":"A list of nodes from the root to this node, forming a \"path\". Returns: list[DOMNode]: List of Nodes, starting with the root and ending with this node."
},
{
"ref":"textual.screen.Screen.display",
"url":3,
"doc":"Returns:  True if this DOMNode is displayed ( display != \"none\" ),  False otherwise."
},
{
"ref":"textual.screen.Screen.tree",
"url":3,
"doc":"Get a Rich tree object which will recursively render the structure of the node tree. Returns: Tree: A Rich object which may be printed."
},
{
"ref":"textual.screen.Screen.rich_text_style",
"url":3,
"doc":"Get the text style object. A widget's style is influenced by its parent. For instance if a widgets background has an alpha, then its parent's background color will show through. Additionally, widgets will inherit their parent's text style (i.e. bold, italic etc). Returns: Style: Rich Style object."
},
{
"ref":"textual.screen.Screen.ancestors",
"url":3,
"doc":"Get a list of Nodes by tracing ancestors all the way back to App."
},
{
"ref":"textual.screen.Screen.displayed_children",
"url":3,
"doc":"The children which don't have display: none set."
},
{
"ref":"textual.screen.Screen.focusable_children",
"url":3,
"doc":"Get the children which may be focused."
},
{
"ref":"textual.screen.Screen.add_child",
"url":3,
"doc":"Add a new child node. Args: node (DOMNode): A DOM node.",
"func":1
},
{
"ref":"textual.screen.Screen.add_children",
"url":3,
"doc":"Add multiple children to this node. Args:  nodes (DOMNode): Positional args should be new DOM nodes.  named_nodes (DOMNode): Keyword args will be assigned the argument name as an ID.",
"func":1
},
{
"ref":"textual.screen.Screen.walk_children",
"url":3,
"doc":"Generate all descendents of this node. Args: with_self (bool, optional): Also include self in the results. Defaults to True.",
"func":1
},
{
"ref":"textual.screen.Screen.get_child",
"url":3,
"doc":"Return the first child (immediate descendent) of this node with the given ID. Args: id (str): The ID of the child. Returns: DOMNode: The first child of this node with the ID. Raises: NoMatchingNodesError: if no children could be found for this ID",
"func":1
},
{
"ref":"textual.screen.Screen.query",
"url":3,
"doc":"Get a DOM query. Args: selector (str, optional): A CSS selector or  None for all nodes. Defaults to None. Returns: DOMQuery: A query object.",
"func":1
},
{
"ref":"textual.screen.Screen.set_styles",
"url":3,
"doc":"Set custom styles on this object.",
"func":1
},
{
"ref":"textual.screen.Screen.has_class",
"url":3,
"doc":"Check if the Node has all the given class names. Args:  class_names (str): CSS class names to check. Returns: bool:  True if the node has all the given class names, otherwise  False .",
"func":1
},
{
"ref":"textual.screen.Screen.add_class",
"url":3,
"doc":"Add class names to this Node. Args:  class_names (str): CSS class names to add.",
"func":1
},
{
"ref":"textual.screen.Screen.remove_class",
"url":3,
"doc":"Remove class names from this Node. Args:  class_names (str): CSS class names to remove.",
"func":1
},
{
"ref":"textual.screen.Screen.toggle_class",
"url":3,
"doc":"Toggle class names on this Node. Args:  class_names (str): CSS class names to toggle.",
"func":1
},
{
"ref":"textual.screen.Screen.has_pseudo_class",
"url":3,
"doc":"Check for pseudo class (such as hover, focus etc)",
"func":1
},
{
"ref":"textual.screen.Screen.app",
"url":4,
"doc":"Get the current app."
},
{
"ref":"textual.screen.Screen.disable_messages",
"url":4,
"doc":"Disable message types from being processed.",
"func":1
},
{
"ref":"textual.screen.Screen.enable_messages",
"url":4,
"doc":"Enable processing of messages types.",
"func":1
},
{
"ref":"textual.screen.Screen.get_message",
"url":4,
"doc":"Get the next event on the queue, or None if queue is closed. Returns: Optional[Event]: Event object or None.",
"func":1
},
{
"ref":"textual.screen.Screen.peek_message",
"url":4,
"doc":"Peek the message at the head of the queue (does not remove it from the queue), or return None if the queue is empty. Returns: Optional[Message]: The message or None.",
"func":1
},
{
"ref":"textual.screen.Screen.close_messages_no_wait",
"url":4,
"doc":"Request the message queue to exit.",
"func":1
},
{
"ref":"textual.screen.Screen.close_messages",
"url":4,
"doc":"Close message queue, and optionally wait for queue to finish processing.",
"func":1
},
{
"ref":"textual.screen.Screen.check_idle",
"url":4,
"doc":"Prompt the message pump to call idle if the queue is empty.",
"func":1
},
{
"ref":"textual.screen.Screen.post_priority_message",
"url":4,
"doc":"Post a \"priority\" messages which will be processes prior to regular messages. Note that you should rarely need this in a regular app. It exists primarily to allow timer messages to skip the queue, so that they can be more regular. Args: message (Message): A message. Returns: bool: True if the messages was processed.",
"func":1
},
{
"ref":"textual.screen.Screen.dispatch_key",
"url":4,
"doc":"Dispatch a key event to method. This method will call the method named 'key_ ' if it exists. Args: event (events.Key): A key event.",
"func":1
},
{
"ref":"textual.errors",
"url":44,
"doc":""
},
{
"ref":"textual.errors.TextualError",
"url":44,
"doc":"Base class for Textual errors."
},
{
"ref":"textual.errors.NoWidget",
"url":44,
"doc":"Specified widget was not found."
},
{
"ref":"textual.scrollbar",
"url":45,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollMessage",
"url":45,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.scrollbar.ScrollMessage.sender",
"url":45,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollMessage.bubble",
"url":45,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollMessage.verbosity",
"url":45,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollMessage.system",
"url":45,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollMessage.set_forwarded",
"url":6,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollMessage.can_replace",
"url":6,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.scrollbar.ScrollMessage.prevent_default",
"url":6,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollMessage.stop",
"url":6,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollMessage.name",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollMessage.time",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollUp",
"url":45,
"doc":"Message sent when clicking above handle. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.scrollbar.ScrollUp.sender",
"url":45,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollUp.bubble",
"url":45,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollUp.verbosity",
"url":45,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollUp.system",
"url":45,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollUp.set_forwarded",
"url":6,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollUp.can_replace",
"url":6,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.scrollbar.ScrollUp.prevent_default",
"url":6,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollUp.stop",
"url":6,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollUp.name",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollUp.time",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollDown",
"url":45,
"doc":"Message sent when clicking below handle. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.scrollbar.ScrollDown.sender",
"url":45,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollDown.bubble",
"url":45,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollDown.verbosity",
"url":45,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollDown.system",
"url":45,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollDown.set_forwarded",
"url":6,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollDown.can_replace",
"url":6,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.scrollbar.ScrollDown.prevent_default",
"url":6,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollDown.stop",
"url":6,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollDown.name",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollDown.time",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollLeft",
"url":45,
"doc":"Message sent when clicking above handle. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.scrollbar.ScrollLeft.sender",
"url":45,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollLeft.bubble",
"url":45,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollLeft.verbosity",
"url":45,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollLeft.system",
"url":45,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollLeft.set_forwarded",
"url":6,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollLeft.can_replace",
"url":6,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.scrollbar.ScrollLeft.prevent_default",
"url":6,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollLeft.stop",
"url":6,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollLeft.name",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollLeft.time",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollRight",
"url":45,
"doc":"Message sent when clicking below handle. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.scrollbar.ScrollRight.sender",
"url":45,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollRight.bubble",
"url":45,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollRight.verbosity",
"url":45,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollRight.system",
"url":45,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollRight.set_forwarded",
"url":6,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollRight.can_replace",
"url":6,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.scrollbar.ScrollRight.prevent_default",
"url":6,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollRight.stop",
"url":6,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollRight.name",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollRight.time",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollTo",
"url":45,
"doc":"Message sent when click and dragging handle. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.scrollbar.ScrollTo.sender",
"url":45,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollTo.bubble",
"url":45,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollTo.verbosity",
"url":45,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollTo.system",
"url":45,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollTo.set_forwarded",
"url":6,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollTo.can_replace",
"url":6,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.scrollbar.ScrollTo.prevent_default",
"url":6,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollTo.stop",
"url":6,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollTo.name",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollTo.time",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollBarRender",
"url":45,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollBarRender.render_bar",
"url":45,
"doc":"",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar",
"url":45,
"doc":"A node in a hierarchy of things forming the UI. Nodes are mountable and may be styled with CSS."
},
{
"ref":"textual.scrollbar.ScrollBar.window_virtual_size",
"url":45,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scrollbar.ScrollBar.window_size",
"url":45,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scrollbar.ScrollBar.position",
"url":45,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scrollbar.ScrollBar.mouse_over",
"url":45,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scrollbar.ScrollBar.grabbed",
"url":45,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scrollbar.ScrollBar.render",
"url":45,
"doc":"Get renderable for widget. Args: style (Styles): The Styles object for this Widget. Returns: RenderableType: Any renderable",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.on_enter",
"url":45,
"doc":"",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.on_leave",
"url":45,
"doc":"",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.action_scroll_down",
"url":45,
"doc":"",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.action_scroll_up",
"url":45,
"doc":"",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.action_grab",
"url":45,
"doc":"",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.action_released",
"url":45,
"doc":"",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.on_mouse_up",
"url":45,
"doc":"",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.on_mouse_capture",
"url":45,
"doc":"",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.on_mouse_release",
"url":45,
"doc":"",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.on_mouse_move",
"url":45,
"doc":"",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.can_focus",
"url":45,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollBar.can_focus_children",
"url":45,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollBar.auto_width",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scrollbar.ScrollBar.auto_height",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scrollbar.ScrollBar.has_focus",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scrollbar.ScrollBar.descendant_has_focus",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scrollbar.ScrollBar.scroll_x",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scrollbar.ScrollBar.scroll_y",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scrollbar.ScrollBar.scroll_target_x",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scrollbar.ScrollBar.scroll_target_y",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scrollbar.ScrollBar.show_vertical_scrollbar",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scrollbar.ScrollBar.show_horizontal_scrollbar",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scrollbar.ScrollBar.compose",
"url":2,
"doc":"Yield child widgets for a container.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.on_register",
"url":2,
"doc":"Called when the instance is registered. Args: app (App): App instance.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.get_box_model",
"url":2,
"doc":"Process the box model for this widget. Args: container (Size): The size of the container widget (with a layout) viewport (Size): The viewport size. Returns: BoxModel: The size and margin for this widget.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.get_content_width",
"url":2,
"doc":"Gets the width of the content area. Args: container_size (Size): Size of the container (immediate parent) widget. viewport_size (Size): Size of the viewport. Returns: int: The optimal width of the content.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.get_content_height",
"url":2,
"doc":"Gets the height (number of lines) in the content area. Args: container_size (Size): Size of the container (immediate parent) widget. viewport_size (Size): Size of the viewport. width (int): Width of renderable. Returns: int: The height of the content.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.vertical_scrollbar",
"url":2,
"doc":"Get a vertical scrollbar (create if necessary) Returns: ScrollBar: ScrollBar Widget."
},
{
"ref":"textual.scrollbar.ScrollBar.horizontal_scrollbar",
"url":2,
"doc":"Get a vertical scrollbar (create if necessary) Returns: ScrollBar: ScrollBar Widget."
},
{
"ref":"textual.scrollbar.ScrollBar.scrollbars_enabled",
"url":2,
"doc":"A tuple of booleans that indicate if scrollbars are enabled. Returns: tuple[bool, bool]: A tuple of ( ,  )"
},
{
"ref":"textual.scrollbar.ScrollBar.set_dirty",
"url":2,
"doc":"Set the Widget as 'dirty' (requiring re-render).",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.scroll_to",
"url":2,
"doc":"Scroll to a given (absolute) coordinate, optionally animating. Args: x (int | None, optional): X coordinate (column) to scroll to, or  None for no change. Defaults to None. y (int | None, optional): Y coordinate (row) to scroll to, or  None for no change. Defaults to None. animate (bool, optional): Animate to new scroll position. Defaults to False. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.scroll_relative",
"url":2,
"doc":"Scroll relative to current position. Args: x (int | None, optional): X distance (columns) to scroll, or  None for no change. Defaults to None. y (int | None, optional): Y distance (rows) to scroll, or  None for no change. Defaults to None. animate (bool, optional): Animate to new scroll position. Defaults to False. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.scroll_to_widget",
"url":2,
"doc":"Scroll so that a child widget is in the visible area. Args: widget (Widget): A Widget in the children. animate (bool, optional): True to animate, or False to jump. Defaults to True. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.get_pseudo_classes",
"url":2,
"doc":"Pseudo classes for a widget",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.render_styled",
"url":2,
"doc":"Applies style attributes to the default renderable. Returns: RenderableType: A new renderable.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.content_region",
"url":2,
"doc":"A region relative to the Widget origin that contains the content."
},
{
"ref":"textual.scrollbar.ScrollBar.content_offset",
"url":2,
"doc":"An offset from the Widget origin where the content begins."
},
{
"ref":"textual.scrollbar.ScrollBar.region",
"url":2,
"doc":"The region occupied by this widget, relative to the Screen."
},
{
"ref":"textual.scrollbar.ScrollBar.is_transparent",
"url":2,
"doc":"Check if the background styles is not set. Returns: bool:  True if there is background color, otherwise  False ."
},
{
"ref":"textual.scrollbar.ScrollBar.console",
"url":2,
"doc":"Get the current console."
},
{
"ref":"textual.scrollbar.ScrollBar.is_container",
"url":2,
"doc":"Check if this widget is a container (contains other widgets) Returns: bool: True if this widget is a container."
},
{
"ref":"textual.scrollbar.ScrollBar.watch_mouse_over",
"url":2,
"doc":"Update from CSS if mouse over state changes.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.watch_has_focus",
"url":2,
"doc":"Update from CSS if has focus state changes.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.get_render_lines",
"url":2,
"doc":"Get segment lines to render the widget. Args: start (int | None, optional): line start index, or None for first line. Defaults to None. end (int | None, optional): line end index, or None for last line. Defaults to None. Returns: Lines: A list of lists of segments.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.check_layout",
"url":2,
"doc":"Check if a layout has been requested.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.call_later",
"url":2,
"doc":"Run a callback after processing all messages and refreshing the screen. Args: callback (Callable): A callable.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.refresh",
"url":2,
"doc":"Initiate a refresh of the widget. This method sets an internal flag to perform a refresh, which will be done on the next idle event. Only one refresh will be done even if this method is called multiple times. Args: repaint (bool, optional): Repaint the widget (will call render() again). Defaults to True. layout (bool, optional): Also layout widgets in the view. Defaults to False.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.on_idle",
"url":2,
"doc":"Called when there are no more events on the queue. Args: event (events.Idle): Idle event.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.focus",
"url":2,
"doc":"Give input focus to this widget.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.capture_mouse",
"url":2,
"doc":"Capture (or release) the mouse. When captured, all mouse coordinates will go to this widget even when the pointer is not directly over the widget. Args: capture (bool, optional): True to capture or False to release. Defaults to True.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.release_mouse",
"url":2,
"doc":"Release the mouse. Mouse events will only be sent when the mouse is over the widget.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.parent",
"url":3,
"doc":"Get the parent node. Returns: DOMNode: The node which is the direct parent of this node."
},
{
"ref":"textual.scrollbar.ScrollBar.screen",
"url":3,
"doc":"Get the screen that this node is contained within. Note that this may not be the currently active screen within the app."
},
{
"ref":"textual.scrollbar.ScrollBar.id",
"url":3,
"doc":"The ID of this node, or None if the node has no ID. Returns: (str | None): A Node ID or None."
},
{
"ref":"textual.scrollbar.ScrollBar.css_identifier",
"url":3,
"doc":"A CSS selector that identifies this DOM node."
},
{
"ref":"textual.scrollbar.ScrollBar.css_identifier_styled",
"url":3,
"doc":"A stylized CSS identifier."
},
{
"ref":"textual.scrollbar.ScrollBar.pseudo_classes",
"url":3,
"doc":"Get a set of all pseudo classes"
},
{
"ref":"textual.scrollbar.ScrollBar.css_type",
"url":3,
"doc":"Gets the CSS type, used by the CSS. Returns: str: A type used in CSS (lower cased class name)."
},
{
"ref":"textual.scrollbar.ScrollBar.css_path_nodes",
"url":3,
"doc":"A list of nodes from the root to this node, forming a \"path\". Returns: list[DOMNode]: List of Nodes, starting with the root and ending with this node."
},
{
"ref":"textual.scrollbar.ScrollBar.display",
"url":3,
"doc":"Returns:  True if this DOMNode is displayed ( display != \"none\" ),  False otherwise."
},
{
"ref":"textual.scrollbar.ScrollBar.tree",
"url":3,
"doc":"Get a Rich tree object which will recursively render the structure of the node tree. Returns: Tree: A Rich object which may be printed."
},
{
"ref":"textual.scrollbar.ScrollBar.rich_text_style",
"url":3,
"doc":"Get the text style object. A widget's style is influenced by its parent. For instance if a widgets background has an alpha, then its parent's background color will show through. Additionally, widgets will inherit their parent's text style (i.e. bold, italic etc). Returns: Style: Rich Style object."
},
{
"ref":"textual.scrollbar.ScrollBar.ancestors",
"url":3,
"doc":"Get a list of Nodes by tracing ancestors all the way back to App."
},
{
"ref":"textual.scrollbar.ScrollBar.displayed_children",
"url":3,
"doc":"The children which don't have display: none set."
},
{
"ref":"textual.scrollbar.ScrollBar.focusable_children",
"url":3,
"doc":"Get the children which may be focused."
},
{
"ref":"textual.scrollbar.ScrollBar.add_child",
"url":3,
"doc":"Add a new child node. Args: node (DOMNode): A DOM node.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.add_children",
"url":3,
"doc":"Add multiple children to this node. Args:  nodes (DOMNode): Positional args should be new DOM nodes.  named_nodes (DOMNode): Keyword args will be assigned the argument name as an ID.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.walk_children",
"url":3,
"doc":"Generate all descendents of this node. Args: with_self (bool, optional): Also include self in the results. Defaults to True.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.get_child",
"url":3,
"doc":"Return the first child (immediate descendent) of this node with the given ID. Args: id (str): The ID of the child. Returns: DOMNode: The first child of this node with the ID. Raises: NoMatchingNodesError: if no children could be found for this ID",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.query",
"url":3,
"doc":"Get a DOM query. Args: selector (str, optional): A CSS selector or  None for all nodes. Defaults to None. Returns: DOMQuery: A query object.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.set_styles",
"url":3,
"doc":"Set custom styles on this object.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.has_class",
"url":3,
"doc":"Check if the Node has all the given class names. Args:  class_names (str): CSS class names to check. Returns: bool:  True if the node has all the given class names, otherwise  False .",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.add_class",
"url":3,
"doc":"Add class names to this Node. Args:  class_names (str): CSS class names to add.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.remove_class",
"url":3,
"doc":"Remove class names from this Node. Args:  class_names (str): CSS class names to remove.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.toggle_class",
"url":3,
"doc":"Toggle class names on this Node. Args:  class_names (str): CSS class names to toggle.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.has_pseudo_class",
"url":3,
"doc":"Check for pseudo class (such as hover, focus etc)",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.app",
"url":4,
"doc":"Get the current app."
},
{
"ref":"textual.scrollbar.ScrollBar.disable_messages",
"url":4,
"doc":"Disable message types from being processed.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.enable_messages",
"url":4,
"doc":"Enable processing of messages types.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.get_message",
"url":4,
"doc":"Get the next event on the queue, or None if queue is closed. Returns: Optional[Event]: Event object or None.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.peek_message",
"url":4,
"doc":"Peek the message at the head of the queue (does not remove it from the queue), or return None if the queue is empty. Returns: Optional[Message]: The message or None.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.close_messages_no_wait",
"url":4,
"doc":"Request the message queue to exit.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.close_messages",
"url":4,
"doc":"Close message queue, and optionally wait for queue to finish processing.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.check_idle",
"url":4,
"doc":"Prompt the message pump to call idle if the queue is empty.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.post_priority_message",
"url":4,
"doc":"Post a \"priority\" messages which will be processes prior to regular messages. Note that you should rarely need this in a regular app. It exists primarily to allow timer messages to skip the queue, so that they can be more regular. Args: message (Message): A message. Returns: bool: True if the messages was processed.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.dispatch_key",
"url":4,
"doc":"Dispatch a key event to method. This method will call the method named 'key_ ' if it exists. Args: event (events.Key): A key event.",
"func":1
},
{
"ref":"textual.driver",
"url":46,
"doc":""
},
{
"ref":"textual.driver.Driver",
"url":46,
"doc":"Helper class that provides a standard way to create an ABC using inheritance."
},
{
"ref":"textual.driver.Driver.send_event",
"url":46,
"doc":"",
"func":1
},
{
"ref":"textual.driver.Driver.process_event",
"url":46,
"doc":"Performs some additional processing of events.",
"func":1
},
{
"ref":"textual.driver.Driver.start_application_mode",
"url":46,
"doc":"",
"func":1
},
{
"ref":"textual.driver.Driver.disable_input",
"url":46,
"doc":"",
"func":1
},
{
"ref":"textual.driver.Driver.stop_application_mode",
"url":46,
"doc":"",
"func":1
},
{
"ref":"textual.drivers",
"url":47,
"doc":""
},
{
"ref":"textual.drivers.linux_driver",
"url":48,
"doc":""
},
{
"ref":"textual.drivers.linux_driver.LinuxDriver",
"url":48,
"doc":"Powers display and input for Linux / MacOS"
},
{
"ref":"textual.drivers.linux_driver.LinuxDriver.start_application_mode",
"url":48,
"doc":"",
"func":1
},
{
"ref":"textual.drivers.linux_driver.LinuxDriver.disable_input",
"url":48,
"doc":"",
"func":1
},
{
"ref":"textual.drivers.linux_driver.LinuxDriver.stop_application_mode",
"url":48,
"doc":"",
"func":1
},
{
"ref":"textual.drivers.linux_driver.LinuxDriver.run_input_thread",
"url":48,
"doc":"",
"func":1
},
{
"ref":"textual.drivers.linux_driver.LinuxDriver.process_event",
"url":46,
"doc":"Performs some additional processing of events.",
"func":1
},
{
"ref":"textual.renderables",
"url":49,
"doc":""
},
{
"ref":"textual.renderables.sparkline",
"url":50,
"doc":""
},
{
"ref":"textual.renderables.sparkline.Sparkline",
"url":50,
"doc":"A sparkline representing a series of data. Args: data (Sequence[T]): The sequence of data to render. width (int, optional): The width of the sparkline/the number of buckets to partition the data into. min_color (Color, optional): The color of values equal to the min value in data. max_color (Color, optional): The color of values equal to the max value in data. summary_function (Callable[list[T ): Function that will be applied to each bucket."
},
{
"ref":"textual.renderables.sparkline.Sparkline.BARS",
"url":50,
"doc":""
},
{
"ref":"textual.renderables.tint",
"url":51,
"doc":""
},
{
"ref":"textual.renderables.tint.Tint",
"url":51,
"doc":"Applies a color on top of an existing renderable. _summary_ Args: renderable (RenderableType): A renderable. color (Color): A color (presumably with alpha)."
},
{
"ref":"textual.renderables.gradient",
"url":52,
"doc":""
},
{
"ref":"textual.renderables.gradient.VerticalGradient",
"url":52,
"doc":"Draw a vertical gradient."
},
{
"ref":"textual.renderables.underline_bar",
"url":53,
"doc":""
},
{
"ref":"textual.renderables.underline_bar.UnderlineBar",
"url":53,
"doc":"Thin horizontal bar with a portion highlighted. Args: highlight_range (tuple[float, float]): The range to highlight. Defaults to  (0, 0) (no highlight) highlight_style (StyleType): The style of the highlighted range of the bar. background_style (StyleType): The style of the non-highlighted range(s) of the bar. width (int, optional): The width of the bar, or  None to fill available width."
},
{
"ref":"textual.renderables.blank",
"url":54,
"doc":""
},
{
"ref":"textual.renderables.blank.Blank",
"url":54,
"doc":"Draw solid background color."
},
{
"ref":"textual.renderables.opacity",
"url":55,
"doc":""
},
{
"ref":"textual.renderables.opacity.Opacity",
"url":55,
"doc":"Wrap a renderable to blend foreground color into the background color. Args: renderable (RenderableType): The RenderableType to manipulate. opacity (float): The opacity as a float. A value of 1.0 means text is fully visible."
},
{
"ref":"textual.devtools",
"url":56,
"doc":""
},
{
"ref":"textual.devtools.renderables",
"url":57,
"doc":""
},
{
"ref":"textual.devtools.renderables.DevConsoleHeader",
"url":57,
"doc":""
},
{
"ref":"textual.devtools.renderables.DevConsoleLog",
"url":57,
"doc":"Renderable representing a single log message Args: segments (Iterable[Segment]): The segments to display path (str): The path of the file on the client that the log call was made from line_number (int): The line number of the file on the client the log call was made from unix_timestamp (int): Seconds since January 1st 1970"
},
{
"ref":"textual.devtools.renderables.DevConsoleNotice",
"url":57,
"doc":"Renderable for messages written by the devtools console itself Args: message (str): The message to display level (DevtoolsMessageLevel): The message level (\"info\", \"warning\", or \"error\"). Determines colors used to render the message and the perceived importance."
},
{
"ref":"textual.devtools.client",
"url":58,
"doc":""
},
{
"ref":"textual.devtools.client.DevtoolsLog",
"url":58,
"doc":"A devtools log message. Attributes: objects_or_string (tuple[Any,  .]): Corresponds to the data that will ultimately be passed to Console.print in order to generate the log Segments. caller (inspect.FrameInfo): Information about where this log message was created. In other words, where did the user call  print or  App.log from. Used to display line number and file name in the devtools window."
},
{
"ref":"textual.devtools.client.DevtoolsLog.objects_or_string",
"url":58,
"doc":"Alias for field number 0"
},
{
"ref":"textual.devtools.client.DevtoolsLog.caller",
"url":58,
"doc":"Alias for field number 1"
},
{
"ref":"textual.devtools.client.DevtoolsConsole",
"url":58,
"doc":"A high level console interface. Args: color_system (str, optional): The color system supported by your terminal, either  \"standard\" ,  \"256\" or  \"truecolor\" . Leave as  \"auto\" to autodetect. force_terminal (Optional[bool], optional): Enable/disable terminal control codes, or None to auto-detect terminal. Defaults to None. force_jupyter (Optional[bool], optional): Enable/disable Jupyter rendering, or None to auto-detect Jupyter. Defaults to None. force_interactive (Optional[bool], optional): Enable/disable interactive mode, or None to auto detect. Defaults to None. soft_wrap (Optional[bool], optional): Set soft wrap default on print method. Defaults to False. theme (Theme, optional): An optional style theme object, or  None for default theme. stderr (bool, optional): Use stderr rather than stdout if  file is not specified. Defaults to False. file (IO, optional): A file object where the console should write to. Defaults to stdout. quiet (bool, Optional): Boolean to suppress all output. Defaults to False. width (int, optional): The width of the terminal. Leave as default to auto-detect width. height (int, optional): The height of the terminal. Leave as default to auto-detect height. style (StyleType, optional): Style to apply to all output, or None for no style. Defaults to None. no_color (Optional[bool], optional): Enabled no color mode, or None to auto detect. Defaults to None. tab_size (int, optional): Number of spaces used to replace a tab character. Defaults to 8. record (bool, optional): Boolean to enable recording of terminal output, required to call :meth: export_html , :meth: export_svg , and :meth: export_text . Defaults to False. markup (bool, optional): Boolean to enable :ref: console_markup . Defaults to True. emoji (bool, optional): Enable emoji code. Defaults to True. emoji_variant (str, optional): Optional emoji variant, either \"text\" or \"emoji\". Defaults to None. highlight (bool, optional): Enable automatic highlighting. Defaults to True. log_time (bool, optional): Boolean to enable logging of time by :meth: log methods. Defaults to True. log_path (bool, optional): Boolean to enable the logging of the caller by :meth: log . Defaults to True. log_time_format (Union[str, TimeFormatterCallable], optional): If  log_time is enabled, either string for strftime or callable that formats the time. Defaults to \"[%X] \". highlighter (HighlighterType, optional): Default highlighter. legacy_windows (bool, optional): Enable legacy Windows mode, or  None to auto detect. Defaults to  None . safe_box (bool, optional): Restrict box options that don't render on legacy Windows. get_datetime (Callable ], datetime], optional): Callable that gets the current time as a datetime.datetime object (used by Console.log), or None for datetime.now. get_time (Callable ], time], optional): Callable that gets the current time in seconds, default uses time.monotonic."
},
{
"ref":"textual.devtools.client.DevtoolsConsole.export_segments",
"url":58,
"doc":"Return the list of Segments that have be printed using this console Returns: list[Segment]: The list of Segments that have been printed using this console",
"func":1
},
{
"ref":"textual.devtools.client.DevtoolsConnectionError",
"url":58,
"doc":"Raise when the devtools client is unable to connect to the server"
},
{
"ref":"textual.devtools.client.ClientShutdown",
"url":58,
"doc":"Sentinel type sent to client queue(s) to indicate shutdown"
},
{
"ref":"textual.devtools.client.DevtoolsClient",
"url":58,
"doc":"Client responsible for websocket communication with the devtools server. Communicates using a simple JSON protocol. Messages have the format  {\"type\":  , \"payload\":  } . Valid values for  \"type\" (that can be sent from client -> server) are  \"client_log\" (for log messages) and  \"client_spillover\" (for reporting to the server that messages were discarded due to rate limiting). A  \"client_log\" message has a  \"payload\" format as follows:   {\"timestamp\":  , \"path\":  , \"line_number\":  , \"encoded_segments\":  }   A  \"client_spillover\" message has a  \"payload\" format as follows:   {\"spillover\":  }   Args: host (str): The host the devtools server is running on, defaults to \"127.0.0.1\" port (int): The port the devtools server is accessed via, defaults to 8081"
},
{
"ref":"textual.devtools.client.DevtoolsClient.connect",
"url":58,
"doc":"Connect to the devtools server. Raises: DevtoolsConnectionError: If we're unable to establish a connection to the server for any reason.",
"func":1
},
{
"ref":"textual.devtools.client.DevtoolsClient.disconnect",
"url":58,
"doc":"Disconnect from the devtools server by stopping tasks and closing connections.",
"func":1
},
{
"ref":"textual.devtools.client.DevtoolsClient.is_connected",
"url":58,
"doc":"Checks connection to devtools server. Returns: bool: True if this host is connected to the server. False otherwise."
},
{
"ref":"textual.devtools.client.DevtoolsClient.log",
"url":58,
"doc":"Queue a log to be sent to the devtools server for display. Args: log (DevtoolsLog): The log to write to devtools",
"func":1
},
{
"ref":"textual.devtools.redirect_output",
"url":59,
"doc":""
},
{
"ref":"textual.devtools.redirect_output.StdoutRedirector",
"url":59,
"doc":"A write-only file-like object which redirects anything written to it to the devtools instance associated with the given Textual application. Used within Textual to redirect data written using  print (or any other stdout writes) to the devtools and/or to the log file. Args: devtools (DevtoolsClient): The running Textual app instance. log_file (TextIOWrapper): The log file for the Textual App."
},
{
"ref":"textual.devtools.redirect_output.StdoutRedirector.write",
"url":59,
"doc":"Write the log string to the internal buffer. If the string contains a newline character   , the whole string will be buffered and then the buffer will be flushed immediately after. Args: string (str): The string to write to the buffer.",
"func":1
},
{
"ref":"textual.devtools.redirect_output.StdoutRedirector.flush",
"url":59,
"doc":"Flush the buffer. This will send all buffered log messages to the devtools server and the log file. In the case of the devtools, where possible, log messages will be batched and sent as one.",
"func":1
},
{
"ref":"textual.devtools.server",
"url":60,
"doc":""
},
{
"ref":"textual.devtools.server.websocket_handler",
"url":60,
"doc":"aiohttp websocket handler for sending data between devtools client and server Args: request (Request): The request to the websocket endpoint Returns: WebSocketResponse: The websocket response",
"func":1
},
{
"ref":"textual.devtools.service",
"url":61,
"doc":"Manages a running devtools instance"
},
{
"ref":"textual.devtools.service.DevtoolsService",
"url":61,
"doc":"A running instance of devtools has a single DevtoolsService which is responsible for tracking connected client applications. Args: update_frequency (float): The number of seconds to wait between sending updates of the console size to connected clients."
},
{
"ref":"textual.devtools.service.DevtoolsService.start",
"url":61,
"doc":"Starts devtools tasks",
"func":1
},
{
"ref":"textual.devtools.service.DevtoolsService.clients_connected",
"url":61,
"doc":"Returns True if there are connected clients, False otherwise."
},
{
"ref":"textual.devtools.service.DevtoolsService.send_server_info",
"url":61,
"doc":"Send information about the server e.g. width and height of Console to a connected client. Args: client_handler (ClientHandler): The client to send information to",
"func":1
},
{
"ref":"textual.devtools.service.DevtoolsService.handle",
"url":61,
"doc":"Handles a single client connection",
"func":1
},
{
"ref":"textual.devtools.service.DevtoolsService.shutdown",
"url":61,
"doc":"Stop server async tasks and clean up all client handlers",
"func":1
},
{
"ref":"textual.devtools.service.ClientHandler",
"url":61,
"doc":"Handles a single client connection to the devtools. A single DevtoolsService managers many ClientHandlers. A single ClientHandler corresponds to a single running Textual application instance, and is responsible for communication with that Textual app. Args: request (Request): The aiohttp.Request associated with this client service (DevtoolsService): The parent DevtoolsService which is responsible for the handling of this client."
},
{
"ref":"textual.devtools.service.ClientHandler.send_message",
"url":61,
"doc":"Send a message to a client Args: message (dict[str, object]): The dict which will be sent to the client.",
"func":1
},
{
"ref":"textual.devtools.service.ClientHandler.run",
"url":61,
"doc":"Prepare the websocket and communication queues, and continuously read messages from the queues. Returns: WebSocketResponse: The WebSocketResponse associated with this client.",
"func":1
},
{
"ref":"textual.devtools.service.ClientHandler.close",
"url":61,
"doc":"Stop all incoming/outgoing message processing, and shutdown the websocket connection associated with this client.",
"func":1
},
{
"ref":"textual.widget",
"url":2,
"doc":""
},
{
"ref":"textual.widget.RenderCache",
"url":2,
"doc":"RenderCache(size, lines)"
},
{
"ref":"textual.widget.RenderCache.size",
"url":2,
"doc":"Alias for field number 0"
},
{
"ref":"textual.widget.RenderCache.lines",
"url":2,
"doc":"Alias for field number 1"
},
{
"ref":"textual.widget.RenderCache.cursor_line",
"url":2,
"doc":""
},
{
"ref":"textual.widget.Widget",
"url":2,
"doc":"A node in a hierarchy of things forming the UI. Nodes are mountable and may be styled with CSS."
},
{
"ref":"textual.widget.Widget.can_focus",
"url":2,
"doc":""
},
{
"ref":"textual.widget.Widget.can_focus_children",
"url":2,
"doc":""
},
{
"ref":"textual.widget.Widget.CSS",
"url":2,
"doc":""
},
{
"ref":"textual.widget.Widget.auto_width",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widget.Widget.auto_height",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widget.Widget.has_focus",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widget.Widget.descendant_has_focus",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widget.Widget.mouse_over",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widget.Widget.scroll_x",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widget.Widget.scroll_y",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widget.Widget.scroll_target_x",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widget.Widget.scroll_target_y",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widget.Widget.show_vertical_scrollbar",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widget.Widget.show_horizontal_scrollbar",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widget.Widget.mount",
"url":2,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.compose",
"url":2,
"doc":"Yield child widgets for a container.",
"func":1
},
{
"ref":"textual.widget.Widget.on_register",
"url":2,
"doc":"Called when the instance is registered. Args: app (App): App instance.",
"func":1
},
{
"ref":"textual.widget.Widget.get_box_model",
"url":2,
"doc":"Process the box model for this widget. Args: container (Size): The size of the container widget (with a layout) viewport (Size): The viewport size. Returns: BoxModel: The size and margin for this widget.",
"func":1
},
{
"ref":"textual.widget.Widget.get_content_width",
"url":2,
"doc":"Gets the width of the content area. Args: container_size (Size): Size of the container (immediate parent) widget. viewport_size (Size): Size of the viewport. Returns: int: The optimal width of the content.",
"func":1
},
{
"ref":"textual.widget.Widget.get_content_height",
"url":2,
"doc":"Gets the height (number of lines) in the content area. Args: container_size (Size): Size of the container (immediate parent) widget. viewport_size (Size): Size of the viewport. width (int): Width of renderable. Returns: int: The height of the content.",
"func":1
},
{
"ref":"textual.widget.Widget.watch_scroll_x",
"url":2,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.watch_scroll_y",
"url":2,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.validate_scroll_x",
"url":2,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.validate_scroll_target_x",
"url":2,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.validate_scroll_y",
"url":2,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.validate_scroll_target_y",
"url":2,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.max_scroll_x",
"url":2,
"doc":""
},
{
"ref":"textual.widget.Widget.max_scroll_y",
"url":2,
"doc":""
},
{
"ref":"textual.widget.Widget.vertical_scrollbar",
"url":2,
"doc":"Get a vertical scrollbar (create if necessary) Returns: ScrollBar: ScrollBar Widget."
},
{
"ref":"textual.widget.Widget.horizontal_scrollbar",
"url":2,
"doc":"Get a vertical scrollbar (create if necessary) Returns: ScrollBar: ScrollBar Widget."
},
{
"ref":"textual.widget.Widget.scrollbars_enabled",
"url":2,
"doc":"A tuple of booleans that indicate if scrollbars are enabled. Returns: tuple[bool, bool]: A tuple of ( ,  )"
},
{
"ref":"textual.widget.Widget.set_dirty",
"url":2,
"doc":"Set the Widget as 'dirty' (requiring re-render).",
"func":1
},
{
"ref":"textual.widget.Widget.scroll_to",
"url":2,
"doc":"Scroll to a given (absolute) coordinate, optionally animating. Args: x (int | None, optional): X coordinate (column) to scroll to, or  None for no change. Defaults to None. y (int | None, optional): Y coordinate (row) to scroll to, or  None for no change. Defaults to None. animate (bool, optional): Animate to new scroll position. Defaults to False. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.widget.Widget.scroll_relative",
"url":2,
"doc":"Scroll relative to current position. Args: x (int | None, optional): X distance (columns) to scroll, or  None for no change. Defaults to None. y (int | None, optional): Y distance (rows) to scroll, or  None for no change. Defaults to None. animate (bool, optional): Animate to new scroll position. Defaults to False. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.widget.Widget.scroll_home",
"url":2,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.scroll_end",
"url":2,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.scroll_left",
"url":2,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.scroll_right",
"url":2,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.scroll_up",
"url":2,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.scroll_down",
"url":2,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.scroll_page_up",
"url":2,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.scroll_page_down",
"url":2,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.scroll_page_left",
"url":2,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.scroll_page_right",
"url":2,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.scroll_to_widget",
"url":2,
"doc":"Scroll so that a child widget is in the visible area. Args: widget (Widget): A Widget in the children. animate (bool, optional): True to animate, or False to jump. Defaults to True. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.widget.Widget.get_pseudo_classes",
"url":2,
"doc":"Pseudo classes for a widget",
"func":1
},
{
"ref":"textual.widget.Widget.watch",
"url":2,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.render_styled",
"url":2,
"doc":"Applies style attributes to the default renderable. Returns: RenderableType: A new renderable.",
"func":1
},
{
"ref":"textual.widget.Widget.size",
"url":2,
"doc":""
},
{
"ref":"textual.widget.Widget.container_size",
"url":2,
"doc":""
},
{
"ref":"textual.widget.Widget.content_region",
"url":2,
"doc":"A region relative to the Widget origin that contains the content."
},
{
"ref":"textual.widget.Widget.content_offset",
"url":2,
"doc":"An offset from the Widget origin where the content begins."
},
{
"ref":"textual.widget.Widget.virtual_size",
"url":2,
"doc":""
},
{
"ref":"textual.widget.Widget.region",
"url":2,
"doc":"The region occupied by this widget, relative to the Screen."
},
{
"ref":"textual.widget.Widget.scroll_offset",
"url":2,
"doc":""
},
{
"ref":"textual.widget.Widget.is_transparent",
"url":2,
"doc":"Check if the background styles is not set. Returns: bool:  True if there is background color, otherwise  False ."
},
{
"ref":"textual.widget.Widget.console",
"url":2,
"doc":"Get the current console."
},
{
"ref":"textual.widget.Widget.animate",
"url":2,
"doc":""
},
{
"ref":"textual.widget.Widget.layout",
"url":2,
"doc":""
},
{
"ref":"textual.widget.Widget.is_container",
"url":2,
"doc":"Check if this widget is a container (contains other widgets) Returns: bool: True if this widget is a container."
},
{
"ref":"textual.widget.Widget.watch_mouse_over",
"url":2,
"doc":"Update from CSS if mouse over state changes.",
"func":1
},
{
"ref":"textual.widget.Widget.watch_has_focus",
"url":2,
"doc":"Update from CSS if has focus state changes.",
"func":1
},
{
"ref":"textual.widget.Widget.on_style_change",
"url":2,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.size_updated",
"url":2,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.get_render_lines",
"url":2,
"doc":"Get segment lines to render the widget. Args: start (int | None, optional): line start index, or None for first line. Defaults to None. end (int | None, optional): line end index, or None for last line. Defaults to None. Returns: Lines: A list of lists of segments.",
"func":1
},
{
"ref":"textual.widget.Widget.check_layout",
"url":2,
"doc":"Check if a layout has been requested.",
"func":1
},
{
"ref":"textual.widget.Widget.get_style_at",
"url":2,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.call_later",
"url":2,
"doc":"Run a callback after processing all messages and refreshing the screen. Args: callback (Callable): A callable.",
"func":1
},
{
"ref":"textual.widget.Widget.forward_event",
"url":2,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.refresh",
"url":2,
"doc":"Initiate a refresh of the widget. This method sets an internal flag to perform a refresh, which will be done on the next idle event. Only one refresh will be done even if this method is called multiple times. Args: repaint (bool, optional): Repaint the widget (will call render() again). Defaults to True. layout (bool, optional): Also layout widgets in the view. Defaults to False.",
"func":1
},
{
"ref":"textual.widget.Widget.render",
"url":2,
"doc":"Get renderable for widget. Args: style (Styles): The Styles object for this Widget. Returns: RenderableType: Any renderable",
"func":1
},
{
"ref":"textual.widget.Widget.action",
"url":2,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.post_message",
"url":2,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.on_idle",
"url":2,
"doc":"Called when there are no more events on the queue. Args: event (events.Idle): Idle event.",
"func":1
},
{
"ref":"textual.widget.Widget.focus",
"url":2,
"doc":"Give input focus to this widget.",
"func":1
},
{
"ref":"textual.widget.Widget.capture_mouse",
"url":2,
"doc":"Capture (or release) the mouse. When captured, all mouse coordinates will go to this widget even when the pointer is not directly over the widget. Args: capture (bool, optional): True to capture or False to release. Defaults to True.",
"func":1
},
{
"ref":"textual.widget.Widget.release_mouse",
"url":2,
"doc":"Release the mouse. Mouse events will only be sent when the mouse is over the widget.",
"func":1
},
{
"ref":"textual.widget.Widget.broker_event",
"url":2,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.on_mouse_down",
"url":2,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.on_mouse_up",
"url":2,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.on_click",
"url":2,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.on_key",
"url":2,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.on_mount",
"url":2,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.on_leave",
"url":2,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.on_enter",
"url":2,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.on_focus",
"url":2,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.on_blur",
"url":2,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.on_descendant_focus",
"url":2,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.on_descendant_blur",
"url":2,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.on_mouse_scroll_down",
"url":2,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.on_mouse_scroll_up",
"url":2,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.handle_scroll_to",
"url":2,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.handle_scroll_up",
"url":2,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.handle_scroll_down",
"url":2,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.handle_scroll_left",
"url":2,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.handle_scroll_right",
"url":2,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.key_home",
"url":2,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.key_end",
"url":2,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.key_left",
"url":2,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.key_right",
"url":2,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.key_down",
"url":2,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.key_up",
"url":2,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.key_pagedown",
"url":2,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.key_pageup",
"url":2,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.parent",
"url":3,
"doc":"Get the parent node. Returns: DOMNode: The node which is the direct parent of this node."
},
{
"ref":"textual.widget.Widget.screen",
"url":3,
"doc":"Get the screen that this node is contained within. Note that this may not be the currently active screen within the app."
},
{
"ref":"textual.widget.Widget.id",
"url":3,
"doc":"The ID of this node, or None if the node has no ID. Returns: (str | None): A Node ID or None."
},
{
"ref":"textual.widget.Widget.css_identifier",
"url":3,
"doc":"A CSS selector that identifies this DOM node."
},
{
"ref":"textual.widget.Widget.css_identifier_styled",
"url":3,
"doc":"A stylized CSS identifier."
},
{
"ref":"textual.widget.Widget.pseudo_classes",
"url":3,
"doc":"Get a set of all pseudo classes"
},
{
"ref":"textual.widget.Widget.css_type",
"url":3,
"doc":"Gets the CSS type, used by the CSS. Returns: str: A type used in CSS (lower cased class name)."
},
{
"ref":"textual.widget.Widget.css_path_nodes",
"url":3,
"doc":"A list of nodes from the root to this node, forming a \"path\". Returns: list[DOMNode]: List of Nodes, starting with the root and ending with this node."
},
{
"ref":"textual.widget.Widget.display",
"url":3,
"doc":"Returns:  True if this DOMNode is displayed ( display != \"none\" ),  False otherwise."
},
{
"ref":"textual.widget.Widget.tree",
"url":3,
"doc":"Get a Rich tree object which will recursively render the structure of the node tree. Returns: Tree: A Rich object which may be printed."
},
{
"ref":"textual.widget.Widget.rich_text_style",
"url":3,
"doc":"Get the text style object. A widget's style is influenced by its parent. For instance if a widgets background has an alpha, then its parent's background color will show through. Additionally, widgets will inherit their parent's text style (i.e. bold, italic etc). Returns: Style: Rich Style object."
},
{
"ref":"textual.widget.Widget.ancestors",
"url":3,
"doc":"Get a list of Nodes by tracing ancestors all the way back to App."
},
{
"ref":"textual.widget.Widget.displayed_children",
"url":3,
"doc":"The children which don't have display: none set."
},
{
"ref":"textual.widget.Widget.focusable_children",
"url":3,
"doc":"Get the children which may be focused."
},
{
"ref":"textual.widget.Widget.add_child",
"url":3,
"doc":"Add a new child node. Args: node (DOMNode): A DOM node.",
"func":1
},
{
"ref":"textual.widget.Widget.add_children",
"url":3,
"doc":"Add multiple children to this node. Args:  nodes (DOMNode): Positional args should be new DOM nodes.  named_nodes (DOMNode): Keyword args will be assigned the argument name as an ID.",
"func":1
},
{
"ref":"textual.widget.Widget.walk_children",
"url":3,
"doc":"Generate all descendents of this node. Args: with_self (bool, optional): Also include self in the results. Defaults to True.",
"func":1
},
{
"ref":"textual.widget.Widget.get_child",
"url":3,
"doc":"Return the first child (immediate descendent) of this node with the given ID. Args: id (str): The ID of the child. Returns: DOMNode: The first child of this node with the ID. Raises: NoMatchingNodesError: if no children could be found for this ID",
"func":1
},
{
"ref":"textual.widget.Widget.query",
"url":3,
"doc":"Get a DOM query. Args: selector (str, optional): A CSS selector or  None for all nodes. Defaults to None. Returns: DOMQuery: A query object.",
"func":1
},
{
"ref":"textual.widget.Widget.set_styles",
"url":3,
"doc":"Set custom styles on this object.",
"func":1
},
{
"ref":"textual.widget.Widget.has_class",
"url":3,
"doc":"Check if the Node has all the given class names. Args:  class_names (str): CSS class names to check. Returns: bool:  True if the node has all the given class names, otherwise  False .",
"func":1
},
{
"ref":"textual.widget.Widget.add_class",
"url":3,
"doc":"Add class names to this Node. Args:  class_names (str): CSS class names to add.",
"func":1
},
{
"ref":"textual.widget.Widget.remove_class",
"url":3,
"doc":"Remove class names from this Node. Args:  class_names (str): CSS class names to remove.",
"func":1
},
{
"ref":"textual.widget.Widget.toggle_class",
"url":3,
"doc":"Toggle class names on this Node. Args:  class_names (str): CSS class names to toggle.",
"func":1
},
{
"ref":"textual.widget.Widget.has_pseudo_class",
"url":3,
"doc":"Check for pseudo class (such as hover, focus etc)",
"func":1
},
{
"ref":"textual.widget.Widget.app",
"url":4,
"doc":"Get the current app."
},
{
"ref":"textual.widget.Widget.disable_messages",
"url":4,
"doc":"Disable message types from being processed.",
"func":1
},
{
"ref":"textual.widget.Widget.enable_messages",
"url":4,
"doc":"Enable processing of messages types.",
"func":1
},
{
"ref":"textual.widget.Widget.get_message",
"url":4,
"doc":"Get the next event on the queue, or None if queue is closed. Returns: Optional[Event]: Event object or None.",
"func":1
},
{
"ref":"textual.widget.Widget.peek_message",
"url":4,
"doc":"Peek the message at the head of the queue (does not remove it from the queue), or return None if the queue is empty. Returns: Optional[Message]: The message or None.",
"func":1
},
{
"ref":"textual.widget.Widget.close_messages_no_wait",
"url":4,
"doc":"Request the message queue to exit.",
"func":1
},
{
"ref":"textual.widget.Widget.close_messages",
"url":4,
"doc":"Close message queue, and optionally wait for queue to finish processing.",
"func":1
},
{
"ref":"textual.widget.Widget.check_idle",
"url":4,
"doc":"Prompt the message pump to call idle if the queue is empty.",
"func":1
},
{
"ref":"textual.widget.Widget.post_priority_message",
"url":4,
"doc":"Post a \"priority\" messages which will be processes prior to regular messages. Note that you should rarely need this in a regular app. It exists primarily to allow timer messages to skip the queue, so that they can be more regular. Args: message (Message): A message. Returns: bool: True if the messages was processed.",
"func":1
},
{
"ref":"textual.widget.Widget.dispatch_key",
"url":4,
"doc":"Dispatch a key event to method. This method will call the method named 'key_ ' if it exists. Args: event (events.Key): A key event.",
"func":1
},
{
"ref":"textual.draw",
"url":62,
"doc":""
},
{
"ref":"textual.draw.DrawStyle",
"url":62,
"doc":"An enumeration."
},
{
"ref":"textual.draw.DrawStyle.NONE",
"url":62,
"doc":""
},
{
"ref":"textual.draw.DrawStyle.ASCII",
"url":62,
"doc":""
},
{
"ref":"textual.draw.DrawStyle.SQUARE",
"url":62,
"doc":""
},
{
"ref":"textual.draw.DrawStyle.HEAVY",
"url":62,
"doc":""
},
{
"ref":"textual.draw.DrawStyle.ROUNDED",
"url":62,
"doc":""
},
{
"ref":"textual.draw.DrawStyle.DOUBLE",
"url":62,
"doc":""
},
{
"ref":"textual.reactive",
"url":63,
"doc":""
},
{
"ref":"textual.reactive.Reactive",
"url":63,
"doc":"Reactive descriptor."
},
{
"ref":"textual.reactive.Reactive.check_watchers",
"url":63,
"doc":"",
"func":1
},
{
"ref":"textual.reactive.Reactive.compute",
"url":63,
"doc":"",
"func":1
},
{
"ref":"textual.reactive.watch",
"url":63,
"doc":"",
"func":1
},
{
"ref":"textual.color",
"url":64,
"doc":"Manages Color in Textual. All instances where the developer is presented with a color should use this class. The only exception should be when passing things to a Rich renderable, which will need to use the  rich_color attribute to perform a conversion. I'm not entirely happy with burdening the user with two similar color classes. In a future update we might add a protocol to convert automatically so the dev could use them interchangably."
},
{
"ref":"textual.color.HLS",
"url":64,
"doc":"A color in HLS format."
},
{
"ref":"textual.color.HLS.h",
"url":64,
"doc":"Alias for field number 0"
},
{
"ref":"textual.color.HLS.l",
"url":64,
"doc":"Alias for field number 1"
},
{
"ref":"textual.color.HLS.s",
"url":64,
"doc":"Alias for field number 2"
},
{
"ref":"textual.color.HSV",
"url":64,
"doc":"A color in HSV format."
},
{
"ref":"textual.color.HSV.h",
"url":64,
"doc":"Alias for field number 0"
},
{
"ref":"textual.color.HSV.s",
"url":64,
"doc":"Alias for field number 1"
},
{
"ref":"textual.color.HSV.v",
"url":64,
"doc":"Alias for field number 2"
},
{
"ref":"textual.color.Lab",
"url":64,
"doc":"A color in CIE-L ab format."
},
{
"ref":"textual.color.Lab.L",
"url":64,
"doc":"Alias for field number 0"
},
{
"ref":"textual.color.Lab.a",
"url":64,
"doc":"Alias for field number 1"
},
{
"ref":"textual.color.Lab.b",
"url":64,
"doc":"Alias for field number 2"
},
{
"ref":"textual.color.ColorParseError",
"url":64,
"doc":"A color failed to parse Creates a new ColorParseError Args: message (str): the error message suggested_color (str | None): a close color we can suggest. Defaults to None."
},
{
"ref":"textual.color.Color",
"url":64,
"doc":"A class to represent a single RGB color with alpha."
},
{
"ref":"textual.color.Color.r",
"url":64,
"doc":"Alias for field number 0"
},
{
"ref":"textual.color.Color.g",
"url":64,
"doc":"Alias for field number 1"
},
{
"ref":"textual.color.Color.b",
"url":64,
"doc":"Alias for field number 2"
},
{
"ref":"textual.color.Color.a",
"url":64,
"doc":"Alias for field number 3"
},
{
"ref":"textual.color.Color.from_rich_color",
"url":64,
"doc":"Create a new color from Rich's Color class. Args: rich_color (RichColor): An instance of rich.color.Color. Returns: Color: A new Color.",
"func":1
},
{
"ref":"textual.color.Color.from_hls",
"url":64,
"doc":"Create a color from HLS components. Args: h (float): Hue. l (float): Lightness. s (float): Saturation. Returns: Color: A new color.",
"func":1
},
{
"ref":"textual.color.Color.is_transparent",
"url":64,
"doc":"Check if the color is transparent, i.e. has 0 alpha."
},
{
"ref":"textual.color.Color.clamped",
"url":64,
"doc":"Get a color with all components saturated to maximum and minimum values."
},
{
"ref":"textual.color.Color.rich_color",
"url":64,
"doc":"This color encoded in Rich's Color class."
},
{
"ref":"textual.color.Color.normalized",
"url":64,
"doc":"A tuple of the color components normalized to between 0 and 1."
},
{
"ref":"textual.color.Color.rgb",
"url":64,
"doc":"Get just the red, green, and blue components."
},
{
"ref":"textual.color.Color.hls",
"url":64,
"doc":"Get the color as HLS."
},
{
"ref":"textual.color.Color.brightness",
"url":64,
"doc":"Get the human perceptual brightness."
},
{
"ref":"textual.color.Color.hex",
"url":64,
"doc":"The color in CSS hex form, with 6 digits for RGB, and 8 digits for RGBA. Returns: str: A CSS hex-style color, e.g. \" 46b3de\" or \" 3342457f\""
},
{
"ref":"textual.color.Color.css",
"url":64,
"doc":"The color in CSS rgb or rgba form. Returns: str: A CSS style color, e.g. \"rgb(10,20,30)\" or \"rgb(50,70,80,0.5)\""
},
{
"ref":"textual.color.Color.with_alpha",
"url":64,
"doc":"Create a new color with the given alpha. Args: alpha (float): New value for alpha. Returns: Color: A new color.",
"func":1
},
{
"ref":"textual.color.Color.blend",
"url":64,
"doc":"Generate a new color between two colors. Args: destination (Color): Another color. factor (float): A blend factor, 0 -> 1 Returns: Color: A new color.",
"func":1
},
{
"ref":"textual.color.Color.parse",
"url":64,
"doc":"Parse a string containing a CSS-style color. Args: color_text (str | Color): Text with a valid color format. Color objects will be returned unmodified. Raises: ColorParseError: If the color is not encoded correctly. Returns: Color: New color object.",
"func":1
},
{
"ref":"textual.color.Color.darken",
"url":64,
"doc":"Darken the color by a given amount. Args: amount (float): Value between 0-1 to reduce luminance by. Returns: Color: New color.",
"func":1
},
{
"ref":"textual.color.Color.lighten",
"url":64,
"doc":"Lighten the color by a given amount. Args: amount (float): Value between 0-1 to increase luminance by. Returns: Color: New color.",
"func":1
},
{
"ref":"textual.color.Color.get_contrast_text",
"url":64,
"doc":"Get a light or dark color that best contrasts this color, for use with text. Args: alpha (float, optional): An alpha value to adjust the pure white / black by. Defaults to 0.95. Returns: Color: A new color, either an off-white or off-black",
"func":1
},
{
"ref":"textual.color.ColorPair",
"url":64,
"doc":"A pair of colors for foreground and background."
},
{
"ref":"textual.color.ColorPair.foreground",
"url":64,
"doc":"Alias for field number 0"
},
{
"ref":"textual.color.ColorPair.background",
"url":64,
"doc":"Alias for field number 1"
},
{
"ref":"textual.color.ColorPair.style",
"url":64,
"doc":"A Rich style with foreground and background."
},
{
"ref":"textual.color.rgb_to_lab",
"url":64,
"doc":"Convert an RGB color to the CIE-L ab format. Uses the standard RGB color space with a D65/2\u2070 standard illuminant. Conversion passes through the XYZ color space. Cf. http: www.easyrgb.com/en/math.php.",
"func":1
},
{
"ref":"textual.color.lab_to_rgb",
"url":64,
"doc":"Convert a CIE-L ab color to RGB. Uses the standard RGB color space with a D65/2\u2070 standard illuminant. Conversion passes through the XYZ color space. Cf. http: www.easyrgb.com/en/math.php.",
"func":1
},
{
"ref":"textual.message",
"url":6,
"doc":""
},
{
"ref":"textual.message.Message",
"url":6,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.message.Message.bubble",
"url":6,
"doc":""
},
{
"ref":"textual.message.Message.verbosity",
"url":6,
"doc":""
},
{
"ref":"textual.message.Message.system",
"url":6,
"doc":""
},
{
"ref":"textual.message.Message.is_forwarded",
"url":6,
"doc":""
},
{
"ref":"textual.message.Message.set_forwarded",
"url":6,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.message.Message.can_replace",
"url":6,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.message.Message.prevent_default",
"url":6,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.message.Message.stop",
"url":6,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.message.Message.name",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.message.Message.sender",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.message.Message.time",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.geometry",
"url":65,
"doc":"Functions and classes to manage terminal geometry (anything involving coordinates or dimensions)."
},
{
"ref":"textual.geometry.clamp",
"url":65,
"doc":"Clamps a value between two other values. Args: value (T): A value minimum (T): Minimum value maximum (T): maximum value Returns: T: New value that is not less than the minimum or greater than the maximum.",
"func":1
},
{
"ref":"textual.geometry.Offset",
"url":65,
"doc":"A point defined by x and y coordinates."
},
{
"ref":"textual.geometry.Offset.x",
"url":65,
"doc":"Alias for field number 0"
},
{
"ref":"textual.geometry.Offset.y",
"url":65,
"doc":"Alias for field number 1"
},
{
"ref":"textual.geometry.Offset.is_origin",
"url":65,
"doc":"Check if the point is at the origin (0, 0)"
},
{
"ref":"textual.geometry.Offset.blend",
"url":65,
"doc":"Blend (interpolate) to a new point. Args: destination (Point): Point where progress is 1.0 factor (float): A value between 0 and 1.0 Returns: Point: A new point on a line between self and destination",
"func":1
},
{
"ref":"textual.geometry.Offset.get_distance_to",
"url":65,
"doc":"Get the distance to another offset. Args: other (Offset): An offset Returns: float: Distance to other offset",
"func":1
},
{
"ref":"textual.geometry.Size",
"url":65,
"doc":"An area defined by its width and height."
},
{
"ref":"textual.geometry.Size.width",
"url":65,
"doc":"Alias for field number 0"
},
{
"ref":"textual.geometry.Size.height",
"url":65,
"doc":"Alias for field number 1"
},
{
"ref":"textual.geometry.Size.area",
"url":65,
"doc":"Get the area of the size. Returns: int: Area in cells."
},
{
"ref":"textual.geometry.Size.region",
"url":65,
"doc":"Get a region of the same size."
},
{
"ref":"textual.geometry.Size.contains",
"url":65,
"doc":"Check if a point is in the size. Args: x (int): X coordinate (column) y (int): Y coordinate (row) Returns: bool: True if the point is within the region.",
"func":1
},
{
"ref":"textual.geometry.Size.contains_point",
"url":65,
"doc":"Check if a point is in the size. Args: point (tuple[int, int]): A tuple of x and y coordinates. Returns: bool: True if the point is within the region.",
"func":1
},
{
"ref":"textual.geometry.Region",
"url":65,
"doc":"Defines a rectangular region."
},
{
"ref":"textual.geometry.Region.x",
"url":65,
"doc":"Alias for field number 0"
},
{
"ref":"textual.geometry.Region.y",
"url":65,
"doc":"Alias for field number 1"
},
{
"ref":"textual.geometry.Region.width",
"url":65,
"doc":"Alias for field number 2"
},
{
"ref":"textual.geometry.Region.height",
"url":65,
"doc":"Alias for field number 3"
},
{
"ref":"textual.geometry.Region.from_union",
"url":65,
"doc":"Create a Region from the union of other regions. Args: regions (Iterable[Region]): One or more regions. Returns: Region: A Region that encloses all other regions.",
"func":1
},
{
"ref":"textual.geometry.Region.from_corners",
"url":65,
"doc":"Construct a Region form the top left and bottom right corners. Args: x1 (int): Top left x y1 (int): Top left y x2 (int): Bottom right x y2 (int): Bottom right y Returns: Region: A new region.",
"func":1
},
{
"ref":"textual.geometry.Region.from_origin",
"url":65,
"doc":"Create a region from origin and size. Args: origin (Point): Origin (top left point) size (tuple[int, int]): Dimensions of region. Returns: Region: A region instance.",
"func":1
},
{
"ref":"textual.geometry.Region.x_extents",
"url":65,
"doc":"Get the starting and ending x coord. The end value is non inclusive. Returns: tuple[int, int]: [description]"
},
{
"ref":"textual.geometry.Region.y_extents",
"url":65,
"doc":"Get the starting and ending x coord. The end value is non inclusive. Returns: tuple[int, int]: [description]"
},
{
"ref":"textual.geometry.Region.x_max",
"url":65,
"doc":"Maximum X value (non inclusive)"
},
{
"ref":"textual.geometry.Region.y_max",
"url":65,
"doc":"Maximum Y value (non inclusive)"
},
{
"ref":"textual.geometry.Region.area",
"url":65,
"doc":"Get the area within the region."
},
{
"ref":"textual.geometry.Region.origin",
"url":65,
"doc":"Get the start point of the region."
},
{
"ref":"textual.geometry.Region.bottom_left",
"url":65,
"doc":"Bottom left offset of the region."
},
{
"ref":"textual.geometry.Region.top_right",
"url":65,
"doc":"Top right offset of the region."
},
{
"ref":"textual.geometry.Region.bottom_right",
"url":65,
"doc":"Bottom right of the region."
},
{
"ref":"textual.geometry.Region.size",
"url":65,
"doc":"Get the size of the region."
},
{
"ref":"textual.geometry.Region.corners",
"url":65,
"doc":"Get the maxima and minima of region. Returns: tuple[int, int, int, int]: A tuple of ( ,  ,  ,  )"
},
{
"ref":"textual.geometry.Region.x_range",
"url":65,
"doc":"A range object for X coordinates."
},
{
"ref":"textual.geometry.Region.y_range",
"url":65,
"doc":"A range object for Y coordinates."
},
{
"ref":"textual.geometry.Region.reset_origin",
"url":65,
"doc":"An region of the same size at (0, 0)."
},
{
"ref":"textual.geometry.Region.expand",
"url":65,
"doc":"Increase the size of the region by adding a border. Args: size (tuple[int, int]): Additional width and height. Returns: Region: A new region.",
"func":1
},
{
"ref":"textual.geometry.Region.overlaps",
"url":65,
"doc":"Check if another region overlaps this region. Args: other (Region): A Region. Returns: bool: True if other region shares any cells with this region.",
"func":1
},
{
"ref":"textual.geometry.Region.contains",
"url":65,
"doc":"Check if a point is in the region. Args: x (int): X coordinate (column) y (int): Y coordinate (row) Returns: bool: True if the point is within the region.",
"func":1
},
{
"ref":"textual.geometry.Region.contains_point",
"url":65,
"doc":"Check if a point is in the region. Args: point (tuple[int, int]): A tuple of x and y coordinates. Returns: bool: True if the point is within the region.",
"func":1
},
{
"ref":"textual.geometry.Region.contains_region",
"url":65,
"doc":"Check if a region is entirely contained within this region. Args: other (Region): A region. Returns: bool: True if the other region fits perfectly within this region.",
"func":1
},
{
"ref":"textual.geometry.Region.translate",
"url":65,
"doc":"Move the origin of the Region. Args: translate_x (int): Value to add to x coordinate. translate_y (int): Value to add to y coordinate. Returns: Region: A new region shifted by x, y",
"func":1
},
{
"ref":"textual.geometry.Region.clip",
"url":65,
"doc":"Clip this region to fit within width, height. Args: width (int): Width of bounds. height (int): Height of bounds. Returns: Region: Clipped region.",
"func":1
},
{
"ref":"textual.geometry.Region.shrink",
"url":65,
"doc":"Shrink a region by pushing each edge inwards. Args: margin (Spacing): Defines how many cells to shrink the Region by at each edge. Returns: Region: The new, smaller region.",
"func":1
},
{
"ref":"textual.geometry.Region.intersection",
"url":65,
"doc":"Get that covers both regions. Args: region (Region): A region that overlaps this region. Returns: Region: A new region that fits within  region .",
"func":1
},
{
"ref":"textual.geometry.Region.union",
"url":65,
"doc":"Get a new region that contains both regions. Args: region (Region): [description] Returns: Region: [description]",
"func":1
},
{
"ref":"textual.geometry.Region.split",
"url":65,
"doc":"Split a region in to 4 from given x and y offsets (cuts). cut_x \u2193 \u250c    \u2510\u250c \u2500\u2510 \u2502  \u2502 \u2502 0  1 \u2502 \u2502  \u2502 cut_y \u2192 \u2514    \u2518\u2514 \u2500\u2518 \u250c    \u2510\u250c \u2500\u2510 \u2502 2  3 \u2502 \u2514    \u2518\u2514 \u2500\u2518 Args: cut_x (int): Offset from self.x where the cut should be made. If negative, the cut is taken from the right edge. cut_y (int): Offset from self.y where the cut should be made. If negative, the cut is taken from the lower edge. Returns: tuple[Region, Region, Region, Region]: Four new regions which add up to the original (self).",
"func":1
},
{
"ref":"textual.geometry.Region.split_vertical",
"url":65,
"doc":"Split a region in to two, from a given x offset. cut \u2193 \u250c    \u2510\u250c \u2500\u2510 \u2502 0  1 \u2502 \u2502  \u2502 \u2514    \u2518\u2514 \u2500\u2518 Args: cut (int): An offset from self.x where the cut should be made. If cut is negative, it is taken from the right edge. Returns: tuple[Region, Region]: Two regions, which add up to the original (self).",
"func":1
},
{
"ref":"textual.geometry.Region.split_horizontal",
"url":65,
"doc":"Split a region in to two, from a given x offset. \u250c    \u2500\u2510 \u2502 0 \u2502 \u2502 \u2502 cut \u2192 \u2514    \u2500\u2518 \u250c    \u2500\u2510 \u2502 1 \u2502 \u2514    \u2500\u2518 Args: cut (int): An offset from self.x where the cut should be made. May be negative, for the offset to start from the right edge. Returns: tuple[Region, Region]: Two regions, which add up to the original (self).",
"func":1
},
{
"ref":"textual.geometry.Spacing",
"url":65,
"doc":"The spacing around a renderable."
},
{
"ref":"textual.geometry.Spacing.top",
"url":65,
"doc":"Alias for field number 0"
},
{
"ref":"textual.geometry.Spacing.right",
"url":65,
"doc":"Alias for field number 1"
},
{
"ref":"textual.geometry.Spacing.bottom",
"url":65,
"doc":"Alias for field number 2"
},
{
"ref":"textual.geometry.Spacing.left",
"url":65,
"doc":"Alias for field number 3"
},
{
"ref":"textual.geometry.Spacing.width",
"url":65,
"doc":"Total space in width."
},
{
"ref":"textual.geometry.Spacing.height",
"url":65,
"doc":"Total space in height."
},
{
"ref":"textual.geometry.Spacing.top_left",
"url":65,
"doc":"Top left space."
},
{
"ref":"textual.geometry.Spacing.bottom_right",
"url":65,
"doc":"Bottom right space."
},
{
"ref":"textual.geometry.Spacing.totals",
"url":65,
"doc":"Returns a tuple of ( ,  )."
},
{
"ref":"textual.geometry.Spacing.css",
"url":65,
"doc":"Gets a string containing the spacing in CSS format."
},
{
"ref":"textual.geometry.Spacing.unpack",
"url":65,
"doc":"Unpack padding specified in CSS style.",
"func":1
},
{
"ref":"textual.geometry.Spacing.vertical",
"url":65,
"doc":"Construct a Spacing with a given amount of spacing on vertical edges, and no horizontal spacing. Args: amount (int): The magnitude of spacing to apply to vertical edges Returns: Spacing:  Spacing(amount, 0, amount, 0) ",
"func":1
},
{
"ref":"textual.geometry.Spacing.horizontal",
"url":65,
"doc":"Construct a Spacing with a given amount of spacing on horizontal edges, and no vertical spacing. Args: amount (int): The magnitude of spacing to apply to horizontal edges Returns: Spacing:  Spacing(0, amount, 0, amount) ",
"func":1
},
{
"ref":"textual.geometry.Spacing.all",
"url":65,
"doc":"Construct a Spacing with a given amount of spacing on all edges. Args: amount (int): The magnitude of spacing to apply to all edges Returns: Spacing:  Spacing(amount, amount, amount, amount) ",
"func":1
},
{
"ref":"textual.features",
"url":66,
"doc":""
},
{
"ref":"textual.features.parse_features",
"url":66,
"doc":"Parse features env var Args: features (str): Comma seprated feature flags Returns: frozenset[FeatureFlag]: A frozen set of known features.",
"func":1
}
]