import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appNgShowInput]'
})
export class InputDirective {
  @HostBinding('class.isShow') isShow = true;

  @Input() set appNgShowInput(value){
    this.isShow = value;
  }
}
