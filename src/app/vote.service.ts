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
  GcivAddress: string;

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

  getCandidateSummary = (candId: string) => {
    return this.http.get(this.openSecretsURL, {
      params: {
        apikey: this.openSecretsKey,
        method: 'candSummary',
        cid: candId,
        cycle: '2020',
        output: 'json',
      },
    });
  };

  getCandTopContributors = (candId: string) => {
    return this.http.get(this.openSecretsURL, {
      params: {
        apikey: this.openSecretsKey,
        method: 'candContrib',
        cid: candId,
        cycle: '2020',
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

  getRecentBillsByMember = (memberId: string) => {
    return this.http.get(
      `${this.proPublicaUrl}members/${memberId}/bills/introduced.json`,
      {
        headers: {
          'X-API-Key': this.headerProPublica,
        },
      }
    );
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

  getTotalSectorContributionsByCandidate = (candidateId: string) => {
    return this.http.get(this.openSecretsURL, {
      params: {
        apikey: this.openSecretsKey,
        method: 'candSector',
        cid: candidateId,
        output: 'json',
      },
    });
  };

  getCongCmteIndus = (cmteId: string, indCode: string) => {
    return this.http.get(this.openSecretsURL, {
      params: {
        apikey: this.openSecretsKey,
        method: 'congCmteIndus',
        congno: '117',
        indus: indCode,
        cmte: cmteId,
        output: 'json',
      },
    });
  };

  getMemberPublicFinancialDisclosure = (candidateId: string) => {
    return this.http.get(this.openSecretsURL, {
      params: {
        apikey: this.openSecretsKey,
        method: 'memPFDprofile',
        cid: candidateId,
        year: '2016',
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

  getOrgSummaryById = (orgId: string) => {
    return this.http.get(this.openSecretsURL, {
      params: {
        apikey: this.openSecretsKey,
        method: 'orgSummary',
        id: orgId,
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

  getHouse = () => {
    return this.http.get(`${this.proPublicaUrl}117/house/members.json`, {
      headers: {
        'X-API-Key': this.headerProPublica,
      },
    });
  };
  getSenate = () => {
    return this.http.get(`${this.proPublicaUrl}117/senate/members.json`, {
      headers: {
        'X-API-Key': this.headerProPublica,
      },
    });
  };
  getSpecificBillSubject = (statement: string) => {
    return this.http.get(`${this.proPublicaUrl}bills/subjects/search.json`, {
      headers: {
        'X-API-Key': this.headerProPublica,
      },
      params: {
        query: statement,
      },
    });
  };

  getMemberPosition = (memberId: string) => {
    return this.http.get(
      `${this.proPublicaUrl}members/${memberId}/votes.json`,
      {
        headers: {
          'X-API-Key': this.headerProPublica,
        },
      }
    );

  setAddress = (address: string) => {
    this.GcivAddress = address;
  };

  getAddress = () => {
    return this.GcivAddress;
  };
}
