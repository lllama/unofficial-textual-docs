URLS=[
"textual/index.html",
"textual/message_pump.html",
"textual/views/index.html",
"textual/screen_update.html",
"textual/message.html",
"textual/case.html",
"textual/layout_map.html",
"textual/keys.html",
"textual/binding.html",
"textual/layouts/index.html",
"textual/layouts/grid.html",
"textual/layout.html",
"textual/layouts/dock.html",
"textual/layouts/vertical.html",
"textual/geometry.html",
"textual/scrollbar.html",
"textual/widget.html",
"textual/messages.html",
"textual/page.html",
"textual/background.html",
"textual/actions.html",
"textual/view.html",
"textual/app.html",
"textual/widgets/index.html",
"textual/reactive.html",
"textual/driver.html",
"textual/events.html",
"textual/drivers/index.html",
"textual/drivers/linux_driver.html"
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
"ref":"textual.message_pump",
"url":1,
"doc":""
},
{
"ref":"textual.message_pump.NoParent",
"url":1,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"textual.message_pump.CallbackError",
"url":1,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"textual.message_pump.MessagePumpClosed",
"url":1,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"textual.message_pump.MessagePump",
"url":1,
"doc":""
},
{
"ref":"textual.message_pump.MessagePump.task",
"url":1,
"doc":""
},
{
"ref":"textual.message_pump.MessagePump.parent",
"url":1,
"doc":""
},
{
"ref":"textual.message_pump.MessagePump.app",
"url":1,
"doc":"Get the current app."
},
{
"ref":"textual.message_pump.MessagePump.is_parent_active",
"url":1,
"doc":""
},
{
"ref":"textual.message_pump.MessagePump.is_running",
"url":1,
"doc":""
},
{
"ref":"textual.message_pump.MessagePump.log",
"url":1,
"doc":"",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.set_parent",
"url":1,
"doc":"",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.check_message_enabled",
"url":1,
"doc":"",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.disable_messages",
"url":1,
"doc":"Disable message types from being processed.",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.enable_messages",
"url":1,
"doc":"Enable processing of messages types.",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.get_message",
"url":1,
"doc":"Get the next event on the queue, or None if queue is closed. Returns: Optional[Event]: Event object or None.",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.peek_message",
"url":1,
"doc":"Peek the message at the head of the queue (does not remove it from the queue), or return None if the queue is empty. Returns: Optional[Message]: The message or None.",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.set_timer",
"url":1,
"doc":"",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.set_interval",
"url":1,
"doc":"",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.call_later",
"url":1,
"doc":"Run a callback after processing all messages and refreshing the screen. Args: callback (Callable): A callable.",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.close_messages_no_wait",
"url":1,
"doc":"",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.close_messages",
"url":1,
"doc":"Close message queue, and optionally wait for queue to finish processing.",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.start_messages",
"url":1,
"doc":"",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.process_messages",
"url":1,
"doc":"",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.dispatch_message",
"url":1,
"doc":"",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.on_event",
"url":1,
"doc":"",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.on_message",
"url":1,
"doc":"",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.post_message_no_wait",
"url":1,
"doc":"",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.post_message",
"url":1,
"doc":"",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.post_message_from_child_no_wait",
"url":1,
"doc":"",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.post_message_from_child",
"url":1,
"doc":"",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.on_callback",
"url":1,
"doc":"",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.emit_no_wait",
"url":1,
"doc":"",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.emit",
"url":1,
"doc":"",
"func":1
},
{
"ref":"textual.message_pump.MessagePump.on_timer",
"url":1,
"doc":"",
"func":1
},
{
"ref":"textual.views",
"url":2,
"doc":""
},
{
"ref":"textual.screen_update",
"url":3,
"doc":""
},
{
"ref":"textual.screen_update.ScreenUpdate",
"url":3,
"doc":""
},
{
"ref":"textual.screen_update.ScreenUpdate.render",
"url":3,
"doc":"",
"func":1
},
{
"ref":"textual.message",
"url":4,
"doc":""
},
{
"ref":"textual.message.Message",
"url":4,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.message.Message.bubble",
"url":4,
"doc":""
},
{
"ref":"textual.message.Message.verbosity",
"url":4,
"doc":""
},
{
"ref":"textual.message.Message.is_forwarded",
"url":4,
"doc":""
},
{
"ref":"textual.message.Message.set_forwarded",
"url":4,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.message.Message.can_replace",
"url":4,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.message.Message.prevent_default",
"url":4,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.message.Message.stop",
"url":4,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.message.Message.wait",
"url":4,
"doc":"Wait for the message to be processed.",
"func":1
},
{
"ref":"textual.message.Message.name",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.message.Message.sender",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.message.Message.time",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
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
"ref":"textual.layout_map",
"url":6,
"doc":""
},
{
"ref":"textual.layout_map.RenderRegion",
"url":6,
"doc":"RenderRegion(region, order, clip)"
},
{
"ref":"textual.layout_map.RenderRegion.region",
"url":6,
"doc":"Alias for field number 0"
},
{
"ref":"textual.layout_map.RenderRegion.order",
"url":6,
"doc":"Alias for field number 1"
},
{
"ref":"textual.layout_map.RenderRegion.clip",
"url":6,
"doc":"Alias for field number 2"
},
{
"ref":"textual.layout_map.LayoutMap",
"url":6,
"doc":""
},
{
"ref":"textual.layout_map.LayoutMap.items",
"url":6,
"doc":"",
"func":1
},
{
"ref":"textual.layout_map.LayoutMap.keys",
"url":6,
"doc":"",
"func":1
},
{
"ref":"textual.layout_map.LayoutMap.values",
"url":6,
"doc":"",
"func":1
},
{
"ref":"textual.layout_map.LayoutMap.clear",
"url":6,
"doc":"",
"func":1
},
{
"ref":"textual.layout_map.LayoutMap.add_widget",
"url":6,
"doc":"",
"func":1
},
{
"ref":"textual.keys",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys",
"url":7,
"doc":"List of keys for use in key bindings. Note that this is an \"StrEnum\", all values can be compared against strings."
},
{
"ref":"textual.keys.Keys.value",
"url":7,
"doc":"The value of the Enum member."
},
{
"ref":"textual.keys.Keys.Escape",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftEscape",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.Return",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlAt",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlA",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlB",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlC",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlD",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlE",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlG",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlH",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlI",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlJ",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlK",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlL",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlM",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlN",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlO",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlP",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlQ",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlR",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlS",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlT",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlU",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlV",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlW",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlX",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlY",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlZ",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.Control1",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.Control2",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.Control3",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.Control4",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.Control5",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.Control6",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.Control7",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.Control8",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.Control9",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.Control0",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShift1",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShift2",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShift3",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShift4",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShift5",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShift6",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShift7",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShift8",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShift9",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShift0",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlBackslash",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlSquareClose",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlCircumflex",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlUnderscore",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.Left",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.Right",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.Up",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.Down",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.Home",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.End",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.Insert",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.Delete",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.PageUp",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.PageDown",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlLeft",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlRight",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlUp",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlDown",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlHome",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlEnd",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlInsert",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlDelete",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlPageUp",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlPageDown",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftLeft",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftRight",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftUp",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftDown",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftHome",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftEnd",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftInsert",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftDelete",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftPageUp",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftPageDown",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShiftLeft",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShiftRight",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShiftUp",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShiftDown",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShiftHome",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShiftEnd",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShiftInsert",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShiftDelete",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShiftPageUp",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlShiftPageDown",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.BackTab",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.F1",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.F2",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.F3",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.F4",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.F5",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.F6",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.F7",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.F8",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.F9",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.F10",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.F11",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.F12",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.F13",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.F14",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.F15",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.F16",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.F17",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.F18",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.F19",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.F20",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.F21",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.F22",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.F23",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.F24",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF1",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF2",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF3",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF4",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF5",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF6",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF7",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF8",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF9",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF10",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF11",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF12",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF13",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF14",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF15",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF16",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF17",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF18",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF19",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF20",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF21",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF22",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF23",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlF24",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.Any",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ScrollUp",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ScrollDown",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.CPRResponse",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.Vt100MouseEvent",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.WindowsMouseEvent",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.BracketedPaste",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.Ignore",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ControlSpace",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.Tab",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.Enter",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.Backspace",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftControlLeft",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftControlRight",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftControlHome",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Keys.ShiftControlEnd",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Binding",
"url":7,
"doc":"Binding(action: str, description: str, show: bool = False)"
},
{
"ref":"textual.keys.Binding.action",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Binding.description",
"url":7,
"doc":""
},
{
"ref":"textual.keys.Binding.show",
"url":7,
"doc":""
},
{
"ref":"textual.binding",
"url":8,
"doc":""
},
{
"ref":"textual.binding.NoBinding",
"url":8,
"doc":"A binding was not found."
},
{
"ref":"textual.binding.Binding",
"url":8,
"doc":"Binding(key: 'str', action: 'str', description: 'str', show: 'bool' = False, key_display: 'str | None' = None, allow_forward: 'bool' = True)"
},
{
"ref":"textual.binding.Binding.key",
"url":8,
"doc":""
},
{
"ref":"textual.binding.Binding.action",
"url":8,
"doc":""
},
{
"ref":"textual.binding.Binding.description",
"url":8,
"doc":""
},
{
"ref":"textual.binding.Binding.show",
"url":8,
"doc":""
},
{
"ref":"textual.binding.Binding.key_display",
"url":8,
"doc":""
},
{
"ref":"textual.binding.Binding.allow_forward",
"url":8,
"doc":""
},
{
"ref":"textual.binding.Bindings",
"url":8,
"doc":"Manage a set of bindings."
},
{
"ref":"textual.binding.Bindings.shown_keys",
"url":8,
"doc":""
},
{
"ref":"textual.binding.Bindings.bind",
"url":8,
"doc":"",
"func":1
},
{
"ref":"textual.binding.Bindings.get_key",
"url":8,
"doc":"",
"func":1
},
{
"ref":"textual.binding.Bindings.allow_forward",
"url":8,
"doc":"",
"func":1
},
{
"ref":"textual.binding.BindingStack",
"url":8,
"doc":"Manage a stack of bindings."
},
{
"ref":"textual.binding.BindingStack.push",
"url":8,
"doc":"",
"func":1
},
{
"ref":"textual.binding.BindingStack.pop",
"url":8,
"doc":"",
"func":1
},
{
"ref":"textual.binding.BindingStack.get_key",
"url":8,
"doc":"",
"func":1
},
{
"ref":"textual.layouts",
"url":9,
"doc":""
},
{
"ref":"textual.layouts.grid",
"url":10,
"doc":""
},
{
"ref":"textual.layouts.grid.GridOptions",
"url":10,
"doc":"GridOptions(name: 'str', size: 'int | None' = None, fraction: 'int' = 1, min_size: 'int' = 1, max_size: 'int | None' = None)"
},
{
"ref":"textual.layouts.grid.GridOptions.name",
"url":10,
"doc":""
},
{
"ref":"textual.layouts.grid.GridOptions.size",
"url":10,
"doc":""
},
{
"ref":"textual.layouts.grid.GridOptions.fraction",
"url":10,
"doc":""
},
{
"ref":"textual.layouts.grid.GridOptions.min_size",
"url":10,
"doc":""
},
{
"ref":"textual.layouts.grid.GridOptions.max_size",
"url":10,
"doc":""
},
{
"ref":"textual.layouts.grid.GridArea",
"url":10,
"doc":"GridArea(col_start, col_end, row_start, row_end)"
},
{
"ref":"textual.layouts.grid.GridArea.col_start",
"url":10,
"doc":"Alias for field number 0"
},
{
"ref":"textual.layouts.grid.GridArea.col_end",
"url":10,
"doc":"Alias for field number 1"
},
{
"ref":"textual.layouts.grid.GridArea.row_start",
"url":10,
"doc":"Alias for field number 2"
},
{
"ref":"textual.layouts.grid.GridArea.row_end",
"url":10,
"doc":"Alias for field number 3"
},
{
"ref":"textual.layouts.grid.GridLayout",
"url":10,
"doc":"Responsible for arranging Widgets in a view and rendering them."
},
{
"ref":"textual.layouts.grid.GridLayout.is_row_visible",
"url":10,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.grid.GridLayout.is_column_visible",
"url":10,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.grid.GridLayout.show_row",
"url":10,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.grid.GridLayout.show_column",
"url":10,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.grid.GridLayout.add_column",
"url":10,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.grid.GridLayout.add_row",
"url":10,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.grid.GridLayout.add_areas",
"url":10,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.grid.GridLayout.set_gap",
"url":10,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.grid.GridLayout.set_gutter",
"url":10,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.grid.GridLayout.add_widget",
"url":10,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.grid.GridLayout.place",
"url":10,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.grid.GridLayout.set_repeat",
"url":10,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.grid.GridLayout.set_align",
"url":10,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.grid.GridLayout.get_widgets",
"url":10,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.grid.GridLayout.arrange",
"url":10,
"doc":"Generate a map that associates widgets with their location on screen. Args: width (int): [description] height (int): [description] offset (Point, optional): [description]. Defaults to Point(0, 0). Returns: dict[Widget, OrderedRegion]: [description]",
"func":1
},
{
"ref":"textual.layouts.grid.GridLayout.get_offset",
"url":11,
"doc":"Get the offset of a widget.",
"func":1
},
{
"ref":"textual.layouts.grid.GridLayout.get_widget_at",
"url":11,
"doc":"Get the widget under the given point or None.",
"func":1
},
{
"ref":"textual.layouts.grid.GridLayout.cuts",
"url":11,
"doc":"Get vertical cuts. A cut is every point on a line where a widget starts or ends. Returns: list[list[int : A list of cuts for every line."
},
{
"ref":"textual.layouts.grid.GridLayout.render",
"url":11,
"doc":"Render a layout. Args: console (Console): Console instance. clip (Optional[Region]): Region to clip to. Returns: SegmentLines: A renderable",
"func":1
},
{
"ref":"textual.layouts.dock",
"url":12,
"doc":""
},
{
"ref":"textual.layouts.dock.DockOptions",
"url":12,
"doc":"DockOptions(size: 'int | None' = None, fraction: 'int' = 1, min_size: 'int' = 1)"
},
{
"ref":"textual.layouts.dock.DockOptions.size",
"url":12,
"doc":""
},
{
"ref":"textual.layouts.dock.DockOptions.fraction",
"url":12,
"doc":""
},
{
"ref":"textual.layouts.dock.DockOptions.min_size",
"url":12,
"doc":""
},
{
"ref":"textual.layouts.dock.Dock",
"url":12,
"doc":"Dock(edge: 'DockEdge', widgets: 'Sequence[Widget]', z: 'int' = 0)"
},
{
"ref":"textual.layouts.dock.Dock.edge",
"url":12,
"doc":""
},
{
"ref":"textual.layouts.dock.Dock.widgets",
"url":12,
"doc":""
},
{
"ref":"textual.layouts.dock.Dock.z",
"url":12,
"doc":""
},
{
"ref":"textual.layouts.dock.DockLayout",
"url":12,
"doc":"Responsible for arranging Widgets in a view and rendering them."
},
{
"ref":"textual.layouts.dock.DockLayout.get_widgets",
"url":12,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.dock.DockLayout.arrange",
"url":12,
"doc":"Generate a layout map that defines where on the screen the widgets will be drawn. Args: console (Console): Console instance. size (Dimensions): Size of container. viewport (Region): Screen relative viewport. Returns: Iterable[WidgetPlacement]: An iterable of widget location",
"func":1
},
{
"ref":"textual.layouts.dock.DockLayout.get_offset",
"url":11,
"doc":"Get the offset of a widget.",
"func":1
},
{
"ref":"textual.layouts.dock.DockLayout.get_widget_at",
"url":11,
"doc":"Get the widget under the given point or None.",
"func":1
},
{
"ref":"textual.layouts.dock.DockLayout.cuts",
"url":11,
"doc":"Get vertical cuts. A cut is every point on a line where a widget starts or ends. Returns: list[list[int : A list of cuts for every line."
},
{
"ref":"textual.layouts.dock.DockLayout.render",
"url":11,
"doc":"Render a layout. Args: console (Console): Console instance. clip (Optional[Region]): Region to clip to. Returns: SegmentLines: A renderable",
"func":1
},
{
"ref":"textual.layouts.vertical",
"url":13,
"doc":""
},
{
"ref":"textual.layouts.vertical.VerticalLayout",
"url":13,
"doc":"Responsible for arranging Widgets in a view and rendering them."
},
{
"ref":"textual.layouts.vertical.VerticalLayout.add",
"url":13,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.vertical.VerticalLayout.clear",
"url":13,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.vertical.VerticalLayout.get_widgets",
"url":13,
"doc":"",
"func":1
},
{
"ref":"textual.layouts.vertical.VerticalLayout.arrange",
"url":13,
"doc":"Generate a layout map that defines where on the screen the widgets will be drawn. Args: console (Console): Console instance. size (Dimensions): Size of container. viewport (Region): Screen relative viewport. Returns: Iterable[WidgetPlacement]: An iterable of widget location",
"func":1
},
{
"ref":"textual.layouts.vertical.VerticalLayout.get_offset",
"url":11,
"doc":"Get the offset of a widget.",
"func":1
},
{
"ref":"textual.layouts.vertical.VerticalLayout.get_widget_at",
"url":11,
"doc":"Get the widget under the given point or None.",
"func":1
},
{
"ref":"textual.layouts.vertical.VerticalLayout.cuts",
"url":11,
"doc":"Get vertical cuts. A cut is every point on a line where a widget starts or ends. Returns: list[list[int : A list of cuts for every line."
},
{
"ref":"textual.layouts.vertical.VerticalLayout.render",
"url":11,
"doc":"Render a layout. Args: console (Console): Console instance. clip (Optional[Region]): Region to clip to. Returns: SegmentLines: A renderable",
"func":1
},
{
"ref":"textual.geometry",
"url":14,
"doc":""
},
{
"ref":"textual.geometry.clamp",
"url":14,
"doc":"Clamps a value between two other values. Args: value (T): A value minimum (T): Minimum value maximum (T): maximum value Returns: T: New value that is not less than the minimum or greater than the maximum.",
"func":1
},
{
"ref":"textual.geometry.Offset",
"url":14,
"doc":"A point defined by x and y coordinates."
},
{
"ref":"textual.geometry.Offset.x",
"url":14,
"doc":"Alias for field number 0"
},
{
"ref":"textual.geometry.Offset.y",
"url":14,
"doc":"Alias for field number 1"
},
{
"ref":"textual.geometry.Offset.is_origin",
"url":14,
"doc":"Check if the point is at the origin (0, 0)"
},
{
"ref":"textual.geometry.Offset.blend",
"url":14,
"doc":"Blend (interpolate) to a new point. Args: destination (Point): Point where progress is 1.0 factor (float): A value between 0 and 1.0 Returns: Point: A new point on a line between self and destination",
"func":1
},
{
"ref":"textual.geometry.Size",
"url":14,
"doc":"An area defined by its width and height."
},
{
"ref":"textual.geometry.Size.width",
"url":14,
"doc":"Alias for field number 0"
},
{
"ref":"textual.geometry.Size.height",
"url":14,
"doc":"Alias for field number 1"
},
{
"ref":"textual.geometry.Size.area",
"url":14,
"doc":"Get the area of the size. Returns: int: Area in cells."
},
{
"ref":"textual.geometry.Size.region",
"url":14,
"doc":"Get a region of the same size."
},
{
"ref":"textual.geometry.Size.contains",
"url":14,
"doc":"Check if a point is in the size. Args: x (int): X coordinate (column) y (int): Y coordinate (row) Returns: bool: True if the point is within the region.",
"func":1
},
{
"ref":"textual.geometry.Size.contains_point",
"url":14,
"doc":"Check if a point is in the size. Args: point (tuple[int, int]): A tuple of x and y coordinates. Returns: bool: True if the point is within the region.",
"func":1
},
{
"ref":"textual.geometry.Region",
"url":14,
"doc":"Defines a rectangular region."
},
{
"ref":"textual.geometry.Region.x",
"url":14,
"doc":"Alias for field number 0"
},
{
"ref":"textual.geometry.Region.y",
"url":14,
"doc":"Alias for field number 1"
},
{
"ref":"textual.geometry.Region.width",
"url":14,
"doc":"Alias for field number 2"
},
{
"ref":"textual.geometry.Region.height",
"url":14,
"doc":"Alias for field number 3"
},
{
"ref":"textual.geometry.Region.from_corners",
"url":14,
"doc":"Construct a Region form the top left and bottom right corners. Args: x1 (int): Top left x y1 (int): Top left y x2 (int): Bottom right x y2 (int): Bottom right y Returns: Region: A new region.",
"func":1
},
{
"ref":"textual.geometry.Region.from_origin",
"url":14,
"doc":"Create a region from origin and size. Args: origin (Point): Origin (top left point) size (tuple[int, int]): Dimensions of region. Returns: Region: A region instance.",
"func":1
},
{
"ref":"textual.geometry.Region.x_extents",
"url":14,
"doc":"Get the starting and ending x coord. The end value is non inclusive. Returns: tuple[int, int]: [description]"
},
{
"ref":"textual.geometry.Region.y_extents",
"url":14,
"doc":"Get the starting and ending x coord. The end value is non inclusive. Returns: tuple[int, int]: [description]"
},
{
"ref":"textual.geometry.Region.x_max",
"url":14,
"doc":"Maximum X value (non inclusive)"
},
{
"ref":"textual.geometry.Region.y_max",
"url":14,
"doc":"Maximum Y value (non inclusive)"
},
{
"ref":"textual.geometry.Region.area",
"url":14,
"doc":"Get the area within the region."
},
{
"ref":"textual.geometry.Region.origin",
"url":14,
"doc":"Get the start point of the region."
},
{
"ref":"textual.geometry.Region.size",
"url":14,
"doc":"Get the size of the region."
},
{
"ref":"textual.geometry.Region.corners",
"url":14,
"doc":"Get the maxima and minima of region. Returns: tuple[int, int, int, int]: A tuple of ( ,  ,  ,  )"
},
{
"ref":"textual.geometry.Region.x_range",
"url":14,
"doc":"A range object for X coordinates"
},
{
"ref":"textual.geometry.Region.y_range",
"url":14,
"doc":"A range object for Y coordinates"
},
{
"ref":"textual.geometry.Region.expand",
"url":14,
"doc":"Increase the size of the region by adding a border. Args: size (tuple[int, int]): Additional width and height. Returns: Region: A new region.",
"func":1
},
{
"ref":"textual.geometry.Region.overlaps",
"url":14,
"doc":"Check if another region overlaps this region. Args: other (Region): A Region. Returns: bool: True if other region shares any cells with this region.",
"func":1
},
{
"ref":"textual.geometry.Region.contains",
"url":14,
"doc":"Check if a point is in the region. Args: x (int): X coordinate (column) y (int): Y coordinate (row) Returns: bool: True if the point is within the region.",
"func":1
},
{
"ref":"textual.geometry.Region.contains_point",
"url":14,
"doc":"Check if a point is in the region. Args: point (tuple[int, int]): A tuple of x and y coordinates. Returns: bool: True if the point is within the region.",
"func":1
},
{
"ref":"textual.geometry.Region.contains_region",
"url":14,
"doc":"Check if a region is entirely contained within this region. Args: other (Region): A region. Returns: bool: True if the other region fits perfectly within this region.",
"func":1
},
{
"ref":"textual.geometry.Region.translate",
"url":14,
"doc":"Move the origin of the Region. Args: translate_x (int): Value to add to x coordinate. translate_y (int): Value to add to y coordinate. Returns: Region: A new region shifted by x, y",
"func":1
},
{
"ref":"textual.geometry.Region.clip",
"url":14,
"doc":"Clip this region to fit within width, height. Args: width (int): Width of bounds. height (int): Height of bounds. Returns: Region: Clipped region.",
"func":1
},
{
"ref":"textual.geometry.Region.intersection",
"url":14,
"doc":"Get that covers both regions. Args: region (Region): A region that overlaps this region. Returns: Region: A new region that fits within  region .",
"func":1
},
{
"ref":"textual.geometry.Region.union",
"url":14,
"doc":"Get a new region that contains both regions. Args: region (Region): [description] Returns: Region: [description]",
"func":1
},
{
"ref":"textual.geometry.Spacing",
"url":14,
"doc":"The spacing around a renderable."
},
{
"ref":"textual.geometry.Spacing.top",
"url":14,
"doc":"Alias for field number 0"
},
{
"ref":"textual.geometry.Spacing.right",
"url":14,
"doc":"Alias for field number 1"
},
{
"ref":"textual.geometry.Spacing.bottom",
"url":14,
"doc":"Alias for field number 2"
},
{
"ref":"textual.geometry.Spacing.left",
"url":14,
"doc":"Alias for field number 3"
},
{
"ref":"textual.geometry.Spacing.width",
"url":14,
"doc":"Total space in width."
},
{
"ref":"textual.geometry.Spacing.height",
"url":14,
"doc":"Total space in height."
},
{
"ref":"textual.geometry.Spacing.top_left",
"url":14,
"doc":"Top left space."
},
{
"ref":"textual.geometry.Spacing.bottom_right",
"url":14,
"doc":"Bottom right space."
},
{
"ref":"textual.geometry.Spacing.unpack",
"url":14,
"doc":"Unpack padding specified in CSS style.",
"func":1
},
{
"ref":"textual.scrollbar",
"url":15,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollUp",
"url":15,
"doc":"Message sent when clicking above handle. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.scrollbar.ScrollUp.sender",
"url":15,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollUp.bubble",
"url":15,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollUp.verbosity",
"url":15,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollUp.set_forwarded",
"url":4,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollUp.can_replace",
"url":4,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.scrollbar.ScrollUp.prevent_default",
"url":4,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollUp.stop",
"url":4,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollUp.wait",
"url":4,
"doc":"Wait for the message to be processed.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollUp.name",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollUp.time",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollDown",
"url":15,
"doc":"Message sent when clicking below handle. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.scrollbar.ScrollDown.sender",
"url":15,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollDown.bubble",
"url":15,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollDown.verbosity",
"url":15,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollDown.set_forwarded",
"url":4,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollDown.can_replace",
"url":4,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.scrollbar.ScrollDown.prevent_default",
"url":4,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollDown.stop",
"url":4,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollDown.wait",
"url":4,
"doc":"Wait for the message to be processed.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollDown.name",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollDown.time",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollLeft",
"url":15,
"doc":"Message sent when clicking above handle. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.scrollbar.ScrollLeft.sender",
"url":15,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollLeft.bubble",
"url":15,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollLeft.verbosity",
"url":15,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollLeft.set_forwarded",
"url":4,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollLeft.can_replace",
"url":4,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.scrollbar.ScrollLeft.prevent_default",
"url":4,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollLeft.stop",
"url":4,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollLeft.wait",
"url":4,
"doc":"Wait for the message to be processed.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollLeft.name",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollLeft.time",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollRight",
"url":15,
"doc":"Message sent when clicking below handle. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.scrollbar.ScrollRight.sender",
"url":15,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollRight.bubble",
"url":15,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollRight.verbosity",
"url":15,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollRight.set_forwarded",
"url":4,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollRight.can_replace",
"url":4,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.scrollbar.ScrollRight.prevent_default",
"url":4,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollRight.stop",
"url":4,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollRight.wait",
"url":4,
"doc":"Wait for the message to be processed.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollRight.name",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollRight.time",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollTo",
"url":15,
"doc":"Message sent when click and dragging handle. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.scrollbar.ScrollTo.sender",
"url":15,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollTo.bubble",
"url":15,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollTo.verbosity",
"url":15,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollTo.set_forwarded",
"url":4,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollTo.can_replace",
"url":4,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.scrollbar.ScrollTo.prevent_default",
"url":4,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollTo.stop",
"url":4,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollTo.wait",
"url":4,
"doc":"Wait for the message to be processed.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollTo.name",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollTo.time",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.scrollbar.ScrollBarRender",
"url":15,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollBarRender.render_bar",
"url":15,
"doc":"",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar",
"url":15,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollBar.virtual_size",
"url":15,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scrollbar.ScrollBar.window_size",
"url":15,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scrollbar.ScrollBar.position",
"url":15,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scrollbar.ScrollBar.mouse_over",
"url":15,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scrollbar.ScrollBar.grabbed",
"url":15,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scrollbar.ScrollBar.render",
"url":15,
"doc":"Get renderable for widget. Returns: RenderableType: Any renderable",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.on_enter",
"url":15,
"doc":"",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.on_leave",
"url":15,
"doc":"",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.action_scroll_down",
"url":15,
"doc":"",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.action_scroll_up",
"url":15,
"doc":"",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.action_grab",
"url":15,
"doc":"",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.action_released",
"url":15,
"doc":"",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.on_mouse_up",
"url":15,
"doc":"",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.on_mouse_capture",
"url":15,
"doc":"",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.on_mouse_release",
"url":15,
"doc":"",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.on_mouse_move",
"url":15,
"doc":"",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.can_focus",
"url":15,
"doc":""
},
{
"ref":"textual.scrollbar.ScrollBar.visible",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scrollbar.ScrollBar.layout_size",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scrollbar.ScrollBar.layout_fraction",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scrollbar.ScrollBar.layout_min_size",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scrollbar.ScrollBar.layout_offset_x",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scrollbar.ScrollBar.layout_offset_y",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scrollbar.ScrollBar.style",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scrollbar.ScrollBar.padding",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scrollbar.ScrollBar.margin",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scrollbar.ScrollBar.border",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scrollbar.ScrollBar.border_style",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scrollbar.ScrollBar.border_title",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.scrollbar.ScrollBar.render_styled",
"url":16,
"doc":"Applies style attributes to the default renderable. Returns: RenderableType: A new renderable.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.console",
"url":16,
"doc":"Get the current console."
},
{
"ref":"textual.scrollbar.ScrollBar.root_view",
"url":16,
"doc":"Return the top-most view."
},
{
"ref":"textual.scrollbar.ScrollBar.layout_offset",
"url":16,
"doc":"Get the layout offset as a tuple."
},
{
"ref":"textual.scrollbar.ScrollBar.call_later",
"url":16,
"doc":"Run a callback after processing all messages and refreshing the screen. Args: callback (Callable): A callable.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.refresh",
"url":16,
"doc":"Initiate a refresh of the widget. This method sets an internal flag to perform a refresh, which will be done on the next idle event. Only one refresh will be done even if this method is called multiple times. Args: repaint (bool, optional): Repaint the widget (will call render() again). Defaults to True. layout (bool, optional): Also layout widgets in the view. Defaults to False.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.dispatch_key",
"url":16,
"doc":"Dispatch a key event to method. This method will call the method named 'key_ ' if it exists. Args: event (events.Key): A key event.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.app",
"url":1,
"doc":"Get the current app."
},
{
"ref":"textual.scrollbar.ScrollBar.disable_messages",
"url":1,
"doc":"Disable message types from being processed.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.enable_messages",
"url":1,
"doc":"Enable processing of messages types.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.get_message",
"url":1,
"doc":"Get the next event on the queue, or None if queue is closed. Returns: Optional[Event]: Event object or None.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.peek_message",
"url":1,
"doc":"Peek the message at the head of the queue (does not remove it from the queue), or return None if the queue is empty. Returns: Optional[Message]: The message or None.",
"func":1
},
{
"ref":"textual.scrollbar.ScrollBar.close_messages",
"url":1,
"doc":"Close message queue, and optionally wait for queue to finish processing.",
"func":1
},
{
"ref":"textual.messages",
"url":17,
"doc":""
},
{
"ref":"textual.messages.Update",
"url":17,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.messages.Update.sender",
"url":17,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.Update.can_replace",
"url":17,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.messages.Update.bubble",
"url":17,
"doc":""
},
{
"ref":"textual.messages.Update.verbosity",
"url":17,
"doc":""
},
{
"ref":"textual.messages.Update.set_forwarded",
"url":4,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.messages.Update.prevent_default",
"url":4,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.messages.Update.stop",
"url":4,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.messages.Update.wait",
"url":4,
"doc":"Wait for the message to be processed.",
"func":1
},
{
"ref":"textual.messages.Update.name",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.Update.time",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.Layout",
"url":17,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.messages.Layout.sender",
"url":17,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.Layout.can_replace",
"url":17,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.messages.Layout.bubble",
"url":17,
"doc":""
},
{
"ref":"textual.messages.Layout.verbosity",
"url":17,
"doc":""
},
{
"ref":"textual.messages.Layout.set_forwarded",
"url":4,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.messages.Layout.prevent_default",
"url":4,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.messages.Layout.stop",
"url":4,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.messages.Layout.wait",
"url":4,
"doc":"Wait for the message to be processed.",
"func":1
},
{
"ref":"textual.messages.Layout.name",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.Layout.time",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.CursorMove",
"url":17,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.messages.CursorMove.sender",
"url":17,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.CursorMove.bubble",
"url":17,
"doc":""
},
{
"ref":"textual.messages.CursorMove.verbosity",
"url":17,
"doc":""
},
{
"ref":"textual.messages.CursorMove.set_forwarded",
"url":4,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.messages.CursorMove.can_replace",
"url":4,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.messages.CursorMove.prevent_default",
"url":4,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.messages.CursorMove.stop",
"url":4,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.messages.CursorMove.wait",
"url":4,
"doc":"Wait for the message to be processed.",
"func":1
},
{
"ref":"textual.messages.CursorMove.name",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.messages.CursorMove.time",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.page",
"url":18,
"doc":""
},
{
"ref":"textual.page.PageUpdate",
"url":18,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.page.PageUpdate.sender",
"url":18,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.page.PageUpdate.can_replace",
"url":18,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.page.PageUpdate.bubble",
"url":18,
"doc":""
},
{
"ref":"textual.page.PageUpdate.verbosity",
"url":18,
"doc":""
},
{
"ref":"textual.page.PageUpdate.set_forwarded",
"url":4,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.page.PageUpdate.prevent_default",
"url":4,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.page.PageUpdate.stop",
"url":4,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.page.PageUpdate.wait",
"url":4,
"doc":"Wait for the message to be processed.",
"func":1
},
{
"ref":"textual.page.PageUpdate.name",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.page.PageUpdate.time",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.page.PageRender",
"url":18,
"doc":""
},
{
"ref":"textual.page.PageRender.move_to",
"url":18,
"doc":"",
"func":1
},
{
"ref":"textual.page.PageRender.clear",
"url":18,
"doc":"",
"func":1
},
{
"ref":"textual.page.PageRender.update",
"url":18,
"doc":"",
"func":1
},
{
"ref":"textual.page.PageRender.render",
"url":18,
"doc":"",
"func":1
},
{
"ref":"textual.page.Page",
"url":18,
"doc":""
},
{
"ref":"textual.page.Page.scroll_x",
"url":18,
"doc":"Reactive descriptor."
},
{
"ref":"textual.page.Page.scroll_y",
"url":18,
"doc":"Reactive descriptor."
},
{
"ref":"textual.page.Page.validate_scroll_x",
"url":18,
"doc":"",
"func":1
},
{
"ref":"textual.page.Page.validate_scroll_y",
"url":18,
"doc":"",
"func":1
},
{
"ref":"textual.page.Page.watch_scroll_x",
"url":18,
"doc":"",
"func":1
},
{
"ref":"textual.page.Page.watch_scroll_y",
"url":18,
"doc":"",
"func":1
},
{
"ref":"textual.page.Page.update",
"url":18,
"doc":"",
"func":1
},
{
"ref":"textual.page.Page.virtual_size",
"url":18,
"doc":""
},
{
"ref":"textual.page.Page.render",
"url":18,
"doc":"Get renderable for widget. Returns: RenderableType: Any renderable",
"func":1
},
{
"ref":"textual.page.Page.can_focus",
"url":18,
"doc":""
},
{
"ref":"textual.page.Page.visible",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.page.Page.layout_size",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.page.Page.layout_fraction",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.page.Page.layout_min_size",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.page.Page.layout_offset_x",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.page.Page.layout_offset_y",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.page.Page.style",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.page.Page.padding",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.page.Page.margin",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.page.Page.border",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.page.Page.border_style",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.page.Page.border_title",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.page.Page.render_styled",
"url":16,
"doc":"Applies style attributes to the default renderable. Returns: RenderableType: A new renderable.",
"func":1
},
{
"ref":"textual.page.Page.console",
"url":16,
"doc":"Get the current console."
},
{
"ref":"textual.page.Page.root_view",
"url":16,
"doc":"Return the top-most view."
},
{
"ref":"textual.page.Page.layout_offset",
"url":16,
"doc":"Get the layout offset as a tuple."
},
{
"ref":"textual.page.Page.call_later",
"url":16,
"doc":"Run a callback after processing all messages and refreshing the screen. Args: callback (Callable): A callable.",
"func":1
},
{
"ref":"textual.page.Page.refresh",
"url":16,
"doc":"Initiate a refresh of the widget. This method sets an internal flag to perform a refresh, which will be done on the next idle event. Only one refresh will be done even if this method is called multiple times. Args: repaint (bool, optional): Repaint the widget (will call render() again). Defaults to True. layout (bool, optional): Also layout widgets in the view. Defaults to False.",
"func":1
},
{
"ref":"textual.page.Page.dispatch_key",
"url":16,
"doc":"Dispatch a key event to method. This method will call the method named 'key_ ' if it exists. Args: event (events.Key): A key event.",
"func":1
},
{
"ref":"textual.page.Page.app",
"url":1,
"doc":"Get the current app."
},
{
"ref":"textual.page.Page.disable_messages",
"url":1,
"doc":"Disable message types from being processed.",
"func":1
},
{
"ref":"textual.page.Page.enable_messages",
"url":1,
"doc":"Enable processing of messages types.",
"func":1
},
{
"ref":"textual.page.Page.get_message",
"url":1,
"doc":"Get the next event on the queue, or None if queue is closed. Returns: Optional[Event]: Event object or None.",
"func":1
},
{
"ref":"textual.page.Page.peek_message",
"url":1,
"doc":"Peek the message at the head of the queue (does not remove it from the queue), or return None if the queue is empty. Returns: Optional[Message]: The message or None.",
"func":1
},
{
"ref":"textual.page.Page.close_messages",
"url":1,
"doc":"Close message queue, and optionally wait for queue to finish processing.",
"func":1
},
{
"ref":"textual.background",
"url":19,
"doc":""
},
{
"ref":"textual.background.BackgroundRenderable",
"url":19,
"doc":""
},
{
"ref":"textual.background.Background",
"url":19,
"doc":""
},
{
"ref":"textual.background.Background.visible",
"url":19,
"doc":"Reactive descriptor."
},
{
"ref":"textual.background.Background.layout_size",
"url":19,
"doc":"Reactive descriptor."
},
{
"ref":"textual.background.Background.layout_fraction",
"url":19,
"doc":"Reactive descriptor."
},
{
"ref":"textual.background.Background.layout_min_size",
"url":19,
"doc":"Reactive descriptor."
},
{
"ref":"textual.background.Background.layout_offset_x",
"url":19,
"doc":"Reactive descriptor."
},
{
"ref":"textual.background.Background.layout_offset_y",
"url":19,
"doc":"Reactive descriptor."
},
{
"ref":"textual.background.Background.style",
"url":19,
"doc":"Reactive descriptor."
},
{
"ref":"textual.background.Background.padding",
"url":19,
"doc":"Reactive descriptor."
},
{
"ref":"textual.background.Background.margin",
"url":19,
"doc":"Reactive descriptor."
},
{
"ref":"textual.background.Background.border",
"url":19,
"doc":"Reactive descriptor."
},
{
"ref":"textual.background.Background.border_style",
"url":19,
"doc":"Reactive descriptor."
},
{
"ref":"textual.background.Background.border_title",
"url":19,
"doc":"Reactive descriptor."
},
{
"ref":"textual.background.Background.render",
"url":19,
"doc":"Get renderable for widget. Returns: RenderableType: Any renderable",
"func":1
},
{
"ref":"textual.background.Background.can_focus",
"url":19,
"doc":""
},
{
"ref":"textual.background.Background.render_styled",
"url":16,
"doc":"Applies style attributes to the default renderable. Returns: RenderableType: A new renderable.",
"func":1
},
{
"ref":"textual.background.Background.console",
"url":16,
"doc":"Get the current console."
},
{
"ref":"textual.background.Background.root_view",
"url":16,
"doc":"Return the top-most view."
},
{
"ref":"textual.background.Background.layout_offset",
"url":16,
"doc":"Get the layout offset as a tuple."
},
{
"ref":"textual.background.Background.call_later",
"url":16,
"doc":"Run a callback after processing all messages and refreshing the screen. Args: callback (Callable): A callable.",
"func":1
},
{
"ref":"textual.background.Background.refresh",
"url":16,
"doc":"Initiate a refresh of the widget. This method sets an internal flag to perform a refresh, which will be done on the next idle event. Only one refresh will be done even if this method is called multiple times. Args: repaint (bool, optional): Repaint the widget (will call render() again). Defaults to True. layout (bool, optional): Also layout widgets in the view. Defaults to False.",
"func":1
},
{
"ref":"textual.background.Background.dispatch_key",
"url":16,
"doc":"Dispatch a key event to method. This method will call the method named 'key_ ' if it exists. Args: event (events.Key): A key event.",
"func":1
},
{
"ref":"textual.background.Background.app",
"url":1,
"doc":"Get the current app."
},
{
"ref":"textual.background.Background.disable_messages",
"url":1,
"doc":"Disable message types from being processed.",
"func":1
},
{
"ref":"textual.background.Background.enable_messages",
"url":1,
"doc":"Enable processing of messages types.",
"func":1
},
{
"ref":"textual.background.Background.get_message",
"url":1,
"doc":"Get the next event on the queue, or None if queue is closed. Returns: Optional[Event]: Event object or None.",
"func":1
},
{
"ref":"textual.background.Background.peek_message",
"url":1,
"doc":"Peek the message at the head of the queue (does not remove it from the queue), or return None if the queue is empty. Returns: Optional[Message]: The message or None.",
"func":1
},
{
"ref":"textual.background.Background.close_messages",
"url":1,
"doc":"Close message queue, and optionally wait for queue to finish processing.",
"func":1
},
{
"ref":"textual.actions",
"url":20,
"doc":""
},
{
"ref":"textual.actions.ActionError",
"url":20,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"textual.actions.parse",
"url":20,
"doc":"",
"func":1
},
{
"ref":"textual.view",
"url":21,
"doc":""
},
{
"ref":"textual.view.View",
"url":21,
"doc":""
},
{
"ref":"textual.view.View.layout_factory",
"url":21,
"doc":""
},
{
"ref":"textual.view.View.background",
"url":21,
"doc":"Reactive descriptor."
},
{
"ref":"textual.view.View.scroll_x",
"url":21,
"doc":"Reactive descriptor."
},
{
"ref":"textual.view.View.scroll_y",
"url":21,
"doc":"Reactive descriptor."
},
{
"ref":"textual.view.View.virtual_size",
"url":21,
"doc":"Reactive descriptor."
},
{
"ref":"textual.view.View.watch_background",
"url":21,
"doc":"",
"func":1
},
{
"ref":"textual.view.View.scroll",
"url":21,
"doc":""
},
{
"ref":"textual.view.View.is_visual",
"url":21,
"doc":""
},
{
"ref":"textual.view.View.is_root_view",
"url":21,
"doc":""
},
{
"ref":"textual.view.View.is_mounted",
"url":21,
"doc":"",
"func":1
},
{
"ref":"textual.view.View.render",
"url":21,
"doc":"Get renderable for widget. Returns: RenderableType: Any renderable",
"func":1
},
{
"ref":"textual.view.View.get_offset",
"url":21,
"doc":"",
"func":1
},
{
"ref":"textual.view.View.get_arrangement",
"url":21,
"doc":"",
"func":1
},
{
"ref":"textual.view.View.handle_update",
"url":21,
"doc":"",
"func":1
},
{
"ref":"textual.view.View.handle_layout",
"url":21,
"doc":"",
"func":1
},
{
"ref":"textual.view.View.mount",
"url":21,
"doc":"",
"func":1
},
{
"ref":"textual.view.View.refresh_layout",
"url":21,
"doc":"",
"func":1
},
{
"ref":"textual.view.View.on_resize",
"url":21,
"doc":"",
"func":1
},
{
"ref":"textual.view.View.get_widget_at",
"url":21,
"doc":"",
"func":1
},
{
"ref":"textual.view.View.get_style_at",
"url":21,
"doc":"",
"func":1
},
{
"ref":"textual.view.View.get_widget_region",
"url":21,
"doc":"",
"func":1
},
{
"ref":"textual.view.View.on_mount",
"url":21,
"doc":"",
"func":1
},
{
"ref":"textual.view.View.on_idle",
"url":21,
"doc":"",
"func":1
},
{
"ref":"textual.view.View.forward_event",
"url":21,
"doc":"",
"func":1
},
{
"ref":"textual.view.View.action_toggle",
"url":21,
"doc":"",
"func":1
},
{
"ref":"textual.view.View.can_focus",
"url":21,
"doc":""
},
{
"ref":"textual.view.View.visible",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.view.View.layout_size",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.view.View.layout_fraction",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.view.View.layout_min_size",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.view.View.layout_offset_x",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.view.View.layout_offset_y",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.view.View.style",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.view.View.padding",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.view.View.margin",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.view.View.border",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.view.View.border_style",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.view.View.border_title",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.view.View.render_styled",
"url":16,
"doc":"Applies style attributes to the default renderable. Returns: RenderableType: A new renderable.",
"func":1
},
{
"ref":"textual.view.View.console",
"url":16,
"doc":"Get the current console."
},
{
"ref":"textual.view.View.root_view",
"url":16,
"doc":"Return the top-most view."
},
{
"ref":"textual.view.View.layout_offset",
"url":16,
"doc":"Get the layout offset as a tuple."
},
{
"ref":"textual.view.View.call_later",
"url":16,
"doc":"Run a callback after processing all messages and refreshing the screen. Args: callback (Callable): A callable.",
"func":1
},
{
"ref":"textual.view.View.refresh",
"url":16,
"doc":"Initiate a refresh of the widget. This method sets an internal flag to perform a refresh, which will be done on the next idle event. Only one refresh will be done even if this method is called multiple times. Args: repaint (bool, optional): Repaint the widget (will call render() again). Defaults to True. layout (bool, optional): Also layout widgets in the view. Defaults to False.",
"func":1
},
{
"ref":"textual.view.View.dispatch_key",
"url":16,
"doc":"Dispatch a key event to method. This method will call the method named 'key_ ' if it exists. Args: event (events.Key): A key event.",
"func":1
},
{
"ref":"textual.view.View.app",
"url":1,
"doc":"Get the current app."
},
{
"ref":"textual.view.View.disable_messages",
"url":1,
"doc":"Disable message types from being processed.",
"func":1
},
{
"ref":"textual.view.View.enable_messages",
"url":1,
"doc":"Enable processing of messages types.",
"func":1
},
{
"ref":"textual.view.View.get_message",
"url":1,
"doc":"Get the next event on the queue, or None if queue is closed. Returns: Optional[Event]: Event object or None.",
"func":1
},
{
"ref":"textual.view.View.peek_message",
"url":1,
"doc":"Peek the message at the head of the queue (does not remove it from the queue), or return None if the queue is empty. Returns: Optional[Message]: The message or None.",
"func":1
},
{
"ref":"textual.view.View.close_messages",
"url":1,
"doc":"Close message queue, and optionally wait for queue to finish processing.",
"func":1
},
{
"ref":"textual.app",
"url":22,
"doc":""
},
{
"ref":"textual.app.ActionError",
"url":22,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"textual.app.App",
"url":22,
"doc":"The base class for Textual Applications The Textual Application base class Args: console (Console, optional): A Rich Console. Defaults to None. screen (bool, optional): Enable full-screen application mode. Defaults to True. driver_class (Type[Driver], optional): Driver class, or None to use default. Defaults to None. title (str, optional): Title of the application. Defaults to \"Textual Application\"."
},
{
"ref":"textual.app.App.KEYS",
"url":22,
"doc":""
},
{
"ref":"textual.app.App.title",
"url":22,
"doc":"Reactive descriptor."
},
{
"ref":"textual.app.App.sub_title",
"url":22,
"doc":"Reactive descriptor."
},
{
"ref":"textual.app.App.background",
"url":22,
"doc":"Reactive descriptor."
},
{
"ref":"textual.app.App.get_driver_class",
"url":22,
"doc":"Get a driver class for this platform. Called by the constructor. Returns: Driver: A Driver class which manages input and display.",
"func":1
},
{
"ref":"textual.app.App.animator",
"url":22,
"doc":""
},
{
"ref":"textual.app.App.view",
"url":22,
"doc":""
},
{
"ref":"textual.app.App.log",
"url":22,
"doc":"Write to logs. Args:  args (Any): Positional arguments are converted to string and written to logs. verbosity (int, optional): Verbosity level 0-3. Defaults to 1.",
"func":1
},
{
"ref":"textual.app.App.bind",
"url":22,
"doc":"Bind a key to an action. Args: keys (str): A comma separated list of keys, i.e. action (str): Action to bind to. description (str, optional): Short description of action. Defaults to  . show (bool, optional): Show key in UI. Defaults to True. key_display (str, optional): Replacement text for key, or None to use default. Defaults to None.",
"func":1
},
{
"ref":"textual.app.App.run",
"url":22,
"doc":"Run the app. Args: console (Console, optional): Console object. Defaults to None. screen (bool, optional): Enable application mode. Defaults to True. driver (Type[Driver], optional): Driver class or None for default. Defaults to None.",
"func":1
},
{
"ref":"textual.app.App.push_view",
"url":22,
"doc":"",
"func":1
},
{
"ref":"textual.app.App.set_focus",
"url":22,
"doc":"Focus (or unfocus) a widget. A focused widget will receive key events first. Args: widget (Widget): [description]",
"func":1
},
{
"ref":"textual.app.App.set_mouse_over",
"url":22,
"doc":"",
"func":1
},
{
"ref":"textual.app.App.capture_mouse",
"url":22,
"doc":"Send all mouse events to the given widget, disable mouse capture. Args: widget (Widget | None): If a widget, capture mouse event, or None to end mouse capture.",
"func":1
},
{
"ref":"textual.app.App.panic",
"url":22,
"doc":"Exits the app with a traceback. Args: traceback (Traceback, optional): Rich Traceback object or None to generate one for the most recent exception. Defaults to None.",
"func":1
},
{
"ref":"textual.app.App.process_messages",
"url":22,
"doc":"",
"func":1
},
{
"ref":"textual.app.App.register",
"url":22,
"doc":"",
"func":1
},
{
"ref":"textual.app.App.close_all",
"url":22,
"doc":"",
"func":1
},
{
"ref":"textual.app.App.remove",
"url":22,
"doc":"",
"func":1
},
{
"ref":"textual.app.App.shutdown",
"url":22,
"doc":"",
"func":1
},
{
"ref":"textual.app.App.refresh",
"url":22,
"doc":"",
"func":1
},
{
"ref":"textual.app.App.display",
"url":22,
"doc":"",
"func":1
},
{
"ref":"textual.app.App.measure",
"url":22,
"doc":"Get the optimal width for a widget or renderable. Args: renderable (RenderableType): A renderable (including Widget) max_width ([type], optional): Maximum width. Defaults to 100_000. Returns: int: Number of cells required to render.",
"func":1
},
{
"ref":"textual.app.App.get_widget_at",
"url":22,
"doc":"Get the widget under the given coordinates. Args: x (int): X Coord. y (int): Y Coord. Returns: tuple[Widget, Region]: The widget and the widget's screen region.",
"func":1
},
{
"ref":"textual.app.App.press",
"url":22,
"doc":"Handle a key press. Args: key (str): A key Returns: bool: True if the key was handled by a binding, otherwise False",
"func":1
},
{
"ref":"textual.app.App.on_event",
"url":22,
"doc":"",
"func":1
},
{
"ref":"textual.app.App.action",
"url":22,
"doc":"Perform an action. Args: action (str): Action encoded in a string.",
"func":1
},
{
"ref":"textual.app.App.dispatch_action",
"url":22,
"doc":"",
"func":1
},
{
"ref":"textual.app.App.broker_event",
"url":22,
"doc":"",
"func":1
},
{
"ref":"textual.app.App.on_key",
"url":22,
"doc":"",
"func":1
},
{
"ref":"textual.app.App.on_shutdown_request",
"url":22,
"doc":"",
"func":1
},
{
"ref":"textual.app.App.on_resize",
"url":22,
"doc":"",
"func":1
},
{
"ref":"textual.app.App.action_press",
"url":22,
"doc":"",
"func":1
},
{
"ref":"textual.app.App.action_quit",
"url":22,
"doc":"",
"func":1
},
{
"ref":"textual.app.App.action_bang",
"url":22,
"doc":"",
"func":1
},
{
"ref":"textual.app.App.action_bell",
"url":22,
"doc":"",
"func":1
},
{
"ref":"textual.app.App.app",
"url":1,
"doc":"Get the current app."
},
{
"ref":"textual.app.App.disable_messages",
"url":1,
"doc":"Disable message types from being processed.",
"func":1
},
{
"ref":"textual.app.App.enable_messages",
"url":1,
"doc":"Enable processing of messages types.",
"func":1
},
{
"ref":"textual.app.App.get_message",
"url":1,
"doc":"Get the next event on the queue, or None if queue is closed. Returns: Optional[Event]: Event object or None.",
"func":1
},
{
"ref":"textual.app.App.peek_message",
"url":1,
"doc":"Peek the message at the head of the queue (does not remove it from the queue), or return None if the queue is empty. Returns: Optional[Message]: The message or None.",
"func":1
},
{
"ref":"textual.app.App.call_later",
"url":1,
"doc":"Run a callback after processing all messages and refreshing the screen. Args: callback (Callable): A callable.",
"func":1
},
{
"ref":"textual.app.App.close_messages",
"url":1,
"doc":"Close message queue, and optionally wait for queue to finish processing.",
"func":1
},
{
"ref":"textual.widget",
"url":16,
"doc":""
},
{
"ref":"textual.widget.RenderCache",
"url":16,
"doc":"RenderCache(size, lines)"
},
{
"ref":"textual.widget.RenderCache.size",
"url":16,
"doc":"Alias for field number 0"
},
{
"ref":"textual.widget.RenderCache.lines",
"url":16,
"doc":"Alias for field number 1"
},
{
"ref":"textual.widget.RenderCache.cursor_line",
"url":16,
"doc":""
},
{
"ref":"textual.widget.Widget",
"url":16,
"doc":""
},
{
"ref":"textual.widget.Widget.can_focus",
"url":16,
"doc":""
},
{
"ref":"textual.widget.Widget.visible",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widget.Widget.layout_size",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widget.Widget.layout_fraction",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widget.Widget.layout_min_size",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widget.Widget.layout_offset_x",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widget.Widget.layout_offset_y",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widget.Widget.style",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widget.Widget.padding",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widget.Widget.margin",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widget.Widget.border",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widget.Widget.border_style",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widget.Widget.border_title",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widget.Widget.BOX_MAP",
"url":16,
"doc":""
},
{
"ref":"textual.widget.Widget.validate_padding",
"url":16,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.validate_margin",
"url":16,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.validate_layout_offset_x",
"url":16,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.validate_layout_offset_y",
"url":16,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.watch",
"url":16,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.render_styled",
"url":16,
"doc":"Applies style attributes to the default renderable. Returns: RenderableType: A new renderable.",
"func":1
},
{
"ref":"textual.widget.Widget.size",
"url":16,
"doc":""
},
{
"ref":"textual.widget.Widget.is_visual",
"url":16,
"doc":""
},
{
"ref":"textual.widget.Widget.console",
"url":16,
"doc":"Get the current console."
},
{
"ref":"textual.widget.Widget.root_view",
"url":16,
"doc":"Return the top-most view."
},
{
"ref":"textual.widget.Widget.animate",
"url":16,
"doc":""
},
{
"ref":"textual.widget.Widget.layout_offset",
"url":16,
"doc":"Get the layout offset as a tuple."
},
{
"ref":"textual.widget.Widget.gutter",
"url":16,
"doc":""
},
{
"ref":"textual.widget.Widget.render_lines",
"url":16,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.render_lines_free",
"url":16,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.clear_render_cache",
"url":16,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.check_repaint",
"url":16,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.check_layout",
"url":16,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.reset_check_repaint",
"url":16,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.reset_check_layout",
"url":16,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.get_style_at",
"url":16,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.call_later",
"url":16,
"doc":"Run a callback after processing all messages and refreshing the screen. Args: callback (Callable): A callable.",
"func":1
},
{
"ref":"textual.widget.Widget.forward_event",
"url":16,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.refresh",
"url":16,
"doc":"Initiate a refresh of the widget. This method sets an internal flag to perform a refresh, which will be done on the next idle event. Only one refresh will be done even if this method is called multiple times. Args: repaint (bool, optional): Repaint the widget (will call render() again). Defaults to True. layout (bool, optional): Also layout widgets in the view. Defaults to False.",
"func":1
},
{
"ref":"textual.widget.Widget.render",
"url":16,
"doc":"Get renderable for widget. Returns: RenderableType: Any renderable",
"func":1
},
{
"ref":"textual.widget.Widget.action",
"url":16,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.post_message",
"url":16,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.on_resize",
"url":16,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.on_idle",
"url":16,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.focus",
"url":16,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.capture_mouse",
"url":16,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.release_mouse",
"url":16,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.broker_event",
"url":16,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.dispatch_key",
"url":16,
"doc":"Dispatch a key event to method. This method will call the method named 'key_ ' if it exists. Args: event (events.Key): A key event.",
"func":1
},
{
"ref":"textual.widget.Widget.on_mouse_down",
"url":16,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.on_mouse_up",
"url":16,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.on_click",
"url":16,
"doc":"",
"func":1
},
{
"ref":"textual.widget.Widget.app",
"url":1,
"doc":"Get the current app."
},
{
"ref":"textual.widget.Widget.disable_messages",
"url":1,
"doc":"Disable message types from being processed.",
"func":1
},
{
"ref":"textual.widget.Widget.enable_messages",
"url":1,
"doc":"Enable processing of messages types.",
"func":1
},
{
"ref":"textual.widget.Widget.get_message",
"url":1,
"doc":"Get the next event on the queue, or None if queue is closed. Returns: Optional[Event]: Event object or None.",
"func":1
},
{
"ref":"textual.widget.Widget.peek_message",
"url":1,
"doc":"Peek the message at the head of the queue (does not remove it from the queue), or return None if the queue is empty. Returns: Optional[Message]: The message or None.",
"func":1
},
{
"ref":"textual.widget.Widget.close_messages",
"url":1,
"doc":"Close message queue, and optionally wait for queue to finish processing.",
"func":1
},
{
"ref":"textual.widgets",
"url":23,
"doc":""
},
{
"ref":"textual.widgets.Button",
"url":23,
"doc":""
},
{
"ref":"textual.widgets.Button.label",
"url":23,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Button.render",
"url":23,
"doc":"Get renderable for widget. Returns: RenderableType: Any renderable",
"func":1
},
{
"ref":"textual.widgets.Button.on_click",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.Button.can_focus",
"url":23,
"doc":""
},
{
"ref":"textual.widgets.Button.visible",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Button.layout_size",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Button.layout_fraction",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Button.layout_min_size",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Button.layout_offset_x",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Button.layout_offset_y",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Button.style",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Button.padding",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Button.margin",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Button.border",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Button.border_style",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Button.border_title",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Button.render_styled",
"url":16,
"doc":"Applies style attributes to the default renderable. Returns: RenderableType: A new renderable.",
"func":1
},
{
"ref":"textual.widgets.Button.console",
"url":16,
"doc":"Get the current console."
},
{
"ref":"textual.widgets.Button.root_view",
"url":16,
"doc":"Return the top-most view."
},
{
"ref":"textual.widgets.Button.layout_offset",
"url":16,
"doc":"Get the layout offset as a tuple."
},
{
"ref":"textual.widgets.Button.call_later",
"url":16,
"doc":"Run a callback after processing all messages and refreshing the screen. Args: callback (Callable): A callable.",
"func":1
},
{
"ref":"textual.widgets.Button.refresh",
"url":16,
"doc":"Initiate a refresh of the widget. This method sets an internal flag to perform a refresh, which will be done on the next idle event. Only one refresh will be done even if this method is called multiple times. Args: repaint (bool, optional): Repaint the widget (will call render() again). Defaults to True. layout (bool, optional): Also layout widgets in the view. Defaults to False.",
"func":1
},
{
"ref":"textual.widgets.Button.dispatch_key",
"url":16,
"doc":"Dispatch a key event to method. This method will call the method named 'key_ ' if it exists. Args: event (events.Key): A key event.",
"func":1
},
{
"ref":"textual.widgets.Button.app",
"url":1,
"doc":"Get the current app."
},
{
"ref":"textual.widgets.Button.disable_messages",
"url":1,
"doc":"Disable message types from being processed.",
"func":1
},
{
"ref":"textual.widgets.Button.enable_messages",
"url":1,
"doc":"Enable processing of messages types.",
"func":1
},
{
"ref":"textual.widgets.Button.get_message",
"url":1,
"doc":"Get the next event on the queue, or None if queue is closed. Returns: Optional[Event]: Event object or None.",
"func":1
},
{
"ref":"textual.widgets.Button.peek_message",
"url":1,
"doc":"Peek the message at the head of the queue (does not remove it from the queue), or return None if the queue is empty. Returns: Optional[Message]: The message or None.",
"func":1
},
{
"ref":"textual.widgets.Button.close_messages",
"url":1,
"doc":"Close message queue, and optionally wait for queue to finish processing.",
"func":1
},
{
"ref":"textual.widgets.ButtonPressed",
"url":23,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.widgets.ButtonPressed.sender",
"url":23,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.widgets.ButtonPressed.bubble",
"url":23,
"doc":""
},
{
"ref":"textual.widgets.ButtonPressed.verbosity",
"url":23,
"doc":""
},
{
"ref":"textual.widgets.ButtonPressed.set_forwarded",
"url":4,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.widgets.ButtonPressed.can_replace",
"url":4,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.widgets.ButtonPressed.prevent_default",
"url":4,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.widgets.ButtonPressed.stop",
"url":4,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.widgets.ButtonPressed.wait",
"url":4,
"doc":"Wait for the message to be processed.",
"func":1
},
{
"ref":"textual.widgets.ButtonPressed.name",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.widgets.ButtonPressed.time",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.widgets.DirectoryTree",
"url":23,
"doc":"Abstract base class for generic types. A generic type is typically declared by inheriting from this class parameterized with one or more type variables. For example, a generic mapping type might be defined as class Mapping(Generic[KT, VT]): def __getitem__(self, key: KT) -> VT:  .  Etc. This class can then be used as follows def lookup_name(mapping: Mapping[KT, VT], key: KT, default: VT) -> VT: try: return mapping[key] except KeyError: return default"
},
{
"ref":"textual.widgets.DirectoryTree.has_focus",
"url":23,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.DirectoryTree.on_focus",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.on_blur",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.watch_hover_node",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.render_node",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.render_tree_label",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.on_mount",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.load_directory",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.handle_tree_click",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.can_focus",
"url":23,
"doc":""
},
{
"ref":"textual.widgets.DirectoryTree.visible",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.DirectoryTree.layout_size",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.DirectoryTree.layout_fraction",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.DirectoryTree.layout_min_size",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.DirectoryTree.layout_offset_x",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.DirectoryTree.layout_offset_y",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.DirectoryTree.style",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.DirectoryTree.padding",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.DirectoryTree.margin",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.DirectoryTree.border",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.DirectoryTree.border_style",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.DirectoryTree.border_title",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.DirectoryTree.render_styled",
"url":16,
"doc":"Applies style attributes to the default renderable. Returns: RenderableType: A new renderable.",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.console",
"url":16,
"doc":"Get the current console."
},
{
"ref":"textual.widgets.DirectoryTree.root_view",
"url":16,
"doc":"Return the top-most view."
},
{
"ref":"textual.widgets.DirectoryTree.layout_offset",
"url":16,
"doc":"Get the layout offset as a tuple."
},
{
"ref":"textual.widgets.DirectoryTree.call_later",
"url":16,
"doc":"Run a callback after processing all messages and refreshing the screen. Args: callback (Callable): A callable.",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.refresh",
"url":16,
"doc":"Initiate a refresh of the widget. This method sets an internal flag to perform a refresh, which will be done on the next idle event. Only one refresh will be done even if this method is called multiple times. Args: repaint (bool, optional): Repaint the widget (will call render() again). Defaults to True. layout (bool, optional): Also layout widgets in the view. Defaults to False.",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.render",
"url":16,
"doc":"Get renderable for widget. Returns: RenderableType: Any renderable",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.dispatch_key",
"url":16,
"doc":"Dispatch a key event to method. This method will call the method named 'key_ ' if it exists. Args: event (events.Key): A key event.",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.app",
"url":1,
"doc":"Get the current app."
},
{
"ref":"textual.widgets.DirectoryTree.disable_messages",
"url":1,
"doc":"Disable message types from being processed.",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.enable_messages",
"url":1,
"doc":"Enable processing of messages types.",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.get_message",
"url":1,
"doc":"Get the next event on the queue, or None if queue is closed. Returns: Optional[Event]: Event object or None.",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.peek_message",
"url":1,
"doc":"Peek the message at the head of the queue (does not remove it from the queue), or return None if the queue is empty. Returns: Optional[Message]: The message or None.",
"func":1
},
{
"ref":"textual.widgets.DirectoryTree.close_messages",
"url":1,
"doc":"Close message queue, and optionally wait for queue to finish processing.",
"func":1
},
{
"ref":"textual.widgets.FileClick",
"url":23,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.widgets.FileClick.sender",
"url":23,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.widgets.FileClick.bubble",
"url":23,
"doc":""
},
{
"ref":"textual.widgets.FileClick.verbosity",
"url":23,
"doc":""
},
{
"ref":"textual.widgets.FileClick.set_forwarded",
"url":4,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.widgets.FileClick.can_replace",
"url":4,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.widgets.FileClick.prevent_default",
"url":4,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.widgets.FileClick.stop",
"url":4,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.widgets.FileClick.wait",
"url":4,
"doc":"Wait for the message to be processed.",
"func":1
},
{
"ref":"textual.widgets.FileClick.name",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.widgets.FileClick.time",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.widgets.Footer",
"url":23,
"doc":""
},
{
"ref":"textual.widgets.Footer.highlight_key",
"url":23,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Footer.watch_highlight_key",
"url":23,
"doc":"If highlight key changes we need to regenerate the text.",
"func":1
},
{
"ref":"textual.widgets.Footer.on_mouse_move",
"url":23,
"doc":"Store any key we are moving over.",
"func":1
},
{
"ref":"textual.widgets.Footer.on_leave",
"url":23,
"doc":"Clear any highlight when the mouse leave the widget",
"func":1
},
{
"ref":"textual.widgets.Footer.make_key_text",
"url":23,
"doc":"Create text containing all the keys.",
"func":1
},
{
"ref":"textual.widgets.Footer.render",
"url":23,
"doc":"Get renderable for widget. Returns: RenderableType: Any renderable",
"func":1
},
{
"ref":"textual.widgets.Footer.can_focus",
"url":23,
"doc":""
},
{
"ref":"textual.widgets.Footer.visible",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Footer.layout_size",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Footer.layout_fraction",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Footer.layout_min_size",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Footer.layout_offset_x",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Footer.layout_offset_y",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Footer.style",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Footer.padding",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Footer.margin",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Footer.border",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Footer.border_style",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Footer.border_title",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Footer.render_styled",
"url":16,
"doc":"Applies style attributes to the default renderable. Returns: RenderableType: A new renderable.",
"func":1
},
{
"ref":"textual.widgets.Footer.console",
"url":16,
"doc":"Get the current console."
},
{
"ref":"textual.widgets.Footer.root_view",
"url":16,
"doc":"Return the top-most view."
},
{
"ref":"textual.widgets.Footer.layout_offset",
"url":16,
"doc":"Get the layout offset as a tuple."
},
{
"ref":"textual.widgets.Footer.call_later",
"url":16,
"doc":"Run a callback after processing all messages and refreshing the screen. Args: callback (Callable): A callable.",
"func":1
},
{
"ref":"textual.widgets.Footer.refresh",
"url":16,
"doc":"Initiate a refresh of the widget. This method sets an internal flag to perform a refresh, which will be done on the next idle event. Only one refresh will be done even if this method is called multiple times. Args: repaint (bool, optional): Repaint the widget (will call render() again). Defaults to True. layout (bool, optional): Also layout widgets in the view. Defaults to False.",
"func":1
},
{
"ref":"textual.widgets.Footer.dispatch_key",
"url":16,
"doc":"Dispatch a key event to method. This method will call the method named 'key_ ' if it exists. Args: event (events.Key): A key event.",
"func":1
},
{
"ref":"textual.widgets.Footer.app",
"url":1,
"doc":"Get the current app."
},
{
"ref":"textual.widgets.Footer.disable_messages",
"url":1,
"doc":"Disable message types from being processed.",
"func":1
},
{
"ref":"textual.widgets.Footer.enable_messages",
"url":1,
"doc":"Enable processing of messages types.",
"func":1
},
{
"ref":"textual.widgets.Footer.get_message",
"url":1,
"doc":"Get the next event on the queue, or None if queue is closed. Returns: Optional[Event]: Event object or None.",
"func":1
},
{
"ref":"textual.widgets.Footer.peek_message",
"url":1,
"doc":"Peek the message at the head of the queue (does not remove it from the queue), or return None if the queue is empty. Returns: Optional[Message]: The message or None.",
"func":1
},
{
"ref":"textual.widgets.Footer.close_messages",
"url":1,
"doc":"Close message queue, and optionally wait for queue to finish processing.",
"func":1
},
{
"ref":"textual.widgets.Header",
"url":23,
"doc":""
},
{
"ref":"textual.widgets.Header.tall",
"url":23,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Header.style",
"url":23,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Header.clock",
"url":23,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Header.title",
"url":23,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Header.sub_title",
"url":23,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Header.full_title",
"url":23,
"doc":""
},
{
"ref":"textual.widgets.Header.watch_tall",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.Header.get_clock",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.Header.render",
"url":23,
"doc":"Get renderable for widget. Returns: RenderableType: Any renderable",
"func":1
},
{
"ref":"textual.widgets.Header.on_mount",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.Header.on_click",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.Header.can_focus",
"url":23,
"doc":""
},
{
"ref":"textual.widgets.Header.visible",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Header.layout_size",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Header.layout_fraction",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Header.layout_min_size",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Header.layout_offset_x",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Header.layout_offset_y",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Header.padding",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Header.margin",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Header.border",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Header.border_style",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Header.border_title",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Header.render_styled",
"url":16,
"doc":"Applies style attributes to the default renderable. Returns: RenderableType: A new renderable.",
"func":1
},
{
"ref":"textual.widgets.Header.console",
"url":16,
"doc":"Get the current console."
},
{
"ref":"textual.widgets.Header.root_view",
"url":16,
"doc":"Return the top-most view."
},
{
"ref":"textual.widgets.Header.layout_offset",
"url":16,
"doc":"Get the layout offset as a tuple."
},
{
"ref":"textual.widgets.Header.call_later",
"url":16,
"doc":"Run a callback after processing all messages and refreshing the screen. Args: callback (Callable): A callable.",
"func":1
},
{
"ref":"textual.widgets.Header.refresh",
"url":16,
"doc":"Initiate a refresh of the widget. This method sets an internal flag to perform a refresh, which will be done on the next idle event. Only one refresh will be done even if this method is called multiple times. Args: repaint (bool, optional): Repaint the widget (will call render() again). Defaults to True. layout (bool, optional): Also layout widgets in the view. Defaults to False.",
"func":1
},
{
"ref":"textual.widgets.Header.dispatch_key",
"url":16,
"doc":"Dispatch a key event to method. This method will call the method named 'key_ ' if it exists. Args: event (events.Key): A key event.",
"func":1
},
{
"ref":"textual.widgets.Header.app",
"url":1,
"doc":"Get the current app."
},
{
"ref":"textual.widgets.Header.disable_messages",
"url":1,
"doc":"Disable message types from being processed.",
"func":1
},
{
"ref":"textual.widgets.Header.enable_messages",
"url":1,
"doc":"Enable processing of messages types.",
"func":1
},
{
"ref":"textual.widgets.Header.get_message",
"url":1,
"doc":"Get the next event on the queue, or None if queue is closed. Returns: Optional[Event]: Event object or None.",
"func":1
},
{
"ref":"textual.widgets.Header.peek_message",
"url":1,
"doc":"Peek the message at the head of the queue (does not remove it from the queue), or return None if the queue is empty. Returns: Optional[Message]: The message or None.",
"func":1
},
{
"ref":"textual.widgets.Header.close_messages",
"url":1,
"doc":"Close message queue, and optionally wait for queue to finish processing.",
"func":1
},
{
"ref":"textual.widgets.Placeholder",
"url":23,
"doc":""
},
{
"ref":"textual.widgets.Placeholder.has_focus",
"url":23,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Placeholder.mouse_over",
"url":23,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Placeholder.style",
"url":23,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Placeholder.height",
"url":23,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Placeholder.render",
"url":23,
"doc":"Get renderable for widget. Returns: RenderableType: Any renderable",
"func":1
},
{
"ref":"textual.widgets.Placeholder.on_focus",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.Placeholder.on_blur",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.Placeholder.on_enter",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.Placeholder.on_leave",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.Placeholder.can_focus",
"url":23,
"doc":""
},
{
"ref":"textual.widgets.Placeholder.visible",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Placeholder.layout_size",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Placeholder.layout_fraction",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Placeholder.layout_min_size",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Placeholder.layout_offset_x",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Placeholder.layout_offset_y",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Placeholder.padding",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Placeholder.margin",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Placeholder.border",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Placeholder.border_style",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Placeholder.border_title",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Placeholder.render_styled",
"url":16,
"doc":"Applies style attributes to the default renderable. Returns: RenderableType: A new renderable.",
"func":1
},
{
"ref":"textual.widgets.Placeholder.console",
"url":16,
"doc":"Get the current console."
},
{
"ref":"textual.widgets.Placeholder.root_view",
"url":16,
"doc":"Return the top-most view."
},
{
"ref":"textual.widgets.Placeholder.layout_offset",
"url":16,
"doc":"Get the layout offset as a tuple."
},
{
"ref":"textual.widgets.Placeholder.call_later",
"url":16,
"doc":"Run a callback after processing all messages and refreshing the screen. Args: callback (Callable): A callable.",
"func":1
},
{
"ref":"textual.widgets.Placeholder.refresh",
"url":16,
"doc":"Initiate a refresh of the widget. This method sets an internal flag to perform a refresh, which will be done on the next idle event. Only one refresh will be done even if this method is called multiple times. Args: repaint (bool, optional): Repaint the widget (will call render() again). Defaults to True. layout (bool, optional): Also layout widgets in the view. Defaults to False.",
"func":1
},
{
"ref":"textual.widgets.Placeholder.dispatch_key",
"url":16,
"doc":"Dispatch a key event to method. This method will call the method named 'key_ ' if it exists. Args: event (events.Key): A key event.",
"func":1
},
{
"ref":"textual.widgets.Placeholder.app",
"url":1,
"doc":"Get the current app."
},
{
"ref":"textual.widgets.Placeholder.disable_messages",
"url":1,
"doc":"Disable message types from being processed.",
"func":1
},
{
"ref":"textual.widgets.Placeholder.enable_messages",
"url":1,
"doc":"Enable processing of messages types.",
"func":1
},
{
"ref":"textual.widgets.Placeholder.get_message",
"url":1,
"doc":"Get the next event on the queue, or None if queue is closed. Returns: Optional[Event]: Event object or None.",
"func":1
},
{
"ref":"textual.widgets.Placeholder.peek_message",
"url":1,
"doc":"Peek the message at the head of the queue (does not remove it from the queue), or return None if the queue is empty. Returns: Optional[Message]: The message or None.",
"func":1
},
{
"ref":"textual.widgets.Placeholder.close_messages",
"url":1,
"doc":"Close message queue, and optionally wait for queue to finish processing.",
"func":1
},
{
"ref":"textual.widgets.ScrollView",
"url":23,
"doc":""
},
{
"ref":"textual.widgets.ScrollView.x",
"url":23,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.ScrollView.y",
"url":23,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.ScrollView.target_x",
"url":23,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.ScrollView.target_y",
"url":23,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.ScrollView.validate_x",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.ScrollView.validate_target_x",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.ScrollView.validate_y",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.ScrollView.validate_target_y",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.ScrollView.max_scroll_y",
"url":23,
"doc":""
},
{
"ref":"textual.widgets.ScrollView.max_scroll_x",
"url":23,
"doc":""
},
{
"ref":"textual.widgets.ScrollView.watch_x",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.ScrollView.watch_y",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.ScrollView.update",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.ScrollView.on_mount",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.ScrollView.home",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.ScrollView.scroll_up",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.ScrollView.scroll_down",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.ScrollView.page_up",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.ScrollView.page_down",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.ScrollView.page_left",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.ScrollView.page_right",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.ScrollView.scroll_in_to_view",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.ScrollView.scroll_to_center",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.ScrollView.on_mouse_scroll_up",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.ScrollView.on_mouse_scroll_down",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.ScrollView.on_key",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.ScrollView.key_down",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.ScrollView.key_up",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.ScrollView.key_pagedown",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.ScrollView.key_pageup",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.ScrollView.key_end",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.ScrollView.key_home",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.ScrollView.handle_scroll_up",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.ScrollView.handle_scroll_down",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.ScrollView.handle_scroll_left",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.ScrollView.handle_scroll_right",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.ScrollView.handle_scroll_to",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.ScrollView.handle_window_change",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.ScrollView.handle_cursor_move",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.ScrollView.can_focus",
"url":23,
"doc":""
},
{
"ref":"textual.widgets.ScrollView.background",
"url":21,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.ScrollView.scroll_x",
"url":21,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.ScrollView.scroll_y",
"url":21,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.ScrollView.virtual_size",
"url":21,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.ScrollView.render",
"url":21,
"doc":"Get renderable for widget. Returns: RenderableType: Any renderable",
"func":1
},
{
"ref":"textual.widgets.ScrollView.visible",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.ScrollView.layout_size",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.ScrollView.layout_fraction",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.ScrollView.layout_min_size",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.ScrollView.layout_offset_x",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.ScrollView.layout_offset_y",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.ScrollView.style",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.ScrollView.padding",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.ScrollView.margin",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.ScrollView.border",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.ScrollView.border_style",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.ScrollView.border_title",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.ScrollView.render_styled",
"url":16,
"doc":"Applies style attributes to the default renderable. Returns: RenderableType: A new renderable.",
"func":1
},
{
"ref":"textual.widgets.ScrollView.console",
"url":16,
"doc":"Get the current console."
},
{
"ref":"textual.widgets.ScrollView.root_view",
"url":16,
"doc":"Return the top-most view."
},
{
"ref":"textual.widgets.ScrollView.layout_offset",
"url":16,
"doc":"Get the layout offset as a tuple."
},
{
"ref":"textual.widgets.ScrollView.call_later",
"url":16,
"doc":"Run a callback after processing all messages and refreshing the screen. Args: callback (Callable): A callable.",
"func":1
},
{
"ref":"textual.widgets.ScrollView.refresh",
"url":16,
"doc":"Initiate a refresh of the widget. This method sets an internal flag to perform a refresh, which will be done on the next idle event. Only one refresh will be done even if this method is called multiple times. Args: repaint (bool, optional): Repaint the widget (will call render() again). Defaults to True. layout (bool, optional): Also layout widgets in the view. Defaults to False.",
"func":1
},
{
"ref":"textual.widgets.ScrollView.dispatch_key",
"url":16,
"doc":"Dispatch a key event to method. This method will call the method named 'key_ ' if it exists. Args: event (events.Key): A key event.",
"func":1
},
{
"ref":"textual.widgets.ScrollView.app",
"url":1,
"doc":"Get the current app."
},
{
"ref":"textual.widgets.ScrollView.disable_messages",
"url":1,
"doc":"Disable message types from being processed.",
"func":1
},
{
"ref":"textual.widgets.ScrollView.enable_messages",
"url":1,
"doc":"Enable processing of messages types.",
"func":1
},
{
"ref":"textual.widgets.ScrollView.get_message",
"url":1,
"doc":"Get the next event on the queue, or None if queue is closed. Returns: Optional[Event]: Event object or None.",
"func":1
},
{
"ref":"textual.widgets.ScrollView.peek_message",
"url":1,
"doc":"Peek the message at the head of the queue (does not remove it from the queue), or return None if the queue is empty. Returns: Optional[Message]: The message or None.",
"func":1
},
{
"ref":"textual.widgets.ScrollView.close_messages",
"url":1,
"doc":"Close message queue, and optionally wait for queue to finish processing.",
"func":1
},
{
"ref":"textual.widgets.Static",
"url":23,
"doc":""
},
{
"ref":"textual.widgets.Static.visible",
"url":23,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Static.layout_size",
"url":23,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Static.layout_fraction",
"url":23,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Static.layout_min_size",
"url":23,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Static.layout_offset_x",
"url":23,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Static.layout_offset_y",
"url":23,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Static.style",
"url":23,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Static.padding",
"url":23,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Static.margin",
"url":23,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Static.border",
"url":23,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Static.border_style",
"url":23,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Static.border_title",
"url":23,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.Static.render",
"url":23,
"doc":"Get renderable for widget. Returns: RenderableType: Any renderable",
"func":1
},
{
"ref":"textual.widgets.Static.update",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.Static.can_focus",
"url":23,
"doc":""
},
{
"ref":"textual.widgets.Static.render_styled",
"url":16,
"doc":"Applies style attributes to the default renderable. Returns: RenderableType: A new renderable.",
"func":1
},
{
"ref":"textual.widgets.Static.console",
"url":16,
"doc":"Get the current console."
},
{
"ref":"textual.widgets.Static.root_view",
"url":16,
"doc":"Return the top-most view."
},
{
"ref":"textual.widgets.Static.layout_offset",
"url":16,
"doc":"Get the layout offset as a tuple."
},
{
"ref":"textual.widgets.Static.call_later",
"url":16,
"doc":"Run a callback after processing all messages and refreshing the screen. Args: callback (Callable): A callable.",
"func":1
},
{
"ref":"textual.widgets.Static.refresh",
"url":16,
"doc":"Initiate a refresh of the widget. This method sets an internal flag to perform a refresh, which will be done on the next idle event. Only one refresh will be done even if this method is called multiple times. Args: repaint (bool, optional): Repaint the widget (will call render() again). Defaults to True. layout (bool, optional): Also layout widgets in the view. Defaults to False.",
"func":1
},
{
"ref":"textual.widgets.Static.dispatch_key",
"url":16,
"doc":"Dispatch a key event to method. This method will call the method named 'key_ ' if it exists. Args: event (events.Key): A key event.",
"func":1
},
{
"ref":"textual.widgets.Static.app",
"url":1,
"doc":"Get the current app."
},
{
"ref":"textual.widgets.Static.disable_messages",
"url":1,
"doc":"Disable message types from being processed.",
"func":1
},
{
"ref":"textual.widgets.Static.enable_messages",
"url":1,
"doc":"Enable processing of messages types.",
"func":1
},
{
"ref":"textual.widgets.Static.get_message",
"url":1,
"doc":"Get the next event on the queue, or None if queue is closed. Returns: Optional[Event]: Event object or None.",
"func":1
},
{
"ref":"textual.widgets.Static.peek_message",
"url":1,
"doc":"Peek the message at the head of the queue (does not remove it from the queue), or return None if the queue is empty. Returns: Optional[Message]: The message or None.",
"func":1
},
{
"ref":"textual.widgets.Static.close_messages",
"url":1,
"doc":"Close message queue, and optionally wait for queue to finish processing.",
"func":1
},
{
"ref":"textual.widgets.TreeClick",
"url":23,
"doc":"Abstract base class for generic types. A generic type is typically declared by inheriting from this class parameterized with one or more type variables. For example, a generic mapping type might be defined as class Mapping(Generic[KT, VT]): def __getitem__(self, key: KT) -> VT:  .  Etc. This class can then be used as follows def lookup_name(mapping: Mapping[KT, VT], key: KT, default: VT) -> VT: try: return mapping[key] except KeyError: return default"
},
{
"ref":"textual.widgets.TreeClick.sender",
"url":23,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.widgets.TreeClick.bubble",
"url":23,
"doc":""
},
{
"ref":"textual.widgets.TreeClick.verbosity",
"url":23,
"doc":""
},
{
"ref":"textual.widgets.TreeClick.set_forwarded",
"url":4,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.widgets.TreeClick.can_replace",
"url":4,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.widgets.TreeClick.prevent_default",
"url":4,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.widgets.TreeClick.stop",
"url":4,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.widgets.TreeClick.wait",
"url":4,
"doc":"Wait for the message to be processed.",
"func":1
},
{
"ref":"textual.widgets.TreeClick.name",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.widgets.TreeClick.time",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.widgets.TreeControl",
"url":23,
"doc":"Abstract base class for generic types. A generic type is typically declared by inheriting from this class parameterized with one or more type variables. For example, a generic mapping type might be defined as class Mapping(Generic[KT, VT]): def __getitem__(self, key: KT) -> VT:  .  Etc. This class can then be used as follows def lookup_name(mapping: Mapping[KT, VT], key: KT, default: VT) -> VT: try: return mapping[key] except KeyError: return default"
},
{
"ref":"textual.widgets.TreeControl.hover_node",
"url":23,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.TreeControl.cursor",
"url":23,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.TreeControl.cursor_line",
"url":23,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.TreeControl.show_cursor",
"url":23,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.TreeControl.watch_show_cursor",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.TreeControl.watch_cursor_line",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.TreeControl.add",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.TreeControl.find_cursor",
"url":23,
"doc":"Find the line location for the cursor node.",
"func":1
},
{
"ref":"textual.widgets.TreeControl.render",
"url":23,
"doc":"Get renderable for widget. Returns: RenderableType: Any renderable",
"func":1
},
{
"ref":"textual.widgets.TreeControl.render_node",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.TreeControl.action_click_label",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.TreeControl.on_mouse_move",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.TreeControl.on_key",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.TreeControl.key_down",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.TreeControl.key_up",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.TreeControl.key_enter",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.TreeControl.cursor_down",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.TreeControl.cursor_up",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.TreeControl.can_focus",
"url":23,
"doc":""
},
{
"ref":"textual.widgets.TreeControl.visible",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.TreeControl.layout_size",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.TreeControl.layout_fraction",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.TreeControl.layout_min_size",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.TreeControl.layout_offset_x",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.TreeControl.layout_offset_y",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.TreeControl.style",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.TreeControl.padding",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.TreeControl.margin",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.TreeControl.border",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.TreeControl.border_style",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.TreeControl.border_title",
"url":16,
"doc":"Reactive descriptor."
},
{
"ref":"textual.widgets.TreeControl.render_styled",
"url":16,
"doc":"Applies style attributes to the default renderable. Returns: RenderableType: A new renderable.",
"func":1
},
{
"ref":"textual.widgets.TreeControl.console",
"url":16,
"doc":"Get the current console."
},
{
"ref":"textual.widgets.TreeControl.root_view",
"url":16,
"doc":"Return the top-most view."
},
{
"ref":"textual.widgets.TreeControl.layout_offset",
"url":16,
"doc":"Get the layout offset as a tuple."
},
{
"ref":"textual.widgets.TreeControl.call_later",
"url":16,
"doc":"Run a callback after processing all messages and refreshing the screen. Args: callback (Callable): A callable.",
"func":1
},
{
"ref":"textual.widgets.TreeControl.refresh",
"url":16,
"doc":"Initiate a refresh of the widget. This method sets an internal flag to perform a refresh, which will be done on the next idle event. Only one refresh will be done even if this method is called multiple times. Args: repaint (bool, optional): Repaint the widget (will call render() again). Defaults to True. layout (bool, optional): Also layout widgets in the view. Defaults to False.",
"func":1
},
{
"ref":"textual.widgets.TreeControl.dispatch_key",
"url":16,
"doc":"Dispatch a key event to method. This method will call the method named 'key_ ' if it exists. Args: event (events.Key): A key event.",
"func":1
},
{
"ref":"textual.widgets.TreeControl.app",
"url":1,
"doc":"Get the current app."
},
{
"ref":"textual.widgets.TreeControl.disable_messages",
"url":1,
"doc":"Disable message types from being processed.",
"func":1
},
{
"ref":"textual.widgets.TreeControl.enable_messages",
"url":1,
"doc":"Enable processing of messages types.",
"func":1
},
{
"ref":"textual.widgets.TreeControl.get_message",
"url":1,
"doc":"Get the next event on the queue, or None if queue is closed. Returns: Optional[Event]: Event object or None.",
"func":1
},
{
"ref":"textual.widgets.TreeControl.peek_message",
"url":1,
"doc":"Peek the message at the head of the queue (does not remove it from the queue), or return None if the queue is empty. Returns: Optional[Message]: The message or None.",
"func":1
},
{
"ref":"textual.widgets.TreeControl.close_messages",
"url":1,
"doc":"Close message queue, and optionally wait for queue to finish processing.",
"func":1
},
{
"ref":"textual.widgets.TreeNode",
"url":23,
"doc":"Abstract base class for generic types. A generic type is typically declared by inheriting from this class parameterized with one or more type variables. For example, a generic mapping type might be defined as class Mapping(Generic[KT, VT]): def __getitem__(self, key: KT) -> VT:  .  Etc. This class can then be used as follows def lookup_name(mapping: Mapping[KT, VT], key: KT, default: VT) -> VT: try: return mapping[key] except KeyError: return default"
},
{
"ref":"textual.widgets.TreeNode.control",
"url":23,
"doc":""
},
{
"ref":"textual.widgets.TreeNode.empty",
"url":23,
"doc":""
},
{
"ref":"textual.widgets.TreeNode.expanded",
"url":23,
"doc":""
},
{
"ref":"textual.widgets.TreeNode.is_cursor",
"url":23,
"doc":""
},
{
"ref":"textual.widgets.TreeNode.tree",
"url":23,
"doc":""
},
{
"ref":"textual.widgets.TreeNode.next_node",
"url":23,
"doc":"The next node in the tree, or None if at the end."
},
{
"ref":"textual.widgets.TreeNode.previous_node",
"url":23,
"doc":"The previous node in the tree, or None if at the end."
},
{
"ref":"textual.widgets.TreeNode.next_sibling",
"url":23,
"doc":"The next sibling, or None if last sibling."
},
{
"ref":"textual.widgets.TreeNode.previous_sibling",
"url":23,
"doc":"Previous sibling or None if first sibling."
},
{
"ref":"textual.widgets.TreeNode.expand",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.TreeNode.toggle",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.TreeNode.add",
"url":23,
"doc":"",
"func":1
},
{
"ref":"textual.widgets.NodeID",
"url":23,
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
"ref":"textual.driver",
"url":25,
"doc":""
},
{
"ref":"textual.driver.Driver",
"url":25,
"doc":"Helper class that provides a standard way to create an ABC using inheritance."
},
{
"ref":"textual.driver.Driver.send_event",
"url":25,
"doc":"",
"func":1
},
{
"ref":"textual.driver.Driver.process_event",
"url":25,
"doc":"Performs some additional processing of events.",
"func":1
},
{
"ref":"textual.driver.Driver.start_application_mode",
"url":25,
"doc":"",
"func":1
},
{
"ref":"textual.driver.Driver.disable_input",
"url":25,
"doc":"",
"func":1
},
{
"ref":"textual.driver.Driver.stop_application_mode",
"url":25,
"doc":"",
"func":1
},
{
"ref":"textual.events",
"url":26,
"doc":""
},
{
"ref":"textual.events.Event",
"url":26,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Event.sender",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Event.bubble",
"url":26,
"doc":""
},
{
"ref":"textual.events.Event.verbosity",
"url":26,
"doc":""
},
{
"ref":"textual.events.Event.set_forwarded",
"url":4,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.Event.can_replace",
"url":4,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Event.prevent_default",
"url":4,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Event.stop",
"url":4,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Event.wait",
"url":4,
"doc":"Wait for the message to be processed.",
"func":1
},
{
"ref":"textual.events.Event.name",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Event.time",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Null",
"url":26,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Null.sender",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Null.can_replace",
"url":26,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Null.bubble",
"url":26,
"doc":""
},
{
"ref":"textual.events.Null.verbosity",
"url":26,
"doc":""
},
{
"ref":"textual.events.Null.set_forwarded",
"url":4,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.Null.prevent_default",
"url":4,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Null.stop",
"url":4,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Null.wait",
"url":4,
"doc":"Wait for the message to be processed.",
"func":1
},
{
"ref":"textual.events.Null.name",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Null.time",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Callback",
"url":26,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Callback.sender",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Callback.bubble",
"url":26,
"doc":""
},
{
"ref":"textual.events.Callback.verbosity",
"url":26,
"doc":""
},
{
"ref":"textual.events.Callback.set_forwarded",
"url":4,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.Callback.can_replace",
"url":4,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Callback.prevent_default",
"url":4,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Callback.stop",
"url":4,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Callback.wait",
"url":4,
"doc":"Wait for the message to be processed.",
"func":1
},
{
"ref":"textual.events.Callback.name",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Callback.time",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.ShutdownRequest",
"url":26,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.ShutdownRequest.sender",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.ShutdownRequest.bubble",
"url":26,
"doc":""
},
{
"ref":"textual.events.ShutdownRequest.verbosity",
"url":26,
"doc":""
},
{
"ref":"textual.events.ShutdownRequest.set_forwarded",
"url":4,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.ShutdownRequest.can_replace",
"url":4,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.ShutdownRequest.prevent_default",
"url":4,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.ShutdownRequest.stop",
"url":4,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.ShutdownRequest.wait",
"url":4,
"doc":"Wait for the message to be processed.",
"func":1
},
{
"ref":"textual.events.ShutdownRequest.name",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.ShutdownRequest.time",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Shutdown",
"url":26,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Shutdown.sender",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Shutdown.bubble",
"url":26,
"doc":""
},
{
"ref":"textual.events.Shutdown.verbosity",
"url":26,
"doc":""
},
{
"ref":"textual.events.Shutdown.set_forwarded",
"url":4,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.Shutdown.can_replace",
"url":4,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Shutdown.prevent_default",
"url":4,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Shutdown.stop",
"url":4,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Shutdown.wait",
"url":4,
"doc":"Wait for the message to be processed.",
"func":1
},
{
"ref":"textual.events.Shutdown.name",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Shutdown.time",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Load",
"url":26,
"doc":"Sent when the App is running but  before the terminal is in application mode. Use this event to run any set up that doesn't require any visuals such as loading configuration and binding keys. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Load.sender",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Load.bubble",
"url":26,
"doc":""
},
{
"ref":"textual.events.Load.verbosity",
"url":26,
"doc":""
},
{
"ref":"textual.events.Load.set_forwarded",
"url":4,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.Load.can_replace",
"url":4,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Load.prevent_default",
"url":4,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Load.stop",
"url":4,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Load.wait",
"url":4,
"doc":"Wait for the message to be processed.",
"func":1
},
{
"ref":"textual.events.Load.name",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Load.time",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Idle",
"url":26,
"doc":"Sent when there are no more items in the message queue. This is a pseudo-event in that it is created by the Textual system and doesn't go through the usual message queue. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Idle.sender",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Idle.bubble",
"url":26,
"doc":""
},
{
"ref":"textual.events.Idle.verbosity",
"url":26,
"doc":""
},
{
"ref":"textual.events.Idle.set_forwarded",
"url":4,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.Idle.can_replace",
"url":4,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Idle.prevent_default",
"url":4,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Idle.stop",
"url":4,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Idle.wait",
"url":4,
"doc":"Wait for the message to be processed.",
"func":1
},
{
"ref":"textual.events.Idle.name",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Idle.time",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Action",
"url":26,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Action.sender",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Action.action",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Action.bubble",
"url":26,
"doc":""
},
{
"ref":"textual.events.Action.verbosity",
"url":26,
"doc":""
},
{
"ref":"textual.events.Action.set_forwarded",
"url":4,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.Action.can_replace",
"url":4,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Action.prevent_default",
"url":4,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Action.stop",
"url":4,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Action.wait",
"url":4,
"doc":"Wait for the message to be processed.",
"func":1
},
{
"ref":"textual.events.Action.name",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Action.time",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Resize",
"url":26,
"doc":"Sent when the app or widget has been resized. Args: sender (MessageTarget): Event sender. width (int): New width in terminal cells. height (int): New height in terminal cells."
},
{
"ref":"textual.events.Resize.can_replace",
"url":26,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Resize.width",
"url":26,
"doc":""
},
{
"ref":"textual.events.Resize.height",
"url":26,
"doc":""
},
{
"ref":"textual.events.Resize.size",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Resize.bubble",
"url":26,
"doc":""
},
{
"ref":"textual.events.Resize.verbosity",
"url":26,
"doc":""
},
{
"ref":"textual.events.Resize.sender",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Resize.set_forwarded",
"url":4,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.Resize.prevent_default",
"url":4,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Resize.stop",
"url":4,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Resize.wait",
"url":4,
"doc":"Wait for the message to be processed.",
"func":1
},
{
"ref":"textual.events.Resize.name",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Resize.time",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Mount",
"url":26,
"doc":"Sent when a widget is  mounted and may receive messages. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Mount.sender",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Mount.bubble",
"url":26,
"doc":""
},
{
"ref":"textual.events.Mount.verbosity",
"url":26,
"doc":""
},
{
"ref":"textual.events.Mount.set_forwarded",
"url":4,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.Mount.can_replace",
"url":4,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Mount.prevent_default",
"url":4,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Mount.stop",
"url":4,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Mount.wait",
"url":4,
"doc":"Wait for the message to be processed.",
"func":1
},
{
"ref":"textual.events.Mount.name",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Mount.time",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Unmount",
"url":26,
"doc":"Sent when a widget is unmounted, and may no longer receive messages. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Unmount.sender",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Unmount.bubble",
"url":26,
"doc":""
},
{
"ref":"textual.events.Unmount.verbosity",
"url":26,
"doc":""
},
{
"ref":"textual.events.Unmount.set_forwarded",
"url":4,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.Unmount.can_replace",
"url":4,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Unmount.prevent_default",
"url":4,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Unmount.stop",
"url":4,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Unmount.wait",
"url":4,
"doc":"Wait for the message to be processed.",
"func":1
},
{
"ref":"textual.events.Unmount.name",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Unmount.time",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Show",
"url":26,
"doc":"Sent when a widget has become visible. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Show.sender",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Show.bubble",
"url":26,
"doc":""
},
{
"ref":"textual.events.Show.verbosity",
"url":26,
"doc":""
},
{
"ref":"textual.events.Show.set_forwarded",
"url":4,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.Show.can_replace",
"url":4,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Show.prevent_default",
"url":4,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Show.stop",
"url":4,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Show.wait",
"url":4,
"doc":"Wait for the message to be processed.",
"func":1
},
{
"ref":"textual.events.Show.name",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Show.time",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Hide",
"url":26,
"doc":"Sent when a widget has been hidden. A widget may be hidden by setting its  visible flag to  False , if it is no longer in a layout, or if it has been offset beyond the edges of the terminal. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Hide.sender",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Hide.bubble",
"url":26,
"doc":""
},
{
"ref":"textual.events.Hide.verbosity",
"url":26,
"doc":""
},
{
"ref":"textual.events.Hide.set_forwarded",
"url":4,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.Hide.can_replace",
"url":4,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Hide.prevent_default",
"url":4,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Hide.stop",
"url":4,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Hide.wait",
"url":4,
"doc":"Wait for the message to be processed.",
"func":1
},
{
"ref":"textual.events.Hide.name",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Hide.time",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseCapture",
"url":26,
"doc":"Sent when the mouse has been captured. When a mouse has been captures, all further mouse events will be sent to the capturing widget. Args: sender (MessageTarget): The sender of the event, (in this case the app). mouse_position (Point): The position of the mouse when captured."
},
{
"ref":"textual.events.MouseCapture.sender",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseCapture.bubble",
"url":26,
"doc":""
},
{
"ref":"textual.events.MouseCapture.verbosity",
"url":26,
"doc":""
},
{
"ref":"textual.events.MouseCapture.set_forwarded",
"url":4,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.MouseCapture.can_replace",
"url":4,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.MouseCapture.prevent_default",
"url":4,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseCapture.stop",
"url":4,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseCapture.wait",
"url":4,
"doc":"Wait for the message to be processed.",
"func":1
},
{
"ref":"textual.events.MouseCapture.name",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseCapture.time",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseRelease",
"url":26,
"doc":"Mouse has been released. Args: sender (MessageTarget): The sender of the event, (in this case the app). mouse_position (Point): The position of the mouse when released."
},
{
"ref":"textual.events.MouseRelease.sender",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseRelease.bubble",
"url":26,
"doc":""
},
{
"ref":"textual.events.MouseRelease.verbosity",
"url":26,
"doc":""
},
{
"ref":"textual.events.MouseRelease.set_forwarded",
"url":4,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.MouseRelease.can_replace",
"url":4,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.MouseRelease.prevent_default",
"url":4,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseRelease.stop",
"url":4,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseRelease.wait",
"url":4,
"doc":"Wait for the message to be processed.",
"func":1
},
{
"ref":"textual.events.MouseRelease.name",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseRelease.time",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.InputEvent",
"url":26,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.InputEvent.sender",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.InputEvent.bubble",
"url":26,
"doc":""
},
{
"ref":"textual.events.InputEvent.verbosity",
"url":26,
"doc":""
},
{
"ref":"textual.events.InputEvent.set_forwarded",
"url":4,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.InputEvent.can_replace",
"url":4,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.InputEvent.prevent_default",
"url":4,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.InputEvent.stop",
"url":4,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.InputEvent.wait",
"url":4,
"doc":"Wait for the message to be processed.",
"func":1
},
{
"ref":"textual.events.InputEvent.name",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.InputEvent.time",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Key",
"url":26,
"doc":"Sent when the user hits a key on the keyboard Args: sender (MessageTarget): The sender of the event (the App) key (str): The pressed key if a single character (or a longer string for special characters)"
},
{
"ref":"textual.events.Key.sender",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Key.key",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Key.bubble",
"url":26,
"doc":""
},
{
"ref":"textual.events.Key.verbosity",
"url":26,
"doc":""
},
{
"ref":"textual.events.Key.set_forwarded",
"url":4,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.Key.can_replace",
"url":4,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Key.prevent_default",
"url":4,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Key.stop",
"url":4,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Key.wait",
"url":4,
"doc":"Wait for the message to be processed.",
"func":1
},
{
"ref":"textual.events.Key.name",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Key.time",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent",
"url":26,
"doc":"Sent in response to a mouse event Args: sender (MessageTarget): The sender of the event. x (int): The relative x coordinate. y (int): The relative y coordinate. delta_x (int): Change in x since the last message. delta_y (int): Change in y since the last message. button (int): Indexed of the pressed button. shift (bool): True if the shift key is pressed. meta (bool): True if the meta key is pressed. ctrl (bool): True if the ctrl key is pressed. screen_x (int, optional): The absolute x coordinate. screen_y (int, optional): The absolute y coordinate. style (Style, optional): The Rich Style under the mouse cursor."
},
{
"ref":"textual.events.MouseEvent.sender",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent.from_event",
"url":26,
"doc":"",
"func":1
},
{
"ref":"textual.events.MouseEvent.style",
"url":26,
"doc":""
},
{
"ref":"textual.events.MouseEvent.offset",
"url":26,
"doc":"",
"func":1
},
{
"ref":"textual.events.MouseEvent.button",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent.ctrl",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent.delta_x",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent.delta_y",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent.meta",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent.screen_x",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent.screen_y",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent.shift",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent.x",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent.y",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent.bubble",
"url":26,
"doc":""
},
{
"ref":"textual.events.MouseEvent.verbosity",
"url":26,
"doc":""
},
{
"ref":"textual.events.MouseEvent.set_forwarded",
"url":4,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.MouseEvent.can_replace",
"url":4,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.MouseEvent.prevent_default",
"url":4,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseEvent.stop",
"url":4,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseEvent.wait",
"url":4,
"doc":"Wait for the message to be processed.",
"func":1
},
{
"ref":"textual.events.MouseEvent.name",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseEvent.time",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove",
"url":26,
"doc":"Sent when the mouse cursor moves. Args: sender (MessageTarget): The sender of the event. x (int): The relative x coordinate. y (int): The relative y coordinate. delta_x (int): Change in x since the last message. delta_y (int): Change in y since the last message. button (int): Indexed of the pressed button. shift (bool): True if the shift key is pressed. meta (bool): True if the meta key is pressed. ctrl (bool): True if the ctrl key is pressed. screen_x (int, optional): The absolute x coordinate. screen_y (int, optional): The absolute y coordinate. style (Style, optional): The Rich Style under the mouse cursor."
},
{
"ref":"textual.events.MouseMove.sender",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove.bubble",
"url":26,
"doc":""
},
{
"ref":"textual.events.MouseMove.verbosity",
"url":26,
"doc":""
},
{
"ref":"textual.events.MouseMove.button",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove.ctrl",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove.delta_x",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove.delta_y",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove.meta",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove.screen_x",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove.screen_y",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove.shift",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove.x",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove.y",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove.set_forwarded",
"url":4,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.MouseMove.can_replace",
"url":4,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.MouseMove.prevent_default",
"url":4,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseMove.stop",
"url":4,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseMove.wait",
"url":4,
"doc":"Wait for the message to be processed.",
"func":1
},
{
"ref":"textual.events.MouseMove.name",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseMove.time",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown",
"url":26,
"doc":"Sent in response to a mouse event Args: sender (MessageTarget): The sender of the event. x (int): The relative x coordinate. y (int): The relative y coordinate. delta_x (int): Change in x since the last message. delta_y (int): Change in y since the last message. button (int): Indexed of the pressed button. shift (bool): True if the shift key is pressed. meta (bool): True if the meta key is pressed. ctrl (bool): True if the ctrl key is pressed. screen_x (int, optional): The absolute x coordinate. screen_y (int, optional): The absolute y coordinate. style (Style, optional): The Rich Style under the mouse cursor."
},
{
"ref":"textual.events.MouseDown.sender",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown.bubble",
"url":26,
"doc":""
},
{
"ref":"textual.events.MouseDown.verbosity",
"url":26,
"doc":""
},
{
"ref":"textual.events.MouseDown.button",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown.ctrl",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown.delta_x",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown.delta_y",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown.meta",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown.screen_x",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown.screen_y",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown.shift",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown.x",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown.y",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown.set_forwarded",
"url":4,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.MouseDown.can_replace",
"url":4,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.MouseDown.prevent_default",
"url":4,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseDown.stop",
"url":4,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseDown.wait",
"url":4,
"doc":"Wait for the message to be processed.",
"func":1
},
{
"ref":"textual.events.MouseDown.name",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseDown.time",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp",
"url":26,
"doc":"Sent in response to a mouse event Args: sender (MessageTarget): The sender of the event. x (int): The relative x coordinate. y (int): The relative y coordinate. delta_x (int): Change in x since the last message. delta_y (int): Change in y since the last message. button (int): Indexed of the pressed button. shift (bool): True if the shift key is pressed. meta (bool): True if the meta key is pressed. ctrl (bool): True if the ctrl key is pressed. screen_x (int, optional): The absolute x coordinate. screen_y (int, optional): The absolute y coordinate. style (Style, optional): The Rich Style under the mouse cursor."
},
{
"ref":"textual.events.MouseUp.sender",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp.bubble",
"url":26,
"doc":""
},
{
"ref":"textual.events.MouseUp.verbosity",
"url":26,
"doc":""
},
{
"ref":"textual.events.MouseUp.button",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp.ctrl",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp.delta_x",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp.delta_y",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp.meta",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp.screen_x",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp.screen_y",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp.shift",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp.x",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp.y",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp.set_forwarded",
"url":4,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.MouseUp.can_replace",
"url":4,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.MouseUp.prevent_default",
"url":4,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseUp.stop",
"url":4,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseUp.wait",
"url":4,
"doc":"Wait for the message to be processed.",
"func":1
},
{
"ref":"textual.events.MouseUp.name",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseUp.time",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseScrollDown",
"url":26,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.MouseScrollDown.sender",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseScrollDown.x",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseScrollDown.y",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseScrollDown.bubble",
"url":26,
"doc":""
},
{
"ref":"textual.events.MouseScrollDown.verbosity",
"url":26,
"doc":""
},
{
"ref":"textual.events.MouseScrollDown.set_forwarded",
"url":4,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.MouseScrollDown.can_replace",
"url":4,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.MouseScrollDown.prevent_default",
"url":4,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseScrollDown.stop",
"url":4,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseScrollDown.wait",
"url":4,
"doc":"Wait for the message to be processed.",
"func":1
},
{
"ref":"textual.events.MouseScrollDown.name",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseScrollDown.time",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseScrollUp",
"url":26,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.MouseScrollUp.sender",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseScrollUp.bubble",
"url":26,
"doc":""
},
{
"ref":"textual.events.MouseScrollUp.verbosity",
"url":26,
"doc":""
},
{
"ref":"textual.events.MouseScrollUp.x",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseScrollUp.y",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseScrollUp.set_forwarded",
"url":4,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.MouseScrollUp.can_replace",
"url":4,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.MouseScrollUp.prevent_default",
"url":4,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseScrollUp.stop",
"url":4,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.MouseScrollUp.wait",
"url":4,
"doc":"Wait for the message to be processed.",
"func":1
},
{
"ref":"textual.events.MouseScrollUp.name",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.MouseScrollUp.time",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click",
"url":26,
"doc":"Sent in response to a mouse event Args: sender (MessageTarget): The sender of the event. x (int): The relative x coordinate. y (int): The relative y coordinate. delta_x (int): Change in x since the last message. delta_y (int): Change in y since the last message. button (int): Indexed of the pressed button. shift (bool): True if the shift key is pressed. meta (bool): True if the meta key is pressed. ctrl (bool): True if the ctrl key is pressed. screen_x (int, optional): The absolute x coordinate. screen_y (int, optional): The absolute y coordinate. style (Style, optional): The Rich Style under the mouse cursor."
},
{
"ref":"textual.events.Click.sender",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click.bubble",
"url":26,
"doc":""
},
{
"ref":"textual.events.Click.verbosity",
"url":26,
"doc":""
},
{
"ref":"textual.events.Click.button",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click.ctrl",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click.delta_x",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click.delta_y",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click.meta",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click.screen_x",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click.screen_y",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click.shift",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click.x",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click.y",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click.set_forwarded",
"url":4,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.Click.can_replace",
"url":4,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Click.prevent_default",
"url":4,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Click.stop",
"url":4,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Click.wait",
"url":4,
"doc":"Wait for the message to be processed.",
"func":1
},
{
"ref":"textual.events.Click.name",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Click.time",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DoubleClick",
"url":26,
"doc":"Sent in response to a mouse event Args: sender (MessageTarget): The sender of the event. x (int): The relative x coordinate. y (int): The relative y coordinate. delta_x (int): Change in x since the last message. delta_y (int): Change in y since the last message. button (int): Indexed of the pressed button. shift (bool): True if the shift key is pressed. meta (bool): True if the meta key is pressed. ctrl (bool): True if the ctrl key is pressed. screen_x (int, optional): The absolute x coordinate. screen_y (int, optional): The absolute y coordinate. style (Style, optional): The Rich Style under the mouse cursor."
},
{
"ref":"textual.events.DoubleClick.sender",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DoubleClick.bubble",
"url":26,
"doc":""
},
{
"ref":"textual.events.DoubleClick.verbosity",
"url":26,
"doc":""
},
{
"ref":"textual.events.DoubleClick.button",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DoubleClick.ctrl",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DoubleClick.delta_x",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DoubleClick.delta_y",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DoubleClick.meta",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DoubleClick.screen_x",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DoubleClick.screen_y",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DoubleClick.shift",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DoubleClick.x",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DoubleClick.y",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DoubleClick.set_forwarded",
"url":4,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.DoubleClick.can_replace",
"url":4,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.DoubleClick.prevent_default",
"url":4,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.DoubleClick.stop",
"url":4,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.DoubleClick.wait",
"url":4,
"doc":"Wait for the message to be processed.",
"func":1
},
{
"ref":"textual.events.DoubleClick.name",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.DoubleClick.time",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Timer",
"url":26,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Timer.sender",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Timer.callback",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Timer.count",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Timer.time",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Timer.bubble",
"url":26,
"doc":""
},
{
"ref":"textual.events.Timer.verbosity",
"url":26,
"doc":""
},
{
"ref":"textual.events.Timer.set_forwarded",
"url":4,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.Timer.can_replace",
"url":4,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Timer.prevent_default",
"url":4,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Timer.stop",
"url":4,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Timer.wait",
"url":4,
"doc":"Wait for the message to be processed.",
"func":1
},
{
"ref":"textual.events.Timer.name",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Enter",
"url":26,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Enter.sender",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Enter.bubble",
"url":26,
"doc":""
},
{
"ref":"textual.events.Enter.verbosity",
"url":26,
"doc":""
},
{
"ref":"textual.events.Enter.set_forwarded",
"url":4,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.Enter.can_replace",
"url":4,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Enter.prevent_default",
"url":4,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Enter.stop",
"url":4,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Enter.wait",
"url":4,
"doc":"Wait for the message to be processed.",
"func":1
},
{
"ref":"textual.events.Enter.name",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Enter.time",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Leave",
"url":26,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Leave.sender",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Leave.bubble",
"url":26,
"doc":""
},
{
"ref":"textual.events.Leave.verbosity",
"url":26,
"doc":""
},
{
"ref":"textual.events.Leave.set_forwarded",
"url":4,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.Leave.can_replace",
"url":4,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Leave.prevent_default",
"url":4,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Leave.stop",
"url":4,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Leave.wait",
"url":4,
"doc":"Wait for the message to be processed.",
"func":1
},
{
"ref":"textual.events.Leave.name",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Leave.time",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Focus",
"url":26,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Focus.sender",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Focus.bubble",
"url":26,
"doc":""
},
{
"ref":"textual.events.Focus.verbosity",
"url":26,
"doc":""
},
{
"ref":"textual.events.Focus.set_forwarded",
"url":4,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.Focus.can_replace",
"url":4,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Focus.prevent_default",
"url":4,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Focus.stop",
"url":4,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Focus.wait",
"url":4,
"doc":"Wait for the message to be processed.",
"func":1
},
{
"ref":"textual.events.Focus.name",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Focus.time",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Blur",
"url":26,
"doc":"Base class for a message. Args: sender (MessageTarget): The sender of the message / event."
},
{
"ref":"textual.events.Blur.sender",
"url":26,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Blur.bubble",
"url":26,
"doc":""
},
{
"ref":"textual.events.Blur.verbosity",
"url":26,
"doc":""
},
{
"ref":"textual.events.Blur.set_forwarded",
"url":4,
"doc":"Mark this event as being forwarded.",
"func":1
},
{
"ref":"textual.events.Blur.can_replace",
"url":4,
"doc":"Check if another message may supersede this one. Args: message (Message): Another message. Returns: bool: True if this message may replace the given message",
"func":1
},
{
"ref":"textual.events.Blur.prevent_default",
"url":4,
"doc":"Suppress the default action. Args: prevent (bool, optional): True if the default action should be suppressed, or False if the default actions should be performed. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Blur.stop",
"url":4,
"doc":"Stop propagation of the message to parent. Args: stop (bool, optional): The stop flag. Defaults to True.",
"func":1
},
{
"ref":"textual.events.Blur.wait",
"url":4,
"doc":"Wait for the message to be processed.",
"func":1
},
{
"ref":"textual.events.Blur.name",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.events.Blur.time",
"url":4,
"doc":"Return an attribute of instance, which is of type owner."
},
{
"ref":"textual.drivers",
"url":27,
"doc":""
},
{
"ref":"textual.drivers.linux_driver",
"url":28,
"doc":""
},
{
"ref":"textual.drivers.linux_driver.LinuxDriver",
"url":28,
"doc":"Powers display and input for Linux / MacOS"
},
{
"ref":"textual.drivers.linux_driver.LinuxDriver.start_application_mode",
"url":28,
"doc":"",
"func":1
},
{
"ref":"textual.drivers.linux_driver.LinuxDriver.disable_input",
"url":28,
"doc":"",
"func":1
},
{
"ref":"textual.drivers.linux_driver.LinuxDriver.stop_application_mode",
"url":28,
"doc":"",
"func":1
},
{
"ref":"textual.drivers.linux_driver.LinuxDriver.run_input_thread",
"url":28,
"doc":"",
"func":1
},
{
"ref":"textual.drivers.linux_driver.LinuxDriver.process_event",
"url":25,
"doc":"Performs some additional processing of events.",
"func":1
},
{
"ref":"textual.layout",
"url":11,
"doc":""
},
{
"ref":"textual.layout.NoWidget",
"url":11,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"textual.layout.OrderedRegion",
"url":11,
"doc":"OrderedRegion(region, order)"
},
{
"ref":"textual.layout.OrderedRegion.region",
"url":11,
"doc":"Alias for field number 0"
},
{
"ref":"textual.layout.OrderedRegion.order",
"url":11,
"doc":"Alias for field number 1"
},
{
"ref":"textual.layout.ReflowResult",
"url":11,
"doc":"The result of a reflow operation. Describes the chances to widgets."
},
{
"ref":"textual.layout.ReflowResult.hidden",
"url":11,
"doc":"Alias for field number 0"
},
{
"ref":"textual.layout.ReflowResult.shown",
"url":11,
"doc":"Alias for field number 1"
},
{
"ref":"textual.layout.ReflowResult.resized",
"url":11,
"doc":"Alias for field number 2"
},
{
"ref":"textual.layout.WidgetPlacement",
"url":11,
"doc":"WidgetPlacement(region, widget, order)"
},
{
"ref":"textual.layout.WidgetPlacement.region",
"url":11,
"doc":"Alias for field number 0"
},
{
"ref":"textual.layout.WidgetPlacement.widget",
"url":11,
"doc":"Alias for field number 1"
},
{
"ref":"textual.layout.WidgetPlacement.order",
"url":11,
"doc":"Alias for field number 2"
},
{
"ref":"textual.layout.LayoutUpdate",
"url":11,
"doc":""
},
{
"ref":"textual.layout.Layout",
"url":11,
"doc":"Responsible for arranging Widgets in a view and rendering them."
},
{
"ref":"textual.layout.Layout.check_update",
"url":11,
"doc":"",
"func":1
},
{
"ref":"textual.layout.Layout.require_update",
"url":11,
"doc":"",
"func":1
},
{
"ref":"textual.layout.Layout.reset_update",
"url":11,
"doc":"",
"func":1
},
{
"ref":"textual.layout.Layout.reset",
"url":11,
"doc":"",
"func":1
},
{
"ref":"textual.layout.Layout.reflow",
"url":11,
"doc":"",
"func":1
},
{
"ref":"textual.layout.Layout.get_widgets",
"url":11,
"doc":"",
"func":1
},
{
"ref":"textual.layout.Layout.arrange",
"url":11,
"doc":"Generate a layout map that defines where on the screen the widgets will be drawn. Args: console (Console): Console instance. size (Dimensions): Size of container. viewport (Region): Screen relative viewport. Returns: Iterable[WidgetPlacement]: An iterable of widget location",
"func":1
},
{
"ref":"textual.layout.Layout.mount_all",
"url":11,
"doc":"",
"func":1
},
{
"ref":"textual.layout.Layout.map",
"url":11,
"doc":""
},
{
"ref":"textual.layout.Layout.get_offset",
"url":11,
"doc":"Get the offset of a widget.",
"func":1
},
{
"ref":"textual.layout.Layout.get_widget_at",
"url":11,
"doc":"Get the widget under the given point or None.",
"func":1
},
{
"ref":"textual.layout.Layout.get_style_at",
"url":11,
"doc":"",
"func":1
},
{
"ref":"textual.layout.Layout.get_widget_region",
"url":11,
"doc":"",
"func":1
},
{
"ref":"textual.layout.Layout.cuts",
"url":11,
"doc":"Get vertical cuts. A cut is every point on a line where a widget starts or ends. Returns: list[list[int : A list of cuts for every line."
},
{
"ref":"textual.layout.Layout.render",
"url":11,
"doc":"Render a layout. Args: console (Console): Console instance. clip (Optional[Region]): Region to clip to. Returns: SegmentLines: A renderable",
"func":1
},
{
"ref":"textual.layout.Layout.update_widget",
"url":11,
"doc":"",
"func":1
}
]