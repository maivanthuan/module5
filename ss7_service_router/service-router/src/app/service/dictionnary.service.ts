import { Injectable } from '@angular/core';
import {Iword} from '../dictionary/iword';

@Injectable({
  providedIn: 'root'
})
export class DictionnaryService {
  dictionnaries: Iword[] = [{
    word: 'hello',
    mean: 'xin chao'
  }, {word: 'dog',
      mean: 'cho'
  }];
  getAll() {
    return this.dictionnaries;
  }
  public findById(id: string) {
    return this.dictionnaries.find(dictionary => dictionary.word === id);
  }
  constructor() { }
}
