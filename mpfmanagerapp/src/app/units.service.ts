import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Units } from "./units";

@Injectable({
    providedIn: 'root'
})
export class UnitsService {
    private apiServerUrl = 'http://localhost:8080';

    constructor(private http: HttpClient) { }

    public getAllUnits(): Observable<Units[]> {
        return this.http.get<Units[]>(`${this.apiServerUrl}/units/allUnits`);
    }

    public getUnitById(ID: number): Observable<Units> {
        return this.http.get<Units>(`${this.apiServerUrl}/units/findUnitById/${ID}`);
    }

    public getUnitsByGrade(grade: string): Observable<Units[]> {
        return this.http.get<Units[]>(`${this.apiServerUrl}/units/findUnitsByGrade/${grade}`);
    }

    public getUnitsByDivision(division: string): Observable<Units[]> {
        return this.http.get<Units[]>(`${this.apiServerUrl}/units/findUnitsByDivision/${division}`);
    }

    public getUnitByCID(CID: number): Observable<Units> {
        return this.http.get<Units>(`${this.apiServerUrl}/units/findUnitByCID/${CID}`);
    }

    public addUnit(unit: Units): Observable<Units> {
        return this.http.post<Units>(`${this.apiServerUrl}/units/addUnit`, unit);
    }

    public updateUnit(unit: Units): Observable<Units> {
        return this.http.put<Units>(`${this.apiServerUrl}/units/updateUnit`, unit);
    }

    public deleteUnit(ID: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/units/deleteUnit/${ID}`);
    }

}