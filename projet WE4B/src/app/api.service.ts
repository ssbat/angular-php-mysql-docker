import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost/projet_api';
  // private clientUrl = 'http://localhost/projet_api';

  constructor(private http: HttpClient) { }

  login(credentials: any): Observable<any> {
    const url = `${this.baseUrl}/login.php`;

    // Create form data
    const formData = new HttpParams()
      .set('email', credentials.email)
      .set('password', credentials.password);
  
    // Set headers
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  
    // Send the POST request with form data and headers
    return this.http.post<any>(url, formData.toString(), { headers });
  }

  clientLogin(credentials:any): Observable<any> 
  {
 {
      const url = `${this.baseUrl}/loginClient.php`;
  
      // Create form data
      const formData = new HttpParams()
        .set('email', credentials.email)
        .set('password', credentials.password);
    
      // Set headers
      const headers = new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    
      // Send the POST request with form data and headers
      return this.http.post<any>(url, formData.toString(), { headers });


  }




}
}
