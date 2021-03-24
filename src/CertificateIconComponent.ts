import { OnConnected } from './OnConnected';
import { SignTooltipComponent } from './SignTooltipComponent';

export class CertificateIconComponent extends HTMLElement implements OnConnected {
  static readonly selector = 'certificate-icon';

  static create(): HTMLElement {
    return document.createElement(CertificateIconComponent.selector);
  }

  connectedCallback(): void {
    this.innerHTML = `🎗`;
    this.appendChild(
      SignTooltipComponent.create({
        serialNumber: '329af39f270c47d3fa0b0c344d1632afc8217a61',
        author: 'Мухорина Елена Ивановна',
        singedAt: '23.03.2021',
      }),
    );
  }

  onmouseenter = () => {};
}
