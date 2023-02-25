import { FormControl } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  template: `
    <div *ngIf="temErro()" class="ui-message ui-widget ui-corner-all ui-message-error ng-star-inserted">
      {{ text }}
    </div>
  `,
  styles: [`
    .ui-messages-error {
      margin: 0;
      margin-top: 4px;
    }
  `],
})
export class MessageComponent {

  @Input() error: string | undefined;
  @Input() control: FormControl | undefined;
  @Input() text: string | undefined;

  temErro(): boolean {
    let error = true;
    error = (this.control!.hasError(this.error!) && this.control!.dirty);
    return error;
  }

}
