import { Component, OnInit } from '@angular/core';
import {Iword} from '../iword';
import {DictionnaryService} from '../../service/dictionnary.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {
  dictionaries: Iword[] = [];
  dictionary: Iword;

  constructor(private dicnaryService: DictionnaryService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.dictionaries = this.dicnaryService.getAll();
  }
  getCustomer(id: any) {
    this.dictionary = this.dicnaryService.findById(id);
  }

}
