export interface OnConnected {
  connectedCallback(): void | Promise<void>;
}
