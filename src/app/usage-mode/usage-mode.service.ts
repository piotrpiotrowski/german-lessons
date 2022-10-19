import {EventEmitter, Injectable} from '@angular/core';
import {UsageMode} from './usage-mode';

@Injectable({
  providedIn: 'root'
})
export class UsageModeService {

  private usageModeEmitter = new EventEmitter<UsageMode>();
  private usageMode: UsageMode = UsageMode.UNLIMITED;

  getEmitter = (): EventEmitter<UsageMode> => this.usageModeEmitter;
  get = (): UsageMode => this.usageMode;

  select(usageMode: UsageMode): void {
    this.usageMode = usageMode;
    this.usageModeEmitter.emit(usageMode);
  }
}
