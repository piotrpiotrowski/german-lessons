import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpeechRecognitionService {

  private readonly recognition = new webkitSpeechRecognition();

  constructor() {
    const speechRecognitionList = new window.webkitSpeechGrammarList();
    const grammar = '#JSGF V1.0; grammar colors; public <item> = ;'
    speechRecognitionList.addFromString(grammar, 1);
    this.recognition = new webkitSpeechRecognition();
    this.recognition.grammars = speechRecognitionList;
    this.recognition.continuous = false;
    this.recognition.lang = 'de-DE';
    this.recognition.interimResults = false;
    this.recognition.maxAlternatives = 1;
  }

  recognizeWords(): EventEmitter<string> {
    const wordEmitter = this.registerCallbacks();
    this.recognition.start();
    return wordEmitter;
  }

  stop() {
    this.recognition && this.recognition.stop();
  }

  private registerCallbacks() {
    const wordEmitter = new EventEmitter<string>()
    this.recognition.onresult = (event: SpeechRecognitionEvent) => {
      console.log('Confidence: ' + event.results[0][0].confidence);
      wordEmitter.emit(event.results[0][0].transcript);
      wordEmitter.complete();
    }
    this.recognition.onspeechend = () => {
      this.recognition.stop();
      wordEmitter.complete();
    };
    this.recognition.onnomatch = (event: SpeechRecognitionEvent) => wordEmitter.error(new Error('Match not found for ' + event.results[0][0].transcript));
    this.recognition.onerror = (event: SpeechRecognitionErrorEvent) => wordEmitter.error(event);
    return wordEmitter;
  }
}
