import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ChatItem } from './model/chat-item.model';
import { ChatItemType } from './model/chat-item-type.model';
import { ThumbType } from './model/thumb-type.model';
import { LoremIpsumGeneratorService } from './services/lorem-ipsum-generator.service';
import { interval, map, of, Subject, take, takeUntil } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatCardModule, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  loremIpsumGenerator = inject(LoremIpsumGeneratorService);
  
  chatItems: ChatItem[] = [];
  cancelAnswearGeneration$ = new Subject();
  
  ChatItemType = ChatItemType;
  ThumbType = ThumbType;

  askQuestion(questionText: string) {
    this.cancelAnswearGeneration$.next(null);

    this.addQuestion(questionText);
    this.addAnswear();
  }

  private addQuestion(questionText: string) {
    const question = new ChatItem();
    question.text = of(questionText);
    question.userName = "Jan Kowalski";
    question.type = ChatItemType.Question;
    question.avatar = "jan-kowalski.png";
    this.chatItems.push(question);
  }

  private addAnswear() {
    const answearText = this.loremIpsumGenerator.generateSentences();
    const answear = new ChatItem();
    answear.text = interval(50).pipe(
      map(x => answearText.substr(0, x + 1)),
      take(answearText.length),
      takeUntil(this.cancelAnswearGeneration$),
    );
    answear.userName = "ChatBot AI";
    answear.type = ChatItemType.Answear;
    answear.avatar = "ai.jpg";
    this.chatItems.push(answear);
  }
}
