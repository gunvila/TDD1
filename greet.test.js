const greet = require('./greet');

test('Write a method greet(name)', () => {
    expect(greet("Bob"));
});

test('when name is "Bob", the method should return a string "Hello, Bob.".', () => {
    expect(greet("Bob")).toBe("Hello, Bob.");
});

test('null, then the method should return the string "Hello, my friend.".', () => {
    expect(greet(null)).toBe("Hello, my friend.");
});

test('all uppercase, then the method should shout back to the user. For example, when name is "JERRY".', () => {
    expect(greet("JERRY")).toBe("HELLO JERRY!");
});

test('is an array of two names (or, in languages that support it, varargs or a splat), then both names should be printed. For example, when name is ["Jill", "Jane"].', () => {
    expect(greet(["Jill" , "Jane"])).toBe("Hello, Jill and Jane.");
});

test('is ["Amy", "Brian", "Charlotte"], then the method should return the string "Hello, Amy, Brian, and Charlotte.".', () => {
    expect(greet(["Amy", "Brian", "Charlotte"])).toBe("Hello, Amy, Brian, and Charlotte.");
});