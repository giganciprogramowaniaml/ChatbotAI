import { Injectable, OnInit } from '@angular/core';
import { LoremIpsum } from "lorem-ipsum";

@Injectable({
  providedIn: 'root'
})
export class LoremIpsumGeneratorService {
  private readonly loremIpsumGenerator = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
  });

  generateSentences() {
    const randomNumberFrom1To10 = Math.ceil(Math.random()*10);

    const loremIpsumText = this.loremIpsumGenerator.generateSentences(randomNumberFrom1To10);

    return loremIpsumText;
  }

}
