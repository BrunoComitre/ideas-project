
export DEBIAN_FRONTEND=noninteractive

sudo dpkg --add-architecture i386
sudo apt-get update
sudo apt-get dist-upgrade -y
sudo apt-get install -y --no-install-recommends libncurses5:i386 libc6:i386 libstdc++6:i386 lib32gcc1 lib32ncurses6 lib32z1 zlib1g:i386
sudo apt-get install -y libqt5dbus5:i386 libqt5widgets5:i386 libqt5network5:i386 libqt5gui5:i386 libqt5core5a:i386 libxcb-xinerama0:i386 libxkbcommon-x11-0 libglu1 libpulse-dev libasound2 libvirt-daemon libx11-6 libx11-xcb1 libssl-dev libxcb1-dev libx11-dev libgl1-mesa-dev libudev-dev libnss3 libxcursor-dev libxcomposite-dev libxcomposite1 libxcursor1 libxi6 libxtst6
sudo apt-get install -y openjdk-8-jdk openjdk-8-jdk-headless gradle git wget curl nano tmux ack-grep
sudo apt-get install -y zip unzip curl socat ant vim build-essential bash iputils-ping chrpath checkinstall tzdata
sudo apt-get install -y qt5-default qtbase5-private-dev qtdeclarative5-dev qtpositioning5-dev qtbase5-dev net-tools
sudo apt-get update 
sudo apt-get install -y --no-install-recommends
sudo apt-get clean
sudo rm -rf /var/lib/apt/lists/*
sudo rm -rf /var/cache/oracle-jdk8-installer
sudo apt-get update
sudo apt-get install -y ca-certificates-java
sudo update-ca-certificates -f
sudo apt-get dist-upgrade -y

export ANDROID_HOME=/opt/local/android-sdk

export GRADLE_HOME=/opt/gradle/gradle-5.0
export PATH=/opt/gradle/gradle-5.0/bin:${PATH}:/opt/local/android-sdk/tools:/opt/local/android-sdk/tools/bin:/opt/local/android-sdk/platform-tools
export GRADLE_USER_HOME=/cache

sudo curl -o gradle.zip -L https://services.gradle.org/distributions/gradle-5.0-bin.zip
sudo unzip -d /opt/gradle gradle.zip
sudo rm gradle.zip

sudo wget https://code.qt.io/cgit/qbs/qbs.git/plain/scripts/install-qt.sh ./
sudo bash install-qt.sh --version 5.12.4 --target android --toolchain android_arm64_v8a qtbase qt3d qtdeclarative qtandroidextras qtconnectivity qtgamepad qtlocation qtmultimedia qtquickcontrols2 qtremoteobjects qtscxml qtsensors qtserialport qtsvg qtimageformats qttools qtspeech qtwebchannel qtwebsockets qtwebview qtxmlpatterns qttranslations
sudo bash install-qt.sh --version 5.12.6 --target android --toolchain android_arm64_v8a qtbase qt3d qtdeclarative qtandroidextras qtconnectivity qtgamepad qtlocation qtmultimedia qtquickcontrols2 qtremoteobjects qtscxml qtsensors qtserialport qtsvg qtimageformats qttools qtspeech qtwebchannel qtwebsockets qtwebview qtxmlpatterns qttranslations

export QTDIR=/opt/Qt/5.12.6/x86

sudo wget https://dl.google.com/android/repository/sdk-tools-linux-4333796.zip -P /tmp 
sudo unzip -d /opt/android /tmp/sdk-tools-linux-4333796.zip

export ANDROID_HOME=/opt/android
export PATH=$PATH:/opt/android/emulator:/opt/android/tools/bin:/opt/android/platform-tools
export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64/

sudo mkdir /root/.android/
sudo touch /root/.android/repositories.cfg

java -version
## altera para a última versão##
sudo update-alternatives --config java

cd /opt/android/tools/bin/

sudo ./sdkmanager --licenses

# sudo cd /opt/android/licenses
# sudo echo 8933bad161af4178b1185d1a37fbf41ea5269c55 > /opt/android/licenses/android-sdk-license
# sudo echo d56f5187479451eabf01fb78af6dfcb131a6481e >> /opt/android/licenses/android-sdk-license
# sudo echo 24333f8a63b6825ea9c5514f83c2829b004d1fee >> /opt/android/licenses/android-sdk-license
# sudo echo 84831b9409646a918e30573bab4c9c91346d8abd > /opt/android/licenses/android-sdk-preview-license
  
sudo ./sdkmanager platform-tools emulator tools
sudo ./sdkmanager "system-images;android-28;google_apis;x86_64"
sudo ./sdkmanager "extras;android;m2repository"
sudo ./sdkmanager "extras;google;m2repository"
sudo ./sdkmanager "platforms;android-28"
sudo ./sdkmanager "build-tools;28.0.3"

sudo ./avdmanager --verbose create avd --force --name "android_one" --device "pixel" --package "system-images;android-28;google_apis;x86_64" --tag "google_apis" --abi "x86_64"

export ENV LD_LIBRARY_PATH=/opt/android/emulator/lib64:/opt/android/emulator/lib64/qt/lib

##acessar /opt/android/tools##
sudo ./emulator -avd "android_one" -verbose -no-boot-anim -noaudio -camera-back none -camera-front none -no-snapshot-save -wipe-data -no-window -gpu off
