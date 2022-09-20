import {EventEmitter, Injectable} from '@angular/core';
import {UsageMode} from './usage-mode';

@Injectable({
  providedIn: 'root'
})
export class UsageModeService {

  private currentUsageMode = new EventEmitter<UsageMode>();

  getCurrentUsageMode(): EventEmitter<UsageMode> {
    return this.currentUsageMode;
  }

  select(usageMode: UsageMode): void {
    this.currentUsageMode.emit(usageMode);
  }
}
