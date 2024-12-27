export interface IButton {
  paint(): void;
}

export interface ICheckbox {
  paint(): void;
}

export interface IGUIFactory {
  createButton(): IButton;
  createCheckbox(): ICheckbox;
}

export class WinButton implements IButton {
  paint(): void {
    console.log("Windows button");
  }
}

export class MacButton implements IButton {
  paint(): void {
    console.log("Mac button");
  }
}

export class WinCheckbox implements ICheckbox {
  paint(): void {
    console.log("Windows checkbox");
  }
}

export class MacCheckbox implements ICheckbox {
  paint(): void {
    console.log("Mac checkbox");
  }
}

export class WinFactory implements IGUIFactory {
  createButton(): IButton {
    return new WinButton();
  }
  createCheckbox(): ICheckbox {
    return new WinCheckbox();
  }
}

export class MacFactory implements IGUIFactory {
  createButton(): IButton {
    return new MacButton();
  }
  createCheckbox(): ICheckbox {
    return new MacCheckbox();
  }
}
