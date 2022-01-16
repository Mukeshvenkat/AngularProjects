import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { User } from "./user.model";

export interface AuthResponseData{
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}

@Injectable()
export class AuthService {
    user = new BehaviorSubject<User>(null);

    constructor(private http: HttpClient){}

    signUp(email: string, password: string){
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC4rEAV1LD4VFMCzp697FY1EHBC7prEfM0',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(catchError(this.handleError), tap(resData => {
            this.handleAuthentication(
                resData.email, 
                resData.localId,
                resData.idToken,
                +resData.expiresIn
                );
        }));
    }

    login(email: string, password: string){
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC4rEAV1LD4VFMCzp697FY1EHBC7prEfM0',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(catchError(this.handleError), tap(resData => {
            this.handleAuthentication(
                resData.email, 
                resData.localId,
                resData.idToken,
                +resData.expiresIn
                );
        }));
    }

    private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
        const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
        const user = new User(
            email,
            userId,
            token,
            expirationDate
        );
        console.log('=====AUTH SERVICE=======', user);
        this.user.next(user);
    }

    private handleError(errorRes: HttpErrorResponse){
        let errorMessage = "An Unkown error has occured!";
            if (!errorRes.error || !errorRes.error.error) {
                return throwError(errorMessage);
            }
            switch (errorRes.error.error.message) {
                case "EMAIL_NOT_FOUND": 
                    errorMessage = "User doesnot exist";
                    break;
                case "EMAIL_EXISTS":
                    errorMessage = "This email is already in use";
                    break;
            }
            return throwError(errorMessage);
    }
}