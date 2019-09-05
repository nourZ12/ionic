import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { Quote } from '../../Data/quote.interface';
import { QuotesService } from '../../services/quotes.service';
import { QuotePage } from '../quote/quote';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  quotes: Quote[];
  constructor(private settingsService: SettingsService, private modalCtrl: ModalController, private quotesService: QuotesService, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
    this.quotes = this.quotesService.getFavoritesQuotes();
  }

  onViewQuote(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if (remove) {
        this.onRemoveFromFavorites(quote);
      }
    });
  }

  onRemoveFromFavorites(quote: Quote) {
    this.quotesService.removeQuoteFromFavorites(quote);
    this.quotes = this.quotesService.getFavoritesQuotes();
  }

  getBackground() {
    return this.settingsService.isAltBackground() ? 'altQuoteBg' : 'quoteBg';
  }
}
