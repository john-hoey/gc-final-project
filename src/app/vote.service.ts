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
  proPublicaUrl: string = 'https://api.propublica.org/congress/v1/';
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
    return this.http.get(`${this.proPublicaUrl}statements/search.json`, {
      headers: {
        'X-API-Key': this.headerProPublica,
      },
      params: {
        query: statement,
      },
    });
  };

  getBills = (billSearchTerm: string) => {
    return this.http.get(`${this.proPublicaUrl}bills/search.json`, {
      headers: {
        'X-API-Key': this.headerProPublica,
      },
      params: {
        query: billSearchTerm,
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
  getTop10ContributingIndByCandidate = (candidateId: string) => {
    return this.http.get(this.openSecretsURL, {
      params: {
        apikey: this.openSecretsKey,
        method: 'candIndustry',
        cid: candidateId,
        output: 'json',
      },
    });
  };

  getOrgsByName = (orgName: string) => {
    return this.http.get(this.openSecretsURL, {
      params: {
        apikey: this.openSecretsKey,
        method: 'getOrgs',
        org: orgName,
        output: 'json',
      },
    });
  };
  searchOrgsByName = (orgNameSearchTerm: string) => {
    return this.http.get(this.openSecretsURL, {
      params: {
        apikey: this.openSecretsKey,
        method: 'getOrgs',
        org: orgNameSearchTerm,
        output: 'json',
      },
    });
  };

  searchStatements = (statement: string) => {
    return this.http.get(this.proPublicaUrl, {
      headers: {
        'X-API-Key': this.headerProPublica,
      },
      params: {
        query: statement,
      },
    });
    console.log(statement);
  };

  searchVoterInfo = (address: string, electionId: string) => {
    return this.http.get(this.googleCivicVoterUrl, {
      params: {
        key: this.googleCivicKey,
        address: address,
        electionId: electionId,
      },
    });
  };
}
