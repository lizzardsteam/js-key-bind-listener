## Description
Simple JS listener that registers key-bindings and initiates an action if the 
user input matches the registered combinations

## Usage
To modify the registered key-binds:
1. Open app.js
2. Make sure to require the model
3. Use the register method to add new key-binds
```js
let binder = new KeyBindListener();
binder.register("SHIFT", "E", () => alert("Activated key-bind: Shift + E"));
```