URLS=[
"textual/index.html",
"textual/scrollbar.html",
"textual/message.html",
"textual/widget.html",
"textual/dom.html",
"textual/message_pump.html",
"textual/drivers/index.html",
"textual/drivers/headless_driver.html",
"textual/driver.html",
"textual/drivers/linux_driver.html",
"textual/geometry.html",
"textual/file_monitor.html",
"textual/actions.html",
"textual/render.html",
"textual/suggestions.html",
"textual/design.html",
"textual/features.html",
"textual/scroll_view.html",
"textual/containers.html",
"textual/constants.html",
"textual/cli/index.html",
"textual/cli/previews/index.html",
"textual/renderables/index.html",
"textual/renderables/tint.html",
"textual/renderables/sparkline.html",
"textual/renderables/align.html",
"textual/renderables/underline_bar.html",
"textual/renderables/gradient.html",
"textual/renderables/blank.html",
"textual/renderables/text_opacity.html",
"textual/color.html",
"textual/messages.html",
"textual/binding.html",
"textual/box_model.html",
"textual/draw.html",
"textual/events.html",
"textual/screen.html",
"textual/devtools/index.html",
"textual/devtools/renderables.html",
"textual/keys.html",
"textual/reactive.html",
"textual/case.html",
"textual/timer.html",
"textual/errors.html",
"textual/layouts/index.html",
"textual/layouts/horizontal.html",
"textual/layouts/factory.html",
"textual/layouts/vertical.html",
"textual/layouts/grid.html",
"textual/css/index.html",
"textual/css/scalar.html",
"textual/css/stylesheet.html",
"textual/css/styles.html",
"textual/css/parse.html",
"textual/css/constants.html",
"textual/css/types.html",
"textual/css/tokenizer.html",
"textual/css/query.html",
"textual/css/transition.html",
"textual/css/match.html",
"textual/css/scalar_animation.html",
"textual/css/model.html",
"textual/css/tokenize.html",
"textual/css/errors.html"
];
INDEX=[
{
"ref":"textual",
"url":0,
"doc":""
},
{
"ref":"textual.panic",
"url":0,
"doc":"",
"func":1
},
{
"ref":"textual.scrollbar",
"url":1,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollMessage",
"url":1,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.scrollbar.ScrollMessage.sender",
"url":1,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollMessage.namespace",
"url":1,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollMessage.bubble",
"url":1,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollMessage.verbose",
"url":1,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollMessage.no_dispatch",
"url":1,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollMessage.handler_name",
"url":2,
"doc":"The name of the handler associated with this message."
},
{
"ref":"textual.scrollbar.ScrollMessage.can_replace",
"url":2,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.scrollbar.ScrollMessage.prevent_default",
"url":2,
"doc":"Suppress the default action(s). This will prevent handlers in any base classes from being called. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollMessage.stop",
"url":2,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollMessage.name",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollMessage.time",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollUp",
"url":1,
"doc":"Message sent when clicking above handle."
},
{
"ref":"textual.scrollbar.ScrollUp.sender",
"url":1,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollUp.namespace",
"url":1,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollUp.bubble",
"url":1,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollUp.verbose",
"url":1,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollUp.no_dispatch",
"url":1,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollUp.handler_name",
"url":2,
"doc":"The name of the handler associated with this message."
},
{
"ref":"textual.scrollbar.ScrollUp.can_replace",
"url":2,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.scrollbar.ScrollUp.prevent_default",
"url":2,
"doc":"Suppress the default action(s). This will prevent handlers in any base classes from being called. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollUp.stop",
"url":2,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollUp.name",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollUp.time",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollDown",
"url":1,
"doc":"Message sent when clicking below handle."
},
{
"ref":"textual.scrollbar.ScrollDown.sender",
"url":1,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollDown.namespace",
"url":1,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollDown.bubble",
"url":1,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollDown.verbose",
"url":1,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollDown.no_dispatch",
"url":1,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollDown.handler_name",
"url":2,
"doc":"The name of the handler associated with this message."
},
{
"ref":"textual.scrollbar.ScrollDown.can_replace",
"url":2,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.scrollbar.ScrollDown.prevent_default",
"url":2,
"doc":"Suppress the default action(s). This will prevent handlers in any base classes from being called. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollDown.stop",
"url":2,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollDown.name",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollDown.time",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollLeft",
"url":1,
"doc":"Message sent when clicking above handle."
},
{
"ref":"textual.scrollbar.ScrollLeft.sender",
"url":1,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollLeft.namespace",
"url":1,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollLeft.bubble",
"url":1,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollLeft.verbose",
"url":1,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollLeft.no_dispatch",
"url":1,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollLeft.handler_name",
"url":2,
"doc":"The name of the handler associated with this message."
},
{
"ref":"textual.scrollbar.ScrollLeft.can_replace",
"url":2,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.scrollbar.ScrollLeft.prevent_default",
"url":2,
"doc":"Suppress the default action(s). This will prevent handlers in any base classes from being called. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollLeft.stop",
"url":2,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollLeft.name",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollLeft.time",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollRight",
"url":1,
"doc":"Message sent when clicking below handle."
},
{
"ref":"textual.scrollbar.ScrollRight.sender",
"url":1,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollRight.namespace",
"url":1,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollRight.bubble",
"url":1,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollRight.verbose",
"url":1,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollRight.no_dispatch",
"url":1,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollRight.handler_name",
"url":2,
"doc":"The name of the handler associated with this message."
},
{
"ref":"textual.scrollbar.ScrollRight.can_replace",
"url":2,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.scrollbar.ScrollRight.prevent_default",
"url":2,
"doc":"Suppress the default action(s). This will prevent handlers in any base classes from being called. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollRight.stop",
"url":2,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollRight.name",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollRight.time",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollTo",
"url":1,
"doc":"Message sent when click and dragging handle."
},
{
"ref":"textual.scrollbar.ScrollTo.sender",
"url":1,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollTo.namespace",
"url":1,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollTo.bubble",
"url":1,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollTo.verbose",
"url":1,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollTo.no_dispatch",
"url":1,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollTo.handler_name",
"url":2,
"doc":"The name of the handler associated with this message."
},
{
"ref":"textual.scrollbar.ScrollTo.can_replace",
"url":2,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.scrollbar.ScrollTo.prevent_default",
"url":2,
"doc":"Suppress the default action(s). This will prevent handlers in any base classes from being called. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollTo.stop",
"url":2,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollTo.name",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollTo.time",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollBarRender",
"url":1,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollBarRender.render_bar",
"url":1,
"doc":"",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar",
"url":1,
"doc":"A Widget is the base class for Textual widgets. See also [static][textual.widgets._static.Static] for starting point for your own widgets."
},
{
"ref":"textual.scrollbar.ScrollBar.DEFAULT_CSS",
"url":1,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollBar.window_virtual_size",
"url":1,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.scrollbar.ScrollBar.window_size",
"url":1,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.scrollbar.ScrollBar.position",
"url":1,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.scrollbar.ScrollBar.mouse_over",
"url":1,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.scrollbar.ScrollBar.grabbed",
"url":1,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.scrollbar.ScrollBar.render",
"url":1,
"doc":"Get renderable for widget. Returns: RenderableType: Any renderable",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.action_scroll_down",
"url":1,
"doc":"",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.action_scroll_up",
"url":1,
"doc":"",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.action_grab",
"url":1,
"doc":"",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.action_released",
"url":1,
"doc":"",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.can_focus",
"url":1,
"doc":"Widget may receive focus."
},
{
"ref":"textual.scrollbar.ScrollBar.can_focus_children",
"url":1,
"doc":"Widget's children may receive focus."
},
{
"ref":"textual.scrollbar.ScrollBar.expand",
"url":3,
"doc":"Rich renderable may expand."
},
{
"ref":"textual.scrollbar.ScrollBar.shrink",
"url":3,
"doc":"Rich renderable may shrink."
},
{
"ref":"textual.scrollbar.ScrollBar.auto_links",
"url":3,
"doc":"Widget will highlight links automatically."
},
{
"ref":"textual.scrollbar.ScrollBar.hover_style",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.scrollbar.ScrollBar.highlight_link_id",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.scrollbar.ScrollBar.virtual_size",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.scrollbar.ScrollBar.auto_width",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.scrollbar.ScrollBar.auto_height",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.scrollbar.ScrollBar.has_focus",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.scrollbar.ScrollBar.descendant_has_focus",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.scrollbar.ScrollBar.scroll_x",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.scrollbar.ScrollBar.scroll_y",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.scrollbar.ScrollBar.scroll_target_x",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.scrollbar.ScrollBar.scroll_target_y",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.scrollbar.ScrollBar.show_vertical_scrollbar",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.scrollbar.ScrollBar.show_horizontal_scrollbar",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.scrollbar.ScrollBar.siblings",
"url":3,
"doc":"Get the widget's siblings (self is removed from the return list). Returns: list[Widget]: A list of siblings."
},
{
"ref":"textual.scrollbar.ScrollBar.allow_vertical_scroll",
"url":3,
"doc":"Check if vertical scroll is permitted. May be overridden if you want different logic regarding allowing scrolling. Returns: bool: True if the widget may scroll _vertically_."
},
{
"ref":"textual.scrollbar.ScrollBar.allow_horizontal_scroll",
"url":3,
"doc":"Check if horizontal scroll is permitted. May be overridden if you want different logic regarding allowing scrolling. Returns: bool: True if the widget may scroll _horizontally_."
},
{
"ref":"textual.scrollbar.ScrollBar.offset",
"url":3,
"doc":"Widget offset from origin. Returns: Offset: Relative offset."
},
{
"ref":"textual.scrollbar.ScrollBar.get_component_rich_style",
"url":3,
"doc":"Get a  Rich style for a component. Args: name (str): Name of component. Returns: Style: A Rich style object.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.mount",
"url":3,
"doc":"Mount child widgets (making this widget a container). Widgets may be passed as positional arguments or keyword arguments. If keyword arguments, the keys will be set as the Widget's id. Example:  python self.mount(Static(\"hello\"), header=Header(  ",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.compose",
"url":3,
"doc":"Called by Textual to create child widgets. Extend this to build a UI. Example:  python def compose(self) -> ComposeResult: yield Header() yield Container( TreeControl(), Viewer() ) yield Footer()  ",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.get_content_width",
"url":3,
"doc":"Called by textual to get the width of the content area. May be overridden in a subclass. Args: container (Size): Size of the container (immediate parent) widget. viewport (Size): Size of the viewport. Returns: int: The optimal width of the content.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.get_content_height",
"url":3,
"doc":"Called by Textual to get the height of the content area. May be overridden in a subclass. Args: container (Size): Size of the container (immediate parent) widget. viewport (Size): Size of the viewport. width (int): Width of renderable. Returns: int: The height of the content.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.max_scroll_x",
"url":3,
"doc":"The maximum value of  scroll_x ."
},
{
"ref":"textual.scrollbar.ScrollBar.max_scroll_y",
"url":3,
"doc":"The maximum value of  scroll_y ."
},
{
"ref":"textual.scrollbar.ScrollBar.scrollbar_corner",
"url":3,
"doc":"Return the ScrollBarCorner - the cells that appear between the horizontal and vertical scrollbars (only when both are visible)."
},
{
"ref":"textual.scrollbar.ScrollBar.vertical_scrollbar",
"url":3,
"doc":"Get a vertical scrollbar (create if necessary). Returns: ScrollBar: ScrollBar Widget."
},
{
"ref":"textual.scrollbar.ScrollBar.horizontal_scrollbar",
"url":3,
"doc":"Get a vertical scrollbar (create if necessary). Returns: ScrollBar: ScrollBar Widget."
},
{
"ref":"textual.scrollbar.ScrollBar.scrollbars_enabled",
"url":3,
"doc":"A tuple of booleans that indicate if scrollbars are enabled. Returns: tuple[bool, bool]: A tuple of ( ,  )"
},
{
"ref":"textual.scrollbar.ScrollBar.scrollbar_size_vertical",
"url":3,
"doc":"Get the width used by the  vertical scrollbar. Returns: int: Number of columns in the vertical scrollbar."
},
{
"ref":"textual.scrollbar.ScrollBar.scrollbar_size_horizontal",
"url":3,
"doc":"Get the height used by the  horizontal scrollbar. Returns: int: Number of rows in the horizontal scrollbar."
},
{
"ref":"textual.scrollbar.ScrollBar.scrollbar_gutter",
"url":3,
"doc":"Spacing required to fit scrollbar(s). Returns: Spacing: Scrollbar gutter spacing."
},
{
"ref":"textual.scrollbar.ScrollBar.gutter",
"url":3,
"doc":"Spacing for padding / border / scrollbars. Returns: Spacing: Additional spacing around content area."
},
{
"ref":"textual.scrollbar.ScrollBar.size",
"url":3,
"doc":"The size of the content area. Returns: Size: Content area size."
},
{
"ref":"textual.scrollbar.ScrollBar.outer_size",
"url":3,
"doc":"The size of the widget (including padding and border). Returns: Size: Outer size."
},
{
"ref":"textual.scrollbar.ScrollBar.container_size",
"url":3,
"doc":"The size of the container (parent widget). Returns: Size: Container size."
},
{
"ref":"textual.scrollbar.ScrollBar.content_region",
"url":3,
"doc":"Gets an absolute region containing the content (minus padding and border). Returns: Region: Screen region that contains a widget's content."
},
{
"ref":"textual.scrollbar.ScrollBar.content_offset",
"url":3,
"doc":"An offset from the Widget origin where the content begins. Returns: Offset: Offset from widget's origin."
},
{
"ref":"textual.scrollbar.ScrollBar.content_size",
"url":3,
"doc":"Get the size of the content area."
},
{
"ref":"textual.scrollbar.ScrollBar.region",
"url":3,
"doc":"The region occupied by this widget, relative to the Screen. Raises: NoScreen: If there is no screen. errors.NoWidget: If the widget is not on the screen. Returns: Region: Region within screen occupied by widget."
},
{
"ref":"textual.scrollbar.ScrollBar.container_viewport",
"url":3,
"doc":"The viewport region (parent window). Returns: Region: The region that contains this widget."
},
{
"ref":"textual.scrollbar.ScrollBar.virtual_region",
"url":3,
"doc":"The widget region relative to it's container. Which may not be visible, depending on scroll offset."
},
{
"ref":"textual.scrollbar.ScrollBar.window_region",
"url":3,
"doc":"The region within the scrollable area that is currently visible. Returns: Region: New region."
},
{
"ref":"textual.scrollbar.ScrollBar.virtual_region_with_margin",
"url":3,
"doc":"The widget region relative to its container ( including margin ), which may not be visible, depending on the scroll offset. Returns: Region: The virtual region of the Widget, inclusive of its margin."
},
{
"ref":"textual.scrollbar.ScrollBar.focusable_children",
"url":3,
"doc":"Get the children which may be focused. Returns: list[Widget]: List of widgets that can receive focus."
},
{
"ref":"textual.scrollbar.ScrollBar.scroll_offset",
"url":3,
"doc":"Get the current scroll offset. Returns: Offset: Offset a container has been scrolled by."
},
{
"ref":"textual.scrollbar.ScrollBar.is_transparent",
"url":3,
"doc":"Check if the background styles is not set. Returns: bool:  True if there is background color, otherwise  False ."
},
{
"ref":"textual.scrollbar.ScrollBar.animate",
"url":3,
"doc":"Get an animator to animate attributes on this widget. Example:  python self.animate(\"brightness\", 0.5)  Returns: BoundAnimator: An animator bound to this widget."
},
{
"ref":"textual.scrollbar.ScrollBar.is_container",
"url":3,
"doc":"Check if this widget is a container (contains other widgets). Returns: bool: True if this widget is a container."
},
{
"ref":"textual.scrollbar.ScrollBar.is_scrollable",
"url":3,
"doc":"Check if this Widget may be scrolled. Returns: bool: True if this widget may be scrolled."
},
{
"ref":"textual.scrollbar.ScrollBar.layer",
"url":3,
"doc":"Get the name of this widgets layer. Returns: str: Name of layer."
},
{
"ref":"textual.scrollbar.ScrollBar.layers",
"url":3,
"doc":"Layers of from parent. Returns: tuple[str,  .]: Tuple of layer names."
},
{
"ref":"textual.scrollbar.ScrollBar.link_style",
"url":3,
"doc":"Style of links."
},
{
"ref":"textual.scrollbar.ScrollBar.link_hover_style",
"url":3,
"doc":"Style of links with mouse hover."
},
{
"ref":"textual.scrollbar.ScrollBar.scroll_to",
"url":3,
"doc":"Scroll to a given (absolute) coordinate, optionally animating. Args: x (int | None, optional): X coordinate (column) to scroll to, or None for no change. Defaults to None. y (int | None, optional): Y coordinate (row) to scroll to, or None for no change. Defaults to None. animate (bool, optional): Animate to new scroll position. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.scroll_relative",
"url":3,
"doc":"Scroll relative to current position. Args: x (int | None, optional): X distance (columns) to scroll, or  None for no change. Defaults to None. y (int | None, optional): Y distance (rows) to scroll, or  None for no change. Defaults to None. animate (bool, optional): Animate to new scroll position. Defaults to False. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.scroll_home",
"url":3,
"doc":"Scroll to home position. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.scroll_end",
"url":3,
"doc":"Scroll to the end of the container. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.scroll_left",
"url":3,
"doc":"Scroll one cell left. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.scroll_right",
"url":3,
"doc":"Scroll on cell right. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.scroll_down",
"url":3,
"doc":"Scroll one line down. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.scroll_up",
"url":3,
"doc":"Scroll one line up. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.scroll_page_up",
"url":3,
"doc":"Scroll one page up. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.scroll_page_down",
"url":3,
"doc":"Scroll one page down. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.scroll_page_left",
"url":3,
"doc":"Scroll one page left. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.scroll_page_right",
"url":3,
"doc":"Scroll one page right. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.scroll_to_widget",
"url":3,
"doc":"Scroll scrolling to bring a widget in to view. Args: widget (Widget): A descendant widget. animate (bool, optional): True to animate, or False to jump. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling has occurred in any descendant, otherwise False.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.scroll_to_region",
"url":3,
"doc":"Scrolls a given region in to view, if required. This method will scroll the least distance required to move  region fully within the scrollable area. Args: region (Region): A region that should be visible. spacing (Spacing | None, optional): Optional spacing around the region. Defaults to None. animate (bool, optional): True to animate, or False to jump. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: Offset: The distance that was scrolled.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.scroll_visible",
"url":3,
"doc":"Scroll the container to make this widget visible. Args: animate (bool, optional): _description_. Defaults to True. speed (float | None, optional): _description_. Defaults to None. duration (float | None, optional): _description_. Defaults to None.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.get_pseudo_classes",
"url":3,
"doc":"Pseudo classes for a widget. Returns: Iterable[str]: Names of the pseudo classes.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.post_render",
"url":3,
"doc":"Applies style attributes to the default renderable. Returns: RenderableType: A new renderable.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.watch_mouse_over",
"url":3,
"doc":"Update from CSS if mouse over state changes.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.watch_has_focus",
"url":3,
"doc":"Update from CSS if has focus state changes.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.render_line",
"url":3,
"doc":"Render a line of content. Args: y (int): Y Coordinate of line. Returns: list[Segment]: A rendered line.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.render_lines",
"url":3,
"doc":"Render the widget in to lines. Args: crop (Region): Region within visible area to render. Returns: Lines: A list of list of segments.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.get_style_at",
"url":3,
"doc":"Get the Rich style at a given screen offset. Args: x (int): X coordinate relative to the screen. y (int): Y coordinate relative to the screen. Returns: Style: A rich Style object.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.refresh",
"url":3,
"doc":"Initiate a refresh of the widget. This method sets an internal flag to perform a refresh, which will be done on the next idle event. Only one refresh will be done even if this method is called multiple times. By default this method will cause the content of the widget to refresh, but not change its size. You can also set  layout=True to perform a layout.  ! warning It is rarely necessary to call this method explicitly. Updating styles or reactive attributes will do this automatically. Args:  regions (Region, optional): Additional screen regions to mark as dirty. repaint (bool, optional): Repaint the widget (will call render() again). Defaults to True. layout (bool, optional): Also layout widgets in the view. Defaults to False.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.remove",
"url":3,
"doc":"Remove the Widget from the DOM (effectively deleting it)",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.action",
"url":3,
"doc":"Perform a given action, with this widget as the default namespace. Args: action (str): Action encoded as a string.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.post_message",
"url":3,
"doc":"Post a message to this widget. Args: message (Message): Message to post. Returns: bool: True if the message was posted, False if this widget was closed / closing.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.focus",
"url":3,
"doc":"Give focus to this widget. Args: scroll_visible (bool, optional): Scroll parent to make this widget visible. Defaults to True.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.capture_mouse",
"url":3,
"doc":"Capture (or release) the mouse. When captured, mouse events will go to this widget even when the pointer is not directly over the widget. Args: capture (bool, optional): True to capture or False to release. Defaults to True.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.release_mouse",
"url":3,
"doc":"Release the mouse. Mouse events will only be sent when the mouse is over the widget.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.get_component_styles",
"url":4,
"doc":"Get a \"component\" styles object (must be defined in COMPONENT_CLASSES classvar). Args: name (str): Name of the component. Raises: KeyError: If the component class doesn't exist. Returns: RenderStyles: A Styles object.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.get_default_css",
"url":4,
"doc":"Gets the CSS for this class and inherited from bases. Returns: list[tuple[str, str : a list of tuples containing (PATH, SOURCE) for this and inherited from base classes.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.parent",
"url":4,
"doc":"Get the parent node. Returns: DOMNode | None: The node which is the direct parent of this node."
},
{
"ref":"textual.scrollbar.ScrollBar.screen",
"url":4,
"doc":"Get the screen that this node is contained within. Note that this may not be the currently active screen within the app."
},
{
"ref":"textual.scrollbar.ScrollBar.id",
"url":4,
"doc":"The ID of this node, or None if the node has no ID. Returns: (str | None): A Node ID or None."
},
{
"ref":"textual.scrollbar.ScrollBar.css_identifier",
"url":4,
"doc":"A CSS selector that identifies this DOM node."
},
{
"ref":"textual.scrollbar.ScrollBar.css_identifier_styled",
"url":4,
"doc":"A stylized CSS identifier."
},
{
"ref":"textual.scrollbar.ScrollBar.classes",
"url":4,
"doc":"A frozenset of the current classes set on the widget. Returns: frozenset[str]: Set of class names."
},
{
"ref":"textual.scrollbar.ScrollBar.pseudo_classes",
"url":4,
"doc":"Get a set of all pseudo classes"
},
{
"ref":"textual.scrollbar.ScrollBar.css_path_nodes",
"url":4,
"doc":"A list of nodes from the root to this node, forming a \"path\". Returns: list[DOMNode]: List of Nodes, starting with the root and ending with this node."
},
{
"ref":"textual.scrollbar.ScrollBar.display",
"url":4,
"doc":"Check if this widget should display or not. Returns: bool:  True if this DOMNode is displayed ( display != \"none\" ) otherwise  False ."
},
{
"ref":"textual.scrollbar.ScrollBar.tree",
"url":4,
"doc":"Get a Rich tree object which will recursively render the structure of the node tree. Returns: Tree: A Rich object which may be printed."
},
{
"ref":"textual.scrollbar.ScrollBar.text_style",
"url":4,
"doc":"Get the text style object. A widget's style is influenced by its parent. for instance if a parent is bold, then the child will also be bold. Returns: Style: Rich Style object."
},
{
"ref":"textual.scrollbar.ScrollBar.rich_style",
"url":4,
"doc":"Get a Rich Style object for this DOMNode."
},
{
"ref":"textual.scrollbar.ScrollBar.background_colors",
"url":4,
"doc":"Get the background color and the color of the parent's background. Returns: tuple[Color, Color]: Tuple of (base background, background)"
},
{
"ref":"textual.scrollbar.ScrollBar.colors",
"url":4,
"doc":"Gets the Widgets foreground and background colors, and its parent's (base) colors. Returns: tuple[Color, Color, Color, Color]: Tuple of (base background, base color, background, color)"
},
{
"ref":"textual.scrollbar.ScrollBar.ancestors",
"url":4,
"doc":"Get a list of Nodes by tracing ancestors all the way back to App."
},
{
"ref":"textual.scrollbar.ScrollBar.displayed_children",
"url":4,
"doc":"The children which don't have display: none set. Returns: list[DOMNode]: Children of this widget which will be displayed."
},
{
"ref":"textual.scrollbar.ScrollBar.reset_styles",
"url":4,
"doc":"Reset styles back to their initial state",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.walk_children",
"url":4,
"doc":"Generate descendant nodes. Args: filter_type (type[WalkType] | None, optional): Filter only this type, or None for no filter. Defaults to None. with_self (bool, optional): Also yield self in addition to descendants. Defaults to True. Returns: Iterable[DOMNode | WalkType]: An iterable of nodes.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.get_child",
"url":4,
"doc":"Return the first child (immediate descendent) of this node with the given ID. Args: id (str): The ID of the child. Returns: DOMNode: The first child of this node with the ID. Raises: NoMatchingNodesError: if no children could be found for this ID",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.query",
"url":4,
"doc":"Get a DOM query matching a selector. Args: selector (str, optional): A CSS selector or  None for all nodes. Defaults to None. Returns: DOMQuery: A query object.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.query_one",
"url":4,
"doc":"Get the first Widget matching the given selector or selector type. Args: selector (str | None, optional): A selector. expect_type (type, optional): Require the object be of the supplied type, or None for any type. Defaults to None. Returns: Widget | ExpectType: A widget matching the selector.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.set_styles",
"url":4,
"doc":"Set custom styles on this object.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.has_class",
"url":4,
"doc":"Check if the Node has all the given class names. Args:  class_names (str): CSS class names to check. Returns: bool:  True if the node has all the given class names, otherwise  False .",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.set_class",
"url":4,
"doc":"Add or remove class(es) based on a condition. Args: add (bool): Add the classes if True, otherwise remove them.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.add_class",
"url":4,
"doc":"Add class names to this Node. Args:  class_names (str): CSS class names to add.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.remove_class",
"url":4,
"doc":"Remove class names from this Node. Args:  class_names (str): CSS class names to remove.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.toggle_class",
"url":4,
"doc":"Toggle class names on this Node. Args:  class_names (str): CSS class names to toggle.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.has_pseudo_class",
"url":4,
"doc":"Check for pseudo class (such as hover, focus etc)",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.app",
"url":5,
"doc":"Get the current app. Returns: App: The current app. Raises: NoActiveAppError: if no active app could be found for the current asyncio context"
},
{
"ref":"textual.scrollbar.ScrollBar.log",
"url":5,
"doc":"Get a logger for this object. Returns: Logger: A logger."
},
{
"ref":"textual.scrollbar.ScrollBar.disable_messages",
"url":5,
"doc":"Disable message types from being processed.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.enable_messages",
"url":5,
"doc":"Enable processing of messages types.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.set_timer",
"url":5,
"doc":"Make a function call after a delay. Args: delay (float): Time to wait before invoking callback. callback (TimerCallback | None, optional): Callback to call after time has expired. Defaults to None. name (str | None, optional): Name of the timer (for debug). Defaults to None. pause (bool, optional): Start timer paused. Defaults to False. Returns: Timer: A timer object.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.set_interval",
"url":5,
"doc":"Call a function at periodic intervals. Args: interval (float): Time between calls. callback (TimerCallback | None, optional): Function to call. Defaults to None. name (str | None, optional): Name of the timer object. Defaults to None. repeat (int, optional): Number of times to repeat the call or 0 for continuous. Defaults to 0. pause (bool, optional): Start the timer paused. Defaults to False. Returns: Timer: A timer object.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.call_later",
"url":5,
"doc":"Schedule a callback to run after all messages are processed and the screen has been refreshed. Positional and keyword arguments are passed to the callable. Args: callback (Callable): A callable.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.on_event",
"url":5,
"doc":"Called to process an event. Args: event (events.Event): An Event object.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.check_idle",
"url":5,
"doc":"Prompt the message pump to call idle if the queue is empty.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.post_message_no_wait",
"url":5,
"doc":"Posts a message on the queue. Args: message (Message): A message (or Event). Returns: bool: True if the messages was processed, False if it wasn't.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.emit_no_wait",
"url":5,
"doc":"Send a message to the _parent_, non async version. Args: message (Message): A message object. Returns: bool: True if the message was posted successfully.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.emit",
"url":5,
"doc":"Send a message to the _parent_. Args: message (Message): A message object. Returns: bool: True if the message was posted successfully.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.dispatch_key",
"url":5,
"doc":"Dispatch a key event to method. This method will call the method named 'key_ ' if it exists. Args: event (events.Key): A key event. Returns: bool: True if key was handled, otherwise False.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBarCorner",
"url":1,
"doc":"Widget which fills the gap between horizontal and vertical scrollbars, should they both be present."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.COMPONENT_CLASSES",
"url":1,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollBarCorner.hover_style",
"url":1,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.highlight_link_id",
"url":1,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.render",
"url":1,
"doc":"Get renderable for widget. Returns: RenderableType: Any renderable",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBarCorner.can_focus",
"url":1,
"doc":"Widget may receive focus."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.can_focus_children",
"url":1,
"doc":"Widget's children may receive focus."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.expand",
"url":3,
"doc":"Rich renderable may expand."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.shrink",
"url":3,
"doc":"Rich renderable may shrink."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.auto_links",
"url":3,
"doc":"Widget will highlight links automatically."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.virtual_size",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.auto_width",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.auto_height",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.has_focus",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.descendant_has_focus",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.mouse_over",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.scroll_x",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.scroll_y",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.scroll_target_x",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.scroll_target_y",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.show_vertical_scrollbar",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.show_horizontal_scrollbar",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.siblings",
"url":3,
"doc":"Get the widget's siblings (self is removed from the return list). Returns: list[Widget]: A list of siblings."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.allow_vertical_scroll",
"url":3,
"doc":"Check if vertical scroll is permitted. May be overridden if you want different logic regarding allowing scrolling. Returns: bool: True if the widget may scroll _vertically_."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.allow_horizontal_scroll",
"url":3,
"doc":"Check if horizontal scroll is permitted. May be overridden if you want different logic regarding allowing scrolling. Returns: bool: True if the widget may scroll _horizontally_."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.offset",
"url":3,
"doc":"Widget offset from origin. Returns: Offset: Relative offset."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.get_component_rich_style",
"url":3,
"doc":"Get a  Rich style for a component. Args: name (str): Name of component. Returns: Style: A Rich style object.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBarCorner.mount",
"url":3,
"doc":"Mount child widgets (making this widget a container). Widgets may be passed as positional arguments or keyword arguments. If keyword arguments, the keys will be set as the Widget's id. Example:  python self.mount(Static(\"hello\"), header=Header(  ",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBarCorner.compose",
"url":3,
"doc":"Called by Textual to create child widgets. Extend this to build a UI. Example:  python def compose(self) -> ComposeResult: yield Header() yield Container( TreeControl(), Viewer() ) yield Footer()  ",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBarCorner.get_content_width",
"url":3,
"doc":"Called by textual to get the width of the content area. May be overridden in a subclass. Args: container (Size): Size of the container (immediate parent) widget. viewport (Size): Size of the viewport. Returns: int: The optimal width of the content.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBarCorner.get_content_height",
"url":3,
"doc":"Called by Textual to get the height of the content area. May be overridden in a subclass. Args: container (Size): Size of the container (immediate parent) widget. viewport (Size): Size of the viewport. width (int): Width of renderable. Returns: int: The height of the content.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBarCorner.max_scroll_x",
"url":3,
"doc":"The maximum value of  scroll_x ."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.max_scroll_y",
"url":3,
"doc":"The maximum value of  scroll_y ."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.scrollbar_corner",
"url":3,
"doc":"Return the ScrollBarCorner - the cells that appear between the horizontal and vertical scrollbars (only when both are visible)."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.vertical_scrollbar",
"url":3,
"doc":"Get a vertical scrollbar (create if necessary). Returns: ScrollBar: ScrollBar Widget."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.horizontal_scrollbar",
"url":3,
"doc":"Get a vertical scrollbar (create if necessary). Returns: ScrollBar: ScrollBar Widget."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.scrollbars_enabled",
"url":3,
"doc":"A tuple of booleans that indicate if scrollbars are enabled. Returns: tuple[bool, bool]: A tuple of ( ,  )"
},
{
"ref":"textual.scrollbar.ScrollBarCorner.scrollbar_size_vertical",
"url":3,
"doc":"Get the width used by the  vertical scrollbar. Returns: int: Number of columns in the vertical scrollbar."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.scrollbar_size_horizontal",
"url":3,
"doc":"Get the height used by the  horizontal scrollbar. Returns: int: Number of rows in the horizontal scrollbar."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.scrollbar_gutter",
"url":3,
"doc":"Spacing required to fit scrollbar(s). Returns: Spacing: Scrollbar gutter spacing."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.gutter",
"url":3,
"doc":"Spacing for padding / border / scrollbars. Returns: Spacing: Additional spacing around content area."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.size",
"url":3,
"doc":"The size of the content area. Returns: Size: Content area size."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.outer_size",
"url":3,
"doc":"The size of the widget (including padding and border). Returns: Size: Outer size."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.container_size",
"url":3,
"doc":"The size of the container (parent widget). Returns: Size: Container size."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.content_region",
"url":3,
"doc":"Gets an absolute region containing the content (minus padding and border). Returns: Region: Screen region that contains a widget's content."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.content_offset",
"url":3,
"doc":"An offset from the Widget origin where the content begins. Returns: Offset: Offset from widget's origin."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.content_size",
"url":3,
"doc":"Get the size of the content area."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.region",
"url":3,
"doc":"The region occupied by this widget, relative to the Screen. Raises: NoScreen: If there is no screen. errors.NoWidget: If the widget is not on the screen. Returns: Region: Region within screen occupied by widget."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.container_viewport",
"url":3,
"doc":"The viewport region (parent window). Returns: Region: The region that contains this widget."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.virtual_region",
"url":3,
"doc":"The widget region relative to it's container. Which may not be visible, depending on scroll offset."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.window_region",
"url":3,
"doc":"The region within the scrollable area that is currently visible. Returns: Region: New region."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.virtual_region_with_margin",
"url":3,
"doc":"The widget region relative to its container ( including margin ), which may not be visible, depending on the scroll offset. Returns: Region: The virtual region of the Widget, inclusive of its margin."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.focusable_children",
"url":3,
"doc":"Get the children which may be focused. Returns: list[Widget]: List of widgets that can receive focus."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.scroll_offset",
"url":3,
"doc":"Get the current scroll offset. Returns: Offset: Offset a container has been scrolled by."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.is_transparent",
"url":3,
"doc":"Check if the background styles is not set. Returns: bool:  True if there is background color, otherwise  False ."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.animate",
"url":3,
"doc":"Get an animator to animate attributes on this widget. Example:  python self.animate(\"brightness\", 0.5)  Returns: BoundAnimator: An animator bound to this widget."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.is_container",
"url":3,
"doc":"Check if this widget is a container (contains other widgets). Returns: bool: True if this widget is a container."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.is_scrollable",
"url":3,
"doc":"Check if this Widget may be scrolled. Returns: bool: True if this widget may be scrolled."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.layer",
"url":3,
"doc":"Get the name of this widgets layer. Returns: str: Name of layer."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.layers",
"url":3,
"doc":"Layers of from parent. Returns: tuple[str,  .]: Tuple of layer names."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.link_style",
"url":3,
"doc":"Style of links."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.link_hover_style",
"url":3,
"doc":"Style of links with mouse hover."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.scroll_to",
"url":3,
"doc":"Scroll to a given (absolute) coordinate, optionally animating. Args: x (int | None, optional): X coordinate (column) to scroll to, or None for no change. Defaults to None. y (int | None, optional): Y coordinate (row) to scroll to, or None for no change. Defaults to None. animate (bool, optional): Animate to new scroll position. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBarCorner.scroll_relative",
"url":3,
"doc":"Scroll relative to current position. Args: x (int | None, optional): X distance (columns) to scroll, or  None for no change. Defaults to None. y (int | None, optional): Y distance (rows) to scroll, or  None for no change. Defaults to None. animate (bool, optional): Animate to new scroll position. Defaults to False. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBarCorner.scroll_home",
"url":3,
"doc":"Scroll to home position. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBarCorner.scroll_end",
"url":3,
"doc":"Scroll to the end of the container. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBarCorner.scroll_left",
"url":3,
"doc":"Scroll one cell left. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBarCorner.scroll_right",
"url":3,
"doc":"Scroll on cell right. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBarCorner.scroll_down",
"url":3,
"doc":"Scroll one line down. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBarCorner.scroll_up",
"url":3,
"doc":"Scroll one line up. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBarCorner.scroll_page_up",
"url":3,
"doc":"Scroll one page up. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBarCorner.scroll_page_down",
"url":3,
"doc":"Scroll one page down. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBarCorner.scroll_page_left",
"url":3,
"doc":"Scroll one page left. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBarCorner.scroll_page_right",
"url":3,
"doc":"Scroll one page right. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBarCorner.scroll_to_widget",
"url":3,
"doc":"Scroll scrolling to bring a widget in to view. Args: widget (Widget): A descendant widget. animate (bool, optional): True to animate, or False to jump. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling has occurred in any descendant, otherwise False.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBarCorner.scroll_to_region",
"url":3,
"doc":"Scrolls a given region in to view, if required. This method will scroll the least distance required to move  region fully within the scrollable area. Args: region (Region): A region that should be visible. spacing (Spacing | None, optional): Optional spacing around the region. Defaults to None. animate (bool, optional): True to animate, or False to jump. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: Offset: The distance that was scrolled.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBarCorner.scroll_visible",
"url":3,
"doc":"Scroll the container to make this widget visible. Args: animate (bool, optional): _description_. Defaults to True. speed (float | None, optional): _description_. Defaults to None. duration (float | None, optional): _description_. Defaults to None.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBarCorner.get_pseudo_classes",
"url":3,
"doc":"Pseudo classes for a widget. Returns: Iterable[str]: Names of the pseudo classes.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBarCorner.post_render",
"url":3,
"doc":"Applies style attributes to the default renderable. Returns: RenderableType: A new renderable.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBarCorner.watch_mouse_over",
"url":3,
"doc":"Update from CSS if mouse over state changes.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBarCorner.watch_has_focus",
"url":3,
"doc":"Update from CSS if has focus state changes.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBarCorner.render_line",
"url":3,
"doc":"Render a line of content. Args: y (int): Y Coordinate of line. Returns: list[Segment]: A rendered line.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBarCorner.render_lines",
"url":3,
"doc":"Render the widget in to lines. Args: crop (Region): Region within visible area to render. Returns: Lines: A list of list of segments.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBarCorner.get_style_at",
"url":3,
"doc":"Get the Rich style at a given screen offset. Args: x (int): X coordinate relative to the screen. y (int): Y coordinate relative to the screen. Returns: Style: A rich Style object.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBarCorner.refresh",
"url":3,
"doc":"Initiate a refresh of the widget. This method sets an internal flag to perform a refresh, which will be done on the next idle event. Only one refresh will be done even if this method is called multiple times. By default this method will cause the content of the widget to refresh, but not change its size. You can also set  layout=True to perform a layout.  ! warning It is rarely necessary to call this method explicitly. Updating styles or reactive attributes will do this automatically. Args:  regions (Region, optional): Additional screen regions to mark as dirty. repaint (bool, optional): Repaint the widget (will call render() again). Defaults to True. layout (bool, optional): Also layout widgets in the view. Defaults to False.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBarCorner.remove",
"url":3,
"doc":"Remove the Widget from the DOM (effectively deleting it)",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBarCorner.action",
"url":3,
"doc":"Perform a given action, with this widget as the default namespace. Args: action (str): Action encoded as a string.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBarCorner.post_message",
"url":3,
"doc":"Post a message to this widget. Args: message (Message): Message to post. Returns: bool: True if the message was posted, False if this widget was closed / closing.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBarCorner.focus",
"url":3,
"doc":"Give focus to this widget. Args: scroll_visible (bool, optional): Scroll parent to make this widget visible. Defaults to True.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBarCorner.capture_mouse",
"url":3,
"doc":"Capture (or release) the mouse. When captured, mouse events will go to this widget even when the pointer is not directly over the widget. Args: capture (bool, optional): True to capture or False to release. Defaults to True.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBarCorner.release_mouse",
"url":3,
"doc":"Release the mouse. Mouse events will only be sent when the mouse is over the widget.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBarCorner.get_component_styles",
"url":4,
"doc":"Get a \"component\" styles object (must be defined in COMPONENT_CLASSES classvar). Args: name (str): Name of the component. Raises: KeyError: If the component class doesn't exist. Returns: RenderStyles: A Styles object.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBarCorner.get_default_css",
"url":4,
"doc":"Gets the CSS for this class and inherited from bases. Returns: list[tuple[str, str : a list of tuples containing (PATH, SOURCE) for this and inherited from base classes.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBarCorner.parent",
"url":4,
"doc":"Get the parent node. Returns: DOMNode | None: The node which is the direct parent of this node."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.screen",
"url":4,
"doc":"Get the screen that this node is contained within. Note that this may not be the currently active screen within the app."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.id",
"url":4,
"doc":"The ID of this node, or None if the node has no ID. Returns: (str | None): A Node ID or None."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.css_identifier",
"url":4,
"doc":"A CSS selector that identifies this DOM node."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.css_identifier_styled",
"url":4,
"doc":"A stylized CSS identifier."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.classes",
"url":4,
"doc":"A frozenset of the current classes set on the widget. Returns: frozenset[str]: Set of class names."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.pseudo_classes",
"url":4,
"doc":"Get a set of all pseudo classes"
},
{
"ref":"textual.scrollbar.ScrollBarCorner.css_path_nodes",
"url":4,
"doc":"A list of nodes from the root to this node, forming a \"path\". Returns: list[DOMNode]: List of Nodes, starting with the root and ending with this node."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.display",
"url":4,
"doc":"Check if this widget should display or not. Returns: bool:  True if this DOMNode is displayed ( display != \"none\" ) otherwise  False ."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.tree",
"url":4,
"doc":"Get a Rich tree object which will recursively render the structure of the node tree. Returns: Tree: A Rich object which may be printed."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.text_style",
"url":4,
"doc":"Get the text style object. A widget's style is influenced by its parent. for instance if a parent is bold, then the child will also be bold. Returns: Style: Rich Style object."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.rich_style",
"url":4,
"doc":"Get a Rich Style object for this DOMNode."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.background_colors",
"url":4,
"doc":"Get the background color and the color of the parent's background. Returns: tuple[Color, Color]: Tuple of (base background, background)"
},
{
"ref":"textual.scrollbar.ScrollBarCorner.colors",
"url":4,
"doc":"Gets the Widgets foreground and background colors, and its parent's (base) colors. Returns: tuple[Color, Color, Color, Color]: Tuple of (base background, base color, background, color)"
},
{
"ref":"textual.scrollbar.ScrollBarCorner.ancestors",
"url":4,
"doc":"Get a list of Nodes by tracing ancestors all the way back to App."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.displayed_children",
"url":4,
"doc":"The children which don't have display: none set. Returns: list[DOMNode]: Children of this widget which will be displayed."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.reset_styles",
"url":4,
"doc":"Reset styles back to their initial state",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBarCorner.walk_children",
"url":4,
"doc":"Generate descendant nodes. Args: filter_type (type[WalkType] | None, optional): Filter only this type, or None for no filter. Defaults to None. with_self (bool, optional): Also yield self in addition to descendants. Defaults to True. Returns: Iterable[DOMNode | WalkType]: An iterable of nodes.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBarCorner.get_child",
"url":4,
"doc":"Return the first child (immediate descendent) of this node with the given ID. Args: id (str): The ID of the child. Returns: DOMNode: The first child of this node with the ID. Raises: NoMatchingNodesError: if no children could be found for this ID",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBarCorner.query",
"url":4,
"doc":"Get a DOM query matching a selector. Args: selector (str, optional): A CSS selector or  None for all nodes. Defaults to None. Returns: DOMQuery: A query object.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBarCorner.query_one",
"url":4,
"doc":"Get the first Widget matching the given selector or selector type. Args: selector (str | None, optional): A selector. expect_type (type, optional): Require the object be of the supplied type, or None for any type. Defaults to None. Returns: Widget | ExpectType: A widget matching the selector.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBarCorner.set_styles",
"url":4,
"doc":"Set custom styles on this object.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBarCorner.has_class",
"url":4,
"doc":"Check if the Node has all the given class names. Args:  class_names (str): CSS class names to check. Returns: bool:  True if the node has all the given class names, otherwise  False .",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBarCorner.set_class",
"url":4,
"doc":"Add or remove class(es) based on a condition. Args: add (bool): Add the classes if True, otherwise remove them.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBarCorner.add_class",
"url":4,
"doc":"Add class names to this Node. Args:  class_names (str): CSS class names to add.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBarCorner.remove_class",
"url":4,
"doc":"Remove class names from this Node. Args:  class_names (str): CSS class names to remove.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBarCorner.toggle_class",
"url":4,
"doc":"Toggle class names on this Node. Args:  class_names (str): CSS class names to toggle.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBarCorner.has_pseudo_class",
"url":4,
"doc":"Check for pseudo class (such as hover, focus etc)",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBarCorner.app",
"url":5,
"doc":"Get the current app. Returns: App: The current app. Raises: NoActiveAppError: if no active app could be found for the current asyncio context"
},
{
"ref":"textual.scrollbar.ScrollBarCorner.log",
"url":5,
"doc":"Get a logger for this object. Returns: Logger: A logger."
},
{
"ref":"textual.scrollbar.ScrollBarCorner.disable_messages",
"url":5,
"doc":"Disable message types from being processed.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBarCorner.enable_messages",
"url":5,
"doc":"Enable processing of messages types.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBarCorner.set_timer",
"url":5,
"doc":"Make a function call after a delay. Args: delay (float): Time to wait before invoking callback. callback (TimerCallback | None, optional): Callback to call after time has expired. Defaults to None. name (str | None, optional): Name of the timer (for debug). Defaults to None. pause (bool, optional): Start timer paused. Defaults to False. Returns: Timer: A timer object.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBarCorner.set_interval",
"url":5,
"doc":"Call a function at periodic intervals. Args: interval (float): Time between calls. callback (TimerCallback | None, optional): Function to call. Defaults to None. name (str | None, optional): Name of the timer object. Defaults to None. repeat (int, optional): Number of times to repeat the call or 0 for continuous. Defaults to 0. pause (bool, optional): Start the timer paused. Defaults to False. Returns: Timer: A timer object.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBarCorner.call_later",
"url":5,
"doc":"Schedule a callback to run after all messages are processed and the screen has been refreshed. Positional and keyword arguments are passed to the callable. Args: callback (Callable): A callable.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBarCorner.on_event",
"url":5,
"doc":"Called to process an event. Args: event (events.Event): An Event object.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBarCorner.check_idle",
"url":5,
"doc":"Prompt the message pump to call idle if the queue is empty.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBarCorner.post_message_no_wait",
"url":5,
"doc":"Posts a message on the queue. Args: message (Message): A message (or Event). Returns: bool: True if the messages was processed, False if it wasn't.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBarCorner.emit_no_wait",
"url":5,
"doc":"Send a message to the _parent_, non async version. Args: message (Message): A message object. Returns: bool: True if the message was posted successfully.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBarCorner.emit",
"url":5,
"doc":"Send a message to the _parent_. Args: message (Message): A message object. Returns: bool: True if the message was posted successfully.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBarCorner.dispatch_key",
"url":5,
"doc":"Dispatch a key event to method. This method will call the method named 'key_ ' if it exists. Args: event (events.Key): A key event. Returns: bool: True if key was handled, otherwise False.",
"func":1
},
{
"ref":"textual.drivers",
"url":6,
"doc":""
},
{
"ref":"textual.drivers.headless_driver",
"url":7,
"doc":""
},
{
"ref":"textual.drivers.headless_driver.HeadlessDriver",
"url":7,
"doc":"A do-nothing driver for testing."
},
{
"ref":"textual.drivers.headless_driver.HeadlessDriver.start_application_mode",
"url":7,
"doc":"",
"func":1
},
{
"ref":"textual.drivers.headless_driver.HeadlessDriver.disable_input",
"url":7,
"doc":"",
"func":1
},
{
"ref":"textual.drivers.headless_driver.HeadlessDriver.stop_application_mode",
"url":7,
"doc":"",
"func":1
},
{
"ref":"textual.drivers.headless_driver.HeadlessDriver.process_event",
"url":8,
"doc":"Performs some additional processing of events.",
"func":1
},
{
"ref":"textual.drivers.linux_driver",
"url":9,
"doc":""
},
{
"ref":"textual.drivers.linux_driver.LinuxDriver",
"url":9,
"doc":"Powers display and input for Linux / MacOS"
},
{
"ref":"textual.drivers.linux_driver.LinuxDriver.start_application_mode",
"url":9,
"doc":"",
"func":1
},
{
"ref":"textual.drivers.linux_driver.LinuxDriver.disable_input",
"url":9,
"doc":"",
"func":1
},
{
"ref":"textual.drivers.linux_driver.LinuxDriver.stop_application_mode",
"url":9,
"doc":"",
"func":1
},
{
"ref":"textual.drivers.linux_driver.LinuxDriver.run_input_thread",
"url":9,
"doc":"",
"func":1
},
{
"ref":"textual.drivers.linux_driver.LinuxDriver.process_event",
"url":8,
"doc":"Performs some additional processing of events.",
"func":1
},
{
"ref":"textual.geometry",
"url":10,
"doc":"Functions and classes to manage terminal geometry (anything involving coordinates or dimensions)."
},
{
"ref":"textual.geometry.clamp",
"url":10,
"doc":"Adjust a value to it is not less than a minimum and not greater than a maximum value. Args: value (T): A value. minimum (T): Minimum value. maximum (T): maximum value. Returns: T: New value that is not less than the minimum or greater than the maximum.",
"func":1
},
{
"ref":"textual.geometry.Offset",
"url":10,
"doc":"A cell offset defined by x and y coordinates. Offsets are typically relative to the top left of the terminal or other container. Textual prefers the names  x and  y , but you could consider  x to be the _column_ and  y to be the _row_."
},
{
"ref":"textual.geometry.Offset.x",
"url":10,
"doc":"Offset in the x-axis (horizontal)"
},
{
"ref":"textual.geometry.Offset.y",
"url":10,
"doc":"Offset in the y-axis (vertical)"
},
{
"ref":"textual.geometry.Offset.is_origin",
"url":10,
"doc":"Check if the point is at the origin (0, 0). Returns: bool: True if the offset is the origin."
},
{
"ref":"textual.geometry.Offset.blend",
"url":10,
"doc":"Blend (interpolate) to a new point. Args: destination (Point): Point where factor would be 1.0. factor (float): A value between 0 and 1.0. Returns: Point: A new point on a line between self and destination.",
"func":1
},
{
"ref":"textual.geometry.Offset.get_distance_to",
"url":10,
"doc":"Get the distance to another offset. Args: other (Offset): An offset. Returns: float: Distance to other offset.",
"func":1
},
{
"ref":"textual.geometry.Size",
"url":10,
"doc":"The dimensions of a rectangular region."
},
{
"ref":"textual.geometry.Size.width",
"url":10,
"doc":"The width in cells."
},
{
"ref":"textual.geometry.Size.height",
"url":10,
"doc":"The height in cells."
},
{
"ref":"textual.geometry.Size.area",
"url":10,
"doc":"Get the area of the size. Returns: int: Area in cells."
},
{
"ref":"textual.geometry.Size.region",
"url":10,
"doc":"Get a region of the same size. Returns: Region: A region with the same size at (0, 0)."
},
{
"ref":"textual.geometry.Size.line_range",
"url":10,
"doc":"Get a range covering lines. Returns: range: A builtin range object."
},
{
"ref":"textual.geometry.Size.contains",
"url":10,
"doc":"Check if a point is in area defined by the size. Args: x (int): X coordinate. y (int): Y coordinate. Returns: bool: True if the point is within the region.",
"func":1
},
{
"ref":"textual.geometry.Size.contains_point",
"url":10,
"doc":"Check if a point is in the area defined by the size. Args: point (tuple[int, int]): A tuple of x and y coordinates. Returns: bool: True if the point is within the region.",
"func":1
},
{
"ref":"textual.geometry.Region",
"url":10,
"doc":"Defines a rectangular region. A Region consists a coordinate (x and y) and dimensions (width and height).   (x, y) \u250c          \u2510 \u25b2 \u2502 \u2502 \u2502 \u2502 \u2502 \u2502 \u2502 \u2502 height \u2502 \u2502 \u2502 \u2502 \u2502 \u2502 \u2514          \u2518 \u25bc \u25c0   \u2500 width    \u25b6  "
},
{
"ref":"textual.geometry.Region.x",
"url":10,
"doc":"Offset in the x-axis (horizontal)."
},
{
"ref":"textual.geometry.Region.y",
"url":10,
"doc":"Offset in the y-axis (vertical)."
},
{
"ref":"textual.geometry.Region.width",
"url":10,
"doc":"The width of the region."
},
{
"ref":"textual.geometry.Region.height",
"url":10,
"doc":"The height of the region."
},
{
"ref":"textual.geometry.Region.from_union",
"url":10,
"doc":"Create a Region from the union of other regions. Args: regions (Collection[Region]): One or more regions. Returns: Region: A Region that encloses all other regions.",
"func":1
},
{
"ref":"textual.geometry.Region.from_corners",
"url":10,
"doc":"Construct a Region form the top left and bottom right corners. Args: x1 (int): Top left x. y1 (int): Top left y. x2 (int): Bottom right x. y2 (int): Bottom right y. Returns: Region: A new region.",
"func":1
},
{
"ref":"textual.geometry.Region.from_offset",
"url":10,
"doc":"Create a region from offset and size. Args: offset (Point): Offset (top left point). size (tuple[int, int]): Dimensions of region. Returns: Region: A region instance.",
"func":1
},
{
"ref":"textual.geometry.Region.get_scroll_to_visible",
"url":10,
"doc":"Calculate the smallest offset required to translate a window so that it contains another region. This method is used to calculate the required offset to scroll something in to view. Args: window_region (Region): The window region. region (Region): The region to move inside the window. Returns: Offset: An offset required to add to region to move it inside window_region.",
"func":1
},
{
"ref":"textual.geometry.Region.column_span",
"url":10,
"doc":"Get the start and end columns (x coord). The end value is exclusive. Returns: tuple[int, int]: Pair of x coordinates (column numbers)."
},
{
"ref":"textual.geometry.Region.line_span",
"url":10,
"doc":"Get the start and end line number (y coord). The end value is exclusive. Returns: tuple[int, int]: Pair of y coordinates (line numbers)."
},
{
"ref":"textual.geometry.Region.right",
"url":10,
"doc":"Maximum X value (non inclusive). Returns: int: x coordinate."
},
{
"ref":"textual.geometry.Region.bottom",
"url":10,
"doc":"Maximum Y value (non inclusive). Returns: int: y coordinate."
},
{
"ref":"textual.geometry.Region.area",
"url":10,
"doc":"Get the area within the region. Returns: int: Area covered by this region."
},
{
"ref":"textual.geometry.Region.offset",
"url":10,
"doc":"Get the start point of the region. Returns: Offset: Top left offset."
},
{
"ref":"textual.geometry.Region.bottom_left",
"url":10,
"doc":"Bottom left offset of the region. Returns: Offset: Bottom left offset."
},
{
"ref":"textual.geometry.Region.top_right",
"url":10,
"doc":"Top right offset of the region. Returns: Offset: Top right."
},
{
"ref":"textual.geometry.Region.bottom_right",
"url":10,
"doc":"Bottom right of the region. Returns: Offset: Bottom right."
},
{
"ref":"textual.geometry.Region.size",
"url":10,
"doc":"Get the size of the region. Returns: Size: Size of the region."
},
{
"ref":"textual.geometry.Region.corners",
"url":10,
"doc":"Get the top left and bottom right coordinates as a tuple of integers. Returns: tuple[int, int, int, int]: A tuple of  ( ,  ,  ,  ) ."
},
{
"ref":"textual.geometry.Region.column_range",
"url":10,
"doc":"A range object for X coordinates."
},
{
"ref":"textual.geometry.Region.line_range",
"url":10,
"doc":"A range object for Y coordinates."
},
{
"ref":"textual.geometry.Region.reset_offset",
"url":10,
"doc":"An region of the same size at (0, 0). Returns: Region: reset region."
},
{
"ref":"textual.geometry.Region.at_offset",
"url":10,
"doc":"Get a new Region with the same size at a given offset. Args: offset (tuple[int, int]): An offset. Returns: Region: New Region with adjusted offset.",
"func":1
},
{
"ref":"textual.geometry.Region.crop_size",
"url":10,
"doc":"Get a region with the same offset, with a size no larger than  size . Args: size (tuple[int, int]): Maximum width and height (WIDTH, HEIGHT). Returns: Region: New region that could fit within  size .",
"func":1
},
{
"ref":"textual.geometry.Region.expand",
"url":10,
"doc":"Increase the size of the region by adding a border. Args: size (tuple[int, int]): Additional width and height. Returns: Region: A new region.",
"func":1
},
{
"ref":"textual.geometry.Region.clip_size",
"url":10,
"doc":"Clip the size to fit within minimum values. Args: size (tuple[int, int]): Maximum width and height. Returns: Region: No region, not bigger than size.",
"func":1
},
{
"ref":"textual.geometry.Region.overlaps",
"url":10,
"doc":"Check if another region overlaps this region. Args: other (Region): A Region. Returns: bool: True if other region shares any cells with this region.",
"func":1
},
{
"ref":"textual.geometry.Region.contains",
"url":10,
"doc":"Check if a point is in the region. Args: x (int): X coordinate. y (int): Y coordinate. Returns: bool: True if the point is within the region.",
"func":1
},
{
"ref":"textual.geometry.Region.contains_point",
"url":10,
"doc":"Check if a point is in the region. Args: point (tuple[int, int]): A tuple of x and y coordinates. Returns: bool: True if the point is within the region.",
"func":1
},
{
"ref":"textual.geometry.Region.contains_region",
"url":10,
"doc":"Check if a region is entirely contained within this region. Args: other (Region): A region. Returns: bool: True if the other region fits perfectly within this region.",
"func":1
},
{
"ref":"textual.geometry.Region.translate",
"url":10,
"doc":"Move the offset of the Region. Args: offset (tuple[int, int]): Offset to add to region. Returns: Region: A new region shifted by (x, y)",
"func":1
},
{
"ref":"textual.geometry.Region.clip",
"url":10,
"doc":"Clip this region to fit within width, height. Args: width (int): Width of bounds. height (int): Height of bounds. Returns: Region: Clipped region.",
"func":1
},
{
"ref":"textual.geometry.Region.grow",
"url":10,
"doc":"Grow a region by adding spacing. Args: margin (tuple[int, int, in, int]): Grow space by  ( ,  ,  ,  ) . Returns: Region: New region.",
"func":1
},
{
"ref":"textual.geometry.Region.shrink",
"url":10,
"doc":"Shrink a region by subtracting spacing. Args: margin (tuple[int, int, int, int]): Shrink space by  ( ,  ,  ,  ) . Returns: Region: The new, smaller region.",
"func":1
},
{
"ref":"textual.geometry.Region.intersection",
"url":10,
"doc":"Get the overlapping portion of the two regions. Args: region (Region): A region that overlaps this region. Returns: Region: A new region that covers when the two regions overlap.",
"func":1
},
{
"ref":"textual.geometry.Region.union",
"url":10,
"doc":"Get the smallest region that contains both regions. Args: region (Region): Another region. Returns: Region: An optimally sized region to cover both regions.",
"func":1
},
{
"ref":"textual.geometry.Region.split",
"url":10,
"doc":"Split a region in to 4 from given x and y offsets (cuts).   cut_x \u2193 \u250c    \u2510 \u250c \u2500\u2510 \u2502 \u2502 \u2502 \u2502 \u2502 0 \u2502 \u2502 1 \u2502 \u2502 \u2502 \u2502 \u2502 cut_y \u2192 \u2514    \u2518 \u2514 \u2500\u2518 \u250c    \u2510 \u250c \u2500\u2510 \u2502 2 \u2502 \u2502 3 \u2502 \u2514    \u2518 \u2514 \u2500\u2518   Args: cut_x (int): Offset from self.x where the cut should be made. If negative, the cut is taken from the right edge. cut_y (int): Offset from self.y where the cut should be made. If negative, the cut is taken from the lower edge. Returns: tuple[Region, Region, Region, Region]: Four new regions which add up to the original (self).",
"func":1
},
{
"ref":"textual.geometry.Region.split_vertical",
"url":10,
"doc":"Split a region in to two, from a given x offset.   cut \u2193 \u250c    \u2510\u250c \u2500\u2510 \u2502 0  1 \u2502 \u2502  \u2502 \u2514    \u2518\u2514 \u2500\u2518   Args: cut (int): An offset from self.x where the cut should be made. If cut is negative, it is taken from the right edge. Returns: tuple[Region, Region]: Two regions, which add up to the original (self).",
"func":1
},
{
"ref":"textual.geometry.Region.split_horizontal",
"url":10,
"doc":"Split a region in to two, from a given x offset.   \u250c    \u2500\u2510 \u2502 0 \u2502 \u2502 \u2502 cut \u2192 \u2514    \u2500\u2518 \u250c    \u2500\u2510 \u2502 1 \u2502 \u2514    \u2500\u2518   Args: cut (int): An offset from self.x where the cut should be made. May be negative, for the offset to start from the right edge. Returns: tuple[Region, Region]: Two regions, which add up to the original (self).",
"func":1
},
{
"ref":"textual.geometry.Spacing",
"url":10,
"doc":"The spacing around a renderable."
},
{
"ref":"textual.geometry.Spacing.top",
"url":10,
"doc":"Space from the top of a region."
},
{
"ref":"textual.geometry.Spacing.right",
"url":10,
"doc":"Space from the left of a region."
},
{
"ref":"textual.geometry.Spacing.bottom",
"url":10,
"doc":"Space from the bottom of a region."
},
{
"ref":"textual.geometry.Spacing.left",
"url":10,
"doc":"Space from the left of a region."
},
{
"ref":"textual.geometry.Spacing.width",
"url":10,
"doc":"Total space in width. Returns: int: Width."
},
{
"ref":"textual.geometry.Spacing.height",
"url":10,
"doc":"Total space in height. Returns: int: Height."
},
{
"ref":"textual.geometry.Spacing.top_left",
"url":10,
"doc":"Top left space. Returns: tuple[int, int]:  ( ,  ) "
},
{
"ref":"textual.geometry.Spacing.bottom_right",
"url":10,
"doc":"Bottom right space. Returns: tuple[int, int]:  ( ,  ) "
},
{
"ref":"textual.geometry.Spacing.totals",
"url":10,
"doc":"Get total horizontal and vertical space. Returns: tuple[int, int]:  ( ,  ) "
},
{
"ref":"textual.geometry.Spacing.css",
"url":10,
"doc":"Gets a string containing the spacing in CSS format. Returns: str: Spacing in CSS format."
},
{
"ref":"textual.geometry.Spacing.unpack",
"url":10,
"doc":"Unpack padding specified in CSS style. Args: pad (SpacingDimensions): An integer, or tuple of 1, 2, or 4 integers. Raises: ValueError: If  pad is an invalid value. Returns: Spacing: New Spacing object.",
"func":1
},
{
"ref":"textual.geometry.Spacing.vertical",
"url":10,
"doc":"Construct a Spacing with a given amount of spacing on vertical edges, and no horizontal spacing. Args: amount (int): The magnitude of spacing to apply to vertical edges Returns: Spacing:  Spacing(amount, 0, amount, 0) ",
"func":1
},
{
"ref":"textual.geometry.Spacing.horizontal",
"url":10,
"doc":"Construct a Spacing with a given amount of spacing on horizontal edges, and no vertical spacing. Args: amount (int): The magnitude of spacing to apply to horizontal edges Returns: Spacing:  Spacing(0, amount, 0, amount) ",
"func":1
},
{
"ref":"textual.geometry.Spacing.all",
"url":10,
"doc":"Construct a Spacing with a given amount of spacing on all edges. Args: amount (int): The magnitude of spacing to apply to all edges Returns: Spacing:  Spacing(amount, amount, amount, amount) ",
"func":1
},
{
"ref":"textual.geometry.Spacing.grow_maximum",
"url":10,
"doc":"Grow spacing with a maximum. Args: other (Spacing): Spacing object. Returns: Spacing: New spacing were the values are maximum of the two values.",
"func":1
},
{
"ref":"textual.file_monitor",
"url":11,
"doc":""
},
{
"ref":"textual.file_monitor.FileMonitor",
"url":11,
"doc":"Monitors a file for changes and invokes a callback when it does."
},
{
"ref":"textual.file_monitor.FileMonitor.check",
"url":11,
"doc":"Check the monitored file. Return True if it was changed.",
"func":1
},
{
"ref":"textual.file_monitor.FileMonitor.on_change",
"url":11,
"doc":"Called when file changes.",
"func":1
},
{
"ref":"textual.message_pump",
"url":5,
"doc":"A message pump is a class that processes messages. It is a base class for the App, Screen, and Widgets."
},
{
"ref":"textual.message_pump.NoParent",
"url":5,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"textual.message_pump.CallbackError",
"url":5,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"textual.message_pump.MessagePumpClosed",
"url":5,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"textual.message_pump.MessagePumpMeta",
"url":5,
"doc":"Metaclass for message pump. This exists to populate a Message inner class of a Widget with the parent classes' name."
},
{
"ref":"textual.message_pump.MessagePump",
"url":5,
"doc":""
},
{
"ref":"textual.message_pump.MessagePump.task",
"url":5,
"doc":""
},
{
"ref":"textual.message_pump.MessagePump.has_parent",
"url":5,
"doc":""
},
{
"ref":"textual.message_pump.MessagePump.app",
"url":5,
"doc":"Get the current app. Returns: App: The current app. Raises: NoActiveAppError: if no active app could be found for the current asyncio context"
},
{
"ref":"textual.message_pump.MessagePump.is_parent_active",
"url":5,
"doc":""
},
{
"ref":"textual.message_pump.MessagePump.is_running",
"url":5,
"doc":""
},
{
"ref":"textual.message_pump.MessagePump.log",
"url":5,
"doc":"Get a logger for this object. Returns: Logger: A logger."
},
{
"ref":"textual.message_pump.MessagePump.check_message_enabled",
"url":5,
"doc":"",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.disable_messages",
"url":5,
"doc":"Disable message types from being processed.",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.enable_messages",
"url":5,
"doc":"Enable processing of messages types.",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.set_timer",
"url":5,
"doc":"Make a function call after a delay. Args: delay (float): Time to wait before invoking callback. callback (TimerCallback | None, optional): Callback to call after time has expired. Defaults to None. name (str | None, optional): Name of the timer (for debug). Defaults to None. pause (bool, optional): Start timer paused. Defaults to False. Returns: Timer: A timer object.",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.set_interval",
"url":5,
"doc":"Call a function at periodic intervals. Args: interval (float): Time between calls. callback (TimerCallback | None, optional): Function to call. Defaults to None. name (str | None, optional): Name of the timer object. Defaults to None. repeat (int, optional): Number of times to repeat the call or 0 for continuous. Defaults to 0. pause (bool, optional): Start the timer paused. Defaults to False. Returns: Timer: A timer object.",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.call_later",
"url":5,
"doc":"Schedule a callback to run after all messages are processed and the screen has been refreshed. Positional and keyword arguments are passed to the callable. Args: callback (Callable): A callable.",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.on_event",
"url":5,
"doc":"Called to process an event. Args: event (events.Event): An Event object.",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.check_idle",
"url":5,
"doc":"Prompt the message pump to call idle if the queue is empty.",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.post_message",
"url":5,
"doc":"Post a message or an event to this message pump. Args: message (Message): A message object. Returns: bool: True if the messages was posted successfully, False if the message was not posted (because the message pump was in the process of closing).",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.post_message_no_wait",
"url":5,
"doc":"Posts a message on the queue. Args: message (Message): A message (or Event). Returns: bool: True if the messages was processed, False if it wasn't.",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.on_callback",
"url":5,
"doc":"",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.emit_no_wait",
"url":5,
"doc":"Send a message to the _parent_, non async version. Args: message (Message): A message object. Returns: bool: True if the message was posted successfully.",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.emit",
"url":5,
"doc":"Send a message to the _parent_. Args: message (Message): A message object. Returns: bool: True if the message was posted successfully.",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.dispatch_key",
"url":5,
"doc":"Dispatch a key event to method. This method will call the method named 'key_ ' if it exists. Args: event (events.Key): A key event. Returns: bool: True if key was handled, otherwise False.",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.on_timer",
"url":5,
"doc":"",
"func":1
},
{
"ref":"textual.actions",
"url":12,
"doc":""
},
{
"ref":"textual.actions.ActionError",
"url":12,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"textual.actions.parse",
"url":12,
"doc":"Parses an action string. Args: action (str): String containing action. Raises: ActionError: If the action has invalid syntax. Returns: tuple[str, tuple[object,  . : Action name and parameters",
"func":1
},
{
"ref":"textual.render",
"url":13,
"doc":""
},
{
"ref":"textual.render.measure",
"url":13,
"doc":"Measure a rich renderable. Args: console (Console): A console object. renderable (RenderableType): Rich renderable. default (int): Default width to use if renderable does not expose dimensions. Returns: int: Width in cells",
"func":1
},
{
"ref":"textual.suggestions",
"url":14,
"doc":""
},
{
"ref":"textual.suggestions.get_suggestion",
"url":14,
"doc":"Returns a close match of  word amongst  possible_words . Args: word (str): The word we want to find a close match for possible_words (Sequence[str]): The words amongst which we want to find a close match Returns: str | None: The closest match amongst the  possible_words . Returns  None if no close matches could be found. Example: returns \"red\" for word \"redu\" and possible words (\"yellow\", \"red\")",
"func":1
},
{
"ref":"textual.suggestions.get_suggestions",
"url":14,
"doc":"Returns a list of up to  count matches of  word amongst  possible_words . Args: word (str): The word we want to find a close match for possible_words (Sequence[str]): The words amongst which we want to find close matches Returns: list[str]: The closest matches amongst the  possible_words , from the closest to the least close. Returns an empty list if no close matches could be found. Example: returns [\"yellow\", \"ellow\"] for word \"yllow\" and possible words (\"yellow\", \"red\", \"ellow\")",
"func":1
},
{
"ref":"textual.design",
"url":15,
"doc":""
},
{
"ref":"textual.design.ColorSystem",
"url":15,
"doc":"Defines a standard set of colors and variations for building a UI. Primary is the main theme color Secondary is a second theme color"
},
{
"ref":"textual.design.ColorSystem.COLOR_NAMES",
"url":15,
"doc":""
},
{
"ref":"textual.design.ColorSystem.shades",
"url":15,
"doc":"The names of the colors and derived shades."
},
{
"ref":"textual.design.ColorSystem.generate",
"url":15,
"doc":"Generate a mapping of color name on to a CSS color. Args: dark (bool, optional): Enable dark mode. Defaults to False. luminosity_spread (float, optional): Amount of luminosity to subtract and add to generate shades. Defaults to 0.2. text_alpha (float, optional): Alpha value for text. Defaults to 0.9. Returns: dict[str, str]: A mapping of color name on to a CSS-style encoded color",
"func":1
},
{
"ref":"textual.design.show_design",
"url":15,
"doc":"Generate a renderable to show color systems. Args: light (ColorSystem): Light ColorSystem. dark (ColorSystem): Dark ColorSystem Returns: Table: Table showing all colors.",
"func":1
},
{
"ref":"textual.features",
"url":16,
"doc":""
},
{
"ref":"textual.features.parse_features",
"url":16,
"doc":"Parse features env var Args: features (str): Comma separated feature flags Returns: frozenset[FeatureFlag]: A frozen set of known features.",
"func":1
},
{
"ref":"textual.scroll_view",
"url":17,
"doc":""
},
{
"ref":"textual.scroll_view.ScrollView",
"url":17,
"doc":"A base class for a Widget that handles it's own scrolling (i.e. doesn't rely on the compositor to render children)."
},
{
"ref":"textual.scroll_view.ScrollView.COMPONENT_CLASSES",
"url":17,
"doc":""
},
{
"ref":"textual.scroll_view.ScrollView.hover_style",
"url":17,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.scroll_view.ScrollView.highlight_link_id",
"url":17,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.scroll_view.ScrollView.DEFAULT_CSS",
"url":17,
"doc":""
},
{
"ref":"textual.scroll_view.ScrollView.is_scrollable",
"url":17,
"doc":"Always scrollable."
},
{
"ref":"textual.scroll_view.ScrollView.is_transparent",
"url":17,
"doc":"Not transparent, i.e. renders something."
},
{
"ref":"textual.scroll_view.ScrollView.on_mount",
"url":17,
"doc":"",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.get_content_width",
"url":17,
"doc":"Gets the width of the content area. Args: container (Size): Size of the container (immediate parent) widget. viewport (Size): Size of the viewport. Returns: int: The optimal width of the content.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.get_content_height",
"url":17,
"doc":"Gets the height (number of lines) in the content area. Args: container (Size): Size of the container (immediate parent) widget. viewport (Size): Size of the viewport. width (int): Width of renderable. Returns: int: The height of the content.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.watch_virtual_size",
"url":17,
"doc":"",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.watch_show_horizontal_scrollbar",
"url":17,
"doc":"Watch function for show_horizontal_scrollbar attribute. Args: value (bool): Show horizontal scrollbar flag.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.watch_show_vertical_scrollbar",
"url":17,
"doc":"Watch function for show_vertical_scrollbar attribute. Args: value (bool): Show vertical scrollbar flag.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.render",
"url":17,
"doc":"Render the scrollable region (if  render_lines is not implemented). Returns: RenderableType: Renderable object.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.watch_scroll_x",
"url":17,
"doc":"Called when horizontal bar is scrolled.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.watch_scroll_y",
"url":17,
"doc":"Called when vertical bar is scrolled.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.can_focus",
"url":17,
"doc":"Widget may receive focus."
},
{
"ref":"textual.scroll_view.ScrollView.can_focus_children",
"url":17,
"doc":"Widget's children may receive focus."
},
{
"ref":"textual.scroll_view.ScrollView.expand",
"url":3,
"doc":"Rich renderable may expand."
},
{
"ref":"textual.scroll_view.ScrollView.shrink",
"url":3,
"doc":"Rich renderable may shrink."
},
{
"ref":"textual.scroll_view.ScrollView.auto_links",
"url":3,
"doc":"Widget will highlight links automatically."
},
{
"ref":"textual.scroll_view.ScrollView.virtual_size",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.scroll_view.ScrollView.auto_width",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.scroll_view.ScrollView.auto_height",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.scroll_view.ScrollView.has_focus",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.scroll_view.ScrollView.descendant_has_focus",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.scroll_view.ScrollView.mouse_over",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.scroll_view.ScrollView.scroll_x",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.scroll_view.ScrollView.scroll_y",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.scroll_view.ScrollView.scroll_target_x",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.scroll_view.ScrollView.scroll_target_y",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.scroll_view.ScrollView.show_vertical_scrollbar",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.scroll_view.ScrollView.show_horizontal_scrollbar",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.scroll_view.ScrollView.siblings",
"url":3,
"doc":"Get the widget's siblings (self is removed from the return list). Returns: list[Widget]: A list of siblings."
},
{
"ref":"textual.scroll_view.ScrollView.allow_vertical_scroll",
"url":3,
"doc":"Check if vertical scroll is permitted. May be overridden if you want different logic regarding allowing scrolling. Returns: bool: True if the widget may scroll _vertically_."
},
{
"ref":"textual.scroll_view.ScrollView.allow_horizontal_scroll",
"url":3,
"doc":"Check if horizontal scroll is permitted. May be overridden if you want different logic regarding allowing scrolling. Returns: bool: True if the widget may scroll _horizontally_."
},
{
"ref":"textual.scroll_view.ScrollView.offset",
"url":3,
"doc":"Widget offset from origin. Returns: Offset: Relative offset."
},
{
"ref":"textual.scroll_view.ScrollView.get_component_rich_style",
"url":3,
"doc":"Get a  Rich style for a component. Args: name (str): Name of component. Returns: Style: A Rich style object.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.mount",
"url":3,
"doc":"Mount child widgets (making this widget a container). Widgets may be passed as positional arguments or keyword arguments. If keyword arguments, the keys will be set as the Widget's id. Example:  python self.mount(Static(\"hello\"), header=Header(  ",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.compose",
"url":3,
"doc":"Called by Textual to create child widgets. Extend this to build a UI. Example:  python def compose(self) -> ComposeResult: yield Header() yield Container( TreeControl(), Viewer() ) yield Footer()  ",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.max_scroll_x",
"url":3,
"doc":"The maximum value of  scroll_x ."
},
{
"ref":"textual.scroll_view.ScrollView.max_scroll_y",
"url":3,
"doc":"The maximum value of  scroll_y ."
},
{
"ref":"textual.scroll_view.ScrollView.scrollbar_corner",
"url":3,
"doc":"Return the ScrollBarCorner - the cells that appear between the horizontal and vertical scrollbars (only when both are visible)."
},
{
"ref":"textual.scroll_view.ScrollView.vertical_scrollbar",
"url":3,
"doc":"Get a vertical scrollbar (create if necessary). Returns: ScrollBar: ScrollBar Widget."
},
{
"ref":"textual.scroll_view.ScrollView.horizontal_scrollbar",
"url":3,
"doc":"Get a vertical scrollbar (create if necessary). Returns: ScrollBar: ScrollBar Widget."
},
{
"ref":"textual.scroll_view.ScrollView.scrollbars_enabled",
"url":3,
"doc":"A tuple of booleans that indicate if scrollbars are enabled. Returns: tuple[bool, bool]: A tuple of ( ,  )"
},
{
"ref":"textual.scroll_view.ScrollView.scrollbar_size_vertical",
"url":3,
"doc":"Get the width used by the  vertical scrollbar. Returns: int: Number of columns in the vertical scrollbar."
},
{
"ref":"textual.scroll_view.ScrollView.scrollbar_size_horizontal",
"url":3,
"doc":"Get the height used by the  horizontal scrollbar. Returns: int: Number of rows in the horizontal scrollbar."
},
{
"ref":"textual.scroll_view.ScrollView.scrollbar_gutter",
"url":3,
"doc":"Spacing required to fit scrollbar(s). Returns: Spacing: Scrollbar gutter spacing."
},
{
"ref":"textual.scroll_view.ScrollView.gutter",
"url":3,
"doc":"Spacing for padding / border / scrollbars. Returns: Spacing: Additional spacing around content area."
},
{
"ref":"textual.scroll_view.ScrollView.size",
"url":3,
"doc":"The size of the content area. Returns: Size: Content area size."
},
{
"ref":"textual.scroll_view.ScrollView.outer_size",
"url":3,
"doc":"The size of the widget (including padding and border). Returns: Size: Outer size."
},
{
"ref":"textual.scroll_view.ScrollView.container_size",
"url":3,
"doc":"The size of the container (parent widget). Returns: Size: Container size."
},
{
"ref":"textual.scroll_view.ScrollView.content_region",
"url":3,
"doc":"Gets an absolute region containing the content (minus padding and border). Returns: Region: Screen region that contains a widget's content."
},
{
"ref":"textual.scroll_view.ScrollView.content_offset",
"url":3,
"doc":"An offset from the Widget origin where the content begins. Returns: Offset: Offset from widget's origin."
},
{
"ref":"textual.scroll_view.ScrollView.content_size",
"url":3,
"doc":"Get the size of the content area."
},
{
"ref":"textual.scroll_view.ScrollView.region",
"url":3,
"doc":"The region occupied by this widget, relative to the Screen. Raises: NoScreen: If there is no screen. errors.NoWidget: If the widget is not on the screen. Returns: Region: Region within screen occupied by widget."
},
{
"ref":"textual.scroll_view.ScrollView.container_viewport",
"url":3,
"doc":"The viewport region (parent window). Returns: Region: The region that contains this widget."
},
{
"ref":"textual.scroll_view.ScrollView.virtual_region",
"url":3,
"doc":"The widget region relative to it's container. Which may not be visible, depending on scroll offset."
},
{
"ref":"textual.scroll_view.ScrollView.window_region",
"url":3,
"doc":"The region within the scrollable area that is currently visible. Returns: Region: New region."
},
{
"ref":"textual.scroll_view.ScrollView.virtual_region_with_margin",
"url":3,
"doc":"The widget region relative to its container ( including margin ), which may not be visible, depending on the scroll offset. Returns: Region: The virtual region of the Widget, inclusive of its margin."
},
{
"ref":"textual.scroll_view.ScrollView.focusable_children",
"url":3,
"doc":"Get the children which may be focused. Returns: list[Widget]: List of widgets that can receive focus."
},
{
"ref":"textual.scroll_view.ScrollView.scroll_offset",
"url":3,
"doc":"Get the current scroll offset. Returns: Offset: Offset a container has been scrolled by."
},
{
"ref":"textual.scroll_view.ScrollView.animate",
"url":3,
"doc":"Get an animator to animate attributes on this widget. Example:  python self.animate(\"brightness\", 0.5)  Returns: BoundAnimator: An animator bound to this widget."
},
{
"ref":"textual.scroll_view.ScrollView.is_container",
"url":3,
"doc":"Check if this widget is a container (contains other widgets). Returns: bool: True if this widget is a container."
},
{
"ref":"textual.scroll_view.ScrollView.layer",
"url":3,
"doc":"Get the name of this widgets layer. Returns: str: Name of layer."
},
{
"ref":"textual.scroll_view.ScrollView.layers",
"url":3,
"doc":"Layers of from parent. Returns: tuple[str,  .]: Tuple of layer names."
},
{
"ref":"textual.scroll_view.ScrollView.link_style",
"url":3,
"doc":"Style of links."
},
{
"ref":"textual.scroll_view.ScrollView.link_hover_style",
"url":3,
"doc":"Style of links with mouse hover."
},
{
"ref":"textual.scroll_view.ScrollView.scroll_to",
"url":3,
"doc":"Scroll to a given (absolute) coordinate, optionally animating. Args: x (int | None, optional): X coordinate (column) to scroll to, or None for no change. Defaults to None. y (int | None, optional): Y coordinate (row) to scroll to, or None for no change. Defaults to None. animate (bool, optional): Animate to new scroll position. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.scroll_relative",
"url":3,
"doc":"Scroll relative to current position. Args: x (int | None, optional): X distance (columns) to scroll, or  None for no change. Defaults to None. y (int | None, optional): Y distance (rows) to scroll, or  None for no change. Defaults to None. animate (bool, optional): Animate to new scroll position. Defaults to False. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.scroll_home",
"url":3,
"doc":"Scroll to home position. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.scroll_end",
"url":3,
"doc":"Scroll to the end of the container. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.scroll_left",
"url":3,
"doc":"Scroll one cell left. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.scroll_right",
"url":3,
"doc":"Scroll on cell right. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.scroll_down",
"url":3,
"doc":"Scroll one line down. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.scroll_up",
"url":3,
"doc":"Scroll one line up. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.scroll_page_up",
"url":3,
"doc":"Scroll one page up. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.scroll_page_down",
"url":3,
"doc":"Scroll one page down. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.scroll_page_left",
"url":3,
"doc":"Scroll one page left. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.scroll_page_right",
"url":3,
"doc":"Scroll one page right. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.scroll_to_widget",
"url":3,
"doc":"Scroll scrolling to bring a widget in to view. Args: widget (Widget): A descendant widget. animate (bool, optional): True to animate, or False to jump. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling has occurred in any descendant, otherwise False.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.scroll_to_region",
"url":3,
"doc":"Scrolls a given region in to view, if required. This method will scroll the least distance required to move  region fully within the scrollable area. Args: region (Region): A region that should be visible. spacing (Spacing | None, optional): Optional spacing around the region. Defaults to None. animate (bool, optional): True to animate, or False to jump. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: Offset: The distance that was scrolled.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.scroll_visible",
"url":3,
"doc":"Scroll the container to make this widget visible. Args: animate (bool, optional): _description_. Defaults to True. speed (float | None, optional): _description_. Defaults to None. duration (float | None, optional): _description_. Defaults to None.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.get_pseudo_classes",
"url":3,
"doc":"Pseudo classes for a widget. Returns: Iterable[str]: Names of the pseudo classes.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.post_render",
"url":3,
"doc":"Applies style attributes to the default renderable. Returns: RenderableType: A new renderable.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.watch_mouse_over",
"url":3,
"doc":"Update from CSS if mouse over state changes.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.watch_has_focus",
"url":3,
"doc":"Update from CSS if has focus state changes.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.render_line",
"url":3,
"doc":"Render a line of content. Args: y (int): Y Coordinate of line. Returns: list[Segment]: A rendered line.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.render_lines",
"url":3,
"doc":"Render the widget in to lines. Args: crop (Region): Region within visible area to render. Returns: Lines: A list of list of segments.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.get_style_at",
"url":3,
"doc":"Get the Rich style at a given screen offset. Args: x (int): X coordinate relative to the screen. y (int): Y coordinate relative to the screen. Returns: Style: A rich Style object.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.refresh",
"url":3,
"doc":"Initiate a refresh of the widget. This method sets an internal flag to perform a refresh, which will be done on the next idle event. Only one refresh will be done even if this method is called multiple times. By default this method will cause the content of the widget to refresh, but not change its size. You can also set  layout=True to perform a layout.  ! warning It is rarely necessary to call this method explicitly. Updating styles or reactive attributes will do this automatically. Args:  regions (Region, optional): Additional screen regions to mark as dirty. repaint (bool, optional): Repaint the widget (will call render() again). Defaults to True. layout (bool, optional): Also layout widgets in the view. Defaults to False.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.remove",
"url":3,
"doc":"Remove the Widget from the DOM (effectively deleting it)",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.action",
"url":3,
"doc":"Perform a given action, with this widget as the default namespace. Args: action (str): Action encoded as a string.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.post_message",
"url":3,
"doc":"Post a message to this widget. Args: message (Message): Message to post. Returns: bool: True if the message was posted, False if this widget was closed / closing.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.focus",
"url":3,
"doc":"Give focus to this widget. Args: scroll_visible (bool, optional): Scroll parent to make this widget visible. Defaults to True.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.capture_mouse",
"url":3,
"doc":"Capture (or release) the mouse. When captured, mouse events will go to this widget even when the pointer is not directly over the widget. Args: capture (bool, optional): True to capture or False to release. Defaults to True.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.release_mouse",
"url":3,
"doc":"Release the mouse. Mouse events will only be sent when the mouse is over the widget.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.get_component_styles",
"url":4,
"doc":"Get a \"component\" styles object (must be defined in COMPONENT_CLASSES classvar). Args: name (str): Name of the component. Raises: KeyError: If the component class doesn't exist. Returns: RenderStyles: A Styles object.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.get_default_css",
"url":4,
"doc":"Gets the CSS for this class and inherited from bases. Returns: list[tuple[str, str : a list of tuples containing (PATH, SOURCE) for this and inherited from base classes.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.parent",
"url":4,
"doc":"Get the parent node. Returns: DOMNode | None: The node which is the direct parent of this node."
},
{
"ref":"textual.scroll_view.ScrollView.screen",
"url":4,
"doc":"Get the screen that this node is contained within. Note that this may not be the currently active screen within the app."
},
{
"ref":"textual.scroll_view.ScrollView.id",
"url":4,
"doc":"The ID of this node, or None if the node has no ID. Returns: (str | None): A Node ID or None."
},
{
"ref":"textual.scroll_view.ScrollView.css_identifier",
"url":4,
"doc":"A CSS selector that identifies this DOM node."
},
{
"ref":"textual.scroll_view.ScrollView.css_identifier_styled",
"url":4,
"doc":"A stylized CSS identifier."
},
{
"ref":"textual.scroll_view.ScrollView.classes",
"url":4,
"doc":"A frozenset of the current classes set on the widget. Returns: frozenset[str]: Set of class names."
},
{
"ref":"textual.scroll_view.ScrollView.pseudo_classes",
"url":4,
"doc":"Get a set of all pseudo classes"
},
{
"ref":"textual.scroll_view.ScrollView.css_path_nodes",
"url":4,
"doc":"A list of nodes from the root to this node, forming a \"path\". Returns: list[DOMNode]: List of Nodes, starting with the root and ending with this node."
},
{
"ref":"textual.scroll_view.ScrollView.display",
"url":4,
"doc":"Check if this widget should display or not. Returns: bool:  True if this DOMNode is displayed ( display != \"none\" ) otherwise  False ."
},
{
"ref":"textual.scroll_view.ScrollView.tree",
"url":4,
"doc":"Get a Rich tree object which will recursively render the structure of the node tree. Returns: Tree: A Rich object which may be printed."
},
{
"ref":"textual.scroll_view.ScrollView.text_style",
"url":4,
"doc":"Get the text style object. A widget's style is influenced by its parent. for instance if a parent is bold, then the child will also be bold. Returns: Style: Rich Style object."
},
{
"ref":"textual.scroll_view.ScrollView.rich_style",
"url":4,
"doc":"Get a Rich Style object for this DOMNode."
},
{
"ref":"textual.scroll_view.ScrollView.background_colors",
"url":4,
"doc":"Get the background color and the color of the parent's background. Returns: tuple[Color, Color]: Tuple of (base background, background)"
},
{
"ref":"textual.scroll_view.ScrollView.colors",
"url":4,
"doc":"Gets the Widgets foreground and background colors, and its parent's (base) colors. Returns: tuple[Color, Color, Color, Color]: Tuple of (base background, base color, background, color)"
},
{
"ref":"textual.scroll_view.ScrollView.ancestors",
"url":4,
"doc":"Get a list of Nodes by tracing ancestors all the way back to App."
},
{
"ref":"textual.scroll_view.ScrollView.displayed_children",
"url":4,
"doc":"The children which don't have display: none set. Returns: list[DOMNode]: Children of this widget which will be displayed."
},
{
"ref":"textual.scroll_view.ScrollView.reset_styles",
"url":4,
"doc":"Reset styles back to their initial state",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.walk_children",
"url":4,
"doc":"Generate descendant nodes. Args: filter_type (type[WalkType] | None, optional): Filter only this type, or None for no filter. Defaults to None. with_self (bool, optional): Also yield self in addition to descendants. Defaults to True. Returns: Iterable[DOMNode | WalkType]: An iterable of nodes.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.get_child",
"url":4,
"doc":"Return the first child (immediate descendent) of this node with the given ID. Args: id (str): The ID of the child. Returns: DOMNode: The first child of this node with the ID. Raises: NoMatchingNodesError: if no children could be found for this ID",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.query",
"url":4,
"doc":"Get a DOM query matching a selector. Args: selector (str, optional): A CSS selector or  None for all nodes. Defaults to None. Returns: DOMQuery: A query object.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.query_one",
"url":4,
"doc":"Get the first Widget matching the given selector or selector type. Args: selector (str | None, optional): A selector. expect_type (type, optional): Require the object be of the supplied type, or None for any type. Defaults to None. Returns: Widget | ExpectType: A widget matching the selector.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.set_styles",
"url":4,
"doc":"Set custom styles on this object.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.has_class",
"url":4,
"doc":"Check if the Node has all the given class names. Args:  class_names (str): CSS class names to check. Returns: bool:  True if the node has all the given class names, otherwise  False .",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.set_class",
"url":4,
"doc":"Add or remove class(es) based on a condition. Args: add (bool): Add the classes if True, otherwise remove them.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.add_class",
"url":4,
"doc":"Add class names to this Node. Args:  class_names (str): CSS class names to add.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.remove_class",
"url":4,
"doc":"Remove class names from this Node. Args:  class_names (str): CSS class names to remove.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.toggle_class",
"url":4,
"doc":"Toggle class names on this Node. Args:  class_names (str): CSS class names to toggle.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.has_pseudo_class",
"url":4,
"doc":"Check for pseudo class (such as hover, focus etc)",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.app",
"url":5,
"doc":"Get the current app. Returns: App: The current app. Raises: NoActiveAppError: if no active app could be found for the current asyncio context"
},
{
"ref":"textual.scroll_view.ScrollView.log",
"url":5,
"doc":"Get a logger for this object. Returns: Logger: A logger."
},
{
"ref":"textual.scroll_view.ScrollView.disable_messages",
"url":5,
"doc":"Disable message types from being processed.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.enable_messages",
"url":5,
"doc":"Enable processing of messages types.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.set_timer",
"url":5,
"doc":"Make a function call after a delay. Args: delay (float): Time to wait before invoking callback. callback (TimerCallback | None, optional): Callback to call after time has expired. Defaults to None. name (str | None, optional): Name of the timer (for debug). Defaults to None. pause (bool, optional): Start timer paused. Defaults to False. Returns: Timer: A timer object.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.set_interval",
"url":5,
"doc":"Call a function at periodic intervals. Args: interval (float): Time between calls. callback (TimerCallback | None, optional): Function to call. Defaults to None. name (str | None, optional): Name of the timer object. Defaults to None. repeat (int, optional): Number of times to repeat the call or 0 for continuous. Defaults to 0. pause (bool, optional): Start the timer paused. Defaults to False. Returns: Timer: A timer object.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.call_later",
"url":5,
"doc":"Schedule a callback to run after all messages are processed and the screen has been refreshed. Positional and keyword arguments are passed to the callable. Args: callback (Callable): A callable.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.on_event",
"url":5,
"doc":"Called to process an event. Args: event (events.Event): An Event object.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.check_idle",
"url":5,
"doc":"Prompt the message pump to call idle if the queue is empty.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.post_message_no_wait",
"url":5,
"doc":"Posts a message on the queue. Args: message (Message): A message (or Event). Returns: bool: True if the messages was processed, False if it wasn't.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.emit_no_wait",
"url":5,
"doc":"Send a message to the _parent_, non async version. Args: message (Message): A message object. Returns: bool: True if the message was posted successfully.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.emit",
"url":5,
"doc":"Send a message to the _parent_. Args: message (Message): A message object. Returns: bool: True if the message was posted successfully.",
"func":1
},
{
"ref":"textual.scroll_view.ScrollView.dispatch_key",
"url":5,
"doc":"Dispatch a key event to method. This method will call the method named 'key_ ' if it exists. Args: event (events.Key): A key event. Returns: bool: True if key was handled, otherwise False.",
"func":1
},
{
"ref":"textual.containers",
"url":18,
"doc":""
},
{
"ref":"textual.containers.Container",
"url":18,
"doc":"Simple container widget, with vertical layout."
},
{
"ref":"textual.containers.Container.COMPONENT_CLASSES",
"url":18,
"doc":""
},
{
"ref":"textual.containers.Container.hover_style",
"url":18,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Container.highlight_link_id",
"url":18,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Container.DEFAULT_CSS",
"url":18,
"doc":""
},
{
"ref":"textual.containers.Container.can_focus",
"url":18,
"doc":"Widget may receive focus."
},
{
"ref":"textual.containers.Container.can_focus_children",
"url":18,
"doc":"Widget's children may receive focus."
},
{
"ref":"textual.containers.Container.expand",
"url":3,
"doc":"Rich renderable may expand."
},
{
"ref":"textual.containers.Container.shrink",
"url":3,
"doc":"Rich renderable may shrink."
},
{
"ref":"textual.containers.Container.auto_links",
"url":3,
"doc":"Widget will highlight links automatically."
},
{
"ref":"textual.containers.Container.virtual_size",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Container.auto_width",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Container.auto_height",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Container.has_focus",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Container.descendant_has_focus",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Container.mouse_over",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Container.scroll_x",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Container.scroll_y",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Container.scroll_target_x",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Container.scroll_target_y",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Container.show_vertical_scrollbar",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Container.show_horizontal_scrollbar",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Container.siblings",
"url":3,
"doc":"Get the widget's siblings (self is removed from the return list). Returns: list[Widget]: A list of siblings."
},
{
"ref":"textual.containers.Container.allow_vertical_scroll",
"url":3,
"doc":"Check if vertical scroll is permitted. May be overridden if you want different logic regarding allowing scrolling. Returns: bool: True if the widget may scroll _vertically_."
},
{
"ref":"textual.containers.Container.allow_horizontal_scroll",
"url":3,
"doc":"Check if horizontal scroll is permitted. May be overridden if you want different logic regarding allowing scrolling. Returns: bool: True if the widget may scroll _horizontally_."
},
{
"ref":"textual.containers.Container.offset",
"url":3,
"doc":"Widget offset from origin. Returns: Offset: Relative offset."
},
{
"ref":"textual.containers.Container.get_component_rich_style",
"url":3,
"doc":"Get a  Rich style for a component. Args: name (str): Name of component. Returns: Style: A Rich style object.",
"func":1
},
{
"ref":"textual.containers.Container.mount",
"url":3,
"doc":"Mount child widgets (making this widget a container). Widgets may be passed as positional arguments or keyword arguments. If keyword arguments, the keys will be set as the Widget's id. Example:  python self.mount(Static(\"hello\"), header=Header(  ",
"func":1
},
{
"ref":"textual.containers.Container.compose",
"url":3,
"doc":"Called by Textual to create child widgets. Extend this to build a UI. Example:  python def compose(self) -> ComposeResult: yield Header() yield Container( TreeControl(), Viewer() ) yield Footer()  ",
"func":1
},
{
"ref":"textual.containers.Container.get_content_width",
"url":3,
"doc":"Called by textual to get the width of the content area. May be overridden in a subclass. Args: container (Size): Size of the container (immediate parent) widget. viewport (Size): Size of the viewport. Returns: int: The optimal width of the content.",
"func":1
},
{
"ref":"textual.containers.Container.get_content_height",
"url":3,
"doc":"Called by Textual to get the height of the content area. May be overridden in a subclass. Args: container (Size): Size of the container (immediate parent) widget. viewport (Size): Size of the viewport. width (int): Width of renderable. Returns: int: The height of the content.",
"func":1
},
{
"ref":"textual.containers.Container.max_scroll_x",
"url":3,
"doc":"The maximum value of  scroll_x ."
},
{
"ref":"textual.containers.Container.max_scroll_y",
"url":3,
"doc":"The maximum value of  scroll_y ."
},
{
"ref":"textual.containers.Container.scrollbar_corner",
"url":3,
"doc":"Return the ScrollBarCorner - the cells that appear between the horizontal and vertical scrollbars (only when both are visible)."
},
{
"ref":"textual.containers.Container.vertical_scrollbar",
"url":3,
"doc":"Get a vertical scrollbar (create if necessary). Returns: ScrollBar: ScrollBar Widget."
},
{
"ref":"textual.containers.Container.horizontal_scrollbar",
"url":3,
"doc":"Get a vertical scrollbar (create if necessary). Returns: ScrollBar: ScrollBar Widget."
},
{
"ref":"textual.containers.Container.scrollbars_enabled",
"url":3,
"doc":"A tuple of booleans that indicate if scrollbars are enabled. Returns: tuple[bool, bool]: A tuple of ( ,  )"
},
{
"ref":"textual.containers.Container.scrollbar_size_vertical",
"url":3,
"doc":"Get the width used by the  vertical scrollbar. Returns: int: Number of columns in the vertical scrollbar."
},
{
"ref":"textual.containers.Container.scrollbar_size_horizontal",
"url":3,
"doc":"Get the height used by the  horizontal scrollbar. Returns: int: Number of rows in the horizontal scrollbar."
},
{
"ref":"textual.containers.Container.scrollbar_gutter",
"url":3,
"doc":"Spacing required to fit scrollbar(s). Returns: Spacing: Scrollbar gutter spacing."
},
{
"ref":"textual.containers.Container.gutter",
"url":3,
"doc":"Spacing for padding / border / scrollbars. Returns: Spacing: Additional spacing around content area."
},
{
"ref":"textual.containers.Container.size",
"url":3,
"doc":"The size of the content area. Returns: Size: Content area size."
},
{
"ref":"textual.containers.Container.outer_size",
"url":3,
"doc":"The size of the widget (including padding and border). Returns: Size: Outer size."
},
{
"ref":"textual.containers.Container.container_size",
"url":3,
"doc":"The size of the container (parent widget). Returns: Size: Container size."
},
{
"ref":"textual.containers.Container.content_region",
"url":3,
"doc":"Gets an absolute region containing the content (minus padding and border). Returns: Region: Screen region that contains a widget's content."
},
{
"ref":"textual.containers.Container.content_offset",
"url":3,
"doc":"An offset from the Widget origin where the content begins. Returns: Offset: Offset from widget's origin."
},
{
"ref":"textual.containers.Container.content_size",
"url":3,
"doc":"Get the size of the content area."
},
{
"ref":"textual.containers.Container.region",
"url":3,
"doc":"The region occupied by this widget, relative to the Screen. Raises: NoScreen: If there is no screen. errors.NoWidget: If the widget is not on the screen. Returns: Region: Region within screen occupied by widget."
},
{
"ref":"textual.containers.Container.container_viewport",
"url":3,
"doc":"The viewport region (parent window). Returns: Region: The region that contains this widget."
},
{
"ref":"textual.containers.Container.virtual_region",
"url":3,
"doc":"The widget region relative to it's container. Which may not be visible, depending on scroll offset."
},
{
"ref":"textual.containers.Container.window_region",
"url":3,
"doc":"The region within the scrollable area that is currently visible. Returns: Region: New region."
},
{
"ref":"textual.containers.Container.virtual_region_with_margin",
"url":3,
"doc":"The widget region relative to its container ( including margin ), which may not be visible, depending on the scroll offset. Returns: Region: The virtual region of the Widget, inclusive of its margin."
},
{
"ref":"textual.containers.Container.focusable_children",
"url":3,
"doc":"Get the children which may be focused. Returns: list[Widget]: List of widgets that can receive focus."
},
{
"ref":"textual.containers.Container.scroll_offset",
"url":3,
"doc":"Get the current scroll offset. Returns: Offset: Offset a container has been scrolled by."
},
{
"ref":"textual.containers.Container.is_transparent",
"url":3,
"doc":"Check if the background styles is not set. Returns: bool:  True if there is background color, otherwise  False ."
},
{
"ref":"textual.containers.Container.animate",
"url":3,
"doc":"Get an animator to animate attributes on this widget. Example:  python self.animate(\"brightness\", 0.5)  Returns: BoundAnimator: An animator bound to this widget."
},
{
"ref":"textual.containers.Container.is_container",
"url":3,
"doc":"Check if this widget is a container (contains other widgets). Returns: bool: True if this widget is a container."
},
{
"ref":"textual.containers.Container.is_scrollable",
"url":3,
"doc":"Check if this Widget may be scrolled. Returns: bool: True if this widget may be scrolled."
},
{
"ref":"textual.containers.Container.layer",
"url":3,
"doc":"Get the name of this widgets layer. Returns: str: Name of layer."
},
{
"ref":"textual.containers.Container.layers",
"url":3,
"doc":"Layers of from parent. Returns: tuple[str,  .]: Tuple of layer names."
},
{
"ref":"textual.containers.Container.link_style",
"url":3,
"doc":"Style of links."
},
{
"ref":"textual.containers.Container.link_hover_style",
"url":3,
"doc":"Style of links with mouse hover."
},
{
"ref":"textual.containers.Container.scroll_to",
"url":3,
"doc":"Scroll to a given (absolute) coordinate, optionally animating. Args: x (int | None, optional): X coordinate (column) to scroll to, or None for no change. Defaults to None. y (int | None, optional): Y coordinate (row) to scroll to, or None for no change. Defaults to None. animate (bool, optional): Animate to new scroll position. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.containers.Container.scroll_relative",
"url":3,
"doc":"Scroll relative to current position. Args: x (int | None, optional): X distance (columns) to scroll, or  None for no change. Defaults to None. y (int | None, optional): Y distance (rows) to scroll, or  None for no change. Defaults to None. animate (bool, optional): Animate to new scroll position. Defaults to False. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.containers.Container.scroll_home",
"url":3,
"doc":"Scroll to home position. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.containers.Container.scroll_end",
"url":3,
"doc":"Scroll to the end of the container. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.containers.Container.scroll_left",
"url":3,
"doc":"Scroll one cell left. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.containers.Container.scroll_right",
"url":3,
"doc":"Scroll on cell right. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.containers.Container.scroll_down",
"url":3,
"doc":"Scroll one line down. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.containers.Container.scroll_up",
"url":3,
"doc":"Scroll one line up. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.containers.Container.scroll_page_up",
"url":3,
"doc":"Scroll one page up. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.containers.Container.scroll_page_down",
"url":3,
"doc":"Scroll one page down. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.containers.Container.scroll_page_left",
"url":3,
"doc":"Scroll one page left. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.containers.Container.scroll_page_right",
"url":3,
"doc":"Scroll one page right. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.containers.Container.scroll_to_widget",
"url":3,
"doc":"Scroll scrolling to bring a widget in to view. Args: widget (Widget): A descendant widget. animate (bool, optional): True to animate, or False to jump. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling has occurred in any descendant, otherwise False.",
"func":1
},
{
"ref":"textual.containers.Container.scroll_to_region",
"url":3,
"doc":"Scrolls a given region in to view, if required. This method will scroll the least distance required to move  region fully within the scrollable area. Args: region (Region): A region that should be visible. spacing (Spacing | None, optional): Optional spacing around the region. Defaults to None. animate (bool, optional): True to animate, or False to jump. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: Offset: The distance that was scrolled.",
"func":1
},
{
"ref":"textual.containers.Container.scroll_visible",
"url":3,
"doc":"Scroll the container to make this widget visible. Args: animate (bool, optional): _description_. Defaults to True. speed (float | None, optional): _description_. Defaults to None. duration (float | None, optional): _description_. Defaults to None.",
"func":1
},
{
"ref":"textual.containers.Container.get_pseudo_classes",
"url":3,
"doc":"Pseudo classes for a widget. Returns: Iterable[str]: Names of the pseudo classes.",
"func":1
},
{
"ref":"textual.containers.Container.post_render",
"url":3,
"doc":"Applies style attributes to the default renderable. Returns: RenderableType: A new renderable.",
"func":1
},
{
"ref":"textual.containers.Container.watch_mouse_over",
"url":3,
"doc":"Update from CSS if mouse over state changes.",
"func":1
},
{
"ref":"textual.containers.Container.watch_has_focus",
"url":3,
"doc":"Update from CSS if has focus state changes.",
"func":1
},
{
"ref":"textual.containers.Container.render_line",
"url":3,
"doc":"Render a line of content. Args: y (int): Y Coordinate of line. Returns: list[Segment]: A rendered line.",
"func":1
},
{
"ref":"textual.containers.Container.render_lines",
"url":3,
"doc":"Render the widget in to lines. Args: crop (Region): Region within visible area to render. Returns: Lines: A list of list of segments.",
"func":1
},
{
"ref":"textual.containers.Container.get_style_at",
"url":3,
"doc":"Get the Rich style at a given screen offset. Args: x (int): X coordinate relative to the screen. y (int): Y coordinate relative to the screen. Returns: Style: A rich Style object.",
"func":1
},
{
"ref":"textual.containers.Container.refresh",
"url":3,
"doc":"Initiate a refresh of the widget. This method sets an internal flag to perform a refresh, which will be done on the next idle event. Only one refresh will be done even if this method is called multiple times. By default this method will cause the content of the widget to refresh, but not change its size. You can also set  layout=True to perform a layout.  ! warning It is rarely necessary to call this method explicitly. Updating styles or reactive attributes will do this automatically. Args:  regions (Region, optional): Additional screen regions to mark as dirty. repaint (bool, optional): Repaint the widget (will call render() again). Defaults to True. layout (bool, optional): Also layout widgets in the view. Defaults to False.",
"func":1
},
{
"ref":"textual.containers.Container.remove",
"url":3,
"doc":"Remove the Widget from the DOM (effectively deleting it)",
"func":1
},
{
"ref":"textual.containers.Container.render",
"url":3,
"doc":"Get renderable for widget. Returns: RenderableType: Any renderable",
"func":1
},
{
"ref":"textual.containers.Container.action",
"url":3,
"doc":"Perform a given action, with this widget as the default namespace. Args: action (str): Action encoded as a string.",
"func":1
},
{
"ref":"textual.containers.Container.post_message",
"url":3,
"doc":"Post a message to this widget. Args: message (Message): Message to post. Returns: bool: True if the message was posted, False if this widget was closed / closing.",
"func":1
},
{
"ref":"textual.containers.Container.focus",
"url":3,
"doc":"Give focus to this widget. Args: scroll_visible (bool, optional): Scroll parent to make this widget visible. Defaults to True.",
"func":1
},
{
"ref":"textual.containers.Container.capture_mouse",
"url":3,
"doc":"Capture (or release) the mouse. When captured, mouse events will go to this widget even when the pointer is not directly over the widget. Args: capture (bool, optional): True to capture or False to release. Defaults to True.",
"func":1
},
{
"ref":"textual.containers.Container.release_mouse",
"url":3,
"doc":"Release the mouse. Mouse events will only be sent when the mouse is over the widget.",
"func":1
},
{
"ref":"textual.containers.Container.get_component_styles",
"url":4,
"doc":"Get a \"component\" styles object (must be defined in COMPONENT_CLASSES classvar). Args: name (str): Name of the component. Raises: KeyError: If the component class doesn't exist. Returns: RenderStyles: A Styles object.",
"func":1
},
{
"ref":"textual.containers.Container.get_default_css",
"url":4,
"doc":"Gets the CSS for this class and inherited from bases. Returns: list[tuple[str, str : a list of tuples containing (PATH, SOURCE) for this and inherited from base classes.",
"func":1
},
{
"ref":"textual.containers.Container.parent",
"url":4,
"doc":"Get the parent node. Returns: DOMNode | None: The node which is the direct parent of this node."
},
{
"ref":"textual.containers.Container.screen",
"url":4,
"doc":"Get the screen that this node is contained within. Note that this may not be the currently active screen within the app."
},
{
"ref":"textual.containers.Container.id",
"url":4,
"doc":"The ID of this node, or None if the node has no ID. Returns: (str | None): A Node ID or None."
},
{
"ref":"textual.containers.Container.css_identifier",
"url":4,
"doc":"A CSS selector that identifies this DOM node."
},
{
"ref":"textual.containers.Container.css_identifier_styled",
"url":4,
"doc":"A stylized CSS identifier."
},
{
"ref":"textual.containers.Container.classes",
"url":4,
"doc":"A frozenset of the current classes set on the widget. Returns: frozenset[str]: Set of class names."
},
{
"ref":"textual.containers.Container.pseudo_classes",
"url":4,
"doc":"Get a set of all pseudo classes"
},
{
"ref":"textual.containers.Container.css_path_nodes",
"url":4,
"doc":"A list of nodes from the root to this node, forming a \"path\". Returns: list[DOMNode]: List of Nodes, starting with the root and ending with this node."
},
{
"ref":"textual.containers.Container.display",
"url":4,
"doc":"Check if this widget should display or not. Returns: bool:  True if this DOMNode is displayed ( display != \"none\" ) otherwise  False ."
},
{
"ref":"textual.containers.Container.tree",
"url":4,
"doc":"Get a Rich tree object which will recursively render the structure of the node tree. Returns: Tree: A Rich object which may be printed."
},
{
"ref":"textual.containers.Container.text_style",
"url":4,
"doc":"Get the text style object. A widget's style is influenced by its parent. for instance if a parent is bold, then the child will also be bold. Returns: Style: Rich Style object."
},
{
"ref":"textual.containers.Container.rich_style",
"url":4,
"doc":"Get a Rich Style object for this DOMNode."
},
{
"ref":"textual.containers.Container.background_colors",
"url":4,
"doc":"Get the background color and the color of the parent's background. Returns: tuple[Color, Color]: Tuple of (base background, background)"
},
{
"ref":"textual.containers.Container.colors",
"url":4,
"doc":"Gets the Widgets foreground and background colors, and its parent's (base) colors. Returns: tuple[Color, Color, Color, Color]: Tuple of (base background, base color, background, color)"
},
{
"ref":"textual.containers.Container.ancestors",
"url":4,
"doc":"Get a list of Nodes by tracing ancestors all the way back to App."
},
{
"ref":"textual.containers.Container.displayed_children",
"url":4,
"doc":"The children which don't have display: none set. Returns: list[DOMNode]: Children of this widget which will be displayed."
},
{
"ref":"textual.containers.Container.reset_styles",
"url":4,
"doc":"Reset styles back to their initial state",
"func":1
},
{
"ref":"textual.containers.Container.walk_children",
"url":4,
"doc":"Generate descendant nodes. Args: filter_type (type[WalkType] | None, optional): Filter only this type, or None for no filter. Defaults to None. with_self (bool, optional): Also yield self in addition to descendants. Defaults to True. Returns: Iterable[DOMNode | WalkType]: An iterable of nodes.",
"func":1
},
{
"ref":"textual.containers.Container.get_child",
"url":4,
"doc":"Return the first child (immediate descendent) of this node with the given ID. Args: id (str): The ID of the child. Returns: DOMNode: The first child of this node with the ID. Raises: NoMatchingNodesError: if no children could be found for this ID",
"func":1
},
{
"ref":"textual.containers.Container.query",
"url":4,
"doc":"Get a DOM query matching a selector. Args: selector (str, optional): A CSS selector or  None for all nodes. Defaults to None. Returns: DOMQuery: A query object.",
"func":1
},
{
"ref":"textual.containers.Container.query_one",
"url":4,
"doc":"Get the first Widget matching the given selector or selector type. Args: selector (str | None, optional): A selector. expect_type (type, optional): Require the object be of the supplied type, or None for any type. Defaults to None. Returns: Widget | ExpectType: A widget matching the selector.",
"func":1
},
{
"ref":"textual.containers.Container.set_styles",
"url":4,
"doc":"Set custom styles on this object.",
"func":1
},
{
"ref":"textual.containers.Container.has_class",
"url":4,
"doc":"Check if the Node has all the given class names. Args:  class_names (str): CSS class names to check. Returns: bool:  True if the node has all the given class names, otherwise  False .",
"func":1
},
{
"ref":"textual.containers.Container.set_class",
"url":4,
"doc":"Add or remove class(es) based on a condition. Args: add (bool): Add the classes if True, otherwise remove them.",
"func":1
},
{
"ref":"textual.containers.Container.add_class",
"url":4,
"doc":"Add class names to this Node. Args:  class_names (str): CSS class names to add.",
"func":1
},
{
"ref":"textual.containers.Container.remove_class",
"url":4,
"doc":"Remove class names from this Node. Args:  class_names (str): CSS class names to remove.",
"func":1
},
{
"ref":"textual.containers.Container.toggle_class",
"url":4,
"doc":"Toggle class names on this Node. Args:  class_names (str): CSS class names to toggle.",
"func":1
},
{
"ref":"textual.containers.Container.has_pseudo_class",
"url":4,
"doc":"Check for pseudo class (such as hover, focus etc)",
"func":1
},
{
"ref":"textual.containers.Container.app",
"url":5,
"doc":"Get the current app. Returns: App: The current app. Raises: NoActiveAppError: if no active app could be found for the current asyncio context"
},
{
"ref":"textual.containers.Container.log",
"url":5,
"doc":"Get a logger for this object. Returns: Logger: A logger."
},
{
"ref":"textual.containers.Container.disable_messages",
"url":5,
"doc":"Disable message types from being processed.",
"func":1
},
{
"ref":"textual.containers.Container.enable_messages",
"url":5,
"doc":"Enable processing of messages types.",
"func":1
},
{
"ref":"textual.containers.Container.set_timer",
"url":5,
"doc":"Make a function call after a delay. Args: delay (float): Time to wait before invoking callback. callback (TimerCallback | None, optional): Callback to call after time has expired. Defaults to None. name (str | None, optional): Name of the timer (for debug). Defaults to None. pause (bool, optional): Start timer paused. Defaults to False. Returns: Timer: A timer object.",
"func":1
},
{
"ref":"textual.containers.Container.set_interval",
"url":5,
"doc":"Call a function at periodic intervals. Args: interval (float): Time between calls. callback (TimerCallback | None, optional): Function to call. Defaults to None. name (str | None, optional): Name of the timer object. Defaults to None. repeat (int, optional): Number of times to repeat the call or 0 for continuous. Defaults to 0. pause (bool, optional): Start the timer paused. Defaults to False. Returns: Timer: A timer object.",
"func":1
},
{
"ref":"textual.containers.Container.call_later",
"url":5,
"doc":"Schedule a callback to run after all messages are processed and the screen has been refreshed. Positional and keyword arguments are passed to the callable. Args: callback (Callable): A callable.",
"func":1
},
{
"ref":"textual.containers.Container.on_event",
"url":5,
"doc":"Called to process an event. Args: event (events.Event): An Event object.",
"func":1
},
{
"ref":"textual.containers.Container.check_idle",
"url":5,
"doc":"Prompt the message pump to call idle if the queue is empty.",
"func":1
},
{
"ref":"textual.containers.Container.post_message_no_wait",
"url":5,
"doc":"Posts a message on the queue. Args: message (Message): A message (or Event). Returns: bool: True if the messages was processed, False if it wasn't.",
"func":1
},
{
"ref":"textual.containers.Container.emit_no_wait",
"url":5,
"doc":"Send a message to the _parent_, non async version. Args: message (Message): A message object. Returns: bool: True if the message was posted successfully.",
"func":1
},
{
"ref":"textual.containers.Container.emit",
"url":5,
"doc":"Send a message to the _parent_. Args: message (Message): A message object. Returns: bool: True if the message was posted successfully.",
"func":1
},
{
"ref":"textual.containers.Container.dispatch_key",
"url":5,
"doc":"Dispatch a key event to method. This method will call the method named 'key_ ' if it exists. Args: event (events.Key): A key event. Returns: bool: True if key was handled, otherwise False.",
"func":1
},
{
"ref":"textual.containers.Vertical",
"url":18,
"doc":"A container widget which aligns children vertically."
},
{
"ref":"textual.containers.Vertical.COMPONENT_CLASSES",
"url":18,
"doc":""
},
{
"ref":"textual.containers.Vertical.hover_style",
"url":18,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Vertical.highlight_link_id",
"url":18,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Vertical.DEFAULT_CSS",
"url":18,
"doc":""
},
{
"ref":"textual.containers.Vertical.can_focus",
"url":18,
"doc":"Widget may receive focus."
},
{
"ref":"textual.containers.Vertical.can_focus_children",
"url":18,
"doc":"Widget's children may receive focus."
},
{
"ref":"textual.containers.Vertical.expand",
"url":3,
"doc":"Rich renderable may expand."
},
{
"ref":"textual.containers.Vertical.shrink",
"url":3,
"doc":"Rich renderable may shrink."
},
{
"ref":"textual.containers.Vertical.auto_links",
"url":3,
"doc":"Widget will highlight links automatically."
},
{
"ref":"textual.containers.Vertical.virtual_size",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Vertical.auto_width",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Vertical.auto_height",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Vertical.has_focus",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Vertical.descendant_has_focus",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Vertical.mouse_over",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Vertical.scroll_x",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Vertical.scroll_y",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Vertical.scroll_target_x",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Vertical.scroll_target_y",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Vertical.show_vertical_scrollbar",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Vertical.show_horizontal_scrollbar",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Vertical.siblings",
"url":3,
"doc":"Get the widget's siblings (self is removed from the return list). Returns: list[Widget]: A list of siblings."
},
{
"ref":"textual.containers.Vertical.allow_vertical_scroll",
"url":3,
"doc":"Check if vertical scroll is permitted. May be overridden if you want different logic regarding allowing scrolling. Returns: bool: True if the widget may scroll _vertically_."
},
{
"ref":"textual.containers.Vertical.allow_horizontal_scroll",
"url":3,
"doc":"Check if horizontal scroll is permitted. May be overridden if you want different logic regarding allowing scrolling. Returns: bool: True if the widget may scroll _horizontally_."
},
{
"ref":"textual.containers.Vertical.offset",
"url":3,
"doc":"Widget offset from origin. Returns: Offset: Relative offset."
},
{
"ref":"textual.containers.Vertical.get_component_rich_style",
"url":3,
"doc":"Get a  Rich style for a component. Args: name (str): Name of component. Returns: Style: A Rich style object.",
"func":1
},
{
"ref":"textual.containers.Vertical.mount",
"url":3,
"doc":"Mount child widgets (making this widget a container). Widgets may be passed as positional arguments or keyword arguments. If keyword arguments, the keys will be set as the Widget's id. Example:  python self.mount(Static(\"hello\"), header=Header(  ",
"func":1
},
{
"ref":"textual.containers.Vertical.compose",
"url":3,
"doc":"Called by Textual to create child widgets. Extend this to build a UI. Example:  python def compose(self) -> ComposeResult: yield Header() yield Container( TreeControl(), Viewer() ) yield Footer()  ",
"func":1
},
{
"ref":"textual.containers.Vertical.get_content_width",
"url":3,
"doc":"Called by textual to get the width of the content area. May be overridden in a subclass. Args: container (Size): Size of the container (immediate parent) widget. viewport (Size): Size of the viewport. Returns: int: The optimal width of the content.",
"func":1
},
{
"ref":"textual.containers.Vertical.get_content_height",
"url":3,
"doc":"Called by Textual to get the height of the content area. May be overridden in a subclass. Args: container (Size): Size of the container (immediate parent) widget. viewport (Size): Size of the viewport. width (int): Width of renderable. Returns: int: The height of the content.",
"func":1
},
{
"ref":"textual.containers.Vertical.max_scroll_x",
"url":3,
"doc":"The maximum value of  scroll_x ."
},
{
"ref":"textual.containers.Vertical.max_scroll_y",
"url":3,
"doc":"The maximum value of  scroll_y ."
},
{
"ref":"textual.containers.Vertical.scrollbar_corner",
"url":3,
"doc":"Return the ScrollBarCorner - the cells that appear between the horizontal and vertical scrollbars (only when both are visible)."
},
{
"ref":"textual.containers.Vertical.vertical_scrollbar",
"url":3,
"doc":"Get a vertical scrollbar (create if necessary). Returns: ScrollBar: ScrollBar Widget."
},
{
"ref":"textual.containers.Vertical.horizontal_scrollbar",
"url":3,
"doc":"Get a vertical scrollbar (create if necessary). Returns: ScrollBar: ScrollBar Widget."
},
{
"ref":"textual.containers.Vertical.scrollbars_enabled",
"url":3,
"doc":"A tuple of booleans that indicate if scrollbars are enabled. Returns: tuple[bool, bool]: A tuple of ( ,  )"
},
{
"ref":"textual.containers.Vertical.scrollbar_size_vertical",
"url":3,
"doc":"Get the width used by the  vertical scrollbar. Returns: int: Number of columns in the vertical scrollbar."
},
{
"ref":"textual.containers.Vertical.scrollbar_size_horizontal",
"url":3,
"doc":"Get the height used by the  horizontal scrollbar. Returns: int: Number of rows in the horizontal scrollbar."
},
{
"ref":"textual.containers.Vertical.scrollbar_gutter",
"url":3,
"doc":"Spacing required to fit scrollbar(s). Returns: Spacing: Scrollbar gutter spacing."
},
{
"ref":"textual.containers.Vertical.gutter",
"url":3,
"doc":"Spacing for padding / border / scrollbars. Returns: Spacing: Additional spacing around content area."
},
{
"ref":"textual.containers.Vertical.size",
"url":3,
"doc":"The size of the content area. Returns: Size: Content area size."
},
{
"ref":"textual.containers.Vertical.outer_size",
"url":3,
"doc":"The size of the widget (including padding and border). Returns: Size: Outer size."
},
{
"ref":"textual.containers.Vertical.container_size",
"url":3,
"doc":"The size of the container (parent widget). Returns: Size: Container size."
},
{
"ref":"textual.containers.Vertical.content_region",
"url":3,
"doc":"Gets an absolute region containing the content (minus padding and border). Returns: Region: Screen region that contains a widget's content."
},
{
"ref":"textual.containers.Vertical.content_offset",
"url":3,
"doc":"An offset from the Widget origin where the content begins. Returns: Offset: Offset from widget's origin."
},
{
"ref":"textual.containers.Vertical.content_size",
"url":3,
"doc":"Get the size of the content area."
},
{
"ref":"textual.containers.Vertical.region",
"url":3,
"doc":"The region occupied by this widget, relative to the Screen. Raises: NoScreen: If there is no screen. errors.NoWidget: If the widget is not on the screen. Returns: Region: Region within screen occupied by widget."
},
{
"ref":"textual.containers.Vertical.container_viewport",
"url":3,
"doc":"The viewport region (parent window). Returns: Region: The region that contains this widget."
},
{
"ref":"textual.containers.Vertical.virtual_region",
"url":3,
"doc":"The widget region relative to it's container. Which may not be visible, depending on scroll offset."
},
{
"ref":"textual.containers.Vertical.window_region",
"url":3,
"doc":"The region within the scrollable area that is currently visible. Returns: Region: New region."
},
{
"ref":"textual.containers.Vertical.virtual_region_with_margin",
"url":3,
"doc":"The widget region relative to its container ( including margin ), which may not be visible, depending on the scroll offset. Returns: Region: The virtual region of the Widget, inclusive of its margin."
},
{
"ref":"textual.containers.Vertical.focusable_children",
"url":3,
"doc":"Get the children which may be focused. Returns: list[Widget]: List of widgets that can receive focus."
},
{
"ref":"textual.containers.Vertical.scroll_offset",
"url":3,
"doc":"Get the current scroll offset. Returns: Offset: Offset a container has been scrolled by."
},
{
"ref":"textual.containers.Vertical.is_transparent",
"url":3,
"doc":"Check if the background styles is not set. Returns: bool:  True if there is background color, otherwise  False ."
},
{
"ref":"textual.containers.Vertical.animate",
"url":3,
"doc":"Get an animator to animate attributes on this widget. Example:  python self.animate(\"brightness\", 0.5)  Returns: BoundAnimator: An animator bound to this widget."
},
{
"ref":"textual.containers.Vertical.is_container",
"url":3,
"doc":"Check if this widget is a container (contains other widgets). Returns: bool: True if this widget is a container."
},
{
"ref":"textual.containers.Vertical.is_scrollable",
"url":3,
"doc":"Check if this Widget may be scrolled. Returns: bool: True if this widget may be scrolled."
},
{
"ref":"textual.containers.Vertical.layer",
"url":3,
"doc":"Get the name of this widgets layer. Returns: str: Name of layer."
},
{
"ref":"textual.containers.Vertical.layers",
"url":3,
"doc":"Layers of from parent. Returns: tuple[str,  .]: Tuple of layer names."
},
{
"ref":"textual.containers.Vertical.link_style",
"url":3,
"doc":"Style of links."
},
{
"ref":"textual.containers.Vertical.link_hover_style",
"url":3,
"doc":"Style of links with mouse hover."
},
{
"ref":"textual.containers.Vertical.scroll_to",
"url":3,
"doc":"Scroll to a given (absolute) coordinate, optionally animating. Args: x (int | None, optional): X coordinate (column) to scroll to, or None for no change. Defaults to None. y (int | None, optional): Y coordinate (row) to scroll to, or None for no change. Defaults to None. animate (bool, optional): Animate to new scroll position. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.containers.Vertical.scroll_relative",
"url":3,
"doc":"Scroll relative to current position. Args: x (int | None, optional): X distance (columns) to scroll, or  None for no change. Defaults to None. y (int | None, optional): Y distance (rows) to scroll, or  None for no change. Defaults to None. animate (bool, optional): Animate to new scroll position. Defaults to False. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.containers.Vertical.scroll_home",
"url":3,
"doc":"Scroll to home position. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.containers.Vertical.scroll_end",
"url":3,
"doc":"Scroll to the end of the container. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.containers.Vertical.scroll_left",
"url":3,
"doc":"Scroll one cell left. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.containers.Vertical.scroll_right",
"url":3,
"doc":"Scroll on cell right. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.containers.Vertical.scroll_down",
"url":3,
"doc":"Scroll one line down. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.containers.Vertical.scroll_up",
"url":3,
"doc":"Scroll one line up. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.containers.Vertical.scroll_page_up",
"url":3,
"doc":"Scroll one page up. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.containers.Vertical.scroll_page_down",
"url":3,
"doc":"Scroll one page down. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.containers.Vertical.scroll_page_left",
"url":3,
"doc":"Scroll one page left. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.containers.Vertical.scroll_page_right",
"url":3,
"doc":"Scroll one page right. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.containers.Vertical.scroll_to_widget",
"url":3,
"doc":"Scroll scrolling to bring a widget in to view. Args: widget (Widget): A descendant widget. animate (bool, optional): True to animate, or False to jump. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling has occurred in any descendant, otherwise False.",
"func":1
},
{
"ref":"textual.containers.Vertical.scroll_to_region",
"url":3,
"doc":"Scrolls a given region in to view, if required. This method will scroll the least distance required to move  region fully within the scrollable area. Args: region (Region): A region that should be visible. spacing (Spacing | None, optional): Optional spacing around the region. Defaults to None. animate (bool, optional): True to animate, or False to jump. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: Offset: The distance that was scrolled.",
"func":1
},
{
"ref":"textual.containers.Vertical.scroll_visible",
"url":3,
"doc":"Scroll the container to make this widget visible. Args: animate (bool, optional): _description_. Defaults to True. speed (float | None, optional): _description_. Defaults to None. duration (float | None, optional): _description_. Defaults to None.",
"func":1
},
{
"ref":"textual.containers.Vertical.get_pseudo_classes",
"url":3,
"doc":"Pseudo classes for a widget. Returns: Iterable[str]: Names of the pseudo classes.",
"func":1
},
{
"ref":"textual.containers.Vertical.post_render",
"url":3,
"doc":"Applies style attributes to the default renderable. Returns: RenderableType: A new renderable.",
"func":1
},
{
"ref":"textual.containers.Vertical.watch_mouse_over",
"url":3,
"doc":"Update from CSS if mouse over state changes.",
"func":1
},
{
"ref":"textual.containers.Vertical.watch_has_focus",
"url":3,
"doc":"Update from CSS if has focus state changes.",
"func":1
},
{
"ref":"textual.containers.Vertical.render_line",
"url":3,
"doc":"Render a line of content. Args: y (int): Y Coordinate of line. Returns: list[Segment]: A rendered line.",
"func":1
},
{
"ref":"textual.containers.Vertical.render_lines",
"url":3,
"doc":"Render the widget in to lines. Args: crop (Region): Region within visible area to render. Returns: Lines: A list of list of segments.",
"func":1
},
{
"ref":"textual.containers.Vertical.get_style_at",
"url":3,
"doc":"Get the Rich style at a given screen offset. Args: x (int): X coordinate relative to the screen. y (int): Y coordinate relative to the screen. Returns: Style: A rich Style object.",
"func":1
},
{
"ref":"textual.containers.Vertical.refresh",
"url":3,
"doc":"Initiate a refresh of the widget. This method sets an internal flag to perform a refresh, which will be done on the next idle event. Only one refresh will be done even if this method is called multiple times. By default this method will cause the content of the widget to refresh, but not change its size. You can also set  layout=True to perform a layout.  ! warning It is rarely necessary to call this method explicitly. Updating styles or reactive attributes will do this automatically. Args:  regions (Region, optional): Additional screen regions to mark as dirty. repaint (bool, optional): Repaint the widget (will call render() again). Defaults to True. layout (bool, optional): Also layout widgets in the view. Defaults to False.",
"func":1
},
{
"ref":"textual.containers.Vertical.remove",
"url":3,
"doc":"Remove the Widget from the DOM (effectively deleting it)",
"func":1
},
{
"ref":"textual.containers.Vertical.render",
"url":3,
"doc":"Get renderable for widget. Returns: RenderableType: Any renderable",
"func":1
},
{
"ref":"textual.containers.Vertical.action",
"url":3,
"doc":"Perform a given action, with this widget as the default namespace. Args: action (str): Action encoded as a string.",
"func":1
},
{
"ref":"textual.containers.Vertical.post_message",
"url":3,
"doc":"Post a message to this widget. Args: message (Message): Message to post. Returns: bool: True if the message was posted, False if this widget was closed / closing.",
"func":1
},
{
"ref":"textual.containers.Vertical.focus",
"url":3,
"doc":"Give focus to this widget. Args: scroll_visible (bool, optional): Scroll parent to make this widget visible. Defaults to True.",
"func":1
},
{
"ref":"textual.containers.Vertical.capture_mouse",
"url":3,
"doc":"Capture (or release) the mouse. When captured, mouse events will go to this widget even when the pointer is not directly over the widget. Args: capture (bool, optional): True to capture or False to release. Defaults to True.",
"func":1
},
{
"ref":"textual.containers.Vertical.release_mouse",
"url":3,
"doc":"Release the mouse. Mouse events will only be sent when the mouse is over the widget.",
"func":1
},
{
"ref":"textual.containers.Vertical.get_component_styles",
"url":4,
"doc":"Get a \"component\" styles object (must be defined in COMPONENT_CLASSES classvar). Args: name (str): Name of the component. Raises: KeyError: If the component class doesn't exist. Returns: RenderStyles: A Styles object.",
"func":1
},
{
"ref":"textual.containers.Vertical.get_default_css",
"url":4,
"doc":"Gets the CSS for this class and inherited from bases. Returns: list[tuple[str, str : a list of tuples containing (PATH, SOURCE) for this and inherited from base classes.",
"func":1
},
{
"ref":"textual.containers.Vertical.parent",
"url":4,
"doc":"Get the parent node. Returns: DOMNode | None: The node which is the direct parent of this node."
},
{
"ref":"textual.containers.Vertical.screen",
"url":4,
"doc":"Get the screen that this node is contained within. Note that this may not be the currently active screen within the app."
},
{
"ref":"textual.containers.Vertical.id",
"url":4,
"doc":"The ID of this node, or None if the node has no ID. Returns: (str | None): A Node ID or None."
},
{
"ref":"textual.containers.Vertical.css_identifier",
"url":4,
"doc":"A CSS selector that identifies this DOM node."
},
{
"ref":"textual.containers.Vertical.css_identifier_styled",
"url":4,
"doc":"A stylized CSS identifier."
},
{
"ref":"textual.containers.Vertical.classes",
"url":4,
"doc":"A frozenset of the current classes set on the widget. Returns: frozenset[str]: Set of class names."
},
{
"ref":"textual.containers.Vertical.pseudo_classes",
"url":4,
"doc":"Get a set of all pseudo classes"
},
{
"ref":"textual.containers.Vertical.css_path_nodes",
"url":4,
"doc":"A list of nodes from the root to this node, forming a \"path\". Returns: list[DOMNode]: List of Nodes, starting with the root and ending with this node."
},
{
"ref":"textual.containers.Vertical.display",
"url":4,
"doc":"Check if this widget should display or not. Returns: bool:  True if this DOMNode is displayed ( display != \"none\" ) otherwise  False ."
},
{
"ref":"textual.containers.Vertical.tree",
"url":4,
"doc":"Get a Rich tree object which will recursively render the structure of the node tree. Returns: Tree: A Rich object which may be printed."
},
{
"ref":"textual.containers.Vertical.text_style",
"url":4,
"doc":"Get the text style object. A widget's style is influenced by its parent. for instance if a parent is bold, then the child will also be bold. Returns: Style: Rich Style object."
},
{
"ref":"textual.containers.Vertical.rich_style",
"url":4,
"doc":"Get a Rich Style object for this DOMNode."
},
{
"ref":"textual.containers.Vertical.background_colors",
"url":4,
"doc":"Get the background color and the color of the parent's background. Returns: tuple[Color, Color]: Tuple of (base background, background)"
},
{
"ref":"textual.containers.Vertical.colors",
"url":4,
"doc":"Gets the Widgets foreground and background colors, and its parent's (base) colors. Returns: tuple[Color, Color, Color, Color]: Tuple of (base background, base color, background, color)"
},
{
"ref":"textual.containers.Vertical.ancestors",
"url":4,
"doc":"Get a list of Nodes by tracing ancestors all the way back to App."
},
{
"ref":"textual.containers.Vertical.displayed_children",
"url":4,
"doc":"The children which don't have display: none set. Returns: list[DOMNode]: Children of this widget which will be displayed."
},
{
"ref":"textual.containers.Vertical.reset_styles",
"url":4,
"doc":"Reset styles back to their initial state",
"func":1
},
{
"ref":"textual.containers.Vertical.walk_children",
"url":4,
"doc":"Generate descendant nodes. Args: filter_type (type[WalkType] | None, optional): Filter only this type, or None for no filter. Defaults to None. with_self (bool, optional): Also yield self in addition to descendants. Defaults to True. Returns: Iterable[DOMNode | WalkType]: An iterable of nodes.",
"func":1
},
{
"ref":"textual.containers.Vertical.get_child",
"url":4,
"doc":"Return the first child (immediate descendent) of this node with the given ID. Args: id (str): The ID of the child. Returns: DOMNode: The first child of this node with the ID. Raises: NoMatchingNodesError: if no children could be found for this ID",
"func":1
},
{
"ref":"textual.containers.Vertical.query",
"url":4,
"doc":"Get a DOM query matching a selector. Args: selector (str, optional): A CSS selector or  None for all nodes. Defaults to None. Returns: DOMQuery: A query object.",
"func":1
},
{
"ref":"textual.containers.Vertical.query_one",
"url":4,
"doc":"Get the first Widget matching the given selector or selector type. Args: selector (str | None, optional): A selector. expect_type (type, optional): Require the object be of the supplied type, or None for any type. Defaults to None. Returns: Widget | ExpectType: A widget matching the selector.",
"func":1
},
{
"ref":"textual.containers.Vertical.set_styles",
"url":4,
"doc":"Set custom styles on this object.",
"func":1
},
{
"ref":"textual.containers.Vertical.has_class",
"url":4,
"doc":"Check if the Node has all the given class names. Args:  class_names (str): CSS class names to check. Returns: bool:  True if the node has all the given class names, otherwise  False .",
"func":1
},
{
"ref":"textual.containers.Vertical.set_class",
"url":4,
"doc":"Add or remove class(es) based on a condition. Args: add (bool): Add the classes if True, otherwise remove them.",
"func":1
},
{
"ref":"textual.containers.Vertical.add_class",
"url":4,
"doc":"Add class names to this Node. Args:  class_names (str): CSS class names to add.",
"func":1
},
{
"ref":"textual.containers.Vertical.remove_class",
"url":4,
"doc":"Remove class names from this Node. Args:  class_names (str): CSS class names to remove.",
"func":1
},
{
"ref":"textual.containers.Vertical.toggle_class",
"url":4,
"doc":"Toggle class names on this Node. Args:  class_names (str): CSS class names to toggle.",
"func":1
},
{
"ref":"textual.containers.Vertical.has_pseudo_class",
"url":4,
"doc":"Check for pseudo class (such as hover, focus etc)",
"func":1
},
{
"ref":"textual.containers.Vertical.app",
"url":5,
"doc":"Get the current app. Returns: App: The current app. Raises: NoActiveAppError: if no active app could be found for the current asyncio context"
},
{
"ref":"textual.containers.Vertical.log",
"url":5,
"doc":"Get a logger for this object. Returns: Logger: A logger."
},
{
"ref":"textual.containers.Vertical.disable_messages",
"url":5,
"doc":"Disable message types from being processed.",
"func":1
},
{
"ref":"textual.containers.Vertical.enable_messages",
"url":5,
"doc":"Enable processing of messages types.",
"func":1
},
{
"ref":"textual.containers.Vertical.set_timer",
"url":5,
"doc":"Make a function call after a delay. Args: delay (float): Time to wait before invoking callback. callback (TimerCallback | None, optional): Callback to call after time has expired. Defaults to None. name (str | None, optional): Name of the timer (for debug). Defaults to None. pause (bool, optional): Start timer paused. Defaults to False. Returns: Timer: A timer object.",
"func":1
},
{
"ref":"textual.containers.Vertical.set_interval",
"url":5,
"doc":"Call a function at periodic intervals. Args: interval (float): Time between calls. callback (TimerCallback | None, optional): Function to call. Defaults to None. name (str | None, optional): Name of the timer object. Defaults to None. repeat (int, optional): Number of times to repeat the call or 0 for continuous. Defaults to 0. pause (bool, optional): Start the timer paused. Defaults to False. Returns: Timer: A timer object.",
"func":1
},
{
"ref":"textual.containers.Vertical.call_later",
"url":5,
"doc":"Schedule a callback to run after all messages are processed and the screen has been refreshed. Positional and keyword arguments are passed to the callable. Args: callback (Callable): A callable.",
"func":1
},
{
"ref":"textual.containers.Vertical.on_event",
"url":5,
"doc":"Called to process an event. Args: event (events.Event): An Event object.",
"func":1
},
{
"ref":"textual.containers.Vertical.check_idle",
"url":5,
"doc":"Prompt the message pump to call idle if the queue is empty.",
"func":1
},
{
"ref":"textual.containers.Vertical.post_message_no_wait",
"url":5,
"doc":"Posts a message on the queue. Args: message (Message): A message (or Event). Returns: bool: True if the messages was processed, False if it wasn't.",
"func":1
},
{
"ref":"textual.containers.Vertical.emit_no_wait",
"url":5,
"doc":"Send a message to the _parent_, non async version. Args: message (Message): A message object. Returns: bool: True if the message was posted successfully.",
"func":1
},
{
"ref":"textual.containers.Vertical.emit",
"url":5,
"doc":"Send a message to the _parent_. Args: message (Message): A message object. Returns: bool: True if the message was posted successfully.",
"func":1
},
{
"ref":"textual.containers.Vertical.dispatch_key",
"url":5,
"doc":"Dispatch a key event to method. This method will call the method named 'key_ ' if it exists. Args: event (events.Key): A key event. Returns: bool: True if key was handled, otherwise False.",
"func":1
},
{
"ref":"textual.containers.Horizontal",
"url":18,
"doc":"A container widget which aligns children horizontally."
},
{
"ref":"textual.containers.Horizontal.COMPONENT_CLASSES",
"url":18,
"doc":""
},
{
"ref":"textual.containers.Horizontal.hover_style",
"url":18,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Horizontal.highlight_link_id",
"url":18,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Horizontal.DEFAULT_CSS",
"url":18,
"doc":""
},
{
"ref":"textual.containers.Horizontal.can_focus",
"url":18,
"doc":"Widget may receive focus."
},
{
"ref":"textual.containers.Horizontal.can_focus_children",
"url":18,
"doc":"Widget's children may receive focus."
},
{
"ref":"textual.containers.Horizontal.expand",
"url":3,
"doc":"Rich renderable may expand."
},
{
"ref":"textual.containers.Horizontal.shrink",
"url":3,
"doc":"Rich renderable may shrink."
},
{
"ref":"textual.containers.Horizontal.auto_links",
"url":3,
"doc":"Widget will highlight links automatically."
},
{
"ref":"textual.containers.Horizontal.virtual_size",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Horizontal.auto_width",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Horizontal.auto_height",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Horizontal.has_focus",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Horizontal.descendant_has_focus",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Horizontal.mouse_over",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Horizontal.scroll_x",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Horizontal.scroll_y",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Horizontal.scroll_target_x",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Horizontal.scroll_target_y",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Horizontal.show_vertical_scrollbar",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Horizontal.show_horizontal_scrollbar",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Horizontal.siblings",
"url":3,
"doc":"Get the widget's siblings (self is removed from the return list). Returns: list[Widget]: A list of siblings."
},
{
"ref":"textual.containers.Horizontal.allow_vertical_scroll",
"url":3,
"doc":"Check if vertical scroll is permitted. May be overridden if you want different logic regarding allowing scrolling. Returns: bool: True if the widget may scroll _vertically_."
},
{
"ref":"textual.containers.Horizontal.allow_horizontal_scroll",
"url":3,
"doc":"Check if horizontal scroll is permitted. May be overridden if you want different logic regarding allowing scrolling. Returns: bool: True if the widget may scroll _horizontally_."
},
{
"ref":"textual.containers.Horizontal.offset",
"url":3,
"doc":"Widget offset from origin. Returns: Offset: Relative offset."
},
{
"ref":"textual.containers.Horizontal.get_component_rich_style",
"url":3,
"doc":"Get a  Rich style for a component. Args: name (str): Name of component. Returns: Style: A Rich style object.",
"func":1
},
{
"ref":"textual.containers.Horizontal.mount",
"url":3,
"doc":"Mount child widgets (making this widget a container). Widgets may be passed as positional arguments or keyword arguments. If keyword arguments, the keys will be set as the Widget's id. Example:  python self.mount(Static(\"hello\"), header=Header(  ",
"func":1
},
{
"ref":"textual.containers.Horizontal.compose",
"url":3,
"doc":"Called by Textual to create child widgets. Extend this to build a UI. Example:  python def compose(self) -> ComposeResult: yield Header() yield Container( TreeControl(), Viewer() ) yield Footer()  ",
"func":1
},
{
"ref":"textual.containers.Horizontal.get_content_width",
"url":3,
"doc":"Called by textual to get the width of the content area. May be overridden in a subclass. Args: container (Size): Size of the container (immediate parent) widget. viewport (Size): Size of the viewport. Returns: int: The optimal width of the content.",
"func":1
},
{
"ref":"textual.containers.Horizontal.get_content_height",
"url":3,
"doc":"Called by Textual to get the height of the content area. May be overridden in a subclass. Args: container (Size): Size of the container (immediate parent) widget. viewport (Size): Size of the viewport. width (int): Width of renderable. Returns: int: The height of the content.",
"func":1
},
{
"ref":"textual.containers.Horizontal.max_scroll_x",
"url":3,
"doc":"The maximum value of  scroll_x ."
},
{
"ref":"textual.containers.Horizontal.max_scroll_y",
"url":3,
"doc":"The maximum value of  scroll_y ."
},
{
"ref":"textual.containers.Horizontal.scrollbar_corner",
"url":3,
"doc":"Return the ScrollBarCorner - the cells that appear between the horizontal and vertical scrollbars (only when both are visible)."
},
{
"ref":"textual.containers.Horizontal.vertical_scrollbar",
"url":3,
"doc":"Get a vertical scrollbar (create if necessary). Returns: ScrollBar: ScrollBar Widget."
},
{
"ref":"textual.containers.Horizontal.horizontal_scrollbar",
"url":3,
"doc":"Get a vertical scrollbar (create if necessary). Returns: ScrollBar: ScrollBar Widget."
},
{
"ref":"textual.containers.Horizontal.scrollbars_enabled",
"url":3,
"doc":"A tuple of booleans that indicate if scrollbars are enabled. Returns: tuple[bool, bool]: A tuple of ( ,  )"
},
{
"ref":"textual.containers.Horizontal.scrollbar_size_vertical",
"url":3,
"doc":"Get the width used by the  vertical scrollbar. Returns: int: Number of columns in the vertical scrollbar."
},
{
"ref":"textual.containers.Horizontal.scrollbar_size_horizontal",
"url":3,
"doc":"Get the height used by the  horizontal scrollbar. Returns: int: Number of rows in the horizontal scrollbar."
},
{
"ref":"textual.containers.Horizontal.scrollbar_gutter",
"url":3,
"doc":"Spacing required to fit scrollbar(s). Returns: Spacing: Scrollbar gutter spacing."
},
{
"ref":"textual.containers.Horizontal.gutter",
"url":3,
"doc":"Spacing for padding / border / scrollbars. Returns: Spacing: Additional spacing around content area."
},
{
"ref":"textual.containers.Horizontal.size",
"url":3,
"doc":"The size of the content area. Returns: Size: Content area size."
},
{
"ref":"textual.containers.Horizontal.outer_size",
"url":3,
"doc":"The size of the widget (including padding and border). Returns: Size: Outer size."
},
{
"ref":"textual.containers.Horizontal.container_size",
"url":3,
"doc":"The size of the container (parent widget). Returns: Size: Container size."
},
{
"ref":"textual.containers.Horizontal.content_region",
"url":3,
"doc":"Gets an absolute region containing the content (minus padding and border). Returns: Region: Screen region that contains a widget's content."
},
{
"ref":"textual.containers.Horizontal.content_offset",
"url":3,
"doc":"An offset from the Widget origin where the content begins. Returns: Offset: Offset from widget's origin."
},
{
"ref":"textual.containers.Horizontal.content_size",
"url":3,
"doc":"Get the size of the content area."
},
{
"ref":"textual.containers.Horizontal.region",
"url":3,
"doc":"The region occupied by this widget, relative to the Screen. Raises: NoScreen: If there is no screen. errors.NoWidget: If the widget is not on the screen. Returns: Region: Region within screen occupied by widget."
},
{
"ref":"textual.containers.Horizontal.container_viewport",
"url":3,
"doc":"The viewport region (parent window). Returns: Region: The region that contains this widget."
},
{
"ref":"textual.containers.Horizontal.virtual_region",
"url":3,
"doc":"The widget region relative to it's container. Which may not be visible, depending on scroll offset."
},
{
"ref":"textual.containers.Horizontal.window_region",
"url":3,
"doc":"The region within the scrollable area that is currently visible. Returns: Region: New region."
},
{
"ref":"textual.containers.Horizontal.virtual_region_with_margin",
"url":3,
"doc":"The widget region relative to its container ( including margin ), which may not be visible, depending on the scroll offset. Returns: Region: The virtual region of the Widget, inclusive of its margin."
},
{
"ref":"textual.containers.Horizontal.focusable_children",
"url":3,
"doc":"Get the children which may be focused. Returns: list[Widget]: List of widgets that can receive focus."
},
{
"ref":"textual.containers.Horizontal.scroll_offset",
"url":3,
"doc":"Get the current scroll offset. Returns: Offset: Offset a container has been scrolled by."
},
{
"ref":"textual.containers.Horizontal.is_transparent",
"url":3,
"doc":"Check if the background styles is not set. Returns: bool:  True if there is background color, otherwise  False ."
},
{
"ref":"textual.containers.Horizontal.animate",
"url":3,
"doc":"Get an animator to animate attributes on this widget. Example:  python self.animate(\"brightness\", 0.5)  Returns: BoundAnimator: An animator bound to this widget."
},
{
"ref":"textual.containers.Horizontal.is_container",
"url":3,
"doc":"Check if this widget is a container (contains other widgets). Returns: bool: True if this widget is a container."
},
{
"ref":"textual.containers.Horizontal.is_scrollable",
"url":3,
"doc":"Check if this Widget may be scrolled. Returns: bool: True if this widget may be scrolled."
},
{
"ref":"textual.containers.Horizontal.layer",
"url":3,
"doc":"Get the name of this widgets layer. Returns: str: Name of layer."
},
{
"ref":"textual.containers.Horizontal.layers",
"url":3,
"doc":"Layers of from parent. Returns: tuple[str,  .]: Tuple of layer names."
},
{
"ref":"textual.containers.Horizontal.link_style",
"url":3,
"doc":"Style of links."
},
{
"ref":"textual.containers.Horizontal.link_hover_style",
"url":3,
"doc":"Style of links with mouse hover."
},
{
"ref":"textual.containers.Horizontal.scroll_to",
"url":3,
"doc":"Scroll to a given (absolute) coordinate, optionally animating. Args: x (int | None, optional): X coordinate (column) to scroll to, or None for no change. Defaults to None. y (int | None, optional): Y coordinate (row) to scroll to, or None for no change. Defaults to None. animate (bool, optional): Animate to new scroll position. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.containers.Horizontal.scroll_relative",
"url":3,
"doc":"Scroll relative to current position. Args: x (int | None, optional): X distance (columns) to scroll, or  None for no change. Defaults to None. y (int | None, optional): Y distance (rows) to scroll, or  None for no change. Defaults to None. animate (bool, optional): Animate to new scroll position. Defaults to False. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.containers.Horizontal.scroll_home",
"url":3,
"doc":"Scroll to home position. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.containers.Horizontal.scroll_end",
"url":3,
"doc":"Scroll to the end of the container. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.containers.Horizontal.scroll_left",
"url":3,
"doc":"Scroll one cell left. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.containers.Horizontal.scroll_right",
"url":3,
"doc":"Scroll on cell right. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.containers.Horizontal.scroll_down",
"url":3,
"doc":"Scroll one line down. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.containers.Horizontal.scroll_up",
"url":3,
"doc":"Scroll one line up. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.containers.Horizontal.scroll_page_up",
"url":3,
"doc":"Scroll one page up. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.containers.Horizontal.scroll_page_down",
"url":3,
"doc":"Scroll one page down. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.containers.Horizontal.scroll_page_left",
"url":3,
"doc":"Scroll one page left. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.containers.Horizontal.scroll_page_right",
"url":3,
"doc":"Scroll one page right. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.containers.Horizontal.scroll_to_widget",
"url":3,
"doc":"Scroll scrolling to bring a widget in to view. Args: widget (Widget): A descendant widget. animate (bool, optional): True to animate, or False to jump. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling has occurred in any descendant, otherwise False.",
"func":1
},
{
"ref":"textual.containers.Horizontal.scroll_to_region",
"url":3,
"doc":"Scrolls a given region in to view, if required. This method will scroll the least distance required to move  region fully within the scrollable area. Args: region (Region): A region that should be visible. spacing (Spacing | None, optional): Optional spacing around the region. Defaults to None. animate (bool, optional): True to animate, or False to jump. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: Offset: The distance that was scrolled.",
"func":1
},
{
"ref":"textual.containers.Horizontal.scroll_visible",
"url":3,
"doc":"Scroll the container to make this widget visible. Args: animate (bool, optional): _description_. Defaults to True. speed (float | None, optional): _description_. Defaults to None. duration (float | None, optional): _description_. Defaults to None.",
"func":1
},
{
"ref":"textual.containers.Horizontal.get_pseudo_classes",
"url":3,
"doc":"Pseudo classes for a widget. Returns: Iterable[str]: Names of the pseudo classes.",
"func":1
},
{
"ref":"textual.containers.Horizontal.post_render",
"url":3,
"doc":"Applies style attributes to the default renderable. Returns: RenderableType: A new renderable.",
"func":1
},
{
"ref":"textual.containers.Horizontal.watch_mouse_over",
"url":3,
"doc":"Update from CSS if mouse over state changes.",
"func":1
},
{
"ref":"textual.containers.Horizontal.watch_has_focus",
"url":3,
"doc":"Update from CSS if has focus state changes.",
"func":1
},
{
"ref":"textual.containers.Horizontal.render_line",
"url":3,
"doc":"Render a line of content. Args: y (int): Y Coordinate of line. Returns: list[Segment]: A rendered line.",
"func":1
},
{
"ref":"textual.containers.Horizontal.render_lines",
"url":3,
"doc":"Render the widget in to lines. Args: crop (Region): Region within visible area to render. Returns: Lines: A list of list of segments.",
"func":1
},
{
"ref":"textual.containers.Horizontal.get_style_at",
"url":3,
"doc":"Get the Rich style at a given screen offset. Args: x (int): X coordinate relative to the screen. y (int): Y coordinate relative to the screen. Returns: Style: A rich Style object.",
"func":1
},
{
"ref":"textual.containers.Horizontal.refresh",
"url":3,
"doc":"Initiate a refresh of the widget. This method sets an internal flag to perform a refresh, which will be done on the next idle event. Only one refresh will be done even if this method is called multiple times. By default this method will cause the content of the widget to refresh, but not change its size. You can also set  layout=True to perform a layout.  ! warning It is rarely necessary to call this method explicitly. Updating styles or reactive attributes will do this automatically. Args:  regions (Region, optional): Additional screen regions to mark as dirty. repaint (bool, optional): Repaint the widget (will call render() again). Defaults to True. layout (bool, optional): Also layout widgets in the view. Defaults to False.",
"func":1
},
{
"ref":"textual.containers.Horizontal.remove",
"url":3,
"doc":"Remove the Widget from the DOM (effectively deleting it)",
"func":1
},
{
"ref":"textual.containers.Horizontal.render",
"url":3,
"doc":"Get renderable for widget. Returns: RenderableType: Any renderable",
"func":1
},
{
"ref":"textual.containers.Horizontal.action",
"url":3,
"doc":"Perform a given action, with this widget as the default namespace. Args: action (str): Action encoded as a string.",
"func":1
},
{
"ref":"textual.containers.Horizontal.post_message",
"url":3,
"doc":"Post a message to this widget. Args: message (Message): Message to post. Returns: bool: True if the message was posted, False if this widget was closed / closing.",
"func":1
},
{
"ref":"textual.containers.Horizontal.focus",
"url":3,
"doc":"Give focus to this widget. Args: scroll_visible (bool, optional): Scroll parent to make this widget visible. Defaults to True.",
"func":1
},
{
"ref":"textual.containers.Horizontal.capture_mouse",
"url":3,
"doc":"Capture (or release) the mouse. When captured, mouse events will go to this widget even when the pointer is not directly over the widget. Args: capture (bool, optional): True to capture or False to release. Defaults to True.",
"func":1
},
{
"ref":"textual.containers.Horizontal.release_mouse",
"url":3,
"doc":"Release the mouse. Mouse events will only be sent when the mouse is over the widget.",
"func":1
},
{
"ref":"textual.containers.Horizontal.get_component_styles",
"url":4,
"doc":"Get a \"component\" styles object (must be defined in COMPONENT_CLASSES classvar). Args: name (str): Name of the component. Raises: KeyError: If the component class doesn't exist. Returns: RenderStyles: A Styles object.",
"func":1
},
{
"ref":"textual.containers.Horizontal.get_default_css",
"url":4,
"doc":"Gets the CSS for this class and inherited from bases. Returns: list[tuple[str, str : a list of tuples containing (PATH, SOURCE) for this and inherited from base classes.",
"func":1
},
{
"ref":"textual.containers.Horizontal.parent",
"url":4,
"doc":"Get the parent node. Returns: DOMNode | None: The node which is the direct parent of this node."
},
{
"ref":"textual.containers.Horizontal.screen",
"url":4,
"doc":"Get the screen that this node is contained within. Note that this may not be the currently active screen within the app."
},
{
"ref":"textual.containers.Horizontal.id",
"url":4,
"doc":"The ID of this node, or None if the node has no ID. Returns: (str | None): A Node ID or None."
},
{
"ref":"textual.containers.Horizontal.css_identifier",
"url":4,
"doc":"A CSS selector that identifies this DOM node."
},
{
"ref":"textual.containers.Horizontal.css_identifier_styled",
"url":4,
"doc":"A stylized CSS identifier."
},
{
"ref":"textual.containers.Horizontal.classes",
"url":4,
"doc":"A frozenset of the current classes set on the widget. Returns: frozenset[str]: Set of class names."
},
{
"ref":"textual.containers.Horizontal.pseudo_classes",
"url":4,
"doc":"Get a set of all pseudo classes"
},
{
"ref":"textual.containers.Horizontal.css_path_nodes",
"url":4,
"doc":"A list of nodes from the root to this node, forming a \"path\". Returns: list[DOMNode]: List of Nodes, starting with the root and ending with this node."
},
{
"ref":"textual.containers.Horizontal.display",
"url":4,
"doc":"Check if this widget should display or not. Returns: bool:  True if this DOMNode is displayed ( display != \"none\" ) otherwise  False ."
},
{
"ref":"textual.containers.Horizontal.tree",
"url":4,
"doc":"Get a Rich tree object which will recursively render the structure of the node tree. Returns: Tree: A Rich object which may be printed."
},
{
"ref":"textual.containers.Horizontal.text_style",
"url":4,
"doc":"Get the text style object. A widget's style is influenced by its parent. for instance if a parent is bold, then the child will also be bold. Returns: Style: Rich Style object."
},
{
"ref":"textual.containers.Horizontal.rich_style",
"url":4,
"doc":"Get a Rich Style object for this DOMNode."
},
{
"ref":"textual.containers.Horizontal.background_colors",
"url":4,
"doc":"Get the background color and the color of the parent's background. Returns: tuple[Color, Color]: Tuple of (base background, background)"
},
{
"ref":"textual.containers.Horizontal.colors",
"url":4,
"doc":"Gets the Widgets foreground and background colors, and its parent's (base) colors. Returns: tuple[Color, Color, Color, Color]: Tuple of (base background, base color, background, color)"
},
{
"ref":"textual.containers.Horizontal.ancestors",
"url":4,
"doc":"Get a list of Nodes by tracing ancestors all the way back to App."
},
{
"ref":"textual.containers.Horizontal.displayed_children",
"url":4,
"doc":"The children which don't have display: none set. Returns: list[DOMNode]: Children of this widget which will be displayed."
},
{
"ref":"textual.containers.Horizontal.reset_styles",
"url":4,
"doc":"Reset styles back to their initial state",
"func":1
},
{
"ref":"textual.containers.Horizontal.walk_children",
"url":4,
"doc":"Generate descendant nodes. Args: filter_type (type[WalkType] | None, optional): Filter only this type, or None for no filter. Defaults to None. with_self (bool, optional): Also yield self in addition to descendants. Defaults to True. Returns: Iterable[DOMNode | WalkType]: An iterable of nodes.",
"func":1
},
{
"ref":"textual.containers.Horizontal.get_child",
"url":4,
"doc":"Return the first child (immediate descendent) of this node with the given ID. Args: id (str): The ID of the child. Returns: DOMNode: The first child of this node with the ID. Raises: NoMatchingNodesError: if no children could be found for this ID",
"func":1
},
{
"ref":"textual.containers.Horizontal.query",
"url":4,
"doc":"Get a DOM query matching a selector. Args: selector (str, optional): A CSS selector or  None for all nodes. Defaults to None. Returns: DOMQuery: A query object.",
"func":1
},
{
"ref":"textual.containers.Horizontal.query_one",
"url":4,
"doc":"Get the first Widget matching the given selector or selector type. Args: selector (str | None, optional): A selector. expect_type (type, optional): Require the object be of the supplied type, or None for any type. Defaults to None. Returns: Widget | ExpectType: A widget matching the selector.",
"func":1
},
{
"ref":"textual.containers.Horizontal.set_styles",
"url":4,
"doc":"Set custom styles on this object.",
"func":1
},
{
"ref":"textual.containers.Horizontal.has_class",
"url":4,
"doc":"Check if the Node has all the given class names. Args:  class_names (str): CSS class names to check. Returns: bool:  True if the node has all the given class names, otherwise  False .",
"func":1
},
{
"ref":"textual.containers.Horizontal.set_class",
"url":4,
"doc":"Add or remove class(es) based on a condition. Args: add (bool): Add the classes if True, otherwise remove them.",
"func":1
},
{
"ref":"textual.containers.Horizontal.add_class",
"url":4,
"doc":"Add class names to this Node. Args:  class_names (str): CSS class names to add.",
"func":1
},
{
"ref":"textual.containers.Horizontal.remove_class",
"url":4,
"doc":"Remove class names from this Node. Args:  class_names (str): CSS class names to remove.",
"func":1
},
{
"ref":"textual.containers.Horizontal.toggle_class",
"url":4,
"doc":"Toggle class names on this Node. Args:  class_names (str): CSS class names to toggle.",
"func":1
},
{
"ref":"textual.containers.Horizontal.has_pseudo_class",
"url":4,
"doc":"Check for pseudo class (such as hover, focus etc)",
"func":1
},
{
"ref":"textual.containers.Horizontal.app",
"url":5,
"doc":"Get the current app. Returns: App: The current app. Raises: NoActiveAppError: if no active app could be found for the current asyncio context"
},
{
"ref":"textual.containers.Horizontal.log",
"url":5,
"doc":"Get a logger for this object. Returns: Logger: A logger."
},
{
"ref":"textual.containers.Horizontal.disable_messages",
"url":5,
"doc":"Disable message types from being processed.",
"func":1
},
{
"ref":"textual.containers.Horizontal.enable_messages",
"url":5,
"doc":"Enable processing of messages types.",
"func":1
},
{
"ref":"textual.containers.Horizontal.set_timer",
"url":5,
"doc":"Make a function call after a delay. Args: delay (float): Time to wait before invoking callback. callback (TimerCallback | None, optional): Callback to call after time has expired. Defaults to None. name (str | None, optional): Name of the timer (for debug). Defaults to None. pause (bool, optional): Start timer paused. Defaults to False. Returns: Timer: A timer object.",
"func":1
},
{
"ref":"textual.containers.Horizontal.set_interval",
"url":5,
"doc":"Call a function at periodic intervals. Args: interval (float): Time between calls. callback (TimerCallback | None, optional): Function to call. Defaults to None. name (str | None, optional): Name of the timer object. Defaults to None. repeat (int, optional): Number of times to repeat the call or 0 for continuous. Defaults to 0. pause (bool, optional): Start the timer paused. Defaults to False. Returns: Timer: A timer object.",
"func":1
},
{
"ref":"textual.containers.Horizontal.call_later",
"url":5,
"doc":"Schedule a callback to run after all messages are processed and the screen has been refreshed. Positional and keyword arguments are passed to the callable. Args: callback (Callable): A callable.",
"func":1
},
{
"ref":"textual.containers.Horizontal.on_event",
"url":5,
"doc":"Called to process an event. Args: event (events.Event): An Event object.",
"func":1
},
{
"ref":"textual.containers.Horizontal.check_idle",
"url":5,
"doc":"Prompt the message pump to call idle if the queue is empty.",
"func":1
},
{
"ref":"textual.containers.Horizontal.post_message_no_wait",
"url":5,
"doc":"Posts a message on the queue. Args: message (Message): A message (or Event). Returns: bool: True if the messages was processed, False if it wasn't.",
"func":1
},
{
"ref":"textual.containers.Horizontal.emit_no_wait",
"url":5,
"doc":"Send a message to the _parent_, non async version. Args: message (Message): A message object. Returns: bool: True if the message was posted successfully.",
"func":1
},
{
"ref":"textual.containers.Horizontal.emit",
"url":5,
"doc":"Send a message to the _parent_. Args: message (Message): A message object. Returns: bool: True if the message was posted successfully.",
"func":1
},
{
"ref":"textual.containers.Horizontal.dispatch_key",
"url":5,
"doc":"Dispatch a key event to method. This method will call the method named 'key_ ' if it exists. Args: event (events.Key): A key event. Returns: bool: True if key was handled, otherwise False.",
"func":1
},
{
"ref":"textual.containers.Grid",
"url":18,
"doc":"A container widget with grid alignment."
},
{
"ref":"textual.containers.Grid.COMPONENT_CLASSES",
"url":18,
"doc":""
},
{
"ref":"textual.containers.Grid.hover_style",
"url":18,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Grid.highlight_link_id",
"url":18,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Grid.DEFAULT_CSS",
"url":18,
"doc":""
},
{
"ref":"textual.containers.Grid.can_focus",
"url":18,
"doc":"Widget may receive focus."
},
{
"ref":"textual.containers.Grid.can_focus_children",
"url":18,
"doc":"Widget's children may receive focus."
},
{
"ref":"textual.containers.Grid.expand",
"url":3,
"doc":"Rich renderable may expand."
},
{
"ref":"textual.containers.Grid.shrink",
"url":3,
"doc":"Rich renderable may shrink."
},
{
"ref":"textual.containers.Grid.auto_links",
"url":3,
"doc":"Widget will highlight links automatically."
},
{
"ref":"textual.containers.Grid.virtual_size",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Grid.auto_width",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Grid.auto_height",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Grid.has_focus",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Grid.descendant_has_focus",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Grid.mouse_over",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Grid.scroll_x",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Grid.scroll_y",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Grid.scroll_target_x",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Grid.scroll_target_y",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Grid.show_vertical_scrollbar",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Grid.show_horizontal_scrollbar",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Grid.siblings",
"url":3,
"doc":"Get the widget's siblings (self is removed from the return list). Returns: list[Widget]: A list of siblings."
},
{
"ref":"textual.containers.Grid.allow_vertical_scroll",
"url":3,
"doc":"Check if vertical scroll is permitted. May be overridden if you want different logic regarding allowing scrolling. Returns: bool: True if the widget may scroll _vertically_."
},
{
"ref":"textual.containers.Grid.allow_horizontal_scroll",
"url":3,
"doc":"Check if horizontal scroll is permitted. May be overridden if you want different logic regarding allowing scrolling. Returns: bool: True if the widget may scroll _horizontally_."
},
{
"ref":"textual.containers.Grid.offset",
"url":3,
"doc":"Widget offset from origin. Returns: Offset: Relative offset."
},
{
"ref":"textual.containers.Grid.get_component_rich_style",
"url":3,
"doc":"Get a  Rich style for a component. Args: name (str): Name of component. Returns: Style: A Rich style object.",
"func":1
},
{
"ref":"textual.containers.Grid.mount",
"url":3,
"doc":"Mount child widgets (making this widget a container). Widgets may be passed as positional arguments or keyword arguments. If keyword arguments, the keys will be set as the Widget's id. Example:  python self.mount(Static(\"hello\"), header=Header(  ",
"func":1
},
{
"ref":"textual.containers.Grid.compose",
"url":3,
"doc":"Called by Textual to create child widgets. Extend this to build a UI. Example:  python def compose(self) -> ComposeResult: yield Header() yield Container( TreeControl(), Viewer() ) yield Footer()  ",
"func":1
},
{
"ref":"textual.containers.Grid.get_content_width",
"url":3,
"doc":"Called by textual to get the width of the content area. May be overridden in a subclass. Args: container (Size): Size of the container (immediate parent) widget. viewport (Size): Size of the viewport. Returns: int: The optimal width of the content.",
"func":1
},
{
"ref":"textual.containers.Grid.get_content_height",
"url":3,
"doc":"Called by Textual to get the height of the content area. May be overridden in a subclass. Args: container (Size): Size of the container (immediate parent) widget. viewport (Size): Size of the viewport. width (int): Width of renderable. Returns: int: The height of the content.",
"func":1
},
{
"ref":"textual.containers.Grid.max_scroll_x",
"url":3,
"doc":"The maximum value of  scroll_x ."
},
{
"ref":"textual.containers.Grid.max_scroll_y",
"url":3,
"doc":"The maximum value of  scroll_y ."
},
{
"ref":"textual.containers.Grid.scrollbar_corner",
"url":3,
"doc":"Return the ScrollBarCorner - the cells that appear between the horizontal and vertical scrollbars (only when both are visible)."
},
{
"ref":"textual.containers.Grid.vertical_scrollbar",
"url":3,
"doc":"Get a vertical scrollbar (create if necessary). Returns: ScrollBar: ScrollBar Widget."
},
{
"ref":"textual.containers.Grid.horizontal_scrollbar",
"url":3,
"doc":"Get a vertical scrollbar (create if necessary). Returns: ScrollBar: ScrollBar Widget."
},
{
"ref":"textual.containers.Grid.scrollbars_enabled",
"url":3,
"doc":"A tuple of booleans that indicate if scrollbars are enabled. Returns: tuple[bool, bool]: A tuple of ( ,  )"
},
{
"ref":"textual.containers.Grid.scrollbar_size_vertical",
"url":3,
"doc":"Get the width used by the  vertical scrollbar. Returns: int: Number of columns in the vertical scrollbar."
},
{
"ref":"textual.containers.Grid.scrollbar_size_horizontal",
"url":3,
"doc":"Get the height used by the  horizontal scrollbar. Returns: int: Number of rows in the horizontal scrollbar."
},
{
"ref":"textual.containers.Grid.scrollbar_gutter",
"url":3,
"doc":"Spacing required to fit scrollbar(s). Returns: Spacing: Scrollbar gutter spacing."
},
{
"ref":"textual.containers.Grid.gutter",
"url":3,
"doc":"Spacing for padding / border / scrollbars. Returns: Spacing: Additional spacing around content area."
},
{
"ref":"textual.containers.Grid.size",
"url":3,
"doc":"The size of the content area. Returns: Size: Content area size."
},
{
"ref":"textual.containers.Grid.outer_size",
"url":3,
"doc":"The size of the widget (including padding and border). Returns: Size: Outer size."
},
{
"ref":"textual.containers.Grid.container_size",
"url":3,
"doc":"The size of the container (parent widget). Returns: Size: Container size."
},
{
"ref":"textual.containers.Grid.content_region",
"url":3,
"doc":"Gets an absolute region containing the content (minus padding and border). Returns: Region: Screen region that contains a widget's content."
},
{
"ref":"textual.containers.Grid.content_offset",
"url":3,
"doc":"An offset from the Widget origin where the content begins. Returns: Offset: Offset from widget's origin."
},
{
"ref":"textual.containers.Grid.content_size",
"url":3,
"doc":"Get the size of the content area."
},
{
"ref":"textual.containers.Grid.region",
"url":3,
"doc":"The region occupied by this widget, relative to the Screen. Raises: NoScreen: If there is no screen. errors.NoWidget: If the widget is not on the screen. Returns: Region: Region within screen occupied by widget."
},
{
"ref":"textual.containers.Grid.container_viewport",
"url":3,
"doc":"The viewport region (parent window). Returns: Region: The region that contains this widget."
},
{
"ref":"textual.containers.Grid.virtual_region",
"url":3,
"doc":"The widget region relative to it's container. Which may not be visible, depending on scroll offset."
},
{
"ref":"textual.containers.Grid.window_region",
"url":3,
"doc":"The region within the scrollable area that is currently visible. Returns: Region: New region."
},
{
"ref":"textual.containers.Grid.virtual_region_with_margin",
"url":3,
"doc":"The widget region relative to its container ( including margin ), which may not be visible, depending on the scroll offset. Returns: Region: The virtual region of the Widget, inclusive of its margin."
},
{
"ref":"textual.containers.Grid.focusable_children",
"url":3,
"doc":"Get the children which may be focused. Returns: list[Widget]: List of widgets that can receive focus."
},
{
"ref":"textual.containers.Grid.scroll_offset",
"url":3,
"doc":"Get the current scroll offset. Returns: Offset: Offset a container has been scrolled by."
},
{
"ref":"textual.containers.Grid.is_transparent",
"url":3,
"doc":"Check if the background styles is not set. Returns: bool:  True if there is background color, otherwise  False ."
},
{
"ref":"textual.containers.Grid.animate",
"url":3,
"doc":"Get an animator to animate attributes on this widget. Example:  python self.animate(\"brightness\", 0.5)  Returns: BoundAnimator: An animator bound to this widget."
},
{
"ref":"textual.containers.Grid.is_container",
"url":3,
"doc":"Check if this widget is a container (contains other widgets). Returns: bool: True if this widget is a container."
},
{
"ref":"textual.containers.Grid.is_scrollable",
"url":3,
"doc":"Check if this Widget may be scrolled. Returns: bool: True if this widget may be scrolled."
},
{
"ref":"textual.containers.Grid.layer",
"url":3,
"doc":"Get the name of this widgets layer. Returns: str: Name of layer."
},
{
"ref":"textual.containers.Grid.layers",
"url":3,
"doc":"Layers of from parent. Returns: tuple[str,  .]: Tuple of layer names."
},
{
"ref":"textual.containers.Grid.link_style",
"url":3,
"doc":"Style of links."
},
{
"ref":"textual.containers.Grid.link_hover_style",
"url":3,
"doc":"Style of links with mouse hover."
},
{
"ref":"textual.containers.Grid.scroll_to",
"url":3,
"doc":"Scroll to a given (absolute) coordinate, optionally animating. Args: x (int | None, optional): X coordinate (column) to scroll to, or None for no change. Defaults to None. y (int | None, optional): Y coordinate (row) to scroll to, or None for no change. Defaults to None. animate (bool, optional): Animate to new scroll position. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.containers.Grid.scroll_relative",
"url":3,
"doc":"Scroll relative to current position. Args: x (int | None, optional): X distance (columns) to scroll, or  None for no change. Defaults to None. y (int | None, optional): Y distance (rows) to scroll, or  None for no change. Defaults to None. animate (bool, optional): Animate to new scroll position. Defaults to False. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.containers.Grid.scroll_home",
"url":3,
"doc":"Scroll to home position. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.containers.Grid.scroll_end",
"url":3,
"doc":"Scroll to the end of the container. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.containers.Grid.scroll_left",
"url":3,
"doc":"Scroll one cell left. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.containers.Grid.scroll_right",
"url":3,
"doc":"Scroll on cell right. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.containers.Grid.scroll_down",
"url":3,
"doc":"Scroll one line down. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.containers.Grid.scroll_up",
"url":3,
"doc":"Scroll one line up. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.containers.Grid.scroll_page_up",
"url":3,
"doc":"Scroll one page up. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.containers.Grid.scroll_page_down",
"url":3,
"doc":"Scroll one page down. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.containers.Grid.scroll_page_left",
"url":3,
"doc":"Scroll one page left. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.containers.Grid.scroll_page_right",
"url":3,
"doc":"Scroll one page right. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.containers.Grid.scroll_to_widget",
"url":3,
"doc":"Scroll scrolling to bring a widget in to view. Args: widget (Widget): A descendant widget. animate (bool, optional): True to animate, or False to jump. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling has occurred in any descendant, otherwise False.",
"func":1
},
{
"ref":"textual.containers.Grid.scroll_to_region",
"url":3,
"doc":"Scrolls a given region in to view, if required. This method will scroll the least distance required to move  region fully within the scrollable area. Args: region (Region): A region that should be visible. spacing (Spacing | None, optional): Optional spacing around the region. Defaults to None. animate (bool, optional): True to animate, or False to jump. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: Offset: The distance that was scrolled.",
"func":1
},
{
"ref":"textual.containers.Grid.scroll_visible",
"url":3,
"doc":"Scroll the container to make this widget visible. Args: animate (bool, optional): _description_. Defaults to True. speed (float | None, optional): _description_. Defaults to None. duration (float | None, optional): _description_. Defaults to None.",
"func":1
},
{
"ref":"textual.containers.Grid.get_pseudo_classes",
"url":3,
"doc":"Pseudo classes for a widget. Returns: Iterable[str]: Names of the pseudo classes.",
"func":1
},
{
"ref":"textual.containers.Grid.post_render",
"url":3,
"doc":"Applies style attributes to the default renderable. Returns: RenderableType: A new renderable.",
"func":1
},
{
"ref":"textual.containers.Grid.watch_mouse_over",
"url":3,
"doc":"Update from CSS if mouse over state changes.",
"func":1
},
{
"ref":"textual.containers.Grid.watch_has_focus",
"url":3,
"doc":"Update from CSS if has focus state changes.",
"func":1
},
{
"ref":"textual.containers.Grid.render_line",
"url":3,
"doc":"Render a line of content. Args: y (int): Y Coordinate of line. Returns: list[Segment]: A rendered line.",
"func":1
},
{
"ref":"textual.containers.Grid.render_lines",
"url":3,
"doc":"Render the widget in to lines. Args: crop (Region): Region within visible area to render. Returns: Lines: A list of list of segments.",
"func":1
},
{
"ref":"textual.containers.Grid.get_style_at",
"url":3,
"doc":"Get the Rich style at a given screen offset. Args: x (int): X coordinate relative to the screen. y (int): Y coordinate relative to the screen. Returns: Style: A rich Style object.",
"func":1
},
{
"ref":"textual.containers.Grid.refresh",
"url":3,
"doc":"Initiate a refresh of the widget. This method sets an internal flag to perform a refresh, which will be done on the next idle event. Only one refresh will be done even if this method is called multiple times. By default this method will cause the content of the widget to refresh, but not change its size. You can also set  layout=True to perform a layout.  ! warning It is rarely necessary to call this method explicitly. Updating styles or reactive attributes will do this automatically. Args:  regions (Region, optional): Additional screen regions to mark as dirty. repaint (bool, optional): Repaint the widget (will call render() again). Defaults to True. layout (bool, optional): Also layout widgets in the view. Defaults to False.",
"func":1
},
{
"ref":"textual.containers.Grid.remove",
"url":3,
"doc":"Remove the Widget from the DOM (effectively deleting it)",
"func":1
},
{
"ref":"textual.containers.Grid.render",
"url":3,
"doc":"Get renderable for widget. Returns: RenderableType: Any renderable",
"func":1
},
{
"ref":"textual.containers.Grid.action",
"url":3,
"doc":"Perform a given action, with this widget as the default namespace. Args: action (str): Action encoded as a string.",
"func":1
},
{
"ref":"textual.containers.Grid.post_message",
"url":3,
"doc":"Post a message to this widget. Args: message (Message): Message to post. Returns: bool: True if the message was posted, False if this widget was closed / closing.",
"func":1
},
{
"ref":"textual.containers.Grid.focus",
"url":3,
"doc":"Give focus to this widget. Args: scroll_visible (bool, optional): Scroll parent to make this widget visible. Defaults to True.",
"func":1
},
{
"ref":"textual.containers.Grid.capture_mouse",
"url":3,
"doc":"Capture (or release) the mouse. When captured, mouse events will go to this widget even when the pointer is not directly over the widget. Args: capture (bool, optional): True to capture or False to release. Defaults to True.",
"func":1
},
{
"ref":"textual.containers.Grid.release_mouse",
"url":3,
"doc":"Release the mouse. Mouse events will only be sent when the mouse is over the widget.",
"func":1
},
{
"ref":"textual.containers.Grid.get_component_styles",
"url":4,
"doc":"Get a \"component\" styles object (must be defined in COMPONENT_CLASSES classvar). Args: name (str): Name of the component. Raises: KeyError: If the component class doesn't exist. Returns: RenderStyles: A Styles object.",
"func":1
},
{
"ref":"textual.containers.Grid.get_default_css",
"url":4,
"doc":"Gets the CSS for this class and inherited from bases. Returns: list[tuple[str, str : a list of tuples containing (PATH, SOURCE) for this and inherited from base classes.",
"func":1
},
{
"ref":"textual.containers.Grid.parent",
"url":4,
"doc":"Get the parent node. Returns: DOMNode | None: The node which is the direct parent of this node."
},
{
"ref":"textual.containers.Grid.screen",
"url":4,
"doc":"Get the screen that this node is contained within. Note that this may not be the currently active screen within the app."
},
{
"ref":"textual.containers.Grid.id",
"url":4,
"doc":"The ID of this node, or None if the node has no ID. Returns: (str | None): A Node ID or None."
},
{
"ref":"textual.containers.Grid.css_identifier",
"url":4,
"doc":"A CSS selector that identifies this DOM node."
},
{
"ref":"textual.containers.Grid.css_identifier_styled",
"url":4,
"doc":"A stylized CSS identifier."
},
{
"ref":"textual.containers.Grid.classes",
"url":4,
"doc":"A frozenset of the current classes set on the widget. Returns: frozenset[str]: Set of class names."
},
{
"ref":"textual.containers.Grid.pseudo_classes",
"url":4,
"doc":"Get a set of all pseudo classes"
},
{
"ref":"textual.containers.Grid.css_path_nodes",
"url":4,
"doc":"A list of nodes from the root to this node, forming a \"path\". Returns: list[DOMNode]: List of Nodes, starting with the root and ending with this node."
},
{
"ref":"textual.containers.Grid.display",
"url":4,
"doc":"Check if this widget should display or not. Returns: bool:  True if this DOMNode is displayed ( display != \"none\" ) otherwise  False ."
},
{
"ref":"textual.containers.Grid.tree",
"url":4,
"doc":"Get a Rich tree object which will recursively render the structure of the node tree. Returns: Tree: A Rich object which may be printed."
},
{
"ref":"textual.containers.Grid.text_style",
"url":4,
"doc":"Get the text style object. A widget's style is influenced by its parent. for instance if a parent is bold, then the child will also be bold. Returns: Style: Rich Style object."
},
{
"ref":"textual.containers.Grid.rich_style",
"url":4,
"doc":"Get a Rich Style object for this DOMNode."
},
{
"ref":"textual.containers.Grid.background_colors",
"url":4,
"doc":"Get the background color and the color of the parent's background. Returns: tuple[Color, Color]: Tuple of (base background, background)"
},
{
"ref":"textual.containers.Grid.colors",
"url":4,
"doc":"Gets the Widgets foreground and background colors, and its parent's (base) colors. Returns: tuple[Color, Color, Color, Color]: Tuple of (base background, base color, background, color)"
},
{
"ref":"textual.containers.Grid.ancestors",
"url":4,
"doc":"Get a list of Nodes by tracing ancestors all the way back to App."
},
{
"ref":"textual.containers.Grid.displayed_children",
"url":4,
"doc":"The children which don't have display: none set. Returns: list[DOMNode]: Children of this widget which will be displayed."
},
{
"ref":"textual.containers.Grid.reset_styles",
"url":4,
"doc":"Reset styles back to their initial state",
"func":1
},
{
"ref":"textual.containers.Grid.walk_children",
"url":4,
"doc":"Generate descendant nodes. Args: filter_type (type[WalkType] | None, optional): Filter only this type, or None for no filter. Defaults to None. with_self (bool, optional): Also yield self in addition to descendants. Defaults to True. Returns: Iterable[DOMNode | WalkType]: An iterable of nodes.",
"func":1
},
{
"ref":"textual.containers.Grid.get_child",
"url":4,
"doc":"Return the first child (immediate descendent) of this node with the given ID. Args: id (str): The ID of the child. Returns: DOMNode: The first child of this node with the ID. Raises: NoMatchingNodesError: if no children could be found for this ID",
"func":1
},
{
"ref":"textual.containers.Grid.query",
"url":4,
"doc":"Get a DOM query matching a selector. Args: selector (str, optional): A CSS selector or  None for all nodes. Defaults to None. Returns: DOMQuery: A query object.",
"func":1
},
{
"ref":"textual.containers.Grid.query_one",
"url":4,
"doc":"Get the first Widget matching the given selector or selector type. Args: selector (str | None, optional): A selector. expect_type (type, optional): Require the object be of the supplied type, or None for any type. Defaults to None. Returns: Widget | ExpectType: A widget matching the selector.",
"func":1
},
{
"ref":"textual.containers.Grid.set_styles",
"url":4,
"doc":"Set custom styles on this object.",
"func":1
},
{
"ref":"textual.containers.Grid.has_class",
"url":4,
"doc":"Check if the Node has all the given class names. Args:  class_names (str): CSS class names to check. Returns: bool:  True if the node has all the given class names, otherwise  False .",
"func":1
},
{
"ref":"textual.containers.Grid.set_class",
"url":4,
"doc":"Add or remove class(es) based on a condition. Args: add (bool): Add the classes if True, otherwise remove them.",
"func":1
},
{
"ref":"textual.containers.Grid.add_class",
"url":4,
"doc":"Add class names to this Node. Args:  class_names (str): CSS class names to add.",
"func":1
},
{
"ref":"textual.containers.Grid.remove_class",
"url":4,
"doc":"Remove class names from this Node. Args:  class_names (str): CSS class names to remove.",
"func":1
},
{
"ref":"textual.containers.Grid.toggle_class",
"url":4,
"doc":"Toggle class names on this Node. Args:  class_names (str): CSS class names to toggle.",
"func":1
},
{
"ref":"textual.containers.Grid.has_pseudo_class",
"url":4,
"doc":"Check for pseudo class (such as hover, focus etc)",
"func":1
},
{
"ref":"textual.containers.Grid.app",
"url":5,
"doc":"Get the current app. Returns: App: The current app. Raises: NoActiveAppError: if no active app could be found for the current asyncio context"
},
{
"ref":"textual.containers.Grid.log",
"url":5,
"doc":"Get a logger for this object. Returns: Logger: A logger."
},
{
"ref":"textual.containers.Grid.disable_messages",
"url":5,
"doc":"Disable message types from being processed.",
"func":1
},
{
"ref":"textual.containers.Grid.enable_messages",
"url":5,
"doc":"Enable processing of messages types.",
"func":1
},
{
"ref":"textual.containers.Grid.set_timer",
"url":5,
"doc":"Make a function call after a delay. Args: delay (float): Time to wait before invoking callback. callback (TimerCallback | None, optional): Callback to call after time has expired. Defaults to None. name (str | None, optional): Name of the timer (for debug). Defaults to None. pause (bool, optional): Start timer paused. Defaults to False. Returns: Timer: A timer object.",
"func":1
},
{
"ref":"textual.containers.Grid.set_interval",
"url":5,
"doc":"Call a function at periodic intervals. Args: interval (float): Time between calls. callback (TimerCallback | None, optional): Function to call. Defaults to None. name (str | None, optional): Name of the timer object. Defaults to None. repeat (int, optional): Number of times to repeat the call or 0 for continuous. Defaults to 0. pause (bool, optional): Start the timer paused. Defaults to False. Returns: Timer: A timer object.",
"func":1
},
{
"ref":"textual.containers.Grid.call_later",
"url":5,
"doc":"Schedule a callback to run after all messages are processed and the screen has been refreshed. Positional and keyword arguments are passed to the callable. Args: callback (Callable): A callable.",
"func":1
},
{
"ref":"textual.containers.Grid.on_event",
"url":5,
"doc":"Called to process an event. Args: event (events.Event): An Event object.",
"func":1
},
{
"ref":"textual.containers.Grid.check_idle",
"url":5,
"doc":"Prompt the message pump to call idle if the queue is empty.",
"func":1
},
{
"ref":"textual.containers.Grid.post_message_no_wait",
"url":5,
"doc":"Posts a message on the queue. Args: message (Message): A message (or Event). Returns: bool: True if the messages was processed, False if it wasn't.",
"func":1
},
{
"ref":"textual.containers.Grid.emit_no_wait",
"url":5,
"doc":"Send a message to the _parent_, non async version. Args: message (Message): A message object. Returns: bool: True if the message was posted successfully.",
"func":1
},
{
"ref":"textual.containers.Grid.emit",
"url":5,
"doc":"Send a message to the _parent_. Args: message (Message): A message object. Returns: bool: True if the message was posted successfully.",
"func":1
},
{
"ref":"textual.containers.Grid.dispatch_key",
"url":5,
"doc":"Dispatch a key event to method. This method will call the method named 'key_ ' if it exists. Args: event (events.Key): A key event. Returns: bool: True if key was handled, otherwise False.",
"func":1
},
{
"ref":"textual.containers.Content",
"url":18,
"doc":"A container for content such as text."
},
{
"ref":"textual.containers.Content.COMPONENT_CLASSES",
"url":18,
"doc":""
},
{
"ref":"textual.containers.Content.hover_style",
"url":18,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Content.highlight_link_id",
"url":18,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Content.DEFAULT_CSS",
"url":18,
"doc":""
},
{
"ref":"textual.containers.Content.can_focus",
"url":18,
"doc":"Widget may receive focus."
},
{
"ref":"textual.containers.Content.can_focus_children",
"url":18,
"doc":"Widget's children may receive focus."
},
{
"ref":"textual.containers.Content.expand",
"url":3,
"doc":"Rich renderable may expand."
},
{
"ref":"textual.containers.Content.shrink",
"url":3,
"doc":"Rich renderable may shrink."
},
{
"ref":"textual.containers.Content.auto_links",
"url":3,
"doc":"Widget will highlight links automatically."
},
{
"ref":"textual.containers.Content.virtual_size",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Content.auto_width",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Content.auto_height",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Content.has_focus",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Content.descendant_has_focus",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Content.mouse_over",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Content.scroll_x",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Content.scroll_y",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Content.scroll_target_x",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Content.scroll_target_y",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Content.show_vertical_scrollbar",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Content.show_horizontal_scrollbar",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.containers.Content.siblings",
"url":3,
"doc":"Get the widget's siblings (self is removed from the return list). Returns: list[Widget]: A list of siblings."
},
{
"ref":"textual.containers.Content.allow_vertical_scroll",
"url":3,
"doc":"Check if vertical scroll is permitted. May be overridden if you want different logic regarding allowing scrolling. Returns: bool: True if the widget may scroll _vertically_."
},
{
"ref":"textual.containers.Content.allow_horizontal_scroll",
"url":3,
"doc":"Check if horizontal scroll is permitted. May be overridden if you want different logic regarding allowing scrolling. Returns: bool: True if the widget may scroll _horizontally_."
},
{
"ref":"textual.containers.Content.offset",
"url":3,
"doc":"Widget offset from origin. Returns: Offset: Relative offset."
},
{
"ref":"textual.containers.Content.get_component_rich_style",
"url":3,
"doc":"Get a  Rich style for a component. Args: name (str): Name of component. Returns: Style: A Rich style object.",
"func":1
},
{
"ref":"textual.containers.Content.mount",
"url":3,
"doc":"Mount child widgets (making this widget a container). Widgets may be passed as positional arguments or keyword arguments. If keyword arguments, the keys will be set as the Widget's id. Example:  python self.mount(Static(\"hello\"), header=Header(  ",
"func":1
},
{
"ref":"textual.containers.Content.compose",
"url":3,
"doc":"Called by Textual to create child widgets. Extend this to build a UI. Example:  python def compose(self) -> ComposeResult: yield Header() yield Container( TreeControl(), Viewer() ) yield Footer()  ",
"func":1
},
{
"ref":"textual.containers.Content.get_content_width",
"url":3,
"doc":"Called by textual to get the width of the content area. May be overridden in a subclass. Args: container (Size): Size of the container (immediate parent) widget. viewport (Size): Size of the viewport. Returns: int: The optimal width of the content.",
"func":1
},
{
"ref":"textual.containers.Content.get_content_height",
"url":3,
"doc":"Called by Textual to get the height of the content area. May be overridden in a subclass. Args: container (Size): Size of the container (immediate parent) widget. viewport (Size): Size of the viewport. width (int): Width of renderable. Returns: int: The height of the content.",
"func":1
},
{
"ref":"textual.containers.Content.max_scroll_x",
"url":3,
"doc":"The maximum value of  scroll_x ."
},
{
"ref":"textual.containers.Content.max_scroll_y",
"url":3,
"doc":"The maximum value of  scroll_y ."
},
{
"ref":"textual.containers.Content.scrollbar_corner",
"url":3,
"doc":"Return the ScrollBarCorner - the cells that appear between the horizontal and vertical scrollbars (only when both are visible)."
},
{
"ref":"textual.containers.Content.vertical_scrollbar",
"url":3,
"doc":"Get a vertical scrollbar (create if necessary). Returns: ScrollBar: ScrollBar Widget."
},
{
"ref":"textual.containers.Content.horizontal_scrollbar",
"url":3,
"doc":"Get a vertical scrollbar (create if necessary). Returns: ScrollBar: ScrollBar Widget."
},
{
"ref":"textual.containers.Content.scrollbars_enabled",
"url":3,
"doc":"A tuple of booleans that indicate if scrollbars are enabled. Returns: tuple[bool, bool]: A tuple of ( ,  )"
},
{
"ref":"textual.containers.Content.scrollbar_size_vertical",
"url":3,
"doc":"Get the width used by the  vertical scrollbar. Returns: int: Number of columns in the vertical scrollbar."
},
{
"ref":"textual.containers.Content.scrollbar_size_horizontal",
"url":3,
"doc":"Get the height used by the  horizontal scrollbar. Returns: int: Number of rows in the horizontal scrollbar."
},
{
"ref":"textual.containers.Content.scrollbar_gutter",
"url":3,
"doc":"Spacing required to fit scrollbar(s). Returns: Spacing: Scrollbar gutter spacing."
},
{
"ref":"textual.containers.Content.gutter",
"url":3,
"doc":"Spacing for padding / border / scrollbars. Returns: Spacing: Additional spacing around content area."
},
{
"ref":"textual.containers.Content.size",
"url":3,
"doc":"The size of the content area. Returns: Size: Content area size."
},
{
"ref":"textual.containers.Content.outer_size",
"url":3,
"doc":"The size of the widget (including padding and border). Returns: Size: Outer size."
},
{
"ref":"textual.containers.Content.container_size",
"url":3,
"doc":"The size of the container (parent widget). Returns: Size: Container size."
},
{
"ref":"textual.containers.Content.content_region",
"url":3,
"doc":"Gets an absolute region containing the content (minus padding and border). Returns: Region: Screen region that contains a widget's content."
},
{
"ref":"textual.containers.Content.content_offset",
"url":3,
"doc":"An offset from the Widget origin where the content begins. Returns: Offset: Offset from widget's origin."
},
{
"ref":"textual.containers.Content.content_size",
"url":3,
"doc":"Get the size of the content area."
},
{
"ref":"textual.containers.Content.region",
"url":3,
"doc":"The region occupied by this widget, relative to the Screen. Raises: NoScreen: If there is no screen. errors.NoWidget: If the widget is not on the screen. Returns: Region: Region within screen occupied by widget."
},
{
"ref":"textual.containers.Content.container_viewport",
"url":3,
"doc":"The viewport region (parent window). Returns: Region: The region that contains this widget."
},
{
"ref":"textual.containers.Content.virtual_region",
"url":3,
"doc":"The widget region relative to it's container. Which may not be visible, depending on scroll offset."
},
{
"ref":"textual.containers.Content.window_region",
"url":3,
"doc":"The region within the scrollable area that is currently visible. Returns: Region: New region."
},
{
"ref":"textual.containers.Content.virtual_region_with_margin",
"url":3,
"doc":"The widget region relative to its container ( including margin ), which may not be visible, depending on the scroll offset. Returns: Region: The virtual region of the Widget, inclusive of its margin."
},
{
"ref":"textual.containers.Content.focusable_children",
"url":3,
"doc":"Get the children which may be focused. Returns: list[Widget]: List of widgets that can receive focus."
},
{
"ref":"textual.containers.Content.scroll_offset",
"url":3,
"doc":"Get the current scroll offset. Returns: Offset: Offset a container has been scrolled by."
},
{
"ref":"textual.containers.Content.is_transparent",
"url":3,
"doc":"Check if the background styles is not set. Returns: bool:  True if there is background color, otherwise  False ."
},
{
"ref":"textual.containers.Content.animate",
"url":3,
"doc":"Get an animator to animate attributes on this widget. Example:  python self.animate(\"brightness\", 0.5)  Returns: BoundAnimator: An animator bound to this widget."
},
{
"ref":"textual.containers.Content.is_container",
"url":3,
"doc":"Check if this widget is a container (contains other widgets). Returns: bool: True if this widget is a container."
},
{
"ref":"textual.containers.Content.is_scrollable",
"url":3,
"doc":"Check if this Widget may be scrolled. Returns: bool: True if this widget may be scrolled."
},
{
"ref":"textual.containers.Content.layer",
"url":3,
"doc":"Get the name of this widgets layer. Returns: str: Name of layer."
},
{
"ref":"textual.containers.Content.layers",
"url":3,
"doc":"Layers of from parent. Returns: tuple[str,  .]: Tuple of layer names."
},
{
"ref":"textual.containers.Content.link_style",
"url":3,
"doc":"Style of links."
},
{
"ref":"textual.containers.Content.link_hover_style",
"url":3,
"doc":"Style of links with mouse hover."
},
{
"ref":"textual.containers.Content.scroll_to",
"url":3,
"doc":"Scroll to a given (absolute) coordinate, optionally animating. Args: x (int | None, optional): X coordinate (column) to scroll to, or None for no change. Defaults to None. y (int | None, optional): Y coordinate (row) to scroll to, or None for no change. Defaults to None. animate (bool, optional): Animate to new scroll position. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.containers.Content.scroll_relative",
"url":3,
"doc":"Scroll relative to current position. Args: x (int | None, optional): X distance (columns) to scroll, or  None for no change. Defaults to None. y (int | None, optional): Y distance (rows) to scroll, or  None for no change. Defaults to None. animate (bool, optional): Animate to new scroll position. Defaults to False. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.containers.Content.scroll_home",
"url":3,
"doc":"Scroll to home position. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.containers.Content.scroll_end",
"url":3,
"doc":"Scroll to the end of the container. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.containers.Content.scroll_left",
"url":3,
"doc":"Scroll one cell left. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.containers.Content.scroll_right",
"url":3,
"doc":"Scroll on cell right. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.containers.Content.scroll_down",
"url":3,
"doc":"Scroll one line down. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.containers.Content.scroll_up",
"url":3,
"doc":"Scroll one line up. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.containers.Content.scroll_page_up",
"url":3,
"doc":"Scroll one page up. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.containers.Content.scroll_page_down",
"url":3,
"doc":"Scroll one page down. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.containers.Content.scroll_page_left",
"url":3,
"doc":"Scroll one page left. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.containers.Content.scroll_page_right",
"url":3,
"doc":"Scroll one page right. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.containers.Content.scroll_to_widget",
"url":3,
"doc":"Scroll scrolling to bring a widget in to view. Args: widget (Widget): A descendant widget. animate (bool, optional): True to animate, or False to jump. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling has occurred in any descendant, otherwise False.",
"func":1
},
{
"ref":"textual.containers.Content.scroll_to_region",
"url":3,
"doc":"Scrolls a given region in to view, if required. This method will scroll the least distance required to move  region fully within the scrollable area. Args: region (Region): A region that should be visible. spacing (Spacing | None, optional): Optional spacing around the region. Defaults to None. animate (bool, optional): True to animate, or False to jump. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: Offset: The distance that was scrolled.",
"func":1
},
{
"ref":"textual.containers.Content.scroll_visible",
"url":3,
"doc":"Scroll the container to make this widget visible. Args: animate (bool, optional): _description_. Defaults to True. speed (float | None, optional): _description_. Defaults to None. duration (float | None, optional): _description_. Defaults to None.",
"func":1
},
{
"ref":"textual.containers.Content.get_pseudo_classes",
"url":3,
"doc":"Pseudo classes for a widget. Returns: Iterable[str]: Names of the pseudo classes.",
"func":1
},
{
"ref":"textual.containers.Content.post_render",
"url":3,
"doc":"Applies style attributes to the default renderable. Returns: RenderableType: A new renderable.",
"func":1
},
{
"ref":"textual.containers.Content.watch_mouse_over",
"url":3,
"doc":"Update from CSS if mouse over state changes.",
"func":1
},
{
"ref":"textual.containers.Content.watch_has_focus",
"url":3,
"doc":"Update from CSS if has focus state changes.",
"func":1
},
{
"ref":"textual.containers.Content.render_line",
"url":3,
"doc":"Render a line of content. Args: y (int): Y Coordinate of line. Returns: list[Segment]: A rendered line.",
"func":1
},
{
"ref":"textual.containers.Content.render_lines",
"url":3,
"doc":"Render the widget in to lines. Args: crop (Region): Region within visible area to render. Returns: Lines: A list of list of segments.",
"func":1
},
{
"ref":"textual.containers.Content.get_style_at",
"url":3,
"doc":"Get the Rich style at a given screen offset. Args: x (int): X coordinate relative to the screen. y (int): Y coordinate relative to the screen. Returns: Style: A rich Style object.",
"func":1
},
{
"ref":"textual.containers.Content.refresh",
"url":3,
"doc":"Initiate a refresh of the widget. This method sets an internal flag to perform a refresh, which will be done on the next idle event. Only one refresh will be done even if this method is called multiple times. By default this method will cause the content of the widget to refresh, but not change its size. You can also set  layout=True to perform a layout.  ! warning It is rarely necessary to call this method explicitly. Updating styles or reactive attributes will do this automatically. Args:  regions (Region, optional): Additional screen regions to mark as dirty. repaint (bool, optional): Repaint the widget (will call render() again). Defaults to True. layout (bool, optional): Also layout widgets in the view. Defaults to False.",
"func":1
},
{
"ref":"textual.containers.Content.remove",
"url":3,
"doc":"Remove the Widget from the DOM (effectively deleting it)",
"func":1
},
{
"ref":"textual.containers.Content.render",
"url":3,
"doc":"Get renderable for widget. Returns: RenderableType: Any renderable",
"func":1
},
{
"ref":"textual.containers.Content.action",
"url":3,
"doc":"Perform a given action, with this widget as the default namespace. Args: action (str): Action encoded as a string.",
"func":1
},
{
"ref":"textual.containers.Content.post_message",
"url":3,
"doc":"Post a message to this widget. Args: message (Message): Message to post. Returns: bool: True if the message was posted, False if this widget was closed / closing.",
"func":1
},
{
"ref":"textual.containers.Content.focus",
"url":3,
"doc":"Give focus to this widget. Args: scroll_visible (bool, optional): Scroll parent to make this widget visible. Defaults to True.",
"func":1
},
{
"ref":"textual.containers.Content.capture_mouse",
"url":3,
"doc":"Capture (or release) the mouse. When captured, mouse events will go to this widget even when the pointer is not directly over the widget. Args: capture (bool, optional): True to capture or False to release. Defaults to True.",
"func":1
},
{
"ref":"textual.containers.Content.release_mouse",
"url":3,
"doc":"Release the mouse. Mouse events will only be sent when the mouse is over the widget.",
"func":1
},
{
"ref":"textual.containers.Content.get_component_styles",
"url":4,
"doc":"Get a \"component\" styles object (must be defined in COMPONENT_CLASSES classvar). Args: name (str): Name of the component. Raises: KeyError: If the component class doesn't exist. Returns: RenderStyles: A Styles object.",
"func":1
},
{
"ref":"textual.containers.Content.get_default_css",
"url":4,
"doc":"Gets the CSS for this class and inherited from bases. Returns: list[tuple[str, str : a list of tuples containing (PATH, SOURCE) for this and inherited from base classes.",
"func":1
},
{
"ref":"textual.containers.Content.parent",
"url":4,
"doc":"Get the parent node. Returns: DOMNode | None: The node which is the direct parent of this node."
},
{
"ref":"textual.containers.Content.screen",
"url":4,
"doc":"Get the screen that this node is contained within. Note that this may not be the currently active screen within the app."
},
{
"ref":"textual.containers.Content.id",
"url":4,
"doc":"The ID of this node, or None if the node has no ID. Returns: (str | None): A Node ID or None."
},
{
"ref":"textual.containers.Content.css_identifier",
"url":4,
"doc":"A CSS selector that identifies this DOM node."
},
{
"ref":"textual.containers.Content.css_identifier_styled",
"url":4,
"doc":"A stylized CSS identifier."
},
{
"ref":"textual.containers.Content.classes",
"url":4,
"doc":"A frozenset of the current classes set on the widget. Returns: frozenset[str]: Set of class names."
},
{
"ref":"textual.containers.Content.pseudo_classes",
"url":4,
"doc":"Get a set of all pseudo classes"
},
{
"ref":"textual.containers.Content.css_path_nodes",
"url":4,
"doc":"A list of nodes from the root to this node, forming a \"path\". Returns: list[DOMNode]: List of Nodes, starting with the root and ending with this node."
},
{
"ref":"textual.containers.Content.display",
"url":4,
"doc":"Check if this widget should display or not. Returns: bool:  True if this DOMNode is displayed ( display != \"none\" ) otherwise  False ."
},
{
"ref":"textual.containers.Content.tree",
"url":4,
"doc":"Get a Rich tree object which will recursively render the structure of the node tree. Returns: Tree: A Rich object which may be printed."
},
{
"ref":"textual.containers.Content.text_style",
"url":4,
"doc":"Get the text style object. A widget's style is influenced by its parent. for instance if a parent is bold, then the child will also be bold. Returns: Style: Rich Style object."
},
{
"ref":"textual.containers.Content.rich_style",
"url":4,
"doc":"Get a Rich Style object for this DOMNode."
},
{
"ref":"textual.containers.Content.background_colors",
"url":4,
"doc":"Get the background color and the color of the parent's background. Returns: tuple[Color, Color]: Tuple of (base background, background)"
},
{
"ref":"textual.containers.Content.colors",
"url":4,
"doc":"Gets the Widgets foreground and background colors, and its parent's (base) colors. Returns: tuple[Color, Color, Color, Color]: Tuple of (base background, base color, background, color)"
},
{
"ref":"textual.containers.Content.ancestors",
"url":4,
"doc":"Get a list of Nodes by tracing ancestors all the way back to App."
},
{
"ref":"textual.containers.Content.displayed_children",
"url":4,
"doc":"The children which don't have display: none set. Returns: list[DOMNode]: Children of this widget which will be displayed."
},
{
"ref":"textual.containers.Content.reset_styles",
"url":4,
"doc":"Reset styles back to their initial state",
"func":1
},
{
"ref":"textual.containers.Content.walk_children",
"url":4,
"doc":"Generate descendant nodes. Args: filter_type (type[WalkType] | None, optional): Filter only this type, or None for no filter. Defaults to None. with_self (bool, optional): Also yield self in addition to descendants. Defaults to True. Returns: Iterable[DOMNode | WalkType]: An iterable of nodes.",
"func":1
},
{
"ref":"textual.containers.Content.get_child",
"url":4,
"doc":"Return the first child (immediate descendent) of this node with the given ID. Args: id (str): The ID of the child. Returns: DOMNode: The first child of this node with the ID. Raises: NoMatchingNodesError: if no children could be found for this ID",
"func":1
},
{
"ref":"textual.containers.Content.query",
"url":4,
"doc":"Get a DOM query matching a selector. Args: selector (str, optional): A CSS selector or  None for all nodes. Defaults to None. Returns: DOMQuery: A query object.",
"func":1
},
{
"ref":"textual.containers.Content.query_one",
"url":4,
"doc":"Get the first Widget matching the given selector or selector type. Args: selector (str | None, optional): A selector. expect_type (type, optional): Require the object be of the supplied type, or None for any type. Defaults to None. Returns: Widget | ExpectType: A widget matching the selector.",
"func":1
},
{
"ref":"textual.containers.Content.set_styles",
"url":4,
"doc":"Set custom styles on this object.",
"func":1
},
{
"ref":"textual.containers.Content.has_class",
"url":4,
"doc":"Check if the Node has all the given class names. Args:  class_names (str): CSS class names to check. Returns: bool:  True if the node has all the given class names, otherwise  False .",
"func":1
},
{
"ref":"textual.containers.Content.set_class",
"url":4,
"doc":"Add or remove class(es) based on a condition. Args: add (bool): Add the classes if True, otherwise remove them.",
"func":1
},
{
"ref":"textual.containers.Content.add_class",
"url":4,
"doc":"Add class names to this Node. Args:  class_names (str): CSS class names to add.",
"func":1
},
{
"ref":"textual.containers.Content.remove_class",
"url":4,
"doc":"Remove class names from this Node. Args:  class_names (str): CSS class names to remove.",
"func":1
},
{
"ref":"textual.containers.Content.toggle_class",
"url":4,
"doc":"Toggle class names on this Node. Args:  class_names (str): CSS class names to toggle.",
"func":1
},
{
"ref":"textual.containers.Content.has_pseudo_class",
"url":4,
"doc":"Check for pseudo class (such as hover, focus etc)",
"func":1
},
{
"ref":"textual.containers.Content.app",
"url":5,
"doc":"Get the current app. Returns: App: The current app. Raises: NoActiveAppError: if no active app could be found for the current asyncio context"
},
{
"ref":"textual.containers.Content.log",
"url":5,
"doc":"Get a logger for this object. Returns: Logger: A logger."
},
{
"ref":"textual.containers.Content.disable_messages",
"url":5,
"doc":"Disable message types from being processed.",
"func":1
},
{
"ref":"textual.containers.Content.enable_messages",
"url":5,
"doc":"Enable processing of messages types.",
"func":1
},
{
"ref":"textual.containers.Content.set_timer",
"url":5,
"doc":"Make a function call after a delay. Args: delay (float): Time to wait before invoking callback. callback (TimerCallback | None, optional): Callback to call after time has expired. Defaults to None. name (str | None, optional): Name of the timer (for debug). Defaults to None. pause (bool, optional): Start timer paused. Defaults to False. Returns: Timer: A timer object.",
"func":1
},
{
"ref":"textual.containers.Content.set_interval",
"url":5,
"doc":"Call a function at periodic intervals. Args: interval (float): Time between calls. callback (TimerCallback | None, optional): Function to call. Defaults to None. name (str | None, optional): Name of the timer object. Defaults to None. repeat (int, optional): Number of times to repeat the call or 0 for continuous. Defaults to 0. pause (bool, optional): Start the timer paused. Defaults to False. Returns: Timer: A timer object.",
"func":1
},
{
"ref":"textual.containers.Content.call_later",
"url":5,
"doc":"Schedule a callback to run after all messages are processed and the screen has been refreshed. Positional and keyword arguments are passed to the callable. Args: callback (Callable): A callable.",
"func":1
},
{
"ref":"textual.containers.Content.on_event",
"url":5,
"doc":"Called to process an event. Args: event (events.Event): An Event object.",
"func":1
},
{
"ref":"textual.containers.Content.check_idle",
"url":5,
"doc":"Prompt the message pump to call idle if the queue is empty.",
"func":1
},
{
"ref":"textual.containers.Content.post_message_no_wait",
"url":5,
"doc":"Posts a message on the queue. Args: message (Message): A message (or Event). Returns: bool: True if the messages was processed, False if it wasn't.",
"func":1
},
{
"ref":"textual.containers.Content.emit_no_wait",
"url":5,
"doc":"Send a message to the _parent_, non async version. Args: message (Message): A message object. Returns: bool: True if the message was posted successfully.",
"func":1
},
{
"ref":"textual.containers.Content.emit",
"url":5,
"doc":"Send a message to the _parent_. Args: message (Message): A message object. Returns: bool: True if the message was posted successfully.",
"func":1
},
{
"ref":"textual.containers.Content.dispatch_key",
"url":5,
"doc":"Dispatch a key event to method. This method will call the method named 'key_ ' if it exists. Args: event (events.Key): A key event. Returns: bool: True if key was handled, otherwise False.",
"func":1
},
{
"ref":"textual.constants",
"url":19,
"doc":"Constants that we might want to expose via the public API."
},
{
"ref":"textual.cli",
"url":20,
"doc":""
},
{
"ref":"textual.cli.previews",
"url":21,
"doc":""
},
{
"ref":"textual.dom",
"url":4,
"doc":""
},
{
"ref":"textual.dom.BadIdentifier",
"url":4,
"doc":"raised by check_identifiers."
},
{
"ref":"textual.dom.check_identifiers",
"url":4,
"doc":"Validate identifier and raise an error if it fails. Args: description (str): Description of where identifier is used for error message. names (list[str]): Identifiers to check. Returns: bool: True if the name is valid.",
"func":1
},
{
"ref":"textual.dom.DOMError",
"url":4,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"textual.dom.NoScreen",
"url":4,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"textual.dom.NoParent",
"url":4,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"textual.dom.DOMNode",
"url":4,
"doc":"The base class for object that can be in the Textual DOM (App and Widget)"
},
{
"ref":"textual.dom.DOMNode.DEFAULT_CSS",
"url":4,
"doc":""
},
{
"ref":"textual.dom.DOMNode.DEFAULT_CLASSES",
"url":4,
"doc":""
},
{
"ref":"textual.dom.DOMNode.COMPONENT_CLASSES",
"url":4,
"doc":""
},
{
"ref":"textual.dom.DOMNode.BINDINGS",
"url":4,
"doc":""
},
{
"ref":"textual.dom.DOMNode.auto_refresh",
"url":4,
"doc":""
},
{
"ref":"textual.dom.DOMNode.get_component_styles",
"url":4,
"doc":"Get a \"component\" styles object (must be defined in COMPONENT_CLASSES classvar). Args: name (str): Name of the component. Raises: KeyError: If the component class doesn't exist. Returns: RenderStyles: A Styles object.",
"func":1
},
{
"ref":"textual.dom.DOMNode.get_default_css",
"url":4,
"doc":"Gets the CSS for this class and inherited from bases. Returns: list[tuple[str, str : a list of tuples containing (PATH, SOURCE) for this and inherited from base classes.",
"func":1
},
{
"ref":"textual.dom.DOMNode.parent",
"url":4,
"doc":"Get the parent node. Returns: DOMNode | None: The node which is the direct parent of this node."
},
{
"ref":"textual.dom.DOMNode.screen",
"url":4,
"doc":"Get the screen that this node is contained within. Note that this may not be the currently active screen within the app."
},
{
"ref":"textual.dom.DOMNode.id",
"url":4,
"doc":"The ID of this node, or None if the node has no ID. Returns: (str | None): A Node ID or None."
},
{
"ref":"textual.dom.DOMNode.name",
"url":4,
"doc":""
},
{
"ref":"textual.dom.DOMNode.css_identifier",
"url":4,
"doc":"A CSS selector that identifies this DOM node."
},
{
"ref":"textual.dom.DOMNode.css_identifier_styled",
"url":4,
"doc":"A stylized CSS identifier."
},
{
"ref":"textual.dom.DOMNode.classes",
"url":4,
"doc":"A frozenset of the current classes set on the widget. Returns: frozenset[str]: Set of class names."
},
{
"ref":"textual.dom.DOMNode.pseudo_classes",
"url":4,
"doc":"Get a set of all pseudo classes"
},
{
"ref":"textual.dom.DOMNode.css_path_nodes",
"url":4,
"doc":"A list of nodes from the root to this node, forming a \"path\". Returns: list[DOMNode]: List of Nodes, starting with the root and ending with this node."
},
{
"ref":"textual.dom.DOMNode.display",
"url":4,
"doc":"Check if this widget should display or not. Returns: bool:  True if this DOMNode is displayed ( display != \"none\" ) otherwise  False ."
},
{
"ref":"textual.dom.DOMNode.visible",
"url":4,
"doc":""
},
{
"ref":"textual.dom.DOMNode.tree",
"url":4,
"doc":"Get a Rich tree object which will recursively render the structure of the node tree. Returns: Tree: A Rich object which may be printed."
},
{
"ref":"textual.dom.DOMNode.text_style",
"url":4,
"doc":"Get the text style object. A widget's style is influenced by its parent. for instance if a parent is bold, then the child will also be bold. Returns: Style: Rich Style object."
},
{
"ref":"textual.dom.DOMNode.rich_style",
"url":4,
"doc":"Get a Rich Style object for this DOMNode."
},
{
"ref":"textual.dom.DOMNode.background_colors",
"url":4,
"doc":"Get the background color and the color of the parent's background. Returns: tuple[Color, Color]: Tuple of (base background, background)"
},
{
"ref":"textual.dom.DOMNode.colors",
"url":4,
"doc":"Gets the Widgets foreground and background colors, and its parent's (base) colors. Returns: tuple[Color, Color, Color, Color]: Tuple of (base background, base color, background, color)"
},
{
"ref":"textual.dom.DOMNode.ancestors",
"url":4,
"doc":"Get a list of Nodes by tracing ancestors all the way back to App."
},
{
"ref":"textual.dom.DOMNode.displayed_children",
"url":4,
"doc":"The children which don't have display: none set. Returns: list[DOMNode]: Children of this widget which will be displayed."
},
{
"ref":"textual.dom.DOMNode.get_pseudo_classes",
"url":4,
"doc":"Get any pseudo classes applicable to this Node, e.g. hover, focus. Returns: Iterable[str]: Iterable of strings, such as a generator.",
"func":1
},
{
"ref":"textual.dom.DOMNode.reset_styles",
"url":4,
"doc":"Reset styles back to their initial state",
"func":1
},
{
"ref":"textual.dom.DOMNode.WalkType",
"url":4,
"doc":""
},
{
"ref":"textual.dom.DOMNode.walk_children",
"url":4,
"doc":"Generate descendant nodes. Args: filter_type (type[WalkType] | None, optional): Filter only this type, or None for no filter. Defaults to None. with_self (bool, optional): Also yield self in addition to descendants. Defaults to True. Returns: Iterable[DOMNode | WalkType]: An iterable of nodes.",
"func":1
},
{
"ref":"textual.dom.DOMNode.get_child",
"url":4,
"doc":"Return the first child (immediate descendent) of this node with the given ID. Args: id (str): The ID of the child. Returns: DOMNode: The first child of this node with the ID. Raises: NoMatchingNodesError: if no children could be found for this ID",
"func":1
},
{
"ref":"textual.dom.DOMNode.ExpectType",
"url":4,
"doc":""
},
{
"ref":"textual.dom.DOMNode.query",
"url":4,
"doc":"Get a DOM query matching a selector. Args: selector (str, optional): A CSS selector or  None for all nodes. Defaults to None. Returns: DOMQuery: A query object.",
"func":1
},
{
"ref":"textual.dom.DOMNode.query_one",
"url":4,
"doc":"Get the first Widget matching the given selector or selector type. Args: selector (str | None, optional): A selector. expect_type (type, optional): Require the object be of the supplied type, or None for any type. Defaults to None. Returns: Widget | ExpectType: A widget matching the selector.",
"func":1
},
{
"ref":"textual.dom.DOMNode.set_styles",
"url":4,
"doc":"Set custom styles on this object.",
"func":1
},
{
"ref":"textual.dom.DOMNode.has_class",
"url":4,
"doc":"Check if the Node has all the given class names. Args:  class_names (str): CSS class names to check. Returns: bool:  True if the node has all the given class names, otherwise  False .",
"func":1
},
{
"ref":"textual.dom.DOMNode.set_class",
"url":4,
"doc":"Add or remove class(es) based on a condition. Args: add (bool): Add the classes if True, otherwise remove them.",
"func":1
},
{
"ref":"textual.dom.DOMNode.add_class",
"url":4,
"doc":"Add class names to this Node. Args:  class_names (str): CSS class names to add.",
"func":1
},
{
"ref":"textual.dom.DOMNode.remove_class",
"url":4,
"doc":"Remove class names from this Node. Args:  class_names (str): CSS class names to remove.",
"func":1
},
{
"ref":"textual.dom.DOMNode.toggle_class",
"url":4,
"doc":"Toggle class names on this Node. Args:  class_names (str): CSS class names to toggle.",
"func":1
},
{
"ref":"textual.dom.DOMNode.has_pseudo_class",
"url":4,
"doc":"Check for pseudo class (such as hover, focus etc)",
"func":1
},
{
"ref":"textual.dom.DOMNode.refresh",
"url":4,
"doc":"",
"func":1
},
{
"ref":"textual.dom.DOMNode.app",
"url":5,
"doc":"Get the current app. Returns: App: The current app. Raises: NoActiveAppError: if no active app could be found for the current asyncio context"
},
{
"ref":"textual.dom.DOMNode.log",
"url":5,
"doc":"Get a logger for this object. Returns: Logger: A logger."
},
{
"ref":"textual.dom.DOMNode.disable_messages",
"url":5,
"doc":"Disable message types from being processed.",
"func":1
},
{
"ref":"textual.dom.DOMNode.enable_messages",
"url":5,
"doc":"Enable processing of messages types.",
"func":1
},
{
"ref":"textual.dom.DOMNode.set_timer",
"url":5,
"doc":"Make a function call after a delay. Args: delay (float): Time to wait before invoking callback. callback (TimerCallback | None, optional): Callback to call after time has expired. Defaults to None. name (str | None, optional): Name of the timer (for debug). Defaults to None. pause (bool, optional): Start timer paused. Defaults to False. Returns: Timer: A timer object.",
"func":1
},
{
"ref":"textual.dom.DOMNode.set_interval",
"url":5,
"doc":"Call a function at periodic intervals. Args: interval (float): Time between calls. callback (TimerCallback | None, optional): Function to call. Defaults to None. name (str | None, optional): Name of the timer object. Defaults to None. repeat (int, optional): Number of times to repeat the call or 0 for continuous. Defaults to 0. pause (bool, optional): Start the timer paused. Defaults to False. Returns: Timer: A timer object.",
"func":1
},
{
"ref":"textual.dom.DOMNode.call_later",
"url":5,
"doc":"Schedule a callback to run after all messages are processed and the screen has been refreshed. Positional and keyword arguments are passed to the callable. Args: callback (Callable): A callable.",
"func":1
},
{
"ref":"textual.dom.DOMNode.on_event",
"url":5,
"doc":"Called to process an event. Args: event (events.Event): An Event object.",
"func":1
},
{
"ref":"textual.dom.DOMNode.check_idle",
"url":5,
"doc":"Prompt the message pump to call idle if the queue is empty.",
"func":1
},
{
"ref":"textual.dom.DOMNode.post_message",
"url":5,
"doc":"Post a message or an event to this message pump. Args: message (Message): A message object. Returns: bool: True if the messages was posted successfully, False if the message was not posted (because the message pump was in the process of closing).",
"func":1
},
{
"ref":"textual.dom.DOMNode.post_message_no_wait",
"url":5,
"doc":"Posts a message on the queue. Args: message (Message): A message (or Event). Returns: bool: True if the messages was processed, False if it wasn't.",
"func":1
},
{
"ref":"textual.dom.DOMNode.emit_no_wait",
"url":5,
"doc":"Send a message to the _parent_, non async version. Args: message (Message): A message object. Returns: bool: True if the message was posted successfully.",
"func":1
},
{
"ref":"textual.dom.DOMNode.emit",
"url":5,
"doc":"Send a message to the _parent_. Args: message (Message): A message object. Returns: bool: True if the message was posted successfully.",
"func":1
},
{
"ref":"textual.dom.DOMNode.dispatch_key",
"url":5,
"doc":"Dispatch a key event to method. This method will call the method named 'key_ ' if it exists. Args: event (events.Key): A key event. Returns: bool: True if key was handled, otherwise False.",
"func":1
},
{
"ref":"textual.renderables",
"url":22,
"doc":""
},
{
"ref":"textual.renderables.tint",
"url":23,
"doc":""
},
{
"ref":"textual.renderables.tint.Tint",
"url":23,
"doc":"Applies a color on top of an existing renderable. Wrap a renderable to apply a tint color. Args: renderable (RenderableType): A renderable. color (Color): A color (presumably with alpha)."
},
{
"ref":"textual.renderables.tint.Tint.process_segments",
"url":23,
"doc":"Apply tint to segments. Args: segments (Iterable[Segment]): Incoming segments. color (Color): Color of tint. Returns: Iterable[Segment]: Segments with applied tint.",
"func":1
},
{
"ref":"textual.renderables.sparkline",
"url":24,
"doc":""
},
{
"ref":"textual.renderables.sparkline.Sparkline",
"url":24,
"doc":"A sparkline representing a series of data. Args: data (Sequence[T]): The sequence of data to render. width (int, optional): The width of the sparkline/the number of buckets to partition the data into. min_color (Color, optional): The color of values equal to the min value in data. max_color (Color, optional): The color of values equal to the max value in data. summary_function (Callable[list[T ): Function that will be applied to each bucket."
},
{
"ref":"textual.renderables.sparkline.Sparkline.BARS",
"url":24,
"doc":""
},
{
"ref":"textual.renderables.align",
"url":25,
"doc":""
},
{
"ref":"textual.renderables.align.Align",
"url":25,
"doc":"Align a child renderable Args: renderable (RenderableType): Renderable to align. size (Size): Size of container. style (Style): Style of any padding. horizontal (AlignHorizontal): Horizontal alignment. vertical (AlignVertical): Vertical alignment."
},
{
"ref":"textual.renderables.underline_bar",
"url":26,
"doc":""
},
{
"ref":"textual.renderables.underline_bar.UnderlineBar",
"url":26,
"doc":"Thin horizontal bar with a portion highlighted. Args: highlight_range (tuple[float, float]): The range to highlight. Defaults to  (0, 0) (no highlight) highlight_style (StyleType): The style of the highlighted range of the bar. background_style (StyleType): The style of the non-highlighted range(s) of the bar. width (int, optional): The width of the bar, or  None to fill available width."
},
{
"ref":"textual.renderables.gradient",
"url":27,
"doc":""
},
{
"ref":"textual.renderables.gradient.VerticalGradient",
"url":27,
"doc":"Draw a vertical gradient."
},
{
"ref":"textual.renderables.blank",
"url":28,
"doc":""
},
{
"ref":"textual.renderables.blank.Blank",
"url":28,
"doc":"Draw solid background color."
},
{
"ref":"textual.renderables.text_opacity",
"url":29,
"doc":""
},
{
"ref":"textual.renderables.text_opacity.TextOpacity",
"url":29,
"doc":"Blend foreground in to background. Wrap a renderable to blend foreground color into the background color. Args: renderable (RenderableType): The RenderableType to manipulate. opacity (float): The opacity as a float. A value of 1.0 means text is fully visible."
},
{
"ref":"textual.renderables.text_opacity.TextOpacity.process_segments",
"url":29,
"doc":"Apply opacity to segments. Args: segments (Iterable[Segment]): Incoming segments. opacity (float): Opacity to apply. Returns: Iterable[Segment]: Segments with applied opacity.",
"func":1
},
{
"ref":"textual.color",
"url":30,
"doc":"This module contains a powerful Color class which Textual uses to expose colors. The only exception would be for Rich renderables, which require a rich.color.Color instance. You can convert from a Textual color to a Rich color with the [rich_color][textual.color.Color.rich_color] property.  Named colors The following named colors are used by the [parse][textual.color.Color.parse] method.  {.rich title=\"colors\"} from textual._color_constants import COLOR_NAME_TO_RGB from textual.color import Color from rich.table import Table from rich.text import Text table = Table(\"Name\", \"hex\", \"RGB\", \"Color\", expand=True, highlight=True) for name, triplet in sorted(COLOR_NAME_TO_RGB.items( : if len(triplet) != 3: continue color = Color( triplet) r, g, b = triplet table.add_row( f'\"{name}\"', Text(f\"{color.hex}\", \"bold green\"), f\"rgb({r}, {g}, {b})\", Text(\" \", style=f\"on rgb({r},{g},{b})\") ) output = table  "
},
{
"ref":"textual.color.HSL",
"url":30,
"doc":"A color in HLS format."
},
{
"ref":"textual.color.HSL.h",
"url":30,
"doc":"Hue"
},
{
"ref":"textual.color.HSL.s",
"url":30,
"doc":"Saturation"
},
{
"ref":"textual.color.HSL.l",
"url":30,
"doc":"Lightness"
},
{
"ref":"textual.color.HSL.css",
"url":30,
"doc":"HSL in css format."
},
{
"ref":"textual.color.HSV",
"url":30,
"doc":"A color in HSV format."
},
{
"ref":"textual.color.HSV.h",
"url":30,
"doc":"Hue"
},
{
"ref":"textual.color.HSV.s",
"url":30,
"doc":"Saturation"
},
{
"ref":"textual.color.HSV.v",
"url":30,
"doc":"Value"
},
{
"ref":"textual.color.Lab",
"url":30,
"doc":"A color in CIE-L ab format."
},
{
"ref":"textual.color.Lab.L",
"url":30,
"doc":"Alias for field number 0"
},
{
"ref":"textual.color.Lab.a",
"url":30,
"doc":"Alias for field number 1"
},
{
"ref":"textual.color.Lab.b",
"url":30,
"doc":"Alias for field number 2"
},
{
"ref":"textual.color.ColorParseError",
"url":30,
"doc":"A color failed to parse. Args: message (str): the error message suggested_color (str | None): a close color we can suggest. Defaults to None."
},
{
"ref":"textual.color.Color",
"url":30,
"doc":"A class to represent a RGB color with an alpha component."
},
{
"ref":"textual.color.Color.r",
"url":30,
"doc":"Red component (0-255)"
},
{
"ref":"textual.color.Color.g",
"url":30,
"doc":"Green component (0-255)"
},
{
"ref":"textual.color.Color.b",
"url":30,
"doc":"Blue component (0-255)"
},
{
"ref":"textual.color.Color.a",
"url":30,
"doc":"Alpha component (0-1)"
},
{
"ref":"textual.color.Color.from_rich_color",
"url":30,
"doc":"Create a new color from Rich's Color class. Args: rich_color (RichColor): An instance of rich.color.Color. Returns: Color: A new Color.",
"func":1
},
{
"ref":"textual.color.Color.from_hsl",
"url":30,
"doc":"Create a color from HLS components. Args: h (float): Hue. l (float): Lightness. s (float): Saturation. Returns: Color: A new color.",
"func":1
},
{
"ref":"textual.color.Color.inverse",
"url":30,
"doc":"The inverse of this color."
},
{
"ref":"textual.color.Color.is_transparent",
"url":30,
"doc":"Check if the color is transparent, i.e. has 0 alpha. Returns: bool: True if transparent, otherwise False."
},
{
"ref":"textual.color.Color.clamped",
"url":30,
"doc":"Get a color with all components saturated to maximum and minimum values. Returns: Color: A color object."
},
{
"ref":"textual.color.Color.rich_color",
"url":30,
"doc":"This color encoded in Rich's Color class. Returns: RichColor: A color object as used by Rich."
},
{
"ref":"textual.color.Color.normalized",
"url":30,
"doc":"A tuple of the color components normalized to between 0 and 1. Returns: tuple[float, float, float]: Normalized components."
},
{
"ref":"textual.color.Color.rgb",
"url":30,
"doc":"Get just the red, green, and blue components. Returns: tuple[int, int, int]: Color components"
},
{
"ref":"textual.color.Color.hsl",
"url":30,
"doc":"Get the color as HSL. Returns: HSL: Color in HSL format."
},
{
"ref":"textual.color.Color.brightness",
"url":30,
"doc":"Get the human perceptual brightness. Returns: float: Brightness value (0-1)."
},
{
"ref":"textual.color.Color.hex",
"url":30,
"doc":"The color in CSS hex form, with 6 digits for RGB, and 8 digits for RGBA. Returns: str: A CSS hex-style color, e.g.  \" 46b3de\" or  \" 3342457f\" "
},
{
"ref":"textual.color.Color.hex6",
"url":30,
"doc":"The color in CSS hex form, with 6 digits for RGB. Alpha is ignored. Returns: str: A CSS hex-style color, e.g. \" 46b3de\""
},
{
"ref":"textual.color.Color.css",
"url":30,
"doc":"The color in CSS rgb or rgba form. Returns: str: A CSS style color, e.g.  \"rgb(10,20,30)\" or  \"rgb(50,70,80,0.5)\" "
},
{
"ref":"textual.color.Color.with_alpha",
"url":30,
"doc":"Create a new color with the given alpha. Args: alpha (float): New value for alpha. Returns: Color: A new color.",
"func":1
},
{
"ref":"textual.color.Color.blend",
"url":30,
"doc":"Generate a new color between two colors. Args: destination (Color): Another color. factor (float): A blend factor, 0 -> 1. alpha (float | None): New alpha for result. Defaults to 1. Returns: Color: A new color.",
"func":1
},
{
"ref":"textual.color.Color.parse",
"url":30,
"doc":"Parse a string containing a named color or CSS-style color. Colors may be parsed from the following formats: Text beginning with a  is parsed as hex: R, G, and B must be hex digits (0-9A-F) -  RGB -  RRGGBB -  RRGGBBAA Text in the following formats is parsed as decimal values: RED, GREEN, and BLUE must be numbers between 0 and 255. ALPHA should ba a value between 0 and 1. -  rgb(RED,GREEN,BLUE) -  rgba(RED,GREEN,BLUE,ALPHA) -  hsl(RED,GREEN,BLUE) -  hsla(RED,GREEN,BLUE,ALPHA) All other text will raise a  ColorParseError . Args: color_text (str | Color): Text with a valid color format. Color objects will be returned unmodified. Raises: ColorParseError: If the color is not encoded correctly. Returns: Color: New color object.",
"func":1
},
{
"ref":"textual.color.Color.darken",
"url":30,
"doc":"Darken the color by a given amount. Args: amount (float): Value between 0-1 to reduce luminance by. alpha (float | None, optional): Alpha component for new color or None to copy alpha. Defaults to None. Returns: Color: New color.",
"func":1
},
{
"ref":"textual.color.Color.lighten",
"url":30,
"doc":"Lighten the color by a given amount. Args: amount (float): Value between 0-1 to increase luminance by. alpha (float | None, optional): Alpha component for new color or None to copy alpha. Defaults to None. Returns: Color: New color.",
"func":1
},
{
"ref":"textual.color.Color.get_contrast_text",
"url":30,
"doc":"Get a light or dark color that best contrasts this color, for use with text. Args: alpha (float, optional): An alpha value to adjust the pure white / black by. Defaults to 0.95. Returns: Color: A new color, either an off-white or off-black",
"func":1
},
{
"ref":"textual.color.rgb_to_lab",
"url":30,
"doc":"Convert an RGB color to the CIE-L ab format. Uses the standard RGB color space with a D65/2\u2070 standard illuminant. Conversion passes through the XYZ color space. Cf. http: www.easyrgb.com/en/math.php.",
"func":1
},
{
"ref":"textual.color.lab_to_rgb",
"url":30,
"doc":"Convert a CIE-L ab color to RGB. Uses the standard RGB color space with a D65/2\u2070 standard illuminant. Conversion passes through the XYZ color space. Cf. http: www.easyrgb.com/en/math.php.",
"func":1
},
{
"ref":"textual.widget",
"url":3,
"doc":""
},
{
"ref":"textual.widget.RenderCache",
"url":3,
"doc":"Stores results of a previous render."
},
{
"ref":"textual.widget.RenderCache.size",
"url":3,
"doc":"Alias for field number 0"
},
{
"ref":"textual.widget.RenderCache.lines",
"url":3,
"doc":"Alias for field number 1"
},
{
"ref":"textual.widget.Widget",
"url":3,
"doc":"A Widget is the base class for Textual widgets. See also [static][textual.widgets._static.Static] for starting point for your own widgets."
},
{
"ref":"textual.widget.Widget.DEFAULT_CSS",
"url":3,
"doc":""
},
{
"ref":"textual.widget.Widget.COMPONENT_CLASSES",
"url":3,
"doc":""
},
{
"ref":"textual.widget.Widget.can_focus",
"url":3,
"doc":"Widget may receive focus."
},
{
"ref":"textual.widget.Widget.can_focus_children",
"url":3,
"doc":"Widget's children may receive focus."
},
{
"ref":"textual.widget.Widget.expand",
"url":3,
"doc":"Rich renderable may expand."
},
{
"ref":"textual.widget.Widget.shrink",
"url":3,
"doc":"Rich renderable may shrink."
},
{
"ref":"textual.widget.Widget.auto_links",
"url":3,
"doc":"Widget will highlight links automatically."
},
{
"ref":"textual.widget.Widget.hover_style",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.widget.Widget.highlight_link_id",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.widget.Widget.virtual_size",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.widget.Widget.auto_width",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.widget.Widget.auto_height",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.widget.Widget.has_focus",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.widget.Widget.descendant_has_focus",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.widget.Widget.mouse_over",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.widget.Widget.scroll_x",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.widget.Widget.scroll_y",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.widget.Widget.scroll_target_x",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.widget.Widget.scroll_target_y",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.widget.Widget.show_vertical_scrollbar",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.widget.Widget.show_horizontal_scrollbar",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.widget.Widget.siblings",
"url":3,
"doc":"Get the widget's siblings (self is removed from the return list). Returns: list[Widget]: A list of siblings."
},
{
"ref":"textual.widget.Widget.allow_vertical_scroll",
"url":3,
"doc":"Check if vertical scroll is permitted. May be overridden if you want different logic regarding allowing scrolling. Returns: bool: True if the widget may scroll _vertically_."
},
{
"ref":"textual.widget.Widget.allow_horizontal_scroll",
"url":3,
"doc":"Check if horizontal scroll is permitted. May be overridden if you want different logic regarding allowing scrolling. Returns: bool: True if the widget may scroll _horizontally_."
},
{
"ref":"textual.widget.Widget.offset",
"url":3,
"doc":"Widget offset from origin. Returns: Offset: Relative offset."
},
{
"ref":"textual.widget.Widget.get_component_rich_style",
"url":3,
"doc":"Get a  Rich style for a component. Args: name (str): Name of component. Returns: Style: A Rich style object.",
"func":1
},
{
"ref":"textual.widget.Widget.mount",
"url":3,
"doc":"Mount child widgets (making this widget a container). Widgets may be passed as positional arguments or keyword arguments. If keyword arguments, the keys will be set as the Widget's id. Example:  python self.mount(Static(\"hello\"), header=Header(  ",
"func":1
},
{
"ref":"textual.widget.Widget.compose",
"url":3,
"doc":"Called by Textual to create child widgets. Extend this to build a UI. Example:  python def compose(self) -> ComposeResult: yield Header() yield Container( TreeControl(), Viewer() ) yield Footer()  ",
"func":1
},
{
"ref":"textual.widget.Widget.get_content_width",
"url":3,
"doc":"Called by textual to get the width of the content area. May be overridden in a subclass. Args: container (Size): Size of the container (immediate parent) widget. viewport (Size): Size of the viewport. Returns: int: The optimal width of the content.",
"func":1
},
{
"ref":"textual.widget.Widget.get_content_height",
"url":3,
"doc":"Called by Textual to get the height of the content area. May be overridden in a subclass. Args: container (Size): Size of the container (immediate parent) widget. viewport (Size): Size of the viewport. width (int): Width of renderable. Returns: int: The height of the content.",
"func":1
},
{
"ref":"textual.widget.Widget.watch_hover_style",
"url":3,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.watch_scroll_x",
"url":3,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.watch_scroll_y",
"url":3,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.validate_scroll_x",
"url":3,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.validate_scroll_target_x",
"url":3,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.validate_scroll_y",
"url":3,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.validate_scroll_target_y",
"url":3,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.max_scroll_x",
"url":3,
"doc":"The maximum value of  scroll_x ."
},
{
"ref":"textual.widget.Widget.max_scroll_y",
"url":3,
"doc":"The maximum value of  scroll_y ."
},
{
"ref":"textual.widget.Widget.scrollbar_corner",
"url":3,
"doc":"Return the ScrollBarCorner - the cells that appear between the horizontal and vertical scrollbars (only when both are visible)."
},
{
"ref":"textual.widget.Widget.vertical_scrollbar",
"url":3,
"doc":"Get a vertical scrollbar (create if necessary). Returns: ScrollBar: ScrollBar Widget."
},
{
"ref":"textual.widget.Widget.horizontal_scrollbar",
"url":3,
"doc":"Get a vertical scrollbar (create if necessary). Returns: ScrollBar: ScrollBar Widget."
},
{
"ref":"textual.widget.Widget.scrollbars_enabled",
"url":3,
"doc":"A tuple of booleans that indicate if scrollbars are enabled. Returns: tuple[bool, bool]: A tuple of ( ,  )"
},
{
"ref":"textual.widget.Widget.scrollbar_size_vertical",
"url":3,
"doc":"Get the width used by the  vertical scrollbar. Returns: int: Number of columns in the vertical scrollbar."
},
{
"ref":"textual.widget.Widget.scrollbar_size_horizontal",
"url":3,
"doc":"Get the height used by the  horizontal scrollbar. Returns: int: Number of rows in the horizontal scrollbar."
},
{
"ref":"textual.widget.Widget.scrollbar_gutter",
"url":3,
"doc":"Spacing required to fit scrollbar(s). Returns: Spacing: Scrollbar gutter spacing."
},
{
"ref":"textual.widget.Widget.gutter",
"url":3,
"doc":"Spacing for padding / border / scrollbars. Returns: Spacing: Additional spacing around content area."
},
{
"ref":"textual.widget.Widget.size",
"url":3,
"doc":"The size of the content area. Returns: Size: Content area size."
},
{
"ref":"textual.widget.Widget.outer_size",
"url":3,
"doc":"The size of the widget (including padding and border). Returns: Size: Outer size."
},
{
"ref":"textual.widget.Widget.container_size",
"url":3,
"doc":"The size of the container (parent widget). Returns: Size: Container size."
},
{
"ref":"textual.widget.Widget.content_region",
"url":3,
"doc":"Gets an absolute region containing the content (minus padding and border). Returns: Region: Screen region that contains a widget's content."
},
{
"ref":"textual.widget.Widget.content_offset",
"url":3,
"doc":"An offset from the Widget origin where the content begins. Returns: Offset: Offset from widget's origin."
},
{
"ref":"textual.widget.Widget.content_size",
"url":3,
"doc":"Get the size of the content area."
},
{
"ref":"textual.widget.Widget.region",
"url":3,
"doc":"The region occupied by this widget, relative to the Screen. Raises: NoScreen: If there is no screen. errors.NoWidget: If the widget is not on the screen. Returns: Region: Region within screen occupied by widget."
},
{
"ref":"textual.widget.Widget.container_viewport",
"url":3,
"doc":"The viewport region (parent window). Returns: Region: The region that contains this widget."
},
{
"ref":"textual.widget.Widget.virtual_region",
"url":3,
"doc":"The widget region relative to it's container. Which may not be visible, depending on scroll offset."
},
{
"ref":"textual.widget.Widget.window_region",
"url":3,
"doc":"The region within the scrollable area that is currently visible. Returns: Region: New region."
},
{
"ref":"textual.widget.Widget.virtual_region_with_margin",
"url":3,
"doc":"The widget region relative to its container ( including margin ), which may not be visible, depending on the scroll offset. Returns: Region: The virtual region of the Widget, inclusive of its margin."
},
{
"ref":"textual.widget.Widget.focusable_children",
"url":3,
"doc":"Get the children which may be focused. Returns: list[Widget]: List of widgets that can receive focus."
},
{
"ref":"textual.widget.Widget.scroll_offset",
"url":3,
"doc":"Get the current scroll offset. Returns: Offset: Offset a container has been scrolled by."
},
{
"ref":"textual.widget.Widget.is_transparent",
"url":3,
"doc":"Check if the background styles is not set. Returns: bool:  True if there is background color, otherwise  False ."
},
{
"ref":"textual.widget.Widget.animate",
"url":3,
"doc":"Get an animator to animate attributes on this widget. Example:  python self.animate(\"brightness\", 0.5)  Returns: BoundAnimator: An animator bound to this widget."
},
{
"ref":"textual.widget.Widget.is_container",
"url":3,
"doc":"Check if this widget is a container (contains other widgets). Returns: bool: True if this widget is a container."
},
{
"ref":"textual.widget.Widget.is_scrollable",
"url":3,
"doc":"Check if this Widget may be scrolled. Returns: bool: True if this widget may be scrolled."
},
{
"ref":"textual.widget.Widget.layer",
"url":3,
"doc":"Get the name of this widgets layer. Returns: str: Name of layer."
},
{
"ref":"textual.widget.Widget.layers",
"url":3,
"doc":"Layers of from parent. Returns: tuple[str,  .]: Tuple of layer names."
},
{
"ref":"textual.widget.Widget.link_style",
"url":3,
"doc":"Style of links."
},
{
"ref":"textual.widget.Widget.link_hover_style",
"url":3,
"doc":"Style of links with mouse hover."
},
{
"ref":"textual.widget.Widget.scroll_to",
"url":3,
"doc":"Scroll to a given (absolute) coordinate, optionally animating. Args: x (int | None, optional): X coordinate (column) to scroll to, or None for no change. Defaults to None. y (int | None, optional): Y coordinate (row) to scroll to, or None for no change. Defaults to None. animate (bool, optional): Animate to new scroll position. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.widget.Widget.scroll_relative",
"url":3,
"doc":"Scroll relative to current position. Args: x (int | None, optional): X distance (columns) to scroll, or  None for no change. Defaults to None. y (int | None, optional): Y distance (rows) to scroll, or  None for no change. Defaults to None. animate (bool, optional): Animate to new scroll position. Defaults to False. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.widget.Widget.scroll_home",
"url":3,
"doc":"Scroll to home position. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.widget.Widget.scroll_end",
"url":3,
"doc":"Scroll to the end of the container. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.widget.Widget.scroll_left",
"url":3,
"doc":"Scroll one cell left. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.widget.Widget.scroll_right",
"url":3,
"doc":"Scroll on cell right. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.widget.Widget.scroll_down",
"url":3,
"doc":"Scroll one line down. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.widget.Widget.scroll_up",
"url":3,
"doc":"Scroll one line up. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.widget.Widget.scroll_page_up",
"url":3,
"doc":"Scroll one page up. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.widget.Widget.scroll_page_down",
"url":3,
"doc":"Scroll one page down. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.widget.Widget.scroll_page_left",
"url":3,
"doc":"Scroll one page left. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.widget.Widget.scroll_page_right",
"url":3,
"doc":"Scroll one page right. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.widget.Widget.scroll_to_widget",
"url":3,
"doc":"Scroll scrolling to bring a widget in to view. Args: widget (Widget): A descendant widget. animate (bool, optional): True to animate, or False to jump. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling has occurred in any descendant, otherwise False.",
"func":1
},
{
"ref":"textual.widget.Widget.scroll_to_region",
"url":3,
"doc":"Scrolls a given region in to view, if required. This method will scroll the least distance required to move  region fully within the scrollable area. Args: region (Region): A region that should be visible. spacing (Spacing | None, optional): Optional spacing around the region. Defaults to None. animate (bool, optional): True to animate, or False to jump. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: Offset: The distance that was scrolled.",
"func":1
},
{
"ref":"textual.widget.Widget.scroll_visible",
"url":3,
"doc":"Scroll the container to make this widget visible. Args: animate (bool, optional): _description_. Defaults to True. speed (float | None, optional): _description_. Defaults to None. duration (float | None, optional): _description_. Defaults to None.",
"func":1
},
{
"ref":"textual.widget.Widget.get_pseudo_classes",
"url":3,
"doc":"Pseudo classes for a widget. Returns: Iterable[str]: Names of the pseudo classes.",
"func":1
},
{
"ref":"textual.widget.Widget.post_render",
"url":3,
"doc":"Applies style attributes to the default renderable. Returns: RenderableType: A new renderable.",
"func":1
},
{
"ref":"textual.widget.Widget.watch_mouse_over",
"url":3,
"doc":"Update from CSS if mouse over state changes.",
"func":1
},
{
"ref":"textual.widget.Widget.watch_has_focus",
"url":3,
"doc":"Update from CSS if has focus state changes.",
"func":1
},
{
"ref":"textual.widget.Widget.render_line",
"url":3,
"doc":"Render a line of content. Args: y (int): Y Coordinate of line. Returns: list[Segment]: A rendered line.",
"func":1
},
{
"ref":"textual.widget.Widget.render_lines",
"url":3,
"doc":"Render the widget in to lines. Args: crop (Region): Region within visible area to render. Returns: Lines: A list of list of segments.",
"func":1
},
{
"ref":"textual.widget.Widget.get_style_at",
"url":3,
"doc":"Get the Rich style at a given screen offset. Args: x (int): X coordinate relative to the screen. y (int): Y coordinate relative to the screen. Returns: Style: A rich Style object.",
"func":1
},
{
"ref":"textual.widget.Widget.refresh",
"url":3,
"doc":"Initiate a refresh of the widget. This method sets an internal flag to perform a refresh, which will be done on the next idle event. Only one refresh will be done even if this method is called multiple times. By default this method will cause the content of the widget to refresh, but not change its size. You can also set  layout=True to perform a layout.  ! warning It is rarely necessary to call this method explicitly. Updating styles or reactive attributes will do this automatically. Args:  regions (Region, optional): Additional screen regions to mark as dirty. repaint (bool, optional): Repaint the widget (will call render() again). Defaults to True. layout (bool, optional): Also layout widgets in the view. Defaults to False.",
"func":1
},
{
"ref":"textual.widget.Widget.remove",
"url":3,
"doc":"Remove the Widget from the DOM (effectively deleting it)",
"func":1
},
{
"ref":"textual.widget.Widget.render",
"url":3,
"doc":"Get renderable for widget. Returns: RenderableType: Any renderable",
"func":1
},
{
"ref":"textual.widget.Widget.action",
"url":3,
"doc":"Perform a given action, with this widget as the default namespace. Args: action (str): Action encoded as a string.",
"func":1
},
{
"ref":"textual.widget.Widget.post_message",
"url":3,
"doc":"Post a message to this widget. Args: message (Message): Message to post. Returns: bool: True if the message was posted, False if this widget was closed / closing.",
"func":1
},
{
"ref":"textual.widget.Widget.focus",
"url":3,
"doc":"Give focus to this widget. Args: scroll_visible (bool, optional): Scroll parent to make this widget visible. Defaults to True.",
"func":1
},
{
"ref":"textual.widget.Widget.capture_mouse",
"url":3,
"doc":"Capture (or release) the mouse. When captured, mouse events will go to this widget even when the pointer is not directly over the widget. Args: capture (bool, optional): True to capture or False to release. Defaults to True.",
"func":1
},
{
"ref":"textual.widget.Widget.release_mouse",
"url":3,
"doc":"Release the mouse. Mouse events will only be sent when the mouse is over the widget.",
"func":1
},
{
"ref":"textual.widget.Widget.broker_event",
"url":3,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.handle_key",
"url":3,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.get_component_styles",
"url":4,
"doc":"Get a \"component\" styles object (must be defined in COMPONENT_CLASSES classvar). Args: name (str): Name of the component. Raises: KeyError: If the component class doesn't exist. Returns: RenderStyles: A Styles object.",
"func":1
},
{
"ref":"textual.widget.Widget.get_default_css",
"url":4,
"doc":"Gets the CSS for this class and inherited from bases. Returns: list[tuple[str, str : a list of tuples containing (PATH, SOURCE) for this and inherited from base classes.",
"func":1
},
{
"ref":"textual.widget.Widget.parent",
"url":4,
"doc":"Get the parent node. Returns: DOMNode | None: The node which is the direct parent of this node."
},
{
"ref":"textual.widget.Widget.screen",
"url":4,
"doc":"Get the screen that this node is contained within. Note that this may not be the currently active screen within the app."
},
{
"ref":"textual.widget.Widget.id",
"url":4,
"doc":"The ID of this node, or None if the node has no ID. Returns: (str | None): A Node ID or None."
},
{
"ref":"textual.widget.Widget.css_identifier",
"url":4,
"doc":"A CSS selector that identifies this DOM node."
},
{
"ref":"textual.widget.Widget.css_identifier_styled",
"url":4,
"doc":"A stylized CSS identifier."
},
{
"ref":"textual.widget.Widget.classes",
"url":4,
"doc":"A frozenset of the current classes set on the widget. Returns: frozenset[str]: Set of class names."
},
{
"ref":"textual.widget.Widget.pseudo_classes",
"url":4,
"doc":"Get a set of all pseudo classes"
},
{
"ref":"textual.widget.Widget.css_path_nodes",
"url":4,
"doc":"A list of nodes from the root to this node, forming a \"path\". Returns: list[DOMNode]: List of Nodes, starting with the root and ending with this node."
},
{
"ref":"textual.widget.Widget.display",
"url":4,
"doc":"Check if this widget should display or not. Returns: bool:  True if this DOMNode is displayed ( display != \"none\" ) otherwise  False ."
},
{
"ref":"textual.widget.Widget.tree",
"url":4,
"doc":"Get a Rich tree object which will recursively render the structure of the node tree. Returns: Tree: A Rich object which may be printed."
},
{
"ref":"textual.widget.Widget.text_style",
"url":4,
"doc":"Get the text style object. A widget's style is influenced by its parent. for instance if a parent is bold, then the child will also be bold. Returns: Style: Rich Style object."
},
{
"ref":"textual.widget.Widget.rich_style",
"url":4,
"doc":"Get a Rich Style object for this DOMNode."
},
{
"ref":"textual.widget.Widget.background_colors",
"url":4,
"doc":"Get the background color and the color of the parent's background. Returns: tuple[Color, Color]: Tuple of (base background, background)"
},
{
"ref":"textual.widget.Widget.colors",
"url":4,
"doc":"Gets the Widgets foreground and background colors, and its parent's (base) colors. Returns: tuple[Color, Color, Color, Color]: Tuple of (base background, base color, background, color)"
},
{
"ref":"textual.widget.Widget.ancestors",
"url":4,
"doc":"Get a list of Nodes by tracing ancestors all the way back to App."
},
{
"ref":"textual.widget.Widget.displayed_children",
"url":4,
"doc":"The children which don't have display: none set. Returns: list[DOMNode]: Children of this widget which will be displayed."
},
{
"ref":"textual.widget.Widget.reset_styles",
"url":4,
"doc":"Reset styles back to their initial state",
"func":1
},
{
"ref":"textual.widget.Widget.walk_children",
"url":4,
"doc":"Generate descendant nodes. Args: filter_type (type[WalkType] | None, optional): Filter only this type, or None for no filter. Defaults to None. with_self (bool, optional): Also yield self in addition to descendants. Defaults to True. Returns: Iterable[DOMNode | WalkType]: An iterable of nodes.",
"func":1
},
{
"ref":"textual.widget.Widget.get_child",
"url":4,
"doc":"Return the first child (immediate descendent) of this node with the given ID. Args: id (str): The ID of the child. Returns: DOMNode: The first child of this node with the ID. Raises: NoMatchingNodesError: if no children could be found for this ID",
"func":1
},
{
"ref":"textual.widget.Widget.query",
"url":4,
"doc":"Get a DOM query matching a selector. Args: selector (str, optional): A CSS selector or  None for all nodes. Defaults to None. Returns: DOMQuery: A query object.",
"func":1
},
{
"ref":"textual.widget.Widget.query_one",
"url":4,
"doc":"Get the first Widget matching the given selector or selector type. Args: selector (str | None, optional): A selector. expect_type (type, optional): Require the object be of the supplied type, or None for any type. Defaults to None. Returns: Widget | ExpectType: A widget matching the selector.",
"func":1
},
{
"ref":"textual.widget.Widget.set_styles",
"url":4,
"doc":"Set custom styles on this object.",
"func":1
},
{
"ref":"textual.widget.Widget.has_class",
"url":4,
"doc":"Check if the Node has all the given class names. Args:  class_names (str): CSS class names to check. Returns: bool:  True if the node has all the given class names, otherwise  False .",
"func":1
},
{
"ref":"textual.widget.Widget.set_class",
"url":4,
"doc":"Add or remove class(es) based on a condition. Args: add (bool): Add the classes if True, otherwise remove them.",
"func":1
},
{
"ref":"textual.widget.Widget.add_class",
"url":4,
"doc":"Add class names to this Node. Args:  class_names (str): CSS class names to add.",
"func":1
},
{
"ref":"textual.widget.Widget.remove_class",
"url":4,
"doc":"Remove class names from this Node. Args:  class_names (str): CSS class names to remove.",
"func":1
},
{
"ref":"textual.widget.Widget.toggle_class",
"url":4,
"doc":"Toggle class names on this Node. Args:  class_names (str): CSS class names to toggle.",
"func":1
},
{
"ref":"textual.widget.Widget.has_pseudo_class",
"url":4,
"doc":"Check for pseudo class (such as hover, focus etc)",
"func":1
},
{
"ref":"textual.widget.Widget.app",
"url":5,
"doc":"Get the current app. Returns: App: The current app. Raises: NoActiveAppError: if no active app could be found for the current asyncio context"
},
{
"ref":"textual.widget.Widget.log",
"url":5,
"doc":"Get a logger for this object. Returns: Logger: A logger."
},
{
"ref":"textual.widget.Widget.disable_messages",
"url":5,
"doc":"Disable message types from being processed.",
"func":1
},
{
"ref":"textual.widget.Widget.enable_messages",
"url":5,
"doc":"Enable processing of messages types.",
"func":1
},
{
"ref":"textual.widget.Widget.set_timer",
"url":5,
"doc":"Make a function call after a delay. Args: delay (float): Time to wait before invoking callback. callback (TimerCallback | None, optional): Callback to call after time has expired. Defaults to None. name (str | None, optional): Name of the timer (for debug). Defaults to None. pause (bool, optional): Start timer paused. Defaults to False. Returns: Timer: A timer object.",
"func":1
},
{
"ref":"textual.widget.Widget.set_interval",
"url":5,
"doc":"Call a function at periodic intervals. Args: interval (float): Time between calls. callback (TimerCallback | None, optional): Function to call. Defaults to None. name (str | None, optional): Name of the timer object. Defaults to None. repeat (int, optional): Number of times to repeat the call or 0 for continuous. Defaults to 0. pause (bool, optional): Start the timer paused. Defaults to False. Returns: Timer: A timer object.",
"func":1
},
{
"ref":"textual.widget.Widget.call_later",
"url":5,
"doc":"Schedule a callback to run after all messages are processed and the screen has been refreshed. Positional and keyword arguments are passed to the callable. Args: callback (Callable): A callable.",
"func":1
},
{
"ref":"textual.widget.Widget.on_event",
"url":5,
"doc":"Called to process an event. Args: event (events.Event): An Event object.",
"func":1
},
{
"ref":"textual.widget.Widget.check_idle",
"url":5,
"doc":"Prompt the message pump to call idle if the queue is empty.",
"func":1
},
{
"ref":"textual.widget.Widget.post_message_no_wait",
"url":5,
"doc":"Posts a message on the queue. Args: message (Message): A message (or Event). Returns: bool: True if the messages was processed, False if it wasn't.",
"func":1
},
{
"ref":"textual.widget.Widget.emit_no_wait",
"url":5,
"doc":"Send a message to the _parent_, non async version. Args: message (Message): A message object. Returns: bool: True if the message was posted successfully.",
"func":1
},
{
"ref":"textual.widget.Widget.emit",
"url":5,
"doc":"Send a message to the _parent_. Args: message (Message): A message object. Returns: bool: True if the message was posted successfully.",
"func":1
},
{
"ref":"textual.widget.Widget.dispatch_key",
"url":5,
"doc":"Dispatch a key event to method. This method will call the method named 'key_ ' if it exists. Args: event (events.Key): A key event. Returns: bool: True if key was handled, otherwise False.",
"func":1
},
{
"ref":"textual.messages",
"url":31,
"doc":""
},
{
"ref":"textual.messages.Update",
"url":31,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.messages.Update.sender",
"url":31,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.Update.namespace",
"url":31,
"doc":""
},
{
"ref":"textual.messages.Update.can_replace",
"url":31,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.messages.Update.bubble",
"url":31,
"doc":""
},
{
"ref":"textual.messages.Update.verbose",
"url":31,
"doc":""
},
{
"ref":"textual.messages.Update.no_dispatch",
"url":31,
"doc":""
},
{
"ref":"textual.messages.Update.handler_name",
"url":2,
"doc":"The name of the handler associated with this message."
},
{
"ref":"textual.messages.Update.prevent_default",
"url":2,
"doc":"Suppress the default action(s). This will prevent handlers in any base classes from being called. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.messages.Update.stop",
"url":2,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.messages.Update.name",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.Update.time",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.Layout",
"url":31,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.messages.Layout.sender",
"url":31,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.Layout.namespace",
"url":31,
"doc":""
},
{
"ref":"textual.messages.Layout.can_replace",
"url":31,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.messages.Layout.bubble",
"url":31,
"doc":""
},
{
"ref":"textual.messages.Layout.verbose",
"url":31,
"doc":""
},
{
"ref":"textual.messages.Layout.no_dispatch",
"url":31,
"doc":""
},
{
"ref":"textual.messages.Layout.handler_name",
"url":2,
"doc":"The name of the handler associated with this message."
},
{
"ref":"textual.messages.Layout.prevent_default",
"url":2,
"doc":"Suppress the default action(s). This will prevent handlers in any base classes from being called. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.messages.Layout.stop",
"url":2,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.messages.Layout.name",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.Layout.time",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.InvokeLater",
"url":31,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.messages.InvokeLater.sender",
"url":31,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.InvokeLater.namespace",
"url":31,
"doc":""
},
{
"ref":"textual.messages.InvokeLater.bubble",
"url":31,
"doc":""
},
{
"ref":"textual.messages.InvokeLater.verbose",
"url":31,
"doc":""
},
{
"ref":"textual.messages.InvokeLater.no_dispatch",
"url":31,
"doc":""
},
{
"ref":"textual.messages.InvokeLater.handler_name",
"url":2,
"doc":"The name of the handler associated with this message."
},
{
"ref":"textual.messages.InvokeLater.can_replace",
"url":2,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.messages.InvokeLater.prevent_default",
"url":2,
"doc":"Suppress the default action(s). This will prevent handlers in any base classes from being called. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.messages.InvokeLater.stop",
"url":2,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.messages.InvokeLater.name",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.InvokeLater.time",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.ScrollToRegion",
"url":31,
"doc":"Ask the parent to scroll a given region in to view."
},
{
"ref":"textual.messages.ScrollToRegion.sender",
"url":31,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.ScrollToRegion.namespace",
"url":31,
"doc":""
},
{
"ref":"textual.messages.ScrollToRegion.bubble",
"url":31,
"doc":""
},
{
"ref":"textual.messages.ScrollToRegion.verbose",
"url":31,
"doc":""
},
{
"ref":"textual.messages.ScrollToRegion.no_dispatch",
"url":31,
"doc":""
},
{
"ref":"textual.messages.ScrollToRegion.handler_name",
"url":2,
"doc":"The name of the handler associated with this message."
},
{
"ref":"textual.messages.ScrollToRegion.can_replace",
"url":2,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.messages.ScrollToRegion.prevent_default",
"url":2,
"doc":"Suppress the default action(s). This will prevent handlers in any base classes from being called. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.messages.ScrollToRegion.stop",
"url":2,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.messages.ScrollToRegion.name",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.ScrollToRegion.time",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.StylesUpdated",
"url":31,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.messages.StylesUpdated.sender",
"url":31,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.StylesUpdated.namespace",
"url":31,
"doc":""
},
{
"ref":"textual.messages.StylesUpdated.can_replace",
"url":31,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.messages.StylesUpdated.bubble",
"url":31,
"doc":""
},
{
"ref":"textual.messages.StylesUpdated.verbose",
"url":31,
"doc":""
},
{
"ref":"textual.messages.StylesUpdated.no_dispatch",
"url":31,
"doc":""
},
{
"ref":"textual.messages.StylesUpdated.handler_name",
"url":2,
"doc":"The name of the handler associated with this message."
},
{
"ref":"textual.messages.StylesUpdated.prevent_default",
"url":2,
"doc":"Suppress the default action(s). This will prevent handlers in any base classes from being called. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.messages.StylesUpdated.stop",
"url":2,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.messages.StylesUpdated.name",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.StylesUpdated.time",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.Prompt",
"url":31,
"doc":"Used to 'wake up' an event loop."
},
{
"ref":"textual.messages.Prompt.sender",
"url":31,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.Prompt.namespace",
"url":31,
"doc":""
},
{
"ref":"textual.messages.Prompt.can_replace",
"url":31,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.messages.Prompt.bubble",
"url":31,
"doc":""
},
{
"ref":"textual.messages.Prompt.verbose",
"url":31,
"doc":""
},
{
"ref":"textual.messages.Prompt.no_dispatch",
"url":31,
"doc":""
},
{
"ref":"textual.messages.Prompt.handler_name",
"url":2,
"doc":"The name of the handler associated with this message."
},
{
"ref":"textual.messages.Prompt.prevent_default",
"url":2,
"doc":"Suppress the default action(s). This will prevent handlers in any base classes from being called. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.messages.Prompt.stop",
"url":2,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.messages.Prompt.name",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.Prompt.time",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.TerminalSupportsSynchronizedOutput",
"url":31,
"doc":"Used to make the App aware that the terminal emulator supports synchronised output. @link https: gist.github.com/christianparpart/d8a62cc1ab659194337d73e399004036"
},
{
"ref":"textual.messages.TerminalSupportsSynchronizedOutput.sender",
"url":31,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.TerminalSupportsSynchronizedOutput.namespace",
"url":31,
"doc":""
},
{
"ref":"textual.messages.TerminalSupportsSynchronizedOutput.bubble",
"url":31,
"doc":""
},
{
"ref":"textual.messages.TerminalSupportsSynchronizedOutput.verbose",
"url":31,
"doc":""
},
{
"ref":"textual.messages.TerminalSupportsSynchronizedOutput.no_dispatch",
"url":31,
"doc":""
},
{
"ref":"textual.messages.TerminalSupportsSynchronizedOutput.handler_name",
"url":2,
"doc":"The name of the handler associated with this message."
},
{
"ref":"textual.messages.TerminalSupportsSynchronizedOutput.can_replace",
"url":2,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.messages.TerminalSupportsSynchronizedOutput.prevent_default",
"url":2,
"doc":"Suppress the default action(s). This will prevent handlers in any base classes from being called. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.messages.TerminalSupportsSynchronizedOutput.stop",
"url":2,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.messages.TerminalSupportsSynchronizedOutput.name",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.TerminalSupportsSynchronizedOutput.time",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.binding",
"url":32,
"doc":""
},
{
"ref":"textual.binding.BindingError",
"url":32,
"doc":"A binding related error."
},
{
"ref":"textual.binding.NoBinding",
"url":32,
"doc":"A binding was not found."
},
{
"ref":"textual.binding.Binding",
"url":32,
"doc":"Binding(key: 'str', action: 'str', description: 'str', show: 'bool' = True, key_display: 'str | None' = None, allow_forward: 'bool' = True)"
},
{
"ref":"textual.binding.Binding.key",
"url":32,
"doc":"Key to bind."
},
{
"ref":"textual.binding.Binding.action",
"url":32,
"doc":"Action to bind to."
},
{
"ref":"textual.binding.Binding.description",
"url":32,
"doc":"Description of action."
},
{
"ref":"textual.binding.Binding.show",
"url":32,
"doc":"Show the action in Footer, or False to hide."
},
{
"ref":"textual.binding.Binding.key_display",
"url":32,
"doc":"How the key should be shown in footer."
},
{
"ref":"textual.binding.Binding.allow_forward",
"url":32,
"doc":"Allow forwarding from app to focused widget."
},
{
"ref":"textual.binding.Bindings",
"url":32,
"doc":"Manage a set of bindings."
},
{
"ref":"textual.binding.Bindings.merge",
"url":32,
"doc":"Merge a bindings. Subsequence bound keys override initial keys. Args: bindings (Iterable[Bindings]): A number of bindings. Returns: Bindings: New bindings.",
"func":1
},
{
"ref":"textual.binding.Bindings.shown_keys",
"url":32,
"doc":""
},
{
"ref":"textual.binding.Bindings.bind",
"url":32,
"doc":"",
"func":1
},
{
"ref":"textual.binding.Bindings.get_key",
"url":32,
"doc":"",
"func":1
},
{
"ref":"textual.binding.Bindings.allow_forward",
"url":32,
"doc":"",
"func":1
},
{
"ref":"textual.box_model",
"url":33,
"doc":""
},
{
"ref":"textual.box_model.BoxModel",
"url":33,
"doc":"The result of  get_box_model ."
},
{
"ref":"textual.box_model.BoxModel.width",
"url":33,
"doc":"Alias for field number 0"
},
{
"ref":"textual.box_model.BoxModel.height",
"url":33,
"doc":"Alias for field number 1"
},
{
"ref":"textual.box_model.BoxModel.margin",
"url":33,
"doc":"Alias for field number 2"
},
{
"ref":"textual.box_model.get_box_model",
"url":33,
"doc":"Resolve the box model for this Styles. Args: styles (StylesBase): Styles object. container (Size): The size of the widget container. viewport (Size): The viewport size. get_auto_width (Callable): A callable which accepts container size and parent size and returns a width. get_auto_height (Callable): A callable which accepts container size and parent size and returns a height. Returns: BoxModel: A tuple with the size of the content area and margin.",
"func":1
},
{
"ref":"textual.draw",
"url":34,
"doc":""
},
{
"ref":"textual.draw.DrawStyle",
"url":34,
"doc":"An enumeration."
},
{
"ref":"textual.draw.DrawStyle.NONE",
"url":34,
"doc":""
},
{
"ref":"textual.draw.DrawStyle.ASCII",
"url":34,
"doc":""
},
{
"ref":"textual.draw.DrawStyle.SQUARE",
"url":34,
"doc":""
},
{
"ref":"textual.draw.DrawStyle.HEAVY",
"url":34,
"doc":""
},
{
"ref":"textual.draw.DrawStyle.ROUNDED",
"url":34,
"doc":""
},
{
"ref":"textual.draw.DrawStyle.DOUBLE",
"url":34,
"doc":""
},
{
"ref":"textual.events",
"url":35,
"doc":""
},
{
"ref":"textual.events.Event",
"url":35,
"doc":"The base class for all events."
},
{
"ref":"textual.events.Event.sender",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Event.namespace",
"url":35,
"doc":""
},
{
"ref":"textual.events.Event.bubble",
"url":35,
"doc":""
},
{
"ref":"textual.events.Event.verbose",
"url":35,
"doc":""
},
{
"ref":"textual.events.Event.no_dispatch",
"url":35,
"doc":""
},
{
"ref":"textual.events.Event.handler_name",
"url":2,
"doc":"The name of the handler associated with this message."
},
{
"ref":"textual.events.Event.can_replace",
"url":2,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Event.prevent_default",
"url":2,
"doc":"Suppress the default action(s). This will prevent handlers in any base classes from being called. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Event.stop",
"url":2,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Event.name",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Event.time",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Callback",
"url":35,
"doc":"The base class for all events."
},
{
"ref":"textual.events.Callback.sender",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Callback.namespace",
"url":35,
"doc":""
},
{
"ref":"textual.events.Callback.bubble",
"url":35,
"doc":""
},
{
"ref":"textual.events.Callback.verbose",
"url":35,
"doc":""
},
{
"ref":"textual.events.Callback.no_dispatch",
"url":35,
"doc":""
},
{
"ref":"textual.events.Callback.handler_name",
"url":2,
"doc":"The name of the handler associated with this message."
},
{
"ref":"textual.events.Callback.can_replace",
"url":2,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Callback.prevent_default",
"url":2,
"doc":"Suppress the default action(s). This will prevent handlers in any base classes from being called. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Callback.stop",
"url":2,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Callback.name",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Callback.time",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.InvokeCallbacks",
"url":35,
"doc":"Sent after the Screen is updated"
},
{
"ref":"textual.events.InvokeCallbacks.sender",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.InvokeCallbacks.namespace",
"url":35,
"doc":""
},
{
"ref":"textual.events.InvokeCallbacks.bubble",
"url":35,
"doc":""
},
{
"ref":"textual.events.InvokeCallbacks.verbose",
"url":35,
"doc":""
},
{
"ref":"textual.events.InvokeCallbacks.no_dispatch",
"url":35,
"doc":""
},
{
"ref":"textual.events.InvokeCallbacks.handler_name",
"url":2,
"doc":"The name of the handler associated with this message."
},
{
"ref":"textual.events.InvokeCallbacks.can_replace",
"url":2,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.InvokeCallbacks.prevent_default",
"url":2,
"doc":"Suppress the default action(s). This will prevent handlers in any base classes from being called. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.InvokeCallbacks.stop",
"url":2,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.InvokeCallbacks.name",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.InvokeCallbacks.time",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.ShutdownRequest",
"url":35,
"doc":"The base class for all events."
},
{
"ref":"textual.events.ShutdownRequest.sender",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.ShutdownRequest.namespace",
"url":35,
"doc":""
},
{
"ref":"textual.events.ShutdownRequest.bubble",
"url":35,
"doc":""
},
{
"ref":"textual.events.ShutdownRequest.verbose",
"url":35,
"doc":""
},
{
"ref":"textual.events.ShutdownRequest.no_dispatch",
"url":35,
"doc":""
},
{
"ref":"textual.events.ShutdownRequest.handler_name",
"url":2,
"doc":"The name of the handler associated with this message."
},
{
"ref":"textual.events.ShutdownRequest.can_replace",
"url":2,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.ShutdownRequest.prevent_default",
"url":2,
"doc":"Suppress the default action(s). This will prevent handlers in any base classes from being called. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.ShutdownRequest.stop",
"url":2,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.ShutdownRequest.name",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.ShutdownRequest.time",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Shutdown",
"url":35,
"doc":"The base class for all events."
},
{
"ref":"textual.events.Shutdown.sender",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Shutdown.namespace",
"url":35,
"doc":""
},
{
"ref":"textual.events.Shutdown.bubble",
"url":35,
"doc":""
},
{
"ref":"textual.events.Shutdown.verbose",
"url":35,
"doc":""
},
{
"ref":"textual.events.Shutdown.no_dispatch",
"url":35,
"doc":""
},
{
"ref":"textual.events.Shutdown.handler_name",
"url":2,
"doc":"The name of the handler associated with this message."
},
{
"ref":"textual.events.Shutdown.can_replace",
"url":2,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Shutdown.prevent_default",
"url":2,
"doc":"Suppress the default action(s). This will prevent handlers in any base classes from being called. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Shutdown.stop",
"url":2,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Shutdown.name",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Shutdown.time",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Load",
"url":35,
"doc":"Sent when the App is running but  before the terminal is in application mode. Use this event to run any set up that doesn't require any visuals such as loading configuration and binding keys."
},
{
"ref":"textual.events.Load.sender",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Load.namespace",
"url":35,
"doc":""
},
{
"ref":"textual.events.Load.bubble",
"url":35,
"doc":""
},
{
"ref":"textual.events.Load.verbose",
"url":35,
"doc":""
},
{
"ref":"textual.events.Load.no_dispatch",
"url":35,
"doc":""
},
{
"ref":"textual.events.Load.handler_name",
"url":2,
"doc":"The name of the handler associated with this message."
},
{
"ref":"textual.events.Load.can_replace",
"url":2,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Load.prevent_default",
"url":2,
"doc":"Suppress the default action(s). This will prevent handlers in any base classes from being called. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Load.stop",
"url":2,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Load.name",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Load.time",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Idle",
"url":35,
"doc":"Sent when there are no more items in the message queue. This is a pseudo-event in that it is created by the Textual system and doesn't go through the usual message queue."
},
{
"ref":"textual.events.Idle.sender",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Idle.namespace",
"url":35,
"doc":""
},
{
"ref":"textual.events.Idle.bubble",
"url":35,
"doc":""
},
{
"ref":"textual.events.Idle.verbose",
"url":35,
"doc":""
},
{
"ref":"textual.events.Idle.no_dispatch",
"url":35,
"doc":""
},
{
"ref":"textual.events.Idle.handler_name",
"url":2,
"doc":"The name of the handler associated with this message."
},
{
"ref":"textual.events.Idle.can_replace",
"url":2,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Idle.prevent_default",
"url":2,
"doc":"Suppress the default action(s). This will prevent handlers in any base classes from being called. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Idle.stop",
"url":2,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Idle.name",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Idle.time",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Action",
"url":35,
"doc":"The base class for all events."
},
{
"ref":"textual.events.Action.sender",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Action.namespace",
"url":35,
"doc":""
},
{
"ref":"textual.events.Action.action",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Action.bubble",
"url":35,
"doc":""
},
{
"ref":"textual.events.Action.verbose",
"url":35,
"doc":""
},
{
"ref":"textual.events.Action.no_dispatch",
"url":35,
"doc":""
},
{
"ref":"textual.events.Action.handler_name",
"url":2,
"doc":"The name of the handler associated with this message."
},
{
"ref":"textual.events.Action.can_replace",
"url":2,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Action.prevent_default",
"url":2,
"doc":"Suppress the default action(s). This will prevent handlers in any base classes from being called. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Action.stop",
"url":2,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Action.name",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Action.time",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Resize",
"url":35,
"doc":"Sent when the app or widget has been resized. Args: sender (MessageTarget): The sender of the event (the Screen). size (Size): The new size of the Widget. virtual_size (Size): The virtual size (scrollable size) of the Widget. container_size (Size | None, optional): The size of the Widget's container widget. Defaults to None."
},
{
"ref":"textual.events.Resize.sender",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Resize.namespace",
"url":35,
"doc":""
},
{
"ref":"textual.events.Resize.can_replace",
"url":35,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Resize.container_size",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Resize.size",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Resize.virtual_size",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Resize.bubble",
"url":35,
"doc":""
},
{
"ref":"textual.events.Resize.verbose",
"url":35,
"doc":""
},
{
"ref":"textual.events.Resize.no_dispatch",
"url":35,
"doc":""
},
{
"ref":"textual.events.Resize.handler_name",
"url":2,
"doc":"The name of the handler associated with this message."
},
{
"ref":"textual.events.Resize.prevent_default",
"url":2,
"doc":"Suppress the default action(s). This will prevent handlers in any base classes from being called. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Resize.stop",
"url":2,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Resize.name",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Resize.time",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Compose",
"url":35,
"doc":"Sent to a widget to request it to compose and mount children."
},
{
"ref":"textual.events.Compose.sender",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Compose.namespace",
"url":35,
"doc":""
},
{
"ref":"textual.events.Compose.bubble",
"url":35,
"doc":""
},
{
"ref":"textual.events.Compose.verbose",
"url":35,
"doc":""
},
{
"ref":"textual.events.Compose.no_dispatch",
"url":35,
"doc":""
},
{
"ref":"textual.events.Compose.handler_name",
"url":2,
"doc":"The name of the handler associated with this message."
},
{
"ref":"textual.events.Compose.can_replace",
"url":2,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Compose.prevent_default",
"url":2,
"doc":"Suppress the default action(s). This will prevent handlers in any base classes from being called. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Compose.stop",
"url":2,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Compose.name",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Compose.time",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Mount",
"url":35,
"doc":"Sent when a widget is  mounted and may receive messages."
},
{
"ref":"textual.events.Mount.sender",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Mount.namespace",
"url":35,
"doc":""
},
{
"ref":"textual.events.Mount.bubble",
"url":35,
"doc":""
},
{
"ref":"textual.events.Mount.verbose",
"url":35,
"doc":""
},
{
"ref":"textual.events.Mount.no_dispatch",
"url":35,
"doc":""
},
{
"ref":"textual.events.Mount.handler_name",
"url":2,
"doc":"The name of the handler associated with this message."
},
{
"ref":"textual.events.Mount.can_replace",
"url":2,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Mount.prevent_default",
"url":2,
"doc":"Suppress the default action(s). This will prevent handlers in any base classes from being called. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Mount.stop",
"url":2,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Mount.name",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Mount.time",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Remove",
"url":35,
"doc":"Sent to a widget to ask it to remove itself from the DOM."
},
{
"ref":"textual.events.Remove.sender",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Remove.namespace",
"url":35,
"doc":""
},
{
"ref":"textual.events.Remove.bubble",
"url":35,
"doc":""
},
{
"ref":"textual.events.Remove.verbose",
"url":35,
"doc":""
},
{
"ref":"textual.events.Remove.no_dispatch",
"url":35,
"doc":""
},
{
"ref":"textual.events.Remove.handler_name",
"url":2,
"doc":"The name of the handler associated with this message."
},
{
"ref":"textual.events.Remove.can_replace",
"url":2,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Remove.prevent_default",
"url":2,
"doc":"Suppress the default action(s). This will prevent handlers in any base classes from being called. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Remove.stop",
"url":2,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Remove.name",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Remove.time",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Show",
"url":35,
"doc":"Sent when a widget has become visible."
},
{
"ref":"textual.events.Show.sender",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Show.namespace",
"url":35,
"doc":""
},
{
"ref":"textual.events.Show.bubble",
"url":35,
"doc":""
},
{
"ref":"textual.events.Show.verbose",
"url":35,
"doc":""
},
{
"ref":"textual.events.Show.no_dispatch",
"url":35,
"doc":""
},
{
"ref":"textual.events.Show.handler_name",
"url":2,
"doc":"The name of the handler associated with this message."
},
{
"ref":"textual.events.Show.can_replace",
"url":2,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Show.prevent_default",
"url":2,
"doc":"Suppress the default action(s). This will prevent handlers in any base classes from being called. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Show.stop",
"url":2,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Show.name",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Show.time",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Hide",
"url":35,
"doc":"Sent when a widget has been hidden. A widget may be hidden by setting its  visible flag to  False , if it is no longer in a layout, or if it has been offset beyond the edges of the terminal."
},
{
"ref":"textual.events.Hide.sender",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Hide.namespace",
"url":35,
"doc":""
},
{
"ref":"textual.events.Hide.bubble",
"url":35,
"doc":""
},
{
"ref":"textual.events.Hide.verbose",
"url":35,
"doc":""
},
{
"ref":"textual.events.Hide.no_dispatch",
"url":35,
"doc":""
},
{
"ref":"textual.events.Hide.handler_name",
"url":2,
"doc":"The name of the handler associated with this message."
},
{
"ref":"textual.events.Hide.can_replace",
"url":2,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Hide.prevent_default",
"url":2,
"doc":"Suppress the default action(s). This will prevent handlers in any base classes from being called. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Hide.stop",
"url":2,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Hide.name",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Hide.time",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseCapture",
"url":35,
"doc":"Sent when the mouse has been captured. When a mouse has been captures, all further mouse events will be sent to the capturing widget. Args: sender (MessageTarget): The sender of the event, (in this case the app). mouse_position (Point): The position of the mouse when captured."
},
{
"ref":"textual.events.MouseCapture.sender",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseCapture.namespace",
"url":35,
"doc":""
},
{
"ref":"textual.events.MouseCapture.bubble",
"url":35,
"doc":""
},
{
"ref":"textual.events.MouseCapture.verbose",
"url":35,
"doc":""
},
{
"ref":"textual.events.MouseCapture.no_dispatch",
"url":35,
"doc":""
},
{
"ref":"textual.events.MouseCapture.handler_name",
"url":2,
"doc":"The name of the handler associated with this message."
},
{
"ref":"textual.events.MouseCapture.can_replace",
"url":2,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.MouseCapture.prevent_default",
"url":2,
"doc":"Suppress the default action(s). This will prevent handlers in any base classes from being called. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseCapture.stop",
"url":2,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseCapture.name",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseCapture.time",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseRelease",
"url":35,
"doc":"Mouse has been released. Args: sender (MessageTarget): The sender of the event, (in this case the app). mouse_position (Point): The position of the mouse when released."
},
{
"ref":"textual.events.MouseRelease.sender",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseRelease.namespace",
"url":35,
"doc":""
},
{
"ref":"textual.events.MouseRelease.bubble",
"url":35,
"doc":""
},
{
"ref":"textual.events.MouseRelease.verbose",
"url":35,
"doc":""
},
{
"ref":"textual.events.MouseRelease.no_dispatch",
"url":35,
"doc":""
},
{
"ref":"textual.events.MouseRelease.handler_name",
"url":2,
"doc":"The name of the handler associated with this message."
},
{
"ref":"textual.events.MouseRelease.can_replace",
"url":2,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.MouseRelease.prevent_default",
"url":2,
"doc":"Suppress the default action(s). This will prevent handlers in any base classes from being called. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseRelease.stop",
"url":2,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseRelease.name",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseRelease.time",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.InputEvent",
"url":35,
"doc":"The base class for all events."
},
{
"ref":"textual.events.InputEvent.sender",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.InputEvent.namespace",
"url":35,
"doc":""
},
{
"ref":"textual.events.InputEvent.bubble",
"url":35,
"doc":""
},
{
"ref":"textual.events.InputEvent.verbose",
"url":35,
"doc":""
},
{
"ref":"textual.events.InputEvent.no_dispatch",
"url":35,
"doc":""
},
{
"ref":"textual.events.InputEvent.handler_name",
"url":2,
"doc":"The name of the handler associated with this message."
},
{
"ref":"textual.events.InputEvent.can_replace",
"url":2,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.InputEvent.prevent_default",
"url":2,
"doc":"Suppress the default action(s). This will prevent handlers in any base classes from being called. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.InputEvent.stop",
"url":2,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.InputEvent.name",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.InputEvent.time",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Key",
"url":35,
"doc":"Sent when the user hits a key on the keyboard. Args: sender (MessageTarget): The sender of the event (the App). key (str): A key name (textual.keys.Keys). char (str | None, optional): A printable character or None if it is not printable."
},
{
"ref":"textual.events.Key.sender",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Key.namespace",
"url":35,
"doc":""
},
{
"ref":"textual.events.Key.key_name",
"url":35,
"doc":"Name of a key suitable for use as a Python identifier."
},
{
"ref":"textual.events.Key.is_printable",
"url":35,
"doc":"Return True if the key is printable. Currently, we assume any key event that isn't defined in key bindings is printable. Returns: bool: True if the key is printable."
},
{
"ref":"textual.events.Key.char",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Key.key",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Key.bubble",
"url":35,
"doc":""
},
{
"ref":"textual.events.Key.verbose",
"url":35,
"doc":""
},
{
"ref":"textual.events.Key.no_dispatch",
"url":35,
"doc":""
},
{
"ref":"textual.events.Key.handler_name",
"url":2,
"doc":"The name of the handler associated with this message."
},
{
"ref":"textual.events.Key.can_replace",
"url":2,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Key.prevent_default",
"url":2,
"doc":"Suppress the default action(s). This will prevent handlers in any base classes from being called. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Key.stop",
"url":2,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Key.name",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Key.time",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent",
"url":35,
"doc":"Sent in response to a mouse event. Args: sender (MessageTarget): The sender of the event. x (int): The relative x coordinate. y (int): The relative y coordinate. delta_x (int): Change in x since the last message. delta_y (int): Change in y since the last message. button (int): Indexed of the pressed button. shift (bool): True if the shift key is pressed. meta (bool): True if the meta key is pressed. ctrl (bool): True if the ctrl key is pressed. screen_x (int, optional): The absolute x coordinate. screen_y (int, optional): The absolute y coordinate. style (Style, optional): The Rich Style under the mouse cursor."
},
{
"ref":"textual.events.MouseEvent.sender",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent.namespace",
"url":35,
"doc":""
},
{
"ref":"textual.events.MouseEvent.from_event",
"url":35,
"doc":"",
"func":1
},
{
"ref":"textual.events.MouseEvent.offset",
"url":35,
"doc":"The mouse coordinate as an offset. Returns: Offset: Mouse coordinate."
},
{
"ref":"textual.events.MouseEvent.screen_offset",
"url":35,
"doc":"Mouse coordinate relative to the screen. Returns: Offset: Mouse coordinate."
},
{
"ref":"textual.events.MouseEvent.delta",
"url":35,
"doc":"Mouse coordinate delta (change since last event). Returns: Offset: Mouse coordinate."
},
{
"ref":"textual.events.MouseEvent.style",
"url":35,
"doc":"The (Rich) Style under the cursor."
},
{
"ref":"textual.events.MouseEvent.get_content_offset",
"url":35,
"doc":"Get offset within a widget's content area, or None if offset is not in content (i.e. padding or border). Args: widget (Widget): Widget receiving the event. Returns: Offset | None: An offset where the origin is at the top left of the content area.",
"func":1
},
{
"ref":"textual.events.MouseEvent.button",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent.ctrl",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent.delta_x",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent.delta_y",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent.meta",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent.screen_x",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent.screen_y",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent.shift",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent.x",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent.y",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent.bubble",
"url":35,
"doc":""
},
{
"ref":"textual.events.MouseEvent.verbose",
"url":35,
"doc":""
},
{
"ref":"textual.events.MouseEvent.no_dispatch",
"url":35,
"doc":""
},
{
"ref":"textual.events.MouseEvent.handler_name",
"url":2,
"doc":"The name of the handler associated with this message."
},
{
"ref":"textual.events.MouseEvent.can_replace",
"url":2,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.MouseEvent.prevent_default",
"url":2,
"doc":"Suppress the default action(s). This will prevent handlers in any base classes from being called. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseEvent.stop",
"url":2,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseEvent.name",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent.time",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove",
"url":35,
"doc":"Sent when the mouse cursor moves."
},
{
"ref":"textual.events.MouseMove.sender",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove.namespace",
"url":35,
"doc":""
},
{
"ref":"textual.events.MouseMove.bubble",
"url":35,
"doc":""
},
{
"ref":"textual.events.MouseMove.verbose",
"url":35,
"doc":""
},
{
"ref":"textual.events.MouseMove.no_dispatch",
"url":35,
"doc":""
},
{
"ref":"textual.events.MouseMove.offset",
"url":35,
"doc":"The mouse coordinate as an offset. Returns: Offset: Mouse coordinate."
},
{
"ref":"textual.events.MouseMove.screen_offset",
"url":35,
"doc":"Mouse coordinate relative to the screen. Returns: Offset: Mouse coordinate."
},
{
"ref":"textual.events.MouseMove.delta",
"url":35,
"doc":"Mouse coordinate delta (change since last event). Returns: Offset: Mouse coordinate."
},
{
"ref":"textual.events.MouseMove.style",
"url":35,
"doc":"The (Rich) Style under the cursor."
},
{
"ref":"textual.events.MouseMove.get_content_offset",
"url":35,
"doc":"Get offset within a widget's content area, or None if offset is not in content (i.e. padding or border). Args: widget (Widget): Widget receiving the event. Returns: Offset | None: An offset where the origin is at the top left of the content area.",
"func":1
},
{
"ref":"textual.events.MouseMove.button",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove.ctrl",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove.delta_x",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove.delta_y",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove.meta",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove.screen_x",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove.screen_y",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove.shift",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove.x",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove.y",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove.handler_name",
"url":2,
"doc":"The name of the handler associated with this message."
},
{
"ref":"textual.events.MouseMove.can_replace",
"url":2,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.MouseMove.prevent_default",
"url":2,
"doc":"Suppress the default action(s). This will prevent handlers in any base classes from being called. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseMove.stop",
"url":2,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseMove.name",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove.time",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown",
"url":35,
"doc":"Sent in response to a mouse event. Args: sender (MessageTarget): The sender of the event. x (int): The relative x coordinate. y (int): The relative y coordinate. delta_x (int): Change in x since the last message. delta_y (int): Change in y since the last message. button (int): Indexed of the pressed button. shift (bool): True if the shift key is pressed. meta (bool): True if the meta key is pressed. ctrl (bool): True if the ctrl key is pressed. screen_x (int, optional): The absolute x coordinate. screen_y (int, optional): The absolute y coordinate. style (Style, optional): The Rich Style under the mouse cursor."
},
{
"ref":"textual.events.MouseDown.sender",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown.namespace",
"url":35,
"doc":""
},
{
"ref":"textual.events.MouseDown.bubble",
"url":35,
"doc":""
},
{
"ref":"textual.events.MouseDown.verbose",
"url":35,
"doc":""
},
{
"ref":"textual.events.MouseDown.no_dispatch",
"url":35,
"doc":""
},
{
"ref":"textual.events.MouseDown.offset",
"url":35,
"doc":"The mouse coordinate as an offset. Returns: Offset: Mouse coordinate."
},
{
"ref":"textual.events.MouseDown.screen_offset",
"url":35,
"doc":"Mouse coordinate relative to the screen. Returns: Offset: Mouse coordinate."
},
{
"ref":"textual.events.MouseDown.delta",
"url":35,
"doc":"Mouse coordinate delta (change since last event). Returns: Offset: Mouse coordinate."
},
{
"ref":"textual.events.MouseDown.style",
"url":35,
"doc":"The (Rich) Style under the cursor."
},
{
"ref":"textual.events.MouseDown.get_content_offset",
"url":35,
"doc":"Get offset within a widget's content area, or None if offset is not in content (i.e. padding or border). Args: widget (Widget): Widget receiving the event. Returns: Offset | None: An offset where the origin is at the top left of the content area.",
"func":1
},
{
"ref":"textual.events.MouseDown.button",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown.ctrl",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown.delta_x",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown.delta_y",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown.meta",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown.screen_x",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown.screen_y",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown.shift",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown.x",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown.y",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown.handler_name",
"url":2,
"doc":"The name of the handler associated with this message."
},
{
"ref":"textual.events.MouseDown.can_replace",
"url":2,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.MouseDown.prevent_default",
"url":2,
"doc":"Suppress the default action(s). This will prevent handlers in any base classes from being called. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseDown.stop",
"url":2,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseDown.name",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown.time",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp",
"url":35,
"doc":"Sent in response to a mouse event. Args: sender (MessageTarget): The sender of the event. x (int): The relative x coordinate. y (int): The relative y coordinate. delta_x (int): Change in x since the last message. delta_y (int): Change in y since the last message. button (int): Indexed of the pressed button. shift (bool): True if the shift key is pressed. meta (bool): True if the meta key is pressed. ctrl (bool): True if the ctrl key is pressed. screen_x (int, optional): The absolute x coordinate. screen_y (int, optional): The absolute y coordinate. style (Style, optional): The Rich Style under the mouse cursor."
},
{
"ref":"textual.events.MouseUp.sender",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp.namespace",
"url":35,
"doc":""
},
{
"ref":"textual.events.MouseUp.bubble",
"url":35,
"doc":""
},
{
"ref":"textual.events.MouseUp.verbose",
"url":35,
"doc":""
},
{
"ref":"textual.events.MouseUp.no_dispatch",
"url":35,
"doc":""
},
{
"ref":"textual.events.MouseUp.offset",
"url":35,
"doc":"The mouse coordinate as an offset. Returns: Offset: Mouse coordinate."
},
{
"ref":"textual.events.MouseUp.screen_offset",
"url":35,
"doc":"Mouse coordinate relative to the screen. Returns: Offset: Mouse coordinate."
},
{
"ref":"textual.events.MouseUp.delta",
"url":35,
"doc":"Mouse coordinate delta (change since last event). Returns: Offset: Mouse coordinate."
},
{
"ref":"textual.events.MouseUp.style",
"url":35,
"doc":"The (Rich) Style under the cursor."
},
{
"ref":"textual.events.MouseUp.get_content_offset",
"url":35,
"doc":"Get offset within a widget's content area, or None if offset is not in content (i.e. padding or border). Args: widget (Widget): Widget receiving the event. Returns: Offset | None: An offset where the origin is at the top left of the content area.",
"func":1
},
{
"ref":"textual.events.MouseUp.button",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp.ctrl",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp.delta_x",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp.delta_y",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp.meta",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp.screen_x",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp.screen_y",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp.shift",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp.x",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp.y",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp.handler_name",
"url":2,
"doc":"The name of the handler associated with this message."
},
{
"ref":"textual.events.MouseUp.can_replace",
"url":2,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.MouseUp.prevent_default",
"url":2,
"doc":"Suppress the default action(s). This will prevent handlers in any base classes from being called. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseUp.stop",
"url":2,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseUp.name",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp.time",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseScrollDown",
"url":35,
"doc":"The base class for all events."
},
{
"ref":"textual.events.MouseScrollDown.sender",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseScrollDown.namespace",
"url":35,
"doc":""
},
{
"ref":"textual.events.MouseScrollDown.x",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseScrollDown.y",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseScrollDown.bubble",
"url":35,
"doc":""
},
{
"ref":"textual.events.MouseScrollDown.verbose",
"url":35,
"doc":""
},
{
"ref":"textual.events.MouseScrollDown.no_dispatch",
"url":35,
"doc":""
},
{
"ref":"textual.events.MouseScrollDown.handler_name",
"url":2,
"doc":"The name of the handler associated with this message."
},
{
"ref":"textual.events.MouseScrollDown.can_replace",
"url":2,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.MouseScrollDown.prevent_default",
"url":2,
"doc":"Suppress the default action(s). This will prevent handlers in any base classes from being called. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseScrollDown.stop",
"url":2,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseScrollDown.name",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseScrollDown.time",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseScrollUp",
"url":35,
"doc":"The base class for all events."
},
{
"ref":"textual.events.MouseScrollUp.sender",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseScrollUp.namespace",
"url":35,
"doc":""
},
{
"ref":"textual.events.MouseScrollUp.x",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseScrollUp.y",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseScrollUp.bubble",
"url":35,
"doc":""
},
{
"ref":"textual.events.MouseScrollUp.verbose",
"url":35,
"doc":""
},
{
"ref":"textual.events.MouseScrollUp.no_dispatch",
"url":35,
"doc":""
},
{
"ref":"textual.events.MouseScrollUp.handler_name",
"url":2,
"doc":"The name of the handler associated with this message."
},
{
"ref":"textual.events.MouseScrollUp.can_replace",
"url":2,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.MouseScrollUp.prevent_default",
"url":2,
"doc":"Suppress the default action(s). This will prevent handlers in any base classes from being called. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseScrollUp.stop",
"url":2,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseScrollUp.name",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseScrollUp.time",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click",
"url":35,
"doc":"Sent in response to a mouse event. Args: sender (MessageTarget): The sender of the event. x (int): The relative x coordinate. y (int): The relative y coordinate. delta_x (int): Change in x since the last message. delta_y (int): Change in y since the last message. button (int): Indexed of the pressed button. shift (bool): True if the shift key is pressed. meta (bool): True if the meta key is pressed. ctrl (bool): True if the ctrl key is pressed. screen_x (int, optional): The absolute x coordinate. screen_y (int, optional): The absolute y coordinate. style (Style, optional): The Rich Style under the mouse cursor."
},
{
"ref":"textual.events.Click.sender",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click.namespace",
"url":35,
"doc":""
},
{
"ref":"textual.events.Click.bubble",
"url":35,
"doc":""
},
{
"ref":"textual.events.Click.verbose",
"url":35,
"doc":""
},
{
"ref":"textual.events.Click.no_dispatch",
"url":35,
"doc":""
},
{
"ref":"textual.events.Click.offset",
"url":35,
"doc":"The mouse coordinate as an offset. Returns: Offset: Mouse coordinate."
},
{
"ref":"textual.events.Click.screen_offset",
"url":35,
"doc":"Mouse coordinate relative to the screen. Returns: Offset: Mouse coordinate."
},
{
"ref":"textual.events.Click.delta",
"url":35,
"doc":"Mouse coordinate delta (change since last event). Returns: Offset: Mouse coordinate."
},
{
"ref":"textual.events.Click.style",
"url":35,
"doc":"The (Rich) Style under the cursor."
},
{
"ref":"textual.events.Click.get_content_offset",
"url":35,
"doc":"Get offset within a widget's content area, or None if offset is not in content (i.e. padding or border). Args: widget (Widget): Widget receiving the event. Returns: Offset | None: An offset where the origin is at the top left of the content area.",
"func":1
},
{
"ref":"textual.events.Click.button",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click.ctrl",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click.delta_x",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click.delta_y",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click.meta",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click.screen_x",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click.screen_y",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click.shift",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click.x",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click.y",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click.handler_name",
"url":2,
"doc":"The name of the handler associated with this message."
},
{
"ref":"textual.events.Click.can_replace",
"url":2,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Click.prevent_default",
"url":2,
"doc":"Suppress the default action(s). This will prevent handlers in any base classes from being called. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Click.stop",
"url":2,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Click.name",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click.time",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Timer",
"url":35,
"doc":"The base class for all events."
},
{
"ref":"textual.events.Timer.sender",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Timer.namespace",
"url":35,
"doc":""
},
{
"ref":"textual.events.Timer.callback",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Timer.count",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Timer.time",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Timer.bubble",
"url":35,
"doc":""
},
{
"ref":"textual.events.Timer.verbose",
"url":35,
"doc":""
},
{
"ref":"textual.events.Timer.no_dispatch",
"url":35,
"doc":""
},
{
"ref":"textual.events.Timer.handler_name",
"url":2,
"doc":"The name of the handler associated with this message."
},
{
"ref":"textual.events.Timer.can_replace",
"url":2,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Timer.prevent_default",
"url":2,
"doc":"Suppress the default action(s). This will prevent handlers in any base classes from being called. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Timer.stop",
"url":2,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Timer.name",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Enter",
"url":35,
"doc":"The base class for all events."
},
{
"ref":"textual.events.Enter.sender",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Enter.namespace",
"url":35,
"doc":""
},
{
"ref":"textual.events.Enter.bubble",
"url":35,
"doc":""
},
{
"ref":"textual.events.Enter.verbose",
"url":35,
"doc":""
},
{
"ref":"textual.events.Enter.no_dispatch",
"url":35,
"doc":""
},
{
"ref":"textual.events.Enter.handler_name",
"url":2,
"doc":"The name of the handler associated with this message."
},
{
"ref":"textual.events.Enter.can_replace",
"url":2,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Enter.prevent_default",
"url":2,
"doc":"Suppress the default action(s). This will prevent handlers in any base classes from being called. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Enter.stop",
"url":2,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Enter.name",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Enter.time",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Leave",
"url":35,
"doc":"The base class for all events."
},
{
"ref":"textual.events.Leave.sender",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Leave.namespace",
"url":35,
"doc":""
},
{
"ref":"textual.events.Leave.bubble",
"url":35,
"doc":""
},
{
"ref":"textual.events.Leave.verbose",
"url":35,
"doc":""
},
{
"ref":"textual.events.Leave.no_dispatch",
"url":35,
"doc":""
},
{
"ref":"textual.events.Leave.handler_name",
"url":2,
"doc":"The name of the handler associated with this message."
},
{
"ref":"textual.events.Leave.can_replace",
"url":2,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Leave.prevent_default",
"url":2,
"doc":"Suppress the default action(s). This will prevent handlers in any base classes from being called. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Leave.stop",
"url":2,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Leave.name",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Leave.time",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Focus",
"url":35,
"doc":"The base class for all events."
},
{
"ref":"textual.events.Focus.sender",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Focus.namespace",
"url":35,
"doc":""
},
{
"ref":"textual.events.Focus.bubble",
"url":35,
"doc":""
},
{
"ref":"textual.events.Focus.verbose",
"url":35,
"doc":""
},
{
"ref":"textual.events.Focus.no_dispatch",
"url":35,
"doc":""
},
{
"ref":"textual.events.Focus.handler_name",
"url":2,
"doc":"The name of the handler associated with this message."
},
{
"ref":"textual.events.Focus.can_replace",
"url":2,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Focus.prevent_default",
"url":2,
"doc":"Suppress the default action(s). This will prevent handlers in any base classes from being called. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Focus.stop",
"url":2,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Focus.name",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Focus.time",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Blur",
"url":35,
"doc":"The base class for all events."
},
{
"ref":"textual.events.Blur.sender",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Blur.namespace",
"url":35,
"doc":""
},
{
"ref":"textual.events.Blur.bubble",
"url":35,
"doc":""
},
{
"ref":"textual.events.Blur.verbose",
"url":35,
"doc":""
},
{
"ref":"textual.events.Blur.no_dispatch",
"url":35,
"doc":""
},
{
"ref":"textual.events.Blur.handler_name",
"url":2,
"doc":"The name of the handler associated with this message."
},
{
"ref":"textual.events.Blur.can_replace",
"url":2,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Blur.prevent_default",
"url":2,
"doc":"Suppress the default action(s). This will prevent handlers in any base classes from being called. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Blur.stop",
"url":2,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Blur.name",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Blur.time",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DescendantFocus",
"url":35,
"doc":"The base class for all events."
},
{
"ref":"textual.events.DescendantFocus.sender",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DescendantFocus.namespace",
"url":35,
"doc":""
},
{
"ref":"textual.events.DescendantFocus.bubble",
"url":35,
"doc":""
},
{
"ref":"textual.events.DescendantFocus.verbose",
"url":35,
"doc":""
},
{
"ref":"textual.events.DescendantFocus.no_dispatch",
"url":35,
"doc":""
},
{
"ref":"textual.events.DescendantFocus.handler_name",
"url":2,
"doc":"The name of the handler associated with this message."
},
{
"ref":"textual.events.DescendantFocus.can_replace",
"url":2,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.DescendantFocus.prevent_default",
"url":2,
"doc":"Suppress the default action(s). This will prevent handlers in any base classes from being called. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.DescendantFocus.stop",
"url":2,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.DescendantFocus.name",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DescendantFocus.time",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DescendantBlur",
"url":35,
"doc":"The base class for all events."
},
{
"ref":"textual.events.DescendantBlur.sender",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DescendantBlur.namespace",
"url":35,
"doc":""
},
{
"ref":"textual.events.DescendantBlur.bubble",
"url":35,
"doc":""
},
{
"ref":"textual.events.DescendantBlur.verbose",
"url":35,
"doc":""
},
{
"ref":"textual.events.DescendantBlur.no_dispatch",
"url":35,
"doc":""
},
{
"ref":"textual.events.DescendantBlur.handler_name",
"url":2,
"doc":"The name of the handler associated with this message."
},
{
"ref":"textual.events.DescendantBlur.can_replace",
"url":2,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.DescendantBlur.prevent_default",
"url":2,
"doc":"Suppress the default action(s). This will prevent handlers in any base classes from being called. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.DescendantBlur.stop",
"url":2,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.DescendantBlur.name",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DescendantBlur.time",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Paste",
"url":35,
"doc":"Event containing text that was pasted into the Textual application. This event will only appear when running in a terminal emulator that supports bracketed paste mode. Textual will enable bracketed pastes when an app starts, and disable it when the app shuts down. Args: sender (MessageTarget): The sender of the event, (in this case the app). text: The text that has been pasted."
},
{
"ref":"textual.events.Paste.sender",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Paste.namespace",
"url":35,
"doc":""
},
{
"ref":"textual.events.Paste.bubble",
"url":35,
"doc":""
},
{
"ref":"textual.events.Paste.verbose",
"url":35,
"doc":""
},
{
"ref":"textual.events.Paste.no_dispatch",
"url":35,
"doc":""
},
{
"ref":"textual.events.Paste.handler_name",
"url":2,
"doc":"The name of the handler associated with this message."
},
{
"ref":"textual.events.Paste.can_replace",
"url":2,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Paste.prevent_default",
"url":2,
"doc":"Suppress the default action(s). This will prevent handlers in any base classes from being called. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Paste.stop",
"url":2,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Paste.name",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Paste.time",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.ScreenResume",
"url":35,
"doc":"The base class for all events."
},
{
"ref":"textual.events.ScreenResume.sender",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.ScreenResume.namespace",
"url":35,
"doc":""
},
{
"ref":"textual.events.ScreenResume.bubble",
"url":35,
"doc":""
},
{
"ref":"textual.events.ScreenResume.verbose",
"url":35,
"doc":""
},
{
"ref":"textual.events.ScreenResume.no_dispatch",
"url":35,
"doc":""
},
{
"ref":"textual.events.ScreenResume.handler_name",
"url":2,
"doc":"The name of the handler associated with this message."
},
{
"ref":"textual.events.ScreenResume.can_replace",
"url":2,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.ScreenResume.prevent_default",
"url":2,
"doc":"Suppress the default action(s). This will prevent handlers in any base classes from being called. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.ScreenResume.stop",
"url":2,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.ScreenResume.name",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.ScreenResume.time",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.ScreenSuspend",
"url":35,
"doc":"The base class for all events."
},
{
"ref":"textual.events.ScreenSuspend.sender",
"url":35,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.ScreenSuspend.namespace",
"url":35,
"doc":""
},
{
"ref":"textual.events.ScreenSuspend.bubble",
"url":35,
"doc":""
},
{
"ref":"textual.events.ScreenSuspend.verbose",
"url":35,
"doc":""
},
{
"ref":"textual.events.ScreenSuspend.no_dispatch",
"url":35,
"doc":""
},
{
"ref":"textual.events.ScreenSuspend.handler_name",
"url":2,
"doc":"The name of the handler associated with this message."
},
{
"ref":"textual.events.ScreenSuspend.can_replace",
"url":2,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.ScreenSuspend.prevent_default",
"url":2,
"doc":"Suppress the default action(s). This will prevent handlers in any base classes from being called. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.ScreenSuspend.stop",
"url":2,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.ScreenSuspend.name",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.ScreenSuspend.time",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.screen",
"url":36,
"doc":""
},
{
"ref":"textual.screen.Screen",
"url":36,
"doc":"A widget for the root of the app."
},
{
"ref":"textual.screen.Screen.DEFAULT_CSS",
"url":36,
"doc":""
},
{
"ref":"textual.screen.Screen.dark",
"url":36,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.screen.Screen.is_transparent",
"url":36,
"doc":"Check if the background styles is not set. Returns: bool:  True if there is background color, otherwise  False ."
},
{
"ref":"textual.screen.Screen.is_current",
"url":36,
"doc":"Check if this screen is current (i.e. visible to user)."
},
{
"ref":"textual.screen.Screen.update_timer",
"url":36,
"doc":"Timer used to perform updates."
},
{
"ref":"textual.screen.Screen.widgets",
"url":36,
"doc":"Get all widgets."
},
{
"ref":"textual.screen.Screen.visible_widgets",
"url":36,
"doc":"Get a list of visible widgets."
},
{
"ref":"textual.screen.Screen.watch_dark",
"url":36,
"doc":"",
"func":1
},
{
"ref":"textual.screen.Screen.render",
"url":36,
"doc":"Get renderable for widget. Returns: RenderableType: Any renderable",
"func":1
},
{
"ref":"textual.screen.Screen.get_offset",
"url":36,
"doc":"Get the absolute offset of a given Widget. Args: widget (Widget): A widget Returns: Offset: The widget's offset relative to the top left of the terminal.",
"func":1
},
{
"ref":"textual.screen.Screen.get_widget_at",
"url":36,
"doc":"Get the widget at a given coordinate. Args: x (int): X Coordinate. y (int): Y Coordinate. Returns: tuple[Widget, Region]: Widget and screen region.",
"func":1
},
{
"ref":"textual.screen.Screen.get_widgets_at",
"url":36,
"doc":"Get all widgets under a given coordinate. Args: x (int): X coordinate. y (int): Y coordinate. Returns: Iterable[tuple[Widget, Region : Sequence of (WIDGET, REGION) tuples.",
"func":1
},
{
"ref":"textual.screen.Screen.get_style_at",
"url":36,
"doc":"Get the style under a given coordinate. Args: x (int): X Coordinate. y (int): Y Coordinate. Returns: Style: Rich Style object",
"func":1
},
{
"ref":"textual.screen.Screen.find_widget",
"url":36,
"doc":"Get the screen region of a Widget. Args: widget (Widget): A Widget within the composition. Returns: Region: Region relative to screen.",
"func":1
},
{
"ref":"textual.screen.Screen.can_focus",
"url":36,
"doc":"Widget may receive focus."
},
{
"ref":"textual.screen.Screen.can_focus_children",
"url":36,
"doc":"Widget's children may receive focus."
},
{
"ref":"textual.screen.Screen.expand",
"url":3,
"doc":"Rich renderable may expand."
},
{
"ref":"textual.screen.Screen.shrink",
"url":3,
"doc":"Rich renderable may shrink."
},
{
"ref":"textual.screen.Screen.auto_links",
"url":3,
"doc":"Widget will highlight links automatically."
},
{
"ref":"textual.screen.Screen.hover_style",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.screen.Screen.highlight_link_id",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.screen.Screen.virtual_size",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.screen.Screen.auto_width",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.screen.Screen.auto_height",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.screen.Screen.has_focus",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.screen.Screen.descendant_has_focus",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.screen.Screen.mouse_over",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.screen.Screen.scroll_x",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.screen.Screen.scroll_y",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.screen.Screen.scroll_target_x",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.screen.Screen.scroll_target_y",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.screen.Screen.show_vertical_scrollbar",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.screen.Screen.show_horizontal_scrollbar",
"url":3,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.screen.Screen.siblings",
"url":3,
"doc":"Get the widget's siblings (self is removed from the return list). Returns: list[Widget]: A list of siblings."
},
{
"ref":"textual.screen.Screen.allow_vertical_scroll",
"url":3,
"doc":"Check if vertical scroll is permitted. May be overridden if you want different logic regarding allowing scrolling. Returns: bool: True if the widget may scroll _vertically_."
},
{
"ref":"textual.screen.Screen.allow_horizontal_scroll",
"url":3,
"doc":"Check if horizontal scroll is permitted. May be overridden if you want different logic regarding allowing scrolling. Returns: bool: True if the widget may scroll _horizontally_."
},
{
"ref":"textual.screen.Screen.offset",
"url":3,
"doc":"Widget offset from origin. Returns: Offset: Relative offset."
},
{
"ref":"textual.screen.Screen.get_component_rich_style",
"url":3,
"doc":"Get a  Rich style for a component. Args: name (str): Name of component. Returns: Style: A Rich style object.",
"func":1
},
{
"ref":"textual.screen.Screen.mount",
"url":3,
"doc":"Mount child widgets (making this widget a container). Widgets may be passed as positional arguments or keyword arguments. If keyword arguments, the keys will be set as the Widget's id. Example:  python self.mount(Static(\"hello\"), header=Header(  ",
"func":1
},
{
"ref":"textual.screen.Screen.compose",
"url":3,
"doc":"Called by Textual to create child widgets. Extend this to build a UI. Example:  python def compose(self) -> ComposeResult: yield Header() yield Container( TreeControl(), Viewer() ) yield Footer()  ",
"func":1
},
{
"ref":"textual.screen.Screen.get_content_width",
"url":3,
"doc":"Called by textual to get the width of the content area. May be overridden in a subclass. Args: container (Size): Size of the container (immediate parent) widget. viewport (Size): Size of the viewport. Returns: int: The optimal width of the content.",
"func":1
},
{
"ref":"textual.screen.Screen.get_content_height",
"url":3,
"doc":"Called by Textual to get the height of the content area. May be overridden in a subclass. Args: container (Size): Size of the container (immediate parent) widget. viewport (Size): Size of the viewport. width (int): Width of renderable. Returns: int: The height of the content.",
"func":1
},
{
"ref":"textual.screen.Screen.max_scroll_x",
"url":3,
"doc":"The maximum value of  scroll_x ."
},
{
"ref":"textual.screen.Screen.max_scroll_y",
"url":3,
"doc":"The maximum value of  scroll_y ."
},
{
"ref":"textual.screen.Screen.scrollbar_corner",
"url":3,
"doc":"Return the ScrollBarCorner - the cells that appear between the horizontal and vertical scrollbars (only when both are visible)."
},
{
"ref":"textual.screen.Screen.vertical_scrollbar",
"url":3,
"doc":"Get a vertical scrollbar (create if necessary). Returns: ScrollBar: ScrollBar Widget."
},
{
"ref":"textual.screen.Screen.horizontal_scrollbar",
"url":3,
"doc":"Get a vertical scrollbar (create if necessary). Returns: ScrollBar: ScrollBar Widget."
},
{
"ref":"textual.screen.Screen.scrollbars_enabled",
"url":3,
"doc":"A tuple of booleans that indicate if scrollbars are enabled. Returns: tuple[bool, bool]: A tuple of ( ,  )"
},
{
"ref":"textual.screen.Screen.scrollbar_size_vertical",
"url":3,
"doc":"Get the width used by the  vertical scrollbar. Returns: int: Number of columns in the vertical scrollbar."
},
{
"ref":"textual.screen.Screen.scrollbar_size_horizontal",
"url":3,
"doc":"Get the height used by the  horizontal scrollbar. Returns: int: Number of rows in the horizontal scrollbar."
},
{
"ref":"textual.screen.Screen.scrollbar_gutter",
"url":3,
"doc":"Spacing required to fit scrollbar(s). Returns: Spacing: Scrollbar gutter spacing."
},
{
"ref":"textual.screen.Screen.gutter",
"url":3,
"doc":"Spacing for padding / border / scrollbars. Returns: Spacing: Additional spacing around content area."
},
{
"ref":"textual.screen.Screen.size",
"url":3,
"doc":"The size of the content area. Returns: Size: Content area size."
},
{
"ref":"textual.screen.Screen.outer_size",
"url":3,
"doc":"The size of the widget (including padding and border). Returns: Size: Outer size."
},
{
"ref":"textual.screen.Screen.container_size",
"url":3,
"doc":"The size of the container (parent widget). Returns: Size: Container size."
},
{
"ref":"textual.screen.Screen.content_region",
"url":3,
"doc":"Gets an absolute region containing the content (minus padding and border). Returns: Region: Screen region that contains a widget's content."
},
{
"ref":"textual.screen.Screen.content_offset",
"url":3,
"doc":"An offset from the Widget origin where the content begins. Returns: Offset: Offset from widget's origin."
},
{
"ref":"textual.screen.Screen.content_size",
"url":3,
"doc":"Get the size of the content area."
},
{
"ref":"textual.screen.Screen.region",
"url":3,
"doc":"The region occupied by this widget, relative to the Screen. Raises: NoScreen: If there is no screen. errors.NoWidget: If the widget is not on the screen. Returns: Region: Region within screen occupied by widget."
},
{
"ref":"textual.screen.Screen.container_viewport",
"url":3,
"doc":"The viewport region (parent window). Returns: Region: The region that contains this widget."
},
{
"ref":"textual.screen.Screen.virtual_region",
"url":3,
"doc":"The widget region relative to it's container. Which may not be visible, depending on scroll offset."
},
{
"ref":"textual.screen.Screen.window_region",
"url":3,
"doc":"The region within the scrollable area that is currently visible. Returns: Region: New region."
},
{
"ref":"textual.screen.Screen.virtual_region_with_margin",
"url":3,
"doc":"The widget region relative to its container ( including margin ), which may not be visible, depending on the scroll offset. Returns: Region: The virtual region of the Widget, inclusive of its margin."
},
{
"ref":"textual.screen.Screen.focusable_children",
"url":3,
"doc":"Get the children which may be focused. Returns: list[Widget]: List of widgets that can receive focus."
},
{
"ref":"textual.screen.Screen.scroll_offset",
"url":3,
"doc":"Get the current scroll offset. Returns: Offset: Offset a container has been scrolled by."
},
{
"ref":"textual.screen.Screen.animate",
"url":3,
"doc":"Get an animator to animate attributes on this widget. Example:  python self.animate(\"brightness\", 0.5)  Returns: BoundAnimator: An animator bound to this widget."
},
{
"ref":"textual.screen.Screen.is_container",
"url":3,
"doc":"Check if this widget is a container (contains other widgets). Returns: bool: True if this widget is a container."
},
{
"ref":"textual.screen.Screen.is_scrollable",
"url":3,
"doc":"Check if this Widget may be scrolled. Returns: bool: True if this widget may be scrolled."
},
{
"ref":"textual.screen.Screen.layer",
"url":3,
"doc":"Get the name of this widgets layer. Returns: str: Name of layer."
},
{
"ref":"textual.screen.Screen.layers",
"url":3,
"doc":"Layers of from parent. Returns: tuple[str,  .]: Tuple of layer names."
},
{
"ref":"textual.screen.Screen.link_style",
"url":3,
"doc":"Style of links."
},
{
"ref":"textual.screen.Screen.link_hover_style",
"url":3,
"doc":"Style of links with mouse hover."
},
{
"ref":"textual.screen.Screen.scroll_to",
"url":3,
"doc":"Scroll to a given (absolute) coordinate, optionally animating. Args: x (int | None, optional): X coordinate (column) to scroll to, or None for no change. Defaults to None. y (int | None, optional): Y coordinate (row) to scroll to, or None for no change. Defaults to None. animate (bool, optional): Animate to new scroll position. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.screen.Screen.scroll_relative",
"url":3,
"doc":"Scroll relative to current position. Args: x (int | None, optional): X distance (columns) to scroll, or  None for no change. Defaults to None. y (int | None, optional): Y distance (rows) to scroll, or  None for no change. Defaults to None. animate (bool, optional): Animate to new scroll position. Defaults to False. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if the scroll position changed, otherwise False.",
"func":1
},
{
"ref":"textual.screen.Screen.scroll_home",
"url":3,
"doc":"Scroll to home position. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.screen.Screen.scroll_end",
"url":3,
"doc":"Scroll to the end of the container. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.screen.Screen.scroll_left",
"url":3,
"doc":"Scroll one cell left. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.screen.Screen.scroll_right",
"url":3,
"doc":"Scroll on cell right. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.screen.Screen.scroll_down",
"url":3,
"doc":"Scroll one line down. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.screen.Screen.scroll_up",
"url":3,
"doc":"Scroll one line up. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.screen.Screen.scroll_page_up",
"url":3,
"doc":"Scroll one page up. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.screen.Screen.scroll_page_down",
"url":3,
"doc":"Scroll one page down. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.screen.Screen.scroll_page_left",
"url":3,
"doc":"Scroll one page left. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.screen.Screen.scroll_page_right",
"url":3,
"doc":"Scroll one page right. Args: animate (bool, optional): Animate scroll. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling was done.",
"func":1
},
{
"ref":"textual.screen.Screen.scroll_to_widget",
"url":3,
"doc":"Scroll scrolling to bring a widget in to view. Args: widget (Widget): A descendant widget. animate (bool, optional): True to animate, or False to jump. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: bool: True if any scrolling has occurred in any descendant, otherwise False.",
"func":1
},
{
"ref":"textual.screen.Screen.scroll_to_region",
"url":3,
"doc":"Scrolls a given region in to view, if required. This method will scroll the least distance required to move  region fully within the scrollable area. Args: region (Region): A region that should be visible. spacing (Spacing | None, optional): Optional spacing around the region. Defaults to None. animate (bool, optional): True to animate, or False to jump. Defaults to True. speed (float | None, optional): Speed of scroll if animate is True. Or None to use duration. duration (float | None, optional): Duration of animation, if animate is True and speed is None. Returns: Offset: The distance that was scrolled.",
"func":1
},
{
"ref":"textual.screen.Screen.scroll_visible",
"url":3,
"doc":"Scroll the container to make this widget visible. Args: animate (bool, optional): _description_. Defaults to True. speed (float | None, optional): _description_. Defaults to None. duration (float | None, optional): _description_. Defaults to None.",
"func":1
},
{
"ref":"textual.screen.Screen.get_pseudo_classes",
"url":3,
"doc":"Pseudo classes for a widget. Returns: Iterable[str]: Names of the pseudo classes.",
"func":1
},
{
"ref":"textual.screen.Screen.post_render",
"url":3,
"doc":"Applies style attributes to the default renderable. Returns: RenderableType: A new renderable.",
"func":1
},
{
"ref":"textual.screen.Screen.watch_mouse_over",
"url":3,
"doc":"Update from CSS if mouse over state changes.",
"func":1
},
{
"ref":"textual.screen.Screen.watch_has_focus",
"url":3,
"doc":"Update from CSS if has focus state changes.",
"func":1
},
{
"ref":"textual.screen.Screen.render_line",
"url":3,
"doc":"Render a line of content. Args: y (int): Y Coordinate of line. Returns: list[Segment]: A rendered line.",
"func":1
},
{
"ref":"textual.screen.Screen.render_lines",
"url":3,
"doc":"Render the widget in to lines. Args: crop (Region): Region within visible area to render. Returns: Lines: A list of list of segments.",
"func":1
},
{
"ref":"textual.screen.Screen.refresh",
"url":3,
"doc":"Initiate a refresh of the widget. This method sets an internal flag to perform a refresh, which will be done on the next idle event. Only one refresh will be done even if this method is called multiple times. By default this method will cause the content of the widget to refresh, but not change its size. You can also set  layout=True to perform a layout.  ! warning It is rarely necessary to call this method explicitly. Updating styles or reactive attributes will do this automatically. Args:  regions (Region, optional): Additional screen regions to mark as dirty. repaint (bool, optional): Repaint the widget (will call render() again). Defaults to True. layout (bool, optional): Also layout widgets in the view. Defaults to False.",
"func":1
},
{
"ref":"textual.screen.Screen.remove",
"url":3,
"doc":"Remove the Widget from the DOM (effectively deleting it)",
"func":1
},
{
"ref":"textual.screen.Screen.action",
"url":3,
"doc":"Perform a given action, with this widget as the default namespace. Args: action (str): Action encoded as a string.",
"func":1
},
{
"ref":"textual.screen.Screen.post_message",
"url":3,
"doc":"Post a message to this widget. Args: message (Message): Message to post. Returns: bool: True if the message was posted, False if this widget was closed / closing.",
"func":1
},
{
"ref":"textual.screen.Screen.focus",
"url":3,
"doc":"Give focus to this widget. Args: scroll_visible (bool, optional): Scroll parent to make this widget visible. Defaults to True.",
"func":1
},
{
"ref":"textual.screen.Screen.capture_mouse",
"url":3,
"doc":"Capture (or release) the mouse. When captured, mouse events will go to this widget even when the pointer is not directly over the widget. Args: capture (bool, optional): True to capture or False to release. Defaults to True.",
"func":1
},
{
"ref":"textual.screen.Screen.release_mouse",
"url":3,
"doc":"Release the mouse. Mouse events will only be sent when the mouse is over the widget.",
"func":1
},
{
"ref":"textual.screen.Screen.get_component_styles",
"url":4,
"doc":"Get a \"component\" styles object (must be defined in COMPONENT_CLASSES classvar). Args: name (str): Name of the component. Raises: KeyError: If the component class doesn't exist. Returns: RenderStyles: A Styles object.",
"func":1
},
{
"ref":"textual.screen.Screen.get_default_css",
"url":4,
"doc":"Gets the CSS for this class and inherited from bases. Returns: list[tuple[str, str : a list of tuples containing (PATH, SOURCE) for this and inherited from base classes.",
"func":1
},
{
"ref":"textual.screen.Screen.parent",
"url":4,
"doc":"Get the parent node. Returns: DOMNode | None: The node which is the direct parent of this node."
},
{
"ref":"textual.screen.Screen.screen",
"url":4,
"doc":"Get the screen that this node is contained within. Note that this may not be the currently active screen within the app."
},
{
"ref":"textual.screen.Screen.id",
"url":4,
"doc":"The ID of this node, or None if the node has no ID. Returns: (str | None): A Node ID or None."
},
{
"ref":"textual.screen.Screen.css_identifier",
"url":4,
"doc":"A CSS selector that identifies this DOM node."
},
{
"ref":"textual.screen.Screen.css_identifier_styled",
"url":4,
"doc":"A stylized CSS identifier."
},
{
"ref":"textual.screen.Screen.classes",
"url":4,
"doc":"A frozenset of the current classes set on the widget. Returns: frozenset[str]: Set of class names."
},
{
"ref":"textual.screen.Screen.pseudo_classes",
"url":4,
"doc":"Get a set of all pseudo classes"
},
{
"ref":"textual.screen.Screen.css_path_nodes",
"url":4,
"doc":"A list of nodes from the root to this node, forming a \"path\". Returns: list[DOMNode]: List of Nodes, starting with the root and ending with this node."
},
{
"ref":"textual.screen.Screen.display",
"url":4,
"doc":"Check if this widget should display or not. Returns: bool:  True if this DOMNode is displayed ( display != \"none\" ) otherwise  False ."
},
{
"ref":"textual.screen.Screen.tree",
"url":4,
"doc":"Get a Rich tree object which will recursively render the structure of the node tree. Returns: Tree: A Rich object which may be printed."
},
{
"ref":"textual.screen.Screen.text_style",
"url":4,
"doc":"Get the text style object. A widget's style is influenced by its parent. for instance if a parent is bold, then the child will also be bold. Returns: Style: Rich Style object."
},
{
"ref":"textual.screen.Screen.rich_style",
"url":4,
"doc":"Get a Rich Style object for this DOMNode."
},
{
"ref":"textual.screen.Screen.background_colors",
"url":4,
"doc":"Get the background color and the color of the parent's background. Returns: tuple[Color, Color]: Tuple of (base background, background)"
},
{
"ref":"textual.screen.Screen.colors",
"url":4,
"doc":"Gets the Widgets foreground and background colors, and its parent's (base) colors. Returns: tuple[Color, Color, Color, Color]: Tuple of (base background, base color, background, color)"
},
{
"ref":"textual.screen.Screen.ancestors",
"url":4,
"doc":"Get a list of Nodes by tracing ancestors all the way back to App."
},
{
"ref":"textual.screen.Screen.displayed_children",
"url":4,
"doc":"The children which don't have display: none set. Returns: list[DOMNode]: Children of this widget which will be displayed."
},
{
"ref":"textual.screen.Screen.reset_styles",
"url":4,
"doc":"Reset styles back to their initial state",
"func":1
},
{
"ref":"textual.screen.Screen.walk_children",
"url":4,
"doc":"Generate descendant nodes. Args: filter_type (type[WalkType] | None, optional): Filter only this type, or None for no filter. Defaults to None. with_self (bool, optional): Also yield self in addition to descendants. Defaults to True. Returns: Iterable[DOMNode | WalkType]: An iterable of nodes.",
"func":1
},
{
"ref":"textual.screen.Screen.get_child",
"url":4,
"doc":"Return the first child (immediate descendent) of this node with the given ID. Args: id (str): The ID of the child. Returns: DOMNode: The first child of this node with the ID. Raises: NoMatchingNodesError: if no children could be found for this ID",
"func":1
},
{
"ref":"textual.screen.Screen.query",
"url":4,
"doc":"Get a DOM query matching a selector. Args: selector (str, optional): A CSS selector or  None for all nodes. Defaults to None. Returns: DOMQuery: A query object.",
"func":1
},
{
"ref":"textual.screen.Screen.query_one",
"url":4,
"doc":"Get the first Widget matching the given selector or selector type. Args: selector (str | None, optional): A selector. expect_type (type, optional): Require the object be of the supplied type, or None for any type. Defaults to None. Returns: Widget | ExpectType: A widget matching the selector.",
"func":1
},
{
"ref":"textual.screen.Screen.set_styles",
"url":4,
"doc":"Set custom styles on this object.",
"func":1
},
{
"ref":"textual.screen.Screen.has_class",
"url":4,
"doc":"Check if the Node has all the given class names. Args:  class_names (str): CSS class names to check. Returns: bool:  True if the node has all the given class names, otherwise  False .",
"func":1
},
{
"ref":"textual.screen.Screen.set_class",
"url":4,
"doc":"Add or remove class(es) based on a condition. Args: add (bool): Add the classes if True, otherwise remove them.",
"func":1
},
{
"ref":"textual.screen.Screen.add_class",
"url":4,
"doc":"Add class names to this Node. Args:  class_names (str): CSS class names to add.",
"func":1
},
{
"ref":"textual.screen.Screen.remove_class",
"url":4,
"doc":"Remove class names from this Node. Args:  class_names (str): CSS class names to remove.",
"func":1
},
{
"ref":"textual.screen.Screen.toggle_class",
"url":4,
"doc":"Toggle class names on this Node. Args:  class_names (str): CSS class names to toggle.",
"func":1
},
{
"ref":"textual.screen.Screen.has_pseudo_class",
"url":4,
"doc":"Check for pseudo class (such as hover, focus etc)",
"func":1
},
{
"ref":"textual.screen.Screen.app",
"url":5,
"doc":"Get the current app. Returns: App: The current app. Raises: NoActiveAppError: if no active app could be found for the current asyncio context"
},
{
"ref":"textual.screen.Screen.log",
"url":5,
"doc":"Get a logger for this object. Returns: Logger: A logger."
},
{
"ref":"textual.screen.Screen.disable_messages",
"url":5,
"doc":"Disable message types from being processed.",
"func":1
},
{
"ref":"textual.screen.Screen.enable_messages",
"url":5,
"doc":"Enable processing of messages types.",
"func":1
},
{
"ref":"textual.screen.Screen.set_timer",
"url":5,
"doc":"Make a function call after a delay. Args: delay (float): Time to wait before invoking callback. callback (TimerCallback | None, optional): Callback to call after time has expired. Defaults to None. name (str | None, optional): Name of the timer (for debug). Defaults to None. pause (bool, optional): Start timer paused. Defaults to False. Returns: Timer: A timer object.",
"func":1
},
{
"ref":"textual.screen.Screen.set_interval",
"url":5,
"doc":"Call a function at periodic intervals. Args: interval (float): Time between calls. callback (TimerCallback | None, optional): Function to call. Defaults to None. name (str | None, optional): Name of the timer object. Defaults to None. repeat (int, optional): Number of times to repeat the call or 0 for continuous. Defaults to 0. pause (bool, optional): Start the timer paused. Defaults to False. Returns: Timer: A timer object.",
"func":1
},
{
"ref":"textual.screen.Screen.call_later",
"url":5,
"doc":"Schedule a callback to run after all messages are processed and the screen has been refreshed. Positional and keyword arguments are passed to the callable. Args: callback (Callable): A callable.",
"func":1
},
{
"ref":"textual.screen.Screen.on_event",
"url":5,
"doc":"Called to process an event. Args: event (events.Event): An Event object.",
"func":1
},
{
"ref":"textual.screen.Screen.check_idle",
"url":5,
"doc":"Prompt the message pump to call idle if the queue is empty.",
"func":1
},
{
"ref":"textual.screen.Screen.post_message_no_wait",
"url":5,
"doc":"Posts a message on the queue. Args: message (Message): A message (or Event). Returns: bool: True if the messages was processed, False if it wasn't.",
"func":1
},
{
"ref":"textual.screen.Screen.emit_no_wait",
"url":5,
"doc":"Send a message to the _parent_, non async version. Args: message (Message): A message object. Returns: bool: True if the message was posted successfully.",
"func":1
},
{
"ref":"textual.screen.Screen.emit",
"url":5,
"doc":"Send a message to the _parent_. Args: message (Message): A message object. Returns: bool: True if the message was posted successfully.",
"func":1
},
{
"ref":"textual.screen.Screen.dispatch_key",
"url":5,
"doc":"Dispatch a key event to method. This method will call the method named 'key_ ' if it exists. Args: event (events.Key): A key event. Returns: bool: True if key was handled, otherwise False.",
"func":1
},
{
"ref":"textual.message",
"url":2,
"doc":""
},
{
"ref":"textual.message.Message",
"url":2,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.message.Message.bubble",
"url":2,
"doc":""
},
{
"ref":"textual.message.Message.verbose",
"url":2,
"doc":""
},
{
"ref":"textual.message.Message.no_dispatch",
"url":2,
"doc":""
},
{
"ref":"textual.message.Message.namespace",
"url":2,
"doc":""
},
{
"ref":"textual.message.Message.is_forwarded",
"url":2,
"doc":""
},
{
"ref":"textual.message.Message.handler_name",
"url":2,
"doc":"The name of the handler associated with this message."
},
{
"ref":"textual.message.Message.can_replace",
"url":2,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.message.Message.prevent_default",
"url":2,
"doc":"Suppress the default action(s). This will prevent handlers in any base classes from being called. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.message.Message.stop",
"url":2,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.message.Message.name",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.message.Message.sender",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.message.Message.time",
"url":2,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.devtools",
"url":37,
"doc":""
},
{
"ref":"textual.devtools.renderables",
"url":38,
"doc":""
},
{
"ref":"textual.devtools.renderables.DevConsoleHeader",
"url":38,
"doc":""
},
{
"ref":"textual.devtools.renderables.DevConsoleLog",
"url":38,
"doc":"Renderable representing a single log message Args: segments (Iterable[Segment]): The segments to display path (str): The path of the file on the client that the log call was made from line_number (int): The line number of the file on the client the log call was made from unix_timestamp (int): Seconds since January 1st 1970"
},
{
"ref":"textual.devtools.renderables.DevConsoleNotice",
"url":38,
"doc":"Renderable for messages written by the devtools console itself Args: message (str): The message to display level (DevtoolsMessageLevel): The message level (\"info\", \"warning\", or \"error\"). Determines colors used to render the message and the perceived importance."
},
{
"ref":"textual.driver",
"url":8,
"doc":""
},
{
"ref":"textual.driver.Driver",
"url":8,
"doc":"Helper class that provides a standard way to create an ABC using inheritance."
},
{
"ref":"textual.driver.Driver.send_event",
"url":8,
"doc":"",
"func":1
},
{
"ref":"textual.driver.Driver.process_event",
"url":8,
"doc":"Performs some additional processing of events.",
"func":1
},
{
"ref":"textual.driver.Driver.start_application_mode",
"url":8,
"doc":"",
"func":1
},
{
"ref":"textual.driver.Driver.disable_input",
"url":8,
"doc":"",
"func":1
},
{
"ref":"textual.driver.Driver.stop_application_mode",
"url":8,
"doc":"",
"func":1
},
{
"ref":"textual.keys",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys",
"url":39,
"doc":"List of keys for use in key bindings. Note that this is an \"StrEnum\", all values can be compared against strings."
},
{
"ref":"textual.keys.Keys.value",
"url":39,
"doc":"The value of the Enum member."
},
{
"ref":"textual.keys.Keys.Space",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.Escape",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftEscape",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.Return",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlAt",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlA",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlB",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlC",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlD",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlE",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlG",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlH",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlI",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlJ",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlK",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlL",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlM",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlN",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlO",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlP",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlQ",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlR",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlS",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlT",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlU",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlV",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlW",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlX",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlY",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlZ",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.Control1",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.Control2",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.Control3",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.Control4",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.Control5",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.Control6",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.Control7",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.Control8",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.Control9",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.Control0",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShift1",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShift2",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShift3",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShift4",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShift5",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShift6",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShift7",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShift8",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShift9",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShift0",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlBackslash",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlSquareClose",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlCircumflex",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlUnderscore",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.Left",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.Right",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.Up",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.Down",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.Home",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.End",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.Insert",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.Delete",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.PageUp",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.PageDown",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlLeft",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlRight",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlUp",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlDown",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlHome",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlEnd",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlInsert",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlDelete",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlPageUp",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlPageDown",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftLeft",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftRight",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftUp",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftDown",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftHome",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftEnd",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftInsert",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftDelete",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftPageUp",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftPageDown",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShiftLeft",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShiftRight",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShiftUp",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShiftDown",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShiftHome",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShiftEnd",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShiftInsert",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShiftDelete",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShiftPageUp",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShiftPageDown",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.BackTab",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.F1",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.F2",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.F3",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.F4",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.F5",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.F6",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.F7",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.F8",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.F9",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.F10",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.F11",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.F12",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.F13",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.F14",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.F15",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.F16",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.F17",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.F18",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.F19",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.F20",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.F21",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.F22",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.F23",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.F24",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF1",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF2",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF3",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF4",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF5",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF6",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF7",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF8",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF9",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF10",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF11",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF12",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF13",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF14",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF15",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF16",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF17",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF18",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF19",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF20",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF21",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF22",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF23",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF24",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.Any",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ScrollUp",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ScrollDown",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.CPRResponse",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.Vt100MouseEvent",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.WindowsMouseEvent",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.Ignore",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlSpace",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.Tab",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.Enter",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.Backspace",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftControlLeft",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftControlRight",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftControlHome",
"url":39,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftControlEnd",
"url":39,
"doc":""
},
{
"ref":"textual.reactive",
"url":40,
"doc":""
},
{
"ref":"textual.reactive.Reactive",
"url":40,
"doc":"Reactive descriptor. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.reactive.Reactive.init",
"url":40,
"doc":"A reactive variable that calls watchers and compute on initialize (post mount). Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. Returns: Reactive: A Reactive instance which calls watchers or initialize.",
"func":1
},
{
"ref":"textual.reactive.Reactive.var",
"url":40,
"doc":"A reactive variable that doesn't update or layout. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. Returns: Reactive: A Reactive descriptor.",
"func":1
},
{
"ref":"textual.reactive.Reactive.initialize_object",
"url":40,
"doc":"Call any watchers / computes for the first time. Args: obj (Reactable): An object with Reactive descriptors",
"func":1
},
{
"ref":"textual.reactive.reactive",
"url":40,
"doc":"Create a reactive attribute. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. init (bool, optional): Call watchers on initialize (post mount). Defaults to False."
},
{
"ref":"textual.reactive.reactive.init",
"url":40,
"doc":"A reactive variable that calls watchers and compute on initialize (post mount). Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. Returns: Reactive: A Reactive instance which calls watchers or initialize.",
"func":1
},
{
"ref":"textual.reactive.reactive.var",
"url":40,
"doc":"A reactive variable that doesn't update or layout. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. Returns: Reactive: A Reactive descriptor.",
"func":1
},
{
"ref":"textual.reactive.reactive.initialize_object",
"url":40,
"doc":"Call any watchers / computes for the first time. Args: obj (Reactable): An object with Reactive descriptors",
"func":1
},
{
"ref":"textual.reactive.var",
"url":40,
"doc":"Create a reactive attribute (with no auto-refresh). Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default."
},
{
"ref":"textual.reactive.var.init",
"url":40,
"doc":"A reactive variable that calls watchers and compute on initialize (post mount). Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. layout (bool, optional): Perform a layout on change. Defaults to False. repaint (bool, optional): Perform a repaint on change. Defaults to True. Returns: Reactive: A Reactive instance which calls watchers or initialize.",
"func":1
},
{
"ref":"textual.reactive.var.var",
"url":40,
"doc":"A reactive variable that doesn't update or layout. Args: default (ReactiveType | Callable ], ReactiveType]): A default value or callable that returns a default. Returns: Reactive: A Reactive descriptor.",
"func":1
},
{
"ref":"textual.reactive.var.initialize_object",
"url":40,
"doc":"Call any watchers / computes for the first time. Args: obj (Reactable): An object with Reactive descriptors",
"func":1
},
{
"ref":"textual.reactive.watch",
"url":40,
"doc":"Watch a reactive variable on an object. Args: obj (Reactable): The parent object. attribute_name (str): The attribute to watch. callback (Callable Any], object]): A callable to call when the attribute changes.",
"func":1
},
{
"ref":"textual.case",
"url":41,
"doc":""
},
{
"ref":"textual.case.camel_to_snake",
"url":41,
"doc":"Convert name from CamelCase to snake_case. Args: name (str): A symbol name, such as a class name. Returns: str: Name in camel case.",
"func":1
},
{
"ref":"textual.timer",
"url":42,
"doc":"Timer objects are created by [set_interval][textual.message_pump.MessagePump.set_interval] or [set_interval][textual.message_pump.MessagePump.set_timer]."
},
{
"ref":"textual.timer.EventTargetGone",
"url":42,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"textual.timer.Timer",
"url":42,
"doc":"A class to send timer-based events. Args: event_target (MessageTarget): The object which will receive the timer events. interval (float): The time between timer events. sender (MessageTarget): The sender of the event. name (str | None, optional): A name to assign the event (for debugging). Defaults to None. callback (TimerCallback | None, optional): A optional callback to invoke when the event is handled. Defaults to None. repeat (int | None, optional): The number of times to repeat the timer, or None to repeat forever. Defaults to None. skip (bool, optional): Enable skipping of scheduled events that couldn't be sent in time. Defaults to True. pause (bool, optional): Start the timer paused. Defaults to False."
},
{
"ref":"textual.timer.Timer.target",
"url":42,
"doc":""
},
{
"ref":"textual.timer.Timer.start",
"url":42,
"doc":"Start the timer return the task. Returns: Task: A Task instance for the timer.",
"func":1
},
{
"ref":"textual.timer.Timer.stop_no_wait",
"url":42,
"doc":"Stop the timer.",
"func":1
},
{
"ref":"textual.timer.Timer.stop",
"url":42,
"doc":"Stop the timer, and block until it exits.",
"func":1
},
{
"ref":"textual.timer.Timer.pause",
"url":42,
"doc":"Pause the timer. A paused timer will not send events until it is resumed.",
"func":1
},
{
"ref":"textual.timer.Timer.reset",
"url":42,
"doc":"Reset the timer, so it starts from the beginning.",
"func":1
},
{
"ref":"textual.timer.Timer.resume",
"url":42,
"doc":"Resume a paused timer.",
"func":1
},
{
"ref":"textual.errors",
"url":43,
"doc":""
},
{
"ref":"textual.errors.TextualError",
"url":43,
"doc":"Base class for Textual errors."
},
{
"ref":"textual.errors.NoWidget",
"url":43,
"doc":"Specified widget was not found."
},
{
"ref":"textual.errors.RenderError",
"url":43,
"doc":"An object could not be rendered."
},
{
"ref":"textual.layouts",
"url":44,
"doc":""
},
{
"ref":"textual.layouts.horizontal",
"url":45,
"doc":""
},
{
"ref":"textual.layouts.horizontal.HorizontalLayout",
"url":45,
"doc":"Used to layout Widgets horizontally on screen, from left to right. Since Widgets naturally fill the space of their parent container, all widgets used in a horizontal layout should have a specified."
},
{
"ref":"textual.layouts.horizontal.HorizontalLayout.name",
"url":45,
"doc":""
},
{
"ref":"textual.layouts.horizontal.HorizontalLayout.arrange",
"url":45,
"doc":"Generate a layout map that defines where on the screen the widgets will be drawn. Args: parent (Widget): Parent widget. size (Size): Size of container. Returns: Iterable[WidgetPlacement]: An iterable of widget location",
"func":1
},
{
"ref":"textual.layouts.factory",
"url":46,
"doc":""
},
{
"ref":"textual.layouts.factory.MissingLayout",
"url":46,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"textual.layouts.factory.get_layout",
"url":46,
"doc":"Get a named layout object. Args: name (str): Name of the layout. Raises: MissingLayout: If the named layout doesn't exist. Returns: Layout: A layout object.",
"func":1
},
{
"ref":"textual.layouts.vertical",
"url":47,
"doc":""
},
{
"ref":"textual.layouts.vertical.VerticalLayout",
"url":47,
"doc":"Used to layout Widgets vertically on screen, from top to bottom."
},
{
"ref":"textual.layouts.vertical.VerticalLayout.name",
"url":47,
"doc":""
},
{
"ref":"textual.layouts.vertical.VerticalLayout.arrange",
"url":47,
"doc":"Generate a layout map that defines where on the screen the widgets will be drawn. Args: parent (Widget): Parent widget. size (Size): Size of container. Returns: Iterable[WidgetPlacement]: An iterable of widget location",
"func":1
},
{
"ref":"textual.layouts.grid",
"url":48,
"doc":""
},
{
"ref":"textual.layouts.grid.GridLayout",
"url":48,
"doc":"Used to layout Widgets in to a grid."
},
{
"ref":"textual.layouts.grid.GridLayout.name",
"url":48,
"doc":""
},
{
"ref":"textual.layouts.grid.GridLayout.arrange",
"url":48,
"doc":"Generate a layout map that defines where on the screen the widgets will be drawn. Args: parent (Widget): Parent widget. size (Size): Size of container. Returns: Iterable[WidgetPlacement]: An iterable of widget location",
"func":1
},
{
"ref":"textual.css",
"url":49,
"doc":""
},
{
"ref":"textual.css.scalar",
"url":50,
"doc":""
},
{
"ref":"textual.css.scalar.ScalarError",
"url":50,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"textual.css.scalar.ScalarResolveError",
"url":50,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"textual.css.scalar.ScalarParseError",
"url":50,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"textual.css.scalar.Unit",
"url":50,
"doc":"Enumeration of the various units inherited from CSS."
},
{
"ref":"textual.css.scalar.Unit.CELLS",
"url":50,
"doc":""
},
{
"ref":"textual.css.scalar.Unit.FRACTION",
"url":50,
"doc":""
},
{
"ref":"textual.css.scalar.Unit.PERCENT",
"url":50,
"doc":""
},
{
"ref":"textual.css.scalar.Unit.WIDTH",
"url":50,
"doc":""
},
{
"ref":"textual.css.scalar.Unit.HEIGHT",
"url":50,
"doc":""
},
{
"ref":"textual.css.scalar.Unit.VIEW_WIDTH",
"url":50,
"doc":""
},
{
"ref":"textual.css.scalar.Unit.VIEW_HEIGHT",
"url":50,
"doc":""
},
{
"ref":"textual.css.scalar.Unit.AUTO",
"url":50,
"doc":""
},
{
"ref":"textual.css.scalar.get_symbols",
"url":50,
"doc":"Get symbols for an iterable of units. Args: units (Iterable[Unit]): A number of units. Returns: list[str]: List of symbols.",
"func":1
},
{
"ref":"textual.css.scalar.Scalar",
"url":50,
"doc":"A numeric value and a unit."
},
{
"ref":"textual.css.scalar.Scalar.value",
"url":50,
"doc":"Alias for field number 0"
},
{
"ref":"textual.css.scalar.Scalar.unit",
"url":50,
"doc":"Alias for field number 1"
},
{
"ref":"textual.css.scalar.Scalar.percent_unit",
"url":50,
"doc":"Alias for field number 2"
},
{
"ref":"textual.css.scalar.Scalar.is_cells",
"url":50,
"doc":"Check if the Scalar is explicit cells."
},
{
"ref":"textual.css.scalar.Scalar.is_percent",
"url":50,
"doc":"Check if the Scalar is a percentage unit."
},
{
"ref":"textual.css.scalar.Scalar.is_fraction",
"url":50,
"doc":"Check if the unit is a fraction."
},
{
"ref":"textual.css.scalar.Scalar.excludes_border",
"url":50,
"doc":""
},
{
"ref":"textual.css.scalar.Scalar.cells",
"url":50,
"doc":"Check if the unit is explicit cells."
},
{
"ref":"textual.css.scalar.Scalar.fraction",
"url":50,
"doc":"Get the fraction value, or None if not a value."
},
{
"ref":"textual.css.scalar.Scalar.symbol",
"url":50,
"doc":"Get the symbol of this unit."
},
{
"ref":"textual.css.scalar.Scalar.is_auto",
"url":50,
"doc":"Check if this is an auto unit."
},
{
"ref":"textual.css.scalar.Scalar.from_number",
"url":50,
"doc":"Create a scalar with cells unit. Args: value (float): A number of cells. Returns: Scalar: New Scalar.",
"func":1
},
{
"ref":"textual.css.scalar.Scalar.parse",
"url":50,
"doc":"Parse a string in to a Scalar Args: token (str): A string containing a scalar, e.g. \"3.14fr\" Raises: ScalarParseError: If the value is not a valid scalar Returns: Scalar: New scalar",
"func":1
},
{
"ref":"textual.css.scalar.Scalar.resolve_dimension",
"url":50,
"doc":"Resolve scalar with units in to a dimensions. Args: size (tuple[int, int]): Size of the container. viewport (tuple[int, int]): Size of the viewport (typically terminal size) Raises: ScalarResolveError: If the unit is unknown. Returns: int: A size (in cells)",
"func":1
},
{
"ref":"textual.css.scalar.Scalar.copy_with",
"url":50,
"doc":"Get a copy of this Scalar, with values optionally modified Args: value (float | None): The new value, or None to keep the same value unit (Unit | None): The new unit, or None to keep the same unit percent_unit (Unit | None): The new percent_unit, or None to keep the same percent_unit",
"func":1
},
{
"ref":"textual.css.scalar.ScalarOffset",
"url":50,
"doc":"An Offset with two scalars, used to animate between to Scalars."
},
{
"ref":"textual.css.scalar.ScalarOffset.x",
"url":50,
"doc":"Alias for field number 0"
},
{
"ref":"textual.css.scalar.ScalarOffset.y",
"url":50,
"doc":"Alias for field number 1"
},
{
"ref":"textual.css.scalar.ScalarOffset.null",
"url":50,
"doc":"Get a null scalar offset (0, 0).",
"func":1
},
{
"ref":"textual.css.scalar.ScalarOffset.from_offset",
"url":50,
"doc":"Create a Scalar offset from a tuple of integers. Args: offset (tuple[int, int]): Offset in cells. Returns: ScalarOffset: New offset.",
"func":1
},
{
"ref":"textual.css.scalar.ScalarOffset.resolve",
"url":50,
"doc":"Resolve the offset in to cells. Args: size (Size): Size of container. viewport (Size): Size of viewport. Returns: Offset: Offset in cells.",
"func":1
},
{
"ref":"textual.css.scalar.percentage_string_to_float",
"url":50,
"doc":"Convert a string percentage e.g. '20%' to a float e.g. 20.0. Args: string (str): The percentage string to convert.",
"func":1
},
{
"ref":"textual.css.stylesheet",
"url":51,
"doc":""
},
{
"ref":"textual.css.stylesheet.StylesheetParseError",
"url":51,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"textual.css.stylesheet.StylesheetErrors",
"url":51,
"doc":""
},
{
"ref":"textual.css.stylesheet.CssSource",
"url":51,
"doc":"Contains the CSS content and whether or not the CSS comes from user defined stylesheets vs widget-level stylesheets. Args: content (str): The CSS as a string. is_defaults (bool): True if the CSS is default (i.e. that defined at the widget level). False if it's user CSS (which will override the defaults)."
},
{
"ref":"textual.css.stylesheet.CssSource.content",
"url":51,
"doc":"Alias for field number 0"
},
{
"ref":"textual.css.stylesheet.CssSource.is_defaults",
"url":51,
"doc":"Alias for field number 1"
},
{
"ref":"textual.css.stylesheet.CssSource.tie_breaker",
"url":51,
"doc":"Alias for field number 2"
},
{
"ref":"textual.css.stylesheet.Stylesheet",
"url":51,
"doc":""
},
{
"ref":"textual.css.stylesheet.Stylesheet.rules",
"url":51,
"doc":"List of rule sets. Returns: list[RuleSet]: List of rules sets for this stylesheet."
},
{
"ref":"textual.css.stylesheet.Stylesheet.rules_map",
"url":51,
"doc":"Structure that maps a selector on to a list of rules. Returns: dict[str, list[RuleSet : Mapping of selector to rule sets."
},
{
"ref":"textual.css.stylesheet.Stylesheet.css",
"url":51,
"doc":""
},
{
"ref":"textual.css.stylesheet.Stylesheet.copy",
"url":51,
"doc":"Create a copy of this stylesheet. Returns: Stylesheet: New stylesheet.",
"func":1
},
{
"ref":"textual.css.stylesheet.Stylesheet.set_variables",
"url":51,
"doc":"Set CSS variables. Args: variables (dict[str, str]): A mapping of name to variable.",
"func":1
},
{
"ref":"textual.css.stylesheet.Stylesheet.read",
"url":51,
"doc":"Read Textual CSS file. Args: filename (str | PurePath): filename of CSS. Raises: StylesheetError: If the CSS could not be read. StylesheetParseError: If the CSS is invalid.",
"func":1
},
{
"ref":"textual.css.stylesheet.Stylesheet.add_source",
"url":51,
"doc":"Parse CSS from a string. Args: css (str): String with CSS source. path (str | PurePath, optional): The path of the source if a file, or some other identifier. Defaults to None. is_default_css (bool): True if the CSS is defined in the Widget, False if the CSS is defined in a user stylesheet. Raises: StylesheetError: If the CSS could not be read. StylesheetParseError: If the CSS is invalid.",
"func":1
},
{
"ref":"textual.css.stylesheet.Stylesheet.parse",
"url":51,
"doc":"Parse the source in the stylesheet. Raises: StylesheetParseError: If there are any CSS related errors.",
"func":1
},
{
"ref":"textual.css.stylesheet.Stylesheet.reparse",
"url":51,
"doc":"Re-parse source, applying new variables. Raises: StylesheetError: If the CSS could not be read. StylesheetParseError: If the CSS is invalid.",
"func":1
},
{
"ref":"textual.css.stylesheet.Stylesheet.apply",
"url":51,
"doc":"Apply the stylesheet to a DOM node. Args: node (DOMNode): The  DOMNode to apply the stylesheet to. Applies the styles defined in this  Stylesheet to the node. If the same rule is defined multiple times for the node (e.g. multiple classes modifying the same CSS property), then only the most specific rule will be applied. animate (bool, optional): Animate changed rules. Defaults to  False .",
"func":1
},
{
"ref":"textual.css.stylesheet.Stylesheet.replace_rules",
"url":51,
"doc":"Replace style rules on a node, animating as required. Args: node (DOMNode): A DOM node. rules (RulesMap): Mapping of rules. animate (bool, optional): Enable animation. Defaults to False.",
"func":1
},
{
"ref":"textual.css.stylesheet.Stylesheet.update",
"url":51,
"doc":"Update styles on node and its children. Args: root (DOMNode): Root note to update. animate (bool, optional): Enable CSS animation. Defaults to False.",
"func":1
},
{
"ref":"textual.css.stylesheet.Stylesheet.update_nodes",
"url":51,
"doc":"Update styles for nodes. Args: nodes (DOMNode): Nodes to update. animate (bool, optional): Enable CSS animation. Defaults to False.",
"func":1
},
{
"ref":"textual.css.styles",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap",
"url":52,
"doc":"A typed dict for CSS rules. Any key may be absent, indicating that rule has not been set. Does not define composite rules, that is a rule that is made of a combination of other rules."
},
{
"ref":"textual.css.styles.RulesMap.display",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.visibility",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.layout",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.auto_color",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.color",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.background",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.text_style",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.opacity",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.text_opacity",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.padding",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.margin",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.offset",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.border_top",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.border_right",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.border_bottom",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.border_left",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.outline_top",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.outline_right",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.outline_bottom",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.outline_left",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.box_sizing",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.width",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.height",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.min_width",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.min_height",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.max_width",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.max_height",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.dock",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.overflow_x",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.overflow_y",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.layers",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.layer",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.transitions",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.tint",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.scrollbar_color",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.scrollbar_color_hover",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.scrollbar_color_active",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.scrollbar_corner_color",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.scrollbar_background",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.scrollbar_background_hover",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.scrollbar_background_active",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.scrollbar_gutter",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.scrollbar_size_vertical",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.scrollbar_size_horizontal",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.align_horizontal",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.align_vertical",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.content_align_horizontal",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.content_align_vertical",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.grid_size_rows",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.grid_size_columns",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.grid_gutter_horizontal",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.grid_gutter_vertical",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.grid_rows",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.grid_columns",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.row_span",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.column_span",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.text_align",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.link_color",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.auto_link_color",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.link_background",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.link_style",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.hover_color",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.auto_hover_color",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.hover_background",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RulesMap.hover_style",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.DockGroup",
"url":52,
"doc":"DockGroup(name, edge, z)"
},
{
"ref":"textual.css.styles.DockGroup.name",
"url":52,
"doc":"Alias for field number 0"
},
{
"ref":"textual.css.styles.DockGroup.edge",
"url":52,
"doc":"Alias for field number 1"
},
{
"ref":"textual.css.styles.DockGroup.z",
"url":52,
"doc":"Alias for field number 2"
},
{
"ref":"textual.css.styles.StylesBase",
"url":52,
"doc":"A common base class for Styles and RenderStyles"
},
{
"ref":"textual.css.styles.StylesBase.ANIMATABLE",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.StylesBase.node",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.StylesBase.display",
"url":52,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.StylesBase.visibility",
"url":52,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.StylesBase.layout",
"url":52,
"doc":"Descriptor for getting and setting layout."
},
{
"ref":"textual.css.styles.StylesBase.auto_color",
"url":52,
"doc":"A property that requires a True or False value."
},
{
"ref":"textual.css.styles.StylesBase.color",
"url":52,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.StylesBase.background",
"url":52,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.StylesBase.text_style",
"url":52,
"doc":"Descriptor for getting and set style flag properties (e.g.  bold italic underline )."
},
{
"ref":"textual.css.styles.StylesBase.opacity",
"url":52,
"doc":"Property that can be set either as a float (e.g. 0.1) or a string percentage (e.g. '10%'). Values will be clamped to the range (0, 1)."
},
{
"ref":"textual.css.styles.StylesBase.text_opacity",
"url":52,
"doc":"Property that can be set either as a float (e.g. 0.1) or a string percentage (e.g. '10%'). Values will be clamped to the range (0, 1)."
},
{
"ref":"textual.css.styles.StylesBase.padding",
"url":52,
"doc":"Descriptor for getting and setting spacing properties (e.g. padding and margin)."
},
{
"ref":"textual.css.styles.StylesBase.margin",
"url":52,
"doc":"Descriptor for getting and setting spacing properties (e.g. padding and margin)."
},
{
"ref":"textual.css.styles.StylesBase.offset",
"url":52,
"doc":"Descriptor for getting and setting the offset property. Offset consists of two values, x and y, that a widget's position will be adjusted by before it is rendered."
},
{
"ref":"textual.css.styles.StylesBase.border",
"url":52,
"doc":"Descriptor for getting and setting full borders and outlines. Args: layout (bool): True if the layout should be refreshed after setting, False otherwise."
},
{
"ref":"textual.css.styles.StylesBase.border_top",
"url":52,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.StylesBase.border_right",
"url":52,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.StylesBase.border_bottom",
"url":52,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.StylesBase.border_left",
"url":52,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.StylesBase.outline",
"url":52,
"doc":"Descriptor for getting and setting full borders and outlines. Args: layout (bool): True if the layout should be refreshed after setting, False otherwise."
},
{
"ref":"textual.css.styles.StylesBase.outline_top",
"url":52,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.StylesBase.outline_right",
"url":52,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.StylesBase.outline_bottom",
"url":52,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.StylesBase.outline_left",
"url":52,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.StylesBase.box_sizing",
"url":52,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.StylesBase.width",
"url":52,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.StylesBase.height",
"url":52,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.StylesBase.min_width",
"url":52,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.StylesBase.min_height",
"url":52,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.StylesBase.max_width",
"url":52,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.StylesBase.max_height",
"url":52,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.StylesBase.dock",
"url":52,
"doc":"Descriptor for getting and setting the dock property. The dock property allows you to specify which edge you want to fix a Widget to."
},
{
"ref":"textual.css.styles.StylesBase.overflow_x",
"url":52,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.StylesBase.overflow_y",
"url":52,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.StylesBase.layer",
"url":52,
"doc":"Descriptor for getting and setting name properties."
},
{
"ref":"textual.css.styles.StylesBase.layers",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.StylesBase.transitions",
"url":52,
"doc":"Descriptor for getting transitions properties"
},
{
"ref":"textual.css.styles.StylesBase.tint",
"url":52,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.StylesBase.scrollbar_color",
"url":52,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.StylesBase.scrollbar_color_hover",
"url":52,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.StylesBase.scrollbar_color_active",
"url":52,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.StylesBase.scrollbar_corner_color",
"url":52,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.StylesBase.scrollbar_background",
"url":52,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.StylesBase.scrollbar_background_hover",
"url":52,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.StylesBase.scrollbar_background_active",
"url":52,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.StylesBase.scrollbar_gutter",
"url":52,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.StylesBase.scrollbar_size_vertical",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.StylesBase.scrollbar_size_horizontal",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.StylesBase.align_horizontal",
"url":52,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.StylesBase.align_vertical",
"url":52,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.StylesBase.align",
"url":52,
"doc":"Combines the horizontal and vertical alignment properties in to a single property."
},
{
"ref":"textual.css.styles.StylesBase.content_align_horizontal",
"url":52,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.StylesBase.content_align_vertical",
"url":52,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.StylesBase.content_align",
"url":52,
"doc":"Combines the horizontal and vertical alignment properties in to a single property."
},
{
"ref":"textual.css.styles.StylesBase.grid_rows",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.StylesBase.grid_columns",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.StylesBase.grid_size_columns",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.StylesBase.grid_size_rows",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.StylesBase.grid_gutter_horizontal",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.StylesBase.grid_gutter_vertical",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.StylesBase.row_span",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.StylesBase.column_span",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.StylesBase.text_align",
"url":52,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.StylesBase.link_color",
"url":52,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.StylesBase.auto_link_color",
"url":52,
"doc":"A property that requires a True or False value."
},
{
"ref":"textual.css.styles.StylesBase.link_background",
"url":52,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.StylesBase.link_style",
"url":52,
"doc":"Descriptor for getting and set style flag properties (e.g.  bold italic underline )."
},
{
"ref":"textual.css.styles.StylesBase.hover_color",
"url":52,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.StylesBase.auto_hover_color",
"url":52,
"doc":"A property that requires a True or False value."
},
{
"ref":"textual.css.styles.StylesBase.hover_background",
"url":52,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.StylesBase.hover_style",
"url":52,
"doc":"Descriptor for getting and set style flag properties (e.g.  bold italic underline )."
},
{
"ref":"textual.css.styles.StylesBase.gutter",
"url":52,
"doc":"Get space around widget. Returns: Spacing: Space around widget content."
},
{
"ref":"textual.css.styles.StylesBase.auto_dimensions",
"url":52,
"doc":"Check if width or height are set to 'auto'."
},
{
"ref":"textual.css.styles.StylesBase.has_rule",
"url":52,
"doc":"Check if a rule is set on this Styles object. Args: rule (str): Rule name. Returns: bool:  True if the rules is present, otherwise  False .",
"func":1
},
{
"ref":"textual.css.styles.StylesBase.clear_rule",
"url":52,
"doc":"Removes the rule from the Styles object, as if it had never been set. Args: rule (str): Rule name. Returns: bool:  True if a rule was cleared, or  False if the rule is already not set.",
"func":1
},
{
"ref":"textual.css.styles.StylesBase.get_rules",
"url":52,
"doc":"Get the rules in a mapping. Returns: RulesMap: A TypedDict of the rules.",
"func":1
},
{
"ref":"textual.css.styles.StylesBase.set_rule",
"url":52,
"doc":"Set a rule. Args: rule (str): Rule name. value (object | None): New rule value. Returns: bool:  True if the rule changed, otherwise  False .",
"func":1
},
{
"ref":"textual.css.styles.StylesBase.get_rule",
"url":52,
"doc":"Get an individual rule. Args: rule (str): Name of rule. default (object, optional): Default if rule does not exists. Defaults to None. Returns: object: Rule value or default.",
"func":1
},
{
"ref":"textual.css.styles.StylesBase.refresh",
"url":52,
"doc":"Mark the styles as requiring a refresh. Args: layout (bool, optional): Also require a layout. Defaults to False. children (bool, opional): Also refresh children. Defaults to False.",
"func":1
},
{
"ref":"textual.css.styles.StylesBase.reset",
"url":52,
"doc":"Reset the rules to initial state.",
"func":1
},
{
"ref":"textual.css.styles.StylesBase.merge",
"url":52,
"doc":"Merge values from another Styles. Args: other (Styles): A Styles object.",
"func":1
},
{
"ref":"textual.css.styles.StylesBase.merge_rules",
"url":52,
"doc":"Merge rules in to Styles. Args: rules (RulesMap): A mapping of rules.",
"func":1
},
{
"ref":"textual.css.styles.StylesBase.get_render_rules",
"url":52,
"doc":"Get rules map with defaults.",
"func":1
},
{
"ref":"textual.css.styles.StylesBase.is_animatable",
"url":52,
"doc":"Check if a given rule may be animated. Args: rule (str): Name of the rule. Returns: bool:  True if the rule may be animated, otherwise  False .",
"func":1
},
{
"ref":"textual.css.styles.StylesBase.parse",
"url":52,
"doc":"Parse CSS and return a Styles object. Args: css (str): Textual CSS. path (str): Path or string indicating source of CSS. node (DOMNode, optional): Node to associate with the Styles. Defaults to None. Returns: Styles: A Styles instance containing result of parsing CSS.",
"func":1
},
{
"ref":"textual.css.styles.Styles",
"url":52,
"doc":"Styles(node: 'DOMNode | None' = None, _rules: 'RulesMap' =  , important: 'set[str]' =  )"
},
{
"ref":"textual.css.styles.Styles.important",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.Styles.node",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.Styles.copy",
"url":52,
"doc":"Get a copy of this Styles object.",
"func":1
},
{
"ref":"textual.css.styles.Styles.has_rule",
"url":52,
"doc":"Check if a rule is set on this Styles object. Args: rule (str): Rule name. Returns: bool:  True if the rules is present, otherwise  False .",
"func":1
},
{
"ref":"textual.css.styles.Styles.clear_rule",
"url":52,
"doc":"Removes the rule from the Styles object, as if it had never been set. Args: rule (str): Rule name. Returns: bool:  True if a rule was cleared, or  False if it was already not set.",
"func":1
},
{
"ref":"textual.css.styles.Styles.get_rules",
"url":52,
"doc":"Get the rules in a mapping. Returns: RulesMap: A TypedDict of the rules.",
"func":1
},
{
"ref":"textual.css.styles.Styles.set_rule",
"url":52,
"doc":"Set a rule. Args: rule (str): Rule name. value (object | None): New rule value. Returns: bool:  True if the rule changed, otherwise  False .",
"func":1
},
{
"ref":"textual.css.styles.Styles.get_rule",
"url":52,
"doc":"Get an individual rule. Args: rule (str): Name of rule. default (object, optional): Default if rule does not exists. Defaults to None. Returns: object: Rule value or default.",
"func":1
},
{
"ref":"textual.css.styles.Styles.refresh",
"url":52,
"doc":"Mark the styles as requiring a refresh. Args: layout (bool, optional): Also require a layout. Defaults to False. children (bool, opional): Also refresh children. Defaults to False.",
"func":1
},
{
"ref":"textual.css.styles.Styles.reset",
"url":52,
"doc":"Reset the rules to initial state.",
"func":1
},
{
"ref":"textual.css.styles.Styles.merge",
"url":52,
"doc":"Merge values from another Styles. Args: other (Styles): A Styles object.",
"func":1
},
{
"ref":"textual.css.styles.Styles.merge_rules",
"url":52,
"doc":"Merge rules in to Styles. Args: rules (RulesMap): A mapping of rules.",
"func":1
},
{
"ref":"textual.css.styles.Styles.extract_rules",
"url":52,
"doc":"Extract rules from Styles object, and apply !important css specificity as well as higher specificity of user CSS vs widget CSS. Args: specificity (Specificity3): A node specificity. is_default_rules (bool): True if the rules we're extracting are default (i.e. in Widget.DEFAULT_CSS) rules. False if they're from user defined CSS. Returns: list[tuple[str, Specificity5, Any ]: A list containing a tuple of  ,   .",
"func":1
},
{
"ref":"textual.css.styles.Styles.css_lines",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.Styles.css",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.Styles.display",
"url":52,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.Styles.visibility",
"url":52,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.Styles.layout",
"url":52,
"doc":"Descriptor for getting and setting layout."
},
{
"ref":"textual.css.styles.Styles.auto_color",
"url":52,
"doc":"A property that requires a True or False value."
},
{
"ref":"textual.css.styles.Styles.color",
"url":52,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.Styles.background",
"url":52,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.Styles.text_style",
"url":52,
"doc":"Descriptor for getting and set style flag properties (e.g.  bold italic underline )."
},
{
"ref":"textual.css.styles.Styles.opacity",
"url":52,
"doc":"Property that can be set either as a float (e.g. 0.1) or a string percentage (e.g. '10%'). Values will be clamped to the range (0, 1)."
},
{
"ref":"textual.css.styles.Styles.text_opacity",
"url":52,
"doc":"Property that can be set either as a float (e.g. 0.1) or a string percentage (e.g. '10%'). Values will be clamped to the range (0, 1)."
},
{
"ref":"textual.css.styles.Styles.padding",
"url":52,
"doc":"Descriptor for getting and setting spacing properties (e.g. padding and margin)."
},
{
"ref":"textual.css.styles.Styles.margin",
"url":52,
"doc":"Descriptor for getting and setting spacing properties (e.g. padding and margin)."
},
{
"ref":"textual.css.styles.Styles.offset",
"url":52,
"doc":"Descriptor for getting and setting the offset property. Offset consists of two values, x and y, that a widget's position will be adjusted by before it is rendered."
},
{
"ref":"textual.css.styles.Styles.border",
"url":52,
"doc":"Descriptor for getting and setting full borders and outlines. Args: layout (bool): True if the layout should be refreshed after setting, False otherwise."
},
{
"ref":"textual.css.styles.Styles.border_top",
"url":52,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.Styles.border_right",
"url":52,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.Styles.border_bottom",
"url":52,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.Styles.border_left",
"url":52,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.Styles.outline",
"url":52,
"doc":"Descriptor for getting and setting full borders and outlines. Args: layout (bool): True if the layout should be refreshed after setting, False otherwise."
},
{
"ref":"textual.css.styles.Styles.outline_top",
"url":52,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.Styles.outline_right",
"url":52,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.Styles.outline_bottom",
"url":52,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.Styles.outline_left",
"url":52,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.Styles.box_sizing",
"url":52,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.Styles.width",
"url":52,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.Styles.height",
"url":52,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.Styles.min_width",
"url":52,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.Styles.min_height",
"url":52,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.Styles.max_width",
"url":52,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.Styles.max_height",
"url":52,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.Styles.dock",
"url":52,
"doc":"Descriptor for getting and setting the dock property. The dock property allows you to specify which edge you want to fix a Widget to."
},
{
"ref":"textual.css.styles.Styles.overflow_x",
"url":52,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.Styles.overflow_y",
"url":52,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.Styles.layer",
"url":52,
"doc":"Descriptor for getting and setting name properties."
},
{
"ref":"textual.css.styles.Styles.transitions",
"url":52,
"doc":"Descriptor for getting transitions properties"
},
{
"ref":"textual.css.styles.Styles.tint",
"url":52,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.Styles.scrollbar_color",
"url":52,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.Styles.scrollbar_color_hover",
"url":52,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.Styles.scrollbar_color_active",
"url":52,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.Styles.scrollbar_corner_color",
"url":52,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.Styles.scrollbar_background",
"url":52,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.Styles.scrollbar_background_hover",
"url":52,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.Styles.scrollbar_background_active",
"url":52,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.Styles.scrollbar_gutter",
"url":52,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.Styles.align_horizontal",
"url":52,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.Styles.align_vertical",
"url":52,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.Styles.align",
"url":52,
"doc":"Combines the horizontal and vertical alignment properties in to a single property."
},
{
"ref":"textual.css.styles.Styles.content_align_horizontal",
"url":52,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.Styles.content_align_vertical",
"url":52,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.Styles.content_align",
"url":52,
"doc":"Combines the horizontal and vertical alignment properties in to a single property."
},
{
"ref":"textual.css.styles.Styles.text_align",
"url":52,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.Styles.link_color",
"url":52,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.Styles.auto_link_color",
"url":52,
"doc":"A property that requires a True or False value."
},
{
"ref":"textual.css.styles.Styles.link_background",
"url":52,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.Styles.link_style",
"url":52,
"doc":"Descriptor for getting and set style flag properties (e.g.  bold italic underline )."
},
{
"ref":"textual.css.styles.Styles.hover_color",
"url":52,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.Styles.auto_hover_color",
"url":52,
"doc":"A property that requires a True or False value."
},
{
"ref":"textual.css.styles.Styles.hover_background",
"url":52,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.Styles.hover_style",
"url":52,
"doc":"Descriptor for getting and set style flag properties (e.g.  bold italic underline )."
},
{
"ref":"textual.css.styles.Styles.gutter",
"url":52,
"doc":"Get space around widget. Returns: Spacing: Space around widget content."
},
{
"ref":"textual.css.styles.Styles.auto_dimensions",
"url":52,
"doc":"Check if width or height are set to 'auto'."
},
{
"ref":"textual.css.styles.Styles.get_render_rules",
"url":52,
"doc":"Get rules map with defaults.",
"func":1
},
{
"ref":"textual.css.styles.Styles.is_animatable",
"url":52,
"doc":"Check if a given rule may be animated. Args: rule (str): Name of the rule. Returns: bool:  True if the rule may be animated, otherwise  False .",
"func":1
},
{
"ref":"textual.css.styles.Styles.parse",
"url":52,
"doc":"Parse CSS and return a Styles object. Args: css (str): Textual CSS. path (str): Path or string indicating source of CSS. node (DOMNode, optional): Node to associate with the Styles. Defaults to None. Returns: Styles: A Styles instance containing result of parsing CSS.",
"func":1
},
{
"ref":"textual.css.styles.RenderStyles",
"url":52,
"doc":"Presents a combined view of two Styles object: a base Styles and inline Styles."
},
{
"ref":"textual.css.styles.RenderStyles.node",
"url":52,
"doc":""
},
{
"ref":"textual.css.styles.RenderStyles.base",
"url":52,
"doc":"Quick access to base (css) style."
},
{
"ref":"textual.css.styles.RenderStyles.inline",
"url":52,
"doc":"Quick access to the inline styles."
},
{
"ref":"textual.css.styles.RenderStyles.rich_style",
"url":52,
"doc":"Get a Rich style for this Styles object."
},
{
"ref":"textual.css.styles.RenderStyles.animate",
"url":52,
"doc":"Get an animator to animate style. Example:  python self.animate(\"brightness\", 0.5)  Returns: BoundAnimator: An animator bound to this widget."
},
{
"ref":"textual.css.styles.RenderStyles.refresh",
"url":52,
"doc":"Mark the styles as requiring a refresh. Args: layout (bool, optional): Also require a layout. Defaults to False. children (bool, opional): Also refresh children. Defaults to False.",
"func":1
},
{
"ref":"textual.css.styles.RenderStyles.merge",
"url":52,
"doc":"Merge values from another Styles. Args: other (Styles): A Styles object.",
"func":1
},
{
"ref":"textual.css.styles.RenderStyles.merge_rules",
"url":52,
"doc":"Merge rules in to Styles. Args: rules (RulesMap): A mapping of rules.",
"func":1
},
{
"ref":"textual.css.styles.RenderStyles.reset",
"url":52,
"doc":"Reset the rules to initial state.",
"func":1
},
{
"ref":"textual.css.styles.RenderStyles.has_rule",
"url":52,
"doc":"Check if a rule has been set.",
"func":1
},
{
"ref":"textual.css.styles.RenderStyles.set_rule",
"url":52,
"doc":"Set a rule. Args: rule (str): Rule name. value (object | None): New rule value. Returns: bool:  True if the rule changed, otherwise  False .",
"func":1
},
{
"ref":"textual.css.styles.RenderStyles.get_rule",
"url":52,
"doc":"Get an individual rule. Args: rule (str): Name of rule. default (object, optional): Default if rule does not exists. Defaults to None. Returns: object: Rule value or default.",
"func":1
},
{
"ref":"textual.css.styles.RenderStyles.clear_rule",
"url":52,
"doc":"Clear a rule (from inline).",
"func":1
},
{
"ref":"textual.css.styles.RenderStyles.get_rules",
"url":52,
"doc":"Get rules as a dictionary",
"func":1
},
{
"ref":"textual.css.styles.RenderStyles.css",
"url":52,
"doc":"Get the CSS for the combined styles."
},
{
"ref":"textual.css.styles.RenderStyles.display",
"url":52,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.RenderStyles.visibility",
"url":52,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.RenderStyles.layout",
"url":52,
"doc":"Descriptor for getting and setting layout."
},
{
"ref":"textual.css.styles.RenderStyles.auto_color",
"url":52,
"doc":"A property that requires a True or False value."
},
{
"ref":"textual.css.styles.RenderStyles.color",
"url":52,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.RenderStyles.background",
"url":52,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.RenderStyles.text_style",
"url":52,
"doc":"Descriptor for getting and set style flag properties (e.g.  bold italic underline )."
},
{
"ref":"textual.css.styles.RenderStyles.opacity",
"url":52,
"doc":"Property that can be set either as a float (e.g. 0.1) or a string percentage (e.g. '10%'). Values will be clamped to the range (0, 1)."
},
{
"ref":"textual.css.styles.RenderStyles.text_opacity",
"url":52,
"doc":"Property that can be set either as a float (e.g. 0.1) or a string percentage (e.g. '10%'). Values will be clamped to the range (0, 1)."
},
{
"ref":"textual.css.styles.RenderStyles.padding",
"url":52,
"doc":"Descriptor for getting and setting spacing properties (e.g. padding and margin)."
},
{
"ref":"textual.css.styles.RenderStyles.margin",
"url":52,
"doc":"Descriptor for getting and setting spacing properties (e.g. padding and margin)."
},
{
"ref":"textual.css.styles.RenderStyles.offset",
"url":52,
"doc":"Descriptor for getting and setting the offset property. Offset consists of two values, x and y, that a widget's position will be adjusted by before it is rendered."
},
{
"ref":"textual.css.styles.RenderStyles.border",
"url":52,
"doc":"Descriptor for getting and setting full borders and outlines. Args: layout (bool): True if the layout should be refreshed after setting, False otherwise."
},
{
"ref":"textual.css.styles.RenderStyles.border_top",
"url":52,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.RenderStyles.border_right",
"url":52,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.RenderStyles.border_bottom",
"url":52,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.RenderStyles.border_left",
"url":52,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.RenderStyles.outline",
"url":52,
"doc":"Descriptor for getting and setting full borders and outlines. Args: layout (bool): True if the layout should be refreshed after setting, False otherwise."
},
{
"ref":"textual.css.styles.RenderStyles.outline_top",
"url":52,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.RenderStyles.outline_right",
"url":52,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.RenderStyles.outline_bottom",
"url":52,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.RenderStyles.outline_left",
"url":52,
"doc":"Descriptor for getting and setting outlines and borders along a single edge. For example \"border-right\", \"outline-bottom\", etc."
},
{
"ref":"textual.css.styles.RenderStyles.box_sizing",
"url":52,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.RenderStyles.width",
"url":52,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.RenderStyles.height",
"url":52,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.RenderStyles.min_width",
"url":52,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.RenderStyles.min_height",
"url":52,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.RenderStyles.max_width",
"url":52,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.RenderStyles.max_height",
"url":52,
"doc":"Descriptor for getting and setting scalar properties. Scalars are numeric values with a unit, e.g. \"50vh\"."
},
{
"ref":"textual.css.styles.RenderStyles.dock",
"url":52,
"doc":"Descriptor for getting and setting the dock property. The dock property allows you to specify which edge you want to fix a Widget to."
},
{
"ref":"textual.css.styles.RenderStyles.overflow_x",
"url":52,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.RenderStyles.overflow_y",
"url":52,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.RenderStyles.layer",
"url":52,
"doc":"Descriptor for getting and setting name properties."
},
{
"ref":"textual.css.styles.RenderStyles.transitions",
"url":52,
"doc":"Descriptor for getting transitions properties"
},
{
"ref":"textual.css.styles.RenderStyles.tint",
"url":52,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.RenderStyles.scrollbar_color",
"url":52,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.RenderStyles.scrollbar_color_hover",
"url":52,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.RenderStyles.scrollbar_color_active",
"url":52,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.RenderStyles.scrollbar_corner_color",
"url":52,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.RenderStyles.scrollbar_background",
"url":52,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.RenderStyles.scrollbar_background_hover",
"url":52,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.RenderStyles.scrollbar_background_active",
"url":52,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.RenderStyles.scrollbar_gutter",
"url":52,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.RenderStyles.align_horizontal",
"url":52,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.RenderStyles.align_vertical",
"url":52,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.RenderStyles.align",
"url":52,
"doc":"Combines the horizontal and vertical alignment properties in to a single property."
},
{
"ref":"textual.css.styles.RenderStyles.content_align_horizontal",
"url":52,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.RenderStyles.content_align_vertical",
"url":52,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.RenderStyles.content_align",
"url":52,
"doc":"Combines the horizontal and vertical alignment properties in to a single property."
},
{
"ref":"textual.css.styles.RenderStyles.text_align",
"url":52,
"doc":"Descriptor for getting and setting string properties and ensuring that the set value belongs in the set of valid values."
},
{
"ref":"textual.css.styles.RenderStyles.link_color",
"url":52,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.RenderStyles.auto_link_color",
"url":52,
"doc":"A property that requires a True or False value."
},
{
"ref":"textual.css.styles.RenderStyles.link_background",
"url":52,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.RenderStyles.link_style",
"url":52,
"doc":"Descriptor for getting and set style flag properties (e.g.  bold italic underline )."
},
{
"ref":"textual.css.styles.RenderStyles.hover_color",
"url":52,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.RenderStyles.auto_hover_color",
"url":52,
"doc":"A property that requires a True or False value."
},
{
"ref":"textual.css.styles.RenderStyles.hover_background",
"url":52,
"doc":"Descriptor for getting and setting color properties."
},
{
"ref":"textual.css.styles.RenderStyles.hover_style",
"url":52,
"doc":"Descriptor for getting and set style flag properties (e.g.  bold italic underline )."
},
{
"ref":"textual.css.styles.RenderStyles.gutter",
"url":52,
"doc":"Get space around widget. Returns: Spacing: Space around widget content."
},
{
"ref":"textual.css.styles.RenderStyles.auto_dimensions",
"url":52,
"doc":"Check if width or height are set to 'auto'."
},
{
"ref":"textual.css.styles.RenderStyles.get_render_rules",
"url":52,
"doc":"Get rules map with defaults.",
"func":1
},
{
"ref":"textual.css.styles.RenderStyles.is_animatable",
"url":52,
"doc":"Check if a given rule may be animated. Args: rule (str): Name of the rule. Returns: bool:  True if the rule may be animated, otherwise  False .",
"func":1
},
{
"ref":"textual.css.styles.RenderStyles.parse",
"url":52,
"doc":"Parse CSS and return a Styles object. Args: css (str): Textual CSS. path (str): Path or string indicating source of CSS. node (DOMNode, optional): Node to associate with the Styles. Defaults to None. Returns: Styles: A Styles instance containing result of parsing CSS.",
"func":1
},
{
"ref":"textual.css.parse",
"url":53,
"doc":""
},
{
"ref":"textual.css.parse.parse_selectors",
"url":53,
"doc":"",
"func":1
},
{
"ref":"textual.css.parse.parse_rule_set",
"url":53,
"doc":"",
"func":1
},
{
"ref":"textual.css.parse.parse_declarations",
"url":53,
"doc":"Parse declarations and return a Styles object. Args: css (str): String containing CSS. path (str): Path to the CSS, or something else to identify the location. Returns: Styles: A styles object.",
"func":1
},
{
"ref":"textual.css.parse.substitute_references",
"url":53,
"doc":"Replace variable references with values by substituting variable reference tokens with the tokens representing their values. Args: tokens (Iterable[Token]): Iterator of Tokens which may contain tokens with the name \"variable_ref\". Returns: Iterable[Token]: Yields Tokens such that any variable references (tokens where token.name  \"variable_ref\") have been replaced with the tokens representing the value. In other words, an Iterable of Tokens similar to the original input, but with variables resolved. Substituted tokens will have their referenced_by attribute populated with information about where the tokens are being substituted to.",
"func":1
},
{
"ref":"textual.css.parse.parse",
"url":53,
"doc":"Parse CSS by tokenizing it, performing variable substitution, and generating rule sets from it. Args: css (str): The input CSS path (str): Path to the CSS variables (dict[str, str]): Substitution variables to substitute tokens for. is_default_rules (bool): True if the rules we're extracting are default (i.e. in Widget.DEFAULT_CSS) rules. False if they're from user defined CSS.",
"func":1
},
{
"ref":"textual.css.constants",
"url":54,
"doc":""
},
{
"ref":"textual.css.types",
"url":55,
"doc":""
},
{
"ref":"textual.css.tokenizer",
"url":56,
"doc":""
},
{
"ref":"textual.css.tokenizer.TokenError",
"url":56,
"doc":"Error raised when the CSS cannot be tokenized (syntax error). Args: path (str): Path to source or \" \" if source is parsed from a literal. code (str): The code being parsed. start (tuple[int, int]): Line number of the error. message (str): A message associated with the error. end (tuple[int, int] | None): End location of token, or None if not known. Defaults to None."
},
{
"ref":"textual.css.tokenizer.EOFError",
"url":56,
"doc":"Error raised when the CSS cannot be tokenized (syntax error). Args: path (str): Path to source or \" \" if source is parsed from a literal. code (str): The code being parsed. start (tuple[int, int]): Line number of the error. message (str): A message associated with the error. end (tuple[int, int] | None): End location of token, or None if not known. Defaults to None."
},
{
"ref":"textual.css.tokenizer.Expect",
"url":56,
"doc":""
},
{
"ref":"textual.css.tokenizer.Expect.expect_eof",
"url":56,
"doc":"",
"func":1
},
{
"ref":"textual.css.tokenizer.ReferencedBy",
"url":56,
"doc":"ReferencedBy(name, location, length, code)"
},
{
"ref":"textual.css.tokenizer.ReferencedBy.name",
"url":56,
"doc":"Alias for field number 0"
},
{
"ref":"textual.css.tokenizer.ReferencedBy.location",
"url":56,
"doc":"Alias for field number 1"
},
{
"ref":"textual.css.tokenizer.ReferencedBy.length",
"url":56,
"doc":"Alias for field number 2"
},
{
"ref":"textual.css.tokenizer.ReferencedBy.code",
"url":56,
"doc":"Alias for field number 3"
},
{
"ref":"textual.css.tokenizer.Token",
"url":56,
"doc":"Token(name, value, path, code, location, referenced_by)"
},
{
"ref":"textual.css.tokenizer.Token.name",
"url":56,
"doc":"Alias for field number 0"
},
{
"ref":"textual.css.tokenizer.Token.value",
"url":56,
"doc":"Alias for field number 1"
},
{
"ref":"textual.css.tokenizer.Token.path",
"url":56,
"doc":"Alias for field number 2"
},
{
"ref":"textual.css.tokenizer.Token.code",
"url":56,
"doc":"Alias for field number 3"
},
{
"ref":"textual.css.tokenizer.Token.location",
"url":56,
"doc":"Alias for field number 4"
},
{
"ref":"textual.css.tokenizer.Token.referenced_by",
"url":56,
"doc":"Alias for field number 5"
},
{
"ref":"textual.css.tokenizer.Token.start",
"url":56,
"doc":"Start line and column (1 indexed)."
},
{
"ref":"textual.css.tokenizer.Token.end",
"url":56,
"doc":"End line and column (1 indexed)."
},
{
"ref":"textual.css.tokenizer.Token.with_reference",
"url":56,
"doc":"Return a copy of the Token, with reference information attached. This is used for variable substitution, where a variable reference can refer to tokens which were defined elsewhere. With the additional ReferencedBy data attached, we can track where the token we are referring to is used.",
"func":1
},
{
"ref":"textual.css.tokenizer.Tokenizer",
"url":56,
"doc":""
},
{
"ref":"textual.css.tokenizer.Tokenizer.get_token",
"url":56,
"doc":"",
"func":1
},
{
"ref":"textual.css.tokenizer.Tokenizer.skip_to",
"url":56,
"doc":"",
"func":1
},
{
"ref":"textual.css.query",
"url":57,
"doc":"A DOMQuery is a set of DOM nodes associated with a given CSS selector. This set of nodes may be further filtered with the filter method. Additional methods apply actions to the nodes in the query. If this sounds like JQuery, a (once) popular JS library, it is no coincidence. DOMQuery objects are typically created by Widget.query method. Queries are  lazy . Results will be calculated at the point you iterate over the query, or call a method which evaluates the query, such as first() and last()."
},
{
"ref":"textual.css.query.QueryError",
"url":57,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"textual.css.query.NoMatchingNodesError",
"url":57,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"textual.css.query.WrongType",
"url":57,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"textual.css.query.DOMQuery",
"url":57,
"doc":"Abstract base class for generic types. A generic type is typically declared by inheriting from this class parameterized with one or more type variables. For example, a generic mapping type might be defined as class Mapping(Generic[KT, VT]): def __getitem__(self, key: KT) -> VT:  .  Etc. This class can then be used as follows def lookup_name(mapping: Mapping[KT, VT], key: KT, default: VT) -> VT: try: return mapping[key] except KeyError: return default"
},
{
"ref":"textual.css.query.DOMQuery.node",
"url":57,
"doc":""
},
{
"ref":"textual.css.query.DOMQuery.nodes",
"url":57,
"doc":"Lazily evaluate nodes."
},
{
"ref":"textual.css.query.DOMQuery.filter",
"url":57,
"doc":"Filter this set by the given CSS selector. Args: selector (str): A CSS selector. Returns: DOMQuery: New DOM Query.",
"func":1
},
{
"ref":"textual.css.query.DOMQuery.exclude",
"url":57,
"doc":"Exclude nodes that match a given selector. Args: selector (str): A CSS selector. Returns: DOMQuery: New DOM query.",
"func":1
},
{
"ref":"textual.css.query.DOMQuery.ExpectType",
"url":57,
"doc":""
},
{
"ref":"textual.css.query.DOMQuery.first",
"url":57,
"doc":"Get the  first match node. Args: expect_type (type[ExpectType] | None, optional): Require matched node is of this type, or None for any type. Defaults to None. Raises: WrongType: If the wrong type was found. NoMatchingNodesError: If there are no matching nodes in the query. Returns: Widget | ExpectType: The matching Widget.",
"func":1
},
{
"ref":"textual.css.query.DOMQuery.last",
"url":57,
"doc":"Get the  last match node. Args: expect_type (type[ExpectType] | None, optional): Require matched node is of this type, or None for any type. Defaults to None. Raises: WrongType: If the wrong type was found. NoMatchingNodesError: If there are no matching nodes in the query. Returns: Widget | ExpectType: The matching Widget.",
"func":1
},
{
"ref":"textual.css.query.DOMQuery.results",
"url":57,
"doc":"Get query results, optionally filtered by a given type. Args: filter_type (type[ExpectType] | None): A Widget class to filter results, or None for no filter. Defaults to None. Yields: Iterator[Widget | ExpectType]: An iterator of Widget instances.",
"func":1
},
{
"ref":"textual.css.query.DOMQuery.set_class",
"url":57,
"doc":"Set the given class name(s) according to a condition. Args: add (bool): Add the classes if True, otherwise remove them. Returns: DOMQuery: Self.",
"func":1
},
{
"ref":"textual.css.query.DOMQuery.add_class",
"url":57,
"doc":"Add the given class name(s) to nodes.",
"func":1
},
{
"ref":"textual.css.query.DOMQuery.remove_class",
"url":57,
"doc":"Remove the given class names from the nodes.",
"func":1
},
{
"ref":"textual.css.query.DOMQuery.toggle_class",
"url":57,
"doc":"Toggle the given class names from matched nodes.",
"func":1
},
{
"ref":"textual.css.query.DOMQuery.remove",
"url":57,
"doc":"Remove matched nodes from the DOM",
"func":1
},
{
"ref":"textual.css.query.DOMQuery.set_styles",
"url":57,
"doc":"Set styles on matched nodes. Args: css (str, optional): CSS declarations to parser, or None. Defaults to None.",
"func":1
},
{
"ref":"textual.css.query.DOMQuery.refresh",
"url":57,
"doc":"Refresh matched nodes. Args: repaint (bool): Repaint node(s). defaults to True. layout (bool): Layout node(s). Defaults to False. Returns: DOMQuery: Query for chaining.",
"func":1
},
{
"ref":"textual.css.transition",
"url":58,
"doc":""
},
{
"ref":"textual.css.transition.Transition",
"url":58,
"doc":"Transition(duration, easing, delay)"
},
{
"ref":"textual.css.transition.Transition.duration",
"url":58,
"doc":"Alias for field number 0"
},
{
"ref":"textual.css.transition.Transition.easing",
"url":58,
"doc":"Alias for field number 1"
},
{
"ref":"textual.css.transition.Transition.delay",
"url":58,
"doc":"Alias for field number 2"
},
{
"ref":"textual.css.match",
"url":59,
"doc":""
},
{
"ref":"textual.css.match.match",
"url":59,
"doc":"Check if a given selector matches any of the given selector sets. Args: selector_sets (Iterable[SelectorSet]): Iterable of selector sets. node (DOMNode): DOM node. Returns: bool: True if the node matches the selector, otherwise False.",
"func":1
},
{
"ref":"textual.css.scalar_animation",
"url":60,
"doc":""
},
{
"ref":"textual.css.scalar_animation.ScalarAnimation",
"url":60,
"doc":"Helper class that provides a standard way to create an ABC using inheritance."
},
{
"ref":"textual.css.scalar_animation.ScalarAnimation.on_complete",
"url":60,
"doc":""
},
{
"ref":"textual.css.model",
"url":61,
"doc":""
},
{
"ref":"textual.css.model.SelectorType",
"url":61,
"doc":"An enumeration."
},
{
"ref":"textual.css.model.SelectorType.UNIVERSAL",
"url":61,
"doc":""
},
{
"ref":"textual.css.model.SelectorType.TYPE",
"url":61,
"doc":""
},
{
"ref":"textual.css.model.SelectorType.CLASS",
"url":61,
"doc":""
},
{
"ref":"textual.css.model.SelectorType.ID",
"url":61,
"doc":""
},
{
"ref":"textual.css.model.CombinatorType",
"url":61,
"doc":"An enumeration."
},
{
"ref":"textual.css.model.CombinatorType.SAME",
"url":61,
"doc":""
},
{
"ref":"textual.css.model.CombinatorType.DESCENDENT",
"url":61,
"doc":""
},
{
"ref":"textual.css.model.CombinatorType.CHILD",
"url":61,
"doc":""
},
{
"ref":"textual.css.model.Selector",
"url":61,
"doc":"Represents a CSS selector. Some examples of selectors:  Header.title App > Content"
},
{
"ref":"textual.css.model.Selector.name",
"url":61,
"doc":""
},
{
"ref":"textual.css.model.Selector.pseudo_classes",
"url":61,
"doc":""
},
{
"ref":"textual.css.model.Selector.specificity",
"url":61,
"doc":""
},
{
"ref":"textual.css.model.Selector.combinator",
"url":61,
"doc":""
},
{
"ref":"textual.css.model.Selector.type",
"url":61,
"doc":""
},
{
"ref":"textual.css.model.Selector.advance",
"url":61,
"doc":""
},
{
"ref":"textual.css.model.Selector.css",
"url":61,
"doc":"Rebuilds the selector as it would appear in CSS."
},
{
"ref":"textual.css.model.Selector.check",
"url":61,
"doc":"Check if a given node matches the selector. Args: node (DOMNode): A DOM node. Returns: bool: True if the selector matches, otherwise False.",
"func":1
},
{
"ref":"textual.css.model.Declaration",
"url":61,
"doc":"Declaration(token: 'Token', name: 'str', tokens: 'list[Token]' =  )"
},
{
"ref":"textual.css.model.Declaration.token",
"url":61,
"doc":""
},
{
"ref":"textual.css.model.Declaration.name",
"url":61,
"doc":""
},
{
"ref":"textual.css.model.Declaration.tokens",
"url":61,
"doc":""
},
{
"ref":"textual.css.model.SelectorSet",
"url":61,
"doc":"SelectorSet(selectors: 'list[Selector]' =  , specificity: 'Specificity3' = (0, 0, 0 "
},
{
"ref":"textual.css.model.SelectorSet.selectors",
"url":61,
"doc":""
},
{
"ref":"textual.css.model.SelectorSet.specificity",
"url":61,
"doc":""
},
{
"ref":"textual.css.model.SelectorSet.css",
"url":61,
"doc":""
},
{
"ref":"textual.css.model.SelectorSet.from_selectors",
"url":61,
"doc":"",
"func":1
},
{
"ref":"textual.css.model.RuleSet",
"url":61,
"doc":"RuleSet(selector_set: 'list[SelectorSet]' =  , styles: 'Styles' =  , errors: 'list[tuple[Token, str ' =  , is_default_rules: 'bool' = False, tie_breaker: 'int' = 0, selector_names: 'set[str]' =  )"
},
{
"ref":"textual.css.model.RuleSet.selector_set",
"url":61,
"doc":""
},
{
"ref":"textual.css.model.RuleSet.styles",
"url":61,
"doc":""
},
{
"ref":"textual.css.model.RuleSet.errors",
"url":61,
"doc":""
},
{
"ref":"textual.css.model.RuleSet.selector_names",
"url":61,
"doc":""
},
{
"ref":"textual.css.model.RuleSet.is_default_rules",
"url":61,
"doc":""
},
{
"ref":"textual.css.model.RuleSet.tie_breaker",
"url":61,
"doc":""
},
{
"ref":"textual.css.model.RuleSet.selectors",
"url":61,
"doc":""
},
{
"ref":"textual.css.model.RuleSet.css",
"url":61,
"doc":"Generate the CSS this RuleSet Returns: str: A string containing CSS code."
},
{
"ref":"textual.css.tokenize",
"url":62,
"doc":""
},
{
"ref":"textual.css.tokenize.TokenizerState",
"url":62,
"doc":"State machine for the tokenizer. Attributes: EXPECT: The initial expectation of the tokenizer. Since we start tokenizing at the root scope, we might expect to see either a variable or selector, for example. STATE_MAP: Maps token names to Expects, defines the sets of valid tokens that we'd expect to see next, given the current token. For example, if we've just processed a variable declaration name, we next expect to see the value of that variable."
},
{
"ref":"textual.css.tokenize.TokenizerState.EXPECT",
"url":62,
"doc":""
},
{
"ref":"textual.css.tokenize.TokenizerState.STATE_MAP",
"url":62,
"doc":""
},
{
"ref":"textual.css.tokenize.DeclarationTokenizerState",
"url":62,
"doc":"State machine for the tokenizer. Attributes: EXPECT: The initial expectation of the tokenizer. Since we start tokenizing at the root scope, we might expect to see either a variable or selector, for example. STATE_MAP: Maps token names to Expects, defines the sets of valid tokens that we'd expect to see next, given the current token. For example, if we've just processed a variable declaration name, we next expect to see the value of that variable."
},
{
"ref":"textual.css.tokenize.DeclarationTokenizerState.EXPECT",
"url":62,
"doc":""
},
{
"ref":"textual.css.tokenize.DeclarationTokenizerState.STATE_MAP",
"url":62,
"doc":""
},
{
"ref":"textual.css.tokenize.ValueTokenizerState",
"url":62,
"doc":"State machine for the tokenizer. Attributes: EXPECT: The initial expectation of the tokenizer. Since we start tokenizing at the root scope, we might expect to see either a variable or selector, for example. STATE_MAP: Maps token names to Expects, defines the sets of valid tokens that we'd expect to see next, given the current token. For example, if we've just processed a variable declaration name, we next expect to see the value of that variable."
},
{
"ref":"textual.css.tokenize.ValueTokenizerState.EXPECT",
"url":62,
"doc":""
},
{
"ref":"textual.css.tokenize.tokenize_values",
"url":62,
"doc":"Tokens the values in a dict of strings. Args: values (dict[str, str]): A mapping of CSS variable name on to a value, to be added to the CSS context. Returns: dict[str, list[Token : A mapping of name on to a list of tokens,",
"func":1
},
{
"ref":"textual.css.errors",
"url":63,
"doc":""
},
{
"ref":"textual.css.errors.DeclarationError",
"url":63,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"textual.css.errors.StyleTypeError",
"url":63,
"doc":"Inappropriate argument type."
},
{
"ref":"textual.css.errors.UnresolvedVariableError",
"url":63,
"doc":"Error raised when the CSS cannot be tokenized (syntax error). Args: path (str): Path to source or \" \" if source is parsed from a literal. code (str): The code being parsed. start (tuple[int, int]): Line number of the error. message (str): A message associated with the error. end (tuple[int, int] | None): End location of token, or None if not known. Defaults to None."
},
{
"ref":"textual.css.errors.StyleValueError",
"url":63,
"doc":"Raised when the value of a style property is not valid Attributes: help_text (HelpText | None): Optional HelpText to be rendered when this error is raised."
},
{
"ref":"textual.css.errors.StylesheetError",
"url":63,
"doc":"Common base class for all non-exit exceptions."
}
]