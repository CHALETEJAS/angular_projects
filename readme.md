\*Topic : signal

\*\*step 1 in app.ts:-
counter = signal(0);

increment(){
this.counter.update(value=>value+1);
}

decrement(){
this.counter.update(value=>value-1);
}

reset(){
this.counter.set(0);
}

\*\*step 2 in app.html:-
<app-child [myCode]="parentCode" [x]="xy" (clickEvent)="clickRecieve($event)"></app-child>

<p>{{message2}}</p>

<div style="text-align: center;">
    <h1>Angular Signal Example</h1>
    <h2>Counter: {{counter()}}</h2>
    <button (click)="increment()">Increment</button>
    <button (click)="decrement()">Decrement</button>
    <button (click)="reset()">Reset</button>
</div>

\*Topic :
