// Component #3: NameInput
import { Component, createEffect } from './framework.js';

export class NameInput extends Component {
  constructor(onSubmit) {
    super();
    this.onSubmit = onSubmit;
    this.labelState = createState(label);
    // DERIVED VALUE
    this.prevent = createDerived(() => {
        return this.state.label;
    });
    //EFFECT
    createEffect(() => {
        console.log(`${this.state.label}`);
    });
  }

  render() {
    const form = document.createElement('form');
    const input = document.createElement('input');
    const submitButton = document.createElement('button');

    input.type = 'text';
    input.placeholder = 'Enter your name';
    submitButton.textContent = 'Submit';

    form.appendChild(input);
    form.appendChild(submitButton);
// VALUE
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.onSubmit(input.value);
    });

    return form;
  }
}
