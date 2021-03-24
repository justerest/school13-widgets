import { CertificateIconComponent } from './CertificateIconComponent';
import { nonNullable } from './nonNullable';
import { OnConnected } from './OnConnected';
import { SignParams } from './SignParams';

const DEFAULT_SIGN: SignParams = {
  serialNumber: '329af39f270c47d3fa0b0c344d1632afc8217a61',
  author: 'Мухорина Елена Ивановна',
  singedAt: '23.03.2021',
};

export class SignedDocumentComponent extends HTMLElement implements OnConnected {
  static readonly selector = 'signed-document';

  get serialNumber(): string | null {
    return this.getAttribute('number');
  }

  get author(): string | null {
    return this.getAttribute('author');
  }

  get signedAt(): string | null {
    return this.getAttribute('date');
  }

  connectedCallback(): void {
    this.insertAnchorElement();
    this.append(CertificateIconComponent.create(this.getSignParams()));
  }

  private getSignParams(): SignParams {
    return {
      serialNumber: this.serialNumber ?? DEFAULT_SIGN.serialNumber,
      author: this.author ?? DEFAULT_SIGN.author,
      singedAt: this.signedAt ?? DEFAULT_SIGN.singedAt,
    };
  }

  private insertAnchorElement(): void {
    const link = document.createElement('a');
    const anchorAttrs = this.getAnchorAttrs();
    anchorAttrs.forEach((attr) => this.removeAttribute(attr.name));
    anchorAttrs.forEach((attr) => link.setAttribute(attr.name, attr.value));
    link.innerHTML = this.innerHTML;
    this.innerHTML = link.outerHTML;
  }

  private getAnchorAttrs(): Attr[] {
    return ['href', 'target'].map((name) => this.attributes.getNamedItem(name)).filter(nonNullable);
  }
}
