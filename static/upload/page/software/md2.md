# SmartVacForAndroid

## Project Introduction

SmartVac is a mobile application developed based on the uni-app framework, specifically designed for the Android platform. This application is used to control and manage smart vacuum equipment, providing functions such as device status monitoring, data recording, historical data analysis, and vaccine preparation.

## Main Features

- **Home**: Displays device status overview and quick operation access
- **Device Module**: Device parameter settings and control functions
- **Historical Data**: View device operation historical data
- **Event List**: Record and view system events
- **Data Calibration**: Device data calibration functionality
- **Vaccine Preparation**: Vaccine preparation process management
- **Mine**: User settings and personal information management

## Technology Stack

- **Framework**: uni-app
- **Language**: JavaScript
- **UI Components**: uni-ui
- **Platform**: Android

## Project Structure

```
smartVacForAndroid/
├── App.vue                 # Main application component
├── main.js                 # Application entry file
├── manifest.json           # Application configuration file
├── pages.json              # Page routing configuration
├── uni.scss               # Global style variables
├── modules/                # Common modules
│   ├── input.js           # Input related module
│   ├── mainArea/          # Main area component
│   ├── pageHeader/        # Page header component
│   └── progressBar/       # Progress bar component
├── pages/                 # Page files
│   ├── index/             # Home page
│   ├── deviceModule/      # Device module
│   ├── historicalData/    # Historical data
│   ├── eventList/         # Event list
│   ├── dataCalibration/   # Data calibration
│   ├── vaccinePreparation/# Vaccine preparation
│   └── mine/              # Personal center
├── static/                # Static resources
│   ├── backgroundImage/   # Background images
│   ├── icons/             # Icon resources
│   ├── images/            # Image resources
│   └── logo.png           # Application logo
└── uni_modules/           # uni-app plugins
    └── uni-ui/            # uni-ui component library
```

## Development Environment Setup

1. Install VSCode development tool
2. Install uni-app related plugins:
   - DCloud official plugin uni-app snippets
   - Vetur (Vue tool)
   - ESLint (Code checking)
3. Open the project folder in VSCode
4. Configure the manifest.json file
5. Install dependencies:
   - Execute `npm install` in terminal
   - Install uni-app plugins: `npm install -g @vue/cli` and `npm install -g @dcloudio/vue-cli-plugin-uni`
6. Run the project:
   - Execute `npm run dev:mp-weixin` in terminal (WeChat Mini Program)
   - Or execute `npm run dev:app` (App)
   - Or use HBuilderX to run on Android emulator or real device

## Usage Instructions

1. After opening the application, you will first enter the home page to view the device status
2. Switch between different function modules through the bottom navigation bar
3. In the device module, you can set and control device parameters
4. The historical data page allows you to view device operation data records
5. The event list records important events during system operation
6. The data calibration function is used to calibrate device data
7. The vaccine preparation module provides vaccine preparation process management
8. The personal center allows for user settings and personal information management

## Version Information

- Version Name: 1.0.0
- Version Code: 100

## License

[MIT License](LICENSE)
