import { Dialog, WebDialog, WindowsDialog } from "./factory/factoryMethod";

class FactoryMethodApplication {
  dialog: Dialog | null;

  constructor() {
    this.dialog = null;
    this.main()
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
new FactoryMethodApplication()
