import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EmbedInfo } from '../model/EmbedInfo';
import { Observable } from 'rxjs';
import { Report } from '../model/report';
import { AuthService } from '../oauth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PowerbiService {
  private baseUrl = 'http://localhost:5002/api';
 // private baseUrl =   'https://power-bi-rest-api.azurewebsites.net/api';
  constructor(private http: HttpClient, private authService: AuthService) { }

  getReports(): Observable<Report[]> {
      return this.http.get<Report[]>(`${this.baseUrl}/report/workspace`);
  }

  getReportById(id: string, workspaceId: string) {
    return this.http.get<EmbedInfo>(`${this.baseUrl}/report/workspace/${workspaceId}/report/${id}`);
  }
}
