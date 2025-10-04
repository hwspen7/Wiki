# SmartVac

#### Description
SmartVac is an intelligent vacuum control system developed with Qt, used for managing and monitoring the operating status of vacuum equipment.

#### Software Architecture
This software is developed using the Qt framework and mainly includes the following modules:
- Homepage module: Displays device status and operation interface
- Data curve module: Shows the changing trends of device operation data
- Event alarm query module: Records and queries system events and alarm information
- Parameter calibration module: Used for setting and calibrating device parameters
- System data module: Manages system configuration and data

#### Installation

1. Launch with Qt Creator (Recommended)
   - Open Qt Creator
   - Select "File" > "Open Project" > "smartVac.pro"
   - Wait for the project to load completely
   - Click "Build" > "Build Project" to compile
   - After compilation, click "Run" to start the application

2. Launch from command line (without Qt Creator)
   - Open Command Prompt
   - Navigate to the project directory: `cd D:\QtProject\smartVac`
   - Create a build directory: `mkdir build-release`
   - Enter the build directory: `cd build-release`
   - Generate Makefile: `qmake "CONFIG+=release" ..\smartVac.pro`
   - Compile the project: `jom` or `nmake`
   - After compilation, the executable file is located at: `build-release
elease\smartVac.exe`
   - Use windeployqt tool to deploy dependencies: `windeployqt build-release
elease\smartVac.exe`

#### Instructions

1. After starting the application, the homepage will display the device status and control panel
2. Click the "EN" button in the top-left corner to switch the interface language to English
3. You can access different functional modules through the top navigation bar:
   - Data Curve: View the changing trends of device operation data
   - Device Image: View device image information
   - Event Alarm: Query system events and alarm records
   - Parameter Calibration: Set and calibrate device parameters
4. In the settings page, you can adjust system parameters and configurations


