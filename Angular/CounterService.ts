export class CounterService {

  private readonly something:Subject<number>;
  private counter:number;

  constructor() {
    this.something = new Subject<number>();
    this.counter = 0;
  }

  onSubscripton(): Observable<number>{
    return this.something.asObservable();
  }

  onNext():void{
   this.counter= this.counter + 1;
   console.log(this.counter);
   this.something.next(this.counter);
  }

  getCount():boolean{
    return (this.counter >= 10);
  }

  endSubscription(){
    this.something.unsubscribe();
  }

}
