import {Component} from '@angular/core';
import {UsageMode} from '../usage-mode';
import {UsageModeService} from '../usage-mode.service';

@Component({
  selector: 'app-usage-mode-switcher',
  templateUrl: './usage-mode-switcher.component.html',
  styleUrls: ['./usage-mode-switcher.component.scss']
})
export class UsageModeSwitcherComponent {

  constructor(private usageModeService: UsageModeService) {
  }

  isUsageModeSingle() {
    return this.usageModeService.get() === UsageMode.SINGLE;
  }

  isUsageModeUnlimited() {
    return this.usageModeService.get() === UsageMode.UNLIMITED;
  }

  switchToUsageModeSingle() {
    if (!this.isUsageModeSingle()) {
      this.emitEvent(UsageMode.SINGLE);
    }
  }

  switchToUsageModeUnlimited() {
    if (!this.isUsageModeUnlimited()) {
      this.emitEvent(UsageMode.UNLIMITED);
    }
  }

  private emitEvent(usageMode: UsageMode) {
    this.usageModeService.select(usageMode);
  }
}
