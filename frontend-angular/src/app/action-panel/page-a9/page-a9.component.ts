import { Component, OnInit } from '@angular/core';
import { A9Service } from 'src/app/services/a9.service';

@Component({
  selector: 'app-page-a9',
  templateUrl: './page-a9.component.html',
  styleUrls: ['./page-a9.component.scss']
})
export class PageA9Component implements OnInit {

  constructor(private service: A9Service) { }

  ngOnInit(): void {
    this.getAuditionLogs();
    this.getExceptionLogs();
  }
  exceptionLogs: ExceptionLog[] = [];
  auditLogs: AuditLog[] = [];


  getAuditionLogs(){
    this.service.getAuditionLogs().subscribe(logs => this.auditLogs = logs);
  }
  getExceptionLogs(){
    this.service.getExceptionLogs().subscribe(logs => this.exceptionLogs = logs);
  }
}

export interface ExceptionLog {
  id: number,
  ip: string,
  action: string,
  parameters: string,
  exception_type: string,
  description: string,
  stack_trace: string
  created_at: string,
  updated_at: string
}

export interface AuditLog {
  id: number,
  ip: string,
  action: string,
  parameters: string,
  event_type: string,
  description: string,
  created_at: string,
  updated_at: string
}