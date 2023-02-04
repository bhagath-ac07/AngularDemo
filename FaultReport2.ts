import { Component } from '@angular/core';

@Component({
  selector: 'app-report-faults',
  template: `
    <div class="header d-flex justify-content-center">Report Faults</div>
    <div class="form-group row">
      <label for="vehicleId" class="col-sm-3 col-form-label">Vehicle ID:</label>
      <div class="col-sm-9 d-flex align-items-center">
        <select id="vehicleId" class="form-control">
          <option value="">Select a vehicle</option>
          <option *ngFor="let vehicle of vehicles" [value]="vehicle.id">{{vehicle.name}}</option>
        </select>
        <button (click)="resetForm()" class="btn btn-secondary ml-3">Reset</button>
      </div>
    </div>
    <div class="form-group row">
      <label for="description" class="col-sm-3 col-form-label">Description (max 255 characters):</label>
      <div class="col-sm-9">
        <textarea id="description" (input)="updateRemaining($event)" class="form-control"></textarea>
        <div class="remaining-characters text-right mt-2">{{remaining}} characters remaining</div>
      </div>
    </div>
    <div class="buttons d-flex justify-content-center">
      <button (click)="goHome()" class="btn btn-primary mr-3">Home</button>
      <button (click)="openCamera()" class="btn btn-secondary mr-3">Camera</button>
      <button (click)="submit()" class="btn btn-success">Submit</button>
    </div>
  `,
  styles: [`
    .header {
      font-size: 24px;
      font-weight: bold;
      padding: 20px 0;
    }
    .remaining-characters {
      font-size: 12px;
      color: gray;
    }
  `]
})
export class ReportFaultsComponent {
  vehicles = [
    { id: 1, name: 'Vehicle 1' },
    { id: 2, name: 'Vehicle 2' },
    // Add more vehicles here
  ];
  remaining = 255;

  resetForm() {
    // Reset form implementation
  }

  updateRemaining(event) {
    this.remaining = 255 - event.target.value.length;
  }

  goHome() {
    // Go home implementation
  }

  openCamera() {
    // Open camera implementation
  }

  submit() {
    // Submit form implementation
  }
}
