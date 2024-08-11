import { Injectable } from '@angular/core';
import dayjs from "dayjs";

@Injectable({
  providedIn: 'root'
})
export class DayjsService {

  constructor() { }

  convertToMDYFormat(date: Date | undefined) {
    return dayjs(date).format('DD-MM-YYYY')
  }
}
