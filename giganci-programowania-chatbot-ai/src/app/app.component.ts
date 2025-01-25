import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ChatItem } from './model/chat-item.model';
import { ChatItemType } from './model/chat-item-type.model';
import { ThumbType } from './model/thumb-type.model';

@Component({
  selector: 'app-root',
  imports: [ FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatCardModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  chatItems: ChatItem[] = [];
  
  ChatItemType = ChatItemType;
  ThumbType = ThumbType;

  askQuestion(questionText: string) {
    const question = new ChatItem();
    question.text = questionText;
    question.userName = "Jan Kowalski";
    question.type = ChatItemType.Question;
    question.avatar = "jan-kowalski.png";
    this.chatItems.push(question);
    
    const answear = new ChatItem();
    answear.text = "Lorem ipsum";
    answear.userName = "ChatBot AI";
    answear.type = ChatItemType.Answear;
    answear.avatar = "ai.jpg";
    this.chatItems.push(answear);
  }
}
