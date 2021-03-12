import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { secret } from './secrets';

@Injectable({
  providedIn: 'root',
})
export class VoteService {
  googleCivicElectionUrl: string =
    ' https://www.googleapis.com/civicinfo/v2/elections';
  googleCivicVoterUrl: string =
    'https://www.googleapis.com/civicinfo/v2/voterinfo';
  googleCivicKey: string = secret.key;
  openSecretsURL: string = 'http://www.opensecrets.org/api/';
  openSecretsKey: string = secret.apikey;

  constructor(private http: HttpClient) {}

  getElections = () => {
    return this.http.get(this.googleCivicElectionUrl, {
      params: {
        key: this.googleCivicKey,
      },
    });
  };

  getVoterInfo = (address: string, electionId: string) => {
    return this.http.get(this.googleCivicVoterUrl, {
      params: {
        key: this.googleCivicKey,
        address: address,
        electionId: electionId,
      },
    });
  };

  getLegislators = (state: string) => {
    return this.http.get(this.openSecretsURL, {
      params: {
        apikey: this.openSecretsKey,
        method: 'getLegislators',
        id: state,
        output: 'json',
      },
    });
  };
}
