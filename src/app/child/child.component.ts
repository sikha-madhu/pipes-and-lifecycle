import { Component,Input,OnInit,OnChanges,SimpleChanges,DoCheck,AfterContentInit ,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges,DoCheck,AfterContentInit{
  @Input() value: string ="madhu"
  date = new Date();
  constructor(){
    console.log('Constructor called');
    // console.log(this.value);
  }
  ngOnChanges(change: SimpleChanges){
    console.log('ngOnchanges called')
    console.log(change);
  }
ngOnInit(){
   console.log('ngOnInit called')
  //  console.log(this.value);
}
ngDoCheck(){
  console.log('ngDoCheck called')
}
ngAfterContentInit(){
  console.log('ngAfterContentInit called')
}
ngAfterContentChecked(){
  console.log('ngAfterContentChecked called')
}
ngAfterViewInit(){
  console.log('ngAftervieinit called')
}
ngAfterViewChecked(){
  console.log('ngAfterviewchecked called')
}
ngOnDestroy(){
  console.log('ngondistroy called')
}
}
