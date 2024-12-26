interface IGateState {
  enter(): void;
  pay(): void;
  payOk(): void;
  payFailed(): void;
}

export class Gate {
  state: IGateState;

  constructor() {
    this.state = new ClosedGateState(this);
  }

  /**
   * changeGateState
   * @param gateState
   */
  public changeGateState(gateState: IGateState): void {
    this.state = gateState;
  }

  /**
   * enter
   */
  public enter() {
    this.state.enter();
  }

  /**
   * pay
   */
  public pay() {
    this.state.pay();
  }

  /**
   * payOk
   */
  public payOk() {
    this.state.payOk();
  }

  /**
   * payFailed
   */
  public payFailed() {
    this.state.payFailed();
  }
}

export class OpenGateState implements IGateState {
  gate: Gate;

  public constructor(gate: Gate) {
    this.gate = gate;
  }

  public enter(): void {
    throw new Error("Method not implemented.");
  }
  public pay(): void {
    throw new Error("Method not implemented.");
  }
  public payOk(): void {
    console.log("Let user in");
    this.gate.changeGateState(new ClosedGateState(this.gate));
  }
  public payFailed(): void {
    throw new Error("Method not implemented.");
  }
}

export class ClosedGateState implements IGateState {
  gate: Gate;

  constructor(gate: Gate) {
    this.gate = gate;
  }

  enter(): void {
    throw new Error("Method not implemented.");
  }
  pay(): void {
    throw new Error("Method not implemented.");
  }
  payOk(): void {
    console.log("Let user in");
    this.gate.changeGateState(new OpenGateState(this.gate));
  }
  payFailed(): void {
    throw new Error("Method not implemented.");
  }
}
