import {Injectable} from '@angular/core';
import {FeedbackItem} from '../feedback/feedback-item';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  feedbackItemsList: Array<FeedbackItem>;

  constructor() {
    this.feedbackItemsList = [new FeedbackItem('How would you rate the event?'),
      new FeedbackItem('How was the food?'),
      new FeedbackItem('How are you today?')];
  }

  getQuestions(): Array<FeedbackItem> {
    return this.feedbackItemsList;
  }
}
