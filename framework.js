// COMPONENT
export class Component {
    // PROP
    constructor() {
      this.element = null;
      this.state = {};
      this.props = {};
      this.children = [];
    }
    // STATE
    setState(newState) {
      this.state = { ...this.state, ...newState };
      this.update();
    }
    // PROP
    setProps(newProps) {
      this.props = { ...this.props, ...newProps };
      this.update();
    }
  
    addChild(child) {
      this.children.push(child);
    }
  
    removeChild(child) {
      const index = this.children.indexOf(child);
      if (index !== -1) {
        this.children.splice(index, 1);
      }
    }
  
    update() {
      // Re-render the component
      if (this.element) {
        const newElement = this.render();
        this.element.parentNode.replaceChild(newElement, this.element);
        this.element = newElement;
      }
    }
  
    render() {
      // This method should be overridden by child classes
      return document.createElement('div');
    }
  
    mount(parent) {
      this.element = this.render();
      parent.appendChild(this.element);
      this.onMount();
    }
  
    unmount() {
      if (this.element && this.element.parentNode) {
        this.element.parentNode.removeChild(this.element);
      }
      this.onDestroy();
    }
  
    onMount() {
      // This method can be overridden by child classes
      // It's called when the component is added to the DOM
    }
  
    onDestroy() {
      // This method can be overridden by child classes
      // It's called when the component is removed from the DOM
    }
  }
