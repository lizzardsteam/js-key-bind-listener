/**
 * Simple JS listener that registers key-bindings
 * and initiates an action if the user input matches the registered combinations.
 * */
class KeyBindListener {
    initialState = [];
    actions = [];

    constructor() {
        this.keyDown();
        this.keyUp();
    }

    clearState() {
        this.initialState = [];
    }

    setState(key) {
        this.initialState.push(key.toString().toUpperCase());
        this.reducer();
    }

    reducer() {
        this.initialState.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], []);
    }

    keyDown() {
        document.addEventListener('keydown', (e) => {
            this.setState(e.key);

            for(let i = 0; i < this.actions.length; i++) {
                if (this.initialState[0] === this.actions[i].key1 && this.initialState[1] === this.actions[i].key2) {
                    this.actions[i].action();
                    this.clearState();
                }
            }
        });
    }

    keyUp() {
        document.addEventListener('keyup', (e) => {
            this.clearState();
        });
    }

    /**
     * This method tells the listener what key combinations to listen for
     * and what action to execute when the user input matches a registered key-bind.
     * @param key1: string
     * @param key2: string
     * @param action: function
     * @return void
    * */
    register(key1, key2, action) {
        this.actions.push({
            key1: key1,
            key2: key2,
            action: action,
        });
    }
}