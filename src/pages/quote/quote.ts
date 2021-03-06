import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
  person: string;
  text: string;
  constructor(private viewCtrl: ViewController,
    public navCtrl: NavController, private navParams: NavParams) {
  }

  onClose(remove = false) {
    this.viewCtrl.dismiss(remove);
  }
  ionViewDidLoad() {
    this.person = this.navParams.get('person');
    this.text = this.navParams.get('text');
  }

}
