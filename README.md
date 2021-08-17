## Making a plan

1. Make a drawing of your app. Simple "wireframes"
2. Once you have a drawing, name the HTML elements you'll need to realize your vision
3. For each HTML element ask: Why do I need this?
4. Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5. Is there some state we need to initialize?
6. Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?
7. Think about how to validate each of your steps
8. Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9. Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.

1) App Outline:

   - Needs three sections with information to be quizzed on.
   - Needs at least 1 picture.
   - Needs 1 button.

2) & 3) & 4) HTML Elements:

   - A place for the information (div, span, p, etc)
   - Why: to put the information to be quizzed on
   - How: div element
   - An ordered list
   - Why: for facts
   - How: ol element
   - An unordered list
   - Why: for facts
   - A button
   - Why: to start the quiz
   - How: button element

5) Initial Sate: 0;

- To count correct answers

6) Event:

- Button click
  - Quiz begins
  - Keeps Track of Correct/Incorrect Answers

7) Validate:
- Console.log (Use Chrome Inspect Tool)

8) No OBjects

9) Featurs:
- The results depend on the quiz feature. 
- The Chosen Name depends on user input. 

