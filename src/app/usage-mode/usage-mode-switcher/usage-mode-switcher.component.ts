import {Component} from '@angular/core';
import {UsageMode} from '../usage-mode';
import {UsageModeService} from '../usage-mode.service';

@Component({
  selector: 'app-usage-mode-switcher',
  templateUrl: './usage-mode-switcher.component.html',
  styleUrls: ['./usage-mode-switcher.component.scss']
})
export class UsageModeSwitcherComponent {

  usageMode: UsageMode = UsageMode.UNLIMITED;

  constructor(private usageModeService: UsageModeService) {
  }

  isUsageModeSingle() {
    return this.usageMode === UsageMode.SINGLE;
  }

  isUsageModeUnlimited() {
    return this.usageMode === UsageMode.UNLIMITED;
  }

  switchToUsageModeSingle() {
    if (!this.isUsageModeSingle()) {
      this.usageMode = UsageMode.SINGLE;
      this.emitEvent();
    }
  }

  switchToUsageModeUnlimited() {
    if (!this.isUsageModeUnlimited()) {
      this.usageMode = UsageMode.UNLIMITED;
      this.emitEvent();
    }
  }

  private emitEvent() {
    this.usageModeService.select(this.usageMode);
  }
}
