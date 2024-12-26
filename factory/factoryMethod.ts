interface IButton {
    render(): void;
    onClick(): void;
}

interface IDialog {
    render(): void;
    createButton: IButton
}

class Dialog {}