import { OnConnected } from './OnConnected';
import { SignParams } from './SignParams';

export class SignTooltipComponent extends HTMLElement implements OnConnected {
  static readonly selector = 'sign-tooltip';

  static create(signParams: SignParams): HTMLElement {
    const signTooltip = document.createElement(
      SignTooltipComponent.selector,
    ) as SignTooltipComponent;
    signTooltip.signParams = signParams;
    return signTooltip;
  }

  private get signParams(): SignParams {
    return JSON.parse(this.getAttribute('signParams') ?? '');
  }

  private set signParams(signParams: SignParams) {
    this.setAttribute('signParams', JSON.stringify(signParams));
  }

  connectedCallback(): void {
    this.innerHTML = `
			<h3>Документ подписан электронной подписью</h3>
			<p>Серийный номер: <strong>${this.signParams.serialNumber}</strong></p>
			<p>Директор: <strong>${this.signParams.author}</strong></p>
			<p>Дата подписания документа: <strong>${this.signParams.singedAt}</strong></p>
		`;
  }
}
