import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Renderer2 } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'cippy-plug',
  templateUrl: './my-plugin.component.html',
  styleUrls: ['./my-plugin.component.css'],
})
export class MyPluginComponent implements AfterViewInit  {
  public test: string = "";
  public button: SafeHtml;
  public weather: any;

  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    private renderer: Renderer2,
    private el: ElementRef,
    private weatherService: WeatherService
  ) {
    this.button = this.sanitizer.bypassSecurityTrustHtml('<button id="dynamicButton">Ciao sono un bottone con la risposta dinamica!</button>');
  }

  ngOnInit(): void {
    this.weatherService.getWeather().subscribe(data => {
      this.weather = data;
    });
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
