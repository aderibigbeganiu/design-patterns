export interface IButton {
  render(): void;
  onClick(): void;
}

// export interface IDialog {
//   render(): void;
//   createButton(): IButton;
// }

export class WindowsButton {
  public render(): void {
    console.log("Windows button");
  }

  /**
   * onClick
   */
  public onClick() {
    console.log("Windows button clicked");
  }
}

export class WebButton {
  public render(): void {
    console.log("Web button");
  }

  /**
   * onClick
   */
  public onClick() {
    console.log("Web button clicked");
  }
}

export abstract class Dialog {
  public abstract createButton(): IButton;

  public render(): void {
    const button = this.createButton();
    return button.render();
  }
}

export class WindowsDialog extends Dialog {
  createButton(): IButton {
    return new WindowsButton();
  }
}

export class WebDialog extends Dialog {
  createButton(): IButton {
    return new WebButton();
  }
}
