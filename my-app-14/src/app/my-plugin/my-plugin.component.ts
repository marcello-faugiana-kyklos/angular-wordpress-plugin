import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'cippy-plug',
  templateUrl: './my-plugin.component.html',
  styleUrls: ['./my-plugin.component.css'],
})
export class MyPluginComponent implements AfterViewInit  {
  public test: string = "";
  public button: SafeHtml;

  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    private renderer: Renderer2,
    private el: ElementRef
  ) {
    this.button = this.sanitizer.bypassSecurityTrustHtml('<button (click)="myFuncDynamic()">Ciao sono un bottone con la risposta dinamica!</button>');
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    const buttonElement = this.el.nativeElement.querySelector('#dynamicButton');
    if (buttonElement) {
      this.renderer.listen(buttonElement, 'click', () => {
        this.myFuncDynamic();
      });
    }
  }

  myFunc(): void{
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe({
      next: (response) => {
        this.test = JSON.stringify(response);
      },
      error: (err) => {
        console.error('Si è verificato un problema', err);
      },
    });
  }

  myFuncDynamic(): void{
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe({
      next: (response) => {
        this.test = JSON.stringify(response) + " dinamico";
      },
      error: (err) => {
        console.error('Si è verificato un problema', err);
      },
    });
  }
}
