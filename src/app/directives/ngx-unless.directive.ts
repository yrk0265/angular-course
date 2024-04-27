import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngxUnless]',
  standalone: false
})
export class NgxUnlessDirective {
  visible = false;
  constructor(private templateRef:TemplateRef<any>,
    private viewContainer:ViewContainerRef
  ) { 
    //viewContainer.createEmbeddedView
  }

  @Input()
  set ngxUnless(condition:boolean){
      if(!condition && !this.visible){
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
      else if(condition && this.visible){
        this.viewContainer.clear();
      }
  }

}
