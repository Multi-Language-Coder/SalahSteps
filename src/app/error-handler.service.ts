import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  
  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed:`, error);
      
      // Show user-friendly error message
      this.showErrorMessage(this.getErrorMessage(error));
      
      return of(result as T);
    };
  }

  private getErrorMessage(error: any): string {
    if (error.status === 0) {
      return 'Unable to connect to prayer time service. Please check your internet connection.';
    }
    if (error.status === 404) {
      return 'Prayer times not found for your location.';
    }
    if (error.status >= 500) {
      return 'Prayer time service is temporarily unavailable. Please try again later.';
    }
    return 'An unexpected error occurred. Please try again.';
  }

  private showErrorMessage(message: string): void {
    // You can replace this with a toast service or modal
    alert(message);
  }
}