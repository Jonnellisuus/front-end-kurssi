export class FeedbackItem {
  question: string;
  answer: string;
  answerList: string[];


  constructor(question: string) {
    this.question = question;
    this.answer = '';
    this.answerList = ['Not rated yet', 'Awful', 'Bad', 'OK', 'Good', 'Excellent'];
  }
}
