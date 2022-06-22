URLS=[
"textual/index.html",
"textual/scroll_view.html",
"textual/widget.html",
"textual/dom.html",
"textual/message_pump.html",
"textual/case.html",
"textual/message.html",
"textual/file_monitor.html",
"textual/scrollbar.html",
"textual/layout.html",
"textual/errors.html",
"textual/driver.html",
"textual/binding.html",
"textual/events.html",
"textual/devtools/index.html",
"textual/devtools/renderables.html",
"textual/box_model.html",
"textual/actions.html",
"textual/color.html",
"textual/geometry.html",
"textual/features.html",
"textual/renderables/index.html",
"textual/renderables/opacity.html",
"textual/renderables/tint.html",
"textual/renderables/underline_bar.html",
"textual/renderables/gradient.html",
"textual/renderables/blank.html",
"textual/renderables/sparkline.html",
"textual/reactive.html",
"textual/layouts/index.html",
"textual/layouts/horizontal.html",
"textual/layouts/vertical.html",
"textual/layouts/factory.html",
"textual/layouts/grid.html",
"textual/layouts/dock.html",
"textual/messages.html",
"textual/design.html",
"textual/drivers/index.html",
"textual/drivers/linux_driver.html",
"textual/cli/index.html",
"textual/keys.html",
"textual/css/index.html",
"textual/css/stylesheet.html",
"textual/css/scalar.html",
"textual/css/query.html",
"textual/css/styles.html",
"textual/css/tokenizer.html",
"textual/css/model.html",
"textual/css/scalar_animation.html",
"textual/css/errors.html",
"textual/css/transition.html",
"textual/css/tokenize.html",
"textual/css/parse.html",
"textual/css/match.html",
"textual/css/types.html",
"textual/css/constants.html",
"textual/screen.html",
"textual/suggestions.html",
"textual/draw.html"
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
"ref":"textual.scroll_view",
"url":1,
"doc":""
},
{
"ref":"textual.scroll_view.ScrollView",
"url":1,
"doc":"A base class for a Widget that handles it's own scrolling (i.e. doesn't rely on the compositor to render children)."
},
{
"ref":"textual.scroll_view.ScrollView.COMPONENT_CLASSES",
"url":1,
"doc":""
},
{
"ref":"textual.scroll_view.ScrollView.CSS",
"url":1,
"doc":""
},
{
"ref":"textual.scroll_view.ScrollView.is_scrollable",
"url":1,
"doc":"Always scrollable."
},
{
"ref":"textual.scroll_view.ScrollView.is_transparent",
"url":1,
"doc":"Not transparent, i.e. renders something."
},
{
"ref":"textual.scroll_view.ScrollView.on_mount",
"url":1,
"doc":"",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.get_content_width",
"url":1,
"doc":"Gets the width of the content area. Args: container (Size): Size of the container (immediate parent) widget. viewport (Size): Size of the viewport. Returns: int: The optimal width of the content.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.get_content_height",
"url":1,
"doc":"Gets the height (number of lines) in the content area. Args: container (Size): Size of the container (immediate parent) widget. viewport (Size): Size of the viewport. width (int): Width of renderable. Returns: int: The height of the content.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.size_updated",
"url":1,
"doc":"Called when size is updated. Args: size (Size): New size. virtual_size (Size): New virtual size. container_size (Size): New container size.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.render",
"url":1,
"doc":"Render the scrollable region (if  render_lines is not implemented). Returns: RenderableType: Renderable object.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.watch_scroll_x",
"url":1,
"doc":"Called when horizontal bar is scrolled.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.watch_scroll_y",
"url":1,
"doc":"Called when vertical bar is scrolled.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.can_focus",
"url":1,
"doc":""
},
{
"ref":"textual.scroll_view.ScrollView.can_focus_children",
"url":1,
"doc":""
},
{
"ref":"textual.scroll_view.ScrollView.virtual_size",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scroll_view.ScrollView.auto_width",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scroll_view.ScrollView.auto_height",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scroll_view.ScrollView.has_focus",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scroll_view.ScrollView.descendant_has_focus",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scroll_view.ScrollView.mouse_over",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scroll_view.ScrollView.scroll_x",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scroll_view.ScrollView.scroll_y",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scroll_view.ScrollView.scroll_target_x",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scroll_view.ScrollView.scroll_target_y",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scroll_view.ScrollView.show_vertical_scrollbar",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scroll_view.ScrollView.show_horizontal_scrollbar",
"url":2,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scroll_view.ScrollView.watch_show_horizontal_scrollbar",
"url":2,
"doc":"Watch function for show_horizontal_scrollbar attribute. Args: value (bool): Show horizontal scrollbar flag.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.watch_show_vertical_scrollbar",
"url":2,
"doc":"Watch function for show_vertical_scrollbar attribute. Args: value (bool): Show vertical scrollbar flag.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.compose",
"url":2,
"doc":"Yield child widgets for a container.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.on_register",
"url":2,
"doc":"Called when the instance is registered. Args: app (App): App instance.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.get_box_model",
"url":2,
"doc":"Process the box model for this widget. Args: container (Size): The size of the container widget (with a layout) viewport (Size): The viewport size. Returns: BoxModel: The size and margin for this widget.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.max_scroll_x",
"url":2,
"doc":"The maximum value of  scroll_x ."
},
{
"ref":"textual.scroll_view.ScrollView.max_scroll_y",
"url":2,
"doc":"The maximum value of  scroll_y ."
},
{
"ref":"textual.scroll_view.ScrollView.vertical_scrollbar",
"url":2,
"doc":"Get a vertical scrollbar (create if necessary) Returns: ScrollBar: ScrollBar Widget."
},
{
"ref":"textual.scroll_view.ScrollView.horizontal_scrollbar",
"url":2,
"doc":"Get a vertical scrollbar (create if necessary) Returns: ScrollBar: ScrollBar Widget."
},
{
"ref":"textual.scroll_view.ScrollView.scrollbars_enabled",
"url":2,
"doc":"A tuple of booleans that indicate if scrollbars are enabled. Returns: tuple[bool, bool]: A tuple of ( ,  )"
},
{
"ref":"textual.scroll_view.ScrollView.scrollbar_dimensions",
"url":2,
"doc":"Get the size of any scrollbars on the widget"
},
{
"ref":"textual.scroll_view.ScrollView.scrollbar_size_vertical",
"url":2,
"doc":"Get the width used by the  vertical scrollbar."
},
{
"ref":"textual.scroll_view.ScrollView.scrollbar_size_horizontal",
"url":2,
"doc":"Get the height used by the  horizontal scrollbar."
},
{
"ref":"textual.scroll_view.ScrollView.set_dirty",
"url":2,
"doc":"Set the Widget as 'dirty' (requiring re-render).",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.scroll_to",
"url":2,
"doc":"Scroll to a given (absolute) coordinate, optionally animating. Args: x (int | None, optional): X coordinate (column) to scroll to, or  None for no change. Defaults to None. y (int | None, optional): Y coordinate (row) to scroll to, or  None for no change. Defaults to None. animate (bool, optional): Animate to new scroll position. Defaults to False. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.scroll_relative",
"url":2,
"doc":"Scroll relative to current position. Args: x (int | None, optional): X distance (columns) to scroll, or  None for no change. Defaults to None. y (int | None, optional): Y distance (rows) to scroll, or  None for no change. Defaults to None. animate (bool, optional): Animate to new scroll position. Defaults to False. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.scroll_to_widget",
"url":2,
"doc":"Starting from  widget , travel up the DOM to this node, scrolling all containers such that every widget is visible within its parent container. This will, in the majority of cases, bring the target widget into Args: widget (Widget): A descendant widget. animate (bool, optional): True to animate, or False to jump. Defaults to True. Returns: bool: True if any scrolling has occurred in any descendant, otherwise False.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.get_pseudo_classes",
"url":2,
"doc":"Pseudo classes for a widget",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.render_styled",
"url":2,
"doc":"Applies style attributes to the default renderable. Returns: RenderableType: A new renderable.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.content_region",
"url":2,
"doc":"Gets an absolute region containing the content (minus padding and border)."
},
{
"ref":"textual.scroll_view.ScrollView.content_offset",
"url":2,
"doc":"An offset from the Widget origin where the content begins."
},
{
"ref":"textual.scroll_view.ScrollView.region",
"url":2,
"doc":"The region occupied by this widget, relative to the Screen."
},
{
"ref":"textual.scroll_view.ScrollView.console",
"url":2,
"doc":"Get the current console."
},
{
"ref":"textual.scroll_view.ScrollView.layout",
"url":2,
"doc":"Get the layout object if set in styles, or a default layout."
},
{
"ref":"textual.scroll_view.ScrollView.is_container",
"url":2,
"doc":"Check if this widget is a container (contains other widgets). Returns: bool: True if this widget is a container."
},
{
"ref":"textual.scroll_view.ScrollView.watch_mouse_over",
"url":2,
"doc":"Update from CSS if mouse over state changes.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.watch_has_focus",
"url":2,
"doc":"Update from CSS if has focus state changes.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.render_lines",
"url":2,
"doc":"Render the widget in to lines. Args: crop (Region): Region within visible area to. Returns: Lines: A list of list of segments",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.call_later",
"url":2,
"doc":"Run a callback after processing all messages and refreshing the screen. Args: callback (Callable): A callable.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.refresh",
"url":2,
"doc":"Initiate a refresh of the widget. This method sets an internal flag to perform a refresh, which will be done on the next idle event. Only one refresh will be done even if this method is called multiple times. Args: repaint (bool, optional): Repaint the widget (will call render() again). Defaults to True. layout (bool, optional): Also layout widgets in the view. Defaults to False.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.on_idle",
"url":2,
"doc":"Called when there are no more events on the queue. Args: event (events.Idle): Idle event.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.focus",
"url":2,
"doc":"Give input focus to this widget.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.capture_mouse",
"url":2,
"doc":"Capture (or release) the mouse. When captured, all mouse coordinates will go to this widget even when the pointer is not directly over the widget. Args: capture (bool, optional): True to capture or False to release. Defaults to True.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.release_mouse",
"url":2,
"doc":"Release the mouse. Mouse events will only be sent when the mouse is over the widget.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.css",
"url":3,
"doc":"Gets the CSS for this class and inherited from bases. Returns: list[tuple[str, str : a list of tuples containing (PATH, SOURCE) for this and inherited from base classes."
},
{
"ref":"textual.scroll_view.ScrollView.parent",
"url":3,
"doc":"Get the parent node. Returns: DOMNode | None: The node which is the direct parent of this node."
},
{
"ref":"textual.scroll_view.ScrollView.screen",
"url":3,
"doc":"Get the screen that this node is contained within. Note that this may not be the currently active screen within the app."
},
{
"ref":"textual.scroll_view.ScrollView.id",
"url":3,
"doc":"The ID of this node, or None if the node has no ID. Returns: (str | None): A Node ID or None."
},
{
"ref":"textual.scroll_view.ScrollView.css_identifier",
"url":3,
"doc":"A CSS selector that identifies this DOM node."
},
{
"ref":"textual.scroll_view.ScrollView.css_identifier_styled",
"url":3,
"doc":"A stylized CSS identifier."
},
{
"ref":"textual.scroll_view.ScrollView.pseudo_classes",
"url":3,
"doc":"Get a set of all pseudo classes"
},
{
"ref":"textual.scroll_view.ScrollView.css_path_nodes",
"url":3,
"doc":"A list of nodes from the root to this node, forming a \"path\". Returns: list[DOMNode]: List of Nodes, starting with the root and ending with this node."
},
{
"ref":"textual.scroll_view.ScrollView.display",
"url":3,
"doc":"Returns:  True if this DOMNode is displayed ( display != \"none\" ),  False otherwise."
},
{
"ref":"textual.scroll_view.ScrollView.tree",
"url":3,
"doc":"Get a Rich tree object which will recursively render the structure of the node tree. Returns: Tree: A Rich object which may be printed."
},
{
"ref":"textual.scroll_view.ScrollView.text_style",
"url":3,
"doc":"Get the text style object. A widget's style is influenced by its parent. For instance if a widgets background has an alpha, then its parent's background color will show through. Additionally, widgets will inherit their parent's text style (i.e. bold, italic etc). Returns: Style: Rich Style object."
},
{
"ref":"textual.scroll_view.ScrollView.rich_style",
"url":3,
"doc":"Get a Rich Style object for this DOMNode."
},
{
"ref":"textual.scroll_view.ScrollView.colors",
"url":3,
"doc":"Gets the Widgets foreground and background colors, and its parent's colors. Returns: tuple[tuple[Color, Color], tuple[Color, Color : Base colors and widget colors"
},
{
"ref":"textual.scroll_view.ScrollView.ancestors",
"url":3,
"doc":"Get a list of Nodes by tracing ancestors all the way back to App."
},
{
"ref":"textual.scroll_view.ScrollView.displayed_children",
"url":3,
"doc":"The children which don't have display: none set."
},
{
"ref":"textual.scroll_view.ScrollView.focusable_children",
"url":3,
"doc":"Get the children which may be focused."
},
{
"ref":"textual.scroll_view.ScrollView.reset_styles",
"url":3,
"doc":"Reset styles back to their initial state",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.add_child",
"url":3,
"doc":"Add a new child node. Args: node (DOMNode): A DOM node.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.add_children",
"url":3,
"doc":"Add multiple children to this node. Args:  nodes (DOMNode): Positional args should be new DOM nodes.  named_nodes (DOMNode): Keyword args will be assigned the argument name as an ID.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.walk_children",
"url":3,
"doc":"Generate all descendants of this node. Args: with_self (bool, optional): Also include self in the results. Defaults to True.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.get_child",
"url":3,
"doc":"Return the first child (immediate descendent) of this node with the given ID. Args: id (str): The ID of the child. Returns: DOMNode: The first child of this node with the ID. Raises: NoMatchingNodesError: if no children could be found for this ID",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.query",
"url":3,
"doc":"Get a DOM query. Args: selector (str, optional): A CSS selector or  None for all nodes. Defaults to None. Returns: DOMQuery: A query object.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.set_styles",
"url":3,
"doc":"Set custom styles on this object.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.has_class",
"url":3,
"doc":"Check if the Node has all the given class names. Args:  class_names (str): CSS class names to check. Returns: bool:  True if the node has all the given class names, otherwise  False .",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.add_class",
"url":3,
"doc":"Add class names to this Node. Args:  class_names (str): CSS class names to add.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.remove_class",
"url":3,
"doc":"Remove class names from this Node. Args:  class_names (str): CSS class names to remove.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.toggle_class",
"url":3,
"doc":"Toggle class names on this Node. Args:  class_names (str): CSS class names to toggle.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.has_pseudo_class",
"url":3,
"doc":"Check for pseudo class (such as hover, focus etc)",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.app",
"url":4,
"doc":"Get the current app. Raises: NoActiveAppError: if no active app could be found for the current asyncio context"
},
{
"ref":"textual.scroll_view.ScrollView.disable_messages",
"url":4,
"doc":"Disable message types from being processed.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.enable_messages",
"url":4,
"doc":"Enable processing of messages types.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.get_message",
"url":4,
"doc":"Get the next event on the queue, or None if queue is closed. Returns: Optional[Event]: Event object or None.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.peek_message",
"url":4,
"doc":"Peek the message at the head of the queue (does not remove it from the queue), or return None if the queue is empty. Returns: Optional[Message]: The message or None.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.close_messages_no_wait",
"url":4,
"doc":"Request the message queue to exit.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.close_messages",
"url":4,
"doc":"Close message queue, and optionally wait for queue to finish processing.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.check_idle",
"url":4,
"doc":"Prompt the message pump to call idle if the queue is empty.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.post_priority_message",
"url":4,
"doc":"Post a \"priority\" messages which will be processes prior to regular messages. Note that you should rarely need this in a regular app. It exists primarily to allow timer messages to skip the queue, so that they can be more regular. Args: message (Message): A message. Returns: bool: True if the messages was processed.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.dispatch_key",
"url":4,
"doc":"Dispatch a key event to method. This method will call the method named 'key_ ' if it exists. Args: event (events.Key): A key event.",
"func":1
},
{
"ref":"textual.case",
"url":5,
"doc":""
},
{
"ref":"textual.case.camel_to_snake",
"url":5,
"doc":"Convert name from CamelCase to snake_case. Args: name (str): A symbol name, such as a class name. Returns: str: Name in camel case.",
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
"ref":"textual.file_monitor",
"url":7,
"doc":""
},
{
"ref":"textual.file_monitor.FileMonitor",
"url":7,
"doc":""
},
{
"ref":"textual.file_monitor.FileMonitor.check",
"url":7,
"doc":"",
"func":1
},
{
"ref":"textual.file_monitor.FileMonitor.on_change",
"url":7,
"doc":"Called when file changes.",
"func":1
},
{
"ref":"textual.scrollbar",
"url":8,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollMessage",
"url":8,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.scrollbar.ScrollMessage.sender",
"url":8,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollMessage.bubble",
"url":8,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollMessage.verbosity",
"url":8,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollMessage.system",
"url":8,
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
"url":8,
"doc":"Message sent when clicking above handle. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.scrollbar.ScrollUp.sender",
"url":8,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollUp.bubble",
"url":8,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollUp.verbosity",
"url":8,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollUp.system",
"url":8,
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
"url":8,
"doc":"Message sent when clicking below handle. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.scrollbar.ScrollDown.sender",
"url":8,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollDown.bubble",
"url":8,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollDown.verbosity",
"url":8,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollDown.system",
"url":8,
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
"url":8,
"doc":"Message sent when clicking above handle. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.scrollbar.ScrollLeft.sender",
"url":8,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollLeft.bubble",
"url":8,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollLeft.verbosity",
"url":8,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollLeft.system",
"url":8,
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
"url":8,
"doc":"Message sent when clicking below handle. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.scrollbar.ScrollRight.sender",
"url":8,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollRight.bubble",
"url":8,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollRight.verbosity",
"url":8,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollRight.system",
"url":8,
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
"url":8,
"doc":"Message sent when click and dragging handle. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.scrollbar.ScrollTo.sender",
"url":8,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollTo.bubble",
"url":8,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollTo.verbosity",
"url":8,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollTo.system",
"url":8,
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
"url":8,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollBarRender.render_bar",
"url":8,
"doc":"",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar",
"url":8,
"doc":"A node in a hierarchy of things forming the UI. Nodes are mountable and may be styled with CSS."
},
{
"ref":"textual.scrollbar.ScrollBar.window_virtual_size",
"url":8,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scrollbar.ScrollBar.window_size",
"url":8,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scrollbar.ScrollBar.position",
"url":8,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scrollbar.ScrollBar.mouse_over",
"url":8,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scrollbar.ScrollBar.grabbed",
"url":8,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scrollbar.ScrollBar.render",
"url":8,
"doc":"Get renderable for widget. Args: style (Styles): The Styles object for this Widget. Returns: RenderableType: Any renderable",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.on_enter",
"url":8,
"doc":"",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.on_leave",
"url":8,
"doc":"",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.action_scroll_down",
"url":8,
"doc":"",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.action_scroll_up",
"url":8,
"doc":"",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.action_grab",
"url":8,
"doc":"",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.action_released",
"url":8,
"doc":"",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.on_mouse_up",
"url":8,
"doc":"",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.on_mouse_capture",
"url":8,
"doc":"",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.on_mouse_release",
"url":8,
"doc":"",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.on_mouse_move",
"url":8,
"doc":"",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.can_focus",
"url":8,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollBar.can_focus_children",
"url":8,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollBar.virtual_size",
"url":2,
"doc":"Reactive descriptor."
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
"ref":"textual.scrollbar.ScrollBar.watch_show_horizontal_scrollbar",
"url":2,
"doc":"Watch function for show_horizontal_scrollbar attribute. Args: value (bool): Show horizontal scrollbar flag.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.watch_show_vertical_scrollbar",
"url":2,
"doc":"Watch function for show_vertical_scrollbar attribute. Args: value (bool): Show vertical scrollbar flag.",
"func":1
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
"doc":"Gets the width of the content area. Args: container (Size): Size of the container (immediate parent) widget. viewport (Size): Size of the viewport. Returns: int: The optimal width of the content.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.get_content_height",
"url":2,
"doc":"Gets the height (number of lines) in the content area. Args: container (Size): Size of the container (immediate parent) widget. viewport (Size): Size of the viewport. width (int): Width of renderable. Returns: int: The height of the content.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.max_scroll_x",
"url":2,
"doc":"The maximum value of  scroll_x ."
},
{
"ref":"textual.scrollbar.ScrollBar.max_scroll_y",
"url":2,
"doc":"The maximum value of  scroll_y ."
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
"ref":"textual.scrollbar.ScrollBar.scrollbar_dimensions",
"url":2,
"doc":"Get the size of any scrollbars on the widget"
},
{
"ref":"textual.scrollbar.ScrollBar.scrollbar_size_vertical",
"url":2,
"doc":"Get the width used by the  vertical scrollbar."
},
{
"ref":"textual.scrollbar.ScrollBar.scrollbar_size_horizontal",
"url":2,
"doc":"Get the height used by the  horizontal scrollbar."
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
"doc":"Starting from  widget , travel up the DOM to this node, scrolling all containers such that every widget is visible within its parent container. This will, in the majority of cases, bring the target widget into Args: widget (Widget): A descendant widget. animate (bool, optional): True to animate, or False to jump. Defaults to True. Returns: bool: True if any scrolling has occurred in any descendant, otherwise False.",
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
"doc":"Gets an absolute region containing the content (minus padding and border)."
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
"ref":"textual.scrollbar.ScrollBar.layout",
"url":2,
"doc":"Get the layout object if set in styles, or a default layout."
},
{
"ref":"textual.scrollbar.ScrollBar.is_container",
"url":2,
"doc":"Check if this widget is a container (contains other widgets). Returns: bool: True if this widget is a container."
},
{
"ref":"textual.scrollbar.ScrollBar.is_scrollable",
"url":2,
"doc":"Check if this Widget may be scrolled. Returns: bool: True if this widget may be scrolled."
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
"ref":"textual.scrollbar.ScrollBar.render_lines",
"url":2,
"doc":"Render the widget in to lines. Args: crop (Region): Region within visible area to. Returns: Lines: A list of list of segments",
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
"ref":"textual.scrollbar.ScrollBar.css",
"url":3,
"doc":"Gets the CSS for this class and inherited from bases. Returns: list[tuple[str, str : a list of tuples containing (PATH, SOURCE) for this and inherited from base classes."
},
{
"ref":"textual.scrollbar.ScrollBar.parent",
"url":3,
"doc":"Get the parent node. Returns: DOMNode | None: The node which is the direct parent of this node."
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
"ref":"textual.scrollbar.ScrollBar.text_style",
"url":3,
"doc":"Get the text style object. A widget's style is influenced by its parent. For instance if a widgets background has an alpha, then its parent's background color will show through. Additionally, widgets will inherit their parent's text style (i.e. bold, italic etc). Returns: Style: Rich Style object."
},
{
"ref":"textual.scrollbar.ScrollBar.rich_style",
"url":3,
"doc":"Get a Rich Style object for this DOMNode."
},
{
"ref":"textual.scrollbar.ScrollBar.colors",
"url":3,
"doc":"Gets the Widgets foreground and background colors, and its parent's colors. Returns: tuple[tuple[Color, Color], tuple[Color, Color : Base colors and widget colors"
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
"ref":"textual.scrollbar.ScrollBar.reset_styles",
"url":3,
"doc":"Reset styles back to their initial state",
"func":1
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
"doc":"Generate all descendants of this node. Args: with_self (bool, optional): Also include self in the results. Defaults to True.",
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
"doc":"Get the current app. Raises: NoActiveAppError: if no active app could be found for the current asyncio context"
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
"ref":"textual.layout",
"url":9,
"doc":""
},
{
"ref":"textual.layout.Vertical",
"url":9,
"doc":"A container widget to align children vertically."
},
{
"ref":"textual.layout.Vertical.COMPONENT_CLASSES",
"url":9,
"doc":""
},
{
"ref":"textual.layout.Vertical.CSS",
"url":9,
"doc":""
},
{
"ref":"textual.layout.Vertical.can_focus",
"url":9,
"doc":""
},
{
"ref":"textual.layout.Vertical.can_focus_children",
"url":9,
"doc":""
},
{
"ref":"textual.layout.Vertical.virtual_size",
"url":2,
"doc":"Reactive descriptor."
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
"ref":"textual.layout.Vertical.watch_show_horizontal_scrollbar",
"url":2,
"doc":"Watch function for show_horizontal_scrollbar attribute. Args: value (bool): Show horizontal scrollbar flag.",
"func":1
},
{
"ref":"textual.layout.Vertical.watch_show_vertical_scrollbar",
"url":2,
"doc":"Watch function for show_vertical_scrollbar attribute. Args: value (bool): Show vertical scrollbar flag.",
"func":1
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
"doc":"Gets the width of the content area. Args: container (Size): Size of the container (immediate parent) widget. viewport (Size): Size of the viewport. Returns: int: The optimal width of the content.",
"func":1
},
{
"ref":"textual.layout.Vertical.get_content_height",
"url":2,
"doc":"Gets the height (number of lines) in the content area. Args: container (Size): Size of the container (immediate parent) widget. viewport (Size): Size of the viewport. width (int): Width of renderable. Returns: int: The height of the content.",
"func":1
},
{
"ref":"textual.layout.Vertical.max_scroll_x",
"url":2,
"doc":"The maximum value of  scroll_x ."
},
{
"ref":"textual.layout.Vertical.max_scroll_y",
"url":2,
"doc":"The maximum value of  scroll_y ."
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
"ref":"textual.layout.Vertical.scrollbar_dimensions",
"url":2,
"doc":"Get the size of any scrollbars on the widget"
},
{
"ref":"textual.layout.Vertical.scrollbar_size_vertical",
"url":2,
"doc":"Get the width used by the  vertical scrollbar."
},
{
"ref":"textual.layout.Vertical.scrollbar_size_horizontal",
"url":2,
"doc":"Get the height used by the  horizontal scrollbar."
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
"doc":"Starting from  widget , travel up the DOM to this node, scrolling all containers such that every widget is visible within its parent container. This will, in the majority of cases, bring the target widget into Args: widget (Widget): A descendant widget. animate (bool, optional): True to animate, or False to jump. Defaults to True. Returns: bool: True if any scrolling has occurred in any descendant, otherwise False.",
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
"doc":"Gets an absolute region containing the content (minus padding and border)."
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
"ref":"textual.layout.Vertical.layout",
"url":2,
"doc":"Get the layout object if set in styles, or a default layout."
},
{
"ref":"textual.layout.Vertical.is_container",
"url":2,
"doc":"Check if this widget is a container (contains other widgets). Returns: bool: True if this widget is a container."
},
{
"ref":"textual.layout.Vertical.is_scrollable",
"url":2,
"doc":"Check if this Widget may be scrolled. Returns: bool: True if this widget may be scrolled."
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
"ref":"textual.layout.Vertical.render_lines",
"url":2,
"doc":"Render the widget in to lines. Args: crop (Region): Region within visible area to. Returns: Lines: A list of list of segments",
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
"ref":"textual.layout.Vertical.css",
"url":3,
"doc":"Gets the CSS for this class and inherited from bases. Returns: list[tuple[str, str : a list of tuples containing (PATH, SOURCE) for this and inherited from base classes."
},
{
"ref":"textual.layout.Vertical.parent",
"url":3,
"doc":"Get the parent node. Returns: DOMNode | None: The node which is the direct parent of this node."
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
"ref":"textual.layout.Vertical.text_style",
"url":3,
"doc":"Get the text style object. A widget's style is influenced by its parent. For instance if a widgets background has an alpha, then its parent's background color will show through. Additionally, widgets will inherit their parent's text style (i.e. bold, italic etc). Returns: Style: Rich Style object."
},
{
"ref":"textual.layout.Vertical.rich_style",
"url":3,
"doc":"Get a Rich Style object for this DOMNode."
},
{
"ref":"textual.layout.Vertical.colors",
"url":3,
"doc":"Gets the Widgets foreground and background colors, and its parent's colors. Returns: tuple[tuple[Color, Color], tuple[Color, Color : Base colors and widget colors"
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
"ref":"textual.layout.Vertical.reset_styles",
"url":3,
"doc":"Reset styles back to their initial state",
"func":1
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
"doc":"Generate all descendants of this node. Args: with_self (bool, optional): Also include self in the results. Defaults to True.",
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
"doc":"Get the current app. Raises: NoActiveAppError: if no active app could be found for the current asyncio context"
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
"url":9,
"doc":"A container widget to align children horizontally."
},
{
"ref":"textual.layout.Horizontal.COMPONENT_CLASSES",
"url":9,
"doc":""
},
{
"ref":"textual.layout.Horizontal.CSS",
"url":9,
"doc":""
},
{
"ref":"textual.layout.Horizontal.can_focus",
"url":9,
"doc":""
},
{
"ref":"textual.layout.Horizontal.can_focus_children",
"url":9,
"doc":""
},
{
"ref":"textual.layout.Horizontal.virtual_size",
"url":2,
"doc":"Reactive descriptor."
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
"ref":"textual.layout.Horizontal.watch_show_horizontal_scrollbar",
"url":2,
"doc":"Watch function for show_horizontal_scrollbar attribute. Args: value (bool): Show horizontal scrollbar flag.",
"func":1
},
{
"ref":"textual.layout.Horizontal.watch_show_vertical_scrollbar",
"url":2,
"doc":"Watch function for show_vertical_scrollbar attribute. Args: value (bool): Show vertical scrollbar flag.",
"func":1
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
"doc":"Gets the width of the content area. Args: container (Size): Size of the container (immediate parent) widget. viewport (Size): Size of the viewport. Returns: int: The optimal width of the content.",
"func":1
},
{
"ref":"textual.layout.Horizontal.get_content_height",
"url":2,
"doc":"Gets the height (number of lines) in the content area. Args: container (Size): Size of the container (immediate parent) widget. viewport (Size): Size of the viewport. width (int): Width of renderable. Returns: int: The height of the content.",
"func":1
},
{
"ref":"textual.layout.Horizontal.max_scroll_x",
"url":2,
"doc":"The maximum value of  scroll_x ."
},
{
"ref":"textual.layout.Horizontal.max_scroll_y",
"url":2,
"doc":"The maximum value of  scroll_y ."
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
"ref":"textual.layout.Horizontal.scrollbar_dimensions",
"url":2,
"doc":"Get the size of any scrollbars on the widget"
},
{
"ref":"textual.layout.Horizontal.scrollbar_size_vertical",
"url":2,
"doc":"Get the width used by the  vertical scrollbar."
},
{
"ref":"textual.layout.Horizontal.scrollbar_size_horizontal",
"url":2,
"doc":"Get the height used by the  horizontal scrollbar."
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
"doc":"Starting from  widget , travel up the DOM to this node, scrolling all containers such that every widget is visible within its parent container. This will, in the majority of cases, bring the target widget into Args: widget (Widget): A descendant widget. animate (bool, optional): True to animate, or False to jump. Defaults to True. Returns: bool: True if any scrolling has occurred in any descendant, otherwise False.",
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
"doc":"Gets an absolute region containing the content (minus padding and border)."
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
"ref":"textual.layout.Horizontal.layout",
"url":2,
"doc":"Get the layout object if set in styles, or a default layout."
},
{
"ref":"textual.layout.Horizontal.is_container",
"url":2,
"doc":"Check if this widget is a container (contains other widgets). Returns: bool: True if this widget is a container."
},
{
"ref":"textual.layout.Horizontal.is_scrollable",
"url":2,
"doc":"Check if this Widget may be scrolled. Returns: bool: True if this widget may be scrolled."
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
"ref":"textual.layout.Horizontal.render_lines",
"url":2,
"doc":"Render the widget in to lines. Args: crop (Region): Region within visible area to. Returns: Lines: A list of list of segments",
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
"ref":"textual.layout.Horizontal.css",
"url":3,
"doc":"Gets the CSS for this class and inherited from bases. Returns: list[tuple[str, str : a list of tuples containing (PATH, SOURCE) for this and inherited from base classes."
},
{
"ref":"textual.layout.Horizontal.parent",
"url":3,
"doc":"Get the parent node. Returns: DOMNode | None: The node which is the direct parent of this node."
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
"ref":"textual.layout.Horizontal.text_style",
"url":3,
"doc":"Get the text style object. A widget's style is influenced by its parent. For instance if a widgets background has an alpha, then its parent's background color will show through. Additionally, widgets will inherit their parent's text style (i.e. bold, italic etc). Returns: Style: Rich Style object."
},
{
"ref":"textual.layout.Horizontal.rich_style",
"url":3,
"doc":"Get a Rich Style object for this DOMNode."
},
{
"ref":"textual.layout.Horizontal.colors",
"url":3,
"doc":"Gets the Widgets foreground and background colors, and its parent's colors. Returns: tuple[tuple[Color, Color], tuple[Color, Color : Base colors and widget colors"
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
"ref":"textual.layout.Horizontal.reset_styles",
"url":3,
"doc":"Reset styles back to their initial state",
"func":1
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
"doc":"Generate all descendants of this node. Args: with_self (bool, optional): Also include self in the results. Defaults to True.",
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
"doc":"Get the current app. Raises: NoActiveAppError: if no active app could be found for the current asyncio context"
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
"ref":"textual.widget",
"url":2,
"doc":""
},
{
"ref":"textual.widget.RenderCache",
"url":2,
"doc":"Stores results of a previous render."
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
"ref":"textual.widget.Widget.CSS",
"url":2,
"doc":""
},
{
"ref":"textual.widget.Widget.COMPONENT_CLASSES",
"url":2,
"doc":""
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
"ref":"textual.widget.Widget.virtual_size",
"url":2,
"doc":"Reactive descriptor."
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
"ref":"textual.widget.Widget.watch_show_horizontal_scrollbar",
"url":2,
"doc":"Watch function for show_horizontal_scrollbar attribute. Args: value (bool): Show horizontal scrollbar flag.",
"func":1
},
{
"ref":"textual.widget.Widget.watch_show_vertical_scrollbar",
"url":2,
"doc":"Watch function for show_vertical_scrollbar attribute. Args: value (bool): Show vertical scrollbar flag.",
"func":1
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
"doc":"Gets the width of the content area. Args: container (Size): Size of the container (immediate parent) widget. viewport (Size): Size of the viewport. Returns: int: The optimal width of the content.",
"func":1
},
{
"ref":"textual.widget.Widget.get_content_height",
"url":2,
"doc":"Gets the height (number of lines) in the content area. Args: container (Size): Size of the container (immediate parent) widget. viewport (Size): Size of the viewport. width (int): Width of renderable. Returns: int: The height of the content.",
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
"doc":"The maximum value of  scroll_x ."
},
{
"ref":"textual.widget.Widget.max_scroll_y",
"url":2,
"doc":"The maximum value of  scroll_y ."
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
"ref":"textual.widget.Widget.scrollbar_dimensions",
"url":2,
"doc":"Get the size of any scrollbars on the widget"
},
{
"ref":"textual.widget.Widget.scrollbar_size_vertical",
"url":2,
"doc":"Get the width used by the  vertical scrollbar."
},
{
"ref":"textual.widget.Widget.scrollbar_size_horizontal",
"url":2,
"doc":"Get the height used by the  horizontal scrollbar."
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
"doc":"Starting from  widget , travel up the DOM to this node, scrolling all containers such that every widget is visible within its parent container. This will, in the majority of cases, bring the target widget into Args: widget (Widget): A descendant widget. animate (bool, optional): True to animate, or False to jump. Defaults to True. Returns: bool: True if any scrolling has occurred in any descendant, otherwise False.",
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
"doc":"Gets an absolute region containing the content (minus padding and border)."
},
{
"ref":"textual.widget.Widget.content_offset",
"url":2,
"doc":"An offset from the Widget origin where the content begins."
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
"doc":"Get the layout object if set in styles, or a default layout."
},
{
"ref":"textual.widget.Widget.is_container",
"url":2,
"doc":"Check if this widget is a container (contains other widgets). Returns: bool: True if this widget is a container."
},
{
"ref":"textual.widget.Widget.is_scrollable",
"url":2,
"doc":"Check if this Widget may be scrolled. Returns: bool: True if this widget may be scrolled."
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
"ref":"textual.widget.Widget.size_updated",
"url":2,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.render_lines",
"url":2,
"doc":"Render the widget in to lines. Args: crop (Region): Region within visible area to. Returns: Lines: A list of list of segments",
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
"ref":"textual.widget.Widget.css",
"url":3,
"doc":"Gets the CSS for this class and inherited from bases. Returns: list[tuple[str, str : a list of tuples containing (PATH, SOURCE) for this and inherited from base classes."
},
{
"ref":"textual.widget.Widget.parent",
"url":3,
"doc":"Get the parent node. Returns: DOMNode | None: The node which is the direct parent of this node."
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
"ref":"textual.widget.Widget.text_style",
"url":3,
"doc":"Get the text style object. A widget's style is influenced by its parent. For instance if a widgets background has an alpha, then its parent's background color will show through. Additionally, widgets will inherit their parent's text style (i.e. bold, italic etc). Returns: Style: Rich Style object."
},
{
"ref":"textual.widget.Widget.rich_style",
"url":3,
"doc":"Get a Rich Style object for this DOMNode."
},
{
"ref":"textual.widget.Widget.colors",
"url":3,
"doc":"Gets the Widgets foreground and background colors, and its parent's colors. Returns: tuple[tuple[Color, Color], tuple[Color, Color : Base colors and widget colors"
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
"ref":"textual.widget.Widget.reset_styles",
"url":3,
"doc":"Reset styles back to their initial state",
"func":1
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
"doc":"Generate all descendants of this node. Args: with_self (bool, optional): Also include self in the results. Defaults to True.",
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
"doc":"Get the current app. Raises: NoActiveAppError: if no active app could be found for the current asyncio context"
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
"ref":"textual.errors",
"url":10,
"doc":""
},
{
"ref":"textual.errors.TextualError",
"url":10,
"doc":"Base class for Textual errors."
},
{
"ref":"textual.errors.NoWidget",
"url":10,
"doc":"Specified widget was not found."
},
{
"ref":"textual.driver",
"url":11,
"doc":""
},
{
"ref":"textual.driver.Driver",
"url":11,
"doc":"Helper class that provides a standard way to create an ABC using inheritance."
},
{
"ref":"textual.driver.Driver.send_event",
"url":11,
"doc":"",
"func":1
},
{
"ref":"textual.driver.Driver.process_event",
"url":11,
"doc":"Performs some additional processing of events.",
"func":1
},
{
"ref":"textual.driver.Driver.enable_bracketed_paste",
"url":11,
"doc":"Write the ANSI escape code  ESC[?2004h , which enables bracketed paste mode.",
"func":1
},
{
"ref":"textual.driver.Driver.disable_bracketed_paste",
"url":11,
"doc":"Write the ANSI escape code  ESC[?2004l , which disables bracketed paste mode.",
"func":1
},
{
"ref":"textual.driver.Driver.start_application_mode",
"url":11,
"doc":"",
"func":1
},
{
"ref":"textual.driver.Driver.disable_input",
"url":11,
"doc":"",
"func":1
},
{
"ref":"textual.driver.Driver.stop_application_mode",
"url":11,
"doc":"",
"func":1
},
{
"ref":"textual.binding",
"url":12,
"doc":""
},
{
"ref":"textual.binding.NoBinding",
"url":12,
"doc":"A binding was not found."
},
{
"ref":"textual.binding.Binding",
"url":12,
"doc":"Binding(key: 'str', action: 'str', description: 'str', show: 'bool' = False, key_display: 'str | None' = None, allow_forward: 'bool' = True)"
},
{
"ref":"textual.binding.Binding.key",
"url":12,
"doc":""
},
{
"ref":"textual.binding.Binding.action",
"url":12,
"doc":""
},
{
"ref":"textual.binding.Binding.description",
"url":12,
"doc":""
},
{
"ref":"textual.binding.Binding.show",
"url":12,
"doc":""
},
{
"ref":"textual.binding.Binding.key_display",
"url":12,
"doc":""
},
{
"ref":"textual.binding.Binding.allow_forward",
"url":12,
"doc":""
},
{
"ref":"textual.binding.Bindings",
"url":12,
"doc":"Manage a set of bindings."
},
{
"ref":"textual.binding.Bindings.shown_keys",
"url":12,
"doc":""
},
{
"ref":"textual.binding.Bindings.bind",
"url":12,
"doc":"",
"func":1
},
{
"ref":"textual.binding.Bindings.get_key",
"url":12,
"doc":"",
"func":1
},
{
"ref":"textual.binding.Bindings.allow_forward",
"url":12,
"doc":"",
"func":1
},
{
"ref":"textual.binding.BindingStack",
"url":12,
"doc":"Manage a stack of bindings."
},
{
"ref":"textual.binding.BindingStack.push",
"url":12,
"doc":"",
"func":1
},
{
"ref":"textual.binding.BindingStack.pop",
"url":12,
"doc":"",
"func":1
},
{
"ref":"textual.binding.BindingStack.get_key",
"url":12,
"doc":"",
"func":1
},
{
"ref":"textual.events",
"url":13,
"doc":""
},
{
"ref":"textual.events.Event",
"url":13,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Event.sender",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Event.bubble",
"url":13,
"doc":""
},
{
"ref":"textual.events.Event.verbosity",
"url":13,
"doc":""
},
{
"ref":"textual.events.Event.system",
"url":13,
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
"url":13,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Null.sender",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Null.can_replace",
"url":13,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Null.bubble",
"url":13,
"doc":""
},
{
"ref":"textual.events.Null.verbosity",
"url":13,
"doc":""
},
{
"ref":"textual.events.Null.system",
"url":13,
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
"url":13,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Callback.sender",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Callback.bubble",
"url":13,
"doc":""
},
{
"ref":"textual.events.Callback.verbosity",
"url":13,
"doc":""
},
{
"ref":"textual.events.Callback.system",
"url":13,
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
"url":13,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.ShutdownRequest.sender",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.ShutdownRequest.bubble",
"url":13,
"doc":""
},
{
"ref":"textual.events.ShutdownRequest.verbosity",
"url":13,
"doc":""
},
{
"ref":"textual.events.ShutdownRequest.system",
"url":13,
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
"url":13,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Shutdown.sender",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Shutdown.bubble",
"url":13,
"doc":""
},
{
"ref":"textual.events.Shutdown.verbosity",
"url":13,
"doc":""
},
{
"ref":"textual.events.Shutdown.system",
"url":13,
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
"url":13,
"doc":"Sent when the App is running but  before the terminal is in application mode. Use this event to run any set up that doesn't require any visuals such as loading configuration and binding keys. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Load.sender",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Load.bubble",
"url":13,
"doc":""
},
{
"ref":"textual.events.Load.verbosity",
"url":13,
"doc":""
},
{
"ref":"textual.events.Load.system",
"url":13,
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
"url":13,
"doc":"Sent when there are no more items in the message queue. This is a pseudo-event in that it is created by the Textual system and doesn't go through the usual message queue. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Idle.sender",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Idle.bubble",
"url":13,
"doc":""
},
{
"ref":"textual.events.Idle.verbosity",
"url":13,
"doc":""
},
{
"ref":"textual.events.Idle.system",
"url":13,
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
"url":13,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Action.sender",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Action.action",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Action.bubble",
"url":13,
"doc":""
},
{
"ref":"textual.events.Action.verbosity",
"url":13,
"doc":""
},
{
"ref":"textual.events.Action.system",
"url":13,
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
"url":13,
"doc":"Sent when the app or widget has been resized. Args: sender (MessageTarget): The sender of the event (the Screen). size (Size): The new size of the Widget. virtual_size (Size): The virtual size (scrollable size) of the Widget. container_size (Size | None, optional): The size of the Widget's container widget. Defaults to None."
},
{
"ref":"textual.events.Resize.can_replace",
"url":13,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Resize.size",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Resize.bubble",
"url":13,
"doc":""
},
{
"ref":"textual.events.Resize.verbosity",
"url":13,
"doc":""
},
{
"ref":"textual.events.Resize.system",
"url":13,
"doc":""
},
{
"ref":"textual.events.Resize.sender",
"url":13,
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
"url":13,
"doc":"Sent when a widget is  mounted and may receive messages. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Mount.sender",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Mount.bubble",
"url":13,
"doc":""
},
{
"ref":"textual.events.Mount.verbosity",
"url":13,
"doc":""
},
{
"ref":"textual.events.Mount.system",
"url":13,
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
"url":13,
"doc":"Sent when a widget is unmounted, and may no longer receive messages. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Unmount.sender",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Unmount.bubble",
"url":13,
"doc":""
},
{
"ref":"textual.events.Unmount.verbosity",
"url":13,
"doc":""
},
{
"ref":"textual.events.Unmount.system",
"url":13,
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
"url":13,
"doc":"Sent when a widget has become visible. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Show.sender",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Show.bubble",
"url":13,
"doc":""
},
{
"ref":"textual.events.Show.verbosity",
"url":13,
"doc":""
},
{
"ref":"textual.events.Show.system",
"url":13,
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
"url":13,
"doc":"Sent when a widget has been hidden. A widget may be hidden by setting its  visible flag to  False , if it is no longer in a layout, or if it has been offset beyond the edges of the terminal. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Hide.sender",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Hide.bubble",
"url":13,
"doc":""
},
{
"ref":"textual.events.Hide.verbosity",
"url":13,
"doc":""
},
{
"ref":"textual.events.Hide.system",
"url":13,
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
"url":13,
"doc":"Sent when the mouse has been captured. When a mouse has been captures, all further mouse events will be sent to the capturing widget. Args: sender (MessageTarget): The sender of the event, (in this case the app). mouse_position (Point): The position of the mouse when captured."
},
{
"ref":"textual.events.MouseCapture.sender",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseCapture.bubble",
"url":13,
"doc":""
},
{
"ref":"textual.events.MouseCapture.verbosity",
"url":13,
"doc":""
},
{
"ref":"textual.events.MouseCapture.system",
"url":13,
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
"url":13,
"doc":"Mouse has been released. Args: sender (MessageTarget): The sender of the event, (in this case the app). mouse_position (Point): The position of the mouse when released."
},
{
"ref":"textual.events.MouseRelease.sender",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseRelease.bubble",
"url":13,
"doc":""
},
{
"ref":"textual.events.MouseRelease.verbosity",
"url":13,
"doc":""
},
{
"ref":"textual.events.MouseRelease.system",
"url":13,
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
"url":13,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.InputEvent.sender",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.InputEvent.bubble",
"url":13,
"doc":""
},
{
"ref":"textual.events.InputEvent.verbosity",
"url":13,
"doc":""
},
{
"ref":"textual.events.InputEvent.system",
"url":13,
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
"url":13,
"doc":"Sent when the user hits a key on the keyboard Args: sender (MessageTarget): The sender of the event (the App) key (str): The pressed key if a single character (or a longer string for special characters)"
},
{
"ref":"textual.events.Key.sender",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Key.is_printable",
"url":13,
"doc":"Return True if the key is printable. Currently, we assume any key event that isn't defined in key bindings is printable. Returns: bool: True if the key is printable. False otherwise."
},
{
"ref":"textual.events.Key.key",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Key.bubble",
"url":13,
"doc":""
},
{
"ref":"textual.events.Key.verbosity",
"url":13,
"doc":""
},
{
"ref":"textual.events.Key.system",
"url":13,
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
"url":13,
"doc":"Sent in response to a mouse event Args: sender (MessageTarget): The sender of the event. x (int): The relative x coordinate. y (int): The relative y coordinate. delta_x (int): Change in x since the last message. delta_y (int): Change in y since the last message. button (int): Indexed of the pressed button. shift (bool): True if the shift key is pressed. meta (bool): True if the meta key is pressed. ctrl (bool): True if the ctrl key is pressed. screen_x (int, optional): The absolute x coordinate. screen_y (int, optional): The absolute y coordinate. style (Style, optional): The Rich Style under the mouse cursor."
},
{
"ref":"textual.events.MouseEvent.sender",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent.from_event",
"url":13,
"doc":"",
"func":1
},
{
"ref":"textual.events.MouseEvent.style",
"url":13,
"doc":""
},
{
"ref":"textual.events.MouseEvent.offset",
"url":13,
"doc":"",
"func":1
},
{
"ref":"textual.events.MouseEvent.button",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent.ctrl",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent.delta_x",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent.delta_y",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent.meta",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent.screen_x",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent.screen_y",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent.shift",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent.x",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent.y",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent.bubble",
"url":13,
"doc":""
},
{
"ref":"textual.events.MouseEvent.verbosity",
"url":13,
"doc":""
},
{
"ref":"textual.events.MouseEvent.system",
"url":13,
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
"url":13,
"doc":"Sent when the mouse cursor moves. Args: sender (MessageTarget): The sender of the event. x (int): The relative x coordinate. y (int): The relative y coordinate. delta_x (int): Change in x since the last message. delta_y (int): Change in y since the last message. button (int): Indexed of the pressed button. shift (bool): True if the shift key is pressed. meta (bool): True if the meta key is pressed. ctrl (bool): True if the ctrl key is pressed. screen_x (int, optional): The absolute x coordinate. screen_y (int, optional): The absolute y coordinate. style (Style, optional): The Rich Style under the mouse cursor."
},
{
"ref":"textual.events.MouseMove.sender",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove.bubble",
"url":13,
"doc":""
},
{
"ref":"textual.events.MouseMove.verbosity",
"url":13,
"doc":""
},
{
"ref":"textual.events.MouseMove.system",
"url":13,
"doc":""
},
{
"ref":"textual.events.MouseMove.button",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove.ctrl",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove.delta_x",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove.delta_y",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove.meta",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove.screen_x",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove.screen_y",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove.shift",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove.x",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove.y",
"url":13,
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
"url":13,
"doc":"Sent in response to a mouse event Args: sender (MessageTarget): The sender of the event. x (int): The relative x coordinate. y (int): The relative y coordinate. delta_x (int): Change in x since the last message. delta_y (int): Change in y since the last message. button (int): Indexed of the pressed button. shift (bool): True if the shift key is pressed. meta (bool): True if the meta key is pressed. ctrl (bool): True if the ctrl key is pressed. screen_x (int, optional): The absolute x coordinate. screen_y (int, optional): The absolute y coordinate. style (Style, optional): The Rich Style under the mouse cursor."
},
{
"ref":"textual.events.MouseDown.sender",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown.bubble",
"url":13,
"doc":""
},
{
"ref":"textual.events.MouseDown.verbosity",
"url":13,
"doc":""
},
{
"ref":"textual.events.MouseDown.system",
"url":13,
"doc":""
},
{
"ref":"textual.events.MouseDown.button",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown.ctrl",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown.delta_x",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown.delta_y",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown.meta",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown.screen_x",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown.screen_y",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown.shift",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown.x",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown.y",
"url":13,
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
"url":13,
"doc":"Sent in response to a mouse event Args: sender (MessageTarget): The sender of the event. x (int): The relative x coordinate. y (int): The relative y coordinate. delta_x (int): Change in x since the last message. delta_y (int): Change in y since the last message. button (int): Indexed of the pressed button. shift (bool): True if the shift key is pressed. meta (bool): True if the meta key is pressed. ctrl (bool): True if the ctrl key is pressed. screen_x (int, optional): The absolute x coordinate. screen_y (int, optional): The absolute y coordinate. style (Style, optional): The Rich Style under the mouse cursor."
},
{
"ref":"textual.events.MouseUp.sender",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp.bubble",
"url":13,
"doc":""
},
{
"ref":"textual.events.MouseUp.verbosity",
"url":13,
"doc":""
},
{
"ref":"textual.events.MouseUp.system",
"url":13,
"doc":""
},
{
"ref":"textual.events.MouseUp.button",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp.ctrl",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp.delta_x",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp.delta_y",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp.meta",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp.screen_x",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp.screen_y",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp.shift",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp.x",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp.y",
"url":13,
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
"url":13,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.MouseScrollDown.sender",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseScrollDown.x",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseScrollDown.y",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseScrollDown.bubble",
"url":13,
"doc":""
},
{
"ref":"textual.events.MouseScrollDown.verbosity",
"url":13,
"doc":""
},
{
"ref":"textual.events.MouseScrollDown.system",
"url":13,
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
"url":13,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.MouseScrollUp.sender",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseScrollUp.bubble",
"url":13,
"doc":""
},
{
"ref":"textual.events.MouseScrollUp.verbosity",
"url":13,
"doc":""
},
{
"ref":"textual.events.MouseScrollUp.system",
"url":13,
"doc":""
},
{
"ref":"textual.events.MouseScrollUp.x",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseScrollUp.y",
"url":13,
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
"url":13,
"doc":"Sent in response to a mouse event Args: sender (MessageTarget): The sender of the event. x (int): The relative x coordinate. y (int): The relative y coordinate. delta_x (int): Change in x since the last message. delta_y (int): Change in y since the last message. button (int): Indexed of the pressed button. shift (bool): True if the shift key is pressed. meta (bool): True if the meta key is pressed. ctrl (bool): True if the ctrl key is pressed. screen_x (int, optional): The absolute x coordinate. screen_y (int, optional): The absolute y coordinate. style (Style, optional): The Rich Style under the mouse cursor."
},
{
"ref":"textual.events.Click.sender",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click.bubble",
"url":13,
"doc":""
},
{
"ref":"textual.events.Click.verbosity",
"url":13,
"doc":""
},
{
"ref":"textual.events.Click.system",
"url":13,
"doc":""
},
{
"ref":"textual.events.Click.button",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click.ctrl",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click.delta_x",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click.delta_y",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click.meta",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click.screen_x",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click.screen_y",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click.shift",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click.x",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click.y",
"url":13,
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
"url":13,
"doc":"Sent in response to a mouse event Args: sender (MessageTarget): The sender of the event. x (int): The relative x coordinate. y (int): The relative y coordinate. delta_x (int): Change in x since the last message. delta_y (int): Change in y since the last message. button (int): Indexed of the pressed button. shift (bool): True if the shift key is pressed. meta (bool): True if the meta key is pressed. ctrl (bool): True if the ctrl key is pressed. screen_x (int, optional): The absolute x coordinate. screen_y (int, optional): The absolute y coordinate. style (Style, optional): The Rich Style under the mouse cursor."
},
{
"ref":"textual.events.DoubleClick.sender",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DoubleClick.bubble",
"url":13,
"doc":""
},
{
"ref":"textual.events.DoubleClick.verbosity",
"url":13,
"doc":""
},
{
"ref":"textual.events.DoubleClick.system",
"url":13,
"doc":""
},
{
"ref":"textual.events.DoubleClick.button",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DoubleClick.ctrl",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DoubleClick.delta_x",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DoubleClick.delta_y",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DoubleClick.meta",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DoubleClick.screen_x",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DoubleClick.screen_y",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DoubleClick.shift",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DoubleClick.x",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DoubleClick.y",
"url":13,
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
"url":13,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Timer.sender",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Timer.callback",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Timer.count",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Timer.time",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Timer.bubble",
"url":13,
"doc":""
},
{
"ref":"textual.events.Timer.verbosity",
"url":13,
"doc":""
},
{
"ref":"textual.events.Timer.system",
"url":13,
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
"url":13,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Enter.sender",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Enter.bubble",
"url":13,
"doc":""
},
{
"ref":"textual.events.Enter.verbosity",
"url":13,
"doc":""
},
{
"ref":"textual.events.Enter.system",
"url":13,
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
"url":13,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Leave.sender",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Leave.bubble",
"url":13,
"doc":""
},
{
"ref":"textual.events.Leave.verbosity",
"url":13,
"doc":""
},
{
"ref":"textual.events.Leave.system",
"url":13,
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
"url":13,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Focus.sender",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Focus.bubble",
"url":13,
"doc":""
},
{
"ref":"textual.events.Focus.verbosity",
"url":13,
"doc":""
},
{
"ref":"textual.events.Focus.system",
"url":13,
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
"url":13,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Blur.sender",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Blur.bubble",
"url":13,
"doc":""
},
{
"ref":"textual.events.Blur.verbosity",
"url":13,
"doc":""
},
{
"ref":"textual.events.Blur.system",
"url":13,
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
"url":13,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.DescendantFocus.sender",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DescendantFocus.bubble",
"url":13,
"doc":""
},
{
"ref":"textual.events.DescendantFocus.verbosity",
"url":13,
"doc":""
},
{
"ref":"textual.events.DescendantFocus.system",
"url":13,
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
"url":13,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.DescendantBlur.sender",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DescendantBlur.bubble",
"url":13,
"doc":""
},
{
"ref":"textual.events.DescendantBlur.verbosity",
"url":13,
"doc":""
},
{
"ref":"textual.events.DescendantBlur.system",
"url":13,
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
"ref":"textual.events.Paste",
"url":13,
"doc":"Event containing text that was pasted into the Textual application. This event will only appear when running in a terminal emulator that supports bracketed paste mode. Textual will enable bracketed pastes when an app starts, and disable it when the app shuts down. Args: sender (MessageTarget): The sender of the event, (in this case the app). text: The text that has been pasted"
},
{
"ref":"textual.events.Paste.sender",
"url":13,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Paste.bubble",
"url":13,
"doc":""
},
{
"ref":"textual.events.Paste.verbosity",
"url":13,
"doc":""
},
{
"ref":"textual.events.Paste.system",
"url":13,
"doc":""
},
{
"ref":"textual.events.Paste.set_forwarded",
"url":6,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.Paste.can_replace",
"url":6,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Paste.prevent_default",
"url":6,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Paste.stop",
"url":6,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Paste.name",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Paste.time",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.devtools",
"url":14,
"doc":""
},
{
"ref":"textual.devtools.renderables",
"url":15,
"doc":""
},
{
"ref":"textual.devtools.renderables.DevConsoleHeader",
"url":15,
"doc":""
},
{
"ref":"textual.devtools.renderables.DevConsoleLog",
"url":15,
"doc":"Renderable representing a single log message Args: segments (Iterable[Segment]): The segments to display path (str): The path of the file on the client that the log call was made from line_number (int): The line number of the file on the client the log call was made from unix_timestamp (int): Seconds since January 1st 1970"
},
{
"ref":"textual.devtools.renderables.DevConsoleNotice",
"url":15,
"doc":"Renderable for messages written by the devtools console itself Args: message (str): The message to display level (DevtoolsMessageLevel): The message level (\"info\", \"warning\", or \"error\"). Determines colors used to render the message and the perceived importance."
},
{
"ref":"textual.box_model",
"url":16,
"doc":""
},
{
"ref":"textual.box_model.BoxModel",
"url":16,
"doc":"The result of  get_box_model ."
},
{
"ref":"textual.box_model.BoxModel.width",
"url":16,
"doc":"Alias for field number 0"
},
{
"ref":"textual.box_model.BoxModel.height",
"url":16,
"doc":"Alias for field number 1"
},
{
"ref":"textual.box_model.BoxModel.margin",
"url":16,
"doc":"Alias for field number 2"
},
{
"ref":"textual.box_model.get_box_model",
"url":16,
"doc":"Resolve the box model for this Styles. Args: styles (StylesBase): Styles object. container (Size): The size of the widget container. viewport (Size): The viewport size. get_auto_width (Callable): A callable which accepts container size and parent size and returns a width. get_auto_height (Callable): A callable which accepts container size and parent size and returns a height. Returns: BoxModel: A tuple with the size of the content area and margin.",
"func":1
},
{
"ref":"textual.actions",
"url":17,
"doc":""
},
{
"ref":"textual.actions.ActionError",
"url":17,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"textual.actions.parse",
"url":17,
"doc":"",
"func":1
},
{
"ref":"textual.color",
"url":18,
"doc":"Manages Color in Textual. All instances where the developer is presented with a color should use this class. The only exception should be when passing things to a Rich renderable, which will need to use the  rich_color attribute to perform a conversion. I'm not entirely happy with burdening the user with two similar color classes. In a future update we might add a protocol to convert automatically so the dev could use them interchangably."
},
{
"ref":"textual.color.HLS",
"url":18,
"doc":"A color in HLS format."
},
{
"ref":"textual.color.HLS.h",
"url":18,
"doc":"Alias for field number 0"
},
{
"ref":"textual.color.HLS.l",
"url":18,
"doc":"Alias for field number 1"
},
{
"ref":"textual.color.HLS.s",
"url":18,
"doc":"Alias for field number 2"
},
{
"ref":"textual.color.HSV",
"url":18,
"doc":"A color in HSV format."
},
{
"ref":"textual.color.HSV.h",
"url":18,
"doc":"Alias for field number 0"
},
{
"ref":"textual.color.HSV.s",
"url":18,
"doc":"Alias for field number 1"
},
{
"ref":"textual.color.HSV.v",
"url":18,
"doc":"Alias for field number 2"
},
{
"ref":"textual.color.Lab",
"url":18,
"doc":"A color in CIE-L ab format."
},
{
"ref":"textual.color.Lab.L",
"url":18,
"doc":"Alias for field number 0"
},
{
"ref":"textual.color.Lab.a",
"url":18,
"doc":"Alias for field number 1"
},
{
"ref":"textual.color.Lab.b",
"url":18,
"doc":"Alias for field number 2"
},
{
"ref":"textual.color.ColorParseError",
"url":18,
"doc":"A color failed to parse Creates a new ColorParseError Args: message (str): the error message suggested_color (str | None): a close color we can suggest. Defaults to None."
},
{
"ref":"textual.color.Color",
"url":18,
"doc":"A class to represent a single RGB color with alpha."
},
{
"ref":"textual.color.Color.r",
"url":18,
"doc":"Alias for field number 0"
},
{
"ref":"textual.color.Color.g",
"url":18,
"doc":"Alias for field number 1"
},
{
"ref":"textual.color.Color.b",
"url":18,
"doc":"Alias for field number 2"
},
{
"ref":"textual.color.Color.a",
"url":18,
"doc":"Alias for field number 3"
},
{
"ref":"textual.color.Color.from_rich_color",
"url":18,
"doc":"Create a new color from Rich's Color class. Args: rich_color (RichColor): An instance of rich.color.Color. Returns: Color: A new Color.",
"func":1
},
{
"ref":"textual.color.Color.from_hls",
"url":18,
"doc":"Create a color from HLS components. Args: h (float): Hue. l (float): Lightness. s (float): Saturation. Returns: Color: A new color.",
"func":1
},
{
"ref":"textual.color.Color.is_transparent",
"url":18,
"doc":"Check if the color is transparent, i.e. has 0 alpha."
},
{
"ref":"textual.color.Color.clamped",
"url":18,
"doc":"Get a color with all components saturated to maximum and minimum values."
},
{
"ref":"textual.color.Color.rich_color",
"url":18,
"doc":"This color encoded in Rich's Color class."
},
{
"ref":"textual.color.Color.normalized",
"url":18,
"doc":"A tuple of the color components normalized to between 0 and 1."
},
{
"ref":"textual.color.Color.rgb",
"url":18,
"doc":"Get just the red, green, and blue components."
},
{
"ref":"textual.color.Color.hls",
"url":18,
"doc":"Get the color as HLS."
},
{
"ref":"textual.color.Color.brightness",
"url":18,
"doc":"Get the human perceptual brightness."
},
{
"ref":"textual.color.Color.hex",
"url":18,
"doc":"The color in CSS hex form, with 6 digits for RGB, and 8 digits for RGBA. Returns: str: A CSS hex-style color, e.g. \" 46b3de\" or \" 3342457f\""
},
{
"ref":"textual.color.Color.css",
"url":18,
"doc":"The color in CSS rgb or rgba form. Returns: str: A CSS style color, e.g. \"rgb(10,20,30)\" or \"rgb(50,70,80,0.5)\""
},
{
"ref":"textual.color.Color.with_alpha",
"url":18,
"doc":"Create a new color with the given alpha. Args: alpha (float): New value for alpha. Returns: Color: A new color.",
"func":1
},
{
"ref":"textual.color.Color.blend",
"url":18,
"doc":"Generate a new color between two colors. Args: destination (Color): Another color. factor (float): A blend factor, 0 -> 1 Returns: Color: A new color.",
"func":1
},
{
"ref":"textual.color.Color.parse",
"url":18,
"doc":"Parse a string containing a CSS-style color. Args: color_text (str | Color): Text with a valid color format. Color objects will be returned unmodified. Raises: ColorParseError: If the color is not encoded correctly. Returns: Color: New color object.",
"func":1
},
{
"ref":"textual.color.Color.darken",
"url":18,
"doc":"Darken the color by a given amount. Args: amount (float): Value between 0-1 to reduce luminance by. Returns: Color: New color.",
"func":1
},
{
"ref":"textual.color.Color.lighten",
"url":18,
"doc":"Lighten the color by a given amount. Args: amount (float): Value between 0-1 to increase luminance by. Returns: Color: New color.",
"func":1
},
{
"ref":"textual.color.Color.get_contrast_text",
"url":18,
"doc":"Get a light or dark color that best contrasts this color, for use with text. Args: alpha (float, optional): An alpha value to adjust the pure white / black by. Defaults to 0.95. Returns: Color: A new color, either an off-white or off-black",
"func":1
},
{
"ref":"textual.color.ColorPair",
"url":18,
"doc":"A pair of colors for foreground and background."
},
{
"ref":"textual.color.ColorPair.foreground",
"url":18,
"doc":"Alias for field number 0"
},
{
"ref":"textual.color.ColorPair.background",
"url":18,
"doc":"Alias for field number 1"
},
{
"ref":"textual.color.ColorPair.style",
"url":18,
"doc":"A Rich style with foreground and background."
},
{
"ref":"textual.color.rgb_to_lab",
"url":18,
"doc":"Convert an RGB color to the CIE-L ab format. Uses the standard RGB color space with a D65/2\u2070 standard illuminant. Conversion passes through the XYZ color space. Cf. http: www.easyrgb.com/en/math.php.",
"func":1
},
{
"ref":"textual.color.lab_to_rgb",
"url":18,
"doc":"Convert a CIE-L ab color to RGB. Uses the standard RGB color space with a D65/2\u2070 standard illuminant. Conversion passes through the XYZ color space. Cf. http: www.easyrgb.com/en/math.php.",
"func":1
},
{
"ref":"textual.geometry",
"url":19,
"doc":"Functions and classes to manage terminal geometry (anything involving coordinates or dimensions)."
},
{
"ref":"textual.geometry.clamp",
"url":19,
"doc":"Clamps a value between two other values. Args: value (T): A value minimum (T): Minimum value maximum (T): maximum value Returns: T: New value that is not less than the minimum or greater than the maximum.",
"func":1
},
{
"ref":"textual.geometry.Offset",
"url":19,
"doc":"A point defined by x and y coordinates."
},
{
"ref":"textual.geometry.Offset.x",
"url":19,
"doc":"Alias for field number 0"
},
{
"ref":"textual.geometry.Offset.y",
"url":19,
"doc":"Alias for field number 1"
},
{
"ref":"textual.geometry.Offset.is_origin",
"url":19,
"doc":"Check if the point is at the origin (0, 0)"
},
{
"ref":"textual.geometry.Offset.blend",
"url":19,
"doc":"Blend (interpolate) to a new point. Args: destination (Point): Point where progress is 1.0 factor (float): A value between 0 and 1.0 Returns: Point: A new point on a line between self and destination",
"func":1
},
{
"ref":"textual.geometry.Offset.get_distance_to",
"url":19,
"doc":"Get the distance to another offset. Args: other (Offset): An offset Returns: float: Distance to other offset",
"func":1
},
{
"ref":"textual.geometry.Size",
"url":19,
"doc":"An area defined by its width and height."
},
{
"ref":"textual.geometry.Size.width",
"url":19,
"doc":"Alias for field number 0"
},
{
"ref":"textual.geometry.Size.height",
"url":19,
"doc":"Alias for field number 1"
},
{
"ref":"textual.geometry.Size.area",
"url":19,
"doc":"Get the area of the size. Returns: int: Area in cells."
},
{
"ref":"textual.geometry.Size.region",
"url":19,
"doc":"Get a region of the same size."
},
{
"ref":"textual.geometry.Size.contains",
"url":19,
"doc":"Check if a point is in the size. Args: x (int): X coordinate (column) y (int): Y coordinate (row) Returns: bool: True if the point is within the region.",
"func":1
},
{
"ref":"textual.geometry.Size.contains_point",
"url":19,
"doc":"Check if a point is in the size. Args: point (tuple[int, int]): A tuple of x and y coordinates. Returns: bool: True if the point is within the region.",
"func":1
},
{
"ref":"textual.geometry.Region",
"url":19,
"doc":"Defines a rectangular region."
},
{
"ref":"textual.geometry.Region.x",
"url":19,
"doc":"Alias for field number 0"
},
{
"ref":"textual.geometry.Region.y",
"url":19,
"doc":"Alias for field number 1"
},
{
"ref":"textual.geometry.Region.width",
"url":19,
"doc":"Alias for field number 2"
},
{
"ref":"textual.geometry.Region.height",
"url":19,
"doc":"Alias for field number 3"
},
{
"ref":"textual.geometry.Region.from_union",
"url":19,
"doc":"Create a Region from the union of other regions. Args: regions (Collection[Region]): One or more regions. Returns: Region: A Region that encloses all other regions.",
"func":1
},
{
"ref":"textual.geometry.Region.from_corners",
"url":19,
"doc":"Construct a Region form the top left and bottom right corners. Args: x1 (int): Top left x y1 (int): Top left y x2 (int): Bottom right x y2 (int): Bottom right y Returns: Region: A new region.",
"func":1
},
{
"ref":"textual.geometry.Region.from_origin",
"url":19,
"doc":"Create a region from origin and size. Args: origin (Point): Origin (top left point) size (tuple[int, int]): Dimensions of region. Returns: Region: A region instance.",
"func":1
},
{
"ref":"textual.geometry.Region.x_extents",
"url":19,
"doc":"Get the starting and ending x coord. The end value is non inclusive. Returns: tuple[int, int]: Pair of x coordinates (row numbers)."
},
{
"ref":"textual.geometry.Region.y_extents",
"url":19,
"doc":"Get the starting and ending x coord. The end value is non inclusive. Returns: tuple[int, int]: Pair of y coordinates (line numbers)."
},
{
"ref":"textual.geometry.Region.x_max",
"url":19,
"doc":"Maximum X value (non inclusive)"
},
{
"ref":"textual.geometry.Region.y_max",
"url":19,
"doc":"Maximum Y value (non inclusive)"
},
{
"ref":"textual.geometry.Region.area",
"url":19,
"doc":"Get the area within the region."
},
{
"ref":"textual.geometry.Region.origin",
"url":19,
"doc":"Get the start point of the region."
},
{
"ref":"textual.geometry.Region.bottom_left",
"url":19,
"doc":"Bottom left offset of the region."
},
{
"ref":"textual.geometry.Region.top_right",
"url":19,
"doc":"Top right offset of the region."
},
{
"ref":"textual.geometry.Region.bottom_right",
"url":19,
"doc":"Bottom right of the region."
},
{
"ref":"textual.geometry.Region.size",
"url":19,
"doc":"Get the size of the region."
},
{
"ref":"textual.geometry.Region.corners",
"url":19,
"doc":"Get the maxima and minima of region. Returns: tuple[int, int, int, int]: A tuple of  ( ,  ,  ,  ) "
},
{
"ref":"textual.geometry.Region.x_range",
"url":19,
"doc":"A range object for X coordinates."
},
{
"ref":"textual.geometry.Region.y_range",
"url":19,
"doc":"A range object for Y coordinates."
},
{
"ref":"textual.geometry.Region.reset_origin",
"url":19,
"doc":"An region of the same size at (0, 0)."
},
{
"ref":"textual.geometry.Region.expand",
"url":19,
"doc":"Increase the size of the region by adding a border. Args: size (tuple[int, int]): Additional width and height. Returns: Region: A new region.",
"func":1
},
{
"ref":"textual.geometry.Region.overlaps",
"url":19,
"doc":"Check if another region overlaps this region. Args: other (Region): A Region. Returns: bool: True if other region shares any cells with this region.",
"func":1
},
{
"ref":"textual.geometry.Region.contains",
"url":19,
"doc":"Check if a point is in the region. Args: x (int): X coordinate (column) y (int): Y coordinate (row) Returns: bool: True if the point is within the region.",
"func":1
},
{
"ref":"textual.geometry.Region.contains_point",
"url":19,
"doc":"Check if a point is in the region. Args: point (tuple[int, int]): A tuple of x and y coordinates. Returns: bool: True if the point is within the region.",
"func":1
},
{
"ref":"textual.geometry.Region.contains_region",
"url":19,
"doc":"Check if a region is entirely contained within this region. Args: other (Region): A region. Returns: bool: True if the other region fits perfectly within this region.",
"func":1
},
{
"ref":"textual.geometry.Region.translate",
"url":19,
"doc":"Move the origin of the Region. Args: translate_x (int): Value to add to x coordinate. translate_y (int): Value to add to y coordinate. Returns: Region: A new region shifted by x, y",
"func":1
},
{
"ref":"textual.geometry.Region.clip",
"url":19,
"doc":"Clip this region to fit within width, height. Args: width (int): Width of bounds. height (int): Height of bounds. Returns: Region: Clipped region.",
"func":1
},
{
"ref":"textual.geometry.Region.shrink",
"url":19,
"doc":"Shrink a region by pushing each edge inwards. Args: margin (Spacing): Defines how many cells to shrink the Region by at each edge. Returns: Region: The new, smaller region.",
"func":1
},
{
"ref":"textual.geometry.Region.intersection",
"url":19,
"doc":"Get the overlapping portion of the two regions. Args: region (Region): A region that overlaps this region. Returns: Region: A new region that covers when the two regions overlap.",
"func":1
},
{
"ref":"textual.geometry.Region.union",
"url":19,
"doc":"Get the smallest region that contains both regions. Args: region (Region): Another region. Returns: Region: An optimally sized region to cover both regions.",
"func":1
},
{
"ref":"textual.geometry.Region.split",
"url":19,
"doc":"Split a region in to 4 from given x and y offsets (cuts).   cut_x \u2193 \u250c    \u2510\u250c \u2500\u2510 \u2502  \u2502 \u2502 0  1 \u2502 \u2502  \u2502 cut_y \u2192 \u2514    \u2518\u2514 \u2500\u2518 \u250c    \u2510\u250c \u2500\u2510 \u2502 2  3 \u2502 \u2514    \u2518\u2514 \u2500\u2518   Args: cut_x (int): Offset from self.x where the cut should be made. If negative, the cut is taken from the right edge. cut_y (int): Offset from self.y where the cut should be made. If negative, the cut is taken from the lower edge. Returns: tuple[Region, Region, Region, Region]: Four new regions which add up to the original (self).",
"func":1
},
{
"ref":"textual.geometry.Region.split_vertical",
"url":19,
"doc":"Split a region in to two, from a given x offset.   cut \u2193 \u250c    \u2510\u250c \u2500\u2510 \u2502 0  1 \u2502 \u2502  \u2502 \u2514    \u2518\u2514 \u2500\u2518   Args: cut (int): An offset from self.x where the cut should be made. If cut is negative, it is taken from the right edge. Returns: tuple[Region, Region]: Two regions, which add up to the original (self).",
"func":1
},
{
"ref":"textual.geometry.Region.split_horizontal",
"url":19,
"doc":"Split a region in to two, from a given x offset.   \u250c    \u2500\u2510 \u2502 0 \u2502 \u2502 \u2502 cut \u2192 \u2514    \u2500\u2518 \u250c    \u2500\u2510 \u2502 1 \u2502 \u2514    \u2500\u2518   Args: cut (int): An offset from self.x where the cut should be made. May be negative, for the offset to start from the right edge. Returns: tuple[Region, Region]: Two regions, which add up to the original (self).",
"func":1
},
{
"ref":"textual.geometry.Spacing",
"url":19,
"doc":"The spacing around a renderable."
},
{
"ref":"textual.geometry.Spacing.top",
"url":19,
"doc":"Alias for field number 0"
},
{
"ref":"textual.geometry.Spacing.right",
"url":19,
"doc":"Alias for field number 1"
},
{
"ref":"textual.geometry.Spacing.bottom",
"url":19,
"doc":"Alias for field number 2"
},
{
"ref":"textual.geometry.Spacing.left",
"url":19,
"doc":"Alias for field number 3"
},
{
"ref":"textual.geometry.Spacing.width",
"url":19,
"doc":"Total space in width."
},
{
"ref":"textual.geometry.Spacing.height",
"url":19,
"doc":"Total space in height."
},
{
"ref":"textual.geometry.Spacing.top_left",
"url":19,
"doc":"Top left space."
},
{
"ref":"textual.geometry.Spacing.bottom_right",
"url":19,
"doc":"Bottom right space."
},
{
"ref":"textual.geometry.Spacing.totals",
"url":19,
"doc":"Returns a tuple of ( ,  )."
},
{
"ref":"textual.geometry.Spacing.css",
"url":19,
"doc":"Gets a string containing the spacing in CSS format."
},
{
"ref":"textual.geometry.Spacing.unpack",
"url":19,
"doc":"Unpack padding specified in CSS style. Args: pad (SpacingDimensions): An integer, or tuple of 1, 2, or 4 integers. Raises: ValueError: If  pad is an invalid value. Returns: Spacing: New Spacing object.",
"func":1
},
{
"ref":"textual.geometry.Spacing.vertical",
"url":19,
"doc":"Construct a Spacing with a given amount of spacing on vertical edges, and no horizontal spacing. Args: amount (int): The magnitude of spacing to apply to vertical edges Returns: Spacing:  Spacing(amount, 0, amount, 0) ",
"func":1
},
{
"ref":"textual.geometry.Spacing.horizontal",
"url":19,
"doc":"Construct a Spacing with a given amount of spacing on horizontal edges, and no vertical spacing. Args: amount (int): The magnitude of spacing to apply to horizontal edges Returns: Spacing:  Spacing(0, amount, 0, amount) ",
"func":1
},
{
"ref":"textual.geometry.Spacing.all",
"url":19,
"doc":"Construct a Spacing with a given amount of spacing on all edges. Args: amount (int): The magnitude of spacing to apply to all edges Returns: Spacing:  Spacing(amount, amount, amount, amount) ",
"func":1
},
{
"ref":"textual.features",
"url":20,
"doc":""
},
{
"ref":"textual.features.parse_features",
"url":20,
"doc":"Parse features env var Args: features (str): Comma separated feature flags Returns: frozenset[FeatureFlag]: A frozen set of known features.",
"func":1
},
{
"ref":"textual.renderables",
"url":21,
"doc":""
},
{
"ref":"textual.renderables.opacity",
"url":22,
"doc":""
},
{
"ref":"textual.renderables.opacity.Opacity",
"url":22,
"doc":"Wrap a renderable to blend foreground color into the background color. Args: renderable (RenderableType): The RenderableType to manipulate. opacity (float): The opacity as a float. A value of 1.0 means text is fully visible."
},
{
"ref":"textual.renderables.tint",
"url":23,
"doc":""
},
{
"ref":"textual.renderables.tint.Tint",
"url":23,
"doc":"Applies a color on top of an existing renderable. _summary_ Args: renderable (RenderableType): A renderable. color (Color): A color (presumably with alpha)."
},
{
"ref":"textual.renderables.underline_bar",
"url":24,
"doc":""
},
{
"ref":"textual.renderables.underline_bar.UnderlineBar",
"url":24,
"doc":"Thin horizontal bar with a portion highlighted. Args: highlight_range (tuple[float, float]): The range to highlight. Defaults to  (0, 0) (no highlight) highlight_style (StyleType): The style of the highlighted range of the bar. background_style (StyleType): The style of the non-highlighted range(s) of the bar. width (int, optional): The width of the bar, or  None to fill available width."
},
{
"ref":"textual.renderables.gradient",
"url":25,
"doc":""
},
{
"ref":"textual.renderables.gradient.VerticalGradient",
"url":25,
"doc":"Draw a vertical gradient."
},
{
"ref":"textual.renderables.blank",
"url":26,
"doc":""
},
{
"ref":"textual.renderables.blank.Blank",
"url":26,
"doc":"Draw solid background color."
},
{
"ref":"textual.renderables.sparkline",
"url":27,
"doc":""
},
{
"ref":"textual.renderables.sparkline.Sparkline",
"url":27,
"doc":"A sparkline representing a series of data. Args: data (Sequence[T]): The sequence of data to render. width (int, optional): The width of the sparkline/the number of buckets to partition the data into. min_color (Color, optional): The color of values equal to the min value in data. max_color (Color, optional): The color of values equal to the max value in data. summary_function (Callable[list[T ): Function that will be applied to each bucket."
},
{
"ref":"textual.renderables.sparkline.Sparkline.BARS",
"url":27,
"doc":""
},
{
"ref":"textual.reactive",
"url":28,
"doc":""
},
{
"ref":"textual.reactive.Reactive",
"url":28,
"doc":"Reactive descriptor."
},
{
"ref":"textual.reactive.Reactive.check_watchers",
"url":28,
"doc":"",
"func":1
},
{
"ref":"textual.reactive.Reactive.compute",
"url":28,
"doc":"",
"func":1
},
{
"ref":"textual.reactive.watch",
"url":28,
"doc":"",
"func":1
},
{
"ref":"textual.layouts",
"url":29,
"doc":""
},
{
"ref":"textual.layouts.horizontal",
"url":30,
"doc":""
},
{
"ref":"textual.layouts.horizontal.HorizontalLayout",
"url":30,
"doc":"Used to layout Widgets horizontally on screen, from left to right. Since Widgets naturally fill the space of their parent container, all widgets used in a horizontal layout should have a specified."
},
{
"ref":"textual.layouts.horizontal.HorizontalLayout.name",
"url":30,
"doc":""
},
{
"ref":"textual.layouts.horizontal.HorizontalLayout.arrange",
"url":30,
"doc":"Generate a layout map that defines where on the screen the widgets will be drawn. Args: parent (Widget): Parent widget. size (Size): Size of container. Returns: Iterable[WidgetPlacement]: An iterable of widget location",
"func":1
},
{
"ref":"textual.layouts.vertical",
"url":31,
"doc":""
},
{
"ref":"textual.layouts.vertical.VerticalLayout",
"url":31,
"doc":"Used to layout Widgets vertically on screen, from top to bottom."
},
{
"ref":"textual.layouts.vertical.VerticalLayout.name",
"url":31,
"doc":""
},
{
"ref":"textual.layouts.vertical.VerticalLayout.arrange",
"url":31,
"doc":"Generate a layout map that defines where on the screen the widgets will be drawn. Args: parent (Widget): Parent widget. size (Size): Size of container. Returns: Iterable[WidgetPlacement]: An iterable of widget location",
"func":1
},
{
"ref":"textual.layouts.factory",
"url":32,
"doc":""
},
{
"ref":"textual.layouts.factory.MissingLayout",
"url":32,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"textual.layouts.factory.get_layout",
"url":32,
"doc":"Get a named layout object. Args: name (str): Name of the layout. Raises: MissingLayout: If the named layout doesn't exist. Returns: Layout: A layout object.",
"func":1
},
{
"ref":"textual.layouts.grid",
"url":33,
"doc":""
},
{
"ref":"textual.layouts.grid.GridOptions",
"url":33,
"doc":"GridOptions(name: 'str', size: 'int | None' = None, fraction: 'int' = 1, min_size: 'int' = 1, max_size: 'int | None' = None)"
},
{
"ref":"textual.layouts.grid.GridOptions.name",
"url":33,
"doc":""
},
{
"ref":"textual.layouts.grid.GridOptions.size",
"url":33,
"doc":""
},
{
"ref":"textual.layouts.grid.GridOptions.fraction",
"url":33,
"doc":""
},
{
"ref":"textual.layouts.grid.GridOptions.min_size",
"url":33,
"doc":""
},
{
"ref":"textual.layouts.grid.GridOptions.max_size",
"url":33,
"doc":""
},
{
"ref":"textual.layouts.grid.GridArea",
"url":33,
"doc":"GridArea(col_start, col_end, row_start, row_end)"
},
{
"ref":"textual.layouts.grid.GridArea.col_start",
"url":33,
"doc":"Alias for field number 0"
},
{
"ref":"textual.layouts.grid.GridArea.col_end",
"url":33,
"doc":"Alias for field number 1"
},
{
"ref":"textual.layouts.grid.GridArea.row_start",
"url":33,
"doc":"Alias for field number 2"
},
{
"ref":"textual.layouts.grid.GridArea.row_end",
"url":33,
"doc":"Alias for field number 3"
},
{
"ref":"textual.layouts.grid.GridLayout",
"url":33,
"doc":"Responsible for arranging Widgets in a view and rendering them."
},
{
"ref":"textual.layouts.grid.GridLayout.name",
"url":33,
"doc":""
},
{
"ref":"textual.layouts.grid.GridLayout.is_row_visible",
"url":33,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.grid.GridLayout.is_column_visible",
"url":33,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.grid.GridLayout.show_row",
"url":33,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.grid.GridLayout.show_column",
"url":33,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.grid.GridLayout.add_column",
"url":33,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.grid.GridLayout.add_row",
"url":33,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.grid.GridLayout.add_areas",
"url":33,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.grid.GridLayout.set_gap",
"url":33,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.grid.GridLayout.set_gutter",
"url":33,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.grid.GridLayout.add_widget",
"url":33,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.grid.GridLayout.place",
"url":33,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.grid.GridLayout.set_repeat",
"url":33,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.grid.GridLayout.set_align",
"url":33,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.grid.GridLayout.get_widgets",
"url":33,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.grid.GridLayout.arrange",
"url":33,
"doc":"Generate a map that associates widgets with their location on screen. Args: width (int): [description] height (int): [description] offset (Point, optional): [description]. Defaults to Point(0, 0). Returns: dict[Widget, OrderedRegion]: [description]",
"func":1
},
{
"ref":"textual.layouts.dock",
"url":34,
"doc":""
},
{
"ref":"textual.layouts.dock.DockOptions",
"url":34,
"doc":"DockOptions(size: 'int | None' = None, fraction: 'int | None' = 1, min_size: 'int' = 1)"
},
{
"ref":"textual.layouts.dock.DockOptions.size",
"url":34,
"doc":""
},
{
"ref":"textual.layouts.dock.DockOptions.fraction",
"url":34,
"doc":""
},
{
"ref":"textual.layouts.dock.DockOptions.min_size",
"url":34,
"doc":""
},
{
"ref":"textual.layouts.dock.Dock",
"url":34,
"doc":"Dock(edge, widgets, z)"
},
{
"ref":"textual.layouts.dock.Dock.edge",
"url":34,
"doc":"Alias for field number 0"
},
{
"ref":"textual.layouts.dock.Dock.widgets",
"url":34,
"doc":"Alias for field number 1"
},
{
"ref":"textual.layouts.dock.Dock.z",
"url":34,
"doc":"Alias for field number 2"
},
{
"ref":"textual.layouts.dock.DockLayout",
"url":34,
"doc":"Dock Widgets to edge of screen."
},
{
"ref":"textual.layouts.dock.DockLayout.name",
"url":34,
"doc":""
},
{
"ref":"textual.layouts.dock.DockLayout.get_docks",
"url":34,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.dock.DockLayout.arrange",
"url":34,
"doc":"Generate a layout map that defines where on the screen the widgets will be drawn. Args: parent (Widget): Parent widget. size (Size): Size of container. Returns: Iterable[WidgetPlacement]: An iterable of widget location",
"func":1
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
"ref":"textual.dom.DOMNode.CSS",
"url":3,
"doc":""
},
{
"ref":"textual.dom.DOMNode.COMPONENT_CLASSES",
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
"ref":"textual.dom.DOMNode.css",
"url":3,
"doc":"Gets the CSS for this class and inherited from bases. Returns: list[tuple[str, str : a list of tuples containing (PATH, SOURCE) for this and inherited from base classes."
},
{
"ref":"textual.dom.DOMNode.parent",
"url":3,
"doc":"Get the parent node. Returns: DOMNode | None: The node which is the direct parent of this node."
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
"ref":"textual.dom.DOMNode.text_style",
"url":3,
"doc":"Get the text style object. A widget's style is influenced by its parent. For instance if a widgets background has an alpha, then its parent's background color will show through. Additionally, widgets will inherit their parent's text style (i.e. bold, italic etc). Returns: Style: Rich Style object."
},
{
"ref":"textual.dom.DOMNode.rich_style",
"url":3,
"doc":"Get a Rich Style object for this DOMNode."
},
{
"ref":"textual.dom.DOMNode.colors",
"url":3,
"doc":"Gets the Widgets foreground and background colors, and its parent's colors. Returns: tuple[tuple[Color, Color], tuple[Color, Color : Base colors and widget colors"
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
"doc":"Reset styles back to their initial state",
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
"doc":"Generate all descendants of this node. Args: with_self (bool, optional): Also include self in the results. Defaults to True.",
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
"doc":"Get the current app. Raises: NoActiveAppError: if no active app could be found for the current asyncio context"
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
"ref":"textual.messages",
"url":35,
"doc":""
},
{
"ref":"textual.messages.Update",
"url":35,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.messages.Update.sender",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.Update.can_replace",
"url":35,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.messages.Update.bubble",
"url":35,
"doc":""
},
{
"ref":"textual.messages.Update.verbosity",
"url":35,
"doc":""
},
{
"ref":"textual.messages.Update.system",
"url":35,
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
"url":35,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.messages.Layout.sender",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.Layout.can_replace",
"url":35,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.messages.Layout.bubble",
"url":35,
"doc":""
},
{
"ref":"textual.messages.Layout.verbosity",
"url":35,
"doc":""
},
{
"ref":"textual.messages.Layout.system",
"url":35,
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
"url":35,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.messages.CursorMove.sender",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.CursorMove.bubble",
"url":35,
"doc":""
},
{
"ref":"textual.messages.CursorMove.verbosity",
"url":35,
"doc":""
},
{
"ref":"textual.messages.CursorMove.system",
"url":35,
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
"url":35,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.messages.StylesUpdated.sender",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.StylesUpdated.can_replace",
"url":35,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.messages.StylesUpdated.bubble",
"url":35,
"doc":""
},
{
"ref":"textual.messages.StylesUpdated.verbosity",
"url":35,
"doc":""
},
{
"ref":"textual.messages.StylesUpdated.system",
"url":35,
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
"url":35,
"doc":"Used to 'wake up' an event loop. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.messages.Prompt.sender",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.Prompt.can_replace",
"url":35,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.messages.Prompt.bubble",
"url":35,
"doc":""
},
{
"ref":"textual.messages.Prompt.verbosity",
"url":35,
"doc":""
},
{
"ref":"textual.messages.Prompt.system",
"url":35,
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
"ref":"textual.messages.TerminalSupportsSynchronizedOutput",
"url":35,
"doc":"Used to make the App aware that the terminal emulator supports synchronised output. @link https: gist.github.com/christianparpart/d8a62cc1ab659194337d73e399004036 Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.messages.TerminalSupportsSynchronizedOutput.sender",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.TerminalSupportsSynchronizedOutput.bubble",
"url":35,
"doc":""
},
{
"ref":"textual.messages.TerminalSupportsSynchronizedOutput.verbosity",
"url":35,
"doc":""
},
{
"ref":"textual.messages.TerminalSupportsSynchronizedOutput.system",
"url":35,
"doc":""
},
{
"ref":"textual.messages.TerminalSupportsSynchronizedOutput.set_forwarded",
"url":6,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.messages.TerminalSupportsSynchronizedOutput.can_replace",
"url":6,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.messages.TerminalSupportsSynchronizedOutput.prevent_default",
"url":6,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.messages.TerminalSupportsSynchronizedOutput.stop",
"url":6,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.messages.TerminalSupportsSynchronizedOutput.name",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.TerminalSupportsSynchronizedOutput.time",
"url":6,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.design",
"url":36,
"doc":""
},
{
"ref":"textual.design.ColorProperty",
"url":36,
"doc":"Descriptor to parse colors."
},
{
"ref":"textual.design.ColorSystem",
"url":36,
"doc":"Defines a standard set of colors and variations for building a UI. Primary is the main theme color Secondary is a second theme color"
},
{
"ref":"textual.design.ColorSystem.COLOR_NAMES",
"url":36,
"doc":""
},
{
"ref":"textual.design.ColorSystem.primary",
"url":36,
"doc":"Get the primary color."
},
{
"ref":"textual.design.ColorSystem.secondary",
"url":36,
"doc":"Descriptor to parse colors."
},
{
"ref":"textual.design.ColorSystem.warning",
"url":36,
"doc":"Descriptor to parse colors."
},
{
"ref":"textual.design.ColorSystem.error",
"url":36,
"doc":"Descriptor to parse colors."
},
{
"ref":"textual.design.ColorSystem.success",
"url":36,
"doc":"Descriptor to parse colors."
},
{
"ref":"textual.design.ColorSystem.accent",
"url":36,
"doc":"Descriptor to parse colors."
},
{
"ref":"textual.design.ColorSystem.system",
"url":36,
"doc":"Descriptor to parse colors."
},
{
"ref":"textual.design.ColorSystem.surface",
"url":36,
"doc":"Descriptor to parse colors."
},
{
"ref":"textual.design.ColorSystem.background",
"url":36,
"doc":"Descriptor to parse colors."
},
{
"ref":"textual.design.ColorSystem.dark_surface",
"url":36,
"doc":"Descriptor to parse colors."
},
{
"ref":"textual.design.ColorSystem.dark_background",
"url":36,
"doc":"Descriptor to parse colors."
},
{
"ref":"textual.design.ColorSystem.panel",
"url":36,
"doc":"Descriptor to parse colors."
},
{
"ref":"textual.design.ColorSystem.shades",
"url":36,
"doc":"The names of the colors and derived shades."
},
{
"ref":"textual.design.ColorSystem.generate",
"url":36,
"doc":"Generate a mapping of color name on to a CSS color. Args: dark (bool, optional): Enable dark mode. Defaults to False. luminosity_spread (float, optional): Amount of luminosity to subtract and add to generate shades. Defaults to 0.2. text_alpha (float, optional): Alpha value for text. Defaults to 0.9. Returns: dict[str, str]: A mapping of color name on to a CSS-style encoded color",
"func":1
},
{
"ref":"textual.drivers",
"url":37,
"doc":""
},
{
"ref":"textual.drivers.linux_driver",
"url":38,
"doc":""
},
{
"ref":"textual.drivers.linux_driver.LinuxDriver",
"url":38,
"doc":"Powers display and input for Linux / MacOS"
},
{
"ref":"textual.drivers.linux_driver.LinuxDriver.start_application_mode",
"url":38,
"doc":"",
"func":1
},
{
"ref":"textual.drivers.linux_driver.LinuxDriver.disable_input",
"url":38,
"doc":"",
"func":1
},
{
"ref":"textual.drivers.linux_driver.LinuxDriver.stop_application_mode",
"url":38,
"doc":"",
"func":1
},
{
"ref":"textual.drivers.linux_driver.LinuxDriver.run_input_thread",
"url":38,
"doc":"",
"func":1
},
{
"ref":"textual.drivers.linux_driver.LinuxDriver.process_event",
"url":11,
"doc":"Performs some additional processing of events.",
"func":1
},
{
"ref":"textual.drivers.linux_driver.LinuxDriver.enable_bracketed_paste",
"url":11,
"doc":"Write the ANSI escape code  ESC[?2004h , which enables bracketed paste mode.",
"func":1
},
{
"ref":"textual.drivers.linux_driver.LinuxDriver.disable_bracketed_paste",
"url":11,
"doc":"Write the ANSI escape code  ESC[?2004l , which disables bracketed paste mode.",
"func":1
},
{
"ref":"textual.cli",
"url":39,
"doc":""
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
"doc":"Get the current app. Raises: NoActiveAppError: if no active app could be found for the current asyncio context"
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
"ref":"textual.keys",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys",
"url":40,
"doc":"List of keys for use in key bindings. Note that this is an \"StrEnum\", all values can be compared against strings."
},
{
"ref":"textual.keys.Keys.value",
"url":40,
"doc":"The value of the Enum member."
},
{
"ref":"textual.keys.Keys.Space",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.Escape",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftEscape",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.Return",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlAt",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlA",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlB",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlC",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlD",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlE",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlG",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlH",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlI",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlJ",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlK",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlL",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlM",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlN",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlO",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlP",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlQ",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlR",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlS",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlT",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlU",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlV",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlW",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlX",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlY",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlZ",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.Control1",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.Control2",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.Control3",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.Control4",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.Control5",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.Control6",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.Control7",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.Control8",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.Control9",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.Control0",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShift1",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShift2",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShift3",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShift4",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShift5",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShift6",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShift7",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShift8",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShift9",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShift0",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlBackslash",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlSquareClose",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlCircumflex",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlUnderscore",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.Left",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.Right",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.Up",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.Down",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.Home",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.End",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.Insert",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.Delete",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.PageUp",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.PageDown",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlLeft",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlRight",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlUp",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlDown",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlHome",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlEnd",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlInsert",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlDelete",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlPageUp",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlPageDown",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftLeft",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftRight",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftUp",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftDown",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftHome",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftEnd",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftInsert",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftDelete",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftPageUp",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftPageDown",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShiftLeft",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShiftRight",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShiftUp",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShiftDown",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShiftHome",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShiftEnd",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShiftInsert",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShiftDelete",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShiftPageUp",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShiftPageDown",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.BackTab",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.F1",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.F2",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.F3",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.F4",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.F5",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.F6",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.F7",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.F8",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.F9",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.F10",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.F11",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.F12",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.F13",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.F14",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.F15",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.F16",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.F17",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.F18",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.F19",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.F20",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.F21",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.F22",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.F23",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.F24",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF1",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF2",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF3",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF4",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF5",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF6",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF7",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF8",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF9",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF10",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF11",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF12",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF13",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF14",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF15",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF16",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF17",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF18",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF19",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF20",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF21",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF22",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF23",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF24",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.Any",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ScrollUp",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ScrollDown",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.CPRResponse",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.Vt100MouseEvent",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.WindowsMouseEvent",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.Ignore",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlSpace",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.Tab",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.Enter",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.Backspace",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftControlLeft",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftControlRight",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftControlHome",
"url":40,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftControlEnd",
"url":40,
"doc":""
},
{
"ref":"textual.css",
"url":41,
"doc":""
},
{
"ref":"textual.css.stylesheet",
"url":42,
"doc":""
},
{
"ref":"textual.css.stylesheet.StylesheetParseError",
"url":42,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"textual.css.stylesheet.StylesheetErrors",
"url":42,
"doc":""
},
{
"ref":"textual.css.stylesheet.StylesheetErrors.set_variables",
"url":42,
"doc":"Pre-populate CSS variables.",
"func":1
},
{
"ref":"textual.css.stylesheet.Stylesheet",
"url":42,
"doc":""
},
{
"ref":"textual.css.stylesheet.Stylesheet.rules",
"url":42,
"doc":""
},
{
"ref":"textual.css.stylesheet.Stylesheet.css",
"url":42,
"doc":""
},
{
"ref":"textual.css.stylesheet.Stylesheet.copy",
"url":42,
"doc":"Create a copy of this stylesheet. Returns: Stylesheet: New stylesheet.",
"func":1
},
{
"ref":"textual.css.stylesheet.Stylesheet.set_variables",
"url":42,
"doc":"Set CSS variables. Args: variables (dict[str, str]): A mapping of name to variable.",
"func":1
},
{
"ref":"textual.css.stylesheet.Stylesheet.read",
"url":42,
"doc":"Read Textual CSS file. Args: filename (str | PurePath): filename of CSS. Raises: StylesheetError: If the CSS could not be read. StylesheetParseError: If the CSS is invalid.",
"func":1
},
{
"ref":"textual.css.stylesheet.Stylesheet.add_source",
"url":42,
"doc":"Parse CSS from a string. Args: css (str): String with CSS source. path (str | PurePath, optional): The path of the source if a file, or some other identifier. Defaults to None. Raises: StylesheetError: If the CSS could not be read. StylesheetParseError: If the CSS is invalid.",
"func":1
},
{
"ref":"textual.css.stylesheet.Stylesheet.parse",
"url":42,
"doc":"Parse the source in the stylesheet. Raises: StylesheetParseError: If there are any CSS related errors.",
"func":1
},
{
"ref":"textual.css.stylesheet.Stylesheet.reparse",
"url":42,
"doc":"Re-parse source, applying new variables. Raises: StylesheetError: If the CSS could not be read. StylesheetParseError: If the CSS is invalid.",
"func":1
},
{
"ref":"textual.css.stylesheet.Stylesheet.apply",
"url":42,
"doc":"Apply the stylesheet to a DOM node. Args: node (DOMNode): The  DOMNode to apply the stylesheet to. Applies the styles defined in this  Stylesheet to the node. If the same rule is defined multiple times for the node (e.g. multiple classes modifying the same CSS property), then only the most specific rule will be applied. animate (bool, optional): Animate changed rules. Defaults to  False .",
"func":1
},
{
"ref":"textual.css.stylesheet.Stylesheet.replace_rules",
"url":42,
"doc":"Replace style rules on a node, animating as required. Args: node (DOMNode): A DOM node. rules (RulesMap): Mapping of rules. animate (bool, optional): Enable animation. Defaults to False.",
"func":1
},
{
"ref":"textual.css.stylesheet.Stylesheet.update",
"url":42,
"doc":"Update a node and its children.",
"func":1
},
{
"ref":"textual.css.scalar",
"url":43,
"doc":""
},
{
"ref":"textual.css.scalar.ScalarError",
"url":43,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"textual.css.scalar.ScalarResolveError",
"url":43,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"textual.css.scalar.ScalarParseError",
"url":43,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"textual.css.scalar.Unit",
"url":43,
"doc":"Enumeration of the various units inherited from CSS."
},
{
"ref":"textual.css.scalar.Unit.CELLS",
"url":43,
"doc":""
},
{
"ref":"textual.css.scalar.Unit.FRACTION",
"url":43,
"doc":""
},
{
"ref":"textual.css.scalar.Unit.PERCENT",
"url":43,
"doc":""
},
{
"ref":"textual.css.scalar.Unit.WIDTH",
"url":43,
"doc":""
},
{
"ref":"textual.css.scalar.Unit.HEIGHT",
"url":43,
"doc":""
},
{
"ref":"textual.css.scalar.Unit.VIEW_WIDTH",
"url":43,
"doc":""
},
{
"ref":"textual.css.scalar.Unit.VIEW_HEIGHT",
"url":43,
"doc":""
},
{
"ref":"textual.css.scalar.Unit.AUTO",
"url":43,
"doc":""
},
{
"ref":"textual.css.scalar.get_symbols",
"url":43,
"doc":"Get symbols for an iterable of units. Args: units (Iterable[Unit]): A number of units. Returns: list[str]: List of symbols.",
"func":1
},
{
"ref":"textual.css.scalar.Scalar",
"url":43,
"doc":"A numeric value and a unit."
},
{
"ref":"textual.css.scalar.Scalar.value",
"url":43,
"doc":"Alias for field number 0"
},
{
"ref":"textual.css.scalar.Scalar.unit",
"url":43,
"doc":"Alias for field number 1"
},
{
"ref":"textual.css.scalar.Scalar.percent_unit",
"url":43,
"doc":"Alias for field number 2"
},
{
"ref":"textual.css.scalar.Scalar.is_percent",
"url":43,
"doc":"Check if the Scalar is a percentage unit."
},
{
"ref":"textual.css.scalar.Scalar.is_fraction",
"url":43,
"doc":"Check if the unit is a fraction."
},
{
"ref":"textual.css.scalar.Scalar.cells",
"url":43,
"doc":"Check if the unit is explicit cells."
},
{
"ref":"textual.css.scalar.Scalar.fraction",
"url":43,
"doc":"Get the fraction value, or None if not a value."
},
{
"ref":"textual.css.scalar.Scalar.symbol",
"url":43,
"doc":"Get the symbol of this unit."
},
{
"ref":"textual.css.scalar.Scalar.is_auto",
"url":43,
"doc":"Check if this is an auto unit."
},
{
"ref":"textual.css.scalar.Scalar.from_number",
"url":43,
"doc":"Create a scalar with cells unit. Args: value (float): A number of cells. Returns: Scalar: New Scalar.",
"func":1
},
{
"ref":"textual.css.scalar.Scalar.parse",
"url":43,
"doc":"Parse a string in to a Scalar Args: token (str): A string containing a scalar, e.g. \"3.14fr\" Raises: ScalarParseError: If the value is not a valid scalar Returns: Scalar: New scalar",
"func":1
},
{
"ref":"textual.css.scalar.Scalar.resolve_dimension",
"url":43,
"doc":"Resolve scalar with units in to a dimensions. Args: size (tuple[int, int]): Size of the container. viewport (tuple[int, int]): Size of the viewport (typically terminal size) Raises: ScalarResolveError: If the unit is unknown. Returns: int: A size (in cells)",
"func":1
},
{
"ref":"textual.css.scalar.Scalar.copy_with",
"url":43,
"doc":"Get a copy of this Scalar, with values optionally modified Args: value (float | None): The new value, or None to keep the same value unit (Unit | None): The new unit, or None to keep the same unit percent_unit (Unit | None): The new percent_unit, or None to keep the same percent_unit",
"func":1
},
{
"ref":"textual.css.scalar.ScalarOffset",
"url":43,
"doc":"An Offset with two scalars, used to animate between to Scalars."
},
{
"ref":"textual.css.scalar.ScalarOffset.x",
"url":43,
"doc":"Alias for field number 0"
},
{
"ref":"textual.css.scalar.ScalarOffset.y",
"url":43,
"doc":"Alias for field number 1"
},
{
"ref":"textual.css.scalar.ScalarOffset.null",
"url":43,
"doc":"Get a null scalar offset (0, 0).",
"func":1
},
{
"ref":"textual.css.scalar.ScalarOffset.resolve",
"url":43,
"doc":"",
"func":1
},
{
"ref":"textual.css.scalar.percentage_string_to_float",
"url":43,
"doc":"Convert a string percentage e.g. '20%' to a float e.g. 20.0. Args: string (str): The percentage string to convert.",
"func":1
},
{
"ref":"textual.css.query",
"url":44,
"doc":"A DOMQuery is a set of DOM nodes associated with a given CSS selector. This set of nodes may be further filtered with the filter method. Additional methods apply actions to the nodes in the query. If this sounds like JQuery, a (once) popular JS library, it is no coincidence. DOMQuery objects are typically created by Widget.filter method."
},
{
"ref":"textual.css.query.NoMatchingNodesError",
"url":44,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"textual.css.query.DOMQuery",
"url":44,
"doc":""
},
{
"ref":"textual.css.query.DOMQuery.filter",
"url":44,
"doc":"Filter this set by the given CSS selector. Args: selector (str): A CSS selector. Returns: DOMQuery: New DOM Query.",
"func":1
},
{
"ref":"textual.css.query.DOMQuery.exclude",
"url":44,
"doc":"Exclude nodes that match a given selector. Args: selector (str): A CSS selector. Returns: DOMQuery: New DOM query.",
"func":1
},
{
"ref":"textual.css.query.DOMQuery.first",
"url":44,
"doc":"Get the first matched node. Returns: DOMNode: A DOM Node.",
"func":1
},
{
"ref":"textual.css.query.DOMQuery.add_class",
"url":44,
"doc":"Add the given class name(s) to nodes.",
"func":1
},
{
"ref":"textual.css.query.DOMQuery.remove_class",
"url":44,
"doc":"Remove the given class names from the nodes.",
"func":1
},
{
"ref":"textual.css.query.DOMQuery.toggle_class",
"url":44,
"doc":"Toggle the given class names from matched nodes.",
"func":1
},
{
"ref":"textual.css.query.DOMQuery.set_styles",
"url":44,
"doc":"Set styles on matched nodes. Args: css (str, optional): CSS declarations to parser, or None. Defaults to None.",
"func":1
},
{
"ref":"textual.css.query.DOMQuery.refresh",
"url":44,
"doc":"Refresh matched nodes. Args: repaint (bool): Repaint node(s). defaults to True. layout (bool): Layout node(s). Defaults to False. Returns: DOMQuery: Query for chaining.",
"func":1
},
{
"ref":"textual.css.styles",
"url":45,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap",
"url":45,
"doc":"A typed dict for CSS rules. Any key may be absent, indicating that rule has not been set. Does not define composite rules, that is a rule that is made of a combination of other rules."
},
{
"ref":"textual.css.styles.RulesMap.display",
"url":45,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.visibility",
"url":45,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.layout",
"url":45,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.color",
"url":45,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.background",
"url":45,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.text_style",
"url":45,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.opacity",
"url":45,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.padding",
"url":45,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.margin",
"url":45,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.offset",
"url":45,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.border_top",
"url":45,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.border_right",
"url":45,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.border_bottom",
"url":45,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.border_left",
"url":45,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.outline_top",
"url":45,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.outline_right",
"url":45,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.outline_bottom",
"url":45,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.outline_left",
"url":45,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.box_sizing",
"url":45,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.width",
"url":45,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.height",
"url":45,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.min_width",
"url":45,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.min_height",
"url":45,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.max_width",
"url":45,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.max_height",
"url":45,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.dock",
"url":45,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.docks",
"url":45,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.overflow_x",
"url":45,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.overflow_y",
"url":45,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.layers",
"url":45,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.layer",
"url":45,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.transitions",
"url":45,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.tint",
"url":45,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.scrollbar_color",
"url":45,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.scrollbar_color_hover",
"url":45,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.scrollbar_color_active",
"url":45,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.scrollbar_background",
"url":45,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.scrollbar_background_hover",
"url":45,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.scrollbar_background_active",
"url":45,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.scrollbar_gutter",
"url":45,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.scrollbar_size_vertical",
"url":45,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.scrollbar_size_horizontal",
"url":45,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.align_horizontal",
"url":45,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.align_vertical",
"url":45,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.content_align_horizontal",
"url":45,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.content_align_vertical",
"url":45,
"doc":""
},
{
"ref":"textual.css.styles.DockGroup",
"url":45,
"doc":"DockGroup(name, edge, z)"
},
{
"ref":"textual.css.styles.DockGroup.name",
"url":45,
"doc":"Alias for field number 0"
},
{
"ref":"textual.css.styles.DockGroup.edge",
"url":45,
"doc":"Alias for field number 1"
},
{
"ref":"textual.css.styles.DockGroup.z",
"url":45,
"doc":"Alias for field number 2"
},
{
"ref":"textual.css.styles.StylesBase",
"url":45,
"doc":"A common base class for Styles and RenderStyles"
},
{
"ref":"textual.css.styles.StylesBase.ANIMATABLE",
"url":45,
"doc":""
},
{
"ref":"textual.css.styles.StylesBase.display",
"url":45,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.StylesBase.visibility",
"url":45,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.StylesBase.layout",
"url":45,
"doc":"Descriptor for getting and setting layout."
},
{
"ref":"textual.css.styles.StylesBase.color",
"url":45,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.StylesBase.background",
"url":45,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.StylesBase.text_style",
"url":45,
"doc":"Descriptor for getting and set style flag properties (e.g.  bold italic underline )."
},
{
"ref":"textual.css.styles.StylesBase.opacity",
"url":45,
"doc":"Property that can be set either as a float (e.g. 0.1) or a string percentage (e.g. '10%'). Values will be clamped to the range (0, 1)."
},
{
"ref":"textual.css.styles.StylesBase.padding",
"url":45,
"doc":"Descriptor for getting and setting spacing properties (e.g. padding and margin)."
},
{
"ref":"textual.css.styles.StylesBase.margin",
"url":45,
"doc":"Descriptor for getting and setting spacing properties (e.g. padding and margin)."
},
{
"ref":"textual.css.styles.StylesBase.offset",
"url":45,
"doc":"Descriptor for getting and setting the offset property. Offset consists of two values, x and y, that a widget's position will be adjusted by before it is rendered."
},
{
"ref":"textual.css.styles.StylesBase.border",
"url":45,
"doc":"Descriptor for getting and setting full borders and outlines. Args: layout (bool): True if the layout should be refreshed after setting, False otherwise."
},
{
"ref":"textual.css.styles.StylesBase.border_top",
"url":45,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.StylesBase.border_right",
"url":45,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.StylesBase.border_bottom",
"url":45,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.StylesBase.border_left",
"url":45,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.StylesBase.outline",
"url":45,
"doc":"Descriptor for getting and setting full borders and outlines. Args: layout (bool): True if the layout should be refreshed after setting, False otherwise."
},
{
"ref":"textual.css.styles.StylesBase.outline_top",
"url":45,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.StylesBase.outline_right",
"url":45,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.StylesBase.outline_bottom",
"url":45,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.StylesBase.outline_left",
"url":45,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.StylesBase.box_sizing",
"url":45,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.StylesBase.width",
"url":45,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.StylesBase.height",
"url":45,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.StylesBase.min_width",
"url":45,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.StylesBase.min_height",
"url":45,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.StylesBase.max_width",
"url":45,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.StylesBase.max_height",
"url":45,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.StylesBase.dock",
"url":45,
"doc":"Descriptor for getting and setting the dock property. The dock property allows you to specify which dock you wish a Widget to be attached to. This should be used in conjunction with the \"docks\" property which lets you define the docks themselves, and where they are located on screen."
},
{
"ref":"textual.css.styles.StylesBase.docks",
"url":45,
"doc":"Descriptor for getting and setting the docks property. This property is used to define docks and their location on screen."
},
{
"ref":"textual.css.styles.StylesBase.overflow_x",
"url":45,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.StylesBase.overflow_y",
"url":45,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.StylesBase.layer",
"url":45,
"doc":"Descriptor for getting and setting name properties."
},
{
"ref":"textual.css.styles.StylesBase.layers",
"url":45,
"doc":""
},
{
"ref":"textual.css.styles.StylesBase.transitions",
"url":45,
"doc":"Descriptor for getting transitions properties"
},
{
"ref":"textual.css.styles.StylesBase.rich_style",
"url":45,
"doc":"Descriptor for getting the Rich style."
},
{
"ref":"textual.css.styles.StylesBase.tint",
"url":45,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.StylesBase.scrollbar_color",
"url":45,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.StylesBase.scrollbar_color_hover",
"url":45,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.StylesBase.scrollbar_color_active",
"url":45,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.StylesBase.scrollbar_background",
"url":45,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.StylesBase.scrollbar_background_hover",
"url":45,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.StylesBase.scrollbar_background_active",
"url":45,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.StylesBase.scrollbar_gutter",
"url":45,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.StylesBase.scrollbar_size_vertical",
"url":45,
"doc":""
},
{
"ref":"textual.css.styles.StylesBase.scrollbar_size_horizontal",
"url":45,
"doc":""
},
{
"ref":"textual.css.styles.StylesBase.align_horizontal",
"url":45,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.StylesBase.align_vertical",
"url":45,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.StylesBase.align",
"url":45,
"doc":"Combines the horizontal and vertical alignment properties in to a single property."
},
{
"ref":"textual.css.styles.StylesBase.content_align_horizontal",
"url":45,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.StylesBase.content_align_vertical",
"url":45,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.StylesBase.content_align",
"url":45,
"doc":"Combines the horizontal and vertical alignment properties in to a single property."
},
{
"ref":"textual.css.styles.StylesBase.gutter",
"url":45,
"doc":"Get space around widget. Returns: Spacing: Space around widget content."
},
{
"ref":"textual.css.styles.StylesBase.content_gutter",
"url":45,
"doc":"The spacing that surrounds the content area of the widget."
},
{
"ref":"textual.css.styles.StylesBase.auto_dimensions",
"url":45,
"doc":"Check if width or height are set to 'auto'."
},
{
"ref":"textual.css.styles.StylesBase.has_rule",
"url":45,
"doc":"Check if a rule is set on this Styles object. Args: rule (str): Rule name. Returns: bool:  True if the rules is present, otherwise  False .",
"func":1
},
{
"ref":"textual.css.styles.StylesBase.clear_rule",
"url":45,
"doc":"Removes the rule from the Styles object, as if it had never been set. Args: rule (str): Rule name. Returns: bool:  True if a rule was cleared, or  False if the rule is already not set.",
"func":1
},
{
"ref":"textual.css.styles.StylesBase.get_rules",
"url":45,
"doc":"Get the rules in a mapping. Returns: RulesMap: A TypedDict of the rules.",
"func":1
},
{
"ref":"textual.css.styles.StylesBase.set_rule",
"url":45,
"doc":"Set a rule. Args: rule (str): Rule name. value (object | None): New rule value. Returns: bool:  True if the rule changed, otherwise  False .",
"func":1
},
{
"ref":"textual.css.styles.StylesBase.get_rule",
"url":45,
"doc":"Get an individual rule. Args: rule (str): Name of rule. default (object, optional): Default if rule does not exists. Defaults to None. Returns: object: Rule value or default.",
"func":1
},
{
"ref":"textual.css.styles.StylesBase.refresh",
"url":45,
"doc":"Mark the styles as requiring a refresh. Args: layout (bool, optional): Also require a layout. Defaults to False.",
"func":1
},
{
"ref":"textual.css.styles.StylesBase.reset",
"url":45,
"doc":"Reset the rules to initial state.",
"func":1
},
{
"ref":"textual.css.styles.StylesBase.merge",
"url":45,
"doc":"Merge values from another Styles. Args: other (Styles): A Styles object.",
"func":1
},
{
"ref":"textual.css.styles.StylesBase.merge_rules",
"url":45,
"doc":"Merge rules in to Styles. Args: rules (RulesMap): A mapping of rules.",
"func":1
},
{
"ref":"textual.css.styles.StylesBase.get_render_rules",
"url":45,
"doc":"Get rules map with defaults.",
"func":1
},
{
"ref":"textual.css.styles.StylesBase.is_animatable",
"url":45,
"doc":"Check if a given rule may be animated. Args: rule (str): Name of the rule. Returns: bool:  True if the rule may be animated, otherwise  False .",
"func":1
},
{
"ref":"textual.css.styles.StylesBase.parse",
"url":45,
"doc":"Parse CSS and return a Styles object. Args: css (str): Textual CSS. path (str): Path or string indicating source of CSS. node (DOMNode, optional): Node to associate with the Styles. Defaults to None. Returns: Styles: A Styles instance containing result of parsing CSS.",
"func":1
},
{
"ref":"textual.css.styles.StylesBase.get_transition",
"url":45,
"doc":"",
"func":1
},
{
"ref":"textual.css.styles.StylesBase.align_width",
"url":45,
"doc":"Align the width dimension. Args: width (int): Width of the content. parent_width (int): Width of the parent container. Returns: int: An offset to add to the X coordinate.",
"func":1
},
{
"ref":"textual.css.styles.StylesBase.align_height",
"url":45,
"doc":"Align the height dimensions Args: height (int): Height of the content. parent_height (int): Height of the parent container. Returns: int: An offset to add to the Y coordinate.",
"func":1
},
{
"ref":"textual.css.styles.Styles",
"url":45,
"doc":"Styles(node: 'DOMNode | None' = None, _rules: 'RulesMap' =  , important: 'set[str]' =  )"
},
{
"ref":"textual.css.styles.Styles.important",
"url":45,
"doc":""
},
{
"ref":"textual.css.styles.Styles.node",
"url":45,
"doc":""
},
{
"ref":"textual.css.styles.Styles.copy",
"url":45,
"doc":"Get a copy of this Styles object.",
"func":1
},
{
"ref":"textual.css.styles.Styles.has_rule",
"url":45,
"doc":"Check if a rule is set on this Styles object. Args: rule (str): Rule name. Returns: bool:  True if the rules is present, otherwise  False .",
"func":1
},
{
"ref":"textual.css.styles.Styles.clear_rule",
"url":45,
"doc":"Removes the rule from the Styles object, as if it had never been set. Args: rule (str): Rule name. Returns: bool:  True if a rule was cleared, or  False if it was already not set.",
"func":1
},
{
"ref":"textual.css.styles.Styles.get_rules",
"url":45,
"doc":"Get the rules in a mapping. Returns: RulesMap: A TypedDict of the rules.",
"func":1
},
{
"ref":"textual.css.styles.Styles.set_rule",
"url":45,
"doc":"Set a rule. Args: rule (str): Rule name. value (object | None): New rule value. Returns: bool:  True if the rule changed, otherwise  False .",
"func":1
},
{
"ref":"textual.css.styles.Styles.get_rule",
"url":45,
"doc":"Get an individual rule. Args: rule (str): Name of rule. default (object, optional): Default if rule does not exists. Defaults to None. Returns: object: Rule value or default.",
"func":1
},
{
"ref":"textual.css.styles.Styles.refresh",
"url":45,
"doc":"Mark the styles as requiring a refresh. Args: layout (bool, optional): Also require a layout. Defaults to False.",
"func":1
},
{
"ref":"textual.css.styles.Styles.reset",
"url":45,
"doc":"Reset the rules to initial state.",
"func":1
},
{
"ref":"textual.css.styles.Styles.merge",
"url":45,
"doc":"Merge values from another Styles. Args: other (Styles): A Styles object.",
"func":1
},
{
"ref":"textual.css.styles.Styles.merge_rules",
"url":45,
"doc":"Merge rules in to Styles. Args: rules (RulesMap): A mapping of rules.",
"func":1
},
{
"ref":"textual.css.styles.Styles.extract_rules",
"url":45,
"doc":"Extract rules from Styles object, and apply !important css specificity. Args: specificity (Specificity3): A node specificity. Returns: list[tuple[str, Specificity4, Any ]: A list containing a tuple of  ,   .",
"func":1
},
{
"ref":"textual.css.styles.Styles.css_lines",
"url":45,
"doc":""
},
{
"ref":"textual.css.styles.Styles.css",
"url":45,
"doc":""
},
{
"ref":"textual.css.styles.Styles.display",
"url":45,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.Styles.visibility",
"url":45,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.Styles.layout",
"url":45,
"doc":"Descriptor for getting and setting layout."
},
{
"ref":"textual.css.styles.Styles.color",
"url":45,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.Styles.background",
"url":45,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.Styles.text_style",
"url":45,
"doc":"Descriptor for getting and set style flag properties (e.g.  bold italic underline )."
},
{
"ref":"textual.css.styles.Styles.opacity",
"url":45,
"doc":"Property that can be set either as a float (e.g. 0.1) or a string percentage (e.g. '10%'). Values will be clamped to the range (0, 1)."
},
{
"ref":"textual.css.styles.Styles.padding",
"url":45,
"doc":"Descriptor for getting and setting spacing properties (e.g. padding and margin)."
},
{
"ref":"textual.css.styles.Styles.margin",
"url":45,
"doc":"Descriptor for getting and setting spacing properties (e.g. padding and margin)."
},
{
"ref":"textual.css.styles.Styles.offset",
"url":45,
"doc":"Descriptor for getting and setting the offset property. Offset consists of two values, x and y, that a widget's position will be adjusted by before it is rendered."
},
{
"ref":"textual.css.styles.Styles.border",
"url":45,
"doc":"Descriptor for getting and setting full borders and outlines. Args: layout (bool): True if the layout should be refreshed after setting, False otherwise."
},
{
"ref":"textual.css.styles.Styles.border_top",
"url":45,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.Styles.border_right",
"url":45,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.Styles.border_bottom",
"url":45,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.Styles.border_left",
"url":45,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.Styles.outline",
"url":45,
"doc":"Descriptor for getting and setting full borders and outlines. Args: layout (bool): True if the layout should be refreshed after setting, False otherwise."
},
{
"ref":"textual.css.styles.Styles.outline_top",
"url":45,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.Styles.outline_right",
"url":45,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.Styles.outline_bottom",
"url":45,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.Styles.outline_left",
"url":45,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.Styles.box_sizing",
"url":45,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.Styles.width",
"url":45,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.Styles.height",
"url":45,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.Styles.min_width",
"url":45,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.Styles.min_height",
"url":45,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.Styles.max_width",
"url":45,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.Styles.max_height",
"url":45,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.Styles.dock",
"url":45,
"doc":"Descriptor for getting and setting the dock property. The dock property allows you to specify which dock you wish a Widget to be attached to. This should be used in conjunction with the \"docks\" property which lets you define the docks themselves, and where they are located on screen."
},
{
"ref":"textual.css.styles.Styles.docks",
"url":45,
"doc":"Descriptor for getting and setting the docks property. This property is used to define docks and their location on screen."
},
{
"ref":"textual.css.styles.Styles.overflow_x",
"url":45,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.Styles.overflow_y",
"url":45,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.Styles.layer",
"url":45,
"doc":"Descriptor for getting and setting name properties."
},
{
"ref":"textual.css.styles.Styles.transitions",
"url":45,
"doc":"Descriptor for getting transitions properties"
},
{
"ref":"textual.css.styles.Styles.rich_style",
"url":45,
"doc":"Descriptor for getting the Rich style."
},
{
"ref":"textual.css.styles.Styles.tint",
"url":45,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.Styles.scrollbar_color",
"url":45,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.Styles.scrollbar_color_hover",
"url":45,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.Styles.scrollbar_color_active",
"url":45,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.Styles.scrollbar_background",
"url":45,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.Styles.scrollbar_background_hover",
"url":45,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.Styles.scrollbar_background_active",
"url":45,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.Styles.scrollbar_gutter",
"url":45,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.Styles.align_horizontal",
"url":45,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.Styles.align_vertical",
"url":45,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.Styles.align",
"url":45,
"doc":"Combines the horizontal and vertical alignment properties in to a single property."
},
{
"ref":"textual.css.styles.Styles.content_align_horizontal",
"url":45,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.Styles.content_align_vertical",
"url":45,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.Styles.content_align",
"url":45,
"doc":"Combines the horizontal and vertical alignment properties in to a single property."
},
{
"ref":"textual.css.styles.Styles.gutter",
"url":45,
"doc":"Get space around widget. Returns: Spacing: Space around widget content."
},
{
"ref":"textual.css.styles.Styles.content_gutter",
"url":45,
"doc":"The spacing that surrounds the content area of the widget."
},
{
"ref":"textual.css.styles.Styles.auto_dimensions",
"url":45,
"doc":"Check if width or height are set to 'auto'."
},
{
"ref":"textual.css.styles.Styles.get_render_rules",
"url":45,
"doc":"Get rules map with defaults.",
"func":1
},
{
"ref":"textual.css.styles.Styles.is_animatable",
"url":45,
"doc":"Check if a given rule may be animated. Args: rule (str): Name of the rule. Returns: bool:  True if the rule may be animated, otherwise  False .",
"func":1
},
{
"ref":"textual.css.styles.Styles.parse",
"url":45,
"doc":"Parse CSS and return a Styles object. Args: css (str): Textual CSS. path (str): Path or string indicating source of CSS. node (DOMNode, optional): Node to associate with the Styles. Defaults to None. Returns: Styles: A Styles instance containing result of parsing CSS.",
"func":1
},
{
"ref":"textual.css.styles.Styles.align_width",
"url":45,
"doc":"Align the width dimension. Args: width (int): Width of the content. parent_width (int): Width of the parent container. Returns: int: An offset to add to the X coordinate.",
"func":1
},
{
"ref":"textual.css.styles.Styles.align_height",
"url":45,
"doc":"Align the height dimensions Args: height (int): Height of the content. parent_height (int): Height of the parent container. Returns: int: An offset to add to the Y coordinate.",
"func":1
},
{
"ref":"textual.css.styles.RenderStyles",
"url":45,
"doc":"Presents a combined view of two Styles object: a base Styles and inline Styles."
},
{
"ref":"textual.css.styles.RenderStyles.base",
"url":45,
"doc":"Quick access to base (css) style."
},
{
"ref":"textual.css.styles.RenderStyles.inline",
"url":45,
"doc":"Quick access to the inline styles."
},
{
"ref":"textual.css.styles.RenderStyles.refresh",
"url":45,
"doc":"Mark the styles as requiring a refresh. Args: layout (bool, optional): Also require a layout. Defaults to False.",
"func":1
},
{
"ref":"textual.css.styles.RenderStyles.merge",
"url":45,
"doc":"Merge values from another Styles. Args: other (Styles): A Styles object.",
"func":1
},
{
"ref":"textual.css.styles.RenderStyles.merge_rules",
"url":45,
"doc":"Merge rules in to Styles. Args: rules (RulesMap): A mapping of rules.",
"func":1
},
{
"ref":"textual.css.styles.RenderStyles.reset",
"url":45,
"doc":"Reset the rules to initial state.",
"func":1
},
{
"ref":"textual.css.styles.RenderStyles.has_rule",
"url":45,
"doc":"Check if a rule has been set.",
"func":1
},
{
"ref":"textual.css.styles.RenderStyles.set_rule",
"url":45,
"doc":"Set a rule. Args: rule (str): Rule name. value (object | None): New rule value. Returns: bool:  True if the rule changed, otherwise  False .",
"func":1
},
{
"ref":"textual.css.styles.RenderStyles.get_rule",
"url":45,
"doc":"Get an individual rule. Args: rule (str): Name of rule. default (object, optional): Default if rule does not exists. Defaults to None. Returns: object: Rule value or default.",
"func":1
},
{
"ref":"textual.css.styles.RenderStyles.clear_rule",
"url":45,
"doc":"Clear a rule (from inline).",
"func":1
},
{
"ref":"textual.css.styles.RenderStyles.get_rules",
"url":45,
"doc":"Get rules as a dictionary",
"func":1
},
{
"ref":"textual.css.styles.RenderStyles.css",
"url":45,
"doc":"Get the CSS for the combined styles."
},
{
"ref":"textual.css.styles.RenderStyles.display",
"url":45,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.RenderStyles.visibility",
"url":45,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.RenderStyles.layout",
"url":45,
"doc":"Descriptor for getting and setting layout."
},
{
"ref":"textual.css.styles.RenderStyles.color",
"url":45,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.RenderStyles.background",
"url":45,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.RenderStyles.text_style",
"url":45,
"doc":"Descriptor for getting and set style flag properties (e.g.  bold italic underline )."
},
{
"ref":"textual.css.styles.RenderStyles.opacity",
"url":45,
"doc":"Property that can be set either as a float (e.g. 0.1) or a string percentage (e.g. '10%'). Values will be clamped to the range (0, 1)."
},
{
"ref":"textual.css.styles.RenderStyles.padding",
"url":45,
"doc":"Descriptor for getting and setting spacing properties (e.g. padding and margin)."
},
{
"ref":"textual.css.styles.RenderStyles.margin",
"url":45,
"doc":"Descriptor for getting and setting spacing properties (e.g. padding and margin)."
},
{
"ref":"textual.css.styles.RenderStyles.offset",
"url":45,
"doc":"Descriptor for getting and setting the offset property. Offset consists of two values, x and y, that a widget's position will be adjusted by before it is rendered."
},
{
"ref":"textual.css.styles.RenderStyles.border",
"url":45,
"doc":"Descriptor for getting and setting full borders and outlines. Args: layout (bool): True if the layout should be refreshed after setting, False otherwise."
},
{
"ref":"textual.css.styles.RenderStyles.border_top",
"url":45,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.RenderStyles.border_right",
"url":45,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.RenderStyles.border_bottom",
"url":45,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.RenderStyles.border_left",
"url":45,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.RenderStyles.outline",
"url":45,
"doc":"Descriptor for getting and setting full borders and outlines. Args: layout (bool): True if the layout should be refreshed after setting, False otherwise."
},
{
"ref":"textual.css.styles.RenderStyles.outline_top",
"url":45,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.RenderStyles.outline_right",
"url":45,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.RenderStyles.outline_bottom",
"url":45,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.RenderStyles.outline_left",
"url":45,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.RenderStyles.box_sizing",
"url":45,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.RenderStyles.width",
"url":45,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.RenderStyles.height",
"url":45,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.RenderStyles.min_width",
"url":45,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.RenderStyles.min_height",
"url":45,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.RenderStyles.max_width",
"url":45,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.RenderStyles.max_height",
"url":45,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.RenderStyles.dock",
"url":45,
"doc":"Descriptor for getting and setting the dock property. The dock property allows you to specify which dock you wish a Widget to be attached to. This should be used in conjunction with the \"docks\" property which lets you define the docks themselves, and where they are located on screen."
},
{
"ref":"textual.css.styles.RenderStyles.docks",
"url":45,
"doc":"Descriptor for getting and setting the docks property. This property is used to define docks and their location on screen."
},
{
"ref":"textual.css.styles.RenderStyles.overflow_x",
"url":45,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.RenderStyles.overflow_y",
"url":45,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.RenderStyles.layer",
"url":45,
"doc":"Descriptor for getting and setting name properties."
},
{
"ref":"textual.css.styles.RenderStyles.transitions",
"url":45,
"doc":"Descriptor for getting transitions properties"
},
{
"ref":"textual.css.styles.RenderStyles.rich_style",
"url":45,
"doc":"Descriptor for getting the Rich style."
},
{
"ref":"textual.css.styles.RenderStyles.tint",
"url":45,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.RenderStyles.scrollbar_color",
"url":45,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.RenderStyles.scrollbar_color_hover",
"url":45,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.RenderStyles.scrollbar_color_active",
"url":45,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.RenderStyles.scrollbar_background",
"url":45,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.RenderStyles.scrollbar_background_hover",
"url":45,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.RenderStyles.scrollbar_background_active",
"url":45,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.RenderStyles.scrollbar_gutter",
"url":45,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.RenderStyles.align_horizontal",
"url":45,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.RenderStyles.align_vertical",
"url":45,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.RenderStyles.align",
"url":45,
"doc":"Combines the horizontal and vertical alignment properties in to a single property."
},
{
"ref":"textual.css.styles.RenderStyles.content_align_horizontal",
"url":45,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.RenderStyles.content_align_vertical",
"url":45,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.RenderStyles.content_align",
"url":45,
"doc":"Combines the horizontal and vertical alignment properties in to a single property."
},
{
"ref":"textual.css.styles.RenderStyles.gutter",
"url":45,
"doc":"Get space around widget. Returns: Spacing: Space around widget content."
},
{
"ref":"textual.css.styles.RenderStyles.content_gutter",
"url":45,
"doc":"The spacing that surrounds the content area of the widget."
},
{
"ref":"textual.css.styles.RenderStyles.auto_dimensions",
"url":45,
"doc":"Check if width or height are set to 'auto'."
},
{
"ref":"textual.css.styles.RenderStyles.get_render_rules",
"url":45,
"doc":"Get rules map with defaults.",
"func":1
},
{
"ref":"textual.css.styles.RenderStyles.is_animatable",
"url":45,
"doc":"Check if a given rule may be animated. Args: rule (str): Name of the rule. Returns: bool:  True if the rule may be animated, otherwise  False .",
"func":1
},
{
"ref":"textual.css.styles.RenderStyles.parse",
"url":45,
"doc":"Parse CSS and return a Styles object. Args: css (str): Textual CSS. path (str): Path or string indicating source of CSS. node (DOMNode, optional): Node to associate with the Styles. Defaults to None. Returns: Styles: A Styles instance containing result of parsing CSS.",
"func":1
},
{
"ref":"textual.css.styles.RenderStyles.align_width",
"url":45,
"doc":"Align the width dimension. Args: width (int): Width of the content. parent_width (int): Width of the parent container. Returns: int: An offset to add to the X coordinate.",
"func":1
},
{
"ref":"textual.css.styles.RenderStyles.align_height",
"url":45,
"doc":"Align the height dimensions Args: height (int): Height of the content. parent_height (int): Height of the parent container. Returns: int: An offset to add to the Y coordinate.",
"func":1
},
{
"ref":"textual.css.tokenizer",
"url":46,
"doc":""
},
{
"ref":"textual.css.tokenizer.TokenizeError",
"url":46,
"doc":"Error raised when the CSS cannot be tokenized (syntax error). Args: path (str): Path to source or \" \" if source is parsed from a literal. code (str): The code being parsed. line_no (int): Line number of the error. col_no (int): Column number of the error. message (str): A message associated with the error."
},
{
"ref":"textual.css.tokenizer.EOFError",
"url":46,
"doc":"Error raised when the CSS cannot be tokenized (syntax error). Args: path (str): Path to source or \" \" if source is parsed from a literal. code (str): The code being parsed. line_no (int): Line number of the error. col_no (int): Column number of the error. message (str): A message associated with the error."
},
{
"ref":"textual.css.tokenizer.Expect",
"url":46,
"doc":""
},
{
"ref":"textual.css.tokenizer.Expect.expect_eof",
"url":46,
"doc":"",
"func":1
},
{
"ref":"textual.css.tokenizer.ReferencedBy",
"url":46,
"doc":"ReferencedBy(name, location, length)"
},
{
"ref":"textual.css.tokenizer.ReferencedBy.name",
"url":46,
"doc":"Alias for field number 0"
},
{
"ref":"textual.css.tokenizer.ReferencedBy.location",
"url":46,
"doc":"Alias for field number 1"
},
{
"ref":"textual.css.tokenizer.ReferencedBy.length",
"url":46,
"doc":"Alias for field number 2"
},
{
"ref":"textual.css.tokenizer.Token",
"url":46,
"doc":"Token(name, value, path, code, location, referenced_by)"
},
{
"ref":"textual.css.tokenizer.Token.name",
"url":46,
"doc":"Alias for field number 0"
},
{
"ref":"textual.css.tokenizer.Token.value",
"url":46,
"doc":"Alias for field number 1"
},
{
"ref":"textual.css.tokenizer.Token.path",
"url":46,
"doc":"Alias for field number 2"
},
{
"ref":"textual.css.tokenizer.Token.code",
"url":46,
"doc":"Alias for field number 3"
},
{
"ref":"textual.css.tokenizer.Token.location",
"url":46,
"doc":"Alias for field number 4"
},
{
"ref":"textual.css.tokenizer.Token.referenced_by",
"url":46,
"doc":"Alias for field number 5"
},
{
"ref":"textual.css.tokenizer.Token.with_reference",
"url":46,
"doc":"Return a copy of the Token, with reference information attached. This is used for variable substitution, where a variable reference can refer to tokens which were defined elsewhere. With the additional ReferencedBy data attached, we can track where the token we are referring to is used.",
"func":1
},
{
"ref":"textual.css.tokenizer.Tokenizer",
"url":46,
"doc":""
},
{
"ref":"textual.css.tokenizer.Tokenizer.get_token",
"url":46,
"doc":"",
"func":1
},
{
"ref":"textual.css.tokenizer.Tokenizer.skip_to",
"url":46,
"doc":"",
"func":1
},
{
"ref":"textual.css.model",
"url":47,
"doc":""
},
{
"ref":"textual.css.model.SelectorType",
"url":47,
"doc":"An enumeration."
},
{
"ref":"textual.css.model.SelectorType.UNIVERSAL",
"url":47,
"doc":""
},
{
"ref":"textual.css.model.SelectorType.TYPE",
"url":47,
"doc":""
},
{
"ref":"textual.css.model.SelectorType.CLASS",
"url":47,
"doc":""
},
{
"ref":"textual.css.model.SelectorType.ID",
"url":47,
"doc":""
},
{
"ref":"textual.css.model.CombinatorType",
"url":47,
"doc":"An enumeration."
},
{
"ref":"textual.css.model.CombinatorType.SAME",
"url":47,
"doc":""
},
{
"ref":"textual.css.model.CombinatorType.DESCENDENT",
"url":47,
"doc":""
},
{
"ref":"textual.css.model.CombinatorType.CHILD",
"url":47,
"doc":""
},
{
"ref":"textual.css.model.Selector",
"url":47,
"doc":"Represents a CSS selector. Some examples of selectors:  Header.title App > Content"
},
{
"ref":"textual.css.model.Selector.name",
"url":47,
"doc":""
},
{
"ref":"textual.css.model.Selector.pseudo_classes",
"url":47,
"doc":""
},
{
"ref":"textual.css.model.Selector.specificity",
"url":47,
"doc":""
},
{
"ref":"textual.css.model.Selector.combinator",
"url":47,
"doc":""
},
{
"ref":"textual.css.model.Selector.type",
"url":47,
"doc":""
},
{
"ref":"textual.css.model.Selector.advance",
"url":47,
"doc":""
},
{
"ref":"textual.css.model.Selector.css",
"url":47,
"doc":"Rebuilds the selector as it would appear in CSS."
},
{
"ref":"textual.css.model.Selector.check",
"url":47,
"doc":"Check if a given node matches the selector. Args: node (DOMNode): A DOM node. Returns: bool: True if the selector matches, otherwise False.",
"func":1
},
{
"ref":"textual.css.model.Declaration",
"url":47,
"doc":"Declaration(token: 'Token', name: 'str', tokens: 'list[Token]' =  )"
},
{
"ref":"textual.css.model.Declaration.token",
"url":47,
"doc":""
},
{
"ref":"textual.css.model.Declaration.name",
"url":47,
"doc":""
},
{
"ref":"textual.css.model.Declaration.tokens",
"url":47,
"doc":""
},
{
"ref":"textual.css.model.SelectorSet",
"url":47,
"doc":"SelectorSet(selectors: 'list[Selector]' =  , specificity: 'Specificity3' = (0, 0, 0 "
},
{
"ref":"textual.css.model.SelectorSet.selectors",
"url":47,
"doc":""
},
{
"ref":"textual.css.model.SelectorSet.specificity",
"url":47,
"doc":""
},
{
"ref":"textual.css.model.SelectorSet.from_selectors",
"url":47,
"doc":"",
"func":1
},
{
"ref":"textual.css.model.RuleSet",
"url":47,
"doc":"RuleSet(selector_set: 'list[SelectorSet]' =  , styles: 'Styles' =  , errors: 'list[tuple[Token, str ' =  , classes: 'set[str]' =  )"
},
{
"ref":"textual.css.model.RuleSet.selector_set",
"url":47,
"doc":""
},
{
"ref":"textual.css.model.RuleSet.styles",
"url":47,
"doc":""
},
{
"ref":"textual.css.model.RuleSet.errors",
"url":47,
"doc":""
},
{
"ref":"textual.css.model.RuleSet.classes",
"url":47,
"doc":""
},
{
"ref":"textual.css.model.RuleSet.selectors",
"url":47,
"doc":""
},
{
"ref":"textual.css.model.RuleSet.css",
"url":47,
"doc":"Generate the CSS this RuleSet Returns: str: A string containing CSS code."
},
{
"ref":"textual.css.scalar_animation",
"url":48,
"doc":""
},
{
"ref":"textual.css.scalar_animation.ScalarAnimation",
"url":48,
"doc":"Helper class that provides a standard way to create an ABC using inheritance."
},
{
"ref":"textual.css.errors",
"url":49,
"doc":""
},
{
"ref":"textual.css.errors.DeclarationError",
"url":49,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"textual.css.errors.UnresolvedVariableError",
"url":49,
"doc":"Name not found globally."
},
{
"ref":"textual.css.errors.StyleTypeError",
"url":49,
"doc":"Inappropriate argument type."
},
{
"ref":"textual.css.errors.StyleValueError",
"url":49,
"doc":"Raised when the value of a style property is not valid Attributes: help_text (HelpText | None): Optional HelpText to be rendered when this error is raised."
},
{
"ref":"textual.css.errors.StylesheetError",
"url":49,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"textual.css.transition",
"url":50,
"doc":""
},
{
"ref":"textual.css.transition.Transition",
"url":50,
"doc":"Transition(duration, easing, delay)"
},
{
"ref":"textual.css.transition.Transition.duration",
"url":50,
"doc":"Alias for field number 0"
},
{
"ref":"textual.css.transition.Transition.easing",
"url":50,
"doc":"Alias for field number 1"
},
{
"ref":"textual.css.transition.Transition.delay",
"url":50,
"doc":"Alias for field number 2"
},
{
"ref":"textual.css.tokenize",
"url":51,
"doc":""
},
{
"ref":"textual.css.tokenize.TokenizerState",
"url":51,
"doc":"State machine for the tokenizer. Attributes: EXPECT: The initial expectation of the tokenizer. Since we start tokenizing at the root scope, we might expect to see either a variable or selector, for example. STATE_MAP: Maps token names to Expects, defines the sets of valid tokens that we'd expect to see next, given the current token. For example, if we've just processed a variable declaration name, we next expect to see the value of that variable."
},
{
"ref":"textual.css.tokenize.TokenizerState.EXPECT",
"url":51,
"doc":""
},
{
"ref":"textual.css.tokenize.TokenizerState.STATE_MAP",
"url":51,
"doc":""
},
{
"ref":"textual.css.tokenize.DeclarationTokenizerState",
"url":51,
"doc":"State machine for the tokenizer. Attributes: EXPECT: The initial expectation of the tokenizer. Since we start tokenizing at the root scope, we might expect to see either a variable or selector, for example. STATE_MAP: Maps token names to Expects, defines the sets of valid tokens that we'd expect to see next, given the current token. For example, if we've just processed a variable declaration name, we next expect to see the value of that variable."
},
{
"ref":"textual.css.tokenize.DeclarationTokenizerState.EXPECT",
"url":51,
"doc":""
},
{
"ref":"textual.css.tokenize.DeclarationTokenizerState.STATE_MAP",
"url":51,
"doc":""
},
{
"ref":"textual.css.tokenize.ValueTokenizerState",
"url":51,
"doc":"State machine for the tokenizer. Attributes: EXPECT: The initial expectation of the tokenizer. Since we start tokenizing at the root scope, we might expect to see either a variable or selector, for example. STATE_MAP: Maps token names to Expects, defines the sets of valid tokens that we'd expect to see next, given the current token. For example, if we've just processed a variable declaration name, we next expect to see the value of that variable."
},
{
"ref":"textual.css.tokenize.ValueTokenizerState.EXPECT",
"url":51,
"doc":""
},
{
"ref":"textual.css.tokenize.tokenize_values",
"url":51,
"doc":"Tokens the values in a dict of strings. Args: values (dict[str, str]): A mapping of CSS variable name on to a value, to be added to the CSS context. Returns: dict[str, list[Token : A mapping of name on to a list of tokens,",
"func":1
},
{
"ref":"textual.css.parse",
"url":52,
"doc":""
},
{
"ref":"textual.css.parse.parse_selectors",
"url":52,
"doc":"",
"func":1
},
{
"ref":"textual.css.parse.parse_rule_set",
"url":52,
"doc":"",
"func":1
},
{
"ref":"textual.css.parse.parse_declarations",
"url":52,
"doc":"Parse declarations and return a Styles object. Args: css (str): String containing CSS. path (str): Path to the CSS, or something else to identify the location. Returns: Styles: A styles object.",
"func":1
},
{
"ref":"textual.css.parse.substitute_references",
"url":52,
"doc":"Replace variable references with values by substituting variable reference tokens with the tokens representing their values. Args: tokens (Iterable[Token]): Iterator of Tokens which may contain tokens with the name \"variable_ref\". Returns: Iterable[Token]: Yields Tokens such that any variable references (tokens where token.name  \"variable_ref\") have been replaced with the tokens representing the value. In other words, an Iterable of Tokens similar to the original input, but with variables resolved. Substituted tokens will have their referenced_by attribute populated with information about where the tokens are being substituted to.",
"func":1
},
{
"ref":"textual.css.parse.parse",
"url":52,
"doc":"Parse CSS by tokenizing it, performing variable substitution, and generating rule sets from it. Args: css (str): The input CSS path (str): Path to the CSS",
"func":1
},
{
"ref":"textual.css.match",
"url":53,
"doc":""
},
{
"ref":"textual.css.match.match",
"url":53,
"doc":"Check if a given selector matches any of the given selector sets. Args: selector_sets (Iterable[SelectorSet]): Iterable of selector sets. node (DOMNode): DOM node. Returns: bool: True if the node matches the selector, otherwise False.",
"func":1
},
{
"ref":"textual.css.types",
"url":54,
"doc":""
},
{
"ref":"textual.css.constants",
"url":55,
"doc":""
},
{
"ref":"textual.screen",
"url":56,
"doc":""
},
{
"ref":"textual.screen.Screen",
"url":56,
"doc":"A widget for the root of the app."
},
{
"ref":"textual.screen.Screen.COMPONENT_CLASSES",
"url":56,
"doc":""
},
{
"ref":"textual.screen.Screen.CSS",
"url":56,
"doc":""
},
{
"ref":"textual.screen.Screen.dark",
"url":56,
"doc":"Reactive descriptor."
},
{
"ref":"textual.screen.Screen.is_transparent",
"url":56,
"doc":"Check if the background styles is not set. Returns: bool:  True if there is background color, otherwise  False ."
},
{
"ref":"textual.screen.Screen.update_timer",
"url":56,
"doc":"Timer used to perform updates."
},
{
"ref":"textual.screen.Screen.watch_dark",
"url":56,
"doc":"",
"func":1
},
{
"ref":"textual.screen.Screen.render",
"url":56,
"doc":"Get renderable for widget. Args: style (Styles): The Styles object for this Widget. Returns: RenderableType: Any renderable",
"func":1
},
{
"ref":"textual.screen.Screen.get_offset",
"url":56,
"doc":"Get the absolute offset of a given Widget. Args: widget (Widget): A widget Returns: Offset: The widget's offset relative to the top left of the terminal.",
"func":1
},
{
"ref":"textual.screen.Screen.get_widget_at",
"url":56,
"doc":"Get the widget at a given coordinate. Args: x (int): X Coordinate. y (int): Y Coordinate. Returns: tuple[Widget, Region]: Widget and screen region.",
"func":1
},
{
"ref":"textual.screen.Screen.get_style_at",
"url":56,
"doc":"Get the style under a given coordinate. Args: x (int): X Coordinate. y (int): Y Coordinate. Returns: Style: Rich Style object",
"func":1
},
{
"ref":"textual.screen.Screen.find_widget",
"url":56,
"doc":"Get the screen region of a Widget. Args: widget (Widget): A Widget within the composition. Returns: Region: Region relative to screen.",
"func":1
},
{
"ref":"textual.screen.Screen.on_idle",
"url":56,
"doc":"Called when there are no more events on the queue. Args: event (events.Idle): Idle event.",
"func":1
},
{
"ref":"textual.screen.Screen.handle_update",
"url":56,
"doc":"",
"func":1
},
{
"ref":"textual.screen.Screen.handle_layout",
"url":56,
"doc":"",
"func":1
},
{
"ref":"textual.screen.Screen.on_resize",
"url":56,
"doc":"",
"func":1
},
{
"ref":"textual.screen.Screen.forward_event",
"url":56,
"doc":"",
"func":1
},
{
"ref":"textual.screen.Screen.can_focus",
"url":56,
"doc":""
},
{
"ref":"textual.screen.Screen.can_focus_children",
"url":56,
"doc":""
},
{
"ref":"textual.screen.Screen.virtual_size",
"url":2,
"doc":"Reactive descriptor."
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
"ref":"textual.screen.Screen.watch_show_horizontal_scrollbar",
"url":2,
"doc":"Watch function for show_horizontal_scrollbar attribute. Args: value (bool): Show horizontal scrollbar flag.",
"func":1
},
{
"ref":"textual.screen.Screen.watch_show_vertical_scrollbar",
"url":2,
"doc":"Watch function for show_vertical_scrollbar attribute. Args: value (bool): Show vertical scrollbar flag.",
"func":1
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
"doc":"Gets the width of the content area. Args: container (Size): Size of the container (immediate parent) widget. viewport (Size): Size of the viewport. Returns: int: The optimal width of the content.",
"func":1
},
{
"ref":"textual.screen.Screen.get_content_height",
"url":2,
"doc":"Gets the height (number of lines) in the content area. Args: container (Size): Size of the container (immediate parent) widget. viewport (Size): Size of the viewport. width (int): Width of renderable. Returns: int: The height of the content.",
"func":1
},
{
"ref":"textual.screen.Screen.max_scroll_x",
"url":2,
"doc":"The maximum value of  scroll_x ."
},
{
"ref":"textual.screen.Screen.max_scroll_y",
"url":2,
"doc":"The maximum value of  scroll_y ."
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
"ref":"textual.screen.Screen.scrollbar_dimensions",
"url":2,
"doc":"Get the size of any scrollbars on the widget"
},
{
"ref":"textual.screen.Screen.scrollbar_size_vertical",
"url":2,
"doc":"Get the width used by the  vertical scrollbar."
},
{
"ref":"textual.screen.Screen.scrollbar_size_horizontal",
"url":2,
"doc":"Get the height used by the  horizontal scrollbar."
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
"doc":"Starting from  widget , travel up the DOM to this node, scrolling all containers such that every widget is visible within its parent container. This will, in the majority of cases, bring the target widget into Args: widget (Widget): A descendant widget. animate (bool, optional): True to animate, or False to jump. Defaults to True. Returns: bool: True if any scrolling has occurred in any descendant, otherwise False.",
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
"doc":"Gets an absolute region containing the content (minus padding and border)."
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
"ref":"textual.screen.Screen.console",
"url":2,
"doc":"Get the current console."
},
{
"ref":"textual.screen.Screen.layout",
"url":2,
"doc":"Get the layout object if set in styles, or a default layout."
},
{
"ref":"textual.screen.Screen.is_container",
"url":2,
"doc":"Check if this widget is a container (contains other widgets). Returns: bool: True if this widget is a container."
},
{
"ref":"textual.screen.Screen.is_scrollable",
"url":2,
"doc":"Check if this Widget may be scrolled. Returns: bool: True if this widget may be scrolled."
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
"ref":"textual.screen.Screen.render_lines",
"url":2,
"doc":"Render the widget in to lines. Args: crop (Region): Region within visible area to. Returns: Lines: A list of list of segments",
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
"ref":"textual.screen.Screen.css",
"url":3,
"doc":"Gets the CSS for this class and inherited from bases. Returns: list[tuple[str, str : a list of tuples containing (PATH, SOURCE) for this and inherited from base classes."
},
{
"ref":"textual.screen.Screen.parent",
"url":3,
"doc":"Get the parent node. Returns: DOMNode | None: The node which is the direct parent of this node."
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
"ref":"textual.screen.Screen.text_style",
"url":3,
"doc":"Get the text style object. A widget's style is influenced by its parent. For instance if a widgets background has an alpha, then its parent's background color will show through. Additionally, widgets will inherit their parent's text style (i.e. bold, italic etc). Returns: Style: Rich Style object."
},
{
"ref":"textual.screen.Screen.rich_style",
"url":3,
"doc":"Get a Rich Style object for this DOMNode."
},
{
"ref":"textual.screen.Screen.colors",
"url":3,
"doc":"Gets the Widgets foreground and background colors, and its parent's colors. Returns: tuple[tuple[Color, Color], tuple[Color, Color : Base colors and widget colors"
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
"ref":"textual.screen.Screen.reset_styles",
"url":3,
"doc":"Reset styles back to their initial state",
"func":1
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
"doc":"Generate all descendants of this node. Args: with_self (bool, optional): Also include self in the results. Defaults to True.",
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
"doc":"Get the current app. Raises: NoActiveAppError: if no active app could be found for the current asyncio context"
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
"ref":"textual.suggestions",
"url":57,
"doc":""
},
{
"ref":"textual.suggestions.get_suggestion",
"url":57,
"doc":"Returns a close match of  word amongst  possible_words . Args: word (str): The word we want to find a close match for possible_words (Sequence[str]): The words amongst which we want to find a close match Returns: str | None: The closest match amongst the  possible_words . Returns  None if no close matches could be found. Example: returns \"red\" for word \"redu\" and possible words (\"yellow\", \"red\")",
"func":1
},
{
"ref":"textual.suggestions.get_suggestions",
"url":57,
"doc":"Returns a list of up to  count matches of  word amongst  possible_words . Args: word (str): The word we want to find a close match for possible_words (Sequence[str]): The words amongst which we want to find close matches Returns: list[str]: The closest matches amongst the  possible_words , from the closest to the least close. Returns an empty list if no close matches could be found. Example: returns [\"yellow\", \"ellow\"] for word \"yllow\" and possible words (\"yellow\", \"red\", \"ellow\")",
"func":1
},
{
"ref":"textual.draw",
"url":58,
"doc":""
},
{
"ref":"textual.draw.DrawStyle",
"url":58,
"doc":"An enumeration."
},
{
"ref":"textual.draw.DrawStyle.NONE",
"url":58,
"doc":""
},
{
"ref":"textual.draw.DrawStyle.ASCII",
"url":58,
"doc":""
},
{
"ref":"textual.draw.DrawStyle.SQUARE",
"url":58,
"doc":""
},
{
"ref":"textual.draw.DrawStyle.HEAVY",
"url":58,
"doc":""
},
{
"ref":"textual.draw.DrawStyle.ROUNDED",
"url":58,
"doc":""
},
{
"ref":"textual.draw.DrawStyle.DOUBLE",
"url":58,
"doc":""
}
]