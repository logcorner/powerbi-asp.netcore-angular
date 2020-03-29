import { Component, OnInit, OnDestroy } from '@angular/core';
import * as pbi from 'powerbi-client';

import { Subscription } from 'rxjs';
import { Report } from '../model/report';
import { PowerbiService } from '../services/powerbi.service';
import { AuthService } from '../oauth/auth.service';
import { EmbedInfo } from '../model/EmbedInfo';
import { models } from 'powerbi-client';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  title = 'power bi workshop embedding report ';
  myReports: Report[] = [];
  private pbiContainerElement: HTMLElement;
  constructor(private powerbiService: PowerbiService, private authService: AuthService) {
  }

  ngOnInit() {



    this.pbiContainerElement = (
      document.getElementById('reportContainer')
    ) as HTMLElement;
    this.loadAllReports();
  }
  loadAllReports() {
    this.powerbiService.getReports().subscribe(reports => {
      this.myReports = reports;
      console.log(this.myReports);
    });
  }

  embedReport(reportId: string, workspaceId: string) {
    const powerbi = new pbi.service.Service(
      pbi.factories.hpmFactory,
      pbi.factories.wpmpFactory,
      pbi.factories.routerFactory,
     );
    this.powerbiService.getReportById(reportId, workspaceId).subscribe(data => {
      console.log(data);
      const embedConfig = this.buildEmbedConfig(data);
      powerbi.reset(this.pbiContainerElement);
      powerbi.embed(this.pbiContainerElement, embedConfig);
    });
  }
  private buildEmbedConfig(data: EmbedInfo) {
     return {
      type: 'report',
      tokenType: pbi.models.TokenType.Embed,
      accessToken: data.embedToken.token,
      embedUrl: data.embedUrl,
      id: data.reportId,
      viewMode: data.viewMode,
      permissions : data.permissions,
      settings: {
        filterPaneEnabled: data.filterPaneEnabled,
        navContentPaneEnabled: data.navContentPaneEnabled
      }
    } as pbi.IEmbedConfiguration;
  }
}
