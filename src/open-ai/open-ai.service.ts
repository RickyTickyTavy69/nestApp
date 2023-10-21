import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { HttpService } from '@nestjs/axios';
import { OpenAI } from 'openai';

@Injectable()
export class OpenAiService {
  private readonly apiKey: string;
  private readonly apiUrl: string;

  constructor(private readonly httpService: HttpService) {
    this.apiKey = process.env.OPENAI_KEY;
    this.apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';
  }

  generateResponse(prompt: string): Observable<AxiosResponse> {
    const data = {
      prompt: prompt,
      max_tokens: 150,
      n: 1,
      stop: null,
      temperature: 1,
    };

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
    };

    return this.httpService.post(this.apiUrl, data, { headers: headers });
  }
}
