import {Component, OnInit} from '@angular/core';
import {FeedbackItem} from './feedback-item';
import {QuestionsService} from '../services/questions.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbackItemsList: Array<FeedbackItem>;

  constructor(private questionService: QuestionsService) {
    /*
    this.feedbackItemsList = [new FeedbackItem('How would you rate the event?'),
      new FeedbackItem('How was the food?'),
      new FeedbackItem('How are you today?')];
     */
  }

  ngOnInit() {
    this.feedbackItemsList = this.questionService.getQuestions();
  }
}
