import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public readonly AUTH_ADMIN_KEY = 'auth_admin';
  public readonly AUTH_CLIENT_KEY = 'auth_client';
  private readonly CLIENT_ID_KEY = 'client_id';


  public isAuthenticatedAdmin: boolean = false;
  public isAuthenticatedClient: boolean = false;
  private clientId: string | null = null;


  constructor(private apiService: ApiService,public route:Router) {
    this.isAuthenticatedAdmin = this.getAuthStatusFromStorage(this.AUTH_ADMIN_KEY);
    this.isAuthenticatedClient = this.getAuthStatusFromStorage(this.AUTH_CLIENT_KEY);
    this.clientId = this.getClientIdFromStorage();

  }

  login(credentials: any): Observable<any> {
    return this.apiService.login(credentials);
  }

  loginClient(credentials: any) {
    return this.apiService.clientLogin(credentials);
  }

  logout() {
    this.isAuthenticatedAdmin = false;
    this.clearAuthStatusFromStorageAdmin();
    this.route.navigate(["/"])
  }

  logoutClient() {
    this.isAuthenticatedClient = false;
    this.clientId = null;

    this.clearAuthStatusFromStorageClient();
    this.clearClientIdFromStorage();

    this.route.navigate(["/"])

  }

  getAuthStatusAdmin(): boolean {
    return this.isAuthenticatedAdmin;
  }

  getAuthStatusClient(): boolean {
    return this.isAuthenticatedClient;
  }

  setAuthStatusAdmin(status: boolean) {
    this.isAuthenticatedAdmin = status;
    this.setAuthStatusInStorage(this.AUTH_ADMIN_KEY, status);
  }
  getClientId(): string | null {
    return this.clientId;
  }

setAuthStatusClient(status: boolean, clientId: string): void {
    this.isAuthenticatedClient = status;
    this.clientId = clientId;
    this.storeAuthStatusToStorage(this.AUTH_CLIENT_KEY, status);
    this.setClientIdInStorage(clientId);

  }
  
  private getAuthStatusFromStorage(key: string): boolean {
    const storedValue = localStorage.getItem(key);
    return storedValue === 'true';
  }
  
  private setAuthStatusInStorage(key: string, status: boolean) {
    localStorage.setItem(key, status.toString());
  }
  
  private storeAuthStatusToStorage(key: string, status: boolean): void {
    localStorage.setItem(key, String(status));
  }
  private getClientIdFromStorage(): string | null {
    return localStorage.getItem(this.CLIENT_ID_KEY);
  }
  private setClientIdInStorage(clientId: string): void {
    localStorage.setItem(this.CLIENT_ID_KEY, clientId);
  }
  private clearAuthStatusFromStorageAdmin() {
    localStorage.removeItem(this.AUTH_ADMIN_KEY);
  }

  private clearAuthStatusFromStorageClient() {
    localStorage.removeItem(this.AUTH_CLIENT_KEY);
  }
  private clearClientIdFromStorage() {
    localStorage.removeItem(this.CLIENT_ID_KEY);
  }
}
