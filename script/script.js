const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
// wrapper.setAttribute("class", "wrapper");
document.body.append(wrapper);

const screen = document.createElement("div");
screen.classList.add("screen");
wrapper.append(screen);

const screenInput = document.createElement("input");
screenInput.setAttribute("readonly", "");
screenInput.value = 0;
screen.append(screenInput);

const buttons = document.createElement("div");
buttons.classList.add("buttons");
wrapper.append(buttons);

const numbers = document.createElement("div");
numbers.classList.add("numbers");
buttons.append(numbers);

for (let i = 7; i > 0; i -= 3) {

    const section = document.createElement("div");
    section.classList.add("section");

    for (let j = 0; j < 3; j++) {

        const button = document.createElement("button");

        button.addEventListener("click", (e) => {

            if (screenInput.value === "0") {
                screenInput.value = "";
            }

            screenInput.value += e.target.mathValue

        });

        button.mathValue = i + j;
        button.innerText = i + j;

        section.append(button);
    }

    numbers.append(section);
}

const section = document.createElement("div");
section.classList.add("section");

const zero = document.createElement("button");
zero.innerText = zero.mathValue = 0;

zero.addEventListener("click", (e) => {

    if (screenInput.value === "0") {
        return
    }

    screenInput.value += e.target.mathValue;
});

section.append(zero);

const dot = document.createElement("button");
dot.innerText = dot.mathValue = ".";

dot.addEventListener("click", (e) => {
    
    if (screenInput.value.includes(".")) {
        return
    }

    screenInput.value += e.target.innerText;

});

section.append(dot)

numbers.append(section)

const actions = document.createElement("div");
actions.classList.add("actions");

const actionNames = {
    clear: "AC",
    plus: "+",
    minus: "-",
    equal: "="
};

for (let actionName in actionNames) {

    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("actionContainer");

    const actionButton = document.createElement("button");
    actionButton.action = actionName;
    actionButton.innerText = actionNames[actionName];

    actionButton.addEventListener("click", (e) => {

        switch (e.target.action) {
            case "clear": {
                window.value1 = screenInput.value = 0
            }
                break;

            case "plus": {
                window.value1 = screenInput.value;
                window.action = "plus";
                screenInput.value = "";
            }
                break;

            case "minus": {
                window.value1 = screenInput.value;
                window.action = "minus";
                screenInput.value = "";
            }
                break;

            case "equal": {

                //15 + 5; = 20

                //value1 - 15;
                //value2 - 5


                // pressed equal

                // value1 = value2 - ete erkrord angam havasarna sexmvel

                // value2 = inp.value


                let value2;




                // if (window.value1) {
                //     screenInput.value = "";
                // }

                if (window.action === "plus") {
                    value2 = screenInput.value;
                    screenInput.value = +window.value1 + +screenInput.value;
                }
                else if (window.action === "minus") {
                    screenInput.value = +window.value1 - +screenInput.value;
                }
                // else if (window.action === "equal") {
                //     screenInput.value = window.secondValue + screenInput.value;
                // }
                // window.value1 = value2
                // window.action = "equal";
                // window.secondValue = value2;
            }
                break;
        }

    });

    buttonDiv.append(actionButton);
    actions.append(buttonDiv);

}

buttons.append(actions);



