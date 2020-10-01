import { Injectable } from '@angular/core';
import { MatSelectionList, MatSelectionListChange } from '@angular/material';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GlobalService {

    constructor() { }

    public readonly currentCategory: ChromiumGlobalString = new ChromiumGlobalString(null);
    public readonly nameFilter: ChromiumGlobalString = new ChromiumGlobalString(null);
    public readonly tagFilter: ChromiumGlobalString = new ChromiumGlobalString(null);
    public readonly latestCloseImageId: ChromiumGlobalString = new ChromiumGlobalString(null);
    public readonly imageSelection: ChromiumGlobalGeneric<MatSelectionList> = new ChromiumGlobalGeneric<MatSelectionList>(null);
}

export class ChromiumGlobalString {
    private _value: string;
    private _dataChanged: Subject<string> = new Subject();

    public constructor(
        defaultValue: string,
    ) {
        this._value = defaultValue;
    }

    public get value(): string {
        return this._value
    }
    public set value(value: string) {
        this._value = value;
        this._dataChanged.next(value);
    }
    public onChanged(): Observable<string> {
        return this._dataChanged.asObservable();
    }
}

export class ChromiumGlobalGeneric<T> {
    private _value: T;
    private _dataChanged: Subject<T> = new Subject();

    public constructor(
        defaultValue: T,
    ) {
        this._value = defaultValue;
    }

    public get value(): T {
        return this._value
    }
    public set value(value: T) {
        this._value = value;
        this._dataChanged.next(value);
    }
    public onChanged(): Observable<T> {
        return this._dataChanged.asObservable();
    }
}
