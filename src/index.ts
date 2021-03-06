import '@webcomponents/custom-elements';
import '@webcomponents/custom-elements/src/native-shim';

import { CertificateIconComponent } from './CertificateIconComponent';
import { SignedDocumentComponent } from './SignedDocumentComponent';
import { SignTooltipComponent } from './SignTooltipComponent';

import './styles.scss';

customElements.define(SignedDocumentComponent.selector, SignedDocumentComponent);
customElements.define(CertificateIconComponent.selector, CertificateIconComponent);
customElements.define(SignTooltipComponent.selector, SignTooltipComponent);
