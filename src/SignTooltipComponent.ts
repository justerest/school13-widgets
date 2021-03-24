import { OnConnected } from './OnConnected';
import { Prop } from './Prop';
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

  @Prop()
  private signParams!: SignParams;

  connectedCallback(): void {
    const { serialNumber, author, singedAt } = this.signParams;
    this.innerHTML = `
			<h3>Документ подписан электронной подписью</h3>
			<p>Серийный номер: <strong>${serialNumber}</strong></p>
			<p>Директор: <strong>${author}</strong></p>
			<p>Дата подписания документа: <strong>${singedAt}</strong></p>
		`;
  }
}
