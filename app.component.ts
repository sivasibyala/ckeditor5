import { Component } from '@angular/core';
import '@ckeditor/ckeditor5-build-classic/build/translations/de';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  form: FormGroup;



  constructor() {
    this.form = new FormGroup(
      {
      editorData: new FormControl( Validators.required)
      }
    );

  }

  public isDisabled = false;
  toggleDisabled() {
    this.isDisabled = !this.isDisabled
  }



  public Editor = DecoupledEditor;
  public onReady(editor) {
    editor.ui.getEditableElement().parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.getEditableElement()
    );
  }

  public onChange({ editor }: ChangeEvent) {
    const data = editor.getData();
    console.log(data);
  }

  onSave() {
    console.log(this.form.value.editorData);
  }
}
