import { CertificateIconComponent } from './CertificateIconComponent';
import { OnConnected } from './OnConnected';

export class SignedDocumentComponent extends HTMLElement implements OnConnected {
  static readonly selector = 'signed-document';

  connectedCallback(): void {
    this.insertAnchorElement();
    this.append(CertificateIconComponent.create());
  }

  private insertAnchorElement() {
    const link = document.createElement('a');
    const attributeList = Object.values(this.attributes);
    attributeList.forEach((attr) => this.removeAttribute(attr.name));
    attributeList.forEach((attr) => link.setAttribute(attr.name, attr.value));
    link.innerHTML = this.innerHTML;
    this.innerHTML = link.outerHTML;
  }
}
