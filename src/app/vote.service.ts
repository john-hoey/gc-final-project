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
  proPublicaUrl: string =
    'https://api.propublica.org/congress/v1/statements/search.json';
  headerProPublica: string = secret.headers;

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
  getStatements = (statement: string) => {
    return this.http.get(this.proPublicaUrl, {
      headers: {
        'X-API-Key': this.headerProPublica,
      },
      params: {
        query: statement,
      },
    });
  };

  searchLegislatorsbyState = (stateId: string): any => {
    return this.http.get(this.openSecretsURL, {
      params: {
        apikey: this.openSecretsKey,
        method: 'getLegislators',
        id: stateId,
        output: 'json',
      },
    });
  };
}
