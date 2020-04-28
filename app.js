// Initialize the listener
let binder = new KeyBindListener();

// Use the register method to add new key-bindings and actions to the listener
binder.register("SHIFT", "Q", () => alert("Activated key-bind: Shift + Q"));
binder.register("SHIFT", "E", () => alert("Activated key-bind: Shift + E"));
