# 🕌 SalahStepsApp - Islamic Prayer Guide

A comprehensive Angular web application designed to guide Muslims through the proper steps of Salah (Islamic prayer) with accurate prayer times, Qibla direction, and detailed prayer instructions.

## ✨ Features

### 🕐 Prayer Times
- **Real-time prayer times** for your location (Fajr, Zuhr, Asr, Maghrib, Isha)
- **Automatic location detection** using GPS
- **Islamic University of Karachi calculation method** with Hanafi jurisprudence
- **Sunrise time** included for reference

### 📿 Prayer Instructions
- **Step-by-step Salah guide** for all five daily prayers
- **Audio recitations** for proper pronunciation
- **Different prayer sets** (Sunnah, Fard, Nafl, Wajib)
- **Interactive collapsible sections** for easy navigation
- **Witr prayer** instructions included

### 🧭 Qibla Compass
- **Digital compass** to find the direction of Mecca
- **Device orientation support** for accurate readings
- **Beautiful Islamic-themed design** with golden accents
- **Permission-based access** to device sensors

### 🚿 Wudu Guide
- **Complete ablution instructions** with visual guidance
- **Step-by-step process** for ritual purification
- **Islamic principles** and requirements explained

### 📚 Additional Features
- **Extra Islamic rulings** and guidelines
- **Prayer invalidation conditions** explained
- **Qada (makeup) prayer** instructions
- **Responsive Bootstrap design** for all devices
- **Islamic geometric patterns** and color scheme

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- Angular CLI (v19.2.15)
- Modern web browser with geolocation support

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/SalahStepsApp.git
   cd SalahStepsApp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   ng serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200/`

## 🏗️ Building for Production

```bash
ng build
```

The build artifacts will be stored in the `dist/` directory.

## 🧪 Running Tests

```bash
# Unit tests
ng test

# End-to-end tests
ng e2e
```

## 📱 Usage

### Prayer Times
1. Allow location access when prompted
2. View current prayer times on the home page
3. Times automatically update based on your location

### Prayer Instructions
1. Navigate to specific prayer pages (Fajr, Zuhr, Asr, Maghrib, Isha)
2. Click "Open/Collapse" buttons to view prayer steps
3. Listen to audio recitations for proper pronunciation
4. Follow the step-by-step instructions for each prayer set

### Qibla Compass
1. Go to the Qibla page
2. Click "Request Compass Permission"
3. Allow device orientation access
4. Hold device flat and rotate to find Qibla direction

### Wudu Guide
1. Visit the Wudu page
2. Follow the illustrated step-by-step process
3. Learn the proper method of ritual purification

## 🎨 Design Philosophy

The app follows an **Islamic aesthetic** with:
- **Deep green backgrounds** (#0d422a) representing Islamic tradition
- **Golden accents** (#d4af37) for elegance and importance
- **Amiri font** for Arabic-style headings
- **Geometric patterns** inspired by Islamic art
- **Responsive design** for accessibility across devices

## 🛠️ Technology Stack

- **Frontend**: Angular 19.2.0
- **Styling**: Bootstrap 5.3.3
- **Icons**: Custom Islamic-themed elements
- **APIs**: 
  - Geocoding API for location services
  - Muslim Pro Scraper API for prayer times
- **Audio**: HTML5 audio elements for recitations

## 📂 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── home/          # Prayer times display
│   │   ├── fajr/          # Fajr prayer guide
│   │   ├── zuhr/          # Zuhr prayer guide
│   │   ├── asr/           # Asr prayer guide
│   │   ├── maghrib/       # Maghrib prayer guide
│   │   ├── isha/          # Isha prayer guide
│   │   ├── wudu/          # Ablution guide
│   │   ├── qibla/         # Qibla compass
│   │   ├── extras/        # Additional rulings
│   │   └── navbar/        # Navigation component
│   ├── environment/       # Prayer steps data
│   └── assets/
│       ├── audio/         # Recitation files
│       └── images/        # App icons and images
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Islamic University of Karachi** for prayer calculation methodology
- **Muslim Pro Scraper API** for prayer time data
- **Bootstrap** for responsive design framework
- **Angular** team for the excellent framework
- **Islamic calligraphy** and geometric pattern inspirations

## 📞 Support

If you have any questions or need support, please:
- Open an issue on GitHub
- Contact the development team
- Check the documentation

## 🎯 Future Enhancements

- [ ] Prayer time notifications
- [ ] Athan (call to prayer) audio
- [ ] Prayer tracking and streaks
- [ ] Hijri calendar integration
- [ ] Multiple language support
- [ ] Offline mode capabilities
- [ ] Masjid finder feature

---

**Made with ❤️ for the Muslim community**

*"And establish prayer and give zakah and bow with those who bow."* - Quran 2:43
