import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qibla',
  standalone: false,
  templateUrl: './qibla.component.html',
  styleUrl: './qibla.component.css'
})
export class QiblaComponent implements OnInit {
  QiblaDirection: number = 0;
  currentHeading: number = 0;
  isOrientationSupported: boolean = false;
 
  constructor() {}

  ngOnInit() {
    this.checkOrientationSupport();
    this.getCurrentLocation();
  }

  private checkOrientationSupport() {
    if ('DeviceOrientationEvent' in window) {
      this.isOrientationSupported = true;
    }
  }

  private getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => this.showPosition(position),
        (error) => this.showError(error)
      );
    } else {
      document.getElementById("error-message")!.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

  requestCompassPermission() {
    if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
      // iOS 13+ devices
      (DeviceOrientationEvent as any).requestPermission()
        .then((response: string) => {
          if (response === 'granted') {
            this.startCompass();
          } else {
            this.showMessage('Permission denied for device orientation.');
          }
        })
        .catch(() => {
          this.showMessage('Error requesting device orientation permission.');
        });
    } else {
      // Non-iOS devices
      this.startCompass();
    }
  }

  private startCompass() {
    if (this.isOrientationSupported) {
      window.addEventListener('deviceorientationabsolute', (event) => this.handleOrientation(event), true);
      window.addEventListener('deviceorientation', (event) => this.handleOrientation(event), true);
      this.showMessage('Compass activated! Hold device flat and rotate to find Qibla direction.');
    } else {
      this.showMessage('Device orientation not supported on this device.');
    }
  }

  private handleOrientation(event: DeviceOrientationEvent) {
    let heading = event.alpha;
    
    if (heading !== null) {
      // Normalize heading to 0-360 degrees
      heading = (360 - heading) % 360;
      this.currentHeading = heading;
      
      // Update compass needle rotation
      const needle = document.getElementById('compass-needle');
      if (needle) {
        needle.style.transform = `translateX(-50%) rotate(${heading}deg)`;
      }
      
      // Update heading display
      const headingDisplay = document.getElementById('heading-display');
      if (headingDisplay) {
        headingDisplay.textContent = `${Math.round(heading)}°`;
      }
    }
  }

  private showMessage(message: string) {
    const messageBox = document.getElementById('message-box');
    if (messageBox) {
      messageBox.textContent = message;
      messageBox.classList.remove('-translate-y-full');
      setTimeout(() => {
        messageBox.classList.add('-translate-y-full');
      }, 4000);
    }
  }

  showPosition(position: GeolocationPosition) {
    const toRadians = (degrees: number) => degrees * Math.PI / 180;
    const toDegrees = (radians: number) => radians * 180 / Math.PI;

    const userLat = position.coords.latitude;
    const userLon = position.coords.longitude;

    const kaabaLat = 21.4225;
    const kaabaLon = 39.8262;

    const lat1 = toRadians(userLat);
    const lon1 = toRadians(userLon);
    const lat2 = toRadians(kaabaLat);
    const lon2 = toRadians(kaabaLon);
    
    const deltaLon = lon2 - lon1;

    const y = Math.sin(deltaLon) * Math.cos(lat2);
    const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(deltaLon);
    let bearing = Math.atan2(y, x);
    
    bearing = toDegrees(bearing);

    const qiblaDirection = (bearing + 360) % 360;
    this.QiblaDirection = parseFloat(qiblaDirection.toFixed(2));
    
    const tolerance = 45;
    const startAngle = (qiblaDirection - tolerance + 360) % 360;
    const endAngle = (qiblaDirection + tolerance) % 360;
    
    const qiblaRange = document.getElementById('qibla-range');
    const qiblaIndicator = document.getElementById('qibla-indicator');
    
    if (qiblaRange) {
      qiblaRange.style.setProperty('--start-angle', `${startAngle}deg`);
      qiblaRange.style.setProperty('--end-angle', `${endAngle}deg`);
    }
    
    if (qiblaIndicator) {
      qiblaIndicator.style.transform = `translateX(-50%) rotate(${qiblaDirection}deg)`;
      qiblaIndicator.style.transformOrigin = '50% calc(100% + 142px)';
    }
    
    // Display the final calculated direction to the user
    //document.getElementById("qibla-display")!.innerHTML = `The Qibla direction is approximately ${qiblaDirection.toFixed(0)} degrees from True North.`;
    //document.getElementById("error-message")!.innerHTML = ""; // Clear any previous errors
  }

  showError(error: any) {
    let errorMessage = "";
    switch(error.code) {
      case error.PERMISSION_DENIED:
        errorMessage = "User denied the request for Geolocation. Please enable it in your browser settings.";
        break;
      case error.POSITION_UNAVAILABLE:
        errorMessage = "Location information is unavailable.";
        break;
      case error.TIMEOUT:
        errorMessage = "The request to get user location timed out.";
        break;
      case error.UNKNOWN_ERROR:
        errorMessage = "An unknown error occurred.";
        break;
    }
    document.getElementById("error-message")!.innerHTML = errorMessage;
    document.getElementById("qibla-display")!.innerHTML = ""; // Clear any previous results
  }
}
