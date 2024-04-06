class Media {
    constructor(title) {
      this._title = title;
      this._ratings = [];
      this._isCheckedOut = false;
    }
    get title(){
      return this._title;
    }
    get ratings(){
      return this._ratings;
    }
    get isCheckedOut(){
      return this._isCheckedOut;
    }
    set isCheckedOut(newCheckout){
        this.isCheckedOut = newCheckout;  

    }
    getAverageRating(){
        let result = this.ratings.reduce((acc, curr) => acc + curr, 0)
        result /= this.ratings.length
        return result;
    }
    toogleCheckOutStatus(){
        this._isCheckedOut = !this._isCheckedOut
        return this._isCheckedOut;
    }
    addRating(rating){
        this.ratings.push(rating);
    }
  }
  
class Book extends Media {
    constructor(author, title, pages){
      super(title);
      this._author = author;
      this._pages = pages;
      
    }
    get author() {
        return this._author;
    }
    get pages(){
        return this._pages;
    }
}  

class Movie extends Media {
    constructor(director, title, runtime){
      super(title);
      this._director = director;
      this._runtime = runtime;
    }
    get director() {
        return this._director;
    }
    get runtime(){
        return this._runtime;
    }
}

class CD extends Media {
    constructor(artist, title, songs){
      super(title);
      this._artist = artist;
      this._songs = songs;
    }
    get artist() {
        return this._artist;
    }
    get songs(){
        return this._songs;
    }
    shuffle(){
        let shuff = Math.floor(Math.random() * this._songs.length)
        let randomSong = this._songs[shuff];
        return randomSong;
    }

}  


const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544)
historyOfEverything.toogleCheckOutStatus()
console.log(historyOfEverything.isCheckedOut)
historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)
console.log(historyOfEverything.getAverageRating())


const speed = new Movie('Jan de Bont', 'Speed', 116)
speed.toogleCheckOutStatus()
console.log(speed.isCheckedOut)
speed.addRating(1)
speed.addRating(1)
speed.addRating(5)
console.log(speed.getAverageRating())

const cd1 = new CD('Taylor Swift', 'Love Story', ['You belong with me', 'Teardrops on my guitar', 'Our song'])
cd1.addRating(1)
cd1.addRating(3)
cd1.addRating(5)
console.log(cd1.getAverageRating())
console.log(cd1.songs)
console.log(cd1.shuffle())