import {
  IGUIFactory,
  IButton as AFIButton,
  ICheckbox as AFICheckbox,
  WinFactory,
  MacFactory,
} from "./factory/abstractFactory";
import {
  Dialog,
  IButton,
  WebDialog,
  WindowsDialog,
} from "./factory/factoryMethod";

class FactoryMethodApplication {
  dialog?: Dialog;

  constructor() {
    this.main();
  }

  initializeDialog(config: { OS: "Windows" | "Web" }) {
    if (config.OS === "Windows") {
      return new WindowsDialog();
    } else if (config.OS === "Web") {
      return new WebDialog();
    } else {
      throw new Error("Error! Unknown operating system.");
    }
  }

  main() {
    const dialog1 = this.initializeDialog({ OS: "Windows" });
    const dialogButton1 = dialog1.createButton();
    dialog1.render();
    dialogButton1.onClick();

    const dialog2 = this.initializeDialog({ OS: "Web" });
    const dialogButton2 = dialog2.createButton();
    dialog2.render();
    dialogButton2.onClick();
  }
}
// new FactoryMethodApplication()

class AbstractFactoryApplication {
  private factory: IGUIFactory;
  private button?: AFIButton;
  private checkbox?: AFICheckbox;

  constructor(factory: IGUIFactory) {
    this.factory = factory;
  }

  createUI() {
    this.button = this.factory.createButton();
    this.checkbox = this.factory.createCheckbox();
  }

  paint() {
    this.button!.paint();
    this.checkbox!.paint();
  }
}

class AbstractFactoryConfig {
  constructor(private config: { OS: "Windows" | "Mac" }) {
    this.config = config;
    this.main();
  }

  main() {
    let factory: IGUIFactory;
    if (this.config.OS === "Windows") {
      factory = new WinFactory();
    } else if (this.config.OS === "Mac") {
      factory = new MacFactory();
    } else {
      throw new Error("Error! Unknown operating system");
    }
    const app = new AbstractFactoryApplication(factory);
    app.createUI();
    app.paint();
  }
}

new AbstractFactoryConfig({ OS: "Mac" });
